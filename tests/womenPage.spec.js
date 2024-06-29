const { expect } = require('@playwright/test');
import { test } from "../fixtures/base";
import { HomePage } from "../pages/homePage";
import {WOMEN_URL, WOMEN_HEADER_TEXT} from "../helpers/testDataWomenPage";
import { WomenPage } from "../pages/womenPage";

test.describe('womenPage.spec', () => {

    let homePage;
    let womenPage;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        await homePage.open();
        womenPage = await homePage.clickWomenLink();
});

	test('ТС 05.1.1 Verify that the user can go to the "Women" page by clicking on the link in the navigation bar', async ({ page }) => {

        await expect(page).toHaveURL(WOMEN_URL);

});

test('ТС 05.1.2 Verify  that the title is displayed on the "Women" page', async ({ page }) => {

    await expect(womenPage.header).toBeVisible();
    await expect(womenPage.header).toHaveText(WOMEN_HEADER_TEXT);

});

test('ТС 05.1.3 Verify that the filter block is displayed on the "Women" page', async ({ page }) => {

    await expect(womenPage.filterBlock).toBeVisible();

});

test('ТС 05.1.4 Verify that the filter block contains the "Tops" link', async ({ page }) => {

    await expect(womenPage.categoryTopsLink).toBeVisible();

});

test('ТС 05.1.5 Verify that the count of products is displayed next to the "Tops" link', async ({ page }) => {

    await expect(womenPage.categoryTopsCount).toBeVisible();
    await expect(womenPage.categoryTopsCount).toHaveText('50');

});


});