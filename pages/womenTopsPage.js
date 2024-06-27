export default class WomenTopsPage {
    constructor (page) {
        this.page = page;
        this.headingPage = page.getByLabel('Items 1-12 of');
    }
}