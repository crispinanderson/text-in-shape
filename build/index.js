module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SVGElementToCanvas.js":
/*!***********************************!*\
  !*** ./src/SVGElementToCanvas.js ***!
  \***********************************/
/*! exports provided: newCanvas, destroyCanvas, drawPolygon, drawRect, drawCircle, SVGElementToCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newCanvas\", function() { return newCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroyCanvas\", function() { return destroyCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPolygon\", function() { return drawPolygon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawRect\", function() { return drawRect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawCircle\", function() { return drawCircle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SVGElementToCanvas\", function() { return SVGElementToCanvas; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar newCanvas = function newCanvas(SVGElement) {\n  var canvas = document.createElement('canvas');\n  var svgMaster = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getSVGMasterLayer\"])(SVGElement);\n  canvas.width = svgMaster.getBBox().width;\n  canvas.height = svgMaster.getBBox().height;\n  var foreignObject = document.createElementNS(\"http://www.w3.org/2000/svg\", \"foreignObject\");\n  foreignObject.id = 'temp_canvas';\n  foreignObject.style.width = svgMaster.getBBox().width;\n  foreignObject.style.height = svgMaster.getBBox().height;\n  foreignObject.appendChild(canvas);\n  svgMaster.appendChild(foreignObject);\n  return canvas.getContext('2d');\n};\nvar destroyCanvas = function destroyCanvas() {\n  document.getElementById('temp_canvas').remove();\n};\n/* const drawPath = (SVGElement, context) => {\n    const d = SVGElement.getAttribute(\"d\").trim(' ');\n    const path = new Path2D(d);\n    context.closePath(path);\n    context.fillStyle = \"#FF0000\";\n    context.fill(path);\n\n    return { context, path };\n} */\n\nvar drawPolygon = function drawPolygon(SVGElement, context) {\n  //Get the polygon points attribute and split to an array\n  var p = SVGElement.getAttribute(\"points\").trim(' ').split(\" \").map(function (point) {\n    return point.trim(' ');\n  });\n  var pos; //Loop through each point pair [x, y]\n\n  for (var i = 0; i < p.length; i++) {\n    //Split x and y values\n    pos = p[i].split(\",\").map(function (p) {\n      return +p;\n    });\n\n    if (pos[0] !== NaN) {\n      if (i === 0) {\n        context.beginPath();\n        context.moveTo(pos[0], pos[1]);\n      } else {\n        context.lineTo(pos[0], pos[1]);\n      }\n    } else {\n      throw 'Something went wrong when converting Polygon received ' + pos[0] + ', ' + pos[1];\n    }\n  }\n\n  context.closePath();\n  context.fillStyle = \"#FF0000\";\n  context.fill();\n  return context;\n};\nvar drawRect = function drawRect(SVGElement, context) {\n  var bbox = SVGElement.getBBox();\n  var x = +bbox.x;\n  var y = +bbox.y;\n  var h = +bbox.height;\n  var w = +bbox.width;\n  context.rect(x, y, w, h);\n  context.fillStyle = \"#FF0000\";\n  context.fill();\n  return context;\n};\nvar drawCircle = function drawCircle(SVGElement, context) {\n  var x = +SVGElement.getAttribute(\"cx\");\n  var y = +SVGElement.getAttribute(\"cy\");\n  var r = +SVGElement.getAttribute(\"r\");\n  context.arc(x, y, r, 0, 2 * Math.PI);\n  context.fillStyle = \"#FF0000\";\n  context.fill();\n  return context;\n};\nvar SVGElementToCanvas = function SVGElementToCanvas(SVGElement) {\n  var context = newCanvas(SVGElement);\n\n  switch (SVGElement.tagName) {\n    /* case 'path':\n        return drawPath(SVGElement, context); */\n    case 'polygon':\n      return drawPolygon(SVGElement, context);\n\n    case 'rect':\n      return drawRect(SVGElement, context);\n\n    case 'circle':\n      return drawCircle(SVGElement, context);\n\n    default:\n      throw 'svg-text-in-shape only supports SVG circle, rect & polygon';\n  }\n};\n\n//# sourceURL=webpack:///./src/SVGElementToCanvas.js?");

/***/ }),

/***/ "./src/calcLineAlignment.js":
/*!**********************************!*\
  !*** ./src/calcLineAlignment.js ***!
  \**********************************/
