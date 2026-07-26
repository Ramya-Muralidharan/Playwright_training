import { type Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page, private dataMap: Map<string, any>) { }

    async addProductToCart(product: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.locator('.inventory_list').waitFor({ state: 'visible' });

        const productLocator = this.page.locator('.inventory_item').filter({ hasText: product })
        console.log('count of products found: ' + await productLocator.count());
        await productLocator.waitFor({ state: 'visible' });

        const addToCartButton = productLocator.getByRole('button', { name: 'Add to cart' });
        await addToCartButton.waitFor({ state: 'visible' });
        await addToCartButton.click();

        await this.page.waitForTimeout(2000);
    }

    async sortProducts(sortOption: string) {
        await this.page.locator('.product_sort_container').waitFor({ state: 'visible' });
        await this.page.locator('.product_sort_container').selectOption({ label: sortOption });
        await this.page.waitForTimeout(2000);
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