import { addTextContentToLineData } from '../../src/addTextContentToLineData';
import { calcLineAlignment } from '../../src/calcLineAlignment';

describe('calcLineAlignment - ', () => {
    const lineHeight = 55;
    const charWidth = 18;
    const longText = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit. 
Ad novum nostro eum, mei no option voluptaria. 
Senserit referrentur ullamcorper et sed, per semper timeam feugait id. 
In mea alia meliore, wisi justo his ne. Te essent eripuit appellantur eos. In intellegebat deterruisset vis, at albucius intellegebat sea, ad usu erat impedit. 
At homero soleat vocibus vim, causae referrentur comprehensam te mea. Ei duo fastidii complectitur, duo legendos euripidis no. Ea habeo invidunt vel. Et omnis probatus senserit eos, accumsan adipisci eum ut. Eu vel mandamus definitiones, usu no probo tempor, vel ad ignota imperdiet reprimique.`;

    test('Left alignment - all entries have x value of 0', () => {
        const arr = Array(100).fill({ y: 0, x: 0, width: 500, height: lineHeight });
        const lineData = arr.map((l, i) => { return { ...l, y: i > 0 ? arr[i - 1].y + lineHeight : 0 } });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        const alignedData = calcLineAlignment({ align: 'left' }, dataWithText)
        alignedData.forEach((lineData) => {
            expect(lineData.x).toBe(0);
        })
    });

    test('Right alignment - all entries have x value equal to their width', () => {
        const arr = Array(100).fill({ y: 0, x: 0, width: 500, height: lineHeight });
        const lineData = arr.map((l, i) => { return { ...l, y: i > 0 ? arr[i - 1].y + lineHeight : 0 } });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        const alignedData = calcLineAlignment({ align: 'right' }, dataWithText);
        alignedData.forEach((lineData) => {
            expect(lineData.x + lineData.textWidth).toBe(lineData.width);
        })
    });

    test('Right alignment - all entries have x value equal to their width', () => {
        const arr = Array(100).fill({ y: 0, x: 0, width: 500, height: lineHeight });
        const lineData = arr.map((l, i) => { return { ...l, y: i > 0 ? arr[i - 1].y + lineHeight : 0 } });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        const alignedData = calcLineAlignment({ align: 'center' }, dataWithText);
        alignedData.forEach((lineData) => {
            expect(lineData.x + lineData.textWidth / 2).toBe(lineData.width / 2);
        })
    });


})