import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

Given('I load URL', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.loadURL();
});

When('I login with {string}', async function (this: CustomWorld, agent: string) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.login(agent);
});