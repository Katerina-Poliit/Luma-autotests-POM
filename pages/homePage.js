import { CreateNewCustomerAccountPage } from "./createNewCustomerAccountPage";
import { CustomerLoginPage } from "./customerLoginPage";
import { GearPage } from "./gearPage";
import { MenPage } from "./menPage";
import { SalePage } from "./salePage";
import { SearchResultPageWithResults } from "./searchResultPageWithResults";
import { TrainingPage } from "./trainingPage";
import { WhatsNewPage } from "./watsNewPage";
import { WomenPage } from "./womenPage";
import NotesPage from "./notesPage";
import ParticeAPIPage from "./particeApi.Page";
import WriteForUsPage from "./writeForUsPage";
import SubscribePage from "./subscribePage";
import PolicyPage from "./policyPage";
import SearchtermsPage from "./searchTermsPage";
import AndvancedSearchPage from "./advancedSearchPage";
import OrdersReturnsPage from "./ordersReturnsPage";
import WomenTopsPage from "./womenTopsPage";
import WomenTopsJacketsPage from "./womenTopsJacketsPage";
import WomenHoodiesSweatshirtsPage from "./womenHoodiesSweatshirtsPage";
import WomenTeesPage from "./womenTeesPage";
import WomenBrassTanksPage from "./womenBrassTanksPage";
import WomenBottomsPage from "./womenBottomsPage";
import { NewLumaYogaCollectionSectionPage } from "./newLumaYogaCollectionSectionPage";
import { PantsPage } from "./pantsPage";
import { TeesPage } from "./teesPage";
import WomenPanstPage from "./womenPantsPage";
import WomenShortsPage from "./womenShortsPage";
import MenTopsPage from "./menTopsPage";
import MenTopsJacketsPage from "./menJacketsPage";
import MenHoddiesSweatshirtsPage from "./menHoddiesSweatshirtsPage";
import MenTopsTeesPage from "./menTopsTeesPage";
import MenTopsTanksPage from "./menTopsTanksPage";
import { ErinRecommendsPage } from "./erinRecommendsPage";
import { PerformanceFabricsPage } from "./performanceFabrics";
import MenBottomsPage from "./menBottomsPage";
import MenBottomsPantsPage from "./menBottomsPantsPage";
import { RadiantTeePage } from "./radiantTeePage";
import MenBottomsShortsPage from "./menBottomsShortsPage";
import { EcoFriendlyPage } from "./ecoFriendlyPage";
import GearBagsPage from "./gearBagsPage";
import GearFitnessEquipmentPage from "./gearFitnessEquipmentPage";
import GearWatchesPage from "./gearWatchesPage";
import TrainingVideoDownloadPage from "./trainingVideoDownloadPage";

export class HomePage {

