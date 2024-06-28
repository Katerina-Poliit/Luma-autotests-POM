export default class MenTeesPage {

    constructor (page) {

        this.page = page;
        this.headingTeesPage = page.getByLabel('Items').getByText('Tees');
		  this.teesBreadcrumbs = page.locator('strong').filter({ hasText: 'Tees' });

    }
}