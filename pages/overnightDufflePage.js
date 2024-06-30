export default class OvernightDufflePage {

	constructor (page) {

		 this.page = page;
		 this.headingOvernightDufflePage = page.getByRole('heading', { name: 'Overnight Duffle' }).locator('span');
		 this.overnightDuffleBreadcrumbs = page.locator('li').filter({ hasText: 'Overnight Duffle' }).getByRole('strong');

	}
}