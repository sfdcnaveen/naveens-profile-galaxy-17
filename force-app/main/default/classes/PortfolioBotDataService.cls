public with sharing class PortfolioBotDataService {
    
    public class BotDataResult {
        @InvocableVariable(label='Projects Summary' description='Summary of Naveen\'s portfolio projects')
        public String projectsSummary;
        
        @InvocableVariable(label='Skills Summary' description='Summary of Naveen\'s skills')
        public String skillsSummary;
        
        @InvocableVariable(label='Experience Summary' description='Summary of Naveen\'s work experience')
        public String experienceSummary;
        
        @InvocableVariable(label='Bio' description='Naveen\'s Bio and Headline')
        public String bio;
    }

    @InvocableMethod(label='Get Portfolio Data' description='Retrieves Naveen\'s portfolio data (Projects, Skills, Experience) to be used by the Einstein Bot.')
    public static List<BotDataResult> getPortfolioData() {
        BotDataResult result = new BotDataResult();
        
        // 1. Get Bio from Portfolio_Settings__mdt
        try {
            Portfolio_Settings__mdt settings = [
                SELECT Full_Name__c, Headline_Title__c, About_Me_Description__c
                FROM Portfolio_Settings__mdt
                WHERE DeveloperName = 'Naveen_Profile'
                LIMIT 1
            ];
            result.bio = settings.Full_Name__c + ' is a ' + settings.Headline_Title__c + '. ' + settings.About_Me_Description__c;
        } catch(Exception e) {
            result.bio = 'Naveen Kumar Pasupuleti is a Salesforce QA & Playwright Expert.';
        }
        
        // 2. Get Skills
        List<Skill__c> skills = [SELECT Name, Category__c FROM Skill__c LIMIT 50];
        String skillStr = '';
        for(Skill__c s : skills) {
            skillStr += s.Name + ' (' + s.Category__c + '), ';
        }
        result.skillsSummary = String.isNotBlank(skillStr) ? skillStr.removeEnd(', ') : 'Salesforce QA, Playwright, LWC, Apex';
        
        // 3. Get Experience
        List<Work_Experience__c> exp = [SELECT Company__c, Role__c, Start_Date__c, End_Date__c FROM Work_Experience__c ORDER BY Start_Date__c DESC LIMIT 5];
        String expStr = '';
        for(Work_Experience__c w : exp) {
            String endDate = w.End_Date__c != null ? String.valueOf(w.End_Date__c) : 'Present';
            expStr += w.Role__c + ' at ' + w.Company__c + ' (' + String.valueOf(w.Start_Date__c) + ' to ' + endDate + '). ';
        }
        result.experienceSummary = String.isNotBlank(expStr) ? expStr : 'TestVagrant Technologies (SDET).';
        
        // 4. Get Projects
        List<Portfolio_Project__c> projects = [SELECT Title__c, Tech_Stack__c FROM Portfolio_Project__c LIMIT 5];
        String projStr = '';
        for(Portfolio_Project__c p : projects) {
            projStr += p.Title__c + ' (Tech: ' + p.Tech_Stack__c + '). ';
        }
        result.projectsSummary = String.isNotBlank(projStr) ? projStr : 'Various Salesforce Automation Frameworks.';
        
        return new List<BotDataResult>{ result };
    }
}
