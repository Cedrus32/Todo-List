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
___CSS_LOADER_EXPORT___.push([module.id, "#title {\n    background-color: #6A70BD;\n    color: white;\n}\n\n#sidebar {\n    background-color: #E9EAEC;\n}\n\n.form-container {\n    background-color: white;\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    background-color: white;\n    filter: opacity(0.5);\n}\n\ninput,\nselect {\n    border: 1px solid black;\n}\n\ninput:invalid {\n    border: 1px solid red;\n}\n\n.required-badge,\n.error-message {\n    color: red;\n}\n\n.form-container {\n    border: 1px solid black;\n}\n\n    fieldset {\n        border: none;\n    }", "",{"version":3,"sources":["webpack://./src/styles/colors.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;IAEI;QACI,YAAY;IAChB","sourcesContent":["#title {\n    background-color: #6A70BD;\n    color: white;\n}\n\n#sidebar {\n    background-color: #E9EAEC;\n}\n\n.form-container {\n    background-color: white;\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    background-color: white;\n    filter: opacity(0.5);\n}\n\ninput,\nselect {\n    border: 1px solid black;\n}\n\ninput:invalid {\n    border: 1px solid red;\n}\n\n.required-badge,\n.error-message {\n    color: red;\n}\n\n.form-container {\n    border: 1px solid black;\n}\n\n    fieldset {\n        border: none;\n    }"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* card hover */\n/* card hover */\n/* card hover */\n\n.card.singleton,\n.card.checklist {\n    border-radius: 0.5em;\n    position: relative;\n}\n\n.card.singleton,\n.card.checklist {\n    width: 100%;\n}\n\n.card.singleton::after,\n.card.checklist::after {\n    content: '';\n    position: absolute;\n    bottom: 0px; left: 0px;\n    z-index: -1;\n\n    background-color: hsl(220, 7%, 96%);\n\n    width: 100%;\n    height: 0px;\n    border-radius: 0.5em;\n}\n\n.card.singleton:hover::after,\n.card.checklist:hover::after {\n    height: 100%;\n    transition: all 0.20s ease-out;\n}\n\n\n/* view preference hover */\n/* view preference hover */\n/* view preference hover */\n\n", "",{"version":3,"sources":["webpack://./src/styles/effects.css"],"names":[],"mappings":"AAAA,eAAe;AACf,eAAe;AACf,eAAe;;AAEf;;IAEI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;AACf;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE,SAAS;IACtB,WAAW;;IAEX,mCAAmC;;IAEnC,WAAW;IACX,WAAW;IACX,oBAAoB;AACxB;;AAEA;;IAEI,YAAY;IACZ,8BAA8B;AAClC;;;AAGA,0BAA0B;AAC1B,0BAA0B;AAC1B,0BAA0B","sourcesContent":["/* card hover */\n/* card hover */\n/* card hover */\n\n.card.singleton,\n.card.checklist {\n    border-radius: 0.5em;\n    position: relative;\n}\n\n.card.singleton,\n.card.checklist {\n    width: 100%;\n}\n\n.card.singleton::after,\n.card.checklist::after {\n    content: '';\n    position: absolute;\n    bottom: 0px; left: 0px;\n    z-index: -1;\n\n    background-color: hsl(220, 7%, 96%);\n\n    width: 100%;\n    height: 0px;\n    border-radius: 0.5em;\n}\n\n.card.singleton:hover::after,\n.card.checklist:hover::after {\n    height: 100%;\n    transition: all 0.20s ease-out;\n}\n\n\n/* view preference hover */\n/* view preference hover */\n/* view preference hover */\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --xtra-small-pad: calc(0.25 * var(--main-pad));\n    --xtra-small-gap: calc(0.25 * var(--main-gap));\n\n    --small-pad: calc(0.5 * var(--main-pad));\n    --small-gap: calc(0.5 * var(--main-gap));\n\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: calc(1.5 * var(--main-pad));\n\n    --lrg-gap: calc(2 * var(--main-gap))\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nimg {\n    height: 1.25em;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #sidebar,\n    #display {\n        padding: var(--main-pad);\n    }\n\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n\n#sidebar {\n    --y-offset: calc(calc(var(--main-pad) * 2) + 3.15em);\n    \n    position: absolute;\n    top: var(--y-offset); left: 0em;\n    z-index: 1;\n\n    height: calc(100vh - var(--y-offset));\n    width: 25vw;\n}\n\n    .view-prefs-container {\n        display: flex;\n        flex-flow: column;\n        gap: var(--lrg-gap);\n\n        padding-top: var(--lrg-gap);\n    }\n\n        #sidebar ul {\n            display: flex;\n            flex-flow: column;\n            gap: var(--main-gap);\n        }\n\n            #sidebar ul span {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            #sidebar li {\n                display: flex;\n                align-items: center;\n                gap: var(--xtra-small-gap);\n            }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    \n    width: 80%;\n    max-width: 450px;\n\n    padding: var(--main-pad);\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    position: absolute;\n    top: 0px; right: 0px;\n    z-index: 1;\n\n    height: 100vh; width: 100vw;\n}\n\n    form {\n        padding-bottom: var(--main-pad);\n    }\n\n            .input-label-group {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                margin-top: var(--small-pad);\n            }\n            \n                p {\n                    margin-top: var(--small-pad);\n                }\n\n            .dropdowns {\n                display: flex;\n            }\n\n                .dropdowns div {\n                    display: flex;\n                    flex-flow: column;\n\n                    width: 50%;\n                }\n\n    .form-buttons {\n        display: flex;\n        justify-content: center;\n        gap: var(--small-gap);\n    }\n\n        button,\n        input,\n        select {\n            padding: var(--xtra-small-pad);\n        }\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            gap: var(--main-gap);\n\n            z-index: 2;\n        }\n\n            header img {\n                height: 2em;\n            }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                padding: 1em;\n            }\n                \n                div.card,\n                .task-controls {\n                    padding: var(--main-pad);\n                }\n\n                .card.project {\n                    display: flex;\n                    flex-flow: column;\n                    align-items: center;\n                }\n\n                .card.sort-due {\n                    text-align: center;\n                }\n\n                    .card.project .header {\n                        display: grid;\n                        grid-template-columns: 1fr auto;\n                        grid-template-rows: auto;\n                        grid-template-areas: 'title       controls'\n                                             'description .';\n\n                        width: 100%;\n                    }\n\n                        .card.project .title {\n                            grid-area: title;\n                            text-align: center;\n                        }\n\n                        .project-controls {\n                            grid-area: controls;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                        .card.project .description {\n                            grid-area: description;\n                            text-align: center;\n                        }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    .singleton .header,\n                    .checklist .header {\n                        display: flex;\n                        gap: var(--xtra-small-gap);\n                    }\n\n                        .singleton .title,\n                        .checklist .title {\n                            margin-right: auto;\n                        }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--xtra-small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--xtra-small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--xtra-small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                            align-content: flex-start;\n                        }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--xtra-small-gap);\n                }\n\n                    .description-container {\n                        display: flex;\n                    }\n\n                        .card.checklist .description,\n                        .card.singleton .description {\n                            margin-right: auto;\n                        }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n\n                        .checklist-item-controls {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                        }\n", "",{"version":3,"sources":["webpack://./src/styles/spacing.css"],"names":[],"mappings":"AAAA,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;IACI,8CAA8C;IAC9C,8CAA8C;;IAE9C,wCAAwC;IACxC,wCAAwC;;IAExC,eAAe;IACf,eAAe;;IAEf,sCAAsC;;IAEtC;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;IAEI;QACI,YAAY;IAChB;;AAEJ;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;IAEI;;;QAGI,wBAAwB;IAC5B;;AAEJ,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;AAEhB;IACI,oDAAoD;;IAEpD,kBAAkB;IAClB,oBAAoB,EAAE,SAAS;IAC/B,UAAU;;IAEV,qCAAqC;IACrC,WAAW;AACf;;IAEI;QACI,aAAa;QACb,iBAAiB;QACjB,mBAAmB;;QAEnB,2BAA2B;IAC/B;;QAEI;YACI,aAAa;YACb,iBAAiB;YACjB,oBAAoB;QACxB;;YAEI;gBACI,aAAa;gBACb,8BAA8B;YAClC;;YAEA;gBACI,aAAa;gBACb,mBAAmB;gBACnB,0BAA0B;YAC9B;;AAEZ,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;IACI,kBAAkB;IAClB,QAAQ,EAAE,QAAQ;IAClB,gCAAgC;IAChC,UAAU;;IAEV,UAAU;IACV,gBAAgB;;IAEhB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,QAAQ,EAAE,UAAU;IACpB,UAAU;;IAEV,aAAa,EAAE,YAAY;AAC/B;;IAEI;QACI,+BAA+B;IACnC;;YAEQ;gBACI,aAAa;gBACb,iBAAiB;gBACjB,0BAA0B;;gBAE1B,4BAA4B;YAChC;;gBAEI;oBACI,4BAA4B;gBAChC;;YAEJ;gBACI,aAAa;YACjB;;gBAEI;oBACI,aAAa;oBACb,iBAAiB;;oBAEjB,UAAU;gBACd;;IAEZ;QACI,aAAa;QACb,uBAAuB;QACvB,qBAAqB;IACzB;;QAEI;;;YAGI,8BAA8B;QAClC;;AAER,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;IAEZ;QACI,aAAa;QACb,8BAA8B;QAC9B,4BAA4B;QAC5B;8CACsC;;QAEtC,eAAe;QACf,WAAW;IACf;;AAEJ,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;;QAEX;YACI,iBAAiB;;YAEjB,aAAa;YACb,2BAA2B;YAC3B,mBAAmB;YACnB,oBAAoB;;YAEpB,UAAU;QACd;;YAEI;gBACI,WAAW;YACf;;AAEZ,oBAAoB;AACpB,oBAAoB;AACpB,oBAAoB;;QAEZ;YACI,kBAAkB;QACtB;;YAEI;gBACI,aAAa;gBACb,iBAAiB;gBACjB,0BAA0B;;gBAE1B,YAAY;YAChB;;gBAEI;;oBAEI,wBAAwB;gBAC5B;;gBAEA;oBACI,aAAa;oBACb,iBAAiB;oBACjB,mBAAmB;gBACvB;;gBAEA;oBACI,kBAAkB;gBACtB;;oBAEI;wBACI,aAAa;wBACb,+BAA+B;wBAC/B,wBAAwB;wBACxB;4DACoC;;wBAEpC,WAAW;oBACf;;wBAEI;4BACI,gBAAgB;4BAChB,kBAAkB;wBACtB;;wBAEA;4BACI,mBAAmB;4BACnB,aAAa;4BACb,mBAAmB;wBACvB;;wBAEA;4BACI,sBAAsB;4BACtB,kBAAkB;wBACtB;;gBAER;oBACI,aAAa;oBACb,2BAA2B;gBAC/B;;oBAEI;wBACI,kBAAkB;oBACtB;;gBAEJ;oBACI,aAAa;oBACb,uBAAuB;gBAC3B;;oBAEI;;wBAEI,aAAa;wBACb,0BAA0B;oBAC9B;;wBAEI;;4BAEI,kBAAkB;wBACtB;;oBAEJ;wBACI,mCAAmC;oBACvC;;oBAEA;wBACI,2CAA2C;oBAC/C;;oBAEA;wBACI,aAAa;wBACb,iBAAiB;wBACjB,0BAA0B;;wBAE1B,WAAW;oBACf;;wBAEI;4BACI,aAAa;4BACb,0BAA0B;4BAC1B,yBAAyB;wBAC7B;;gBAER;oBACI,aAAa;oBACb,iBAAiB;oBACjB,0BAA0B;gBAC9B;;oBAEI;wBACI,aAAa;oBACjB;;wBAEI;;4BAEI,kBAAkB;wBACtB;;oBAEJ;wBACI,aAAa;wBACb,mBAAmB;oBACvB;;wBAEI;4BACI,kBAAkB;wBACtB;;wBAEA;4BACI,aAAa;4BACb,0BAA0B;wBAC9B","sourcesContent":["/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --xtra-small-pad: calc(0.25 * var(--main-pad));\n    --xtra-small-gap: calc(0.25 * var(--main-gap));\n\n    --small-pad: calc(0.5 * var(--main-pad));\n    --small-gap: calc(0.5 * var(--main-gap));\n\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: calc(1.5 * var(--main-pad));\n\n    --lrg-gap: calc(2 * var(--main-gap))\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nimg {\n    height: 1.25em;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #sidebar,\n    #display {\n        padding: var(--main-pad);\n    }\n\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n\n#sidebar {\n    --y-offset: calc(calc(var(--main-pad) * 2) + 3.15em);\n    \n    position: absolute;\n    top: var(--y-offset); left: 0em;\n    z-index: 1;\n\n    height: calc(100vh - var(--y-offset));\n    width: 25vw;\n}\n\n    .view-prefs-container {\n        display: flex;\n        flex-flow: column;\n        gap: var(--lrg-gap);\n\n        padding-top: var(--lrg-gap);\n    }\n\n        #sidebar ul {\n            display: flex;\n            flex-flow: column;\n            gap: var(--main-gap);\n        }\n\n            #sidebar ul span {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            #sidebar li {\n                display: flex;\n                align-items: center;\n                gap: var(--xtra-small-gap);\n            }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    \n    width: 80%;\n    max-width: 450px;\n\n    padding: var(--main-pad);\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    position: absolute;\n    top: 0px; right: 0px;\n    z-index: 1;\n\n    height: 100vh; width: 100vw;\n}\n\n    form {\n        padding-bottom: var(--main-pad);\n    }\n\n            .input-label-group {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                margin-top: var(--small-pad);\n            }\n            \n                p {\n                    margin-top: var(--small-pad);\n                }\n\n            .dropdowns {\n                display: flex;\n            }\n\n                .dropdowns div {\n                    display: flex;\n                    flex-flow: column;\n\n                    width: 50%;\n                }\n\n    .form-buttons {\n        display: flex;\n        justify-content: center;\n        gap: var(--small-gap);\n    }\n\n        button,\n        input,\n        select {\n            padding: var(--xtra-small-pad);\n        }\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            gap: var(--main-gap);\n\n            z-index: 2;\n        }\n\n            header img {\n                height: 2em;\n            }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                padding: 1em;\n            }\n                \n                div.card,\n                .task-controls {\n                    padding: var(--main-pad);\n                }\n\n                .card.project {\n                    display: flex;\n                    flex-flow: column;\n                    align-items: center;\n                }\n\n                .card.sort-due {\n                    text-align: center;\n                }\n\n                    .card.project .header {\n                        display: grid;\n                        grid-template-columns: 1fr auto;\n                        grid-template-rows: auto;\n                        grid-template-areas: 'title       controls'\n                                             'description .';\n\n                        width: 100%;\n                    }\n\n                        .card.project .title {\n                            grid-area: title;\n                            text-align: center;\n                        }\n\n                        .project-controls {\n                            grid-area: controls;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                        .card.project .description {\n                            grid-area: description;\n                            text-align: center;\n                        }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    .singleton .header,\n                    .checklist .header {\n                        display: flex;\n                        gap: var(--xtra-small-gap);\n                    }\n\n                        .singleton .title,\n                        .checklist .title {\n                            margin-right: auto;\n                        }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--xtra-small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--xtra-small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--xtra-small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                            align-content: flex-start;\n                        }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--xtra-small-gap);\n                }\n\n                    .description-container {\n                        display: flex;\n                    }\n\n                        .card.checklist .description,\n                        .card.singleton .description {\n                            margin-right: auto;\n                        }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n\n                        .checklist-item-controls {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                        }\n"],"sourceRoot":""}]);
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
    let _sampleProjectValues = [['project', '', 'Unsorted', "This is your tasks' default location. Any tasks without a project live here."],
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
/* harmony export */   "h1": () => (/* binding */ h1),
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
const h1 = function(content, ...args) {
    _attributes = [...args];
    element = document.createElement('h1');
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
        console.log(project.id)
        console.log(project[1]);

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

        formFieldset.append(fieldsetLegend, titleDiv, descriptionDiv);

        formInputs = formContainer.querySelectorAll('input');
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
        constructor(projectID, projectTitle, projectDescription) {
            this.type = 'project';
            this.id = projectID;
            this.title = projectTitle;
            this.description = projectDescription;
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
                        itemValueArray = ['project', item.id, item.title, item.description];
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
    
    viewAllButton.addEventListener('click', () => {
        _changeViewPreference('All', '');
    });
    viewTodayButton.addEventListener('click', () => {
        _changeViewPreference('Today', '');
    });
    viewUpcomingButton.addEventListener('click', () => {
        _changeViewPreference('Upcoming', '');
    });
    viewAnytimeButton.addEventListener('click', () => {
        _changeViewPreference('Anytime', '');
    });
    viewUnsortedButton.addEventListener('click', () => {
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
            let liProjectLink = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(title, liID);

            liProjectLink.addEventListener('click', (e) => {
                _changeViewPreference('project', e.target.id);
            });

            projectsList.appendChild(liProjectLink);
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
                break;
            default:
                _changeViewPreference('project', 'project_0');
        };
    }
    function _getTodayDate() {  // ! reduce repetition vvv
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
    function _getUpcomingDate() {   // ! reduce repetition ^^^
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsYUFBYSxPQUFPLEtBQUssV0FBVyxhQUFhLGNBQWMsT0FBTyxVQUFVLFVBQVUsV0FBVyxLQUFLLFlBQVkscUJBQXFCLGFBQWEsWUFBWSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxxQkFBcUIsWUFBWSxvQkFBb0IsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsYUFBYSxlQUFlLGNBQWMsT0FBTyxNQUFNLGFBQWEsUUFBUSxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsY0FBYyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxRQUFRLFdBQVcsVUFBVSxNQUFNLFlBQVksYUFBYSxjQUFjLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxZQUFZLGFBQWEsY0FBYyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsYUFBYSxlQUFlLFlBQVksT0FBTyxPQUFPLGFBQWEsUUFBUSxNQUFNLFdBQVcsYUFBYSxjQUFjLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxXQUFXLGFBQWEsY0FBYyxPQUFPLFFBQVEsWUFBWSxPQUFPLE1BQU0sYUFBYSxjQUFjLFFBQVEsTUFBTSxhQUFhLFlBQVksYUFBYSxRQUFRLE1BQU0sYUFBYSxjQUFjLFFBQVEsTUFBTSxXQUFXLGFBQWEsUUFBUSxNQUFNLGFBQWEsUUFBUSxNQUFNLFdBQVcsYUFBYSxRQUFRLE9BQU8sV0FBVyxhQUFhLFFBQVEsT0FBTyxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxXQUFXLGFBQWEsZUFBZSxZQUFZLE9BQU8sTUFBTSxXQUFXLGFBQWEsY0FBYyxRQUFRLE1BQU0sV0FBVyxhQUFhLGNBQWMsUUFBUSxNQUFNLFdBQVcsUUFBUSxPQUFPLGFBQWEsUUFBUSxNQUFNLFdBQVcsYUFBYSxR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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SitCO0FBQzREOztBQUUzRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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L3N0eWxlcy9jb2xvcnMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvZWZmZWN0cy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zcGFjaW5nLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3R5cG8uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzP2IwZDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9lZmZlY3RzLmNzcz9mNzBmIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zcGFjaW5nLmNzcz8zNzFkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdHlwby5jc3M/NjBlYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkE3MEJEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUFFQztcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbnNlY3Rpb24uZm9ybS1jb250YWluZXI6bm90KC5oaWRlKSB+IC5zaG93LWZpbHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5yZXF1aXJlZC1iYWRnZSxcXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4gICAgZmllbGRzZXQge1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QTcwQkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQUVDO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuc2VjdGlvbi5mb3JtLWNvbnRhaW5lcjpub3QoLmhpZGUpIH4gLnNob3ctZmlsdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnJlcXVpcmVkLWJhZGdlLFxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiAgICBmaWVsZHNldCB7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBjYXJkIGhvdmVyICovXFxuLyogY2FyZCBob3ZlciAqL1xcbi8qIGNhcmQgaG92ZXIgKi9cXG5cXG4uY2FyZC5zaW5nbGV0b24sXFxuLmNhcmQuY2hlY2tsaXN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcmQuc2luZ2xldG9uLFxcbi5jYXJkLmNoZWNrbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC5zaW5nbGV0b246OmFmdGVyLFxcbi5jYXJkLmNoZWNrbGlzdDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDsgbGVmdDogMHB4O1xcbiAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNyUsIDk2JSk7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcblxcbi5jYXJkLnNpbmdsZXRvbjpob3Zlcjo6YWZ0ZXIsXFxuLmNhcmQuY2hlY2tsaXN0OmhvdmVyOjphZnRlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjBzIGVhc2Utb3V0O1xcbn1cXG5cXG5cXG4vKiB2aWV3IHByZWZlcmVuY2UgaG92ZXIgKi9cXG4vKiB2aWV3IHByZWZlcmVuY2UgaG92ZXIgKi9cXG4vKiB2aWV3IHByZWZlcmVuY2UgaG92ZXIgKi9cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2VmZmVjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTs7QUFFZjs7SUFFSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFdBQVc7O0lBRVgsbUNBQW1DOztJQUVuQyxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOzs7QUFHQSwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjYXJkIGhvdmVyICovXFxuLyogY2FyZCBob3ZlciAqL1xcbi8qIGNhcmQgaG92ZXIgKi9cXG5cXG4uY2FyZC5zaW5nbGV0b24sXFxuLmNhcmQuY2hlY2tsaXN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcmQuc2luZ2xldG9uLFxcbi5jYXJkLmNoZWNrbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC5zaW5nbGV0b246OmFmdGVyLFxcbi5jYXJkLmNoZWNrbGlzdDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDsgbGVmdDogMHB4O1xcbiAgICB6LWluZGV4OiAtMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNyUsIDk2JSk7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcblxcbi5jYXJkLnNpbmdsZXRvbjpob3Zlcjo6YWZ0ZXIsXFxuLmNhcmQuY2hlY2tsaXN0OmhvdmVyOjphZnRlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjBzIGVhc2Utb3V0O1xcbn1cXG5cXG5cXG4vKiB2aWV3IHByZWZlcmVuY2UgaG92ZXIgKi9cXG4vKiB2aWV3IHByZWZlcmVuY2UgaG92ZXIgKi9cXG4vKiB2aWV3IHByZWZlcmVuY2UgaG92ZXIgKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbmRlciBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgxLCBoMiwgaDMsIGg0IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxufVxcblxcblxcbi8qIEVNQkVEREVEIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiByZXN0b3JlIGZvY3VzIHN0eWxlcyB1bnNldCBieSBwcmV2aW91cyBydWxlIF5eICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyogY29ycmVjdCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbiAgXFxuLyogMS4gY29ycmVjdCB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UsIElFICovXFxuLyogMi4gY29ycmVjdCBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUgKi9cXG4vKiAzLiByZW1vdmUgcGFkZGluZyBzbyBkZXZzIGFyZW4ndCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvLW91dCAqL1xcbi8qICAgIGBmaWVsZHNldGBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMCAqL1xcbi8qIDIuIHJlbW92ZSBwYWRkaW5nIGluIElFIDEwICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyogSU5URVJBQ1RJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQzs7QUFFckM7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxXQUFXOztJQUV6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsYUFBYTs7SUFFYix3QkFBd0I7QUFDNUI7OztBQUdBLHVDQUF1Qzs7QUFFdkMsNkNBQTZDOztBQUU3QztJQUNJLGNBQWM7QUFDbEI7O0FBRUEsOERBQThEOztBQUU5RDtJQUNJLFNBQVM7QUFDYjs7QUFFQSx5REFBeUQ7O0FBRXpEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsK0NBQStDOztBQUUvQyxrREFBa0Q7O0FBRWxEO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQSxvQ0FBb0M7O0FBRXBDLDBDQUEwQztBQUMxQywyQ0FBMkM7O0FBRTNDOzs7SUFHSSxvQkFBb0IsRUFBRSxNQUFNO0lBQzVCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLGlCQUFpQixFQUFFLE1BQU07SUFDekIsU0FBUyxFQUFFLE1BQU07QUFDckI7O0FBRUEsOEJBQThCOztBQUU5Qjs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUEsOERBQThEOztBQUU5RDs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUEsa0VBQWtFOztBQUVsRTs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUEsNENBQTRDOztBQUU1Qzs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBLG1EQUFtRDs7QUFFbkQ7O0lBRUksOEJBQThCO0FBQ2xDOztBQUVBLCtCQUErQjs7QUFFL0I7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEseUNBQXlDO0FBQ3pDLGdFQUFnRTtBQUNoRSxtRUFBbUU7QUFDbkUsMENBQTBDOztBQUUxQztJQUNJLHNCQUFzQixFQUFFLE1BQU07SUFDOUIsY0FBYyxFQUFFLE1BQU07SUFDdEIsY0FBYyxFQUFFLE1BQU07SUFDdEIsZUFBZSxFQUFFLE1BQU07SUFDdkIsVUFBVSxFQUFFLE1BQU07SUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUMvQjs7QUFFQSx1Q0FBdUM7QUFDdkMsK0JBQStCOztBQUUvQjs7SUFFSSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3RCOzs7QUFHQSwwQ0FBMEM7O0FBRTFDLGlDQUFpQzs7QUFFakM7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVuZGVyIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRSAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDEsIGgyLCBoMywgaDQge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBwYCBlbGVtZW50cyBhY3Jvc3MgYnJvd3NlcnMgKi9cXG5cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBib3JkZXIsIHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKiBjb3JyZWN0IHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuICBcXG4vKiAxLiBjb3JyZWN0IHRleHQgd3JhcHBpbmcgaW4gRWRnZSwgSUUgKi9cXG4vKiAyLiBjb3JyZWN0IGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRSAqL1xcbi8qIDMuIHJlbW92ZSBwYWRkaW5nIHNvIGRldnMgYXJlbid0IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8tb3V0ICovXFxuLyogICAgYGZpZWxkc2V0YGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKiAxLiBhZGQgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwICovXFxuLyogMi4gcmVtb3ZlIHBhZGRpbmcgaW4gSUUgMTAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBJTlRFUkFDVElWRSA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXh0cmEtc21hbGwtcGFkOiBjYWxjKDAuMjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcbiAgICAtLXh0cmEtc21hbGwtZ2FwOiBjYWxjKDAuMjUgKiB2YXIoLS1tYWluLWdhcCkpO1xcblxcbiAgICAtLXNtYWxsLXBhZDogY2FsYygwLjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcbiAgICAtLXNtYWxsLWdhcDogY2FsYygwLjUgKiB2YXIoLS1tYWluLWdhcCkpO1xcblxcbiAgICAtLW1haW4tcGFkOiAxZW07XFxuICAgIC0tbWFpbi1nYXA6IDFlbTtcXG5cXG4gICAgLS1tZWQtcGFkOiBjYWxjKDEuNSAqIHZhcigtLW1haW4tcGFkKSk7XFxuXFxuICAgIC0tbHJnLWdhcDogY2FsYygyICogdmFyKC0tbWFpbi1nYXApKVxcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDBlbTtcXG4gICAgfVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMS4yNWVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4gICAgaGVhZGVyLFxcbiAgICAjc2lkZWJhcixcXG4gICAgI2Rpc3BsYXkge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICB9XFxuXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcbi8qIC0tLSBTSURFQkFSICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAtLXktb2Zmc2V0OiBjYWxjKGNhbGModmFyKC0tbWFpbi1wYWQpICogMikgKyAzLjE1ZW0pO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IHZhcigtLXktb2Zmc2V0KTsgbGVmdDogMGVtO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS15LW9mZnNldCkpO1xcbiAgICB3aWR0aDogMjV2dztcXG59XFxuXFxuICAgIC52aWV3LXByZWZzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICBnYXA6IHZhcigtLWxyZy1nYXApO1xcblxcbiAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLWxyZy1nYXApO1xcbiAgICB9XFxuXFxuICAgICAgICAjc2lkZWJhciB1bCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjc2lkZWJhciB1bCBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjc2lkZWJhciBsaSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlOyBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIFxcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcblxcbiAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxufVxcblxcbnNlY3Rpb24uZm9ybS1jb250YWluZXI6bm90KC5oaWRlKSB+IC5zaG93LWZpbHRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7IHJpZ2h0OiAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7IHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIGZvcm0ge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLW1haW4tcGFkKTtcXG4gICAgfVxcblxcbiAgICAgICAgICAgIC5pbnB1dC1sYWJlbC1ncm91cCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc21hbGwtcGFkKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc21hbGwtcGFkKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kcm9wZG93bnMge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3ducyBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAuZm9ybS1idXR0b25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG4gICAgfVxcblxcbiAgICAgICAgYnV0dG9uLFxcbiAgICAgICAgaW5wdXQsXFxuICAgICAgICBzZWxlY3Qge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXh0cmEtc21hbGwtcGFkKTtcXG4gICAgICAgIH1cXG5cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgIGhlYWRlcidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5IGRpc3BsYXknO1xcblxcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG5cXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG5cXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuXFxuICAgICAgICAjZGlzcGxheSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkaXNwbGF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGRpdi5jYXJkLFxcbiAgICAgICAgICAgICAgICAudGFzay1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLnNvcnQtZHVlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAuaGVhZGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSAgICAgICBjb250cm9scydcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gLic7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAudGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb250cm9scztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zaW5nbGV0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIC5oZWFkZXIsXFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IC5oZWFkZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiAudGl0bGUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCAudGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS14dHJhLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0teHRyYS1zbWFsbC1wYWQpICogMSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlscyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC5jaGVja2xpc3QgLmRlc2NyaXB0aW9uLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLnNpbmdsZXRvbiAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB1bCBsaSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkgbGFiZWwge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QtaXRlbS1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NwYWNpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtJQUNJLDhDQUE4QztJQUM5Qyw4Q0FBOEM7O0lBRTlDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7O0lBRXhDLGVBQWU7SUFDZixlQUFlOztJQUVmLHNDQUFzQzs7SUFFdEM7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztJQUVJOzs7UUFHSSx3QkFBd0I7SUFDNUI7O0FBRUosZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBRWhCO0lBQ0ksb0RBQW9EOztJQUVwRCxrQkFBa0I7SUFDbEIsb0JBQW9CLEVBQUUsU0FBUztJQUMvQixVQUFVOztJQUVWLHFDQUFxQztJQUNyQyxXQUFXO0FBQ2Y7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLG1CQUFtQjs7UUFFbkIsMkJBQTJCO0lBQy9COztRQUVJO1lBQ0ksYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixvQkFBb0I7UUFDeEI7O1lBRUk7Z0JBQ0ksYUFBYTtnQkFDYiw4QkFBOEI7WUFDbEM7O1lBRUE7Z0JBQ0ksYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLDBCQUEwQjtZQUM5Qjs7QUFFWixjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7O0FBRWQ7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0NBQWdDO0lBQ2hDLFVBQVU7O0lBRVYsVUFBVTtJQUNWLGdCQUFnQjs7SUFFaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFVBQVU7O0lBRVYsYUFBYSxFQUFFLFlBQVk7QUFDL0I7O0lBRUk7UUFDSSwrQkFBK0I7SUFDbkM7O1lBRVE7Z0JBQ0ksYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLDBCQUEwQjs7Z0JBRTFCLDRCQUE0QjtZQUNoQzs7Z0JBRUk7b0JBQ0ksNEJBQTRCO2dCQUNoQzs7WUFFSjtnQkFDSSxhQUFhO1lBQ2pCOztnQkFFSTtvQkFDSSxhQUFhO29CQUNiLGlCQUFpQjs7b0JBRWpCLFVBQVU7Z0JBQ2Q7O0lBRVo7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtJQUN6Qjs7UUFFSTs7O1lBR0ksOEJBQThCO1FBQ2xDOztBQUVSLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCOztJQUVaO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUI7OENBQ3NDOztRQUV0QyxlQUFlO1FBQ2YsV0FBVztJQUNmOztBQUVKLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsbUJBQW1COztRQUVYO1lBQ0ksaUJBQWlCOztZQUVqQixhQUFhO1lBQ2IsMkJBQTJCO1lBQzNCLG1CQUFtQjtZQUNuQixvQkFBb0I7O1lBRXBCLFVBQVU7UUFDZDs7WUFFSTtnQkFDSSxXQUFXO1lBQ2Y7O0FBRVosb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7O1FBRVo7WUFDSSxrQkFBa0I7UUFDdEI7O1lBRUk7Z0JBQ0ksYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLDBCQUEwQjs7Z0JBRTFCLFlBQVk7WUFDaEI7O2dCQUVJOztvQkFFSSx3QkFBd0I7Z0JBQzVCOztnQkFFQTtvQkFDSSxhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsbUJBQW1CO2dCQUN2Qjs7Z0JBRUE7b0JBQ0ksa0JBQWtCO2dCQUN0Qjs7b0JBRUk7d0JBQ0ksYUFBYTt3QkFDYiwrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEI7NERBQ29DOzt3QkFFcEMsV0FBVztvQkFDZjs7d0JBRUk7NEJBQ0ksZ0JBQWdCOzRCQUNoQixrQkFBa0I7d0JBQ3RCOzt3QkFFQTs0QkFDSSxtQkFBbUI7NEJBQ25CLGFBQWE7NEJBQ2IsbUJBQW1CO3dCQUN2Qjs7d0JBRUE7NEJBQ0ksc0JBQXNCOzRCQUN0QixrQkFBa0I7d0JBQ3RCOztnQkFFUjtvQkFDSSxhQUFhO29CQUNiLDJCQUEyQjtnQkFDL0I7O29CQUVJO3dCQUNJLGtCQUFrQjtvQkFDdEI7O2dCQUVKO29CQUNJLGFBQWE7b0JBQ2IsdUJBQXVCO2dCQUMzQjs7b0JBRUk7O3dCQUVJLGFBQWE7d0JBQ2IsMEJBQTBCO29CQUM5Qjs7d0JBRUk7OzRCQUVJLGtCQUFrQjt3QkFDdEI7O29CQUVKO3dCQUNJLG1DQUFtQztvQkFDdkM7O29CQUVBO3dCQUNJLDJDQUEyQztvQkFDL0M7O29CQUVBO3dCQUNJLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQiwwQkFBMEI7O3dCQUUxQixXQUFXO29CQUNmOzt3QkFFSTs0QkFDSSxhQUFhOzRCQUNiLDBCQUEwQjs0QkFDMUIseUJBQXlCO3dCQUM3Qjs7Z0JBRVI7b0JBQ0ksYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtnQkFDOUI7O29CQUVJO3dCQUNJLGFBQWE7b0JBQ2pCOzt3QkFFSTs7NEJBRUksa0JBQWtCO3dCQUN0Qjs7b0JBRUo7d0JBQ0ksYUFBYTt3QkFDYixtQkFBbUI7b0JBQ3ZCOzt3QkFFSTs0QkFDSSxrQkFBa0I7d0JBQ3RCOzt3QkFFQTs0QkFDSSxhQUFhOzRCQUNiLDBCQUEwQjt3QkFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXh0cmEtc21hbGwtcGFkOiBjYWxjKDAuMjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcbiAgICAtLXh0cmEtc21hbGwtZ2FwOiBjYWxjKDAuMjUgKiB2YXIoLS1tYWluLWdhcCkpO1xcblxcbiAgICAtLXNtYWxsLXBhZDogY2FsYygwLjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcbiAgICAtLXNtYWxsLWdhcDogY2FsYygwLjUgKiB2YXIoLS1tYWluLWdhcCkpO1xcblxcbiAgICAtLW1haW4tcGFkOiAxZW07XFxuICAgIC0tbWFpbi1nYXA6IDFlbTtcXG5cXG4gICAgLS1tZWQtcGFkOiBjYWxjKDEuNSAqIHZhcigtLW1haW4tcGFkKSk7XFxuXFxuICAgIC0tbHJnLWdhcDogY2FsYygyICogdmFyKC0tbWFpbi1nYXApKVxcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDBlbTtcXG4gICAgfVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMS4yNWVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4gICAgaGVhZGVyLFxcbiAgICAjc2lkZWJhcixcXG4gICAgI2Rpc3BsYXkge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICB9XFxuXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcbi8qIC0tLSBTSURFQkFSICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAtLXktb2Zmc2V0OiBjYWxjKGNhbGModmFyKC0tbWFpbi1wYWQpICogMikgKyAzLjE1ZW0pO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IHZhcigtLXktb2Zmc2V0KTsgbGVmdDogMGVtO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS15LW9mZnNldCkpO1xcbiAgICB3aWR0aDogMjV2dztcXG59XFxuXFxuICAgIC52aWV3LXByZWZzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICBnYXA6IHZhcigtLWxyZy1nYXApO1xcblxcbiAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLWxyZy1nYXApO1xcbiAgICB9XFxuXFxuICAgICAgICAjc2lkZWJhciB1bCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjc2lkZWJhciB1bCBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjc2lkZWJhciBsaSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlOyBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIFxcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcblxcbiAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxufVxcblxcbnNlY3Rpb24uZm9ybS1jb250YWluZXI6bm90KC5oaWRlKSB+IC5zaG93LWZpbHRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7IHJpZ2h0OiAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7IHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIGZvcm0ge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLW1haW4tcGFkKTtcXG4gICAgfVxcblxcbiAgICAgICAgICAgIC5pbnB1dC1sYWJlbC1ncm91cCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc21hbGwtcGFkKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc21hbGwtcGFkKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kcm9wZG93bnMge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3ducyBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAuZm9ybS1idXR0b25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG4gICAgfVxcblxcbiAgICAgICAgYnV0dG9uLFxcbiAgICAgICAgaW5wdXQsXFxuICAgICAgICBzZWxlY3Qge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXh0cmEtc21hbGwtcGFkKTtcXG4gICAgICAgIH1cXG5cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgIGhlYWRlcidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5IGRpc3BsYXknO1xcblxcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG5cXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG5cXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuXFxuICAgICAgICAjZGlzcGxheSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkaXNwbGF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGRpdi5jYXJkLFxcbiAgICAgICAgICAgICAgICAudGFzay1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLnNvcnQtZHVlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAuaGVhZGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSAgICAgICBjb250cm9scydcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gLic7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAudGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb250cm9scztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zaW5nbGV0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIC5oZWFkZXIsXFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IC5oZWFkZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiAudGl0bGUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCAudGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS14dHJhLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0teHRyYS1zbWFsbC1wYWQpICogMSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlscyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC5jaGVja2xpc3QgLmRlc2NyaXB0aW9uLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLnNpbmdsZXRvbiAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB1bCBsaSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkgbGFiZWwge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QtaXRlbS1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5LFxcbmgzLCBoNCwgcCxcXG5idXR0b24sIGlucHV0LCBzZWxlY3QsIGxlZ2VuZCxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgbGksIFxcbi5jYXJkLnByb2plY3QgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4udGFsbHksXFxuLnRhbGx5IHNwYW4sXFxuLmNyZWF0ZSxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgaDQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kYXRlLFxcbi5jYXJkLmNoZWNrbGlzdCAuZGVzY3JpcHRpb24sIFxcbi5jYXJkLnNpbmdsZXRvbiAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbi5kYXRlLCBoMSwgaDIsIGxlZ2VuZCxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2FyZCBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNhcmQucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBOzs7OztJQUtJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSxlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSxcXG5oMywgaDQsIHAsXFxuYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCBsZWdlbmQsXFxuLnZpZXctcHJlZnMtY29udGFpbmVyIHVsIGxpLCBcXG4uY2FyZC5wcm9qZWN0IC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnRhbGx5LFxcbi50YWxseSBzcGFuLFxcbi5jcmVhdGUsXFxuLnZpZXctcHJlZnMtY29udGFpbmVyIHVsIGg0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGF0ZSxcXG4uY2FyZC5jaGVja2xpc3QgLmRlc2NyaXB0aW9uLCBcXG4uY2FyZC5zaW5nbGV0b24gLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4uZGF0ZSwgaDEsIGgyLCBsZWdlbmQsXFxuLnZpZXctcHJlZnMtY29udGFpbmVyIHVsIHNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNhcmQgaDQge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jYXJkLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VmZmVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZmZlY3RzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGFjaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3BhY2luZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHlwby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IF9ldmVudHMgPSB7fTtcblxuICAgIC8vIHN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTVUJTQ1JJQklORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICAvLyB1bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZSgoX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQVUJMSVNISU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHMsXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnXG5cbi8vICYgaW5pdGlhdGVzIGRlZmF1bHQgc3RhdGVcblxuY29uc3QgZGVmYXVsdFN0YXRlID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF9zYW1wbGVQcm9qZWN0VmFsdWVzID0gW1sncHJvamVjdCcsICcnLCAnVW5zb3J0ZWQnLCBcIlRoaXMgaXMgeW91ciB0YXNrcycgZGVmYXVsdCBsb2NhdGlvbi4gQW55IHRhc2tzIHdpdGhvdXQgYSBwcm9qZWN0IGxpdmUgaGVyZS5cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICBsZXQgX3NhbXBsZVRhc2tWYWx1ZXMgPSBbWyd0YXNrJywgJycsICdzaW5nbGV0b24nLCAnVGFzayAxJywgJ3RoaXMgaXMgYSBzYW1wbGUgdGFzaycsICcyMDAxLTAxLTAxJywgMywgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsndGFzaycsICcnLCAnc2luZ2xldG9uJywgJ1Rhc2sgMicsICd0aGlzIGlzICMyJywgJzIwMDItMDItMDInLCAyLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyd0YXNrJywgJycsICdjaGVja2xpc3QnLCAnVGFzayAzJywgJ3RoaXMgaXMgYSBjaGVja2xpc3QnLCAnMjAwMy0wMy0wMycsIDEsIDAsIFsnaXRlbSAxJywgJ2l0ZW0gMicsICdpdGVtIDMnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgIC8vIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBfY3JlYXRlRGVmYXVsdFByb2plY3QoX3NhbXBsZVByb2plY3RWYWx1ZXNbMF0pO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfc2FtcGxlVGFza1ZhbHVlcy5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIF9jcmVhdGVEZWZhdWx0VGFzayhfc2FtcGxlVGFza1ZhbHVlc1t0XSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0UHJvamVjdChwcm9qZWN0VmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCBwcm9qZWN0VmFsdWVzKTsgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0VGFzayh0YXNrVmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCB0YXNrVmFsdWVzKTsgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgICAvLyB1c2VkIGJ5IGluZGV4LmpzXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0U3RhdGU7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkaXYsIGgxLCBoMiwgaDQsIHVsLCBsaSwgc3BhbiwgaW5wdXQsIGxhYmVsLCBpbWcgfSBmcm9tICcuL2VsZW1lbnRzJztcblxuLy8gJiBtYW5hZ2VzIGRpc3BsYXkgRE9NIDwtPiBsaWJyYXJ5IGNvbW11bmljYXRpb25cbi8vICYgY29udGFpbnMgZmFjdG9yaWVzIGZvciBnZW5lcmF0aW5nIGRpc3BsYXkgc2VjdGlvbiBET00gZWxlbWVudHMgLyBncm91cGluZ3NcblxuY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfdGFza0NvdW50ZXIgPSAwO1xuXG4gICAgLy8gY2FjaGUgRE9NXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgIGxldCB0YXNrQ291bnRTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDMudGFsbHkgc3BhbicpO1xuXG4gICAgLy8gKiBjcmVhdGUgdGFzayBsaXN0ZW5lciBpbiBfcmVuZGVyVGFza0NyZWF0ZUJ1dHRvbigpXG4gICAgLy8gKiBtb2RpZnkgJiBkZWxldGUgY2xpY2sgbGlzdGVuZXJzIGluIF9yZW5kZXIuLi5IZWFkZXIoKVxuICAgIC8vICogY3JlYXRlIGNoZWNrbGlzdCBpdGVtIGxpc3RlbmVyIGluIF9yZW5kZXJDaGVja2xpc3REZXNjcml0aW9uQ29udGFpbmVyKClcblxuICAgIC8vIGRpc3BsYXkgbWFuYWdlclxuICAgIGZ1bmN0aW9uIF91cGRhdGVEaXNwbGF5KGluc3RhbmNlQnVuZGxlKSB7XG4gICAgICAgIGxldCB2aWV3UHJlZmVyZW5jZSA9IGluc3RhbmNlQnVuZGxlWzBdO1xuICAgICAgICBsZXQgdmlld1ByZWZlcmVuY2VIZWFkZXJDYXJkO1xuXG4gICAgICAgIHN3aXRjaCAodmlld1ByZWZlcmVuY2UpIHsgICAvLyAhIHJlZHVjZSByZXBldGl0aW9uXG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IChpbnN0YW5jZUJ1bmRsZS5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RJbnN0YW5jZSA9IGluc3RhbmNlQnVuZGxlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZW5kZXJQcm9qZWN0KHByb2plY3RJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZW5kZXJUYXNrKGluc3RhbmNlQnVuZGxlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgdmlld1ByZWZlcmVuY2VIZWFkZXJDYXJkID0gX3JlbmRlclZpZXdQcmVmZXJlbmNlSGVhZGVyQ2FyZChpbnN0YW5jZUJ1bmRsZVswXSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3UHJlZmVyZW5jZUhlYWRlckNhcmQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKGluc3RhbmNlQnVuZGxlLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBfcmVuZGVyVGFzayhpbnN0YW5jZUJ1bmRsZVtpXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3VwZGF0ZUl0ZW0oaXRlbUluc3RhbmNlKSB7XG4gICAgICAgIGxldCBjYXJkSUQ7XG4gICAgICAgIGxldCBjYXJkO1xuXG4gICAgICAgIHN3aXRjaCh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIChpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ3Byb2plY3QnKTpcbiAgICAgICAgICAgICAgICBjYXJkSUQgPSBgcHJvamVjdF8ke2l0ZW1JbnN0YW5jZS5pZH1gO1xuICAgICAgICAgICAgICAgIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSUQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RWYWx1ZXMgPSBbaXRlbUluc3RhbmNlLnRpdGxlLCBpdGVtSW5zdGFuY2UuZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAocHJvamVjdFZhbHVlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoaXRlbUluc3RhbmNlLnR5cGUgPT09ICdzaW5nbGV0b24nIHx8IGl0ZW1JbnN0YW5jZS50eXBlID09PSAnY2hlY2tsaXN0Jyk6XG4gICAgICAgICAgICAgICAgY2FyZElEID0gYHRhc2tfJHtpdGVtSW5zdGFuY2UuaWR9YDtcbiAgICAgICAgICAgICAgICBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZElEKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQgdGFza1ZhbHVlcyA9IFtpdGVtSW5zdGFuY2UudGl0bGUsIGl0ZW1JbnN0YW5jZS5kZXNjcmlwdGlvbiwgaXRlbUluc3RhbmNlLmR1ZURhdGUsIGl0ZW1JbnN0YW5jZS5wcmlvcml0eSwgaXRlbUluc3RhbmNlLnByb2plY3RJRF07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGFza1ZhbHVlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtSW5zdGFuY2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzaW5nbGV0b24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZSBoNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrbGlzdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tWYWx1ZXNbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza1ZhbHVlc1szXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkuc3JjID0gYC4uL3NyYy9pY29ucy9wcmlvcml0eS0ke3Rhc2tWYWx1ZXNbM119LnN2Z2A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0Q2FyZElEID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdFJlZmVyZW5jZSA9IGN1cnJlbnRQcm9qZWN0Q2FyZElELnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tWYWx1ZXNbNF0gIT0gY3VycmVudFByb2plY3RSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RlbGV0ZVRhc2tDYXJkKGNhcmRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoaXRlbUluc3RhbmNlWzBdID09PSAnY2hlY2tib3gnKTogIC8vIGl0ZW1JbnN0YW5jZSBidW5kbGVkIG1hbnVhbGx5IGluIGxpYnJhcnkuanNcbiAgICAgICAgICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGl0ZW1JbnN0YW5jZVsxXTtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tJRCA9IGl0ZW1JbnN0YW5jZVsyXTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxDb250ZW50ID0gaXRlbUluc3RhbmNlWzNdO1xuICAgIFxuICAgICAgICAgICAgICAgIGNhcmRJRCA9IGB0YXNrXyR7dGFza1JlZmVyZW5jZX1fX2xpXyR7Y2hlY2tJRH1gO1xuICAgICAgICAgICAgICAgIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSUQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBjaGVja0xhYmVsID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbENvbnRlbnQ7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBoZWxwZXJzXG4gICAgZnVuY3Rpb24gX2NsZWFyRGlzcGxheSgpIHtcbiAgICAgICAgd2hpbGUgKHByb2plY3RDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlICh0YXNrQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignLScpO1xuICAgICAgICB9O1xuICAgICAgICBfcmVtb3ZlVGFza0NyZWF0ZUJ1dHRvbigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlVGFza0NhcmQoaWQpIHtcbiAgICAgICAgbGV0IHRhcmdldFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFyZ2V0VGFzaylcbiAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignLScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlQ2hlY2tsaXN0SXRlbShpZCkge1xuICAgICAgICBsZXQgbGlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dCMke2lkfWApLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCB1bENvbnRhaW5lciA9IGxpQ29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHVsQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxpQ29udGFpbmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2ZpbGxUYXNrQ291bnRlcihvcGVyYXRvcikge1xuICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICBfdGFza0NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIF90YXNrQ291bnRlci0tO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50U3Bhbi50ZXh0Q29udGVudCA9IF90YXNrQ291bnRlcjtcbiAgICB9XG4gICAgXG4gICAgLy8gcHJvamVjdCBmYWN0b3JpZXNcbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgaWYgKHByb2plY3RDb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIF9jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY2FyZElEID0gJyNwcm9qZWN0XycgKyBwcm9qZWN0LmlkO1xuICAgICAgICBsZXQgcHJvamVjdENhcmQgPSBkaXYoJycsICcuY2FyZCcsICcucHJvamVjdCcsIGNhcmRJRCk7XG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGVyID0gX3JlbmRlclByb2plY3RIZWFkZXIocHJvamVjdC5kZXNjcmlwdGlvbiwgcHJvamVjdC5pZCwgcHJvamVjdC50aXRsZSk7XG5cbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXG4gICAgICAgIF9yZW5kZXJUYXNrQ3JlYXRlQnV0dG9uKCk7XG5cbiAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignJyk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0SGVhZGVyID0gZnVuY3Rpb24oZGVzY3JpcHRpb24sIGlkLCB0aXRsZSkge1xuICAgICAgICBsZXQgZGl2SGVhZGVyID0gZGl2KCcnLCAnLmhlYWRlcicpO1xuXG4gICAgICAgIGxldCBoMlRpdGxlID0gaDIodGl0bGUsICcudGl0bGUnKTtcbiAgICAgICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRpdihkZXNjcmlwdGlvbiwgJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kKGgyVGl0bGUsIHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgICAgIGlmIChpZCAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IGRpdlByb2plY3RDb250cm9scyA9IGRpdignJywgJy5wcm9qZWN0LWNvbnRyb2xzJyk7XG5cbiAgICAgICAgICAgIGxldCBpbWdNb2RpZnkgPSBpbWcoJ3NyYy9pY29ucy9lZGl0LnN2ZycsICdtb2RpZnkgcHJvamVjdCcsICcucHJvamVjdCcsICcubW9kaWZ5Jyk7XG4gICAgICAgICAgICAvLyAqIHByb2plY3QgbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgICAgIGltZ01vZGlmeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgaW1nRGVsZXRlID0gaW1nKCdzcmMvaWNvbnMvZGVsZXRlLnN2ZycsICdkZWxldGUgcHJvamVjdCcsICcuZGVsZXRlJyk7XG4gICAgICAgICAgICBpbWdEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0RlbGV0ZVByb2plY3QnLCBjYXJkSUQpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkaXZQcm9qZWN0Q29udHJvbHMuYXBwZW5kKGltZ01vZGlmeSwgaW1nRGVsZXRlKTtcbiAgICAgICAgICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChkaXZQcm9qZWN0Q29udHJvbHMpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRpdkhlYWRlcjtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclZpZXdQcmVmZXJlbmNlSGVhZGVyQ2FyZCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGxldCB2aWV3Q2FyZCA9IGRpdignJywgJy5jYXJkJywgJy5zb3J0LWR1ZScpO1xuICAgICAgICBsZXQgdmlld0hlYWRlciA9IGgyKHRpdGxlLCAnJyk7XG4gICAgICAgIHZpZXdDYXJkLmFwcGVuZENoaWxkKHZpZXdIZWFkZXIpO1xuXG4gICAgICAgIHJldHVybiB2aWV3Q2FyZDtcbiAgICB9XG5cbiAgICAvLyB0YXNrIGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJUYXNrQ3JlYXRlQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBkaXZDcmVhdGUgPSBkaXYoJysnLCAnLmNyZWF0ZScpO1xuXG4gICAgICAgIGRpdkNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0NyZWF0ZUl0ZW0nLCAndGFzaycpOyAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza0NvbnRyb2xzID0gdGFza0NvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgICAgICAgdGFza0NvbnRyb2xzLmFwcGVuZChkaXZDcmVhdGUpO1xuICAgIH1cbiAgICBjb25zdCBfcmVtb3ZlVGFza0NyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdGFza0NvbnRyb2xzID0gdGFza0NvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IGNvbnRyb2xzTGVuZ3RoID0gdGFza0NvbnRyb2xzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgbGV0IGxhc3RDb250cm9sID0gdGFza0NvbnRyb2xzLmNoaWxkcmVuW2NvbnRyb2xzTGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGxhc3RDb250cm9sLmNsYXNzTGlzdC5jb250YWlucygnY3JlYXRlJykpIHtcbiAgICAgICAgICAgIHRhc2tDb250cm9scy5yZW1vdmVDaGlsZChsYXN0Q29udHJvbCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgICAgICBsZXQgY2FyZElEID0gJ3Rhc2tfJyArIHRhc2suaWQ7XG4gICAgICAgIGxldCB0YXNrQ2FyZDtcblxuICAgICAgICBzd2l0Y2ggKHRhc2sudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc2luZ2xldG9uJzpcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZCA9IGRpdignJywgJy5jYXJkJywgJy5zaW5nbGV0b24nLCBgIyR7Y2FyZElEfWApXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZXRvbkNoZWNrbWFyayA9IGlucHV0KCdjaGVja2JveCcsICcnLCAnJywgdGFzay5pZCwgJycpO1xuICAgICAgICAgICAgICAgIGxldCBzaW5nbGV0b25DYXJkQ29udGVudCA9IF9yZW5kZXJTaW5nbGV0b25Db250ZW50KHRhc2suaWQsIHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kKHNpbmdsZXRvbkNoZWNrbWFyaywgc2luZ2xldG9uQ2FyZENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZCA9IGRpdignJywgJy5jYXJkJywgJy5jaGVja2xpc3QnLCBgIyR7Y2FyZElEfWAsIGAucHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApO1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RDYXJkQ29udGVudCA9IF9yZW5kZXJDaGVja2xpc3RDYXJkQ29udGVudHModGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbXMgPSBfcmVuZGVyQ2hlY2tib3hDb250YWluZXIoY2FyZElELCB0YXNrLml0ZW1zKTtcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmQoY2hlY2tsaXN0Q2FyZENvbnRlbnQsIGNoZWNrbGlzdEl0ZW1zKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCcrJyk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJTaW5nbGV0b25Db250ZW50ID0gZnVuY3Rpb24oaWQsIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGRpdkNvbnRlbnQgPSBkaXYoJycsICcuY29udGVudCcpO1xuXG4gICAgICAgIGxldCB0YXNrSGVhZGVyID0gX3JlbmRlclNpbmdsZXRvbkhlYWRlcihpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRpdihkZXNjcmlwdGlvbiwgJy5kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kKHRhc2tIZWFkZXIsIHRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBkaXZDb250ZW50O1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyU2luZ2xldG9uSGVhZGVyID0gZnVuY3Rpb24oaWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgZGl2SGVhZGVyID0gZGl2KCcnLCAnLmhlYWRlcicpO1xuXG4gICAgICAgIGxldCBsYWJlbENoZWNrbWFya1RpdGxlID0gbGFiZWwoJycsIGlkLCAnLnRpdGxlJyk7XG4gICAgICAgIGxldCBoNFRpdGxlQ29udGVudCA9IGg0KHRpdGxlLCAnJyk7XG4gICAgICAgIGxhYmVsQ2hlY2ttYXJrVGl0bGUuYXBwZW5kQ2hpbGQoaDRUaXRsZUNvbnRlbnQpO1xuXG4gICAgICAgIGxldCBpbWdBbHQ7XG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpbWdBbHQgPSAnbm8gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdsb3cgcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdtZWRpdW0gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdoaWdoIHByaW9yaXR5JztcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1nUHJpb3JpdHkgPSBpbWcoYHNyYy9pY29ucy9wcmlvcml0eS0ke3ByaW9yaXR5fS5zdmdgLCBpbWdBbHQsICcucHJpb3JpdHknKTtcblxuICAgICAgICBsZXQgc3BhbkRhdGUgPSBzcGFuKGR1ZURhdGUsICcuZGF0ZScpO1xuICAgICAgICBsZXQgaW1nTW9kaWZ5ID0gaW1nKCdzcmMvaWNvbnMvZWRpdC5zdmcnLCAnbW9kaWZ5IHRhc2snLCAnLnRhc2snLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgaW1nRGVsZXRlID0gaW1nKCdzcmMvaWNvbnMvZGVsZXRlLnN2ZycsICdkZWxldGUgdGFzaycsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBzaW5nbGV0b24gbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgaW1nTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBpbWdEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgICAgIGxldCB0YXNrQ2FyZElEID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmQnKS5pZDtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0RlbGV0ZVRhc2snLCB0YXNrQ2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZChsYWJlbENoZWNrbWFya1RpdGxlLCBzcGFuRGF0ZSwgaW1nUHJpb3JpdHksIGltZ01vZGlmeSwgaW1nRGVsZXRlKTtcbiAgICAgICAgcmV0dXJuIGRpdkhlYWRlcjtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdENhcmRDb250ZW50cyA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGRpdkNvbnRlbnQgPSBkaXYoJycsICcuY29udGVudCcpO1xuICAgICAgICBsZXQgY2hlY2tsaXN0SGVhZGVyID0gX3JlbmRlckNoZWNrbGlzdEhlYWRlcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBsZXQgY2hlY2tsaXN0RGVzY3JpcHRpb24gPSBfcmVuZGVyQ2hlY2tsaXN0U3ViaGVhZGVyKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kKGNoZWNrbGlzdEhlYWRlciwgY2hlY2tsaXN0RGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gZGl2Q29udGVudDtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdEhlYWRlciA9IGZ1bmN0aW9uKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgZGl2SGVhZGVyID0gZGl2KCcnLCAnLmhlYWRlcicpO1xuXG4gICAgICAgIGxldCBoNFRpdGxlID0gaDQodGl0bGUsICcudGl0bGUnKTtcbiAgICAgICAgbGV0IHNwYW5EYXRlID0gc3BhbihkdWVEYXRlLCAnLmRhdGUnKTtcblxuICAgICAgICBsZXQgaW1nQWx0O1xuICAgICAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaW1nQWx0ID0gJ25vIHByaW9yaXR5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpbWdBbHQgPSAnbG93IHByaW9yaXR5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpbWdBbHQgPSAnbWVkaXVtIHByaW9yaXR5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpbWdBbHQgPSAnaGlnaCBwcmlvcml0eSc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGltZ1ByaW9yaXR5ID0gaW1nKGBzcmMvaWNvbnMvcHJpb3JpdHktJHtwcmlvcml0eX0uc3ZnYCwgaW1nQWx0LCAnLnByaW9yaXR5Jyk7XG5cbiAgICAgICAgbGV0IGltZ01vZGlmeSA9IGltZygnc3JjL2ljb25zL2VkaXQuc3ZnJywgJ21vZGlmeSB0YXNrJywgJy50YXNrJywgJy5tb2RpZnknKTtcbiAgICAgICAgbGV0IGltZ0RlbGV0ZSA9IGltZygnc3JjL2ljb25zL2RlbGV0ZS5zdmcnLCAnZGVsZXRlIHRhc2snLCAnLmRlbGV0ZScpO1xuXG4gICAgICAgIC8vICogY2hlY2tsaXN0IG1vZGlmeS9kZWxldGUgZXZlbnRzXG4gICAgICAgIGltZ01vZGlmeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tNb2RpZnlJdGVtJywgZSk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBjYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlVGFzaycsIGNhcmRJRCk7ICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmQoaDRUaXRsZSwgc3BhbkRhdGUsIGltZ1ByaW9yaXR5LCBpbWdNb2RpZnksIGltZ0RlbGV0ZSk7XG4gICAgICAgIHJldHVybiBkaXZIZWFkZXI7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2xpc3RTdWJoZWFkZXIgPSBmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgZGl2Q29udGFpbmVyID0gZGl2KCcnLCAnLmRlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRpdkRlc2NyaXB0aW9uID0gZGl2KGRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBzcGFuQ3JlYXRlID0gZGl2KCcrJywgJy5jcmVhdGUnKTtcblxuICAgICAgICAvLyAqIGNoZWNrbGlzdCBpdGVtIGNyZWF0ZSBldmVudFxuICAgICAgICBzcGFuQ3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmQnKS5pZC5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgbGV0IGZvcm1SZWZlcmVuY2VzID0gWydjaGVja2JveCcsIHRhc2tSZWZlcmVuY2VdO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrQ3JlYXRlSXRlbScsIGZvcm1SZWZlcmVuY2VzKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdkNvbnRhaW5lci5hcHBlbmQoZGl2RGVzY3JpcHRpb24sIHNwYW5DcmVhdGUpO1xuICAgICAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tib3hDb250YWluZXIgPSBmdW5jdGlvbih0YXNrQ2FyZElELCBpdGVtcykge1xuICAgICAgICBsZXQgdWxJdGVtID0gdWwoJycsICcuY2hlY2tib3hlcycpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGl0ZW1zLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgX3JlbmRlckNoZWNrYm94KHVsSXRlbSwgdGFza0NhcmRJRCwgaXRlbXNbaV0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHVsSXRlbTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrYm94ID0gZnVuY3Rpb24oY2hlY2tsaXN0Q29udGFpbmVyLCB0YXNrQ2FyZElELCBjaGVja0luZm8pIHtcbiAgICAgICAgbGV0IGNoZWNrSUQgPSBjaGVja0luZm9bMF07XG4gICAgICAgIGxldCBjaGVja0NvbnRlbnQgPSBjaGVja0luZm9bMV07XG5cbiAgICAgICAgbGV0IGxpQ2FyZElEID0gYCMke3Rhc2tDYXJkSUR9X19saV8ke2NoZWNrSUR9YDtcbiAgICAgICAgbGV0IGxpQ2FyZCA9IGxpKCcnLCAnLmNhcmQnLCBsaUNhcmRJRCk7XG5cbiAgICAgICAgbGV0IGNoZWNrYm94SUQgPSBgJHt0YXNrQ2FyZElEfV9fY2hlY2tib3hfJHtjaGVja0lEfWA7ICAvLyAjIG5vdCBuZWVkZWQgdnZcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gaW5wdXQoJ2NoZWNrYm94JywgJycsICcnLCBjaGVja2JveElELCAnJyk7ICAvLyBzZXRzIElEIGRpcmVjdGx5IHZpYSBkZWZhdWx0IG9iamVjdCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgICAvLyAhIHNldCBwcmlvcml0eSBjbGFzcyBjb2xvclxuICAgICAgICBsZXQgbGFiZWxDaGVja2JveCA9IGxhYmVsKGNoZWNrQ29udGVudCwgY2hlY2tib3hJRCwgJycpO1xuICAgICAgICBsZXQgY2hlY2tib3hDb250cm9scyA9IF9yZW5kZXJDaGVja2JveENvbnRyb2xzKGNoZWNrYm94SUQpO1xuXG4gICAgICAgIGxpQ2FyZC5hcHBlbmQoY2hlY2tib3gsIGxhYmVsQ2hlY2tib3gsIGNoZWNrYm94Q29udHJvbHMpO1xuICAgICAgICBjaGVja2xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlDYXJkKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlck5ld0NoZWNrYm94ID0gZnVuY3Rpb24oY2hlY2tsaXN0SW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBjaGVja2xpc3RJbnN0YW5jZVsxXVxuICAgICAgICBsZXQgdGFza0NhcmRJRCA9IGB0YXNrXyR7dGFza1JlZmVyZW5jZX1gO1xuICAgICAgICBsZXQgdWxUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYjJHt0YXNrQ2FyZElEfSB1bGApO1xuXG4gICAgICAgIGxldCBjaGVja1JlZmVyZW5jZSA9IGNoZWNrbGlzdEluc3RhbmNlWzJdO1xuICAgICAgICBsZXQgY2hlY2tDb250ZW50ID0gY2hlY2tsaXN0SW5zdGFuY2VbM107XG5cbiAgICAgICAgX3JlbmRlckNoZWNrYm94KHVsVGFyZ2V0LCB0YXNrQ2FyZElELCBbY2hlY2tSZWZlcmVuY2UsIGNoZWNrQ29udGVudF0pO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tib3hDb250cm9scyA9IGZ1bmN0aW9uKGNoZWNrSUQpIHtcbiAgICAgICAgbGV0IGRpdkNvbnRyb2xzID0gZGl2KCcnLCAnLmNoZWNrbGlzdC1pdGVtLWNvbnRyb2xzJyk7XG5cbiAgICAgICAgbGV0IGltZ01vZGlmeSA9IGltZygnc3JjL2ljb25zL2VkaXQuc3ZnJywgJ21vZGlmeSB0YXNrJywgJy50YXNrJywgJy5tb2RpZnknKTtcbiAgICAgICAgbGV0IGltZ0RlbGV0ZSA9IGltZygnc3JjL2ljb25zL2RlbGV0ZS5zdmcnLCAnZGVsZXRlIHRhc2snLCAnLmRlbGV0ZScpO1xuXG4gICAgICAgIC8vICogY2hlY2tsaXN0IGl0ZW0gbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgaW1nTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlQ2hlY2tsaXN0SXRlbScsIGNoZWNrSUQpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2Q29udHJvbHMuYXBwZW5kKGltZ01vZGlmeSwgaW1nRGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gZGl2Q29udHJvbHM7XG4gICAgfVxuXG5cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3VwZGF0ZURpc3BsYXlWaWV3JywgX3VwZGF0ZURpc3BsYXkpOyAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2J1bmRsZUluc3RhbmNlcygpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncHJvamVjdENyZWF0ZWQnLCBfcmVuZGVyUHJvamVjdCkgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfY3JlYXRlUHJvamVjdCgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Rhc2tDcmVhdGVkJywgX3JlbmRlclRhc2spOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfY3JlYXRlVGFzaygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NoZWNrYm94Q3JlYXRlZCcsIF9yZW5kZXJOZXdDaGVja2JveCk7ICAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2NyZWF0ZUNoZWNrYm94KCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdpdGVtTW9kaWZpZWQnLCBfdXBkYXRlSXRlbSk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9tb2RpZnkuLi4oKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZVByb2plY3RGcm9tU2VjdGlvbicsIF9jbGVhckRpc3BsYXkpIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9kZWxldGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVtb3ZlVGFza0Zyb21EaXNwbGF5JywgX2RlbGV0ZVRhc2tDYXJkKTsgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2RlbGV0ZVRhc2soKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVDaGVja2xpc3RJdGVtRnJvbURpc3BsYXknLCBfZGVsZXRlQ2hlY2tsaXN0SXRlbSkgICAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2RlbGV0ZUNoZWNrbGlzdEl0ZW0oKSlcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7IiwiLy8gJiBmYWN0b3J5IGNsYXNzIGZvciBiYXNlLWxldmVsIERPTSBlbGVtZW50c1xuXG4vLyBkYXRhXG5sZXQgX2F0dHJpYnV0ZXMgPSBbXTtcbmxldCBlbGVtZW50O1xuXG4vLyBiYXNpYyBoZWxwZXIgZmFjdG9yaWVzXG5jb25zdCBkaXYgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBzcGFuID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IHAgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgaDEgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGgyID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBoNCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgdWwgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGxpID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBpbnB1dCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyLCBpZCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgZWxlbWVudC5pZCA9IFN0cmluZyhpZCk7XG4gICAgZWxlbWVudC5uYW1lID0gU3RyaW5nKG5hbWUpO1xuICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gU3RyaW5nKGlkKTtcbiAgICB9O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3Qgc2VsZWN0ID0gZnVuY3Rpb24obmFtZSwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50Lm5hbWUgPSBuYW1lO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3Qgb3B0aW9uID0gZnVuY3Rpb24odmFsdWUsIGNvbnRlbnQpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgbGFiZWwgPSBmdW5jdGlvbihjb250ZW50LCBmb3JSZWZlcmVuY2UsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LmZvciA9IFN0cmluZyhmb3JSZWZlcmVuY2UpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBsZWdlbmQgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBpbWcgPSBmdW5jdGlvbih1cmwsIGFsdCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnNyYyA9IGAuLi8ke3VybH1gO1xuICAgIGVsZW1lbnQuYWx0ID0gYWx0O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXR0cmlidXRlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcuJykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlkID0gYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGRpdiBhcyBkZWZhdWx0LCBzcGFuLCBwLCBoMSwgaDIsIGg0LCB1bCwgbGksIGlucHV0LCBzZWxlY3QsIG9wdGlvbiwgbGFiZWwsIGxlZ2VuZCwgaW1nIH07IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkaXYsIHNwYW4sIHAsIGlucHV0LCBsYWJlbCwgc2VsZWN0LCBvcHRpb24sIGxlZ2VuZCB9IGZyb20gJy4vZWxlbWVudHMnO1xuXG4vLyAmIG1hbmFnZXMgZGlzcGxheS9zaWRlYmFyIHNlY3Rpb24gRE9NcyAtPiBmb3JtIHNlY3Rpb24gRE9NcyA8LT4gbGlicmFyeSBjb21tdW5pY2F0aW9uXG4vLyAmIGNvbnRhaW5zIGZhY3RvcmllcyBmb3IgZ2VuZXJhdGluZyBmb3JtIHNlY3Rpb24gRE9NIGVsZW1lbnRzIC8gZ3JvdXBpbmdzXG5cbmNvbnN0IGZvcm1zID0gKCgpID0+IHtcbiAgICAvLyBsZXQgX2N1cnJlbnRGb3JtO1xuICAgIGxldCBfY3VycmVudEZvcm1UeXBlO1xuICAgIGxldCBfY3VycmVudFByb2plY3Q7XG5cbiAgICAvLyBjYWNoZSBET01cbiAgICBsZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgIGxldCBmb3JtRmllbGRzZXQgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ZpZWxkc2V0Jyk7XG4gICAgbGV0IGZvcm1JbnB1dHM7IC8vICogcXVlcmllZCBhZnRlciBmb3JtIGVsZW1lbnRzIGFyZSByZW5kZXJlZFxuICAgIGxldCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLmNvbmZpcm0nKTtcbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLmNhbmNlbCcpO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gICAgY29uZmlybUJ1dHRvbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBfY29uZmlybUlucHV0KGUpO1xuICAgIH0pKTtcbiAgICBjYW5jZWxCdXR0b24uZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBfY2FuY2VsSW5wdXQoKTtcbiAgICB9KSk7XG5cbiAgICAvLyBmb3JtIG1hbmFnZXJzXG4gICAgZnVuY3Rpb24gX29wZW5DcmVhdGVGb3JtKGZvcm1SZWZlcmVuY2UpIHtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgKCh0eXBlb2YgZm9ybVJlZmVyZW5jZSkgPT09ICdvYmplY3QnKTogICAvLyAqIHN0b3JlcyB0YXNrIHJlZmVyZW5jZSB3aGVuIGNyZWF0aW5nIG5ldyBjaGVja2xpc3QgaXRlbVxuICAgICAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gZm9ybVJlZmVyZW5jZVsxXTtcbiAgICAgICAgICAgICAgICBfc2V0Rm9ybVJlZmVyZW5jZXMoZm9ybVJlZmVyZW5jZVswXSk7XG4gICAgICAgICAgICAgICAgX3JlbmRlckNoZWNrYm94Rm9ybSh0YXNrUmVmZXJlbmNlLCAnQ3JlYXRlIE5ldyBDaGVja2xpc3QgSXRlbScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoKHR5cGVvZiBmb3JtUmVmZXJlbmNlKSA9PT0gJ3N0cmluZycpOlxuICAgICAgICAgICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jdXJyZW50Rm9ybVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVuZGVyUHJvamVjdEZvcm0oJ0NyZWF0ZSBOZXcgUHJvamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlbmRlclRhc2tGb3JtKCdDcmVhdGUgTmV3IFRhc2snKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIF9zaG93Rm9ybSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfb3Blbk1vZGlmeUluc3RhbmNlUXVlcnkoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldEl0ZW1SZWZlcmVuY2VzO1xuXG4gICAgICAgIGxldCBpc0NoZWNrYm94O1xuICAgICAgICBzd2l0Y2godHJ1ZSkgIHtcbiAgICAgICAgICAgIGNhc2UgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsaS5jYXJkJykgPT09IG51bGwpOlxuICAgICAgICAgICAgICAgIGlzQ2hlY2tib3ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsaS5jYXJkJykgIT09IG51bGwpOlxuICAgICAgICAgICAgICAgIGlzQ2hlY2tib3ggPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaCAoaXNDaGVja2JveCkge1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICB0YXJnZXRJdGVtUmVmZXJlbmNlcyA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1UeXBlUmVmZXJlbmNlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94UmVmZXJlbmNlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKS5pZC5zcGxpdCgnX18nKVsxXS5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgICAgIHRhcmdldEl0ZW1SZWZlcmVuY2VzID0gW2Zvcm1UeXBlUmVmZXJlbmNlLCBbdGFza1JlZmVyZW5jZSwgY2hlY2tib3hSZWZlcmVuY2VdXTsgLy8gKiB0YXNrUmVmZXJlbmNlICYgY2hlY2tib3hSZWZlcmVuY2UgbXVzdCBiZSBidW5kbGVkLCBzcGxpdCBpbiBsaWJyYXJ5LmpzXG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5Nb2RpZnlJbnN0YW5jZVF1ZXJ5JywgdGFyZ2V0SXRlbVJlZmVyZW5jZXMpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9vcGVuTW9kaWZ5Rm9ybShpdGVtVmFsdWVzKSB7XG4gICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhpdGVtVmFsdWVzWzBdKTtcbiAgICAgICAgX2ZpbGxGb3JtVmFsdWVzKGl0ZW1WYWx1ZXMpO1xuICAgICAgICBfc2hvd0Zvcm0oKTtcbiAgICB9XG5cbiAgICAvLyBmb3JtIGFjdGlvbnNcbiAgICBmdW5jdGlvbiBfY29uZmlybUlucHV0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhfY3VycmVudEZvcm1UeXBlKTtcbiAgICAgICAgc3dpdGNoIChfY3VycmVudEZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUtY29uZmlybSc6XG4gICAgICAgICAgICAgICAgX2hpZGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RDYXJkSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucHJvamVjdC5jYXJkJykuaWQ7XG4gICAgICAgICAgICAgICAgX2NsZWFyRm9ybVZhbHVlcygpO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtRGVsZXRlUHJvamVjdCcsIHByb2plY3RDYXJkSUQpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0YXNrIG9yIHByb2plY3QnKVxuICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gX3ZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oaWRlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1WYWx1ZXMgPSBfYnVuZGxlRm9ybVZhbHVlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2ZpbmRFcnJvcnMoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGVhckZvcm1WYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCBmb3JtVmFsdWVzKTsgICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9maW5kRXJyb3JzKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NhbmNlbElucHV0KCkge1xuICAgICAgICBfaGlkZUZvcm0oKTtcbiAgICAgICAgX2NsZWFyRm9ybVZhbHVlcygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2hvd0RlbGV0ZVByb2plY3RDb25maXJtYXRpb24oKSB7XG4gICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcygnZGVsZXRlLWNvbmZpcm0nKTtcbiAgICAgICAgX3JlbmRlckRlbGV0ZUNvbmZpcm1hdGlvbkZvcm0oKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyIG1ldGhvZHMgIFxuICAgIGZ1bmN0aW9uIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlKSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9ICdwcm9qZWN0LWZvcm0nXG4gICAgICAgICAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICdwcm9qZWN0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAndGFzay1mb3JtJ1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAndGFzayc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9ICdjaGVja2JveC1mb3JtJ1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlLWNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAnZGVsZXRlLWNvbmZpcm0nO1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAnZGVsZXRlLWNvbmZpcm0nO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmlkKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0WzFdKTtcblxuICAgICAgICBpZiAocHJvamVjdC5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfY3VycmVudFByb2plY3QgPSBwcm9qZWN0LmlkO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2hvd0Zvcm0oKSB7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfaGlkZUZvcm0oKSB7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZmlsbEZvcm1WYWx1ZXModmFsdWVzKSB7XG4gICAgICAgIHN3aXRjaCAoX2N1cnJlbnRGb3JtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgX3JlbmRlclByb2plY3RGb3JtKCdFZGl0IFByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmb3JtSW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgX3JlbmRlclRhc2tGb3JtKCdFZGl0IFRhc2snKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8ICh2YWx1ZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbaSAtIDFdLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWVzWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NpbmdsZXRvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRzWzFdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrbGlzdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRzWzJdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbaV0udmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfZGlzYWJsZVRhc2tUeXBlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlUmVmZXJlbmNlcyA9IGAke3ZhbHVlc1sxXX1fJHt2YWx1ZXNbMl19YDsgICAvLyAqIHBhc3NlZCB0byBsaWJyYXJ5IGZvciBpbmRleGluZyBjb3JyZWN0IHRhc2sgJiYgY2hlY2tsaXN0IGl0ZW1cbiAgICAgICAgICAgICAgICBfcmVuZGVyQ2hlY2tib3hGb3JtKGluc3RhbmNlUmVmZXJlbmNlcywgJ0VkaXQgQ2hlY2tsaXN0IEl0ZW0nKTtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXRzWzFdLnZhbHVlID0gdmFsdWVzWzNdO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfYnVuZGxlRm9ybVZhbHVlcygpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhfY3VycmVudEZvcm1UeXBlKTtcbiAgICAgICAgbGV0IGZvcm1WYWx1ZXMgPSBbXTtcblxuICAgICAgICBzd2l0Y2ggKF9jdXJyZW50Rm9ybVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaCgncHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZvcm1JbnB1dHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKCd0YXNrJyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZm9ybUlucHV0cy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgKChpID4gMikgJiYgKGkgPCA4KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDEgfHwgaSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1JbnB1dHNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKGZvcm1JbnB1dHNbMF0udmFsdWUuc3BsaXQoJ18nKVswXSk7XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKGZvcm1JbnB1dHNbMF0udmFsdWUuc3BsaXQoJ18nKVsxXSk7XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKGZvcm1JbnB1dHNbMV0udmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmb3JtVmFsdWVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY2xlYXJGb3JtVmFsdWVzKCkge1xuICAgICAgICBfcmVtb3ZlRm9ybUVsZW1lbnRzKCk7XG4gICAgICAgIGlmIChfY3VycmVudEZvcm1UeXBlICE9PSAnZGVsZXRlLWNvbmZpcm0nKSB7XG4gICAgICAgICAgICBpZiAoZm9ybUlucHV0c1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXRzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0Jyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9ybUlucHV0c1swXS52YWx1ZSA9ICcnO1xuICAgICAgICB9O1xuICAgICAgICBmb3JtSW5wdXRzID0gJyc7XG4gICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAnJztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3JlbW92ZUZvcm1FbGVtZW50cygpIHtcbiAgICAgICAgbGV0IGZpZWxkc2V0Q2hpbGRyZW5MZW5ndGggPSBmb3JtRmllbGRzZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmaWVsZHNldENoaWxkcmVuTGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICB3aGlsZSAoZm9ybUZpZWxkc2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBmb3JtRmllbGRzZXQucmVtb3ZlQ2hpbGQoZm9ybUZpZWxkc2V0Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGlzYWJsZVRhc2tUeXBlU2VsZWN0aW9uKCkge1xuICAgICAgICBmb3JtSW5wdXRzWzFdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZm9ybUlucHV0c1syXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF92YWxpZGF0ZUZvcm0oKSB7XG4gICAgICAgIHJldHVybiBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9maW5kRXJyb3JzKHByb2Nlc3MpIHtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQ7XG4gICAgICAgIGZvcm1JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuaWQuc3BsaXQoJy0nKVsxXSA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN3aXRjaCAocHJvY2Vzcykge1xuICAgICAgICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICAgICAgICAgX3Nob3dFcnJvck1lc3NhZ2UodGl0bGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgICAgICAgICBfaGlkZUVycm9yTWVzc2FnZSh0aXRsZUlucHV0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3Nob3dFcnJvck1lc3NhZ2UoaW5wdXQpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gaW5wdXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgbGFiZWwubGFzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2hpZGVFcnJvck1lc3NhZ2UoaW5wdXQpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gaW5wdXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgbGFiZWwubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JtIGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKGZvcm1UaXRsZSkge1xuICAgICAgICBsZXQgZmllbGRzZXRMZWdlbmQgPSBsZWdlbmQoZm9ybVRpdGxlLCAnJyk7XG5cbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBzcGFuUmVxdWlyZWRCYWRnZSA9IHNwYW4oJyonLCAnLnJlcXVpcmVkLWJhZGdlJyk7XG4gICAgICAgIGxldCBzcGFuRXJyb3JNZXNzYWdlID0gc3BhbigncGxlYXNlIGluY2x1ZGUgYSB0aXRsZScsICcuZXJyb3ItbWVzc2FnZScsICcuaGlkZScpO1xuICAgICAgICBsZXQgbGFiZWxUaXRsZSA9IGxhYmVsKCdUaXRsZSAnLCAncHJvamVjdC10aXRsZScpO1xuICAgICAgICBsYWJlbFRpdGxlLmFwcGVuZChzcGFuUmVxdWlyZWRCYWRnZSwgc3BhbkVycm9yTWVzc2FnZSk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gaW5wdXQoJ3RleHQnLCAncHJvamVjdC10aXRsZScsICd0aXRsZScsICdwcm9qZWN0LXRpdGxlJywgJycpO1xuICAgICAgICBpbnB1dFRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgaW5wdXRUaXRsZS5hcmlhUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmQobGFiZWxUaXRsZSwgaW5wdXRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBsYWJlbERlc2NyaXB0aW9uID0gbGFiZWwoJ0Rlc2NyaXB0aW9uJywgJy5wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gaW5wdXQoJ3RleHQnLCAncHJvamVjdC1kZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicsICdwcm9qZWN0LWRlc2NyaXB0aW9uJywgJycpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQobGFiZWxEZXNjcmlwdGlvbiwgaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgZm9ybUZpZWxkc2V0LmFwcGVuZChmaWVsZHNldExlZ2VuZCwgdGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2KTtcblxuICAgICAgICBmb3JtSW5wdXRzID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyVGFza0Zvcm0gPSBmdW5jdGlvbihmb3JtVGl0bGUpIHsgICAgICAgIFxuICAgICAgICBsZXQgZmllbGRzZXRMZWdlbmQgPSBsZWdlbmQoZm9ybVRpdGxlLCAnJyk7XG5cbiAgICAgICAgbGV0IHR5cGVEaXYgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IGxhYmVsVGFza1R5cGUgPSBsYWJlbCgnVGFzayBUeXBlJywgJycpO1xuICAgICAgICBsZXQgZGl2VHlwZU9wdGlvbnMgPSBkaXYoJycsICcudHlwZS1vcHRpb25zJyk7XG4gICAgICAgIGxldCByYWRpb1NpbmdsZXRvbiA9IGlucHV0KCdyYWRpbycsICd0eXBlJywgJycsICdzaW5nbGV0b24nLCAnLmlucHV0JywpO1xuICAgICAgICByYWRpb1NpbmdsZXRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGxhYmVsU2luZ2xldG9uID0gbGFiZWwoJ1NpbmdsZSBUYXNrJywgJ3NpbmdsZXRvbicsICcnKTtcbiAgICAgICAgbGV0IHJhZGlvQ2hlY2tsaXN0ID0gaW5wdXQoJ3JhZGlvJywgJ3R5cGUnLCAnJywgJ2NoZWNrbGlzdCcsICcuaW5wdXQnKTtcbiAgICAgICAgbGV0IGxhYmVsQ2hlY2tsaXN0ID0gbGFiZWwoJ1Rhc2sgTGlzdCcsICdjaGVja2xpc3QnLCAnJyk7XG4gICAgICAgIGRpdlR5cGVPcHRpb25zLmFwcGVuZChyYWRpb1NpbmdsZXRvbiwgbGFiZWxTaW5nbGV0b24sIHJhZGlvQ2hlY2tsaXN0LCBsYWJlbENoZWNrbGlzdCk7XG4gICAgICAgIHR5cGVEaXYuYXBwZW5kKGxhYmVsVGFza1R5cGUsIGRpdlR5cGVPcHRpb25zKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IHNwYW5SZXF1aXJlZEJhZGdlID0gc3BhbignKicsICcucmVxdWlyZWQtYmFkZ2UnKTtcbiAgICAgICAgbGV0IHNwYW5FcnJvck1lc3NhZ2UgPSBzcGFuKCdwbGVhc2UgaW5jbHVkZSBhIHRpdGxlJywgJy5lcnJvci1tZXNzYWdlJywgJy5oaWRlJyk7XG4gICAgICAgIGxldCBsYWJlbFRpdGxlID0gbGFiZWwoJ1RpdGxlICcsICd0YXNrLXRpdGxlJyk7XG4gICAgICAgIGxhYmVsVGl0bGUuYXBwZW5kKHNwYW5SZXF1aXJlZEJhZGdlLCBzcGFuRXJyb3JNZXNzYWdlKTtcbiAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBpbnB1dCgndGV4dCcsICd0YXNrLXRpdGxlJywgJ3RpdGxlJywgJ3Rhc2stdGl0bGUnLCAnLmlucHV0Jyk7XG4gICAgICAgIGlucHV0VGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBpbnB1dFRpdGxlLmFyaWFSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZChsYWJlbFRpdGxlLCBpbnB1dFRpdGxlKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IGxhYmVsRGVzY3JpcHRpb24gPSBsYWJlbCgnVGFzayBEZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGlucHV0KCd0ZXh0JywgJ2Rlc2NyaXB0aW9uJywgJ2Rlc2NyaXB0aW9uJywgJ3Rhc2stZGVzY3JpcHRpb24nLCAnLmlucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZChsYWJlbERlc2NyaXB0aW9uLCBpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRpdignJywgJy5pbnB1dC1sYWJlbC1ncm91cCcpO1xuICAgICAgICBsZXQgbGFiZWxEdWVEYXRlID0gbGFiZWwoJ0R1ZSBEYXRlJywgJ2R1ZS1kYXRlJyk7XG4gICAgICAgIGxldCBpbnB1dER1ZURhdGUgPSBpbnB1dCgnZGF0ZScsICdkdWUtZGF0ZScsICcnLCAnZHVlLWRhdGUnLCAnLmlucHV0Jyk7XG4gICAgICAgIGR1ZURhdGVEaXYuYXBwZW5kKGxhYmVsRHVlRGF0ZSwgaW5wdXREdWVEYXRlKTtcblxuICAgICAgICBsZXQgZGl2RHJvcGRvd25zID0gZGl2KCcnLCAnLmRyb3Bkb3ducycpO1xuICAgICAgICBsZXQgZGl2UHJpb3JpdHkgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IGxhYmVsUHJpb3JpdHkgPSBsYWJlbCgnUHJpb3JpdHknLCAncHJpb3JpdHknLCAnJyk7XG4gICAgICAgIGxldCBzZWxlY3RQcmlvcml0eSA9IHNlbGVjdCgncHJpb3JpdHknLCAnI3ByaW9yaXR5JywgJy5pbnB1dCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQ7XG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAnbm9uZSAoICknO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAnbG93ICghKSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICdtZWRpdW0gKCEhKSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICdoaWdoICghISEpJztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgb3B0aW9uUHJpb3JpdHkgPSBvcHRpb24oaSwgY29udGVudCk7XG4gICAgICAgICAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25Qcmlvcml0eSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkaXZQcm9qZWN0ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBsYWJlbFByb2plY3QgPSBsYWJlbCgnUHJvamVjdCcsICdwcm9qZWN0JywgJycpO1xuICAgICAgICBsZXQgc2VsZWN0UHJvamVjdCA9IHNlbGVjdCgncHJvamVjdCcsICcjcHJvamVjdCcsICcuaW5wdXQnKTtcbiAgICAgICAgZGl2UHJpb3JpdHkuYXBwZW5kKGxhYmVsUHJpb3JpdHksIHNlbGVjdFByaW9yaXR5KTtcbiAgICAgICAgZGl2UHJvamVjdC5hcHBlbmQobGFiZWxQcm9qZWN0LCBzZWxlY3RQcm9qZWN0KTtcbiAgICAgICAgZGl2RHJvcGRvd25zLmFwcGVuZChkaXZQcmlvcml0eSwgZGl2UHJvamVjdCk7XG5cbiAgICAgICAgZm9ybUZpZWxkc2V0LmFwcGVuZChmaWVsZHNldExlZ2VuZCwgdHlwZURpdiwgdGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBkdWVEYXRlRGl2LCBkaXZEcm9wZG93bnMpXG4gICAgICAgIC8vIGZvcm1GaWVsZHNldC5hcHBlbmQoZmllbGRzZXRMZWdlbmQsIGxhYmVsVGFza1R5cGUsIGRpdlR5cGVPcHRpb25zLCBsYWJlbFRpdGxlLCBpbnB1dFRpdGxlLCBsYWJlbERlc2NyaXB0aW9uLCBpbnB1dERlc2NyaXB0aW9uLCBsYWJlbER1ZURhdGUsIGlucHV0RHVlRGF0ZSwgZGl2RHJvcGRvd25zKTtcblxuICAgICAgICBsZXQgcHJvamVjdFJlZmVyZW5jZUNvbnRhaW5lciA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdFJlZmVyZW5jZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuXG4gICAgICAgIGZvcm1JbnB1dHMgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpO1xuICAgICAgICBldmVudHMucHVibGlzaCgnb3BlblByb2plY3RPcHRpb25zUXVlcnknLCAnJyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclByb2plY3RPcHRpb25zID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgbGV0IHByb2plY3REcm9wZG93biA9IGZvcm1JbnB1dHNbN107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGFycmF5Lmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gYXJyYXlbaV1bMF07XG4gICAgICAgICAgICBsZXQgcHJvamVjdElEID0gYXJyYXlbaV1bMV07XG4gICAgICAgICAgICBsZXQgb3B0aW9uUHJvamVjdCA9IG9wdGlvbihwcm9qZWN0SUQsIHByb2plY3ROYW1lKTtcblxuICAgICAgICAgICAgaWYgKF9jdXJyZW50UHJvamVjdCA9PT0gcHJvamVjdElEKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uUHJvamVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2JveEZvcm0gPSBmdW5jdGlvbih0YXNrUmVmZXJlbmNlLCBmb3JtVGl0bGUpIHtcbiAgICAgICAgbGV0IGZpZWxkc2V0TGVnZW5kID0gbGVnZW5kKGZvcm1UaXRsZSwgJycpO1xuXG4gICAgICAgIGxldCB0aXRsZURpdiA9IGRpdignJywgJy5pbnB1dC1sYWJlbC1ncm91cCcpO1xuICAgICAgICBsZXQgc3BhblJlcXVpcmVkQmFkZ2UgPSBzcGFuKCcqJywgJy5yZXF1aXJlZC1iYWRnZScpO1xuICAgICAgICBsZXQgc3BhbkVycm9yTWVzc2FnZSA9IHNwYW4oJ3BsZWFzZSBpbmNsdWRlIGEgdGl0bGUnLCAnLmVycm9yLW1lc3NhZ2UnLCAnLmhpZGUnKTtcbiAgICAgICAgbGV0IGxhYmVsVGl0bGUgPSBsYWJlbCgnVGl0bGUgJywgJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgbGFiZWxUaXRsZS5hcHBlbmQoc3BhblJlcXVpcmVkQmFkZ2UsIHNwYW5FcnJvck1lc3NhZ2UpO1xuICAgICAgICBsZXQgaW5wdXRUaXRsZSA9IGlucHV0KCd0ZXh0JywgJ2NoZWNrYm94LXRpdGxlJywgJ3RpdGxlJywgJ2NoZWNrYm94LXRpdGxlJywgJycpO1xuICAgICAgICBpbnB1dFRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgaW5wdXRUaXRsZS5hcmlhUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB0aXRsZURpdi5hcHBlbmQobGFiZWxUaXRsZSwgaW5wdXRUaXRsZSk7XG5cbiAgICAgICAgZm9ybUZpZWxkc2V0LmFwcGVuZChmaWVsZHNldExlZ2VuZCwgdGl0bGVEaXYpO1xuXG4gICAgICAgIGZvcm1JbnB1dHMgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICAgIGZvcm1JbnB1dHNbMF0udmFsdWUgPSB0YXNrUmVmZXJlbmNlOyAgICAvLyAqIHBhc3NlZCB0byBsaWJyYXJ5LmpzIGZvciBpbmRleGluZyBjb3JyZWN0IHRhc2tcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckRlbGV0ZUNvbmZpcm1hdGlvbkZvcm0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGZpZWxkc2V0TGVnZW5kID0gbGVnZW5kKCdEZWxldGUgVGhpcyBQcm9qZWN0JywgJycpO1xuXG4gICAgICAgIGxldCBwMSA9IHAoJ0RlbGV0aW5nIGEgcHJvamVjdCB3aWxsIGFsc28gZGVsZXRlIGFsbCBvZiBpdHMgdGFza3MuJywgJycpO1xuICAgICAgICBsZXQgcDIgPSBwKCdBcmUgeW91IFNVUkUgeW91IHdhbnQgdG8gcHJvY2VlZD8nLCAnJyk7XG4gICAgICAgIFxuICAgICAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGZpZWxkc2V0TGVnZW5kLCBwMSwgcDIpO1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrQ3JlYXRlSXRlbScsIF9vcGVuQ3JlYXRlRm9ybSk7ICAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoY3JlYXRlVGFza0J1dHRvbiBjbGlja0V2ZW50LCBfcmVuZGVyQ2hlY2tsaXN0U3ViaGVhZGVyKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tDcmVhdGVQcm9qZWN0JywgX29wZW5DcmVhdGVGb3JtKTsgICAgLy8gcHVibGlzaGluZyBmcm9tIHNpZGViYXIuanMgKGNyZWF0ZVByb2plY3RCdXR0b24gY2xpY2tFdmVudClcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrTW9kaWZ5SXRlbScsIF9vcGVuTW9kaWZ5SW5zdGFuY2VRdWVyeSk7ICAvLyBwdWJsaXNoaW5nIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlci4uLkhlYWRlcigpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2Nsb3NlTW9kaWZ5SW5zdGFuY2VRdWVyeScsIF9vcGVuTW9kaWZ5Rm9ybSk7ICAvLyBwdWJsaXNoaW5nIGZyb20gbGlicmFyeS5qcyAoX3F1ZXJ5SXRlbUluc3RhbmNlKCkpO1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncHJvamVjdENyZWF0ZWQnLCBfc2V0Q3VycmVudFByb2plY3QpOyAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfY3JlYXRlUHJvamVjdCgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3VwZGF0ZURpc3BsYXlWaWV3JywgX3NldEN1cnJlbnRQcm9qZWN0KSAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfYnVuZGxlSW5zdGFuY2VzKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xvc2VQcm9qZWN0T3B0aW9uc1F1ZXJ5JywgX3JlbmRlclByb2plY3RPcHRpb25zKTsgIC8vIHB1Ymxpc2hpbmcgZnJvbSBsaWJyYXJ5LmpzIChfcXVlcnlQcm9qZWN0TmFtZUlEKCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0RlbGV0ZVByb2plY3QnLCBfc2hvd0RlbGV0ZVByb2plY3RDb25maXJtYXRpb24pOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChfcmVuZGVyUHJvamVjdEhlYWRlcigpKVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuXG4vLyAmICdiYWNrZW5kJyBtYW5hZ2VyIG1vZHVsZSBjb250YWluaW5nIHByb2plY3QvdGFzayBzdGF0ZXMsIGNsYXNzZXMsICYgbWV0aG9kc1xuXG5jb25zdCBsaWJyYXJ5ID0gKCgpID0+IHtcbiAgICAvLyBkeW5hbWljIGRhdGFcbiAgICBsZXQgX3Byb2plY3RMaWJyYXJ5ID0gW107XG4gICAgbGV0IF90YXNrTGlicmFyeSA9IFtdO1xuICAgIGxldCBfdGFza0NvdW50ZXIgPSAwO1xuICAgIGxldCBfcHJvamVjdENvdW50ZXIgPSAwO1xuXG4gICAgLy8gZmFjdG9yaWVzXG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAgY29uc3RydWN0b3IocHJvamVjdElELCBwcm9qZWN0VGl0bGUsIHByb2plY3REZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gJ3Byb2plY3QnO1xuICAgICAgICAgICAgdGhpcy5pZCA9IHByb2plY3RJRDtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0dGVyc1xuICAgICAgICBzZXQgc2V0VGl0bGUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy50aXRsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldERlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgVGFzayB7XG4gICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAgY29uc3RydWN0b3IodGFza0lELCBwcm9qZWN0SUQsIHRhc2tUeXBlLCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCB0YXNrSXRlbXMpIHtcbiAgICAgICAgICAgIGxldCBpdGVtQ291bnQgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmlkID0gdGFza0lEO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0YXNrVHlwZTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0YXNrVGl0bGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gdGFza0R1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnY2hlY2tsaXN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAodGFza0l0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGFza0l0ZW1zLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1CdW5kbGUgPSBbaXRlbUNvdW50LCB0YXNrSXRlbXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW1CdW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXR0ZXJzXG4gICAgICAgIHNldCBzZXRUaXRsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldER1ZURhdGUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLmR1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldFByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldFByb2plY3RJRCh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMucHJvamVjdElEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldENoZWNrYm94SXRlbSh2YWx1ZUFycmF5KSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB2YWx1ZUFycmF5WzBdO1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB2YWx1ZUFycmF5WzFdO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT09IHRoaXMuaXRlbXNbaW5kZXhdWzFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF1bMV0gPSBjb250ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldHRlclxuICAgIGZ1bmN0aW9uIF9zZXRJbnN0YW5jZVZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGxpYnJhcnlSZWZlcmVuY2UgPSB2YWx1ZXNbMF07XG4gICAgICAgIGxldCBpbnN0YW5jZVJlZmVyZW5jZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgdmFsdWVzLnNwbGljZSgwLCAyKTsgICAgLy8gW3RpdGxlLCBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gW3R5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgJ3ByaW9yaXR5JywgJ3Byb2plY3RJRCcsIFt0YWdzXV1cbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhsaWJyYXJ5UmVmZXJlbmNlKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhpbnN0YW5jZVJlZmVyZW5jZSk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2codmFsdWVzKTtcblxuXG4gICAgICAgIHN3aXRjaCAobGlicmFyeVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVByb2plY3QodmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX21vZGlmeVByb2plY3QoaW5zdGFuY2VSZWZlcmVuY2UsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5zdGFuY2VSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJRCAgICAgICAgICAgIHR5cGUgICAgICAgdGl0bGUgICAgZGVzY3JpcHRpb24gIGR1ZURhdGUgICAgcHJpb3JpdHkgICAgICAgICAgICAgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtVmFsdWVzUmVvcmRlcmVkID0gW3BhcnNlSW50KHZhbHVlc1s1XSksIHZhbHVlc1swXSwgdmFsdWVzWzFdLCB2YWx1ZXNbMl0sIHZhbHVlc1szXSwgcGFyc2VJbnQodmFsdWVzWzRdKSwgdmFsdWVzWzZdXVxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRhc2soZm9ybVZhbHVlc1Jlb3JkZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9tb2RpZnlUYXNrKGluc3RhbmNlUmVmZXJlbmNlLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1SZWZlcmVuY2UgPSB2YWx1ZXNbMF07XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1Db250ZW50ID0gdmFsdWVzWzFdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSBpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrSUQgPSB2YWx1ZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0luc3RhbmNlID0gX3Rhc2tMaWJyYXJ5W3RdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoZWNrSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUNoZWNrYm94KHRhc2tJbnN0YW5jZSwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX21vZGlmeUNoZWNrYm94KHRhc2tJbnN0YW5jZSwgY2hlY2tsaXN0SXRlbVJlZmVyZW5jZSwgY2hlY2tsaXN0SXRlbUNvbnRlbnQpOyAvLyBmb3JtVmFsdWVzWzBdIG5lZWRlZCB0byBwYXNzIHNpbmdsZSB2YWx1ZSBmcm9tIGZvcm1WYWx1ZXNbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGdldHRlcnNcbiAgICBmdW5jdGlvbiBfcXVlcnlJdGVtSW5zdGFuY2UoaXRlbVJlZmVyZW5jZXMpIHtcbiAgICAgICAgbGV0IGxpYnJhcnlSZWZlcmVuY2UgPSBpdGVtUmVmZXJlbmNlc1swXTtcbiAgICAgICAgbGV0IGluc3RhbmNlUmVmZXJlbmNlID0gaXRlbVJlZmVyZW5jZXNbMV07XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2cobGlicmFyeVJlZmVyZW5jZSk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coaW5zdGFuY2VSZWZlcmVuY2UpO1xuXG4gICAgICAgIGxldCBpdGVtVmFsdWVBcnJheTtcbiAgICAgICAgc3dpdGNoIChsaWJyYXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IChfcHJvamVjdExpYnJhcnkubGVuZ3RoKTsgcCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfcHJvamVjdExpYnJhcnlbcF0uaWQgPT0gaW5zdGFuY2VSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gX3Byb2plY3RMaWJyYXJ5W3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlQXJyYXkgPSBbJ3Byb2plY3QnLCBpdGVtLmlkLCBpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IGluc3RhbmNlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IF90YXNrTGlicmFyeVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1WYWx1ZUFycmF5ID0gWyd0YXNrJywgaXRlbS5pZCwgaXRlbS50eXBlLCBpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHksIGl0ZW0ucHJvamVjdElEXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gaW5zdGFuY2VSZWZlcmVuY2VbMF07ICAgICAgIC8vICogdW5idW5kbGVkIGZyb20gZG9tRGlzcGxheS5qcyAoX29wZW5Nb2RpZnlGb3JtUXVlcnkoKSlcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hSZWZlcmVuY2UgPSBpbnN0YW5jZVJlZmVyZW5jZVsxXTsgICAvLyAqIHVuYnVuZGxlZCBmcm9tIGRvbURpc3BsYXkuanMgKF9vcGVuTW9kaWZ5Rm9ybVF1ZXJ5KCkpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IHRhc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtcyA9IF90YXNrTGlicmFyeVt0XS5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGNoZWNrbGlzdEl0ZW1zLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2xpc3RJdGVtc1tpXVswXSA9PSBjaGVja2JveFJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWVBcnJheSA9IFsnY2hlY2tib3gnLCB0YXNrUmVmZXJlbmNlLCBjaGVja2xpc3RJdGVtc1tpXVswXSwgY2hlY2tsaXN0SXRlbXNbaV1bMV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhpdGVtVmFsdWVBcnJheSk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbG9zZU1vZGlmeUluc3RhbmNlUXVlcnknLCBpdGVtVmFsdWVBcnJheSk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcXVlcnlQcm9qZWN0TmFtZXNJRHMoKSB7XG4gICAgICAgIGxldCBuYW1lSURBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IChfcHJvamVjdExpYnJhcnkubGVuZ3RoKTsgcCsrKSB7XG4gICAgICAgICAgICBuYW1lSURBcnJheS5wdXNoKFtfcHJvamVjdExpYnJhcnlbcF0udGl0bGUsIF9wcm9qZWN0TGlicmFyeVtwXS5pZF0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbG9zZVByb2plY3RPcHRpb25zUXVlcnknLCBuYW1lSURBcnJheSkgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfYnVuZGxlSW5zdGFuY2VzKHZpZXdQcmVmZXJlbmNlLCBxdWVyeVJlZmVyZW5jZSkgeyAvLyAhIHJlZHVjZSByZXBldGl0aW9uIHZ2dlxuICAgICAgICBsZXQgaW5zdGFuY2VCdW5kbGUgPSBbXTtcblxuICAgICAgICBsZXQgcXVlcnlQcm9qZWN0cyA9IGZhbHNlO1xuICAgICAgICBsZXQgcXVlcnlUYXNrcyA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh2aWV3UHJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY2FzZSAnQWxsJzpcbiAgICAgICAgICAgICAgICBxdWVyeVRhc2tzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1RvZGF5JzpcbiAgICAgICAgICAgICAgICBxdWVyeVRhc2tzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1VwY29taW5nJzpcbiAgICAgICAgICAgICAgICBxdWVyeVRhc2tzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FueXRpbWUnOlxuICAgICAgICAgICAgICAgIHF1ZXJ5VGFza3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgcXVlcnlQcm9qZWN0cyA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhgcXVlcnlQcm9qZWN0czogJHtxdWVyeVByb2plY3RzfWApO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBxdWVyeVRhc2tzOiAke3F1ZXJ5VGFza3N9YCk7XG5cbiAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaCh2aWV3UHJlZmVyZW5jZSk7XG4gICAgICAgIGlmIChxdWVyeVByb2plY3RzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IChfcHJvamVjdExpYnJhcnkubGVuZ3RoKTsgcCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBxdWVyeVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKF9wcm9qZWN0TGlicmFyeVtwXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5wcm9qZWN0SUQgPT0gcXVlcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaChfdGFza0xpYnJhcnlbdF0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5VGFza3MgPT09IHRydWUpIHsgICAvLyAhIHJlZHVjZSByZXBldGl0aW9uXG4gICAgICAgICAgICBzd2l0Y2ggKHZpZXdQcmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnQWxsJzpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaChfdGFza0xpYnJhcnlbdF0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdUb2RheSc6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gX3Rhc2tMaWJyYXJ5W3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gcXVlcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdVcGNvbWluZyc6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gX3Rhc2tMaWJyYXJ5W3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAocXVlcnlSZWZlcmVuY2UubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gcXVlcnlSZWZlcmVuY2VbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQW55dGltZSc6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gX3Rhc2tMaWJyYXJ5W3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gcXVlcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc29sZS5sb2coaW5zdGFuY2VCdW5kbGUpO1xuICAgICAgICBldmVudHMucHVibGlzaCgndXBkYXRlRGlzcGxheVZpZXcnLCBpbnN0YW5jZUJ1bmRsZSk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qcywgZm9ybXMuanNcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KGF0dHJpYnV0ZUFycmF5KSB7XG4gICAgICAgIGxldCBfaWQgPSBfcHJvamVjdENvdW50ZXI7XG4gICAgICAgIGxldCBfbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KF9pZCwgLi4uYXR0cmlidXRlQXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3IHByb2plY3Q6JylcbiAgICAgICAgY29uc29sZS5sb2coX25ld1Byb2plY3QpO1xuICAgICAgICBfcHJvamVjdExpYnJhcnkucHVzaChfbmV3UHJvamVjdCk7XG4gICAgICAgIF9wcm9qZWN0Q291bnRlcisrO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdwcm9qZWN0Q3JlYXRlZCcsIF9uZXdQcm9qZWN0KTsgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qcywgc2lkZWJhci5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY3JlYXRlVGFzayhhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICBsZXQgX2lkID0gX3Rhc2tDb3VudGVyO1xuICAgICAgICBsZXQgX25ld1Rhc2sgPSBuZXcgVGFzayhfaWQsIC4uLmF0dHJpYnV0ZUFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyB0YXNrOicpXG4gICAgICAgIGNvbnNvbGUubG9nKF9uZXdUYXNrKTtcbiAgICAgICAgX3Rhc2tMaWJyYXJ5LnB1c2goX25ld1Rhc2spO1xuICAgICAgICBfdGFza0NvdW50ZXIrKztcblxuICAgICAgICBldmVudHMucHVibGlzaCgndGFza0NyZWF0ZWQnLCBfbmV3VGFzayk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheURPTS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY3JlYXRlQ2hlY2tib3godGFzaywgaXRlbVZhbHVlKSB7XG4gICAgICAgIGxldCBjaGVja2xpc3RJdGVtc0xlbmd0aCA9IHRhc2suaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgbmV3SXRlbUlEO1xuXG4gICAgICAgIHN3aXRjaCAoY2hlY2tsaXN0SXRlbXNMZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBuZXdJdGVtSUQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEl0ZW1JRCA9IHRhc2suaXRlbXNbY2hlY2tsaXN0SXRlbXNMZW5ndGggLSAxXVswXTtcbiAgICAgICAgICAgICAgICBuZXdJdGVtSUQgPSBsYXN0SXRlbUlEICsgMTtcbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtVmFsdWVbMF0gPSBuZXdJdGVtSUQ7XG4gICAgICAgIHRhc2suaXRlbXMucHVzaChpdGVtVmFsdWUpO1xuICAgICAgICBsZXQgX25ld0NoZWNrYm94ID0gWydjaGVja2JveCcsIHRhc2suaWQsIHRhc2suaXRlbXNbY2hlY2tsaXN0SXRlbXNMZW5ndGhdWzBdLCB0YXNrLml0ZW1zW2NoZWNrbGlzdEl0ZW1zTGVuZ3RoXVsxXV07XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGNoZWNrYm94OicpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2suaXRlbXMpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjaGVja2JveENyZWF0ZWQnLCBfbmV3Q2hlY2tib3gpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG5cbiAgICAvLyBtb2RpZnkgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIF9tb2RpZnlQcm9qZWN0KHRhcmdldEl0ZW1JRCwgYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVBcnJheSlcbiAgICAgICAgbGV0IHByb2plY3RJbnN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2UgPSBfcHJvamVjdExpYnJhcnlbcF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbCBwcm9qZWN0IGluc3RhbmNlOicpXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2cocHJvamVjdEluc3RhbmNlKTtcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAoYXR0cmlidXRlQXJyYXkubGVuZ3RoKTsgYSsrKSB7XG4gICAgICAgICAgICBzd2l0Y2goYSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluc3RhbmNlLnNldFRpdGxlID0gYXR0cmlidXRlQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluc3RhbmNlLnNldERlc2NyaXB0aW9uID0gYXR0cmlidXRlQXJyYXlbMV07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kaWZpZWQgcHJvamVjdCBpbnN0YW5jZTonKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5zdGFuY2UpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdpdGVtTW9kaWZpZWQnLCBwcm9qZWN0SW5zdGFuY2UpOyAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzLCBkb21TaWRlYmFyLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9tb2RpZnlUYXNrKHRhcmdldEl0ZW1JRCwgYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVBcnJheSk7XG4gICAgICAgIGxldCB0YXNrSW5zdGFuY2U7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gdGFyZ2V0SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgdGFza0luc3RhbmNlID0gX3Rhc2tMaWJyYXJ5W3RdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZygnb3JpZ2luYWwgdGFzayBpbnN0YW5jZTonKVxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZSk7XG4gICAgICAgIGZvciAobGV0IGEgPSAxOyBhIDwgKGF0dHJpYnV0ZUFycmF5Lmxlbmd0aCk7IGErKykge1xuICAgICAgICAgICAgLy8gW3R5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgJ3ByaW9yaXR5JywgJ3Byb2plY3RJRCddXG4gICAgICAgICAgICBzd2l0Y2goYSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldFRpdGxlID0gYXR0cmlidXRlQXJyYXlbMV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLmRlc2NyaXB0aW9uID0gYXR0cmlidXRlQXJyYXlbMl07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldER1ZURhdGUgPSBhdHRyaWJ1dGVBcnJheVszXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0UHJpb3JpdHkgPSBwYXJzZUludChhdHRyaWJ1dGVBcnJheVs0XSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldFByb2plY3RJRCA9IHBhcnNlSW50KGF0dHJpYnV0ZUFycmF5WzVdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RpZmllZCB0YXNrIGluc3RhbmNlOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIHRhc2tJbnN0YW5jZSk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanMsIGRvbVNpZGViYXIuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX21vZGlmeUNoZWNrYm94KHRhc2tJbnN0YW5jZSwgdGFyZ2V0SXRlbUlELCB0YXJnZXRDb250ZW50KSB7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2codGFyZ2V0SXRlbUlELCB0YXJnZXRDb250ZW50KTtcbiAgICAgICAgbGV0IGNoZWNrYm94SW5zdGFuY2U7XG4gICAgICAgIGxldCB0YXJnZXRDaGVja2xpc3RJdGVtcyA9IHRhc2tJbnN0YW5jZS5pdGVtcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGFyZ2V0Q2hlY2tsaXN0SXRlbXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Q2hlY2tsaXN0SXRlbXNbaV1bMF0gPT0gdGFyZ2V0SXRlbUlEKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFZhbHVlQXJyYXkgPSBbaSwgdGFyZ2V0Q29udGVudF07ICAvLyAqIGkgcmVwcmVzZW50cyBpdGVtIGluZGV4XG4gICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldENoZWNrYm94SXRlbSA9IHRhcmdldFZhbHVlQXJyYXk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hJbnN0YW5jZSA9IFsnY2hlY2tib3gnLCB0YXNrSW5zdGFuY2UuaWQsIHRhcmdldEl0ZW1JRCwgdGFyZ2V0Q29udGVudF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbCB0YXNrIChjaGVja2JveCkgaW5zdGFuY2U6JylcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyh0YXNrSW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kaWZpZWQgdGFzayAoY2hlY2tib3gpIGluc3RhbmNlOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZS5pdGVtcyk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIGNoZWNrYm94SW5zdGFuY2UpOyAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSBtZXRob2RzXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByb2plY3QoY2FyZElEKSB7XG4gICAgICAgIGxldCBjYXJkUmVmZXJlbmNlcyA9IGNhcmRJRC5zcGxpdCgnXycpO1xuICAgICAgICBsZXQgcHJvamVjdFJlZmVyZW5jZSA9IGNhcmRSZWZlcmVuY2VzWzFdO1xuICAgICAgICBsZXQgcHJvamVjdExvb3BTdGFydCA9IF9wcm9qZWN0TGlicmFyeS5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAobGV0IHAgPSBwcm9qZWN0TG9vcFN0YXJ0OyBwID4gLTE7IHAtLSkge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBwcm9qZWN0UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Byb2plY3RMaWJyYXJ5LnNwbGljZShwLCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHRhc2tMb29wU3RhcnQgPSBfdGFza0xpYnJhcnkubGVuZ3RoIC0gMTtcbiAgICAgICAgZm9yIChsZXQgdCA9IHRhc2tMb29wU3RhcnQ7IHQgPiAtMTsgdC0tKSB7XG4gICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLnByb2plY3RJRCA9PSBwcm9qZWN0UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Rhc2tMaWJyYXJ5LnNwbGljZSh0LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0IGRlbGV0ZSByZXN1bHRzOicpXG4gICAgICAgIGNvbnNvbGUubG9nKF9wcm9qZWN0TGlicmFyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF90YXNrTGlicmFyeSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZVByb2plY3RGcm9tU2VjdGlvbicsIGNhcmRJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qcywgc2lkZWJhci5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlVGFzayhjYXJkSUQpIHtcbiAgICAgICAgbGV0IGNhcmRSZWZlcmVuY2VzID0gY2FyZElELnNwbGl0KCdfJyk7XG4gICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMV07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gdGFza1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIF90YXNrTGlicmFyeS5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygndGFzayBkZWxldGUgcmVzdWx0czonKVxuICAgICAgICBjb25zb2xlLmxvZyhfdGFza0xpYnJhcnkpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZW1vdmVUYXNrRnJvbURpc3BsYXknLCBjYXJkSUQpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2RlbGV0ZUNoZWNrbGlzdEl0ZW0oY2hlY2tJRCkge1xuICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGNoZWNrSUQuc3BsaXQoJ19fJylbMF0uc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgbGV0IGNoZWNrUmVmZXJlbmNlID0gY2hlY2tJRC5zcGxpdCgnX18nKVsxXS5zcGxpdCgnXycpWzFdO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IHRhc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbXNBcnJheSA9IF90YXNrTGlicmFyeVt0XS5pdGVtcztcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChjaGVja2xpc3RJdGVtc0FycmF5Lmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tsaXN0SXRlbXNBcnJheVtpXVswXSA9PSBjaGVja1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SXRlbXNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tsaXN0IGl0ZW0gZGVsZXRlIHJlc3VsdHM6JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdEl0ZW1zQXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZW1vdmVDaGVja2xpc3RJdGVtRnJvbURpc3BsYXknLCBjaGVja0lEKTsgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ29wZW5WaWV3UHJlZmVyZW5jZVF1ZXJ5JywgX2J1bmRsZUluc3RhbmNlcykgLy8gcHVibGlzaGVkIGZyb20gc2lkZWJhci5qcyAoX2NoYW5nZVZpZXdQcmVmZXJlbmNlaygpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY29uZmlybUlucHV0JywgX3NldEluc3RhbmNlVmFsdWVzKTsgLy9wdWJsaXNoZWQgZnJvbSBkZWZhdWx0LmpzIChpbml0KCkpLCBmb3Jtcy5qcyAoX2NvbmZpcm1JbnB1dCgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnb3Blbk1vZGlmeUluc3RhbmNlUXVlcnknLCBfcXVlcnlJdGVtSW5zdGFuY2UpOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBmb3Jtcy5qcyAoX29wZW5Nb2RpZnlRdWVyeSgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ29wZW5Qcm9qZWN0T3B0aW9uc1F1ZXJ5JywgX3F1ZXJ5UHJvamVjdE5hbWVzSURzKSAgLy8gcHVibGlzaGVkIGZyb20gZm9ybXMuanMgKF9zaG93Rm9ybSgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY29uZmlybURlbGV0ZVByb2plY3QnLCBfZGVsZXRlUHJvamVjdCk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGZvcm1zLmpzIChjb25maXJtRGVsZXRlQnV0dG9uIGV2ZW50TGlzdGVuZXIpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tEZWxldGVUYXNrJywgX2RlbGV0ZVRhc2spOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChfcmVuZGVyLi4uKHRhc2spSGVhZGVycygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrRGVsZXRlQ2hlY2tsaXN0SXRlbScsIF9kZWxldGVDaGVja2xpc3RJdGVtKSAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlckNoZWNrYm94Q29udHJvbHMoKSlcbn0pKCk7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBsaX0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8vICYgbWFuYWdlcyBzaWRlYmFyIHNlY3Rpb24gRE9NIDwtPiBsaWJyYXJ5IGNvbW11bmljYXRpb25cbi8vICYgY29udGFpbnMgZmFjdG9yaWVzIGZvciBnZW5lcmF0aW5nIGRpc3BsYXkgc2VjdGlvbiBET00gZWxlbWVudHMgLyBncm91cGluZ3NcblxuY29uc3Qgc2lkZWJhciA9ICgoKSA9PiB7XG4gICAgLy8gY2FjaGUgZG9tXG4gICAgbGV0IHZpZXdQcmVmcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5cbiAgICBsZXQgdmlld0FsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LWFsbCcpO1xuICAgIGxldCB2aWV3VG9kYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy10b2RheScpO1xuICAgIGxldCB2aWV3VXBjb21pbmdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy11cGNvbWluZycpO1xuICAgIGxldCB2aWV3QW55dGltZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LWFueXRpbWUnKTtcbiAgICBsZXQgdmlld1Vuc29ydGVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctcHJvamVjdF8wJyk7XG4gICAgbGV0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljLXZpZXdzJyk7XG4gICAgbGV0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudmlldy1wcmVmcy1jb250YWluZXIgc3Bhbi5jcmVhdGUnKTtcblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vID8gaGlkZSBzaWRlYmFyIHdoZW4gbm90IGZvY3VzZWQgP1xuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB2aWV3UHJlZnMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIH0pO1xuICAgIFxuICAgIHZpZXdBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgnQWxsJywgJycpO1xuICAgIH0pO1xuICAgIHZpZXdUb2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdUb2RheScsICcnKTtcbiAgICB9KTtcbiAgICB2aWV3VXBjb21pbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgnVXBjb21pbmcnLCAnJyk7XG4gICAgfSk7XG4gICAgdmlld0FueXRpbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgnQW55dGltZScsICcnKTtcbiAgICB9KTtcbiAgICB2aWV3VW5zb3J0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsIHZpZXdVbnNvcnRlZEJ1dHRvbi5pZCk7XG4gICAgfSk7XG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrQ3JlYXRlUHJvamVjdCcsICdwcm9qZWN0Jyk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICB9KTtcblxuICAgIC8vIG1hbmFnZXJzXG4gICAgZnVuY3Rpb24gX2NoYW5nZVZpZXdQcmVmZXJlbmNlKHByZWZlcmVuY2VLZXl3b3JkLCB0YXJnZXRJRCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRJRCk7XG4gICAgICAgIGxldCBxdWVyeVJlZmVyZW5jZTtcblxuICAgICAgICBzd2l0Y2ggKHByZWZlcmVuY2VLZXl3b3JkKSB7XG4gICAgICAgICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgICAgICAgICAgcXVlcnlSZWZlcmVuY2UgPSBfZ2V0VG9kYXlEYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cGNvbWluZyc6XG4gICAgICAgICAgICAgICAgcXVlcnlSZWZlcmVuY2UgPSBfZ2V0VXBjb21pbmdEYXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRJRCA9IHRhcmdldElELnNwbGl0KCdfJyk7XG4gICAgICAgICAgICAgICAgcXVlcnlSZWZlcmVuY2UgPSBzcGxpdElEWzFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBxdWVyeVJlZmVyZW5jZSA9ICcnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuVmlld1ByZWZlcmVuY2VRdWVyeScsIHByZWZlcmVuY2VLZXl3b3JkLCBxdWVyeVJlZmVyZW5jZSk7IC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cblxuICAgIC8vIGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0TGluayA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgIT09IDApIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHByb2plY3QuaWQ7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgbGlJRCA9IGAjdmlldy1wcm9qZWN0XyR7aWR9YDtcbiAgICAgICAgICAgIGxldCBsaVByb2plY3RMaW5rID0gbGkodGl0bGUsIGxpSUQpO1xuXG4gICAgICAgICAgICBsaVByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ3Byb2plY3QnLCBlLnRhcmdldC5pZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGxpUHJvamVjdExpbmspO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfbW9kaWZ5Vmlld1ByZWZlcmVuY2VMaW5rKGl0ZW1JbnN0YW5jZSkge1xuICAgICAgICBpZiAoaXRlbUluc3RhbmNlLnR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHZpZXctcHJvamVjdF8ke2l0ZW1JbnN0YW5jZS5pZH1gKTtcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gaXRlbUluc3RhbmNlLnRpdGxlO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVtb3ZlUHJvamVjdExpbmsocHJvamVjdENhcmRJRCkge1xuICAgICAgICBsZXQgbGlua1JlZmVyZW5jZSA9IHByb2plY3RDYXJkSUQuc3BsaXQoJ18nKVsxXTtcblxuICAgICAgICBsZXQgbGlQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHZpZXctcHJvamVjdF8ke2xpbmtSZWZlcmVuY2V9YCk7XG4gICAgICAgIGxldCB1bENvbnRhaW5lciA9IGxpUHJvamVjdC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHVsQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxpUHJvamVjdCk7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlICh1bENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAxKTpcbiAgICAgICAgICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ3Byb2plY3QnLCB1bENvbnRhaW5lci5sYXN0Q2hpbGQuaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ3Byb2plY3QnLCAncHJvamVjdF8wJyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9nZXRUb2RheURhdGUoKSB7ICAvLyAhIHJlZHVjZSByZXBldGl0aW9uIHZ2dlxuICAgICAgICBsZXQgcmF3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyID0gcmF3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgbW9udGggPSByYXdEYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgZGF0ZSA9IHJhd0RhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgICAgICBtb250aCA9IGAwJHttb250aH1gO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZGF0ZSA8IDEwKSB7XG4gICAgICAgICAgICBkYXRlID0gYDAke2RhdGV9YDtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2dldFVwY29taW5nRGF0ZSgpIHsgICAvLyAhIHJlZHVjZSByZXBldGl0aW9uIF5eXlxuICAgICAgICBsZXQgdmFsaWREYXRlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhd0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgcmF3RGF0ZS5zZXREYXRlKHJhd0RhdGUuZ2V0RGF0ZSgpICsgaSk7XG4gICAgICAgICAgICBsZXQgeWVhciA9IHJhd0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGxldCBtb250aCA9IHJhd0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHJhd0RhdGUuZ2V0RGF0ZSgpO1xuICAgICBcbiAgICAgICAgICAgIGlmIChtb250aCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgIG1vbnRoID0gYDAke21vbnRofWA7XG4gICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICBpZiAoZGF0ZSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgIGRhdGUgPSBgMCR7ZGF0ZX1gO1xuICAgICAgICAgICAgIH07XG4gICAgIFxuICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWA7XG4gICAgICAgICAgICAgdmFsaWREYXRlcy5wdXNoKGZvcm1hdHRlZERhdGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB2YWxpZERhdGVzO1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcbiAgICBcbiAgICBldmVudHMuc3Vic2NyaWJlKCdwcm9qZWN0Q3JlYXRlZCcsIF9yZW5kZXJQcm9qZWN0TGluayk7IC8vIHB1Ymxpc2hlZCBieSBsaWJyYXJ5LmpzIChfY3JlYXRlUHJvamVjdCgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2l0ZW1Nb2RpZmllZCcsIF9tb2RpZnlWaWV3UHJlZmVyZW5jZUxpbmspOyAgIC8vIHB1Ymxpc2hlZCBieSBsaWJyYXJ5LmpzIChfbW9kaWZ5Li4uKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVtb3ZlUHJvamVjdEZyb21TZWN0aW9uJywgX3JlbW92ZVByb2plY3RMaW5rKTsgICAvLyBwdWJsaXNoZWQgYnkgbGlicmFyeS5qcyAoX2RlbGV0ZVByb2plY3QoKSk7XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zcGFjaW5nLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3R5cG8uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZWZmZWN0cy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jb2xvcnMuY3NzJztcblxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuL3NjcmlwdHMvZGVmYXVsdC5qcyc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL3NjcmlwdHMvZGlzcGxheSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9zY3JpcHRzL2Zvcm1zJztcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2NyaXB0cy9zaWRlYmFyJztcbmltcG9ydCBsaWJyYXJ5IGZyb20gJy4vc2NyaXB0cy9saWJyYXJ5JztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG4vLyBhY3Rpb25zXG5kZWZhdWx0U3RhdGUuaW5pdCgpO1xuZXZlbnRzLnZpZXdFdmVudHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=