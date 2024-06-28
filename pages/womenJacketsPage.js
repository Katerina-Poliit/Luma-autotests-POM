export default class WomenJacketsPage {

    constructor (page) {

        this.page = page;
        this.headingJacketsPage = page.getByLabel('Items');
		  this.jacketsBreadcrumbs = page.locator('strong').filter({ hasText: 'Jackets' });

    }
}