const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test');

test('Input Form Submit', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.click('text=Input Form Submit');

  await page.getByRole('button', { name: 'submit' }).click();
  const elementHandle=await page.$('input');
  const errorMessage = await elementHandle.evaluate(el => el.validationMessage);;
  expect(errorMessage).toContain('Please fill out this field.');

  await page.fill('#name', 'John Doe');
  await page.fill('#inputEmail4', 'john.doe@example.com');
  await page.fill('#inputPassword4', 'abcd');
  await page.fill('#company', 'lambda test');
  await page.fill('#websitename', 'lambda test');
  const dropdown = page.locator('select[name="country"]');
  await dropdown.selectOption({ label: 'United States' });
  await page.fill('#inputCity', 'city');
  await page.fill('#inputAddress1', 'add1');
  await page.fill('#inputAddress2', 'add2');
  await page.fill('#inputState', 'state');
  await page.fill('#inputZip', '58588');
  
  await page.getByRole('button', { name: 'submit' }).click();
  const successMessage = await page.textContent('.success-msg');
  expect(successMessage).toContain('Thanks for contacting us, we will get back to you shortly.');
});
