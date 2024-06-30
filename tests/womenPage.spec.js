const { expect } = require('@playwright/test');
import { test } from "../fixtures/base";
import { HomePage } from "../pages/homePage";
import {WOMEN_URL, WOMEN_HEADER_TEXT, WOMEN_TOPS_PAGE_URL} from "../helpers/testDataWomenPage";
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

test('ТС 05.1.6 Verify that the "Tops" link contains the pointer cursor', async ({ page }) => {

    await expect(womenPage.categoryTopsLink).toHaveCSS('cursor', 'pointer');
    await expect(womenPage.categoryTopsLink).toHaveCSS('color', 'rgb(0, 107, 180)');

});

test('ТС 05.1.7 Verify that when clicking on the "Tops" link, the user is redirected to the appropriate page', async ({ page }) => {

    await womenPage.clickcategoryTopsLink()
    await expect(page).toHaveURL(WOMEN_TOPS_PAGE_URL);

});

test('ТС 05.1.8 Verify  that the filter block contains the "Bottoms" link', async ({ page }) => {

   await expect(womenPage.categoryBottomsLink).toBeVisible();

});

test('ТС 05.1.9 Verify that the count of products is displayed next to the "Bottoms" link', async ({ page }) => {

    await expect(womenPage.categoryBottomsCount).toBeVisible();
    await expect(womenPage.categoryBottomsCount).toHaveText('25')

 });

 test('ТС 05.1.10 Verify  that the "Bottoms" link contains the pointer cursor', async ({ page }) => {

    await expect(womenPage.categoryBottomsLink).toHaveCSS('cursor', 'pointer');
    await expect(womenPage.categoryBottomsLink).toHaveCSS('color', 'rgb(0, 107, 180)');

 });





});