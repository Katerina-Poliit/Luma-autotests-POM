export default class MenShortsPage {

    constructor (page) {

        this.page = page;
        this.headingShortsPage = page.getByLabel('Items').getByText('Shorts');
		  this.shortsBreadcrumbs = page.locator('strong').filter({ hasText: 'Shorts' });

    }
}