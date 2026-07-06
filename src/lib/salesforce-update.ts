import { sfConnection, loginToSalesforce } from './salesforce';

export async function updateDailyStepsInSalesforce(steps: number): Promise<boolean> {
    const isConnected = await loginToSalesforce();
    if (!isConnected) return false;

    try {
        // Since Portfolio_Settings__mdt is a Custom Metadata Type,
        // we have to use the Metadata API to update it.
        const metadata = {
            fullName: 'Portfolio_Settings.Naveen_Profile',
            label: 'Naveen Profile',
            values: [{ field: 'Daily_Steps__c', value: steps }],
        };

        // Note: Updating Custom Metadata via API is considered a deployment in Salesforce.
        // If this fails due to permissions, you might need to use a Custom Object or Custom Setting instead.
        const result = await sfConnection.metadata.update('CustomMetadata', metadata);

        console.log('Salesforce Metadata Update Result:', result);

        // The result might be an array or a single object depending on jsforce version
        const res = Array.isArray(result) ? result[0] : result;
        return res.success === true;
    } catch (error) {
        console.error('Error updating daily steps in Salesforce:', error);
        return false;
    }
}
