import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin login scenarios', () => {
  test('[ILABACCEL-1570] Successful login with valid username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    try {
      // Step 1: Navigate to the Adactin Hotel App login page
      await loginPage.open();
      await loginPage.expectLoginPageDisplayed();

      // Step 2: In the Username field, enter AutotestB
      await loginPage.enterUsername('AutotestB');

      // Step 3: In the Password field, enter IA4073
      await loginPage.enterPassword('IA4073');

      // Step 4: Click the Login button
      await loginPage.clickLogin();

      // Step 5: Verify application behavior after login
      await loginPage.expectSuccessfulLogin();
      await loginPage.expectWelcomeMessage('AutotestB');
    } catch (error) {
      console.error('Login success test failed:', error);
      throw error;
    }
  });
});
