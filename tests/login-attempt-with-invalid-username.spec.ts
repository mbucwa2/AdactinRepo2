import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin login scenarios', () => {
  test('[ILABACCEL-1571] Login attempt with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    try {
      // Step 1: Navigate to the Adactin Hotel App login page
      await loginPage.open();
      await loginPage.expectLoginPageDisplayed();

      // Step 2: In the Username field, enter InvalidUser123
      await loginPage.enterUsername('InvalidUser123');

      // Step 3: In the Password field, enter IA4073
      await loginPage.enterPassword('IA4073');

      // Step 4: Click the Login button
      await loginPage.clickLogin();

      // Step 4 (expected result): Login fails and user remains on the login page with an error message
      await loginPage.expectInvalidLoginError();
    } catch (error) {
      console.error('Invalid username login test failed:', error);
      throw error;
    }
  });
});
