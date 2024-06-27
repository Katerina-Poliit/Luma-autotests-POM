export default class WomenHoodiesSweatshirtsPage{
    constructor (page) {
        this.page = page;
		this.headingPage = page.getByLabel('Items').getByText('Hoodies & Sweatshirts');
    }
}