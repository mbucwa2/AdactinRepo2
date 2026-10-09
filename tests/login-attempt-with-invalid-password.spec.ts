import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin login scenarios', () => {
  test('[ILABACCEL-1572] Login attempt with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    try {
      // Step 1: Navigate to the Adactin Hotel App login page
      await loginPage.open();
      await loginPage.expectLoginPageDisplayed();

      // Step 2: In the Username field, enter AutotestB
      await loginPage.enterUsername('AutotestB');

      // Step 3: In the Password field, enter WrongPass1
      await loginPage.enterPassword('WrongPass1');

      // Step 4: Click the Login button
      await loginPage.clickLogin();

      // Step 4 (expected result): Login fails, user remains on the Login page, and an appropriate error message is displayed
      await loginPage.expectInvalidLoginError();
    } catch (error) {
      console.error('Invalid password login test failed:', error);
      throw error;
    }
  });
});
