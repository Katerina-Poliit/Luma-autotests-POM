import { HomePage } from "./homePage";

export class WhatsNewPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('What\'s New').getByText('What\'s New');
		  this.homeBreadcrumbs = page.getByRole('link', { name: 'Home' });
		  this.newInWomansSection = page.getByText('Hoodies & Sweatshirts Jackets Tees Bras & Tanks Pants Shorts');
		  this.newInWomansSectionHeader = page.getByText('New in women\'s');
		  this.hoodiesSweatshirtsLink = page.getByRole('link', { name: 'Hoodies & Sweatshirts' }).first()

   }

	async clickhomeBreadcrumbs() {
		await this.homeBreadcrumbs.click();
		return new HomePage(this.page);
	}

}