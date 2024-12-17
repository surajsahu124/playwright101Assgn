const { defineConfig } = require('@playwright/test');
const capabilities = {
  'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright JS Build',
    'name': 'Playwright Test',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
    'tunnelName': '', // Optional
    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    'playwrightClientVersion': playwrightClientVersion
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


  // projects: [
  //   {
  //     name: 'LambdaTest-Chrome',
  //     use: {
  //       browserName: 'chromium',
  //       headless: true,
  //       viewport: { width: 1280, height: 720 },
  //     },
  //   },
  //   {
  //     name: 'LambdaTest-Firefox',
  //     use: {
  //       browserName: 'firefox',
  //       headless: true,
  //       viewport: { width: 1280, height: 720 },
  //     },
  //   },
  // ],

  // // LambdaTest Grid Configuration
  // use: {
  //   baseURL: 'https://playwright.lambdatest.com',
  //   headless: true,
  //   browserName: 'chromium',
  //   launchOptions: {
  //     args: ['--disable-gpu'],
  //   },
  //   // Authentication for LambdaTest Grid
  //   server: `wss://sahusuraj4292:7epBur6QzX8AGBw85u9DsyDiAmFooRZ0lL4JuqVEztpSvQdapM@playwright.lambdatest.com/ws`,
  // },
  
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  }

});
