export class CreateNewCustomerAccountPage {

   constructor(page) {

        this.page = page;

        this.pageHeader = page.getByText('Create New Customer Account');

   }

}