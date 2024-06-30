export default class CompareProductsPage {

	constructor (page) {

		 this.page = page;
		 this.headingCompareProductsPage = page.getByRole('heading', { name: 'Compare Products' }).locator('span');

	}
}