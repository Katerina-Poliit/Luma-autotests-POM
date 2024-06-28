export default class MenPantsPage {

    constructor (page) {

        this.page = page;
        this.headingPantsPage = page.getByLabel('Items').getByText('Pants');
		  this.pantsBreadcrumbs = page.locator('strong').filter({ hasText: 'Pants' });

    }
}