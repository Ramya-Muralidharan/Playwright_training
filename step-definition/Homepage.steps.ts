import { When } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/world';
import { HomePage } from '../pages/HomePage';

When('I add a product to cart', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page!);
  const product = this.testData?.ProductName
  await homePage.addProductToCart(product);
});

When('I sort the products', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page!);
  const sortOption = this.testData?.sortOption;
  await homePage.sortProducts(sortOption);
});
  When('I add {string} to cart', async function (this: CustomWorld, product: string) {
    const homePage = new HomePage(this.page!, this.dataMap);
    await homePage.addProductToCart(product);
    
  });

  When('I sort the products by {string}', async function (this: CustomWorld, sortOption: string) {
    const homePage = new HomePage(this.page!, this.dataMap);
    await homePage.sortProducts(sortOption);
  });

  
  When('I read price', async function (this: CustomWorld) {
    const homePage = new HomePage(this.page!, this.dataMap);
    await homePage.readPrice();

  });
