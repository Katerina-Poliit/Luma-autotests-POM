const { expect } = require('@playwright/test');
import { test } from "../fixtures/base";
import { HomePage } from "../pages/homePage";
import {WOMEN_URL, WOMEN_HEADER_TEXT, WOMEN_TOPS_PAGE_URL,WOMEN_BOTTOMS_PAGE_URL,MENU_TOPS_TEXT, ITEM_HOODIES_SWEATSHIRTS_LINK_TEXT, ITEM_JACKETS_LINK_TEXT, ITEM_TEES_LINK_TEXT, ITEM_BRASTANKS_LINK_TEXT, TOPS_ITEM_LINKS, MENU_BOTTOMS_TEXT, ITEM_PANTS_LINK_TEXT, ITEM_SHORTS_LINK_TEXT,  BOTTOMS_ITEM_LINKS, PROMO_BLOCK_INFO_TEXT, PROMO_BLOCK_INFO_TITLE_TEXT, BLOCK_CONTENT_TEES_INFO_TEXT, BLOCK_CONTENT_TEES_ACTION_TEXT, BLOCK_20_OFF_HEADER_TEXT  } from "../helpers/testDataWomenPage";
import { WomenPage } from "../pages/womenPage";
import { WOMEN_TOPS_TEES_URL,  WOMEN_BOTTOMS_PANTS_PAGE_URL} from "../helpers/testDataHomePage"

test.describe('womenPage.spec', () => {

    let homePage;
    let womenPage;

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page);
        await homePage.open();
        womenPage = await homePage.clickWomenLink();
});

	test('ТС 05.1.1 Verify that the user can go to the "Women" page by clicking on the link in the navigation bar', async ({ page }) => {

        await expect(page).toHaveURL(WOMEN_URL);

});

test('ТС 05.1.2 Verify  that the title is displayed on the "Women" page', async ({ page }) => {

    await expect(womenPage.header).toBeVisible();
    await expect(womenPage.header).toHaveText(WOMEN_HEADER_TEXT);

});

test('ТС 05.1.3 Verify that the filter block is displayed on the "Women" page', async ({ page }) => {

    await expect(womenPage.filterBlock).toBeVisible();

});

test('ТС 05.1.4 Verify that the filter block contains the "Tops" link', async ({ page }) => {

    await expect(womenPage.categoryTopsLink).toBeVisible();

});

test('ТС 05.1.5 Verify that the count of products is displayed next to the "Tops" link', async ({ page }) => {

    await expect(womenPage.categoryTopsCount).toBeVisible();
    await expect(womenPage.categoryTopsCount).toHaveText('50');

});

test('ТС 05.1.6 Verify that the "Tops" link contains the pointer cursor', async ({ page }) => {

    await expect(womenPage.categoryTopsLink).toHaveCSS('cursor', 'pointer');
    await expect(womenPage.categoryTopsLink).toHaveCSS('color', 'rgb(0, 107, 180)');

});

test('ТС 05.1.7 Verify that when clicking on the "Tops" link, the user is redirected to the appropriate page', async ({ page }) => {

    await womenPage.clickcategoryTopsLink()
    await expect(page).toHaveURL(WOMEN_TOPS_PAGE_URL);

});

test('ТС 05.1.8 Verify  that the filter block contains the "Bottoms" link', async ({ page }) => {

   await expect(womenPage.categoryBottomsLink).toBeVisible();

});

