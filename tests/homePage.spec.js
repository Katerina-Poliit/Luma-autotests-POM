const { test, expect } = require('@playwright/test');
import { BASE_URL } from "../helpers/testDataHomePage";
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

})
