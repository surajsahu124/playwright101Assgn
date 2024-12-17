const { defineConfig } = require('@playwright/test');
const capability = {
  "browserName": "Chrome",
  "browserVersion": "131.0",
  "LT:Options": {
    "video": true,
    "platform": "Windows 10",
    "tunnel": true,
    "console": true
  }
}
module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  headless: false,
  retries: 1,
  use: {
    trace: 'on',  // Captures traces of your tests
    screenshot: 'on',  // Takes screenshots
    video: 'retain-on-failure',  // Records video on test failures
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
  ],


  projects: [
    {
      name: 'LambdaTest-Chrome',
      use: {
        browserName: 'chromium',
        headless: true,
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'LambdaTest-Firefox',
      use: {
        browserName: 'firefox',
        headless: true,
        viewport: { width: 1280, height: 720 },
      },
    },
  ],

  // LambdaTest Grid Configuration
  use: {
    baseURL: 'https://playwright.lambdatest.com',
    headless: true,
    browserName: 'chromium',
    launchOptions: {
      args: ['--disable-gpu'],
    },
    // Authentication for LambdaTest Grid
    server: `wss://sahusuraj4292:7epBur6QzX8AGBw85u9DsyDiAmFooRZ0lL4JuqVEztpSvQdapM@playwright.lambdatest.com/ws`,
  },
  

});
