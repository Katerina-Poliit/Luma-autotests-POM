export default class WomenHoodiesSweatshirtsPage{
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Training').getByText('Training');
		this.headingPage = page.locator('.page-title');
    }
}