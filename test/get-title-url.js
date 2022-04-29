const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const title = await page.title();
    const url = await page.url();
    console.log(`Title: ${title}\nURL: ${url}`);
    await page.waitForTimeout(5000);
    await browser.close();
})()