export default class GearWatchesPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Watches');
    }
}