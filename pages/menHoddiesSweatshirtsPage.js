export default class MenHoddiesSweatshirtsPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items 1-12 of').getByText('Hoodies & Sweatshirts');
    }
}