const { test, expect } = require('@playwright/test');
import { BASE_URL, WHATS_NEW_LINK_TEXT, WOMEN_LINK_TEXT, MEN_LINK_TEXT, GEAR_LINK_TEXT } from "../helpers/testDataHomePage";
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

})
