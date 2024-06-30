import {WHATS_NEW_URL} from "../helpers/testDataHomePage"
export class CreateNewCustomerAccountPage {

   constructor(page) {

        this.page = page;

        this.pageHeader = page.getByText('Create New Customer Account');
        this.firstNameInput = page.getByLabel('First Name');
        this.lastNameInput = page.getByLabel('Last Name');
        this.emailInput = page.getByLabel('Email', { exact: true });
        this.passwordInput = page.getByRole('textbox', { name: 'Password*', exact: true });
        this.confirmPasswordInput = page.getByLabel('Confirm Password');
        this.createAccountBtn = page.getByRole('button', { name: 'Create an Account' });
   }

   async fillForm(firstName, lastName, email, password) {
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.confirmPasswordInput.fill(password);
   }

   async submitForm() {
      await this.createAccountBtn.click();
   }

	async openWhatsNewPage() {
		await this.page.goto(WHATS_NEW_URL);
	}

}