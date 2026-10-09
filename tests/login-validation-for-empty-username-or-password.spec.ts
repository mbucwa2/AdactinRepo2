import { test } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test.describe('Login to Adactin Hotel App', () => {
  test('[ILABACCEL-1583] Login validation for empty username or password', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1583' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1
      await loginPage.openLoginPage();

      // Source step 2
      await loginPage.fillField('#username', 'AutotestB', 'username');
      await loginPage.click('#login', 'Login button');
      await loginPage.expectEmptyPasswordValidation();

      // Source step 3
      await page.goto('https://adactinhotelapp.com/');
      await loginPage.fillField('#username', '', 'username');
      await loginPage.fillField('#password', 'IA4073', 'password');
      await loginPage.click('#login', 'Login button');
      await loginPage.expectEmptyUsernameValidation();

      // Source step 4
      await page.goto('https://adactinhotelapp.com/');
      await loginPage.fillField('#username', '', 'username');
      await loginPage.fillField('#password', '', 'password');
      await loginPage.click('#login', 'Login button');
      await loginPage.expectEmptyUsernameValidation();
    } catch (error) {
      throw new Error(`[ILABACCEL-1583] Login validation for empty username or password failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
