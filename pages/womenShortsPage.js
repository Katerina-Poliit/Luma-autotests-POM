export default class WomenShortsPage {
    constructor (page) {
        this.page = page;
        this.heading = page.getByLabel('Items').getByText('Shorts');
    }
}