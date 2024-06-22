export class MenPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Men').getByText('Men');

   }

}