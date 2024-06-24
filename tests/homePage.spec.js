const { test, expect } = require('@playwright/test');
import { BASE_URL, WHATS_NEW_LINK_TEXT, WOMEN_LINK_TEXT, MEN_LINK_TEXT, GEAR_LINK_TEXT, TRAINING_LINK_TEXT, SALE_LINK_TEXT, WHATS_NEW_URL, WHATS_NEW_PAGE_HEADER_TEXT, WOMEN_URL, WOMEN_PAGE_HEADER_TEXT, MEN_URL, MEN_PAGE_HEADER_TEXT, GEAR_URL, GEAR_PAGE_HEADER_TEXT, TRAINING_URL, TRAINING_PAGE_HEADER_TEXT, SALE_URL, SALE_PAGE_HEADER_TEXT, WOMEN_CATAGORY_TOPS, WOMEN_TOPS_PAGE_URL, WOMEN_TOPS_SUBCATEGORY_JACKETS, WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS, WOMEN_TOPS_JACKETS_URL, WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS_URL, PANTS_URL, PANTS_HEADER_TEXT, OFF_20_SECTION_HEADER_TEXT, OFF_20_SECTION_CTA_TEXT, SHOP_PANTS_LINK_TEXT, HEADING_TOPS_TEXT, HEADING_JACKETS_TEXT, HEADING_HOODIES_TEXT, WOMEN_TOPS_SUBCATEGORY_TEES_TEXT, WOMEN_TOPS_TEES_URL, HEADING_TEES_PAGE_TEXT, WOMEN_TOPS_SUBCATEGORY_BRAS_TANKS, WOMEN_TOPS_BRASSTANKS_URL, HEADING_BRASTANKS_PAGE_TEXT, WOMEN_CATAGORY_BOTTOMS, WOMEN_BOTTOMS_PAGE_URL, HEADING_BOTTOMS_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, WOMEN_BOTTOMS_PANTS_PAGE_URL, HEADING_WOMEN_PANTS_PAGE_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_SHORTS_TEXT, WOMEN_SHORTS_PAGE_URL, HEADING_WOMEN_SHORTS_PAGE_TEXT, MEN_DROPDOWN_TEXT, MEN_CATAGORY_TOPS_TEXT, MEN_TOPS_PAGE_URL, HEADING_MEN_TOPS_PAGE_TEXT, MEN_TOPS_SUBCATEGORY_JACKETS, MEN_TOPS_JACKETS_URL, MEN_TOPS_HOODIESSWEATSHIRTS_TEXT, MEN_HOODIESSWEATSHIRTS_URL, MEN_TOPS_TEES_TEXT, TEES_URL, TEES_HEADER_TEXT, EVEN_MORE_SECTION_HEADER_TEXT, EVEN_MORE_SECTION_CTA_TEXT, SHOP_TEES_LINK_TEXT, MEN_TOPS_TESS_PAGE_URL, MEN_TOPS_SUBCATEGORY_TANKS_TEXT, MEN_TOPS_TANKS_PAGE_URL, HEADING_MEN_TANKS_PAGE_TEXT, MEN_CATAGORY_BOTTOMS, MEN_BOTTOMS_PAGE_URL, MEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, MEN_BOTTOMS_PANTS_PAGE_URL, HEADING_MEN_BOTTOMS_PANTS_TEXT, MEN_SHORTS_PAGE_URL, HEADING_MEN_SHORTS_PAGE_TEXT, GEAR_BAGS_PAGE_URL, HEADING_GEAR_BAGS_PAGE_TEXT, GEAR_FITNESS_PAGE_URL, GEAR_WATCHES_PAGE_URL, TRAINING_VIDEO_DOWNLOAD_PAGE_URL, NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_URL, NEW_LUMA_YOGA_COLLECTION_IB_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_IB_CTA_TEXT, SHOP_NEW_YOGA_BTN_TEXT } from "../helpers/testDataHomePage";
import { HomePage } from "../pages/homePage";

