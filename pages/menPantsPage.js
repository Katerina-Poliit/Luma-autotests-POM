export default class MenPantsPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Pants');

    }
}