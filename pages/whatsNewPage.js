import RemoveModalWindow from "../modalWindows/removeModalWindow";
import CompareProductsPage from "./compareProductsPage";
import { HomePage } from "./homePage";
import MenHoddiesSweatshirtsPage from "./menHoddiesSweatshirtsPage";
import MenJacketsPage from "./menJacketsPage";
import MenPantsPage from "./menPantsPage";
import MenShortsPage from "./menShortsPage";
import MenTanksPage from "./menTanksPage";
import MenTeesPage from "./menTeesPage";
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
		  this.menTeesLink = page.getByRole('link', { name: 'Tees' }).nth(1);
		  this.menTanksLink = page.getByRole('link', { name: 'Tanks', exact: true });
		  this.menPantsLink = page.getByRole('link', { name: 'Pants' }).nth(1);
		  this.menShortsLink = page.getByRole('link', { name: 'Shorts' }).nth(1);
		  this.compareProductsSection = page.getByText('Compare Products You have no');
		  this.compareProductsSectionHeading = page.getByRole('heading', { name: 'Compare Products' });
		  this.compareProductsSectionText = page.getByText('You have no items to compare.');
		  this.productCard = page.locator('li').filter({ hasText: 'Overnight Duffle Rating: 60%' });
		  this.addToCompareIcon = page.getByRole('link', { name: 'Add to Compare' }).nth(1);
		  this.removeThisItemLink = page.getByRole('link', { name: 'Remove This Item' });
		  this.removeModalWindow = page.locator('.modal-inner-wrap').last();
		  this.removedProductMessage = page.getByRole('alert').locator('div').first();
		  this.countAddedItems = page.locator('#maincontent').getByText('1 item');
		  this.clearAllLink = page.getByRole('link', { name: 'Clear All' });
		  this.compareBtn = page.getByRole('link', { name: 'Compare', exact: true });
		  this.myWishListSection = page.getByText('My Wish List Last Added Items');
		  this.myWishListSectionHeading = page.getByRole('heading', { name: 'My Wish List' });
		  this.myWishListSectionText = page.getByText('You have no items in your wish list.');

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

	async clickMenTeesLink() {
		await this.menTeesLink.click();
		return new MenTeesPage(this.page);
	}

	async clickMenTanksLink() {
		await this.menTanksLink.click();
		return new MenTanksPage(this.page);
	}

	async clickMenPantsLink() {
		await this.menPantsLink.click();
		return new MenPantsPage(this.page);
	}

	async clickMenShortsLink() {
		await this.menShortsLink.click();
		return new MenShortsPage(this.page);
	}

	async hoverProductCard() {
		await this.productCard.hover();
	}

	async clickAddToCompareIcon() {
		await this.addToCompareIcon.click();
		return this;
	}

	async clickRemoveThisItemLink() {
		await this.removeThisItemLink.click();
		return new RemoveModalWindow(this.page);
	}

	async clickClearAllLink() {
		await this.clearAllLink.click();
		return new RemoveModalWindow(this.page);
	}

	async clickCompareBtn() {
		await this.compareBtn.click();
		return new CompareProductsPage(this.page);
	}

}