export default class MenBottomsPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items 1-12 of').getByText('Bottoms');
    }
}