const { test, expect } = require('@playwright/test');
import { HomePage } from "../pages/homePage";
import { NOTES_LINK_TEXT, NOTES_PAGE_URL, PARTICEAPI_PAGE_URL, FOR_US_LINK_URL, SUBSCRIBE_LINK_URL, POLICY_PAGE_URL, expectedMenuItems, SEARCH_TERM_LINK_URL, SEARCH_TERMS_PAGE_HEANDING_TEXT, ADVANCED_SEARCH_PAGE_URL, SEARCH_BTN_TEXT, RESULT_SEARCH_PAGE_URL, ORDERS_RESULTS_PAGE_URL, ORDERS_AND_RETURNS_PAGE_FIELDS } from "../helpers/testDataFooterPage";


test.describe('footerPage.spec', () => {

	let homePage;

	test.beforeEach(async ({ page }) => {

		homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС 02.1.1 Verify that the footer is displayed on the site', async ({ page }) => {

		await expect(homePage.footerContent).toBeVisible();

	});

	test('ТС 02.1.2 Verify that the "Notes" link is placed in the footer', async ({ page }) => {

		await expect(homePage.noteslink).toBeVisible();
		await expect(homePage.noteslink).toHaveText(NOTES_LINK_TEXT);

	});

	test('ТС 02.1.3 Verify that the "Notes" link contains the pointer cursor', async ({ page }) => {

		await expect(homePage.noteslink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.4 Verify that the "Notes" link leads to the correct page.', async ({ page }) => {

		const pagePromise = page.waitForEvent('popup');
		await homePage.clickNoteslink();
		const notesPage = await pagePromise;

		await expect(notesPage).toHaveURL(NOTES_PAGE_URL);

	});

	test('ТС 02.1.5 Verify that the "Practice API Testing using Magento 2" link is placed in the footer', async ({ page }) => {

		await expect(homePage.pacticeAPI).toBeVisible();

	});

	test('ТС 02.1.6 Verify that the "Practice API Testing using Magento 2" link contains the pointer cursor', async ({ page }) => {

		await expect(homePage.pacticeAPI).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.7 Verify that the "Practice API Testing using Magento 2" link leads to the correct page.', async ({ page }) => {

		const pagePromise = page.waitForEvent('popup');
		await homePage.clickpacticeAPI();
		const notesPage = await pagePromise;

		await expect(notesPage).toHaveURL(PARTICEAPI_PAGE_URL);

	});
});