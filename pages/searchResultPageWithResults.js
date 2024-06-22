export class SearchResultPageWithResults {

   constructor(page) {

        this.page = page;

        this.relatedSearchTerms = page.getByText('Related search terms Short')
		  this.searchResults = page.getByRole('heading', { name: 'Search results for: \'short\'' }).locator('span');

   }

	async getRelatedSearchTermsText() {
		return this.relatedSearchTerms.allTextContents();
  }

}