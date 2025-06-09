import { Page } from 'playwright';

const BASE_URL = process.env.BASE_URL_MARKETPLACE;

export class ItemListPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.goto(`${BASE_URL}inventory.html`);
    }

    async addProductToCartByName(productName: string) {
        const itemCards = this.page.locator('.inventory_item');

        const count = await itemCards.count();

        for (let i = 0; i < count; i++) {
            const currentItem = itemCards.nth(i);

            const nameLocator = currentItem.locator('[data-test="inventory-item-name"]');
            const nameText = await nameLocator.textContent();

            if (nameText?.trim() === productName) {
                const addToCartButton = currentItem.locator('button[data-test^="add-to-cart"]');
                await addToCartButton.click();
                return; 
            }
        }

        throw new Error(`Produto com nome "${productName}" não encontrado na lista.`);
    }

    async removeItemFromCart(itemName: string) {

    }

    async clickCartButton(){
        const cartButton = await this.page.locator('[data-test="shopping-cart-link"]')

        await cartButton.click();
    }

}