/*! exports provided: calcLineAlignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcLineAlignment\", function() { return calcLineAlignment; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar calcLineAlignment = function calcLineAlignment(options, lineData) {\n  switch (options.align) {\n    case 'center':\n      return _objectSpread(_objectSpread({}, lineData), {}, {\n        x: lineData.x + (lineData.width - lineData.textWidth) / 2\n      });\n\n    case 'right':\n      return _objectSpread(_objectSpread({}, lineData), {}, {\n        x: lineData.x + lineData.width - lineData.textWidth\n      });\n\n    default:\n      return lineData;\n  }\n};\n\n//# sourceURL=webpack:///./src/calcLineAlignment.js?");

/***/ }),

/***/ "./src/calcLineJustification.js":
/*!**************************************!*\
  !*** ./src/calcLineJustification.js ***!
  \**************************************/
/*! exports provided: calcLineJustification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcLineJustification\", function() { return calcLineJustification; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar calcLineJustification = function calcLineJustification(options, lineData) {\n  if (options.justifyText) {\n    return _objectSpread(_objectSpread({}, lineData), {}, {\n      style: {\n        letterSpacing: (lineData.width - lineData.textWidth) / lineData.textContent.length + 'px'\n      }\n    });\n  }\n\n  return lineData;\n};\n\n//# sourceURL=webpack:///./src/calcLineJustification.js?");

/***/ }),

/***/ "./src/calcTextData.js":
/*!*****************************!*\
  !*** ./src/calcTextData.js ***!
  \*****************************/
