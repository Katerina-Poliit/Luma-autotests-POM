export default class MenJacketsPage {

    constructor (page) {

        this.page = page;
        this.headingJacketsPage = page.getByLabel('Items').getByText('Jackets');
		  this.jacketsBreadcrumbs = page.locator('strong').filter({ hasText: 'Jackets' });

    }
}