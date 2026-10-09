import { test } from '@playwright/test';
import { loginTestData } from './test-data/login-test-data';
import { LoginPage } from './pages/login-page';

const emptyFields = loginTestData.scenarios.emptyFields;

test.describe('Adactin Hotel login tests', () => {
  test('[ILABACCEL-1562] Verify login attempt with empty username and or password fields', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1562' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1: Navigate to the Adactin login page.
      await loginPage.open();

      // Source step 2: Leave Username and Password empty, then click Login.
      await loginPage.loginButton.click();

      // Expected: validation prompt or error is displayed and the user stays on the login page.
      await loginPage.expectLoginPageVisible();
      await loginPage.expectValidationErrorVisible(/username|required/i);

      // Source step 3: Enter ${emptyFields.secondaryUsername} in Username and leave Password empty, then click Login.
      await loginPage.usernameInput.fill(emptyFields.secondaryUsername ?? '');
      await loginPage.passwordInput.fill(emptyFields.secondaryPassword ?? '');
      await loginPage.loginButton.click();

      // Expected: the user is prompted to enter the password.
      await loginPage.expectLoginPageVisible();
      await loginPage.expectValidationErrorVisible(/password|required/i);

      // Source step 4: Leave Username empty and enter ${emptyFields.thirdPassword} in Password, then click Login.
      await loginPage.usernameInput.fill(emptyFields.thirdUsername ?? '');
      await loginPage.passwordInput.fill(emptyFields.thirdPassword ?? '');
      await loginPage.loginButton.click();

      // Expected: the user is prompted to enter the username.
      await loginPage.expectLoginPageVisible();
      await loginPage.expectValidationErrorVisible(/username|required/i);
    } catch (error) {
      throw new Error(`Test failed for [ILABACCEL-1562]: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
});
