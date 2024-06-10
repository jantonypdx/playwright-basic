import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  workers: 1,
  retries: 0,

  // Reporter to use
  reporter: "list",
  outputDir: "test-results",

  use: {
    headless: false,
    // channel: "chrome", // uncomment to use chrome instead of chromium
  },

  // Configure projects for major browsers.
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
