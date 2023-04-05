import { test, expect } from "@playwright/test";

test.describe("Sample tests", () => {
  // see: https://playwright.dev/docs/writing-tests#first-test
  // to run test: npx playwright test sample.test.mjs
  test("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Expect the page title to contain a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // wait 3 seconds just to see the browser.
    // (remove this timeout in a real test)
    await page.waitForTimeout(3000);
  });
});
