import { expect } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator('#username');
  readonly passwordInput = this.page.locator('#password');
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });
  readonly authError = this.page.locator('.auth_error');
  readonly usernameError = this.page.getByText(/Enter Username|Username is required|Please enter username/i);
  readonly passwordError = this.page.getByText(/Enter Password|Password is required|Please enter password/i);
  readonly searchHotelLink = this.page.getByRole('link', { name: 'Search Hotel' });
  readonly bookedItineraryLink = this.page.getByRole('link', { name: 'Booked Itinerary' });
  readonly changePasswordLink = this.page.getByRole('link', { name: 'Change Password' });
  readonly logoutLink = this.page.getByRole('link', { name: 'Logout' });

  async open() {
    await this.goto('/');
    await this.expectVisible(this.usernameInput, 'username field');
    await this.expectVisible(this.passwordInput, 'password field');
    await this.expectVisible(this.loginButton, 'login button');
  }

  async loginWith(username: string, password: string) {
    await this.safeAction(async () => {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }, `Submit login with username '${username}'`);
  }

  async expectLoginPageVisible() {
    await this.expectVisible(this.usernameInput, 'username field');
    await this.expectVisible(this.passwordInput, 'password field');
    await this.expectVisible(this.loginButton, 'login button');
  }

  async expectErrorMessageVisible(expectedText: string | RegExp) {
    await this.expectVisible(this.authError, 'authentication error message');
    await this.expectText(this.authError, expectedText, 'authentication error message');
  }

  async expectValidationErrorVisible(message: string | RegExp) {
    const validationError = this.page.getByText(/Enter Username|Enter Password|Please enter|Username is required|Password is required/i).filter({ hasText: message });
    await this.expectVisible(validationError.first(), 'validation error message');
    await expect(validationError.first()).toContainText(message, { timeout: 15000 });
  }

  async expectDashboardLoaded() {
    await this.expectVisible(this.searchHotelLink, 'Search Hotel link');
    await this.expectVisible(this.bookedItineraryLink, 'Booked Itinerary link');
    await this.expectVisible(this.changePasswordLink, 'Change Password link');
    await this.expectVisible(this.logoutLink, 'Logout link');
  }

  async expectInvalidLoginDetailsMessage() {
    await this.expectVisible(this.authError, 'login error');
    await expect(this.authError).toContainText(/invalid|please|details/i, { timeout: 15000 });
  }
}
