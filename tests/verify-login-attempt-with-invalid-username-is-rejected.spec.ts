import { test } from '@playwright/test';
import { loginTestData } from './test-data/login-test-data';
import { LoginPage } from './pages/login-page';

const invalidUsername = loginTestData.scenarios.invalidUsername;

test.describe('Adactin Hotel login tests', () => {
  test('[ILABACCEL-1560] Verify login attempt with invalid username is rejected', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1560' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1: Navigate to the Adactin login page.
      await loginPage.open();

      // Source step 2: Enter ${invalidUsername.username} in the Username field.
      await loginPage.usernameInput.fill(invalidUsername.username);

      // Source step 3: Enter ${invalidUsername.password} in the Password field.
      await loginPage.passwordInput.fill(invalidUsername.password);

      // Source step 4: Click the Login button.
      await loginPage.loginButton.click();

      // Expected: user remains on the login page and an invalid-login error is shown.
      await loginPage.expectLoginPageVisible();
      await loginPage.expectInvalidLoginDetailsMessage();
    } catch (error) {
      throw new Error(`Test failed for [ILABACCEL-1560]: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
