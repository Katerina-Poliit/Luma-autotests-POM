import ResultSearchPage from "./resultSearchPage";

export default class AndvancedSearchPage {
    constructor (page) {
        this.page = page;
        this.settingsSearch = page.locator('legend');
        this.productNameField = page.getByLabel('Product Name');
        this.SKUField = page.getByLabel('SKU');
        this.descriptionField = page.getByLabel('Description', { exact: true });
        this.shortDescriptionField = page.getByLabel('Short Description');
        this.priceField = page.getByLabel('Price');
        this.USDField = page.getByLabel('USD');
        this.searchBtn = page.locator('#form-validate').getByRole('button', { name: 'Search' });
    }

    async fillSKUField() {
		await this.SKUField.fill('WJ12');
		return this;
	}

    async fillnotValidSKUField() {
		await this.SKUField.fill('WJ125');
		return this;
	}

    async clicksearchBtn() {
		await this.searchBtn.click();
		return new ResultSearchPage(this.page);
	}
}