export class SearchField {

   constructor(page) {

        this.page = page;

		  this.searchField = page.getByPlaceholder('Search entire store here...');

   }

}