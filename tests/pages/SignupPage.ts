import { Page, expect } from '@playwright/test'

export class SignupPage {
  constructor(private page: Page) {}

  async assertSignupPageVisible() {
    await expect(this.page.getByRole('heading', { level: 2, name: 'Become a member' })).toBeVisible()
  }

  async register(firstName: string, lastName: string, email: string, password: string) {
    await this.page.locator('#firstName').fill(firstName)
    await this.page.locator('#lastName').fill(lastName)
    await this.page.locator('#email').fill(email)
    await this.page.locator('#password').fill(password)
    await this.page.waitForTimeout(1000)
    await this.page.getByRole('button', { name: /submit/i }).click()
  }
}
