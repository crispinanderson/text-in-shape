import puppeteer from 'puppeteer';

export const testPageInstance = async () => {
    const broswer = await puppeteer.launch();
    const page = await broswer.newPage();
    await page.goto('file://' + __dirname + '/index.html');

    return { browser, page };
}