export default class EcoCollectionNewPage {

	constructor (page) {

		 this.page = page;
		 this.headingEcoCollectionPage = page.getByLabel('Eco Collection New').getByText('Eco Collection New');
		 this.ecoCollectionPageBreadcrumbs = page.locator('strong').filter({ hasText: 'Eco Collection New' });

	}
}