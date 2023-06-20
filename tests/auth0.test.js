const puppeteer = require("puppeteer");

let browser, page;
beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});

afterEach(async () => {
  await browser.close();
});

test("auth0 login for a fresh user", async () => {
  await page.click("a");
  const url = await page.url();
  expect(url).toContain("https://dev-clinto-material-srijan.eu.auth0.com/");
});