	constructor(page) {

		this.page = page;
		//----------------------------- Header -----------------------------------------------------------
		this.headerSection = page.getByText('Toggle Nav My Cart My Cart');
		this.storeLogo = page.getByLabel('store logo');
		this.signInlink = page.getByRole('link', { name: 'Sign In' });
		this.createAnAccountLink = page.getByRole('banner').getByRole('link', { name: 'Create an Account' });
		this.searchField = page.getByPlaceholder('Search entire store here...');
		this.searchBtn = page.locator("button[title='Search']");
		this.dropdownSearch = page.locator('#search_autocomplete > ul > li');
		this.dropdownItem = page.locator('.qs-option-name').filter({ hasText: 'shorts for men' });
		this.cartBtn = page.getByRole('link', { name: ' My Cart' });
		//----------------------------- Footer -----------------------------------------------------------
		this.footerContent = this.page.locator('.page-wrapper footer'),
		this.noteslink = page.getByRole('link', { name: 'Notes' }),
		this.pacticeAPI = page.getByRole('link', { name: 'Practice API Testing using Magento' }),
		this.forUsLink = page.getByRole('link', { name: 'Write for us' });
		this.subscribeLink = page.getByRole('link', { name: 'Subscribe' });
		this.privacyCookiesLink = page.getByRole('link', { name: 'Privacy and Cookie Policy' });
		this.searchTermsLink = page.getByRole('link', { name: 'Search Terms' });
		this.advancedSearchLink = page.getByRole('link', { name: 'Advanced Search' });
		this.ordersReturnsLink = page.getByRole('link', { name: 'Orders and Returns' });
		//----------------------------- homePage -----------------------------------------------------------
		this.bodyPage = page.locator('div').filter({ hasText: 'New Luma Yoga Collection Get' }).nth(3);
		this.watsNewLink = page.getByRole('menuitem', { name: 'What\'s New' });
		this.womenLink = page.getByRole('menuitem', { name: 'Women' });
		this.menLink = page.getByRole('menuitem', { name: 'Men' }).last();
		this.gearLink = page.getByRole('menuitem', { name: 'Gear' });
		this.trainingLink = page.getByRole('menuitem', { name: 'Training' });
		this.saleLink = page.getByRole('menuitem', { name: 'Sale' });
		this.promoBlock = page.locator('div').filter({ hasText: 'New Luma Yoga Collection Get' }).nth(3);
		this.lumaYogaCollectionSection = page.getByRole('link', { name: 'New Luma Yoga Collection Get' });
		this.lumaYogaCollectionSectionInfBlock = page.locator('.bg-white').first();
		this.lumaYogaCollectionSectionInfBlockHeader = page.locator('.info').filter({ hasText: 'New Luma Yoga Collection' });
		this.lumaYogaCollectionSectionInfBlockCTA = page.locator('.title').filter({ hasText: 'Get fit and look fab in new seasonal styles' });
		this.shopNewYogaBtn = page.locator('.button');
		this.oFF20Section = page.getByRole('link', { name: '20% OFF Luma pants when you' });
		this.oFF20SectionInfBlock = page.locator('.home-pants .content');
		this.oFF20SectionInfBlockHeader = page.locator('.title').filter({ hasText: '20% OFF' });
		this.oFF20SectionInfBlockCTA = page.locator('.info').filter({ hasText: 'Luma pants when you shop today*' });
		this.shopPantsLink = page.locator('.icon').filter({ hasText: 'Shop Pants' });
		this.evenMoreSection = page.getByRole('link', { name: 'Even more ways to mix and' });
		this.evenMoreSectionInfBlock = page.locator('.home-t-shirts .content');
		this.evenMoreSectionInfBlockHeader = page.locator('.title').filter({ hasText: 'Even more ways to mix and match' });
		this.evenMoreSectionInfBlockCTA = page.locator('.info').filter({ hasText: 'Buy 3 Luma tees get a 4th free' });
		this.shopTeesLink = page.locator('.icon').filter({ hasText: 'Shop Tees' });
		this.takeItFromErinSection = page.getByRole('link', { name: 'Take it from Erin Luma' });
		this.takeItFromErinSectionInfBlock = page.locator('.home-erin .content');
		this.takeItFromErinSectionInfBlockHeader = page.locator('.title').filter({ hasText: 'Take it from Erin' });
		this.takeItFromErinSectionInfBlockCTA = page.locator('.info').filter({ hasText: 'Luma founder Erin Renny shares her favorites!' });
		this.shopErinRecommendsLink = page.locator('.icon').filter({ hasText: 'Shop Erin Recommends' });
		this.scienceMeetsPerformanceSection = page.getByRole('link', { name: 'Science meets performance' });
		this.scienceMeetsPerformanceSectionInfBlock = page.locator('.bg-white').nth(1);
		this.scienceMeetsPerformanceSectionInfBlockHeader = page.locator('.title').filter({ hasText: 'Science meets performance' });
		this.scienceMeetsPerformanceSectionInfBlockCTA = page.locator('.info').filter({ hasText: 'Wicking to raingear, Luma covers you' });
		this.shopPerformanceLink = page.locator('.icon').filter({ hasText: 'Shop Performance' });
		this.twiceAroundSection = page.getByRole('link', { name: 'Twice around, twice as nice' });
		this.twiceAroundSectionInfBlock = page.locator('.bg-white').last();
		this.twiceAroundSectionInfBlockHeader = page.locator('.title').filter({ hasText: 'Twice around, twice as nice' });
		this.twiceAroundSectionInfBlockCTA = page.locator('.info').filter({ hasText: 'Find conscientious, comfy clothing in our eco-friendly collection' });
		this.shopEcoFriendlyLink = page.locator('.icon').filter({ hasText: 'Shop Eco-Friendly' });
		this.hotSellersSection = page.locator('.widget-product-grid');
		this.hotSellersSectionHeader = page.getByRole('heading', { name: 'Hot Sellers' });
		this.hotSellersSectionInfText = page.getByText('Here is what`s trending on');
		this.hotSellersProductCardsItems = page.locator('.product-item-info');
		this.hotSellersProductCardsItem = page.locator('.product-item').first();
		this.hotSellersProductCardsItemImage = page.locator('.product-image-photo').first();
		this.hotSellersProductCardsItemNameLink = page.getByText('Radiant Tee')
		//----------------------------- Kate -----------------------------------------------------------
		this.womenDropdown = page.locator('.nav-2 > ul > li > a');
		this.womenCategoryTops = page.getByRole('menuitem', { name: ' Tops' });
		this.womenTopsJackets = page.locator('#ui-id-11');
		this.womenTopsHoodiesSweatshirts = page.locator('#ui-id-12');
		this.topsSubcategoryTees = page.locator('#ui-id-13');
		this.topsBrassTanks = page.locator('#ui-id-14');
		this.womenBottoms = page.getByRole('menuitem', { name: ' Bottoms' });
		this.womenPants = page.locator('#ui-id-15');
		this.womenShorts = page.locator('#ui-id-16');
		this.menDropdown = page.getByRole('menuitem', { name: ' Men' });
		this.menTops = page.locator('#ui-id-17');
		this.menTopsJackets = page.locator('#ui-id-19');
		this.menTopsHoodiesSweatshirts = page.locator('#ui-id-20');
		this.menTopsTees = page.locator('#ui-id-21');
		this.menTopsTanks = page.locator('#ui-id-22');
		this.menBottoms = page.locator('#ui-id-18');
		this.menBottomsPants = page.locator('#ui-id-23');
		this.menBottomsShorts =page.locator('#ui-id-24');
		this.gearBags = page.locator('#ui-id-25');
		this.gearFitnessEquipment = page.locator('#ui-id-26');
		this.gearWatches = page.locator('#ui-id-27');
        this.trainingVideoDownloading = page.locator('#ui-id-28');

	}

