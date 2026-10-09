import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  protected async safeAction<T>(action: () => Promise<T>, stepDescription: string): Promise<T> {
    try {
      return await action();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Step failed: ${stepDescription}. ${message}`);
    }
  }

  async goto(path = '/') {
    await this.safeAction(
      () => this.page.goto(path, { waitUntil: 'domcontentloaded' }),
      `Navigate to ${path}`,
    );
  }

  async expectVisible(locator: Locator, description: string) {
    await this.safeAction(async () => {
      await expect(locator).toBeVisible({ timeout: 15000 });
    }, `Verify ${description} is visible`);
  }

  async expectText(locator: Locator, expected: string | RegExp, description: string) {
    await this.safeAction(async () => {
      await expect(locator).toContainText(expected, { timeout: 15000 });
    }, `Verify ${description} contains expected text`);
  }
}
