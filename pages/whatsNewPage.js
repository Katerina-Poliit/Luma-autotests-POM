import { HomePage } from "./homePage";
import MenHoddiesSweatshirtsPage from "./menHoddiesSweatshirtsPage";
import MenJacketsPage from "./menJacketsPage";
import WomenBrassTanksPage from "./womenBrassTanksPage";
import WomenHoodiesSweatshirtsPage from "./womenHoodiesSweatshirtsPage";
import WomenJacketsPage from "./womenJacketsPage";
import WomenPanstPage from "./womenPantsPage";
import WomenShortsPage from "./womenShortsPage";
import WomenTeesPage from "./womenTeesPage";

export class WhatsNewPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('What\'s New').getByText('What\'s New');
		  this.homeBreadcrumbs = page.getByRole('link', { name: 'Home' });
		  this.newInWomensSection = page.getByText('Hoodies & Sweatshirts Jackets Tees Bras & Tanks Pants Shorts');
		  this.newInWomensSectionHeader = page.getByText('New in women\'s');
		  this.hoodiesSweatshirtsLink = page.getByRole('link', { name: 'Hoodies & Sweatshirts' }).first();
		  this.jacketsLink = page.getByRole('link', { name: 'Jackets' }).first();
		  this.teesLink = page.getByRole('link', { name: 'Tees' }).first();
		  this.brasTanksLink = page.getByRole('link', { name: 'Bras & Tanks' });
		  this.pantsLink = page.getByRole('link', { name: 'Pants' }).first();
		  this.shortsLink = page.getByRole('link', { name: 'Shorts' }).first();
		  this.newInMensSection = page.getByText('Hoodies & Sweatshirts Jackets Tees Tanks Pants Shorts');
		  this.newInWomensSectionHeading = page.getByText('New in men\'s');
		  this.menHoodiesSweatshirtsLink = page.getByRole('link', { name: 'Hoodies & Sweatshirts' }).nth(1);
		  this.menJacketsLink = page.getByRole('link', { name: 'Jackets' }).nth(1);

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

	async clickBrasTanksLink() {
		await this.brasTanksLink.click();
		return new WomenBrassTanksPage(this.page);
	}

	async clickPantsLink() {
		await this.pantsLink.click();
		return new WomenPanstPage(this.page);
	}

	async clickShortsLink() {
		await this.shortsLink.click();
		return new WomenShortsPage(this.page);
	}

	async clickMenHoodiesSweatshirtsLink() {
		await this.menHoodiesSweatshirtsLink.click();
		return new MenHoddiesSweatshirtsPage(this.page);
	}

	async clickMenJacketsLink() {
		await this.menJacketsLink.click();
		return new MenJacketsPage(this.page);
	}

}