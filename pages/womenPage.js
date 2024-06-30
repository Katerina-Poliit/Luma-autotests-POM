import WomenTopsPage from "./womenTopsPage";
import WomenBottomsPage from "./womenBottomsPage";



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

     }