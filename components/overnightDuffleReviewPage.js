export default class OvernightDuffleReviewPage {

	constructor (page) {

		 this.page = page;
		 this.reviewsTab = page.getByRole('link', { name: 'Reviews (3) ' });
		 this.reviewsheading = page.getByText('Customer Reviews');

	}

}