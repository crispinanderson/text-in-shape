import { SVGTextInShape } from '../../src';

const text = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit. 
Ad novum nostro eum, mei no option voluptaria. 
Senserit referrentur ullamcorper et sed, per semper timeam feugait id. 
In mea alia meliore, wisi justo his ne. Te essent eripuit appellantur eos. In intellegebat deterruisset vis, at albucius intellegebat sea, ad usu erat impedit. 
At homero soleat vocibus vim, causae referrentur comprehensam te mea. Ei duo fastidii complectitur, duo legendos euripidis no. Ea habeo invidunt vel. Et omnis probatus senserit eos, accumsan adipisci eum ut. Eu vel mandamus definitiones, usu no probo tempor, vel ad ignota imperdiet reprimique.`

const ids = ['polygon', 'circle', 'rect'];

ids.forEach((id) => {
    const elem = document.getElementById(id)

    SVGTextInShape(text, elem, {
        align: 'center',
        /* paddingTop: 0,
        paddingLeft: 10,
        paddingRight: 50, */
        justifyText: false,
        style: {
            fontSize: '40px'
        }
    })
})

