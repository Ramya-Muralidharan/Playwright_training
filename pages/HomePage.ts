import { type Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) { }

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
}