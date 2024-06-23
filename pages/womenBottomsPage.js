export default class WomenBottomsPage {
    constructor (page) {
        this.page = page;
        this.heading = page.locator('#maincontent div').filter({ hasText: 'Bottoms' });
    }
}