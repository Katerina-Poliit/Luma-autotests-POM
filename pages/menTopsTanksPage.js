export default class MenTopsTanksPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Tanks');
    }
}