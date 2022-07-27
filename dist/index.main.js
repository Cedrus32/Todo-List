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
___CSS_LOADER_EXPORT___.push([module.id, "header,\n#view-prefs,\n#display,\n.form-container {\n    border: 1px solid black;\n}\n\n#view-prefs,\n.form-container {\n    background-color: white;\n}\n\n.display-container {\n    border: 1px solid blue;\n}\n\n.card {\n    border: 1px solid orangered;\n}", "",{"version":3,"sources":["webpack://./src/styles/colors.css"],"names":[],"mappings":"AAAA;;;;IAII,uBAAuB;AAC3B;;AAEA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["header,\n#view-prefs,\n#display,\n.form-container {\n    border: 1px solid black;\n}\n\n#view-prefs,\n.form-container {\n    background-color: white;\n}\n\n.display-container {\n    border: 1px solid blue;\n}\n\n.card {\n    border: 1px solid orangered;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: 0.5em;\n\n    --small-pad: 0.25em;\n    --small-gap: 0.25em;\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #view-prefs,\n    #display {\n        padding: var(--main-pad);\n    }\n\n\n/* --- VIEW PREFS */\n/* --- VIEW PREFS */\n/* --- VIEW PREFS */\n\n#view-prefs {\n    position: absolute;\n    top: calc(calc(var(--main-pad) * 2) + 1.65em); left: 0em;\n}\n\n    #view-prefs ul {\n        display: flex;\n        flex-flow: column;\n        gap: var(--main-gap);\n    }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    \n    width: 80%;\n    max-width: 450px;\n}\n\nfieldset {\n    display: flex;\n    flex-flow: column;\n}\n\n    .dropdowns {\n        display: flex;\n    }\n\n        .dropdowns div {\n            display: flex;\n            flex-flow: column;\n\n            width: 50%;\n        }\n\n#project-buttons,\n#task-buttons {\n    display: flex;\n    justify-content: center;\n}\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--small-gap);\n\n                padding: 1em;\n            }\n\n                .header {\n                    display: flex;\n                    justify-content: flex-start;\n                    align-items: center;\n                    gap: var(--small-gap);\n\n                    width: 100%;\n                }\n\n                    .title {\n                        margin-right: auto;\n                    }\n                \n                .card,\n                .task-controls {\n                    padding: var(--med-pad);\n                }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--small-gap);\n                        }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--small-gap);\n                }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n", "",{"version":3,"sources":["webpack://./src/styles/layout.css"],"names":[],"mappings":"AAAA,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;IACI,eAAe;IACf,eAAe;;IAEf,gBAAgB;;IAEhB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;IAEI;QACI,YAAY;IAChB;;AAEJ;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;IAEI;;;QAGI,wBAAwB;IAC5B;;;AAGJ,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;;AAEnB;IACI,kBAAkB;IAClB,6CAA6C,EAAE,SAAS;AAC5D;;IAEI;QACI,aAAa;QACb,iBAAiB;QACjB,oBAAoB;IACxB;;AAEJ,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;IACI,kBAAkB;IAClB,QAAQ,EAAE,QAAQ;IAClB,gCAAgC;;IAEhC,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;IAEI;QACI,aAAa;IACjB;;QAEI;YACI,aAAa;YACb,iBAAiB;;YAEjB,UAAU;QACd;;AAER;;IAEI,aAAa;IACb,uBAAuB;AAC3B;;AAEA,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;IAEZ;QACI,aAAa;QACb,8BAA8B;QAC9B,4BAA4B;QAC5B;8CACsC;;QAEtC,eAAe;QACf,WAAW;IACf;;AAEJ,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;;QAEX;YACI,iBAAiB;;YAEjB,aAAa;YACb,uBAAuB;YACvB,mBAAmB;QACvB;;AAER,oBAAoB;AACpB,oBAAoB;AACpB,oBAAoB;;QAEZ;YACI,kBAAkB;QACtB;;YAEI;gBACI,aAAa;gBACb,iBAAiB;gBACjB,qBAAqB;;gBAErB,YAAY;YAChB;;gBAEI;oBACI,aAAa;oBACb,2BAA2B;oBAC3B,mBAAmB;oBACnB,qBAAqB;;oBAErB,WAAW;gBACf;;oBAEI;wBACI,kBAAkB;oBACtB;;gBAEJ;;oBAEI,uBAAuB;gBAC3B;;gBAEA;oBACI,aAAa;oBACb,2BAA2B;gBAC/B;;oBAEI;wBACI,kBAAkB;oBACtB;;gBAEJ;oBACI,aAAa;oBACb,uBAAuB;gBAC3B;;oBAEI;wBACI,8BAA8B;oBAClC;;oBAEA;wBACI,sCAAsC;oBAC1C;;oBAEA;wBACI,aAAa;wBACb,iBAAiB;wBACjB,qBAAqB;;wBAErB,WAAW;oBACf;;wBAEI;4BACI,aAAa;4BACb,qBAAqB;wBACzB;;gBAER;oBACI,aAAa;oBACb,iBAAiB;oBACjB,qBAAqB;gBACzB;;oBAEI;wBACI,aAAa;wBACb,mBAAmB;oBACvB;;wBAEI;4BACI,kBAAkB;wBACtB","sourcesContent":["/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: 0.5em;\n\n    --small-pad: 0.25em;\n    --small-gap: 0.25em;\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #view-prefs,\n    #display {\n        padding: var(--main-pad);\n    }\n\n\n/* --- VIEW PREFS */\n/* --- VIEW PREFS */\n/* --- VIEW PREFS */\n\n#view-prefs {\n    position: absolute;\n    top: calc(calc(var(--main-pad) * 2) + 1.65em); left: 0em;\n}\n\n    #view-prefs ul {\n        display: flex;\n        flex-flow: column;\n        gap: var(--main-gap);\n    }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    \n    width: 80%;\n    max-width: 450px;\n}\n\nfieldset {\n    display: flex;\n    flex-flow: column;\n}\n\n    .dropdowns {\n        display: flex;\n    }\n\n        .dropdowns div {\n            display: flex;\n            flex-flow: column;\n\n            width: 50%;\n        }\n\n#project-buttons,\n#task-buttons {\n    display: flex;\n    justify-content: center;\n}\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--small-gap);\n\n                padding: 1em;\n            }\n\n                .header {\n                    display: flex;\n                    justify-content: flex-start;\n                    align-items: center;\n                    gap: var(--small-gap);\n\n                    width: 100%;\n                }\n\n                    .title {\n                        margin-right: auto;\n                    }\n                \n                .card,\n                .task-controls {\n                    padding: var(--med-pad);\n                }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--small-gap);\n                        }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--small-gap);\n                }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0px; margin: 0px;\n\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    font-size: 100%;\n    font: inherit;\n\n    vertical-align: baseline;\n}\n\n\n/* SECTIONS ========================= */\n\n/* render `main` element consistently in IE */\n\nmain {\n    display: block;\n}\n\n/* correct font size on `h1` & 'h2' elements */\n/* within `section` and `article` contexts */\n/* in Chrome, Firefox, and Safari */\n\nh1 {\n    font-size: 1.5em;\n}\n\nh2 {\n    font-size: 1.25em;\n}\n\n/* standardize margins for `header` elements across broswers */\n\nh1, h2, h3, h4, h5, h6 {\n    margin: 0;\n}\n\n/* standardize margins for `p` elements across browsers */\n\np {\n    margin-top: 0;\n    margin-bottom: 1rem;\n}\n\n\n/* GROUPING CONTENT ========================= */\n\n/* 1. add correct box sizing in Firefox */\n/* 2. show overflow in Edge, IE */\n\nhr {\n    box-sizing: content-box; /* 1 */ /** conflict w/ `*-selector`? */\n    height: 0px; /* 1 */\n    overflow: visible; /* 2 */\n}\n\n/* 1. correct inheritance, scaling of font size in all browsers */\n/* 2. correct the off `em` font sizing in all browsers */\n\npre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n\n/* TEXT-LEVEL SEMANTICS ========================= */\n\n/* remove gray bg on active links in IE 10 */\n\na {\n    background-color: transparent;\n}\n\n/* 1. remove bottom border in Chrome 57- */\n/* 2. add correct text decoration in Chrome, Edge, IE, Opera, Safari */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/* add correct font weight in Chrome, Edge, Safari */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* 1. correct inheritance, scaling of font size in all browsers */\n/* 2. correct the odd em font sizing in all browsers */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/* add correct font size in all browsers */\n\nsmall {\n    font-size: 80%;\n}\n\n/* prevent all `sub` and `sup` elements from affecting line height */\n/* in all browsers */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n  \nsup {\n    top: -0.5em;\n}\n\n\n/* EMBEDDED CONTENT ========================= */\n\n/* remove border on images inside links in IE 10 */\n\nimg {\n    border-style: none;\n}\n\n/* clean up borders on tables */\n\ntable {\n    border-collapse: collapse;\n}\n\n/* FORMS ========================= */\n\n/* 1. change font styles in all browsers */\n/* 2. remove margin in Firefox and Safari */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/* show overflow in IE, Edge */\n\nbutton,\ninput {\n    overflow: visible;\n}\n\n/* remove inheritance of text transform in Edge, Firefox, IE */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/* correct the inability to style clickable types in iOS, Safari */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/* remove inner border, padding in Firefox */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/* restore focus styles unset by previous rule ^^ */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/* correct padding in Firefox */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n  \n/* 1. correct text wrapping in Edge, IE */\n/* 2. correct color inheritance from `fieldset` elements in IE */\n/* 3. remove padding so devs aren't caught out when they zero-out */\n/*    `fieldset`elements in all browsers */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/* add correct vertical alignment in Chrome, Firefox, Opera */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/* remove default vertical scrollbar in IE 10+ */\n\ntextarea {\n    overflow: auto;\n}\n\n/* 1. add correct box sizing in IE 10 */\n/* 2. remove padding in IE 10 */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/* correct cursor style of increment, decrement buttons in Chrome */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/* 1. correct off appearance in Chrome, Safari */\n/* 2. correct outline style in Safari */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n}\n\n/* remove inner padding in Chrome, Safari on macOS */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/* 1. change inability to style clickable types in iOS, Safari */\n/* 2. change font properties to `inherit` in Safari */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n}\n\n\n/* INTERACTIVE ========================= */\n\n/* add correct display in Edge, IE 10+, Firefox */\n\ndetails {\n    display: block;\n}\n\n/* add correct display in all browsers */\n\nsummary {\n    display: list-item;\n}\n\n\n/* MISC ========================= */\n\n/* add correct display in IE 10+ */\n\ntemplate {\n    display: none;\n}\n\n/* add correct display in IE 10 */\n\n[hidden] {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"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","sourcesContent":["/* GLOBAL ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0px; margin: 0px;\n\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    font-size: 100%;\n    font: inherit;\n\n    vertical-align: baseline;\n}\n\n\n/* SECTIONS ========================= */\n\n/* render `main` element consistently in IE */\n\nmain {\n    display: block;\n}\n\n/* correct font size on `h1` & 'h2' elements */\n/* within `section` and `article` contexts */\n/* in Chrome, Firefox, and Safari */\n\nh1 {\n    font-size: 1.5em;\n}\n\nh2 {\n    font-size: 1.25em;\n}\n\n/* standardize margins for `header` elements across broswers */\n\nh1, h2, h3, h4, h5, h6 {\n    margin: 0;\n}\n\n/* standardize margins for `p` elements across browsers */\n\np {\n    margin-top: 0;\n    margin-bottom: 1rem;\n}\n\n\n/* GROUPING CONTENT ========================= */\n\n/* 1. add correct box sizing in Firefox */\n/* 2. show overflow in Edge, IE */\n\nhr {\n    box-sizing: content-box; /* 1 */ /** conflict w/ `*-selector`? */\n    height: 0px; /* 1 */\n    overflow: visible; /* 2 */\n}\n\n/* 1. correct inheritance, scaling of font size in all browsers */\n/* 2. correct the off `em` font sizing in all browsers */\n\npre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n\n/* TEXT-LEVEL SEMANTICS ========================= */\n\n/* remove gray bg on active links in IE 10 */\n\na {\n    background-color: transparent;\n}\n\n/* 1. remove bottom border in Chrome 57- */\n/* 2. add correct text decoration in Chrome, Edge, IE, Opera, Safari */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/* add correct font weight in Chrome, Edge, Safari */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* 1. correct inheritance, scaling of font size in all browsers */\n/* 2. correct the odd em font sizing in all browsers */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/* add correct font size in all browsers */\n\nsmall {\n    font-size: 80%;\n}\n\n/* prevent all `sub` and `sup` elements from affecting line height */\n/* in all browsers */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n  \nsup {\n    top: -0.5em;\n}\n\n\n/* EMBEDDED CONTENT ========================= */\n\n/* remove border on images inside links in IE 10 */\n\nimg {\n    border-style: none;\n}\n\n/* clean up borders on tables */\n\ntable {\n    border-collapse: collapse;\n}\n\n/* FORMS ========================= */\n\n/* 1. change font styles in all browsers */\n/* 2. remove margin in Firefox and Safari */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/* show overflow in IE, Edge */\n\nbutton,\ninput {\n    overflow: visible;\n}\n\n/* remove inheritance of text transform in Edge, Firefox, IE */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/* correct the inability to style clickable types in iOS, Safari */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/* remove inner border, padding in Firefox */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/* restore focus styles unset by previous rule ^^ */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/* correct padding in Firefox */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n  \n/* 1. correct text wrapping in Edge, IE */\n/* 2. correct color inheritance from `fieldset` elements in IE */\n/* 3. remove padding so devs aren't caught out when they zero-out */\n/*    `fieldset`elements in all browsers */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/* add correct vertical alignment in Chrome, Firefox, Opera */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/* remove default vertical scrollbar in IE 10+ */\n\ntextarea {\n    overflow: auto;\n}\n\n/* 1. add correct box sizing in IE 10 */\n/* 2. remove padding in IE 10 */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/* correct cursor style of increment, decrement buttons in Chrome */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/* 1. correct off appearance in Chrome, Safari */\n/* 2. correct outline style in Safari */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n}\n\n/* remove inner padding in Chrome, Safari on macOS */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/* 1. change inability to style clickable types in iOS, Safari */\n/* 2. change font properties to `inherit` in Safari */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n}\n\n\n/* INTERACTIVE ========================= */\n\n/* add correct display in Edge, IE 10+, Firefox */\n\ndetails {\n    display: block;\n}\n\n/* add correct display in all browsers */\n\nsummary {\n    display: list-item;\n}\n\n\n/* MISC ========================= */\n\n/* add correct display in IE 10+ */\n\ntemplate {\n    display: none;\n}\n\n/* add correct display in IE 10 */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./src/styles/layout.css":
/*!*******************************!*\
  !*** ./src/styles/layout.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events.js */ "./src/events.js");


// * manages interface between display DOM & library arrays

const display = (() => {
    // data
    let _sampleProjectValues = [['Unsorted', "This is your tasks' default location. Any tasks without a project live here."],
                               ];
    let _sampleTaskValues = [[0, 'singleton', 'Task 1', 'this is a sample task', '2001-01-01', 3, '#tag'],
                             [0, 'singleton', 'Task 2', 'this is #2', '2002-02-02', 2, ''],
                             [0, 'checklist', 'Task 3', 'this is a checklist', '2003-03-03', 1, '#tig #tog', ['item 1', 'item 2', 'item 3']],
                            ];
    let _currentProject = 0;

    // managers
    function initDefault() {
        _publishCreateProjectEvent(_sampleProjectValues[0]);
        for (let t = 0; t < (_sampleTaskValues.length); t++) {
            _publishCreateTaskEvent(_sampleTaskValues[t]);
        };
    }

    // helpers
    function _publishCreateProjectEvent(projectValues) {
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('createProject', projectValues); // subscribed by library.js
    }
    function _publishCreateTaskEvent(taskValues) {
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('createTask', taskValues);   // subscribed by library.js
    }
    function _publishRenderDisplayEvents(object) {
        if (object.type === 'project') {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('renderProject', object);    // subscribed by domDisplay.js
        };
        if (object.type === 'singleton' || object.type === 'checklist') {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('renderTask', object);   // subscribed by domDisplay.js
        };
    }
    function _modifyDisplay() {
        // index into DOM for specific itemID, set new content
    }

    // bind events
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectCreated', _publishRenderDisplayEvents); // published from library.js (_createProject())
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('taskCreated', _publishRenderDisplayEvents);    // published from library.js (_createTask())

    return {
        initDefault,   // used by index.js
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/scripts/domDisplay.js":
/*!***********************************!*\
  !*** ./src/scripts/domDisplay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/scripts/elements.js");



// * factory module for display DOM groupings

const domDisplay = (() => {
    // data
    let _taskCounter = 0;

    // cache DOM
    let projectContainer = document.getElementById('project-container');
    let taskContainer = document.getElementById('task-container');
    let taskCountSpan = document.querySelector('div.tally span');
    let createTaskButton = document.querySelector('div.task-controls div.create');

    // project manager
    const _renderProject = function(project) {
        let cardID = '#project_' + project.id;
        let projectCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.project', cardID);

        let projectHeader = _renderProjectHeader(project.title);
        let projectDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(project.description, '.description');

        projectCard.appendChild(projectHeader);
        projectCard.appendChild(projectDescription);

        projectContainer.appendChild(projectCard);

        _fillTaskCounter('');
    }

    // task manager
    const _renderTask = function(task) {
        let taskCard;
        if (task.type === 'singleton') {
            taskCard = _renderSingleton(task);
        } else if (task.type === 'checklist') {
            taskCard = _renderChecklist(task);
        }
        taskContainer.appendChild(taskCard);
        _fillTaskCounter('+');
    }
    const _renderSingleton = function(task) {
        let cardID = '#task_' + task.id;
        let divCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.singleton', cardID);

        let singletonCheckmark = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)(task.id);
        let taskCardContent = _renderSingletonContent(task.id, task.title, task.dueDate, task.description, task.priority, task.tags);

        divCard.appendChild(singletonCheckmark);
        divCard.appendChild(taskCardContent);

        return divCard;
    }
    const _renderChecklist = function(task) {
        let cardID = '#task_' + task.id;
        let divCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.checklist', cardID);

        let checklistHeader = _renderChecklistHeader(task.title, task.dueDate);
        let checklistDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(task.description, '.description');
        let checklistContent = _renderChecklistContent(task.items);
        let checklistDetails = _renderTaskDetails(task.priority, task.tags);

        divCard.appendChild(checklistHeader);
        divCard.appendChild(checklistDescription);
        divCard.appendChild(checklistContent);
        divCard.appendChild(checklistDetails);

        return divCard;
    }
    function _clearDisplay() {
        while (projectContainer.children.length > 0) {
            projectContainer.removeChild(projectContainer.lastChild);
        };
        while (taskContainer.children.length > 1) {
            taskContainer.removeChild(taskContainer.lastChild);
            _fillTaskCounter('-');
        };
    }
    function _deleteTask(id) {
        let targetTask = document.getElementById(id);
        taskContainer.removeChild(targetTask)
        _fillTaskCounter('-');
    }

    // helper factories
    const _renderProjectHeader = function(title) {
        let divHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.header');

        let h1Title = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h1)(title, '.title');
        let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.project', '.modify');
        let spanDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('X', '.delete');

        // * project modify/delete events
        spanModify.addEventListener('click', (e) => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {
            let cardID = e.target.closest('div.card').id;
            console.log(cardID);
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteProject', cardID);   // subscribed by forms.js
        });

        divHeader.appendChild(h1Title);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const _renderSingletonHeader = function(id, title, dueDate) {
        let divHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.header');

        let h2TitleContent = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h2)(title, '');
        let labelCheckmarkTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('', id, '.title');
        labelCheckmarkTitle.appendChild(h2TitleContent);

        let spanDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)(dueDate, '.date');
        let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.task', '.modify');
        let spanDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('X', '.delete');

        // * singleton modify/delete events
        spanModify.addEventListener('click', (e) => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {    // subscribed by library.js
            let taskCardID = e.target.closest('div.card').id;
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('deleteTask', taskCardID);   // subscribed by library.js
        });

        divHeader.appendChild(labelCheckmarkTitle);
        divHeader.appendChild(spanDate);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const _renderChecklistHeader = function(title, dueDate) {
        let divHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.header');

        let h2Title = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h2)(title, '.title');
        let spanDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)(dueDate, '.date');
        let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.task', '.modify');
        let spanDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('X', '.delete');

        // * checklist modify/delete events
        spanModify.addEventListener('click', (e) => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {    // subscribed by library.js
            let cardID = e.target.closest('div.card').id;
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('deleteTask', cardID);   // subscribed by library.js
        });

        divHeader.appendChild(h2Title);
        divHeader.appendChild(spanDate);
        divHeader.appendChild(spanModify);
        divHeader.appendChild(spanDelete);

        return divHeader;
    }
    const _renderSingletonContent = function(id, title, dueDate, description, priority, tags) {
        let divContent = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.content');

        let taskHeader = _renderSingletonHeader(id, title, dueDate);
        let taskDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(description, '.description');
        let taskDetails = _renderTaskDetails(priority, tags);

        divContent.appendChild(taskHeader);
        divContent.appendChild(taskDescription);
        divContent.appendChild(taskDetails);

        return divContent;
    }
    const _renderChecklistContent = function(items) {
        let itemCount = 1;
        let divChecks = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.checks');

        let ulItem = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.ul)('', '');
        if (items === undefined) {
            console.log('create blank checklist');
            let checklistItem = _renderChecklistItem('', itemCount);    // todo: consider how to make checkmark id's unique
                                                                        // ? pass taskID -> convert to taskID_input_itemCount && taskID_check_itemCount
            ulItem.appendChild(checklistItem);
        } else {
            for (let i = 0; i < (items.length); i++) {
                let checklistItem = _renderChecklistItem(items[i], itemCount);  // todo: consider how to make checkmark id's unique
                ulItem.appendChild(checklistItem);                              // ? pass taskID -> convert to taskID_input_itemCount && taskID_check_itemCount
                itemCount++;
            };
        };
        divChecks.appendChild(ulItem);
        
        return divChecks;
    }
    const _renderChecklistItem = function(content, count) {
        let liItem = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.li)('', '');
    
        let checkbox = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)(count);    // todo: see above
        let labelItem = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)(content, count, '');  // todo: see above
        // let itemControls = _renderChecklistItemControls();

        liItem.appendChild(checkbox);
        liItem.appendChild(labelItem);
        // liItem.appendChild(itemControls);

        return liItem;
    }
    // const _renderChecklistItemControls = function() {
    //     let divControls = div('', '.checklist-item-controls');

    //     let spanModify = span('...', '.task', '.modify');
    //     let spanDelete = span('X', '.delete');

    //     // * checklist item modify/delete events
    //     spanModify.addEventListener('click', (e) => {
    //         console.log('call alert() to modify');
    //     });
    //     spanDelete.addEventListener('click', (e) => {
    //         // ? get position in ul nodelist, push with event to library, index into items using the same index
    //         let liID = e.target.closest('li').id;
    //         events.publish('deleteTask', liID);
    //     });

    //     divControls.appendChild(spanModify);
    //     divControls.appendChild(spanDelete);
    // }
    const _renderTaskDetails = function(priority, tags) {
        let divDetails = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.details');

        let divPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(priority, '.priority');
        let divTags = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(tags, '.tags');

        divDetails.appendChild(divPriority);
        divDetails.appendChild(divTags);

        return divDetails;
    }

    // other methods
    function _fillTaskCounter(operator) {
        if (operator === '+') {
            _taskCounter++;
        } else if (operator === '-') {
            _taskCounter--;
        }
        taskCountSpan.textContent = _taskCounter;
    }

    // bind events
    // * modify & delete click events in _renderHeader()'s ^^^
    createTaskButton.addEventListener('click', () => {
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickCreateItem', 'task');  // subscribed by forms.js
    });
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('renderProject', _renderProject)   // published from display.js (_renderDisplay())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('renderTask', _renderTask);    // published from display.js (_renderDisplay())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeTaskFromDisplay', _deleteTask); // published from library.js (_deleteTask())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeProjectFromDisplay', _clearDisplay) // published from library.js (_deleteProject())

})();

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
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "label": () => (/* binding */ label),
/* harmony export */   "li": () => (/* binding */ li),
/* harmony export */   "option": () => (/* binding */ option),
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
const input = function(id) {
    element = document.createElement('input');
    element.type = 'checkbox';
    element.id = String(id);
    element.name = String(id);
    return element;
}
const option = function(value, content) {
    element = document.createElement('option');
    element.value = value;
    element.textContent = content;
    return element;
}
const label = function(content, id, ...args) {
    _attributes = [...args];
    element = document.createElement('label');
    if (_attributes.length > 0) {
        _setAttributes(element, _attributes);
    };
    element.for = String(id);
    element.textContent = content;
    _attributes = [];
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



// * manages interface between form DOM & library arrays

const forms = (() => {
    // data
    let _currentForm;
    let _currentFormType;

    // cache DOM
    let projectForm = document.getElementById('project-form');
    let deleteConfirmAlert = document.getElementById('delete-confirm');
    let taskForm = document.getElementById('task-form');

    let projectInputs = projectForm.querySelectorAll('input');
    let taskInputs = taskForm.querySelectorAll('.input');

    let confirmDeleteButton = document.querySelector('button.delete-confirm');
    let cancelDeleteButton = document.querySelector('button.delete-cancel');
    let confirmButtons = document.querySelectorAll('button.confirm');
    let cancelButtons = document.querySelectorAll('button.cancel');

    // manager methods
    function _openCreateForm(formReference) {
        _setFormReferences(formReference);
        _showForm();
    }
    function _openModifyQuery(event) {
        let cardReferences = event.target.closest('div.card').id.split('_');
        _setFormReferences(cardReferences[0]);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openModifyQuery', cardReferences);  // subscribed by library.js
    }
    function _openModifyForm(itemValues) {
        _fillFormValues(itemValues);
        _showForm();
    }
    function _confirmInput() {
        _hideForm();
        let formValues = _bundleFormValues();
        _clearFormValues();
        _removeProjectOptions();

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('confirmInput', formValues);    // subscribed by library.js
    }
    function _cancelInput() {
        _hideForm();
        _clearFormValues();
        _removeProjectOptions();
    }
    function _showDeleteProjectConfirmation(cardID) {
        deleteConfirmAlert.classList.remove('hide');
    }

    // helper methods  
    function _setFormReferences(formReference) {
        if (formReference === 'project') {
            _currentForm = projectForm;
            _currentFormType = 'project';
        } else if (formReference === 'task') {
            _currentForm = taskForm;
            _currentFormType = 'task';
        };
    }
    function _showForm() {
        _currentForm.classList.remove('hide');
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openProjectOptionsQuery', '');  // subscribed by library.js
    }
    function _hideForm() {
        _currentForm.classList.add('hide');
    }
    function _fillFormValues(values) {
        //// console.log(values);
        if (_currentFormType === 'project') {
            for (let i = 0; i < (values.length); i++) {
                projectInputs[i].value = values[i];
            };
        } else if (_currentFormType === 'task') {
            for (let i = 0; i < (values.length); i++) {
                if (i === 0) {
                    taskInputs[i].value = values[i];
                } else if (i === 1) {
                    if (values[1] === 'singleton') {
                        taskInputs[1].checked = true;
                    } else if (values[1] === 'checklist') {
                        taskInputs[2].checked = true;
                    };
                } else {
                    taskInputs[i + 1].value = values[i];
                };
            };
        };
    }
    function _bundleFormValues() {
        let formValues = [];
        if (_currentForm === projectForm) {
            formValues.push('project');
            for (let i = 0; i < (projectInputs.length); i++) {
                formValues.push(projectInputs[i].value);
            };
            //// console.log(`project formValues: [${formValues}]`);
        } else if (_currentForm === taskForm) {
            formValues.push('task');
            for (let i = 0; i < (taskInputs.length); i++) {
                if (i === 0 || i > 2) {
                    formValues.push(taskInputs[i].value);
                };
                if (i === 1 || i === 2) {
                    if (taskInputs[i].checked === true) {
                        formValues.push(taskInputs[i].value);
                    };
                };
            };
            //// console.log(`task formValues: [${formValues}]`);
        };
        return formValues;
    }
    function _clearFormValues() {
        if (_currentForm === projectForm) {
            projectInputs.forEach(input => input.value = '');
        } else if (_currentForm === taskForm) {
            for (let i = 0; i < (taskInputs.length); i++) {
                if (((i > 2) && (i < 6)) || (i > 6)) {
                    taskInputs[i].value = '';
                };
            };
        };
        _currentForm = '';
        _currentFormType = '';
    }
    function _renderProjectOptions(array) {
        let projectDropdown = taskInputs[7];
        for (let i = 0; i < (array.length); i++) {
            let projectName = array[i][0];
            let projectID = array[i][1]
            let optionProject = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.option)(projectID, projectName);
            projectDropdown.appendChild(optionProject);
        };
    }
    function _removeProjectOptions() {
        while (taskInputs[7].firstChild) {
            taskInputs[7].removeChild(taskInputs[7].lastChild);
        };
    }

    // bind events
    confirmDeleteButton.addEventListener('click', () => {
        deleteConfirmAlert.classList.add('hide');
        let projectCardID = document.querySelector('div.project.card').id;
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('deleteProject', projectCardID); // subscribed by library.js
    })
    cancelDeleteButton.addEventListener('click', () => {
        deleteConfirmAlert.classList.add('hide');
    });
    confirmButtons.forEach(btn => btn.addEventListener('click', (e) => {
        _confirmInput(e);
    }));
    cancelButtons.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickCreateItem', _openCreateForm);   // publishing from domDisplay.js (createTaskButton clickEvent)
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickModifyItem', _openModifyQuery);  // publishing from domDisplay.js (_renderHeaders())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('closeModifyQuery', _openModifyForm);  // publishing from library.js (_queryItem());
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('closeProjectOptionsQuery', _renderProjectOptions);  // publishing from library.js (_queryProjectNameID())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickDeleteProject', _showDeleteProjectConfirmation);    // publishing from domDisplay.js (_renderProjectHeader())

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


// * 'backend' manager module containing project/task states, factories, & methods

const library = (() => {
    // dynamic data
    let _projectLibrary = [];
    let _taskLibrary = [];
    let _taskCounter = 0;
    let _projectCounter = 0;

    //// cache DOM

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
        constructor(taskID, projectID, taskType, taskTitle, taskDescription, taskDue, taskPriority, taskTags, taskItems) {
            this.id = taskID;
            this.projectID = projectID;
            this.type = taskType;
            this.title = taskTitle;
            this.description = taskDescription;
            this.dueDate = taskDue;
            this.priority = taskPriority;
            this.tags = taskTags;
            if (this.type === 'checklist') {    // ? is this necessary if taskItems are pushed individually ?
                this.items = taskItems;         // ? as they are created ?
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
            if (value !== this.dueDate) {
                this.dueDate = value;
            };
        }
        set setPriority(value) {
            if (value !== this.priority) {
                this.priority = value;
            };
        }
        set setProjectID(value) {
            if (value !== this.projectID) {
                this.projectID = value;
            };
        }
        set setTags(valueArray) {
            if (valueArray !== this.tags) {
                this.tags = valueArray;
            };
        }
    }

    // getters
    function _queryItem(cardReferences) {   // TODO reduce repetition
        let libraryReference = cardReferences[0];
        let itemReference = cardReferences[1];

        if (libraryReference === 'project') {
            for (let p = 0; p < (_projectLibrary.length); p++) {
                if (_projectLibrary[p].id == itemReference) {
                    let item = _projectLibrary[p];
                    let itemValueArray = [item.id, item.title, item.description];
                    //// console.log(itemValueArray)
                    _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('closeModifyQuery', itemValueArray);   // subscribed by forms.js
                    return;
                };
            };
        } else if (libraryReference === 'task') {
            for (let t = 0; t < (_taskLibrary.length); t++) {
                if (_taskLibrary[t].id == itemReference) {
                    let item = _taskLibrary[t];
                    let itemValueArray = [item.id, item.type, item.title, item.description, item.dueDate, item.priority, item.projectID, item.tags];
                    //// console.log(itemValueArray);
                    _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('closeModifyQuery', itemValueArray);   // subscribed by forms.js
                };
            };
        };
    }
    function _queryProjectNamesIDs() {
        let nameIDArray = [];
        for (let p = 0; p < (_projectLibrary.length); p++) {
            nameIDArray.push([_projectLibrary[p].title, _projectLibrary[p].id]);
        };

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('closeProjectOptionsQuery', nameIDArray) // subscribed by forms.js
    }

    // setter manager
    function _setItemValues(formValues) {
        let libraryReference = formValues[0];
        let itemReference = formValues[1];
        formValues.splice(0, 2);    // [title, description]
                                    // [type, title, description, dueDate, 'priority', 'projectID', [tags]]
        console.log(libraryReference);
        console.log(itemReference);
        console.log(formValues);
        
        if (libraryReference === 'project') {
            if (!_projectLibrary[itemReference]) {
                _createProject(formValues);
            } else {
                _modifyProject(itemReference, formValues);
            };

        } else if (libraryReference === 'task') {
            if (!_taskLibrary[itemReference]) {
                //                         projectID                type           title          description    dueDate        priority                 tags
                let formValuesReordered = [parseInt(formValues[5]), formValues[0], formValues[1], formValues[2], formValues[3], parseInt(formValues[4]), formValues[6]]
                _createTask(formValuesReordered);
            } else {
                _modifyTask(itemReference, formValues);
            };
        };
    }

    // setter helper methods
    function _createProject(attributeArray) {
        let _id = _projectCounter;
        let _newProject = new Project(_id, ...attributeArray);
        console.log(_newProject);
        _projectLibrary.push(_newProject);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('projectCreated', _newProject);  // subscribed by display.js
        _projectCounter++;
    }
    function _createTask(attributeArray) {
        let _id = _taskCounter;
        let _newTask = new Task(_id, ...attributeArray);
        console.log(_newTask);
        _taskLibrary.push(_newTask);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('taskCreated', _newTask);    // subscribed by display.js
        _taskCounter++;
    }
    function _modifyProject(targetItemID, attributeArray) {
        //// console.log(attributeArray)
        let projectInstance = _projectLibrary[targetItemID];
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
        //// console.log(projectInstance);
    }
    function _modifyTask(targetItemID, attributeArray) {
        //// console.log(attributeArray);
        let taskInstance = _taskLibrary[targetItemID];
        //// console.log(taskInstance);
        for (let a = 0; a < (attributeArray.length); a++) {
            switch(a) {
                case 0:
                    taskInstance.setTitle = attributeArray[1];
                    break;
                case 1:
                    taskInstance.description = attributeArray[2];
                    break;
                case 2:
                    taskInstance.setDueDate = attributeArray[3];
                    break;
                case 3:
                    taskInstance.setPriority = parseInt(attributeArray[4]);
                    break;
                case 4:
                    taskInstance.setProjectID = parseInt(attributeArray[5]);
                    break;
                case 5:
                    taskInstance.setTags = attributeArray[6];
            };
        };
        //// console.log(taskInstance);
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
        console.log(_projectLibrary);
        console.log(_taskLibrary);
        // * send notification to update sidebar (remove deleted project, select new project view)
        // * ---> will in turn notify display to refresh
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeProjectFromDisplay', cardID);    // subscribed by domDisplay.js
    }
    function _deleteTask(cardID) {
        let cardReferences = cardID.split('_');
        let taskReference = cardReferences[1];
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == taskReference) {
                // projectReference = _taskLibrary[t].projectID;
                _taskLibrary.splice(t, 1);
            };
        };
        console.log(_taskLibrary);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeTaskFromDisplay', cardID);    // subscribed by domDisplay.js
    }

    // bind events
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('createProject', _createProject);  // published from display.js (initDefault())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('createTask', _createTask);    // published from display.js (initDefault())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openModifyQuery', _queryItem);    // published from forms.js (_openModifyQuery())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openProjectOptionsQuery', _queryProjectNamesIDs)  // published from forms.js (_showForm())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('deleteProject', _deleteProject);    // published from forms.js (confirmDeleteButton eventListener)
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('deleteTask', _deleteTask);    // published from domDisplay.js (_renderItemHeaders())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('confirmInput', _setItemValues); //published from forms.js (_confirmInput())

})();

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
/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/layout.css */ "./src/styles/layout.css");
/* harmony import */ var _styles_typo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/typo.css */ "./src/styles/typo.css");
/* harmony import */ var _styles_shaping_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/shaping.css */ "./src/styles/shaping.css");
/* harmony import */ var _styles_colors_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/colors.css */ "./src/styles/colors.css");
/* harmony import */ var _scripts_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/display */ "./src/scripts/display.js");
/* harmony import */ var _scripts_domDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/domDisplay */ "./src/scripts/domDisplay.js");
/* harmony import */ var _scripts_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/forms */ "./src/scripts/forms.js");
/* harmony import */ var _scripts_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/library */ "./src/scripts/library.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events */ "./src/events.js");









