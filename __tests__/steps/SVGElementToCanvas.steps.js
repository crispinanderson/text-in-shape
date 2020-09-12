import { defineFeature, loadFeature } from 'jest-cucumber';
const feature = loadFeature('./__tests__/features/SVGElementToCanvas.feature');
import { testPageInstance } from '../utils/testPageInstance';
import { newCanvas, drawRect } from '../../src/SVGElementToCanvas'

defineFeature(feature, test => {
    let page, browser, shape;

    beforeEach(async () => {
        let instance = await testPageInstance();
        page = instance.page;
        browser = instance.browser;
    });

    afterEach(async () => {
        //await browser.close();
    });

    test('For supported shapes', async ({ given, when, then }) => {
        given('the shape is of type rect', async () => {
            let tagName = await page.$eval('#rect', el => el.tagName);
            expect(tagName).toBe('rect');
        })
        then('create a canvas representation of the shape', () => {
            /* const ctx = newCanvas(shape);
            expect(() => ctx.arc(1, 2, 3, 4)).toThrow(TypeError); */
        })
    });
});