import { test } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test.describe('Login to Adactin Hotel App', () => {
  test('[ILABACCEL-1585] Error message displayed on failed login', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1585' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1
      await loginPage.openLoginPage();

      // Source step 2
      await loginPage.fillField('#username', 'AutotestB', 'username');

      // Source step 3
      await loginPage.fillField('#password', 'WrongPass1', 'password');

      // Source step 4
      await loginPage.click('#login', 'Login button');

      // Source step 5
      await loginPage.expectAuthenticationError();
      await loginPage.expectLoginPageStillVisible();
    } catch (error) {
      throw new Error(`[ILABACCEL-1585] Error message displayed on failed login failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
