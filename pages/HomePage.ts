import { type Page, expect } from '@playwright/test';

export class HomePage {
    constructor(private page: Page, private dataMap: Map<string, any>) { }

    async addProductToCart(product: string) {
        const productLocator = this.page.locator(`.inventory_item:has-text("${product}")`);

        //**filter */
        //this.page.locator('.inventory_item').filter({ hasText: product });
        
        //const backpackWithAddButton = items.filter({
        //hasText: 'Backpack',
        // has: page.locator('button:has-text("Add to cart")')
        //});

        await productLocator.getByText('Add to Cart').click();

        //**Promise */
        //         const productLocator = this.page.locator(`.inventory_item:has-text("${product}")`);
        // const addToCartButton = productLocator.getByText('Add to Cart');

        // // Explicit promise chain
        // addToCartButton.waitFor({ state: 'visible' })
        //   .then(() => {
        //     // Once visible, return the click promise
        //     return addToCartButton.click();
        //   })
        //   .then(() => {
        //     // Once click is done, you can continue with other actions
        //     console.log('Add to Cart button was visible and clicked successfully');
        //   })
        //   .catch(err => {
        //     // Handle any errors in the chain
        //     console.error('Failed to click Add to Cart:', err);
        //   });
        await this.page.waitForTimeout(3000); // Wait for 2 seconds to ensure the action is completed
    }

    async sortProducts(sortOption: string) {
        await this.page.locator('.product_sort_container').selectOption({ label: sortOption });
        await this.page.waitForTimeout(2000);

        // Wait for 2 seconds to ensure the action is completed
    }

    async readPrice() {
        const productCard = this.page.locator('.inventory_item').filter({
            has: this.page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' })
        });

        const price = await productCard.locator('.inventory_item_price').first().textContent();
        this.dataMap.set('Price', price?.trim());
        console.log('Price for Sauce Labs Backpack:', price?.trim());
        await this.page.waitForTimeout(2000); // Wait for 2 seconds to ensure the action is completed
    }
}