/*! exports provided: calcTextData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcTextData\", function() { return calcTextData; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar calcTextData = function calcTextData(text, SVGElement, context, options, path) {\n  var items = [];\n  var bbox = SVGElement.getBBox(); //creates a 2d array of lines -> words\n\n  var paragraphs = text.split('\\n').map(function (str) {\n    return str.trim(' ');\n  }).map(function (txt) {\n    return txt.split(' ');\n  });\n  var svg = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getSVGMasterLayer\"])(SVGElement);\n  var tempText = document.createElementNS(\"http://www.w3.org/2000/svg\", \"text\");\n  svg.appendChild(tempText); //Apply any styling for correct sizing\n\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"applyStyle\"])(tempText, options.style); //Set textContent to get lineHeight and remove\n\n  tempText.textContent = 'Test';\n  var lineHeight = tempText.getBBox().height;\n  var charWidth = tempText.getBBox().width / tempText.textContent.length;\n  tempText.textContent = '';\n  tempText.remove();\n  var padding = {\n    top: options.paddingTop || options.padding,\n    left: options.paddingLeft || options.padding,\n    bottom: options.paddingBottom || options.padding,\n    right: options.paddingRight || options.padding\n  };\n  var yOffset = padding.top;\n\n  for (var i = 0; i < paragraphs.length; i++) {\n    var lineData = void 0;\n    var paragraph = paragraphs[i];\n    var tempTextStore = ''; //Ensure the first paragraph/line can display the entire first word\n\n    if (i === 0) {\n      tempTextStore += ' ' + paragraph[0];\n      var minWidth = tempTextStore.length * charWidth;\n      tempTextStore = '';\n      lineData = calcLineData(context, lineHeight, bbox, yOffset, padding, minWidth, path);\n    } else {\n      //Do not pass a minChars length for subsequent paragraphs \n      lineData = calcLineData(context, lineHeight, bbox, yOffset, padding, null, path);\n    }\n\n    if (lineData.y <= bbox.height - padding.bottom) {\n      for (var j = 0; j < paragraph.length; j++) {\n        if (lineData.y <= bbox.height - padding.bottom) {\n          var word = paragraph[j]; //Add a space before each word except a sentence first\n\n          if (j !== 0) {\n            tempTextStore += ' ';\n          }\n\n          tempTextStore += word; //If the paragraph will overrun the shape, split to a new line\n\n          if (tempTextStore.length * charWidth > lineData.width) {\n            tempTextStore = tempTextStore.replace(' ' + word, ''); //Store the line data\n\n            items.push(_objectSpread(_objectSpread({}, lineData), {}, {\n              textWidth: tempTextStore.length * charWidth,\n              textContent: tempTextStore\n            })); //create a new line\n\n            tempTextStore = word; //j < paragraph.length - 1 ? word + ' ' : word;\n\n            yOffset = lineData.y;\n            lineData = _objectSpread({}, calcLineData(context, lineHeight, bbox, yOffset, padding));\n          } //Else the end of the paragraph is reached\n          else if (j === paragraph.length - 1) {\n              //Store the line data\n              items.push(_objectSpread(_objectSpread({}, lineData), {}, {\n                textWidth: tempTextStore.length * charWidth,\n                textContent: tempTextStore\n              })); //increase the lineOffset & reset the tempTextStore\n\n              yOffset = lineData.y;\n              tempTextStore = '';\n            }\n        } else {\n          break;\n        }\n      }\n    } else {\n      var _ret = function () {\n        var addContPunctuation = function addContPunctuation(data) {\n          var edited = _objectSpread({}, data); //Add the punctuation\n\n\n          var puncTextStore = !edited.textContent.includes('...') ? edited.textContent += '...' : edited.textContent;\n\n          if (puncTextStore.length * charWidth > edited.width) {\n            edited.textContent = edited.textContent.trim().replace(/\\w([^\\w+]*)$/, '');\n            edited.textContent = edited.textContent.trim().replace(/\\s(\\w+)$/, '...');\n            edited.textWidth = puncTextStore.length * charWidth;\n            return addContPunctuation(edited);\n          }\n\n          return edited;\n        };\n\n        //If the whole text does not fit in the shape the append '...' to the end\n        var lastLine = items[items.length - 1];\n        items[items.length - 1] = addContPunctuation(lastLine);\n        return \"break\";\n      }();\n\n      if (_ret === \"break\") break;\n    }\n  }\n\n  return items;\n}; //Calculates the x, y position and width of each line from a given yOffset position\n//Relies on context.isPointInPath to calculate\n\nvar calcLineData = function calcLineData(context, lineHeight, bbox, yOffset, padding) {\n  var minWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;\n  var xOffset = 0,\n      wOffset = 0;\n  var inPath = {\n    topRight: false,\n    topLeft: false,\n    bottomRight: false,\n    bottomLeft: false\n  };\n\n  if (yOffset + lineHeight <= bbox.height) {\n    while ((!inPath.topLeft || !inPath.bottomLeft) && xOffset <= bbox.width) {\n      if (context.isPointInPath(bbox.x + xOffset, bbox.y + yOffset)) inPath.topLeft = true;\n      if (context.isPointInPath(bbox.x + xOffset, bbox.y + yOffset + lineHeight)) inPath.bottomLeft = true;\n      xOffset += 1;\n    }\n\n    while ((!inPath.topRight || !inPath.bottomRight) && wOffset >= 0 - bbox.width) {\n      if (context.isPointInPath(bbox.x + bbox.width + wOffset, bbox.y + yOffset)) inPath.topRight = true;\n      if (context.isPointInPath(bbox.x + bbox.width + wOffset, bbox.y + yOffset + lineHeight)) inPath.bottomRight = true;\n      wOffset -= 1;\n    }\n\n    var nextLineOffset = yOffset;\n    var lineData = {\n      x: xOffset + padding.left,\n      y: yOffset + lineHeight,\n      width: bbox.width + wOffset - xOffset - padding.right,\n      height: lineHeight,\n      minWidth: minWidth\n    }; //Calculate if the lineData satisfies minWidth and all corner points can be calculated\n    //If all points are calculated\n\n    if (inPath.topLeft && inPath.topRight && inPath.bottomRight && inPath.bottomLeft) {\n      //If a minWidth is passed and the line is above this value \n      //then the yOffset does not increment and we return the calculated lineData\n      if (lineData.width >= minWidth) {\n        return lineData;\n      } else {\n        //Else increment the yOffset by 1px and re-calculate\n        nextLineOffset += 1;\n        return calcLineData(context, lineHeight, bbox, nextLineOffset, padding, minWidth, path);\n      }\n    } //Else If all points could not be calculated, increment by 1px and retry\n    else if (!inPath.topLeft || !inPath.topRight || !inPath.bottomRight || !inPath.bottomLeft) {\n        nextLineOffset += 1;\n        return calcLineData(context, lineHeight, bbox, nextLineOffset, padding, minWidth, path);\n      }\n  }\n\n  return {};\n};\n\n//# sourceURL=webpack:///./src/calcTextData.js?");

/***/ }),

/***/ "./src/createRenderData.js":
/*!*********************************!*\
  !*** ./src/createRenderData.js ***!
  \*********************************/
