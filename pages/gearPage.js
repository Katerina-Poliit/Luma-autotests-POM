export class GearPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Gear').getByText('Gear');

   }

}