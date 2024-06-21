const { test, expect } = require('@playwright/test');
import {  } from "../helpers/testDataHeaderPage";
import { HomePage } from "../pages/homePage";


test.describe('headerPage.spec', () => {

	let homePage;

	test.beforeEach(async ({ page }) => {

		homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС 01.1.1 Verify the the site contains the header', async ({ page }) => {

		await expect(homePage.headerSection).toBeVisible();

	});

})
