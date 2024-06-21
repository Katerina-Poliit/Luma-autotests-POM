export class CustomerLoginPage {

   constructor(page) {

        this.page = page;

        this.pageHeader = page.getByText('Customer Login');

   }

}