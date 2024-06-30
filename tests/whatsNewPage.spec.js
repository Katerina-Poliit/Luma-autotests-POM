const { expect } = require('@playwright/test');
import { test, productAddedToCompare } from "../fixtures/base";
import { HomePage } from "../pages/homePage";

import { BASE_URL, WHATS_NEW_URL, HOME_PAGE_BREADCRUMBS, WHATS_NEW_HEADER_TEXT, NEW_IN_WOMENS_SECTION_HEADER_TEXT, HOODIES_SWEATSHIRTS_LINK_TEXT,  HOODIES_SWEATSHIRTS_HEADING_TEXT, HOODIES_SWEATSHIRTS_URL, HOODIES_SWEATSHIRTS_BREADCRUMBS_TEXT, JACKETS_URL, JACKETS_LINK_TEXT, JACKETS_BREADCRUMBS_TEXT, JACKETS_HEADING_TEXT, TEES_LINK_TEXT, TEES_URL, TEES_BREADCRUMBS_TEXT, TEES_HEADING_TEXT, BRAS_TANKS_LINK_TEXT, BRAS_TANKS_URL, BRAS_TANKS_BREADCRUMBS_TEXT, BRAS_TANKS_HEADING_TEXT, PANTS_LINK_TEXT, PANTS_URL, PANTS_BREADCRUMBS_TEXT, PANTS_HEADING_TEXT, SHORTS_LINK_TEXT, SHORTS_URL, SHORTS_BREADCRUMBS_TEXT, SHORTS_HEADING_TEXT, NEW_IN_MEN_SECTION_HEADER_TEXT, MEN_HOODIES_SWEATSHIRTS_LINK_TEXT, MEN_HOODIES_SWEATSHIRTS_URL, MEN_HOODIES_SWEATSHIRTS_BREADCRUMBS_TEXT, MEN_HOODIES_SWEATSHIRTS_HEADING_TEXT, MEN_JACKETS_LINK_TEXT, MEN_JACKETS_URL, MEN_JACKETS_HEADING_TEXT, MEN_JACKETS_BREADCRUMBS_TEXT, MEN_TEES_URL, MEN_TEES_LINK_TEXT, MEN_TEES_BREADCRUMBS_TEXT, MEN_TEES_HEADING_TEXT, MEN_TANKS_URL, MEN_TANKS_LINK_TEXT, MEN_TANKS_BREADCRUMBS_TEXT, MEN_TANKS_HEADING_TEXT, MEN_PANTS_URL, MEN_PANTS_LINK_TEXT, MEN_PANTS_BREADCRUMBS_TEXT, MEN_PANTS_HEADING_TEXT, MEN_SHORTS_URL, MEN_SHORTS_LINK_TEXT, MEN_SHORTS_BREADCRUMBS_TEXT, MEN_SHORTS_HEADING_TEXT, COMPARE_PRODUCT_SECTION_HEADING_TEXT, COMPARE_PRODUCT_SECTION_TEXT, REMOVE_THIS_ITEM__LINK_TEXT, REMOVE_MODAL_WINDOW_HEADING_TEXT, COMPARE_BTN_TEXT, COMPARE_URL_REGEX, COMPARE_PRODUCTS_PAGE_HEADING_TEXT, MY_WISH_LIST_SECTION_HEADING_TEXT, MY_WISH_LIST_SECTION_TEXT } from "../helpers/testDataWhatsNewPage";

