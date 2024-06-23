import { CreateNewCustomerAccountPage } from "./createNewCustomerAccountPage";
import { CustomerLoginPage } from "./customerLoginPage";
import { GearPage } from "./gearPage";
import { MenPage } from "./menPage";
import { SalePage } from "./salePage";
import { SearchResultPageWithResults } from "./searchResultPageWithResults";
import { TrainingPage } from "./trainingPage";
import { WhatsNewPage } from "./watsNewPage";
import { WomenPage } from "./womenPage";
import NotesPage from "./notesPage";
import ParticeAPIPage from "./particeApi.Page";
import WriteForUsPage  from "./writeForUsPage";
import SubscribePage from "./subscribePage";
import PolicyPage from "./policyPage"

export class HomePage {

   constructor(page) {

        this.page = page;
      //----------------------------- Header -----------------------------------------------------------
        this.headerSection = page.getByText('Toggle Nav My Cart My Cart');
		  this.storeLogo = page.getByLabel('store logo');
		  this.signInlink = page.getByRole('link', { name: 'Sign In' });
		  this.createAnAccountLink = page.getByRole('banner').getByRole('link', { name: 'Create an Account' });
		  this.searchField = page.getByPlaceholder('Search entire store here...');
		  this.searchBtn = page.locator("button[title='Search']");
		  this.dropdownSearch = page.locator('#search_autocomplete > ul > li');
		  this.dropdownItem = page.locator('.qs-option-name').filter({hasText: 'shorts for men'});
		  this.cartBtn = page.getByRole('link', { name: ' My Cart' });
		//----------------------------- Footer -----------------------------------------------------------
         this.footerContent = this.page.locator('.page-wrapper footer'),
		 this.noteslink = page.getByRole('link', { name: 'Notes' }),
		 this.pacticeAPI = page.getByRole('link', { name: 'Practice API Testing using Magento' }),
		 this.forUsLink = page.getByRole('link', { name: 'Write for us' });
		 this.subscribeLink = page.getByRole('link', { name: 'Subscribe' });
		 this.privacyCookiesLink = page.getByRole('link', { name: 'Privacy and Cookie Policy' }),



		//----------------------------- homePage -----------------------------------------------------------
		this.bodyPage = page.locator('div').filter({ hasText: 'New Luma Yoga Collection Get' }).nth(3);
		this.watsNewLink = page.getByRole('menuitem', { name: 'What\'s New' });
		this.womenLink = page.getByRole('menuitem', { name: 'Women' });
		this.menLink = page.getByRole('menuitem', { name: 'Men' }).last();
		this.gearLink = page.getByRole('menuitem', { name: 'Gear' });
		this.trainingLink = page.getByRole('menuitem', { name: 'Training' });
		this.saleLink = page.getByRole('menuitem', { name: 'Sale' });


   }

	async open() {
		await this.page.goto("/");
	}

	async clickLogo() {
		await this.storeLogo.click();
	}

	async clickSignInLink() {
		await this.signInlink.click();
		return new CustomerLoginPage(this.page)
	}

	async clickCreateAnAccountLink() {
		await this.createAnAccountLink.click();
		return new CreateNewCustomerAccountPage(this.page)
	}

	async fillSearchField() {
		await this.searchField.fill('a');
	}

	async cleanSearchField() {
		await this.searchField.fill('');
	}

	async clickSearchField() {
		await this.searchField.click();
	}

	async fillSearchFieldSmth(value) {
		await this.searchField.fill(value);
	}

	async clickSearchBtn() {
		await this.searchBtn.click();
		return new SearchResultPageWithResults(this.page);
	}

	async pressSearchField() {
		await this.searchField.press('Enter');
		return new SearchResultPageWithResults(this.page);
	}

	async clickDropdownItem() {
		await this.dropdownItem.click();
		return new SearchResultPageWithResults(this.page);
	}

	async clickWatsNewLink() {
		await this.watsNewLink.click();
		return new WhatsNewPage(this.page);
	}

	async clickWomenLink() {
		await this.womenLink.click();
		return new WomenPage(this.page);
	}

	async clickMenLink() {
		await this.menLink.click();
		return new MenPage(this.page);
	}

	async clickGearLink() {
		await this.gearLink.click();
		return new GearPage(this.page);
	}

	async clickTrainingLink() {
		await this.trainingLink.click();
		return new TrainingPage(this.page);
	}

	async clickSaleLink() {
		await this.saleLink.click();
		return new SalePage(this.page);
	}

	async clickNoteslink() {
		await this.noteslink.click();
		return new NotesPage(this.page);
	}

	async clickpacticeAPI() {
		await this.pacticeAPI.click();
		return new ParticeAPIPage(this.page);
	}

	async clickforUsLink() {
		await this.forUsLink.click();
		return new WriteForUsPage(this.page);
	}

	async clicksubscribeLink() {
		await this.subscribeLink.click();
		return new SubscribePage(this.page);
	}

	async clickprivacyCookiesLink() {
		await this.privacyCookiesLink.click();
		return new PolicyPage(this.page);
	}


}