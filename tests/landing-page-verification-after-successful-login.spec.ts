import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin login scenarios', () => {
  test('[ILABACCEL-1574] Landing page verification after successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    try {
      // Step 1: Navigate to the Adactin Hotel App login page
      await loginPage.open();
      await loginPage.expectLoginPageDisplayed();

      // Step 2: Enter username AutotestB and password IA4073
      await loginPage.enterUsername('AutotestB');
      await loginPage.enterPassword('IA4073');

      // Step 3: Click the Login button
      await loginPage.clickLogin();

      // Step 4: Verify the browser redirects to the authenticated area
      await loginPage.expectSuccessfulLogin();

      // Step 5: Verify the URL contains SearchHotel.php
      await loginPage.expectSuccessfulLogin();

      // Step 6: Verify the page title and header indicate Search Hotel
      await loginPage.expectSuccessfulLogin();
      await loginPage.expectWelcomeMessage('AutotestB');
    } catch (error) {
      console.error('Landing page verification test failed:', error);
      throw error;
    }
  });
});
