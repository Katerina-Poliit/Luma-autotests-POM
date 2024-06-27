export default class WomenTeesPage {
    constructor (page) {
        this.page = page;
        this.headingTessPage = page.getByLabel('Items');
    }
}