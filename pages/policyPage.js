export default class PolicyPage {
    constructor (page) {
        this.page = page;

        this.navigationMenu = page.locator('#privacy-policy-nav-content')
    }

    async clicknavigationMenu() {
		await this.navigationMenu.click();
		return this;
	}


}