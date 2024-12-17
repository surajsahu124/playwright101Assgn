const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test');

test('Simple Form Demo', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByText('Simple Form Demo').click();

  
  expect(page.url()).toContain('simple-form-demo');

  
  const message = 'Welcome to LambdaTest';
  await page.fill('#user-message', message);

  
  await page.getByText('Get Checked Value').click();
  const output = await page.textContent('#message');
  expect(output).toBe(message);
});
