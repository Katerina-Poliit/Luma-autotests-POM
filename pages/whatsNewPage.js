import { HomePage } from "./homePage";
import WomenHoodiesSweatshirtsPage from "./womenHoodiesSweatshirtsPage";
import WomenJacketsPage from "./womenJacketsPage";
import WomenTeesPage from "./womenTeesPage";

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
		return new WomenHoodiesSweatshirtsPage(this.page);
	}

	async clickJacketsLink() {
		await this.jacketsLink.click();
		return new WomenJacketsPage(this.page);
	}

	async clickTeesLink() {
		await this.teesLink.click();
		return new WomenTeesPage(this.page);
	}

}