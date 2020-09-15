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

/***/ "./src/addTextContentToLineData/addTextContentToLineData.js":
/*!******************************************************************!*\
  !*** ./src/addTextContentToLineData/addTextContentToLineData.js ***!
  \******************************************************************/
/*! exports provided: addTextContentToLineData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTextContentToLineData\", function() { return addTextContentToLineData; });\n/* harmony import */ var _appendContPuncuation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendContPuncuation */ \"./src/addTextContentToLineData/appendContPuncuation.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar addTextContentToLineData = function addTextContentToLineData(_ref) {\n  var text = _ref.text,\n      lineData = _ref.lineData,\n      charWidth = _ref.charWidth;\n  var paragraphs = text.length ? text.split('\\n').map(function (str) {\n    return str.trim(' ');\n  }).map(function (txt) {\n    return txt.split(' ');\n  }) : [];\n  var p = 0;\n  var w = 0; //Map a text content & textWidth to each line and filter out unused line data\n\n  return lineData.map(function (thisLine, lineIndex) {\n    var textContent = '';\n\n    if (p < paragraphs.length) {\n      var words = paragraphs[p];\n\n      while (w < words.length) {\n        var word = words[w]; //Add a space before each word except a line first word\n\n        textContent += textContent.length > 0 ? ' ' + word : word; //If the tempText is longer than thisLine width\n\n        if (textContent.length * charWidth > thisLine.width) {\n          //remove the last word addded\n          textContent = textContent.replace(' ' + word, ''); //When on the last line if all text does not fit then append with '...' punctuation\n\n          if (lineIndex === lineData.length - 1) {\n            return Object(_appendContPuncuation__WEBPACK_IMPORTED_MODULE_0__[\"appendContPuncuation\"])(_objectSpread(_objectSpread({}, thisLine), {}, {\n              textContent: textContent,\n              textWidth: textContent.length * charWidth\n            }));\n          }\n\n          return _objectSpread(_objectSpread({}, thisLine), {}, {\n            textContent: textContent,\n            textWidth: textContent.length * charWidth\n          });\n        } //If all the words have been added to the textContent - move to next paragraph\n\n\n        if (w === words.length - 1) {\n          //Reset word index and inc to next paragraph\n          w = 0;\n          p++; //Add the tempTextContent to the lineData\n\n          return _objectSpread(_objectSpread({}, thisLine), {}, {\n            textContent: textContent,\n            textWidth: textContent.length * charWidth\n          });\n        } //Select the next word\n\n\n        w++;\n      }\n    } //Default return w empty textContent\n\n\n    return null;\n  }).filter(function (data) {\n    return data !== null;\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (addTextContentToLineData);\n\n//# sourceURL=webpack:///./src/addTextContentToLineData/addTextContentToLineData.js?");

/***/ }),

/***/ "./src/addTextContentToLineData/appendContPuncuation.js":
/*!**************************************************************!*\
  !*** ./src/addTextContentToLineData/appendContPuncuation.js ***!
  \**************************************************************/
/*! exports provided: appendContPuncuation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendContPuncuation\", function() { return appendContPuncuation; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar appendContPuncuation = function appendContPuncuation(lineData) {\n  var appended = _objectSpread({}, lineData);\n\n  var charWidth = appended.textWidth / appended.textContent.length; //Add the punctuation\n\n  var puncuatedText = !appended.textContent.includes('...') ? appended.textContent += '...' : appended.textContent; //If the length would overrun the container with the punction added, remove the last word\n\n  if (puncuatedText.length * charWidth > appended.width) {\n    appended.textContent = appended.textContent.trim().replace(/\\w([^\\w+]*)$/, '');\n    appended.textContent = appended.textContent.trim().replace(/\\s(\\w+)$/, '...');\n    appended.textWidth = appended.textContent.length * charWidth; //Recursively test theat the line does not overrun - remove words as neccesary\n\n    return appendContPuncuation(appended);\n  }\n\n  return appended;\n};\n\n//# sourceURL=webpack:///./src/addTextContentToLineData/appendContPuncuation.js?");

/***/ }),

