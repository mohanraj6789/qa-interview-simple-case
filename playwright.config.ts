import { defineConfig, devices } from '@playwright/test';

export const setupDir = 'playwright/.setup';
export const setupFile = `${setupDir}/user.json`;

export default defineConfig({
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright']
  ],
  projects: [
    {
      name: 'setup',
      testDir: './test-setup/',
      testMatch: '*',
     // hide setup from report
    },
    {
      name: 'chromium',
      testDir: './tests/',
      timeout: 30000,
      testIgnore: ['**/test-setup/**', '**/helpers/**'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: setupFile,
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
      },
      dependencies: ['setup'],
    },
  ],
});
