export default class GearFitnessEquipmentPage {
    constructor (page) {
        this.page = page;
        this.header = page.getByLabel('Items').getByText('Fitness Equipment');

    }
}