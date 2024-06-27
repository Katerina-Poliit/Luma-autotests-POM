export class JacketsPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Items').getByText('Jackets');
		  this.jacketsBreadcrumbs = page.locator('strong').filter({ hasText: 'Jackets' });

   }

}