(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("deck"), require("deck"));
	else if(typeof define === 'function' && define.amd)
		define([, ], factory);
	else if(typeof exports === 'object')
		exports["CustomLayerLibrary"] = factory(require("deck"), require("deck"));
	else
		root["CustomLayerLibrary"] = factory(root["deck"], root["deck"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__deck_gl_core__, __WEBPACK_EXTERNAL_MODULE__deck_gl_layers__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo-composite-layer.js":
/*!*********************************!*\
  !*** ./demo-composite-layer.js ***!
  \*********************************/
/*! exports provided: DemoCompositeLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DemoCompositeLayer\", function() { return DemoCompositeLayer; });\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ \"@deck.gl/core\");\n/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/layers */ \"@deck.gl/layers\");\n/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deck_gl_layers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass DemoCompositeLayer extends _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__[\"CompositeLayer\"] {\n  renderLayers() {\n    return new _deck_gl_layers__WEBPACK_IMPORTED_MODULE_1__[\"ScatterplotLayer\"](this.props);\n  }\n}\n\n\n//# sourceURL=webpack://CustomLayerLibrary/./demo-composite-layer.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: DemoCompositeLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo_composite_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-composite-layer */ \"./demo-composite-layer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DemoCompositeLayer\", function() { return _demo_composite_layer__WEBPACK_IMPORTED_MODULE_0__[\"DemoCompositeLayer\"]; });\n\n\n\n\n// Need to make the new \nwindow.customLayerLibrary = {\n  DemoCompositeLayer: _demo_composite_layer__WEBPACK_IMPORTED_MODULE_0__[\"DemoCompositeLayer\"]\n};\n\n\n//# sourceURL=webpack://CustomLayerLibrary/./index.js?");

/***/ }),

/***/ "@deck.gl/core":
/*!*********************************************************************!*\
  !*** external {"root":"deck","commonjs":"deck","commonjs2":"deck"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deck_gl_core__;\n\n//# sourceURL=webpack://CustomLayerLibrary/external_%7B%22root%22:%22deck%22,%22commonjs%22:%22deck%22,%22commonjs2%22:%22deck%22%7D?");

/***/ }),

/***/ "@deck.gl/layers":
/*!*********************************************************************!*\
  !*** external {"commonjs":"deck","commonjs2":"deck","root":"deck"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deck_gl_layers__;\n\n//# sourceURL=webpack://CustomLayerLibrary/external_%7B%22commonjs%22:%22deck%22,%22commonjs2%22:%22deck%22,%22root%22:%22deck%22%7D?");

/***/ })

/******/ });
});