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

  

});
