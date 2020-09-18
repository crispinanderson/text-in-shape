


describe('svg-text-in-shape - ', () => {
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

