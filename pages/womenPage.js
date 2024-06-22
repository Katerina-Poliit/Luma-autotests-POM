export class WomenPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Women').getByText('Women');

   }

}