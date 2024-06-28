export default class WomenHoodiesSweatshirtsPage{

    constructor (page) {

			this.page = page;
			this.headingHoodiesSweatshirtsPage = page.getByLabel('Items').getByText('Hoodies & Sweatshirts');
			this.hoodiesSweatshirtsBreadcrumbs = page.locator('strong').filter({ hasText: 'Hoodies & Sweatshirts' })

    }
}