test.describe('whatsNewPage.spec', () => {

    let homePage;
    let whatsNewPage;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        await homePage.open();
        whatsNewPage = await homePage.clickWatsNewLink();
    });

	test('ТС 04.1.1 Verify that the user can navigate by breadcrumbs', async ({ page }) => {

			await expect(page).toHaveURL(WHATS_NEW_URL); 
			await expect(whatsNewPage.homeBreadcrumbs).toBeVisible();
			await expect(whatsNewPage.homeBreadcrumbs).toHaveCSS('cursor', 'pointer');
			await expect(whatsNewPage.homeBreadcrumbs).toHaveText(HOME_PAGE_BREADCRUMBS);

			await expect(whatsNewPage.header).toBeVisible();
			await expect(whatsNewPage.header).toHaveText(WHATS_NEW_HEADER_TEXT);

			await whatsNewPage.clickHomeBreadcrumbs(); 

			await expect(page).toHaveURL(BASE_URL);
			await expect(whatsNewPage.header).not.toBeVisible();

	});

	test('ТС 04.1.2 Verify that the "What\'s New" page contains the header', async ({ page }) => {

			await expect(whatsNewPage.header).toBeVisible();
			await expect(whatsNewPage.header).toHaveText(WHATS_NEW_HEADER_TEXT);
			
	});

	test('ТС 04.1.3 Verify that the "What\'s New" page contains the "NEW IN WOMEN\'S" section', async ({ page }) => {

		await expect(whatsNewPage.newInWomensSection).toBeVisible();
		
	});

	test('ТС 04.1.4 Verify that the "NEW IN WOMEN\'S" section contains the header', async ({ page }) => {

		await expect(whatsNewPage.newInWomensSectionHeader).toBeVisible();
		await expect(whatsNewPage.newInWomensSectionHeader).toHaveText(NEW_IN_WOMENS_SECTION_HEADER_TEXT);
		
	});

	test('ТС 04.1.5 Verify that the "NEW IN WOMEN\'S" section contains the "Hoodies & Sweatshirts" link', async ({ page }) => {

		await expect(whatsNewPage.hoodiesSweatshirtsLink).toBeVisible();
		await expect(whatsNewPage.hoodiesSweatshirtsLink).toHaveText(HOODIES_SWEATSHIRTS_LINK_TEXT);
		
	});

	test('ТС 04.1.6 Verify that the "Hoodies & Sweatshirts" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.hoodiesSweatshirtsLink).toBeVisible();
		await expect(whatsNewPage.hoodiesSweatshirtsLink).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 04.1.7 Verify that the user is redirected to the "Hoodies & Sweatshirts" page after clicking on the "Hoodies & Sweatshirts" link', async ({ page }) => {

		const womenHoodiesSweatshirtsPage = await whatsNewPage.clickHoodiesSweatshirtsLink();

		await expect(page).toHaveURL(HOODIES_SWEATSHIRTS_URL);

		await expect(womenHoodiesSweatshirtsPage.hoodiesSweatshirtsBreadcrumbs).toBeVisible();
		await expect(womenHoodiesSweatshirtsPage.hoodiesSweatshirtsBreadcrumbs).toHaveText(HOODIES_SWEATSHIRTS_BREADCRUMBS_TEXT);

		await expect(womenHoodiesSweatshirtsPage.headingHoodiesSweatshirtsPage).toBeVisible();
		await expect(womenHoodiesSweatshirtsPage.headingHoodiesSweatshirtsPage).toHaveText(HOODIES_SWEATSHIRTS_HEADING_TEXT);
		
	});

	test('ТС 04.1.8 Verify that the "NEW IN WOMEN\'S" section contains the "Jackets" link', async ({ page }) => {

		await expect(whatsNewPage.jacketsLink).toBeVisible();
		await expect(whatsNewPage.jacketsLink).toHaveText(JACKETS_LINK_TEXT);
		
	});

	test('ТС 04.1.9 Verify that the "Jackets" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.jacketsLink).toBeVisible();
		await expect(whatsNewPage.jacketsLink).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 04.1.10 Verify that the user is redirected to the "Jackets" page after clicking on the "Jackets" link', async ({ page }) => {

		const womenJacketsPage = await whatsNewPage.clickJacketsLink();

		await expect(page).toHaveURL(JACKETS_URL);

		await expect(womenJacketsPage.jacketsBreadcrumbs).toBeVisible();
		await expect(womenJacketsPage.jacketsBreadcrumbs).toHaveText(JACKETS_BREADCRUMBS_TEXT);

		await expect(womenJacketsPage.headingJacketsPage).toBeVisible();
		await expect(womenJacketsPage.headingJacketsPage).toHaveText(JACKETS_HEADING_TEXT);
		
	});

	test('ТС 04.1.11 Verify that the "NEW IN WOMEN\'S" section contains the "Tees" link', async ({ page }) => {

		await expect(whatsNewPage.teesLink).toBeVisible();
		await expect(whatsNewPage.teesLink).toHaveText(TEES_LINK_TEXT);
		
	});

	test('ТС 04.1.12 Verify that the "Tees" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.teesLink).toBeVisible();
		await expect(whatsNewPage.teesLink).toHaveCSS('cursor', 'pointer');
		
	});
	
	test('ТС 04.1.13 Verify that the user is redirected to the "Tees" page after clicking on the "Tees" link', async ({ page }) => {

		const womenTeesPage = await whatsNewPage.clickTeesLink();

		await expect(page).toHaveURL(TEES_URL);

		await expect(womenTeesPage.teesBreadcrumbs).toBeVisible();
		await expect(womenTeesPage.teesBreadcrumbs).toHaveText(TEES_BREADCRUMBS_TEXT);

		await expect(womenTeesPage.headingTessPage).toBeVisible();
		await expect(womenTeesPage.headingTessPage).toHaveText(TEES_HEADING_TEXT);
		
	});

	test('ТС 04.1.14 Verify that the "NEW IN WOMEN\'S" section contains the "Bras & Tanks" link', async ({ page }) => {

		await expect(whatsNewPage.brasTanksLink).toBeVisible();
		await expect(whatsNewPage.brasTanksLink).toHaveText(BRAS_TANKS_LINK_TEXT);
		
	});

	test('ТС 04.1.15 Verify that the "Bras & Tanks" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.brasTanksLink).toBeVisible();
		await expect(whatsNewPage.brasTanksLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.16 Verify that the user is redirected to the "Bras & Tanks" page after clicking on the "Bras & Tanks" link', async ({ page }) => {

		const womenBrassTanksPage = await whatsNewPage.clickBrasTanksLink();

		await expect(page).toHaveURL(BRAS_TANKS_URL);

		await expect(womenBrassTanksPage.brassTanksBreadcrumbs).toBeVisible();
		await expect(womenBrassTanksPage.brassTanksBreadcrumbs).toHaveText(BRAS_TANKS_BREADCRUMBS_TEXT);

		await expect(womenBrassTanksPage.headingBrassTanksPage).toBeVisible();
		await expect(womenBrassTanksPage.headingBrassTanksPage).toHaveText(BRAS_TANKS_HEADING_TEXT);
		
	});

	test('ТС 04.1.17 Verify that the "NEW IN WOMEN\'S" section contains the "Pants" link', async ({ page }) => {

		await expect(whatsNewPage.pantsLink).toBeVisible();
		await expect(whatsNewPage.pantsLink).toHaveText(PANTS_LINK_TEXT);
		
	});

	test('ТС 04.1.18 Verify that the "Pants" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.pantsLink).toBeVisible();
		await expect(whatsNewPage.pantsLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.19 Verify that the user is redirected to the "Pants" page after clicking on the "Pants" link', async ({ page }) => {

		const womenPantsPage = await whatsNewPage.clickPantsLink();

		await expect(page).toHaveURL(PANTS_URL);

		await expect(womenPantsPage.pantsBreadcrumbs).toBeVisible();
		await expect(womenPantsPage.pantsBreadcrumbs).toHaveText(PANTS_BREADCRUMBS_TEXT);

		await expect(womenPantsPage.headingPanstPage).toBeVisible();
		await expect(womenPantsPage.headingPanstPage).toHaveText(PANTS_HEADING_TEXT);
		
	});

	test('ТС 04.1.20 Verify that the "NEW IN WOMEN\'S" section contains the "Shorts" link', async ({ page }) => {

		await expect(whatsNewPage.shortsLink).toBeVisible();
		await expect(whatsNewPage.shortsLink).toHaveText(SHORTS_LINK_TEXT);
		
	});

	test('ТС 04.1.21 Verify that the "Shorts" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.shortsLink).toBeVisible();
		await expect(whatsNewPage.shortsLink).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 04.1.22 Verify that the user is redirected to the "Shorts" page after clicking on the "Shorts" link', async ({ page }) => {

		const womenShortsPage = await whatsNewPage.clickShortsLink();

		await expect(page).toHaveURL(SHORTS_URL);

		await expect(womenShortsPage.shortsBreadcrumbs).toBeVisible();
		await expect(womenShortsPage.shortsBreadcrumbs).toHaveText(SHORTS_BREADCRUMBS_TEXT);

		await expect(womenShortsPage.headingShortsPage).toBeVisible();
		await expect(womenShortsPage.headingShortsPage).toHaveText(SHORTS_HEADING_TEXT);
		
	});

	test('ТС 04.1.23 Verify that the "What\'s New" page contains the "NEW IN MEN\'S" section', async ({ page }) => {

		await expect(whatsNewPage.newInMensSection).toBeVisible();
		
	});

	test('ТС 04.1.24 Verify that the "NEW IN MEN\'S" section contains the heading', async ({ page }) => {

		await expect(whatsNewPage.newInWomensSectionHeading).toBeVisible();
		await expect(whatsNewPage.newInWomensSectionHeading).toHaveText(NEW_IN_MEN_SECTION_HEADER_TEXT);
		
	});

	test('ТС 04.1.25 Verify that the "NEW IN MEN\'S" section contains the "Hoodies & Sweatshirts" link', async ({ page }) => {

		await expect(whatsNewPage.menHoodiesSweatshirtsLink).toBeVisible();
		await expect(whatsNewPage.menHoodiesSweatshirtsLink).toHaveText(MEN_HOODIES_SWEATSHIRTS_LINK_TEXT);
		
	});

	test('ТС 04.1.26 Verify that the "Hoodies & Sweatshirts" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.menHoodiesSweatshirtsLink).toBeVisible();
		await expect(whatsNewPage.menHoodiesSweatshirtsLink).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 04.1.27 Verify that the user is redirected to the "Hoodies & Sweatshirts" page after clicking on the "Hoodies & Sweatshirts" link', async ({ page }) => {

		const menHoddiesSweatshirtsPage = await whatsNewPage.clickMenHoodiesSweatshirtsLink();

		await expect(page).toHaveURL(MEN_HOODIES_SWEATSHIRTS_URL);

		await expect(menHoddiesSweatshirtsPage.hoddiesSweatshirtsBreadcrumbs).toBeVisible();
		await expect(menHoddiesSweatshirtsPage.hoddiesSweatshirtsBreadcrumbs).toHaveText(MEN_HOODIES_SWEATSHIRTS_BREADCRUMBS_TEXT);

		await expect(menHoddiesSweatshirtsPage.headingHoddiesSweatshirtsPage).toBeVisible();
		await expect(menHoddiesSweatshirtsPage.headingHoddiesSweatshirtsPage).toHaveText(MEN_HOODIES_SWEATSHIRTS_HEADING_TEXT);
		
	});

	test('ТС 04.1.28 Verify that the "NEW IN MEN\'S" section contains the "Jackets" link', async ({ page }) => {

		await expect(whatsNewPage.menJacketsLink).toBeVisible();
		await expect(whatsNewPage.menJacketsLink).toHaveText(MEN_JACKETS_LINK_TEXT);
		
	});

	test('ТС 04.1.29 Verify that the "Jackets" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.menJacketsLink).toBeVisible();
		await expect(whatsNewPage.menJacketsLink).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 04.1.30 Verify that the user is redirected to the "Jackets" page after clicking on the "Jackets" link', async ({ page }) => {

		const menJacketsPage = await whatsNewPage.clickMenJacketsLink();

		await expect(page).toHaveURL(MEN_JACKETS_URL);

		await expect(menJacketsPage.jacketsBreadcrumbs).toBeVisible();
		await expect(menJacketsPage.jacketsBreadcrumbs).toHaveText(MEN_JACKETS_BREADCRUMBS_TEXT);

		await expect(menJacketsPage.headingJacketsPage).toBeVisible();
		await expect(menJacketsPage.headingJacketsPage).toHaveText(MEN_JACKETS_HEADING_TEXT);
		
	});

	test('ТС 04.1.31 Verify that the "NEW IN MEN\'S" section contains the "Tees" link', async ({ page }) => {

		await expect(whatsNewPage.menTeesLink).toBeVisible();
		await expect(whatsNewPage.menTeesLink).toHaveText(MEN_TEES_LINK_TEXT);
		
	});

	test('ТС 04.1.32 Verify that the "Tees" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.menTeesLink).toBeVisible();
		await expect(whatsNewPage.menTeesLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.33 Verify that the user is redirected to the "Tees" page after clicking on the "Tees" link', async ({ page }) => {

		const menTeesPage = await whatsNewPage.clickMenTeesLink();

		await expect(page).toHaveURL(MEN_TEES_URL);

		await expect(menTeesPage.teesBreadcrumbs).toBeVisible();
		await expect(menTeesPage.teesBreadcrumbs).toHaveText(MEN_TEES_BREADCRUMBS_TEXT);

		await expect(menTeesPage.headingTeesPage).toBeVisible();
		await expect(menTeesPage.headingTeesPage).toHaveText(MEN_TEES_HEADING_TEXT);
		
	});

	test('ТС 04.1.34 Verify that the "NEW IN MEN\'S" section contains the "Tanks" link', async ({ page }) => {

		await expect(whatsNewPage.menTanksLink).toBeVisible();
		await expect(whatsNewPage.menTanksLink).toHaveText(MEN_TANKS_LINK_TEXT);
		
	});

	test('ТС 04.1.35 Verify that the "Tanks" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.menTanksLink).toBeVisible();
		await expect(whatsNewPage.menTanksLink).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 04.1.36 Verify that the user is redirected to the "Tanks" page after clicking on the "Tanks" link', async ({ page }) => {

		const menTanksPage = await whatsNewPage.clickMenTanksLink();

		await expect(page).toHaveURL(MEN_TANKS_URL);

		await expect(menTanksPage.tanksBreadcrumbs).toBeVisible();
		await expect(menTanksPage.tanksBreadcrumbs).toHaveText(MEN_TANKS_BREADCRUMBS_TEXT);

		await expect(menTanksPage.headingTanksPage).toBeVisible();
		await expect(menTanksPage.headingTanksPage).toHaveText(MEN_TANKS_HEADING_TEXT);
		
	});

	test('ТС 04.1.37 Verify that the "NEW IN MEN\'S" section contains the "Pants" link', async ({ page }) => {

		await expect(whatsNewPage.menPantsLink).toBeVisible();
		await expect(whatsNewPage.menPantsLink).toHaveText(MEN_PANTS_LINK_TEXT);
		
	});

	test('ТС 04.1.38 Verify that the "Pants" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.menPantsLink).toBeVisible();
		await expect(whatsNewPage.menPantsLink).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 04.1.39 Verify that the user is redirected to the "Pants" page after clicking on the "Pants" link', async ({ page }) => {

		const menPantsPage = await whatsNewPage.clickMenPantsLink();

		await expect(page).toHaveURL(MEN_PANTS_URL);

		await expect(menPantsPage.pantsBreadcrumbs).toBeVisible();
		await expect(menPantsPage.pantsBreadcrumbs).toHaveText(MEN_PANTS_BREADCRUMBS_TEXT);

		await expect(menPantsPage.headingPantsPage).toBeVisible();
		await expect(menPantsPage.headingPantsPage).toHaveText(MEN_PANTS_HEADING_TEXT);
		
	});

	test('ТС 04.1.40 Verify that the "NEW IN MEN\'S" section contains the "Shorts" link', async ({ page }) => {

		await expect(whatsNewPage.menShortsLink).toBeVisible();
		await expect(whatsNewPage.menShortsLink).toHaveText(MEN_SHORTS_LINK_TEXT);
		
	});

	test('ТС 04.1.41 Verify that the "Shorts" link has a cursor pointer', async ({ page }) => {

		await expect(whatsNewPage.menShortsLink).toBeVisible();
		await expect(whatsNewPage.menShortsLink).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 04.1.42 Verify that the user is redirected to the "Shorts" page after clicking on the "Shorts" link', async ({ page }) => {

		const menShortsPage = await whatsNewPage.clickMenShortsLink();

		await expect(page).toHaveURL(MEN_SHORTS_URL);

		await expect(menShortsPage.shortsBreadcrumbs).toBeVisible();
		await expect(menShortsPage.shortsBreadcrumbs).toHaveText(MEN_SHORTS_BREADCRUMBS_TEXT);

		await expect(menShortsPage.headingShortsPage).toBeVisible();
		await expect(menShortsPage.headingShortsPage).toHaveText(MEN_SHORTS_HEADING_TEXT);
		
	});

	test('ТС 04.1.43 Verify that the "What\'s New" page contains the "Compare Products" section', async ({ page }) => {

		await expect(whatsNewPage.compareProductsSection).toBeVisible();
		
	});

	test('ТС 04.1.44 Verify that the "Compare Products" section contains the heading', async ({ page }) => {

		await expect(whatsNewPage.compareProductsSectionHeading).toBeVisible();
		await expect(whatsNewPage.compareProductsSectionHeading).toHaveText(COMPARE_PRODUCT_SECTION_HEADING_TEXT);
		
	});

	test('ТС 04.1.45 Verify that the "Compare Products" section contains the text "You have no items to compare." when there are no items to compare', async ({ page }) => {

		await expect(whatsNewPage.compareProductsSectionText).toBeVisible();
		await expect(whatsNewPage.compareProductsSectionText).toHaveText(COMPARE_PRODUCT_SECTION_TEXT);
		
	});


	test('ТС 04.1.46 Verify that the "Compare Products" section contains the "Remove This Item" link with the name of the added item to compare when the item is added for comparison', async ({ page, productAddedToCompare }) => {
		
		await expect(whatsNewPage.removeThisItemLink).toBeVisible();
		await expect(whatsNewPage.removeThisItemLink).toHaveText(REMOVE_THIS_ITEM__LINK_TEXT);

	});

	test('ТС 04.1.47 Verify that the "Remove This Item" link has a cursor pointer', async ({ page, productAddedToCompare }) => {
		
		await expect(whatsNewPage.removeThisItemLink).toBeVisible();
		await expect(whatsNewPage.removeThisItemLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.48 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup appears after clicking on the "Remove This Item" link', async ({ page, productAddedToCompare }) => {
		
		await whatsNewPage.clickRemoveThisItemLink();
		await expect(whatsNewPage.removeModalWindow).toBeVisible();

	});

	test('ТС 04.1.49 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup contains the "Are you sure you want to remove this item from your Compare Products list?" text', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.heading).toBeVisible();
		await expect(removeModalWindow.heading).toHaveText(REMOVE_MODAL_WINDOW_HEADING_TEXT);

	});

	test('ТС 04.1.50 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup contains the close (cross) button', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.closeBtn).toBeVisible();

	});

	test('ТС 04.1.51 Verify that the close (cross) button has a cursor pointer', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.closeBtn).toBeVisible();
		await expect(removeModalWindow.closeBtn).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.52 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup closes after clicking on the close (cross) button', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(whatsNewPage.removeModalWindow).toBeVisible();

		await removeModalWindow.clickCloseBtn();

		await expect(whatsNewPage.removeModalWindow).not.toBeVisible();

	});

	test('ТС 04.1.53 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup contains the "Cancel" button', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.canselBtn).toBeVisible();

	});

	test('ТС 04.1.54 Verify that  the "Cancel" button has a cursor pointer', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.canselBtn).toBeVisible();
		await expect(removeModalWindow.canselBtn).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.55 Verify that  the "Cancel" button is colored white', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.canselBtn).toBeVisible();
		await expect(removeModalWindow.canselBtn).toHaveCSS('background-color', 'rgb(238, 238, 238)');

	});

	test('ТС 04.1.56 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup closes after clicking on the "Cancel" button', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(whatsNewPage.removeModalWindow).toBeVisible();

		await removeModalWindow.clickCanselBtn();

		await expect(whatsNewPage.removeModalWindow).not.toBeVisible();

	});

	test('ТС 04.1.57 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup contains the "OK" button', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.okBtn).toBeVisible();

	});

	test('ТС 04.1.58 Verify that the "OK" button has a cursor pointer', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.okBtn).toBeVisible();
		await expect(removeModalWindow.okBtn).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.59 Verify that the "OK" button is colored blue', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(removeModalWindow.okBtn).toBeVisible();
		await expect(removeModalWindow.okBtn).toHaveCSS('background-color', 'rgb(0, 107, 180)');

	});

	test('ТС 04.1.60 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup closes after clicking on the "OK" button. The "You removed product {name of product} from the comparison list" message appears. The "Remove This Item" link disappears. The text "You have no items to compare." appears', async ({ page, productAddedToCompare }) => {
		
		const productToCompareName = 'Overnight Duffle';
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(whatsNewPage.removeModalWindow).toBeVisible();
		await expect(whatsNewPage.removeThisItemLink).toBeVisible();
		await expect(whatsNewPage.compareProductsSectionText).not.toBeVisible();

		await removeModalWindow.clickOkBtn();
		await page.waitForTimeout(3000);

		await expect(whatsNewPage.removeModalWindow).not.toBeVisible();
		await expect(whatsNewPage.removeThisItemLink).not.toBeVisible();
		await expect(whatsNewPage.compareProductsSectionText).toBeVisible();

		await expect(whatsNewPage.removedProductMessage).toBeVisible();
		await expect(whatsNewPage.removedProductMessage).toHaveText(`You removed product ${productToCompareName} from the comparison list.`);

	});

	test('ТС 04.1.61 Verify that the "Compare Products" section contains the count of the added items to compare', async ({ page, productAddedToCompare }) => {
		
		await expect(whatsNewPage.countAddedItems).toBeVisible();
		await expect(whatsNewPage.countAddedItems).toHaveText('1 item');

	});

	test('ТС 04.1.62 Verify that the "Compare Products" section contains the "Clear All" link', async ({ page, productAddedToCompare }) => {
		
		await expect(whatsNewPage.clearAllLink).toBeVisible();

	});

	test('ТС 04.1.63 Verify that the "Clear All" link has a cursor pointer', async ({ page, productAddedToCompare }) => {
		
		await expect(whatsNewPage.clearAllLink).toBeVisible();
		await expect(whatsNewPage.clearAllLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.64 Verify that the "Are you sure you want to remove this item from your Compare Products list?" popup appears after clicking on the "Clear All" link', async ({ page, productAddedToCompare }) => {
		
		await whatsNewPage.clickClearAllLink();
		await expect(whatsNewPage.removeModalWindow).toBeVisible();

	});

	test('ТС 04.1.65 Verify that the "Compare Products" section contains the "Compare" button', async ({ page, productAddedToCompare }) => {
		
		await expect(whatsNewPage.compareBtn).toBeVisible();
		await expect(whatsNewPage.compareBtn).toHaveText(COMPARE_BTN_TEXT);

	});

	test('ТС 04.1.66 Verify that  the "Compare" button has a cursor pointer', async ({ page, productAddedToCompare }) => {
		
		await expect(whatsNewPage.compareBtn).toBeVisible();
		await expect(whatsNewPage.compareBtn).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 04.1.67 Verify that  the "Compare" button is colored white', async ({ page, productAddedToCompare }) => {
		
		await expect(whatsNewPage.compareBtn).toBeVisible();
		await expect(whatsNewPage.compareBtn).toHaveCSS('background-color', 'rgb(238, 238, 238)');

	});

	test('ТС 04.1.68 Verify that the user is redirected to the "Compare Products" page after clicking on the "Compare" button', async ({ page, productAddedToCompare }) => {
		
		const compareProductsPage = await whatsNewPage.clickCompareBtn();

		const currentURL = page.url();
		expect(currentURL).toMatch(COMPARE_URL_REGEX);

		await expect(compareProductsPage.headingCompareProductsPage).toBeVisible();
		await expect(compareProductsPage.headingCompareProductsPage).toHaveText(COMPARE_PRODUCTS_PAGE_HEADING_TEXT);

	});

	test('ТС 04.1.69 Verify that the "Compare" button and "Clear All" link disappear after clicking on the name of the added item to compare (link) and then clicking on the "OK" button in the "Are you sure you want to remove this item from your Compare Products list?" popup', async ({ page, productAddedToCompare }) => {
		
		const removeModalWindow = await whatsNewPage.clickRemoveThisItemLink();

		await expect(whatsNewPage.clearAllLink).toBeVisible();
		await expect(whatsNewPage.compareBtn).toBeVisible();

		await removeModalWindow.clickOkBtn();
		await page.waitForTimeout(3000);

		await expect(whatsNewPage.clearAllLink).not.toBeVisible();
		await expect(whatsNewPage.compareBtn).not.toBeVisible();

	});

	test('ТС 04.1.70 Verify that the "What\'s New" page contains the "My Wish List" section', async ({ page }) => {

		await expect(whatsNewPage.myWishListSection).toBeVisible();
		
	});

	test('ТС 04.1.71 Verify that the "My Wish List" section contains the heading', async ({ page }) => {

		await expect(whatsNewPage.myWishListSectionHeading).toBeVisible();
		await expect(whatsNewPage.myWishListSectionHeading).toHaveText(MY_WISH_LIST_SECTION_HEADING_TEXT);
		
	});

	test('ТС 04.1.72 Verify that the block contains the text "You have no items in your wish list." when there are no items added to the wish list', async ({ page }) => {

		await expect(whatsNewPage.myWishListSectionText).toBeVisible();
		await expect(whatsNewPage.myWishListSectionText).toHaveText(MY_WISH_LIST_SECTION_TEXT);
		
	});
	
});
