export class RadiantTeePage {

   constructor(page) {

        this.page = page;

		  this.breadcrumbs = page.locator('li').filter({ hasText: 'Radiant Tee' }).getByRole('strong');

   }

}