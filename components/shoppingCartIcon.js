export class ShoppingCartIcon {

   constructor(page) {

        this.page = page;

		  this.cartBtn = page.getByRole('link', { name: ' My Cart' });

   }

}