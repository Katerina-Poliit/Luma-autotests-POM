export default class MenTopsJacketsPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Jackets');
    }
}