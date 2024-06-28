export default class WomenPanstPage {

    constructor (page) {

        this.page = page;
        this.headingPanstPage = page.getByLabel('Items 1-12 of').getByText('Pants');
		  this.pantsBreadcrumbs = page.locator('strong').filter({ hasText: 'Pants' })

    }
}