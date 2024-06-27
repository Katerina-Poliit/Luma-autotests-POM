const { test, expect } = require('@playwright/test');

import { HomePage } from "../pages/homePage";

import { BASE_URL, WHATS_NEW_URL, HOME_PAGE_BREADCRUMBS, WHATS_NEW_HEADER_TEXT } from "../helpers/testDataWhatsNewPage";

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

        await whatsNewPage.clickhomeBreadcrumbs(); 

        await expect(page).toHaveURL(BASE_URL);
		  await expect(whatsNewPage.header).not.toBeVisible();
    });

});
