import { Locator, Page } from 'playwright';
import { expect } from '@playwright/test';


const BASE_URL = process.env.BASE_URL;

export class MyProfilePage {
    inputName: Locator;
    middleName: Locator;
    lastName: Locator;
    saveButton: Locator;
    constructor(private page: Page) {
        this.inputName = this.page.locator('input[name="firstName"]');
        this.middleName = this.page.locator('input[name="middleName"]');
        this.lastName = this.page.locator('input[name="lastName"]');
        this.saveButton = this.page.locator('button:has-text("Save")');
    }

    async navigate() {
        await this.page.goto(`${BASE_URL!}web/index.php/pim/viewMyDetails`);
    }

    async fillName(name: string) {
        await this.inputName.waitFor({ state: 'visible' });
        await this.inputName.fill(name);
    }

    async fillMiddleName(middle: string) {
        await this.middleName.fill(middle)
    }

    async fillLastName(last: string) {
        await this.lastName.fill(last)
    }

    async saveMyProfile() {
        await this.saveButton.click();
    }

    async expectSuccessMessage() {
        const message = this.page.locator('#oxd-toaster_1');

        await expect(message).toBeVisible({ timeout: 5000 });
        await expect(message.locator('.oxd-toast-content--success')).toContainText('Success');
        await expect(message.locator('.oxd-toast-content--success')).toContainText('Successfully Updated');

    }

    async validadeFields(name: string, middle: string, last: string) {
        await expect(this.inputName).toHaveValue(name);
        await expect(this.middleName).toHaveValue(middle);
        await expect(this.lastName).toHaveValue(last);
    }




}