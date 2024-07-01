export default class PerformanceSportswearNewPage {

	constructor (page) {

		 this.page = page;
		 this.headingPerformanceSportswearNewPage = page.getByLabel('Performance Sportswear New').getByText('Performance Sportswear New');
		 this.performanceSportswearNewPageBreadcrumbs = page.locator('strong').filter({ hasText: 'Performance Sportswear New' });

	}
}