import * as jsforce from 'jsforce';
import * as crypto from 'crypto';
import {
    SFProject,
    SFWorkExperience,
    SFSkill,
    SFPortfolioSettings,
    SFCertification,
} from '@/types/salesforce';

// Suppress the Node.js deprecation warning for url.parse() which causes a noisy overlay in Next.js dev mode
if (typeof process !== 'undefined') {
    const originalEmitWarning = process.emitWarning;
    process.emitWarning = function (warning: string | Error, ...args: unknown[]) {
        if (typeof warning === 'string' && warning.includes('url.parse')) {
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return originalEmitWarning.call(process, warning, ...(args as any));
    };
}

// Avoid initializing connection multiple times in Next.js development
const globalForSF = global as unknown as { sfConnection: jsforce.Connection };

export const sfConnection =
    globalForSF.sfConnection ||
    new jsforce.Connection({
        loginUrl: process.env.SF_LOGIN_URL || 'https://login.salesforce.com',
        version: '58.0',
    });

if (process.env.NODE_ENV !== 'production') globalForSF.sfConnection = sfConnection;

function base64url(str: string | Buffer): string {
    if (typeof str === 'string') {
        return Buffer.from(str)
            .toString('base64')
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    }
    return str.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export async function loginToSalesforce() {
    if (sfConnection.accessToken) {
        return true; // Already connected
    }

    const username = process.env.SF_USERNAME;
    const clientId = process.env.SF_CLIENT_ID;
    const privateKey = process.env.SF_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const loginUrl = process.env.SF_LOGIN_URL || 'https://login.salesforce.com';

    if (!username || !clientId || !privateKey) {
        console.warn(
            'Salesforce OAuth credentials not found in environment variables. Returning mock data or failing gracefully.'
        );
        return false;
    }

    try {
        const header = { alg: 'RS256', typ: 'JWT' };
        const claim = {
            iss: clientId,
            aud: loginUrl,
            sub: username,
            exp: Math.floor(Date.now() / 1000) + 3 * 60,
        };

        const encodedHeader = base64url(JSON.stringify(header));
        const encodedClaim = base64url(JSON.stringify(claim));
        const tokenInput = `${encodedHeader}.${encodedClaim}`;

        const sign = crypto.createSign('RSA-SHA256');
        sign.update(tokenInput);
        sign.end();
        const signature = base64url(sign.sign(privateKey));

        const token = `${tokenInput}.${signature}`;

        const params = new URLSearchParams();
        params.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
        params.append('assertion', token);

        const res = await fetch(`${loginUrl}/services/oauth2/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString(),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(
                `Failed to authenticate with JWT: ${data.error_description || data.error}`
            );
        }

        sfConnection.accessToken = data.access_token;
        sfConnection.instanceUrl = data.instance_url;

        console.log('Successfully connected to Salesforce using JWT Bearer Flow!');
        return true;
    } catch (err) {
        console.error('Failed to connect to Salesforce:', err);
        return false;
    }
}

// Example specific data fetching functions:

export async function getProjects(): Promise<SFProject[]> {
    const isConnected = await loginToSalesforce();
    if (!isConnected) return []; // Fallback to empty array or mock data

    try {
        const result = await sfConnection.query(
            'SELECT Id, Title__c, Description__c, Image_URL__c, Tech_Stack__c, Live_Link__c, GitHub_Link__c FROM Portfolio_Project__c ORDER BY Order__c ASC NULLS LAST'
        );
        return result.records as unknown as SFProject[];
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

export async function getWorkExperience(): Promise<SFWorkExperience[]> {
    const isConnected = await loginToSalesforce();
    if (!isConnected) return [];

    try {
        const result = await sfConnection.query(
            'SELECT Id, Company__c, Role__c, Start_Date__c, End_Date__c, Description__c FROM Work_Experience__c ORDER BY Start_Date__c DESC'
        );
        return result.records as unknown as SFWorkExperience[];
    } catch (error) {
        console.error('Error fetching work experience:', error);
        return [];
    }
}

export async function getSkills(): Promise<SFSkill[]> {
    const isConnected = await loginToSalesforce();
    if (!isConnected) return [];

    try {
        const result = await sfConnection.query(
            'SELECT Id, Name, Category__c, Description__c FROM Skill__c'
        );
        return result.records as unknown as SFSkill[];
    } catch (error) {
        console.error('Error fetching skills:', error);
        return [];
    }
}

export async function getPortfolioSettings(): Promise<SFPortfolioSettings | null> {
    const isConnected = await loginToSalesforce();
    if (!isConnected) return null;

    try {
        const result = await sfConnection.query(
            "SELECT Id, Full_Name__c, Headline_Title__c, Current_Company__c, Location__c, About_Me_Description__c, Side_Note_Title__c, Side_Note_Description__c, Years_of_Experience__c, Total_Certifications__c, Total_GitHub_Repos__c, LinkedIn_URL__c, GitHub_URL__c, Email_Address__c, Testimonial_Quote__c, Testimonial_Author__c, Testimonial_Role__c, Testimonial_Company__c, Resume_URL__c FROM Portfolio_Settings__mdt WHERE DeveloperName = 'Naveen_Profile' LIMIT 1"
        );
        if (result.records && result.records.length > 0) {
            return result.records[0] as unknown as SFPortfolioSettings;
        }
        return null;
    } catch (error) {
        console.error('Error fetching portfolio settings:', error);
        return null;
    }
}

export async function getCertifications(): Promise<SFCertification[]> {
    const isConnected = await loginToSalesforce();
    if (!isConnected) return [];

    try {
        const result = await sfConnection.query(
            'SELECT Id, MasterLabel, Issue_Date__c FROM Certification__mdt ORDER BY Order__c ASC NULLS LAST'
        );
        const records = result.records as unknown as Array<{
            Id: string;
            MasterLabel: string;
            Issue_Date__c: string;
        }>;
        return records.map((record) => ({
            Id: record.Id,
            Name: record.MasterLabel,
            Issue_Date__c: record.Issue_Date__c,
        })) as SFCertification[];
    } catch (error) {
        console.error('Error fetching certifications:', error);
        return [];
    }
}
