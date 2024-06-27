export class HoodiesSweatshirtsPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Items').getByText('Hoodies & Sweatshirts');
		  this.hoodiesSweatshirtsBreadcrumbs = page.locator('strong').filter({ hasText: 'Hoodies & Sweatshirts' })

   }

}