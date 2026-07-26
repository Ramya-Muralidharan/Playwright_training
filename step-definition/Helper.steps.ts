import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

Given('I load the test data for {string}', async function (this: CustomWorld, testCaseId: string) {
  const testData = require('../TestData/AddProduct_TestCaseSpecific.json');
  this.testData = testData[testCaseId];
  console.log(`Loaded test data for ${testCaseId}: ${JSON.stringify(this.testData)}`);
});

