export class CreateAccount {

   constructor(page) {

        this.page = page;

		  this.createAccountLink = page.getByRole('link', { name: 'Create an Account' });

   }

}