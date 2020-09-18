# svg-text-in-shape
A simple tool that wraps text inside an svg shape

##### Use when you:

* Need to wrap text inside a complex shape.
* You can supply a basic SVG shape for the text wrapper
* You do not need overfloy scrolling text

##### Supported shapes

* Rectangle 
* Polygon
* Circle

### Usage
```
npm install text-in-shape
```

#### Basic usage
```Javascript
import wrap from 'text-in-shape';

const elem = document.getElementById('my-svg-shape');

wrap(text, elem, {
        align: 'center',
        padding: 20,
        style: {
            fontSize: '2em'
        }
    })

```

#### Example
```HTML

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>text-in-shape - simple tool to wrap text in a shape</title>
</head>

<body>
    <div id="root">
        <svg id="svg_master" viewBox="0 0 1400 1500">
            <polygon id="polygon" fill="#FFFCD7" stroke="black" stroke-width="4px" points="299.7,0 599.4,217.7 484.9,570 114.5,570 0,217.7 " />

            <rect id="rect" x="50" y="700" width="600" height="600" fill="#FFFCD7" stroke="black" stroke-width="4px" />

            <circle id="circle" cx="1000" cy="320" r="300" fill="#FFFCD7" stroke="black" stroke-width="4px" />

        </svg>


    </div>
    <script src="./build/index.js"></script>
</body>

</html>

```

```Javascript
import { textInShape } from 'text-in-shape';

const text = `Lorem ipsum dolor sit amet, nec ut dolorum hendrerit. 
Ad novum nostro eum, mei no option voluptaria. 
Senserit referrentur ullamcorper et sed, per semper timeam feugait id. 
In mea alia meliore, wisi justo his ne. Te essent eripuit appellantur eos. In intellegebat deterruisset vis, at albucius intellegebat sea, ad usu erat impedit. 
At homero soleat vocibus vim, causae referrentur comprehensam te mea. Ei duo fastidii complectitur, duo legendos euripidis no. Ea habeo invidunt vel. Et omnis probatus senserit eos, accumsan adipisci eum ut. Eu vel mandamus definitiones, usu no probo tempor, vel ad ignota imperdiet reprimique.`

const ids = ['polygon', 'circle', 'rect'];

ids.forEach((id) => {
    const elem = document.getElementById(id)

    textInShape(text, elem, {
        align: 'center',
        paddingBottom: 10,
        style: {
            fontSize: '40px'
        }
    })
})


```

![example image](https://github.com/crispinanderson/text-in-shape/blob/dev/example_render.png)


#### API

arguments: (
    text: String, 
    elem: SVGRectElement || SVGCircleElement || SVGPolygonElement, 
    options: object
    ) 

options:

| Property      | Type     | Accepted Values                  | Default  | Description                                                |
| ------------- | -------- | --------------                   | -------- | ---------------------------------------------------        |
| align         | String   | 'left', 'right', 'center'        | 'center' | Align the text to a given side or centrally                |
| padding       | Number   | float or integer                 | 0        | Provides an inner padding                                  |
| paddingTop    | Number   | float or integer                 | 0        |                                                            |
| paddingBottom | Number   | float or integer                 | 0        |                                                            |
| paddingLeft   | Number   | float or integer                 | 0        |                                                            |
| paddingRight  | Number   | float or integer                 | 0        |                                                            |
| justifyText   | Boolean  | -                                | false    | Stretches text to fit the line width using letter-spacing  |
| style         | Object   | css key value pairs (camelCased) | {}       | Apply standard css styling to the rendered text elements   |



