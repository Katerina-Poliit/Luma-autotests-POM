export class SearchResultPageWithResults {

   constructor(page) {

        this.page = page;

        this.relatedSearchTerms = page.getByText('Related search terms Short')
		  this.searchResults = page.getByRole('heading', { name: 'Search results for: \'short\'' }).locator('span');
		  this.searchResultNegative = page.getByRole('heading', { name: 'Search results for: \'sss\'' }).locator('span');
		  this.noResultsMessage = page.getByText('Your search returned no');

   }

	async getRelatedSearchTermsText() {
		return this.relatedSearchTerms.allTextContents();
  }

}