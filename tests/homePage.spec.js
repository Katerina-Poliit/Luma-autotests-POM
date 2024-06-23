const { test, expect } = require('@playwright/test');
import { BASE_URL, WHATS_NEW_LINK_TEXT, WOMEN_LINK_TEXT, MEN_LINK_TEXT, GEAR_LINK_TEXT, TRAINING_LINK_TEXT, SALE_LINK_TEXT, WHATS_NEW_URL, WHATS_NEW_PAGE_HEADER_TEXT, WOMEN_URL, WOMEN_PAGE_HEADER_TEXT, MEN_URL, MEN_PAGE_HEADER_TEXT, GEAR_URL, GEAR_PAGE_HEADER_TEXT, TRAINING_URL, TRAINING_PAGE_HEADER_TEXT, SALE_URL, SALE_PAGE_HEADER_TEXT,WOMEN_CATAGORY_TOPS, WOMEN_TOPS_PAGE_URL, WOMEN_TOPS_SUBCATEGORY_JACKETS, WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS, WOMEN_TOPS_JACKETS_URL,  WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS_URL, PANTS_URL, PANTS_HEADER_TEXT, OFF_20_SECTION_HEADER_TEXT, OFF_20_SECTION_CTA_TEXT, SHOP_PANTS_LINK_TEXT, HEADING_TOPS_TEXT, HEADING_JACKETS_TEXT, HEADING_HOODIES_TEXT, WOMEN_TOPS_SUBCATEGORY_TEES_TEXT, WOMEN_TOPS_TEES_URL, HEADING_TEES_PAGE_TEXT, WOMEN_TOPS_SUBCATEGORY_BRAS_TANKS, WOMEN_TOPS_BRASSTANKS_URL, HEADING_BRASTANKS_PAGE_TEXT, WOMEN_CATAGORY_BOTTOMS, WOMEN_BOTTOMS_PAGE_URL, HEADING_BOTTOMS_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, WOMEN_BOTTOMS_PANTS_PAGE_URL, HEADING_WOMEN_PANTS_PAGE_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_SHORTS_TEXT, WOMEN_SHORTS_PAGE_URL, HEADING_WOMEN_SHORTS_PAGE_TEXT, MEN_DROPDOWN_TEXT, MEN_CATAGORY_TOPS_TEXT, MEN_TOPS_PAGE_URL, HEADING_MEN_TOPS_PAGE_TEXT, MEN_TOPS_SUBCATEGORY_JACKETS, MEN_TOPS_JACKETS_URL, MEN_TOPS_HOODIESSWEATSHIRTS_TEXT, MEN_HOODIESSWEATSHIRTS_URL, MEN_TOPS_TEES_TEXT, TEES_URL, TEES_HEADER_TEXT, EVEN_MORE_SECTION_HEADER_TEXT, EVEN_MORE_SECTION_CTA_TEXT, SHOP_TEES_LINK_TEXT, MEN_TOPS_TESS_PAGE_URL, MEN_TOPS_SUBCATEGORY_TANKS_TEXT, MEN_TOPS_TANKS_PAGE_URL, HEADING_MEN_TANKS_PAGE_TEXT,  MEN_CATAGORY_BOTTOMS, MEN_BOTTOMS_PAGE_URL,MEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, MEN_BOTTOMS_PANTS_PAGE_URL, HEADING_MEN_BOTTOMS_PANTS_TEXT, MEN_SHORTS_PAGE_URL, HEADING_MEN_SHORTS_PAGE_TEXT, GEAR_BAGS_PAGE_URL, HEADING_GEAR_BAGS_PAGE_TEXT, GEAR_FITNESS_PAGE_URL, GEAR_WATCHES_PAGE_URL, TRAINING_VIDEO_DOWNLOAD_PAGE_URL } from "../helpers/testDataHomePage";
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

});