/***/ "./src/addTextContentToLineData/index.js":
/*!***********************************************!*\
  !*** ./src/addTextContentToLineData/index.js ***!
  \***********************************************/
/*! exports provided: addTextContentToLineData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addTextContentToLineData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTextContentToLineData */ \"./src/addTextContentToLineData/addTextContentToLineData.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addTextContentToLineData\", function() { return _addTextContentToLineData__WEBPACK_IMPORTED_MODULE_0__[\"addTextContentToLineData\"]; });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_addTextContentToLineData__WEBPACK_IMPORTED_MODULE_0__[\"addTextContentToLineData\"]);\n\n//# sourceURL=webpack:///./src/addTextContentToLineData/index.js?");

/***/ }),

/***/ "./src/calcLineAlignment.js":
/*!**********************************!*\
  !*** ./src/calcLineAlignment.js ***!
  \**********************************/
/*! exports provided: calcLineAlignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcLineAlignment\", function() { return calcLineAlignment; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar calcLineAlignment = function calcLineAlignment(options, lineData) {\n  switch (options.align) {\n    case 'center':\n      return lineData.map(function (thisLine) {\n        return _objectSpread(_objectSpread({}, thisLine), {}, {\n          x: thisLine.x + (thisLine.width - thisLine.textWidth) / 2\n        });\n      });\n\n    case 'right':\n      return lineData.map(function (thisLine) {\n        return _objectSpread(_objectSpread({}, thisLine), {}, {\n          x: thisLine.x + thisLine.width - thisLine.textWidth\n        });\n      });\n\n    default:\n      return lineData;\n  }\n};\n\n//# sourceURL=webpack:///./src/calcLineAlignment.js?");

/***/ }),

/***/ "./src/calcLinePositions/calcInPathPoints.js":
/*!***************************************************!*\
  !*** ./src/calcLinePositions/calcInPathPoints.js ***!
  \***************************************************/
/*! exports provided: calcInPathPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcInPathPoints\", function() { return calcInPathPoints; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//Calculates the x, y position and width of each line from a given yOffset position\n//Relies on context.isPointInPath to calculate - must be calcualted in the DOM - SORRY!\nvar calcInPathPoints = function calcInPathPoints(args) {\n  var context = args.context,\n      lineHeight = args.lineHeight,\n      bbox = args.bbox,\n      yOffset = args.yOffset,\n      padding = args.padding,\n      minWidth = args.minWidth;\n  var xOffset = 0,\n      wOffset = 0;\n  var inPath = {\n    topRight: false,\n    topLeft: false,\n    bottomRight: false,\n    bottomLeft: false\n  };\n\n  if (yOffset + lineHeight <= bbox.height) {\n    while ((!inPath.topLeft || !inPath.bottomLeft) && xOffset <= bbox.width) {\n      if (context.isPointInPath(bbox.x + xOffset, bbox.y + yOffset)) inPath.topLeft = true;\n      if (context.isPointInPath(bbox.x + xOffset, bbox.y + yOffset + lineHeight)) inPath.bottomLeft = true;\n      xOffset += 1;\n    }\n\n    while ((!inPath.topRight || !inPath.bottomRight) && wOffset >= 0 - bbox.width) {\n      if (context.isPointInPath(bbox.x + bbox.width + wOffset, bbox.y + yOffset)) inPath.topRight = true;\n      if (context.isPointInPath(bbox.x + bbox.width + wOffset, bbox.y + yOffset + lineHeight)) inPath.bottomRight = true;\n      wOffset -= 1;\n    }\n\n    var lineData = {\n      x: xOffset + padding.left,\n      y: yOffset,\n      width: bbox.width + wOffset - xOffset - padding.right,\n      height: lineHeight\n    }; //Calculate if the lineData satisfies minWidth and all corner points can be calculated\n    //If all points are calculated\n\n    if (inPath.topLeft && inPath.topRight && inPath.bottomRight && inPath.bottomLeft) {\n      //If a minWidth is passed and the line is above this value \n      //then the yOffset does not increment and we return the calculated lineData\n      if (lineData.width >= minWidth) {\n        return lineData;\n      } else {\n        //Else increment the yOffset by 1px and re-calculate\n        return calcInPathPoints(_objectSpread(_objectSpread({}, args), {}, {\n          yOffset: yOffset + 1\n        }));\n      }\n    } //Else If all points could not be calculated, increment by 1px and retry\n    else if (!inPath.topLeft || !inPath.topRight || !inPath.bottomRight || !inPath.bottomLeft) {\n        return calcInPathPoints(_objectSpread(_objectSpread({}, args), {}, {\n          yOffset: yOffset + 1\n        }));\n      }\n  }\n};\n\n//# sourceURL=webpack:///./src/calcLinePositions/calcInPathPoints.js?");

/***/ }),

