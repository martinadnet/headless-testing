const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.type('#guessValues', 'pearl');
    await page.click('#guessBtnSubmit');
    await page.waitForTimeout(5000); // wait for 5 seconds
    await browser.close();
})()
