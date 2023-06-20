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

test("title & button has correct text", async () => {
  const title = await page.$eval("h1", (el) => el.innerHTML);
  const button = await page.$eval("a", (el) => el.innerHTML);
  expect(title).toContain("You are logged out from the Express.js Application");
  expect(button).toEqual("Login");
});
