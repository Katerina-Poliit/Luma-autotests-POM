import { WhatsNewPage } from "../pages/whatsNewPage";

export default class RemoveModalWindow {

	constructor (page) {

		 this.page = page;
		 this.heading = page.getByText('Are you sure you want to');
		 this.closeBtn = page.getByRole('button', { name: 'Close' });

	}

	async clickCloseBtn() {
		await this.closeBtn.click();
		return new WhatsNewPage(this.page);
	}
}