export class PerformanceFabricsPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Items 1-12 of').getByText('Performance Fabrics');

   }

}