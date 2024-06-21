import { CustomerLoginPage } from "./customerLoginPage";

export class HomePage {

   constructor(page) {

        this.page = page;
      //----------------------------- Header -----------------------------------------------------------

        this.headerSection = page.getByText('Toggle Nav My Cart My Cart');
		  this.storeLogo = page.getByLabel('store logo');
		  this.signInlink = page.getByRole('link', { name: 'Sign In' });



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

}