public with sharing class VisitorNotificationService {

    public class NotificationRequest {
        @InvocableVariable(label='Visitor Name' required=true)
        public String visitorName;
        
        @InvocableVariable(label='Visitor Email' required=true)
        public String visitorEmail;
        
        @InvocableVariable(label='Message' required=true)
        public String message;
    }

    @InvocableMethod(label='Notify Naveen' description='Sends a custom notification or Slack message when a visitor wants to reach out.')
    public static void notifyNaveen(List<NotificationRequest> requests) {
        if(requests.isEmpty()) return;
        
        NotificationRequest req = requests[0];
        
        // 1. You can configure Custom Notification Type in Setup to push to the Salesforce Mobile App
        try {
            CustomNotificationType notificationType = [
                SELECT Id, DeveloperName 
                FROM CustomNotificationType 
                WHERE DeveloperName = 'Portfolio_Reach_Out' 
                LIMIT 1
            ];
            
            Messaging.CustomNotification notification = new Messaging.CustomNotification();
            notification.setTitle('New Portfolio Message from ' + req.visitorName);
            notification.setBody(req.visitorEmail + ' says: ' + req.message);
            notification.setNotificationTypeId(notificationType.Id);
            notification.setTargetId(UserInfo.getUserId());
            
            notification.send(new Set<String> { UserInfo.getUserId() });
        } catch (Exception e) {
            System.debug('Custom Notification Type not found. Please create "Portfolio_Reach_Out" in Setup.');
        }
        
        // 2. Future expansion: Make an HTTP Callout to a Slack Webhook here.
        // Http http = new Http();
        // HttpRequest request = new HttpRequest();
        // request.setEndpoint('callout:Slack_Webhook');
        // request.setMethod('POST');
        // request.setBody('{"text":"New message from ' + req.visitorName + ': ' + req.message + '"}');
        // http.send(request);
    }
}
