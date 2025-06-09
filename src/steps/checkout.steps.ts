import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { DataTable } from '@cucumber/cucumber';
//import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';
import { LoginPage } from '../pages/LoginPage';
import { ItemListPage } from '../pages/itemListPage';
import { CartPage } from '../pages/cartPage';

const USERNAME = process.env.USER_MARKETPLACE;
const PASSWORD = process.env.PWD_MARKETPLACE;
const BASE_URL = process.env.BASE_URL_MARKETPLACE;

Given('the user is logged into the marketplace app', async function (this: CustomWorld) {

    await this.loginPage.navigateCheckout();
    await this.loginPage.logInCheckout(USERNAME!, PASSWORD!);
});

Given('the following items have been added to the cart:', async function (this: CustomWorld, dataTable: DataTable) {

    const items = dataTable.rows();

    for (let [product] of items) {
        await this.itemListPage.addProductToCartByName(product)
    }
});

When('the user accesses the shopping cart', async function (this: CustomWorld) {
    await this.itemListPage.clickCartButton()

});

Then('the system should display the following products in the cart:', async function (this: CustomWorld, dataTable: DataTable) {
    const items = dataTable.rows();
    for (let [product] of items) {
        await this.cartPage.checkItemIsOnTheCart(product)
    }

});

Given('the user click on checkout', async function (this: CustomWorld) {
    await this.cartPage.clickOnCheckout()
});

Given('the user fill their personal information with {string}, {string}, {string}',
    async function (this: CustomWorld, firstName: string, lastName: string, postalCode: string) {
        await this.cartPage.fillCheckoutYourInformation(firstName, lastName, postalCode);
    }
);

When('the user click on contiunue', async function (this: CustomWorld) {
    await this.cartPage.clickContinueButtonYourInformation()
});


Then('the total price of the shop should be {string}', async function (this: CustomWorld, totalPrice: string) {
    await this.cartPage.checkTotalPrice(totalPrice)
});



When('the user click on finish in the checkout page', async function (this: CustomWorld) {
    await this.cartPage.clickFinishButton()
});

Then('the system should finish the checkout', async function (this: CustomWorld) {
    const urlCheckout = `${BASE_URL}checkout-complete.html`
    await this.cartPage.validadeUrl(urlCheckout)
});

Then('present the sucess message', async function (this: CustomWorld) {
    await this.cartPage.validateSucessMessage('Thank you for your order!')
});

Then('present the button to back to home', async function (this: CustomWorld) {
    await this.cartPage.validadeReturnHomeButton();
});