import OvernightDuffleReviewPage from "../components/overnightDuffleReviewPage";
import RemoveModalWindow from "../modalWindows/removeModalWindow";
import CompareProductsPage from "./compareProductsPage";
import { CreateNewCustomerAccountPage } from "./createNewCustomerAccountPage";
import { CustomerLoginPage } from "./customerLoginPage";
import EcoCollectionNewPage from "./ecoCollectionNewPage";
import { HomePage } from "./homePage";
import MenHoddiesSweatshirtsPage from "./menHoddiesSweatshirtsPage";
import MenJacketsPage from "./menJacketsPage";
import MenPantsPage from "./menPantsPage";
import MenShortsPage from "./menShortsPage";
import MenTanksPage from "./menTanksPage";
import MenTeesPage from "./menTeesPage";
import MyWishListPage from "./myWishListPage";
import { NewLumaYogaCollectionSectionPage } from "./newLumaYogaCollectionSectionPage";
import OvernightDufflePage from "./overnightDufflePage";
import PerformanceSportswearNewPage from "./performanceSportswearNew";
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
		  this.createAnAccountLink = page.getByRole('link', { name: 'Create an Account' });
		  this.addToWishList = page.getByRole('link', { name: 'Add to Wish List' }).nth(1);
		  this.addToWishListProductBlock = page.getByText('Overnight Duffle $45.00 Add');
		  this.addToWishListProductImage = page.locator('#wishlist-sidebar').getByTitle('Overnight Duffle');
		  this.addToWishListLinkWithProductName = page.locator('#wishlist-sidebar').getByRole('strong').getByRole('link', { name: 'Overnight Duffle' });
		  this.addToWishListCloseBtn = page.getByRole('link', { name: 'Remove This Item' });
		  this.addToWishListPrice = page.locator('#wishlist-sidebar').getByText('$');
		  this.addToCartBtn = page.locator('#wishlist-sidebar').getByRole('button', { name: 'Add to Cart' });
		  this.shopingCartCounterItems = page.locator('.counter-number');
		  this.addedProductToShopingCartMessage = page.getByRole('alert').locator('div').first();
		  this.goToWishListLink = page.getByRole('link', { name: 'Go to Wish List' });
		  this.promoBlock = page.locator('.block-static-block').first();
		  this.lumaYogaCollectionSection = page.getByRole('link', { name: 'New Luma Yoga Collection The' });
		  this.lumaYogaCollectionSectionInfBlock = page.locator('.content').nth(2);
		  this.lumaYogaCollectionSectionInfBlockHeading = page.locator('.info').filter({ hasText: 'New Luma Yoga Collection' });
		  this.lumaYogaCollectionSectionInfBlockCTA = page.locator('.title').filter({ hasText: 'The very latest yoga styles plus twists on timeless classics' });
		  this.shopNewYogaBtn = page.locator('.more.button');
		  this.whateverDayBringsSection = page.getByRole('link', { name: 'Whatever day brings Luma' });
		  this.whateverDayBringsSectionInfBlock = page.locator('.content').nth(3);
		  this.whateverDayBringsSectionInfBlockHeading = page.locator('.title').filter({ hasText: 'Whatever day brings' });
		  this.whateverDayBringsSectionInfBlockCTA = page.locator('.info').filter({ hasText: 'Luma Cocona™ for breathability, CoolTech™ for wicking, or a blend of both.' });
		  this.performanceFabricsLink = page.locator('.icon').first();
		  this.senceOfRenewalSection = page.getByRole('link', { name: 'A sense of renewal Enjoy' });
		  this.senceOfRenewalSectionInfBlock = page.locator('.content').nth(4);
		  this.senceOfRenewalSectionInfBlockHeading = page.locator('.title').filter({ hasText: 'A sense of renewal' });
		  this.senceOfRenewalSectionInfBlockCTA = page.locator('.info').filter({ hasText: 'Enjoy comfort of body and mind with Luma eco-friendly choices' });
		  this.shopEcoFriendlyLink = page.locator('.icon').last();
		  this.lumasLatestSection = page.locator('.grid').last();
		  this.lumasLatestSectionHeading = page.getByRole('heading', { name: 'Luma\'s Latest' });
		  this.lumasLatestSectionInfText = page.getByText('Just in time for the new');
		  this.lumasLatestSectionProductCardsItems = page.locator('.product-item-info');
		  this.lumasLatestSectionProductCardsItem = page.locator('.product-item-info').nth(1);
		  this.productCardsItemImage = page.locator('.product-image-photo').nth(1);
		  this.productCardsItemNameLink = page.getByText('Overnight Duffle');
		  this.productCardsStarRating = page.getByTitle('60%');
		  this.productCardsStarRatingFilledStars = page.getByTitle('60%').locator('span').first();
		  this.productCardsReviewLink = page.getByRole('link', { name: 'Reviews' }).nth(1);
		  this.productCardsPrice = page.locator('#old-price-13-widget-product-grid').getByText('$');
		  this.productCardsSizeBtns = page.locator('#old-price-13-widget-product-grid').getByText('$');
		  this.productCardsAddToCardBtn = page.locator('[title="Add to Cart"]').nth(1);
		  this.productCardsAddToCardMessage = page.getByRole('alert').locator('div').first();
		  this.productCardsAddToWishListBtn = page.getByRole('link', { name: ' Add to Wish List' }).nth(1);
		  this.productCardsAddToCompareBtn = page.getByRole('link', { name: ' Add to Compare' }).nth(1);
		  this.addToCompareLinkInHeader = page.getByRole('link', { name: 'Compare Products (1 item)' })
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

	async clickCreateAnAccountLink() {
		await this.createAnAccountLink.click();
		return new CreateNewCustomerAccountPage(this.page)
	}

	async clickAddToWishList() {
		await this.addToWishList.click();
		return new MyWishListPage(this.page)
	}

	async clickAddToWishListProductImage() {
		await this.addToWishListProductImage.click();
		return new OvernightDufflePage(this.page)
	}

	async clickAddToWishListLinkWithProductName() {
		await this.addToWishListLinkWithProductName.click();
		return new OvernightDufflePage(this.page)
	}

	async clickAddToWishListCloseBtn() {
		await this.addToWishListCloseBtn.click();
		return this;
	}

	async clickAddToCartBtn() {
		await this.addToCartBtn.click();
		return this;
	}

	async clickGoToWishListLink() {
		await this.goToWishListLink.click();
		return new MyWishListPage(this.page)
	}

	async clickNewLumaYogaCollectionSection() {
		await this.lumaYogaCollectionSection.click();
		return new NewLumaYogaCollectionSectionPage(this.page);
	}

	async clickShopNewYogaBtn() {
		await this.shopNewYogaBtn.click();
		return new NewLumaYogaCollectionSectionPage(this.page);
	}

	async clickWhateverDayBringsSection() {
		await this.whateverDayBringsSection.click();
		return new PerformanceSportswearNewPage(this.page);
	}

	async clickPerformanceFabricsLink() {
		await this.performanceFabricsLink.click();
		return new PerformanceSportswearNewPage(this.page);
	}

	async clickSenceOfRenewalSection() {
		await this.senceOfRenewalSection.click();
		return new EcoCollectionNewPage(this.page);
	}

	async clickShopEcoFriendlyLink() {
		await this.shopEcoFriendlyLink.click();
		return new EcoCollectionNewPage(this.page);
	}

	async clickLumasLatestSectionProductCardsItem() {
		await this.lumasLatestSectionProductCardsItem.click();
		return new OvernightDufflePage(this.page)
	}

	async clickProductCardsItemNameLink() {
		await this.productCardsItemNameLink.click();
		return new OvernightDufflePage(this.page)
	}

	async clickProductCardsReviewLink() {
		await this.productCardsReviewLink.click();
		return new OvernightDuffleReviewPage(this.page)
	}

	async hoverLumasLatestSectionProductCardsItem() {
		await this.lumasLatestSectionProductCardsItem.hover();
		return this;
	}

	async clickProductCardsAddToCardBtn() {
		await this.productCardsAddToCardBtn.click();
		return this;
	}

	async clickProductCardsAddToWishListBtn() {
		await this.productCardsAddToWishListBtn.click();
		return new CustomerLoginPage(this.page)
	}

	async clickProductCardsAddToCompareBtn() {
		await this.productCardsAddToCompareBtn.click();
		return this.page;
	}

}