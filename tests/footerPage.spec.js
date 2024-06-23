const { test, expect } = require('@playwright/test');
import { HomePage } from "../pages/homePage";
import { NOTES_LINK_TEXT, NOTES_PAGE_URL, PARTICEAPI_PAGE_URL, FOR_US_LINK_URL, SUBSCRIBE_LINK_URL, POLICY_PAGE_URL, expectedMenuItems, SEARCH_TERM_LINK_URL, SEARCH_TERMS_PAGE_HEANDING_TEXT, ADVANCED_SEARCH_PAGE_URL, SEARCH_BTN_TEXT, RESULT_SEARCH_PAGE_URL, ORDERS_RESULTS_PAGE_URL, ORDERS_AND_RETURNS_PAGE_FIELDS } from "../helpers/testDataFooterPage";
import PolicyPage from "../pages/policyPage";
import SearchtermsPage from "../pages/searchTermsPage";


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

	test('ТС 02.1.17.1 Verify that clicking each navigation menu link opens a new page', async ({ page, context }) => {

		await homePage.clickprivacyCookiesLink();

		const policyPage = new PolicyPage(page);
		const list = await policyPage.navigationMenu;
		const items = await list.locator('li').all();
		for (const item of items) {
			const menuItemText = await item.innerText();
			if (expectedMenuItems.includes(menuItemText)) {
				await item.click();
				await homePage.open();
				await homePage.clickprivacyCookiesLink();
			}
		}
	});

	test('ТС 02.1.18  Verify that the  elements contain a pointer cursor', async ({ page, context }) => {

		const policyPage = await homePage.clickprivacyCookiesLink();
		const list = await policyPage.navigationMenu;
		const items = await list.locator('li').all();
		for (const item of items) {
			await expect(item).toHaveCSS('cursor', 'auto');
		}
	});

	test('ТС 02.1.19 Verify that the navigation menu is colored gray', async ({ page }) => {

		const policyPage = await homePage.clickprivacyCookiesLink();
		await expect(policyPage.navigationMenu).toHaveCSS('background', 'rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box');

	});

	test('ТС 02.1.20 Verify that the "Search Terms" link is placed in the footer', async ({ page }) => {

		await expect(homePage.searchTermsLink).toBeVisible();

	});

	test('ТС 02.1.23 Verify that the search-terms contains the pointer cursor', async ({ page }) => {

		await expect(homePage.searchTermsLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.21 Verify that the "Search Terms" link opens the page, the user clicked on the "Search Terms" link', async ({ page }) => {

		const searchTerms = await homePage.clicksearchTermsLink();
		await expect(page).toHaveURL(SEARCH_TERM_LINK_URL);

	});

	test('ТС 02.1.22 Verify that the page contain a search-terms', async ({ page }) => {
		const searchTerms = await homePage.clicksearchTermsLink();
		await expect(searchTerms.searchTermsHeading).toBeVisible();
		await expect(searchTerms.searchTermsHeading).toHaveText(SEARCH_TERMS_PAGE_HEANDING_TEXT);
		await expect(searchTerms.searchTerms).toBeVisible();
	});

	test('ТС 02.1.24 Verify that  all tags on the "Popular Search Queries" page redirect to other pages', async ({ page }) => {
		const searchTerms = await homePage.clicksearchTermsLink();
		const tags = await searchTerms.getSearchTerms();
		const tagsCount = await tags.count();


		for (let i = 0; i < tagsCount; i++) {
			await tags.nth(i).click();
			const currentURL = page.url();

			await expect(currentURL).not.toBe(SEARCH_TERM_LINK_URL);

			await page.goBack();
		}
	});

	test('ТС 02.1.25 Verify that the "Advanced Search" link is placed in the footer', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.advancedSearchLink).toBeVisible();

	});

	test('ТС 02.1.26 Verify that the "Advanced Search" link opens the page, the user clicks on the "Advanced Search" link', async ({ page }) => {

		await homePage.clickadvancedSearchLink();
		await expect(page).toHaveURL(ADVANCED_SEARCH_PAGE_URL);

	});

	test('ТС 02.1.27 Verify that the "Advanced Search" link opens the page, the user clicks on the "Advanced Search" link', async ({ page }) => {

		await expect(homePage.advancedSearchLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.27.01 Verify that the "Advanced Search" page contains the search settings', async ({ page }) => {

		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await expect(advancedSearchPage.settingsSearch).toBeVisible();
		await expect(advancedSearchPage.settingsSearch).toHaveText('Search Settings')

	});

	test('ТС 02.1.28 Verify that the "Advanced Search" page contains the "Product Name" field', async ({ page }) => {
		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await expect(advancedSearchPage.productNameField).toBeVisible();

	});

	test('ТС 02.1.29 Verify that the "Advanced Search" page contains the "SKU" field', async ({ page }) => {
		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await expect(advancedSearchPage.SKUField).toBeVisible();

	});

	test('ТС 02.1.30 Verify that the "Advanced Search" page contains the "Description" field', async ({ page }) => {
		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await expect(advancedSearchPage.descriptionField).toBeVisible();
	});

	test('ТС 02.1.31 Verify that the "Advanced Search" page contains the "Short Description" field', async ({ page }) => {
		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await expect(advancedSearchPage.shortDescriptionField).toBeVisible();
	});

	test('ТС 02.1.32 Verify that the "Advanced Search" page contains the "Price" field', async ({ page }) => {
		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await expect(advancedSearchPage.priceField).toBeVisible();
	});

	test('ТС 02.1.39 Verify that the "Advanced Search" page contains the "USD" field', async ({ page }) => {
		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await expect(advancedSearchPage.USDField).toBeVisible();
	});

	test('ТС 02.1.33 Verify that the "Advanced Search" page contains the "Search" button', async ({ page }) => {
		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await expect(advancedSearchPage.searchBtn).toBeVisible();
		await expect(advancedSearchPage.searchBtn).toHaveCSS('cursor', 'pointer');
		await expect(advancedSearchPage.searchBtn).toHaveCSS('background', 'rgb(25, 121, 195) none repeat scroll 0% 0% / auto padding-box border-box');
		await expect(advancedSearchPage.searchBtn).toHaveText(SEARCH_BTN_TEXT);
	});

	test('ТС 02.1.34  Verify that the transition to the results page is successful, at least one field is filled with valid data', async ({ page }) => {
		const advancedSearchPage = await homePage.clickadvancedSearchLink();
		await advancedSearchPage.fillSKUField();
		await advancedSearchPage.clicksearchBtn();
		await expect(page).toHaveURL(RESULT_SEARCH_PAGE_URL);
		

	});






});