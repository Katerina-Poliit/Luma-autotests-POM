import MyWishListPage from "./myWishListPage";

export class CustomerLoginPage {

   constructor(page) {

        this.page = page;

        this.pageHeader = page.getByText('Customer Login');
		  this.emailField = page.getByLabel('Email', { exact: true });
		  this.passwordField = page.getByLabel('Password');
		  this.signInBtn = page.getByRole('button', { name: 'Sign In' });
   }

	async fillEmailField() {
		await this.emailField.fill('johnLennon@gmail.com');
		return this;
	}

	async fillPasswordField() {
		await this.passwordField.fill('Jonny1940!');
		return this;
	}

	async clickSignInBtn() {
		await this.signInBtn.click();
		return new MyWishListPage(this.page)
	}

}