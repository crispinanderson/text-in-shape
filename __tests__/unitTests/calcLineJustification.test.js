import { addTextContentToLineData } from '../../src/addTextContentToLineData';
import { calcTextJustification } from '../../src/calcTextJustification';
import { mockLineData } from '../utils/mockLineData';

describe('calcTextJustification - ', () => {
    const lineHeight = 55;
    const charWidth = 18;
    const longText = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit. 
Ad novum nostro eum, mei no option voluptaria. 
Senserit referrentur ullamcorper et sed, per semper timeam feugait id. 
In mea alia meliore, wisi justo his ne. Te essent eripuit appellantur eos. In intellegebat deterruisset vis, at albucius intellegebat sea, ad usu erat impedit. 
At homero soleat vocibus vim, causae referrentur comprehensam te mea. Ei duo fastidii complectitur, duo legendos euripidis no. Ea habeo invidunt vel. Et omnis probatus senserit eos, accumsan adipisci eum ut. Eu vel mandamus definitiones, usu no probo tempor, vel ad ignota imperdiet reprimique.`;

    test('Justify text - each element is appended with a style.letterSpacing with a valid px value', () => {
        let lineData = mockLineData({ lineHeight });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        const justifiedText = calcTextJustification({ justifyText: true }, dataWithText);
        justifiedText.forEach((line) => {
            expect(line.style.letterSpacing.slice(-2)).toBe('px');
        })
    });

    test('Justify text - each element is appended with a style.letterSpacing is equal to (line width - textWidth) / textContent.length', () => {
        let lineData = mockLineData({ lineHeight });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidth });
        const justifiedText = calcTextJustification({ justifyText: true }, dataWithText);
        justifiedText.forEach((line) => {
            expect(Number(line.style.letterSpacing.replace('px', ''))).toBe((line.width - line.textWidth) / line.textContent.length);
        })
    });


})