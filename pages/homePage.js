export class HomePage {

    constructor(page) {

        this.page = page;

        this.headerSection = page.getByText('Toggle Nav My Cart My Cart');
		  this.storeLogo = page.getByLabel('store logo');

    }

	 async open() {
		await this.page.goto("/");
	}

   //  async clickOnLoginLink() {
   //      await this.loginLink_cssLocator.click();
   //  }

}