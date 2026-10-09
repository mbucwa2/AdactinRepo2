# Xray test export from Test Plan ILABACCEL-1565

Exported 6 tests from the plan.

## ILABACCEL-1559 — Verify successful login with valid username and password

- Summary: Verify successful login with valid username and password
- Priority: Highest
- Preconditions:
  - User has a registered account with username AutotestB and password IA4073.
  - Browser is open with internet access.
  - User is logged out.

### Steps
1. Action: Navigate to [<redacted URL>](https://adactinhotelapp.com/)
   - Expected result: Login page is displayed with Username and Password fields and Login button.
2. Action: Enter AutotestB in the Username field.
   - Expected result: Username AutotestB is accepted in the field.
3. Action: Enter IA4073 in the Password field.
   - Expected result: Password is accepted and displayed masked.
4. Action: Click the Login button.
   - Expected result: User is logged in successfully and redirected away from the login page.

## ILABACCEL-1560 — Verify login attempt with invalid username is rejected

- Summary: Verify login attempt with invalid username is rejected
- Priority: High
- Preconditions:
  - Browser is open with internet access.
  - User is on the Adactin Hotel login page and logged out.

### Steps
1. Action: Navigate to [<redacted URL>](https://adactinhotelapp.com/)
   - Expected result: Login page is displayed.
2. Action: Enter InvalidUser999 in the Username field.
   - Expected result: Invalid username is entered in the field.
3. Action: Enter IA4073 in the Password field.
   - Expected result: Password is entered and masked.
4. Action: Click the Login button.
   - Expected result: User is not logged in, remains on the login page, and an error message indicating invalid login details is displayed.

## ILABACCEL-1561 — Verify login attempt with invalid password is rejected

- Summary: Verify login attempt with invalid password is rejected
- Priority: High
- Preconditions:
  - Browser is open with internet access.
  - User is on the Adactin Hotel login page and logged out.

### Steps
1. Action: Navigate to [<redacted URL>](https://adactinhotelapp.com/)
   - Expected result: Login page is displayed.
2. Action: Enter AutotestB in the Username field.
   - Expected result: Valid username AutotestB is entered.
3. Action: Enter WrongPassword123 in the Password field.
   - Expected result: Invalid password is entered and masked.
4. Action: Click the Login button.
   - Expected result: User is not logged in, remains on the login page, and an error message indicating invalid login details is displayed.

## ILABACCEL-1562 — Verify login attempt with empty username and or password fields

- Summary: Verify login attempt with empty username and or password fields
- Priority: High
- Preconditions:
  - Browser is open with internet access.
  - User is on the Adactin Hotel login page and logged out.

### Steps
1. Action: Navigate to [<redacted URL>](https://adactinhotelapp.com/)
   - Expected result: Login page is displayed.
2. Action: Leave the Username field empty and leave the Password field empty.
   - Expected result: User is not logged in.
3. Action: Click the Login button.
   - Expected result: A validation prompt or error message is displayed prompting the user to enter credentials.
4. Action: Enter AutotestB in the Username field and leave the Password field empty, then click Login.
   - Expected result: User is prompted to enter the password.
5. Action: Leave the Username field empty and enter IA4073 in the Password field, then click Login.
   - Expected result: User is prompted to enter the username.

## ILABACCEL-1563 — Verify user lands on the Search Hotel dashboard after successful login

- Summary: Verify user lands on the Search Hotel dashboard after successful login
- Priority: High
- Preconditions:
  - User has a registered account with username AutotestB and password IA4073.
  - Browser is open with internet access.
  - User is logged out.

### Steps
1. Action: Navigate to [<redacted URL>](https://adactinhotelapp.com/)
   - Expected result: Login page is displayed.
2. Action: Enter AutotestB in the Username field.
   - Expected result: Credentials are entered.
3. Action: Enter IA4073 in the Password field.
   - Expected result: User is authenticated successfully.
4. Action: Click the Login button.
   - Expected result: User is redirected to the Search Hotel dashboard page.
5. Action: Observe the landing page URL and navigation elements.
   - Expected result: The Search Hotel page URL is loaded and the primary navigation links Search Hotel, Booked Itinerary, Change Password, Logout, and the logged-in user account greeting are visible.

## ILABACCEL-1564 — Verify appropriate error message is displayed on failed login

- Summary: Verify appropriate error message is displayed on failed login
- Priority: Medium
- Preconditions:
  - Browser is open with internet access.
  - User is on the Adactin Hotel login page and logged out.

### Steps
1. Action: Navigate to <redacted URL>
   - Expected result: Login page is displayed.
2. Action: Enter incorrect credentials in the Username and Password fields.
   - Expected result: Incorrect credentials are entered.
3. Action: Click the Login button.
   - Expected result: Login fails and the user remains on the login page.
4. Action: Observe the displayed error message.
   - Expected result: A clear and user-friendly error message is displayed indicating invalid login details without exposing sensitive system information.
