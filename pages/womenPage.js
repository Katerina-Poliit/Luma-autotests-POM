export class WomenPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Women').getByText('Women');
        this.filterBlock = page.locator('.filter');
        this.categoryTopsLink = page.getByRole('link', { name: 'Tops' });
        this.categoryTopsCount = page.getByText('50', { exact: true });


   }

}