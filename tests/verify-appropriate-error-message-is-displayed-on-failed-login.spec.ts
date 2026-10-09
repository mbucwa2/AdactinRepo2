import { test } from '@playwright/test';
import { loginTestData } from './test-data/login-test-data';
import { LoginPage } from './pages/login-page';

const failedLogin = loginTestData.scenarios.failedLogin;

test.describe('Adactin Hotel login tests', () => {
  test('[ILABACCEL-1564] Verify appropriate error message is displayed on failed login', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1564' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1: Navigate to the Adactin login page.
      await loginPage.open();

      // Source step 2: Enter incorrect credentials in the Username and Password fields.
      await loginPage.usernameInput.fill(failedLogin.username);
      await loginPage.passwordInput.fill(failedLogin.password);

      // Source step 3: Click the Login button.
      await loginPage.loginButton.click();

      // Source step 4: Observe the displayed error message.
      await loginPage.expectInvalidLoginDetailsMessage();
    } catch (error) {
      throw new Error(`Test failed for [ILABACCEL-1564]: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
