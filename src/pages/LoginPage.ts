import { Page } from 'playwright';

const BASE_URL_MY_PROFILE = process.env.BASE_URL;
const BASE_URL_CHECKOUT = process.env.BASE_URL_MARKETPLACE;

export class LoginPage {
  constructor(private page: Page) {}

  async navigateProfile() {
    await this.page.goto(`${BASE_URL_MY_PROFILE}web/index.php/auth/login`);
  }

  async logInProfile(user: string, password: string) {
    const inputLogin = this.page.locator('input[name="username"]');
    const inputPassword = this.page.locator('input[name="password"]');
    const buttonLogin = this.page.locator('button', { hasText: 'Login' });

    await inputLogin.fill(user);
    await inputPassword.fill(password);
    await buttonLogin.click()
  }

  async navigateCheckout() {
    await this.page.goto(`${BASE_URL_CHECKOUT}`);
  }

  async logInCheckout(user: string, password: string) {
    const inputLogin = this.page.locator('[data-test="username"]');
    const inputPassword = this.page.locator('[data-test="password"]');
    const buttonLogin = this.page.locator('[data-test="login-button"]');

    await inputLogin.fill(user);
    await inputPassword.fill(password);
    await buttonLogin.click()
  }



}
