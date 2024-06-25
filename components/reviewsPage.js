export default class ReviewsPage {
    constructor (page) {
        this.page = page;
        this.reviewsBlock = page.getByLabel('Reviews');
    }
}