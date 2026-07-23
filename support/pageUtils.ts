import { Page, expect } from '@playwright/test';

export class PageUtils {
  constructor(private page: Page, private dataMap: Map<string, any>) {}

  // Proper class method declaration
  async verifyTextPresent(expectedText: string): Promise<void> {
    await expect(this.page.locator(`text=${expectedText}`)).toBeVisible({
      timeout: 5000,
    });
  }
}
