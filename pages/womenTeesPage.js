export default class WomenTeesPage {

    constructor (page) {

        this.page = page;
        this.headingTessPage = page.getByLabel('Items').getByText('Tees');
		  this.teesBreadcrumbs = page.locator('strong').filter({ hasText: 'Tees' });

    }
}