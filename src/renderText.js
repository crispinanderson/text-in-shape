import { applyStyle } from "./utils";

export const renderText = (svgElement, renderData, options) => {


    const bbox = svgElement.getBBox();
    const parent = svgElement.parentNode;
    const margin = {
        y: +window.getComputedStyle(document.body).marginTop.replace('px', ''),
        x: +window.getComputedStyle(document.body).marginLeft.replace('px', '')
    }

    const textGrp = document.createElementNS("http://www.w3.org/2000/svg", "text");
    applyStyle(textGrp, options.style)

    const svgGrp = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgGrp.style.transform = `matrix(1, 0, 0, 1, ${bbox.x}, ${bbox.y} )`;
    svgGrp.appendChild(textGrp);

    renderData.forEach((lineData) => {
        const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        tspan.setAttribute('x', lineData.x);
        tspan.setAttribute('y', lineData.y + lineData.height);
        tspan.textContent = lineData.textContent;

        if (lineData.style) {
            Object.entries(lineData.style).forEach(([key, value]) => {
                tspan.style[key] = value
            })
        }

        textGrp.appendChild(tspan)
    })

    parent.appendChild(svgGrp)
}

export const renderGuides = (svgElement, renderData, options) => {


    const bbox = svgElement.getBBox();
    const parent = svgElement.parentNode;
    const margin = {
        y: +window.getComputedStyle(document.body).marginTop.replace('px', ''),
        x: +window.getComputedStyle(document.body).marginLeft.replace('px', '')
    }

    const svgGrp = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgGrp.style.transform = `matrix(1, 0, 0, 1, ${bbox.x}, ${bbox.y} )`;

    renderData.forEach((lineData) => {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute('x', lineData.x);
        rect.setAttribute('y', lineData.y);
        rect.setAttribute('height', lineData.height);
        rect.setAttribute('width', lineData.width);
        rect.setAttribute('fill', 'grey');
        rect.setAttribute('opacity', 0.5);

        svgGrp.appendChild(rect)
    })

    parent.appendChild(svgGrp)
}

