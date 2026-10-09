# Xray Export: ILABACCEL-1586

Exported 6 tests from the test plan `ILABACCEL-1586`.

## ILABACCEL-1580 — Login successful with valid credentials

- Key: `ILABACCEL-1580`
- Summary: Login successful with valid credentials
- Priority: High
- Preconditions:
  - User has access to the application login page
  - Test user is active
  - Use credentials username `AutotestB` and password `IA4073`

- Steps:
  1. Action: Open the application login page.
     Expected result: The login page is displayed and ready for authentication.
  2. Action: Enter username `AutotestB` in the username field.
     Expected result: The username is accepted and appears in the username field.
  3. Action: Enter password `IA4073` in the password field.
     Expected result: The password is accepted and masked/entered without error.
  4. Action: Click the Login button.
     Expected result: The user is authenticated successfully, no error message is displayed, and the user is redirected away from the login page.

## ILABACCEL-1581 — Login fails with invalid username

- Key: `ILABACCEL-1581`
- Summary: Login fails with invalid username
- Priority: High
- Preconditions:
  - User has access to the application login page
  - Use a non-existent username and a valid password

- Steps:
  1. Action: Open the application login page.
     Expected result: The login page is displayed and ready for authentication.
  2. Action: Enter username `InvalidUser` in the username field.
     Expected result: The invalid username is entered and visible in the field.
  3. Action: Enter password `IA4073` in the password field.
     Expected result: The valid password is accepted and entered without error.
  4. Action: Click the Login button.
     Expected result: Login is rejected, the user remains on the login page, and an appropriate error message is displayed.

## ILABACCEL-1582 — Login fails with invalid password

- Key: `ILABACCEL-1582`
- Summary: Login fails with invalid password
- Priority: High
- Preconditions:
  - User has access to the application login page
  - Use a valid username and an invalid password

- Steps:
  1. Action: Open the application login page.
     Expected result: The login page is displayed and ready for authentication.
  2. Action: Enter username `AutotestB` in the username field.
     Expected result: The valid username is entered and visible in the field.
  3. Action: Enter password `WrongPass1` in the password field.
     Expected result: The invalid password is entered and accepted by the form.
  4. Action: Click the Login button.
     Expected result: Login is rejected, the user remains on the login page, and an appropriate error message is displayed.

## ILABACCEL-1583 — Login validation for empty username or password

- Key: `ILABACCEL-1583`
- Summary: Login validation for empty username or password
- Priority: Medium
- Preconditions:
  - User has access to the application login page

- Steps:
  1. Action: Open the application login page.
     Expected result: The login page is displayed and ready for input.
  2. Action: Leave the username empty, enter password `IA4073`, and click the Login button.
     Expected result: Login is not attempted or is rejected, the user remains on the login page, and a validation message appears for the missing username.
  3. Action: Leave the password empty, enter username `AutotestB`, and click the Login button.
     Expected result: Login is not attempted or is rejected, the user remains on the login page, and a validation message appears for the missing password.
  4. Action: Leave both the username and password empty and click the Login button.
     Expected result: Login is not attempted or is rejected, the user remains on the login page, and required-field validation messages are displayed for missing input.

## ILABACCEL-1584 — User lands on correct dashboard after login

- Key: `ILABACCEL-1584`
- Summary: User lands on correct dashboard after login
- Priority: High
- Preconditions:
  - User has access to the application login page
  - Use credentials username `AutotestB` and password `IA4073`

- Steps:
  1. Action: Open the application login page.
     Expected result: The login page is displayed and ready for authentication.
  2. Action: Enter username `AutotestB`.
     Expected result: The username is accepted and visible in the field.
  3. Action: Enter password `IA4073`.
     Expected result: The password is accepted and masked/entered without error.
  4. Action: Click the Login button.
     Expected result: The authentication request is processed successfully.
  5. Action: Observe the page displayed after authentication.
     Expected result: The user is redirected to the expected dashboard page, the dashboard title and key widgets are visible, and the logged-in user identity is shown in the UI where applicable.

## ILABACCEL-1585 — Error message displayed on failed login

- Key: `ILABACCEL-1585`
- Summary: Error message displayed on failed login
- Priority: Medium
- Preconditions:
  - User has access to the application login page

- Steps:
  1. Action: Open the application login page.
     Expected result: The login page is displayed and ready for input.
  2. Action: Enter username `AutotestB`.
     Expected result: The username is accepted and visible in the field.
  3. Action: Enter password `WrongPass1`.
     Expected result: The invalid password is accepted and entered without error.
  4. Action: Click the Login button.
     Expected result: Authentication is attempted and fails.
  5. Action: Capture the error message text and where it appears.
     Expected result: A clear error message is displayed indicating authentication failed, the message is user-friendly and does not expose sensitive information, and the user remains on the login page and can retry.

