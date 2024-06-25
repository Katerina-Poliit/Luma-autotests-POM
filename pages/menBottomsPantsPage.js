export default class MenBottomsPantsPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Pants');

    }
}