/***/ "./src/calcLinePositions/calcLinePositions.js":
/*!****************************************************!*\
  !*** ./src/calcLinePositions/calcLinePositions.js ***!
  \****************************************************/
/*! exports provided: calcLinePositions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcLinePositions\", function() { return calcLinePositions; });\n/* harmony import */ var _calcInPathPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcInPathPoints */ \"./src/calcLinePositions/calcInPathPoints.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar calcLinePositions = function calcLinePositions(args) {\n  var context = args.context,\n      svgElement = args.svgElement,\n      options = args.options,\n      text = args.text,\n      lineHeight = args.lineHeight,\n      charWidth = args.charWidth;\n  var bbox = svgElement.getBBox();\n  var safetyMargin = 5;\n  var padding = {\n    top: options.paddingTop || options.padding,\n    left: options.paddingLeft || options.padding || safetyMargin,\n    bottom: options.paddingBottom || options.padding,\n    right: options.paddingRight || options.padding || safetyMargin\n  };\n  var yOffset = padding.top || 0;\n  var firstWord = text.substr(0, text.match(/\\s/).index);\n  var minWidth = firstWord.length * charWidth || 0;\n  var linePositions = [];\n\n  while (yOffset + lineHeight <= bbox.height) {\n    var lineData = Object(_calcInPathPoints__WEBPACK_IMPORTED_MODULE_0__[\"calcInPathPoints\"])(_objectSpread(_objectSpread({}, args), {}, {\n      padding: padding,\n      bbox: bbox,\n      minWidth: minWidth,\n      lineHeight: lineHeight,\n      yOffset: yOffset\n    }));\n    yOffset = lineData.y + lineHeight;\n    linePositions.push(lineData);\n  }\n\n  return linePositions;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (calcLinePositions);\n\n//# sourceURL=webpack:///./src/calcLinePositions/calcLinePositions.js?");

/***/ }),

/***/ "./src/calcLinePositions/index.js":
/*!****************************************!*\
  !*** ./src/calcLinePositions/index.js ***!
  \****************************************/
/*! exports provided: calcLinePositions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calcLinePositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcLinePositions */ \"./src/calcLinePositions/calcLinePositions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"calcLinePositions\", function() { return _calcLinePositions__WEBPACK_IMPORTED_MODULE_0__[\"calcLinePositions\"]; });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_calcLinePositions__WEBPACK_IMPORTED_MODULE_0__[\"calcLinePositions\"]);\n\n//# sourceURL=webpack:///./src/calcLinePositions/index.js?");

/***/ }),

/***/ "./src/calcTextJustification.js":
/*!**************************************!*\
  !*** ./src/calcTextJustification.js ***!
  \**************************************/
/*! exports provided: calcTextJustification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calcTextJustification\", function() { return calcTextJustification; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar calcTextJustification = function calcTextJustification(options, lineData) {\n  if (options.justifyText) {\n    return lineData.map(function (thisLine) {\n      return _objectSpread(_objectSpread({}, thisLine), {}, {\n        style: {\n          letterSpacing: (thisLine.width - thisLine.textWidth) / thisLine.textContent.length + 'px'\n        }\n      });\n    });\n  }\n\n  return lineData;\n};\n\n//# sourceURL=webpack:///./src/calcTextJustification.js?");

/***/ }),

