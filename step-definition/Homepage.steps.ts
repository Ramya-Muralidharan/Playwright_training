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
