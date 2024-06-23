const { test, expect } = require('@playwright/test');
import { HomePage } from "../pages/homePage";
import { NOTES_LINK_TEXT, NOTES_PAGE_URL, PARTICEAPI_PAGE_URL, FOR_US_LINK_URL, SUBSCRIBE_LINK_URL, POLICY_PAGE_URL, expectedMenuItems, SEARCH_TERM_LINK_URL, SEARCH_TERMS_PAGE_HEANDING_TEXT, ADVANCED_SEARCH_PAGE_URL, SEARCH_BTN_TEXT, RESULT_SEARCH_PAGE_URL, ORDERS_RESULTS_PAGE_URL, ORDERS_AND_RETURNS_PAGE_FIELDS } from "../helpers/testDataFooterPage";
import PolicyPage from "../pages/policyPage";


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

	test('ТС 02.1.8 Verify that the "Write for us" link is placed in the footer', async ({ page }) => {

		await expect(homePage.forUsLink).toBeVisible();

	});

	test('ТС 02.1.9 Verify that the "Write for us" link contains the pointer cursor', async ({ page }) => {

		await expect(homePage.forUsLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.10 Verify that the "Write for us" link leads to the correct page.', async ({ page }) => {
		const homePage = new HomePage(page);

		const pagePromise = page.waitForEvent('popup');
		await homePage.clickforUsLink();
		const notesPage = await pagePromise;

		await expect(notesPage).toHaveURL(FOR_US_LINK_URL);

	});

	test('ТС 02.1.11 Verify that the "Subscribe" link is placed in the footer', async ({ page }) => {

		await expect(homePage.subscribeLink).toBeVisible();

	});

	test('ТС 02.1.12 Verify that the "Subscribe" link contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.subscribeLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.13 Verify that the "Subscribe" link leads to the correct page.', async ({ page }) => {
		const homePage = new HomePage(page);

		const pagePromise = page.waitForEvent('popup');
		await homePage.clicksubscribeLink();
		const notesPage = await pagePromise;

		await expect(notesPage).toHaveURL(SUBSCRIBE_LINK_URL);

	});

	test('ТС 02.1.14 Verify that the "Privacy and Cookie Policy" link is placed in the footer', async ({ page }) => {

		await expect(homePage.privacyCookiesLink).toBeVisible();

	});

	test('ТС 02.1.15 Verify that the "Privacy and Cookie Policy" link contains the pointer cursor', async ({ page }) => {

		await expect(homePage.privacyCookiesLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.16 Verify that the "Privacy and Cookie Policy" link opens the page, the user clicks on the "Privacy and Cookie Policy" link', async ({ page }) => {

		await homePage.clickprivacyCookiesLink();
		const policyPage = new PolicyPage(page)
		await expect(page).toHaveURL(POLICY_PAGE_URL);

	});
	test('ТС 02.1.17 Verify that navigation menu has 14 (fourteen) elements: Luma Security, Luma Privacy Policy, The Information We Collect, How We Use The Information We Collect, Security, Others With Whom We Share Your Information, Your Choices Regarding Use Of The Information We Collect, Your California Privacy Rights, Cookies, Web Beacons, and How We Use Them, List of cookies we collect, Online Account Registration, Emails, Acceptance, Questions for Luma?.', async ({ page }) => {

		await homePage.clickprivacyCookiesLink();

		const policyPage = new PolicyPage(page);

		const navigationMenu = await policyPage.navigationMenu;
		const menuItems = await navigationMenu.locator('li').allTextContents();
		expect(menuItems.length).toBe(expectedMenuItems.length);
		for (const expectedItem of expectedMenuItems) {
			expect(menuItems).toContain(expectedItem);
		}


	});





});