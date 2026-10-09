import { Page, expect } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async open(path = '/') {
    await this.page.goto(path);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async fillField(selector: string, value: string, fieldName: string) {
    try {
      await this.page.locator(selector).fill(value);
    } catch (error) {
      throw new Error(`Failed to fill ${fieldName}: ${this.formatError(error)}`);
    }
  }

  async click(selector: string, controlName: string) {
    try {
      await this.page.locator(selector).click();
    } catch (error) {
      throw new Error(`Failed to click ${controlName}: ${this.formatError(error)}`);
    }
  }

  protected formatError(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
  }

  async expectVisible(selector: string, name: string) {
    await expect(this.page.locator(selector), `${name} should be visible`).toBeVisible();
  }

  async expectUrlContains(partialUrl: string) {
    await expect(this.page, `URL should contain ${partialUrl}`).toHaveURL(new RegExp(partialUrl));
  }

  async expectText(selector: string, expected: RegExp | string, label: string) {
    await expect(this.page.locator(selector), `${label} should match expected text`).toContainText(expected);
  }
}
