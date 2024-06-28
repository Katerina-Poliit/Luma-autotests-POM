const { test, expect } = require('@playwright/test');

import { HomePage } from "../pages/homePage";

import { BASE_URL, WHATS_NEW_URL, HOME_PAGE_BREADCRUMBS, WHATS_NEW_HEADER_TEXT, NEW_IN_WOMENS_SECTION_HEADER_TEXT, HOODIES_SWEATSHIRTS_LINK_TEXT,  HOODIES_SWEATSHIRTS_HEADING_TEXT, HOODIES_SWEATSHIRTS_URL, HOODIES_SWEATSHIRTS_BREADCRUMBS_TEXT, JACKETS_URL, JACKETS_LINK_TEXT, JACKETS_BREADCRUMBS_TEXT, JACKETS_HEADING_TEXT, TEES_LINK_TEXT, TEES_URL, TEES_BREADCRUMBS_TEXT, TEES_HEADING_TEXT, BRAS_TANKS_LINK_TEXT, BRAS_TANKS_URL, BRAS_TANKS_BREADCRUMBS_TEXT, BRAS_TANKS_HEADING_TEXT, PANTS_LINK_TEXT, PANTS_URL, PANTS_BREADCRUMBS_TEXT, PANTS_HEADING_TEXT, SHORTS_LINK_TEXT, SHORTS_URL, SHORTS_BREADCRUMBS_TEXT, SHORTS_HEADING_TEXT, NEW_IN_MEN_SECTION_HEADER_TEXT, MEN_HOODIES_SWEATSHIRTS_LINK_TEXT, MEN_HOODIES_SWEATSHIRTS_URL, MEN_HOODIES_SWEATSHIRTS_BREADCRUMBS_TEXT, MEN_HOODIES_SWEATSHIRTS_HEADING_TEXT, MEN_JACKETS_LINK_TEXT, MEN_JACKETS_URL, MEN_JACKETS_HEADING_TEXT, MEN_JACKETS_BREADCRUMBS_TEXT, MEN_TEES_URL, MEN_TEES_LINK_TEXT, MEN_TEES_BREADCRUMBS_TEXT, MEN_TEES_HEADING_TEXT, MEN_TANKS_URL, MEN_TANKS_LINK_TEXT, MEN_TANKS_BREADCRUMBS_TEXT, MEN_TANKS_HEADING_TEXT, MEN_PANTS_URL, MEN_PANTS_LINK_TEXT, MEN_PANTS_BREADCRUMBS_TEXT, MEN_PANTS_HEADING_TEXT, MEN_SHORTS_URL, MEN_SHORTS_LINK_TEXT, MEN_SHORTS_BREADCRUMBS_TEXT, MEN_SHORTS_HEADING_TEXT } from "../helpers/testDataWhatsNewPage";

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

		const menShortsPage = await whatsNewPage.clickMmnShortsLink();

		await expect(page).toHaveURL(MEN_SHORTS_URL);

		await expect(menShortsPage.shortsBreadcrumbs).toBeVisible();
		await expect(menShortsPage.shortsBreadcrumbs).toHaveText(MEN_SHORTS_BREADCRUMBS_TEXT);

		await expect(menShortsPage.headingShortsPage).toBeVisible();
		await expect(menShortsPage.headingShortsPage).toHaveText(MEN_SHORTS_HEADING_TEXT);
		
	});

});
