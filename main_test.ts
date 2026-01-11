import puppeteer, { type Browser, type Page } from "puppeteer-core";

const BASE_URL = "http://127.0.0.1:8090";

let browser: Browser;
let page: Page;

Deno.test.beforeAll(async () => {
  browser = await puppeteer.launch({ executablePath: "/usr/bin/chromium" });
  page = await browser.newPage();
  page.on("console", (msg) => console.debug(`PAGE LOG: ${msg.text()}`));
  await page.goto(BASE_URL);
});

Deno.test.afterAll(async () => {
  await browser.close();
});

Deno.test({
  name: "GET /",
  sanitizeResources: false,
  sanitizeOps: false,
  async fn() {},
});
