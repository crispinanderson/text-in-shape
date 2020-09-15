import { addTextContentToLineData } from '../../src/addTextContentToLineData';
import { calcLineAlignment } from '../../src/calcLineAlignment';
import { mockLineData, circleMockData, polygonMockData, rectMockData, charWidths } from '../utils/mocks'

describe('calcLineAlignment - ', () => {
    //LineHieght and charWidth are set to reflect rect/circle and polygonMockData --> you can use custom values if only using mockLineData()
    const lineHeight = 46;
    const longText = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit. 
Ad novum nostro eum, mei no option voluptaria. 
Senserit referrentur ullamcorper et sed, per semper timeam feugait id. 
In mea alia meliore, wisi justo his ne. Te essent eripuit appellantur eos. In intellegebat deterruisset vis, at albucius intellegebat sea, ad usu erat impedit. 
At homero soleat vocibus vim, causae referrentur comprehensam te mea. Ei duo fastidii complectitur, duo legendos euripidis no. Ea habeo invidunt vel. Et omnis probatus senserit eos, accumsan adipisci eum ut. Eu vel mandamus definitiones, usu no probo tempor, vel ad ignota imperdiet reprimique.`;

    test('Left alignment - all entries have x value of 0', () => {
        let lineData = mockLineData({ lineHeight });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidths });
        const alignedData = calcLineAlignment({ align: 'left' }, dataWithText)
        alignedData.forEach((lineData) => {
            expect(lineData.x).toBe(0);
        })
    });

    test('Right alignment - all entries have x value equal to their width', () => {
        let lineData = mockLineData({ lineHeight });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidths });
        const alignedData = calcLineAlignment({ align: 'right' }, dataWithText);
        alignedData.forEach((lineData) => {
            expect(lineData.x + lineData.textWidth).toBe(lineData.width);
        })
    });

    test('Center alignment - all entries have a x value  + textWidth / 2 equal to lineData width / 2', () => {
        let lineData = mockLineData({ lineHeight });
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidths });
        const alignedData = calcLineAlignment({ align: 'center' }, dataWithText);
        alignedData.forEach((lineData) => {
            expect(lineData.x + lineData.textWidth / 2).toBe(lineData.width / 2);
        })
    });


    test('circleMockData - Right alignment: all entries have x value equal to their width', () => {
        let lineData = circleMockData();
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidths });
        const alignedData = calcLineAlignment({ align: 'right' }, dataWithText);
        alignedData.forEach((lineData, i) => {
            expect(lineData.x + lineData.textWidth).toBe(dataWithText[i].x + lineData.width);
        })
    });

    test('circleMockData - Center alignment: all entries have a x value  + (textWidth / 2) equal to original data.x  + (data.width / 2)', () => {
        let lineData = circleMockData();
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidths });
        const alignedData = calcLineAlignment({ align: 'center' }, dataWithText);

        alignedData.forEach((lineData, i) => {
            expect(lineData.x + lineData.textWidth).toBeLessThan(dataWithText[i].x + lineData.width);
            expect(lineData.x + (lineData.textWidth / 2)).toBe((dataWithText[i].x + (dataWithText[i].width) / 2));
        })

    });

    test('polygonMockData - Right alignment: all entries have x value equal to their width', () => {
        let lineData = polygonMockData();
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidths });
        const alignedData = calcLineAlignment({ align: 'right' }, dataWithText);
        alignedData.forEach((lineData, i) => {
            expect(lineData.x + lineData.textWidth).toBe(dataWithText[i].x + lineData.width);
        })
    });

    test('polygonMockData - Center alignment: all entries have a x value  + (textWidth / 2) equal to original data.x  + (data.width / 2)', () => {
        let lineData = polygonMockData();
        const text = longText;
        const dataWithText = addTextContentToLineData({ text, lineData, charWidths });
        const alignedData = calcLineAlignment({ align: 'center' }, dataWithText);

        alignedData.forEach((lineData, i) => {
            expect(lineData.x + lineData.textWidth).toBeLessThan(dataWithText[i].x + lineData.width);
            expect(lineData.x + (lineData.textWidth / 2)).toBe((dataWithText[i].x + (dataWithText[i].width) / 2));
        })

    });




})