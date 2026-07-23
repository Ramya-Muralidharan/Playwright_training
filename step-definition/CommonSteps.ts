import { When } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/world';
import { saveTestCaseData, getTestCaseData } from '../support/utils';
import { PageUtils } from '../support/pageUtils'

When('I store data in json file', async function (this: CustomWorld) {
    const testCaseId = this.testCaseID ?? 'default';
    const data = { Price: this.dataMap.get("Price") } as Record<string, unknown>;
    await saveTestCaseData('AddProduct.json', testCaseId, data);
});

When('I read {string} data from json file for {string}', async function (this: CustomWorld, key: string, sourceTCID: string) {
    const price = await getTestCaseData('AddProduct.json', sourceTCID, key);
    this.dataMap.set('Price', price);
});

  When('I validate the {string}', async function (this: CustomWorld, text: string) {
    const pageUtils = new PageUtils(this.page!, this.dataMap);
    const validateText = this.dataMap.get(text);
    await pageUtils.verifyTextPresent(validateText)
  }); 