import { ORDERS_AND_RETURNS_PAGE_FIELDS } from "../helpers/testDataFooterPage";
export default class OrdersReturnsPage {
    constructor(page) {
        this.page = page;
        this.ordersAndReturnsPageFields = page.locator('.fieldset .label');
        this.continueBtn = page.getByRole('button', { name: 'Continue' });
    }

    async getFilteredFields() {
        const fields = await this.ordersAndReturnsPageFields.all();
        return fields.filter(async (label) => {
            const textContent = await label.textContent();
            return ORDERS_AND_RETURNS_PAGE_FIELDS.includes(textContent.trim());
        });


}
}
