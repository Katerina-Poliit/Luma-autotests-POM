const { test, expect } = require('@playwright/test');
import { BASE_URL, LINKS_LIST, NAVBAR_URLs_END_POINTS_FULL, LOGO_ALIGNMENT, SIGN_IN_LINK_TEXT, CUSTOMER_LOGIN_PAGE_URL, CUSTOMER_LOGIN_PAGE_HEADER_TEXT, CREATE_AN_ACCOUNT_LINK_TEXT, CREATE_NEW_CUSTOMER_ACCOUNT_PAGE_URL, CREATE__NEW_CUSTOMER_ACCOUNT_PAGE_HEADER_TEXT } from "../helpers/testDataHeaderPage";
import { HomePage } from "../pages/homePage";
import { Logo } from "../components/logo";
import { SignIn } from "../components/signIn";
import { CreateAccount } from "../components/createAccount";


test.describe('headerPage.spec', () => {

	let homePage;

	test.beforeEach(async ({ page }) => {

		homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС 01.1.1 Verify the the site contains the header', async ({ page }) => {

		await expect(homePage.headerSection).toBeVisible();

	});

	test('ТС 01.1.2 Verify the the header of the site contains the store logo', async ({ page }) => {

		await expect(homePage.storeLogo).toBeVisible();

	});

	test('ТС 01.1.3 Verify the the store logo has a cursor pointer', async ({ page }) => {

		await expect(homePage.storeLogo).toBeVisible();
		await expect(homePage.storeLogo).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 01.1.4 Verify the the store logo contains the image', async ({ page }) => {

		// Поиск элемента логотипа по метке 'store logo'
		const logo = page.getByLabel('store logo');

		// Проверка, что элемент логотипа существует
		await expect(logo).toBeVisible();
		
		// Поиск внутри логотипа элемента img
		const img = logo.locator('img');
		
		// Проверка, что элемент img существует
		await expect(img).toBeVisible();

	});

	test('ТС 01.1.5 Verify that the user is redirected to the homepage after clicking on the store logo from another page', async ({ page }) => {

		for (let i = 0; i < LINKS_LIST.length; i++) {
			let link = LINKS_LIST[i];
			await page.goto(link);
			await homePage.clickLogo();
			await expect(page).toHaveURL(BASE_URL);
		 }

	});

	test('ТС 01.1.6 Verify that the store logo is located from the left in all pages of site', async ({ page }) => {

		const logo = new Logo(page);
		const allLinksWithLogo = NAVBAR_URLs_END_POINTS_FULL;

		for(let link of allLinksWithLogo){
		await page.goto(link);
		const storeLogo = await logo.storeLogo;

		await expect(storeLogo).toBeVisible();
		await expect(storeLogo).toHaveCSS('float', LOGO_ALIGNMENT);
		}

	});

	test('ТС 01.1.7 Verify the the header of the site contains the "Sign In" link', async ({ page }) => {

		await expect(homePage.signInlink).toBeVisible();
		await expect(homePage.signInlink).toHaveText(SIGN_IN_LINK_TEXT);

	});

	test('ТС 01.1.8 Verify the the "Sign In" link has a cursor pointer', async ({ page }) => {

		await expect(homePage.signInlink).toBeVisible();
		await expect(homePage.signInlink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 01.1.9 Verify that the user is redirected to the "Customer Login" page after clicking on the "Sign In" link', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

		const customerLoginPage = await homePage.clickSignInLink();

		await expect(page).toHaveURL(CUSTOMER_LOGIN_PAGE_URL);
		await expect(customerLoginPage.pageHeader).toBeVisible();
		await expect(customerLoginPage.pageHeader).toHaveText(CUSTOMER_LOGIN_PAGE_HEADER_TEXT);

	});

	test('ТС 01.1.10 Verify that "Sign In" link is located on every page of the website', async ({ page }) => {

		const signIn = new SignIn(page);
		const allLinksWithSignIn = NAVBAR_URLs_END_POINTS_FULL;

		for(let link of allLinksWithSignIn){
		await page.goto(link);
		const signInLink = await signIn.signInLink;

		await expect(signInLink).toBeVisible();
		}

	});

	test('ТС 01.1.11 Verify the the header of the site contains the "Create an Account" link', async ({ page }) => {

		await expect(homePage.createAnAccountLink).toBeVisible();
		await expect(homePage.createAnAccountLink).toHaveText(CREATE_AN_ACCOUNT_LINK_TEXT);

	});

	test('ТС 01.1.12 Verify the the "Create an Account" link has a cursor pointer', async ({ page }) => {

		await expect(homePage.createAnAccountLink).toBeVisible();
		await expect(homePage.createAnAccountLink).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 01.1.13 Verify that the user is redirected to the "Create New Customer Account" page after clicking on the "Create an Account" link', async ({ page }) => {

		await expect(page).toHaveURL(BASE_URL);

		const createNewCustomerAccountPage = await homePage.clickCreateAnAccountLink();

		await expect(page).toHaveURL(CREATE_NEW_CUSTOMER_ACCOUNT_PAGE_URL);
		await expect(createNewCustomerAccountPage.pageHeader).toBeVisible();
		await expect(createNewCustomerAccountPage.pageHeader).toHaveText(CREATE__NEW_CUSTOMER_ACCOUNT_PAGE_HEADER_TEXT);

	});

	test('ТС 01.1.14 Verify that the "Create an Account" link is located on every page of the website', async ({ page }) => {

		const createAccount = new CreateAccount(page);
		const allLinksWithCreateAccount = NAVBAR_URLs_END_POINTS_FULL;

		for(let link of allLinksWithCreateAccount){
		await page.goto(link);
		const createAccountLink = await createAccount.createAccountLink;

		await expect(createAccountLink).toBeVisible();
		}

	});

	test('ТС 01.1.15 Verify the the header of the site contains the search field', async ({ page }) => {

		await expect(homePage.searchField).toBeVisible();

	});

})
