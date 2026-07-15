import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

Given('I open the login page', async function (this: CustomWorld) {
  await this.page!.goto('https://the-internet.herokuapp.com/login');
});

When('I submit valid credentials', async function (this: CustomWorld) {
  await this.page?.locator('#username').fill('tomsmith');
  await this.page?.locator('#password').fill('SuperSecretPassword!');
  await this.page?.locator('button[type="submit"]').click();
});

Then('I should see the secure area message', async function (this: CustomWorld) {
  const page = this.page!;
  await expect(page.locator('div.flash.success')).toContainText(/You logged into a secure area!/);
});