// import sidebar from './scripts/sidebar';
// import domSidebar from '.scripts/domSidebar';



// manager function here

// ! move vvv into domDisplay
let viewPrefs = document.getElementById('view-prefs');
let title = document.getElementById('title');
title.addEventListener('click', () => {
    viewPrefs.classList.toggle('hide');
});

// actions
_scripts_display__WEBPACK_IMPORTED_MODULE_5__["default"].initDefault();
_events__WEBPACK_IMPORTED_MODULE_9__["default"].viewEvents();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkZBQTZGLDhCQUE4QixHQUFHLG1DQUFtQyw4QkFBOEIsR0FBRyx3QkFBd0IsNkJBQTZCLEdBQUcsV0FBVyxrQ0FBa0MsR0FBRyxPQUFPLDJGQUEyRixZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDZFQUE2RSw4QkFBOEIsR0FBRyxtQ0FBbUMsOEJBQThCLEdBQUcsd0JBQXdCLDZCQUE2QixHQUFHLFdBQVcsa0NBQWtDLEdBQUcsbUJBQW1CO0FBQzl3QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2RkFBNkYsc0JBQXNCLHNCQUFzQix5QkFBeUIsNEJBQTRCLDBCQUEwQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxZQUFZLHVCQUF1QixPQUFPLFVBQVUsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLG9CQUFvQixHQUFHLGlEQUFpRCxtQ0FBbUMsT0FBTyx1RkFBdUYseUJBQXlCLHFEQUFxRCxVQUFVLEdBQUcsd0JBQXdCLHdCQUF3Qiw0QkFBNEIsK0JBQStCLE9BQU8sMEVBQTBFLHlCQUF5QixnQkFBZ0IsU0FBUyx1Q0FBdUMsdUJBQXVCLHVCQUF1QixHQUFHLGNBQWMsb0JBQW9CLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsT0FBTyw0QkFBNEIsNEJBQTRCLGdDQUFnQywyQkFBMkIsV0FBVyxzQ0FBc0Msb0JBQW9CLDhCQUE4QixHQUFHLHlFQUF5RSx3QkFBd0IseUNBQXlDLHVDQUF1QyxnR0FBZ0csNEJBQTRCLHNCQUFzQixPQUFPLHdGQUF3RixnQ0FBZ0MsOEJBQThCLHNDQUFzQyxrQ0FBa0MsV0FBVyw2RkFBNkYsaUNBQWlDLFdBQVcsb0NBQW9DLGdDQUFnQyxvQ0FBb0Msd0NBQXdDLGlDQUFpQyxlQUFlLDZCQUE2QixvQ0FBb0Msa0RBQWtELDBDQUEwQyw0Q0FBNEMsb0NBQW9DLG1CQUFtQixnQ0FBZ0MsNkNBQTZDLHVCQUF1Qiw0RUFBNEUsOENBQThDLG1CQUFtQixvREFBb0Qsb0NBQW9DLGtEQUFrRCxtQkFBbUIsZ0NBQWdDLDZDQUE2Qyx1QkFBdUIsZ0NBQWdDLG9DQUFvQyw4Q0FBOEMsbUJBQW1CLGdEQUFnRCx5REFBeUQsdUJBQXVCLDJEQUEyRCxpRUFBaUUsdUJBQXVCLGtDQUFrQyx3Q0FBd0MsNENBQTRDLGdEQUFnRCx3Q0FBd0MsdUJBQXVCLHNDQUFzQyw0Q0FBNEMsb0RBQW9ELDJCQUEyQixnQ0FBZ0Msb0NBQW9DLHdDQUF3Qyw0Q0FBNEMsbUJBQW1CLDBDQUEwQyx3Q0FBd0MsOENBQThDLHVCQUF1QixvREFBb0QsaURBQWlELDJCQUEyQixTQUFTLDZGQUE2RixVQUFVLFdBQVcsS0FBSyxVQUFVLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxRQUFRLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSx1QkFBdUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxVQUFVLFdBQVcsS0FBSyxZQUFZLHFCQUFxQixjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sWUFBWSxhQUFhLGNBQWMsS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFFBQVEsV0FBVyxVQUFVLE1BQU0sWUFBWSxhQUFhLGNBQWMsS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGNBQWMsS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLGFBQWEsZUFBZSxZQUFZLE9BQU8sTUFBTSxXQUFXLGFBQWEsY0FBYyxlQUFlLFlBQVksT0FBTyxNQUFNLGFBQWEsUUFBUSxPQUFPLGFBQWEsUUFBUSxNQUFNLFdBQVcsYUFBYSxRQUFRLE1BQU0sYUFBYSxRQUFRLE1BQU0sV0FBVyxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxXQUFXLGFBQWEsZUFBZSxZQUFZLE9BQU8sTUFBTSxXQUFXLGFBQWEsUUFBUSxNQUFNLFdBQVcsYUFBYSxjQUFjLFFBQVEsTUFBTSxXQUFXLGFBQWEsUUFBUSxNQUFNLGFBQWEsOEVBQThFLHNCQUFzQixzQkFBc0IseUJBQXlCLDRCQUE0QiwwQkFBMEIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLFFBQVEsdUJBQXVCLEdBQUcsWUFBWSx1QkFBdUIsT0FBTyxVQUFVLG9CQUFvQix3QkFBd0IsOEJBQThCLDBCQUEwQixvQkFBb0IsR0FBRyxpREFBaUQsbUNBQW1DLE9BQU8sdUZBQXVGLHlCQUF5QixxREFBcUQsVUFBVSxHQUFHLHdCQUF3Qix3QkFBd0IsNEJBQTRCLCtCQUErQixPQUFPLDBFQUEwRSx5QkFBeUIsZ0JBQWdCLFNBQVMsdUNBQXVDLHVCQUF1Qix1QkFBdUIsR0FBRyxjQUFjLG9CQUFvQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLE9BQU8sNEJBQTRCLDRCQUE0QixnQ0FBZ0MsMkJBQTJCLFdBQVcsc0NBQXNDLG9CQUFvQiw4QkFBOEIsR0FBRyx5RUFBeUUsd0JBQXdCLHlDQUF5Qyx1Q0FBdUMsZ0dBQWdHLDRCQUE0QixzQkFBc0IsT0FBTyx3RkFBd0YsZ0NBQWdDLDhCQUE4QixzQ0FBc0Msa0NBQWtDLFdBQVcsNkZBQTZGLGlDQUFpQyxXQUFXLG9DQUFvQyxnQ0FBZ0Msb0NBQW9DLHdDQUF3QyxpQ0FBaUMsZUFBZSw2QkFBNkIsb0NBQW9DLGtEQUFrRCwwQ0FBMEMsNENBQTRDLG9DQUFvQyxtQkFBbUIsZ0NBQWdDLDZDQUE2Qyx1QkFBdUIsNEVBQTRFLDhDQUE4QyxtQkFBbUIsb0RBQW9ELG9DQUFvQyxrREFBa0QsbUJBQW1CLGdDQUFnQyw2Q0FBNkMsdUJBQXVCLGdDQUFnQyxvQ0FBb0MsOENBQThDLG1CQUFtQixnREFBZ0QseURBQXlELHVCQUF1QiwyREFBMkQsaUVBQWlFLHVCQUF1QixrQ0FBa0Msd0NBQXdDLDRDQUE0QyxnREFBZ0Qsd0NBQXdDLHVCQUF1QixzQ0FBc0MsNENBQTRDLG9EQUFvRCwyQkFBMkIsZ0NBQWdDLG9DQUFvQyx3Q0FBd0MsNENBQTRDLG1CQUFtQiwwQ0FBMEMsd0NBQXdDLDhDQUE4Qyx1QkFBdUIsb0RBQW9ELGlEQUFpRCwyQkFBMkIscUJBQXFCO0FBQzc2VDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw4R0FBOEcsNkJBQTZCLEdBQUcsT0FBTyxvQkFBb0IsWUFBWSwwQkFBMEIscUNBQXFDLGlDQUFpQyxzQkFBc0Isb0JBQW9CLGlDQUFpQyxHQUFHLDBHQUEwRyxxQkFBcUIsR0FBRyxnSkFBZ0osdUJBQXVCLEdBQUcsUUFBUSx3QkFBd0IsR0FBRywrRkFBK0YsZ0JBQWdCLEdBQUcscUVBQXFFLG9CQUFvQiwwQkFBMEIsR0FBRyxnSkFBZ0osK0JBQStCLDJEQUEyRCxnQ0FBZ0MsVUFBVSwwSUFBMEkseUNBQXlDLDZCQUE2QixVQUFVLGtIQUFrSCxvQ0FBb0MsR0FBRyx5SUFBeUksMkJBQTJCLHlDQUF5QyxnREFBZ0QsVUFBVSx5RUFBeUUsMEJBQTBCLEdBQUcsc0pBQXNKLHlDQUF5Qyw2QkFBNkIsVUFBVSwwREFBMEQscUJBQXFCLEdBQUcsK0dBQStHLHFCQUFxQixxQkFBcUIseUJBQXlCLCtCQUErQixHQUFHLFNBQVMsc0JBQXNCLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxzSEFBc0gseUJBQXlCLEdBQUcsK0NBQStDLGdDQUFnQyxHQUFHLHlMQUF5TCw0QkFBNEIsOEJBQThCLGdDQUFnQyx3QkFBd0IsVUFBVSx1REFBdUQsd0JBQXdCLEdBQUcsd0ZBQXdGLDJCQUEyQixHQUFHLDhJQUE4SSxpQ0FBaUMsR0FBRyxnTUFBZ00seUJBQXlCLGlCQUFpQixHQUFHLDJMQUEyTCxxQ0FBcUMsR0FBRyxrREFBa0QscUNBQXFDLEdBQUcsa1BBQWtQLDhCQUE4Qiw2QkFBNkIsNkJBQTZCLDhCQUE4Qix5QkFBeUIsa0NBQWtDLFVBQVUsZ0ZBQWdGLCtCQUErQixHQUFHLG1FQUFtRSxxQkFBcUIsR0FBRywwSEFBMEgsOEJBQThCLHlCQUF5QixVQUFVLHlLQUF5SyxtQkFBbUIsR0FBRyxzSEFBc0gscUNBQXFDLG1DQUFtQyxVQUFVLDJHQUEyRywrQkFBK0IsR0FBRywrSkFBK0osa0NBQWtDLDRCQUE0QixVQUFVLG9IQUFvSCxxQkFBcUIsR0FBRywwREFBMEQseUJBQXlCLEdBQUcsK0ZBQStGLG9CQUFvQixHQUFHLG9EQUFvRCxvQkFBb0IsR0FBRyxPQUFPLCtGQUErRixRQUFRLFlBQVksT0FBTyxLQUFLLHFCQUFxQixhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsWUFBWSxRQUFRLGFBQWEsY0FBYyxNQUFNLFVBQVUsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksUUFBUSxhQUFhLGFBQWEsY0FBYyxNQUFNLGtDQUFrQyxxQkFBcUIsdUJBQXVCLE9BQU8sWUFBWSxjQUFjLE1BQU0sc0JBQXNCLHFCQUFxQixRQUFRLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxZQUFZLGNBQWMsTUFBTSxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLGFBQWEsT0FBTyxZQUFZLE9BQU8sWUFBWSxjQUFjLFFBQVEsc0JBQXNCLHFCQUFxQixPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sWUFBWSxjQUFjLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLGFBQWEsYUFBYSxjQUFjLFVBQVUsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sYUFBYSxPQUFPLFlBQVksT0FBTyxhQUFhLE9BQU8sWUFBWSxPQUFPLGFBQWEsU0FBUyxZQUFZLE9BQU8sYUFBYSxTQUFTLFlBQVksV0FBVyxNQUFNLGFBQWEsU0FBUyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLE9BQU8sWUFBWSxjQUFjLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLGFBQWEsT0FBTyxVQUFVLE9BQU8sWUFBWSxjQUFjLE1BQU0sc0JBQXNCLHVCQUF1QixPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sWUFBWSxjQUFjLE1BQU0sc0JBQXNCLHFCQUFxQixRQUFRLGFBQWEsY0FBYyxNQUFNLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxRQUFRLGFBQWEsY0FBYyxNQUFNLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSw4RkFBOEYsNkJBQTZCLEdBQUcsT0FBTyxvQkFBb0IsWUFBWSwwQkFBMEIscUNBQXFDLGlDQUFpQyxzQkFBc0Isb0JBQW9CLGlDQUFpQyxHQUFHLDBHQUEwRyxxQkFBcUIsR0FBRyxnSkFBZ0osdUJBQXVCLEdBQUcsUUFBUSx3QkFBd0IsR0FBRywrRkFBK0YsZ0JBQWdCLEdBQUcscUVBQXFFLG9CQUFvQiwwQkFBMEIsR0FBRyxnSkFBZ0osK0JBQStCLDJEQUEyRCxnQ0FBZ0MsVUFBVSwwSUFBMEkseUNBQXlDLDZCQUE2QixVQUFVLGtIQUFrSCxvQ0FBb0MsR0FBRyx5SUFBeUksMkJBQTJCLHlDQUF5QyxnREFBZ0QsVUFBVSx5RUFBeUUsMEJBQTBCLEdBQUcsc0pBQXNKLHlDQUF5Qyw2QkFBNkIsVUFBVSwwREFBMEQscUJBQXFCLEdBQUcsK0dBQStHLHFCQUFxQixxQkFBcUIseUJBQXlCLCtCQUErQixHQUFHLFNBQVMsc0JBQXNCLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxzSEFBc0gseUJBQXlCLEdBQUcsK0NBQStDLGdDQUFnQyxHQUFHLHlMQUF5TCw0QkFBNEIsOEJBQThCLGdDQUFnQyx3QkFBd0IsVUFBVSx1REFBdUQsd0JBQXdCLEdBQUcsd0ZBQXdGLDJCQUEyQixHQUFHLDhJQUE4SSxpQ0FBaUMsR0FBRyxnTUFBZ00seUJBQXlCLGlCQUFpQixHQUFHLDJMQUEyTCxxQ0FBcUMsR0FBRyxrREFBa0QscUNBQXFDLEdBQUcsa1BBQWtQLDhCQUE4Qiw2QkFBNkIsNkJBQTZCLDhCQUE4Qix5QkFBeUIsa0NBQWtDLFVBQVUsZ0ZBQWdGLCtCQUErQixHQUFHLG1FQUFtRSxxQkFBcUIsR0FBRywwSEFBMEgsOEJBQThCLHlCQUF5QixVQUFVLHlLQUF5SyxtQkFBbUIsR0FBRyxzSEFBc0gscUNBQXFDLG1DQUFtQyxVQUFVLDJHQUEyRywrQkFBK0IsR0FBRywrSkFBK0osa0NBQWtDLDRCQUE0QixVQUFVLG9IQUFvSCxxQkFBcUIsR0FBRywwREFBMEQseUJBQXlCLEdBQUcsK0ZBQStGLG9CQUFvQixHQUFHLG9EQUFvRCxvQkFBb0IsR0FBRyxtQkFBbUI7QUFDdGhjO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxrRUFBa0U7QUFDbkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsVUFBVTtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDNUNhOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMERBQWMsa0NBQWtDO0FBQ3hEO0FBQ0E7QUFDQSxRQUFRLDBEQUFjLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFjLDhCQUE4QjtBQUN4RDtBQUNBO0FBQ0EsWUFBWSwwREFBYywwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNERBQWdCLGlEQUFpRDtBQUNyRSxJQUFJLDREQUFnQixpREFBaUQ7O0FBRXJFO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7QUNuRFM7QUFDZ0Q7O0FBRS9FOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBRzs7QUFFN0I7QUFDQSxpQ0FBaUMscURBQUc7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFHOztBQUV6QixpQ0FBaUMsZ0RBQUs7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBRzs7QUFFekI7QUFDQSxtQ0FBbUMscURBQUc7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFHOztBQUUzQixzQkFBc0IsNkNBQUU7QUFDeEIseUJBQXlCLCtDQUFJO0FBQzdCLHlCQUF5QiwrQ0FBSTs7QUFFN0I7QUFDQTtBQUNBLFlBQVksdURBQWMsMEJBQTBCO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFjLGtDQUFrQztBQUM1RCxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQUc7O0FBRTNCLDZCQUE2Qiw2Q0FBRTtBQUMvQixrQ0FBa0MsZ0RBQUs7QUFDdkM7O0FBRUEsdUJBQXVCLCtDQUFJO0FBQzNCLHlCQUF5QiwrQ0FBSTtBQUM3Qix5QkFBeUIsK0NBQUk7O0FBRTdCO0FBQ0E7QUFDQSxZQUFZLHVEQUFjLDBCQUEwQjtBQUNwRCxTQUFTO0FBQ1QseURBQXlEO0FBQ3pEO0FBQ0EsWUFBWSx1REFBYyw4QkFBOEI7QUFDeEQsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQUc7O0FBRTNCLHNCQUFzQiw2Q0FBRTtBQUN4Qix1QkFBdUIsK0NBQUk7QUFDM0IseUJBQXlCLCtDQUFJO0FBQzdCLHlCQUF5QiwrQ0FBSTs7QUFFN0I7QUFDQTtBQUNBLFlBQVksdURBQWMsMEJBQTBCO0FBQ3BELFNBQVM7QUFDVCx5REFBeUQ7QUFDekQ7QUFDQSxZQUFZLHVEQUFjLDBCQUEwQjtBQUNwRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxREFBRzs7QUFFNUI7QUFDQSw4QkFBOEIscURBQUc7QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFHOztBQUUzQixxQkFBcUIsNkNBQUU7QUFDdkI7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixvQkFBb0I7QUFDaEQsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFFO0FBQ3ZCO0FBQ0EsdUJBQXVCLGdEQUFLLFlBQVk7QUFDeEMsd0JBQXdCLGdEQUFLLHVCQUF1QjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFEQUFHOztBQUU1QiwwQkFBMEIscURBQUc7QUFDN0Isc0JBQXNCLHFEQUFHOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYyw4QkFBOEI7QUFDcEQsS0FBSztBQUNMLElBQUkseURBQWdCO0FBQ3BCLElBQUkseURBQWdCLGdDQUFnQztBQUNwRCxJQUFJLHlEQUFnQix3Q0FBd0M7QUFDNUQsSUFBSSx5REFBZ0I7O0FBRXBCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHK0I7QUFDSzs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYyxzQ0FBc0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBYyxpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYyxrQ0FBa0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEO0FBQ0E7QUFDQSxxREFBcUQsV0FBVztBQUNoRSxVQUFVO0FBQ1Y7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxXQUFXO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFjLGtDQUFrQztBQUN4RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSx5REFBZ0Isd0NBQXdDO0FBQzVELElBQUkseURBQWdCLHdDQUF3QztBQUM1RCxJQUFJLHlEQUFnQix3Q0FBd0M7QUFDNUQsSUFBSSx5REFBZ0Isc0RBQXNEO0FBQzFFLElBQUkseURBQWdCLDJEQUEyRDs7QUFFL0UsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7QUN4S1c7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBYyx3Q0FBd0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQWMsd0NBQXdDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQTs7QUFFQSxRQUFRLHVEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYyxrQ0FBa0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFjLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWMseUNBQXlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFjLHNDQUFzQztBQUM1RDs7QUFFQTtBQUNBLElBQUkseURBQWdCLG9DQUFvQztBQUN4RCxJQUFJLHlEQUFnQixnQ0FBZ0M7QUFDcEQsSUFBSSx5REFBZ0Isb0NBQW9DO0FBQ3hELElBQUkseURBQWdCO0FBQ3BCLElBQUkseURBQWdCLHNDQUFzQztBQUMxRCxJQUFJLHlEQUFnQixnQ0FBZ0M7QUFDcEQsSUFBSSx5REFBZ0Isa0NBQWtDOztBQUV0RCxDQUFDOzs7Ozs7VUM1UEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNDO0FBQ0Y7QUFDRztBQUNEOztBQUVXO0FBQ007QUFDVjtBQUNwQztBQUNBO0FBQ3dDO0FBQ1Y7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esb0VBQW1CO0FBQ25CLDBEQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3NoYXBpbmcuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdHlwby5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2NvbG9ycy5jc3M/YjBkOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2xheW91dC5jc3M/ZDgxMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc2hhcGluZy5jc3M/MGU5YyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3R5cG8uY3NzPzYwZWMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZG9tRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9saWJyYXJ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlcixcXG4jdmlldy1wcmVmcyxcXG4jZGlzcGxheSxcXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3ZpZXctcHJlZnMsXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbG9ycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7SUFJSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlcixcXG4jdmlldy1wcmVmcyxcXG4jZGlzcGxheSxcXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3ZpZXctcHJlZnMsXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgKi9cXG4vKiBHTE9CQUwgKi9cXG4vKiBHTE9CQUwgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1wYWQ6IDFlbTtcXG4gICAgLS1tYWluLWdhcDogMWVtO1xcblxcbiAgICAtLW1lZC1wYWQ6IDAuNWVtO1xcblxcbiAgICAtLXNtYWxsLXBhZDogMC4yNWVtO1xcbiAgICAtLXNtYWxsLWdhcDogMC4yNWVtO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDBlbTtcXG4gICAgfVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiAgICBoZWFkZXIsXFxuICAgICN2aWV3LXByZWZzLFxcbiAgICAjZGlzcGxheSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxuICAgIH1cXG5cXG5cXG4vKiAtLS0gVklFVyBQUkVGUyAqL1xcbi8qIC0tLSBWSUVXIFBSRUZTICovXFxuLyogLS0tIFZJRVcgUFJFRlMgKi9cXG5cXG4jdmlldy1wcmVmcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKGNhbGModmFyKC0tbWFpbi1wYWQpICogMikgKyAxLjY1ZW0pOyBsZWZ0OiAwZW07XFxufVxcblxcbiAgICAjdmlldy1wcmVmcyB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG4gICAgfVxcblxcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7IGxlZnQ6NTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiAgICAuZHJvcGRvd25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5kcm9wZG93bnMgZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICB9XFxuXFxuI3Byb2plY3QtYnV0dG9ucyxcXG4jdGFzay1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciAgaGVhZGVyJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXkgZGlzcGxheSc7XFxuXFxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcblxcbiAgICAgICAgaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuXFxuICAgICAgICAjZGlzcGxheSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkaXNwbGF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAuY2FyZCxcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tbWVkLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2luZ2xldG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNtYWxsLXBhZCkgKiAxKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlscyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jaGVja2xpc3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB1bCBsaSBsYWJlbCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtJQUNJLGVBQWU7SUFDZixlQUFlOztJQUVmLGdCQUFnQjs7SUFFaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztBQUVKO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0lBRUk7OztRQUdJLHdCQUF3QjtJQUM1Qjs7O0FBR0osbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixtQkFBbUI7O0FBRW5CO0lBQ0ksa0JBQWtCO0lBQ2xCLDZDQUE2QyxFQUFFLFNBQVM7QUFDNUQ7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7QUFFSixjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7O0FBRWQ7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0NBQWdDOztJQUVoQyxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7SUFFSTtRQUNJLGFBQWE7SUFDakI7O1FBRUk7WUFDSSxhQUFhO1lBQ2IsaUJBQWlCOztZQUVqQixVQUFVO1FBQ2Q7O0FBRVI7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjs7SUFFWjtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCOzhDQUNzQzs7UUFFdEMsZUFBZTtRQUNmLFdBQVc7SUFDZjs7QUFFSixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLG1CQUFtQjs7UUFFWDtZQUNJLGlCQUFpQjs7WUFFakIsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUI7UUFDdkI7O0FBRVIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7O1FBRVo7WUFDSSxrQkFBa0I7UUFDdEI7O1lBRUk7Z0JBQ0ksYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLHFCQUFxQjs7Z0JBRXJCLFlBQVk7WUFDaEI7O2dCQUVJO29CQUNJLGFBQWE7b0JBQ2IsMkJBQTJCO29CQUMzQixtQkFBbUI7b0JBQ25CLHFCQUFxQjs7b0JBRXJCLFdBQVc7Z0JBQ2Y7O29CQUVJO3dCQUNJLGtCQUFrQjtvQkFDdEI7O2dCQUVKOztvQkFFSSx1QkFBdUI7Z0JBQzNCOztnQkFFQTtvQkFDSSxhQUFhO29CQUNiLDJCQUEyQjtnQkFDL0I7O29CQUVJO3dCQUNJLGtCQUFrQjtvQkFDdEI7O2dCQUVKO29CQUNJLGFBQWE7b0JBQ2IsdUJBQXVCO2dCQUMzQjs7b0JBRUk7d0JBQ0ksOEJBQThCO29CQUNsQzs7b0JBRUE7d0JBQ0ksc0NBQXNDO29CQUMxQzs7b0JBRUE7d0JBQ0ksYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLHFCQUFxQjs7d0JBRXJCLFdBQVc7b0JBQ2Y7O3dCQUVJOzRCQUNJLGFBQWE7NEJBQ2IscUJBQXFCO3dCQUN6Qjs7Z0JBRVI7b0JBQ0ksYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtnQkFDekI7O29CQUVJO3dCQUNJLGFBQWE7d0JBQ2IsbUJBQW1CO29CQUN2Qjs7d0JBRUk7NEJBQ0ksa0JBQWtCO3dCQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgKi9cXG4vKiBHTE9CQUwgKi9cXG4vKiBHTE9CQUwgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1wYWQ6IDFlbTtcXG4gICAgLS1tYWluLWdhcDogMWVtO1xcblxcbiAgICAtLW1lZC1wYWQ6IDAuNWVtO1xcblxcbiAgICAtLXNtYWxsLXBhZDogMC4yNWVtO1xcbiAgICAtLXNtYWxsLWdhcDogMC4yNWVtO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDBlbTtcXG4gICAgfVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiAgICBoZWFkZXIsXFxuICAgICN2aWV3LXByZWZzLFxcbiAgICAjZGlzcGxheSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZCk7XFxuICAgIH1cXG5cXG5cXG4vKiAtLS0gVklFVyBQUkVGUyAqL1xcbi8qIC0tLSBWSUVXIFBSRUZTICovXFxuLyogLS0tIFZJRVcgUFJFRlMgKi9cXG5cXG4jdmlldy1wcmVmcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKGNhbGModmFyKC0tbWFpbi1wYWQpICogMikgKyAxLjY1ZW0pOyBsZWZ0OiAwZW07XFxufVxcblxcbiAgICAjdmlldy1wcmVmcyB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG4gICAgfVxcblxcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7IGxlZnQ6NTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiAgICAuZHJvcGRvd25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5kcm9wZG93bnMgZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICB9XFxuXFxuI3Byb2plY3QtYnV0dG9ucyxcXG4jdGFzay1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciAgaGVhZGVyJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXkgZGlzcGxheSc7XFxuXFxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcblxcbiAgICAgICAgaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuXFxuICAgICAgICAjZGlzcGxheSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkaXNwbGF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAuY2FyZCxcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tbWVkLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2luZ2xldG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNtYWxsLXBhZCkgKiAxKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlscyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jaGVja2xpc3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB1bCBsaSBsYWJlbCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR0xPQkFMID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4O1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbi8qIFNFQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW5kZXIgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBjb3JyZWN0IGZvbnQgc2l6ZSBvbiBgaDFgICYgJ2gyJyBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBHUk9VUElORyBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBhZGQgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3ggKi9cXG4vKiAyLiBzaG93IG92ZXJmbG93IGluIEVkZ2UsIElFICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqLyAvKiogY29uZmxpY3Qgdy8gYCotc2VsZWN0b3JgPyAqL1xcbiAgICBoZWlnaHQ6IDBweDsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IGluaGVyaXRhbmNlLCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiBjb3JyZWN0IHRoZSBvZmYgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuXFxuLyogVEVYVC1MRVZFTCBTRU1BTlRJQ1MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBncmF5IGJnIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogMS4gcmVtb3ZlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSAqL1xcbi8qIDIuIGFkZCBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgU2FmYXJpICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIFNhZmFyaSAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogMS4gY29ycmVjdCBpbmhlcml0YW5jZSwgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gY29ycmVjdCB0aGUgb2RkIGVtIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2VycyAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qIHByZXZlbnQgYWxsIGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyBsaW5lIGhlaWdodCAqL1xcbi8qIGluIGFsbCBicm93c2VycyAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcbiAgXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcblxcbi8qIEVNQkVEREVEIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogY2xlYW4gdXAgYm9yZGVycyBvbiB0YWJsZXMgKi9cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIEZPUk1TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBjaGFuZ2UgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gcmVtb3ZlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBzaG93IG92ZXJmbG93IGluIElFLCBFZGdlICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qIHJlbW92ZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBJRSAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogY29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBib3JkZXIsIHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiByZXN0b3JlIGZvY3VzIHN0eWxlcyB1bnNldCBieSBwcmV2aW91cyBydWxlIF5eICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qIGNvcnJlY3QgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcbiAgXFxuLyogMS4gY29ycmVjdCB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UsIElFICovXFxuLyogMi4gY29ycmVjdCBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUgKi9cXG4vKiAzLiByZW1vdmUgcGFkZGluZyBzbyBkZXZzIGFyZW4ndCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvLW91dCAqL1xcbi8qICAgIGBmaWVsZHNldGBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgT3BlcmEgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogcmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKyAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAgKi9cXG4vKiAyLiByZW1vdmUgcGFkZGluZyBpbiBJRSAxMCAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qIGNvcnJlY3QgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCwgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogMS4gY29ycmVjdCBvZmYgYXBwZWFyYW5jZSBpbiBDaHJvbWUsIFNhZmFyaSAqL1xcbi8qIDIuIGNvcnJlY3Qgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUsIFNhZmFyaSBvbiBtYWNPUyAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyogMS4gY2hhbmdlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG4vKiAyLiBjaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBJTlRFUkFDVElWRSA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIEZpcmVmb3ggKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuXFxuLyogTUlTQyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQzs7QUFFckM7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxXQUFXOztJQUV6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsYUFBYTs7SUFFYix3QkFBd0I7QUFDNUI7OztBQUdBLHVDQUF1Qzs7QUFFdkMsNkNBQTZDOztBQUU3QztJQUNJLGNBQWM7QUFDbEI7O0FBRUEsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1QyxtQ0FBbUM7O0FBRW5DO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLDhEQUE4RDs7QUFFOUQ7SUFDSSxTQUFTO0FBQ2I7O0FBRUEseURBQXlEOztBQUV6RDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLCtDQUErQzs7QUFFL0MseUNBQXlDO0FBQ3pDLGlDQUFpQzs7QUFFakM7SUFDSSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsK0JBQStCO0lBQ2hFLFdBQVcsRUFBRSxNQUFNO0lBQ25CLGlCQUFpQixFQUFFLE1BQU07QUFDN0I7O0FBRUEsaUVBQWlFO0FBQ2pFLHdEQUF3RDs7QUFFeEQ7SUFDSSxpQ0FBaUMsRUFBRSxNQUFNO0lBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQzFCOzs7QUFHQSxtREFBbUQ7O0FBRW5ELDRDQUE0Qzs7QUFFNUM7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUEsMENBQTBDO0FBQzFDLHNFQUFzRTs7QUFFdEU7SUFDSSxtQkFBbUIsRUFBRSxNQUFNO0lBQzNCLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUM3Qzs7QUFFQSxvREFBb0Q7O0FBRXBEOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQSxpRUFBaUU7QUFDakUsc0RBQXNEOztBQUV0RDs7O0lBR0ksaUNBQWlDLEVBQUUsTUFBTTtJQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUMxQjs7QUFFQSwwQ0FBMEM7O0FBRTFDO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxvRUFBb0U7QUFDcEUsb0JBQW9COztBQUVwQjs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQSwrQ0FBK0M7O0FBRS9DLGtEQUFrRDs7QUFFbEQ7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsK0JBQStCOztBQUUvQjtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxvQ0FBb0M7O0FBRXBDLDBDQUEwQztBQUMxQywyQ0FBMkM7O0FBRTNDOzs7OztJQUtJLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNyQjs7QUFFQSw4QkFBOEI7O0FBRTlCOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQSw4REFBOEQ7O0FBRTlEOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQSxrRUFBa0U7O0FBRWxFOzs7O0lBSUksMEJBQTBCO0FBQzlCOztBQUVBLDRDQUE0Qzs7QUFFNUM7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBLG1EQUFtRDs7QUFFbkQ7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7O0FBRUEsK0JBQStCOztBQUUvQjtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQSx5Q0FBeUM7QUFDekMsZ0VBQWdFO0FBQ2hFLG1FQUFtRTtBQUNuRSwwQ0FBMEM7O0FBRTFDO0lBQ0ksc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixjQUFjLEVBQUUsTUFBTTtJQUN0QixjQUFjLEVBQUUsTUFBTTtJQUN0QixlQUFlLEVBQUUsTUFBTTtJQUN2QixVQUFVLEVBQUUsTUFBTTtJQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQy9COztBQUVBLDZEQUE2RDs7QUFFN0Q7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUEsZ0RBQWdEOztBQUVoRDtJQUNJLGNBQWM7QUFDbEI7O0FBRUEsdUNBQXVDO0FBQ3ZDLCtCQUErQjs7QUFFL0I7O0lBRUksc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixVQUFVLEVBQUUsTUFBTTtBQUN0Qjs7QUFFQSxtRUFBbUU7O0FBRW5FOztJQUVJLFlBQVk7QUFDaEI7O0FBRUEsZ0RBQWdEO0FBQ2hELHVDQUF1Qzs7QUFFdkM7SUFDSSw2QkFBNkIsRUFBRSxNQUFNO0lBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDaEM7O0FBRUEsb0RBQW9EOztBQUVwRDtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSxnRUFBZ0U7QUFDaEUscURBQXFEOztBQUVyRDtJQUNJLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDekI7OztBQUdBLDBDQUEwQzs7QUFFMUMsaURBQWlEOztBQUVqRDtJQUNJLGNBQWM7QUFDbEI7O0FBRUEsd0NBQXdDOztBQUV4QztJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0EsbUNBQW1DOztBQUVuQyxrQ0FBa0M7O0FBRWxDO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbmRlciBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplIG9uIGBoMWAgJiAnaDInIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIEdST1VQSU5HIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveCAqL1xcbi8qIDIuIHNob3cgb3ZlcmZsb3cgaW4gRWRnZSwgSUUgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovIC8qKiBjb25mbGljdCB3LyBgKi1zZWxlY3RvcmA/ICovXFxuICAgIGhlaWdodDogMHB4OyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qIDEuIGNvcnJlY3QgaW5oZXJpdGFuY2UsIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIGNvcnJlY3QgdGhlIG9mZiBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2VycyAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IGluaGVyaXRhbmNlLCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiBjb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogcHJldmVudCBhbGwgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIGxpbmUgaGVpZ2h0ICovXFxuLyogaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuICBcXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBjbGVhbiB1cCBib3JkZXJzIG9uIHRhYmxlcyAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyogY29ycmVjdCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuICBcXG4vKiAxLiBjb3JyZWN0IHRleHQgd3JhcHBpbmcgaW4gRWRnZSwgSUUgKi9cXG4vKiAyLiBjb3JyZWN0IGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRSAqL1xcbi8qIDMuIHJlbW92ZSBwYWRkaW5nIHNvIGRldnMgYXJlbid0IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8tb3V0ICovXFxuLyogICAgYGZpZWxkc2V0YGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBPcGVyYSAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiByZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMCAqL1xcbi8qIDIuIHJlbW92ZSBwYWRkaW5nIGluIElFIDEwICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogY29ycmVjdCBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50LCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IG9mZiBhcHBlYXJhbmNlIGluIENocm9tZSwgU2FmYXJpICovXFxuLyogMi4gY29ycmVjdCBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaSAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgU2FmYXJpIG9uIG1hY09TICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiAxLiBjaGFuZ2UgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcbi8qIDIuIGNoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaSAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcblxcbi8qIElOVEVSQUNUSVZFID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgRmlyZWZveCAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKyAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hhcGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXBpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBldmVudHMgPSAoKCkgPT4ge1xuICAgIGxldCBfZXZlbnRzID0ge307XG5cbiAgICAvLyBzdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgU1VCU0NSSUJJTkcgdG8gJHtldmVudE5hbWV9YCk7XG4gICAgfVxuXG4gICAgLy8gdW5zdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKSwgMSk7XG4gICAgfVxuXG4gICAgLy8gcHVibGlzaCBldmVudCB3aXRoIGRhdGFcbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgLi4uZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2V2ZW50c1tldmVudE5hbWVdKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soLi4uZGF0YSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUFVCTElTSElORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBmdW5jdGlvbiB2aWV3RXZlbnRzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgIHVuc3Vic2NyaWJlLFxuICAgICAgICBwdWJsaXNoLFxuICAgICAgICB2aWV3RXZlbnRzLFxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzLmpzJztcblxuLy8gKiBtYW5hZ2VzIGludGVyZmFjZSBiZXR3ZWVuIGRpc3BsYXkgRE9NICYgbGlicmFyeSBhcnJheXNcblxuY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfc2FtcGxlUHJvamVjdFZhbHVlcyA9IFtbJ1Vuc29ydGVkJywgXCJUaGlzIGlzIHlvdXIgdGFza3MnIGRlZmF1bHQgbG9jYXRpb24uIEFueSB0YXNrcyB3aXRob3V0IGEgcHJvamVjdCBsaXZlIGhlcmUuXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgbGV0IF9zYW1wbGVUYXNrVmFsdWVzID0gW1swLCAnc2luZ2xldG9uJywgJ1Rhc2sgMScsICd0aGlzIGlzIGEgc2FtcGxlIHRhc2snLCAnMjAwMS0wMS0wMScsIDMsICcjdGFnJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFswLCAnc2luZ2xldG9uJywgJ1Rhc2sgMicsICd0aGlzIGlzICMyJywgJzIwMDItMDItMDInLCAyLCAnJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFswLCAnY2hlY2tsaXN0JywgJ1Rhc2sgMycsICd0aGlzIGlzIGEgY2hlY2tsaXN0JywgJzIwMDMtMDMtMDMnLCAxLCAnI3RpZyAjdG9nJywgWydpdGVtIDEnLCAnaXRlbSAyJywgJ2l0ZW0gMyddXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgIGxldCBfY3VycmVudFByb2plY3QgPSAwO1xuXG4gICAgLy8gbWFuYWdlcnNcbiAgICBmdW5jdGlvbiBpbml0RGVmYXVsdCgpIHtcbiAgICAgICAgX3B1Ymxpc2hDcmVhdGVQcm9qZWN0RXZlbnQoX3NhbXBsZVByb2plY3RWYWx1ZXNbMF0pO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfc2FtcGxlVGFza1ZhbHVlcy5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIF9wdWJsaXNoQ3JlYXRlVGFza0V2ZW50KF9zYW1wbGVUYXNrVmFsdWVzW3RdKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBoZWxwZXJzXG4gICAgZnVuY3Rpb24gX3B1Ymxpc2hDcmVhdGVQcm9qZWN0RXZlbnQocHJvamVjdFZhbHVlcykge1xuICAgICAgICBldmVudHMucHVibGlzaCgnY3JlYXRlUHJvamVjdCcsIHByb2plY3RWYWx1ZXMpOyAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX3B1Ymxpc2hDcmVhdGVUYXNrRXZlbnQodGFza1ZhbHVlcykge1xuICAgICAgICBldmVudHMucHVibGlzaCgnY3JlYXRlVGFzaycsIHRhc2tWYWx1ZXMpOyAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcHVibGlzaFJlbmRlckRpc3BsYXlFdmVudHMob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QudHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncmVuZGVyUHJvamVjdCcsIG9iamVjdCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgICAgICB9O1xuICAgICAgICBpZiAob2JqZWN0LnR5cGUgPT09ICdzaW5nbGV0b24nIHx8IG9iamVjdC50eXBlID09PSAnY2hlY2tsaXN0Jykge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbmRlclRhc2snLCBvYmplY3QpOyAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfbW9kaWZ5RGlzcGxheSgpIHtcbiAgICAgICAgLy8gaW5kZXggaW50byBET00gZm9yIHNwZWNpZmljIGl0ZW1JRCwgc2V0IG5ldyBjb250ZW50XG4gICAgfVxuXG4gICAgLy8gYmluZCBldmVudHNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdwcm9qZWN0Q3JlYXRlZCcsIF9wdWJsaXNoUmVuZGVyRGlzcGxheUV2ZW50cyk7IC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndGFza0NyZWF0ZWQnLCBfcHVibGlzaFJlbmRlckRpc3BsYXlFdmVudHMpOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfY3JlYXRlVGFzaygpKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdERlZmF1bHQsICAgLy8gdXNlZCBieSBpbmRleC5qc1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRpdiwgaDEsIGgyLCB1bCwgbGksIHNwYW4sIGlucHV0LCBsYWJlbH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8vICogZmFjdG9yeSBtb2R1bGUgZm9yIGRpc3BsYXkgRE9NIGdyb3VwaW5nc1xuXG5jb25zdCBkb21EaXNwbGF5ID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF90YXNrQ291bnRlciA9IDA7XG5cbiAgICAvLyBjYWNoZSBET01cbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tDb3VudFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudGFsbHkgc3BhbicpO1xuICAgIGxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnRhc2stY29udHJvbHMgZGl2LmNyZWF0ZScpO1xuXG4gICAgLy8gcHJvamVjdCBtYW5hZ2VyXG4gICAgY29uc3QgX3JlbmRlclByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGxldCBjYXJkSUQgPSAnI3Byb2plY3RfJyArIHByb2plY3QuaWQ7XG4gICAgICAgIGxldCBwcm9qZWN0Q2FyZCA9IGRpdignJywgJy5jYXJkJywgJy5wcm9qZWN0JywgY2FyZElEKTtcblxuICAgICAgICBsZXQgcHJvamVjdEhlYWRlciA9IF9yZW5kZXJQcm9qZWN0SGVhZGVyKHByb2plY3QudGl0bGUpO1xuICAgICAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZGl2KHByb2plY3QuZGVzY3JpcHRpb24sICcuZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcblxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCcnKTtcbiAgICB9XG5cbiAgICAvLyB0YXNrIG1hbmFnZXJcbiAgICBjb25zdCBfcmVuZGVyVGFzayA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgbGV0IHRhc2tDYXJkO1xuICAgICAgICBpZiAodGFzay50eXBlID09PSAnc2luZ2xldG9uJykge1xuICAgICAgICAgICAgdGFza0NhcmQgPSBfcmVuZGVyU2luZ2xldG9uKHRhc2spO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sudHlwZSA9PT0gJ2NoZWNrbGlzdCcpIHtcbiAgICAgICAgICAgIHRhc2tDYXJkID0gX3JlbmRlckNoZWNrbGlzdCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignKycpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyU2luZ2xldG9uID0gZnVuY3Rpb24odGFzaykge1xuICAgICAgICBsZXQgY2FyZElEID0gJyN0YXNrXycgKyB0YXNrLmlkO1xuICAgICAgICBsZXQgZGl2Q2FyZCA9IGRpdignJywgJy5jYXJkJywgJy5zaW5nbGV0b24nLCBjYXJkSUQpO1xuXG4gICAgICAgIGxldCBzaW5nbGV0b25DaGVja21hcmsgPSBpbnB1dCh0YXNrLmlkKTtcbiAgICAgICAgbGV0IHRhc2tDYXJkQ29udGVudCA9IF9yZW5kZXJTaW5nbGV0b25Db250ZW50KHRhc2suaWQsIHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5wcmlvcml0eSwgdGFzay50YWdzKTtcblxuICAgICAgICBkaXZDYXJkLmFwcGVuZENoaWxkKHNpbmdsZXRvbkNoZWNrbWFyayk7XG4gICAgICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQodGFza0NhcmRDb250ZW50KTtcblxuICAgICAgICByZXR1cm4gZGl2Q2FyZDtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdCA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgbGV0IGNhcmRJRCA9ICcjdGFza18nICsgdGFzay5pZDtcbiAgICAgICAgbGV0IGRpdkNhcmQgPSBkaXYoJycsICcuY2FyZCcsICcuY2hlY2tsaXN0JywgY2FyZElEKTtcblxuICAgICAgICBsZXQgY2hlY2tsaXN0SGVhZGVyID0gX3JlbmRlckNoZWNrbGlzdEhlYWRlcih0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUpO1xuICAgICAgICBsZXQgY2hlY2tsaXN0RGVzY3JpcHRpb24gPSBkaXYodGFzay5kZXNjcmlwdGlvbiwgJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgY2hlY2tsaXN0Q29udGVudCA9IF9yZW5kZXJDaGVja2xpc3RDb250ZW50KHRhc2suaXRlbXMpO1xuICAgICAgICBsZXQgY2hlY2tsaXN0RGV0YWlscyA9IF9yZW5kZXJUYXNrRGV0YWlscyh0YXNrLnByaW9yaXR5LCB0YXNrLnRhZ3MpO1xuXG4gICAgICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SGVhZGVyKTtcbiAgICAgICAgZGl2Q2FyZC5hcHBlbmRDaGlsZChjaGVja2xpc3REZXNjcmlwdGlvbik7XG4gICAgICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q29udGVudCk7XG4gICAgICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0RGV0YWlscyk7XG5cbiAgICAgICAgcmV0dXJuIGRpdkNhcmQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jbGVhckRpc3BsYXkoKSB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICB9O1xuICAgICAgICB3aGlsZSAodGFza0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgIF9maWxsVGFza0NvdW50ZXIoJy0nKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2RlbGV0ZVRhc2soaWQpIHtcbiAgICAgICAgbGV0IHRhcmdldFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFyZ2V0VGFzaylcbiAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignLScpO1xuICAgIH1cblxuICAgIC8vIGhlbHBlciBmYWN0b3JpZXNcbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdEhlYWRlciA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGxldCBkaXZIZWFkZXIgPSBkaXYoJycsICcuaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGgxVGl0bGUgPSBoMSh0aXRsZSwgJy50aXRsZScpO1xuICAgICAgICBsZXQgc3Bhbk1vZGlmeSA9IHNwYW4oJy4uLicsICcucHJvamVjdCcsICcubW9kaWZ5Jyk7XG4gICAgICAgIGxldCBzcGFuRGVsZXRlID0gc3BhbignWCcsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBwcm9qZWN0IG1vZGlmeS9kZWxldGUgZXZlbnRzXG4gICAgICAgIHNwYW5Nb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgfSk7XG4gICAgICAgIHNwYW5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkSUQpO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlUHJvamVjdCcsIGNhcmRJRCk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChzcGFuTW9kaWZ5KTtcbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKHNwYW5EZWxldGUpO1xuXG4gICAgICAgIHJldHVybiBkaXZIZWFkZXI7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJTaW5nbGV0b25IZWFkZXIgPSBmdW5jdGlvbihpZCwgdGl0bGUsIGR1ZURhdGUpIHtcbiAgICAgICAgbGV0IGRpdkhlYWRlciA9IGRpdignJywgJy5oZWFkZXInKTtcblxuICAgICAgICBsZXQgaDJUaXRsZUNvbnRlbnQgPSBoMih0aXRsZSwgJycpO1xuICAgICAgICBsZXQgbGFiZWxDaGVja21hcmtUaXRsZSA9IGxhYmVsKCcnLCBpZCwgJy50aXRsZScpO1xuICAgICAgICBsYWJlbENoZWNrbWFya1RpdGxlLmFwcGVuZENoaWxkKGgyVGl0bGVDb250ZW50KTtcblxuICAgICAgICBsZXQgc3BhbkRhdGUgPSBzcGFuKGR1ZURhdGUsICcuZGF0ZScpO1xuICAgICAgICBsZXQgc3Bhbk1vZGlmeSA9IHNwYW4oJy4uLicsICcudGFzaycsICcubW9kaWZ5Jyk7XG4gICAgICAgIGxldCBzcGFuRGVsZXRlID0gc3BhbignWCcsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBzaW5nbGV0b24gbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgc3Bhbk1vZGlmeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tNb2RpZnlJdGVtJywgZSk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcbiAgICAgICAgc3BhbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICAgICAgbGV0IHRhc2tDYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZVRhc2snLCB0YXNrQ2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGxhYmVsQ2hlY2ttYXJrVGl0bGUpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3BhbkRhdGUpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3Bhbk1vZGlmeSk7XG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChzcGFuRGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tsaXN0SGVhZGVyID0gZnVuY3Rpb24odGl0bGUsIGR1ZURhdGUpIHtcbiAgICAgICAgbGV0IGRpdkhlYWRlciA9IGRpdignJywgJy5oZWFkZXInKTtcblxuICAgICAgICBsZXQgaDJUaXRsZSA9IGgyKHRpdGxlLCAnLnRpdGxlJyk7XG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IHNwYW4oZHVlRGF0ZSwgJy5kYXRlJyk7XG4gICAgICAgIGxldCBzcGFuTW9kaWZ5ID0gc3BhbignLi4uJywgJy50YXNrJywgJy5tb2RpZnknKTtcbiAgICAgICAgbGV0IHNwYW5EZWxldGUgPSBzcGFuKCdYJywgJy5kZWxldGUnKTtcblxuICAgICAgICAvLyAqIGNoZWNrbGlzdCBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICBzcGFuTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBzcGFuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICBsZXQgY2FyZElEID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmQnKS5pZDtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdkZWxldGVUYXNrJywgY2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGgyVGl0bGUpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3BhbkRhdGUpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3Bhbk1vZGlmeSk7XG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChzcGFuRGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyU2luZ2xldG9uQ29udGVudCA9IGZ1bmN0aW9uKGlkLCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCB0YWdzKSB7XG4gICAgICAgIGxldCBkaXZDb250ZW50ID0gZGl2KCcnLCAnLmNvbnRlbnQnKTtcblxuICAgICAgICBsZXQgdGFza0hlYWRlciA9IF9yZW5kZXJTaW5nbGV0b25IZWFkZXIoaWQsIHRpdGxlLCBkdWVEYXRlKTtcbiAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRpdihkZXNjcmlwdGlvbiwgJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgdGFza0RldGFpbHMgPSBfcmVuZGVyVGFza0RldGFpbHMocHJpb3JpdHksIHRhZ3MpO1xuXG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG5cbiAgICAgICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2xpc3RDb250ZW50ID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgICAgbGV0IGl0ZW1Db3VudCA9IDE7XG4gICAgICAgIGxldCBkaXZDaGVja3MgPSBkaXYoJycsICcuY2hlY2tzJyk7XG5cbiAgICAgICAgbGV0IHVsSXRlbSA9IHVsKCcnLCAnJyk7XG4gICAgICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlIGJsYW5rIGNoZWNrbGlzdCcpO1xuICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW0gPSBfcmVuZGVyQ2hlY2tsaXN0SXRlbSgnJywgaXRlbUNvdW50KTsgICAgLy8gdG9kbzogY29uc2lkZXIgaG93IHRvIG1ha2UgY2hlY2ttYXJrIGlkJ3MgdW5pcXVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA/IHBhc3MgdGFza0lEIC0+IGNvbnZlcnQgdG8gdGFza0lEX2lucHV0X2l0ZW1Db3VudCAmJiB0YXNrSURfY2hlY2tfaXRlbUNvdW50XG4gICAgICAgICAgICB1bEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChpdGVtcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbSA9IF9yZW5kZXJDaGVja2xpc3RJdGVtKGl0ZW1zW2ldLCBpdGVtQ291bnQpOyAgLy8gdG9kbzogY29uc2lkZXIgaG93IHRvIG1ha2UgY2hlY2ttYXJrIGlkJ3MgdW5pcXVlXG4gICAgICAgICAgICAgICAgdWxJdGVtLmFwcGVuZENoaWxkKGNoZWNrbGlzdEl0ZW0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vID8gcGFzcyB0YXNrSUQgLT4gY29udmVydCB0byB0YXNrSURfaW5wdXRfaXRlbUNvdW50ICYmIHRhc2tJRF9jaGVja19pdGVtQ291bnRcbiAgICAgICAgICAgICAgICBpdGVtQ291bnQrKztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGRpdkNoZWNrcy5hcHBlbmRDaGlsZCh1bEl0ZW0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRpdkNoZWNrcztcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdEl0ZW0gPSBmdW5jdGlvbihjb250ZW50LCBjb3VudCkge1xuICAgICAgICBsZXQgbGlJdGVtID0gbGkoJycsICcnKTtcbiAgICBcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gaW5wdXQoY291bnQpOyAgICAvLyB0b2RvOiBzZWUgYWJvdmVcbiAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGxhYmVsKGNvbnRlbnQsIGNvdW50LCAnJyk7ICAvLyB0b2RvOiBzZWUgYWJvdmVcbiAgICAgICAgLy8gbGV0IGl0ZW1Db250cm9scyA9IF9yZW5kZXJDaGVja2xpc3RJdGVtQ29udHJvbHMoKTtcblxuICAgICAgICBsaUl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICBsaUl0ZW0uYXBwZW5kQ2hpbGQobGFiZWxJdGVtKTtcbiAgICAgICAgLy8gbGlJdGVtLmFwcGVuZENoaWxkKGl0ZW1Db250cm9scyk7XG5cbiAgICAgICAgcmV0dXJuIGxpSXRlbTtcbiAgICB9XG4gICAgLy8gY29uc3QgX3JlbmRlckNoZWNrbGlzdEl0ZW1Db250cm9scyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBsZXQgZGl2Q29udHJvbHMgPSBkaXYoJycsICcuY2hlY2tsaXN0LWl0ZW0tY29udHJvbHMnKTtcblxuICAgIC8vICAgICBsZXQgc3Bhbk1vZGlmeSA9IHNwYW4oJy4uLicsICcudGFzaycsICcubW9kaWZ5Jyk7XG4gICAgLy8gICAgIGxldCBzcGFuRGVsZXRlID0gc3BhbignWCcsICcuZGVsZXRlJyk7XG5cbiAgICAvLyAgICAgLy8gKiBjaGVja2xpc3QgaXRlbSBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgIC8vICAgICBzcGFuTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsIGFsZXJ0KCkgdG8gbW9kaWZ5Jyk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBzcGFuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyAgICAgICAgIC8vID8gZ2V0IHBvc2l0aW9uIGluIHVsIG5vZGVsaXN0LCBwdXNoIHdpdGggZXZlbnQgdG8gbGlicmFyeSwgaW5kZXggaW50byBpdGVtcyB1c2luZyB0aGUgc2FtZSBpbmRleFxuICAgIC8vICAgICAgICAgbGV0IGxpSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpLmlkO1xuICAgIC8vICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZVRhc2snLCBsaUlEKTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgZGl2Q29udHJvbHMuYXBwZW5kQ2hpbGQoc3Bhbk1vZGlmeSk7XG4gICAgLy8gICAgIGRpdkNvbnRyb2xzLmFwcGVuZENoaWxkKHNwYW5EZWxldGUpO1xuICAgIC8vIH1cbiAgICBjb25zdCBfcmVuZGVyVGFza0RldGFpbHMgPSBmdW5jdGlvbihwcmlvcml0eSwgdGFncykge1xuICAgICAgICBsZXQgZGl2RGV0YWlscyA9IGRpdignJywgJy5kZXRhaWxzJyk7XG5cbiAgICAgICAgbGV0IGRpdlByaW9yaXR5ID0gZGl2KHByaW9yaXR5LCAnLnByaW9yaXR5Jyk7XG4gICAgICAgIGxldCBkaXZUYWdzID0gZGl2KHRhZ3MsICcudGFncycpO1xuXG4gICAgICAgIGRpdkRldGFpbHMuYXBwZW5kQ2hpbGQoZGl2UHJpb3JpdHkpO1xuICAgICAgICBkaXZEZXRhaWxzLmFwcGVuZENoaWxkKGRpdlRhZ3MpO1xuXG4gICAgICAgIHJldHVybiBkaXZEZXRhaWxzO1xuICAgIH1cblxuICAgIC8vIG90aGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfZmlsbFRhc2tDb3VudGVyKG9wZXJhdG9yKSB7XG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gJysnKSB7XG4gICAgICAgICAgICBfdGFza0NvdW50ZXIrKztcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PT0gJy0nKSB7XG4gICAgICAgICAgICBfdGFza0NvdW50ZXItLTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrQ291bnRTcGFuLnRleHRDb250ZW50ID0gX3Rhc2tDb3VudGVyO1xuICAgIH1cblxuICAgIC8vIGJpbmQgZXZlbnRzXG4gICAgLy8gKiBtb2RpZnkgJiBkZWxldGUgY2xpY2sgZXZlbnRzIGluIF9yZW5kZXJIZWFkZXIoKSdzIF5eXlxuICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0NyZWF0ZUl0ZW0nLCAndGFzaycpOyAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgIH0pO1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbmRlclByb2plY3QnLCBfcmVuZGVyUHJvamVjdCkgICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChfcmVuZGVyRGlzcGxheSgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbmRlclRhc2snLCBfcmVuZGVyVGFzayk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKF9yZW5kZXJEaXNwbGF5KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVtb3ZlVGFza0Zyb21EaXNwbGF5JywgX2RlbGV0ZVRhc2spOyAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlVGFzaygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZVByb2plY3RGcm9tRGlzcGxheScsIF9jbGVhckRpc3BsYXkpIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9kZWxldGVQcm9qZWN0KCkpXG5cbn0pKCk7IiwiLy8gKiBmYWN0b3J5IGNsYXNzIGZvciBiYXNlLWxldmVsIERPTSBlbGVtZW50c1xuXG4vLyBkYXRhXG5sZXQgX2F0dHJpYnV0ZXMgPSBbXTtcbmxldCBlbGVtZW50O1xuXG4vLyBiYXNpYyBoZWxwZXIgZmFjdG9yaWVzXG5jb25zdCBkaXYgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBzcGFuID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGgxID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBoMiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgdWwgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGxpID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBpbnB1dCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWxlbWVudC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBlbGVtZW50LmlkID0gU3RyaW5nKGlkKTtcbiAgICBlbGVtZW50Lm5hbWUgPSBTdHJpbmcoaWQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3Qgb3B0aW9uID0gZnVuY3Rpb24odmFsdWUsIGNvbnRlbnQpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgbGFiZWwgPSBmdW5jdGlvbihjb250ZW50LCBpZCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQuZm9yID0gU3RyaW5nKGlkKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXR0cmlidXRlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcuJykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlkID0gYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGRpdiBhcyBkZWZhdWx0LCBzcGFuLCBoMSwgaDIsIHVsLCBsaSwgaW5wdXQsIG9wdGlvbiwgbGFiZWx9OyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCB7IG9wdGlvbiB9IGZyb20gJy4vZWxlbWVudHMnO1xuXG4vLyAqIG1hbmFnZXMgaW50ZXJmYWNlIGJldHdlZW4gZm9ybSBET00gJiBsaWJyYXJ5IGFycmF5c1xuXG5jb25zdCBmb3JtcyA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfY3VycmVudEZvcm07XG4gICAgbGV0IF9jdXJyZW50Rm9ybVR5cGU7XG5cbiAgICAvLyBjYWNoZSBET01cbiAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJyk7XG4gICAgbGV0IGRlbGV0ZUNvbmZpcm1BbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtY29uZmlybScpO1xuICAgIGxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcblxuICAgIGxldCBwcm9qZWN0SW5wdXRzID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBsZXQgdGFza0lucHV0cyA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpO1xuXG4gICAgbGV0IGNvbmZpcm1EZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uZGVsZXRlLWNvbmZpcm0nKTtcbiAgICBsZXQgY2FuY2VsRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmRlbGV0ZS1jYW5jZWwnKTtcbiAgICBsZXQgY29uZmlybUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uY29uZmlybScpO1xuICAgIGxldCBjYW5jZWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLmNhbmNlbCcpO1xuXG4gICAgLy8gbWFuYWdlciBtZXRob2RzXG4gICAgZnVuY3Rpb24gX29wZW5DcmVhdGVGb3JtKGZvcm1SZWZlcmVuY2UpIHtcbiAgICAgICAgX3NldEZvcm1SZWZlcmVuY2VzKGZvcm1SZWZlcmVuY2UpO1xuICAgICAgICBfc2hvd0Zvcm0oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX29wZW5Nb2RpZnlRdWVyeShldmVudCkge1xuICAgICAgICBsZXQgY2FyZFJlZmVyZW5jZXMgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmQnKS5pZC5zcGxpdCgnXycpO1xuICAgICAgICBfc2V0Rm9ybVJlZmVyZW5jZXMoY2FyZFJlZmVyZW5jZXNbMF0pO1xuICAgICAgICBldmVudHMucHVibGlzaCgnb3Blbk1vZGlmeVF1ZXJ5JywgY2FyZFJlZmVyZW5jZXMpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9vcGVuTW9kaWZ5Rm9ybShpdGVtVmFsdWVzKSB7XG4gICAgICAgIF9maWxsRm9ybVZhbHVlcyhpdGVtVmFsdWVzKTtcbiAgICAgICAgX3Nob3dGb3JtKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jb25maXJtSW5wdXQoKSB7XG4gICAgICAgIF9oaWRlRm9ybSgpO1xuICAgICAgICBsZXQgZm9ybVZhbHVlcyA9IF9idW5kbGVGb3JtVmFsdWVzKCk7XG4gICAgICAgIF9jbGVhckZvcm1WYWx1ZXMoKTtcbiAgICAgICAgX3JlbW92ZVByb2plY3RPcHRpb25zKCk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NvbmZpcm1JbnB1dCcsIGZvcm1WYWx1ZXMpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NhbmNlbElucHV0KCkge1xuICAgICAgICBfaGlkZUZvcm0oKTtcbiAgICAgICAgX2NsZWFyRm9ybVZhbHVlcygpO1xuICAgICAgICBfcmVtb3ZlUHJvamVjdE9wdGlvbnMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3Nob3dEZWxldGVQcm9qZWN0Q29uZmlybWF0aW9uKGNhcmRJRCkge1xuICAgICAgICBkZWxldGVDb25maXJtQWxlcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIC8vIGhlbHBlciBtZXRob2RzICBcbiAgICBmdW5jdGlvbiBfc2V0Rm9ybVJlZmVyZW5jZXMoZm9ybVJlZmVyZW5jZSkge1xuICAgICAgICBpZiAoZm9ybVJlZmVyZW5jZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBfY3VycmVudEZvcm0gPSBwcm9qZWN0Rm9ybTtcbiAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAncHJvamVjdCc7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybVJlZmVyZW5jZSA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICBfY3VycmVudEZvcm0gPSB0YXNrRm9ybTtcbiAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAndGFzayc7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zaG93Rm9ybSgpIHtcbiAgICAgICAgX2N1cnJlbnRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5Qcm9qZWN0T3B0aW9uc1F1ZXJ5JywgJycpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9oaWRlRm9ybSgpIHtcbiAgICAgICAgX2N1cnJlbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2ZpbGxGb3JtVmFsdWVzKHZhbHVlcykge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgICAgIGlmIChfY3VycmVudEZvcm1UeXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHZhbHVlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChfY3VycmVudEZvcm1UeXBlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHZhbHVlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzWzFdID09PSAnc2luZ2xldG9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0lucHV0c1sxXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZXNbMV0gPT09ICdjaGVja2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrSW5wdXRzWzJdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnB1dHNbaSArIDFdLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfYnVuZGxlRm9ybVZhbHVlcygpIHtcbiAgICAgICAgbGV0IGZvcm1WYWx1ZXMgPSBbXTtcbiAgICAgICAgaWYgKF9jdXJyZW50Rm9ybSA9PT0gcHJvamVjdEZvcm0pIHtcbiAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaCgncHJvamVjdCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAocHJvamVjdElucHV0cy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2gocHJvamVjdElucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhgcHJvamVjdCBmb3JtVmFsdWVzOiBbJHtmb3JtVmFsdWVzfV1gKTtcbiAgICAgICAgfSBlbHNlIGlmIChfY3VycmVudEZvcm0gPT09IHRhc2tGb3JtKSB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goJ3Rhc2snKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRhc2tJbnB1dHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgaSA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKHRhc2tJbnB1dHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDEgfHwgaSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza0lucHV0c1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2godGFza0lucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGB0YXNrIGZvcm1WYWx1ZXM6IFske2Zvcm1WYWx1ZXN9XWApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZm9ybVZhbHVlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NsZWFyRm9ybVZhbHVlcygpIHtcbiAgICAgICAgaWYgKF9jdXJyZW50Rm9ybSA9PT0gcHJvamVjdEZvcm0pIHtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9ICcnKTtcbiAgICAgICAgfSBlbHNlIGlmIChfY3VycmVudEZvcm0gPT09IHRhc2tGb3JtKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXNrSW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgoKGkgPiAyKSAmJiAoaSA8IDYpKSB8fCAoaSA+IDYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnB1dHNbaV0udmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgX2N1cnJlbnRGb3JtID0gJyc7XG4gICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAnJztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3JlbmRlclByb2plY3RPcHRpb25zKGFycmF5KSB7XG4gICAgICAgIGxldCBwcm9qZWN0RHJvcGRvd24gPSB0YXNrSW5wdXRzWzddO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhcnJheS5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGFycmF5W2ldWzBdO1xuICAgICAgICAgICAgbGV0IHByb2plY3RJRCA9IGFycmF5W2ldWzFdXG4gICAgICAgICAgICBsZXQgb3B0aW9uUHJvamVjdCA9IG9wdGlvbihwcm9qZWN0SUQsIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIHByb2plY3REcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb25Qcm9qZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3JlbW92ZVByb2plY3RPcHRpb25zKCkge1xuICAgICAgICB3aGlsZSAodGFza0lucHV0c1s3XS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0YXNrSW5wdXRzWzddLnJlbW92ZUNoaWxkKHRhc2tJbnB1dHNbN10ubGFzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBiaW5kIGV2ZW50c1xuICAgIGNvbmZpcm1EZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZUNvbmZpcm1BbGVydC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGxldCBwcm9qZWN0Q2FyZElEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnByb2plY3QuY2FyZCcpLmlkO1xuICAgICAgICBldmVudHMucHVibGlzaCgnZGVsZXRlUHJvamVjdCcsIHByb2plY3RDYXJkSUQpOyAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9KVxuICAgIGNhbmNlbERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlQ29uZmlybUFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KTtcbiAgICBjb25maXJtQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBfY29uZmlybUlucHV0KGUpO1xuICAgIH0pKTtcbiAgICBjYW5jZWxCdXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgX2NhbmNlbElucHV0KCk7XG4gICAgfSkpO1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrQ3JlYXRlSXRlbScsIF9vcGVuQ3JlYXRlRm9ybSk7ICAgLy8gcHVibGlzaGluZyBmcm9tIGRvbURpc3BsYXkuanMgKGNyZWF0ZVRhc2tCdXR0b24gY2xpY2tFdmVudClcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja01vZGlmeUl0ZW0nLCBfb3Blbk1vZGlmeVF1ZXJ5KTsgIC8vIHB1Ymxpc2hpbmcgZnJvbSBkb21EaXNwbGF5LmpzIChfcmVuZGVySGVhZGVycygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2Nsb3NlTW9kaWZ5UXVlcnknLCBfb3Blbk1vZGlmeUZvcm0pOyAgLy8gcHVibGlzaGluZyBmcm9tIGxpYnJhcnkuanMgKF9xdWVyeUl0ZW0oKSk7XG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xvc2VQcm9qZWN0T3B0aW9uc1F1ZXJ5JywgX3JlbmRlclByb2plY3RPcHRpb25zKTsgIC8vIHB1Ymxpc2hpbmcgZnJvbSBsaWJyYXJ5LmpzIChfcXVlcnlQcm9qZWN0TmFtZUlEKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tEZWxldGVQcm9qZWN0JywgX3Nob3dEZWxldGVQcm9qZWN0Q29uZmlybWF0aW9uKTsgICAgLy8gcHVibGlzaGluZyBmcm9tIGRvbURpc3BsYXkuanMgKF9yZW5kZXJQcm9qZWN0SGVhZGVyKCkpXG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zOyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzJztcblxuLy8gKiAnYmFja2VuZCcgbWFuYWdlciBtb2R1bGUgY29udGFpbmluZyBwcm9qZWN0L3Rhc2sgc3RhdGVzLCBmYWN0b3JpZXMsICYgbWV0aG9kc1xuXG5jb25zdCBsaWJyYXJ5ID0gKCgpID0+IHtcbiAgICAvLyBkeW5hbWljIGRhdGFcbiAgICBsZXQgX3Byb2plY3RMaWJyYXJ5ID0gW107XG4gICAgbGV0IF90YXNrTGlicmFyeSA9IFtdO1xuICAgIGxldCBfdGFza0NvdW50ZXIgPSAwO1xuICAgIGxldCBfcHJvamVjdENvdW50ZXIgPSAwO1xuXG4gICAgLy8vLyBjYWNoZSBET01cblxuICAgIC8vIGZhY3Rvcmllc1xuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb2plY3RJRCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICdwcm9qZWN0JztcbiAgICAgICAgICAgIHRoaXMuaWQgPSBwcm9qZWN0SUQ7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldHRlcnNcbiAgICAgICAgc2V0IHNldFRpdGxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFRhc2sge1xuICAgICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICAgIGNvbnN0cnVjdG9yKHRhc2tJRCwgcHJvamVjdElELCB0YXNrVHlwZSwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWUsIHRhc2tQcmlvcml0eSwgdGFza1RhZ3MsIHRhc2tJdGVtcykge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRhc2tJRDtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdGFza1R5cGU7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGFza1RpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IHRhc2tEdWU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgICAgICAgICAgdGhpcy50YWdzID0gdGFza1RhZ3M7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnY2hlY2tsaXN0JykgeyAgICAvLyA/IGlzIHRoaXMgbmVjZXNzYXJ5IGlmIHRhc2tJdGVtcyBhcmUgcHVzaGVkIGluZGl2aWR1YWxseSA/XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRhc2tJdGVtczsgICAgICAgICAvLyA/IGFzIHRoZXkgYXJlIGNyZWF0ZWQgP1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldHRlcnNcbiAgICAgICAgc2V0IHNldFRpdGxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0RHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmR1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldFByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXRQcm9qZWN0SUQodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9qZWN0SUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RJRCA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0VGFncyh2YWx1ZUFycmF5KSB7XG4gICAgICAgICAgICBpZiAodmFsdWVBcnJheSAhPT0gdGhpcy50YWdzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWdzID0gdmFsdWVBcnJheTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXR0ZXJzXG4gICAgZnVuY3Rpb24gX3F1ZXJ5SXRlbShjYXJkUmVmZXJlbmNlcykgeyAgIC8vIFRPRE8gcmVkdWNlIHJlcGV0aXRpb25cbiAgICAgICAgbGV0IGxpYnJhcnlSZWZlcmVuY2UgPSBjYXJkUmVmZXJlbmNlc1swXTtcbiAgICAgICAgbGV0IGl0ZW1SZWZlcmVuY2UgPSBjYXJkUmVmZXJlbmNlc1sxXTtcblxuICAgICAgICBpZiAobGlicmFyeVJlZmVyZW5jZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IChfcHJvamVjdExpYnJhcnkubGVuZ3RoKTsgcCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBpdGVtUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gX3Byb2plY3RMaWJyYXJ5W3BdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVZhbHVlQXJyYXkgPSBbaXRlbS5pZCwgaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbl07XG4gICAgICAgICAgICAgICAgICAgIC8vLy8gY29uc29sZS5sb2coaXRlbVZhbHVlQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbG9zZU1vZGlmeVF1ZXJ5JywgaXRlbVZhbHVlQXJyYXkpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnlSZWZlcmVuY2UgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gaXRlbVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IF90YXNrTGlicmFyeVt0XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1WYWx1ZUFycmF5ID0gW2l0ZW0uaWQsIGl0ZW0udHlwZSwgaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5LCBpdGVtLnByb2plY3RJRCwgaXRlbS50YWdzXTtcbiAgICAgICAgICAgICAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhpdGVtVmFsdWVBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbG9zZU1vZGlmeVF1ZXJ5JywgaXRlbVZhbHVlQXJyYXkpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3F1ZXJ5UHJvamVjdE5hbWVzSURzKCkge1xuICAgICAgICBsZXQgbmFtZUlEQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgbmFtZUlEQXJyYXkucHVzaChbX3Byb2plY3RMaWJyYXJ5W3BdLnRpdGxlLCBfcHJvamVjdExpYnJhcnlbcF0uaWRdKTtcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnY2xvc2VQcm9qZWN0T3B0aW9uc1F1ZXJ5JywgbmFtZUlEQXJyYXkpIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICB9XG5cbiAgICAvLyBzZXR0ZXIgbWFuYWdlclxuICAgIGZ1bmN0aW9uIF9zZXRJdGVtVmFsdWVzKGZvcm1WYWx1ZXMpIHtcbiAgICAgICAgbGV0IGxpYnJhcnlSZWZlcmVuY2UgPSBmb3JtVmFsdWVzWzBdO1xuICAgICAgICBsZXQgaXRlbVJlZmVyZW5jZSA9IGZvcm1WYWx1ZXNbMV07XG4gICAgICAgIGZvcm1WYWx1ZXMuc3BsaWNlKDAsIDIpOyAgICAvLyBbdGl0bGUsIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gW3R5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgJ3ByaW9yaXR5JywgJ3Byb2plY3RJRCcsIFt0YWdzXV1cbiAgICAgICAgY29uc29sZS5sb2cobGlicmFyeVJlZmVyZW5jZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1SZWZlcmVuY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtVmFsdWVzKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChsaWJyYXJ5UmVmZXJlbmNlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIGlmICghX3Byb2plY3RMaWJyYXJ5W2l0ZW1SZWZlcmVuY2VdKSB7XG4gICAgICAgICAgICAgICAgX2NyZWF0ZVByb2plY3QoZm9ybVZhbHVlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9tb2RpZnlQcm9qZWN0KGl0ZW1SZWZlcmVuY2UsIGZvcm1WYWx1ZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnlSZWZlcmVuY2UgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgaWYgKCFfdGFza0xpYnJhcnlbaXRlbVJlZmVyZW5jZV0pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SUQgICAgICAgICAgICAgICAgdHlwZSAgICAgICAgICAgdGl0bGUgICAgICAgICAgZGVzY3JpcHRpb24gICAgZHVlRGF0ZSAgICAgICAgcHJpb3JpdHkgICAgICAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgICAgICAgICBsZXQgZm9ybVZhbHVlc1Jlb3JkZXJlZCA9IFtwYXJzZUludChmb3JtVmFsdWVzWzVdKSwgZm9ybVZhbHVlc1swXSwgZm9ybVZhbHVlc1sxXSwgZm9ybVZhbHVlc1syXSwgZm9ybVZhbHVlc1szXSwgcGFyc2VJbnQoZm9ybVZhbHVlc1s0XSksIGZvcm1WYWx1ZXNbNl1dXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRhc2soZm9ybVZhbHVlc1Jlb3JkZXJlZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9tb2RpZnlUYXNrKGl0ZW1SZWZlcmVuY2UsIGZvcm1WYWx1ZXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBzZXR0ZXIgaGVscGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfY3JlYXRlUHJvamVjdChhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICBsZXQgX2lkID0gX3Byb2plY3RDb3VudGVyO1xuICAgICAgICBsZXQgX25ld1Byb2plY3QgPSBuZXcgUHJvamVjdChfaWQsIC4uLmF0dHJpYnV0ZUFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coX25ld1Byb2plY3QpO1xuICAgICAgICBfcHJvamVjdExpYnJhcnkucHVzaChfbmV3UHJvamVjdCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdwcm9qZWN0Q3JlYXRlZCcsIF9uZXdQcm9qZWN0KTsgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qc1xuICAgICAgICBfcHJvamVjdENvdW50ZXIrKztcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NyZWF0ZVRhc2soYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgbGV0IF9pZCA9IF90YXNrQ291bnRlcjtcbiAgICAgICAgbGV0IF9uZXdUYXNrID0gbmV3IFRhc2soX2lkLCAuLi5hdHRyaWJ1dGVBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9uZXdUYXNrKTtcbiAgICAgICAgX3Rhc2tMaWJyYXJ5LnB1c2goX25ld1Rhc2spO1xuICAgICAgICBldmVudHMucHVibGlzaCgndGFza0NyZWF0ZWQnLCBfbmV3VGFzayk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qc1xuICAgICAgICBfdGFza0NvdW50ZXIrKztcbiAgICB9XG4gICAgZnVuY3Rpb24gX21vZGlmeVByb2plY3QodGFyZ2V0SXRlbUlELCBhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZUFycmF5KVxuICAgICAgICBsZXQgcHJvamVjdEluc3RhbmNlID0gX3Byb2plY3RMaWJyYXJ5W3RhcmdldEl0ZW1JRF07XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2cocHJvamVjdEluc3RhbmNlKTtcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAoYXR0cmlidXRlQXJyYXkubGVuZ3RoKTsgYSsrKSB7XG4gICAgICAgICAgICBzd2l0Y2goYSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluc3RhbmNlLnNldFRpdGxlID0gYXR0cmlidXRlQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluc3RhbmNlLnNldERlc2NyaXB0aW9uID0gYXR0cmlidXRlQXJyYXlbMV07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHByb2plY3RJbnN0YW5jZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9tb2RpZnlUYXNrKHRhcmdldEl0ZW1JRCwgYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVBcnJheSk7XG4gICAgICAgIGxldCB0YXNrSW5zdGFuY2UgPSBfdGFza0xpYnJhcnlbdGFyZ2V0SXRlbUlEXTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyh0YXNrSW5zdGFuY2UpO1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IChhdHRyaWJ1dGVBcnJheS5sZW5ndGgpOyBhKyspIHtcbiAgICAgICAgICAgIHN3aXRjaChhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0VGl0bGUgPSBhdHRyaWJ1dGVBcnJheVsxXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2UuZGVzY3JpcHRpb24gPSBhdHRyaWJ1dGVBcnJheVsyXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0RHVlRGF0ZSA9IGF0dHJpYnV0ZUFycmF5WzNdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5zZXRQcmlvcml0eSA9IHBhcnNlSW50KGF0dHJpYnV0ZUFycmF5WzRdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0UHJvamVjdElEID0gcGFyc2VJbnQoYXR0cmlidXRlQXJyYXlbNV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5zZXRUYWdzID0gYXR0cmlidXRlQXJyYXlbNl07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgLy8gZGVsZXRlIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJvamVjdChjYXJkSUQpIHtcbiAgICAgICAgbGV0IGNhcmRSZWZlcmVuY2VzID0gY2FyZElELnNwbGl0KCdfJyk7XG4gICAgICAgIGxldCBwcm9qZWN0UmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMV07XG4gICAgICAgIGxldCBwcm9qZWN0TG9vcFN0YXJ0ID0gX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAobGV0IHAgPSBwcm9qZWN0TG9vcFN0YXJ0OyBwID4gLTE7IHAtLSkge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBwcm9qZWN0UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Byb2plY3RMaWJyYXJ5LnNwbGljZShwLCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGxldCB0YXNrTG9vcFN0YXJ0ID0gX3Rhc2tMaWJyYXJ5Lmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAobGV0IHQgPSB0YXNrTG9vcFN0YXJ0OyB0ID4gLTE7IHQtLSkge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5wcm9qZWN0SUQgPT0gcHJvamVjdFJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIF90YXNrTGlicmFyeS5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhfcHJvamVjdExpYnJhcnkpO1xuICAgICAgICBjb25zb2xlLmxvZyhfdGFza0xpYnJhcnkpO1xuICAgICAgICAvLyAqIHNlbmQgbm90aWZpY2F0aW9uIHRvIHVwZGF0ZSBzaWRlYmFyIChyZW1vdmUgZGVsZXRlZCBwcm9qZWN0LCBzZWxlY3QgbmV3IHByb2plY3QgdmlldylcbiAgICAgICAgLy8gKiAtLS0+IHdpbGwgaW4gdHVybiBub3RpZnkgZGlzcGxheSB0byByZWZyZXNoXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZW1vdmVQcm9qZWN0RnJvbURpc3BsYXknLCBjYXJkSUQpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2RlbGV0ZVRhc2soY2FyZElEKSB7XG4gICAgICAgIGxldCBjYXJkUmVmZXJlbmNlcyA9IGNhcmRJRC5zcGxpdCgnXycpO1xuICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGNhcmRSZWZlcmVuY2VzWzFdO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IHRhc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0UmVmZXJlbmNlID0gX3Rhc2tMaWJyYXJ5W3RdLnByb2plY3RJRDtcbiAgICAgICAgICAgICAgICBfdGFza0xpYnJhcnkuc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coX3Rhc2tMaWJyYXJ5KTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZVRhc2tGcm9tRGlzcGxheScsIGNhcmRJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIGJpbmQgZXZlbnRzXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlUHJvamVjdCcsIF9jcmVhdGVQcm9qZWN0KTsgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKGluaXREZWZhdWx0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY3JlYXRlVGFzaycsIF9jcmVhdGVUYXNrKTsgICAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoaW5pdERlZmF1bHQoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdvcGVuTW9kaWZ5UXVlcnknLCBfcXVlcnlJdGVtKTsgICAgLy8gcHVibGlzaGVkIGZyb20gZm9ybXMuanMgKF9vcGVuTW9kaWZ5UXVlcnkoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdvcGVuUHJvamVjdE9wdGlvbnNRdWVyeScsIF9xdWVyeVByb2plY3ROYW1lc0lEcykgIC8vIHB1Ymxpc2hlZCBmcm9tIGZvcm1zLmpzIChfc2hvd0Zvcm0oKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdkZWxldGVQcm9qZWN0JywgX2RlbGV0ZVByb2plY3QpOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBmb3Jtcy5qcyAoY29uZmlybURlbGV0ZUJ1dHRvbiBldmVudExpc3RlbmVyKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZVRhc2snLCBfZGVsZXRlVGFzayk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGRvbURpc3BsYXkuanMgKF9yZW5kZXJJdGVtSGVhZGVycygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NvbmZpcm1JbnB1dCcsIF9zZXRJdGVtVmFsdWVzKTsgLy9wdWJsaXNoZWQgZnJvbSBmb3Jtcy5qcyAoX2NvbmZpcm1JbnB1dCgpKVxuXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbGF5b3V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3R5cG8uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc2hhcGluZy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jb2xvcnMuY3NzJztcblxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9zY3JpcHRzL2Rpc3BsYXknO1xuaW1wb3J0IGRvbURpc3BsYXkgZnJvbSAnLi9zY3JpcHRzL2RvbURpc3BsYXknO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vc2NyaXB0cy9mb3Jtcyc7XG4vLyBpbXBvcnQgc2lkZWJhciBmcm9tICcuL3NjcmlwdHMvc2lkZWJhcic7XG4vLyBpbXBvcnQgZG9tU2lkZWJhciBmcm9tICcuc2NyaXB0cy9kb21TaWRlYmFyJztcbmltcG9ydCBsaWJyYXJ5IGZyb20gJy4vc2NyaXB0cy9saWJyYXJ5JztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG4vLyBtYW5hZ2VyIGZ1bmN0aW9uIGhlcmVcblxuLy8gISBtb3ZlIHZ2diBpbnRvIGRvbURpc3BsYXlcbmxldCB2aWV3UHJlZnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1wcmVmcycpO1xubGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG50aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB2aWV3UHJlZnMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufSk7XG5cbi8vIGFjdGlvbnNcbmRpc3BsYXkuaW5pdERlZmF1bHQoKTtcbmV2ZW50cy52aWV3RXZlbnRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9