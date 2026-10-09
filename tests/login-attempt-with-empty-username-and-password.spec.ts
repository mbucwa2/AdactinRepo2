import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin login scenarios', () => {
  test('[ILABACCEL-1573] Login attempt with empty username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    try {
      // Step 1: Navigate to the Adactin Hotel App login page
      await loginPage.open();
      await loginPage.expectLoginPageDisplayed();

      // Step 2: Leave the Username field empty
      await expect(loginPage.usernameInput).toHaveValue('');

      // Step 3: Leave the Password field empty
      await expect(loginPage.passwordInput).toHaveValue('');

      // Step 4: Click the Login button
      await loginPage.clickLogin();

      // Step 4 (expected result): Login attempt is prevented and username validation occurs on the login page
      await loginPage.expectUsernameRequiredValidation();
      await expect(page).toHaveURL(/adactinhotelapp\.com\/$/);
    } catch (error) {
      console.error('Empty credentials login test failed:', error);
      throw error;
    }
  });
});
