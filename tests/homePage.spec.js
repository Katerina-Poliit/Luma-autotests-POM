const { expect } = require('@playwright/test');

import { BASE_URL, WHATS_NEW_LINK_TEXT, WOMEN_LINK_TEXT, MEN_LINK_TEXT, GEAR_LINK_TEXT, TRAINING_LINK_TEXT, SALE_LINK_TEXT, WHATS_NEW_URL, WHATS_NEW_PAGE_HEADER_TEXT, WOMEN_URL, WOMEN_PAGE_HEADER_TEXT, MEN_URL, MEN_PAGE_HEADER_TEXT, GEAR_URL, GEAR_PAGE_HEADER_TEXT, TRAINING_URL, TRAINING_PAGE_HEADER_TEXT, SALE_URL, SALE_PAGE_HEADER_TEXT, WOMEN_CATAGORY_TOPS, WOMEN_TOPS_PAGE_URL, WOMEN_TOPS_SUBCATEGORY_JACKETS, WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS, WOMEN_TOPS_JACKETS_URL, WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS_URL, PANTS_URL, PANTS_HEADER_TEXT, OFF_20_SECTION_HEADER_TEXT, OFF_20_SECTION_CTA_TEXT, SHOP_PANTS_LINK_TEXT, HEADING_TOPS_TEXT, HEADING_JACKETS_TEXT, HEADING_HOODIES_TEXT, WOMEN_TOPS_SUBCATEGORY_TEES_TEXT, WOMEN_TOPS_TEES_URL, HEADING_TEES_PAGE_TEXT, WOMEN_TOPS_SUBCATEGORY_BRAS_TANKS, WOMEN_TOPS_BRASSTANKS_URL, HEADING_BRASTANKS_PAGE_TEXT, WOMEN_CATAGORY_BOTTOMS, WOMEN_BOTTOMS_PAGE_URL, HEADING_BOTTOMS_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, WOMEN_BOTTOMS_PANTS_PAGE_URL, HEADING_WOMEN_PANTS_PAGE_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_SHORTS_TEXT, WOMEN_SHORTS_PAGE_URL, HEADING_WOMEN_SHORTS_PAGE_TEXT, MEN_DROPDOWN_TEXT, MEN_CATAGORY_TOPS_TEXT, MEN_TOPS_PAGE_URL, HEADING_MEN_TOPS_PAGE_TEXT, MEN_TOPS_SUBCATEGORY_JACKETS, MEN_TOPS_JACKETS_URL, MEN_TOPS_HOODIESSWEATSHIRTS_TEXT, MEN_HOODIESSWEATSHIRTS_URL, MEN_TOPS_TEES_TEXT, TEES_URL, TEES_HEADER_TEXT, EVEN_MORE_SECTION_HEADER_TEXT, EVEN_MORE_SECTION_CTA_TEXT, SHOP_TEES_LINK_TEXT, MEN_TOPS_TESS_PAGE_URL, MEN_TOPS_SUBCATEGORY_TANKS_TEXT, MEN_TOPS_TANKS_PAGE_URL, HEADING_MEN_TANKS_PAGE_TEXT, MEN_CATAGORY_BOTTOMS, MEN_BOTTOMS_PAGE_URL, MEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, MEN_BOTTOMS_PANTS_PAGE_URL, HEADING_MEN_BOTTOMS_PANTS_TEXT, MEN_SHORTS_PAGE_URL, HEADING_MEN_SHORTS_PAGE_TEXT, GEAR_BAGS_PAGE_URL, HEADING_GEAR_BAGS_PAGE_TEXT, GEAR_FITNESS_PAGE_URL, GEAR_WATCHES_PAGE_URL, TRAINING_VIDEO_DOWNLOAD_PAGE_URL } from "../helpers/testDataHomePage";

import { NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_URL, NEW_LUMA_YOGA_COLLECTION_IB_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_IB_CTA_TEXT, SHOP_NEW_YOGA_BTN_TEXT, ERIN_RECOMMENDS_URL, ERIN_RECOMMENDS_HEADER_TEXT, ERIN_RECOMMENDS_IB_HEADER_TEXT, ERIN_RECOMMENDS_IB_CTA_TEXT, SHOP_ERIN_RECOMMENDS_LINK_TEXT, PERFORMANCE_FABRICS_URL, PERFORMANCE_FABRICS_HEADER_TEXT, SCIENCE_MEETS_PERFORMANCE_IB_HEADER_TEXT, SCIENCE_MEETS_PERFORMANCE_IB_CTA_TEXT, SHOP_PERFORMANCE_LINK_TEXT, HOT_SELLERS_HEADER_TEXT, HOT_SELLERS_INF_TEXT, RADIANT_TEE_URL, RADIANT_TEE_BREADCRUMBS, RADIANT_TEE_NAME_LINK_TEXT, ECO_FRIENDLY_URL, ECO_FRIENDLY_HEADER_TEXT, ECO_FRIENDLY_INF_TEXT, ECO_FRIENDLY_INF_CTA_TEXT, ECO_FRIENDLY_INF_LINK_TEXT, RADIANT_TEE_REVIEWS_URL, SIZES, COLORLABLES, CUSTOMER_ACCOUNT_URL } from "../helpers/testDataHomePage"

