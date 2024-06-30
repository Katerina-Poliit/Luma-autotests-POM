import { test as base } from "@playwright/test";
import { WhatsNewPage } from "../pages/whatsNewPage";
import { HomePage } from "../pages/homePage";
import { USER_DATA, generateRandomEmail } from "../helpers/testDataHomePage";

export const test = base.extend({

    productAddedToCompare: [
        async ({ page }, use) => {

            const whatsNewPage = new WhatsNewPage(page);
            await page.reload();
            await whatsNewPage.hoverProductCard();
            await whatsNewPage.clickAddToCompareIcon();

            await use("");
        },
        { scope: "test" },
    ],

	 productAddedToWishList: [
		async ({ page }, use) => {

			const whatsNewPage = new WhatsNewPage(page);
			const createAccountPage = await whatsNewPage.clickCreateAnAccountLink();
			const randomEmail = generateRandomEmail();
			USER_DATA.email = randomEmail;

			await createAccountPage.fillForm(USER_DATA.firstName, USER_DATA.lastName, randomEmail, USER_DATA.password);
			await createAccountPage.submitForm();
			await page.waitForTimeout(5000);
			await createAccountPage.openWhatsNewPage();

			await page.reload();
			await whatsNewPage.hoverProductCard();
			const myWishListPage = await whatsNewPage.clickAddToWishList();
			await myWishListPage.openWhatsNewPage();

			await use("");
		},
		{ scope: "test" },
  ],

    createNewCustomerAccount: [
        async ({ page }, use) => {

            const homePage = new HomePage(page);

            await homePage.open();
            const createAccountPage = await homePage.clickCreateAnAccountLink();
            const randomEmail = generateRandomEmail();
            USER_DATA.email = randomEmail;

            await createAccountPage.fillForm(USER_DATA.firstName, USER_DATA.lastName, randomEmail, USER_DATA.password);
            await createAccountPage.submitForm();
            await page.waitForTimeout(5000);

            await homePage.open();

            await use("");
        },
        { scope: "test" },
    ],


});