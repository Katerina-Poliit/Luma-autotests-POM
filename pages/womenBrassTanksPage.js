export default class WomenBrassTanksPage {

    constructor (page) {

        this.page = page;
        this.headingBrassTanksPage = page.getByLabel('Items 1-12 of').getByText('Bras & Tanks');
		  this.brassTanksBreadcrumbs = page.locator('strong').filter({ hasText: 'Bras & Tanks' })

    }
}