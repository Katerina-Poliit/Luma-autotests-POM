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
});