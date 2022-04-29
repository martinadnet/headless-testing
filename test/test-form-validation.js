const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    //Test it only accepts letters
    await page.type('#guessValues', '12345');
    await page.click('#guessBtnSubmit');
    await page.waitForTimeout(10000); 
    await page.evaluate( () => document.getElementById("guessValues").value = "");

    //Test it only accepts lowercase
    await page.type('#guessValues', 'UPPER');
    await page.click('#guessBtnSubmit');
    await page.waitForTimeout(10000); 
    await page.evaluate( () => document.getElementById("guessValues").value = "");

    //Test it only accepts real english words
    await page.type('#guessValues', 'eguhu');
    await page.click('#guessBtnSubmit');
    await page.waitForTimeout(10000);
    await page.evaluate( () => document.getElementById("guessValues").value = "");

    //Test it only accepts 5 letter words
    await page.type('#guessValues', 'waytoolong');
    await page.click('#guessBtnSubmit');
    await page.waitForTimeout(10000);
    await page.evaluate( () => document.getElementById("guessValues").value = "");
    await browser.close();
})()