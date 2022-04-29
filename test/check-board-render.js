const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
});
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    if (await page.$(".game-board") == null) {
      console.log("Game board not rendered correctly");
    } else {
      console.log("Game board rendered correctly")
    }
    await browser.close()
  })()