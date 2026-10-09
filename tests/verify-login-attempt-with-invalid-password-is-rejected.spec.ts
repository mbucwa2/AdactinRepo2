import { test } from '@playwright/test';
import { loginTestData } from './test-data/login-test-data';
import { LoginPage } from './pages/login-page';

const invalidPassword = loginTestData.scenarios.invalidPassword;

test.describe('Adactin Hotel login tests', () => {
  test('[ILABACCEL-1561] Verify login attempt with invalid password is rejected', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1561' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1: Navigate to the Adactin login page.
      await loginPage.open();

      // Source step 2: Enter ${invalidPassword.username} in the Username field.
      await loginPage.usernameInput.fill(invalidPassword.username);

      // Source step 3: Enter ${invalidPassword.password} in the Password field.
      await loginPage.passwordInput.fill(invalidPassword.password);

      // Source step 4: Click the Login button.
      await loginPage.loginButton.click();

      // Expected: user remains on the login page and an invalid-login error is shown.
      await loginPage.expectLoginPageVisible();
      await loginPage.expectInvalidLoginDetailsMessage();
    } catch (error) {
      throw new Error(`Test failed for [ILABACCEL-1561]: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
