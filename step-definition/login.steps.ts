import { Given, When, Then } from '@cucumber/cucumber';
import test, { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

Given('I open the login page', async function (this: CustomWorld) {
  await this.page!.goto('https://the-internet.herokuapp.com/login');
});

Given('I open the iframes content', async function (this: CustomWorld) {
  await this.page!.goto('https://practice-automation.com/popups/');
  // await this.page!.frameLocator('#iframe').locator('.navbar__logo').click();
  
  //  this.page!.once('dialog', dialog => {
  //   console.log(`Dialog message: ${dialog.message()}`);
  //   dialog.accept().catch(() => {console.log('Dialog accept failed')});
  // });
  // await this.page!.getByRole('button', { name: 'Alert Popup' }).click();
  // await this.page!.pause();
  const promptMessage = "Hello Team";
  this.page!.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept(promptMessage).catch(() => {console.log('Dialog accept failed')});
    
  });
  await this.page!.getByRole('button', { name: 'Prompt Popup' }).click();

  const promptResult = await this.page!.locator('#promptResult').textContent();
  console.log(`Prompt result: ${promptResult}`);
  console.log(`Prompt message: ${promptMessage}`);
  expect(promptResult).toContain("Hello Team");
  expect(this.page!).toHaveTitle(/Practice Automation/);

  await this.page!.waitForLoadState('networkidle')
  await this.page!.waitForTimeout(5000) //5sec
  if (this.page!.url().includes('login')) {
    await this.page!.locator('#username').fill('tomsmith');
    await this.page!.locator('#password').fill('SuperSecretPassword!');
    await this.page!.locator('button[type="submit"]').click();
  }
  expect(this.page!.locator('header')).toBeVisible();
});
  // this.page!.once('dialog', dialog => {
  //   console.log(`Dialog message: ${dialog.message()}`);
  //   dialog.dismiss().catch(() => {});
  // });
  // await this.page!.getByRole('button', { name: 'Confirm Popup' }).click();


When('I submit valid credentials', async function (this: CustomWorld) {
  await this.page?.locator('#username').fill('tomsmith');
  await this.page?.locator('#password').fill('SuperSecretPassword!');
  await this.page?.locator('button[type="submit"]').click();
});

Then('I should see the secure area message', async function (this: CustomWorld) {
  const page = this.page!;
  await expect(page.locator('div.flash.success')).toContainText(/You logged into a secure area!/);
});
