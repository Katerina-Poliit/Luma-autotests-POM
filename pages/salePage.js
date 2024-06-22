export class SalePage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Sale').getByText('Sale');

   }

}