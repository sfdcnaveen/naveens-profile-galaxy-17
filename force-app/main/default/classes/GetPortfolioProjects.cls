public with sharing class GetPortfolioProjects {
    
    @InvocableMethod(label='Get Portfolio Projects' description='Returns a list of all portfolio projects and their details.')
    public static List<String> getProjects(List<String> inputs) {
        List<Portfolio_Project__c> projects = [SELECT Title__c, Description__c, Tech_Stack__c, Live_Link__c, GitHub_Link__c FROM Portfolio_Project__c];
        
        if (projects.isEmpty()) {
            return new List<String>{'No projects found.'};
        }
        
        String result = 'Here are Naveen\'s projects:\n\n';
        for (Portfolio_Project__c p : projects) {
            result += 'Title: ' + p.Title__c + '\n';
            result += 'Description: ' + p.Description__c + '\n';
            result += 'Tech Stack: ' + p.Tech_Stack__c + '\n';
            if (p.Live_Link__c != null) {
                result += 'Live Link: ' + p.Live_Link__c + '\n';
            }
            if (p.GitHub_Link__c != null) {
                result += 'GitHub Link: ' + p.GitHub_Link__c + '\n';
            }
            result += '\n';
        }
        
        return new List<String>{result};
    }
}
