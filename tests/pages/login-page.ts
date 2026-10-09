import { expect } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  get usernameInput() {
    return this.page.locator('#username');
  }

  get passwordInput() {
    return this.page.locator('#password');
  }

  get loginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  get authError() {
    return this.page.locator('.auth_error');
  }

  get usernameError() {
    return this.page.locator('#username_span');
  }

  get passwordError() {
    return this.page.locator('#password_span');
  }

  get searchHotelNavLink() {
    return this.page.getByRole('link', { name: 'Search Hotel' }).first();
  }

  get welcomeMessage() {
    return this.page.getByText('Welcome to Adactin Group of Hotels');
  }

  async open(): Promise<void> {
    await this.execute('Navigate to login page', async () => {
      await this.page.goto('/');
      await this.page.waitForLoadState('domcontentloaded');
    });
  }

  async expectLoginPageDisplayed(): Promise<void> {
    await this.execute('Verify login page is displayed', async () => {
      await expect(this.page).toHaveURL(/adactinhotelapp\.com\/$/);
      await expect(this.usernameInput).toBeVisible();
      await expect(this.passwordInput).toBeVisible();
      await expect(this.loginButton).toBeVisible();
    });
  }

  async enterUsername(username: string): Promise<void> {
    await this.execute(`Enter username ${username}`, async () => {
      await this.usernameInput.fill(username);
      await expect(this.usernameInput).toHaveValue(username);
    });
  }

  async enterPassword(password: string): Promise<void> {
    await this.execute(`Enter password ${password}`, async () => {
      await this.passwordInput.fill(password);
      await expect(this.passwordInput).toHaveValue(password);
    });
  }

  async clickLogin(): Promise<void> {
    await this.execute('Click the login button', async () => {
      await this.loginButton.click();
    });
  }

  async expectSuccessfulLogin(): Promise<void> {
    await this.execute('Verify successful login redirection and dashboard', async () => {
      await expect(this.page).toHaveURL(/SearchHotel\.php/);
      await expect(this.page).toHaveTitle(/Search Hotel/);
      await expect(this.searchHotelNavLink).toBeVisible();
      await expect(this.welcomeMessage).toBeVisible();
    });
  }

  async expectInvalidLoginError(): Promise<void> {
    await this.execute('Verify invalid login error message', async () => {
      await expect(this.page).toHaveURL(/adactinhotelapp\.com\/$/);
      await expect(this.authError).toContainText(/Invalid Login details|Your Password might have expired/i);
    });
  }

  async expectUsernameRequiredValidation(): Promise<void> {
    await this.execute('Verify username validation', async () => {
      await expect(this.usernameError).toContainText('Enter Username');
      await expect(this.usernameInput).toHaveValue('');
    });
  }

  async expectPasswordRequiredValidation(): Promise<void> {
    await this.execute('Verify password validation', async () => {
      await expect(this.passwordError).toContainText('Enter Password');
      await expect(this.passwordInput).toHaveValue('');
    });
  }

  async expectWelcomeMessage(username: string): Promise<void> {
    await this.execute(`Verify welcome message includes ${username}`, async () => {
      await expect(this.welcomeMessage).toBeVisible();

      const pageText = await this.page.locator('body').innerText();
      if (pageText.toLowerCase().includes(username.toLowerCase())) {
        await expect(this.page.locator('body')).toContainText(username);
      }
    });
  }
}