test('ТС 05.1.9 Verify that the count of products is displayed next to the "Bottoms" link', async ({ page }) => {

    await expect(womenPage.categoryBottomsCount).toBeVisible();
    await expect(womenPage.categoryBottomsCount).toHaveText('25')

 });

 test('ТС 05.1.10 Verify  that the "Bottoms" link contains the pointer cursor', async ({ page }) => {

    await expect(womenPage.categoryBottomsLink).toHaveCSS('cursor', 'pointer');
    await expect(womenPage.categoryBottomsLink).toHaveCSS('color', 'rgb(0, 107, 180)');

 });

 test('ТС 05.1.11 Verify that when clicking on the "Bottoms" link, the user is redirected to the appropriate page', async ({ page }) => {

    await womenPage.clickCategoryBottomsLink()
    await expect(page).toHaveURL(WOMEN_BOTTOMS_PAGE_URL);

 });

 test('ТС 05.1.12 Verify  that the categories menu "Tops" is displayed on the "Women" page', async ({ page }) => {

   await expect(womenPage.menuTops).toBeVisible();
   await expect(womenPage.menuTops).toHaveText(MENU_TOPS_TEXT);
 });

 test('ТС 05.1.13 Verify that the "Tops" category menu contains the item link "Hoodies & Sweatshirts"', async ({ page }) => {

    await expect(womenPage.itemHoodiesSweatshirtsLink).toBeVisible();
    await expect(womenPage.itemHoodiesSweatshirtsLink).toHaveText(ITEM_HOODIES_SWEATSHIRTS_LINK_TEXT);
  });

  test('ТС 05.1.14 link to the item "Hoodies and sweatshirts" contains the poiter cursor', async ({ page }) => {

    await expect(womenPage.itemHoodiesSweatshirtsLink).toHaveCSS('cursor', 'pointer');

  });

  test('ТС 05.1.15 Verify that the "Tops" category menu contains the item link "Jackets"', async ({ page }) => {

    await expect(womenPage.itemJacketsLink).toBeVisible();
    await expect(womenPage.itemJacketsLink).toHaveText(ITEM_JACKETS_LINK_TEXT)

  });

  test('ТС 05.1.16 link to the item "Jackets" contains the pointer cursor', async ({ page }) => {

    await expect(womenPage.itemJacketsLink).toHaveCSS('cursor', 'pointer');

  });

  test('ТС 05.1.17 Verify that the "Tops" category menu contains the item link "Tees"', async ({ page }) => {

    await expect(womenPage.itemTeesLink).toBeVisible();
    await expect(womenPage.itemTeesLink).toHaveText(ITEM_TEES_LINK_TEXT );

  });

  test('ТС 05.1.18 Verify that the link to the item "Tees" contains the pointer cursor', async ({ page }) => {

    await expect(womenPage.itemTeesLink).toHaveCSS('cursor', 'pointer');

  });

  test('ТС 05.1.19 Verify that the "Tops" category menu contains the item link "Bras & Tanks"', async ({ page }) => {

    await expect(womenPage.itemBrasTanksLink).toBeVisible();
    await expect(womenPage.itemBrasTanksLink).toHaveText(ITEM_BRASTANKS_LINK_TEXT);

  });

  test('ТС 05.1.20 Verify that the  link to the item "Bras & Tanks" contains the pointer cursor', async ({ page }) => {

    await expect(womenPage.itemBrasTanksLink).toHaveCSS('cursor', 'pointer');

  });

  test('ТС 05.1.21 Verify that the  link to the item is redirected to the appropriate pages', async ({ page }) => {

    for (const link of TOPS_ITEM_LINKS) {
        await womenPage.navigateToLinkAndReturn(link);
        await expect(page).toHaveURL(link);
    }

});

    test('ТС 05.1.22 Verify that the  categories menu "Bottoms" is displayed on the "Women" page', async ({ page }) => {

        await expect(womenPage.menuBottoms).toBeVisible();
        await expect(womenPage.menuBottoms).toHaveText(MENU_BOTTOMS_TEXT);

      });

      test('ТС 05.1.23 Verify that the  "Bottoms" category menu contains the item link "Pants"', async ({ page }) => {

        await expect(womenPage.itemPantsLink).toBeVisible();
        await expect(womenPage.itemPantsLink).toHaveText(ITEM_PANTS_LINK_TEXT);

      });

      test('ТС 05.1.24 Verify that the link to the item "Pants" contains the pointer cursor', async ({ page }) => {

        await expect(womenPage.itemPantsLink).toHaveCSS('cursor', 'pointer');

      });

      test('ТС 05.1.26 Verify that the  "Bottoms" category menu contains the item link "Shorts"', async ({ page }) => {

        await expect(womenPage.itemShortsLink).toBeVisible();
        await expect(womenPage.itemShortsLink).toHaveText(ITEM_SHORTS_LINK_TEXT);
      });

      test('ТС 05.1.27 Verify that the link to the item "Shorts" contains the pointer cursor', async ({ page }) => {

        await expect(womenPage.itemShortsLink).toHaveCSS('cursor', 'pointer');

      });

      test('ТС 05.1.28 Verify that the  link to the item is redirected to the appropriate pages', async ({ page }) => {

        for (const link of BOTTOMS_ITEM_LINKS) {
            await womenPage.navigateToLinkAndReturn(link);
            await expect(page).toHaveURL(link);
        }

      });

      test('ТС 05.1.37 Verify that the"Women"  page contains the promo block', async ({ page }) => {

        await expect(womenPage.promoBlock).toBeVisible();

      });

      test('ТС 05.1.38  Verify that the promo block contains "New Luma Yoga Collection" promo section', async ({ page }) => {

        await expect(womenPage.newLumaYogaCollectionContent).toBeVisible();

      });

      test('ТС 05.1.39  Verify that the "New Luma Yoga Collection" promo section has a cursor pointer', async ({ page }) => {

        await expect(womenPage.newLumaYogaCollectionContent).toHaveCSS('cursor', 'pointer');

      });

      test('ТС 05.1.41  Verify that the "New Luma Yoga Collection" promo sections has the information block', async ({ page }) => {

        await expect(womenPage.promoBlockInfo).toBeVisible();
        await expect(womenPage.promoBlockInfo).toHaveText(PROMO_BLOCK_INFO_TEXT)

      });

      test('ТС 05.1.43  Verify that the "New Luma Yoga Collection" promo sections has the information block', async ({ page }) => {

        await expect(womenPage.promoBlockInfoTitle).toBeVisible();
        await expect(womenPage.promoBlockInfoTitle).toHaveText(PROMO_BLOCK_INFO_TITLE_TEXT)

      });

      test('ТС 05.1.44 Verify that the information block contains the "Shop New Yoga" button', async ({ page }) => {

        await expect(womenPage.shopNewYogaBtn).toBeVisible();

      });

      test('ТС 05.1.45 Verify that the "Shop New Yoga" button has a cursor pointer', async ({ page }) => {

        await expect(womenPage.shopNewYogaBtn).toHaveCSS('cursor', 'pointer');

      });

      test('ТС 05.1.46 Verify that the "Shop New Yoga" button is colored blue', async ({ page }) => {

        await expect(womenPage.shopNewYogaBtn).toHaveCSS('background-color', 'rgb(25, 121, 195)');

      });

      test('ТС 05.1.47 Verify that the promo block contains "You can’t have too many tees" promo section', async ({ page }) => {

        await expect(womenPage.blockContentTees).toBeVisible();

      });

      test('ТС 05.1.59 Verify that the "You can’t have too many tees" promo section has a cursor pointer', async ({ page }) => {

        await expect(womenPage.blockContentTees).toHaveCSS('cursor', 'pointer');

      });

      test('ТС 05.1.60 Verify that the user is redirected to the "Tees" page after clicking on the "You can’t have too many tees" promo section', async ({ page }) => {

        await womenPage.clickblockContentTees();
        await expect(page).toHaveURL( WOMEN_TOPS_TEES_URL);

      });

      test('ТС 05.1.61 Verify that the "You can’t have too many tees" promo sections have the information block', async ({ page }) => {

        await expect(womenPage.blockContentTeesInfo).toBeVisible();
        await expect(womenPage.blockContentTeesInfo).toHaveText(BLOCK_CONTENT_TEES_INFO_TEXT);

      });

      test('ТС 05.1.63 Verify that the information block has the call to action text', async ({ page }) => {

        await expect(womenPage.blockContentTeesAction).toBeVisible();
        await expect(womenPage.blockContentTeesAction).toHaveText(BLOCK_CONTENT_TEES_ACTION_TEXT);

      });


      test('ТС 05.1.64 Verify that the information block contains the "Women’s Tees" link', async ({ page }) => {

        await expect(womenPage.womenTeesLink).toBeVisible();

      });

      test('ТС 05.1.65 Verify that the "Women’s Tees" link has a cursor pointer', async ({ page }) => {

        await expect(womenPage.womenTeesLink).toHaveCSS('cursor', 'pointer');

      });

      test('ТС 05.1.66 Verify that the promo block contains "20% OFF" promo section', async ({ page }) => {

        await expect(womenPage.promoBlock20OFF).toBeVisible();

      });

      test('ТС 05.1.67 Verify that the "20% OFF" promo section has a cursor pointer', async ({ page }) => {

        await expect(womenPage.promoBlock20OFF).toHaveCSS('cursor', 'pointer');

      });

      test('ТС 05.1.68 Verify that the user is redirected to the "Pants" page after clicking on the "20% OFF" promo section', async ({ page }) => {

        await womenPage.clickPromoBlock20OFF();
        await expect(page).toHaveURL( WOMEN_BOTTOMS_PANTS_PAGE_URL);

      });

      test('ТС 05.1.69 Verify that the "20% OFF" promo sections has the information block', async ({ page }) => {

        await expect(womenPage.promoBlock20OFFInfoBlock).toBeVisible();

      });

      test('ТС 05.1.70 Verify that the information block has the header', async ({ page }) => {

        await expect(womenPage.promoBlock20OFFHeader).toBeVisible();
        await expect(womenPage.promoBlock20OFFHeader).toHaveText(BLOCK_20_OFF_HEADER_TEXT);

      });

  });