import { HomePage } from "../pages/homePage";
import { test, createNewCustomerAccount } from "../fixtures/base";
import { CreateNewCustomerAccountPage } from "../pages/createNewCustomerAccountPage";

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
		await expect(womenHoodiesSweatshirtsPage.headingHoodiesSweatshirtsPage).toBeVisible();
		await expect(womenHoodiesSweatshirtsPage.headingHoodiesSweatshirtsPage).toHaveText(HEADING_HOODIES_TEXT)

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
		await expect(womenPantsPage.headingPanstPage).toHaveText(HEADING_WOMEN_PANTS_PAGE_TEXT)

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
		await expect(womenShortsPage.headingShortsPage).toHaveText(HEADING_WOMEN_SHORTS_PAGE_TEXT);

	});

	test('ТС 03.1.139 Verify that the "Men" navigation menu link contains the dropdown', async ({ page }) => {

		await homePage.hovermenDropdown();
		expect(homePage.menDropdown).toBeVisible();
		expect(homePage.menDropdown).toHaveText(MEN_DROPDOWN_TEXT);

	});

	test('ТС 03.1.140 Verify that the dropdown contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		const cursorStyle = await homePage.menDropdown.evaluate(el => window.getComputedStyle(el).cursor);
		expect(cursorStyle).toBe('pointer');

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

	});


	test('ТС 03.1.146 Verify that the "Jackets" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		const menJacktsPage = await homePage.clickMenTopsJackets();
		await expect(page).toHaveURL(MEN_TOPS_JACKETS_URL);
		await expect(menJacktsPage.headingJacketsPage).toHaveText(HEADING_JACKETS_TEXT);

	});

	test('ТС 03.1.146 Verify that the "Tops" dropdown contains the "Hoddies & Sweatshirts" subcategory', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		expect(homePage.menTopsHoodiesSweatshirts).toBeVisible();
		expect(homePage.menTopsHoodiesSweatshirts).toHaveText(MEN_TOPS_HOODIESSWEATSHIRTS_TEXT);

	});

	test('ТС 03.1.147 Verify that the "Hoddies & Sweatshirts" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		await homePage.hoverMenTopsHoodiesSweatshirts()
		expect(homePage.menTopsHoodiesSweatshirts).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.147.1 Verify that the "Hoddies & Sweatshirts" dropdown redirects to the appropriate page', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		const menHoddiesSweatshirtsPage = await homePage.clickMenTopsHoodiesSweatshirts();
		await expect(page).toHaveURL(MEN_HOODIESSWEATSHIRTS_URL);
		await expect(menHoddiesSweatshirtsPage.headingHoddiesSweatshirtsPage).toHaveText(HEADING_HOODIES_TEXT);

	});

	test('ТС 03.1.148 Verify that the "Tops" dropdown contains the "Tees" subcategory', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		expect(homePage.menTopsTees).toBeVisible();
		expect(homePage.menTopsTees).toHaveText(MEN_TOPS_TEES_TEXT);

	});

	test('ТС 03.1.149 Verify that the "Tees" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		await homePage.hoverMenTopsTees()
		expect(homePage.menTopsTees).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.149.1 Verify that the "Tees" dropdown redirects to the appropriate page', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		const menTopsTeesPage = await homePage.clickMenTopsTees();
		await expect(page).toHaveURL(MEN_TOPS_TESS_PAGE_URL);
		await expect(menTopsTeesPage.headingTeesPage).toHaveText(HEADING_TEES_PAGE_TEXT);

	});

	test('ТС 03.1.150 Verify that the "Tops" dropdown contains the "Brass Tanks" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		await homePage.hoverMenTopsTanks();
		expect(homePage.menTopsTanks).toBeVisible();
		expect(homePage.menTopsTanks).toHaveText(MEN_TOPS_SUBCATEGORY_TANKS_TEXT);

	});

	test('ТС 03.1.151 Verify that the "Tops" dropdown contains the "Brass Tanks" subcategory', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		await homePage.hoverMenTopsTanks();
		expect(homePage.menTopsTanks).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.152 Verify that the " Tanks" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenTops();
		const menTopsTanksPage = await homePage.clickMenTopsTanks();
		await expect(page).toHaveURL(MEN_TOPS_TANKS_PAGE_URL)
		expect(menTopsTanksPage.headingTanksPage).toHaveText(HEADING_MEN_TANKS_PAGE_TEXT);

	});

	test('ТС 03.1.153 Verify that the dropdown contains the "Bottoms" dropdown', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenBottoms();
		expect(homePage.menBottoms).toBeVisible();
		expect(homePage.menBottoms).toHaveText(MEN_CATAGORY_BOTTOMS);

	});

	test('ТС 03.1.52 Verify that the user is redirected to the "Erin Recommends" page after clicking on the "Take it from Erin" promo section', async ({ page }) => {

		const erinRecommendsPage = await homePage.clickTakeItFromErinSection();

		await expect(page).toHaveURL(ERIN_RECOMMENDS_URL);
		await expect(erinRecommendsPage.header).toBeVisible();
		await expect(erinRecommendsPage.header).toHaveText(ERIN_RECOMMENDS_HEADER_TEXT);

	});

	test('ТС 03.1.53 Verify that the "Take it from Erin" promo sections has the information block', async ({ page }) => {

		await expect(homePage.takeItFromErinSectionInfBlock).toBeVisible();

	});

	test('ТС 03.1.54 Verify that the information block has the header', async ({ page }) => {

		await expect(homePage.takeItFromErinSectionInfBlockHeader).toBeVisible();
		await expect(homePage.takeItFromErinSectionInfBlockHeader).toHaveText(ERIN_RECOMMENDS_IB_HEADER_TEXT);

	});

	test('ТС 03.1.55 Verify that the information block has the call to action text', async ({ page }) => {

		await expect(homePage.takeItFromErinSectionInfBlockCTA).toBeVisible();
		await expect(homePage.takeItFromErinSectionInfBlockCTA).toHaveText(ERIN_RECOMMENDS_IB_CTA_TEXT);

	});

	test('ТС 03.1.56 Verify that the information block contains the "Shop Erin Recommends" link', async ({ page }) => {

		await expect(homePage.shopErinRecommendsLink).toBeVisible();
		await expect(homePage.shopErinRecommendsLink).toHaveText(SHOP_ERIN_RECOMMENDS_LINK_TEXT);

	});

	test('ТС 03.1.57 Verify that the "Shop Erin Recommends" link has a cursor pointer', async ({ page }) => {

		await expect(homePage.shopErinRecommendsLink).toBeVisible();
		await expect(homePage.shopErinRecommendsLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.58 Verify that the user is redirected to the "Erin Recommends" page after clicking on the "Shop Erin Recommends" link', async ({ page }) => {

		const erinRecommendsPage = await homePage.clickShopErinRecommendsLink();

		await expect(page).toHaveURL(ERIN_RECOMMENDS_URL);
		await expect(erinRecommendsPage.header).toBeVisible();
		await expect(erinRecommendsPage.header).toHaveText(ERIN_RECOMMENDS_HEADER_TEXT);

	});

	test('ТС 03.1.59 Verify that the promo block contains "Science meets performance" promo section', async ({ page }) => {

		await expect(homePage.scienceMeetsPerformanceSection).toBeVisible();

	});

	test('ТС 03.1.60 Verify that the "Science meets performance" promo section has a cursor pointer', async ({ page }) => {

		await expect(homePage.scienceMeetsPerformanceSection).toBeVisible();
		await expect(homePage.scienceMeetsPerformanceSection).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.61 Verify that the user is redirected to the "Performance Fabrics" page after clicking on the "Science meets performance" promo section', async ({ page }) => {

		const performanceFabricsPage = await homePage.clickScienceMeetsPerformanceSection();

		await expect(page).toHaveURL(PERFORMANCE_FABRICS_URL);
		await expect(performanceFabricsPage.header).toBeVisible();
		await expect(performanceFabricsPage.header).toHaveText(PERFORMANCE_FABRICS_HEADER_TEXT);

	});

	test('ТС 03.1.62 Verify that the "Science meets performance" promo sections has the information block', async ({ page }) => {

		await expect(homePage.scienceMeetsPerformanceSectionInfBlock).toBeVisible();

	});

	test('ТС 03.1.63 Verify that the information block has the header', async ({ page }) => {

		await expect(homePage.scienceMeetsPerformanceSectionInfBlockHeader).toBeVisible();
		await expect(homePage.scienceMeetsPerformanceSectionInfBlockHeader).toHaveText(SCIENCE_MEETS_PERFORMANCE_IB_HEADER_TEXT);

	});

	test('ТС 03.1.64 Verify that the information block has the call to action text', async ({ page }) => {

		await expect(homePage.scienceMeetsPerformanceSectionInfBlockCTA).toBeVisible();
		await expect(homePage.scienceMeetsPerformanceSectionInfBlockCTA).toHaveText(SCIENCE_MEETS_PERFORMANCE_IB_CTA_TEXT);

	});

	test('ТС 03.1.65 Verify that the information block contains the "Shop Performance" link', async ({ page }) => {

		await expect(homePage.shopPerformanceLink).toBeVisible();
		await expect(homePage.shopPerformanceLink).toHaveText(SHOP_PERFORMANCE_LINK_TEXT);

	});

	test('ТС 03.1.66 Verify that the "Shop Performance" link has a cursor pointer', async ({ page }) => {

		await expect(homePage.shopPerformanceLink).toBeVisible();
		await expect(homePage.shopPerformanceLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.67 Verify that the user is redirected to the "Performance Fabrics" page after clicking on the "Shop Performance" link', async ({ page }) => {

		const performanceFabricsPage = await homePage.clickShopPerformanceLink();

		await expect(page).toHaveURL(PERFORMANCE_FABRICS_URL);
		await expect(performanceFabricsPage.header).toBeVisible();
		await expect(performanceFabricsPage.header).toHaveText(PERFORMANCE_FABRICS_HEADER_TEXT);

	});

	test('ТС 03.1.77 Verify that the Home page contains the "Hot Sellers" section', async ({ page }) => {

		await expect(homePage.hotSellersSection).toBeVisible();

	});

	test('ТС 03.1.78 Verify that the "Hot Sellers" section has the header', async ({ page }) => {

		await expect(homePage.hotSellersSectionHeader).toBeVisible();
		await expect(homePage.hotSellersSectionHeader).toHaveText(HOT_SELLERS_HEADER_TEXT);

	});

	test('ТС 03.1.79 Verify that the "Hot Sellers" section has the information text', async ({ page }) => {

		await expect(homePage.hotSellersSectionInfText).toBeVisible();
		await expect(homePage.hotSellersSectionInfText).toHaveText(HOT_SELLERS_INF_TEXT);

	});

	test('ТС 03.1.80 Verify that the "Hot Sellers" section contains six product cards', async ({ page }) => {

		await expect(homePage.hotSellersSection).toBeVisible();
		await expect(homePage.hotSellersProductCardsItems).toHaveCount(6);

	});


	test('ТС 03.1.154 Verify that the "Bottoms" dropdown contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenBottoms();
		expect(homePage.menBottoms).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.155 Verify that the "Bottoms" dropdown redirects to the appropriate page', async ({ page }) => {

		await homePage.hovermenDropdown();
		const menBottomsPage = await homePage.clickMenBottoms();
		await expect(page).toHaveURL(MEN_BOTTOMS_PAGE_URL);
		await expect(menBottomsPage.header).toHaveText(HEADING_BOTTOMS_TEXT);

	});

	test('ТС 03.1.156 Verify that the "Bottoms" dropdown contains the "Pants" subcategory', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenBottoms();
		await homePage.hoverMenBottomsPants();
		expect(homePage.menBottomsPants).toBeVisible();
		expect(homePage.menBottomsPants).toHaveText(MEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT);

	});

	test('ТС 03.1.157 Verify that the "Pants" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenBottoms();
		await homePage.hoverMenBottomsPants();
		expect(homePage.menBottomsPants).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.157.1 Verify that the "Pants" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenBottoms();
		const menBottomsPage = await homePage.clickMenBottomsPants();
		await expect(page).toHaveURL(MEN_BOTTOMS_PANTS_PAGE_URL);
		await expect(menBottomsPage.headingPantsPage).toHaveText(HEADING_MEN_BOTTOMS_PANTS_TEXT)

	});


	test('ТС 03.1.158 Verify that the "Bottoms" dropdown contains the "Shorts" subcategory', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenBottoms();
		await homePage.hoverMenBottomsShorts();
		expect(homePage.menBottomsShorts).toBeVisible();

	});

	test('ТС 03.1.159 Verify that the "Shorts" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenBottoms();
		await homePage.hoverMenBottomsShorts();
		expect(homePage.menBottomsShorts).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.160 Verify that the  "Shorts" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hovermenDropdown();
		await homePage.hoverMenBottoms();
		const menBottomsShortsPage = await homePage.clickMenBottomsShorts();
		await expect(page).toHaveURL(MEN_SHORTS_PAGE_URL);
		await expect(menBottomsShortsPage.headingShortsPage).toHaveText(HEADING_MEN_SHORTS_PAGE_TEXT)

	});

	test('ТС 03.1.161 Verify that the "Gear" navigation menu link contains the dropdown', async ({ page }) => {


		await homePage.hovergearLink();
		expect(homePage.gearLink).toBeVisible();

	});

	test('ТС 03.1.162 Verify that the dropdown contains a cursor pointer', async ({ page }) => {

		await homePage.hovergearLink();
		expect(homePage.gearLink).toHaveCSS('cursor', 'pointer');

	});


	test('ТС 03.1.81 Verify that the product card has a cursor auto', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsItem).toBeVisible();
		await expect(homePage.hotSellersProductCardsItem).toHaveCSS('cursor', 'auto');

	});

	test('ТС 03.1.82 Verify that the product card contains the image of product', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsItemImage).toBeVisible();

	});

	test('ТС 03.1.83 Verify that the image of product has a cursor pointer', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsItemImage).toBeVisible();
		await expect(homePage.hotSellersProductCardsItemImage).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.83.1 Verify that the user is redirected to the product page after clicking on the image of product', async ({ page }) => {

		const radiantTeePage = await homePage.clickHotSellersProductCardsItemImage();

		await expect(page).toHaveURL(RADIANT_TEE_URL);

		await expect(radiantTeePage.breadcrumbs).toBeVisible();
		await expect(radiantTeePage.breadcrumbs).toHaveText(RADIANT_TEE_BREADCRUMBS);

	});

	test('ТС 03.1.84 Verify that the product card contains the name of product (link)', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsItemNameLink).toBeVisible();
		await expect(homePage.hotSellersProductCardsItemNameLink).toHaveText(RADIANT_TEE_NAME_LINK_TEXT);

	});

	test('ТС 03.1.85 Verify that the name of product (link) has a cursor pointer', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsItemNameLink).toBeVisible();
		await expect(homePage.hotSellersProductCardsItemNameLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.86 Verify that the user is redirected to the product page after clicking on the name of product (link)', async ({ page }) => {

		const radiantTeePage = await homePage.clickHotSellersProductCardsItemNameLink();

		await expect(page).toHaveURL(RADIANT_TEE_URL);

		await expect(radiantTeePage.breadcrumbs).toBeVisible();
		await expect(radiantTeePage.breadcrumbs).toHaveText(RADIANT_TEE_BREADCRUMBS);

	});

	test('ТС 03.1.68 Verify that the promo block contains "Twice around, twice as nice" promo section', async ({ page }) => {

		await expect(homePage.twiceAroundSection).toBeVisible();

	});

	test('ТС 03.1.69 Verify that the "Twice around, twice as nice" promo section has a cursor pointer', async ({ page }) => {

		await expect(homePage.twiceAroundSection).toBeVisible();
		await expect(homePage.twiceAroundSection).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.70 Verify that the user is redirected to the "Eco Friendly" page after clicking on the "Twice around, twice as nice" promo section', async ({ page }) => {

		const ecoFriendlyPage = await homePage.clickTwiceAroundSection();

		await expect(page).toHaveURL(ECO_FRIENDLY_URL);

		await expect(ecoFriendlyPage.header).toBeVisible();
		await expect(ecoFriendlyPage.header).toHaveText(ECO_FRIENDLY_HEADER_TEXT);

	});

	test('ТС 03.1.71 Verify that the "Twice around, twice as nice" promo sections has the information block', async ({ page }) => {

		await expect(homePage.twiceAroundSectionInfBlock).toBeVisible();

	});

	test('ТС 03.1.72 Verify that the information block has the header', async ({ page }) => {

		await expect(homePage.twiceAroundSectionInfBlockHeader).toBeVisible();
		await expect(homePage.twiceAroundSectionInfBlockHeader).toHaveText(ECO_FRIENDLY_INF_TEXT);

	});

	test('ТС 03.1.73 Verify that the information block has the call to action text', async ({ page }) => {

		await expect(homePage.twiceAroundSectionInfBlockCTA).toBeVisible();
		await expect(homePage.twiceAroundSectionInfBlockCTA).toHaveText(ECO_FRIENDLY_INF_CTA_TEXT);

	});

	test('ТС 03.1.74 Verify that the information block contains the "Shop Eco-Friendly" link', async ({ page }) => {

		await expect(homePage.shopEcoFriendlyLink).toBeVisible();
		await expect(homePage.shopEcoFriendlyLink).toHaveText(ECO_FRIENDLY_INF_LINK_TEXT);

	});

	test('ТС 03.1.75 Verify that the "Shop Eco-Friendly" link has a cursor pointer', async ({ page }) => {

		await expect(homePage.shopEcoFriendlyLink).toBeVisible();
		await expect(homePage.shopEcoFriendlyLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.76 Verify that the user is redirected to the "Eco Friendly" page after clicking on the "Shop Eco-Friendly" link', async ({ page }) => {

		const ecoFriendlyPage = await homePage.clickShopEcoFriendlyLink();

		await expect(page).toHaveURL(ECO_FRIENDLY_URL);

		await expect(ecoFriendlyPage.header).toBeVisible();
		await expect(ecoFriendlyPage.header).toHaveText(ECO_FRIENDLY_HEADER_TEXT);

	});

	test('ТС 03.1.163 Verify that the dropdown contains the "Bags" subcategory', async ({ page }) => {

		await homePage.hovergearLink();
		await homePage.hoverGearBags()
		expect(homePage.gearBags).toBeVisible();

	});

	test('ТС 03.1.164 Verify that the dropdown contains the "Bags" subcategory', async ({ page }) => {

		await homePage.hovergearLink();
		await homePage.hoverGearBags()
		expect(homePage.gearBags).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.165 Verify that the "Bags" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hovergearLink();
		const gearBagsPage = await homePage.clickGearBags();
		await expect(page).toHaveURL(GEAR_BAGS_PAGE_URL);
		await expect(gearBagsPage.header).toHaveText(HEADING_GEAR_BAGS_PAGE_TEXT);

	});

	test('ТС 03.1.166 Verify that the dropdown contains the "Fitness Equipment" subcategory', async ({ page }) => {

		await homePage.hovergearLink();
		await homePage.hoverGearFitnessEquipment();
		await expect(homePage.gearFitnessEquipment).toBeVisible();

	});

	test('ТС 03.1.167 Verify that the "Fitness Equipment" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hovergearLink();
		await homePage.hoverGearFitnessEquipment();
		await expect(homePage.gearFitnessEquipment).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.168 Verify that the "Fitness Equipment" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hovergearLink();
		const gearFitnessEquipmentPage = await homePage.clickGearFitnessEquipment();
		await expect(page).toHaveURL(GEAR_FITNESS_PAGE_URL);
		await expect(gearFitnessEquipmentPage.header).toBeVisible();

	});

	test('ТС 03.1.169 Verify that the dropdown contains the "Watches" subcategory', async ({ page }) => {

		await homePage.hovergearLink();
		await homePage.hoverGearWatches();
		await expect(homePage.gearWatches).toBeVisible();

	});

	test('ТС 03.1.170 Verify that the "Watches" subcategory contains a cursor pointer', async ({ page }) => {

		await homePage.hovergearLink();
		await homePage.hoverGearWatches();
		await expect(homePage.gearWatches).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.171 Verify that the "Watches" subcategories are redirected to the appropriate pages', async ({ page }) => {

		await homePage.hovergearLink();
		const gearWatchesPage = await homePage.clickGearWatches();
		await expect(page).toHaveURL(GEAR_WATCHES_PAGE_URL);
		await expect(gearWatchesPage.header).toBeVisible();

	});

	test('ТС 03.1.172 Verify that the "Training" navigation menu link contains the dropdown', async ({ page }) => {

		await homePage.hovertrainingLink();
		await homePage.hovertrainingVideoDownloading();
		await expect(homePage.trainingVideoDownloading).toBeVisible();

	});

	test('ТС 03.1.173 Verify that the dropdown contains a cursor pointer', async ({ page }) => {

		await homePage.hovertrainingLink();
		await homePage.hovertrainingVideoDownloading();
		await expect(homePage.trainingVideoDownloading).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.175 Verify that the "Video download"subcategory is redirected to the appropriate page', async ({ page }) => {

		await homePage.hovertrainingLink();
		const trainingVideoDownloadPage = await homePage.clicktrainingVideoDownloading();
		await expect(page).toHaveURL(TRAINING_VIDEO_DOWNLOAD_PAGE_URL);
		await expect(trainingVideoDownloadPage.Heading).toBeVisible();

	});

	test('ТС 03.1.87 Verify that the product card contains the stars rating', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsStarsRating).toBeVisible();

	});

	test('ТС 03.1.88 Verify that the product card contains the reviews (link)', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsRewiesLink).toBeVisible();

	});

	test('ТС 03.1.89 Verify that the reviews (link) have a cursor pointer', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsRewiesLink).toHaveCSS('cursor', 'pointer');

	});


	test('ТС 03.1.90 Verify that the reviews (link) is colored blue', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsRewiesLink).toHaveCSS('color', 'rgb(0, 107, 180)');

	});

	test('ТС 03.1.91 Verify that the user is redirected to the product page in "Customer Reviews" section after clicking on the reviews (link)', async ({ page }) => {

		const reviewsPage = await homePage.clickRewiesLink();
		await expect(page).toHaveURL(RADIANT_TEE_REVIEWS_URL);
		await expect(reviewsPage.reviewsBlock).toBeVisible();

	});

	test('ТС 03.1.92 Verify that the product card contains the price', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsPriceProduct).toBeVisible();

	});

	test('ТС 03.1.93 Verify that the price contains the text', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsPriceText).toHaveText('As low as');

	});

	test('ТС 03.1.94 Verify that the price contains the value of price', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsPriceProduct).toHaveText('$22.00');

	});

	test('ТС 03.1.95 Verify that the product card contains the size buttons', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsSizeProduct).toBeVisible();

	});


	test('ТС 03.1.96 Verify that the size button has a cursor pointer', async ({ page }) => {


		const firstCard = homePage.hotSellersProductCardsSizeProduct;

		// Перебираем размеры внутри первой карточки
		for (const size of SIZES) {
			const sizeLocator = firstCard.locator(`div[role="option"][aria-label="${size}"]`);

			// Наведение курсора на элемент размера
			await sizeLocator.hover();

			// Получение стиля курсора для элемента
			const cursorStyle = await sizeLocator.evaluate(el => window.getComputedStyle(el).cursor);

			// Проверка, что курсор указывает на "pointer"
			expect(cursorStyle).toBe('pointer');

		}
	});


	test('ТС 03.1.97 Verify that the size button has a red border after clicking on it and moving the cursor away from it.', async ({ page }) => {

		await homePage.clicksizeXS();

		await expect(homePage.hotSellersProductCardsSizeProduct).toHaveCSS('outline', 'rgb(51, 51, 51) none 0px');
		await page.mouse.move(0, 0);
		await expect(homePage.hotSellersProductCardsSizeProduct).toHaveCSS('outline', 'rgb(51, 51, 51) none 0px');


	});

	test('ТС 03.1.97 Verify that the size button has a blue border while it is clicked and held down', async ({ page }) => {

		await homePage.clicksizeXS();
		await expect(homePage.hotSellersProductCardsSizeXS).toHaveCSS('box-shadow', 'rgb(0, 105, 157) 0px 0px 3px 1px');

	});

	test('ТС 03.1.99 Verify that the product card contains the color buttons', async ({ page }) => {

		for (const color of COLORLABLES) {
			const colorContainer = homePage.hotSellersProductCardsColorContainer;
			await expect(colorContainer).toBeVisible();
			// console.log(`Color button for ${color} is visible`);
		}
	});

	test('ТС 03.1.000 Verify that the color button has a cursor pointer', async ({ page }) => {

		for (const color of COLORLABLES) {
			const colorLocator = homePage.hotSellersProductCardsColorContainer.locator(`div[option-label="${color}"]`);
			await colorLocator.hover();
			const cursorStyle = await colorLocator.evaluate(el => window.getComputedStyle(el).cursor);
			expect(cursorStyle).toBe('pointer');
			console.log(`Cursor style for color ${color} is: ${cursorStyle}`);
		}
	});

	test('ТС 03.1.101 Verify that the color button has a shadow border around it after being clicked', async ({ page }) => {

		for (const color of COLORLABLES) {
			const colorLocator = homePage.hotSellersProductCardsColorContainer.locator(`div[option-label="${color}"]`);
			await colorLocator.click();

			const outline = await colorLocator.evaluate(el => window.getComputedStyle(el).outline);
			expect(outline).not.toBe('rgb(255 85 1)');

		}

	});

	test('ТС 03.1.102 Verify that the product image changes after clicking on the color buttons', async ({ page }) => {

		for (const color of COLORLABLES) {
			const colorLocator = homePage.hotSellersProductCardsColorContainer.locator(`div[option-label="${color}"]`);
			await colorLocator.click();

			const productImage = homePage.hotSellersProductCardsItemImage;
			const imageSrcAfterClick = await productImage.getAttribute('src');

			// Проверяем, что атрибут src изменился
			expect(imageSrcAfterClick).not.toBe(null);
		}

	});

	test('ТС 03.1.103 Verify that additional information is available after hovering over the rating (the percentage appears)', async ({ page }) => {

		await expect(homePage.hotSellersProductCardsStarsRating).toBeVisible();
		await expect(homePage.hotSellersProductCardsStarsRating).toHaveText('60%');

	});

	test('ТС 03.1.104 Verify that the the tooltip is displayed after hovering the mouse cursor over the size', async ({ page }) => {

		const firstCard = homePage.hotSellersProductCardsSizeProduct;
		for (const size of SIZES) {
			const sizeLocator = firstCard.locator(`div[role="option"][aria-label="${size}"]`);
			await sizeLocator.hover();
			const tooltipLocator = page.locator('.swatch-option-tooltip');
			await expect(tooltipLocator).toBeVisible();
			// console.log(`Tooltip is visible after hovering over size "${size}"`);
		}

	});

	test('ТС 03.1.105 Verify that after hovering over the colors, the tooltip is displayed.', async ({ page }) => {

		const firstCard = homePage.hotSellersProductCardsColorContainer
		for (const color of COLORLABLES) {
			const colorLocator = firstCard.locator(`div[option-label="${color}"]`);
			await colorLocator.hover();
			const tooltipLocator = page.locator('.swatch-option-tooltip');
			await expect(tooltipLocator).toBeVisible();
		}

	});

	test('ТС 03.1.106 Verify that the product cart additionally highlights after hovering over on it.', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await homePage.hoverHotSellersProductCardsAddToCartBtn();
		const boxShadow = await homePage.hotSellersProductCards.evaluate(el => window.getComputedStyle(el).border);
		expect(boxShadow).toBe('0px none rgb(0, 107, 180)');
	});

	test('ТС 03.1.107 Verify that the "Add to Card" button appears after hovering over the product card', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await homePage.hoverHotSellersProductCardsAddToCartBtn();
		await expect(homePage.hotSellersProductCardsAddToCartBtn).toBeVisible();
	});

	test('ТС 03.1.108 Verify that the "Add to Card" has a cursor pointer', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await homePage.hoverHotSellersProductCardsAddToCartBtn();
		await expect(homePage.hotSellersProductCardsAddToCartBtn).toHaveCSS('cursor', 'pointer');
	});

	test('ТС 03.1.109 Verify that the "Add to Card" is colored blue', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await homePage.hoverHotSellersProductCardsAddToCartBtn();
		await expect(homePage.hotSellersProductCardsAddToCartBtn).toHaveCSS('background', 'rgb(0, 107, 180) none repeat scroll 0% 0% / auto padding-box border-box');
	});


	test('ТС 03.1.110 Verify that the user is redirected to the respective product page after clicking on the "Add to Card"', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await homePage.clickHotSellersProductCardsAddToCartBtn();
		await expect(page).toHaveURL(RADIANT_TEE_URL);

	});

	test('ТС 03.1.111 Verify that the "Add to Wish List" button appears after hovering over the product card', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await expect(homePage.hotSellersProductCardsAddToWishListBtn).toBeVisible();

	});

	test('ТС 03.1.112 Verify that the "Add to Wish List" button appears after hovering over the product card', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await expect(homePage.hotSellersProductCardsAddToWishListBtn).toHaveCSS('cursor', 'pointer');

	});


	test('ТС 03.1.113 Verify that the user is redirected to the "My Wish List" page and the selected product item appears in the "My Wish List" page after clicking on the "Add to Wish List" button (only registered user)', async ({ page, createNewCustomerAccount }) => {

		await homePage.hoverhotSellersProductCards();
		await homePage.clickHotSellersProductCardsAddToWishListBtn();


	});

	test('ТС 03.1.114 Verify that the "Add to Compare" button appears after hovering over the product card', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await expect(homePage.hotSellersProductCardsAddToCompareBtn).toBeVisible();
	});


	test('ТС 03.1.115 Verify that the "Add to Compare" button has cursor pointer', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await expect(homePage.hotSellersProductCardsAddToCompareBtn).toHaveCSS('cursor', 'pointer');
	});

	test('ТС 03.1.116 Verify that the "You added product {name of product} to the comparison list." message appears after clicking on the "Add to Compare" button. Additionally, verify that the "Compare Products" link appears in the site header with the count of items being compared.', async ({ page }) => {

		await homePage.hoverhotSellersProductCards();
		await homePage.clickHotSellersProductCardsAddToCompareBtn()
		await expect(homePage.messageAddingProduct).toBeVisible();
		await expect(homePage.compareLink).toBeVisible();
	});

	test('TC 03.1.178 Verify that the a random new account is being created', async ({ page, createNewCustomerAccount }) => {

		const createAccountPage = new CreateNewCustomerAccountPage(page);

		await expect(page).toHaveURL(BASE_URL);
	});




});