/***/ "./src/createRenderData.js":
/*!*********************************!*\
  !*** ./src/createRenderData.js ***!
  \*********************************/
/*! exports provided: createRenderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRenderData\", function() { return createRenderData; });\n/* harmony import */ var _svgElementToCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgElementToCanvas */ \"./src/svgElementToCanvas.js\");\n/* harmony import */ var _calcLineAlignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcLineAlignment */ \"./src/calcLineAlignment.js\");\n/* harmony import */ var _calcTextJustification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calcTextJustification */ \"./src/calcTextJustification.js\");\n/* harmony import */ var _getStyledFontDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getStyledFontDimensions */ \"./src/getStyledFontDimensions.js\");\n/* harmony import */ var _calcLinePositions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcLinePositions */ \"./src/calcLinePositions/index.js\");\n/* harmony import */ var _addTextContentToLineData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTextContentToLineData */ \"./src/addTextContentToLineData/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar createRenderData = function createRenderData(text, svgElement, options) {\n  var context = Object(_svgElementToCanvas__WEBPACK_IMPORTED_MODULE_0__[\"svgElementToCanvas\"])(svgElement);\n  var fontDims = Object(_getStyledFontDimensions__WEBPACK_IMPORTED_MODULE_3__[\"getStyledFontDimensions\"])(svgElement, options);\n  var lineData = Object(_calcLinePositions__WEBPACK_IMPORTED_MODULE_4__[\"calcLinePositions\"])(_objectSpread(_objectSpread({}, fontDims), {}, {\n    context: context,\n    svgElement: svgElement,\n    options: options,\n    text: text\n  }));\n  var lineDataWithText = Object(_addTextContentToLineData__WEBPACK_IMPORTED_MODULE_5__[\"addTextContentToLineData\"])(_objectSpread(_objectSpread({}, fontDims), {}, {\n    text: text,\n    lineData: lineData\n  }));\n  var lineDataAligned = Object(_calcLineAlignment__WEBPACK_IMPORTED_MODULE_1__[\"calcLineAlignment\"])(options, lineDataWithText);\n  var lineDataJustified = options.justifyText ? Object(_calcTextJustification__WEBPACK_IMPORTED_MODULE_2__[\"calcTextJustification\"])(lineDataAligned) : lineDataAligned;\n  Object(_svgElementToCanvas__WEBPACK_IMPORTED_MODULE_0__[\"destroyCanvas\"])();\n  return lineDataJustified;\n};\n\n//# sourceURL=webpack:///./src/createRenderData.js?");

/***/ }),

/***/ "./src/getStyledFontDimensions.js":
/*!****************************************!*\
  !*** ./src/getStyledFontDimensions.js ***!
  \****************************************/
/*! exports provided: getStyledFontDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStyledFontDimensions\", function() { return getStyledFontDimensions; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar getStyledFontDimensions = function getStyledFontDimensions(svgElement, options) {\n  var tempText = document.createElement(\"span\");\n  document.body.appendChild(tempText); //Apply any styling for correct sizing\n\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"applyStyle\"])(tempText, options.style); //Set textContent to get lineHeight and charachter width\n\n  tempText.textContent = 'Test';\n  var lineHeight = tempText.getBoundingClientRect().height;\n  var charWidth = tempText.getBoundingClientRect().width / tempText.textContent.length;\n  tempText.remove();\n  return {\n    lineHeight: lineHeight,\n    charWidth: charWidth\n  };\n};\n\n//# sourceURL=webpack:///./src/getStyledFontDimensions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: SVGTextInShape, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SVGTextInShape\", function() { return SVGTextInShape; });\n/* harmony import */ var _renderText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderText */ \"./src/renderText.js\");\n/* harmony import */ var _createRenderData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRenderData */ \"./src/createRenderData.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar defaultOptions = {\n  padding: 0,\n  justify: 'top',\n  align: 'center',\n  lineJustify: false,\n  style: {}\n};\nvar SVGTextInShape = function SVGTextInShape(text, svgElement) {\n  var userOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var options = _objectSpread(_objectSpread({}, defaultOptions), userOptions);\n\n  var renderData = Object(_createRenderData__WEBPACK_IMPORTED_MODULE_1__[\"createRenderData\"])(text, svgElement, options);\n  Object(_renderText__WEBPACK_IMPORTED_MODULE_0__[\"renderText\"])(svgElement, renderData, options);\n  /* renderGuides(svgElement, renderData, options); */\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SVGTextInShape);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderText.js":
/*!***************************!*\
  !*** ./src/renderText.js ***!
  \***************************/
