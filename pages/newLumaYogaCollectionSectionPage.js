export class NewLumaYogaCollectionSectionPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Items 1-12 of').getByText('New Luma Yoga Collection');

   }

}