export default class MenBottomsShortsPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Shorts');

    }
}