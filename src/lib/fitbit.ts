const CLIENT_ID = process.env.FITBIT_CLIENT_ID;
const CLIENT_SECRET = process.env.FITBIT_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.FITBIT_REFRESH_TOKEN;

const TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';

async function getAccessToken() {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: CLIENT_ID!,
            client_secret: CLIENT_SECRET!,
            refresh_token: REFRESH_TOKEN!,
            grant_type: 'refresh_token',
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to refresh Fitbit token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
}

export async function getDailySteps(): Promise<number> {
    try {
        const accessToken = await getAccessToken();
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        const tomorrowYear = tomorrow.getFullYear();
        const tomorrowMonth = tomorrow.getMonth() + 1;
        const tomorrowDay = tomorrow.getDate();

        // Use the exact CivilDateTime schema for Google Health API dailyRollUp
        const rollUpResponse = await fetch(
            `https://health.googleapis.com/v4/users/me/dataTypes/steps/dataPoints:dailyRollUp`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    range: {
                        start: {
                            date: { year: year, month: month, day: day },
                            time: { hours: 0, minutes: 0, seconds: 0 },
                        },
                        end: {
                            date: { year: tomorrowYear, month: tomorrowMonth, day: tomorrowDay },
                            time: { hours: 0, minutes: 0, seconds: 0 },
                        },
                    },
                }),
            }
        );

        let steps = 0;
        if (rollUpResponse.ok) {
            const data = await rollUpResponse.json();
            // Google Health returns StepsRollupValue inside rollupDataPoints for dailyRollUp
            if (data.rollupDataPoints && data.rollupDataPoints.length > 0) {
                // Sum up all returned rollup points (if multiple are returned)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                steps = data.rollupDataPoints.reduce((acc: number, point: any) => {
                    if (point.steps) {
                        const count = point.steps.countSum;
                        if (count !== undefined) {
                            return acc + parseInt(count, 10);
                        }
                    }
                    return acc;
                }, 0);
            }

            // If rollUp successfully returned a number, use it and skip manual fallback.
            if (steps > 0) {
                return steps;
            }
        } else {
            console.error('Google Health API dailyRollUp Error:', await rollUpResponse.text());
        }

        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
        const filterString = `steps.interval.start_time >= "${startOfDay}"`;

        let pageToken = '';
        const stepsByMinute: Record<string, number> = {};

        do {
            const url = `https://health.googleapis.com/v4/users/me/dataTypes/steps/dataPoints?filter=${encodeURIComponent(filterString)}${pageToken ? `&pageToken=${pageToken}` : ''}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.error('Google Health API GET Error:', await response.text());
                break;
            }

            const data = await response.json();

            if (data.dataPoints && Array.isArray(data.dataPoints)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data.dataPoints.forEach((point: any) => {
                    if (point.steps && point.steps.count && point.steps.interval) {
                        const civilDate = point.steps.interval.civilStartTime?.date;
                        if (civilDate) {
                            if (
                                civilDate.year !== now.getFullYear() ||
                                civilDate.month !== now.getMonth() + 1 ||
                                civilDate.day !== now.getDate()
                            ) {
                                return;
                            }
                        }
                        const startStr = point.steps.interval.startTime;
                        const endStr = point.steps.interval.endTime;

                        // Calculate duration in minutes
                        const startMs = new Date(startStr).getTime();
                        const endMs = new Date(endStr).getTime();
                        const durationMinutes = (endMs - startMs) / 60000;

                        // FITBIT pushes both granular (1-min) and coarse (hourly/daily) summaries.
                        // If we include daily summaries, we double count the whole day!
                        // Only include granular data points (<= 15 minutes).
                        if (durationMinutes > 15) {
                            return;
                        }

                        const count = parseInt(point.steps.count, 10);

                        // Deduplicate overlapping step recordings for the exact same minute
                        if (!stepsByMinute[startStr] || count > stepsByMinute[startStr]) {
                            stepsByMinute[startStr] = count;
                        }
                    }
                });
            }

            pageToken = data.nextPageToken || '';
        } while (pageToken);

        // Sum up the deduplicated minutes for today
        steps = Object.values(stepsByMinute).reduce((acc, curr) => acc + curr, 0);

        return steps;
    } catch (error) {
        console.error('Error fetching Fitbit steps:', error);
        return 0;
    }
}
