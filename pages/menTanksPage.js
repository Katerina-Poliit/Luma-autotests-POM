export default class MenTanksPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Tanks');
    }
}