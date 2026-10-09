import { test } from '@playwright/test';
import { loginTestData } from './test-data/login-test-data';
import { LoginPage } from './pages/login-page';

const dashboardAfterLogin = loginTestData.scenarios.dashboardAfterLogin;

test.describe('Adactin Hotel login tests', () => {
  test('[ILABACCEL-1563] Verify user lands on the Search Hotel dashboard after successful login', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1563' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1: Navigate to the Adactin login page.
      await loginPage.open();

      // Source step 2: Enter ${dashboardAfterLogin.username} in the Username field.
      await loginPage.usernameInput.fill(dashboardAfterLogin.username);

      // Source step 3: Enter ${dashboardAfterLogin.password} in the Password field.
      await loginPage.passwordInput.fill(dashboardAfterLogin.password);

      // Source step 4: Click the Login button.
      await loginPage.loginButton.click();

      // Source step 5: Observe the landing page URL and navigation elements.
      await loginPage.expectDashboardLoaded();
      await page.waitForURL(/SearchHotel|search_hotel|index/i, { timeout: 15000 });
    } catch (error) {
      throw new Error(`Test failed for [ILABACCEL-1563]: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
