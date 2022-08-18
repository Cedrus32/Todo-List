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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/shaping.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/shaping.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --xtra-small-pad: calc(0.25 * var(--main-pad));\n    --xtra-small-gap: calc(0.25 * var(--main-gap));\n\n    --small-pad: calc(0.5 * var(--main-pad));\n    --small-gap: calc(0.5 * var(--main-gap));\n\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: calc(1.5 * var(--main-pad));\n\n    --lrg-gap: calc(2 * var(--main-gap))\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nimg {\n    height: 1.25em;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #sidebar,\n    #display {\n        padding: var(--main-pad);\n    }\n\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n\n#sidebar {\n    --y-offset: calc(calc(var(--main-pad) * 2) + 3.15em);\n    \n    position: absolute;\n    top: var(--y-offset); left: 0em;\n\n    height: calc(100vh - var(--y-offset));\n    width: 25vw;\n}\n\n    .view-prefs-container {\n        display: flex;\n        flex-flow: column;\n        gap: var(--lrg-gap);\n\n        padding-top: var(--lrg-gap);\n    }\n\n        #sidebar ul {\n            display: flex;\n            flex-flow: column;\n            gap: var(--main-gap);\n        }\n\n            #sidebar ul span {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            #sidebar li {\n                display: flex;\n                align-items: center;\n                gap: var(--xtra-small-gap);\n            }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    \n    width: 80%;\n    max-width: 450px;\n\n    padding: var(--main-pad);\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    position: absolute;\n    top: 0px; right: 0px;\n    z-index: 1;\n\n    height: 100vh; width: 100vw;\n}\n\n    form {\n        padding-bottom: var(--main-pad);\n    }\n\n            .input-label-group {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                margin-top: var(--small-pad);\n            }\n            \n                p {\n                    margin-top: var(--small-pad);\n                }\n\n            .dropdowns {\n                display: flex;\n            }\n\n                .dropdowns div {\n                    display: flex;\n                    flex-flow: column;\n\n                    width: 50%;\n                }\n\n    .form-buttons {\n        display: flex;\n        justify-content: center;\n        gap: var(--small-gap);\n    }\n\n        button,\n        input,\n        select {\n            padding: var(--xtra-small-pad);\n        }\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            gap: var(--main-gap);\n\n            z-index: 1;\n        }\n\n            header img {\n                height: 2em;\n            }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                padding: 1em;\n            }\n                \n                div.card,\n                .task-controls {\n                    padding: var(--main-pad);\n                }\n\n                .card.project {\n                    display: flex;\n                    flex-flow: column;\n                    align-items: center;\n                }\n\n                .card.sort-due {\n                    text-align: center;\n                }\n\n                    .card.project .header {\n                        display: grid;\n                        grid-template-columns: 1fr auto;\n                        grid-template-rows: auto;\n                        grid-template-areas: 'title       controls'\n                                             'description .';\n\n                        width: 100%;\n                    }\n\n                        .card.project .title {\n                            grid-area: title;\n                            text-align: center;\n                        }\n\n                        .project-controls {\n                            grid-area: controls;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                        .card.project .description {\n                            grid-area: description;\n                            text-align: center;\n                        }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    .singleton .header,\n                    .checklist .header {\n                        display: flex;\n                        gap: var(--xtra-small-gap);\n                    }\n\n                        .singleton .title,\n                        .checklist .title {\n                            margin-right: auto;\n                        }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--xtra-small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--xtra-small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--xtra-small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                            align-content: flex-start;\n                        }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--xtra-small-gap);\n                }\n\n                    .description-container {\n                        display: flex;\n                    }\n\n                        .card.checklist .description,\n                        .card.singleton .description {\n                            margin-right: auto;\n                        }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n\n                        .checklist-item-controls {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                        }\n", "",{"version":3,"sources":["webpack://./src/styles/spacing.css"],"names":[],"mappings":"AAAA,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;IACI,8CAA8C;IAC9C,8CAA8C;;IAE9C,wCAAwC;IACxC,wCAAwC;;IAExC,eAAe;IACf,eAAe;;IAEf,sCAAsC;;IAEtC;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;IAEI;QACI,YAAY;IAChB;;AAEJ;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;IAEI;;;QAGI,wBAAwB;IAC5B;;AAEJ,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;AAEhB;IACI,oDAAoD;;IAEpD,kBAAkB;IAClB,oBAAoB,EAAE,SAAS;;IAE/B,qCAAqC;IACrC,WAAW;AACf;;IAEI;QACI,aAAa;QACb,iBAAiB;QACjB,mBAAmB;;QAEnB,2BAA2B;IAC/B;;QAEI;YACI,aAAa;YACb,iBAAiB;YACjB,oBAAoB;QACxB;;YAEI;gBACI,aAAa;gBACb,8BAA8B;YAClC;;YAEA;gBACI,aAAa;gBACb,mBAAmB;gBACnB,0BAA0B;YAC9B;;AAEZ,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;IACI,kBAAkB;IAClB,QAAQ,EAAE,QAAQ;IAClB,gCAAgC;IAChC,UAAU;;IAEV,UAAU;IACV,gBAAgB;;IAEhB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,QAAQ,EAAE,UAAU;IACpB,UAAU;;IAEV,aAAa,EAAE,YAAY;AAC/B;;IAEI;QACI,+BAA+B;IACnC;;YAEQ;gBACI,aAAa;gBACb,iBAAiB;gBACjB,0BAA0B;;gBAE1B,4BAA4B;YAChC;;gBAEI;oBACI,4BAA4B;gBAChC;;YAEJ;gBACI,aAAa;YACjB;;gBAEI;oBACI,aAAa;oBACb,iBAAiB;;oBAEjB,UAAU;gBACd;;IAEZ;QACI,aAAa;QACb,uBAAuB;QACvB,qBAAqB;IACzB;;QAEI;;;YAGI,8BAA8B;QAClC;;AAER,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;IAEZ;QACI,aAAa;QACb,8BAA8B;QAC9B,4BAA4B;QAC5B;8CACsC;;QAEtC,eAAe;QACf,WAAW;IACf;;AAEJ,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;;QAEX;YACI,iBAAiB;;YAEjB,aAAa;YACb,2BAA2B;YAC3B,mBAAmB;YACnB,oBAAoB;;YAEpB,UAAU;QACd;;YAEI;gBACI,WAAW;YACf;;AAEZ,oBAAoB;AACpB,oBAAoB;AACpB,oBAAoB;;QAEZ;YACI,kBAAkB;QACtB;;YAEI;gBACI,aAAa;gBACb,iBAAiB;gBACjB,0BAA0B;;gBAE1B,YAAY;YAChB;;gBAEI;;oBAEI,wBAAwB;gBAC5B;;gBAEA;oBACI,aAAa;oBACb,iBAAiB;oBACjB,mBAAmB;gBACvB;;gBAEA;oBACI,kBAAkB;gBACtB;;oBAEI;wBACI,aAAa;wBACb,+BAA+B;wBAC/B,wBAAwB;wBACxB;4DACoC;;wBAEpC,WAAW;oBACf;;wBAEI;4BACI,gBAAgB;4BAChB,kBAAkB;wBACtB;;wBAEA;4BACI,mBAAmB;4BACnB,aAAa;4BACb,mBAAmB;wBACvB;;wBAEA;4BACI,sBAAsB;4BACtB,kBAAkB;wBACtB;;gBAER;oBACI,aAAa;oBACb,2BAA2B;gBAC/B;;oBAEI;wBACI,kBAAkB;oBACtB;;gBAEJ;oBACI,aAAa;oBACb,uBAAuB;gBAC3B;;oBAEI;;wBAEI,aAAa;wBACb,0BAA0B;oBAC9B;;wBAEI;;4BAEI,kBAAkB;wBACtB;;oBAEJ;wBACI,mCAAmC;oBACvC;;oBAEA;wBACI,2CAA2C;oBAC/C;;oBAEA;wBACI,aAAa;wBACb,iBAAiB;wBACjB,0BAA0B;;wBAE1B,WAAW;oBACf;;wBAEI;4BACI,aAAa;4BACb,0BAA0B;4BAC1B,yBAAyB;wBAC7B;;gBAER;oBACI,aAAa;oBACb,iBAAiB;oBACjB,0BAA0B;gBAC9B;;oBAEI;wBACI,aAAa;oBACjB;;wBAEI;;4BAEI,kBAAkB;wBACtB;;oBAEJ;wBACI,aAAa;wBACb,mBAAmB;oBACvB;;wBAEI;4BACI,kBAAkB;wBACtB;;wBAEA;4BACI,aAAa;4BACb,0BAA0B;wBAC9B","sourcesContent":["/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --xtra-small-pad: calc(0.25 * var(--main-pad));\n    --xtra-small-gap: calc(0.25 * var(--main-gap));\n\n    --small-pad: calc(0.5 * var(--main-pad));\n    --small-gap: calc(0.5 * var(--main-gap));\n\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: calc(1.5 * var(--main-pad));\n\n    --lrg-gap: calc(2 * var(--main-gap))\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nimg {\n    height: 1.25em;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #sidebar,\n    #display {\n        padding: var(--main-pad);\n    }\n\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n\n#sidebar {\n    --y-offset: calc(calc(var(--main-pad) * 2) + 3.15em);\n    \n    position: absolute;\n    top: var(--y-offset); left: 0em;\n\n    height: calc(100vh - var(--y-offset));\n    width: 25vw;\n}\n\n    .view-prefs-container {\n        display: flex;\n        flex-flow: column;\n        gap: var(--lrg-gap);\n\n        padding-top: var(--lrg-gap);\n    }\n\n        #sidebar ul {\n            display: flex;\n            flex-flow: column;\n            gap: var(--main-gap);\n        }\n\n            #sidebar ul span {\n                display: flex;\n                justify-content: space-between;\n            }\n\n            #sidebar li {\n                display: flex;\n                align-items: center;\n                gap: var(--xtra-small-gap);\n            }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    \n    width: 80%;\n    max-width: 450px;\n\n    padding: var(--main-pad);\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    position: absolute;\n    top: 0px; right: 0px;\n    z-index: 1;\n\n    height: 100vh; width: 100vw;\n}\n\n    form {\n        padding-bottom: var(--main-pad);\n    }\n\n            .input-label-group {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                margin-top: var(--small-pad);\n            }\n            \n                p {\n                    margin-top: var(--small-pad);\n                }\n\n            .dropdowns {\n                display: flex;\n            }\n\n                .dropdowns div {\n                    display: flex;\n                    flex-flow: column;\n\n                    width: 50%;\n                }\n\n    .form-buttons {\n        display: flex;\n        justify-content: center;\n        gap: var(--small-gap);\n    }\n\n        button,\n        input,\n        select {\n            padding: var(--xtra-small-pad);\n        }\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            gap: var(--main-gap);\n\n            z-index: 1;\n        }\n\n            header img {\n                height: 2em;\n            }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--xtra-small-gap);\n\n                padding: 1em;\n            }\n                \n                div.card,\n                .task-controls {\n                    padding: var(--main-pad);\n                }\n\n                .card.project {\n                    display: flex;\n                    flex-flow: column;\n                    align-items: center;\n                }\n\n                .card.sort-due {\n                    text-align: center;\n                }\n\n                    .card.project .header {\n                        display: grid;\n                        grid-template-columns: 1fr auto;\n                        grid-template-rows: auto;\n                        grid-template-areas: 'title       controls'\n                                             'description .';\n\n                        width: 100%;\n                    }\n\n                        .card.project .title {\n                            grid-area: title;\n                            text-align: center;\n                        }\n\n                        .project-controls {\n                            grid-area: controls;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                        .card.project .description {\n                            grid-area: description;\n                            text-align: center;\n                        }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    .singleton .header,\n                    .checklist .header {\n                        display: flex;\n                        gap: var(--xtra-small-gap);\n                    }\n\n                        .singleton .title,\n                        .checklist .title {\n                            margin-right: auto;\n                        }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--xtra-small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--xtra-small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--xtra-small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                            align-content: flex-start;\n                        }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--xtra-small-gap);\n                }\n\n                    .description-container {\n                        display: flex;\n                    }\n\n                        .card.checklist .description,\n                        .card.singleton .description {\n                            margin-right: auto;\n                        }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n\n                        .checklist-item-controls {\n                            display: flex;\n                            gap: var(--xtra-small-gap);\n                        }\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/shaping.css":
/*!********************************!*\
  !*** ./src/styles/shaping.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shaping.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/shaping.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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


// * initiates default state

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
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('confirmInput', taskValues);
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
// * factory class for base-level DOM elements

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
/* harmony import */ var _styles_shaping_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/shaping.css */ "./src/styles/shaping.css");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDRTtBQUNIO0FBQ0c7QUFDRDs7QUFFbUI7QUFDUjtBQUNKO0FBQ0k7QUFDQTtBQUNWOztBQUU5QjtBQUNBLGdFQUFpQjtBQUNqQiwyREFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvY29sb3JzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3NoYXBpbmcuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3BhY2luZy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90eXBvLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvY29sb3JzLmNzcz9iMGQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zaGFwaW5nLmNzcz8wZTljIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3BhY2luZy5jc3M/MzcxZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3R5cG8uY3NzPzYwZWMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9saWJyYXJ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3RpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZBNzBCRDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUVBRUM7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5zZWN0aW9uLmZvcm0tY29udGFpbmVyOm5vdCguaGlkZSkgfiAuc2hvdy1maWx0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsdGVyOiBvcGFjaXR5KDAuNSk7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ucmVxdWlyZWQtYmFkZ2UsXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuICAgIGZpZWxkc2V0IHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztJQUVJO1FBQ0ksWUFBWTtJQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkE3MEJEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUFFQztcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbnNlY3Rpb24uZm9ybS1jb250YWluZXI6bm90KC5oaWRlKSB+IC5zaG93LWZpbHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5yZXF1aXJlZC1iYWRnZSxcXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4gICAgZmllbGRzZXQge1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR0xPQkFMID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4O1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbi8qIFNFQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW5kZXIgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMSwgaDIsIGgzLCBoNCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi8qIEZPUk1TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBjaGFuZ2UgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gcmVtb3ZlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBzaG93IG92ZXJmbG93IGluIElFLCBFZGdlICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qIHJlbW92ZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBJRSAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogY29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qIGNvcnJlY3QgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG4gIFxcbi8qIDEuIGNvcnJlY3QgdGV4dCB3cmFwcGluZyBpbiBFZGdlLCBJRSAqL1xcbi8qIDIuIGNvcnJlY3QgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFICovXFxuLyogMy4gcmVtb3ZlIHBhZGRpbmcgc28gZGV2cyBhcmVuJ3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVyby1vdXQgKi9cXG4vKiAgICBgZmllbGRzZXRgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAgKi9cXG4vKiAyLiByZW1vdmUgcGFkZGluZyBpbiBJRSAxMCAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcblxcbi8qIElOVEVSQUNUSVZFID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQ0FBcUM7O0FBRXJDOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZLEVBQUUsV0FBVzs7SUFFekIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7O0lBRWIsd0JBQXdCO0FBQzVCOzs7QUFHQSx1Q0FBdUM7O0FBRXZDLDZDQUE2Qzs7QUFFN0M7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLDhEQUE4RDs7QUFFOUQ7SUFDSSxTQUFTO0FBQ2I7O0FBRUEseURBQXlEOztBQUV6RDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLCtDQUErQzs7QUFFL0Msa0RBQWtEOztBQUVsRDtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0Esb0NBQW9DOztBQUVwQywwQ0FBMEM7QUFDMUMsMkNBQTJDOztBQUUzQzs7O0lBR0ksb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ3JCOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBLDhEQUE4RDs7QUFFOUQ7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBLGtFQUFrRTs7QUFFbEU7O0lBRUksMEJBQTBCO0FBQzlCOztBQUVBLDRDQUE0Qzs7QUFFNUM7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQSxtREFBbUQ7O0FBRW5EOztJQUVJLDhCQUE4QjtBQUNsQzs7QUFFQSwrQkFBK0I7O0FBRS9CO0lBQ0ksVUFBVTtBQUNkOztBQUVBLHlDQUF5QztBQUN6QyxnRUFBZ0U7QUFDaEUsbUVBQW1FO0FBQ25FLDBDQUEwQzs7QUFFMUM7SUFDSSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDL0I7O0FBRUEsdUNBQXVDO0FBQ3ZDLCtCQUErQjs7QUFFL0I7O0lBRUksc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixVQUFVLEVBQUUsTUFBTTtBQUN0Qjs7O0FBR0EsMENBQTBDOztBQUUxQyxpQ0FBaUM7O0FBRWpDO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbmRlciBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgxLCBoMiwgaDMsIGg0IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxufVxcblxcblxcbi8qIEVNQkVEREVEIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiByZXN0b3JlIGZvY3VzIHN0eWxlcyB1bnNldCBieSBwcmV2aW91cyBydWxlIF5eICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyogY29ycmVjdCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbiAgXFxuLyogMS4gY29ycmVjdCB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UsIElFICovXFxuLyogMi4gY29ycmVjdCBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUgKi9cXG4vKiAzLiByZW1vdmUgcGFkZGluZyBzbyBkZXZzIGFyZW4ndCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvLW91dCAqL1xcbi8qICAgIGBmaWVsZHNldGBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMCAqL1xcbi8qIDIuIHJlbW92ZSBwYWRkaW5nIGluIElFIDEwICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyogSU5URVJBQ1RJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcblxcbjpyb290IHtcXG4gICAgLS14dHJhLXNtYWxsLXBhZDogY2FsYygwLjI1ICogdmFyKC0tbWFpbi1wYWQpKTtcXG4gICAgLS14dHJhLXNtYWxsLWdhcDogY2FsYygwLjI1ICogdmFyKC0tbWFpbi1nYXApKTtcXG5cXG4gICAgLS1zbWFsbC1wYWQ6IGNhbGMoMC41ICogdmFyKC0tbWFpbi1wYWQpKTtcXG4gICAgLS1zbWFsbC1nYXA6IGNhbGMoMC41ICogdmFyKC0tbWFpbi1nYXApKTtcXG5cXG4gICAgLS1tYWluLXBhZDogMWVtO1xcbiAgICAtLW1haW4tZ2FwOiAxZW07XFxuXFxuICAgIC0tbWVkLXBhZDogY2FsYygxLjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcblxcbiAgICAtLWxyZy1nYXA6IGNhbGMoMiAqIHZhcigtLW1haW4tZ2FwKSlcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiAgICBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAwZW07XFxuICAgIH1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IDEuMjVlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuICAgIGhlYWRlcixcXG4gICAgI3NpZGViYXIsXFxuICAgICNkaXNwbGF5IHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkKTtcXG4gICAgfVxcblxcbi8qIC0tLSBTSURFQkFSICovXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcblxcbiNzaWRlYmFyIHtcXG4gICAgLS15LW9mZnNldDogY2FsYyhjYWxjKHZhcigtLW1haW4tcGFkKSAqIDIpICsgMy4xNWVtKTtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiB2YXIoLS15LW9mZnNldCk7IGxlZnQ6IDBlbTtcXG5cXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0teS1vZmZzZXQpKTtcXG4gICAgd2lkdGg6IDI1dnc7XFxufVxcblxcbiAgICAudmlldy1wcmVmcy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1scmctZ2FwKTtcXG5cXG4gICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1scmctZ2FwKTtcXG4gICAgfVxcblxcbiAgICAgICAgI3NpZGViYXIgdWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1tYWluLWdhcCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI3NpZGViYXIgdWwgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgI3NpZGViYXIgbGkge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICB9XFxuXFxuLyogLS0tIEZPUk1TICovXFxuLyogLS0tIEZPUk1TICovXFxuLyogLS0tIEZPUk1TICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTsgbGVmdDo1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG5cXG4gICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbn1cXG5cXG5zZWN0aW9uLmZvcm0tY29udGFpbmVyOm5vdCguaGlkZSkgfiAuc2hvdy1maWx0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4OyByaWdodDogMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoOyB3aWR0aDogMTAwdnc7XFxufVxcblxcbiAgICBmb3JtIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1tYWluLXBhZCk7XFxuICAgIH1cXG5cXG4gICAgICAgICAgICAuaW5wdXQtbGFiZWwtZ3JvdXAge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZHJvcGRvd25zIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5kcm9wZG93bnMgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgLmZvcm0tYnV0dG9ucyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbixcXG4gICAgICAgIGlucHV0LFxcbiAgICAgICAgc2VsZWN0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS14dHJhLXNtYWxsLXBhZCk7XFxuICAgICAgICB9XFxuXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyICBoZWFkZXInXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSBkaXNwbGF5JztcXG5cXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuXFxuICAgICAgICBoZWFkZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1tYWluLWdhcCk7XFxuXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBoZWFkZXIgaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyZW07XFxuICAgICAgICAgICAgfVxcblxcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcblxcbiAgICAgICAgI2Rpc3BsYXkge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZGlzcGxheTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZGlzcGxheS1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBkaXYuY2FyZCxcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLnByb2plY3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuY2FyZC5zb3J0LWR1ZSB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLnByb2plY3QgLmhlYWRlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgICAgICAgY29udHJvbHMnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uIC4nO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLnByb2plY3QgLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY29udHJvbHM7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLnByb2plY3QgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2luZ2xldG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiAuaGVhZGVyLFxcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCAuaGVhZGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaW5nbGV0b24gLnRpdGxlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0teHRyYS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXh0cmEtc21hbGwtcGFkKSAqIDEpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbHMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jaGVja2xpc3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQuY2hlY2tsaXN0IC5kZXNjcmlwdGlvbixcXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC5zaW5nbGV0b24gLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0LWl0ZW0tY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zcGFjaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7O0FBRVg7SUFDSSw4Q0FBOEM7SUFDOUMsOENBQThDOztJQUU5Qyx3Q0FBd0M7SUFDeEMsd0NBQXdDOztJQUV4QyxlQUFlO0lBQ2YsZUFBZTs7SUFFZixzQ0FBc0M7O0lBRXRDO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7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O3dCQUUxQixXQUFXO29CQUNmOzt3QkFFSTs0QkFDSSxhQUFhOzRCQUNiLDBCQUEwQjs0QkFDMUIseUJBQXlCO3dCQUM3Qjs7Z0JBRVI7b0JBQ0ksYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtnQkFDOUI7O29CQUVJO3dCQUNJLGFBQWE7b0JBQ2pCOzt3QkFFSTs7NEJBRUksa0JBQWtCO3dCQUN0Qjs7b0JBRUo7d0JBQ0ksYUFBYTt3QkFDYixtQkFBbUI7b0JBQ3ZCOzt3QkFFSTs0QkFDSSxrQkFBa0I7d0JBQ3RCOzt3QkFFQTs0QkFDSSxhQUFhOzRCQUNiLDBCQUEwQjt3QkFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXh0cmEtc21hbGwtcGFkOiBjYWxjKDAuMjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcbiAgICAtLXh0cmEtc21hbGwtZ2FwOiBjYWxjKDAuMjUgKiB2YXIoLS1tYWluLWdhcCkpO1xcblxcbiAgICAtLXNtYWxsLXBhZDogY2FsYygwLjUgKiB2YXIoLS1tYWluLXBhZCkpO1xcbiAgICAtLXNtYWxsLWdhcDogY2FsYygwLjUgKiB2YXIoLS1tYWluLWdhcCkpO1xcblxcbiAgICAtLW1haW4tcGFkOiAxZW07XFxuICAgIC0tbWFpbi1nYXA6IDFlbTtcXG5cXG4gICAgLS1tZWQtcGFkOiBjYWxjKDEuNSAqIHZhcigtLW1haW4tcGFkKSk7XFxuXFxuICAgIC0tbHJnLWdhcDogY2FsYygyICogdmFyKC0tbWFpbi1nYXApKVxcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDBlbTtcXG4gICAgfVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMS4yNWVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4gICAgaGVhZGVyLFxcbiAgICAjc2lkZWJhcixcXG4gICAgI2Rpc3BsYXkge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICB9XFxuXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcbi8qIC0tLSBTSURFQkFSICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAtLXktb2Zmc2V0OiBjYWxjKGNhbGModmFyKC0tbWFpbi1wYWQpICogMikgKyAzLjE1ZW0pO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IHZhcigtLXktb2Zmc2V0KTsgbGVmdDogMGVtO1xcblxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS15LW9mZnNldCkpO1xcbiAgICB3aWR0aDogMjV2dztcXG59XFxuXFxuICAgIC52aWV3LXByZWZzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICBnYXA6IHZhcigtLWxyZy1nYXApO1xcblxcbiAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLWxyZy1nYXApO1xcbiAgICB9XFxuXFxuICAgICAgICAjc2lkZWJhciB1bCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjc2lkZWJhciB1bCBzcGFuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAjc2lkZWJhciBsaSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlOyBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIFxcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcblxcbiAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxufVxcblxcbnNlY3Rpb24uZm9ybS1jb250YWluZXI6bm90KC5oaWRlKSB+IC5zaG93LWZpbHRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7IHJpZ2h0OiAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7IHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIGZvcm0ge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLW1haW4tcGFkKTtcXG4gICAgfVxcblxcbiAgICAgICAgICAgIC5pbnB1dC1sYWJlbC1ncm91cCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc21hbGwtcGFkKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc21hbGwtcGFkKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kcm9wZG93bnMge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3ducyBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAuZm9ybS1idXR0b25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG4gICAgfVxcblxcbiAgICAgICAgYnV0dG9uLFxcbiAgICAgICAgaW5wdXQsXFxuICAgICAgICBzZWxlY3Qge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXh0cmEtc21hbGwtcGFkKTtcXG4gICAgICAgIH1cXG5cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgIGhlYWRlcidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5IGRpc3BsYXknO1xcblxcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG5cXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG5cXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGhlYWRlciBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuXFxuICAgICAgICAjZGlzcGxheSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkaXNwbGF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGRpdi5jYXJkLFxcbiAgICAgICAgICAgICAgICAudGFzay1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jYXJkLnNvcnQtZHVlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAuaGVhZGVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSAgICAgICBjb250cm9scydcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24gLic7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAudGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb250cm9scztcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQucHJvamVjdCAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zaW5nbGV0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIC5oZWFkZXIsXFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IC5oZWFkZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS14dHJhLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiAudGl0bGUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCAudGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS14dHJhLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0teHRyYS1zbWFsbC1wYWQpICogMSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlscyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXh0cmEtc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC5jaGVja2xpc3QgLmRlc2NyaXB0aW9uLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLnNpbmdsZXRvbiAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB1bCBsaSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkgbGFiZWwge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QtaXRlbS1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0teHRyYS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5LFxcbmgzLCBoNCwgcCxcXG5idXR0b24sIGlucHV0LCBzZWxlY3QsIGxlZ2VuZCxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgbGksIFxcbi5jYXJkLnByb2plY3QgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4udGFsbHksXFxuLnRhbGx5IHNwYW4sXFxuLmNyZWF0ZSxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgaDQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kYXRlLFxcbi5jYXJkLmNoZWNrbGlzdCAuZGVzY3JpcHRpb24sIFxcbi5jYXJkLnNpbmdsZXRvbiAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbi5kYXRlLCBoMSwgaDIsIGxlZ2VuZCxcXG4udmlldy1wcmVmcy1jb250YWluZXIgdWwgc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2FyZCBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNhcmQucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBOzs7OztJQUtJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSxlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSxcXG5oMywgaDQsIHAsXFxuYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCBsZWdlbmQsXFxuLnZpZXctcHJlZnMtY29udGFpbmVyIHVsIGxpLCBcXG4uY2FyZC5wcm9qZWN0IC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnRhbGx5LFxcbi50YWxseSBzcGFuLFxcbi5jcmVhdGUsXFxuLnZpZXctcHJlZnMtY29udGFpbmVyIHVsIGg0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGF0ZSxcXG4uY2FyZC5jaGVja2xpc3QgLmRlc2NyaXB0aW9uLCBcXG4uY2FyZC5zaW5nbGV0b24gLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4uZGF0ZSwgaDEsIGgyLCBsZWdlbmQsXFxuLnZpZXctcHJlZnMtY29udGFpbmVyIHVsIHNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNhcmQgaDQge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jYXJkLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXBpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGFwaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGFjaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3BhY2luZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHlwby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IF9ldmVudHMgPSB7fTtcblxuICAgIC8vIHN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTVUJTQ1JJQklORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICAvLyB1bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZSgoX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQVUJMSVNISU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHMsXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnXG5cbi8vICogaW5pdGlhdGVzIGRlZmF1bHQgc3RhdGVcblxuY29uc3QgZGVmYXVsdFN0YXRlID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF9zYW1wbGVQcm9qZWN0VmFsdWVzID0gW1sncHJvamVjdCcsICcnLCAnVW5zb3J0ZWQnLCBcIlRoaXMgaXMgeW91ciB0YXNrcycgZGVmYXVsdCBsb2NhdGlvbi4gQW55IHRhc2tzIHdpdGhvdXQgYSBwcm9qZWN0IGxpdmUgaGVyZS5cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICBsZXQgX3NhbXBsZVRhc2tWYWx1ZXMgPSBbWyd0YXNrJywgJycsICdzaW5nbGV0b24nLCAnVGFzayAxJywgJ3RoaXMgaXMgYSBzYW1wbGUgdGFzaycsICcyMDAxLTAxLTAxJywgMywgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsndGFzaycsICcnLCAnc2luZ2xldG9uJywgJ1Rhc2sgMicsICd0aGlzIGlzICMyJywgJzIwMDItMDItMDInLCAyLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyd0YXNrJywgJycsICdjaGVja2xpc3QnLCAnVGFzayAzJywgJ3RoaXMgaXMgYSBjaGVja2xpc3QnLCAnMjAwMy0wMy0wMycsIDEsIDAsIFsnaXRlbSAxJywgJ2l0ZW0gMicsICdpdGVtIDMnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgIC8vIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBfY3JlYXRlRGVmYXVsdFByb2plY3QoX3NhbXBsZVByb2plY3RWYWx1ZXNbMF0pO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfc2FtcGxlVGFza1ZhbHVlcy5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIF9jcmVhdGVEZWZhdWx0VGFzayhfc2FtcGxlVGFza1ZhbHVlc1t0XSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0UHJvamVjdChwcm9qZWN0VmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCBwcm9qZWN0VmFsdWVzKTsgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0VGFzayh0YXNrVmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCB0YXNrVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LCAgIC8vIHVzZWQgYnkgaW5kZXguanNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRTdGF0ZTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRpdiwgaDEsIGgyLCBoNCwgdWwsIGxpLCBzcGFuLCBpbnB1dCwgbGFiZWwsIGltZyB9IGZyb20gJy4vZWxlbWVudHMnO1xuXG4vLyAmIG1hbmFnZXMgZGlzcGxheSBET00gPC0+IGxpYnJhcnkgY29tbXVuaWNhdGlvblxuLy8gJiBjb250YWlucyBmYWN0b3JpZXMgZm9yIGdlbmVyYXRpbmcgZGlzcGxheSBzZWN0aW9uIERPTSBlbGVtZW50cyAvIGdyb3VwaW5nc1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF90YXNrQ291bnRlciA9IDA7XG5cbiAgICAvLyBjYWNoZSBET01cbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tDb3VudFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMy50YWxseSBzcGFuJyk7XG5cbiAgICAvLyAqIGNyZWF0ZSB0YXNrIGxpc3RlbmVyIGluIF9yZW5kZXJUYXNrQ3JlYXRlQnV0dG9uKClcbiAgICAvLyAqIG1vZGlmeSAmIGRlbGV0ZSBjbGljayBsaXN0ZW5lcnMgaW4gX3JlbmRlci4uLkhlYWRlcigpXG4gICAgLy8gKiBjcmVhdGUgY2hlY2tsaXN0IGl0ZW0gbGlzdGVuZXIgaW4gX3JlbmRlckNoZWNrbGlzdERlc2NyaXRpb25Db250YWluZXIoKVxuXG4gICAgLy8gZGlzcGxheSBtYW5hZ2VyXG4gICAgZnVuY3Rpb24gX3VwZGF0ZURpc3BsYXkoaW5zdGFuY2VCdW5kbGUpIHtcbiAgICAgICAgbGV0IHZpZXdQcmVmZXJlbmNlID0gaW5zdGFuY2VCdW5kbGVbMF07XG4gICAgICAgIGxldCB2aWV3UHJlZmVyZW5jZUhlYWRlckNhcmQ7XG5cbiAgICAgICAgc3dpdGNoICh2aWV3UHJlZmVyZW5jZSkgeyAgIC8vICEgcmVkdWNlIHJlcGV0aXRpb25cbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKGluc3RhbmNlQnVuZGxlLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdEluc3RhbmNlID0gaW5zdGFuY2VCdW5kbGVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlbmRlclByb2plY3QocHJvamVjdEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlbmRlclRhc2soaW5zdGFuY2VCdW5kbGVbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB2aWV3UHJlZmVyZW5jZUhlYWRlckNhcmQgPSBfcmVuZGVyVmlld1ByZWZlcmVuY2VIZWFkZXJDYXJkKGluc3RhbmNlQnVuZGxlWzBdKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdQcmVmZXJlbmNlSGVhZGVyQ2FyZCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAoaW5zdGFuY2VCdW5kbGUubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZW5kZXJUYXNrKGluc3RhbmNlQnVuZGxlW2ldKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdXBkYXRlSXRlbShpdGVtSW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IGNhcmRJRDtcbiAgICAgICAgbGV0IGNhcmQ7XG5cbiAgICAgICAgc3dpdGNoKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgKGl0ZW1JbnN0YW5jZS50eXBlID09PSAncHJvamVjdCcpOlxuICAgICAgICAgICAgICAgIGNhcmRJRCA9IGBwcm9qZWN0XyR7aXRlbUluc3RhbmNlLmlkfWA7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRJRCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFZhbHVlcyA9IFtpdGVtSW5zdGFuY2UudGl0bGUsIGl0ZW1JbnN0YW5jZS5kZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChwcm9qZWN0VmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsdWVzWzFdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ3NpbmdsZXRvbicgfHwgaXRlbUluc3RhbmNlLnR5cGUgPT09ICdjaGVja2xpc3QnKTpcbiAgICAgICAgICAgICAgICBjYXJkSUQgPSBgdGFza18ke2l0ZW1JbnN0YW5jZS5pZH1gO1xuICAgICAgICAgICAgICAgIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSUQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCB0YXNrVmFsdWVzID0gW2l0ZW1JbnN0YW5jZS50aXRsZSwgaXRlbUluc3RhbmNlLmRlc2NyaXB0aW9uLCBpdGVtSW5zdGFuY2UuZHVlRGF0ZSwgaXRlbUluc3RhbmNlLnByaW9yaXR5LCBpdGVtSW5zdGFuY2UucHJvamVjdElEXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXNrVmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW1JbnN0YW5jZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NpbmdsZXRvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlIGg0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrVmFsdWVzWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eS5zcmMgPSBgLi4vc3JjL2ljb25zL3ByaW9yaXR5LSR7dGFza1ZhbHVlc1szXX0uc3ZnYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3RDYXJkSUQgPSBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJykuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0UmVmZXJlbmNlID0gY3VycmVudFByb2plY3RDYXJkSUQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFza1ZhbHVlc1s0XSAhPSBjdXJyZW50UHJvamVjdFJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVsZXRlVGFza0NhcmQoY2FyZElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChpdGVtSW5zdGFuY2VbMF0gPT09ICdjaGVja2JveCcpOiAgLy8gaXRlbUluc3RhbmNlIGJ1bmRsZWQgbWFudWFsbHkgaW4gbGlicmFyeS5qc1xuICAgICAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gaXRlbUluc3RhbmNlWzFdO1xuICAgICAgICAgICAgICAgIGxldCBjaGVja0lEID0gaXRlbUluc3RhbmNlWzJdO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbENvbnRlbnQgPSBpdGVtSW5zdGFuY2VbM107XG4gICAgXG4gICAgICAgICAgICAgICAgY2FyZElEID0gYHRhc2tfJHt0YXNrUmVmZXJlbmNlfV9fbGlfJHtjaGVja0lEfWA7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRJRCk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrTGFiZWwgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsQ29udGVudDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfY2xlYXJEaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHRhc2tDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCctJyk7XG4gICAgICAgIH07XG4gICAgICAgIF9yZW1vdmVUYXNrQ3JlYXRlQnV0dG9uKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVUYXNrQ2FyZChpZCkge1xuICAgICAgICBsZXQgdGFyZ2V0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXJnZXRUYXNrKVxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCctJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVDaGVja2xpc3RJdGVtKGlkKSB7XG4gICAgICAgIGxldCBsaUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0IyR7aWR9YCkucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHVsQ29udGFpbmVyID0gbGlDb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICAgICAgdWxDb250YWluZXIucmVtb3ZlQ2hpbGQobGlDb250YWluZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZmlsbFRhc2tDb3VudGVyKG9wZXJhdG9yKSB7XG4gICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIF90YXNrQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgX3Rhc2tDb3VudGVyLS07XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0YXNrQ291bnRTcGFuLnRleHRDb250ZW50ID0gX3Rhc2tDb3VudGVyO1xuICAgIH1cbiAgICBcbiAgICAvLyBwcm9qZWN0IGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBpZiAocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICAgICAgX2NsZWFyRGlzcGxheSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjYXJkSUQgPSAnI3Byb2plY3RfJyArIHByb2plY3QuaWQ7XG4gICAgICAgIGxldCBwcm9qZWN0Q2FyZCA9IGRpdignJywgJy5jYXJkJywgJy5wcm9qZWN0JywgY2FyZElEKTtcbiAgICAgICAgbGV0IHByb2plY3RIZWFkZXIgPSBfcmVuZGVyUHJvamVjdEhlYWRlcihwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LmlkLCBwcm9qZWN0LnRpdGxlKTtcblxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cbiAgICAgICAgX3JlbmRlclRhc2tDcmVhdGVCdXR0b24oKTtcblxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCcnKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclByb2plY3RIZWFkZXIgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgaWQsIHRpdGxlKSB7XG4gICAgICAgIGxldCBkaXZIZWFkZXIgPSBkaXYoJycsICcuaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGgyVGl0bGUgPSBoMih0aXRsZSwgJy50aXRsZScpO1xuICAgICAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZGl2KGRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmQoaDJUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgaWYgKGlkICE9PSAwKSB7XG4gICAgICAgICAgICBsZXQgZGl2UHJvamVjdENvbnRyb2xzID0gZGl2KCcnLCAnLnByb2plY3QtY29udHJvbHMnKTtcblxuICAgICAgICAgICAgbGV0IGltZ01vZGlmeSA9IGltZygnc3JjL2ljb25zL2VkaXQuc3ZnJywgJ21vZGlmeSBwcm9qZWN0JywgJy5wcm9qZWN0JywgJy5tb2RpZnknKTtcbiAgICAgICAgICAgIC8vICogcHJvamVjdCBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICAgICAgaW1nTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tNb2RpZnlJdGVtJywgZSk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBpbWdEZWxldGUgPSBpbWcoJ3NyYy9pY29ucy9kZWxldGUuc3ZnJywgJ2RlbGV0ZSBwcm9qZWN0JywgJy5kZWxldGUnKTtcbiAgICAgICAgICAgIGltZ0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQ7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlUHJvamVjdCcsIGNhcmRJRCk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRpdlByb2plY3RDb250cm9scy5hcHBlbmQoaW1nTW9kaWZ5LCBpbWdEZWxldGUpO1xuICAgICAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGRpdlByb2plY3RDb250cm9scyk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyVmlld1ByZWZlcmVuY2VIZWFkZXJDYXJkID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgbGV0IHZpZXdDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLnNvcnQtZHVlJyk7XG4gICAgICAgIGxldCB2aWV3SGVhZGVyID0gaDIodGl0bGUsICcnKTtcbiAgICAgICAgdmlld0NhcmQuYXBwZW5kQ2hpbGQodmlld0hlYWRlcik7XG5cbiAgICAgICAgcmV0dXJuIHZpZXdDYXJkO1xuICAgIH1cblxuICAgIC8vIHRhc2sgZmFjdG9yaWVzXG4gICAgY29uc3QgX3JlbmRlclRhc2tDcmVhdGVCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGRpdkNyZWF0ZSA9IGRpdignKycsICcuY3JlYXRlJyk7XG5cbiAgICAgICAgZGl2Q3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrQ3JlYXRlSXRlbScsICd0YXNrJyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0YXNrQ29udHJvbHMgPSB0YXNrQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICB0YXNrQ29udHJvbHMuYXBwZW5kKGRpdkNyZWF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW1vdmVUYXNrQ3JlYXRlQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0YXNrQ29udHJvbHMgPSB0YXNrQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgY29udHJvbHNMZW5ndGggPSB0YXNrQ29udHJvbHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgbGFzdENvbnRyb2wgPSB0YXNrQ29udHJvbHMuY2hpbGRyZW5bY29udHJvbHNMZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAobGFzdENvbnRyb2wuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcmVhdGUnKSkge1xuICAgICAgICAgICAgdGFza0NvbnRyb2xzLnJlbW92ZUNoaWxkKGxhc3RDb250cm9sKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclRhc2sgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGxldCBjYXJkSUQgPSAndGFza18nICsgdGFzay5pZDtcbiAgICAgICAgbGV0IHRhc2tDYXJkO1xuXG4gICAgICAgIHN3aXRjaCAodGFzay50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzaW5nbGV0b24nOlxuICAgICAgICAgICAgICAgIHRhc2tDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLnNpbmdsZXRvbicsIGAjJHtjYXJkSUR9YClcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xldG9uQ2hlY2ttYXJrID0gaW5wdXQoJ2NoZWNrYm94JywgJycsICcnLCB0YXNrLmlkLCAnJyk7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZXRvbkNhcmRDb250ZW50ID0gX3JlbmRlclNpbmdsZXRvbkNvbnRlbnQodGFzay5pZCwgdGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmQoc2luZ2xldG9uQ2hlY2ttYXJrLCBzaW5nbGV0b25DYXJkQ29udGVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICAgICAgICAgIHRhc2tDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLmNoZWNrbGlzdCcsIGAjJHtjYXJkSUR9YCwgYC5wcmlvcml0eS0ke3Rhc2sucHJpb3JpdHl9YCk7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdENhcmRDb250ZW50ID0gX3JlbmRlckNoZWNrbGlzdENhcmRDb250ZW50cyh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtcyA9IF9yZW5kZXJDaGVja2JveENvbnRhaW5lcihjYXJkSUQsIHRhc2suaXRlbXMpO1xuICAgICAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZChjaGVja2xpc3RDYXJkQ29udGVudCwgY2hlY2tsaXN0SXRlbXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIF9maWxsVGFza0NvdW50ZXIoJysnKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclNpbmdsZXRvbkNvbnRlbnQgPSBmdW5jdGlvbihpZCwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRpdignJywgJy5jb250ZW50Jyk7XG5cbiAgICAgICAgbGV0IHRhc2tIZWFkZXIgPSBfcmVuZGVyU2luZ2xldG9uSGVhZGVyKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZGl2KGRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQodGFza0hlYWRlciwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJTaW5nbGV0b25IZWFkZXIgPSBmdW5jdGlvbihpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBkaXZIZWFkZXIgPSBkaXYoJycsICcuaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGxhYmVsQ2hlY2ttYXJrVGl0bGUgPSBsYWJlbCgnJywgaWQsICcudGl0bGUnKTtcbiAgICAgICAgbGV0IGg0VGl0bGVDb250ZW50ID0gaDQodGl0bGUsICcnKTtcbiAgICAgICAgbGFiZWxDaGVja21hcmtUaXRsZS5hcHBlbmRDaGlsZChoNFRpdGxlQ29udGVudCk7XG5cbiAgICAgICAgbGV0IGltZ0FsdDtcbiAgICAgICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdubyBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2xvdyBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaW1nQWx0ID0gJ21lZGl1bSBwcmlvcml0eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaW1nQWx0ID0gJ2hpZ2ggcHJpb3JpdHknO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbWdQcmlvcml0eSA9IGltZyhgc3JjL2ljb25zL3ByaW9yaXR5LSR7cHJpb3JpdHl9LnN2Z2AsIGltZ0FsdCwgJy5wcmlvcml0eScpO1xuXG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IHNwYW4oZHVlRGF0ZSwgJy5kYXRlJyk7XG4gICAgICAgIGxldCBpbWdNb2RpZnkgPSBpbWcoJ3NyYy9pY29ucy9lZGl0LnN2ZycsICdtb2RpZnkgdGFzaycsICcudGFzaycsICcubW9kaWZ5Jyk7XG4gICAgICAgIGxldCBpbWdEZWxldGUgPSBpbWcoJ3NyYy9pY29ucy9kZWxldGUuc3ZnJywgJ2RlbGV0ZSB0YXNrJywgJy5kZWxldGUnKTtcblxuICAgICAgICAvLyAqIHNpbmdsZXRvbiBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICBpbWdNb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgfSk7XG4gICAgICAgIGltZ0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICAgICAgbGV0IHRhc2tDYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlVGFzaycsIHRhc2tDYXJkSUQpOyAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kKGxhYmVsQ2hlY2ttYXJrVGl0bGUsIHNwYW5EYXRlLCBpbWdQcmlvcml0eSwgaW1nTW9kaWZ5LCBpbWdEZWxldGUpO1xuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tsaXN0Q2FyZENvbnRlbnRzID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRpdignJywgJy5jb250ZW50Jyk7XG4gICAgICAgIGxldCBjaGVja2xpc3RIZWFkZXIgPSBfcmVuZGVyQ2hlY2tsaXN0SGVhZGVyKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGxldCBjaGVja2xpc3REZXNjcmlwdGlvbiA9IF9yZW5kZXJDaGVja2xpc3RTdWJoZWFkZXIoZGVzY3JpcHRpb24pO1xuICAgICAgICBcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQoY2hlY2tsaXN0SGVhZGVyLCBjaGVja2xpc3REZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBkaXZDb250ZW50O1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tsaXN0SGVhZGVyID0gZnVuY3Rpb24odGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBkaXZIZWFkZXIgPSBkaXYoJycsICcuaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGg0VGl0bGUgPSBoNCh0aXRsZSwgJy50aXRsZScpO1xuICAgICAgICBsZXQgc3BhbkRhdGUgPSBzcGFuKGR1ZURhdGUsICcuZGF0ZScpO1xuXG4gICAgICAgIGxldCBpbWdBbHQ7XG4gICAgICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpbWdBbHQgPSAnbm8gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdsb3cgcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdtZWRpdW0gcHJpb3JpdHknO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGltZ0FsdCA9ICdoaWdoIHByaW9yaXR5JztcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1nUHJpb3JpdHkgPSBpbWcoYHNyYy9pY29ucy9wcmlvcml0eS0ke3ByaW9yaXR5fS5zdmdgLCBpbWdBbHQsICcucHJpb3JpdHknKTtcblxuICAgICAgICBsZXQgaW1nTW9kaWZ5ID0gaW1nKCdzcmMvaWNvbnMvZWRpdC5zdmcnLCAnbW9kaWZ5IHRhc2snLCAnLnRhc2snLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgaW1nRGVsZXRlID0gaW1nKCdzcmMvaWNvbnMvZGVsZXRlLnN2ZycsICdkZWxldGUgdGFzaycsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBjaGVja2xpc3QgbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgaW1nTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBpbWdEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQ7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tEZWxldGVUYXNrJywgY2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZChoNFRpdGxlLCBzcGFuRGF0ZSwgaW1nUHJpb3JpdHksIGltZ01vZGlmeSwgaW1nRGVsZXRlKTtcbiAgICAgICAgcmV0dXJuIGRpdkhlYWRlcjtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdFN1YmhlYWRlciA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBkaXZDb250YWluZXIgPSBkaXYoJycsICcuZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGl2RGVzY3JpcHRpb24gPSBkaXYoZGVzY3JpcHRpb24sICcuZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IHNwYW5DcmVhdGUgPSBkaXYoJysnLCAnLmNyZWF0ZScpO1xuXG4gICAgICAgIC8vICogY2hlY2tsaXN0IGl0ZW0gY3JlYXRlIGV2ZW50XG4gICAgICAgIHNwYW5DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICBsZXQgZm9ybVJlZmVyZW5jZXMgPSBbJ2NoZWNrYm94JywgdGFza1JlZmVyZW5jZV07XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tDcmVhdGVJdGVtJywgZm9ybVJlZmVyZW5jZXMpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2Q29udGFpbmVyLmFwcGVuZChkaXZEZXNjcmlwdGlvbiwgc3BhbkNyZWF0ZSk7XG4gICAgICAgIHJldHVybiBkaXZDb250YWluZXI7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2JveENvbnRhaW5lciA9IGZ1bmN0aW9uKHRhc2tDYXJkSUQsIGl0ZW1zKSB7XG4gICAgICAgIGxldCB1bEl0ZW0gPSB1bCgnJywgJy5jaGVja2JveGVzJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoaXRlbXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBfcmVuZGVyQ2hlY2tib3godWxJdGVtLCB0YXNrQ2FyZElELCBpdGVtc1tpXSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdWxJdGVtO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tib3ggPSBmdW5jdGlvbihjaGVja2xpc3RDb250YWluZXIsIHRhc2tDYXJkSUQsIGNoZWNrSW5mbykge1xuICAgICAgICBsZXQgY2hlY2tJRCA9IGNoZWNrSW5mb1swXTtcbiAgICAgICAgbGV0IGNoZWNrQ29udGVudCA9IGNoZWNrSW5mb1sxXTtcblxuICAgICAgICBsZXQgbGlDYXJkSUQgPSBgIyR7dGFza0NhcmRJRH1fX2xpXyR7Y2hlY2tJRH1gO1xuICAgICAgICBsZXQgbGlDYXJkID0gbGkoJycsICcuY2FyZCcsIGxpQ2FyZElEKTtcblxuICAgICAgICBsZXQgY2hlY2tib3hJRCA9IGAke3Rhc2tDYXJkSUR9X19jaGVja2JveF8ke2NoZWNrSUR9YDsgIC8vICMgbm90IG5lZWRlZCB2dlxuICAgICAgICBsZXQgY2hlY2tib3ggPSBpbnB1dCgnY2hlY2tib3gnLCAnJywgJycsIGNoZWNrYm94SUQsICcnKTsgIC8vIHNldHMgSUQgZGlyZWN0bHkgdmlhIGRlZmF1bHQgb2JqZWN0IHByb3RvdHlwZSBtZXRob2RzXG4gICAgICAgIC8vICEgc2V0IHByaW9yaXR5IGNsYXNzIGNvbG9yXG4gICAgICAgIGxldCBsYWJlbENoZWNrYm94ID0gbGFiZWwoY2hlY2tDb250ZW50LCBjaGVja2JveElELCAnJyk7XG4gICAgICAgIGxldCBjaGVja2JveENvbnRyb2xzID0gX3JlbmRlckNoZWNrYm94Q29udHJvbHMoY2hlY2tib3hJRCk7XG5cbiAgICAgICAgbGlDYXJkLmFwcGVuZChjaGVja2JveCwgbGFiZWxDaGVja2JveCwgY2hlY2tib3hDb250cm9scyk7XG4gICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaUNhcmQpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyTmV3Q2hlY2tib3ggPSBmdW5jdGlvbihjaGVja2xpc3RJbnN0YW5jZSkge1xuICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGNoZWNrbGlzdEluc3RhbmNlWzFdXG4gICAgICAgIGxldCB0YXNrQ2FyZElEID0gYHRhc2tfJHt0YXNrUmVmZXJlbmNlfWA7XG4gICAgICAgIGxldCB1bFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdiMke3Rhc2tDYXJkSUR9IHVsYCk7XG5cbiAgICAgICAgbGV0IGNoZWNrUmVmZXJlbmNlID0gY2hlY2tsaXN0SW5zdGFuY2VbMl07XG4gICAgICAgIGxldCBjaGVja0NvbnRlbnQgPSBjaGVja2xpc3RJbnN0YW5jZVszXTtcblxuICAgICAgICBfcmVuZGVyQ2hlY2tib3godWxUYXJnZXQsIHRhc2tDYXJkSUQsIFtjaGVja1JlZmVyZW5jZSwgY2hlY2tDb250ZW50XSk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2JveENvbnRyb2xzID0gZnVuY3Rpb24oY2hlY2tJRCkge1xuICAgICAgICBsZXQgZGl2Q29udHJvbHMgPSBkaXYoJycsICcuY2hlY2tsaXN0LWl0ZW0tY29udHJvbHMnKTtcblxuICAgICAgICBsZXQgaW1nTW9kaWZ5ID0gaW1nKCdzcmMvaWNvbnMvZWRpdC5zdmcnLCAnbW9kaWZ5IHRhc2snLCAnLnRhc2snLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgaW1nRGVsZXRlID0gaW1nKCdzcmMvaWNvbnMvZGVsZXRlLnN2ZycsICdkZWxldGUgdGFzaycsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBjaGVja2xpc3QgaXRlbSBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICBpbWdNb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBpbWdEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tEZWxldGVDaGVja2xpc3RJdGVtJywgY2hlY2tJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZDb250cm9scy5hcHBlbmQoaW1nTW9kaWZ5LCBpbWdEZWxldGUpO1xuXG4gICAgICAgIHJldHVybiBkaXZDb250cm9scztcbiAgICB9XG5cblxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndXBkYXRlRGlzcGxheVZpZXcnLCBfdXBkYXRlRGlzcGxheSk7ICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfYnVuZGxlSW5zdGFuY2VzKCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdwcm9qZWN0Q3JlYXRlZCcsIF9yZW5kZXJQcm9qZWN0KSAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndGFza0NyZWF0ZWQnLCBfcmVuZGVyVGFzayk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVUYXNrKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2hlY2tib3hDcmVhdGVkJywgX3JlbmRlck5ld0NoZWNrYm94KTsgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfY3JlYXRlQ2hlY2tib3goKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2l0ZW1Nb2RpZmllZCcsIF91cGRhdGVJdGVtKTsgICAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX21vZGlmeS4uLigpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVtb3ZlUHJvamVjdEZyb21TZWN0aW9uJywgX2NsZWFyRGlzcGxheSkgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2RlbGV0ZVByb2plY3QoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVUYXNrRnJvbURpc3BsYXknLCBfZGVsZXRlVGFza0NhcmQpOyAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlVGFzaygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZUNoZWNrbGlzdEl0ZW1Gcm9tRGlzcGxheScsIF9kZWxldGVDaGVja2xpc3RJdGVtKSAgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlQ2hlY2tsaXN0SXRlbSgpKVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiLCIvLyAqIGZhY3RvcnkgY2xhc3MgZm9yIGJhc2UtbGV2ZWwgRE9NIGVsZW1lbnRzXG5cbi8vIGRhdGFcbmxldCBfYXR0cmlidXRlcyA9IFtdO1xubGV0IGVsZW1lbnQ7XG5cbi8vIGJhc2ljIGhlbHBlciBmYWN0b3JpZXNcbmNvbnN0IGRpdiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IHNwYW4gPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgcCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBoMSA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgaDIgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGg0ID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCB1bCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgbGkgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGlucHV0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIsIGlkLCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICBlbGVtZW50LmlkID0gU3RyaW5nKGlkKTtcbiAgICBlbGVtZW50Lm5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIGlmICh0eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBTdHJpbmcoaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBzZWxlY3QgPSBmdW5jdGlvbihuYW1lLCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQubmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBvcHRpb24gPSBmdW5jdGlvbih2YWx1ZSwgY29udGVudCkge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBsYWJlbCA9IGZ1bmN0aW9uKGNvbnRlbnQsIGZvclJlZmVyZW5jZSwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQuZm9yID0gU3RyaW5nKGZvclJlZmVyZW5jZSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGxlZ2VuZCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGltZyA9IGZ1bmN0aW9uKHVybCwgYWx0LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQuc3JjID0gYC4uLyR7dXJsfWA7XG4gICAgZWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhdHRyaWJ1dGVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzW2ldWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZGl2IGFzIGRlZmF1bHQsIHNwYW4sIHAsIGgxLCBoMiwgaDQsIHVsLCBsaSwgaW5wdXQsIHNlbGVjdCwgb3B0aW9uLCBsYWJlbCwgbGVnZW5kLCBpbWcgfTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRpdiwgc3BhbiwgcCwgaW5wdXQsIGxhYmVsLCBzZWxlY3QsIG9wdGlvbiwgbGVnZW5kIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8vICYgbWFuYWdlcyBkaXNwbGF5L3NpZGViYXIgc2VjdGlvbiBET01zIC0+IGZvcm0gc2VjdGlvbiBET01zIDwtPiBsaWJyYXJ5IGNvbW11bmljYXRpb25cbi8vICYgY29udGFpbnMgZmFjdG9yaWVzIGZvciBnZW5lcmF0aW5nIGZvcm0gc2VjdGlvbiBET00gZWxlbWVudHMgLyBncm91cGluZ3NcblxuY29uc3QgZm9ybXMgPSAoKCkgPT4ge1xuICAgIC8vIGxldCBfY3VycmVudEZvcm07XG4gICAgbGV0IF9jdXJyZW50Rm9ybVR5cGU7XG4gICAgbGV0IF9jdXJyZW50UHJvamVjdDtcblxuICAgIC8vIGNhY2hlIERPTVxuICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgbGV0IGZvcm1GaWVsZHNldCA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKTtcbiAgICBsZXQgZm9ybUlucHV0czsgLy8gKiBxdWVyaWVkIGFmdGVyIGZvcm0gZWxlbWVudHMgYXJlIHJlbmRlcmVkXG4gICAgbGV0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uY29uZmlybScpO1xuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uY2FuY2VsJyk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnNcbiAgICBjb25maXJtQnV0dG9uLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIF9jb25maXJtSW5wdXQoZSk7XG4gICAgfSkpO1xuICAgIGNhbmNlbEJ1dHRvbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIF9jYW5jZWxJbnB1dCgpO1xuICAgIH0pKTtcblxuICAgIC8vIGZvcm0gbWFuYWdlcnNcbiAgICBmdW5jdGlvbiBfb3BlbkNyZWF0ZUZvcm0oZm9ybVJlZmVyZW5jZSkge1xuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSAoKHR5cGVvZiBmb3JtUmVmZXJlbmNlKSA9PT0gJ29iamVjdCcpOiAgIC8vICogc3RvcmVzIHRhc2sgcmVmZXJlbmNlIHdoZW4gY3JlYXRpbmcgbmV3IGNoZWNrbGlzdCBpdGVtXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBmb3JtUmVmZXJlbmNlWzFdO1xuICAgICAgICAgICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlWzBdKTtcbiAgICAgICAgICAgICAgICBfcmVuZGVyQ2hlY2tib3hGb3JtKHRhc2tSZWZlcmVuY2UsICdDcmVhdGUgTmV3IENoZWNrbGlzdCBJdGVtJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICgodHlwZW9mIGZvcm1SZWZlcmVuY2UpID09PSAnc3RyaW5nJyk6XG4gICAgICAgICAgICAgICAgX3NldEZvcm1SZWZlcmVuY2VzKGZvcm1SZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2N1cnJlbnRGb3JtVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZW5kZXJQcm9qZWN0Rm9ybSgnQ3JlYXRlIE5ldyBQcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVuZGVyVGFza0Zvcm0oJ0NyZWF0ZSBOZXcgVGFzaycpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgX3Nob3dGb3JtKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9vcGVuTW9kaWZ5SW5zdGFuY2VRdWVyeShldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0SXRlbVJlZmVyZW5jZXM7XG5cbiAgICAgICAgbGV0IGlzQ2hlY2tib3g7XG4gICAgICAgIHN3aXRjaCh0cnVlKSAge1xuICAgICAgICAgICAgY2FzZSAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKSA9PT0gbnVsbCk6XG4gICAgICAgICAgICAgICAgaXNDaGVja2JveCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKSAhPT0gbnVsbCk6XG4gICAgICAgICAgICAgICAgaXNDaGVja2JveCA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoIChpc0NoZWNrYm94KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIHRhcmdldEl0ZW1SZWZlcmVuY2VzID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQuc3BsaXQoJ18nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICBsZXQgZm9ybVR5cGVSZWZlcmVuY2UgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hSZWZlcmVuY2UgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnbGkuY2FyZCcpLmlkLnNwbGl0KCdfXycpWzFdLnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICAgICAgdGFyZ2V0SXRlbVJlZmVyZW5jZXMgPSBbZm9ybVR5cGVSZWZlcmVuY2UsIFt0YXNrUmVmZXJlbmNlLCBjaGVja2JveFJlZmVyZW5jZV1dOyAvLyAqIHRhc2tSZWZlcmVuY2UgJiBjaGVja2JveFJlZmVyZW5jZSBtdXN0IGJlIGJ1bmRsZWQsIHNwbGl0IGluIGxpYnJhcnkuanNcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnb3Blbk1vZGlmeUluc3RhbmNlUXVlcnknLCB0YXJnZXRJdGVtUmVmZXJlbmNlcyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX29wZW5Nb2RpZnlGb3JtKGl0ZW1WYWx1ZXMpIHtcbiAgICAgICAgX3NldEZvcm1SZWZlcmVuY2VzKGl0ZW1WYWx1ZXNbMF0pO1xuICAgICAgICBfZmlsbEZvcm1WYWx1ZXMoaXRlbVZhbHVlcyk7XG4gICAgICAgIF9zaG93Rm9ybSgpO1xuICAgIH1cblxuICAgIC8vIGZvcm0gYWN0aW9uc1xuICAgIGZ1bmN0aW9uIF9jb25maXJtSW5wdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9jdXJyZW50Rm9ybVR5cGUpO1xuICAgICAgICBzd2l0Y2ggKF9jdXJyZW50Rm9ybVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZS1jb25maXJtJzpcbiAgICAgICAgICAgICAgICBfaGlkZUZvcm0oKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdENhcmRJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5wcm9qZWN0LmNhcmQnKS5pZDtcbiAgICAgICAgICAgICAgICBfY2xlYXJGb3JtVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NvbmZpcm1EZWxldGVQcm9qZWN0JywgcHJvamVjdENhcmRJRCk7ICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rhc2sgb3IgcHJvamVjdCcpXG4gICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQgPSBfdmFsaWRhdGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2hpZGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybVZhbHVlcyA9IF9idW5kbGVGb3JtVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZmluZEVycm9ycygnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsZWFyRm9ybVZhbHVlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NvbmZpcm1JbnB1dCcsIGZvcm1WYWx1ZXMpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2ZpbmRFcnJvcnMoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY2FuY2VsSW5wdXQoKSB7XG4gICAgICAgIF9oaWRlRm9ybSgpO1xuICAgICAgICBfY2xlYXJGb3JtVmFsdWVzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zaG93RGVsZXRlUHJvamVjdENvbmZpcm1hdGlvbigpIHtcbiAgICAgICAgX3NldEZvcm1SZWZlcmVuY2VzKCdkZWxldGUtY29uZmlybScpO1xuICAgICAgICBfcmVuZGVyRGVsZXRlQ29uZmlybWF0aW9uRm9ybSgpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICAvLyBoZWxwZXIgbWV0aG9kcyAgXG4gICAgZnVuY3Rpb24gX3NldEZvcm1SZWZlcmVuY2VzKGZvcm1SZWZlcmVuY2UpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmlkID0gJ3Byb2plY3QtZm9ybSdcbiAgICAgICAgICAgICAgICBfY3VycmVudEZvcm1UeXBlID0gJ3Byb2plY3QnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9ICd0YXNrLWZvcm0nXG4gICAgICAgICAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICd0YXNrJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmlkID0gJ2NoZWNrYm94LWZvcm0nXG4gICAgICAgICAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUtY29uZmlybSc6XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5pZCA9ICdkZWxldGUtY29uZmlybSc7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICdkZWxldGUtY29uZmlybSc7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RbMV0pO1xuXG4gICAgICAgIGlmIChwcm9qZWN0LmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF9jdXJyZW50UHJvamVjdCA9IHByb2plY3QuaWQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zaG93Rm9ybSgpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9oaWRlRm9ybSgpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9maWxsRm9ybVZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgc3dpdGNoIChfY3VycmVudEZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBfcmVuZGVyUHJvamVjdEZvcm0oJ0VkaXQgUHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZvcm1JbnB1dHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbaV0udmFsdWUgPSB2YWx1ZXNbaSArIDFdO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICBfcmVuZGVyVGFza0Zvcm0oJ0VkaXQgVGFzaycpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKHZhbHVlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0c1tpIC0gMV0udmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZXNbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2luZ2xldG9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbMV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbMl0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0c1tpXS52YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF9kaXNhYmxlVGFza1R5cGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgaW5zdGFuY2VSZWZlcmVuY2VzID0gYCR7dmFsdWVzWzFdfV8ke3ZhbHVlc1syXX1gOyAgIC8vICogcGFzc2VkIHRvIGxpYnJhcnkgZm9yIGluZGV4aW5nIGNvcnJlY3QgdGFzayAmJiBjaGVja2xpc3QgaXRlbVxuICAgICAgICAgICAgICAgIF9yZW5kZXJDaGVja2JveEZvcm0oaW5zdGFuY2VSZWZlcmVuY2VzLCAnRWRpdCBDaGVja2xpc3QgSXRlbScpO1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbMV0udmFsdWUgPSB2YWx1ZXNbM107XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9idW5kbGVGb3JtVmFsdWVzKCkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKF9jdXJyZW50Rm9ybVR5cGUpO1xuICAgICAgICBsZXQgZm9ybVZhbHVlcyA9IFtdO1xuXG4gICAgICAgIHN3aXRjaCAoX2N1cnJlbnRGb3JtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZm9ybUlucHV0cy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKGZvcm1JbnB1dHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goJ3Rhc2snKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmb3JtSW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCAoKGkgPiAyKSAmJiAoaSA8IDgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKGZvcm1JbnB1dHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMSB8fCBpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUlucHV0c1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKGZvcm1JbnB1dHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaCgnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1swXS52YWx1ZS5zcGxpdCgnXycpWzBdKTtcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1swXS52YWx1ZS5zcGxpdCgnXycpWzFdKTtcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1sxXS52YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jbGVhckZvcm1WYWx1ZXMoKSB7XG4gICAgICAgIF9yZW1vdmVGb3JtRWxlbWVudHMoKTtcbiAgICAgICAgaWYgKF9jdXJyZW50Rm9ybVR5cGUgIT09ICdkZWxldGUtY29uZmlybScpIHtcbiAgICAgICAgICAgIGlmIChmb3JtSW5wdXRzWzBdLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3JtSW5wdXRzWzBdLnZhbHVlID0gJyc7XG4gICAgICAgIH07XG4gICAgICAgIGZvcm1JbnB1dHMgPSAnJztcbiAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICcnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVtb3ZlRm9ybUVsZW1lbnRzKCkge1xuICAgICAgICBsZXQgZmllbGRzZXRDaGlsZHJlbkxlbmd0aCA9IGZvcm1GaWVsZHNldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZpZWxkc2V0Q2hpbGRyZW5MZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIHdoaWxlIChmb3JtRmllbGRzZXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGZvcm1GaWVsZHNldC5yZW1vdmVDaGlsZChmb3JtRmllbGRzZXQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kaXNhYmxlVGFza1R5cGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIGZvcm1JbnB1dHNbMV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBmb3JtSW5wdXRzWzJdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3ZhbGlkYXRlRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignZm9ybScpLmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2ZpbmRFcnJvcnMocHJvY2Vzcykge1xuICAgICAgICBsZXQgdGl0bGVJbnB1dDtcbiAgICAgICAgZm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5pZC5zcGxpdCgnLScpWzFdID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3dpdGNoIChwcm9jZXNzKSB7XG4gICAgICAgICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgICAgICAgICBfc2hvd0Vycm9yTWVzc2FnZSh0aXRsZUlucHV0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgIF9oaWRlRXJyb3JNZXNzYWdlKHRpdGxlSW5wdXQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2hvd0Vycm9yTWVzc2FnZShpbnB1dCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsYWJlbC5sYXN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfaGlkZUVycm9yTWVzc2FnZShpbnB1dCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsYWJlbC5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cblxuICAgIC8vIGZvcm0gZmFjdG9yaWVzXG4gICAgY29uc3QgX3JlbmRlclByb2plY3RGb3JtID0gZnVuY3Rpb24oZm9ybVRpdGxlKSB7XG4gICAgICAgIGxldCBmaWVsZHNldExlZ2VuZCA9IGxlZ2VuZChmb3JtVGl0bGUsICcnKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IHNwYW5SZXF1aXJlZEJhZGdlID0gc3BhbignKicsICcucmVxdWlyZWQtYmFkZ2UnKTtcbiAgICAgICAgbGV0IHNwYW5FcnJvck1lc3NhZ2UgPSBzcGFuKCdwbGVhc2UgaW5jbHVkZSBhIHRpdGxlJywgJy5lcnJvci1tZXNzYWdlJywgJy5oaWRlJyk7XG4gICAgICAgIGxldCBsYWJlbFRpdGxlID0gbGFiZWwoJ1RpdGxlICcsICdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGxhYmVsVGl0bGUuYXBwZW5kKHNwYW5SZXF1aXJlZEJhZGdlLCBzcGFuRXJyb3JNZXNzYWdlKTtcbiAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBpbnB1dCgndGV4dCcsICdwcm9qZWN0LXRpdGxlJywgJ3RpdGxlJywgJ3Byb2plY3QtdGl0bGUnLCAnJyk7XG4gICAgICAgIGlucHV0VGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBpbnB1dFRpdGxlLmFyaWFSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZChsYWJlbFRpdGxlLCBpbnB1dFRpdGxlKTtcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IGxhYmVsRGVzY3JpcHRpb24gPSBsYWJlbCgnRGVzY3JpcHRpb24nLCAnLnByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBpbnB1dCgndGV4dCcsICdwcm9qZWN0LWRlc2NyaXB0aW9uJywgJ2Rlc2NyaXB0aW9uJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZChsYWJlbERlc2NyaXB0aW9uLCBpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGZpZWxkc2V0TGVnZW5kLCB0aXRsZURpdiwgZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgICAgIGZvcm1JbnB1dHMgPSBmb3JtQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJUYXNrRm9ybSA9IGZ1bmN0aW9uKGZvcm1UaXRsZSkgeyAgICAgICAgXG4gICAgICAgIGxldCBmaWVsZHNldExlZ2VuZCA9IGxlZ2VuZChmb3JtVGl0bGUsICcnKTtcblxuICAgICAgICBsZXQgdHlwZURpdiA9IGRpdignJywgJy5pbnB1dC1sYWJlbC1ncm91cCcpO1xuICAgICAgICBsZXQgbGFiZWxUYXNrVHlwZSA9IGxhYmVsKCdUYXNrIFR5cGUnLCAnJyk7XG4gICAgICAgIGxldCBkaXZUeXBlT3B0aW9ucyA9IGRpdignJywgJy50eXBlLW9wdGlvbnMnKTtcbiAgICAgICAgbGV0IHJhZGlvU2luZ2xldG9uID0gaW5wdXQoJ3JhZGlvJywgJ3R5cGUnLCAnJywgJ3NpbmdsZXRvbicsICcuaW5wdXQnLCk7XG4gICAgICAgIHJhZGlvU2luZ2xldG9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBsZXQgbGFiZWxTaW5nbGV0b24gPSBsYWJlbCgnU2luZ2xlIFRhc2snLCAnc2luZ2xldG9uJywgJycpO1xuICAgICAgICBsZXQgcmFkaW9DaGVja2xpc3QgPSBpbnB1dCgncmFkaW8nLCAndHlwZScsICcnLCAnY2hlY2tsaXN0JywgJy5pbnB1dCcpO1xuICAgICAgICBsZXQgbGFiZWxDaGVja2xpc3QgPSBsYWJlbCgnVGFzayBMaXN0JywgJ2NoZWNrbGlzdCcsICcnKTtcbiAgICAgICAgZGl2VHlwZU9wdGlvbnMuYXBwZW5kKHJhZGlvU2luZ2xldG9uLCBsYWJlbFNpbmdsZXRvbiwgcmFkaW9DaGVja2xpc3QsIGxhYmVsQ2hlY2tsaXN0KTtcbiAgICAgICAgdHlwZURpdi5hcHBlbmQobGFiZWxUYXNrVHlwZSwgZGl2VHlwZU9wdGlvbnMpO1xuXG4gICAgICAgIGxldCB0aXRsZURpdiA9IGRpdignJywgJy5pbnB1dC1sYWJlbC1ncm91cCcpO1xuICAgICAgICBsZXQgc3BhblJlcXVpcmVkQmFkZ2UgPSBzcGFuKCcqJywgJy5yZXF1aXJlZC1iYWRnZScpO1xuICAgICAgICBsZXQgc3BhbkVycm9yTWVzc2FnZSA9IHNwYW4oJ3BsZWFzZSBpbmNsdWRlIGEgdGl0bGUnLCAnLmVycm9yLW1lc3NhZ2UnLCAnLmhpZGUnKTtcbiAgICAgICAgbGV0IGxhYmVsVGl0bGUgPSBsYWJlbCgnVGl0bGUgJywgJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgbGFiZWxUaXRsZS5hcHBlbmQoc3BhblJlcXVpcmVkQmFkZ2UsIHNwYW5FcnJvck1lc3NhZ2UpO1xuICAgICAgICBsZXQgaW5wdXRUaXRsZSA9IGlucHV0KCd0ZXh0JywgJ3Rhc2stdGl0bGUnLCAndGl0bGUnLCAndGFzay10aXRsZScsICcuaW5wdXQnKTtcbiAgICAgICAgaW5wdXRUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGlucHV0VGl0bGUuYXJpYVJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgdGl0bGVEaXYuYXBwZW5kKGxhYmVsVGl0bGUsIGlucHV0VGl0bGUpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRpdignJywgJy5pbnB1dC1sYWJlbC1ncm91cCcpO1xuICAgICAgICBsZXQgbGFiZWxEZXNjcmlwdGlvbiA9IGxhYmVsKCdUYXNrIERlc2NyaXB0aW9uJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gaW5wdXQoJ3RleHQnLCAnZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nLCAndGFzay1kZXNjcmlwdGlvbicsICcuaW5wdXQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGxhYmVsRGVzY3JpcHRpb24sIGlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxldCBkdWVEYXRlRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBsYWJlbER1ZURhdGUgPSBsYWJlbCgnRHVlIERhdGUnLCAnZHVlLWRhdGUnKTtcbiAgICAgICAgbGV0IGlucHV0RHVlRGF0ZSA9IGlucHV0KCdkYXRlJywgJ2R1ZS1kYXRlJywgJycsICdkdWUtZGF0ZScsICcuaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZURpdi5hcHBlbmQobGFiZWxEdWVEYXRlLCBpbnB1dER1ZURhdGUpO1xuXG4gICAgICAgIGxldCBkaXZEcm9wZG93bnMgPSBkaXYoJycsICcuZHJvcGRvd25zJyk7XG4gICAgICAgIGxldCBkaXZQcmlvcml0eSA9IGRpdignJywgJy5pbnB1dC1sYWJlbC1ncm91cCcpO1xuICAgICAgICBsZXQgbGFiZWxQcmlvcml0eSA9IGxhYmVsKCdQcmlvcml0eScsICdwcmlvcml0eScsICcnKTtcbiAgICAgICAgbGV0IHNlbGVjdFByaW9yaXR5ID0gc2VsZWN0KCdwcmlvcml0eScsICcjcHJpb3JpdHknLCAnLmlucHV0Jyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudDtcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICdub25lICggKSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICdsb3cgKCEpJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gJ21lZGl1bSAoISEpJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gJ2hpZ2ggKCEhISknO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBvcHRpb25Qcmlvcml0eSA9IG9wdGlvbihpLCBjb250ZW50KTtcbiAgICAgICAgICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvblByaW9yaXR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRpdlByb2plY3QgPSBkaXYoJycsICcuaW5wdXQtbGFiZWwtZ3JvdXAnKTtcbiAgICAgICAgbGV0IGxhYmVsUHJvamVjdCA9IGxhYmVsKCdQcm9qZWN0JywgJ3Byb2plY3QnLCAnJyk7XG4gICAgICAgIGxldCBzZWxlY3RQcm9qZWN0ID0gc2VsZWN0KCdwcm9qZWN0JywgJyNwcm9qZWN0JywgJy5pbnB1dCcpO1xuICAgICAgICBkaXZQcmlvcml0eS5hcHBlbmQobGFiZWxQcmlvcml0eSwgc2VsZWN0UHJpb3JpdHkpO1xuICAgICAgICBkaXZQcm9qZWN0LmFwcGVuZChsYWJlbFByb2plY3QsIHNlbGVjdFByb2plY3QpO1xuICAgICAgICBkaXZEcm9wZG93bnMuYXBwZW5kKGRpdlByaW9yaXR5LCBkaXZQcm9qZWN0KTtcblxuICAgICAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGZpZWxkc2V0TGVnZW5kLCB0eXBlRGl2LCB0aXRsZURpdiwgZGVzY3JpcHRpb25EaXYsIGR1ZURhdGVEaXYsIGRpdkRyb3Bkb3ducylcbiAgICAgICAgLy8gZm9ybUZpZWxkc2V0LmFwcGVuZChmaWVsZHNldExlZ2VuZCwgbGFiZWxUYXNrVHlwZSwgZGl2VHlwZU9wdGlvbnMsIGxhYmVsVGl0bGUsIGlucHV0VGl0bGUsIGxhYmVsRGVzY3JpcHRpb24sIGlucHV0RGVzY3JpcHRpb24sIGxhYmVsRHVlRGF0ZSwgaW5wdXREdWVEYXRlLCBkaXZEcm9wZG93bnMpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0UmVmZXJlbmNlQ29udGFpbmVyID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBwcm9qZWN0UmVmZXJlbmNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5cbiAgICAgICAgZm9ybUlucHV0cyA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0Jyk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuUHJvamVjdE9wdGlvbnNRdWVyeScsICcnKTsgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdE9wdGlvbnMgPSBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBsZXQgcHJvamVjdERyb3Bkb3duID0gZm9ybUlucHV0c1s3XTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXJyYXkubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBhcnJheVtpXVswXTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SUQgPSBhcnJheVtpXVsxXTtcbiAgICAgICAgICAgIGxldCBvcHRpb25Qcm9qZWN0ID0gb3B0aW9uKHByb2plY3RJRCwgcHJvamVjdE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoX2N1cnJlbnRQcm9qZWN0ID09PSBwcm9qZWN0SUQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25Qcm9qZWN0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb2plY3REcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb25Qcm9qZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrYm94Rm9ybSA9IGZ1bmN0aW9uKHRhc2tSZWZlcmVuY2UsIGZvcm1UaXRsZSkge1xuICAgICAgICBsZXQgZmllbGRzZXRMZWdlbmQgPSBsZWdlbmQoZm9ybVRpdGxlLCAnJyk7XG5cbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gZGl2KCcnLCAnLmlucHV0LWxhYmVsLWdyb3VwJyk7XG4gICAgICAgIGxldCBzcGFuUmVxdWlyZWRCYWRnZSA9IHNwYW4oJyonLCAnLnJlcXVpcmVkLWJhZGdlJyk7XG4gICAgICAgIGxldCBzcGFuRXJyb3JNZXNzYWdlID0gc3BhbigncGxlYXNlIGluY2x1ZGUgYSB0aXRsZScsICcuZXJyb3ItbWVzc2FnZScsICcuaGlkZScpO1xuICAgICAgICBsZXQgbGFiZWxUaXRsZSA9IGxhYmVsKCdUaXRsZSAnLCAncHJvamVjdC10aXRsZScpO1xuICAgICAgICBsYWJlbFRpdGxlLmFwcGVuZChzcGFuUmVxdWlyZWRCYWRnZSwgc3BhbkVycm9yTWVzc2FnZSk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gaW5wdXQoJ3RleHQnLCAnY2hlY2tib3gtdGl0bGUnLCAndGl0bGUnLCAnY2hlY2tib3gtdGl0bGUnLCAnJyk7XG4gICAgICAgIGlucHV0VGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBpbnB1dFRpdGxlLmFyaWFSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZChsYWJlbFRpdGxlLCBpbnB1dFRpdGxlKTtcblxuICAgICAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGZpZWxkc2V0TGVnZW5kLCB0aXRsZURpdik7XG5cbiAgICAgICAgZm9ybUlucHV0cyA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgZm9ybUlucHV0c1swXS52YWx1ZSA9IHRhc2tSZWZlcmVuY2U7ICAgIC8vICogcGFzc2VkIHRvIGxpYnJhcnkuanMgZm9yIGluZGV4aW5nIGNvcnJlY3QgdGFza1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyRGVsZXRlQ29uZmlybWF0aW9uRm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZmllbGRzZXRMZWdlbmQgPSBsZWdlbmQoJ0RlbGV0ZSBUaGlzIFByb2plY3QnLCAnJyk7XG5cbiAgICAgICAgbGV0IHAxID0gcCgnRGVsZXRpbmcgYSBwcm9qZWN0IHdpbGwgYWxzbyBkZWxldGUgYWxsIG9mIGl0cyB0YXNrcy4nLCAnJyk7XG4gICAgICAgIGxldCBwMiA9IHAoJ0FyZSB5b3UgU1VSRSB5b3Ugd2FudCB0byBwcm9jZWVkPycsICcnKTtcbiAgICAgICAgXG4gICAgICAgIGZvcm1GaWVsZHNldC5hcHBlbmQoZmllbGRzZXRMZWdlbmQsIHAxLCBwMik7XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tDcmVhdGVJdGVtJywgX29wZW5DcmVhdGVGb3JtKTsgICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChjcmVhdGVUYXNrQnV0dG9uIGNsaWNrRXZlbnQsIF9yZW5kZXJDaGVja2xpc3RTdWJoZWFkZXIoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0NyZWF0ZVByb2plY3QnLCBfb3BlbkNyZWF0ZUZvcm0pOyAgICAvLyBwdWJsaXNoaW5nIGZyb20gc2lkZWJhci5qcyAoY3JlYXRlUHJvamVjdEJ1dHRvbiBjbGlja0V2ZW50KVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tNb2RpZnlJdGVtJywgX29wZW5Nb2RpZnlJbnN0YW5jZVF1ZXJ5KTsgIC8vIHB1Ymxpc2hpbmcgZnJvbSBkaXNwbGF5LmpzIChfcmVuZGVyLi4uSGVhZGVyKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xvc2VNb2RpZnlJbnN0YW5jZVF1ZXJ5JywgX29wZW5Nb2RpZnlGb3JtKTsgIC8vIHB1Ymxpc2hpbmcgZnJvbSBsaWJyYXJ5LmpzIChfcXVlcnlJdGVtSW5zdGFuY2UoKSk7XG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdwcm9qZWN0Q3JlYXRlZCcsIF9zZXRDdXJyZW50UHJvamVjdCk7IC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndXBkYXRlRGlzcGxheVZpZXcnLCBfc2V0Q3VycmVudFByb2plY3QpIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9idW5kbGVJbnN0YW5jZXMoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbG9zZVByb2plY3RPcHRpb25zUXVlcnknLCBfcmVuZGVyUHJvamVjdE9wdGlvbnMpOyAgLy8gcHVibGlzaGluZyBmcm9tIGxpYnJhcnkuanMgKF9xdWVyeVByb2plY3ROYW1lSUQoKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrRGVsZXRlUHJvamVjdCcsIF9zaG93RGVsZXRlUHJvamVjdENvbmZpcm1hdGlvbik7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKF9yZW5kZXJQcm9qZWN0SGVhZGVyKCkpXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtczsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cyc7XG5cbi8vICYgJ2JhY2tlbmQnIG1hbmFnZXIgbW9kdWxlIGNvbnRhaW5pbmcgcHJvamVjdC90YXNrIHN0YXRlcywgY2xhc3NlcywgJiBtZXRob2RzXG5cbmNvbnN0IGxpYnJhcnkgPSAoKCkgPT4ge1xuICAgIC8vIGR5bmFtaWMgZGF0YVxuICAgIGxldCBfcHJvamVjdExpYnJhcnkgPSBbXTtcbiAgICBsZXQgX3Rhc2tMaWJyYXJ5ID0gW107XG4gICAgbGV0IF90YXNrQ291bnRlciA9IDA7XG4gICAgbGV0IF9wcm9qZWN0Q291bnRlciA9IDA7XG5cbiAgICAvLyBmYWN0b3JpZXNcbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0SUQsIHByb2plY3RUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAncHJvamVjdCc7XG4gICAgICAgICAgICB0aGlzLmlkID0gcHJvamVjdElEO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXR0ZXJzXG4gICAgICAgIHNldCBzZXRUaXRsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBUYXNrIHtcbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICBjb25zdHJ1Y3Rvcih0YXNrSUQsIHByb2plY3RJRCwgdGFza1R5cGUsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHksIHRhc2tJdGVtcykge1xuICAgICAgICAgICAgbGV0IGl0ZW1Db3VudCA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuaWQgPSB0YXNrSUQ7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHRhc2tUeXBlO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRhc2tUaXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSB0YXNrRHVlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjaGVja2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrSXRlbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXNrSXRlbXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUJ1bmRsZSA9IFtpdGVtQ291bnQsIHRhc2tJdGVtc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbUJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldHRlcnNcbiAgICAgICAgc2V0IHNldFRpdGxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0RHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuZHVlRGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0UHJpb3JpdHkodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0UHJvamVjdElEKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5wcm9qZWN0SUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RJRCA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0Q2hlY2tib3hJdGVtKHZhbHVlQXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHZhbHVlQXJyYXlbMF07XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHZhbHVlQXJyYXlbMV07XG4gICAgICAgICAgICBpZiAoY29udGVudCAhPT0gdGhpcy5pdGVtc1tpbmRleF1bMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XVsxXSA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0dGVyXG4gICAgZnVuY3Rpb24gX3NldEluc3RhbmNlVmFsdWVzKHZhbHVlcykge1xuICAgICAgICBsZXQgbGlicmFyeVJlZmVyZW5jZSA9IHZhbHVlc1swXTtcbiAgICAgICAgbGV0IGluc3RhbmNlUmVmZXJlbmNlID0gdmFsdWVzWzFdO1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKDAsIDIpOyAgICAvLyBbdGl0bGUsIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBbdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCAncHJpb3JpdHknLCAncHJvamVjdElEJywgW3RhZ3NdXVxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGxpYnJhcnlSZWZlcmVuY2UpO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGluc3RhbmNlUmVmZXJlbmNlKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG5cbiAgICAgICAgc3dpdGNoIChsaWJyYXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluc3RhbmNlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlUHJvamVjdCh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfbW9kaWZ5UHJvamVjdChpbnN0YW5jZVJlZmVyZW5jZSwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElEICAgICAgICAgICAgdHlwZSAgICAgICB0aXRsZSAgICBkZXNjcmlwdGlvbiAgZHVlRGF0ZSAgICBwcmlvcml0eSAgICAgICAgICAgICBpdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1WYWx1ZXNSZW9yZGVyZWQgPSBbcGFyc2VJbnQodmFsdWVzWzVdKSwgdmFsdWVzWzBdLCB2YWx1ZXNbMV0sIHZhbHVlc1syXSwgdmFsdWVzWzNdLCBwYXJzZUludCh2YWx1ZXNbNF0pLCB2YWx1ZXNbNl1dXG4gICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGFzayhmb3JtVmFsdWVzUmVvcmRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX21vZGlmeVRhc2soaW5zdGFuY2VSZWZlcmVuY2UsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbVJlZmVyZW5jZSA9IHZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbUNvbnRlbnQgPSB2YWx1ZXNbMV07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IGluc3RhbmNlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tJRCA9IHZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrSW5zdGFuY2UgPSBfdGFza0xpYnJhcnlbdF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hlY2tJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlQ2hlY2tib3godGFza0luc3RhbmNlLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbW9kaWZ5Q2hlY2tib3godGFza0luc3RhbmNlLCBjaGVja2xpc3RJdGVtUmVmZXJlbmNlLCBjaGVja2xpc3RJdGVtQ29udGVudCk7IC8vIGZvcm1WYWx1ZXNbMF0gbmVlZGVkIHRvIHBhc3Mgc2luZ2xlIHZhbHVlIGZyb20gZm9ybVZhbHVlc1tdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyc1xuICAgIGZ1bmN0aW9uIF9xdWVyeUl0ZW1JbnN0YW5jZShpdGVtUmVmZXJlbmNlcykge1xuICAgICAgICBsZXQgbGlicmFyeVJlZmVyZW5jZSA9IGl0ZW1SZWZlcmVuY2VzWzBdO1xuICAgICAgICBsZXQgaW5zdGFuY2VSZWZlcmVuY2UgPSBpdGVtUmVmZXJlbmNlc1sxXTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhsaWJyYXJ5UmVmZXJlbmNlKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhpbnN0YW5jZVJlZmVyZW5jZSk7XG5cbiAgICAgICAgbGV0IGl0ZW1WYWx1ZUFycmF5O1xuICAgICAgICBzd2l0Y2ggKGxpYnJhcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgKF9wcm9qZWN0TGlicmFyeS5sZW5ndGgpOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBfcHJvamVjdExpYnJhcnlbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWVBcnJheSA9IFsncHJvamVjdCcsIGl0ZW0uaWQsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb25dO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gaW5zdGFuY2VSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gX3Rhc2tMaWJyYXJ5W3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlQXJyYXkgPSBbJ3Rhc2snLCBpdGVtLmlkLCBpdGVtLnR5cGUsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uZHVlRGF0ZSwgaXRlbS5wcmlvcml0eSwgaXRlbS5wcm9qZWN0SURdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBpbnN0YW5jZVJlZmVyZW5jZVswXTsgICAgICAgLy8gKiB1bmJ1bmRsZWQgZnJvbSBkb21EaXNwbGF5LmpzIChfb3Blbk1vZGlmeUZvcm1RdWVyeSgpKVxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveFJlZmVyZW5jZSA9IGluc3RhbmNlUmVmZXJlbmNlWzFdOyAgIC8vICogdW5idW5kbGVkIGZyb20gZG9tRGlzcGxheS5qcyAoX29wZW5Nb2RpZnlGb3JtUXVlcnkoKSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gdGFza1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zID0gX3Rhc2tMaWJyYXJ5W3RdLml0ZW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoY2hlY2tsaXN0SXRlbXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrbGlzdEl0ZW1zW2ldWzBdID09IGNoZWNrYm94UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1WYWx1ZUFycmF5ID0gWydjaGVja2JveCcsIHRhc2tSZWZlcmVuY2UsIGNoZWNrbGlzdEl0ZW1zW2ldWzBdLCBjaGVja2xpc3RJdGVtc1tpXVsxXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGl0ZW1WYWx1ZUFycmF5KTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Nsb3NlTW9kaWZ5SW5zdGFuY2VRdWVyeScsIGl0ZW1WYWx1ZUFycmF5KTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9xdWVyeVByb2plY3ROYW1lc0lEcygpIHtcbiAgICAgICAgbGV0IG5hbWVJREFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgKF9wcm9qZWN0TGlicmFyeS5sZW5ndGgpOyBwKyspIHtcbiAgICAgICAgICAgIG5hbWVJREFycmF5LnB1c2goW19wcm9qZWN0TGlicmFyeVtwXS50aXRsZSwgX3Byb2plY3RMaWJyYXJ5W3BdLmlkXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Nsb3NlUHJvamVjdE9wdGlvbnNRdWVyeScsIG5hbWVJREFycmF5KSAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9idW5kbGVJbnN0YW5jZXModmlld1ByZWZlcmVuY2UsIHF1ZXJ5UmVmZXJlbmNlKSB7IC8vICEgcmVkdWNlIHJlcGV0aXRpb24gdnZ2XG4gICAgICAgIGxldCBpbnN0YW5jZUJ1bmRsZSA9IFtdO1xuXG4gICAgICAgIGxldCBxdWVyeVByb2plY3RzID0gZmFsc2U7XG4gICAgICAgIGxldCBxdWVyeVRhc2tzID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHZpZXdQcmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBjYXNlICdBbGwnOlxuICAgICAgICAgICAgICAgIHF1ZXJ5VGFza3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVG9kYXknOlxuICAgICAgICAgICAgICAgIHF1ZXJ5VGFza3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVXBjb21pbmcnOlxuICAgICAgICAgICAgICAgIHF1ZXJ5VGFza3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQW55dGltZSc6XG4gICAgICAgICAgICAgICAgcXVlcnlUYXNrcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBxdWVyeVByb2plY3RzID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBxdWVyeVByb2plY3RzOiAke3F1ZXJ5UHJvamVjdHN9YCk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYHF1ZXJ5VGFza3M6ICR7cXVlcnlUYXNrc31gKTtcblxuICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKHZpZXdQcmVmZXJlbmNlKTtcbiAgICAgICAgaWYgKHF1ZXJ5UHJvamVjdHMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgKF9wcm9qZWN0TGlicmFyeS5sZW5ndGgpOyBwKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Byb2plY3RMaWJyYXJ5W3BdLmlkID09IHF1ZXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2goX3Byb2plY3RMaWJyYXJ5W3BdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLnByb2plY3RJRCA9PSBxdWVyeVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKF90YXNrTGlicmFyeVt0XSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAocXVlcnlUYXNrcyA9PT0gdHJ1ZSkgeyAgIC8vICEgcmVkdWNlIHJlcGV0aXRpb25cbiAgICAgICAgICAgIHN3aXRjaCAodmlld1ByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBbGwnOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKF90YXNrTGlicmFyeVt0XSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1RvZGF5JzpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5kdWVEYXRlID09PSBxdWVyeVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1VwY29taW5nJzpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChxdWVyeVJlZmVyZW5jZS5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5kdWVEYXRlID09PSBxdWVyeVJlZmVyZW5jZVtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBbnl0aW1lJzpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5kdWVEYXRlID09PSBxdWVyeVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpbnN0YW5jZUJ1bmRsZSk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCd1cGRhdGVEaXNwbGF5VmlldycsIGluc3RhbmNlQnVuZGxlKTsgICAgLy8gc3Vic2NyaWJlZCBieSBkaXNwbGF5LmpzLCBmb3Jtcy5qc1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBtZXRob2RzXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVByb2plY3QoYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgbGV0IF9pZCA9IF9wcm9qZWN0Q291bnRlcjtcbiAgICAgICAgbGV0IF9uZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoX2lkLCAuLi5hdHRyaWJ1dGVBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgcHJvamVjdDonKVxuICAgICAgICBjb25zb2xlLmxvZyhfbmV3UHJvamVjdCk7XG4gICAgICAgIF9wcm9qZWN0TGlicmFyeS5wdXNoKF9uZXdQcm9qZWN0KTtcbiAgICAgICAgX3Byb2plY3RDb3VudGVyKys7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Byb2plY3RDcmVhdGVkJywgX25ld1Byb2plY3QpOyAgLy8gc3Vic2NyaWJlZCBieSBkaXNwbGF5LmpzLCBzaWRlYmFyLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVUYXNrKGF0dHJpYnV0ZUFycmF5KSB7XG4gICAgICAgIGxldCBfaWQgPSBfdGFza0NvdW50ZXI7XG4gICAgICAgIGxldCBfbmV3VGFzayA9IG5ldyBUYXNrKF9pZCwgLi4uYXR0cmlidXRlQXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3IHRhc2s6JylcbiAgICAgICAgY29uc29sZS5sb2coX25ld1Rhc2spO1xuICAgICAgICBfdGFza0xpYnJhcnkucHVzaChfbmV3VGFzayk7XG4gICAgICAgIF90YXNrQ291bnRlcisrO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCd0YXNrQ3JlYXRlZCcsIF9uZXdUYXNrKTsgICAgLy8gc3Vic2NyaWJlZCBieSBkaXNwbGF5RE9NLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVDaGVja2JveCh0YXNrLCBpdGVtVmFsdWUpIHtcbiAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zTGVuZ3RoID0gdGFzay5pdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCBuZXdJdGVtSUQ7XG5cbiAgICAgICAgc3dpdGNoIChjaGVja2xpc3RJdGVtc0xlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG5ld0l0ZW1JRCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxldCBsYXN0SXRlbUlEID0gdGFzay5pdGVtc1tjaGVja2xpc3RJdGVtc0xlbmd0aCAtIDFdWzBdO1xuICAgICAgICAgICAgICAgIG5ld0l0ZW1JRCA9IGxhc3RJdGVtSUQgKyAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW1WYWx1ZVswXSA9IG5ld0l0ZW1JRDtcbiAgICAgICAgdGFzay5pdGVtcy5wdXNoKGl0ZW1WYWx1ZSk7XG4gICAgICAgIGxldCBfbmV3Q2hlY2tib3ggPSBbJ2NoZWNrYm94JywgdGFzay5pZCwgdGFzay5pdGVtc1tjaGVja2xpc3RJdGVtc0xlbmd0aF1bMF0sIHRhc2suaXRlbXNbY2hlY2tsaXN0SXRlbXNMZW5ndGhdWzFdXTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgY2hlY2tib3g6JylcbiAgICAgICAgY29uc29sZS5sb2codGFzay5pdGVtcyk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NoZWNrYm94Q3JlYXRlZCcsIF9uZXdDaGVja2JveCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIG1vZGlmeSBtZXRob2RzXG4gICAgZnVuY3Rpb24gX21vZGlmeVByb2plY3QodGFyZ2V0SXRlbUlELCBhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZUFycmF5KVxuICAgICAgICBsZXQgcHJvamVjdEluc3RhbmNlO1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IChfcHJvamVjdExpYnJhcnkubGVuZ3RoKTsgcCsrKSB7XG4gICAgICAgICAgICBpZiAoX3Byb2plY3RMaWJyYXJ5W3BdLmlkID09IHRhcmdldEl0ZW1JRCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RJbnN0YW5jZSA9IF9wcm9qZWN0TGlicmFyeVtwXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coJ29yaWdpbmFsIHByb2plY3QgaW5zdGFuY2U6JylcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5zdGFuY2UpO1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IChhdHRyaWJ1dGVBcnJheS5sZW5ndGgpOyBhKyspIHtcbiAgICAgICAgICAgIHN3aXRjaChhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2Uuc2V0VGl0bGUgPSBhdHRyaWJ1dGVBcnJheVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2Uuc2V0RGVzY3JpcHRpb24gPSBhdHRyaWJ1dGVBcnJheVsxXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RpZmllZCBwcm9qZWN0IGluc3RhbmNlOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbnN0YW5jZSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIHByb2plY3RJbnN0YW5jZSk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanMsIGRvbVNpZGViYXIuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX21vZGlmeVRhc2sodGFyZ2V0SXRlbUlELCBhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZUFycmF5KTtcbiAgICAgICAgbGV0IHRhc2tJbnN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2UgPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbCB0YXNrIGluc3RhbmNlOicpXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2codGFza0luc3RhbmNlKTtcbiAgICAgICAgZm9yIChsZXQgYSA9IDE7IGEgPCAoYXR0cmlidXRlQXJyYXkubGVuZ3RoKTsgYSsrKSB7XG4gICAgICAgICAgICAvLyBbdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCAncHJpb3JpdHknLCAncHJvamVjdElEJ11cbiAgICAgICAgICAgIHN3aXRjaChhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0VGl0bGUgPSBhdHRyaWJ1dGVBcnJheVsxXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2UuZGVzY3JpcHRpb24gPSBhdHRyaWJ1dGVBcnJheVsyXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0RHVlRGF0ZSA9IGF0dHJpYnV0ZUFycmF5WzNdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5zZXRQcmlvcml0eSA9IHBhcnNlSW50KGF0dHJpYnV0ZUFycmF5WzRdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0UHJvamVjdElEID0gcGFyc2VJbnQoYXR0cmlidXRlQXJyYXlbNV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ21vZGlmaWVkIHRhc2sgaW5zdGFuY2U6JylcbiAgICAgICAgY29uc29sZS5sb2codGFza0luc3RhbmNlKTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnaXRlbU1vZGlmaWVkJywgdGFza0luc3RhbmNlKTsgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qcywgZG9tU2lkZWJhci5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfbW9kaWZ5Q2hlY2tib3godGFza0luc3RhbmNlLCB0YXJnZXRJdGVtSUQsIHRhcmdldENvbnRlbnQpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyh0YXJnZXRJdGVtSUQsIHRhcmdldENvbnRlbnQpO1xuICAgICAgICBsZXQgY2hlY2tib3hJbnN0YW5jZTtcbiAgICAgICAgbGV0IHRhcmdldENoZWNrbGlzdEl0ZW1zID0gdGFza0luc3RhbmNlLml0ZW1zO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXJnZXRDaGVja2xpc3RJdGVtcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRDaGVja2xpc3RJdGVtc1tpXVswXSA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0VmFsdWVBcnJheSA9IFtpLCB0YXJnZXRDb250ZW50XTsgIC8vICogaSByZXByZXNlbnRzIGl0ZW0gaW5kZXhcbiAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0Q2hlY2tib3hJdGVtID0gdGFyZ2V0VmFsdWVBcnJheTtcbiAgICAgICAgICAgICAgICBjaGVja2JveEluc3RhbmNlID0gWydjaGVja2JveCcsIHRhc2tJbnN0YW5jZS5pZCwgdGFyZ2V0SXRlbUlELCB0YXJnZXRDb250ZW50XTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coJ29yaWdpbmFsIHRhc2sgKGNoZWNrYm94KSBpbnN0YW5jZTonKVxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RpZmllZCB0YXNrIChjaGVja2JveCkgaW5zdGFuY2U6JylcbiAgICAgICAgY29uc29sZS5sb2codGFza0luc3RhbmNlLml0ZW1zKTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnaXRlbU1vZGlmaWVkJywgY2hlY2tib3hJbnN0YW5jZSk7ICAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgfVxuXG4gICAgLy8gZGVsZXRlIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJvamVjdChjYXJkSUQpIHtcbiAgICAgICAgbGV0IGNhcmRSZWZlcmVuY2VzID0gY2FyZElELnNwbGl0KCdfJyk7XG4gICAgICAgIGxldCBwcm9qZWN0UmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMV07XG4gICAgICAgIGxldCBwcm9qZWN0TG9vcFN0YXJ0ID0gX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCAtIDE7XG5cbiAgICAgICAgZm9yIChsZXQgcCA9IHByb2plY3RMb29wU3RhcnQ7IHAgPiAtMTsgcC0tKSB7XG4gICAgICAgICAgICBpZiAoX3Byb2plY3RMaWJyYXJ5W3BdLmlkID09IHByb2plY3RSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBfcHJvamVjdExpYnJhcnkuc3BsaWNlKHAsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdGFza0xvb3BTdGFydCA9IF90YXNrTGlicmFyeS5sZW5ndGggLSAxO1xuICAgICAgICBmb3IgKGxldCB0ID0gdGFza0xvb3BTdGFydDsgdCA+IC0xOyB0LS0pIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0ucHJvamVjdElEID09IHByb2plY3RSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBfdGFza0xpYnJhcnkuc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3QgZGVsZXRlIHJlc3VsdHM6JylcbiAgICAgICAgY29uc29sZS5sb2coX3Byb2plY3RMaWJyYXJ5KTtcbiAgICAgICAgY29uc29sZS5sb2coX3Rhc2tMaWJyYXJ5KTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgncmVtb3ZlUHJvamVjdEZyb21TZWN0aW9uJywgY2FyZElEKTsgICAgLy8gc3Vic2NyaWJlZCBieSBkaXNwbGF5LmpzLCBzaWRlYmFyLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVUYXNrKGNhcmRJRCkge1xuICAgICAgICBsZXQgY2FyZFJlZmVyZW5jZXMgPSBjYXJkSUQuc3BsaXQoJ18nKTtcbiAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBjYXJkUmVmZXJlbmNlc1sxXTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Rhc2tMaWJyYXJ5LnNwbGljZSh0LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YXNrIGRlbGV0ZSByZXN1bHRzOicpXG4gICAgICAgIGNvbnNvbGUubG9nKF90YXNrTGlicmFyeSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZVRhc2tGcm9tRGlzcGxheScsIGNhcmRJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlQ2hlY2tsaXN0SXRlbShjaGVja0lEKSB7XG4gICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gY2hlY2tJRC5zcGxpdCgnX18nKVswXS5zcGxpdCgnXycpWzFdO1xuICAgICAgICBsZXQgY2hlY2tSZWZlcmVuY2UgPSBjaGVja0lELnNwbGl0KCdfXycpWzFdLnNwbGl0KCdfJylbMV07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gdGFza1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtc0FycmF5ID0gX3Rhc2tMaWJyYXJ5W3RdLml0ZW1zO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGNoZWNrbGlzdEl0ZW1zQXJyYXkubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2xpc3RJdGVtc0FycmF5W2ldWzBdID09IGNoZWNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJdGVtc0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2xpc3QgaXRlbSBkZWxldGUgcmVzdWx0czonKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0SXRlbXNBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZUNoZWNrbGlzdEl0ZW1Gcm9tRGlzcGxheScsIGNoZWNrSUQpOyAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnb3BlblZpZXdQcmVmZXJlbmNlUXVlcnknLCBfYnVuZGxlSW5zdGFuY2VzKSAvLyBwdWJsaXNoZWQgZnJvbSBzaWRlYmFyLmpzIChfY2hhbmdlVmlld1ByZWZlcmVuY2VrKCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdjb25maXJtSW5wdXQnLCBfc2V0SW5zdGFuY2VWYWx1ZXMpOyAvL3B1Ymxpc2hlZCBmcm9tIGRlZmF1bHQuanMgKGluaXQoKSksIGZvcm1zLmpzIChfY29uZmlybUlucHV0KCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdvcGVuTW9kaWZ5SW5zdGFuY2VRdWVyeScsIF9xdWVyeUl0ZW1JbnN0YW5jZSk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGZvcm1zLmpzIChfb3Blbk1vZGlmeVF1ZXJ5KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnb3BlblByb2plY3RPcHRpb25zUXVlcnknLCBfcXVlcnlQcm9qZWN0TmFtZXNJRHMpICAvLyBwdWJsaXNoZWQgZnJvbSBmb3Jtcy5qcyAoX3Nob3dGb3JtKCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdjb25maXJtRGVsZXRlUHJvamVjdCcsIF9kZWxldGVQcm9qZWN0KTsgICAgLy8gcHVibGlzaGVkIGZyb20gZm9ybXMuanMgKGNvbmZpcm1EZWxldGVCdXR0b24gZXZlbnRMaXN0ZW5lcilcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0RlbGV0ZVRhc2snLCBfZGVsZXRlVGFzayk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKF9yZW5kZXIuLi4odGFzaylIZWFkZXJzKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tEZWxldGVDaGVja2xpc3RJdGVtJywgX2RlbGV0ZUNoZWNrbGlzdEl0ZW0pICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChfcmVuZGVyQ2hlY2tib3hDb250cm9scygpKVxufSkoKTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGxpfSBmcm9tICcuL2VsZW1lbnRzJztcblxuLy8gJiBtYW5hZ2VzIHNpZGViYXIgc2VjdGlvbiBET00gPC0+IGxpYnJhcnkgY29tbXVuaWNhdGlvblxuLy8gJiBjb250YWlucyBmYWN0b3JpZXMgZm9yIGdlbmVyYXRpbmcgZGlzcGxheSBzZWN0aW9uIERPTSBlbGVtZW50cyAvIGdyb3VwaW5nc1xuXG5jb25zdCBzaWRlYmFyID0gKCgpID0+IHtcbiAgICAvLyBjYWNoZSBkb21cbiAgICBsZXQgdmlld1ByZWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcblxuICAgIGxldCB2aWV3QWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctYWxsJyk7XG4gICAgbGV0IHZpZXdUb2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LXRvZGF5Jyk7XG4gICAgbGV0IHZpZXdVcGNvbWluZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LXVwY29taW5nJyk7XG4gICAgbGV0IHZpZXdBbnl0aW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctYW55dGltZScpO1xuICAgIGxldCB2aWV3VW5zb3J0ZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1wcm9qZWN0XzAnKTtcbiAgICBsZXQgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWMtdmlld3MnKTtcbiAgICBsZXQgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi52aWV3LXByZWZzLWNvbnRhaW5lciBzcGFuLmNyZWF0ZScpO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gICAgLy8gPyBoaWRlIHNpZGViYXIgd2hlbiBub3QgZm9jdXNlZCA/XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHZpZXdQcmVmcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgfSk7XG4gICAgXG4gICAgdmlld0FsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdBbGwnLCAnJyk7XG4gICAgfSk7XG4gICAgdmlld1RvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ1RvZGF5JywgJycpO1xuICAgIH0pO1xuICAgIHZpZXdVcGNvbWluZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdVcGNvbWluZycsICcnKTtcbiAgICB9KTtcbiAgICB2aWV3QW55dGltZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdBbnl0aW1lJywgJycpO1xuICAgIH0pO1xuICAgIHZpZXdVbnNvcnRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdwcm9qZWN0Jywgdmlld1Vuc29ydGVkQnV0dG9uLmlkKTtcbiAgICB9KTtcbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tDcmVhdGVQcm9qZWN0JywgJ3Byb2plY3QnKTsgICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgIH0pO1xuXG4gICAgLy8gbWFuYWdlcnNcbiAgICBmdW5jdGlvbiBfY2hhbmdlVmlld1ByZWZlcmVuY2UocHJlZmVyZW5jZUtleXdvcmQsIHRhcmdldElEKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldElEKTtcbiAgICAgICAgbGV0IHF1ZXJ5UmVmZXJlbmNlO1xuXG4gICAgICAgIHN3aXRjaCAocHJlZmVyZW5jZUtleXdvcmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgICAgICBxdWVyeVJlZmVyZW5jZSA9IF9nZXRUb2RheURhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3VwY29taW5nJzpcbiAgICAgICAgICAgICAgICBxdWVyeVJlZmVyZW5jZSA9IF9nZXRVcGNvbWluZ0RhdGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGxldCBzcGxpdElEID0gdGFyZ2V0SUQuc3BsaXQoJ18nKTtcbiAgICAgICAgICAgICAgICBxdWVyeVJlZmVyZW5jZSA9IHNwbGl0SURbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHF1ZXJ5UmVmZXJlbmNlID0gJyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5WaWV3UHJlZmVyZW5jZVF1ZXJ5JywgcHJlZmVyZW5jZUtleXdvcmQsIHF1ZXJ5UmVmZXJlbmNlKTsgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuXG4gICAgLy8gZmFjdG9yaWVzXG4gICAgY29uc3QgX3JlbmRlclByb2plY3RMaW5rID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBpZiAocHJvamVjdC5pZCAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IGlkID0gcHJvamVjdC5pZDtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgIGxldCBsaUlEID0gYCN2aWV3LXByb2plY3RfJHtpZH1gO1xuICAgICAgICAgICAgbGV0IGxpUHJvamVjdExpbmsgPSBsaSh0aXRsZSwgbGlJRCk7XG5cbiAgICAgICAgICAgIGxpUHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsIGUudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobGlQcm9qZWN0TGluayk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gaGVscGVyc1xuICAgIGZ1bmN0aW9uIF9tb2RpZnlWaWV3UHJlZmVyZW5jZUxpbmsoaXRlbUluc3RhbmNlKSB7XG4gICAgICAgIGlmIChpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdmlldy1wcm9qZWN0XyR7aXRlbUluc3RhbmNlLmlkfWApO1xuICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBpdGVtSW5zdGFuY2UudGl0bGU7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9yZW1vdmVQcm9qZWN0TGluayhwcm9qZWN0Q2FyZElEKSB7XG4gICAgICAgIGxldCBsaW5rUmVmZXJlbmNlID0gcHJvamVjdENhcmRJRC5zcGxpdCgnXycpWzFdO1xuXG4gICAgICAgIGxldCBsaVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdmlldy1wcm9qZWN0XyR7bGlua1JlZmVyZW5jZX1gKTtcbiAgICAgICAgbGV0IHVsQ29udGFpbmVyID0gbGlQcm9qZWN0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgdWxDb250YWluZXIucmVtb3ZlQ2hpbGQobGlQcm9qZWN0KTtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgKHVsQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpOlxuICAgICAgICAgICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsIHVsQ29udGFpbmVyLmxhc3RDaGlsZC5pZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsICdwcm9qZWN0XzAnKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2dldFRvZGF5RGF0ZSgpIHsgIC8vICEgcmVkdWNlIHJlcGV0aXRpb24gdnZ2XG4gICAgICAgIGxldCByYXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHllYXIgPSByYXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBtb250aCA9IHJhd0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGxldCBkYXRlID0gcmF3RGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgICAgICAgIG1vbnRoID0gYDAke21vbnRofWA7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkYXRlIDwgMTApIHtcbiAgICAgICAgICAgIGRhdGUgPSBgMCR7ZGF0ZX1gO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWA7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZ2V0VXBjb21pbmdEYXRlKCkgeyAgIC8vICEgcmVkdWNlIHJlcGV0aXRpb24gXl5eXG4gICAgICAgIGxldCB2YWxpZERhdGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmF3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICByYXdEYXRlLnNldERhdGUocmF3RGF0ZS5nZXREYXRlKCkgKyBpKTtcbiAgICAgICAgICAgIGxldCB5ZWFyID0gcmF3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgbGV0IG1vbnRoID0gcmF3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIGxldCBkYXRlID0gcmF3RGF0ZS5nZXREYXRlKCk7XG4gICAgIFxuICAgICAgICAgICAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgbW9udGggPSBgMCR7bW9udGh9YDtcbiAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgIGlmIChkYXRlIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgZGF0ZSA9IGAwJHtkYXRlfWA7XG4gICAgICAgICAgICAgfTtcbiAgICAgXG4gICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YDtcbiAgICAgICAgICAgICB2YWxpZERhdGVzLnB1c2goZm9ybWF0dGVkRGF0ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkRGF0ZXM7XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuICAgIFxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RDcmVhdGVkJywgX3JlbmRlclByb2plY3RMaW5rKTsgLy8gcHVibGlzaGVkIGJ5IGxpYnJhcnkuanMgKF9jcmVhdGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnaXRlbU1vZGlmaWVkJywgX21vZGlmeVZpZXdQcmVmZXJlbmNlTGluayk7ICAgLy8gcHVibGlzaGVkIGJ5IGxpYnJhcnkuanMgKF9tb2RpZnkuLi4oKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVQcm9qZWN0RnJvbVNlY3Rpb24nLCBfcmVtb3ZlUHJvamVjdExpbmspOyAgIC8vIHB1Ymxpc2hlZCBieSBsaWJyYXJ5LmpzIChfZGVsZXRlUHJvamVjdCgpKTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NwYWNpbmcuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvdHlwby5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zaGFwaW5nLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbG9ycy5jc3MnO1xuXG5pbXBvcnQgZGVmYXVsdFN0YXRlIGZyb20gJy4vc2NyaXB0cy9kZWZhdWx0LmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vc2NyaXB0cy9kaXNwbGF5JztcbmltcG9ydCBmb3JtcyBmcm9tICcuL3NjcmlwdHMvZm9ybXMnO1xuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zY3JpcHRzL3NpZGViYXInO1xuaW1wb3J0IGxpYnJhcnkgZnJvbSAnLi9zY3JpcHRzL2xpYnJhcnknO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5cbi8vIGFjdGlvbnNcbmRlZmF1bHRTdGF0ZS5pbml0KCk7XG5ldmVudHMudmlld0V2ZW50cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==