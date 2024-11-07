import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://localhost:3000'
export default defineConfig({
  testDir: './tests',
  fullyParallel:true,
  retries:1,
  use:{
    screenshot:'on',
    video:'retain-on-failure',
    baseURL
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],
});
