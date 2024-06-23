export default class SearchtermsPage {
    constructor (page) {
        this.page = page;

        this.searchTermsHeading = page.getByText('Popular Search Terms');
        this.searchTerms = page.locator('.search-terms')
    }

    async getSearchTerms() {
        return this.searchTerms;
    }
}