/*! exports provided: createRenderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRenderData\", function() { return createRenderData; });\n/* harmony import */ var _SVGElementToCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGElementToCanvas */ \"./src/SVGElementToCanvas.js\");\n/* harmony import */ var _calcTextData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcTextData */ \"./src/calcTextData.js\");\n/* harmony import */ var _calcLineAlignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calcLineAlignment */ \"./src/calcLineAlignment.js\");\n/* harmony import */ var _calcLineJustification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcLineJustification */ \"./src/calcLineJustification.js\");\n\n\n\n\nvar createRenderData = function createRenderData(text, SVGElement, options) {\n  var context = Object(_SVGElementToCanvas__WEBPACK_IMPORTED_MODULE_0__[\"SVGElementToCanvas\"])(SVGElement);\n  var textData = Object(_calcTextData__WEBPACK_IMPORTED_MODULE_1__[\"calcTextData\"])(text, SVGElement, context, options, path);\n  var alignedTextData = textData.map(function (lineData) {\n    return Object(_calcLineAlignment__WEBPACK_IMPORTED_MODULE_2__[\"calcLineAlignment\"])(options, lineData);\n  });\n  var justifiedText = options.lineJustify ? alignedTextData.map(function (lineData) {\n    return Object(_calcLineJustification__WEBPACK_IMPORTED_MODULE_3__[\"calcLineJustification\"])(options, lineData);\n  }) : alignedTextData;\n  Object(_SVGElementToCanvas__WEBPACK_IMPORTED_MODULE_0__[\"destroyCanvas\"])();\n  return justifiedText;\n};\n\n//# sourceURL=webpack:///./src/createRenderData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: SVGTextInShape, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SVGTextInShape\", function() { return SVGTextInShape; });\n/* harmony import */ var _renderText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderText */ \"./src/renderText.js\");\n/* harmony import */ var _createRenderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRenderData */ \"./src/createRenderData.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar defaultOptions = {\n  padding: 0,\n  justify: 'top',\n  align: 'center',\n  lineJustify: false,\n  style: {}\n};\nvar SVGTextInShape = function SVGTextInShape(text, SVGElement) {\n  var userOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var options = _objectSpread(_objectSpread({}, defaultOptions), userOptions);\n\n  var renderData = Object(_createRenderData__WEBPACK_IMPORTED_MODULE_1__[\"createRenderData\"])(text, SVGElement, options);\n  Object(_renderText__WEBPACK_IMPORTED_MODULE_0__[\"renderText\"])(SVGElement, renderData, options);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SVGTextInShape);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderText.js":
/*!***************************!*\
  !*** ./src/renderText.js ***!
  \***************************/
/*! exports provided: renderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderText\", function() { return renderText; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar renderText = function renderText(SVGElement, renderData, options) {\n  var bbox = SVGElement.getBBox();\n  var parent = SVGElement.parentNode;\n  var margin = {\n    y: +window.getComputedStyle(document.body).marginTop.replace('px', ''),\n    x: +window.getComputedStyle(document.body).marginLeft.replace('px', '')\n  };\n  var textGrp = document.createElementNS(\"http://www.w3.org/2000/svg\", \"text\");\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"applyStyle\"])(textGrp, options.style);\n  var svgGrp = document.createElementNS(\"http://www.w3.org/2000/svg\", \"g\");\n  svgGrp.style.transform = \"matrix(1, 0, 0, 1, \".concat(bbox.x - margin.x, \", \").concat(bbox.y - margin.y, \" )\");\n  svgGrp.appendChild(textGrp);\n  renderData.forEach(function (lineData) {\n    var tspan = document.createElementNS(\"http://www.w3.org/2000/svg\", \"tspan\");\n    tspan.setAttribute('x', lineData.x);\n    tspan.setAttribute('y', lineData.y);\n    tspan.textContent = lineData.textContent;\n\n    if (lineData.style) {\n      Object.entries(lineData.style).forEach(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            key = _ref2[0],\n            value = _ref2[1];\n\n        tspan.style[key] = value;\n      });\n    }\n\n    textGrp.appendChild(tspan);\n  });\n  parent.appendChild(svgGrp);\n};\n\n//# sourceURL=webpack:///./src/renderText.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getSVGMasterLayer, applyStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSVGMasterLayer\", function() { return getSVGMasterLayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyStyle\", function() { return applyStyle; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar getSVGMasterLayer = function getSVGMasterLayer(SVGElement) {\n  return Array.from(document.querySelectorAll('svg')).filter(function (elem) {\n    return elem.innerHTML.includes(\"id=\\\"\".concat(SVGElement.id, \"\\\"\"));\n  })[0];\n};\nvar applyStyle = function applyStyle(elem, style) {\n  Object.entries(style).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    elem.style[key] = value;\n  });\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });