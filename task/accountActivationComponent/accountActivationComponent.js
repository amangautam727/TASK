import { LightningElement, api, track } from 'lwc';
import activateAccount from '@salesforce/apex/AccountActivationController.activateAccountApex';

export default class AccountActivationLWC extends LightningElement {
    @api recordId; // Current Account's Id
    @track accountActivationSummary = '';
    
    activateAccount() {
        // Validate input before proceeding
        if (this.accountActivationSummary) {
            activateAccount({ accountId: this.recordId, activationSummary: this.accountActivationSummary })
                .then(result => {
                    // Handle success, show a toast, etc.
                    this.accountActivationSummary = ''; // Clear input field
                })
                .catch(error => {
                    // Handle error
                });
        } else {
            // Show an error message that input is required
        }
    }
}