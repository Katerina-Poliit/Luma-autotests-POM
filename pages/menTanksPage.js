export default class MenTanksPage {

    constructor (page) {

        this.page = page;
        this.headingTanksPage = page.getByLabel('Items').getByText('Tanks');
		  this.tanksBreadcrumbs = page.locator('strong').filter({ hasText: 'Tanks' });

    }
}