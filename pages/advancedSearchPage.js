export default class AndvancedSearchPage {
    constructor (page) {
        this.page = page;
        this.settingsSearch = page.locator('legend');
        this.productNameField = page.getByLabel('Product Name');
        this.SKUField = page.getByLabel('SKU');
        this.descriptionField = page.getByLabel('Description', { exact: true });
    }
}