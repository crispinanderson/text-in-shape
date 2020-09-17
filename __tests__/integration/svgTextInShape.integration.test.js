
describe('svg-text-in-shape, e2e tests - ', () => {

    beforeEach(async () => {
        await page.setViewport({ width: 1400, height: 1500 })
        await page.goto('file://' + __dirname + '/index.html');
        await page.addScriptTag({ path: __dirname.replace('integration', '') + '/test-build/index.js' });
        //await page.screenshot({ path: __dirname + '/screenshots/screenshot.png' });

    });

    test('Text that does not fit in the shape is appended with ...', async () => {
        const lastLine = await page.evaluate(() => {
            const polygonText = document.getElementById('text-in-polygon');
            return Array.from(polygonText.children).pop().textContent;
        })

        expect(lastLine.slice(-3)).toBe('...')
    })
})