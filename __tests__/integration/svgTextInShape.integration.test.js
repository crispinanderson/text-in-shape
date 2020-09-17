


describe('svg-text-in-shape, integration tests - ', () => {
    const logs = [];
    const text = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit. 
    Ad novum nostro eum, mei no option voluptaria. 
    Senserit referrentur ullamcorper et sed, per semper timeam feugait id. 
    In mea alia meliore, wisi justo his ne. Te essent eripuit appellantur eos. In intellegebat deterruisset vis, at albucius intellegebat sea, ad usu erat impedit. 
    At homero soleat vocibus vim, causae referrentur comprehensam te mea. Ei duo fastidii complectitur, duo legendos euripidis no. Ea habeo invidunt vel. Et omnis probatus senserit eos, accumsan adipisci eum ut. Eu vel mandamus definitiones, usu no probo tempor, vel ad ignota imperdiet reprimique.`

    const config = {
        elemType: 'polygon',
        elemAttributes: {
            id: 'polygon',
            points: "299.7,0 599.4,217.7 484.9,570 114.5,570 0,217.7 ",
            fill: "#FFFCD7",
            stroke: "black",
            strokeWidth: "4px"
        },
        options: {
            style: {
                fontSize: '40px'
            }
        }
    };

    beforeEach(async () => {
        await page.setViewport({ width: 1400, height: 1500 })
        await page.goto('file://' + __dirname + '/index.html');
        await page.addScriptTag({ path: __dirname.replace('integration', '') + '/test-build/index.js' });
        //await page.screenshot({ path: __dirname + '/screenshots/screenshot.png' });

    });

    afterAll(() => {
        logs.forEach((log) => log())
    })

    test('Test has access to SVGTextInShape in the global context', async () => {
        const fnType = await page.evaluate(() => {
            return typeof SVGTextInShape
        })

        expect(fnType).toBe('function')
    })

    test('Test can insert elements to the puppeteer page', async () => {
        const result = await page.evaluate(() => {

            const text = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit.`

            const config = {
                elemType: 'polygon',
                elemAttributes: {
                    id: 'polygon',
                    points: "299.7,0 599.4,217.7 484.9,570 114.5,570 0,217.7 ",
                    fill: "#FFFCD7",
                    stroke: "black",
                    strokeWidth: "4px"
                },
                options: {
                    style: {
                        fontSize: '40px'
                    }
                }
            };
            const svg = document.querySelector('svg');
            const elem = document.createElementNS('http://www.w3.org/2000/svg', config.elemType);
            Object.entries(config.elemAttributes).forEach(([key, value]) => {
                elem.setAttribute(key, value)
            });

            svg.appendChild(elem);

            return elem.tagName;
        })
        expect(result).toBe('polygon')
    })

    test('SVGTextInShape executes and appends an svg text group containg tspan elements', async () => {

        const result = await page.evaluate(() => {

            const text = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit.`

            const config = {
                elemType: 'polygon',
                elemAttributes: {
                    id: 'polygon',
                    points: "299.7,0 599.4,217.7 484.9,570 114.5,570 0,217.7 ",
                    fill: "#FFFCD7",
                    stroke: "black",
                    strokeWidth: "4px"
                },
                options: {
                    style: {
                        fontSize: '40px'
                    }
                }
            };
            const svg = document.querySelector('svg');
            const elem = document.createElementNS('http://www.w3.org/2000/svg', config.elemType);
            Object.entries(config.elemAttributes).forEach(([key, value]) => {
                elem.setAttribute(key, value)
            });

            svg.appendChild(elem);

            SVGTextInShape(text, elem, config.options);
            const textGrp = document.getElementById('text-in-polygon');

            return [textGrp.tagName, Array.from(textGrp.children).map((e) => e.tagName)];
        })

        await page.screenshot({ path: __dirname + '/screenshots/text-correctly-inserted.png' });

        expect(result[0]).toBe('text');
        result[1].forEach((tagName) => {
            expect(tagName).toBe('tspan')
        })
    })

    test('Text overun, lastLine textContent is appended with ...', async () => {

        const result = await page.evaluate((text, config) => {

            const svg = document.querySelector('svg');
            const elem = document.createElementNS('http://www.w3.org/2000/svg', config.elemType);
            Object.entries(config.elemAttributes).forEach(([key, value]) => {
                elem.setAttribute(key, value)
            });

            svg.appendChild(elem);

            SVGTextInShape(text, elem, config.options);
            const textGrp = document.getElementById('text-in-' + config.elemAttributes.id);

            return Array.from(textGrp.children).pop().textContent;
        }, text, config)

        await page.screenshot({ path: __dirname + '/screenshots/text-overun.png' });

        expect(result.slice(-3)).toBe('...');

    });

    test('Alignment, should correctly display left aligned text --> visually confirm', async () => {

        await page.evaluate((text, config) => {

            const options = {
                ...config.options,
                align: 'left',
                style: {
                    ...config.options.style
                }
            }


            const svg = document.querySelector('svg');
            const elem = document.createElementNS('http://www.w3.org/2000/svg', config.elemType);
            Object.entries(config.elemAttributes).forEach(([key, value]) => {
                elem.setAttribute(key, value)
            });

            svg.appendChild(elem);

            SVGTextInShape(text, elem, options);
            const textGrp = document.getElementById('text-in-' + config.elemAttributes.id);

            return Array.from(textGrp.children).pop().textContent;
        }, text, config)

        await page.screenshot({ path: __dirname + '/screenshots/left-aligned.png' });
        logs.push(() => console.log('\x1b[33m%s\x1b[0m', '!! MANUALLY CONFIM !! screenshot --> left-aligned.png'))


    })

    test('Alignment, should correctly display center aligned text --> visually confirm', async () => {

        await page.evaluate((text, config) => {

            const options = {
                ...config.options,
                align: 'center',
                style: {
                    ...config.options.style
                }
            }

            const svg = document.querySelector('svg');
            const elem = document.createElementNS('http://www.w3.org/2000/svg', config.elemType);
            Object.entries(config.elemAttributes).forEach(([key, value]) => {
                elem.setAttribute(key, value)
            });

            svg.appendChild(elem);

            SVGTextInShape(text, elem, options);
            const textGrp = document.getElementById('text-in-' + config.elemAttributes.id);

            return Array.from(textGrp.children).pop().textContent;
        }, text, config)

        await page.screenshot({ path: __dirname + '/screenshots/center-aligned.png' });
        logs.push(() => console.log('\x1b[33m%s\x1b[0m', '!! MANUALLY CONFIM !! screenshot --> center-aligned.png'))


    })

    test('Alignment, should correctly display right aligned text --> visually confirm', async () => {

        await page.evaluate((text, config) => {

            const options = {
                ...config.options,
                align: 'right',
                style: {
                    ...config.options.style
                }
            }

            const svg = document.querySelector('svg');
            const elem = document.createElementNS('http://www.w3.org/2000/svg', config.elemType);
            Object.entries(config.elemAttributes).forEach(([key, value]) => {
                elem.setAttribute(key, value)
            });

            svg.appendChild(elem);

            SVGTextInShape(text, elem, options);
            const textGrp = document.getElementById('text-in-' + config.elemAttributes.id);

            return Array.from(textGrp.children).pop().textContent;
        }, text, config)

        await page.screenshot({ path: __dirname + '/screenshots/right-aligned.png' });
        logs.push(() => console.log('\x1b[33m%s\x1b[0m', '!! MANUALLY CONFIM !! screenshot --> right-aligned.png'))


    })


})

