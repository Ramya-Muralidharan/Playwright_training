import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

  When('I add {string} to cart', async function (this: CustomWorld, product: string) {
    const homePage = new HomePage(this.page!);
    await homePage.addProductToCart(product);
    
  });

  When('I sort the products by {string}', async function (this: CustomWorld, sortOption: string) {
    const homePage = new HomePage(this.page!);
    await homePage.sortProducts(sortOption);
  });
