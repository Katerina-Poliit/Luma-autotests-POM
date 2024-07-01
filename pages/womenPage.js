import WomenTopsPage from "./womenTopsPage";
import WomenBottomsPage from "./womenBottomsPage";
import WomenTeesPage from "./womenTeesPage";
import WomenPanstPage from "./womenPantsPage";



export class WomenPage {

   constructor(page) {

        this.page = page;

		  this.header = page.getByLabel('Women').getByText('Women');
        this.filterBlock = page.locator('.filter');
        this.categoryTopsLink = page.getByRole('link', { name: 'Tops' });
        this.categoryTopsCount = page.getByText('50', { exact: true });
        this.categoryBottomsLink = page.getByRole('link', { name: 'Bottoms' });
        this.categoryBottomsCount = page.getByText('25');
        this.menuTops = page.locator('strong').filter({ hasText: 'Tops' });
        this.itemHoodiesSweatshirtsLink = page.getByRole('link', { name: 'Hoodies & Sweatshirts' });
        this.itemJacketsLink = page.getByRole('link', { name: 'Jackets' });
        this.itemTeesLink = page.getByRole('link', { name: 'Tees', exact: true });
        this.itemBrasTanksLink = page.getByRole('link', { name: 'Bras & Tanks' });
        this.menuBottoms = page.locator('strong').filter({ hasText: 'Bottoms' }).locator('span');
        this.itemPantsLink = page.getByRole('link', { name: 'Pants', exact: true });
        this.itemShortsLink = page.getByRole('link', { name: 'Shorts', exact: true });
        this.promoBlock = page.getByRole('link', { name: 'New Luma Yoga Collection Yoga' });
        this.newLumaYogaCollectionContent = page.locator('.content').nth(2);
        this.promoBlockInfo = page.locator('.info').nth(0);
        this.promoBlockInfoTitle = page.locator('.title').nth(0);
        this.shopNewYogaBtn = page.locator('.more.button');
        this.blockContentTees = page.getByRole('link', { name: 'You can’t have too many tees' });
        this.blockContentTeesInfo = page.locator('.title').nth(1);
        this.blockContentTeesAction = page.locator('.info').nth(1);
        this.womenTeesLink = page.locator('.more.icon').nth(0);
        this.promoBlock20OFF = page.getByRole('link', { name: 'Hot pants Hot deals 20% OFF' });
        this.promoBlock20OFFInfoBlock = page.locator('.content').nth(3);
        this.promoBlock20OFFHeader = page.locator('.title').nth(2);
        this.promoBlock20OFFAction = page.locator('.info').nth(2);
        this.promoBlock20OFFShopPantsLink = page.locator('.more.icon').nth(1);
        this.compareProductsSection = page.getByRole('heading', { name: 'Compare Products' });
        this.myWishListSection = page.getByRole('heading', { name: 'My Wish List' });


   }

   async clickcategoryTopsLink() {
		await this.categoryTopsLink.click();
		return new WomenTopsPage(this.page);
	}

     async clickCategoryBottomsLink() {
		await this.categoryBottomsLink.click();
		return new WomenBottomsPage(this.page);
	}

     async navigateToLinkAndReturn(url) {

          await this.page.waitForLoadState('networkidle');
          // Вернуться на страницу Women
          await this.page.goto('https://magento.softwaretestingboard.com/women.html');
          await this.page.goto(url);

      }

      async clickblockContentTees() {
		await this.blockContentTees.click();
		return new WomenTeesPage(this.page);
	}

     async clickPromoBlock20OFF() {
		await this.promoBlock20OFF.click();
		return new WomenPanstPage(this.page);
	}


     }