import { test as base } from "@playwright/test";
import { WhatsNewPage } from "../pages/whatsNewPage";

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

})