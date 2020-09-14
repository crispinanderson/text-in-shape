import { addTextContentToLineData } from '../../src/addTextContentToLineData';


describe('addTextContentToLineData - ', () => {
    const lineHeight = 55;
    const charWidth = 18;
    const longText = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit. 
Ad novum nostro eum, mei no option voluptaria. 
Senserit referrentur ullamcorper et sed, per semper timeam feugait id. 
In mea alia meliore, wisi justo his ne. Te essent eripuit appellantur eos. In intellegebat deterruisset vis, at albucius intellegebat sea, ad usu erat impedit. 
At homero soleat vocibus vim, causae referrentur comprehensam te mea. Ei duo fastidii complectitur, duo legendos euripidis no. Ea habeo invidunt vel. Et omnis probatus senserit eos, accumsan adipisci eum ut. Eu vel mandamus definitiones, usu no probo tempor, vel ad ignota imperdiet reprimique.`;

    test('An array of lineData is returned', () => {
        const arr = Array(100).fill({ y: 0, x: 0, width: 500, height: lineHeight });
        const lineData = arr.map((l, i) => { return { ...l, y: i > 0 ? arr[i - 1].y + lineHeight : 0 } });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        expect(dataWithText.length > 0).toBe(true);
    })

    test('Every entry has a textContent and a textWidth property <= 500', () => {
        const arr = Array(100).fill({ y: 0, x: 0, width: 500, height: lineHeight });
        const lineData = arr.map((l, i) => { return { ...l, y: i > 0 ? arr[i - 1].y + lineHeight : 0 } });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        dataWithText.forEach((lineData) => {
            expect(lineData.textContent.length > 0).toBe(true);
            expect(lineData.textWidth <= 500).toBe(true)
        })
    })

    test('The last line is appended with ... when the text does not fit within the shape', () => {
        const arr = Array(20).fill({ y: 0, x: 0, width: 500, height: lineHeight });
        const lineData = arr.map((l, i) => { return { ...l, y: i > 0 ? arr[i - 1].y + lineHeight : 0 } });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        expect(dataWithText.pop().textContent.includes('...')).toBe(true);
    })

    test('An empty array is returned when an empty string is passed', () => {
        const arr = Array(20).fill({ y: 0, x: 0, width: 500, height: lineHeight });
        const lineData = arr.map((l, i) => { return { ...l, y: i > 0 ? arr[i - 1].y + lineHeight : 0 } });
        const text = '';
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        expect(dataWithText.length).toBe(0);
    })


})