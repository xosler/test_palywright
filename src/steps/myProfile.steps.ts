import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
//import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';
import { LoginPage } from '../pages/LoginPage';
import { MyProfilePage } from '../pages/MyProfilePage';

const USERNAME = process.env.USER;
const PASSWORD = process.env.PWD;


Given('the user is logged into the app', async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.navigateProfile();
    await this.loginPage.logInProfile(USERNAME!, PASSWORD!);
});

Given('the user navigates to the {string} page', async function (this: CustomWorld, page: string) {
    this.myProfilePage = new MyProfilePage(this.page);

    await this.myProfilePage.navigate()
});

Given('the user updates the name to {string}', async function (this: CustomWorld, name: string) {
   await this.myProfilePage.fillName(name)
});

Given('the user updates the middle name to {string}', async function (this: CustomWorld, middleName: string) {
    await this.myProfilePage.fillMiddleName(middleName)
});

Given('the user updates the last name to {string}', async function (this: CustomWorld, lastName: string) {
    await this.myProfilePage.fillLastName(lastName)
});


When('the user clicks the {string} button', async function (this: CustomWorld,buttonLabel: string) {
    await this.myProfilePage.saveMyProfile()
});

Then('the system should display a success message', async function (this: CustomWorld,) {
    await this.myProfilePage.expectSuccessMessage()
    await this.myProfilePage.validadeFields('Alexandre', 'Von','Schossler' );
});