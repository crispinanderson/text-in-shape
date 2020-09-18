


describe('JustifyText - ', () => {
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

    test('text is spread across the enitre line width', async () => {

        const testPadding = async (p) => await page.evaluate((text, config, p) => {

            const options = {
                ...config.options,
                align: 'left',
                justifyText: true,
                style: {
                    ...config.options.style
                }
            }

            const elemAttributes = {
                ...config.elemAttributes,
                id: 'rect',
                x: 0,
                y: 0,
                height: 500,
                width: 500
            }

            const svg = document.querySelector('svg');
            const elem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            Object.entries(elemAttributes).forEach(([key, value]) => {
                elem.setAttribute(key, value)
            });

            svg.appendChild(elem);

            SVGTextInShape(text, elem, options);

            const textGrp = document.getElementById('text-in-' + elemAttributes.id);

            return Array.from(textGrp.children).map(e => {
                const bbox = e.getBBox();
                const { x, y, width } = bbox;
                return { x, y, width };
            });

        }, text, config, p)

        const result = await testPadding(50);
        await page.screenshot({ path: __dirname + '/screenshots/justified-text.png' });
        result.forEach((item) => {
            expect(item.width).toBeGreaterThanOrEqual(480)
        })

    })



})

