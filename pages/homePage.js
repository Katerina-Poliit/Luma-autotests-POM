import { CreateNewCustomerAccountPage } from "./createNewCustomerAccountPage";
import { CustomerLoginPage } from "./customerLoginPage";

export class HomePage {

   constructor(page) {

        this.page = page;
      //----------------------------- Header -----------------------------------------------------------

        this.headerSection = page.getByText('Toggle Nav My Cart My Cart');
		  this.storeLogo = page.getByLabel('store logo');
		  this.signInlink = page.getByRole('link', { name: 'Sign In' });
		  this.createAnAccountLink = page.getByRole('banner').getByRole('link', { name: 'Create an Account' });
		  this.searchField = page.getByPlaceholder('Search entire store here...');
		  this.searchBtn = page.locator("button[title='Search']");



		//----------------------------- Footer -----------------------------------------------------------



   }

	async open() {
		await this.page.goto("/");
	}

	async clickLogo() {
		await this.storeLogo.click();
	}

	async clickSignInLink() {
		await this.signInlink.click();
		return new CustomerLoginPage(this.page)
	}

	async clickCreateAnAccountLink() {
		await this.createAnAccountLink.click();
		return new CreateNewCustomerAccountPage(this.page)
	}

	async fillSearchField() {
		await this.searchField.fill('a');
	}

	async cleanSearchField() {
		await this.searchField.fill('');
	}

	async clickSearchField() {
		await this.searchField.click();
	}

}