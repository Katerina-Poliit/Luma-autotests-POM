import { HomePage } from "./homePage";
import { HoodiesSweatshirtsPage } from "./hoodiesSweatshirtPage";
import { JacketsPage } from "./jacketsPage";

export class WhatsNewPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('What\'s New').getByText('What\'s New');
		  this.homeBreadcrumbs = page.getByRole('link', { name: 'Home' });
		  this.newInWomansSection = page.getByText('Hoodies & Sweatshirts Jackets Tees Bras & Tanks Pants Shorts');
		  this.newInWomansSectionHeader = page.getByText('New in women\'s');
		  this.hoodiesSweatshirtsLink = page.getByRole('link', { name: 'Hoodies & Sweatshirts' }).first();
		  this.jacketsLink = page.getByRole('link', { name: 'Jackets' }).first();
		  this.teesLink = page.getByRole('link', { name: 'Tees' }).first();

   }

	async clickHomeBreadcrumbs() {
		await this.homeBreadcrumbs.click();
		return new HomePage(this.page);
	}

	async clickHoodiesSweatshirtsLink() {
		await this.hoodiesSweatshirtsLink.click();
		return new HoodiesSweatshirtsPage(this.page);
	}

	async clickJacketsLink() {
		await this.jacketsLink.click();
		return new JacketsPage(this.page);
	}

}