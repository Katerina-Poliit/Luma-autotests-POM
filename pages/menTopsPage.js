export default class MenTopsPage {
    constructor (page) {
        this.page = page;
        this.header = page.locator('#maincontent div').filter({ hasText: 'Tops' });
    }
}