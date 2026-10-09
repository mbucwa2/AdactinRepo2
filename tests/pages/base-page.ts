import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  protected async execute<T>(action: string, callback: () => Promise<T>): Promise<T> {
    try {
      return await callback();
    } catch (error) {
      const details = error instanceof Error ? error.message : String(error);
      throw new Error(`${action} failed: ${details}`);
    }
  }

  protected async expectVisible(locator: Locator, label: string): Promise<void> {
    await this.execute(`Verify ${label} is visible`, async () => {
      await expect(locator).toBeVisible();
    });
  }
}
