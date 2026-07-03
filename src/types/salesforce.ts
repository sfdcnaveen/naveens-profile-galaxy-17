export interface SFProject {
    Id: string;
    Title__c: string;
    Description__c: string;
    Image_URL__c: string;
    Tech_Stack__c: string;
    Live_Link__c: string;
    GitHub_Link__c: string;
}

export interface SFWorkExperience {
    Id: string;
    Company__c: string;
    Role__c: string;
    Start_Date__c: string;
    End_Date__c: string;
    Description__c: string;
}

export interface SFSkill {
    Id: string;
    Name: string;
    Category__c: string;
    Description__c?: string;
}

export interface SFPortfolioSettings {
    Id: string;
    Full_Name__c: string;
    Headline_Title__c: string;
    Current_Company__c: string;
    Location__c: string;
    About_Me_Description__c: string;
    Side_Note_Title__c: string;
    Side_Note_Description__c: string;
    Years_of_Experience__c: number;
    Total_Certifications__c: number;
    Total_GitHub_Repos__c: number;
    LinkedIn_URL__c: string;
    GitHub_URL__c: string;
    Email_Address__c: string;
    Testimonial_Quote__c: string;
    Testimonial_Author__c: string;
    Testimonial_Role__c: string;
    Testimonial_Company__c: string;
    Resume_URL__c: string;
    Daily_Steps__c?: number;
}

export interface SFCertification {
    Id: string;
    Name: string;
    Issue_Date__c: string;
}
