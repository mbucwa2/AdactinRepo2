import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin login scenarios', () => {
  test('[ILABACCEL-1575] Error message verification on failed login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    try {
      // Step 1: Navigate to the Adactin Hotel App login page
      await loginPage.open();
      await loginPage.expectLoginPageDisplayed();

      // Step 2: Enter username AutotestB
      await loginPage.enterUsername('AutotestB');

      // Step 3: Enter password WrongPass1
      await loginPage.enterPassword('WrongPass1');

      // Step 4: Click the Login button
      await loginPage.clickLogin();

      // Step 5: Observe the error message
      await loginPage.expectInvalidLoginError();
    } catch (error) {
      console.error('Failed login error message verification test failed:', error);
      throw error;
    }
  });
});
