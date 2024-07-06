import {WHATS_NEW_URL} from "../helpers/testDataHomePage"
export default class MyWishListPage {

	constructor (page) {

		 this.page = page;
		 this.headingMyWishListPage = page.locator('span').filter({ hasText: 'My Wish List' });
		 this.productNameLink = page.locator('#item_6565').getByText('Overnight Duffle');
		 this.addedProductMessage = page.getByRole('alert').locator('div').first();
	}

	async openWhatsNewPage() {
		await this.page.goto(WHATS_NEW_URL);
	}
}