/*! exports provided: renderText, renderGuides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderText\", function() { return renderText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderGuides\", function() { return renderGuides; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar renderText = function renderText(svgElement, renderData, options) {\n  var bbox = svgElement.getBBox();\n  var parent = svgElement.parentNode;\n  var margin = {\n    y: +window.getComputedStyle(document.body).marginTop.replace('px', ''),\n    x: +window.getComputedStyle(document.body).marginLeft.replace('px', '')\n  };\n  var textGrp = document.createElementNS(\"http://www.w3.org/2000/svg\", \"text\");\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"applyStyle\"])(textGrp, options.style);\n  var svgGrp = document.createElementNS(\"http://www.w3.org/2000/svg\", \"g\");\n  svgGrp.style.transform = \"matrix(1, 0, 0, 1, \".concat(bbox.x - margin.x, \", \").concat(bbox.y - margin.y, \" )\");\n  svgGrp.appendChild(textGrp);\n  renderData.forEach(function (lineData) {\n    var tspan = document.createElementNS(\"http://www.w3.org/2000/svg\", \"tspan\");\n    tspan.setAttribute('x', lineData.x);\n    tspan.setAttribute('y', lineData.y + lineData.height);\n    tspan.textContent = lineData.textContent;\n\n    if (lineData.style) {\n      Object.entries(lineData.style).forEach(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            key = _ref2[0],\n            value = _ref2[1];\n\n        tspan.style[key] = value;\n      });\n    }\n\n    textGrp.appendChild(tspan);\n  });\n  parent.appendChild(svgGrp);\n};\nvar renderGuides = function renderGuides(svgElement, renderData, options) {\n  var bbox = svgElement.getBBox();\n  var parent = svgElement.parentNode;\n  var margin = {\n    y: +window.getComputedStyle(document.body).marginTop.replace('px', ''),\n    x: +window.getComputedStyle(document.body).marginLeft.replace('px', '')\n  };\n  var svgGrp = document.createElementNS(\"http://www.w3.org/2000/svg\", \"g\");\n  svgGrp.style.transform = \"matrix(1, 0, 0, 1, \".concat(bbox.x - margin.x, \", \").concat(bbox.y - margin.y, \" )\");\n  renderData.forEach(function (lineData) {\n    var rect = document.createElementNS(\"http://www.w3.org/2000/svg\", \"rect\");\n    rect.setAttribute('x', lineData.x);\n    rect.setAttribute('y', lineData.y);\n    rect.setAttribute('height', lineData.height);\n    rect.setAttribute('width', lineData.width);\n    rect.setAttribute('fill', 'grey');\n    rect.setAttribute('opacity', 0.5);\n    svgGrp.appendChild(rect);\n  });\n  parent.appendChild(svgGrp);\n};\n\n//# sourceURL=webpack:///./src/renderText.js?");

/***/ }),

/***/ "./src/svgElementToCanvas.js":
/*!***********************************!*\
  !*** ./src/svgElementToCanvas.js ***!
  \***********************************/
