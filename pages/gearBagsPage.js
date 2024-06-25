export default class GearBagsPage {
    constructor (page) {
        this.page = page;
        this.header = page.locator('#maincontent div').filter({ hasText: 'Bags' });

    }
}