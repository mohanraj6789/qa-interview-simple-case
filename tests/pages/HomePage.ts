import { Page, expect } from '@playwright/test'

export class HomePage {
  constructor(private page: Page) {}

  async assertOnHomePage() {
    const title = this.page.getByText('Company')
    await expect(title).toBeVisible()
    await expect(title).toHaveText('Company')
  }

  async logout() {
    await this.page.getByText('LOG OUT').click()
  }

  async assertLoggedOut() {
    await expect(this.page).toHaveURL('http://localhost:8080/login')
    await expect(this.page.getByRole('heading', { name: 'Strawberry QA', exact: true })).toBeVisible()
  }
}