/*! exports provided: newCanvas, destroyCanvas, drawPolygon, drawRect, drawCircle, svgElementToCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newCanvas\", function() { return newCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroyCanvas\", function() { return destroyCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPolygon\", function() { return drawPolygon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawRect\", function() { return drawRect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawCircle\", function() { return drawCircle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"svgElementToCanvas\", function() { return svgElementToCanvas; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar newCanvas = function newCanvas(svgElement) {\n  var canvas = document.createElement('canvas');\n  var svgMaster = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getSVGMasterLayer\"])(svgElement);\n  canvas.width = svgMaster.getBBox().width;\n  canvas.height = svgMaster.getBBox().height;\n  var foreignObject = document.createElementNS(\"http://www.w3.org/2000/svg\", \"foreignObject\");\n  foreignObject.id = 'temp_canvas';\n  foreignObject.style.width = svgMaster.getBBox().width;\n  foreignObject.style.height = svgMaster.getBBox().height;\n  foreignObject.appendChild(canvas);\n  svgMaster.appendChild(foreignObject);\n  return canvas.getContext('2d');\n};\nvar destroyCanvas = function destroyCanvas() {\n  document.getElementById('temp_canvas').remove();\n};\n/* const drawPath = (svgElement, context) => {\n    const d = svgElement.getAttribute(\"d\").trim(' ');\n    const path = new Path2D(d);\n    context.closePath(path);\n    context.fillStyle = \"#FF0000\";\n    context.fill(path);\n\n    return { context, path };\n} */\n\nvar drawPolygon = function drawPolygon(svgElement, context) {\n  //Get the polygon points attribute and split to an array\n  var p = svgElement.getAttribute(\"points\").trim(' ').split(\" \").map(function (point) {\n    return point.trim(' ');\n  });\n  var pos; //Loop through each point pair [x, y]\n\n  for (var i = 0; i < p.length; i++) {\n    //Split x and y values\n    pos = p[i].split(\",\").map(function (p) {\n      return +p;\n    });\n\n    if (pos[0] !== NaN) {\n      if (i === 0) {\n        context.beginPath();\n        context.moveTo(pos[0], pos[1]);\n      } else {\n        context.lineTo(pos[0], pos[1]);\n      }\n    } else {\n      throw 'Something went wrong when converting Polygon received ' + pos[0] + ', ' + pos[1];\n    }\n  }\n\n  context.closePath();\n  context.fillStyle = \"#FF0000\";\n  context.fill();\n  return context;\n};\nvar drawRect = function drawRect(svgElement, context) {\n  var bbox = svgElement.getBBox();\n  var x = +bbox.x;\n  var y = +bbox.y;\n  var h = +bbox.height;\n  var w = +bbox.width;\n  context.rect(x, y, w, h);\n  context.fillStyle = \"#FF0000\";\n  context.fill();\n  return context;\n};\nvar drawCircle = function drawCircle(svgElement, context) {\n  var x = +svgElement.getAttribute(\"cx\");\n  var y = +svgElement.getAttribute(\"cy\");\n  var r = +svgElement.getAttribute(\"r\");\n  context.arc(x, y, r, 0, 2 * Math.PI);\n  context.fillStyle = \"#FF0000\";\n  context.fill();\n  return context;\n};\nvar svgElementToCanvas = function svgElementToCanvas(svgElement) {\n  var context = newCanvas(svgElement);\n\n  switch (svgElement.tagName) {\n    /* case 'path':\n        return drawPath(svgElement, context); */\n    case 'polygon':\n      return drawPolygon(svgElement, context);\n\n    case 'rect':\n      return drawRect(svgElement, context);\n\n    case 'circle':\n      return drawCircle(svgElement, context);\n\n    default:\n      throw 'svg-text-in-shape only supports SVG circle, rect & polygon';\n  }\n};\n\n//# sourceURL=webpack:///./src/svgElementToCanvas.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getSVGMasterLayer, applyStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSVGMasterLayer\", function() { return getSVGMasterLayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyStyle\", function() { return applyStyle; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar getSVGMasterLayer = function getSVGMasterLayer(svgElement) {\n  return Array.from(document.querySelectorAll('svg')).filter(function (elem) {\n    return elem.innerHTML.includes(\"id=\\\"\".concat(svgElement.id, \"\\\"\"));\n  })[0];\n};\nvar applyStyle = function applyStyle(elem, style) {\n  Object.entries(style).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    elem.style[key] = value;\n  });\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });