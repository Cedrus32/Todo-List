/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/colors.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/colors.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#title {\n    background-color: #6A70BD;\n    color: white;\n}\n\n#sidebar {\n    background-color: #E9EAEC;\n}\n\n    .selected-view-preference {\n        background-color: hsl(220, 7%, 100%);\n    }\n\n.form-container {\n    background-color: white;\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    background-color: white;\n    filter: opacity(0.5);\n}\n\ninput,\nselect {\n    border: 1px solid black;\n}\n\ninput:invalid {\n    border: 1px solid red;\n}\n\n.required-badge,\n.error-message {\n    color: red;\n}\n\n.form-container {\n    border: 1px solid black;\n}\n\n    fieldset {\n        border: none;\n    }", "",{"version":3,"sources":["webpack://./src/styles/colors.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;IAEI;QACI,oCAAoC;IACxC;;AAEJ;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;IAEI;QACI,YAAY;IAChB","sourcesContent":["#title {\n    background-color: #6A70BD;\n    color: white;\n}\n\n#sidebar {\n    background-color: #E9EAEC;\n}\n\n    .selected-view-preference {\n        background-color: hsl(220, 7%, 100%);\n    }\n\n.form-container {\n    background-color: white;\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    background-color: white;\n    filter: opacity(0.5);\n}\n\ninput,\nselect {\n    border: 1px solid black;\n}\n\ninput:invalid {\n    border: 1px solid red;\n}\n\n.required-badge,\n.error-message {\n    color: red;\n}\n\n.form-container {\n    border: 1px solid black;\n}\n\n    fieldset {\n        border: none;\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/effects.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/effects.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* card hover */\n/* card hover */\n/* card hover */\n\n.card.singleton,\n.card.checklist {\n    border-radius: 0.5em;\n    position: relative;\n    width: 100%;\n}\n\n.card.singleton::after,\n.card.checklist::after {\n    content: '';\n    position: absolute;\n    bottom: 0px; left: 0px;\n    z-index: -1;\n\n    background-color: hsl(220, 7%, 96%);\n\n    width: 100%;\n    height: 0px;\n    border-radius: 0.5em;\n}\n\n.card.singleton:hover::after,\n.card.checklist:hover::after {\n    height: 100%;\n    transition: all 0.20s ease-out;\n}\n\n\n/* view preference hover */\n/* view preference hover */\n/* view preference hover */\n\n.view-prefs-container ul li {\n    border-radius: 0.5em;\n    position: relative;\n    width: 100%;\n}\n\n.view-prefs-container ul li::after {\n    content: '';\n    position: absolute;\n    bottom: 0px; left: 0px;\n    z-index: -1;\n\n    background-color: hsl(220, 7%, 100%);\n\n    width: 100%;\n    height: 0px;\n    border-radius: 0.5rem;\n}\n\n.view-prefs-container ul li:hover::after {\n    height: 100%;\n    transition: all 0.20s ease-out;\n}\n\n\n/* project icon selection */\n/* project icon selection */\n/* project icon selection */\n\n.project-icons-container img {\n    border-radius: 0.5em;\n\n    transition: background 0.20s ease-out;\n}\n\n.icon-selected,\n.project-icons-container img:hover {\n    background-color: hsl(236, 39%, 88%);\n}", "",{"version":3,"sources":["webpack://./src/styles/effects.css"],"names":[],"mappings":"AAAA,eAAe;AACf,eAAe;AACf,eAAe;;AAEf;;IAEI,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;AACf;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE,SAAS;IACtB,WAAW;;IAEX,mCAAmC;;IAEnC,WAAW;IACX,WAAW;IACX,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,8BAA8B;AAClC;;;AAGA,0BAA0B;AAC1B,0BAA0B;AAC1B,0BAA0B;;AAE1B;IACI,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE,SAAS;IACtB,WAAW;;IAEX,oCAAoC;;IAEpC,WAAW;IACX,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,8BAA8B;AAClC;;;AAGA,2BAA2B;AAC3B,2BAA2B;AAC3B,2BAA2B;;AAE3B;IACI,oBAAoB;;IAEpB,qCAAqC;AACzC;;AAEA;;IAEI,oCAAoC;AACxC","sourcesContent":["/* card hover */\n/* card hover */\n/* card hover */\n\n.card.singleton,\n.card.checklist {\n    border-radius: 0.5em;\n    position: relative;\n    width: 100%;\n}\n\n.card.singleton::after,\n.card.checklist::after {\n    content: '';\n    position: absolute;\n    bottom: 0px; left: 0px;\n    z-index: -1;\n\n    background-color: hsl(220, 7%, 96%);\n\n    width: 100%;\n    height: 0px;\n    border-radius: 0.5em;\n}\n\n.card.singleton:hover::after,\n.card.checklist:hover::after {\n    height: 100%;\n    transition: all 0.20s ease-out;\n}\n\n\n/* view preference hover */\n/* view preference hover */\n/* view preference hover */\n\n.view-prefs-container ul li {\n    border-radius: 0.5em;\n    position: relative;\n    width: 100%;\n}\n\n.view-prefs-container ul li::after {\n    content: '';\n    position: absolute;\n    bottom: 0px; left: 0px;\n    z-index: -1;\n\n    background-color: hsl(220, 7%, 100%);\n\n    width: 100%;\n    height: 0px;\n    border-radius: 0.5rem;\n}\n\n.view-prefs-container ul li:hover::after {\n    height: 100%;\n    transition: all 0.20s ease-out;\n}\n\n\n/* project icon selection */\n/* project icon selection */\n/* project icon selection */\n\n.project-icons-container img {\n    border-radius: 0.5em;\n\n    transition: background 0.20s ease-out;\n}\n\n.icon-selected,\n.project-icons-container img:hover {\n    background-color: hsl(236, 39%, 88%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0px; margin: 0px;\n\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    font-size: 100%;\n    font: inherit;\n\n    vertical-align: baseline;\n}\n\n\n/* SECTIONS ========================= */\n\n/* render `main` element consistently in IE */\n\nmain {\n    display: block;\n}\n\n/* standardize margins for `header` elements across broswers */\n\nh1, h2, h3, h4 {\n    margin: 0;\n}\n\n/* standardize margins for `p` elements across browsers */\n\np {\n    margin-top: 0;\n    margin-bottom: 0rem;\n}\n\n\n/* EMBEDDED CONTENT ========================= */\n\n/* remove border on images inside links in IE 10 */\n\nimg {\n    border-style: none;\n}\n\n\n/* FORMS ========================= */\n\n/* 1. change font styles in all browsers */\n/* 2. remove margin in Firefox and Safari */\n\nbutton,\ninput,\nselect {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/* show overflow in IE, Edge */\n\nbutton,\ninput {\n    overflow: visible;\n}\n\n/* remove inheritance of text transform in Edge, Firefox, IE */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/* correct the inability to style clickable types in iOS, Safari */\n\nbutton,\n[type=\"button\"] {\n    -webkit-appearance: button;\n}\n\n/* remove inner border, padding in Firefox */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/* restore focus styles unset by previous rule ^^ */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/* correct padding in Firefox */\n\nfieldset {\n    padding: 0;\n}\n  \n/* 1. correct text wrapping in Edge, IE */\n/* 2. correct color inheritance from `fieldset` elements in IE */\n/* 3. remove padding so devs aren't caught out when they zero-out */\n/*    `fieldset`elements in all browsers */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/* 1. add correct box sizing in IE 10 */\n/* 2. remove padding in IE 10 */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n\n/* INTERACTIVE ========================= */\n\n/* add correct display in IE 10 */\n\n[hidden] {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,qCAAqC;;AAErC;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,YAAY,EAAE,WAAW;;IAEzB,iBAAiB;IACjB,8BAA8B;IAC9B,0BAA0B;IAC1B,eAAe;IACf,aAAa;;IAEb,wBAAwB;AAC5B;;;AAGA,uCAAuC;;AAEvC,6CAA6C;;AAE7C;IACI,cAAc;AAClB;;AAEA,8DAA8D;;AAE9D;IACI,SAAS;AACb;;AAEA,yDAAyD;;AAEzD;IACI,aAAa;IACb,mBAAmB;AACvB;;;AAGA,+CAA+C;;AAE/C,kDAAkD;;AAElD;IACI,kBAAkB;AACtB;;;AAGA,oCAAoC;;AAEpC,0CAA0C;AAC1C,2CAA2C;;AAE3C;;;IAGI,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;AACrB;;AAEA,8BAA8B;;AAE9B;;IAEI,iBAAiB;AACrB;;AAEA,8DAA8D;;AAE9D;;IAEI,oBAAoB;AACxB;;AAEA,kEAAkE;;AAElE;;IAEI,0BAA0B;AAC9B;;AAEA,4CAA4C;;AAE5C;;IAEI,kBAAkB;IAClB,UAAU;AACd;;AAEA,mDAAmD;;AAEnD;;IAEI,8BAA8B;AAClC;;AAEA,+BAA+B;;AAE/B;IACI,UAAU;AACd;;AAEA,yCAAyC;AACzC,gEAAgE;AAChE,mEAAmE;AACnE,0CAA0C;;AAE1C;IACI,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;AAC/B;;AAEA,uCAAuC;AACvC,+BAA+B;;AAE/B;;IAEI,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;AACtB;;;AAGA,0CAA0C;;AAE1C,iCAAiC;;AAEjC;IACI,aAAa;AACjB","sourcesContent":["/* GLOBAL ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0px; margin: 0px;\n\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    font-size: 100%;\n    font: inherit;\n\n    vertical-align: baseline;\n}\n\n\n/* SECTIONS ========================= */\n\n/* render `main` element consistently in IE */\n\nmain {\n    display: block;\n}\n\n/* standardize margins for `header` elements across broswers */\n\nh1, h2, h3, h4 {\n    margin: 0;\n}\n\n/* standardize margins for `p` elements across browsers */\n\np {\n    margin-top: 0;\n    margin-bottom: 0rem;\n}\n\n\n/* EMBEDDED CONTENT ========================= */\n\n/* remove border on images inside links in IE 10 */\n\nimg {\n    border-style: none;\n}\n\n\n/* FORMS ========================= */\n\n/* 1. change font styles in all browsers */\n/* 2. remove margin in Firefox and Safari */\n\nbutton,\ninput,\nselect {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/* show overflow in IE, Edge */\n\nbutton,\ninput {\n    overflow: visible;\n}\n\n/* remove inheritance of text transform in Edge, Firefox, IE */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/* correct the inability to style clickable types in iOS, Safari */\n\nbutton,\n[type=\"button\"] {\n    -webkit-appearance: button;\n}\n\n/* remove inner border, padding in Firefox */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/* restore focus styles unset by previous rule ^^ */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/* correct padding in Firefox */\n\nfieldset {\n    padding: 0;\n}\n  \n/* 1. correct text wrapping in Edge, IE */\n/* 2. correct color inheritance from `fieldset` elements in IE */\n/* 3. remove padding so devs aren't caught out when they zero-out */\n/*    `fieldset`elements in all browsers */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/* 1. add correct box sizing in IE 10 */\n/* 2. remove padding in IE 10 */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n\n/* INTERACTIVE ========================= */\n\n/* add correct display in IE 10 */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/spacing.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/spacing.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --xtra-small-pad: calc(0.25 * var(--main-pad));\n    --xtra-small-gap: calc(0.25 * var(--main-gap));\n\n    --small-pad: calc(0.5 * var(--main-pad));\n    --small-gap: calc(0.5 * var(--main-gap));\n\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: calc(1.5 * var(--main-pad));\n\n    --lrg-gap: calc(2 * var(--main-gap))\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nimg {\n    height: 1.25em;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #sidebar,\n    #display {\n        padding: var(--main-pad);\n    }\n\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n\n#sidebar {\n    --y-offset: calc(calc(var(--main-pad) * 2) + 3.15em);\n    \n    position: absolute;\n    top: var(--y-offset); left: 0em;\n    z-index: 1;\n\n    height: calc(100vh - var(--y-offset));\n    width: 25vw;\n}\n\n    .view-prefs-container {\n        display: flex;\n        flex-flow: column;\n        gap: var(--lrg-gap);\n\n        padding-top: var(--lrg-gap);\n    }\n\n        #sidebar ul {\n            display: flex;\n            flex-flow: column;\n            gap: var(--main-gap);\n        }\n\n            #sidebar ul span {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            #sidebar li {\n                display: flex;\n                align-items: center;\n                gap: var(--xtra-small-gap);\n\n                padding: var(--xtra-small-pad);\n            }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    \n    width: 80%;\n    max-width: 450px;\n\n    padding: var(--main-pad);\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    position: absolute;\n    top: 0px; right: 0px;\n    z-index: 1;\n\n    height: 100vh; width: 100vw;\n}\n\n    form {\n        padding-bottom: var(--main-pad);\n    }\n\n            .input-label-group {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                margin-top: var(--small-pad);\n            }\n            \n                p {\n                    margin-top: var(--small-pad);\n                }\n            \n            .label-icons-group {\n                display: flex;\n                flex-flow: column;\n\n                margin-top: var(--main-pad);\n            }\n            \n                .project-icons-container {\n                    display: flex;\n                    flex-wrap: wrap;\n                    gap: var(--xtra-small-gap);\n\n                    margin-top: var(--small-pad);\n                }\n\n                    .project-icons-container img {\n                        height: 2rem;\n                    }\n\n            .dropdowns {\n                display: flex;\n            }\n\n                .dropdowns div {\n                    display: flex;\n                    flex-flow: column;\n\n                    width: 50%;\n                }\n\n    .form-buttons {\n        display: flex;\n        justify-content: center;\n        gap: var(--small-gap);\n    }\n\n        button,\n        input,\n        select {\n            padding: var(--xtra-small-pad);\n        }\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            gap: var(--main-gap);\n\n            z-index: 2;\n        }\n\n            header img {\n                height: 2em;\n            }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                padding: 1em;\n            }\n                \n                div.card,\n                .task-controls {\n                    padding: var(--main-pad);\n                }\n\n                .card.project {\n                    display: flex;\n                    flex-flow: column;\n                    align-items: center;\n                }\n\n                .card.sort-due {\n                    text-align: center;\n                }\n\n                    .card.project .header {\n                        display: grid;\n                        grid-template-columns: 1fr auto;\n                        grid-template-rows: auto;\n                        grid-template-areas: 'title       controls'\n                                             'description .';\n\n                        width: 100%;\n                    }\n\n                        .card.project .title {\n                            grid-area: title;\n                            text-align: center;\n                        }\n\n                        .project-controls {\n                            grid-area: controls;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                        .card.project .description {\n                            grid-area: description;\n                            text-align: center;\n                        }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    .singleton .header,\n                    .checklist .header {\n                        display: flex;\n                        gap: var(--xtra-small-gap);\n                    }\n\n                        .singleton .title,\n                        .checklist .title {\n                            margin-right: auto;\n                        }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--xtra-small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--xtra-small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--xtra-small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                            align-content: flex-start;\n                        }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--xtra-small-gap);\n                }\n\n                    .description-container {\n                        display: flex;\n                    }\n\n                        .card.checklist .description,\n                        .card.singleton .description {\n                            margin-right: auto;\n                        }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n\n                        .checklist-item-controls {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                        }\n", "",{"version":3,"sources":["webpack://./src/styles/spacing.css"],"names":[],"mappings":"AAAA,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;IACI,8CAA8C;IAC9C,8CAA8C;;IAE9C,wCAAwC;IACxC,wCAAwC;;IAExC,eAAe;IACf,eAAe;;IAEf,sCAAsC;;IAEtC;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;IAEI;QACI,YAAY;IAChB;;AAEJ;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;IAEI;;;QAGI,wBAAwB;IAC5B;;AAEJ,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;AAEhB;IACI,oDAAoD;;IAEpD,kBAAkB;IAClB,oBAAoB,EAAE,SAAS;IAC/B,UAAU;;IAEV,qCAAqC;IACrC,WAAW;AACf;;IAEI;QACI,aAAa;QACb,iBAAiB;QACjB,mBAAmB;;QAEnB,2BAA2B;IAC/B;;QAEI;YACI,aAAa;YACb,iBAAiB;YACjB,oBAAoB;QACxB;;YAEI;gBACI,aAAa;gBACb,8BAA8B;YAClC;;YAEA;gBACI,aAAa;gBACb,mBAAmB;gBACnB,0BAA0B;;gBAE1B,8BAA8B;YAClC;;AAEZ,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;IACI,kBAAkB;IAClB,QAAQ,EAAE,QAAQ;IAClB,gCAAgC;IAChC,UAAU;;IAEV,UAAU;IACV,gBAAgB;;IAEhB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,QAAQ,EAAE,UAAU;IACpB,UAAU;;IAEV,aAAa,EAAE,YAAY;AAC/B;;IAEI;QACI,+BAA+B;IACnC;;YAEQ;gBACI,aAAa;gBACb,iBAAiB;gBACjB,0BAA0B;;gBAE1B,4BAA4B;YAChC;;gBAEI;oBACI,4BAA4B;gBAChC;;YAEJ;gBACI,aAAa;gBACb,iBAAiB;;gBAEjB,2BAA2B;YAC/B;;gBAEI;oBACI,aAAa;oBACb,eAAe;oBACf,0BAA0B;;oBAE1B,4BAA4B;gBAChC;;oBAEI;wBACI,YAAY;oBAChB;;YAER;gBACI,aAAa;YACjB;;gBAEI;oBACI,aAAa;oBACb,iBAAiB;;oBAEjB,UAAU;gBACd;;IAEZ;QACI,aAAa;QACb,uBAAuB;QACvB,qBAAqB;IACzB;;QAEI;;;YAGI,8BAA8B;QAClC;;AAER,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;IAEZ;QACI,aAAa;QACb,8BAA8B;QAC9B,4BAA4B;QAC5B;8CACsC;;QAEtC,eAAe;QACf,WAAW;IACf;;AAEJ,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;;QAEX;YACI,iBAAiB;;YAEjB,aAAa;YACb,2BAA2B;YAC3B,mBAAmB;YACnB,oBAAoB;;YAEpB,UAAU;QACd;;YAEI;gBACI,WAAW;YACf;;AAEZ,oBAAoB;AACpB,oBAAoB;AACpB,oBAAoB;;QAEZ;YACI,kBAAkB;QACtB;;YAEI;gBACI,aAAa;gBACb,iBAAiB;gBACjB,0BAA0B;;gBAE1B,YAAY;YAChB;;gBAEI;;oBAEI,wBAAwB;gBAC5B;;gBAEA;oBACI,aAAa;oBACb,iBAAiB;oBACjB,mBAAmB;gBACvB;;gBAEA;oBACI,kBAAkB;gBACtB;;oBAEI;wBACI,aAAa;wBACb,+BAA+B;wBAC/B,wBAAwB;wBACxB;4DACoC;;wBAEpC,WAAW;oBACf;;wBAEI;4BACI,gBAAgB;4BAChB,kBAAkB;wBACtB;;wBAEA;4BACI,mBAAmB;4BACnB,aAAa;4BACb,mBAAmB;wBACvB;;wBAEA;4BACI,sBAAsB;4BACtB,kBAAkB;wBACtB;;gBAER;oBACI,aAAa;oBACb,2BAA2B;gBAC/B;;oBAEI;wBACI,kBAAkB;oBACtB;;gBAEJ;oBACI,aAAa;oBACb,uBAAuB;gBAC3B;;oBAEI;;wBAEI,aAAa;wBACb,0BAA0B;oBAC9B;;wBAEI;;4BAEI,kBAAkB;wBACtB;;oBAEJ;wBACI,mCAAmC;oBACvC;;oBAEA;wBACI,2CAA2C;oBAC/C;;oBAEA;wBACI,aAAa;wBACb,iBAAiB;wBACjB,0BAA0B;;wBAE1B,WAAW;oBACf;;wBAEI;4BACI,aAAa;4BACb,0BAA0B;4BAC1B,yBAAyB;wBAC7B;;gBAER;oBACI,aAAa;oBACb,iBAAiB;oBACjB,0BAA0B;gBAC9B;;oBAEI;wBACI,aAAa;oBACjB;;wBAEI;;4BAEI,kBAAkB;wBACtB;;oBAEJ;wBACI,aAAa;wBACb,mBAAmB;oBACvB;;wBAEI;4BACI,kBAAkB;wBACtB;;wBAEA;4BACI,aAAa;4BACb,0BAA0B;wBAC9B","sourcesContent":["/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --xtra-small-pad: calc(0.25 * var(--main-pad));\n    --xtra-small-gap: calc(0.25 * var(--main-gap));\n\n    --small-pad: calc(0.5 * var(--main-pad));\n    --small-gap: calc(0.5 * var(--main-gap));\n\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: calc(1.5 * var(--main-pad));\n\n    --lrg-gap: calc(2 * var(--main-gap))\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nimg {\n    height: 1.25em;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #sidebar,\n    #display {\n        padding: var(--main-pad);\n    }\n\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n\n#sidebar {\n    --y-offset: calc(calc(var(--main-pad) * 2) + 3.15em);\n    \n    position: absolute;\n    top: var(--y-offset); left: 0em;\n    z-index: 1;\n\n    height: calc(100vh - var(--y-offset));\n    width: 25vw;\n}\n\n    .view-prefs-container {\n        display: flex;\n        flex-flow: column;\n        gap: var(--lrg-gap);\n\n        padding-top: var(--lrg-gap);\n    }\n\n        #sidebar ul {\n            display: flex;\n            flex-flow: column;\n            gap: var(--main-gap);\n        }\n\n            #sidebar ul span {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            #sidebar li {\n                display: flex;\n                align-items: center;\n                gap: var(--xtra-small-gap);\n\n                padding: var(--xtra-small-pad);\n            }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    \n    width: 80%;\n    max-width: 450px;\n\n    padding: var(--main-pad);\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    position: absolute;\n    top: 0px; right: 0px;\n    z-index: 1;\n\n    height: 100vh; width: 100vw;\n}\n\n    form {\n        padding-bottom: var(--main-pad);\n    }\n\n            .input-label-group {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                margin-top: var(--small-pad);\n            }\n            \n                p {\n                    margin-top: var(--small-pad);\n                }\n            \n            .label-icons-group {\n                display: flex;\n                flex-flow: column;\n\n                margin-top: var(--main-pad);\n            }\n            \n                .project-icons-container {\n                    display: flex;\n                    flex-wrap: wrap;\n                    gap: var(--xtra-small-gap);\n\n                    margin-top: var(--small-pad);\n                }\n\n                    .project-icons-container img {\n                        height: 2rem;\n                    }\n\n            .dropdowns {\n                display: flex;\n            }\n\n                .dropdowns div {\n                    display: flex;\n                    flex-flow: column;\n\n                    width: 50%;\n                }\n\n    .form-buttons {\n        display: flex;\n        justify-content: center;\n        gap: var(--small-gap);\n    }\n\n        button,\n        input,\n        select {\n            padding: var(--xtra-small-pad);\n        }\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            gap: var(--main-gap);\n\n            z-index: 2;\n        }\n\n            header img {\n                height: 2em;\n            }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                padding: 1em;\n            }\n                \n                div.card,\n                .task-controls {\n                    padding: var(--main-pad);\n                }\n\n                .card.project {\n                    display: flex;\n                    flex-flow: column;\n                    align-items: center;\n                }\n\n                .card.sort-due {\n                    text-align: center;\n                }\n\n                    .card.project .header {\n                        display: grid;\n                        grid-template-columns: 1fr auto;\n                        grid-template-rows: auto;\n                        grid-template-areas: 'title       controls'\n                                             'description .';\n\n                        width: 100%;\n                    }\n\n                        .card.project .title {\n                            grid-area: title;\n                            text-align: center;\n                        }\n\n                        .project-controls {\n                            grid-area: controls;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                        .card.project .description {\n                            grid-area: description;\n                            text-align: center;\n                        }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    .singleton .header,\n                    .checklist .header {\n                        display: flex;\n                        gap: var(--xtra-small-gap);\n                    }\n\n                        .singleton .title,\n                        .checklist .title {\n                            margin-right: auto;\n                        }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--xtra-small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--xtra-small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--xtra-small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                            align-content: flex-start;\n                        }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--xtra-small-gap);\n                }\n\n                    .description-container {\n                        display: flex;\n                    }\n\n                        .card.checklist .description,\n                        .card.singleton .description {\n                            margin-right: auto;\n                        }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n\n                        .checklist-item-controls {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                        }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/typo.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/typo.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: 'Open Sans', sans-serif;\n}\n\nbody,\nh3, h4, p,\nbutton, input, select, legend,\n.view-prefs-container ul li, \n.card.project .description {\n    font-size: 0.85rem;\n}\n\nh1 {\n    font-size: 2rem;\n    font-weight: 300;\n}\n\nh2 {\n    font-size: 1.5rem;\n}\n\nlegend {\n    font-size: 1.25rem;\n}\n\n.tally,\n.tally span,\n.create,\n.view-prefs-container ul h4 {\n    font-size: 1rem;\n}\n\n.date,\n.card.checklist .description, \n.card.singleton .description {\n    font-size: 0.75rem;\n}\n\n.date, h1, h2, legend,\n.view-prefs-container ul span {\n    font-weight: bold;\n}\n\n.card h4 {\n    font-weight: 500;\n}\n\n.description {\n    font-style: italic;\n}\n\n.card.project {\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/typo.css"],"names":[],"mappings":"AAEA;IACI,oCAAoC;AACxC;;AAEA;;;;;IAKI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;;IAII,eAAe;AACnB;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');\n\nbody {\n    font-family: 'Open Sans', sans-serif;\n}\n\nbody,\nh3, h4, p,\nbutton, input, select, legend,\n.view-prefs-container ul li, \n.card.project .description {\n    font-size: 0.85rem;\n}\n\nh1 {\n    font-size: 2rem;\n    font-weight: 300;\n}\n\nh2 {\n    font-size: 1.5rem;\n}\n\nlegend {\n    font-size: 1.25rem;\n}\n\n.tally,\n.tally span,\n.create,\n.view-prefs-container ul h4 {\n    font-size: 1rem;\n}\n\n.date,\n.card.checklist .description, \n.card.singleton .description {\n    font-size: 0.75rem;\n}\n\n.date, h1, h2, legend,\n.view-prefs-container ul span {\n    font-weight: bold;\n}\n\n.card h4 {\n    font-weight: 500;\n}\n\n.description {\n    font-style: italic;\n}\n\n.card.project {\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/colors.css":
/*!*******************************!*\
  !*** ./src/styles/colors.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./colors.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/colors.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/effects.css":
/*!********************************!*\
  !*** ./src/styles/effects.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_effects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./effects.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/effects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_effects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_effects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_effects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_effects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/spacing.css":
/*!********************************!*\
  !*** ./src/styles/spacing.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_spacing_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./spacing.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/spacing.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_spacing_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_spacing_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_spacing_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_spacing_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/typo.css":
/*!*****************************!*\
  !*** ./src/styles/typo.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./typo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/typo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const events = (() => {
    let _events = {};

    // subscribe event to list
    function subscribe(eventName, callback) {
        if (!Array.isArray(_events[eventName])) {
            _events[eventName] = [];
        };
        _events[eventName].push(callback);
        // console.log(`SUBSCRIBING to ${eventName}`);
    }

    // unsubscribe event to list
    function unsubscribe(eventName) {
        console.log(eventName);
        console.log(_events[eventName].length - 1);
        _events[eventName].splice((_events[eventName].length - 1), 1);
    }

    // publish event with data
    function publish(eventName, ...data) {
        if (!Array.isArray(_events[eventName])){
            return;
        }
        _events[eventName].forEach(callback => {
            callback(...data);
            // console.log(`PUBLISHING to ${eventName}`);
        });
    }

    // debug
    function viewEvents() {
        console.log(_events);
    }

    return {
        subscribe,
        unsubscribe,
        publish,
        viewEvents,
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/scripts/default.js":
/*!********************************!*\
  !*** ./src/scripts/default.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events.js */ "./src/events.js");


// & initiates default state

const defaultState = (() => {
    // data
    let _sampleProjectValues = [['project', '', 'Unsorted', "This is your tasks' default location. Any tasks without a project live here.", '../src/icons/project-icons/00.svg'],
                               ];
    let _sampleTaskValues = [['task', '', 'singleton', 'Task 1', 'this is a sample task', '2001-01-01', 3, 0],
                             ['task', '', 'singleton', 'Task 2', 'this is #2', '2002-02-02', 2, 0],
                             ['task', '', 'checklist', 'Task 3', 'this is a checklist', '2003-03-03', 1, 0, ['item 1', 'item 2', 'item 3']],
                            ];

    // methods
    function init() {
        _createDefaultProject(_sampleProjectValues[0]);
        for (let t = 0; t < (_sampleTaskValues.length); t++) {
            _createDefaultTask(_sampleTaskValues[t]);
        };
    }
    function _createDefaultProject(projectValues) {
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('confirmInput', projectValues); // subscribed by library.js
    }
    function _createDefaultTask(taskValues) {
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('confirmInput', taskValues); // subscribed by library.js
    }

    return {
        init,   // used by index.js
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultState);

/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/scripts/elements.js");



// & manages display DOM <-> library communication
// & contains factories for generating display section DOM elements / groupings

const display = (() => {
    // data
    let _taskCounter = 0;

    // cache DOM
    let projectContainer = document.getElementById('project-container');
    let taskContainer = document.getElementById('task-container');
    let taskCountSpan = document.querySelector('h3.tally span');

    // * create task listener in _renderTaskCreateButton()
    // * modify & delete click listeners in _render...Header()
    // * create checklist item listener in _renderChecklistDescritionContainer()

    // display manager
    function _updateDisplay(instanceBundle) {
        let viewPreference = instanceBundle[0];
        let viewPreferenceHeaderCard;

        switch (viewPreference) {   // ! reduce repetition
            case 'project':
                for (let i = 1; i < (instanceBundle.length); i++) {
                    switch (i) {
                        case 1:
                            let projectInstance = instanceBundle[i];
                            _renderProject(projectInstance);
                            break;
                        default:
                            _renderTask(instanceBundle[i]);
                    };
                };
                break;
            default:
                _clearDisplay();
                viewPreferenceHeaderCard = _renderViewPreferenceHeaderCard(instanceBundle[0]);
                projectContainer.appendChild(viewPreferenceHeaderCard);
                for (let i = 1; i < (instanceBundle.length); i++) {
                    _renderTask(instanceBundle[i]);
                };
        };
    }
    function _updateItem(itemInstance) {
        let cardID;
        let card;

        switch(true) {
            case (itemInstance.type === 'project'):
                cardID = `project_${itemInstance.id}`;
                card = document.getElementById(cardID);

                let projectValues = [itemInstance.title, itemInstance.description]
                for (let i = 0; i < (projectValues.length); i++) {
                    switch(i) {
                        case 0:
                            let title = card.querySelector('.title');
                            title.textContent = projectValues[0];
                            break;
                        case 1:
                            let description = card.querySelector('.description');
                            description.textContent = projectValues[1];
                    };
                };
                break;
            case (itemInstance.type === 'singleton' || itemInstance.type === 'checklist'):
                cardID = `task_${itemInstance.id}`;
                card = document.getElementById(cardID);
    
                let taskValues = [itemInstance.title, itemInstance.description, itemInstance.dueDate, itemInstance.priority, itemInstance.projectID];
                for (let i = 0; i < (taskValues.length); i++) {
                    switch(i) {
                        case 0:
                            let title;
                            switch (itemInstance.type) {
                                case 'singleton':
                                    title = card.querySelector('.title h4');
                                    break;
                                case 'checklist':
                                    title = card.querySelector('.title');
                            };
                            title.textContent = taskValues[0];
                            break;
                        case 1:
                            let description = card.querySelector('.description');
                            description.textContent = taskValues[1];
                            break;
                        case 2:
                            let dueDate = card.querySelector('.date');
                            dueDate.textContent = taskValues[2];
                            break;
                        case 3:
                            console.log(taskValues[3]);
                            let priority = card.querySelector('.priority');
                            console.log(priority);
                            priority.src = `../src/icons/priority-${taskValues[3]}.svg`;
                            break;
                        case 4:
                            let currentProjectCardID = projectContainer.querySelector('.card').id;
                            let currentProjectReference = currentProjectCardID.split('_')[1];
                            if (taskValues[4] != currentProjectReference) {
                                _deleteTaskCard(cardID);
                            };
                    };
                };
                break;
            case (itemInstance[0] === 'checkbox'):  // itemInstance bundled manually in library.js
                let taskReference = itemInstance[1];
                let checkID = itemInstance[2];
                let labelContent = itemInstance[3];
    
                cardID = `task_${taskReference}__li_${checkID}`;
                card = document.getElementById(cardID);
    
                let checkLabel = card.querySelector('label');
                checkLabel.textContent = labelContent;
        };
    }

    // display helpers
    function _clearDisplay() {
        while (projectContainer.children.length > 0) {
            projectContainer.removeChild(projectContainer.lastChild);
        };
        while (taskContainer.children.length > 1) {
            taskContainer.removeChild(taskContainer.lastChild);
            _fillTaskCounter('-');
        };
        _removeTaskCreateButton();
    }
    function _deleteTaskCard(id) {
        let targetTask = document.getElementById(id);
        taskContainer.removeChild(targetTask)
        _fillTaskCounter('-');
    }
    function _deleteChecklistItem(id) {
        let liContainer = document.querySelector(`input#${id}`).parentElement;
        let ulContainer = liContainer.parentElement;
        ulContainer.removeChild(liContainer);
    }
    function _fillTaskCounter(operator) {
        switch (operator) {
            case '+':
                _taskCounter++;
                break;
            case '-':
                _taskCounter--;
        };
        
        taskCountSpan.textContent = _taskCounter;
    }
    
    // project factories
    const _renderProject = function(project) {
        if (projectContainer.children) {
            _clearDisplay();
        };

        let cardID = '#project_' + project.id;
        let projectCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.project', cardID);
        let projectHeader = _renderProjectHeader(project.description, project.id, project.title);

        projectCard.appendChild(projectHeader);
        projectContainer.appendChild(projectCard);

        _renderTaskCreateButton();

        _fillTaskCounter('');
    }
    const _renderProjectHeader = function(description, id, title) {
        let divHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.header');

        let h2Title = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h2)(title, '.title');
        let projectDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(description, '.description');
        divHeader.append(h2Title, projectDescription);
        if (id !== 0) {
            let divProjectControls = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.project-controls');

            let imgModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)('src/icons/edit.svg', 'modify project', '.project', '.modify');
            // * project modify/delete events
            imgModify.addEventListener('click', (e) => {
                _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
            });

            let imgDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)('src/icons/delete.svg', 'delete project', '.delete');
            imgDelete.addEventListener('click', (e) => {
                let cardID = e.target.closest('div.card').id;
                _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteProject', cardID);   // subscribed by forms.js
            });

            divProjectControls.append(imgModify, imgDelete);
            divHeader.appendChild(divProjectControls);
        };
        
        return divHeader;
    }
    const _renderViewPreferenceHeaderCard = function(title) {
        let viewCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.sort-due');
        let viewHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h2)(title, '');
        viewCard.appendChild(viewHeader);

        return viewCard;
    }

    // task factories
    const _renderTaskCreateButton = function() {
        let divCreate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('+', '.create');

        divCreate.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickCreateItem', 'task');  // subscribed by forms.js
        });

        let taskControls = taskContainer.children[0];
        taskControls.append(divCreate);
    }
    const _removeTaskCreateButton = function() {
        let taskControls = taskContainer.children[0];
        let controlsLength = taskControls.children.length;
        let lastControl = taskControls.children[controlsLength - 1];

        if (lastControl.classList.contains('create')) {
            taskControls.removeChild(lastControl);
        };
    }
    const _renderTask = function(task) {
        let cardID = 'task_' + task.id;
        let taskCard;

        switch (task.type) {
            case 'singleton':
                taskCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.singleton', `#${cardID}`)
                let singletonCheckmark = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('checkbox', '', '', task.id, '');
                let singletonCardContent = _renderSingletonContent(task.id, task.title, task.dueDate, task.description, task.priority);
                taskCard.append(singletonCheckmark, singletonCardContent);
                break;
            case 'checklist':
                taskCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.checklist', `#${cardID}`, `.priority-${task.priority}`);
                let checklistCardContent = _renderChecklistCardContents(task.title, task.description, task.dueDate, task.priority);
                let checklistItems = _renderCheckboxContainer(cardID, task.items);
                taskCard.append(checklistCardContent, checklistItems);
        };

        taskContainer.appendChild(taskCard);

        _fillTaskCounter('+');
    }
    const _renderSingletonContent = function(id, title, dueDate, description, priority) {
        let divContent = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.content');

        let taskHeader = _renderSingletonHeader(id, title, dueDate, priority);
        let taskDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(description, '.description');

        divContent.append(taskHeader, taskDescription);
        return divContent;
    }
    const _renderSingletonHeader = function(id, title, dueDate, priority) {
        let divHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.header');

        let labelCheckmarkTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('', id, '.title');
        let h4TitleContent = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h4)(title, '');
        labelCheckmarkTitle.appendChild(h4TitleContent);

        let imgAlt;
        switch (priority) {
            case 0:
                imgAlt = 'no priority';
                break;
            case 1:
                imgAlt = 'low priority';
                break;
            case 2:
                imgAlt = 'medium priority';
                break;
            case 3:
                imgAlt = 'high priority';
        }
        let imgPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)(`src/icons/priority-${priority}.svg`, imgAlt, '.priority');

        let spanDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)(dueDate, '.date');
        let imgModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)('src/icons/edit.svg', 'modify task', '.task', '.modify');
        let imgDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)('src/icons/delete.svg', 'delete task', '.delete');

        // * singleton modify/delete events
        imgModify.addEventListener('click', (e) => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
        });
        imgDelete.addEventListener('click', (e) => {    // subscribed by library.js
            let taskCardID = e.target.closest('div.card').id;
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteTask', taskCardID);   // subscribed by library.js
        });

        divHeader.append(labelCheckmarkTitle, spanDate, imgPriority, imgModify, imgDelete);
        return divHeader;
    }
    const _renderChecklistCardContents = function(title, description, dueDate, priority) {
        let divContent = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.content');
        let checklistHeader = _renderChecklistHeader(title, dueDate, priority);
        let checklistDescription = _renderChecklistSubheader(description);
        
        divContent.append(checklistHeader, checklistDescription);
        return divContent;
    }
    const _renderChecklistHeader = function(title, dueDate, priority) {
        let divHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.header');

        let h4Title = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h4)(title, '.title');
        let spanDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)(dueDate, '.date');

        let imgAlt;
        switch (priority) {
            case 0:
                imgAlt = 'no priority';
                break;
            case 1:
                imgAlt = 'low priority';
                break;
            case 2:
                imgAlt = 'medium priority';
                break;
            case 3:
                imgAlt = 'high priority';
        }
        let imgPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)(`src/icons/priority-${priority}.svg`, imgAlt, '.priority');

        let imgModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)('src/icons/edit.svg', 'modify task', '.task', '.modify');
        let imgDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)('src/icons/delete.svg', 'delete task', '.delete');

        // * checklist modify/delete events
        imgModify.addEventListener('click', (e) => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
        });
        imgDelete.addEventListener('click', (e) => {
            let cardID = e.target.closest('div.card').id;
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteTask', cardID);   // subscribed by library.js
        });

        divHeader.append(h4Title, spanDate, imgPriority, imgModify, imgDelete);
        return divHeader;
    }
    const _renderChecklistSubheader = function(description) {
        let divContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.description-container');
        
        let divDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(description, '.description');
        let spanCreate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('+', '.create');

        // * checklist item create event
        spanCreate.addEventListener('click', (e) => {
            let taskReference = e.target.closest('div.card').id.split('_')[1];
            let formReferences = ['checkbox', taskReference];
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickCreateItem', formReferences);   // subscribed by forms.js
        });

        divContainer.append(divDescription, spanCreate);
        return divContainer;
    }
    const _renderCheckboxContainer = function(taskCardID, items) {
        let ulItem = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.ul)('', '.checkboxes');

        for (let i = 0; i < (items.length); i++) {
            _renderCheckbox(ulItem, taskCardID, items[i]);
        };
        
        return ulItem;
    }
    const _renderCheckbox = function(checklistContainer, taskCardID, checkInfo) {
        let checkID = checkInfo[0];
        let checkContent = checkInfo[1];

        let liCardID = `#${taskCardID}__li_${checkID}`;
        let liCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.li)('', '.card', liCardID);

        let checkboxID = `${taskCardID}__checkbox_${checkID}`;  // # not needed vv
        let checkbox = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('checkbox', '', '', checkboxID, '');  // sets ID directly via default object prototype methods
        // ! set priority class color
        let labelCheckbox = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)(checkContent, checkboxID, '');
        let checkboxControls = _renderCheckboxControls(checkboxID);

        liCard.append(checkbox, labelCheckbox, checkboxControls);
        checklistContainer.appendChild(liCard);
    }
    const _renderNewCheckbox = function(checklistInstance) {
        let taskReference = checklistInstance[1]
        let taskCardID = `task_${taskReference}`;
        let ulTarget = document.querySelector(`div#${taskCardID} ul`);

        let checkReference = checklistInstance[2];
        let checkContent = checklistInstance[3];

        _renderCheckbox(ulTarget, taskCardID, [checkReference, checkContent]);
    }
    const _renderCheckboxControls = function(checkID) {
        let divControls = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.checklist-item-controls');

        let imgModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)('src/icons/edit.svg', 'modify task', '.task', '.modify');
        let imgDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)('src/icons/delete.svg', 'delete task', '.delete');

        // * checklist item modify/delete events
        imgModify.addEventListener('click', (e) => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);    // subscribed by forms.js
        });
        imgDelete.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteChecklistItem', checkID);    // subscribed by library.js
        });

        divControls.append(imgModify, imgDelete);

        return divControls;
    }



    // event subscriptions

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('updateDisplayView', _updateDisplay);  // published from library.js (_bundleInstances())

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectCreated', _renderProject)   // published from library.js (_createProject())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('taskCreated', _renderTask);    // published from library.js (_createTask())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('checkboxCreated', _renderNewCheckbox);   // published from library.js (_createCheckbox())

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('itemModified', _updateItem);    // published from library.js (_modify...())

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeProjectFromSection', _clearDisplay) // published from library.js (_deleteProject())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeTaskFromDisplay', _deleteTaskCard); // published from library.js (_deleteTask())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeChecklistItemFromDisplay', _deleteChecklistItem)    // published from library.js (_deleteChecklistItem())
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/scripts/elements.js":
/*!*********************************!*\
  !*** ./src/scripts/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ div),
/* harmony export */   "h2": () => (/* binding */ h2),
/* harmony export */   "h4": () => (/* binding */ h4),
/* harmony export */   "img": () => (/* binding */ img),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "li": () => (/* binding */ li),
/* harmony export */   "option": () => (/* binding */ option),
/* harmony export */   "p": () => (/* binding */ p),
/* harmony export */   "select": () => (/* binding */ select),
/* harmony export */   "span": () => (/* binding */ span),
/* harmony export */   "ul": () => (/* binding */ ul)
/* harmony export */ });
// & factory class for base-level DOM elements

// data
let _attributes = [];
let element;

// basic helper factories
const div = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('div');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.textContent = content;
    _attributes = [];
    return element;
}
const span = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('span');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.textContent = content;
    _attributes = [];
    return element;
}
const p = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('p');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.textContent = content;
    _attributes = [];
    return element;
}
const h2 = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('h2');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.textContent = content;
    _attributes = [];
    return element;
}
const h4 = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('h4');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.textContent = content;
    _attributes = [];
    return element;
}
const ul = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('ul');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.textContent = content;
    _attributes = [];
    return element;
}
const li = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('li');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.textContent = content;
    _attributes = [];
    return element;
}
const input = function(type, name, placeholder, id, ...args) {
    _attributes = [...args];
    element = document.createElement('input');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.type = type;
    element.id = String(id);
    element.name = String(name);
    element.placeholder = placeholder;
    if (type === 'radio') {
        element.value = String(id);
    };
    return element;
}
const select = function(name, ...args) {
    _attributes = [...args];
    element = document.createElement('select');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.name = name;
    return element;
}
const option = function(value, content) {
    element = document.createElement('option');
    element.value = value;
    element.textContent = content;
    return element;
}
const label = function(content, forReference, ...args) {
    _attributes = [...args];
    element = document.createElement('label');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.for = String(forReference);
    element.textContent = content;
    _attributes = [];
    return element;
}
const legend = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('legend');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.textContent = content;
    _attributes = [];
    return element;
}
const img = function(url, alt, ...args) {
    _attributes = [...args];
    element = document.createElement('img');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.src = `../${url}`;
    element.alt = alt;
    return element;
}

// helpers
function _setAttributes(element, attributes) {
    for (let i = 0; i < (attributes.length); i++) {
        if (attributes[i][0] === '.') {
            element.classList.add(attributes[i].substring(1, attributes[i].length));
        } else if (attributes[i][0] === '#') {
            element.id = attributes[i].substring(1, attributes[i].length);
        };
    };
}



/***/ }),

/***/ "./src/scripts/forms.js":
/*!******************************!*\
  !*** ./src/scripts/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/scripts/elements.js");



// & manages display/sidebar section DOMs -> form section DOMs <-> library communication
// & contains factories for generating form section DOM elements / groupings

const forms = (() => {
    // let _currentForm;
    let _currentFormType;
    let _currentProject;

    // cache DOM
    let formContainer = document.querySelector('.form-container');
    let formFieldset = formContainer.querySelector('fieldset');
    let formInputs; // * queried after form elements are rendered
    let projectIcons; // * queried after project form is rendered
    let confirmButton = document.querySelectorAll('button.confirm');
    let cancelButton = document.querySelectorAll('button.cancel');

    // event listeners
    confirmButton.forEach(btn => btn.addEventListener('click', (e) => {
        _confirmInput(e);
    }));
    cancelButton.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));

    // form managers
    function _openCreateForm(formReference) {

        switch (true) {
            case ((typeof formReference) === 'object'):   // * stores task reference when creating new checklist item
                let taskReference = formReference[1];
                _setFormReferences(formReference[0]);
                _renderCheckboxForm(taskReference, 'Create New Checklist Item');
                break;
            case ((typeof formReference) === 'string'):
                _setFormReferences(formReference);
                switch (_currentFormType) {
                    case 'project':
                        _renderProjectForm('Create New Project');
                        break;
                    case 'task':
                        _renderTaskForm('Create New Task');
                };
        };

        _showForm();
    }
    function _openModifyInstanceQuery(event) {
        let targetItemReferences;

        let isCheckbox;
        switch(true)  {
            case (event.target.closest('li.card') === null):
                isCheckbox = false;
                break;
            case (event.target.closest('li.card') !== null):
                isCheckbox = true;
        };

        switch (isCheckbox) {
            case false:
                targetItemReferences = event.target.closest('div.card').id.split('_');
                break;
            case true:
                let formTypeReference = 'checkbox';
                let taskReference = event.target.closest('div.card').id.split('_')[1];
                let checkboxReference = event.target.closest('li.card').id.split('__')[1].split('_')[1];
                targetItemReferences = [formTypeReference, [taskReference, checkboxReference]]; // * taskReference & checkboxReference must be bundled, split in library.js
        };

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openModifyInstanceQuery', targetItemReferences);  // subscribed by library.js
    }
    function _openModifyForm(itemValues) {
        _setFormReferences(itemValues[0]);
        _fillFormValues(itemValues);
        _showForm();
    }

    // form actions
    function _confirmInput() {
        console.log(_currentFormType);
        switch (_currentFormType) {
            case 'delete-confirm':
                _hideForm();
                let projectCardID = document.querySelector('div.project.card').id;
                _clearFormValues();
                _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('confirmDeleteProject', projectCardID);  // subscribed by library.js
                break;
            default:
                console.log('task or project')
                let isValid = _validateForm();
                switch(isValid) {
                    case true:
                        _hideForm();
                        let formValues = _bundleFormValues();
                        _findErrors('hide');
                        _clearFormValues();
                        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('confirmInput', formValues);    // subscribed by library.js
                        break;
                    case false:
                        _findErrors('show');
                };
        };
    }
    function _cancelInput() {
        _hideForm();
        _clearFormValues();
    }
    function _showDeleteProjectConfirmation() {
        _setFormReferences('delete-confirm');
        _renderDeleteConfirmationForm();
        formContainer.classList.remove('hide');
    }

    // helper methods  
    function _setFormReferences(formReference) {
        switch (formReference) {
            case 'project':
                formContainer.id = 'project-form'
                _currentFormType = 'project';
                break;
            case 'task':
                formContainer.id = 'task-form'
                _currentFormType = 'task';
                break;
            case 'checkbox':
                formContainer.id = 'checkbox-form'
                _currentFormType = 'checkbox';
                break;
            case 'delete-confirm':
                formContainer.id = 'delete-confirm';
                _currentFormType = 'delete-confirm';
        };
    }
    function _setCurrentProject(project) {
        //// console.log(project.id)
        //// console.log(project[1]);

        if (project.id !== undefined) {
            _currentProject = project.id;
        };
    }
    function _showForm() {
        formContainer.classList.remove('hide');
    }
    function _hideForm() {
        formContainer.classList.add('hide');
    }
    function _fillFormValues(values) {
        switch (_currentFormType) {
            case 'project':
                _renderProjectForm('Edit Project');
                for (let i = 0; i < (formInputs.length); i++) {
                    formInputs[i].value = values[i + 1];
                };
                
                // cycle through projectIcons
                for (let i = 0; i < (projectIcons.length); i++) {
                    // if projectIcon src includes selected icon reference
                    if (projectIcons[i].src.includes(values[values.length - 1])) {
                        console.log(projectIcons[i]);
                        // add selected icon class to projectIcon
                        _updateIconSelection(projectIcons[i]);
                    };
                };
                break;
            case 'task':
                _renderTaskForm('Edit Task');
                for (let i = 1; i < (values.length); i++) {
                    switch (i) {
                        case 1:
                            formInputs[i - 1].value = values[i];
                            break;
                        case 2:
                            switch (values[2]) {
                                case 'singleton':
                                    formInputs[1].checked = true;
                                    break;
                                case 'checklist':
                                    formInputs[2].checked = true;
                            };
                            break;
                        default:
                            formInputs[i].value = values[i];
                    };
                };
                _disableTaskTypeSelection();
                break;
            case 'checkbox':
                let instanceReferences = `${values[1]}_${values[2]}`;   // * passed to library for indexing correct task && checklist item
                _renderCheckboxForm(instanceReferences, 'Edit Checklist Item');
                formInputs[1].value = values[3];
        };
    }
    function _bundleFormValues() {
        //// console.log(_currentFormType);
        let formValues = [];

        switch (_currentFormType) {
            case 'project':
                formValues.push('project');
                for (let i = 0; i < (formInputs.length); i++) {
                    formValues.push(formInputs[i].value);
                };
                for (let i = 0; i < (projectIcons.length); i++) {
                    if (projectIcons[i].classList.contains('icon-selected')) {
                        let splitImgSrc =  projectIcons[i].src.split('/');
                        let selectedIconReference = splitImgSrc[splitImgSrc.length - 1].split('.')[0];
                        formValues.push(selectedIconReference);
                    };
                };
                break;
            case 'task':
                formValues.push('task');
                for (let i = 0; i < (formInputs.length); i++) {
                    if (i === 0 || ((i > 2) && (i < 8))) {
                        formValues.push(formInputs[i].value);
                    };
                    if (i === 1 || i === 2) {
                        if (formInputs[i].checked === true) {
                            formValues.push(formInputs[i].value);
                        };
                    };
                };
                break;
            case 'checkbox':
                formValues.push('checkbox');
                formValues.push(formInputs[0].value.split('_')[0]);
                formValues.push(formInputs[0].value.split('_')[1]);
                formValues.push(formInputs[1].value);
        };

        return formValues;
    }
    function _clearFormValues() {
        _removeFormElements();
        if (_currentFormType !== 'delete-confirm') {
            if (formInputs[0].classList.contains('input')) {
                formInputs[0].classList.remove('input');
            };
            formInputs[0].value = '';
        };
        formInputs = '';
        _currentFormType = '';
    }
    function _removeFormElements() {
        let fieldsetChildrenLength = formFieldset.children.length;
        for (let i = 0; i < (fieldsetChildrenLength); i++) {
            while (formFieldset.firstChild) {
                formFieldset.removeChild(formFieldset.lastChild);
            };
        };
    }
    function _disableTaskTypeSelection() {
        formInputs[1].disabled = true;
        formInputs[2].disabled = true;
    }
    function _validateForm() {
        return formContainer.querySelector('form').checkValidity();
    }
    function _findErrors(process) {
        let titleInput;
        formInputs.forEach(input => {
            if (input.id.split('-')[1] === 'title') {
                titleInput = input;
            };
        });

        switch (process) {
            case 'show':
                _showErrorMessage(titleInput);
                break;
            case 'hide':
                _hideErrorMessage(titleInput);
        };
    }
    function _showErrorMessage(input) {
        let label = input.previousElementSibling;
        label.lastChild.classList.remove('hide');
    }
    function _hideErrorMessage(input) {
        let label = input.previousElementSibling;
        label.lastChild.classList.add('hide');
    }
    function _updateIconSelection(targetIcon) {
        for (let i = 0; i < (projectIcons.length); i++) {
            if (projectIcons[i].classList.contains('icon-selected')) {
                projectIcons[i].classList.remove('icon-selected');
            };
        };

        targetIcon.classList.add('icon-selected');
    }

    // form factories
    const _renderProjectForm = function(formTitle) {
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)(formTitle, '');

        let titleDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let spanRequiredBadge = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('*', '.required-badge');
        let spanErrorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('please include a title', '.error-message', '.hide');
        let labelTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Title ', 'project-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'project-title', 'title', 'project-title', '');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;
        titleDiv.append(labelTitle, inputTitle);

        let descriptionDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let labelDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Description', '.project-description');
        let inputDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'project-description', 'description', 'project-description', '');
        descriptionDiv.append(labelDescription, inputDescription);

        let iconsDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.label-icons-group');
        let labelIcons = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Choose An Icon', '', '');
        let iconsContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.project-icons-container');
        for (let i = 0; i < 15; i++) {
            let imgRef;
            let imgAlt;
            let imgClass = '';
            switch (i) {
                case 0:
                    imgRef = '00';
                    imgAlt = 'folder';
                    imgClass = '.icon-selected';
                    break;
                case 1:
                    imgRef = '01';
                    imgAlt = 'star';
                    break;
                case 2:
                    imgRef = '02';
                    imgAlt = 'hammer and wrench';
                    break;
                case 3:
                    imgRef = '03';
                    imgAlt = 'fork and soda cup';
                    break;
                case 4:
                    imgRef = '04';
                    imgAlt = 'dollar bills';
                    break;
                case 5:
                    imgRef = '05';
                    imgAlt = 'city buildings';
                    break;
                case 6:
                    imgRef = '06';
                    imgAlt = 'house';
                    break;
                case 7:
                    imgRef = '07';
                    imgAlt = 'gift';
                    break;
                case 8:
                    imgRef = '08';
                    imgAlt = 'car';
                    break;
                case 9:
                    imgRef = '09';
                    imgAlt = 'airplane';
                    break;
                case 10:
                    imgRef = '10';
                    imgAlt = 'baby carriage';
                    break;
                case 11:
                    imgRef = '11';
                    imgAlt = 'flower';
                    break;
                case 12:
                    imgRef = '12';
                    imgAlt = 'palm tree';
                    break;
                case 13:
                    imgRef = '13';
                    imgAlt = 'volley ball';
                    break;
                case 14:
                    imgRef = '14';
                    imgAlt = 'backpack';
            };
            let imgIcon = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.img)(`src/icons/project-icons/${imgRef}.svg`, imgAlt, imgClass);
            imgIcon.addEventListener('click', (e) => {
                _updateIconSelection(e.target);
            });

            iconsContainer.appendChild(imgIcon);
        };
        iconsDiv.append(labelIcons, iconsContainer);

        formFieldset.append(fieldsetLegend, titleDiv, descriptionDiv, iconsDiv);

        formInputs = formContainer.querySelectorAll('input');
        projectIcons = document.querySelector('.project-icons-container').children;
    }
    const _renderTaskForm = function(formTitle) {        
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)(formTitle, '');

        let typeDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let labelTaskType = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Task Type', '');
        let divTypeOptions = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.type-options');
        let radioSingleton = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('radio', 'type', '', 'singleton', '.input',);
        radioSingleton.checked = true;
        let labelSingleton = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Single Task', 'singleton', '');
        let radioChecklist = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('radio', 'type', '', 'checklist', '.input');
        let labelChecklist = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Task List', 'checklist', '');
        divTypeOptions.append(radioSingleton, labelSingleton, radioChecklist, labelChecklist);
        typeDiv.append(labelTaskType, divTypeOptions);

        let titleDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let spanRequiredBadge = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('*', '.required-badge');
        let spanErrorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('please include a title', '.error-message', '.hide');
        let labelTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Title ', 'task-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'task-title', 'title', 'task-title', '.input');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;
        titleDiv.append(labelTitle, inputTitle);

        let descriptionDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let labelDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Task Description', 'description');
        let inputDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'description', 'description', 'task-description', '.input');
        descriptionDiv.append(labelDescription, inputDescription);

        let dueDateDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let labelDueDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Due Date', 'due-date');
        let inputDueDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('date', 'due-date', '', 'due-date', '.input');
        dueDateDiv.append(labelDueDate, inputDueDate);

        let divDropdowns = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.dropdowns');
        let divPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let labelPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Priority', 'priority', '');
        let selectPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.select)('priority', '#priority', '.input');
        for (let i = 0; i < 4; i++) {
            let content;
            switch (i) {
                case 0:
                    content = 'none ( )';
                    break;
                case 1:
                    content = 'low (!)';
                    break;
                case 2:
                    content = 'medium (!!)';
                    break;
                case 3:
                    content = 'high (!!!)';
            };
            let optionPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.option)(i, content);
            selectPriority.appendChild(optionPriority);
        };
        let divProject = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let labelProject = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Project', 'project', '');
        let selectProject = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.select)('project', '#project', '.input');
        divPriority.append(labelPriority, selectPriority);
        divProject.append(labelProject, selectProject);
        divDropdowns.append(divPriority, divProject);

        formFieldset.append(fieldsetLegend, typeDiv, titleDiv, descriptionDiv, dueDateDiv, divDropdowns)
        // formFieldset.append(fieldsetLegend, labelTaskType, divTypeOptions, labelTitle, inputTitle, labelDescription, inputDescription, labelDueDate, inputDueDate, divDropdowns);

        let projectReferenceContainer = formContainer.querySelector('input');
        projectReferenceContainer.classList.add('input');

        formInputs = formContainer.querySelectorAll('.input');
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openProjectOptionsQuery', '');  // subscribed by library.js
    }
    const _renderProjectOptions = function(array) {
        let projectDropdown = formInputs[7];
        for (let i = 0; i < (array.length); i++) {
            let projectName = array[i][0];
            let projectID = array[i][1];
            let optionProject = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.option)(projectID, projectName);

            if (_currentProject === projectID) {
                optionProject.selected = true;
            };

            projectDropdown.appendChild(optionProject);
        };
    }
    const _renderCheckboxForm = function(taskReference, formTitle) {
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)(formTitle, '');

        let titleDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.input-label-group');
        let spanRequiredBadge = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('*', '.required-badge');
        let spanErrorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('please include a title', '.error-message', '.hide');
        let labelTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Title ', 'project-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'checkbox-title', 'title', 'checkbox-title', '');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;
        titleDiv.append(labelTitle, inputTitle);

        formFieldset.append(fieldsetLegend, titleDiv);

        formInputs = formContainer.querySelectorAll('input');
        formInputs[0].value = taskReference;    // * passed to library.js for indexing correct task
    }
    const _renderDeleteConfirmationForm = function() {
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)('Delete This Project', '');

        let p1 = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.p)('Deleting a project will also delete all of its tasks.', '');
        let p2 = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.p)('Are you SURE you want to proceed?', '');
        
        formFieldset.append(fieldsetLegend, p1, p2);
    }

    // event subscriptions

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickCreateItem', _openCreateForm);   // published from display.js (createTaskButton clickEvent, _renderChecklistSubheader())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickCreateProject', _openCreateForm);    // publishing from sidebar.js (createProjectButton clickEvent)

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickModifyItem', _openModifyInstanceQuery);  // publishing from display.js (_render...Header())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('closeModifyInstanceQuery', _openModifyForm);  // publishing from library.js (_queryItemInstance());

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectCreated', _setCurrentProject); // published from library.js (_createProject())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('updateDisplayView', _setCurrentProject) // published from library.js (_bundleInstances())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('closeProjectOptionsQuery', _renderProjectOptions);  // publishing from library.js (_queryProjectNameID())

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickDeleteProject', _showDeleteProjectConfirmation);    // published from display.js (_renderProjectHeader())
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/scripts/library.js":
/*!********************************!*\
  !*** ./src/scripts/library.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./src/events.js");


// & 'backend' manager module containing project/task states, classes, & methods

const library = (() => {
    // dynamic data
    let _projectLibrary = [];
    let _taskLibrary = [];
    let _taskCounter = 0;
    let _projectCounter = 0;

    // factories
    class Project {
        // attributes
        constructor(projectID, projectTitle, projectDescription, projectIcon) {
            this.type = 'project';
            this.id = projectID;
            this.title = projectTitle;
            this.description = projectDescription;
            this.icon = projectIcon;
        }

        // setters
        set setTitle(value) {
            if (value !== this.title) {
                this.title = value;
            };
        }
        set setDescription(value) {
            if (value !== this.description) {
                this.description = value;
            };
        }
        set setIcon(value) {
            if (value !== this.icon) {
                this.icon = value;
            };
        }
    }

    class Task {
        // attributes
        constructor(taskID, projectID, taskType, taskTitle, taskDescription, taskDue, taskPriority, taskItems) {
            let itemCount = 0;

            this.id = taskID;
            this.projectID = projectID;
            this.type = taskType;
            this.title = taskTitle;
            this.description = taskDescription;
            this.dueDate = taskDue;
            this.priority = taskPriority;
            if (this.type === 'checklist') {
                this.items = [];
                if (taskItems !== undefined) {
                    for (let i = 0; i < (taskItems.length); i++) {
                        let itemBundle = [itemCount, taskItems[i]];
                        this.items.push(itemBundle);
                        itemCount++;
                    };
                };
            };
        }

        // setters
        set setTitle(value) {
            if (value !== this.title) {
                this.title = value;
            };
        }
        set setDescription(value) {
            if (value !== this.description) {
                this.description = value;
            };
        }
        set setDueDate(value) {
            if (value != this.dueDate) {
                this.dueDate = value;
            };
        }
        set setPriority(value) {
            if (value != this.priority) {
                this.priority = value;
            };
        }
        set setProjectID(value) {
            if (value != this.projectID) {
                this.projectID = value;
            };
        }
        set setCheckboxItem(valueArray) {
            let index = valueArray[0];
            let content = valueArray[1];
            if (content !== this.items[index][1]) {
                this.items[index][1] = content;
            };
        }
    }

    // setter
    function _setInstanceValues(values) {
        let libraryReference = values[0];
        let instanceReference = values[1];
        values.splice(0, 2);    // [title, description]
                                // [type, title, description, dueDate, 'priority', 'projectID', [tags]]
        //// console.log(libraryReference);
        //// console.log(instanceReference);
        //// console.log(values);


        switch (libraryReference) {
            case 'project':
                switch (instanceReference) {
                    case '':
                        _createProject(values);
                        break;
                    default:
                        _modifyProject(instanceReference, values);
                };
                break;
            case 'task':
                switch (instanceReference) {
                    case '':
                        //                         projectID            type       title    description  dueDate    priority             items
                        let formValuesReordered = [parseInt(values[5]), values[0], values[1], values[2], values[3], parseInt(values[4]), values[6]]
                        _createTask(formValuesReordered);
                        break;
                    default:
                        _modifyTask(instanceReference, values);
                };
                break;
            case 'checkbox':
                let checklistItemReference = values[0];
                let checklistItemContent = values[1];
                for (let t = 0; t < (_taskLibrary.length); t++) {
                    if (_taskLibrary[t].id == instanceReference) {
                        let checkID = values[0];
                        let taskInstance = _taskLibrary[t];

                        switch (checkID) {
                            case undefined:
                                _createCheckbox(taskInstance, values);
                                break;
                            default:
                                _modifyCheckbox(taskInstance, checklistItemReference, checklistItemContent); // formValues[0] needed to pass single value from formValues[]
                        };
                    };
                };
        };
    }

    // getters
    function _queryItemInstance(itemReferences) {
        let libraryReference = itemReferences[0];
        let instanceReference = itemReferences[1];
        //// console.log(libraryReference);
        //// console.log(instanceReference);

        let itemValueArray;
        switch (libraryReference) {
            case 'project':
                for (let p = 0; p < (_projectLibrary.length); p++) {
                    if (_projectLibrary[p].id == instanceReference) {
                        let item = _projectLibrary[p];
                        itemValueArray = ['project', item.id, item.title, item.description, item.icon];
                    };
                };
                break;
            case 'task':
                for (let t = 0; t < (_taskLibrary.length); t++) {
                    if (_taskLibrary[t].id == instanceReference) {
                        let item = _taskLibrary[t];
                        itemValueArray = ['task', item.id, item.type, item.title, item.description, item.dueDate, item.priority, item.projectID];
                    };
                };
                break;
            case 'checkbox':
                let taskReference = instanceReference[0];       // * unbundled from domDisplay.js (_openModifyFormQuery())
                let checkboxReference = instanceReference[1];   // * unbundled from domDisplay.js (_openModifyFormQuery())
                for (let t = 0; t < (_taskLibrary.length); t++) {
                    if (_taskLibrary[t].id == taskReference) {
                        let checklistItems = _taskLibrary[t].items;
                        for (let i = 0; i < (checklistItems.length); i++) {
                            if (checklistItems[i][0] == checkboxReference) {
                                itemValueArray = ['checkbox', taskReference, checklistItems[i][0], checklistItems[i][1]];
                            };
                        };
                    };
                };
        };

        //// console.log(itemValueArray);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('closeModifyInstanceQuery', itemValueArray);   // subscribed by forms.js
    }
    function _queryProjectNamesIDs() {
        let nameIDArray = [];
        for (let p = 0; p < (_projectLibrary.length); p++) {
            nameIDArray.push([_projectLibrary[p].title, _projectLibrary[p].id]);
        };

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('closeProjectOptionsQuery', nameIDArray) // subscribed by forms.js
    }
    function _bundleInstances(viewPreference, queryReference) { // ! reduce repetition vvv
        let instanceBundle = [];

        let queryProjects = false;
        let queryTasks = false;
        
        switch (viewPreference) {
            case 'All':
                queryTasks = true;
                break;
            case 'Today':
                queryTasks = true;
                break;
            case 'Upcoming':
                queryTasks = true;
                break;
            case 'Anytime':
                queryTasks = true;
                break;
            case 'project':
                queryProjects = true;
        };

        //// console.log(`queryProjects: ${queryProjects}`);
        //// console.log(`queryTasks: ${queryTasks}`);

        instanceBundle.push(viewPreference);
        if (queryProjects === true) {
            for (let p = 0; p < (_projectLibrary.length); p++) {
                if (_projectLibrary[p].id == queryReference) {
                    instanceBundle.push(_projectLibrary[p]);
                };
            };
            for (let t = 0; t < (_taskLibrary.length); t++) {
                if (_taskLibrary[t].projectID == queryReference) {
                    instanceBundle.push(_taskLibrary[t]);
                };
            };
        } else if (queryTasks === true) {   // ! reduce repetition
            switch (viewPreference) {
                case 'All':
                    for (let t = 0; t < (_taskLibrary.length); t++) {
                        instanceBundle.push(_taskLibrary[t]);
                    };
                    break;
                case 'Today':
                    for (let t = 0; t < (_taskLibrary.length); t++) {
                        let task = _taskLibrary[t];
                        if (task.dueDate === queryReference) {
                            instanceBundle.push(task);
                        }
                    };
                    break;
                case 'Upcoming':
                    for (let t = 0; t < (_taskLibrary.length); t++) {
                        let task = _taskLibrary[t];
                        for (let i = 0; i < (queryReference.length); i++) {
                            if (task.dueDate === queryReference[i]) {
                                instanceBundle.push(task);
                            };
                        };
                    };
                    break;
                case 'Anytime':
                    for (let t = 0; t < (_taskLibrary.length); t++) {
                        let task = _taskLibrary[t];
                        if (task.dueDate === queryReference) {
                            instanceBundle.push(task);
                        };
                    };
            };
        };

        console.log(instanceBundle);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('updateDisplayView', instanceBundle);    // subscribed by display.js, forms.js
    }

    // create methods
    function _createProject(attributeArray) {
        let _id = _projectCounter;
        let _newProject = new Project(_id, ...attributeArray);
        console.log('new project:')
        console.log(_newProject);
        _projectLibrary.push(_newProject);
        _projectCounter++;

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('projectCreated', _newProject);  // subscribed by display.js, sidebar.js
    }
    function _createTask(attributeArray) {
        let _id = _taskCounter;
        let _newTask = new Task(_id, ...attributeArray);
        console.log('new task:')
        console.log(_newTask);
        _taskLibrary.push(_newTask);
        _taskCounter++;

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('taskCreated', _newTask);    // subscribed by displayDOM.js
    }
    function _createCheckbox(task, itemValue) {
        let checklistItemsLength = task.items.length;
        let newItemID;

        switch (checklistItemsLength) {
            case 0:
                newItemID = 0;
                break;
            default:
                let lastItemID = task.items[checklistItemsLength - 1][0];
                newItemID = lastItemID + 1;
        };

        itemValue[0] = newItemID;
        task.items.push(itemValue);
        let _newCheckbox = ['checkbox', task.id, task.items[checklistItemsLength][0], task.items[checklistItemsLength][1]];
        
        console.log('new checkbox:')
        console.log(task.items);

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('checkboxCreated', _newCheckbox);    // subscribed by domDisplay.js
    }

    // modify methods
    function _modifyProject(targetItemID, attributeArray) {
        //// console.log(attributeArray)
        let projectInstance;
        for (let p = 0; p < (_projectLibrary.length); p++) {
            if (_projectLibrary[p].id == targetItemID) {
                projectInstance = _projectLibrary[p];
            };
        };
        //// console.log('original project instance:')
        //// console.log(projectInstance);
        for (let a = 0; a < (attributeArray.length); a++) {
            switch(a) {
                case 0:
                    projectInstance.setTitle = attributeArray[0];
                    break;
                case 1:
                    projectInstance.setDescription = attributeArray[1];
                    break;
                case 2:
                    projectInstance.setIcon = attributeArray[2];
            };
        };
        console.log('modified project instance:')
        console.log(projectInstance);

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('itemModified', projectInstance);  // subscribed by domDisplay.js, domSidebar.js
    }
    function _modifyTask(targetItemID, attributeArray) {
        //// console.log(attributeArray);
        let taskInstance;
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == targetItemID) {
                taskInstance = _taskLibrary[t];
            };
        };
        //// console.log('original task instance:')
        //// console.log(taskInstance);
        for (let a = 1; a < (attributeArray.length); a++) {
            // [type, title, description, dueDate, 'priority', 'projectID']
            switch(a) {
                case 1:
                    taskInstance.setTitle = attributeArray[1];
                    break;
                case 2:
                    taskInstance.description = attributeArray[2];
                    break;
                case 3:
                    taskInstance.setDueDate = attributeArray[3];
                    break;
                case 4:
                    taskInstance.setPriority = parseInt(attributeArray[4]);
                    break;
                case 5:
                    taskInstance.setProjectID = parseInt(attributeArray[5]);
            };
        };
        console.log('modified task instance:')
        console.log(taskInstance);

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('itemModified', taskInstance);  // subscribed by domDisplay.js, domSidebar.js
    }
    function _modifyCheckbox(taskInstance, targetItemID, targetContent) {
        //// console.log(targetItemID, targetContent);
        let checkboxInstance;
        let targetChecklistItems = taskInstance.items;
        for (let i = 0; i < (targetChecklistItems.length); i++) {
            if (targetChecklistItems[i][0] == targetItemID) {
                let targetValueArray = [i, targetContent];  // * i represents item index
                taskInstance.setCheckboxItem = targetValueArray;
                checkboxInstance = ['checkbox', taskInstance.id, targetItemID, targetContent];
            };
        };
        //// console.log('original task (checkbox) instance:')
        //// console.log(taskInstance);
        console.log('modified task (checkbox) instance:')
        console.log(taskInstance.items);

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('itemModified', checkboxInstance);   // subscribed by domDisplay.js
    }

    // delete methods
    function _deleteProject(cardID) {
        let cardReferences = cardID.split('_');
        let projectReference = cardReferences[1];
        let projectLoopStart = _projectLibrary.length - 1;

        for (let p = projectLoopStart; p > -1; p--) {
            if (_projectLibrary[p].id == projectReference) {
                _projectLibrary.splice(p, 1);
            };
        };

        let taskLoopStart = _taskLibrary.length - 1;
        for (let t = taskLoopStart; t > -1; t--) {
            if (_taskLibrary[t].projectID == projectReference) {
                _taskLibrary.splice(t, 1);
            };
        };
        console.log('project delete results:')
        console.log(_projectLibrary);
        console.log(_taskLibrary);

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeProjectFromSection', cardID);    // subscribed by display.js, sidebar.js
    }
    function _deleteTask(cardID) {
        let cardReferences = cardID.split('_');
        let taskReference = cardReferences[1];
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == taskReference) {
                _taskLibrary.splice(t, 1);
            };
        };
        console.log('task delete results:')
        console.log(_taskLibrary);

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeTaskFromDisplay', cardID);    // subscribed by domDisplay.js
    }
    function _deleteChecklistItem(checkID) {
        let taskReference = checkID.split('__')[0].split('_')[1];
        let checkReference = checkID.split('__')[1].split('_')[1];
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == taskReference) {
                let checklistItemsArray = _taskLibrary[t].items;
                for (let i = 0; i < (checklistItemsArray.length); i++) {
                    if (checklistItemsArray[i][0] == checkReference) {
                        checklistItemsArray.splice(i, 1);
                        console.log('checklist item delete results:')
                        console.log(checklistItemsArray);
                    };
                };
            };
        };

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeChecklistItemFromDisplay', checkID);  // subscribed by domDisplay.js
    }

    // event subscriptions

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openViewPreferenceQuery', _bundleInstances) // published from sidebar.js (_changeViewPreferencek())

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('confirmInput', _setInstanceValues); //published from default.js (init()), forms.js (_confirmInput())

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openModifyInstanceQuery', _queryItemInstance);    // published from forms.js (_openModifyQuery())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openProjectOptionsQuery', _queryProjectNamesIDs)  // published from forms.js (_showForm())

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('confirmDeleteProject', _deleteProject);    // published from forms.js (confirmDeleteButton eventListener)
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickDeleteTask', _deleteTask);    // published from display.js (_render...(task)Headers())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickDeleteChecklistItem', _deleteChecklistItem)  // published from display.js (_renderCheckboxControls())
})();

/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events.js */ "./src/events.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/scripts/elements.js");



