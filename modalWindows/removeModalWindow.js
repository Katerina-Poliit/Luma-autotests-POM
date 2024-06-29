import { WhatsNewPage } from "../pages/whatsNewPage";

export default class RemoveModalWindow {

	constructor (page) {

		 this.page = page;
		 this.heading = page.getByText('Are you sure you want to');
		 this.closeBtn = page.getByRole('button', { name: 'Close' });
		 this.canselBtn = page.getByRole('button', { name: 'Cancel' });
		 this.okBtn = page.getByRole('button', { name: 'OK' });

	}

	async clickCloseBtn() {
		await this.closeBtn.click();
		return new WhatsNewPage(this.page);
	}

	async clickCanselBtn() {
		await this.canselBtn.click();
		return new WhatsNewPage(this.page);
	}

	async clickOkBtn() {
		await this.okBtn.click();
		return new WhatsNewPage(this.page);
	}

}