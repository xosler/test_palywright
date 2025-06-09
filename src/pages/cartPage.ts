import { Page } from 'playwright';
import { expect } from '@playwright/test';


export class CartPage {
      constructor(private page: Page) { }

      async navigate() {

      }

      async checkItemIsOnTheCart(itemName: string) {
            await this.page.locator('[data-test="inventory-item-name"]', {
                  hasText: itemName,
            }).waitFor();

      }

      async clickOnCheckout() {
            await this.page.locator('[data-test="checkout"]')
                  .click()
      }

      async fillCheckoutYourInformation(firstName: string, lastName: string, postalCode: string) {
            const firstNameLocator = this.page.locator('[data-test="firstName"]')
            const lastNameLocator = this.page.locator('[data-test="lastName"]')
            const potstalCodeLocator = this.page.locator('[data-test="postalCode"]')

            await firstNameLocator.fill(firstName);
            await lastNameLocator.fill(lastName);
            await potstalCodeLocator.fill(postalCode);
      }

      async clickContinueButtonYourInformation() {
            const continuButton = this.page.locator('[data-test="continue"]')

            await continuButton
                  .click()
      }

      async checkTotalPrice(totalExpected: string) {
            //await this.page.waitForTimeout(3000);
            await this.page.locator('[data-test="total-label"]', {
                  hasText: totalExpected,
            }).waitFor();
      }


      async clickFinishButton() {
            await this.page.locator('[data-test="finish"]')
                  .click()
      }

      async validadeUrl(url: string) {
            await expect(this.page).toHaveURL(url);

      }

      async validateSucessMessage(text: string) {
            await expect(this.page.locator('[data-test="complete-header"]'))
                  .toHaveText(text);

      }

      async validadeReturnHomeButton() {
            const backButton = this.page.locator('[data-test="back-to-products"]');

            await expect(backButton).toBeVisible();
            await expect(backButton).toBeEnabled();

      }




}