// & manages sidebar section DOM <-> library communication
// & contains factories for generating display section DOM elements / groupings

const sidebar = (() => {
    // cache dom
    let viewPrefs = document.getElementById('sidebar');
    let title = document.getElementById('title');

    let viewAllButton = document.getElementById('view-all');
    let viewTodayButton = document.getElementById('view-today');
    let viewUpcomingButton = document.getElementById('view-upcoming');
    let viewAnytimeButton = document.getElementById('view-anytime');
    let viewUnsortedButton = document.getElementById('view-project_0');
    let projectsList = document.getElementById('dynamic-views');
    let createProjectButton = document.querySelector('div.view-prefs-container span.create');

    // event listeners
    // ? hide sidebar when not focused ?
    title.addEventListener('click', () => {
        viewPrefs.classList.toggle('hide');
    });
    
    viewAllButton.addEventListener('click', (e) => {
        _updateSelectEffect(e.target);
        _changeViewPreference('All', '');
    });
    viewTodayButton.addEventListener('click', (e) => {
        _updateSelectEffect(e.target);
        _changeViewPreference('Today', '');
    });
    viewUpcomingButton.addEventListener('click', (e) => {
        _updateSelectEffect(e.target);
        _changeViewPreference('Upcoming', '');
    });
    viewAnytimeButton.addEventListener('click', (e) => {
        _updateSelectEffect(e.target);
        _changeViewPreference('Anytime', '');
    });
    viewUnsortedButton.addEventListener('click', (e) => {
        _updateSelectEffect(e.target);
        _changeViewPreference('project', viewUnsortedButton.id);
    });
    createProjectButton.addEventListener('click', () => {
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickCreateProject', 'project');    // subscribed by forms.js
    });

    // managers
    function _changeViewPreference(preferenceKeyword, targetID) {
        console.log(targetID);
        let queryReference;

        switch (preferenceKeyword) {
            case 'today':
                queryReference = _getTodayDate();
                break;
            case 'upcoming':
                queryReference = _getUpcomingDate();
                break;
            case 'project':
                let splitID = targetID.split('_');
                queryReference = splitID[1];
                break;
            default:
                queryReference = '';
        };

        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openViewPreferenceQuery', preferenceKeyword, queryReference); // subscribed by library.js
    }

    // factories
    const _renderProjectLink = function(project) {
        if (project.id !== 0) {
            let id = project.id;
            let title = project.title;

            let liID = `#view-project_${id}`;
            let liProjectLink = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.li)(title, liID);
            console.log(liProjectLink);

            liProjectLink.addEventListener('click', (e) => {
                _updateSelectEffect(e.target);
                _changeViewPreference('project', e.target.id);
            });

            projectsList.appendChild(liProjectLink);
            
            _updateSelectEffect(liProjectLink);
        };
    }

    // helpers
    function _modifyViewPreferenceLink(itemInstance) {
        if (itemInstance.type === 'project') {
            let projectLink = document.getElementById(`view-project_${itemInstance.id}`);
            projectLink.textContent = itemInstance.title;
        };
    }
    function _removeProjectLink(projectCardID) {
        let linkReference = projectCardID.split('_')[1];

        let liProject = document.getElementById(`view-project_${linkReference}`);
        let ulContainer = liProject.parentElement;

        ulContainer.removeChild(liProject);

        switch (true) {
            case (ulContainer.children.length > 1):
                _changeViewPreference('project', ulContainer.lastChild.id);
                _updateSelectEffect(ulContainer.lastChild);
                break;
            default:
                _changeViewPreference('project', 'project_0');
                _updateSelectEffect(viewUnsortedButton);
        };
    }
    function _getTodayDate() {
        let rawDate = new Date();
        let year = rawDate.getFullYear();
        let month = rawDate.getMonth() + 1;
        let date = rawDate.getDate();

        if (month < 10) {
            month = `0${month}`;
        };
        if (date < 10) {
            date = `0${date}`;
        };

        let formattedDate = `${year}-${month}-${date}`;
        return formattedDate;
    }
    function _getUpcomingDate() {
        let validDates = [];
        for (let i = 1; i < 8; i++) {
            let rawDate = new Date();
            rawDate.setDate(rawDate.getDate() + i);
            let year = rawDate.getFullYear();
            let month = rawDate.getMonth() + 1;
            let date = rawDate.getDate();
     
            if (month < 10) {
                 month = `0${month}`;
             };
             if (date < 10) {
                 date = `0${date}`;
             };
     
             let formattedDate = `${year}-${month}-${date}`;
             validDates.push(formattedDate);
        };

        return validDates;
    }
    function _updateSelectEffect(targetLink) {
        _removeSelectEffect();
        _addSelectEffect(targetLink);
    }
    function _addSelectEffect(targetLink) {
        targetLink.classList.add('selected-view-preference');
    }
    function _removeSelectEffect() {
        let sidebarLinks = [viewAllButton, viewTodayButton, viewUpcomingButton, viewAnytimeButton, viewUnsortedButton, ...projectsList.children];
        sidebarLinks.splice(5, 1);
        console.log(sidebarLinks);

        for (let i = 0; i < (sidebarLinks.length); i++) {
            let viewPreference = sidebarLinks[i];
            if (viewPreference.classList.contains('selected-view-preference')) {
                viewPreference.classList.remove('selected-view-preference');
            };
        };
    }

    // event subscriptions
    
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectCreated', _renderProjectLink); // published by library.js (_createProject())
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('itemModified', _modifyViewPreferenceLink);   // published by library.js (_modify...())
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeProjectFromSection', _removeProjectLink);   // published by library.js (_deleteProject());

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_spacing_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/spacing.css */ "./src/styles/spacing.css");
/* harmony import */ var _styles_typo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/typo.css */ "./src/styles/typo.css");
/* harmony import */ var _styles_effects_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/effects.css */ "./src/styles/effects.css");
/* harmony import */ var _styles_colors_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/colors.css */ "./src/styles/colors.css");
/* harmony import */ var _scripts_default_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/default.js */ "./src/scripts/default.js");
/* harmony import */ var _scripts_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/display */ "./src/scripts/display.js");
/* harmony import */ var _scripts_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/forms */ "./src/scripts/forms.js");
/* harmony import */ var _scripts_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/sidebar */ "./src/scripts/sidebar.js");
/* harmony import */ var _scripts_library__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/library */ "./src/scripts/library.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events */ "./src/events.js");













