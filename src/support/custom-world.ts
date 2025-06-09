import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { MyProfilePage } from '../pages/MyProfilePage';
import { ItemListPage } from '../pages/itemListPage';
import { CartPage } from '../pages/cartPage';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;


  loginPage!: LoginPage;
  myProfilePage!: MyProfilePage
  itemListPage!: ItemListPage
  cartPage!: CartPage

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {

    const isHeadless = process.env.HEADLESS !== 'false';
    this.browser = await chromium.launch({ headless: isHeadless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
    this.myProfilePage = new MyProfilePage(this.page);
    this.itemListPage = new ItemListPage(this.page);
    this.cartPage = new CartPage(this.page);


  }

  async close() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);
