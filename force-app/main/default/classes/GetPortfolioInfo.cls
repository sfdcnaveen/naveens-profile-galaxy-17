public with sharing class GetPortfolioInfo {

    @InvocableMethod(label='Get Portfolio Info' description='Returns Naveen\'s LinkedIn URL, Resume URL, and Daily Steps.')
    public static List<String> getInfo(List<String> inputs) {
        List<Portfolio_Settings__mdt> settings = [SELECT LinkedIn_URL__c, Resume_URL__c, GitHub_URL__c, Total_GitHub_Repos__c, Daily_Steps__c FROM Portfolio_Settings__mdt LIMIT 1];
        
        if (settings.isEmpty()) {
            return new List<String>{'No portfolio settings found.'};
        }
        
        Portfolio_Settings__mdt setting = settings[0];
        
        String result = 'Here is the requested information:\n';
        result += 'LinkedIn URL: ' + setting.LinkedIn_URL__c + '\n';
        result += 'Resume URL: ' + setting.Resume_URL__c + '\n';
        result += 'GitHub URL: ' + setting.GitHub_URL__c + '\n';
        result += 'Total GitHub Repos: ' + setting.Total_GitHub_Repos__c + '\n';
        result += 'Daily Steps: ' + setting.Daily_Steps__c + '\n';
        
        return new List<String>{result};
    }
}
