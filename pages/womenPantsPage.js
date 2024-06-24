export default class WomenPanstPage {
    constructor (page) {
        this.page = page;
        this.heading = page.getByLabel('Items 1-12 of').getByText('Pants');
    }
}