public with sharing class AccountActivationController {
    @AuraEnabled
    public static void activateAccountApex(Id accountId, String activationSummary) {
        // Fetch the Account
        Account acc = [SELECT Id, Account_Activation_Summary__c, Active__c FROM Account WHERE Id = :accountId];
        
        // Update Account fields
        acc.Account_Activation_Summary__c = activationSummary;
        acc.Active__c = true; // Mark the Active checkbox as true
        
        update acc;
    }
}