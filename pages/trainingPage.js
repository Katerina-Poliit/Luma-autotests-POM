export class TrainingPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Training').getByText('Training');

   }

}