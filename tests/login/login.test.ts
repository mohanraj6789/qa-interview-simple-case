import { test, expect } from '@playwright/test'
import { existingUsers } from '../../test-setup/localstorage.setup'

test.describe.configure({ mode: 'serial' })

test.describe('Login Form Tests', () => {
  test('should successfully log in with valid credentials', async ({ page }) => {
    const { email, password } = existingUsers[2];

    await page.goto('http://localhost:8080/login') // Launch the login url

    await expect(page.locator('h1').first()).toHaveText('Strawberry QA');

    await page.locator('#email').fill(email) 
    await page.locator('#password').fill(password)

    await page.getByRole('button', { name: /login/i }).click();
    await page.waitForTimeout(2000)

    const pageTitle = page.getByText('Company');
    await expect(pageTitle).toBeVisible() //assertions for loggedin
    await expect(pageTitle).toHaveText('Company');
  })
})
