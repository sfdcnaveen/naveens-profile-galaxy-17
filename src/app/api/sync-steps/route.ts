import { NextResponse } from 'next/server';
import { getDailySteps } from '@/lib/fitbit';
import { updateDailyStepsInSalesforce } from '@/lib/salesforce-update';

export async function GET() {
    try {
        console.log('Fetching steps from Fitbit API...');
        const steps = await getDailySteps();

        console.log(`Fetched ${steps} steps. Updating Salesforce...`);
        const success = await updateDailyStepsInSalesforce(steps);

        if (success) {
            return NextResponse.json({ success: true, steps });
        } else {
            return NextResponse.json(
                { success: false, error: 'Failed to update Salesforce metadata.' },
                { status: 500 }
            );
        }
    } catch (error: unknown) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { success: false, error: (error as Error).message || 'Unknown error' },
            { status: 500 }
        );
    }
}