// actions
_scripts_default_js__WEBPACK_IMPORTED_MODULE_5__["default"].init();
_events__WEBPACK_IMPORTED_MODULE_10__["default"].viewEvents();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw0REFBZ0Isd0NBQXdDO0FBQzVELElBQUksNERBQWdCLCtDQUErQztBQUNuRSxJQUFJLDREQUFnQixvREFBb0Q7O0FBRXhFLENBQUM7O0FBRUQsaUVBQWUsT0FBTzs7Ozs7O1VDeEx0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNFO0FBQ0g7QUFDRztBQUNEOztBQUVtQjtBQUNSO0FBQ0o7QUFDSTtBQUNBO0FBQ1Y7O0FBRTlCO0FBQ0EsZ0VBQWlCO0FBQ2pCLDJEQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvZWZmZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zcGFjaW5nLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3R5cG8uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzP2IwZDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9lZmZlY3RzLmNzcz9mNzBmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zcGFjaW5nLmNzcz8zNzFkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdHlwby5jc3M/NjBlYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkE3MEJEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUFFQztcXG59XFxuXFxuICAgIC5zZWxlY3RlZC12aWV3LXByZWZlcmVuY2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNyUsIDEwMCUpO1xcbiAgICB9XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbnNlY3Rpb24uZm9ybS1jb250YWluZXI6bm90KC5oaWRlKSB+IC5zaG93LWZpbHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5yZXF1aXJlZC1iYWRnZSxcXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4gICAgZmllbGRzZXQge1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0lBRUk7UUFDSSxvQ0FBb0M7SUFDeEM7O0FBRUo7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QTcwQkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQUVDO1xcbn1cXG5cXG4gICAgLnNlbGVjdGVkLXZpZXctcHJlZmVyZW5jZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3JSwgMTAwJSk7XFxuICAgIH1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuc2VjdGlvbi5mb3JtLWNvbnRhaW5lcjpub3QoLmhpZGUpIH4gLnNob3ctZmlsdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnJlcXVpcmVkLWJhZGdlLFxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiAgICBmaWVsZHNldCB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBjYXJkIGhvdmVyICovXFxuLyogY2FyZCBob3ZlciAqL1xcbi8qIGNhcmQgaG92ZXIgKi9cXG5cXG4uY2FyZC5zaW5nbGV0b24sXFxuLmNhcmQuY2hlY2tsaXN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLnNpbmdsZXRvbjo6YWZ0ZXIsXFxuLmNhcmQuY2hlY2tsaXN0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4OyBsZWZ0OiAwcHg7XFxuICAgIHotaW5kZXg6IC0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3JSwgOTYlKTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuXFxuLmNhcmQuc2luZ2xldG9uOmhvdmVyOjphZnRlcixcXG4uY2FyZC5jaGVja2xpc3Q6aG92ZXI6OmFmdGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yMHMgZWFzZS1vdXQ7XFxufVxcblxcblxcbi8qIHZpZXcgcHJlZmVyZW5jZSBob3ZlciAqL1xcbi8qIHZpZXcgcHJlZmVyZW5jZSBob3ZlciAqL1xcbi8qIHZpZXcgcHJlZmVyZW5jZSBob3ZlciAqL1xcblxcbi52aWV3LXByZWZzLWNvbnRhaW5lciB1bCBsaSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgbGk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7IGxlZnQ6IDBweDtcXG4gICAgei1pbmRleDogLTE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDclLCAxMDAlKTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi52aWV3LXByZWZzLWNvbnRhaW5lciB1bCBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjIwcyBlYXNlLW91dDtcXG59XFxuXFxuXFxuLyogcHJvamVjdCBpY29uIHNlbGVjdGlvbiAqL1xcbi8qIHByb2plY3QgaWNvbiBzZWxlY3Rpb24gKi9cXG4vKiBwcm9qZWN0IGljb24gc2VsZWN0aW9uICovXFxuXFxuLnByb2plY3QtaWNvbnMtY29udGFpbmVyIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcblxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjBzIGVhc2Utb3V0O1xcbn1cXG5cXG4uaWNvbi1zZWxlY3RlZCxcXG4ucHJvamVjdC1pY29ucy1jb250YWluZXIgaW1nOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIzNiwgMzklLCA4OCUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2VmZmVjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTs7QUFFZjs7SUFFSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFdBQVc7O0lBRVgsbUNBQW1DOztJQUVuQyxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOzs7QUFHQSwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjs7QUFFMUI7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsV0FBVzs7SUFFWCxvQ0FBb0M7O0lBRXBDLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7O0FBR0EsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7O0FBRTNCO0lBQ0ksb0JBQW9COztJQUVwQixxQ0FBcUM7QUFDekM7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNhcmQgaG92ZXIgKi9cXG4vKiBjYXJkIGhvdmVyICovXFxuLyogY2FyZCBob3ZlciAqL1xcblxcbi5jYXJkLnNpbmdsZXRvbixcXG4uY2FyZC5jaGVja2xpc3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQuc2luZ2xldG9uOjphZnRlcixcXG4uY2FyZC5jaGVja2xpc3Q6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7IGxlZnQ6IDBweDtcXG4gICAgei1pbmRleDogLTE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDclLCA5NiUpO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG5cXG4uY2FyZC5zaW5nbGV0b246aG92ZXI6OmFmdGVyLFxcbi5jYXJkLmNoZWNrbGlzdDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjIwcyBlYXNlLW91dDtcXG59XFxuXFxuXFxuLyogdmlldyBwcmVmZXJlbmNlIGhvdmVyICovXFxuLyogdmlldyBwcmVmZXJlbmNlIGhvdmVyICovXFxuLyogdmlldyBwcmVmZXJlbmNlIGhvdmVyICovXFxuXFxuLnZpZXctcHJlZnMtY29udGFpbmVyIHVsIGxpIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi52aWV3LXByZWZzLWNvbnRhaW5lciB1bCBsaTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDsgbGVmdDogMHB4O1xcbiAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNyUsIDEwMCUpO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnZpZXctcHJlZnMtY29udGFpbmVyIHVsIGxpOmhvdmVyOjphZnRlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjBzIGVhc2Utb3V0O1xcbn1cXG5cXG5cXG4vKiBwcm9qZWN0IGljb24gc2VsZWN0aW9uICovXFxuLyogcHJvamVjdCBpY29uIHNlbGVjdGlvbiAqL1xcbi8qIHByb2plY3QgaWNvbiBzZWxlY3Rpb24gKi9cXG5cXG4ucHJvamVjdC1pY29ucy1jb250YWluZXIgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yMHMgZWFzZS1vdXQ7XFxufVxcblxcbi5pY29uLXNlbGVjdGVkLFxcbi5wcm9qZWN0LWljb25zLWNvbnRhaW5lciBpbWc6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjM2LCAzOSUsIDg4JSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVuZGVyIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRSAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDEsIGgyLCBoMywgaDQge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBwYCBlbGVtZW50cyBhY3Jvc3MgYnJvd3NlcnMgKi9cXG5cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBib3JkZXIsIHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKiBjb3JyZWN0IHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuICBcXG4vKiAxLiBjb3JyZWN0IHRleHQgd3JhcHBpbmcgaW4gRWRnZSwgSUUgKi9cXG4vKiAyLiBjb3JyZWN0IGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRSAqL1xcbi8qIDMuIHJlbW92ZSBwYWRkaW5nIHNvIGRldnMgYXJlbid0IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8tb3V0ICovXFxuLyogICAgYGZpZWxkc2V0YGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKiAxLiBhZGQgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwICovXFxuLyogMi4gcmVtb3ZlIHBhZGRpbmcgaW4gSUUgMTAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBJTlRFUkFDVElWRSA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUNBQXFDOztBQUVyQzs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLFdBQVc7O0lBRXpCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixhQUFhOztJQUViLHdCQUF3QjtBQUM1Qjs7O0FBR0EsdUNBQXVDOztBQUV2Qyw2Q0FBNkM7O0FBRTdDO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSw4REFBOEQ7O0FBRTlEO0lBQ0ksU0FBUztBQUNiOztBQUVBLHlEQUF5RDs7QUFFekQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7QUFHQSwrQ0FBK0M7O0FBRS9DLGtEQUFrRDs7QUFFbEQ7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLG9DQUFvQzs7QUFFcEMsMENBQTBDO0FBQzFDLDJDQUEyQzs7QUFFM0M7OztJQUdJLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNyQjs7QUFFQSw4QkFBOEI7O0FBRTlCOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQSw4REFBOEQ7O0FBRTlEOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQSxrRUFBa0U7O0FBRWxFOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQSw0Q0FBNEM7O0FBRTVDOztJQUVJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEsbURBQW1EOztBQUVuRDs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUEsK0JBQStCOztBQUUvQjtJQUNJLFVBQVU7QUFDZDs7QUFFQSx5Q0FBeUM7QUFDekMsZ0VBQWdFO0FBQ2hFLG1FQUFtRTtBQUNuRSwwQ0FBMEM7O0FBRTFDO0lBQ0ksc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixjQUFjLEVBQUUsTUFBTTtJQUN0QixjQUFjLEVBQUUsTUFBTTtJQUN0QixlQUFlLEVBQUUsTUFBTTtJQUN2QixVQUFVLEVBQUUsTUFBTTtJQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQy9COztBQUVBLHVDQUF1QztBQUN2QywrQkFBK0I7O0FBRS9COztJQUVJLHNCQUFzQixFQUFFLE1BQU07SUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDdEI7OztBQUdBLDBDQUEwQzs7QUFFMUMsaUNBQWlDOztBQUVqQztJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4O1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbi8qIFNFQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW5kZXIgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMSwgaDIsIGgzLCBoNCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi8qIEZPUk1TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBjaGFuZ2UgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gcmVtb3ZlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBzaG93IG92ZXJmbG93IGluIElFLCBFZGdlICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qIHJlbW92ZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBJRSAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogY29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qIGNvcnJlY3QgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4gIFxcbi8qIDEuIGNvcnJlY3QgdGV4dCB3cmFwcGluZyBpbiBFZGdlLCBJRSAqL1xcbi8qIDIuIGNvcnJlY3QgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFICovXFxuLyogMy4gcmVtb3ZlIHBhZGRpbmcgc28gZGV2cyBhcmVuJ3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVyby1vdXQgKi9cXG4vKiAgICBgZmllbGRzZXRgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAgKi9cXG4vKiAyLiByZW1vdmUgcGFkZGluZyBpbiBJRSAxMCAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcblxcbi8qIElOVEVSQUNUSVZFID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgKi9cXG4vKiBHTE9CQUwgKi9cXG4vKiBHTE9CQUwgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0teHRyYS1zbWFsbC1wYWQ6IGNhbGMoMC4yNSAqIHZhcigtLW1haW4tcGFkKSk7XFxuICAgIC0teHRyYS1zbWFsbC1nYXA6IGNhbGMoMC4yNSAqIHZhcigtLW1haW4tZ2FwKSk7XFxuXFxuICAgIC0tc21hbGwtcGFkOiBjYWxjKDAuNSAqIHZhcigtLW1haW4tcGFkKSk7XFxuICAgIC0tc21hbGwtZ2FwOiBjYWxjKDAuNSAqIHZhcigtLW1haW4tZ2FwKSk7XFxuXFxuICAgIC0tbWFpbi1wYWQ6IDFlbTtcXG4gICAgLS1tYWluLWdhcDogMWVtO1xcblxcbiAgICAtLW1lZC1wYWQ6IGNhbGMoMS41ICogdmFyKC0tbWFpbi1wYWQpKTtcXG5cXG4gICAgLS1scmctZ2FwOiBjYWxjKDIgKiB2YXIoLS1tYWluLWdhcCkpXFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4gICAgbGkge1xcbiAgICAgICAgcGFkZGluZzogMGVtO1xcbiAgICB9XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjI1ZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiAgICBoZWFkZXIsXFxuICAgICNzaWRlYmFyLFxcbiAgICAjZGlzcGxheSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxuICAgIH1cXG5cXG4vKiAtLS0gU0lERUJBUiAqL1xcbi8qIC0tLSBTSURFQkFSICovXFxuLyogLS0tIFNJREVCQVIgKi9cXG5cXG4jc2lkZWJhciB7XFxuICAgIC0teS1vZmZzZXQ6IGNhbGMoY2FsYyh2YXIoLS1tYWluLXBhZCkgKiAyKSArIDMuMTVlbSk7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogdmFyKC0teS1vZmZzZXQpOyBsZWZ0OiAwZW07XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXktb2Zmc2V0KSk7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbn1cXG5cXG4gICAgLnZpZXctcHJlZnMtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbHJnLWdhcCk7XFxuXFxuICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0tbHJnLWdhcCk7XFxuICAgIH1cXG5cXG4gICAgICAgICNzaWRlYmFyIHVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogdmFyKC0tbWFpbi1nYXApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgICNzaWRlYmFyIHVsIHNwYW4ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICNzaWRlYmFyIGxpIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXh0cmEtc21hbGwtcGFkKTtcXG4gICAgICAgICAgICB9XFxuXFxuLyogLS0tIEZPUk1TICovXFxuLyogLS0tIEZPUk1TICovXFxuLyogLS0tIEZPUk1TICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTsgbGVmdDo1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG5cXG4gICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbn1cXG5cXG5zZWN0aW9uLmZvcm0tY29udGFpbmVyOm5vdCguaGlkZSkgfiAuc2hvdy1maWx0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4OyByaWdodDogMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoOyB3aWR0aDogMTAwdnc7XFxufVxcblxcbiAgICBmb3JtIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1tYWluLXBhZCk7XFxuICAgIH1cXG5cXG4gICAgICAgICAgICAuaW5wdXQtbGFiZWwtZ3JvdXAge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAubGFiZWwtaWNvbnMtZ3JvdXAge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLnByb2plY3QtaWNvbnMtY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LWljb25zLWNvbnRhaW5lciBpbWcge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZHJvcGRvd25zIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5kcm9wZG93bnMgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgLmZvcm0tYnV0dG9ucyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbixcXG4gICAgICAgIGlucHV0LFxcbiAgICAgICAgc2VsZWN0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS14dHJhLXNtYWxsLXBhZCk7XFxuICAgICAgICB9XFxuXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyICBoZWFkZXInXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSBkaXNwbGF5JztcXG5cXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuXFxuICAgICAgICBoZWFkZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1tYWluLWdhcCk7XFxuXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBoZWFkZXIgaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyZW07XFxuICAgICAgICAgICAgfVxcblxcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcblxcbiAgICAgICAgI2Rpc3BsYXkge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZGlzcGxheTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZGlzcGxheS1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBkaXYuY2FyZCxcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLnByb2plY3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC5zb3J0LWR1ZSB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLnByb2plY3QgLmhlYWRlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgICAgICAgY29udHJvbHMnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIC4nO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLnByb2plY3QgLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY29udHJvbHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLnByb2plY3QgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2luZ2xldG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiAuaGVhZGVyLFxcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCAuaGVhZGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaW5nbGV0b24gLnRpdGxlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0teHRyYS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXh0cmEtc21hbGwtcGFkKSAqIDEpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbHMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jaGVja2xpc3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQuY2hlY2tsaXN0IC5kZXNjcmlwdGlvbixcXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC5zaW5nbGV0b24gLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0LWl0ZW0tY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zcGFjaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7O0FBRVg7SUFDSSw4Q0FBOEM7SUFDOUMsOENBQThDOztJQUU5Qyx3Q0FBd0M7SUFDeEMsd0NBQXdDOztJQUV4QyxlQUFlO0lBQ2YsZUFBZTs7SUFFZixzQ0FBc0M7O0lBRXRDO0FBQ0o7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Q2IsbUJBQW1CO3dCQUN2Qjs7d0JBRUE7NEJBQ0ksc0JBQXNCOzRCQUN0QixrQkFBa0I7d0JBQ3RCOztnQkFFUjtvQkFDSSxhQUFhO29CQUNiLDJCQUEyQjtnQkFDL0I7O29CQUVJO3dCQUNJLGtCQUFrQjtvQkFDdEI7O2dCQUVKO29CQUNJLGFBQWE7b0JBQ2IsdUJBQXVCO2dCQUMzQjs7b0JBRUk7O3dCQUVJLGFBQWE7d0JBQ2IsMEJBQTBCO29CQUM5Qjs7d0JBRUk7OzRCQUVJLGtCQUFrQjt3QkFDdEI7O29CQUVKO3dCQUNJLG1DQUFtQztvQkFDdkM7O29CQUVBO3dCQUNJLDJDQUEyQztvQkFDL0M7O29CQUVBO3dCQUNJLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQiwwQkFBMEI7O3dCQUUxQixXQUFXO29CQUNmOzt3QkFFSTs0QkFDSSxhQUFhOzRCQUNiLDBCQUEwQjs0QkFDMUIseUJBQXlCO3dCQUM3Qjs7Z0JBRVI7b0JBQ0ksYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtnQkFDOUI7O29CQUVJO3dCQUNJLGFBQWE7b0JBQ2pCOzt3QkFFSTs7NEJBRUksa0JBQWtCO3dCQUN0Qjs7b0JBRUo7d0JBQ0ksYUFBYTt3QkFDYixtQkFBbUI7b0JBQ3ZCOzt3QkFFSTs0QkFDSSxrQkFBa0I7d0JBQ3RCOzt3QkFFQTs0QkFDSSxhQUFhOzRCQUNiLDBCQUEwQjt3QkFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXh0cmEtc21hbGwtcGFkOiBjYWxjKDAuMjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcbiAgICAtLXh0cmEtc21hbGwtZ2FwOiBjYWxjKDAuMjUgKiB2YXIoLS1tYWluLWdhcCkpO1xcblxcbiAgICAtLXNtYWxsLXBhZDogY2FsYygwLjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcbiAgICAtLXNtYWxsLWdhcDogY2FsYygwLjUgKiB2YXIoLS1tYWluLWdhcCkpO1xcblxcbiAgICAtLW1haW4tcGFkOiAxZW07XFxuICAgIC0tbWFpbi1nYXA6IDFlbTtcXG5cXG4gICAgLS1tZWQtcGFkOiBjYWxjKDEuNSAqIHZhcigtLW1haW4tcGFkKSk7XFxuXFxuICAgIC0tbHJnLWdhcDogY2FsYygyICogdmFyKC0tbWFpbi1nYXApKVxcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDBlbTtcXG4gICAgfVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMS4yNWVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4gICAgaGVhZGVyLFxcbiAgICAjc2lkZWJhcixcXG4gICAgI2Rpc3BsYXkge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICB9XFxuXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcbi8qIC0tLSBTSURFQkFSICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAtLXktb2Zmc2V0OiBjYWxjKGNhbGModmFyKC0tbWFpbi1wYWQpICogMikgKyAzLjE1ZW0pO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IHZhcigtLXktb2Zmc2V0KTsgbGVmdDogMGVtO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS15LW9mZnNldCkpO1xcbiAgICB3aWR0aDogMjV2dztcXG59XFxuXFxuICAgIC52aWV3LXByZWZzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICBnYXA6IHZhcigtLWxyZy1nYXApO1xcblxcbiAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLWxyZy1nYXApO1xcbiAgICB9XFxuXFxuICAgICAgICAjc2lkZWJhciB1bCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjc2lkZWJhciB1bCBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjc2lkZWJhciBsaSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS14dHJhLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgfVxcblxcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7IGxlZnQ6NTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxuXFxuICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkKTtcXG59XFxuXFxuc2VjdGlvbi5mb3JtLWNvbnRhaW5lcjpub3QoLmhpZGUpIH4gLnNob3ctZmlsdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDsgcmlnaHQ6IDBweDtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDsgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4gICAgZm9ybSB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICB9XFxuXFxuICAgICAgICAgICAgLmlucHV0LWxhYmVsLWdyb3VwIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLmxhYmVsLWljb25zLWdyb3VwIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLW1haW4tcGFkKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWljb25zLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1pY29ucy1jb250YWluZXIgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmRyb3Bkb3ducyB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuZHJvcGRvd25zIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgIC5mb3JtLWJ1dHRvbnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICB9XFxuXFxuICAgICAgICBidXR0b24sXFxuICAgICAgICBpbnB1dCxcXG4gICAgICAgIHNlbGVjdCB7XFxuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0teHRyYS1zbWFsbC1wYWQpO1xcbiAgICAgICAgfVxcblxcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciAgaGVhZGVyJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXkgZGlzcGxheSc7XFxuXFxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcblxcbiAgICAgICAgaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogdmFyKC0tbWFpbi1nYXApO1xcblxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaGVhZGVyIGltZyB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG5cXG4gICAgICAgICNkaXNwbGF5IHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgZGl2LmNhcmQsXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC5wcm9qZWN0IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNhcmQuc29ydC1kdWUge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY2FyZC5wcm9qZWN0IC5oZWFkZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RpdGxlICAgICAgIGNvbnRyb2xzJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbiAuJztcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC5wcm9qZWN0IC50aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNvbnRyb2xzO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC5wcm9qZWN0IC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAudGFzay1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnNpbmdsZXRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5zaW5nbGV0b24gLmhlYWRlcixcXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgLmhlYWRlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIC50aXRsZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IC50aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXh0cmEtc21hbGwtcGFkKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5zaW5nbGV0b24gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS14dHJhLXNtYWxsLXBhZCkgKiAxKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLmNoZWNrbGlzdCAuZGVzY3JpcHRpb24sXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQuc2luZ2xldG9uIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB1bCBsaSBsYWJlbCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdC1pdGVtLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHksXFxuaDMsIGg0LCBwLFxcbmJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgbGVnZW5kLFxcbi52aWV3LXByZWZzLWNvbnRhaW5lciB1bCBsaSwgXFxuLmNhcmQucHJvamVjdCAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi50YWxseSxcXG4udGFsbHkgc3BhbixcXG4uY3JlYXRlLFxcbi52aWV3LXByZWZzLWNvbnRhaW5lciB1bCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRhdGUsXFxuLmNhcmQuY2hlY2tsaXN0IC5kZXNjcmlwdGlvbiwgXFxuLmNhcmQuc2luZ2xldG9uIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuXFxuLmRhdGUsIGgxLCBoMiwgbGVnZW5kLFxcbi52aWV3LXByZWZzLWNvbnRhaW5lciB1bCBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYXJkIGg0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY2FyZC5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7Ozs7O0lBS0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztJQUlJLGVBQWU7QUFDbkI7O0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5LFxcbmgzLCBoNCwgcCxcXG5idXR0b24sIGlucHV0LCBzZWxlY3QsIGxlZ2VuZCxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgbGksIFxcbi5jYXJkLnByb2plY3QgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4udGFsbHksXFxuLnRhbGx5IHNwYW4sXFxuLmNyZWF0ZSxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgaDQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kYXRlLFxcbi5jYXJkLmNoZWNrbGlzdCAuZGVzY3JpcHRpb24sIFxcbi5jYXJkLnNpbmdsZXRvbiAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbi5kYXRlLCBoMSwgaDIsIGxlZ2VuZCxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2FyZCBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNhcmQucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWZmZWN0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VmZmVjdHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NwYWNpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGFjaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHlwby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZXZlbnRzID0gKCgpID0+IHtcbiAgICBsZXQgX2V2ZW50cyA9IHt9O1xuXG4gICAgLy8gc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2V2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH07XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNVQlNDUklCSU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgIH1cblxuICAgIC8vIHVuc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudE5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpO1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKChfZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSksIDEpO1xuICAgIH1cblxuICAgIC8vIHB1Ymxpc2ggZXZlbnQgd2l0aCBkYXRhXG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIC4uLmRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmRhdGEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBVQkxJU0hJTkcgdG8gJHtldmVudE5hbWV9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgZnVuY3Rpb24gdmlld0V2ZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coX2V2ZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICB1bnN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgdmlld0V2ZW50cyxcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcydcblxuLy8gJiBpbml0aWF0ZXMgZGVmYXVsdCBzdGF0ZVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSAoKCkgPT4ge1xuICAgIC8vIGRhdGFcbiAgICBsZXQgX3NhbXBsZVByb2plY3RWYWx1ZXMgPSBbWydwcm9qZWN0JywgJycsICdVbnNvcnRlZCcsIFwiVGhpcyBpcyB5b3VyIHRhc2tzJyBkZWZhdWx0IGxvY2F0aW9uLiBBbnkgdGFza3Mgd2l0aG91dCBhIHByb2plY3QgbGl2ZSBoZXJlLlwiLCAnLi4vc3JjL2ljb25zL3Byb2plY3QtaWNvbnMvMDAuc3ZnJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICBsZXQgX3NhbXBsZVRhc2tWYWx1ZXMgPSBbWyd0YXNrJywgJycsICdzaW5nbGV0b24nLCAnVGFzayAxJywgJ3RoaXMgaXMgYSBzYW1wbGUgdGFzaycsICcyMDAxLTAxLTAxJywgMywgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsndGFzaycsICcnLCAnc2luZ2xldG9uJywgJ1Rhc2sgMicsICd0aGlzIGlzICMyJywgJzIwMDItMDItMDInLCAyLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyd0YXNrJywgJycsICdjaGVja2xpc3QnLCAnVGFzayAzJywgJ3RoaXMgaXMgYSBjaGVja2xpc3QnLCAnMjAwMy0wMy0wMycsIDEsIDAsIFsnaXRlbSAxJywgJ2l0ZW0gMicsICdpdGVtIDMnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgIC8vIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBfY3JlYXRlRGVmYXVsdFByb2plY3QoX3NhbXBsZVByb2plY3RWYWx1ZXNbMF0pO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfc2FtcGxlVGFza1ZhbHVlcy5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIF9jcmVhdGVEZWZhdWx0VGFzayhfc2FtcGxlVGFza1ZhbHVlc1t0XSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0UHJvamVjdChwcm9qZWN0VmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCBwcm9qZWN0VmFsdWVzKTsgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0VGFzayh0YXNrVmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCB0YXNrVmFsdWVzKTsgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgICAvLyB1c2VkIGJ5IGluZGV4LmpzXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0U3RhdGU7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkaXYsIGgyLCBoNCwgdWwsIGxpLCBzcGFuLCBpbnB1dCwgbGFiZWwsIGltZyB9IGZyb20gJy4vZWxlbWVudHMnO1xuXG4vLyAmIG1hbmFnZXMgZGlzcGxheSBET00gPC0+IGxpYnJhcnkgY29tbXVuaWNhdGlvblxuLy8gJiBjb250YWlucyBmYWN0b3JpZXMgZm9yIGdlbmVyYXRpbmcgZGlzcGxheSBzZWN0aW9uIERPTSBlbGVtZW50cyAvIGdyb3VwaW5nc1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF90YXNrQ291bnRlciA9IDA7XG5cbiAgICAvLyBjYWNoZSBET01cbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tDb3VudFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMy50YWxseSBzcGFuJyk7XG5cbiAgICAvLyAqIGNyZWF0ZSB0YXNrIGxpc3RlbmVyIGluIF9yZW5kZXJUYXNrQ3JlYXRlQnV0dG9uKClcbiAgICAvLyAqIG1vZGlmeSAmIGRlbGV0ZSBjbGljayBsaXN0ZW5lcnMgaW4gX3JlbmRlci4uLkhlYWRlcigpXG4gICAgLy8gKiBjcmVhdGUgY2hlY2tsaXN0IGl0ZW0gbGlzdGVuZXIgaW4gX3JlbmRlckNoZWNrbGlzdERlc2NyaXRpb25Db250YWluZXIoKVxuXG4gICAgLy8gZGlzcGxheSBtYW5hZ2VyXG4gICAgZnVuY3Rpb24gX3VwZGF0ZURpc3BsYXkoaW5zdGFuY2VCdW5kbGUpIHtcbiAgICAgICAgbGV0IHZpZXdQcmVmZXJlbmNlID0gaW5zdGFuY2VCdW5kbGVbMF07XG4gICAgICAgIGxldCB2aWV3UHJlZmVyZW5jZUhlYWRlckNhcmQ7XG5cbiAgICAgICAgc3dpdGNoICh2aWV3UHJlZmVyZW5jZSkgeyAgIC8vICEgcmVkdWNlIHJlcGV0aXRpb25cbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKGluc3RhbmNlQnVuZGxlLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdEluc3RhbmNlID0gaW5zdGFuY2VCdW5kbGVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlbmRlclByb2plY3QocHJvamVjdEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlbmRlclRhc2soaW5zdGFuY2VCdW5kbGVbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB2aWV3UHJlZmVyZW5jZUhlYWRlckNhcmQgPSBfcmVuZGVyVmlld1ByZWZlcmVuY2VIZWFkZXJDYXJkKGluc3RhbmNlQnVuZGxlWzBdKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdQcmVmZXJlbmNlSGVhZGVyQ2FyZCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAoaW5zdGFuY2VCdW5kbGUubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZW5kZXJUYXNrKGluc3RhbmNlQnVuZGxlW2ldKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdXBkYXRlSXRlbShpdGVtSW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IGNhcmRJRDtcbiAgICAgICAgbGV0IGNhcmQ7XG5cbiAgICAgICAgc3dpdGNoKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgKGl0ZW1JbnN0YW5jZS50eXBlID09PSAncHJvamVjdCcpOlxuICAgICAgICAgICAgICAgIGNhcmRJRCA9IGBwcm9qZWN0XyR7aXRlbUluc3RhbmNlLmlkfWA7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRJRCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFZhbHVlcyA9IFtpdGVtSW5zdGFuY2UudGl0bGUsIGl0ZW1JbnN0YW5jZS5kZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChwcm9qZWN0VmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsdWVzWzFdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ3NpbmdsZXRvbicgfHwgaXRlbUluc3RhbmNlLnR5cGUgPT09ICdjaGVja2xpc3QnKTpcbiAgICAgICAgICAgICAgICBjYXJkSUQgPSBgdGFza18ke2l0ZW1JbnN0YW5jZS5pZH1gO1xuICAgICAgICAgICAgICAgIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSUQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCB0YXNrVmFsdWVzID0gW2l0ZW1JbnN0YW5jZS50aXRsZSwgaXRlbUluc3RhbmNlLmRlc2NyaXB0aW9uLCBpdGVtSW5zdGFuY2UuZHVlRGF0ZSwgaXRlbUluc3RhbmNlLnByaW9yaXR5LCBpdGVtSW5zdGFuY2UucHJvamVjdElEXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXNrVmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW1JbnN0YW5jZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NpbmdsZXRvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlIGg0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrVmFsdWVzWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5zcmMgPSBgLi4vc3JjL2ljb25zL3ByaW9yaXR5LSR7dGFza1ZhbHVlc1szXX0uc3ZnYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3RDYXJkSUQgPSBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJykuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0UmVmZXJlbmNlID0gY3VycmVudFByb2plY3RDYXJkSUQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFza1ZhbHVlc1s0XSAhPSBjdXJyZW50UHJvamVjdFJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVsZXRlVGFza0NhcmQoY2FyZElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChpdGVtSW5zdGFuY2VbMF0gPT09ICdjaGVja2JveCcpOiAgLy8gaXRlbUluc3RhbmNlIGJ1bmRsZWQgbWFudWFsbHkgaW4gbGlicmFyeS5qc1xuICAgICAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gaXRlbUluc3RhbmNlWzFdO1xuICAgICAgICAgICAgICAgIGxldCBjaGVja0lEID0gaXRlbUluc3RhbmNlWzJdO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbENvbnRlbnQgPSBpdGVtSW5zdGFuY2VbM107XG4gICAgXG4gICAgICAgICAgICAgICAgY2FyZElEID0gYHRhc2tfJHt0YXNrUmVmZXJlbmNlfV9fbGlfJHtjaGVja0lEfWA7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRJRCk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrTGFiZWwgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsQ29udGVudDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfY2xlYXJEaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHRhc2tDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCctJyk7XG4gICAgICAgIH07XG4gICAgICAgIF9yZW1vdmVUYXNrQ3JlYXRlQnV0dG9uKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVUYXNrQ2FyZChpZCkge1xuICAgICAgICBsZXQgdGFyZ2V0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXJnZXRUYXNrKVxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCctJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVDaGVja2xpc3RJdGVtKGlkKSB7XG4gICAgICAgIGxldCBsaUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0IyR7aWR9YCkucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHVsQ29udGFpbmVyID0gbGlDb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICAgICAgdWxDb250YWluZXIucmVtb3ZlQ2hpbGQobGlDb250YWluZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZmlsbFRhc2tDb3VudGVyKG9wZXJhdG9yKSB7XG4gICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIF90YXNrQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgX3Rhc2tDb3VudGVyLS07XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnRTcGFuLnRleHRDb250ZW50ID0gX3Rhc2tDb3VudGVyO1xuICAgIH1cbiAgICBcbiAgICAvLyBwcm9qZWN0IGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBpZiAocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICAgICAgX2NsZWFyRGlzcGxheSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjYXJkSUQgPSAnI3Byb2plY3RfJyArIHByb2plY3QuaWQ7XG4gICAgICAgIGxldCBwcm9qZWN0Q2FyZCA9IGRpdignJywgJy5jYXJkJywgJy5wcm9qZWN0JywgY2FyZElEKTtcbiAgICAgICAgbGV0IHByb2plY3RIZWFkZXIgPSBfcmVuZGVyUHJvamVjdEhlYWRlcihwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LmlkLCBwcm9qZWN0LnRpdGxlKTtcblxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cbiAgICAgICAgX3JlbmRlclRhc2tDcmVhdGVCdXR0b24oKTtcblxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCcnKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclByb2plY3RIZWFkZXIgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgaWQsIHRpdGxlKSB7XG4gICAgICAgIGxldCBkaXZIZWFkZXIgPSBkaXYoJycsICcuaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGgyVGl0bGUgPSBoMih0aXRsZSwgJy50aXRsZScpO1xuICAgICAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZGl2KGRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmQoaDJUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgaWYgKGlkICE9PSAwKSB7XG4gICAgICAgICAgICBsZXQgZGl2UHJvamVjdENvbnRyb2xzID0gZGl2KCcnLCAnLnByb2plY3QtY29udHJvbHMnKTtcblxuICAgICAgICAgICAgbGV0IGltZ01vZGlmeSA9IGltZygnc3JjL2ljb25zL2VkaXQuc3ZnJywgJ21vZGlmeSBwcm9qZWN0JywgJy5wcm9qZWN0JywgJy5tb2RpZnknKTtcbiAgICAgICAgICAgIC8vICogcHJvamVjdCBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICAgICAgaW1nTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tNb2RpZnlJdGVtJywgZSk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBpbWdEZWxldGUgPSBpbWcoJ3NyYy9pY29ucy9kZWxldGUuc3ZnJywgJ2RlbGV0ZSBwcm9qZWN0JywgJy5kZWxldGUnKTtcbiAgICAgICAgICAgIGltZ0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQ7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlUHJvamVjdCcsIGNhcmRJRCk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRpdlByb2plY3RDb250cm9scy5hcHBlbmQoaW1nTW9kaWZ5LCBpbWdEZWxldGUpO1xuICAgICAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGRpdlByb2plY3RDb250cm9scyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyVmlld1ByZWZlcmVuY2VIZWFkZXJDYXJkID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgbGV0IHZpZXdDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLnNvcnQtZHVlJyk7XG4gICAgICAgIGxldCB2aWV3SGVhZGVyID0gaDIodGl0bGUsICcnKTtcbiAgICAgICAgdmlld0NhcmQuYXBwZW5kQ2hpbGQodmlld0hlYWRlcik7XG5cbiAgICAgICAgcmV0dXJuIHZpZXdDYXJkO1xuICAgIH1cblxuICAgIC8vIHRhc2sgZmFjdG9yaWVzXG4gICAgY29uc3QgX3JlbmRlclRhc2tDcmVhdGVCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGRpdkNyZWF0ZSA9IGRpdignKycsICcuY3JlYXRlJyk7XG5cbiAgICAgICAgZGl2Q3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrQ3JlYXRlSXRlbScsICd0YXNrJyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0YXNrQ29udHJvbHMgPSB0YXNrQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICB0YXNrQ29udHJvbHMuYXBwZW5kKGRpdkNyZWF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW1vdmVUYXNrQ3JlYXRlQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0YXNrQ29udHJvbHMgPSB0YXNrQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgY29udHJvbHNMZW5ndGggPSB0YXNrQ29udHJvbHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgbGFzdENvbnRyb2wgPSB0YXNrQ29udHJvbHMuY2hpbGRyZW5bY29udHJvbHNMZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAobGFzdENvbnRyb2wuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcmVhdGUnKSkge1xuICAgICAgICAgICAgdGFza0NvbnRyb2xzLnJlbW92ZUNoaWxkKGxhc3RDb250cm9sKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclRhc2sgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGxldCBjYXJkSUQgPSAndGFza18nICsgdGFzay5pZDtcbiAgICAgICAgbGV0IHRhc2tDYXJkO1xuXG4gICAgICAgIHN3aXRjaCAodGFzay50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzaW5nbGV0b24nOlxuICAgICAgICAgICAgICAgIHRhc2tDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLnNpbmdsZXRvbicsIGAjJHtjYXJkSUR9YClcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xldG9uQ2hlY2ttYXJrID0gaW5wdXQoJ2NoZWNrYm94JywgJycsICcnLCB0YXNrLmlkLCAnJyk7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZXRvbkNhcmRDb250ZW50ID0gX3JlbmRlclNpbmdsZXRvbkNvbnRlbnQodGFzay5pZCwgdGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmQoc2luZ2xldG9uQ2hlY2ttYXJrLCBzaW5nbGV0b25DYXJkQ29udGVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICAgICAgICAgIHRhc2tDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLmNoZWNrbGlzdCcsIGAjJHtjYXJkSUR9YCwgYC5wcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9YCk7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdENhcmRDb250ZW50ID0gX3JlbmRlckNoZWNrbGlzdENhcmRDb250ZW50cyh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtcyA9IF9yZW5kZXJDaGVja2JveENvbnRhaW5lcihjYXJkSUQsIHRhc2suaXRlbXMpO1xuICAgICAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZChjaGVja2xpc3RDYXJkQ29udGVudCwgY2hlY2tsaXN0SXRlbXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIF9maWxsVGFza0NvdW50ZXIoJysnKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclNpbmdsZXRvbkNvbnRlbnQgPSBmdW5jdGlvbihpZCwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRpdignJywgJy5jb250ZW50Jyk7XG5cbiAgICAgICAgbGV0IHRhc2tIZWFkZXIgPSBfcmVuZGVyU2luZ2xldG9uSGVhZGVyKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZGl2KGRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQodGFza0hlYWRlciwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJTaW5nbGV0b25IZWFkZXIgPSBmdW5jdGlvbihpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBkaXZIZWFkZXIgPSBkaXYoJycsICcuaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGxhYmVsQ2hlY2ttYXJrVGl0bGUgPSBsYWJlbCgnJywgaWQsICcudGl0bGUnKTtcbiAgICAgICAgbGV0IGg0VGl0bGVDb250ZW50ID0gaDQodGl0bGUsICcnKTtcbiAgICAgICAgbGFiZWxDaGVja21hcmtUaXRsZS5hcHBlbmRDaGlsZChoNFRpdGxlQ29udGVudCk7XG5cbiAgICAgICAgbGV0IGltZ0FsdDtcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdubyBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2xvdyBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1nQWx0ID0gJ21lZGl1bSBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2hpZ2ggcHJpb3JpdHknO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbWdQcmlvcml0eSA9IGltZyhgc3JjL2ljb25zL3ByaW9yaXR5LSR7cHJpb3JpdHl9LnN2Z2AsIGltZ0FsdCwgJy5wcmlvcml0eScpO1xuXG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IHNwYW4oZHVlRGF0ZSwgJy5kYXRlJyk7XG4gICAgICAgIGxldCBpbWdNb2RpZnkgPSBpbWcoJ3NyYy9pY29ucy9lZGl0LnN2ZycsICdtb2RpZnkgdGFzaycsICcudGFzaycsICcubW9kaWZ5Jyk7XG4gICAgICAgIGxldCBpbWdEZWxldGUgPSBpbWcoJ3NyYy9pY29ucy9kZWxldGUuc3ZnJywgJ2RlbGV0ZSB0YXNrJywgJy5kZWxldGUnKTtcblxuICAgICAgICAvLyAqIHNpbmdsZXRvbiBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICBpbWdNb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgfSk7XG4gICAgICAgIGltZ0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICAgICAgbGV0IHRhc2tDYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlVGFzaycsIHRhc2tDYXJkSUQpOyAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kKGxhYmVsQ2hlY2ttYXJrVGl0bGUsIHNwYW5EYXRlLCBpbWdQcmlvcml0eSwgaW1nTW9kaWZ5LCBpbWdEZWxldGUpO1xuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tsaXN0Q2FyZENvbnRlbnRzID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRpdignJywgJy5jb250ZW50Jyk7XG4gICAgICAgIGxldCBjaGVja2xpc3RIZWFkZXIgPSBfcmVuZGVyQ2hlY2tsaXN0SGVhZGVyKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGxldCBjaGVja2xpc3REZXNjcmlwdGlvbiA9IF9yZW5kZXJDaGVja2xpc3RTdWJoZWFkZXIoZGVzY3JpcHRpb24pO1xuICAgICAgICBcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQoY2hlY2tsaXN0SGVhZGVyLCBjaGVja2xpc3REZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBkaXZDb250ZW50O1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tsaXN0SGVhZGVyID0gZnVuY3Rpb24odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBkaXZIZWFkZXIgPSBkaXYoJycsICcuaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGg0VGl0bGUgPSBoNCh0aXRsZSwgJy50aXRsZScpO1xuICAgICAgICBsZXQgc3BhbkRhdGUgPSBzcGFuKGR1ZURhdGUsICcuZGF0ZScpO1xuXG4gICAgICAgIGxldCBpbWdBbHQ7XG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpbWdBbHQgPSAnbm8gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdsb3cgcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdtZWRpdW0gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdoaWdoIHByaW9yaXR5JztcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1nUHJpb3JpdHkgPSBpbWcoYHNyYy9pY29ucy9wcmlvcml0eS0ke3ByaW9yaXR5fS5zdmdgLCBpbWdBbHQsICcucHJpb3JpdHknKTtcblxuICAgICAgICBsZXQgaW1nTW9kaWZ5ID0gaW1nKCdzcmMvaWNvbnMvZWRpdC5zdmcnLCAnbW9kaWZ5IHRhc2snLCAnLnRhc2snLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgaW1nRGVsZXRlID0gaW1nKCdzcmMvaWNvbnMvZGVsZXRlLnN2ZycsICdkZWxldGUgdGFzaycsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBjaGVja2xpc3QgbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgaW1nTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBpbWdEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQ7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tEZWxldGVUYXNrJywgY2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZChoNFRpdGxlLCBzcGFuRGF0ZSwgaW1nUHJpb3JpdHksIGltZ01vZGlmeSwgaW1nRGVsZXRlKTtcbiAgICAgICAgcmV0dXJuIGRpdkhlYWRlcjtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdFN1YmhlYWRlciA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBkaXZDb250YWluZXIgPSBkaXYoJycsICcuZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGl2RGVzY3JpcHRpb24gPSBkaXYoZGVzY3JpcHRpb24sICcuZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IHNwYW5DcmVhdGUgPSBkaXYoJysnLCAnLmNyZWF0ZScpO1xuXG4gICAgICAgIC8vICogY2hlY2tsaXN0IGl0ZW0gY3JlYXRlIGV2ZW50XG4gICAgICAgIHNwYW5DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICBsZXQgZm9ybVJlZmVyZW5jZXMgPSBbJ2NoZWNrYm94JywgdGFza1JlZmVyZW5jZV07XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tDcmVhdGVJdGVtJywgZm9ybVJlZmVyZW5jZXMpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2Q29udGFpbmVyLmFwcGVuZChkaXZEZXNjcmlwdGlvbiwgc3BhbkNyZWF0ZSk7XG4gICAgICAgIHJldHVybiBkaXZDb250YWluZXI7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2JveENvbnRhaW5lciA9IGZ1bmN0aW9uKHRhc2tDYXJkSUQsIGl0ZW1zKSB7XG4gICAgICAgIGxldCB1bEl0ZW0gPSB1bCgnJywgJy5jaGVja2JveGVzJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoaXRlbXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBfcmVuZGVyQ2hlY2tib3godWxJdGVtLCB0YXNrQ2FyZElELCBpdGVtc1tpXSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdWxJdGVtO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tib3ggPSBmdW5jdGlvbihjaGVja2xpc3RDb250YWluZXIsIHRhc2tDYXJkSUQsIGNoZWNrSW5mbykge1xuICAgICAgICBsZXQgY2hlY2tJRCA9IGNoZWNrSW5mb1swXTtcbiAgICAgICAgbGV0IGNoZWNrQ29udGVudCA9IGNoZWNrSW5mb1sxXTtcblxuICAgICAgICBsZXQgbGlDYXJkSUQgPSBgIyR7dGFza0NhcmRJRH1fX2xpXyR7Y2hlY2tJRH1gO1xuICAgICAgICBsZXQgbGlDYXJkID0gbGkoJycsICcuY2FyZCcsIGxpQ2FyZElEKTtcblxuICAgICAgICBsZXQgY2hlY2tib3hJRCA9IGAke3Rhc2tDYXJkSUR9X19jaGVja2JveF8ke2NoZWNrSUR9YDsgIC8vICMgbm90IG5lZWRlZCB2dlxuICAgICAgICBsZXQgY2hlY2tib3ggPSBpbnB1dCgnY2hlY2tib3gnLCAnJywgJycsIGNoZWNrYm94SUQsICcnKTsgIC8vIHNldHMgSUQgZGlyZWN0bHkgdmlhIGRlZmF1bHQgb2JqZWN0IHByb3RvdHlwZSBtZXRob2RzXG4gICAgICAgIC8vICEgc2V0IHByaW9yaXR5IGNsYXNzIGNvbG9yXG4gICAgICAgIGxldCBsYWJlbENoZWNrYm94ID0gbGFiZWwoY2hlY2tDb250ZW50LCBjaGVja2JveElELCAnJyk7XG4gICAgICAgIGxldCBjaGVja2JveENvbnRyb2xzID0gX3JlbmRlckNoZWNrYm94Q29udHJvbHMoY2hlY2tib3hJRCk7XG5cbiAgICAgICAgbGlDYXJkLmFwcGVuZChjaGVja2JveCwgbGFiZWxDaGVja2JveCwgY2hlY2tib3hDb250cm9scyk7XG4gICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaUNhcmQpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyTmV3Q2hlY2tib3ggPSBmdW5jdGlvbihjaGVja2xpc3RJbnN0YW5jZSkge1xuICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGNoZWNrbGlzdEluc3RhbmNlWzFdXG4gICAgICAgIGxldCB0YXNrQ2FyZElEID0gYHRhc2tfJHt0YXNrUmVmZXJlbmNlfWA7XG4gICAgICAgIGxldCB1bFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdiMke3Rhc2tDYXJkSUR9IHVsYCk7XG5cbiAgICAgICAgbGV0IGNoZWNrUmVmZXJlbmNlID0gY2hlY2tsaXN0SW5zdGFuY2VbMl07XG4gICAgICAgIGxldCBjaGVja0NvbnRlbnQgPSBjaGVja2xpc3RJbnN0YW5jZVszXTtcblxuICAgICAgICBfcmVuZGVyQ2hlY2tib3godWxUYXJnZXQsIHRhc2tDYXJkSUQsIFtjaGVja1JlZmVyZW5jZSwgY2hlY2tDb250ZW50XSk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2JveENvbnRyb2xzID0gZnVuY3Rpb24oY2hlY2tJRCkge1xuICAgICAgICBsZXQgZGl2Q29udHJvbHMgPSBkaXYoJycsICcuY2hlY2tsaXN0LWl0ZW0tY29udHJvbHMnKTtcblxuICAgICAgICBsZXQgaW1nTW9kaWZ5ID0gaW1nKCdzcmMvaWNvbnMvZWRpdC5zdmcnLCAnbW9kaWZ5IHRhc2snLCAnLnRhc2snLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgaW1nRGVsZXRlID0gaW1nKCdzcmMvaWNvbnMvZGVsZXRlLnN2ZycsICdkZWxldGUgdGFzaycsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBjaGVja2xpc3QgaXRlbSBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICBpbWdNb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBpbWdEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tEZWxldGVDaGVja2xpc3RJdGVtJywgY2hlY2tJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZDb250cm9scy5hcHBlbmQoaW1nTW9kaWZ5LCBpbWdEZWxldGUpO1xuXG4gICAgICAgIHJldHVybiBkaXZDb250cm9scztcbiAgICB9XG5cblxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndXBkYXRlRGlzcGxheVZpZXcnLCBfdXBkYXRlRGlzcGxheSk7ICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfYnVuZGxlSW5zdGFuY2VzKCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdwcm9qZWN0Q3JlYXRlZCcsIF9yZW5kZXJQcm9qZWN0KSAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndGFza0NyZWF0ZWQnLCBfcmVuZGVyVGFzayk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVUYXNrKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2hlY2tib3hDcmVhdGVkJywgX3JlbmRlck5ld0NoZWNrYm94KTsgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfY3JlYXRlQ2hlY2tib3goKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2l0ZW1Nb2RpZmllZCcsIF91cGRhdGVJdGVtKTsgICAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX21vZGlmeS4uLigpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVtb3ZlUHJvamVjdEZyb21TZWN0aW9uJywgX2NsZWFyRGlzcGxheSkgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2RlbGV0ZVByb2plY3QoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVUYXNrRnJvbURpc3BsYXknLCBfZGVsZXRlVGFza0NhcmQpOyAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlVGFzaygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZUNoZWNrbGlzdEl0ZW1Gcm9tRGlzcGxheScsIF9kZWxldGVDaGVja2xpc3RJdGVtKSAgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlQ2hlY2tsaXN0SXRlbSgpKVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiLCIvLyAmIGZhY3RvcnkgY2xhc3MgZm9yIGJhc2UtbGV2ZWwgRE9NIGVsZW1lbnRzXG5cbi8vIGRhdGFcbmxldCBfYXR0cmlidXRlcyA9IFtdO1xubGV0IGVsZW1lbnQ7XG5cbi8vIGJhc2ljIGhlbHBlciBmYWN0b3JpZXNcbmNvbnN0IGRpdiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IHNwYW4gPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgcCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBoMiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgaDQgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IHVsID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBsaSA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgaW5wdXQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBwbGFjZWhvbGRlciwgaWQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgIGVsZW1lbnQuaWQgPSBTdHJpbmcoaWQpO1xuICAgIGVsZW1lbnQubmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IFN0cmluZyhpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IHNlbGVjdCA9IGZ1bmN0aW9uKG5hbWUsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC5uYW1lID0gbmFtZTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IG9wdGlvbiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZW50KSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGxhYmVsID0gZnVuY3Rpb24oY29udGVudCwgZm9yUmVmZXJlbmNlLCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC5mb3IgPSBTdHJpbmcoZm9yUmVmZXJlbmNlKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgbGVnZW5kID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgaW1nID0gZnVuY3Rpb24odXJsLCBhbHQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC5zcmMgPSBgLi4vJHt1cmx9YDtcbiAgICBlbGVtZW50LmFsdCA9IGFsdDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGF0dHJpYnV0ZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzW2ldWzBdID09PSAnLicpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcjJykge1xuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKTtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG5leHBvcnQgeyBkaXYgYXMgZGVmYXVsdCwgc3BhbiwgcCwgaDIsIGg0LCB1bCwgbGksIGlucHV0LCBzZWxlY3QsIG9wdGlvbiwgbGFiZWwsIGxlZ2VuZCwgaW1nIH07IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkaXYsIHNwYW4sIHAsIGlucHV0LCBsYWJlbCwgc2VsZWN0LCBvcHRpb24sIGxlZ2VuZCwgaW1nIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8vICYgbWFuYWdlcyBkaXNwbGF5L3NpZGViYXIgc2VjdGlvbiBET01zIC0+IGZvcm0gc2VjdGlvbiBET01zIDwtPiBsaWJyYXJ5IGNvbW11bmljYXRpb25cbi8vICYgY29udGFpbnMgZmFjdG9yaWVzIGZvciBnZW5lcmF0aW5nIGZvcm0gc2VjdGlvbiBET00gZWxlbWVudHMgLyBncm91cGluZ3NcblxuY29uc3QgZm9ybXMgPSAoKCkgPT4ge1xuICAgIC8vIGxldCBfY3VycmVudEZvcm07XG4gICAgbGV0IF9jdXJyZW50Rm9ybVR5cGU7XG4gICAgbGV0IF9jdXJyZW50UHJvamVjdDtcblxuICAgIC8vIGNhY2hlIERPTVxuICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgbGV0IGZvcm1GaWVsZHNldCA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKTtcbiAgICBsZXQgZm9ybUlucHV0czsgLy8gKiBxdWVyaWVkIGFmdGVyIGZvcm0gZWxlbWVudHMgYXJlIHJlbmRlcmVkXG4gICAgbGV0IHByb2plY3RJY29uczsgLy8gKiBxdWVyaWVkIGFmdGVyIHByb2plY3QgZm9ybSBpcyByZW5kZXJlZFxuICAgIGxldCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLmNvbmZpcm0nKTtcbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLmNhbmNlbCcpO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gICAgY29uZmlybUJ1dHRvbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBfY29uZmlybUlucHV0KGUpO1xuICAgIH0pKTtcbiAgICBjYW5jZWxCdXR0b24uZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBfY2FuY2VsSW5wdXQoKTtcbiAgICB9KSk7XG5cbiAgICAvLyBmb3JtIG1hbmFnZXJzXG4gICAgZnVuY3Rpb24gX29wZW5DcmVhdGVGb3JtKGZvcm1SZWZlcmVuY2UpIHtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgKCh0eXBlb2YgZm9ybVJlZmVyZW5jZSkgPT09ICdvYmplY3QnKTogICAvLyAqIHN0b3JlcyB0YXNrIHJlZmVyZW5jZSB3aGVuIGNyZWF0aW5nIG5ldyBjaGVja2xpc3QgaXRlbVxuICAgICAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gZm9ybVJlZmVyZW5jZVsxXTtcbiAgICAgICAgICAgICAgICBfc2V0Rm9ybVJlZmVyZW5jZXMoZm9ybVJlZmVyZW5jZVswXSk7XG4gICAgICAgICAgICAgICAgX3JlbmRlckNoZWNrYm94Rm9ybSh0YXNrUmVmZXJlbmNlLCAnQ3JlYXRlIE5ldyBDaGVja2xpc3QgSXRlbScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoKHR5cGVvZiBmb3JtUmVmZXJlbmNlKSA9PT0gJ3N0cmluZycpOlxuICAgICAgICAgICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jdXJyZW50Rm9ybVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVuZGVyUHJvamVjdEZvcm0oJ0NyZWF0ZSBOZXcgUHJvamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlbmRlclRhc2tGb3JtKCdDcmVhdGUgTmV3IFRhc2snKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIF9zaG93Rm9ybSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfb3Blbk1vZGlmeUluc3RhbmNlUXVlcnkoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldEl0ZW1SZWZlcmVuY2VzO1xuXG4gICAgICAgIGxldCBpc0NoZWNrYm94O1xuICAgICAgICBzd2l0Y2godHJ1ZSkgIHtcbiAgICAgICAgICAgIGNhc2UgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsaS5jYXJkJykgPT09IG51bGwpOlxuICAgICAgICAgICAgICAgIGlzQ2hlY2tib3ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsaS5jYXJkJykgIT09IG51bGwpOlxuICAgICAgICAgICAgICAgIGlzQ2hlY2tib3ggPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaCAoaXNDaGVja2JveCkge1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICB0YXJnZXRJdGVtUmVmZXJlbmNlcyA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1UeXBlUmVmZXJlbmNlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94UmVmZXJlbmNlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKS5pZC5zcGxpdCgnX18nKVsxXS5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgICAgIHRhcmdldEl0ZW1SZWZlcmVuY2VzID0gW2Zvcm1UeXBlUmVmZXJlbmNlLCBbdGFza1JlZmVyZW5jZSwgY2hlY2tib3hSZWZlcmVuY2VdXTsgLy8gKiB0YXNrUmVmZXJlbmNlICYgY2hlY2tib3hSZWZlcmVuY2UgbXVzdCBiZSBidW5kbGVkLCBzcGxpdCBpbiBsaWJyYXJ5LmpzXG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5Nb2RpZnlJbnN0YW5jZVF1ZXJ5JywgdGFyZ2V0SXRlbVJlZmVyZW5jZXMpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9vcGVuTW9kaWZ5Rm9ybShpdGVtVmFsdWVzKSB7XG4gICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhpdGVtVmFsdWVzWzBdKTtcbiAgICAgICAgX2ZpbGxGb3JtVmFsdWVzKGl0ZW1WYWx1ZXMpO1xuICAgICAgICBfc2hvd0Zvcm0oKTtcbiAgICB9XG5cbiAgICAvLyBmb3JtIGFjdGlvbnNcbiAgICBmdW5jdGlvbiBfY29uZmlybUlucHV0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhfY3VycmVudEZvcm1UeXBlKTtcbiAgICAgICAgc3dpdGNoIChfY3VycmVudEZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUtY29uZmlybSc6XG4gICAgICAgICAgICAgICAgX2hpZGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RDYXJkSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucHJvamVjdC5jYXJkJykuaWQ7XG4gICAgICAgICAgICAgICAgX2NsZWFyRm9ybVZhbHVlcygpO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtRGVsZXRlUHJvamVjdCcsIHByb2plY3RDYXJkSUQpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXNrIG9yIHByb2plY3QnKVxuICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gX3ZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oaWRlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1WYWx1ZXMgPSBfYnVuZGxlRm9ybVZhbHVlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2ZpbmRFcnJvcnMoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGVhckZvcm1WYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCBmb3JtVmFsdWVzKTsgICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9maW5kRXJyb3JzKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NhbmNlbElucHV0KCkge1xuICAgICAgICBfaGlkZUZvcm0oKTtcbiAgICAgICAgX2NsZWFyRm9ybVZhbHVlcygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2hvd0RlbGV0ZVByb2plY3RDb25maXJtYXRpb24oKSB7XG4gICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcygnZGVsZXRlLWNvbmZpcm0nKTtcbiAgICAgICAgX3JlbmRlckRlbGV0ZUNvbmZpcm1hdGlvbkZvcm0oKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyIG1ldGhvZHMgIFxuICAgIGZ1bmN0aW9uIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlKSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9ICdwcm9qZWN0LWZvcm0nXG4gICAgICAgICAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICdwcm9qZWN0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAndGFzay1mb3JtJ1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAndGFzayc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9ICdjaGVja2JveC1mb3JtJ1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlLWNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAnZGVsZXRlLWNvbmZpcm0nO1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAnZGVsZXRlLWNvbmZpcm0nO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHByb2plY3QuaWQpXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2cocHJvamVjdFsxXSk7XG5cbiAgICAgICAgaWYgKHByb2plY3QuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgX2N1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC5pZDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3Nob3dGb3JtKCkge1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2hpZGVGb3JtKCkge1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2ZpbGxGb3JtVmFsdWVzKHZhbHVlcykge1xuICAgICAgICBzd2l0Y2ggKF9jdXJyZW50Rm9ybVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIF9yZW5kZXJQcm9qZWN0Rm9ybSgnRWRpdCBQcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZm9ybUlucHV0cy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0c1tpXS52YWx1ZSA9IHZhbHVlc1tpICsgMV07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjeWNsZSB0aHJvdWdoIHByb2plY3RJY29uc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHByb2plY3RJY29ucy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgcHJvamVjdEljb24gc3JjIGluY2x1ZGVzIHNlbGVjdGVkIGljb24gcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0SWNvbnNbaV0uc3JjLmluY2x1ZGVzKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SWNvbnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHNlbGVjdGVkIGljb24gY2xhc3MgdG8gcHJvamVjdEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIF91cGRhdGVJY29uU2VsZWN0aW9uKHByb2plY3RJY29uc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIF9yZW5kZXJUYXNrRm9ybSgnRWRpdCBUYXNrJyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAodmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRzW2kgLSAxXS52YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlc1syXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzaW5nbGV0b24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0c1sxXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0c1syXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX2Rpc2FibGVUYXNrVHlwZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZVJlZmVyZW5jZXMgPSBgJHt2YWx1ZXNbMV19XyR7dmFsdWVzWzJdfWA7ICAgLy8gKiBwYXNzZWQgdG8gbGlicmFyeSBmb3IgaW5kZXhpbmcgY29ycmVjdCB0YXNrICYmIGNoZWNrbGlzdCBpdGVtXG4gICAgICAgICAgICAgICAgX3JlbmRlckNoZWNrYm94Rm9ybShpbnN0YW5jZVJlZmVyZW5jZXMsICdFZGl0IENoZWNrbGlzdCBJdGVtJyk7XG4gICAgICAgICAgICAgICAgZm9ybUlucHV0c1sxXS52YWx1ZSA9IHZhbHVlc1szXTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2J1bmRsZUZvcm1WYWx1ZXMoKSB7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coX2N1cnJlbnRGb3JtVHlwZSk7XG4gICAgICAgIGxldCBmb3JtVmFsdWVzID0gW107XG5cbiAgICAgICAgc3dpdGNoIChfY3VycmVudEZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmb3JtSW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChwcm9qZWN0SWNvbnMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0SWNvbnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLXNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGxpdEltZ1NyYyA9ICBwcm9qZWN0SWNvbnNbaV0uc3JjLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRJY29uUmVmZXJlbmNlID0gc3BsaXRJbWdTcmNbc3BsaXRJbWdTcmMubGVuZ3RoIC0gMV0uc3BsaXQoJy4nKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChzZWxlY3RlZEljb25SZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goJ3Rhc2snKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmb3JtSW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCAoKGkgPiAyKSAmJiAoaSA8IDgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKGZvcm1JbnB1dHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMSB8fCBpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUlucHV0c1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKGZvcm1JbnB1dHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaCgnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1swXS52YWx1ZS5zcGxpdCgnXycpWzBdKTtcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1swXS52YWx1ZS5zcGxpdCgnXycpWzFdKTtcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1sxXS52YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jbGVhckZvcm1WYWx1ZXMoKSB7XG4gICAgICAgIF9yZW1vdmVGb3JtRWxlbWVudHMoKTtcbiAgICAgICAgaWYgKF9jdXJyZW50Rm9ybVR5cGUgIT09ICdkZWxldGUtY29uZmlybScpIHtcbiAgICAgICAgICAgIGlmIChmb3JtSW5wdXRzWzBdLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3JtSW5wdXRzWzBdLnZhbHVlID0gJyc7XG4gICAgICAgIH07XG4gICAgICAgIGZvcm1JbnB1dHMgPSAnJztcbiAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICcnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVtb3ZlRm9ybUVsZW1lbnRzKCkge1xuICAgICAgICBsZXQgZmllbGRzZXRDaGlsZHJlbkxlbmd0aCA9IGZvcm1GaWVsZHNldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZpZWxkc2V0Q2hpbGRyZW5MZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIHdoaWxlIChmb3JtRmllbGRzZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGZvcm1GaWVsZHNldC5yZW1vdmVDaGlsZChmb3JtRmllbGRzZXQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kaXNhYmxlVGFza1R5cGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIGZvcm1JbnB1dHNbMV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBmb3JtSW5wdXRzWzJdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3ZhbGlkYXRlRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignZm9ybScpLmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2ZpbmRFcnJvcnMocHJvY2Vzcykge1xuICAgICAgICBsZXQgdGl0bGVJbnB1dDtcbiAgICAgICAgZm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5pZC5zcGxpdCgnLScpWzFdID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3dpdGNoIChwcm9jZXNzKSB7XG4gICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgICAgICBfc2hvd0Vycm9yTWVzc2FnZSh0aXRsZUlucHV0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgIF9oaWRlRXJyb3JNZXNzYWdlKHRpdGxlSW5wdXQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2hvd0Vycm9yTWVzc2FnZShpbnB1dCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsYWJlbC5sYXN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfaGlkZUVycm9yTWVzc2FnZShpbnB1dCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsYWJlbC5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdXBkYXRlSWNvblNlbGVjdGlvbih0YXJnZXRJY29uKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHByb2plY3RJY29ucy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0SWNvbnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLXNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWNvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaWNvbi1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICB0YXJnZXRJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24tc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JtIGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1UaXRsZSkge1xuICAgICAgICBsZXQgZmllbGRzZXRMZWdlbmQgPSBsZWdlbmQoZm9ybVRpdGxlLCAnJyk7XG5cbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBzcGFuUmVxdWlyZWRCYWRnZSA9IHNwYW4oJyonLCAnLnJlcXVpcmVkLWJhZGdlJyk7XG4gICAgICAgIGxldCBzcGFuRXJyb3JNZXNzYWdlID0gc3BhbigncGxlYXNlIGluY2x1ZGUgYSB0aXRsZScsICcuZXJyb3ItbWVzc2FnZScsICcuaGlkZScpO1xuICAgICAgICBsZXQgbGFiZWxUaXRsZSA9IGxhYmVsKCdUaXRsZSAnLCAncHJvamVjdC10aXRsZScpO1xuICAgICAgICBsYWJlbFRpdGxlLmFwcGVuZChzcGFuUmVxdWlyZWRCYWRnZSwgc3BhbkVycm9yTWVzc2FnZSk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gaW5wdXQoJ3RleHQnLCAncHJvamVjdC10aXRsZScsICd0aXRsZScsICdwcm9qZWN0LXRpdGxlJywgJycpO1xuICAgICAgICBpbnB1dFRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgaW5wdXRUaXRsZS5hcmlhUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmQobGFiZWxUaXRsZSwgaW5wdXRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBsYWJlbERlc2NyaXB0aW9uID0gbGFiZWwoJ0Rlc2NyaXB0aW9uJywgJy5wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gaW5wdXQoJ3RleHQnLCAncHJvamVjdC1kZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicsICdwcm9qZWN0LWRlc2NyaXB0aW9uJywgJycpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQobGFiZWxEZXNjcmlwdGlvbiwgaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IGljb25zRGl2ID0gZGl2KCcnLCAnLmxhYmVsLWljb25zLWdyb3VwJyk7XG4gICAgICAgIGxldCBsYWJlbEljb25zID0gbGFiZWwoJ0Nob29zZSBBbiBJY29uJywgJycsICcnKTtcbiAgICAgICAgbGV0IGljb25zQ29udGFpbmVyID0gZGl2KCcnLCAnLnByb2plY3QtaWNvbnMtY29udGFpbmVyJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgICAgICAgICAgbGV0IGltZ1JlZjtcbiAgICAgICAgICAgIGxldCBpbWdBbHQ7XG4gICAgICAgICAgICBsZXQgaW1nQ2xhc3MgPSAnJztcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaW1nUmVmID0gJzAwJztcbiAgICAgICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2ZvbGRlcic7XG4gICAgICAgICAgICAgICAgICAgIGltZ0NsYXNzID0gJy5pY29uLXNlbGVjdGVkJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpbWdSZWYgPSAnMDEnO1xuICAgICAgICAgICAgICAgICAgICBpbWdBbHQgPSAnc3Rhcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaW1nUmVmID0gJzAyJztcbiAgICAgICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2hhbW1lciBhbmQgd3JlbmNoJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBpbWdSZWYgPSAnMDMnO1xuICAgICAgICAgICAgICAgICAgICBpbWdBbHQgPSAnZm9yayBhbmQgc29kYSBjdXAnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGltZ1JlZiA9ICcwNCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdkb2xsYXIgYmlsbHMnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGltZ1JlZiA9ICcwNSc7XG4gICAgICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdjaXR5IGJ1aWxkaW5ncyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgaW1nUmVmID0gJzA2JztcbiAgICAgICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2hvdXNlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBpbWdSZWYgPSAnMDcnO1xuICAgICAgICAgICAgICAgICAgICBpbWdBbHQgPSAnZ2lmdCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgaW1nUmVmID0gJzA4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2Nhcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgaW1nUmVmID0gJzA5JztcbiAgICAgICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2FpcnBsYW5lJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgaW1nUmVmID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2JhYnkgY2FycmlhZ2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICBpbWdSZWYgPSAnMTEnO1xuICAgICAgICAgICAgICAgICAgICBpbWdBbHQgPSAnZmxvd2VyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgaW1nUmVmID0gJzEyJztcbiAgICAgICAgICAgICAgICAgICAgaW1nQWx0ID0gJ3BhbG0gdHJlZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIGltZ1JlZiA9ICcxMyc7XG4gICAgICAgICAgICAgICAgICAgIGltZ0FsdCA9ICd2b2xsZXkgYmFsbCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgIGltZ1JlZiA9ICcxNCc7XG4gICAgICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdiYWNrcGFjayc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IGltZ0ljb24gPSBpbWcoYHNyYy9pY29ucy9wcm9qZWN0LWljb25zLyR7aW1nUmVmfS5zdmdgLCBpbWdBbHQsIGltZ0NsYXNzKTtcbiAgICAgICAgICAgIGltZ0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIF91cGRhdGVJY29uU2VsZWN0aW9uKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpY29uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdJY29uKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWNvbnNEaXYuYXBwZW5kKGxhYmVsSWNvbnMsIGljb25zQ29udGFpbmVyKTtcblxuICAgICAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGZpZWxkc2V0TGVnZW5kLCB0aXRsZURpdiwgZGVzY3JpcHRpb25EaXYsIGljb25zRGl2KTtcblxuICAgICAgICBmb3JtSW5wdXRzID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBwcm9qZWN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pY29ucy1jb250YWluZXInKS5jaGlsZHJlbjtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclRhc2tGb3JtID0gZnVuY3Rpb24oZm9ybVRpdGxlKSB7ICAgICAgICBcbiAgICAgICAgbGV0IGZpZWxkc2V0TGVnZW5kID0gbGVnZW5kKGZvcm1UaXRsZSwgJycpO1xuXG4gICAgICAgIGxldCB0eXBlRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBsYWJlbFRhc2tUeXBlID0gbGFiZWwoJ1Rhc2sgVHlwZScsICcnKTtcbiAgICAgICAgbGV0IGRpdlR5cGVPcHRpb25zID0gZGl2KCcnLCAnLnR5cGUtb3B0aW9ucycpO1xuICAgICAgICBsZXQgcmFkaW9TaW5nbGV0b24gPSBpbnB1dCgncmFkaW8nLCAndHlwZScsICcnLCAnc2luZ2xldG9uJywgJy5pbnB1dCcsKTtcbiAgICAgICAgcmFkaW9TaW5nbGV0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGxldCBsYWJlbFNpbmdsZXRvbiA9IGxhYmVsKCdTaW5nbGUgVGFzaycsICdzaW5nbGV0b24nLCAnJyk7XG4gICAgICAgIGxldCByYWRpb0NoZWNrbGlzdCA9IGlucHV0KCdyYWRpbycsICd0eXBlJywgJycsICdjaGVja2xpc3QnLCAnLmlucHV0Jyk7XG4gICAgICAgIGxldCBsYWJlbENoZWNrbGlzdCA9IGxhYmVsKCdUYXNrIExpc3QnLCAnY2hlY2tsaXN0JywgJycpO1xuICAgICAgICBkaXZUeXBlT3B0aW9ucy5hcHBlbmQocmFkaW9TaW5nbGV0b24sIGxhYmVsU2luZ2xldG9uLCByYWRpb0NoZWNrbGlzdCwgbGFiZWxDaGVja2xpc3QpO1xuICAgICAgICB0eXBlRGl2LmFwcGVuZChsYWJlbFRhc2tUeXBlLCBkaXZUeXBlT3B0aW9ucyk7XG5cbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBzcGFuUmVxdWlyZWRCYWRnZSA9IHNwYW4oJyonLCAnLnJlcXVpcmVkLWJhZGdlJyk7XG4gICAgICAgIGxldCBzcGFuRXJyb3JNZXNzYWdlID0gc3BhbigncGxlYXNlIGluY2x1ZGUgYSB0aXRsZScsICcuZXJyb3ItbWVzc2FnZScsICcuaGlkZScpO1xuICAgICAgICBsZXQgbGFiZWxUaXRsZSA9IGxhYmVsKCdUaXRsZSAnLCAndGFzay10aXRsZScpO1xuICAgICAgICBsYWJlbFRpdGxlLmFwcGVuZChzcGFuUmVxdWlyZWRCYWRnZSwgc3BhbkVycm9yTWVzc2FnZSk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gaW5wdXQoJ3RleHQnLCAndGFzay10aXRsZScsICd0aXRsZScsICd0YXNrLXRpdGxlJywgJy5pbnB1dCcpO1xuICAgICAgICBpbnB1dFRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgaW5wdXRUaXRsZS5hcmlhUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmQobGFiZWxUaXRsZSwgaW5wdXRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBsYWJlbERlc2NyaXB0aW9uID0gbGFiZWwoJ1Rhc2sgRGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBpbnB1dCgndGV4dCcsICdkZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicsICd0YXNrLWRlc2NyaXB0aW9uJywgJy5pbnB1dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQobGFiZWxEZXNjcmlwdGlvbiwgaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGV0IGR1ZURhdGVEaXYgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IGxhYmVsRHVlRGF0ZSA9IGxhYmVsKCdEdWUgRGF0ZScsICdkdWUtZGF0ZScpO1xuICAgICAgICBsZXQgaW5wdXREdWVEYXRlID0gaW5wdXQoJ2RhdGUnLCAnZHVlLWRhdGUnLCAnJywgJ2R1ZS1kYXRlJywgJy5pbnB1dCcpO1xuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZChsYWJlbER1ZURhdGUsIGlucHV0RHVlRGF0ZSk7XG5cbiAgICAgICAgbGV0IGRpdkRyb3Bkb3ducyA9IGRpdignJywgJy5kcm9wZG93bnMnKTtcbiAgICAgICAgbGV0IGRpdlByaW9yaXR5ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBsYWJlbFByaW9yaXR5ID0gbGFiZWwoJ1ByaW9yaXR5JywgJ3ByaW9yaXR5JywgJycpO1xuICAgICAgICBsZXQgc2VsZWN0UHJpb3JpdHkgPSBzZWxlY3QoJ3ByaW9yaXR5JywgJyNwcmlvcml0eScsICcuaW5wdXQnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb250ZW50O1xuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gJ25vbmUgKCApJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gJ2xvdyAoISknO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAnbWVkaXVtICghISknO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAnaGlnaCAoISEhKSc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IG9wdGlvblByaW9yaXR5ID0gb3B0aW9uKGksIGNvbnRlbnQpO1xuICAgICAgICAgICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uUHJpb3JpdHkpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZGl2UHJvamVjdCA9IGRpdignJywgJy5pbnB1dC1sYWJlbC1ncm91cCcpO1xuICAgICAgICBsZXQgbGFiZWxQcm9qZWN0ID0gbGFiZWwoJ1Byb2plY3QnLCAncHJvamVjdCcsICcnKTtcbiAgICAgICAgbGV0IHNlbGVjdFByb2plY3QgPSBzZWxlY3QoJ3Byb2plY3QnLCAnI3Byb2plY3QnLCAnLmlucHV0Jyk7XG4gICAgICAgIGRpdlByaW9yaXR5LmFwcGVuZChsYWJlbFByaW9yaXR5LCBzZWxlY3RQcmlvcml0eSk7XG4gICAgICAgIGRpdlByb2plY3QuYXBwZW5kKGxhYmVsUHJvamVjdCwgc2VsZWN0UHJvamVjdCk7XG4gICAgICAgIGRpdkRyb3Bkb3ducy5hcHBlbmQoZGl2UHJpb3JpdHksIGRpdlByb2plY3QpO1xuXG4gICAgICAgIGZvcm1GaWVsZHNldC5hcHBlbmQoZmllbGRzZXRMZWdlbmQsIHR5cGVEaXYsIHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgZHVlRGF0ZURpdiwgZGl2RHJvcGRvd25zKVxuICAgICAgICAvLyBmb3JtRmllbGRzZXQuYXBwZW5kKGZpZWxkc2V0TGVnZW5kLCBsYWJlbFRhc2tUeXBlLCBkaXZUeXBlT3B0aW9ucywgbGFiZWxUaXRsZSwgaW5wdXRUaXRsZSwgbGFiZWxEZXNjcmlwdGlvbiwgaW5wdXREZXNjcmlwdGlvbiwgbGFiZWxEdWVEYXRlLCBpbnB1dER1ZURhdGUsIGRpdkRyb3Bkb3ducyk7XG5cbiAgICAgICAgbGV0IHByb2plY3RSZWZlcmVuY2VDb250YWluZXIgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3RSZWZlcmVuY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQnKTtcblxuICAgICAgICBmb3JtSW5wdXRzID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQnKTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5Qcm9qZWN0T3B0aW9uc1F1ZXJ5JywgJycpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0T3B0aW9ucyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIGxldCBwcm9qZWN0RHJvcGRvd24gPSBmb3JtSW5wdXRzWzddO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhcnJheS5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGFycmF5W2ldWzBdO1xuICAgICAgICAgICAgbGV0IHByb2plY3RJRCA9IGFycmF5W2ldWzFdO1xuICAgICAgICAgICAgbGV0IG9wdGlvblByb2plY3QgPSBvcHRpb24ocHJvamVjdElELCBwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChfY3VycmVudFByb2plY3QgPT09IHByb2plY3RJRCkge1xuICAgICAgICAgICAgICAgIG9wdGlvblByb2plY3Quc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvblByb2plY3QpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tib3hGb3JtID0gZnVuY3Rpb24odGFza1JlZmVyZW5jZSwgZm9ybVRpdGxlKSB7XG4gICAgICAgIGxldCBmaWVsZHNldExlZ2VuZCA9IGxlZ2VuZChmb3JtVGl0bGUsICcnKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IHNwYW5SZXF1aXJlZEJhZGdlID0gc3BhbignKicsICcucmVxdWlyZWQtYmFkZ2UnKTtcbiAgICAgICAgbGV0IHNwYW5FcnJvck1lc3NhZ2UgPSBzcGFuKCdwbGVhc2UgaW5jbHVkZSBhIHRpdGxlJywgJy5lcnJvci1tZXNzYWdlJywgJy5oaWRlJyk7XG4gICAgICAgIGxldCBsYWJlbFRpdGxlID0gbGFiZWwoJ1RpdGxlICcsICdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGxhYmVsVGl0bGUuYXBwZW5kKHNwYW5SZXF1aXJlZEJhZGdlLCBzcGFuRXJyb3JNZXNzYWdlKTtcbiAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBpbnB1dCgndGV4dCcsICdjaGVja2JveC10aXRsZScsICd0aXRsZScsICdjaGVja2JveC10aXRsZScsICcnKTtcbiAgICAgICAgaW5wdXRUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGlucHV0VGl0bGUuYXJpYVJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kKGxhYmVsVGl0bGUsIGlucHV0VGl0bGUpO1xuXG4gICAgICAgIGZvcm1GaWVsZHNldC5hcHBlbmQoZmllbGRzZXRMZWdlbmQsIHRpdGxlRGl2KTtcblxuICAgICAgICBmb3JtSW5wdXRzID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBmb3JtSW5wdXRzWzBdLnZhbHVlID0gdGFza1JlZmVyZW5jZTsgICAgLy8gKiBwYXNzZWQgdG8gbGlicmFyeS5qcyBmb3IgaW5kZXhpbmcgY29ycmVjdCB0YXNrXG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJEZWxldGVDb25maXJtYXRpb25Gb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBmaWVsZHNldExlZ2VuZCA9IGxlZ2VuZCgnRGVsZXRlIFRoaXMgUHJvamVjdCcsICcnKTtcblxuICAgICAgICBsZXQgcDEgPSBwKCdEZWxldGluZyBhIHByb2plY3Qgd2lsbCBhbHNvIGRlbGV0ZSBhbGwgb2YgaXRzIHRhc2tzLicsICcnKTtcbiAgICAgICAgbGV0IHAyID0gcCgnQXJlIHlvdSBTVVJFIHlvdSB3YW50IHRvIHByb2NlZWQ/JywgJycpO1xuICAgICAgICBcbiAgICAgICAgZm9ybUZpZWxkc2V0LmFwcGVuZChmaWVsZHNldExlZ2VuZCwgcDEsIHAyKTtcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0NyZWF0ZUl0ZW0nLCBfb3BlbkNyZWF0ZUZvcm0pOyAgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKGNyZWF0ZVRhc2tCdXR0b24gY2xpY2tFdmVudCwgX3JlbmRlckNoZWNrbGlzdFN1YmhlYWRlcigpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrQ3JlYXRlUHJvamVjdCcsIF9vcGVuQ3JlYXRlRm9ybSk7ICAgIC8vIHB1Ymxpc2hpbmcgZnJvbSBzaWRlYmFyLmpzIChjcmVhdGVQcm9qZWN0QnV0dG9uIGNsaWNrRXZlbnQpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja01vZGlmeUl0ZW0nLCBfb3Blbk1vZGlmeUluc3RhbmNlUXVlcnkpOyAgLy8gcHVibGlzaGluZyBmcm9tIGRpc3BsYXkuanMgKF9yZW5kZXIuLi5IZWFkZXIoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbG9zZU1vZGlmeUluc3RhbmNlUXVlcnknLCBfb3Blbk1vZGlmeUZvcm0pOyAgLy8gcHVibGlzaGluZyBmcm9tIGxpYnJhcnkuanMgKF9xdWVyeUl0ZW1JbnN0YW5jZSgpKTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RDcmVhdGVkJywgX3NldEN1cnJlbnRQcm9qZWN0KTsgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2NyZWF0ZVByb2plY3QoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCd1cGRhdGVEaXNwbGF5VmlldycsIF9zZXRDdXJyZW50UHJvamVjdCkgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2J1bmRsZUluc3RhbmNlcygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2Nsb3NlUHJvamVjdE9wdGlvbnNRdWVyeScsIF9yZW5kZXJQcm9qZWN0T3B0aW9ucyk7ICAvLyBwdWJsaXNoaW5nIGZyb20gbGlicmFyeS5qcyAoX3F1ZXJ5UHJvamVjdE5hbWVJRCgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tEZWxldGVQcm9qZWN0JywgX3Nob3dEZWxldGVQcm9qZWN0Q29uZmlybWF0aW9uKTsgICAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlclByb2plY3RIZWFkZXIoKSlcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zOyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzJztcblxuLy8gJiAnYmFja2VuZCcgbWFuYWdlciBtb2R1bGUgY29udGFpbmluZyBwcm9qZWN0L3Rhc2sgc3RhdGVzLCBjbGFzc2VzLCAmIG1ldGhvZHNcblxuY29uc3QgbGlicmFyeSA9ICgoKSA9PiB7XG4gICAgLy8gZHluYW1pYyBkYXRhXG4gICAgbGV0IF9wcm9qZWN0TGlicmFyeSA9IFtdO1xuICAgIGxldCBfdGFza0xpYnJhcnkgPSBbXTtcbiAgICBsZXQgX3Rhc2tDb3VudGVyID0gMDtcbiAgICBsZXQgX3Byb2plY3RDb3VudGVyID0gMDtcblxuICAgIC8vIGZhY3Rvcmllc1xuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb2plY3RJRCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3RJY29uKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAncHJvamVjdCc7XG4gICAgICAgICAgICB0aGlzLmlkID0gcHJvamVjdElEO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwcm9qZWN0SWNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldHRlcnNcbiAgICAgICAgc2V0IHNldFRpdGxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0SWNvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmljb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBUYXNrIHtcbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICBjb25zdHJ1Y3Rvcih0YXNrSUQsIHByb2plY3RJRCwgdGFza1R5cGUsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHksIHRhc2tJdGVtcykge1xuICAgICAgICAgICAgbGV0IGl0ZW1Db3VudCA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuaWQgPSB0YXNrSUQ7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHRhc2tUeXBlO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRhc2tUaXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSB0YXNrRHVlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjaGVja2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrSXRlbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXNrSXRlbXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUJ1bmRsZSA9IFtpdGVtQ291bnQsIHRhc2tJdGVtc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbUJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldHRlcnNcbiAgICAgICAgc2V0IHNldFRpdGxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0RHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuZHVlRGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0UHJpb3JpdHkodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0UHJvamVjdElEKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5wcm9qZWN0SUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RJRCA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0Q2hlY2tib3hJdGVtKHZhbHVlQXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHZhbHVlQXJyYXlbMF07XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHZhbHVlQXJyYXlbMV07XG4gICAgICAgICAgICBpZiAoY29udGVudCAhPT0gdGhpcy5pdGVtc1tpbmRleF1bMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XVsxXSA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0dGVyXG4gICAgZnVuY3Rpb24gX3NldEluc3RhbmNlVmFsdWVzKHZhbHVlcykge1xuICAgICAgICBsZXQgbGlicmFyeVJlZmVyZW5jZSA9IHZhbHVlc1swXTtcbiAgICAgICAgbGV0IGluc3RhbmNlUmVmZXJlbmNlID0gdmFsdWVzWzFdO1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKDAsIDIpOyAgICAvLyBbdGl0bGUsIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBbdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCAncHJpb3JpdHknLCAncHJvamVjdElEJywgW3RhZ3NdXVxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGxpYnJhcnlSZWZlcmVuY2UpO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGluc3RhbmNlUmVmZXJlbmNlKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG5cbiAgICAgICAgc3dpdGNoIChsaWJyYXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluc3RhbmNlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlUHJvamVjdCh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfbW9kaWZ5UHJvamVjdChpbnN0YW5jZVJlZmVyZW5jZSwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElEICAgICAgICAgICAgdHlwZSAgICAgICB0aXRsZSAgICBkZXNjcmlwdGlvbiAgZHVlRGF0ZSAgICBwcmlvcml0eSAgICAgICAgICAgICBpdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1WYWx1ZXNSZW9yZGVyZWQgPSBbcGFyc2VJbnQodmFsdWVzWzVdKSwgdmFsdWVzWzBdLCB2YWx1ZXNbMV0sIHZhbHVlc1syXSwgdmFsdWVzWzNdLCBwYXJzZUludCh2YWx1ZXNbNF0pLCB2YWx1ZXNbNl1dXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGFzayhmb3JtVmFsdWVzUmVvcmRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX21vZGlmeVRhc2soaW5zdGFuY2VSZWZlcmVuY2UsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbVJlZmVyZW5jZSA9IHZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbUNvbnRlbnQgPSB2YWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IGluc3RhbmNlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tJRCA9IHZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrSW5zdGFuY2UgPSBfdGFza0xpYnJhcnlbdF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hlY2tJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlQ2hlY2tib3godGFza0luc3RhbmNlLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbW9kaWZ5Q2hlY2tib3godGFza0luc3RhbmNlLCBjaGVja2xpc3RJdGVtUmVmZXJlbmNlLCBjaGVja2xpc3RJdGVtQ29udGVudCk7IC8vIGZvcm1WYWx1ZXNbMF0gbmVlZGVkIHRvIHBhc3Mgc2luZ2xlIHZhbHVlIGZyb20gZm9ybVZhbHVlc1tdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyc1xuICAgIGZ1bmN0aW9uIF9xdWVyeUl0ZW1JbnN0YW5jZShpdGVtUmVmZXJlbmNlcykge1xuICAgICAgICBsZXQgbGlicmFyeVJlZmVyZW5jZSA9IGl0ZW1SZWZlcmVuY2VzWzBdO1xuICAgICAgICBsZXQgaW5zdGFuY2VSZWZlcmVuY2UgPSBpdGVtUmVmZXJlbmNlc1sxXTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhsaWJyYXJ5UmVmZXJlbmNlKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhpbnN0YW5jZVJlZmVyZW5jZSk7XG5cbiAgICAgICAgbGV0IGl0ZW1WYWx1ZUFycmF5O1xuICAgICAgICBzd2l0Y2ggKGxpYnJhcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgKF9wcm9qZWN0TGlicmFyeS5sZW5ndGgpOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBfcHJvamVjdExpYnJhcnlbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWVBcnJheSA9IFsncHJvamVjdCcsIGl0ZW0uaWQsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uaWNvbl07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSBpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWVBcnJheSA9IFsndGFzaycsIGl0ZW0uaWQsIGl0ZW0udHlwZSwgaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5LCBpdGVtLnByb2plY3RJRF07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGluc3RhbmNlUmVmZXJlbmNlWzBdOyAgICAgICAvLyAqIHVuYnVuZGxlZCBmcm9tIGRvbURpc3BsYXkuanMgKF9vcGVuTW9kaWZ5Rm9ybVF1ZXJ5KCkpXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94UmVmZXJlbmNlID0gaW5zdGFuY2VSZWZlcmVuY2VbMV07ICAgLy8gKiB1bmJ1bmRsZWQgZnJvbSBkb21EaXNwbGF5LmpzIChfb3Blbk1vZGlmeUZvcm1RdWVyeSgpKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbXMgPSBfdGFza0xpYnJhcnlbdF0uaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChjaGVja2xpc3RJdGVtcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tsaXN0SXRlbXNbaV1bMF0gPT0gY2hlY2tib3hSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlQXJyYXkgPSBbJ2NoZWNrYm94JywgdGFza1JlZmVyZW5jZSwgY2hlY2tsaXN0SXRlbXNbaV1bMF0sIGNoZWNrbGlzdEl0ZW1zW2ldWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coaXRlbVZhbHVlQXJyYXkpO1xuICAgICAgICBldmVudHMucHVibGlzaCgnY2xvc2VNb2RpZnlJbnN0YW5jZVF1ZXJ5JywgaXRlbVZhbHVlQXJyYXkpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX3F1ZXJ5UHJvamVjdE5hbWVzSURzKCkge1xuICAgICAgICBsZXQgbmFtZUlEQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgbmFtZUlEQXJyYXkucHVzaChbX3Byb2plY3RMaWJyYXJ5W3BdLnRpdGxlLCBfcHJvamVjdExpYnJhcnlbcF0uaWRdKTtcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnY2xvc2VQcm9qZWN0T3B0aW9uc1F1ZXJ5JywgbmFtZUlEQXJyYXkpIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2J1bmRsZUluc3RhbmNlcyh2aWV3UHJlZmVyZW5jZSwgcXVlcnlSZWZlcmVuY2UpIHsgLy8gISByZWR1Y2UgcmVwZXRpdGlvbiB2dnZcbiAgICAgICAgbGV0IGluc3RhbmNlQnVuZGxlID0gW107XG5cbiAgICAgICAgbGV0IHF1ZXJ5UHJvamVjdHMgPSBmYWxzZTtcbiAgICAgICAgbGV0IHF1ZXJ5VGFza3MgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodmlld1ByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FsbCc6XG4gICAgICAgICAgICAgICAgcXVlcnlUYXNrcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdUb2RheSc6XG4gICAgICAgICAgICAgICAgcXVlcnlUYXNrcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdVcGNvbWluZyc6XG4gICAgICAgICAgICAgICAgcXVlcnlUYXNrcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBbnl0aW1lJzpcbiAgICAgICAgICAgICAgICBxdWVyeVRhc2tzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIHF1ZXJ5UHJvamVjdHMgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYHF1ZXJ5UHJvamVjdHM6ICR7cXVlcnlQcm9qZWN0c31gKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhgcXVlcnlUYXNrczogJHtxdWVyeVRhc2tzfWApO1xuXG4gICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2godmlld1ByZWZlcmVuY2UpO1xuICAgICAgICBpZiAocXVlcnlQcm9qZWN0cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgICAgIGlmIChfcHJvamVjdExpYnJhcnlbcF0uaWQgPT0gcXVlcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaChfcHJvamVjdExpYnJhcnlbcF0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0ucHJvamVjdElEID09IHF1ZXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2goX3Rhc2tMaWJyYXJ5W3RdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVRhc2tzID09PSB0cnVlKSB7ICAgLy8gISByZWR1Y2UgcmVwZXRpdGlvblxuICAgICAgICAgICAgc3dpdGNoICh2aWV3UHJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0FsbCc6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2goX3Rhc2tMaWJyYXJ5W3RdKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnVG9kYXknOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IF90YXNrTGlicmFyeVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT09IHF1ZXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnVXBjb21pbmcnOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IF90YXNrTGlicmFyeVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHF1ZXJ5UmVmZXJlbmNlLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT09IHF1ZXJ5UmVmZXJlbmNlW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0FueXRpbWUnOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IF90YXNrTGlicmFyeVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT09IHF1ZXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlQnVuZGxlKTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3VwZGF0ZURpc3BsYXlWaWV3JywgaW5zdGFuY2VCdW5kbGUpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRpc3BsYXkuanMsIGZvcm1zLmpzXG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfY3JlYXRlUHJvamVjdChhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICBsZXQgX2lkID0gX3Byb2plY3RDb3VudGVyO1xuICAgICAgICBsZXQgX25ld1Byb2plY3QgPSBuZXcgUHJvamVjdChfaWQsIC4uLmF0dHJpYnV0ZUFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyBwcm9qZWN0OicpXG4gICAgICAgIGNvbnNvbGUubG9nKF9uZXdQcm9qZWN0KTtcbiAgICAgICAgX3Byb2plY3RMaWJyYXJ5LnB1c2goX25ld1Byb2plY3QpO1xuICAgICAgICBfcHJvamVjdENvdW50ZXIrKztcblxuICAgICAgICBldmVudHMucHVibGlzaCgncHJvamVjdENyZWF0ZWQnLCBfbmV3UHJvamVjdCk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRpc3BsYXkuanMsIHNpZGViYXIuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NyZWF0ZVRhc2soYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgbGV0IF9pZCA9IF90YXNrQ291bnRlcjtcbiAgICAgICAgbGV0IF9uZXdUYXNrID0gbmV3IFRhc2soX2lkLCAuLi5hdHRyaWJ1dGVBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgdGFzazonKVxuICAgICAgICBjb25zb2xlLmxvZyhfbmV3VGFzayk7XG4gICAgICAgIF90YXNrTGlicmFyeS5wdXNoKF9uZXdUYXNrKTtcbiAgICAgICAgX3Rhc2tDb3VudGVyKys7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Rhc2tDcmVhdGVkJywgX25ld1Rhc2spOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRpc3BsYXlET00uanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NyZWF0ZUNoZWNrYm94KHRhc2ssIGl0ZW1WYWx1ZSkge1xuICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbXNMZW5ndGggPSB0YXNrLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IG5ld0l0ZW1JRDtcblxuICAgICAgICBzd2l0Y2ggKGNoZWNrbGlzdEl0ZW1zTGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgbmV3SXRlbUlEID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RJdGVtSUQgPSB0YXNrLml0ZW1zW2NoZWNrbGlzdEl0ZW1zTGVuZ3RoIC0gMV1bMF07XG4gICAgICAgICAgICAgICAgbmV3SXRlbUlEID0gbGFzdEl0ZW1JRCArIDE7XG4gICAgICAgIH07XG5cbiAgICAgICAgaXRlbVZhbHVlWzBdID0gbmV3SXRlbUlEO1xuICAgICAgICB0YXNrLml0ZW1zLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgICAgbGV0IF9uZXdDaGVja2JveCA9IFsnY2hlY2tib3gnLCB0YXNrLmlkLCB0YXNrLml0ZW1zW2NoZWNrbGlzdEl0ZW1zTGVuZ3RoXVswXSwgdGFzay5pdGVtc1tjaGVja2xpc3RJdGVtc0xlbmd0aF1bMV1dO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyBjaGVja2JveDonKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLml0ZW1zKTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnY2hlY2tib3hDcmVhdGVkJywgX25ld0NoZWNrYm94KTsgICAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgfVxuXG4gICAgLy8gbW9kaWZ5IG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfbW9kaWZ5UHJvamVjdCh0YXJnZXRJdGVtSUQsIGF0dHJpYnV0ZUFycmF5KSB7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYXR0cmlidXRlQXJyYXkpXG4gICAgICAgIGxldCBwcm9qZWN0SW5zdGFuY2U7XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgKF9wcm9qZWN0TGlicmFyeS5sZW5ndGgpOyBwKyspIHtcbiAgICAgICAgICAgIGlmIChfcHJvamVjdExpYnJhcnlbcF0uaWQgPT0gdGFyZ2V0SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEluc3RhbmNlID0gX3Byb2plY3RMaWJyYXJ5W3BdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZygnb3JpZ2luYWwgcHJvamVjdCBpbnN0YW5jZTonKVxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHByb2plY3RJbnN0YW5jZSk7XG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgKGF0dHJpYnV0ZUFycmF5Lmxlbmd0aCk7IGErKykge1xuICAgICAgICAgICAgc3dpdGNoKGEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnN0YW5jZS5zZXRUaXRsZSA9IGF0dHJpYnV0ZUFycmF5WzBdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnN0YW5jZS5zZXREZXNjcmlwdGlvbiA9IGF0dHJpYnV0ZUFycmF5WzFdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnN0YW5jZS5zZXRJY29uID0gYXR0cmlidXRlQXJyYXlbMl07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kaWZpZWQgcHJvamVjdCBpbnN0YW5jZTonKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5zdGFuY2UpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdpdGVtTW9kaWZpZWQnLCBwcm9qZWN0SW5zdGFuY2UpOyAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzLCBkb21TaWRlYmFyLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9tb2RpZnlUYXNrKHRhcmdldEl0ZW1JRCwgYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVBcnJheSk7XG4gICAgICAgIGxldCB0YXNrSW5zdGFuY2U7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gdGFyZ2V0SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgdGFza0luc3RhbmNlID0gX3Rhc2tMaWJyYXJ5W3RdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZygnb3JpZ2luYWwgdGFzayBpbnN0YW5jZTonKVxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZSk7XG4gICAgICAgIGZvciAobGV0IGEgPSAxOyBhIDwgKGF0dHJpYnV0ZUFycmF5Lmxlbmd0aCk7IGErKykge1xuICAgICAgICAgICAgLy8gW3R5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgJ3ByaW9yaXR5JywgJ3Byb2plY3RJRCddXG4gICAgICAgICAgICBzd2l0Y2goYSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldFRpdGxlID0gYXR0cmlidXRlQXJyYXlbMV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLmRlc2NyaXB0aW9uID0gYXR0cmlidXRlQXJyYXlbMl07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldER1ZURhdGUgPSBhdHRyaWJ1dGVBcnJheVszXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0UHJpb3JpdHkgPSBwYXJzZUludChhdHRyaWJ1dGVBcnJheVs0XSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldFByb2plY3RJRCA9IHBhcnNlSW50KGF0dHJpYnV0ZUFycmF5WzVdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RpZmllZCB0YXNrIGluc3RhbmNlOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIHRhc2tJbnN0YW5jZSk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanMsIGRvbVNpZGViYXIuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX21vZGlmeUNoZWNrYm94KHRhc2tJbnN0YW5jZSwgdGFyZ2V0SXRlbUlELCB0YXJnZXRDb250ZW50KSB7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2codGFyZ2V0SXRlbUlELCB0YXJnZXRDb250ZW50KTtcbiAgICAgICAgbGV0IGNoZWNrYm94SW5zdGFuY2U7XG4gICAgICAgIGxldCB0YXJnZXRDaGVja2xpc3RJdGVtcyA9IHRhc2tJbnN0YW5jZS5pdGVtcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGFyZ2V0Q2hlY2tsaXN0SXRlbXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Q2hlY2tsaXN0SXRlbXNbaV1bMF0gPT0gdGFyZ2V0SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFZhbHVlQXJyYXkgPSBbaSwgdGFyZ2V0Q29udGVudF07ICAvLyAqIGkgcmVwcmVzZW50cyBpdGVtIGluZGV4XG4gICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldENoZWNrYm94SXRlbSA9IHRhcmdldFZhbHVlQXJyYXk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hJbnN0YW5jZSA9IFsnY2hlY2tib3gnLCB0YXNrSW5zdGFuY2UuaWQsIHRhcmdldEl0ZW1JRCwgdGFyZ2V0Q29udGVudF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbCB0YXNrIChjaGVja2JveCkgaW5zdGFuY2U6JylcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyh0YXNrSW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kaWZpZWQgdGFzayAoY2hlY2tib3gpIGluc3RhbmNlOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZS5pdGVtcyk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIGNoZWNrYm94SW5zdGFuY2UpOyAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSBtZXRob2RzXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByb2plY3QoY2FyZElEKSB7XG4gICAgICAgIGxldCBjYXJkUmVmZXJlbmNlcyA9IGNhcmRJRC5zcGxpdCgnXycpO1xuICAgICAgICBsZXQgcHJvamVjdFJlZmVyZW5jZSA9IGNhcmRSZWZlcmVuY2VzWzFdO1xuICAgICAgICBsZXQgcHJvamVjdExvb3BTdGFydCA9IF9wcm9qZWN0TGlicmFyeS5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAobGV0IHAgPSBwcm9qZWN0TG9vcFN0YXJ0OyBwID4gLTE7IHAtLSkge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBwcm9qZWN0UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Byb2plY3RMaWJyYXJ5LnNwbGljZShwLCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHRhc2tMb29wU3RhcnQgPSBfdGFza0xpYnJhcnkubGVuZ3RoIC0gMTtcbiAgICAgICAgZm9yIChsZXQgdCA9IHRhc2tMb29wU3RhcnQ7IHQgPiAtMTsgdC0tKSB7XG4gICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLnByb2plY3RJRCA9PSBwcm9qZWN0UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Rhc2tMaWJyYXJ5LnNwbGljZSh0LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0IGRlbGV0ZSByZXN1bHRzOicpXG4gICAgICAgIGNvbnNvbGUubG9nKF9wcm9qZWN0TGlicmFyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF90YXNrTGlicmFyeSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZVByb2plY3RGcm9tU2VjdGlvbicsIGNhcmRJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qcywgc2lkZWJhci5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlVGFzayhjYXJkSUQpIHtcbiAgICAgICAgbGV0IGNhcmRSZWZlcmVuY2VzID0gY2FyZElELnNwbGl0KCdfJyk7XG4gICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMV07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gdGFza1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIF90YXNrTGlicmFyeS5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygndGFzayBkZWxldGUgcmVzdWx0czonKVxuICAgICAgICBjb25zb2xlLmxvZyhfdGFza0xpYnJhcnkpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZW1vdmVUYXNrRnJvbURpc3BsYXknLCBjYXJkSUQpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2RlbGV0ZUNoZWNrbGlzdEl0ZW0oY2hlY2tJRCkge1xuICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGNoZWNrSUQuc3BsaXQoJ19fJylbMF0uc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgbGV0IGNoZWNrUmVmZXJlbmNlID0gY2hlY2tJRC5zcGxpdCgnX18nKVsxXS5zcGxpdCgnXycpWzFdO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IHRhc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbXNBcnJheSA9IF90YXNrTGlicmFyeVt0XS5pdGVtcztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChjaGVja2xpc3RJdGVtc0FycmF5Lmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tsaXN0SXRlbXNBcnJheVtpXVswXSA9PSBjaGVja1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SXRlbXNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tsaXN0IGl0ZW0gZGVsZXRlIHJlc3VsdHM6JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdEl0ZW1zQXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZW1vdmVDaGVja2xpc3RJdGVtRnJvbURpc3BsYXknLCBjaGVja0lEKTsgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ29wZW5WaWV3UHJlZmVyZW5jZVF1ZXJ5JywgX2J1bmRsZUluc3RhbmNlcykgLy8gcHVibGlzaGVkIGZyb20gc2lkZWJhci5qcyAoX2NoYW5nZVZpZXdQcmVmZXJlbmNlaygpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY29uZmlybUlucHV0JywgX3NldEluc3RhbmNlVmFsdWVzKTsgLy9wdWJsaXNoZWQgZnJvbSBkZWZhdWx0LmpzIChpbml0KCkpLCBmb3Jtcy5qcyAoX2NvbmZpcm1JbnB1dCgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnb3Blbk1vZGlmeUluc3RhbmNlUXVlcnknLCBfcXVlcnlJdGVtSW5zdGFuY2UpOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBmb3Jtcy5qcyAoX29wZW5Nb2RpZnlRdWVyeSgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ29wZW5Qcm9qZWN0T3B0aW9uc1F1ZXJ5JywgX3F1ZXJ5UHJvamVjdE5hbWVzSURzKSAgLy8gcHVibGlzaGVkIGZyb20gZm9ybXMuanMgKF9zaG93Rm9ybSgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY29uZmlybURlbGV0ZVByb2plY3QnLCBfZGVsZXRlUHJvamVjdCk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGZvcm1zLmpzIChjb25maXJtRGVsZXRlQnV0dG9uIGV2ZW50TGlzdGVuZXIpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tEZWxldGVUYXNrJywgX2RlbGV0ZVRhc2spOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChfcmVuZGVyLi4uKHRhc2spSGVhZGVycygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrRGVsZXRlQ2hlY2tsaXN0SXRlbScsIF9kZWxldGVDaGVja2xpc3RJdGVtKSAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlckNoZWNrYm94Q29udHJvbHMoKSlcbn0pKCk7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgbGkgfSBmcm9tICcuL2VsZW1lbnRzJztcblxuLy8gJiBtYW5hZ2VzIHNpZGViYXIgc2VjdGlvbiBET00gPC0+IGxpYnJhcnkgY29tbXVuaWNhdGlvblxuLy8gJiBjb250YWlucyBmYWN0b3JpZXMgZm9yIGdlbmVyYXRpbmcgZGlzcGxheSBzZWN0aW9uIERPTSBlbGVtZW50cyAvIGdyb3VwaW5nc1xuXG5jb25zdCBzaWRlYmFyID0gKCgpID0+IHtcbiAgICAvLyBjYWNoZSBkb21cbiAgICBsZXQgdmlld1ByZWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcblxuICAgIGxldCB2aWV3QWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctYWxsJyk7XG4gICAgbGV0IHZpZXdUb2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LXRvZGF5Jyk7XG4gICAgbGV0IHZpZXdVcGNvbWluZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LXVwY29taW5nJyk7XG4gICAgbGV0IHZpZXdBbnl0aW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctYW55dGltZScpO1xuICAgIGxldCB2aWV3VW5zb3J0ZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1wcm9qZWN0XzAnKTtcbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWMtdmlld3MnKTtcbiAgICBsZXQgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi52aWV3LXByZWZzLWNvbnRhaW5lciBzcGFuLmNyZWF0ZScpO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gICAgLy8gPyBoaWRlIHNpZGViYXIgd2hlbiBub3QgZm9jdXNlZCA/XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHZpZXdQcmVmcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgfSk7XG4gICAgXG4gICAgdmlld0FsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIF91cGRhdGVTZWxlY3RFZmZlY3QoZS50YXJnZXQpO1xuICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ0FsbCcsICcnKTtcbiAgICB9KTtcbiAgICB2aWV3VG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBfdXBkYXRlU2VsZWN0RWZmZWN0KGUudGFyZ2V0KTtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdUb2RheScsICcnKTtcbiAgICB9KTtcbiAgICB2aWV3VXBjb21pbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBfdXBkYXRlU2VsZWN0RWZmZWN0KGUudGFyZ2V0KTtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdVcGNvbWluZycsICcnKTtcbiAgICB9KTtcbiAgICB2aWV3QW55dGltZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIF91cGRhdGVTZWxlY3RFZmZlY3QoZS50YXJnZXQpO1xuICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ0FueXRpbWUnLCAnJyk7XG4gICAgfSk7XG4gICAgdmlld1Vuc29ydGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgX3VwZGF0ZVNlbGVjdEVmZmVjdChlLnRhcmdldCk7XG4gICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsIHZpZXdVbnNvcnRlZEJ1dHRvbi5pZCk7XG4gICAgfSk7XG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrQ3JlYXRlUHJvamVjdCcsICdwcm9qZWN0Jyk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICB9KTtcblxuICAgIC8vIG1hbmFnZXJzXG4gICAgZnVuY3Rpb24gX2NoYW5nZVZpZXdQcmVmZXJlbmNlKHByZWZlcmVuY2VLZXl3b3JkLCB0YXJnZXRJRCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRJRCk7XG4gICAgICAgIGxldCBxdWVyeVJlZmVyZW5jZTtcblxuICAgICAgICBzd2l0Y2ggKHByZWZlcmVuY2VLZXl3b3JkKSB7XG4gICAgICAgICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgICAgICAgICAgcXVlcnlSZWZlcmVuY2UgPSBfZ2V0VG9kYXlEYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cGNvbWluZyc6XG4gICAgICAgICAgICAgICAgcXVlcnlSZWZlcmVuY2UgPSBfZ2V0VXBjb21pbmdEYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRJRCA9IHRhcmdldElELnNwbGl0KCdfJyk7XG4gICAgICAgICAgICAgICAgcXVlcnlSZWZlcmVuY2UgPSBzcGxpdElEWzFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBxdWVyeVJlZmVyZW5jZSA9ICcnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuVmlld1ByZWZlcmVuY2VRdWVyeScsIHByZWZlcmVuY2VLZXl3b3JkLCBxdWVyeVJlZmVyZW5jZSk7IC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cblxuICAgIC8vIGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0TGluayA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgIT09IDApIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHByb2plY3QuaWQ7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgbGlJRCA9IGAjdmlldy1wcm9qZWN0XyR7aWR9YDtcbiAgICAgICAgICAgIGxldCBsaVByb2plY3RMaW5rID0gbGkodGl0bGUsIGxpSUQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGlQcm9qZWN0TGluayk7XG5cbiAgICAgICAgICAgIGxpUHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIF91cGRhdGVTZWxlY3RFZmZlY3QoZS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsIGUudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobGlQcm9qZWN0TGluayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF91cGRhdGVTZWxlY3RFZmZlY3QobGlQcm9qZWN0TGluayk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gaGVscGVyc1xuICAgIGZ1bmN0aW9uIF9tb2RpZnlWaWV3UHJlZmVyZW5jZUxpbmsoaXRlbUluc3RhbmNlKSB7XG4gICAgICAgIGlmIChpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdmlldy1wcm9qZWN0XyR7aXRlbUluc3RhbmNlLmlkfWApO1xuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBpdGVtSW5zdGFuY2UudGl0bGU7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9yZW1vdmVQcm9qZWN0TGluayhwcm9qZWN0Q2FyZElEKSB7XG4gICAgICAgIGxldCBsaW5rUmVmZXJlbmNlID0gcHJvamVjdENhcmRJRC5zcGxpdCgnXycpWzFdO1xuXG4gICAgICAgIGxldCBsaVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdmlldy1wcm9qZWN0XyR7bGlua1JlZmVyZW5jZX1gKTtcbiAgICAgICAgbGV0IHVsQ29udGFpbmVyID0gbGlQcm9qZWN0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgdWxDb250YWluZXIucmVtb3ZlQ2hpbGQobGlQcm9qZWN0KTtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgKHVsQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpOlxuICAgICAgICAgICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsIHVsQ29udGFpbmVyLmxhc3RDaGlsZC5pZCk7XG4gICAgICAgICAgICAgICAgX3VwZGF0ZVNlbGVjdEVmZmVjdCh1bENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ3Byb2plY3QnLCAncHJvamVjdF8wJyk7XG4gICAgICAgICAgICAgICAgX3VwZGF0ZVNlbGVjdEVmZmVjdCh2aWV3VW5zb3J0ZWRCdXR0b24pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZ2V0VG9kYXlEYXRlKCkge1xuICAgICAgICBsZXQgcmF3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyID0gcmF3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgbW9udGggPSByYXdEYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgZGF0ZSA9IHJhd0RhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgICAgICBtb250aCA9IGAwJHttb250aH1gO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZGF0ZSA8IDEwKSB7XG4gICAgICAgICAgICBkYXRlID0gYDAke2RhdGV9YDtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2dldFVwY29taW5nRGF0ZSgpIHtcbiAgICAgICAgbGV0IHZhbGlkRGF0ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHJhd0RhdGUuc2V0RGF0ZShyYXdEYXRlLmdldERhdGUoKSArIGkpO1xuICAgICAgICAgICAgbGV0IHllYXIgPSByYXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBsZXQgbW9udGggPSByYXdEYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSByYXdEYXRlLmdldERhdGUoKTtcbiAgICAgXG4gICAgICAgICAgICBpZiAobW9udGggPCAxMCkge1xuICAgICAgICAgICAgICAgICBtb250aCA9IGAwJHttb250aH1gO1xuICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgaWYgKGRhdGUgPCAxMCkge1xuICAgICAgICAgICAgICAgICBkYXRlID0gYDAke2RhdGV9YDtcbiAgICAgICAgICAgICB9O1xuICAgICBcbiAgICAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xuICAgICAgICAgICAgIHZhbGlkRGF0ZXMucHVzaChmb3JtYXR0ZWREYXRlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdmFsaWREYXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3VwZGF0ZVNlbGVjdEVmZmVjdCh0YXJnZXRMaW5rKSB7XG4gICAgICAgIF9yZW1vdmVTZWxlY3RFZmZlY3QoKTtcbiAgICAgICAgX2FkZFNlbGVjdEVmZmVjdCh0YXJnZXRMaW5rKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2FkZFNlbGVjdEVmZmVjdCh0YXJnZXRMaW5rKSB7XG4gICAgICAgIHRhcmdldExpbmsuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdmlldy1wcmVmZXJlbmNlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9yZW1vdmVTZWxlY3RFZmZlY3QoKSB7XG4gICAgICAgIGxldCBzaWRlYmFyTGlua3MgPSBbdmlld0FsbEJ1dHRvbiwgdmlld1RvZGF5QnV0dG9uLCB2aWV3VXBjb21pbmdCdXR0b24sIHZpZXdBbnl0aW1lQnV0dG9uLCB2aWV3VW5zb3J0ZWRCdXR0b24sIC4uLnByb2plY3RzTGlzdC5jaGlsZHJlbl07XG4gICAgICAgIHNpZGViYXJMaW5rcy5zcGxpY2UoNSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNpZGViYXJMaW5rcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoc2lkZWJhckxpbmtzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZpZXdQcmVmZXJlbmNlID0gc2lkZWJhckxpbmtzW2ldO1xuICAgICAgICAgICAgaWYgKHZpZXdQcmVmZXJlbmNlLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQtdmlldy1wcmVmZXJlbmNlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3UHJlZmVyZW5jZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC12aWV3LXByZWZlcmVuY2UnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuICAgIFxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RDcmVhdGVkJywgX3JlbmRlclByb2plY3RMaW5rKTsgLy8gcHVibGlzaGVkIGJ5IGxpYnJhcnkuanMgKF9jcmVhdGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnaXRlbU1vZGlmaWVkJywgX21vZGlmeVZpZXdQcmVmZXJlbmNlTGluayk7ICAgLy8gcHVibGlzaGVkIGJ5IGxpYnJhcnkuanMgKF9tb2RpZnkuLi4oKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVQcm9qZWN0RnJvbVNlY3Rpb24nLCBfcmVtb3ZlUHJvamVjdExpbmspOyAgIC8vIHB1Ymxpc2hlZCBieSBsaWJyYXJ5LmpzIChfZGVsZXRlUHJvamVjdCgpKTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NwYWNpbmcuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvdHlwby5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9lZmZlY3RzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbG9ycy5jc3MnO1xuXG5pbXBvcnQgZGVmYXVsdFN0YXRlIGZyb20gJy4vc2NyaXB0cy9kZWZhdWx0LmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vc2NyaXB0cy9kaXNwbGF5JztcbmltcG9ydCBmb3JtcyBmcm9tICcuL3NjcmlwdHMvZm9ybXMnO1xuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zY3JpcHRzL3NpZGViYXInO1xuaW1wb3J0IGxpYnJhcnkgZnJvbSAnLi9zY3JpcHRzL2xpYnJhcnknO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5cbi8vIGFjdGlvbnNcbmRlZmF1bHRTdGF0ZS5pbml0KCk7XG5ldmVudHMudmlld0V2ZW50cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==