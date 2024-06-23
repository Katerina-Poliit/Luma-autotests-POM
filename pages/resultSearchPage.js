export default class ResultSearchPage {
    constructor (page) {
        this.page = page;
        this.validMessage= page.getByText('1 item were found using the');
        this.notValidMessage = page.getByText('We can\'t find any items');
        this.breadcrmsCatalog = page.getByRole('link', { name: 'Catalog Advanced Search' });
        this.breadcrmsHome = page.getByRole('link', { name: 'Home' });
    }

    async clickbreadcrmsCatalog() {
		await this.breadcrmsCatalog.click();

	}

    async clickbreadcrmsHome() {
		await this.breadcrmsHome.click();

	}


}