test.describe('homePage.spec', () => {

	let homePage;

	test.beforeEach(async ({ page }) => {

		homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС 03.1.1 Verify that user directed to the Home page after entering "Home page" url', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

	});

	test('ТС 03.1.2 Verify that the Home page contains the main content (body) of the page', async ({ page }) => {

		await expect(homePage.bodyPage).toBeVisible();

	});

	test('ТС 03.1.3 Verify that the "What\'s New" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		await expect(homePage.watsNewLink).toBeVisible();
		await expect(homePage.watsNewLink).toHaveText(WHATS_NEW_LINK_TEXT);

	});

	test('ТС 03.1.4 Verify that the "Women" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		await expect(homePage.womenLink).toBeVisible();
		await expect(homePage.womenLink).toHaveText(WOMEN_LINK_TEXT);

	});

	test('ТС 03.1.5 Verify that the "Men" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		await expect(homePage.menLink).toBeVisible();
		await expect(homePage.menLink).toHaveText(MEN_LINK_TEXT);

	});

	test('ТС 03.1.6 Verify that the "Gear" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		await expect(homePage.gearLink).toBeVisible();
		await expect(homePage.gearLink).toHaveText(GEAR_LINK_TEXT);

	});

	test('ТС 03.1.7 Verify that the "Training" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		await expect(homePage.trainingLink).toBeVisible();
		await expect(homePage.trainingLink).toHaveText(TRAINING_LINK_TEXT);

	});

	test('ТС 03.1.8 Verify that the "Sale" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		await expect(homePage.saleLink).toBeVisible();
		await expect(homePage.saleLink).toHaveText(SALE_LINK_TEXT);

	});

	test('ТС 03.1.9 Verify that the "What\'s New" navigation menu link has a cursor pointer', async ({ page }) => {

		await expect(homePage.watsNewLink).toBeVisible();
		await expect(homePage.watsNewLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.10 Verify that the "Women" navigation menu link has a cursor pointer', async ({ page }) => {

		await expect(homePage.womenLink).toBeVisible();
		await expect(homePage.womenLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.11 Verify that the "Men" navigation menu link has a cursor pointer', async ({ page }) => {

		await expect(homePage.menLink).toBeVisible();
		await expect(homePage.menLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.12 Verify that the "Gear" navigation menu link has a cursor pointer', async ({ page }) => {

		await expect(homePage.gearLink).toBeVisible();
		await expect(homePage.gearLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.13 Verify that the "Training" navigation menu link has a cursor pointer', async ({ page }) => {

		await expect(homePage.trainingLink).toBeVisible();
		await expect(homePage.trainingLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.14 Verify that the "Sale" navigation menu link has a cursor pointer', async ({ page }) => {

		await expect(homePage.saleLink).toBeVisible();
		await expect(homePage.saleLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.15 Verify that the "What\'s New" navigation menu link redirects to corresponding page', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

		const whatsNewPage = await homePage.clickWatsNewLink();

		await expect(page).toHaveURL(WHATS_NEW_URL);

		await expect(whatsNewPage.header).toBeVisible();
		await expect(whatsNewPage.header).toHaveText(WHATS_NEW_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.16 Verify that the "Women" navigation menu link redirects to corresponding page', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

		const womenPage = await homePage.clickWomenLink();

		await expect(page).toHaveURL(WOMEN_URL);

		await expect(womenPage.header).toBeVisible();
		await expect(womenPage.header).toHaveText(WOMEN_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.17 Verify that the Men" navigation menu link redirects to corresponding page', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

		const menPage = await homePage.clickMenLink()

		await expect(page).toHaveURL(MEN_URL);

		await expect(menPage.header).toBeVisible();
		await expect(menPage.header).toHaveText(MEN_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.18 Verify that the "Gear" navigation menu link redirects to corresponding page', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

		const gearPage = await homePage.clickGearLink();

		await expect(page).toHaveURL(GEAR_URL);

		await expect(gearPage.header).toBeVisible();
		await expect(gearPage.header).toHaveText(GEAR_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.19 Verify that the "Training" navigation menu link redirects to corresponding page', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

		const trainingPage = await homePage.clickTrainingLink();

		await expect(page).toHaveURL(TRAINING_URL);

		await expect(trainingPage.header).toBeVisible();
		await expect(trainingPage.header).toHaveText(TRAINING_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.20 Verify that the "Sale" navigation menu link redirects to corresponding page', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

		const salePage = await homePage.clickSaleLink();

		await expect(page).toHaveURL(SALE_URL);

		await expect(salePage.header).toBeVisible();
		await expect(salePage.header).toHaveText(SALE_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.117 Verify that the "Women" navigation menu link contains the dropdown', async ({ page }) => {

		await homePage.hoverwomenLink();
		expect(homePage.womenDropdown).toBeTruthy();

	});

	test('ТС 03.1.119 Verify that the dropdown contains the "Tops" dropdown', async ({ page }) => {

		await homePage.hoverwomenLink();
		await expect(homePage.womenCategoryTops).toHaveText(WOMEN_CATAGORY_TOPS);

	});

	test('ТС 03.1.120 Verify that the "Tops" dropdown contains a cursor pointer', async ({ page }) => {

		await homePage.hoverwomenLink();
		await expect(homePage.womenCategoryTops).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.121 Verify that the "Tops" dropdown redirects to the appropriate pages', async ({ page }) => {

		await homePage.hoverwomenLink();
		const womenTopsPage = await homePage.clickwomenCategoryTops();
		await expect(page).toHaveURL(WOMEN_TOPS_PAGE_URL);
		await expect(womenTopsPage.headingPage).toBeVisible();
		await expect(womenTopsPage.headingPage).toHaveText(HEADING_TOPS_TEXT);

	});

	test('ТС 03.1.122 Verify that the "Tops" dropdown contains the "Jackets" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		await expect(homePage.womenTopsJackets).toBeVisible();
		await expect(homePage.womenTopsJackets).toHaveText(WOMEN_TOPS_SUBCATEGORY_JACKETS)

	});

	test('ТС 03.1.123 Verify that the "Jackets" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		await expect(homePage.womenTopsJackets).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.123.1 Verify that the subcategory "Jackets" redirects to the appropriate page ', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		const womenJacketsPage = await homePage.clickWomenTopsJackets();
		await expect(page).toHaveURL(WOMEN_TOPS_JACKETS_URL);
		await expect(womenJacketsPage.headingJacketsPage).toBeVisible();
		await expect(womenJacketsPage.headingJacketsPage).toHaveText(HEADING_JACKETS_TEXT);

	});

	test('ТС 03.1.124 Verify that the "Tops" dropdown contains the "Hoddies & Sweatshirts" subcategory', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		await expect(homePage.womenTopsHoodiesSweatshirts).toBeVisible();
		await expect(homePage.womenTopsHoodiesSweatshirts).toHaveText(WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS);

	});


	test('03.1.125 Verify that the "Hoddies & Sweatshirts" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		await expect(homePage.womenTopsHoodiesSweatshirts).toHaveCSS('cursor', 'pointer');

	});

	test('03.1.124.1 Verify that the subcategory ""Hoodies & Sweatshirts" redirects to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		const womenHoodiesSweatshirtsPage = await homePage.clickwomenTopsHoodiesSweatshirts();
		await expect(page).toHaveURL(WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS_URL);
		await expect(womenHoodiesSweatshirtsPage.headingPage).toBeVisible();
		await expect(womenHoodiesSweatshirtsPage.headingPage).toHaveText(HEADING_HOODIES_TEXT)

	});

	test('ТС 03.1.126 Verify that the "Tops" dropdown contains the "Tees" subcategory', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		expect(homePage.topsSubcategoryTees).toBeVisible();
		expect(homePage.topsSubcategoryTees).toHaveText(WOMEN_TOPS_SUBCATEGORY_TEES_TEXT)

	});

	test('ТС 03.1.127 Verify that the "Tees" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		expect(homePage.topsSubcategoryTees).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.127.1 Verify that the subcategory "Tees" redirects to the appropriate page', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		const womenTeesPage = await homePage.clicktopsSubcategoryTees();
		await expect(page).toHaveURL(WOMEN_TOPS_TEES_URL);
		await expect(womenTeesPage.headingTessPage).toBeVisible();
		await expect(womenTeesPage.headingTessPage).toHaveText(HEADING_TEES_PAGE_TEXT);
	});

	test('ТС 03.1.128 Verify that the "Tops" dropdown contains the "Brass Tanks" subcategory', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		expect(homePage.topsBrassTanks).toBeVisible();
		expect(homePage.topsBrassTanks).toHaveText(WOMEN_TOPS_SUBCATEGORY_BRAS_TANKS)

	});

	test('ТС 03.1.129 Verify that the "Brass Tanks" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		expect(homePage.topsBrassTanks).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.130 Verify that the subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenCategoryTops();
		const womenBrassTanksPage = await homePage.clicktopsBrassTanks();
		await expect(page).toHaveURL(WOMEN_TOPS_BRASSTANKS_URL);
		await expect(womenBrassTanksPage.headingBrassTanksPage).toHaveText(HEADING_BRASTANKS_PAGE_TEXT);

	});

	test('ТС 03.1.131 Verify that the dropdown contains the "Bottoms" dropdown', async ({ page }) => {

		await homePage.hoverwomenLink();
		expect(homePage.womenBottoms).toBeVisible();
		expect(homePage.womenBottoms).toHaveText(WOMEN_CATAGORY_BOTTOMS)

	});

	test('ТС 03.1.132 Verify that the "Bottoms" dropdown contains a cursor pointer', async ({ page }) => {

		await homePage.hoverwomenLink();
		expect(homePage.womenBottoms).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.133 Verify that the "Bottoms" dropdown redirects to the appropriate page', async ({ page }) => {

		await homePage.hoverwomenLink();
		const womenBottomsPage = await homePage.clickwomenBottoms();
		await expect(page).toHaveURL(WOMEN_BOTTOMS_PAGE_URL);
		await expect(womenBottomsPage.heading).toHaveText(HEADING_BOTTOMS_TEXT);

	});

	// test('ТС 03.1.134 Verify that the "Bottoms" dropdown contains the "Pants" subcategory', async ({ page }) => {

	// 	await homePage.hoverwomenLink();
	// 	await homePage.hoverWomenBottoms();
	// 	await homePage.womenPants.waitFor();
	// 	expect(homePage.womenPants).toHaveText(WOMEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT);

	// });

	test('ТС 03.1.21 Verify that the Home page contains the promo block', async ({ page }) => {

		await expect(homePage.promoBlock).toBeVisible();

	});

	test('ТС 03.1.22 Verify that the promo block contains "New Luma Yoga Collection" promo section', async ({ page }) => {

		await expect(homePage.lumaYogaCollectionSection).toBeVisible();

	});

	test('ТС 03.1.23 Verify that the "New Luma Yoga Collection" promo section has a cursor pointer', async ({ page }) => {


		await expect(homePage.lumaYogaCollectionSection).toBeVisible();
		await expect(homePage.lumaYogaCollectionSection).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.24 Verify that the user is redirected to the "New Luma Yoga Collection" page after clicking on the "New Luma Yoga Collection" promo section', async ({ page }) => {

		const newLumaYogaCollectionSectionPage = await homePage.clickNewLumaYogaCollectionSection();

		await expect(page).toHaveURL(NEW_LUMA_YOGA_COLLECTION_URL);

		await expect(newLumaYogaCollectionSectionPage.header).toBeVisible();
		await expect(newLumaYogaCollectionSectionPage.header).toHaveText(NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT);

	});

	test('ТС 03.1.25 Verify that the "New Luma Yoga Collection" promo sections has the information block', async ({ page }) => {

		await expect(homePage.lumaYogaCollectionSectionInfBlock).toBeVisible();

	});

	test('ТС 03.1.26 Verify that the information block has the header', async ({ page }) => {

		await expect(homePage.lumaYogaCollectionSectionInfBlockHeader).toBeVisible();
		await expect(homePage.lumaYogaCollectionSectionInfBlockHeader).toHaveText(NEW_LUMA_YOGA_COLLECTION_IB_HEADER_TEXT);

	});

	test('ТС 03.1.27 Verify that the information block has the call to action text', async ({ page }) => {

		await expect(homePage.lumaYogaCollectionSectionInfBlockCTA).toBeVisible();
		await expect(homePage.lumaYogaCollectionSectionInfBlockCTA).toHaveText(NEW_LUMA_YOGA_COLLECTION_IB_CTA_TEXT);

	});

	test('ТС 03.1.28 Verify that the information block contains the "Shop New Yoga" button', async ({ page }) => {

		await expect(homePage.shopNewYogaBtn).toBeVisible();
		await expect(homePage.shopNewYogaBtn).toHaveText(SHOP_NEW_YOGA_BTN_TEXT);

	});

	test('ТС 03.1.29 Verify that the "Shop New Yoga" button has a cursor pointer', async ({ page }) => {

		await expect(homePage.shopNewYogaBtn).toBeVisible();
		await expect(homePage.shopNewYogaBtn).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.30 Verify that the "Shop New Yoga" button is colored blue', async ({ page }) => {

		await expect(homePage.shopNewYogaBtn).toBeVisible();
		await expect(homePage.shopNewYogaBtn).toHaveCSS('background', 'rgb(25, 121, 195) none repeat scroll 0% 0% / auto padding-box border-box');

	});

	test('ТС 03.1.31 Verify that the user is redirected to the "New Luma Yoga Collection" page after clicking on the "Shop New Yoga" button', async ({ page }) => {

		const newLumaYogaCollectionSectionPage = await homePage.clickShopNewYogaBtn();

		await expect(page).toHaveURL(NEW_LUMA_YOGA_COLLECTION_URL);

		await expect(newLumaYogaCollectionSectionPage.header).toBeVisible();
		await expect(newLumaYogaCollectionSectionPage.header).toHaveText(NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT);

	});

	test('ТС 03.1.32 Verify that the promo block contains "20% OFF" promo section', async ({ page }) => {

		await expect(homePage.oFF20Section).toBeVisible();

	});

	test('ТС 03.1.33 Verify that the "20% OFF" promo section has a cursor pointer', async ({ page }) => {

		await expect(homePage.oFF20Section).toBeVisible();
		await expect(homePage.oFF20Section).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.34 Verify that the user is redirected to the "Pants" page after clicking on the "20% OFF" promo section', async ({ page }) => {

		const pantsPage = await homePage.clickoFF20Section();

		await expect(page).toHaveURL(PANTS_URL);
		await expect(pantsPage.header).toBeVisible();
		await expect(pantsPage.header).toHaveText(PANTS_HEADER_TEXT);

	});

	test('ТС 03.1.35 Verify that the "20% OFF" promo sections has the information block', async ({ page }) => {

		await expect(homePage.oFF20SectionInfBlock).toBeVisible();

	});

	test('ТС 03.1.36 Verify that the information block has the header', async ({ page }) => {

		await expect(homePage.oFF20SectionInfBlockHeader).toBeVisible();
		await expect(homePage.oFF20SectionInfBlockHeader).toHaveText(OFF_20_SECTION_HEADER_TEXT);

	});

	test('ТС 03.1.37 Verify that the information block has the call to action text', async ({ page }) => {

		await expect(homePage.oFF20SectionInfBlockCTA).toBeVisible();
		await expect(homePage.oFF20SectionInfBlockCTA).toHaveText(OFF_20_SECTION_CTA_TEXT);

	});

	test('ТС 03.1.38 Verify that the information block contains the "Shop pants" link', async ({ page }) => {

		await expect(homePage.shopPantsLink).toBeVisible();
		await expect(homePage.shopPantsLink).toHaveText(SHOP_PANTS_LINK_TEXT);

	});

	test('ТС 03.1.39 Verify that the "Shop pants" link has a cursor pointer', async ({ page }) => {

		await expect(homePage.shopPantsLink).toBeVisible();
		await expect(homePage.shopPantsLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.40 Verify that the user is redirected to the "Pants" page after clicking on the "Shop pants" link', async ({ page }) => {

		const pantsPage = await homePage.clickShopPantsLink();

		await expect(page).toHaveURL(PANTS_URL);
		await expect(pantsPage.header).toBeVisible();
		await expect(pantsPage.header).toHaveText(PANTS_HEADER_TEXT);

	});

	test('ТС 03.1.41 Verify that the promo block contains "Even more ways to mix and match" promo section', async ({ page }) => {

		await expect(homePage.evenMoreSection).toBeVisible();

	});

	test('ТС 03.1.42 Verify that the "Even more ways to mix and match" promo section has a cursor pointer', async ({ page }) => {

		await expect(homePage.evenMoreSection).toBeVisible();
		await expect(homePage.evenMoreSection).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.43 Verify that the user is redirected to the "Tees" page after clicking on the "Even more ways to mix and match" promo section', async ({ page }) => {

		const teesPage = await homePage.clickEvenMoreSection();

		await expect(page).toHaveURL(TEES_URL);
		await expect(teesPage.header).toBeVisible();
		await expect(teesPage.header).toHaveText(TEES_HEADER_TEXT);

	});

	test('ТС 03.1.44 Verify that the "Even more ways to mix and match" promo sections has the information block', async ({ page }) => {

		await expect(homePage.evenMoreSectionInfBlock).toBeVisible();

	});

	test('ТС 03.1.45 Verify that the information block has the header', async ({ page }) => {

		await expect(homePage.evenMoreSectionInfBlockHeader).toBeVisible();
		await expect(homePage.evenMoreSectionInfBlockHeader).toHaveText(EVEN_MORE_SECTION_HEADER_TEXT);

	});

	test('ТС 03.1.46 Verify that the information block has the call to action text', async ({ page }) => {

		await expect(homePage.evenMoreSectionInfBlockCTA).toBeVisible();
		await expect(homePage.evenMoreSectionInfBlockCTA).toHaveText(EVEN_MORE_SECTION_CTA_TEXT);

	});

	test('ТС 03.1.47 Verify that the information block contains the "Shop Tees" link', async ({ page }) => {

		await expect(homePage.shopTeesLink).toBeVisible();
		await expect(homePage.shopTeesLink).toHaveText(SHOP_TEES_LINK_TEXT);

	});

	test('ТС 03.1.48 Verify that the "Shop Tees" link has a cursor pointer', async ({ page }) => {

		await expect(homePage.shopTeesLink).toBeVisible();
		await expect(homePage.shopTeesLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.49 Verify that the user is redirected to the "Tees" page after clicking on the "Shop Tees" link', async ({ page }) => {

		const teesPage = await homePage.clickShopTeesLink();

		await expect(page).toHaveURL(TEES_URL);
		await expect(teesPage.header).toBeVisible();
		await expect(teesPage.header).toHaveText(TEES_HEADER_TEXT);

	});

	test('ТС 03.1.50 Verify that the promo block contains "Take it from Erin" promo section', async ({ page }) => {

		await expect(homePage.takeItFromErinSection).toBeVisible();

	});

	test('ТС 03.1.51 Verify that the "Take it from Erin" promo section has a cursor pointer', async ({ page }) => {

		await expect(homePage.takeItFromErinSection).toBeVisible();
		await expect(homePage.takeItFromErinSection).toHaveCSS('cursor', 'pointer');

	});
	test('ТС 03.1.135 Verify that the "Bottoms" dropdown contains the "Pants" subcategory', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenBottoms()
		expect(homePage.womenPants).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.135.1 Verify that the "Pants" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenBottoms()
		const womenPantsPage = await homePage.clickwomenPants();
		await expect(page).toHaveURL(WOMEN_BOTTOMS_PANTS_PAGE_URL);
		await expect(womenPantsPage.heading).toHaveText(HEADING_WOMEN_PANTS_PAGE_TEXT)

	});


	test('ТС 03.1.136 Verify that the "Bottoms" dropdown contains the "Shorts" subcategory', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenBottoms()
		expect(homePage.womenShorts).toBeVisible();
		expect(homePage.womenShorts).toHaveText(WOMEN_BOTTOMS_SUBCATEGORY_SHORTS_TEXT)

	});

	test('ТС 03.1.137 Verify that the "Shorts" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenBottoms()
		expect(homePage.womenShorts).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.138 Verify that the "Shorts" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hoverwomenLink();
		await homePage.hoverwomenBottoms();
		const womenShortsPage = await homePage.clickwomenShorts();
		await expect(page).toHaveURL(WOMEN_SHORTS_PAGE_URL);
		await expect(womenShortsPage.heading).toHaveText(HEADING_WOMEN_SHORTS_PAGE_TEXT);

	});

	test('ТС 03.1.139 Verify that the "Men" navigation menu link contains the dropdown', async ({ page }) => {

		await homePage.hovermenDropdown();
		expect(homePage.menDropdown).toBeVisible();
		expect(homePage.menDropdown).toHaveText(MEN_DROPDOWN_TEXT);

	});

	test('ТС 03.1.140 Verify that the dropdown contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		expect(homePage.menDropdown).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.141 Verify that the "Men" dropdown contains the "Tops" dropdown', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		expect(homePage.menTops).toBeVisible();
		expect(homePage.menTops).toHaveText(MEN_CATAGORY_TOPS_TEXT);

	});

	test('ТС 03.1.143 Verify that the "Tops" dropdown redirects to the appropriate page', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		const menTopsPage = await homePage.clickMenTops();
		await expect(page).toHaveURL(MEN_TOPS_PAGE_URL);
		await expect(menTopsPage.header).toHaveText(HEADING_MEN_TOPS_PAGE_TEXT);

	});

	test('ТС 03.1.142 Verify that the "Tops" dropdown contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		expect(homePage.menTops).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.144 Verify that the "Tops" dropdown contains the subcategory "jackets"', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		expect(homePage.menTopsJackets).toBeVisible();
		expect(homePage.menTopsJackets).toHaveText(MEN_TOPS_SUBCATEGORY_JACKETS);

	});

	test('ТС 03.1.145 Verify that the "Jackets" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		expect(homePage.menTopsJackets).toHaveCSS('cursor', 'pointer');

	})















});
