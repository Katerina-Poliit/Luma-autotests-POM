export default class MenHoddiesSweatshirtsPage {

    constructor (page) {

        this.page = page;
        this.headingHoddiesSweatshirtsPage = page.getByLabel('Items 1-12 of').getByText('Hoodies & Sweatshirts');
		  this.hoddiesSweatshirtsBreadcrumbs = page.locator('strong').filter({ hasText: 'Hoodies & Sweatshirts' });

    }
}