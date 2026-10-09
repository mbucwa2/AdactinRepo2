import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly usernameInput = () => this.page.locator('#username');
  readonly passwordInput = () => this.page.locator('#password');
  readonly loginButton = () => this.page.locator('#login');
  readonly authError = () => this.page.locator('.auth_error');
  readonly usernameError = () => this.page.locator('#username_span');
  readonly passwordError = () => this.page.locator('#password_span');
  readonly dashboardHeader = () => this.page.locator('a[href="SearchHotel.php"]');
  readonly logoutLink = () => this.page.getByText('Logout');

  constructor(page: Page) {
    super(page);
  }

  async openLoginPage() {
    await this.open('/');
    await this.expectVisible('#login', 'Login form');
  }

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  async expectLoginPageStillVisible() {
    await expect(this.page.locator('#login')).toBeVisible();
    await expect(this.page).toHaveURL(/adactinhotelapp\.com\/?$/);
  }

  async expectAuthenticationError() {
    await expect(this.authError()).toBeVisible();
    await expect(this.authError()).toContainText(/invalid|incorrect|username|password|details|login/i);
  }

  async expectEmptyUsernameValidation() {
    await expect(this.usernameError()).toBeVisible();
  }

  async expectEmptyPasswordValidation() {
    await expect(this.passwordError()).toBeVisible();
  }

  async expectDashboardVisible() {
    await expect(this.dashboardHeader()).toBeVisible();
    await expect(this.logoutLink()).toBeVisible();
    await expect(this.page).toHaveURL(/SearchHotel\.php/);
  }
}
