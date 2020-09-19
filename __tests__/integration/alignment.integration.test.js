


describe('Alignment - ', () => {
    const logs = [];
    const text = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit. 
    Ad novum nostro eum, mei no option voluptaria. 
    Senserit referrentur ullamcorper et sed, per semper timeam feugait id. 
    In mea alia meliore, wisi justo his ne. Te essent eripuit appellantur eos. In intellegebat deterruisset vis, at albucius intellegebat sea, ad usu erat impedit. 
    At homero soleat vocibus vim, causae referrentur comprehensam te mea. Ei duo fastidii complectitur, duo legendos euripidis no. Ea habeo invidunt vel. Et omnis probatus senserit eos, accumsan adipisci eum ut. Eu vel mandamus definitiones, usu no probo tempor, vel ad ignota imperdiet reprimique.`

    const config = {
        elemType: 'rect',
        elemAttributes: {
            id: 'rect',
            x: 0,
            y: 0,
            height: 500,
            width: 500,
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

    test('Left', async () => {

        const result = await page.evaluate((text, config) => {

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

            textInShape(text, elem, options);
            const textGrp = document.getElementById('text-in-' + config.elemAttributes.id);

            return Array.from(textGrp.children).map(e => {
                const bbox = e.getBBox();
                const { x, y, width } = bbox;
                return { x, y, width };
            });

        }, text, config)

        await page.screenshot({ path: __dirname + '/screenshots/left-aligned.png' });
        result.forEach((item) => {
            expect(item.x).toBeLessThan(3);
        })

    })

    test('Right', async () => {

        const result = await page.evaluate((text, config) => {

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

            textInShape(text, elem, options);
            const textGrp = document.getElementById('text-in-' + config.elemAttributes.id);

            return Array.from(textGrp.children).map(e => {
                const bbox = e.getBBox();
                const { x, y, width } = bbox;
                return { x, y, width };
            });

        }, text, config)

        await page.screenshot({ path: __dirname + '/screenshots/right-aligned.png' });
        result.forEach((item) => {
            expect(item.x + item.width).toBeGreaterThanOrEqual(498);
        })


    })

    test('Center', async () => {

        const result = await page.evaluate((text, config) => {

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

            textInShape(text, elem, options);
            const textGrp = document.getElementById('text-in-' + config.elemAttributes.id);

            return Array.from(textGrp.children).map(e => {
                const bbox = e.getBBox();
                const { x, y, width } = bbox;
                return { x, y, width };
            });

        }, text, config)

        await page.screenshot({ path: __dirname + '/screenshots/center-aligned.png' });
        result.forEach((item) => {
            expect(item.x + (item.width / 2)).toBeGreaterThanOrEqual(248);
            expect(item.x + (item.width / 2)).toBeLessThanOrEqual(252);
        })


    })

})

