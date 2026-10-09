import { test } from '@playwright/test';
import { loginTestData } from './test-data/login-test-data';
import { LoginPage } from './pages/login-page';

const validLogin = loginTestData.scenarios.validLogin;

test.describe('Adactin Hotel login tests', () => {
  test('[ILABACCEL-1559] Verify successful login with valid username and password', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1559' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1: Navigate to the Adactin login page.
      await loginPage.open();

      // Source step 2: Enter ${validLogin.username} in the Username field.
      await loginPage.usernameInput.fill(validLogin.username);

      // Source step 3: Enter ${validLogin.password} in the Password field.
      await loginPage.passwordInput.fill(validLogin.password);

      // Source step 4: Click the Login button.
      await loginPage.loginButton.click();

      // Expected: user is redirected away from the login page and the dashboard is displayed.
      await loginPage.expectDashboardLoaded();
    } catch (error) {
      throw new Error(`Test failed for [ILABACCEL-1559]: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
