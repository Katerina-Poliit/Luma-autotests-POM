import {WHATS_NEW_URL} from "../helpers/testDataHomePage"
export default class MyWishListPage {

	constructor (page) {

		 this.page = page;
		 this.headingMyWishListPage = page.locator('span').filter({ hasText: 'My Wish List' });

	}

	async openWhatsNewPage() {
		await this.page.goto(WHATS_NEW_URL);
	}
}