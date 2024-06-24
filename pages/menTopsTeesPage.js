export default class MenTopsTeesPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Tees');
    }
}