	async open() {
		await this.page.goto("/");
	}

	async clickLogo() {
		await this.storeLogo.click();
	}

	async clickSignInLink() {
		await this.signInlink.click();
		return new CustomerLoginPage(this.page)
	}

	async clickCreateAnAccountLink() {
		await this.createAnAccountLink.click();
		return new CreateNewCustomerAccountPage(this.page)
	}

	async fillSearchField() {
		await this.searchField.fill('a');
	}

	async cleanSearchField() {
		await this.searchField.fill('');
	}

	async clickSearchField() {
		await this.searchField.click();
	}

	async fillSearchFieldSmth(value) {
		await this.searchField.fill(value);
	}

	async clickSearchBtn() {
		await this.searchBtn.click();
		return new SearchResultPageWithResults(this.page);
	}

	async pressSearchField() {
		await this.searchField.press('Enter');
		return new SearchResultPageWithResults(this.page);
	}

	async clickDropdownItem() {
		await this.dropdownItem.click();
		return new SearchResultPageWithResults(this.page);
	}

	async clickWatsNewLink() {
		await this.watsNewLink.click();
		return new WhatsNewPage(this.page);
	}

	async clickWomenLink() {
		await this.womenLink.click();
		return new WomenPage(this.page);
	}

	async clickMenLink() {
		await this.menLink.click();
		return new MenPage(this.page);
	}

