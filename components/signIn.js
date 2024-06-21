export class SignIn {

   constructor(page) {

        this.page = page;

		  this.signInLink = page.getByRole('link', { name: 'Sign In' });

   }

}