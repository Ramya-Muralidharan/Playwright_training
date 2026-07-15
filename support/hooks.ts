import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import type { CustomWorld } from './world';

setDefaultTimeout(60000);

let browser: any;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

Before(async function (this: CustomWorld) {
  this.browser = browser;
  this.context = await browser.newContext();
  this.page = await this.context?.newPage();
});

After(async function (this: CustomWorld) {
  await this.context?.close();
  await this.browser?.close();
});

AfterAll(async function () {
  await browser?.close();
});