	async clickGearLink() {
		await this.gearLink.click();
		return new GearPage(this.page);
	}

	async clickTrainingLink() {
		await this.trainingLink.click();
		return new TrainingPage(this.page);
	}

	async clickSaleLink() {
		await this.saleLink.click();
		return new SalePage(this.page);
	}

	async clickNoteslink() {
		await this.noteslink.click();
		return new NotesPage(this.page);
	}

	async clickpacticeAPI() {
		await this.pacticeAPI.click();
		return new ParticeAPIPage(this.page);
	}

	async clickforUsLink() {
		await this.forUsLink.click();
		return new WriteForUsPage(this.page);
	}

	async clicksubscribeLink() {
		await this.subscribeLink.click();
		return new SubscribePage(this.page);
	}

	async clickprivacyCookiesLink() {
		await this.privacyCookiesLink.click();
		return new PolicyPage(this.page);
	}

	async clicksearchTermsLink() {
		await this.searchTermsLink.click();
		return new SearchtermsPage(this.page);
	}

	async clickadvancedSearchLink() {
		await this.advancedSearchLink.click();
		return new AndvancedSearchPage(this.page);
	}

	async clickOrdersReturnsLink() {
		await this.ordersReturnsLink.click();
		return new OrdersReturnsPage(this.page);
	}

	async hoverwomenLink() {
		await this.womenLink.hover();
	}

	async clickwomenCategoryTops() {
		await this.womenCategoryTops.click();

		return new WomenTopsPage(this.page);
	}

	async hoverwomenCategoryTops() {
		await this.womenCategoryTops.hover();

	}

	async clickWomenTopsJackets() {
		await this.womenTopsJackets.click();
		return new WomenTopsJacketsPage(this.page);
	}

	async clickwomenTopsHoodiesSweatshirts() {
		await this.womenTopsHoodiesSweatshirts.click();

		return new WomenHoodiesSweatshirtsPage(this.page);
	}

	async clicktopsSubcategoryTees() {
		await this.topsSubcategoryTees.click();

		return new WomenTeesPage(this.page);
	}

	async clicktopsBrassTanks() {
		await this.topsBrassTanks.click();

		return new WomenBrassTanksPage(this.page);
	}
	async clickwomenBottoms() {
		await this.womenBottoms.click();

		return new WomenBottomsPage(this.page);
	}

	async hoverWomenBottoms() {

		await this.womenPants.hover();
	}

	async clickNewLumaYogaCollectionSection() {
		await this.lumaYogaCollectionSection.click();
		return new NewLumaYogaCollectionSectionPage(this.page);
	}

	async clickShopNewYogaBtn() {
		await this.shopNewYogaBtn.click();
		return new NewLumaYogaCollectionSectionPage(this.page);
	}

	async clickoFF20Section() {
		await this.oFF20Section.click();
		return new PantsPage(this.page);
	}

	async clickShopPantsLink() {
		await this.shopPantsLink.click();
		return new PantsPage(this.page);
	}

	async clickEvenMoreSection() {
		await this.evenMoreSection.click();
		return new TeesPage(this.page);
	}

	async clickShopTeesLink() {
		await this.shopTeesLink.click();
		return new TeesPage(this.page);
	}

	async hoverwomenBottoms() {
		await this.womenBottoms.hover();
	}

	async clickwomenPants() {
		await this.womenPants.click();
		return new WomenPanstPage(this.page);

	}

	async clickwomenShorts() {
		await this.womenShorts.click();
		return new WomenShortsPage(this.page);

	}

	async hovermenDropdown() {
		await this.menDropdown.hover();
	}

