# Test Cases - Login to Adactin Hotel App (ILABACCEL-1576)

## Test 1: ILABACCEL-1570 - Successful login with valid username and password

**Priority:** Medium

**Preconditions:**
- User has a registered account on Adactin Hotel App
- Test user credentials are available
- Browser is open

**Test Data:**
- Username: AutotestB
- Password: IA4073

**Test Steps:**

1. **Action:** Navigate to the Adactin Hotel App login page  
   **Expected Result:** The Login page is displayed

2. **Action:** In the Username field, enter AutotestB  
   **Expected Result:** Username is entered in the field

3. **Action:** In the Password field, enter IA4073  
   **Expected Result:** Password is entered in the field

4. **Action:** Click the Login button  
   **Expected Result:** The user is authenticated successfully

5. **Action:** Verify application behavior after login  
   **Expected Result:** The application redirects to the Search Hotel dashboard page (SearchHotel.php) and a welcome message is visible including the username AutotestB

---

## Test 2: ILABACCEL-1571 - Login attempt with invalid username

**Priority:** Medium

**Preconditions:**
- Browser is open

**Test Data:**
- Username: InvalidUser123
- Password: IA4073

**Test Steps:**

1. **Action:** Navigate to the Adactin Hotel App login page  
   **Expected Result:** The Login page is displayed

2. **Action:** In the Username field, enter InvalidUser123  
   **Expected Result:** Username is entered in the field

3. **Action:** In the Password field, enter IA4073  
   **Expected Result:** Password is entered in the field

4. **Action:** Click the Login button  
   **Expected Result:** Login fails, user remains on the Login page, and an appropriate error message is displayed (e.g., "Invalid Login details" or "Your Password might have expired. Click here to reset your password")

---

## Test 3: ILABACCEL-1572 - Login attempt with invalid password

**Priority:** Medium

**Preconditions:**
- User has a registered account on Adactin Hotel App
- Browser is open

**Test Data:**
- Username: AutotestB
- Password: WrongPass1

**Test Steps:**

1. **Action:** Navigate to the Adactin Hotel App login page  
   **Expected Result:** The Login page is displayed

2. **Action:** In the Username field, enter AutotestB  
   **Expected Result:** Username is entered in the field

3. **Action:** In the Password field, enter WrongPass1  
   **Expected Result:** Password is entered in the field

4. **Action:** Click the Login button  
   **Expected Result:** Login fails, user remains on the Login page, and an appropriate error message is displayed (e.g., "Invalid Login details" or "Your Password might have expired. Click here to reset your password")

---

## Test 4: ILABACCEL-1573 - Login attempt with empty username and password

**Priority:** Medium

**Preconditions:**
- Browser is open

**Test Steps:**

1. **Action:** Navigate to the Adactin Hotel App login page  
   **Expected Result:** The Login page is displayed

2. **Action:** Leave the Username field empty  
   **Expected Result:** Username field remains empty

3. **Action:** Leave the Password field empty  
   **Expected Result:** Password field remains empty

4. **Action:** Click the Login button  
   **Expected Result:** Login attempt is prevented, validation messages are displayed prompting the user to enter username and password, and user remains on the Login page

---

## Test 5: ILABACCEL-1574 - Landing page verification after successful login

**Priority:** Medium

**Preconditions:**
- User has a registered account on Adactin Hotel App
- Browser is open

**Test Data:**
- Username: AutotestB
- Password: IA4073

**Test Steps:**

1. **Action:** Navigate to the Adactin Hotel App login page  
   **Expected Result:** The Login page is displayed

2. **Action:** Enter username AutotestB and password IA4073  
   **Expected Result:** Credentials are entered in the respective fields

3. **Action:** Click the Login button  
   **Expected Result:** Login is successful

4. **Action:** Verify the browser redirects to the authenticated area  
   **Expected Result:** Browser has redirected to the authenticated member area

5. **Action:** Verify the URL contains SearchHotel.php  
   **Expected Result:** The URL displays SearchHotel.php

6. **Action:** Verify the page title and header indicate Search Hotel  
   **Expected Result:** The page title, URL, and header confirm the user is in the authenticated Search Hotel area

---

## Test 6: ILABACCEL-1575 - Error message verification on failed login

**Priority:** Medium

**Preconditions:**
- Browser is open

**Test Data:**
- Username: AutotestB
- Password: WrongPass1

**Test Steps:**

1. **Action:** Navigate to the Adactin Hotel App login page  
   **Expected Result:** The Login page is displayed

2. **Action:** Enter username AutotestB  
   **Expected Result:** Username is entered in the field

3. **Action:** Enter password WrongPass1  
   **Expected Result:** Password is entered in the field

4. **Action:** Click the Login button  
   **Expected Result:** Login fails

5. **Action:** Observe the error message  
   **Expected Result:** User remains on the Login page, an appropriate error message is displayed that is user-friendly and indicates invalid login details or password issue

---

## Summary

**Total Tests Exported:** 6

All test cases have been successfully extracted from Test Plan ILABACCEL-1576 with their respective steps, preconditions, priorities, and expected results.
