const { test, expect } = require('@playwright/test');

import { HomePage } from "../pages/homePage";

import { BASE_URL, WHATS_NEW_URL, HOME_PAGE_BREADCRUMBS, WHATS_NEW_HEADER_TEXT, NEW_IN_WOMANS_SECTION_HEADER_TEXT, HOODIES_SWEATSHIRTS_LINK_TEXT,  HOODIES_SWEATSHIRTS_HEADER_TEXT, HOODIES_SWEATSHIRTS_URL, HOODIES_SWEATSHIRTS_BREADCRUMBS_TEXT, JACKETS_URL, JACKETS_LINK_TEXT, JACKETS_BREADCRUMBS_TEXT, JACKETS_HEADER_TEXT, TEES_LINK_TEXT } from "../helpers/testDataWhatsNewPage";

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

		await expect(whatsNewPage.newInWomansSection).toBeVisible();
		
	});

	test('ТС 04.1.4 Verify that the "NEW IN WOMEN\'S" section contains the header', async ({ page }) => {

		await expect(whatsNewPage.newInWomansSectionHeader).toBeVisible();
		await expect(whatsNewPage.newInWomansSectionHeader).toHaveText(NEW_IN_WOMANS_SECTION_HEADER_TEXT);
		
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

		const hoodiesSweatshirtsLink = await whatsNewPage.clickHoodiesSweatshirtsLink();

		await expect(page).toHaveURL(HOODIES_SWEATSHIRTS_URL);

		await expect(hoodiesSweatshirtsLink.hoodiesSweatshirtsBreadcrumbs).toBeVisible();
		await expect(hoodiesSweatshirtsLink.hoodiesSweatshirtsBreadcrumbs).toHaveText(HOODIES_SWEATSHIRTS_BREADCRUMBS_TEXT);

		await expect(hoodiesSweatshirtsLink.header).toBeVisible();
		await expect(hoodiesSweatshirtsLink.header).toHaveText(HOODIES_SWEATSHIRTS_HEADER_TEXT);
		
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

		const hoodiesSweatshirtsLink = await whatsNewPage.clickJacketsLink();

		await expect(page).toHaveURL(JACKETS_URL);

		await expect(hoodiesSweatshirtsLink.jacketsBreadcrumbs).toBeVisible();
		await expect(hoodiesSweatshirtsLink.jacketsBreadcrumbs).toHaveText(JACKETS_BREADCRUMBS_TEXT);

		await expect(hoodiesSweatshirtsLink.header).toBeVisible();
		await expect(hoodiesSweatshirtsLink.header).toHaveText(JACKETS_HEADER_TEXT);
		
	});

	test('ТС 04.1.11 Verify that the "NEW IN WOMEN\'S" section contains the "Tees" link', async ({ page }) => {

		await expect(whatsNewPage.teesLink).toBeVisible();
		await expect(whatsNewPage.teesLink).toHaveText(TEES_LINK_TEXT);
		
	});

});
