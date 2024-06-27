export default class MenShortsPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Shorts');

    }
}