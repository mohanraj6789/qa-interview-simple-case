import { Page, expect } from '@playwright/test'

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('http://localhost:8080/login')
  }

  async assertLoginPageVisible() {
    await expect(this.page.getByRole('heading', { name: 'Strawberry QA', exact: true })).toBeVisible()
  }

  async clickSignupLink() {
    await this.page.getByText('Signup').click()
  }

  async login(email: string, password: string) {
    await this.page.locator('#email').fill(email)
    await this.page.locator('#password').fill(password)
    await this.page.getByRole('button', { name: /login/i }).click()
  }
}