	async hoverMenTops() {
		await this.menTops.hover();
	}

	async clickMenTops() {
		await this.menTops.click();
		return new MenTopsPage(this.page);

	}

	async clickMenTopsJackets() {
		await this.menTopsJackets.click();
		return new MenTopsJacketsPage(this.page);

	}

	async hoverMenTopsHoodiesSweatshirts() {
		await this.menTopsHoodiesSweatshirts.hover();
	}

	async clickMenTopsHoodiesSweatshirts() {
		await this.menTopsHoodiesSweatshirts.click();
		return new MenHoddiesSweatshirtsPage(this.page);

	}

	async hoverMenTopsTees() {
		await this.menTopsTees.hover();
	}

	async clickMenTopsTees() {
		await this.menTopsTees.click();
		return new MenTopsTeesPage(this.page);
	}

	async hoverMenTopsTanks() {
		await this.menTopsTanks.hover();
	}

	async clickMenTopsTanks() {
		await this.menTopsTanks.click();
		return new MenTopsTanksPage(this.page);
	}

	async hoverMenBottoms() {
		await this.menBottoms.hover();
	}

	async clickTakeItFromErinSection() {
		await this.takeItFromErinSection.click();
		return new ErinRecommendsPage(this.page);
	}

	async clickShopErinRecommendsLink() {
		await this.shopErinRecommendsLink.click();
		return new ErinRecommendsPage(this.page);
	}

	async clickScienceMeetsPerformanceSection() {
		await this.scienceMeetsPerformanceSection.click();
		return new PerformanceFabricsPage(this.page);
	}

	async clickShopPerformanceLink() {
		await this.shopPerformanceLink.click();
		return new PerformanceFabricsPage(this.page);
	}

	async clickMenBottoms() {
		await this.menBottoms.click();
		return new MenBottomsPage(this.page);
	}

	async hoverMenBottomsPants() {
		await this.menBottomsPants.hover();
	}

	async clickMenBottomsPants() {
		await this.menBottomsPants.click();
		return new MenBottomsPantsPage(this.page);
	}

	async clickHotSellersProductCardsItemImage() {
		await this.hotSellersProductCardsItemImage.click();
		return new RadiantTeePage(this.page);
	}

	async hoverMenBottomsShorts() {
		await this.menBottomsShorts.hover();
	}

	async clickMenBottomsShorts() {
		await this.menBottomsShorts.click();
		return new MenBottomsShortsPage(this.page);
	}

	async hovergearLink() {
		await this.gearLink.hover();
	}

	async clickHotSellersProductCardsItemNameLink() {
		await this.hotSellersProductCardsItemNameLink.click();
		return new RadiantTeePage(this.page);
	}

	async clickTwiceAroundSection() {
		await this.twiceAroundSection.click();
		return new EcoFriendlyPage(this.page);
	}

	async clickShopEcoFriendlyLink() {
		await this.shopEcoFriendlyLink.click();
		return new EcoFriendlyPage(this.page);
	}

	async hoverGearBags() {
		await this.gearBags.hover();
	}

	async clickGearBags() {
		await this.gearBags.click();
		return new GearBagsPage(this.page);
	}

	async hoverGearFitnessEquipment() {
		await this.gearFitnessEquipment.hover();
	}

	async clickGearFitnessEquipment() {
		await this.gearFitnessEquipment.click();
		return new GearFitnessEquipmentPage (this.page);
	}

	async hoverGearWatches() {
		await this.gearWatches.hover();
	}

	async clickGearWatches() {
		await this.gearWatches.click();
		return new GearWatchesPage (this.page);
	}

	async hovertrainingVideoDownloading() {
		await this.trainingVideoDownloading.hover();
	}

	async hovertrainingLink() {
		await this.trainingLink.hover();
	}

	async clicktrainingVideoDownloading() {
		await this.trainingVideoDownloading.click();
		return new TrainingVideoDownloadPage(this.page);
	}

}