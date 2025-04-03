import { expect, test } from '@playwright/test'
import { existingUsers } from './test-setup/localstorage.setup'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { HomePage } from './pages/HomePage'

test.describe('Sign Up - New User Registration', () => {
  test('To verify new user should be able to register and login successfully', async ({ page }) => {
    const { email, password, firstName, lastName } = existingUsers[0]

    const loginPage = new LoginPage(page)
    const signupPage = new SignupPage(page)
    const homePage = new HomePage(page)

    await loginPage.goto()
    await loginPage.assertLoginPageVisible()

    await loginPage.clickSignupLink()
    await signupPage.assertSignupPageVisible()
    await signupPage.register(firstName, lastName, email, password)
    await homePage.assertOnHomePage()

    await homePage.logout()
    await homePage.assertLoggedOut()

    await loginPage.login(email, password)
    await expect(page.getByText('LOG OUT')).toBeVisible()
    await expect(page).toHaveURL('http://localhost:8080/')
  })
})
