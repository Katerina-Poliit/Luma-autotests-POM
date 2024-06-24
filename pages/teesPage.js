export class TeesPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Items').getByText('Tees');

   }

}