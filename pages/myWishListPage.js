import {WHATS_NEW_URL} from "../helpers/testDataHomePage"
export default class MyWishListPage {

	constructor (page) {

		 this.page = page;
		//  this.headingPantsPage = page.getByLabel('Items').getByText('Pants');

	}

	async openWhatsNewPage() {
		await this.page.goto(WHATS_NEW_URL);
	}
}