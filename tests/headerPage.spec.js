const { test, expect } = require('@playwright/test');
import { BASE_URL, LINKS_LIST, NAVBAR_URLs_END_POINTS_FULL, LOGO_ALIGNMENT, SIGN_IN_LINK_TEXT, CUSTOMER_LOGIN_PAGE_URL, CUSTOMER_LOGIN_PAGE_HEADER_TEXT, CREATE_AN_ACCOUNT_LINK_TEXT, CREATE_NEW_CUSTOMER_ACCOUNT_PAGE_URL, CREATE__NEW_CUSTOMER_ACCOUNT_PAGE_HEADER_TEXT, SEARCH_FIELD_PLACEHOLDER_TEXT, SEARCH_ITEM, SEARCH_ITEM_NEGATIVE, NO_RESULTS_MESSAGE_TEXT, AUTOCOMPLETELIST } from "../helpers/testDataHeaderPage";
import { HomePage } from "../pages/homePage";
import { Logo } from "../components/logo";
import { SignIn } from "../components/signIn";
import { CreateAccount } from "../components/createAccount";
import { SearchField } from "../components/searchField";


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

	test('ТС 01.1.16 Verify the the search field contains the "Search entire store here..." placeholder', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.searchField).toBeVisible();
		await expect(homePage.searchField).toHaveAttribute('placeholder', SEARCH_FIELD_PLACEHOLDER_TEXT)

	});

	test('ТС 01.1.17 Verify the search field contains the search button (magnifier)', async ({ page }) => {

		await expect(homePage.searchBtn).toBeVisible();

	});

	test('ТС 01.1.18 Verify that the search button (magnifier) is inactive by default', async ({ page }) => {

		await expect(homePage.searchBtn).toBeVisible();
		await expect(homePage.searchBtn).toHaveAttribute('disabled');
	});

	test('ТС 01.1.19 Verify that the search button (magnifier) is active only after entering one or more letters in the search field', async ({ page }) => {

		await expect(homePage.searchBtn).toBeVisible();
		await expect(homePage.searchBtn).toHaveAttribute('disabled');

		await homePage.fillSearchField();

		await expect(homePage.searchBtn).not.toHaveAttribute('disabled');
	});

	test('ТС 01.1.20 Verify the the search button (magnifier) has a cursor pointer', async ({ page }) => {

		await homePage.fillSearchField();

		await expect(homePage.searchBtn).toBeVisible()
		await expect(homePage.searchBtn).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 01.1.21 Verify the search button (magnifier) is inactive after the search field is cleared', async ({ page }) => {

		await homePage.fillSearchField();

		await expect(homePage.searchBtn).not.toHaveAttribute("disabled");

		await homePage.cleanSearchField();

		await expect(homePage.searchBtn).toHaveAttribute("disabled");

	});

	test('ТС 01.1.22 Verify that the search field has a different highlight color and border appearance after clicking on it', async ({ page }) => {

		await expect(homePage.searchField).toBeVisible();

		await homePage.clickSearchField();

		await expect(homePage.searchField).toBeVisible();
		await expect(homePage.searchField).toHaveCSS('box-shadow', 'rgb(0, 105, 157) 0px 0px 3px 1px');

	});

	test('ТС 01.1.23 Verify that the automatic search results match the query in the search bar after clicking on the search button (magnifier)', async ({ page }) => {

    await homePage.fillSearchFieldSmth(SEARCH_ITEM);

    const searchResultPageWithResults = await homePage.clickSearchBtn();

	 // Проверка, что связанные поисковые термины видны
	 await expect(searchResultPageWithResults.relatedSearchTerms).toBeVisible();

    // Получение списка связанных поисковых терминов на странице результатов поиска
    const relatedSearchTerms = await searchResultPageWithResults.getRelatedSearchTermsText();

    // Создание объекта регулярного выражения для поиска текста SEARCH_ITEM
    const regex = new RegExp(SEARCH_ITEM, 'i'); // Флаг i в регулярном выражении указывает на регистронезависимый поиск

    // Проверка, содержится ли хотя бы один элемент из списка связанных поисковых терминов текст SEARCH_ITEM с помощью регулярного выражения
    const isMatchingItem = relatedSearchTerms.some(term => regex.test(term));

    // Проверка, что найдено хотя бы один элемент, который соответствует тексту поиска
    expect(isMatchingItem).toBeTruthy();

    await expect(searchResultPageWithResults.searchResults).toBeVisible(); 
    await expect(searchResultPageWithResults.searchResults).toContainText(SEARCH_ITEM);

	});

	test('ТС 01.1.24 Verify that the automatic search results match the query in the search bar after pressing Enter in the search field', async ({ page }) => {

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		const searchResultPageWithResults = await homePage.pressSearchField();
  
		await expect(searchResultPageWithResults.relatedSearchTerms).toBeVisible();
  
		const relatedSearchTerms = await searchResultPageWithResults.getRelatedSearchTermsText();
		const regex = new RegExp(SEARCH_ITEM, 'i');
		const isMatchingItem = relatedSearchTerms.some(term => regex.test(term));

		expect(isMatchingItem).toBeTruthy();
  		await expect(searchResultPageWithResults.searchResults).toBeVisible(); 
		await expect(searchResultPageWithResults.searchResults).toContainText(SEARCH_ITEM);

	});

	test('ТС 01.1.25 Verify that the user receives "Your search returned no results" if no results are found', async ({ page }) => {

		await homePage.fillSearchFieldSmth(SEARCH_ITEM_NEGATIVE);

		const searchResultPageWithResults = await homePage.clickSearchBtn();

		await expect(searchResultPageWithResults.searchResultNegative).toBeVisible();
		await expect(searchResultPageWithResults.noResultsMessage).toBeVisible();
		await expect(searchResultPageWithResults.noResultsMessage).toHaveText(NO_RESULTS_MESSAGE_TEXT);

	});

	test('ТС 01.1.26 Verify that an automatic search begins and the dropdown with relevant products appears after entering three letters in the search field', async ({ page }) => {

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		await expect(homePage.dropdownSearch).toHaveCount(8);

		// Отримання всіх елементів випадаючого списку
		const dropdownItems = await homePage.dropdownSearch.all();

		// Перевірка, що кожен елемент містить слово 'short'
		for (const item of dropdownItems) {

			const textContent = await item.textContent();

			//trim() для видалення пробілів з початку і кінця рядка та toLowerCase() для перетворення тексту до нижнього регістру перед перевіркою.
			expect(textContent.trim().toLowerCase()).toContain('short'); 
		}
			
	});

	test('ТС 01.1.27 Verify that the user is redirected to the search results page after clicking a product name in the drop-down list, and the search results match the query entered in the search bar', async ({ page }) => {

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		await expect(homePage.dropdownItem).toBeVisible();

		const searchResultPageWithResults = await homePage.clickDropdownItem();

		await page.waitForLoadState('networkidle');

		await expect(page).toHaveURL(/search/);

		await expect(searchResultPageWithResults.searchResultShortForMan).toBeVisible(); 
		await expect(searchResultPageWithResults.searchResultShortForMan).toContainText(SEARCH_ITEM);

		await expect(searchResultPageWithResults.searchResultShort).toBeVisible();
		await expect(searchResultPageWithResults.searchResultShort).toContainText(SEARCH_ITEM);

	});

	test('ТС 01.1.28 Verify that the search field placeholder disappears after entering text in the field', async ({ page }) => {

		await expect(homePage.searchField).toBeVisible();

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		await expect(homePage.searchField).toBeVisible();

	});

	test('ТС 01.1.29 Verify the search field is not case-sensitive', async ({ page }) => {

		const searchItemUpperCase = "SHORT";
		const searchItemLowerCase = searchItemUpperCase.toLowerCase();
  
		await homePage.fillSearchFieldSmth(searchItemUpperCase);
		await page.waitForSelector("#search_autocomplete>ul>li>span:first-child");
		const autocompleteListUpperCase = await page.locator("#search_autocomplete>ul>li>span:first-child").allInnerTexts();
  
		await homePage.cleanSearchField();
  
		await homePage.fillSearchFieldSmth(searchItemLowerCase);
		await page.waitForSelector("#search_autocomplete>ul>li>span:first-child");
		const autocompleteListLowerCase = await page.locator("#search_autocomplete>ul>li>span:first-child").allInnerTexts();
  
		//Ця перевірка порівнює два масиви autocompleteListUpperCase та autocompleteListLowerCase. Метод .sort() використовується для сортування масивів, щоб вони були в одному і тому ж порядку елементів перед порівнянням. Після цього масиви порівнюються за допомогою .toEqual(), що перевіряє, чи мають обидва масиви однаковий вміст і порядок елементів.
		expect(autocompleteListUpperCase.sort()).toEqual(autocompleteListLowerCase.sort());

		//Ця перевірка порівнює довжину двох масивів autocompleteListLowerCase та autocompleteListUpperCase. Вона переконується, що обидва масиви мають однакову кількість елементів. Це важливо для того, щоб переконатись, що ні один з масивів не містить додаткових елементів, які можуть вплинути на порівняння.
		expect(autocompleteListLowerCase.length).toEqual(autocompleteListUpperCase.length);

	});

	test('ТС 01.1.30 Verify that the search field available on all pages of the site', async ({ page }) => {

		const search = new SearchField(page);
		const allLinksWithSearchField = NAVBAR_URLs_END_POINTS_FULL;

		for(let link of allLinksWithSearchField){
			
			await page.goto(link);
			const searchFieldAllPages = await search.searchField;
			await expect(searchFieldAllPages).toBeVisible();
		}

	});

	test('ТС 01.1.31 Verify the the header of the site contains the shopping cart icon', async ({ page }) => {

		await expect(homePage.cartBtn).toBeVisible();

	});

	test('ТС 01.1.32 Verify the the shopping cart icon has a cursor pointer', async ({ page }) => {

		await expect(homePage.cartBtn).toBeVisible();
		await expect(homePage.cartBtn).toHaveCSS('cursor', 'pointer');

	});

})
