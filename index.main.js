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

        _renderProjectCardContents(projectCard, project);

        projectContainer.appendChild(projectCard);

        _fillTaskCounter('');
    }
    const _renderProjectCardContents = function(targetCard, item) {
        let projectHeader = _renderProjectHeader(item.title);
        let projectDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(item.description, '.description');

        targetCard.appendChild(projectHeader);
        targetCard.appendChild(projectDescription);
    }

    // task managers
    const _renderTask = function(task) {
        let cardID = '#task_' + task.id;
        let taskCard;
        if (task.type === 'singleton') {
            taskCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.singleton', cardID)
            _renderSingletonCardContents(taskCard, task);
        } else if (task.type === 'checklist') {
            taskCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.checklist', cardID);
            _renderChecklistCardContents(taskCard, task);
        };
        taskContainer.appendChild(taskCard);

        _fillTaskCounter('+');
    }
    const _renderSingletonCardContents = function(targetCard, item) {
        let singletonCheckmark = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)(item.id);
        let taskCardContent = _renderSingletonInfo(item.id, item.title, item.dueDate, item.description, item.priority, item.tags);

        targetCard.appendChild(singletonCheckmark);
        targetCard.appendChild(taskCardContent);
    }
    const _renderChecklistCardContents = function(targetCard, item) {
        let checklistHeader = _renderChecklistHeader(item.title, item.dueDate);
        let checklistDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(item.description, '.description');
        let checklistContent = _renderChecklistContent(targetCard.id, item.items);
        let checklistDetails = _renderTaskDetails(item.priority, item.tags);

        targetCard.appendChild(checklistHeader);
        targetCard.appendChild(checklistDescription);
        targetCard.appendChild(checklistContent);
        targetCard.appendChild(checklistDetails);
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
    const _renderSingletonInfo = function(id, title, dueDate, description, priority, tags) {
        let divContent = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.content');

        let taskHeader = _renderSingletonHeader(id, title, dueDate);
        let taskDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(description, '.description');
        let taskDetails = _renderTaskDetails(priority, tags);

        divContent.appendChild(taskHeader);
        divContent.appendChild(taskDescription);
        divContent.appendChild(taskDetails);

        return divContent;
    }
    const _renderChecklistContent = function(parentID, items) {
        let divChecks = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.checks');

        let ulItem = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.ul)('', '');
        if (items === undefined) {
            let checklistItem = _renderChecklistItem('', parentID, itemCount);
            ulItem.appendChild(checklistItem);
        } else {
            let itemCount = 0;
            for (let i = 0; i < (items.length); i++) {
                let checklistItem = _renderChecklistItem(items[i], parentID, itemCount);
                ulItem.appendChild(checklistItem);
                itemCount++;
            };
        };
        divChecks.appendChild(ulItem);
        
        return divChecks;
    }
    const _renderChecklistItem = function(content, taskReference, count) {
        let liItemID = `#${taskReference}__li_${count}`;
        let liItem = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.li)('', liItemID);
    
        let checklistItemID = `${taskReference}__checkbox_${count}`; // # not needed vvv
        let checkbox = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)(checklistItemID);  // sets ID directly via default object prototype methods
        let labelItem = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)(content, checklistItemID, '');
        let checklistItemControls = _renderChecklistItemControls(checklistItemID);

        // * checklist item modify/delete events

        liItem.appendChild(checkbox);
        liItem.appendChild(labelItem);
        liItem.appendChild(checklistItemControls);

        return liItem;
    }
    const _renderChecklistItemControls = function(checkID) {
        let divControls = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.checklist-item-controls');

        let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.task', '.modify');
        let spanDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('X', '.delete');

        // * checklist item modify/delete events
        spanModify.addEventListener('click', (e) => {
            console.log('call alert() to modify');
        });
        spanDelete.addEventListener('click', (e) => {
            // * publish event with data to library...
            // * in library, index into task items and delete...                    NEED: task id, checklist position
            // * from library, publish event to domDisplay.js...
            // * in domDisplay.js, call method to remove checklistItem from dom     NEED: li id
            console.log('delete checklistItem');
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteChecklistItem', checkID);    // subscribed by library.js
        });

        divControls.appendChild(spanModify);
        divControls.appendChild(spanDelete);

        return divControls;
    }
    const _renderTaskDetails = function(priority, tags) {
        let divDetails = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.details');

        let divPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(priority, '.priority');
        let divTags = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(tags, '.tags');

        divDetails.appendChild(divPriority);
        divDetails.appendChild(divTags);

        return divDetails;
    }

    // other methods
    function _updateItem(itemInstance) {
        //// console.log(itemInstance);
        if (itemInstance.type === 'project') {
            let cardID = `project_${itemInstance.id}`;
            let cardElement = document.getElementById(cardID);
            _deleteItemContent(cardID);
            _renderProjectCardContents(cardElement, itemInstance);
        } else if (itemInstance.type === 'singleton' || itemInstance.type === 'checklist') {
            let cardID = `task_${itemInstance.id}`;
            let cardElement = document.getElementById(cardID);
            _deleteItemContent(cardID);
            if (itemInstance.type === 'singleton') {
                _renderSingletonCardContents(cardElement, itemInstance);
            } else if (itemInstance.type === 'checklist') {
                _renderChecklistCardContents(cardElement, itemInstance);
            };
        };
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
    function _deleteTaskCard(id) {
        let targetTask = document.getElementById(id);
        taskContainer.removeChild(targetTask)
        _fillTaskCounter('-');
    }
    function _deleteItemContent(id) {
        let targetProject = document.getElementById(id);
        while (targetProject.children.length > 0) {
            targetProject.removeChild(targetProject.lastChild);
        };
    }
    function _deleteChecklistItem(id) {
        let liContainer = document.querySelector(`input#${id}`).parentElement;
        let ulContainer = liContainer.parentElement
        ulContainer.removeChild(liContainer);
    }
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
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeTaskFromDisplay', _deleteTaskCard); // published from library.js (_deleteTask())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeProjectFromDisplay', _clearDisplay) // published from library.js (_deleteProject())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('itemModified', _updateItem);    // published from library.js (_modifyItems())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeChecklistItemFromDisplay', _deleteChecklistItem)    // published from library.js (_deleteChecklistItem())
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
        //// console.log(libraryReference);
        //// console.log(itemReference);
        //// console.log(formValues);
        
        if (libraryReference === 'project') {
            if (!_projectLibrary.some(item => item.id == itemReference)) { // ! untested, written to match task conditional below vvv
                _createProject(formValues);
            } else {
                _modifyProject(itemReference, formValues);
            };

        } else if (libraryReference === 'task') {
            if(!_taskLibrary.some(item => item.id == itemReference)) {
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
        //// console.log(_newProject);
        _projectLibrary.push(_newProject);
        _projectCounter++;

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('projectCreated', _newProject);  // subscribed by display.js
    }
    function _createTask(attributeArray) {
        let _id = _taskCounter;
        let _newTask = new Task(_id, ...attributeArray);
        //// console.log(_newTask);
        _taskLibrary.push(_newTask);
        _taskCounter++;

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('taskCreated', _newTask);    // subscribed by display.js
    }
    function _modifyProject(targetItemID, attributeArray) {
        //// console.log(attributeArray)
        let projectInstance;
        for (let p = 0; p < (_projectLibrary.length); p++) {
            if (_projectLibrary[p].id == targetItemID) {
                projectInstance = _projectLibrary[p];
            };
        };
        //// console.log(projectInstance)
        for (let a = 0; a < (attributeArray.length); a++) {
            switch(a) {
                case 0:
                    projectInstance.setTitle = attributeArray[0];
                    break;
                case 1:
                    projectInstance.setDescription = attributeArray[1];
            };
        };
        //// console.log('modify project');
        //// console.log(projectInstance);

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('itemModified', projectInstance);  // subscribed by domDisplay.js
    }
    function _modifyTask(targetItemID, attributeArray) {
        //// console.log(attributeArray);
        let taskInstance;
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == targetItemID) {
                taskInstance = _taskLibrary[t];
            };
        };
        //// console.log(taskInstance);
        for (let a = 1; a < (attributeArray.length - 1); a++) {
            // [type, title, description, dueDate, 'priority', 'projectID', [tags]]
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
                    break;
                case 6:
                    taskInstance.setTags = attributeArray[6];
            };
        };
        //// console.log('modify task');
        //// console.log(taskInstance);

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('itemModified', taskInstance);  // subscribed by domDisplay.js
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
        //// console.log(_projectLibrary);
        //// console.log(_taskLibrary);

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
        //// console.log(_taskLibrary);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeTaskFromDisplay', cardID);    // subscribed by domDisplay.js
    }
    function _deleteChecklistItem(checkID) {
        let taskReference = checkID.split('__')[0].split('_')[1];
        let checkReference = checkID.split('__')[1].split('_')[1];
        for (let t = 0; t < (_taskLibrary.length); t++) {
            if (_taskLibrary[t].id == taskReference) {
                console.log(_taskLibrary[t].items);
                _taskLibrary[t].items.splice(checkReference, 1);
                console.log(_taskLibrary[t].items);
            };
        };

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeChecklistItemFromDisplay', checkID);  // subscribed by domDisplay.js
    }

    // bind events
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('createProject', _createProject);  // published from display.js (initDefault())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('createTask', _createTask);    // published from display.js (initDefault())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openModifyQuery', _queryItem);    // published from forms.js (_openModifyQuery())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openProjectOptionsQuery', _queryProjectNamesIDs)  // published from forms.js (_showForm())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('deleteProject', _deleteProject);    // published from forms.js (confirmDeleteButton eventListener)
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('deleteTask', _deleteTask);    // published from domDisplay.js (_renderItemHeaders())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('confirmInput', _setItemValues); //published from forms.js (_confirmInput())
    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clickDeleteChecklistItem', _deleteChecklistItem)  // published from domDisplay.js (_renderChecklistItemControls())

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBLFFBQVEsdURBQWMsOENBQThDO0FBQ3BFOztBQUVBO0FBQ0EsSUFBSSx5REFBZ0Isb0NBQW9DO0FBQ3hELElBQUkseURBQWdCLGdDQUFnQztBQUNwRCxJQUFJLHlEQUFnQixvQ0FBb0M7QUFDeEQsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSx5REFBZ0Isc0NBQXNDO0FBQzFELElBQUkseURBQWdCLGdDQUFnQztBQUNwRCxJQUFJLHlEQUFnQixrQ0FBa0M7QUFDdEQsSUFBSSx5REFBZ0I7O0FBRXBCLENBQUM7Ozs7OztVQzVSRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0M7QUFDRjtBQUNHO0FBQ0Q7O0FBRVc7QUFDTTtBQUNWO0FBQ3BDO0FBQ0E7QUFDd0M7QUFDVjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxvRUFBbUI7QUFDbkIsMERBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2NvbG9ycy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9sYXlvdXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc2hhcGluZy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90eXBvLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvY29sb3JzLmNzcz9iMGQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcz9kODEyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zaGFwaW5nLmNzcz8wZTljIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdHlwby5jc3M/NjBlYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kb21EaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyLFxcbiN2aWV3LXByZWZzLFxcbiNkaXNwbGF5LFxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdmlldy1wcmVmcyxcXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7OztJQUlJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyLFxcbiN2aWV3LXByZWZzLFxcbiNkaXNwbGF5LFxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdmlldy1wcmVmcyxcXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLXBhZDogMWVtO1xcbiAgICAtLW1haW4tZ2FwOiAxZW07XFxuXFxuICAgIC0tbWVkLXBhZDogMC41ZW07XFxuXFxuICAgIC0tc21hbGwtcGFkOiAwLjI1ZW07XFxuICAgIC0tc21hbGwtZ2FwOiAwLjI1ZW07XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4gICAgbGkge1xcbiAgICAgICAgcGFkZGluZzogMGVtO1xcbiAgICB9XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuICAgIGhlYWRlcixcXG4gICAgI3ZpZXctcHJlZnMsXFxuICAgICNkaXNwbGF5IHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkKTtcXG4gICAgfVxcblxcblxcbi8qIC0tLSBWSUVXIFBSRUZTICovXFxuLyogLS0tIFZJRVcgUFJFRlMgKi9cXG4vKiAtLS0gVklFVyBQUkVGUyAqL1xcblxcbiN2aWV3LXByZWZzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoY2FsYyh2YXIoLS1tYWluLXBhZCkgKiAyKSArIDEuNjVlbSk7IGxlZnQ6IDBlbTtcXG59XFxuXFxuICAgICN2aWV3LXByZWZzIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1nYXApO1xcbiAgICB9XFxuXFxuLyogLS0tIEZPUk1TICovXFxuLyogLS0tIEZPUk1TICovXFxuLyogLS0tIEZPUk1TICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTsgbGVmdDo1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuICAgIC5kcm9wZG93bnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAgICAgLmRyb3Bkb3ducyBkaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIH1cXG5cXG4jcHJvamVjdC1idXR0b25zLFxcbiN0YXNrLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyICBoZWFkZXInXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSBkaXNwbGF5JztcXG5cXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuXFxuICAgICAgICBoZWFkZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG5cXG4gICAgICAgICNkaXNwbGF5IHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmhlYWRlciB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC5jYXJkLFxcbiAgICAgICAgICAgICAgICAudGFzay1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1tZWQtcGFkKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zaW5nbGV0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc21hbGwtcGFkKSAqIDEpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXOztBQUVYO0lBQ0ksZUFBZTtJQUNmLGVBQWU7O0lBRWYsZ0JBQWdCOztJQUVoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7O0FBRUo7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7SUFFSTs7O1FBR0ksd0JBQXdCO0lBQzVCOzs7QUFHSixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLG1CQUFtQjs7QUFFbkI7SUFDSSxrQkFBa0I7SUFDbEIsNkNBQTZDLEVBQUUsU0FBUztBQUM1RDs7SUFFSTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztBQUVKLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYzs7QUFFZDtJQUNJLGtCQUFrQjtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQ0FBZ0M7O0lBRWhDLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjs7UUFFSTtZQUNJLGFBQWE7WUFDYixpQkFBaUI7O1lBRWpCLFVBQVU7UUFDZDs7QUFFUjs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCOztJQUVaO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUI7OENBQ3NDOztRQUV0QyxlQUFlO1FBQ2YsV0FBVztJQUNmOztBQUVKLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsbUJBQW1COztRQUVYO1lBQ0ksaUJBQWlCOztZQUVqQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtRQUN2Qjs7QUFFUixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7UUFFWjtZQUNJLGtCQUFrQjtRQUN0Qjs7WUFFSTtnQkFDSSxhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIscUJBQXFCOztnQkFFckIsWUFBWTtZQUNoQjs7Z0JBRUk7b0JBQ0ksYUFBYTtvQkFDYiwyQkFBMkI7b0JBQzNCLG1CQUFtQjtvQkFDbkIscUJBQXFCOztvQkFFckIsV0FBVztnQkFDZjs7b0JBRUk7d0JBQ0ksa0JBQWtCO29CQUN0Qjs7Z0JBRUo7O29CQUVJLHVCQUF1QjtnQkFDM0I7O2dCQUVBO29CQUNJLGFBQWE7b0JBQ2IsMkJBQTJCO2dCQUMvQjs7b0JBRUk7d0JBQ0ksa0JBQWtCO29CQUN0Qjs7Z0JBRUo7b0JBQ0ksYUFBYTtvQkFDYix1QkFBdUI7Z0JBQzNCOztvQkFFSTt3QkFDSSw4QkFBOEI7b0JBQ2xDOztvQkFFQTt3QkFDSSxzQ0FBc0M7b0JBQzFDOztvQkFFQTt3QkFDSSxhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIscUJBQXFCOzt3QkFFckIsV0FBVztvQkFDZjs7d0JBRUk7NEJBQ0ksYUFBYTs0QkFDYixxQkFBcUI7d0JBQ3pCOztnQkFFUjtvQkFDSSxhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIscUJBQXFCO2dCQUN6Qjs7b0JBRUk7d0JBQ0ksYUFBYTt3QkFDYixtQkFBbUI7b0JBQ3ZCOzt3QkFFSTs0QkFDSSxrQkFBa0I7d0JBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLXBhZDogMWVtO1xcbiAgICAtLW1haW4tZ2FwOiAxZW07XFxuXFxuICAgIC0tbWVkLXBhZDogMC41ZW07XFxuXFxuICAgIC0tc21hbGwtcGFkOiAwLjI1ZW07XFxuICAgIC0tc21hbGwtZ2FwOiAwLjI1ZW07XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4gICAgbGkge1xcbiAgICAgICAgcGFkZGluZzogMGVtO1xcbiAgICB9XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuICAgIGhlYWRlcixcXG4gICAgI3ZpZXctcHJlZnMsXFxuICAgICNkaXNwbGF5IHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkKTtcXG4gICAgfVxcblxcblxcbi8qIC0tLSBWSUVXIFBSRUZTICovXFxuLyogLS0tIFZJRVcgUFJFRlMgKi9cXG4vKiAtLS0gVklFVyBQUkVGUyAqL1xcblxcbiN2aWV3LXByZWZzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IGNhbGMoY2FsYyh2YXIoLS1tYWluLXBhZCkgKiAyKSArIDEuNjVlbSk7IGxlZnQ6IDBlbTtcXG59XFxuXFxuICAgICN2aWV3LXByZWZzIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1nYXApO1xcbiAgICB9XFxuXFxuLyogLS0tIEZPUk1TICovXFxuLyogLS0tIEZPUk1TICovXFxuLyogLS0tIEZPUk1TICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTsgbGVmdDo1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuICAgIC5kcm9wZG93bnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAgICAgLmRyb3Bkb3ducyBkaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIH1cXG5cXG4jcHJvamVjdC1idXR0b25zLFxcbiN0YXNrLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnaGVhZGVyICBoZWFkZXInXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSBkaXNwbGF5JztcXG5cXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuXFxuICAgICAgICBoZWFkZXIge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG4vKiAtLS0tLS0tIERJU1BMQVkgKi9cXG5cXG4gICAgICAgICNkaXNwbGF5IHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmhlYWRlciB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC5jYXJkLFxcbiAgICAgICAgICAgICAgICAudGFzay1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1tZWQtcGFkKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5zaW5nbGV0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNtYWxsLXBhZCk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuc2luZ2xldG9uIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc21hbGwtcGFkKSAqIDEpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbmRlciBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplIG9uIGBoMWAgJiAnaDInIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIEdST1VQSU5HIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveCAqL1xcbi8qIDIuIHNob3cgb3ZlcmZsb3cgaW4gRWRnZSwgSUUgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovIC8qKiBjb25mbGljdCB3LyBgKi1zZWxlY3RvcmA/ICovXFxuICAgIGhlaWdodDogMHB4OyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qIDEuIGNvcnJlY3QgaW5oZXJpdGFuY2UsIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIGNvcnJlY3QgdGhlIG9mZiBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2VycyAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IGluaGVyaXRhbmNlLCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiBjb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogcHJldmVudCBhbGwgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIGxpbmUgaGVpZ2h0ICovXFxuLyogaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuICBcXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBjbGVhbiB1cCBib3JkZXJzIG9uIHRhYmxlcyAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyogY29ycmVjdCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuICBcXG4vKiAxLiBjb3JyZWN0IHRleHQgd3JhcHBpbmcgaW4gRWRnZSwgSUUgKi9cXG4vKiAyLiBjb3JyZWN0IGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRSAqL1xcbi8qIDMuIHJlbW92ZSBwYWRkaW5nIHNvIGRldnMgYXJlbid0IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8tb3V0ICovXFxuLyogICAgYGZpZWxkc2V0YGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBPcGVyYSAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiByZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMCAqL1xcbi8qIDIuIHJlbW92ZSBwYWRkaW5nIGluIElFIDEwICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogY29ycmVjdCBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50LCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IG9mZiBhcHBlYXJhbmNlIGluIENocm9tZSwgU2FmYXJpICovXFxuLyogMi4gY29ycmVjdCBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaSAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgU2FmYXJpIG9uIG1hY09TICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiAxLiBjaGFuZ2UgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcbi8qIDIuIGNoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaSAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcblxcbi8qIElOVEVSQUNUSVZFID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgRmlyZWZveCAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKyAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUNBQXFDOztBQUVyQzs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLFdBQVc7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QUVBLG1FQUFtRTs7QUFFbkU7O0lBRUksWUFBWTtBQUNoQjs7QUFFQSxnREFBZ0Q7QUFDaEQsdUNBQXVDOztBQUV2QztJQUNJLDZCQUE2QixFQUFFLE1BQU07SUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUNoQzs7QUFFQSxvREFBb0Q7O0FBRXBEO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLGdFQUFnRTtBQUNoRSxxREFBcUQ7O0FBRXJEO0lBQ0ksMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN6Qjs7O0FBR0EsMENBQTBDOztBQUUxQyxpREFBaUQ7O0FBRWpEO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSx3Q0FBd0M7O0FBRXhDO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQSxtQ0FBbUM7O0FBRW5DLGtDQUFrQzs7QUFFbEM7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLGlDQUFpQzs7QUFFakM7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVuZGVyIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRSAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogY29ycmVjdCBmb250IHNpemUgb24gYGgxYCAmICdoMicgZWxlbWVudHMgKi9cXG4vKiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWAgY29udGV4dHMgKi9cXG4vKiBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBwYCBlbGVtZW50cyBhY3Jvc3MgYnJvd3NlcnMgKi9cXG5cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuLyogR1JPVVBJTkcgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94ICovXFxuLyogMi4gc2hvdyBvdmVyZmxvdyBpbiBFZGdlLCBJRSAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi8gLyoqIGNvbmZsaWN0IHcvIGAqLXNlbGVjdG9yYD8gKi9cXG4gICAgaGVpZ2h0OiAwcHg7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyogMS4gY29ycmVjdCBpbmhlcml0YW5jZSwgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gY29ycmVjdCB0aGUgb2ZmIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcblxcbi8qIFRFWFQtTEVWRUwgU0VNQU5USUNTID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgZ3JheSBiZyBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIDEuIHJlbW92ZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gKi9cXG4vKiAyLiBhZGQgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIFNhZmFyaSAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBTYWZhcmkgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIDEuIGNvcnJlY3QgaW5oZXJpdGFuY2UsIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIGNvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBwcmV2ZW50IGFsbCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgbGluZSBoZWlnaHQgKi9cXG4vKiBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG4gIFxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIGNsZWFuIHVwIGJvcmRlcnMgb24gdGFibGVzICovXFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKiBjb3JyZWN0IHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG4gIFxcbi8qIDEuIGNvcnJlY3QgdGV4dCB3cmFwcGluZyBpbiBFZGdlLCBJRSAqL1xcbi8qIDIuIGNvcnJlY3QgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFICovXFxuLyogMy4gcmVtb3ZlIHBhZGRpbmcgc28gZGV2cyBhcmVuJ3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVyby1vdXQgKi9cXG4vKiAgICBgZmllbGRzZXRgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIHJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiAxLiBhZGQgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwICovXFxuLyogMi4gcmVtb3ZlIHBhZGRpbmcgaW4gSUUgMTAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBjb3JyZWN0IGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQsIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZSAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIDEuIGNvcnJlY3Qgb2ZmIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgKi9cXG4vKiAyLiBjb3JyZWN0IG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lLCBTYWZhcmkgb24gbWFjT1MgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIDEuIGNoYW5nZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuLyogMi4gY2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyogSU5URVJBQ1RJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBGaXJlZm94ICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2VycyAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcblxcbi8qIE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGFwaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hhcGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHlwby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IF9ldmVudHMgPSB7fTtcblxuICAgIC8vIHN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTVUJTQ1JJQklORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICAvLyB1bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZSgoX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQVUJMSVNISU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHMsXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuXG4vLyAqIG1hbmFnZXMgaW50ZXJmYWNlIGJldHdlZW4gZGlzcGxheSBET00gJiBsaWJyYXJ5IGFycmF5c1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF9zYW1wbGVQcm9qZWN0VmFsdWVzID0gW1snVW5zb3J0ZWQnLCBcIlRoaXMgaXMgeW91ciB0YXNrcycgZGVmYXVsdCBsb2NhdGlvbi4gQW55IHRhc2tzIHdpdGhvdXQgYSBwcm9qZWN0IGxpdmUgaGVyZS5cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICBsZXQgX3NhbXBsZVRhc2tWYWx1ZXMgPSBbWzAsICdzaW5nbGV0b24nLCAnVGFzayAxJywgJ3RoaXMgaXMgYSBzYW1wbGUgdGFzaycsICcyMDAxLTAxLTAxJywgMywgJyN0YWcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzAsICdzaW5nbGV0b24nLCAnVGFzayAyJywgJ3RoaXMgaXMgIzInLCAnMjAwMi0wMi0wMicsIDIsICcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzAsICdjaGVja2xpc3QnLCAnVGFzayAzJywgJ3RoaXMgaXMgYSBjaGVja2xpc3QnLCAnMjAwMy0wMy0wMycsIDEsICcjdGlnICN0b2cnLCBbJ2l0ZW0gMScsICdpdGVtIDInLCAnaXRlbSAzJ11dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgbGV0IF9jdXJyZW50UHJvamVjdCA9IDA7XG5cbiAgICAvLyBtYW5hZ2Vyc1xuICAgIGZ1bmN0aW9uIGluaXREZWZhdWx0KCkge1xuICAgICAgICBfcHVibGlzaENyZWF0ZVByb2plY3RFdmVudChfc2FtcGxlUHJvamVjdFZhbHVlc1swXSk7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF9zYW1wbGVUYXNrVmFsdWVzLmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgX3B1Ymxpc2hDcmVhdGVUYXNrRXZlbnQoX3NhbXBsZVRhc2tWYWx1ZXNbdF0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfcHVibGlzaENyZWF0ZVByb2plY3RFdmVudChwcm9qZWN0VmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjcmVhdGVQcm9qZWN0JywgcHJvamVjdFZhbHVlcyk7IC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcHVibGlzaENyZWF0ZVRhc2tFdmVudCh0YXNrVmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjcmVhdGVUYXNrJywgdGFza1ZhbHVlcyk7ICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9wdWJsaXNoUmVuZGVyRGlzcGxheUV2ZW50cyhvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC50eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZW5kZXJQcm9qZWN0Jywgb2JqZWN0KTsgICAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgICAgIH07XG4gICAgICAgIGlmIChvYmplY3QudHlwZSA9PT0gJ3NpbmdsZXRvbicgfHwgb2JqZWN0LnR5cGUgPT09ICdjaGVja2xpc3QnKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncmVuZGVyVGFzaycsIG9iamVjdCk7ICAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9tb2RpZnlEaXNwbGF5KCkge1xuICAgICAgICAvLyBpbmRleCBpbnRvIERPTSBmb3Igc3BlY2lmaWMgaXRlbUlELCBzZXQgbmV3IGNvbnRlbnRcbiAgICB9XG5cbiAgICAvLyBiaW5kIGV2ZW50c1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RDcmVhdGVkJywgX3B1Ymxpc2hSZW5kZXJEaXNwbGF5RXZlbnRzKTsgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2NyZWF0ZVByb2plY3QoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCd0YXNrQ3JlYXRlZCcsIF9wdWJsaXNoUmVuZGVyRGlzcGxheUV2ZW50cyk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVUYXNrKCkpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0RGVmYXVsdCwgICAvLyB1c2VkIGJ5IGluZGV4LmpzXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGl2LCBoMSwgaDIsIHVsLCBsaSwgc3BhbiwgaW5wdXQsIGxhYmVsfSBmcm9tICcuL2VsZW1lbnRzJztcblxuLy8gKiBmYWN0b3J5IG1vZHVsZSBmb3IgZGlzcGxheSBET00gZ3JvdXBpbmdzXG5cbmNvbnN0IGRvbURpc3BsYXkgPSAoKCkgPT4ge1xuICAgIC8vIGRhdGFcbiAgICBsZXQgX3Rhc2tDb3VudGVyID0gMDtcblxuICAgIC8vIGNhY2hlIERPTVxuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKTtcbiAgICBsZXQgdGFza0NvdW50U3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50YWxseSBzcGFuJyk7XG4gICAgbGV0IGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudGFzay1jb250cm9scyBkaXYuY3JlYXRlJyk7XG5cbiAgICAvLyBwcm9qZWN0IG1hbmFnZXJcbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgbGV0IGNhcmRJRCA9ICcjcHJvamVjdF8nICsgcHJvamVjdC5pZDtcbiAgICAgICAgbGV0IHByb2plY3RDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLnByb2plY3QnLCBjYXJkSUQpO1xuXG4gICAgICAgIF9yZW5kZXJQcm9qZWN0Q2FyZENvbnRlbnRzKHByb2plY3RDYXJkLCBwcm9qZWN0KTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcblxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCcnKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclByb2plY3RDYXJkQ29udGVudHMgPSBmdW5jdGlvbih0YXJnZXRDYXJkLCBpdGVtKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGVyID0gX3JlbmRlclByb2plY3RIZWFkZXIoaXRlbS50aXRsZSk7XG4gICAgICAgIGxldCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkaXYoaXRlbS5kZXNjcmlwdGlvbiwgJy5kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIHRhcmdldENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG4gICAgICAgIHRhcmdldENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICAvLyB0YXNrIG1hbmFnZXJzXG4gICAgY29uc3QgX3JlbmRlclRhc2sgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGxldCBjYXJkSUQgPSAnI3Rhc2tfJyArIHRhc2suaWQ7XG4gICAgICAgIGxldCB0YXNrQ2FyZDtcbiAgICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ3NpbmdsZXRvbicpIHtcbiAgICAgICAgICAgIHRhc2tDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLnNpbmdsZXRvbicsIGNhcmRJRClcbiAgICAgICAgICAgIF9yZW5kZXJTaW5nbGV0b25DYXJkQ29udGVudHModGFza0NhcmQsIHRhc2spO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sudHlwZSA9PT0gJ2NoZWNrbGlzdCcpIHtcbiAgICAgICAgICAgIHRhc2tDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLmNoZWNrbGlzdCcsIGNhcmRJRCk7XG4gICAgICAgICAgICBfcmVuZGVyQ2hlY2tsaXN0Q2FyZENvbnRlbnRzKHRhc2tDYXJkLCB0YXNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cbiAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignKycpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyU2luZ2xldG9uQ2FyZENvbnRlbnRzID0gZnVuY3Rpb24odGFyZ2V0Q2FyZCwgaXRlbSkge1xuICAgICAgICBsZXQgc2luZ2xldG9uQ2hlY2ttYXJrID0gaW5wdXQoaXRlbS5pZCk7XG4gICAgICAgIGxldCB0YXNrQ2FyZENvbnRlbnQgPSBfcmVuZGVyU2luZ2xldG9uSW5mbyhpdGVtLmlkLCBpdGVtLnRpdGxlLCBpdGVtLmR1ZURhdGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0ucHJpb3JpdHksIGl0ZW0udGFncyk7XG5cbiAgICAgICAgdGFyZ2V0Q2FyZC5hcHBlbmRDaGlsZChzaW5nbGV0b25DaGVja21hcmspO1xuICAgICAgICB0YXJnZXRDYXJkLmFwcGVuZENoaWxkKHRhc2tDYXJkQ29udGVudCk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2xpc3RDYXJkQ29udGVudHMgPSBmdW5jdGlvbih0YXJnZXRDYXJkLCBpdGVtKSB7XG4gICAgICAgIGxldCBjaGVja2xpc3RIZWFkZXIgPSBfcmVuZGVyQ2hlY2tsaXN0SGVhZGVyKGl0ZW0udGl0bGUsIGl0ZW0uZHVlRGF0ZSk7XG4gICAgICAgIGxldCBjaGVja2xpc3REZXNjcmlwdGlvbiA9IGRpdihpdGVtLmRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBjaGVja2xpc3RDb250ZW50ID0gX3JlbmRlckNoZWNrbGlzdENvbnRlbnQodGFyZ2V0Q2FyZC5pZCwgaXRlbS5pdGVtcyk7XG4gICAgICAgIGxldCBjaGVja2xpc3REZXRhaWxzID0gX3JlbmRlclRhc2tEZXRhaWxzKGl0ZW0ucHJpb3JpdHksIGl0ZW0udGFncyk7XG5cbiAgICAgICAgdGFyZ2V0Q2FyZC5hcHBlbmRDaGlsZChjaGVja2xpc3RIZWFkZXIpO1xuICAgICAgICB0YXJnZXRDYXJkLmFwcGVuZENoaWxkKGNoZWNrbGlzdERlc2NyaXB0aW9uKTtcbiAgICAgICAgdGFyZ2V0Q2FyZC5hcHBlbmRDaGlsZChjaGVja2xpc3RDb250ZW50KTtcbiAgICAgICAgdGFyZ2V0Q2FyZC5hcHBlbmRDaGlsZChjaGVja2xpc3REZXRhaWxzKTtcbiAgICB9XG5cbiAgICAvLyBoZWxwZXIgZmFjdG9yaWVzXG4gICAgY29uc3QgX3JlbmRlclByb2plY3RIZWFkZXIgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgICAgICBsZXQgZGl2SGVhZGVyID0gZGl2KCcnLCAnLmhlYWRlcicpO1xuXG4gICAgICAgIGxldCBoMVRpdGxlID0gaDEodGl0bGUsICcudGl0bGUnKTtcbiAgICAgICAgbGV0IHNwYW5Nb2RpZnkgPSBzcGFuKCcuLi4nLCAnLnByb2plY3QnLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgc3BhbkRlbGV0ZSA9IHNwYW4oJ1gnLCAnLmRlbGV0ZScpO1xuXG4gICAgICAgIC8vICogcHJvamVjdCBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICBzcGFuTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBzcGFuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBjYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlUHJvamVjdCcsIGNhcmRJRCk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChzcGFuTW9kaWZ5KTtcbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKHNwYW5EZWxldGUpO1xuXG4gICAgICAgIHJldHVybiBkaXZIZWFkZXI7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJTaW5nbGV0b25IZWFkZXIgPSBmdW5jdGlvbihpZCwgdGl0bGUsIGR1ZURhdGUpIHtcbiAgICAgICAgbGV0IGRpdkhlYWRlciA9IGRpdignJywgJy5oZWFkZXInKTtcblxuICAgICAgICBsZXQgaDJUaXRsZUNvbnRlbnQgPSBoMih0aXRsZSwgJycpO1xuICAgICAgICBsZXQgbGFiZWxDaGVja21hcmtUaXRsZSA9IGxhYmVsKCcnLCBpZCwgJy50aXRsZScpO1xuICAgICAgICBsYWJlbENoZWNrbWFya1RpdGxlLmFwcGVuZENoaWxkKGgyVGl0bGVDb250ZW50KTtcblxuICAgICAgICBsZXQgc3BhbkRhdGUgPSBzcGFuKGR1ZURhdGUsICcuZGF0ZScpO1xuICAgICAgICBsZXQgc3Bhbk1vZGlmeSA9IHNwYW4oJy4uLicsICcudGFzaycsICcubW9kaWZ5Jyk7XG4gICAgICAgIGxldCBzcGFuRGVsZXRlID0gc3BhbignWCcsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBzaW5nbGV0b24gbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgc3Bhbk1vZGlmeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tNb2RpZnlJdGVtJywgZSk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcbiAgICAgICAgc3BhbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICAgICAgbGV0IHRhc2tDYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2RlbGV0ZVRhc2snLCB0YXNrQ2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGxhYmVsQ2hlY2ttYXJrVGl0bGUpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3BhbkRhdGUpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3Bhbk1vZGlmeSk7XG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChzcGFuRGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tsaXN0SGVhZGVyID0gZnVuY3Rpb24odGl0bGUsIGR1ZURhdGUpIHtcbiAgICAgICAgbGV0IGRpdkhlYWRlciA9IGRpdignJywgJy5oZWFkZXInKTtcblxuICAgICAgICBsZXQgaDJUaXRsZSA9IGgyKHRpdGxlLCAnLnRpdGxlJyk7XG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IHNwYW4oZHVlRGF0ZSwgJy5kYXRlJyk7XG4gICAgICAgIGxldCBzcGFuTW9kaWZ5ID0gc3BhbignLi4uJywgJy50YXNrJywgJy5tb2RpZnknKTtcbiAgICAgICAgbGV0IHNwYW5EZWxldGUgPSBzcGFuKCdYJywgJy5kZWxldGUnKTtcblxuICAgICAgICAvLyAqIGNoZWNrbGlzdCBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICBzcGFuTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBzcGFuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICBsZXQgY2FyZElEID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmQnKS5pZDtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdkZWxldGVUYXNrJywgY2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGgyVGl0bGUpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3BhbkRhdGUpO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3Bhbk1vZGlmeSk7XG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChzcGFuRGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyU2luZ2xldG9uSW5mbyA9IGZ1bmN0aW9uKGlkLCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCB0YWdzKSB7XG4gICAgICAgIGxldCBkaXZDb250ZW50ID0gZGl2KCcnLCAnLmNvbnRlbnQnKTtcblxuICAgICAgICBsZXQgdGFza0hlYWRlciA9IF9yZW5kZXJTaW5nbGV0b25IZWFkZXIoaWQsIHRpdGxlLCBkdWVEYXRlKTtcbiAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRpdihkZXNjcmlwdGlvbiwgJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgdGFza0RldGFpbHMgPSBfcmVuZGVyVGFza0RldGFpbHMocHJpb3JpdHksIHRhZ3MpO1xuXG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG5cbiAgICAgICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2xpc3RDb250ZW50ID0gZnVuY3Rpb24ocGFyZW50SUQsIGl0ZW1zKSB7XG4gICAgICAgIGxldCBkaXZDaGVja3MgPSBkaXYoJycsICcuY2hlY2tzJyk7XG5cbiAgICAgICAgbGV0IHVsSXRlbSA9IHVsKCcnLCAnJyk7XG4gICAgICAgIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbSA9IF9yZW5kZXJDaGVja2xpc3RJdGVtKCcnLCBwYXJlbnRJRCwgaXRlbUNvdW50KTtcbiAgICAgICAgICAgIHVsSXRlbS5hcHBlbmRDaGlsZChjaGVja2xpc3RJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpdGVtQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoaXRlbXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW0gPSBfcmVuZGVyQ2hlY2tsaXN0SXRlbShpdGVtc1tpXSwgcGFyZW50SUQsIGl0ZW1Db3VudCk7XG4gICAgICAgICAgICAgICAgdWxJdGVtLmFwcGVuZENoaWxkKGNoZWNrbGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIGl0ZW1Db3VudCsrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZGl2Q2hlY2tzLmFwcGVuZENoaWxkKHVsSXRlbSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGl2Q2hlY2tzO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tsaXN0SXRlbSA9IGZ1bmN0aW9uKGNvbnRlbnQsIHRhc2tSZWZlcmVuY2UsIGNvdW50KSB7XG4gICAgICAgIGxldCBsaUl0ZW1JRCA9IGAjJHt0YXNrUmVmZXJlbmNlfV9fbGlfJHtjb3VudH1gO1xuICAgICAgICBsZXQgbGlJdGVtID0gbGkoJycsIGxpSXRlbUlEKTtcbiAgICBcbiAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1JRCA9IGAke3Rhc2tSZWZlcmVuY2V9X19jaGVja2JveF8ke2NvdW50fWA7IC8vICMgbm90IG5lZWRlZCB2dnZcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gaW5wdXQoY2hlY2tsaXN0SXRlbUlEKTsgIC8vIHNldHMgSUQgZGlyZWN0bHkgdmlhIGRlZmF1bHQgb2JqZWN0IHByb3RvdHlwZSBtZXRob2RzXG4gICAgICAgIGxldCBsYWJlbEl0ZW0gPSBsYWJlbChjb250ZW50LCBjaGVja2xpc3RJdGVtSUQsICcnKTtcbiAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1Db250cm9scyA9IF9yZW5kZXJDaGVja2xpc3RJdGVtQ29udHJvbHMoY2hlY2tsaXN0SXRlbUlEKTtcblxuICAgICAgICAvLyAqIGNoZWNrbGlzdCBpdGVtIG1vZGlmeS9kZWxldGUgZXZlbnRzXG5cbiAgICAgICAgbGlJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgbGlJdGVtLmFwcGVuZENoaWxkKGxhYmVsSXRlbSk7XG4gICAgICAgIGxpSXRlbS5hcHBlbmRDaGlsZChjaGVja2xpc3RJdGVtQ29udHJvbHMpO1xuXG4gICAgICAgIHJldHVybiBsaUl0ZW07XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2xpc3RJdGVtQ29udHJvbHMgPSBmdW5jdGlvbihjaGVja0lEKSB7XG4gICAgICAgIGxldCBkaXZDb250cm9scyA9IGRpdignJywgJy5jaGVja2xpc3QtaXRlbS1jb250cm9scycpO1xuXG4gICAgICAgIGxldCBzcGFuTW9kaWZ5ID0gc3BhbignLi4uJywgJy50YXNrJywgJy5tb2RpZnknKTtcbiAgICAgICAgbGV0IHNwYW5EZWxldGUgPSBzcGFuKCdYJywgJy5kZWxldGUnKTtcblxuICAgICAgICAvLyAqIGNoZWNrbGlzdCBpdGVtIG1vZGlmeS9kZWxldGUgZXZlbnRzXG4gICAgICAgIHNwYW5Nb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbGwgYWxlcnQoKSB0byBtb2RpZnknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNwYW5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gKiBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YSB0byBsaWJyYXJ5Li4uXG4gICAgICAgICAgICAvLyAqIGluIGxpYnJhcnksIGluZGV4IGludG8gdGFzayBpdGVtcyBhbmQgZGVsZXRlLi4uICAgICAgICAgICAgICAgICAgICBORUVEOiB0YXNrIGlkLCBjaGVja2xpc3QgcG9zaXRpb25cbiAgICAgICAgICAgIC8vICogZnJvbSBsaWJyYXJ5LCBwdWJsaXNoIGV2ZW50IHRvIGRvbURpc3BsYXkuanMuLi5cbiAgICAgICAgICAgIC8vICogaW4gZG9tRGlzcGxheS5qcywgY2FsbCBtZXRob2QgdG8gcmVtb3ZlIGNoZWNrbGlzdEl0ZW0gZnJvbSBkb20gICAgIE5FRUQ6IGxpIGlkXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGNoZWNrbGlzdEl0ZW0nKTtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0RlbGV0ZUNoZWNrbGlzdEl0ZW0nLCBjaGVja0lEKTsgICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdkNvbnRyb2xzLmFwcGVuZENoaWxkKHNwYW5Nb2RpZnkpO1xuICAgICAgICBkaXZDb250cm9scy5hcHBlbmRDaGlsZChzcGFuRGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gZGl2Q29udHJvbHM7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJUYXNrRGV0YWlscyA9IGZ1bmN0aW9uKHByaW9yaXR5LCB0YWdzKSB7XG4gICAgICAgIGxldCBkaXZEZXRhaWxzID0gZGl2KCcnLCAnLmRldGFpbHMnKTtcblxuICAgICAgICBsZXQgZGl2UHJpb3JpdHkgPSBkaXYocHJpb3JpdHksICcucHJpb3JpdHknKTtcbiAgICAgICAgbGV0IGRpdlRhZ3MgPSBkaXYodGFncywgJy50YWdzJyk7XG5cbiAgICAgICAgZGl2RGV0YWlscy5hcHBlbmRDaGlsZChkaXZQcmlvcml0eSk7XG4gICAgICAgIGRpdkRldGFpbHMuYXBwZW5kQ2hpbGQoZGl2VGFncyk7XG5cbiAgICAgICAgcmV0dXJuIGRpdkRldGFpbHM7XG4gICAgfVxuXG4gICAgLy8gb3RoZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIF91cGRhdGVJdGVtKGl0ZW1JbnN0YW5jZSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGl0ZW1JbnN0YW5jZSk7XG4gICAgICAgIGlmIChpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBsZXQgY2FyZElEID0gYHByb2plY3RfJHtpdGVtSW5zdGFuY2UuaWR9YDtcbiAgICAgICAgICAgIGxldCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRJRCk7XG4gICAgICAgICAgICBfZGVsZXRlSXRlbUNvbnRlbnQoY2FyZElEKTtcbiAgICAgICAgICAgIF9yZW5kZXJQcm9qZWN0Q2FyZENvbnRlbnRzKGNhcmRFbGVtZW50LCBpdGVtSW5zdGFuY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1JbnN0YW5jZS50eXBlID09PSAnc2luZ2xldG9uJyB8fCBpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ2NoZWNrbGlzdCcpIHtcbiAgICAgICAgICAgIGxldCBjYXJkSUQgPSBgdGFza18ke2l0ZW1JbnN0YW5jZS5pZH1gO1xuICAgICAgICAgICAgbGV0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZElEKTtcbiAgICAgICAgICAgIF9kZWxldGVJdGVtQ29udGVudChjYXJkSUQpO1xuICAgICAgICAgICAgaWYgKGl0ZW1JbnN0YW5jZS50eXBlID09PSAnc2luZ2xldG9uJykge1xuICAgICAgICAgICAgICAgIF9yZW5kZXJTaW5nbGV0b25DYXJkQ29udGVudHMoY2FyZEVsZW1lbnQsIGl0ZW1JbnN0YW5jZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW1JbnN0YW5jZS50eXBlID09PSAnY2hlY2tsaXN0Jykge1xuICAgICAgICAgICAgICAgIF9yZW5kZXJDaGVja2xpc3RDYXJkQ29udGVudHMoY2FyZEVsZW1lbnQsIGl0ZW1JbnN0YW5jZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY2xlYXJEaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHRhc2tDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCctJyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVUYXNrQ2FyZChpZCkge1xuICAgICAgICBsZXQgdGFyZ2V0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXJnZXRUYXNrKVxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCctJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVJdGVtQ29udGVudChpZCkge1xuICAgICAgICBsZXQgdGFyZ2V0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgd2hpbGUgKHRhcmdldFByb2plY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0UHJvamVjdC5yZW1vdmVDaGlsZCh0YXJnZXRQcm9qZWN0Lmxhc3RDaGlsZCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVDaGVja2xpc3RJdGVtKGlkKSB7XG4gICAgICAgIGxldCBsaUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0IyR7aWR9YCkucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IHVsQ29udGFpbmVyID0gbGlDb250YWluZXIucGFyZW50RWxlbWVudFxuICAgICAgICB1bENvbnRhaW5lci5yZW1vdmVDaGlsZChsaUNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9maWxsVGFza0NvdW50ZXIob3BlcmF0b3IpIHtcbiAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnKycpIHtcbiAgICAgICAgICAgIF90YXNrQ291bnRlcisrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09PSAnLScpIHtcbiAgICAgICAgICAgIF90YXNrQ291bnRlci0tO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tDb3VudFNwYW4udGV4dENvbnRlbnQgPSBfdGFza0NvdW50ZXI7XG4gICAgfVxuXG4gICAgLy8gYmluZCBldmVudHNcbiAgICAvLyAqIG1vZGlmeSAmIGRlbGV0ZSBjbGljayBldmVudHMgaW4gX3JlbmRlckhlYWRlcigpJ3MgXl5eXG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrQ3JlYXRlSXRlbScsICd0YXNrJyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgfSk7XG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVuZGVyUHJvamVjdCcsIF9yZW5kZXJQcm9qZWN0KSAgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKF9yZW5kZXJEaXNwbGF5KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVuZGVyVGFzaycsIF9yZW5kZXJUYXNrKTsgICAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlckRpc3BsYXkoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVUYXNrRnJvbURpc3BsYXknLCBfZGVsZXRlVGFza0NhcmQpOyAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlVGFzaygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZVByb2plY3RGcm9tRGlzcGxheScsIF9jbGVhckRpc3BsYXkpIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9kZWxldGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnaXRlbU1vZGlmaWVkJywgX3VwZGF0ZUl0ZW0pOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfbW9kaWZ5SXRlbXMoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVDaGVja2xpc3RJdGVtRnJvbURpc3BsYXknLCBfZGVsZXRlQ2hlY2tsaXN0SXRlbSkgICAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2RlbGV0ZUNoZWNrbGlzdEl0ZW0oKSlcbn0pKCk7IiwiLy8gKiBmYWN0b3J5IGNsYXNzIGZvciBiYXNlLWxldmVsIERPTSBlbGVtZW50c1xuXG4vLyBkYXRhXG5sZXQgX2F0dHJpYnV0ZXMgPSBbXTtcbmxldCBlbGVtZW50O1xuXG4vLyBiYXNpYyBoZWxwZXIgZmFjdG9yaWVzXG5jb25zdCBkaXYgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBzcGFuID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGgxID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBoMiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgdWwgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGxpID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBpbnB1dCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWxlbWVudC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBlbGVtZW50LmlkID0gU3RyaW5nKGlkKTtcbiAgICBlbGVtZW50Lm5hbWUgPSBTdHJpbmcoaWQpO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3Qgb3B0aW9uID0gZnVuY3Rpb24odmFsdWUsIGNvbnRlbnQpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgbGFiZWwgPSBmdW5jdGlvbihjb250ZW50LCBmb3JSZWZlcmVuY2UsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LmZvciA9IFN0cmluZyhmb3JSZWZlcmVuY2UpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhdHRyaWJ1dGVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzW2ldWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZGl2IGFzIGRlZmF1bHQsIHNwYW4sIGgxLCBoMiwgdWwsIGxpLCBpbnB1dCwgb3B0aW9uLCBsYWJlbH07IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHsgb3B0aW9uIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8vICogbWFuYWdlcyBpbnRlcmZhY2UgYmV0d2VlbiBmb3JtIERPTSAmIGxpYnJhcnkgYXJyYXlzXG5cbmNvbnN0IGZvcm1zID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF9jdXJyZW50Rm9ybTtcbiAgICBsZXQgX2N1cnJlbnRGb3JtVHlwZTtcblxuICAgIC8vIGNhY2hlIERPTVxuICAgIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcbiAgICBsZXQgZGVsZXRlQ29uZmlybUFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1jb25maXJtJyk7XG4gICAgbGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xuXG4gICAgbGV0IHByb2plY3RJbnB1dHMgPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGxldCB0YXNrSW5wdXRzID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0Jyk7XG5cbiAgICBsZXQgY29uZmlybURlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5kZWxldGUtY29uZmlybScpO1xuICAgIGxldCBjYW5jZWxEZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uZGVsZXRlLWNhbmNlbCcpO1xuICAgIGxldCBjb25maXJtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5jb25maXJtJyk7XG4gICAgbGV0IGNhbmNlbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uY2FuY2VsJyk7XG5cbiAgICAvLyBtYW5hZ2VyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfb3BlbkNyZWF0ZUZvcm0oZm9ybVJlZmVyZW5jZSkge1xuICAgICAgICBfc2V0Rm9ybVJlZmVyZW5jZXMoZm9ybVJlZmVyZW5jZSk7XG4gICAgICAgIF9zaG93Rm9ybSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfb3Blbk1vZGlmeVF1ZXJ5KGV2ZW50KSB7XG4gICAgICAgIGxldCBjYXJkUmVmZXJlbmNlcyA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJyk7XG4gICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhjYXJkUmVmZXJlbmNlc1swXSk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuTW9kaWZ5UXVlcnknLCBjYXJkUmVmZXJlbmNlcyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX29wZW5Nb2RpZnlGb3JtKGl0ZW1WYWx1ZXMpIHtcbiAgICAgICAgX2ZpbGxGb3JtVmFsdWVzKGl0ZW1WYWx1ZXMpO1xuICAgICAgICBfc2hvd0Zvcm0oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NvbmZpcm1JbnB1dCgpIHtcbiAgICAgICAgX2hpZGVGb3JtKCk7XG4gICAgICAgIGxldCBmb3JtVmFsdWVzID0gX2J1bmRsZUZvcm1WYWx1ZXMoKTtcbiAgICAgICAgX2NsZWFyRm9ybVZhbHVlcygpO1xuICAgICAgICBfcmVtb3ZlUHJvamVjdE9wdGlvbnMoKTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnY29uZmlybUlucHV0JywgZm9ybVZhbHVlcyk7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY2FuY2VsSW5wdXQoKSB7XG4gICAgICAgIF9oaWRlRm9ybSgpO1xuICAgICAgICBfY2xlYXJGb3JtVmFsdWVzKCk7XG4gICAgICAgIF9yZW1vdmVQcm9qZWN0T3B0aW9ucygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2hvd0RlbGV0ZVByb2plY3RDb25maXJtYXRpb24oY2FyZElEKSB7XG4gICAgICAgIGRlbGV0ZUNvbmZpcm1BbGVydC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyIG1ldGhvZHMgIFxuICAgIGZ1bmN0aW9uIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlKSB7XG4gICAgICAgIGlmIChmb3JtUmVmZXJlbmNlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgICAgIF9jdXJyZW50Rm9ybSA9IHByb2plY3RGb3JtO1xuICAgICAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICdwcm9qZWN0JztcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtUmVmZXJlbmNlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIF9jdXJyZW50Rm9ybSA9IHRhc2tGb3JtO1xuICAgICAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICd0YXNrJztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3Nob3dGb3JtKCkge1xuICAgICAgICBfY3VycmVudEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBldmVudHMucHVibGlzaCgnb3BlblByb2plY3RPcHRpb25zUXVlcnknLCAnJyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2hpZGVGb3JtKCkge1xuICAgICAgICBfY3VycmVudEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZmlsbEZvcm1WYWx1ZXModmFsdWVzKSB7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgaWYgKF9jdXJyZW50Rm9ybVR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dHNbaV0udmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKF9jdXJyZW50Rm9ybVR5cGUgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnB1dHNbaV0udmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNbMV0gPT09ICdzaW5nbGV0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrSW5wdXRzWzFdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlc1sxXSA9PT0gJ2NoZWNrbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJbnB1dHNbMl0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0lucHV0c1tpICsgMV0udmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9idW5kbGVGb3JtVmFsdWVzKCkge1xuICAgICAgICBsZXQgZm9ybVZhbHVlcyA9IFtdO1xuICAgICAgICBpZiAoX2N1cnJlbnRGb3JtID09PSBwcm9qZWN0Rm9ybSkge1xuICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChwcm9qZWN0SW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChwcm9qZWN0SW5wdXRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBwcm9qZWN0IGZvcm1WYWx1ZXM6IFske2Zvcm1WYWx1ZXN9XWApO1xuICAgICAgICB9IGVsc2UgaWYgKF9jdXJyZW50Rm9ybSA9PT0gdGFza0Zvcm0pIHtcbiAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaCgndGFzaycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGFza0lucHV0cy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCBpID4gMikge1xuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2godGFza0lucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMSB8fCBpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrSW5wdXRzW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaCh0YXNrSW5wdXRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vLy8gY29uc29sZS5sb2coYHRhc2sgZm9ybVZhbHVlczogWyR7Zm9ybVZhbHVlc31dYCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmb3JtVmFsdWVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY2xlYXJGb3JtVmFsdWVzKCkge1xuICAgICAgICBpZiAoX2N1cnJlbnRGb3JtID09PSBwcm9qZWN0Rm9ybSkge1xuICAgICAgICAgICAgcHJvamVjdElucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpO1xuICAgICAgICB9IGVsc2UgaWYgKF9jdXJyZW50Rm9ybSA9PT0gdGFza0Zvcm0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRhc2tJbnB1dHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCgoaSA+IDIpICYmIChpIDwgNikpIHx8IChpID4gNikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0lucHV0c1tpXS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBfY3VycmVudEZvcm0gPSAnJztcbiAgICAgICAgX2N1cnJlbnRGb3JtVHlwZSA9ICcnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVuZGVyUHJvamVjdE9wdGlvbnMoYXJyYXkpIHtcbiAgICAgICAgbGV0IHByb2plY3REcm9wZG93biA9IHRhc2tJbnB1dHNbN107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGFycmF5Lmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gYXJyYXlbaV1bMF07XG4gICAgICAgICAgICBsZXQgcHJvamVjdElEID0gYXJyYXlbaV1bMV1cbiAgICAgICAgICAgIGxldCBvcHRpb25Qcm9qZWN0ID0gb3B0aW9uKHByb2plY3RJRCwgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvblByb2plY3QpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVtb3ZlUHJvamVjdE9wdGlvbnMoKSB7XG4gICAgICAgIHdoaWxlICh0YXNrSW5wdXRzWzddLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRhc2tJbnB1dHNbN10ucmVtb3ZlQ2hpbGQodGFza0lucHV0c1s3XS5sYXN0Q2hpbGQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGJpbmQgZXZlbnRzXG4gICAgY29uZmlybURlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlQ29uZmlybUFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgbGV0IHByb2plY3RDYXJkSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucHJvamVjdC5jYXJkJykuaWQ7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdkZWxldGVQcm9qZWN0JywgcHJvamVjdENhcmRJRCk7IC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH0pXG4gICAgY2FuY2VsRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVDb25maXJtQWxlcnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pO1xuICAgIGNvbmZpcm1CdXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIF9jb25maXJtSW5wdXQoZSk7XG4gICAgfSkpO1xuICAgIGNhbmNlbEJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBfY2FuY2VsSW5wdXQoKTtcbiAgICB9KSk7XG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tDcmVhdGVJdGVtJywgX29wZW5DcmVhdGVGb3JtKTsgICAvLyBwdWJsaXNoaW5nIGZyb20gZG9tRGlzcGxheS5qcyAoY3JlYXRlVGFza0J1dHRvbiBjbGlja0V2ZW50KVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrTW9kaWZ5SXRlbScsIF9vcGVuTW9kaWZ5UXVlcnkpOyAgLy8gcHVibGlzaGluZyBmcm9tIGRvbURpc3BsYXkuanMgKF9yZW5kZXJIZWFkZXJzKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xvc2VNb2RpZnlRdWVyeScsIF9vcGVuTW9kaWZ5Rm9ybSk7ICAvLyBwdWJsaXNoaW5nIGZyb20gbGlicmFyeS5qcyAoX3F1ZXJ5SXRlbSgpKTtcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbG9zZVByb2plY3RPcHRpb25zUXVlcnknLCBfcmVuZGVyUHJvamVjdE9wdGlvbnMpOyAgLy8gcHVibGlzaGluZyBmcm9tIGxpYnJhcnkuanMgKF9xdWVyeVByb2plY3ROYW1lSUQoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0RlbGV0ZVByb2plY3QnLCBfc2hvd0RlbGV0ZVByb2plY3RDb25maXJtYXRpb24pOyAgICAvLyBwdWJsaXNoaW5nIGZyb20gZG9tRGlzcGxheS5qcyAoX3JlbmRlclByb2plY3RIZWFkZXIoKSlcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuXG4vLyAqICdiYWNrZW5kJyBtYW5hZ2VyIG1vZHVsZSBjb250YWluaW5nIHByb2plY3QvdGFzayBzdGF0ZXMsIGZhY3RvcmllcywgJiBtZXRob2RzXG5cbmNvbnN0IGxpYnJhcnkgPSAoKCkgPT4ge1xuICAgIC8vIGR5bmFtaWMgZGF0YVxuICAgIGxldCBfcHJvamVjdExpYnJhcnkgPSBbXTtcbiAgICBsZXQgX3Rhc2tMaWJyYXJ5ID0gW107XG4gICAgbGV0IF90YXNrQ291bnRlciA9IDA7XG4gICAgbGV0IF9wcm9qZWN0Q291bnRlciA9IDA7XG5cbiAgICAvLyBmYWN0b3JpZXNcbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0SUQsIHByb2plY3RUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAncHJvamVjdCc7XG4gICAgICAgICAgICB0aGlzLmlkID0gcHJvamVjdElEO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXR0ZXJzXG4gICAgICAgIHNldCBzZXRUaXRsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBUYXNrIHtcbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICBjb25zdHJ1Y3Rvcih0YXNrSUQsIHByb2plY3RJRCwgdGFza1R5cGUsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHksIHRhc2tUYWdzLCB0YXNrSXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0YXNrSUQ7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHRhc2tUeXBlO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRhc2tUaXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSB0YXNrRHVlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICAgICAgICAgIHRoaXMudGFncyA9IHRhc2tUYWdzO1xuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NoZWNrbGlzdCcpIHsgICAgLy8gPyBpcyB0aGlzIG5lY2Vzc2FyeSBpZiB0YXNrSXRlbXMgYXJlIHB1c2hlZCBpbmRpdmlkdWFsbHkgP1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0YXNrSXRlbXM7ICAgICAgICAgLy8gPyBhcyB0aGV5IGFyZSBjcmVhdGVkID9cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXR0ZXJzXG4gICAgICAgIHNldCBzZXRUaXRsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldER1ZURhdGUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5kdWVEYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0UHJvamVjdElEKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMucHJvamVjdElEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldFRhZ3ModmFsdWVBcnJheSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlQXJyYXkgIT09IHRoaXMudGFncykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFncyA9IHZhbHVlQXJyYXk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyc1xuICAgIGZ1bmN0aW9uIF9xdWVyeUl0ZW0oY2FyZFJlZmVyZW5jZXMpIHsgICAvLyBUT0RPIHJlZHVjZSByZXBldGl0aW9uXG4gICAgICAgIGxldCBsaWJyYXJ5UmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMF07XG4gICAgICAgIGxldCBpdGVtUmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMV07XG5cbiAgICAgICAgaWYgKGxpYnJhcnlSZWZlcmVuY2UgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgICAgIGlmIChfcHJvamVjdExpYnJhcnlbcF0uaWQgPT0gaXRlbVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IF9wcm9qZWN0TGlicmFyeVtwXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1WYWx1ZUFycmF5ID0gW2l0ZW0uaWQsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb25dO1xuICAgICAgICAgICAgICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGl0ZW1WYWx1ZUFycmF5KVxuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xvc2VNb2RpZnlRdWVyeScsIGl0ZW1WYWx1ZUFycmF5KTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsaWJyYXJ5UmVmZXJlbmNlID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IGl0ZW1SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtVmFsdWVBcnJheSA9IFtpdGVtLmlkLCBpdGVtLnR5cGUsIGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uZHVlRGF0ZSwgaXRlbS5wcmlvcml0eSwgaXRlbS5wcm9qZWN0SUQsIGl0ZW0udGFnc107XG4gICAgICAgICAgICAgICAgICAgIC8vLy8gY29uc29sZS5sb2coaXRlbVZhbHVlQXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xvc2VNb2RpZnlRdWVyeScsIGl0ZW1WYWx1ZUFycmF5KTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9xdWVyeVByb2plY3ROYW1lc0lEcygpIHtcbiAgICAgICAgbGV0IG5hbWVJREFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgKF9wcm9qZWN0TGlicmFyeS5sZW5ndGgpOyBwKyspIHtcbiAgICAgICAgICAgIG5hbWVJREFycmF5LnB1c2goW19wcm9qZWN0TGlicmFyeVtwXS50aXRsZSwgX3Byb2plY3RMaWJyYXJ5W3BdLmlkXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Nsb3NlUHJvamVjdE9wdGlvbnNRdWVyeScsIG5hbWVJREFycmF5KSAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgfVxuXG4gICAgLy8gc2V0dGVyIG1hbmFnZXJcbiAgICBmdW5jdGlvbiBfc2V0SXRlbVZhbHVlcyhmb3JtVmFsdWVzKSB7XG4gICAgICAgIGxldCBsaWJyYXJ5UmVmZXJlbmNlID0gZm9ybVZhbHVlc1swXTtcbiAgICAgICAgbGV0IGl0ZW1SZWZlcmVuY2UgPSBmb3JtVmFsdWVzWzFdO1xuICAgICAgICBmb3JtVmFsdWVzLnNwbGljZSgwLCAyKTsgICAgLy8gW3RpdGxlLCBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFt0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsICdwcmlvcml0eScsICdwcm9qZWN0SUQnLCBbdGFnc11dXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2cobGlicmFyeVJlZmVyZW5jZSk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coaXRlbVJlZmVyZW5jZSk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coZm9ybVZhbHVlcyk7XG4gICAgICAgIFxuICAgICAgICBpZiAobGlicmFyeVJlZmVyZW5jZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICBpZiAoIV9wcm9qZWN0TGlicmFyeS5zb21lKGl0ZW0gPT4gaXRlbS5pZCA9PSBpdGVtUmVmZXJlbmNlKSkgeyAvLyAhIHVudGVzdGVkLCB3cml0dGVuIHRvIG1hdGNoIHRhc2sgY29uZGl0aW9uYWwgYmVsb3cgdnZ2XG4gICAgICAgICAgICAgICAgX2NyZWF0ZVByb2plY3QoZm9ybVZhbHVlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9tb2RpZnlQcm9qZWN0KGl0ZW1SZWZlcmVuY2UsIGZvcm1WYWx1ZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnlSZWZlcmVuY2UgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgaWYoIV90YXNrTGlicmFyeS5zb21lKGl0ZW0gPT4gaXRlbS5pZCA9PSBpdGVtUmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJRCAgICAgICAgICAgICAgICB0eXBlICAgICAgICAgICB0aXRsZSAgICAgICAgICBkZXNjcmlwdGlvbiAgICBkdWVEYXRlICAgICAgICBwcmlvcml0eSAgICAgICAgICAgICAgICAgdGFnc1xuICAgICAgICAgICAgICAgIGxldCBmb3JtVmFsdWVzUmVvcmRlcmVkID0gW3BhcnNlSW50KGZvcm1WYWx1ZXNbNV0pLCBmb3JtVmFsdWVzWzBdLCBmb3JtVmFsdWVzWzFdLCBmb3JtVmFsdWVzWzJdLCBmb3JtVmFsdWVzWzNdLCBwYXJzZUludChmb3JtVmFsdWVzWzRdKSwgZm9ybVZhbHVlc1s2XV1cbiAgICAgICAgICAgICAgICBfY3JlYXRlVGFzayhmb3JtVmFsdWVzUmVvcmRlcmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX21vZGlmeVRhc2soaXRlbVJlZmVyZW5jZSwgZm9ybVZhbHVlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHNldHRlciBoZWxwZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KGF0dHJpYnV0ZUFycmF5KSB7XG4gICAgICAgIGxldCBfaWQgPSBfcHJvamVjdENvdW50ZXI7XG4gICAgICAgIGxldCBfbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KF9pZCwgLi4uYXR0cmlidXRlQXJyYXkpO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKF9uZXdQcm9qZWN0KTtcbiAgICAgICAgX3Byb2plY3RMaWJyYXJ5LnB1c2goX25ld1Byb2plY3QpO1xuICAgICAgICBfcHJvamVjdENvdW50ZXIrKztcblxuICAgICAgICBldmVudHMucHVibGlzaCgncHJvamVjdENyZWF0ZWQnLCBfbmV3UHJvamVjdCk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRpc3BsYXkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NyZWF0ZVRhc2soYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgbGV0IF9pZCA9IF90YXNrQ291bnRlcjtcbiAgICAgICAgbGV0IF9uZXdUYXNrID0gbmV3IFRhc2soX2lkLCAuLi5hdHRyaWJ1dGVBcnJheSk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coX25ld1Rhc2spO1xuICAgICAgICBfdGFza0xpYnJhcnkucHVzaChfbmV3VGFzayk7XG4gICAgICAgIF90YXNrQ291bnRlcisrO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCd0YXNrQ3JlYXRlZCcsIF9uZXdUYXNrKTsgICAgLy8gc3Vic2NyaWJlZCBieSBkaXNwbGF5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9tb2RpZnlQcm9qZWN0KHRhcmdldEl0ZW1JRCwgYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVBcnJheSlcbiAgICAgICAgbGV0IHByb2plY3RJbnN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2UgPSBfcHJvamVjdExpYnJhcnlbcF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHByb2plY3RJbnN0YW5jZSlcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAoYXR0cmlidXRlQXJyYXkubGVuZ3RoKTsgYSsrKSB7XG4gICAgICAgICAgICBzd2l0Y2goYSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluc3RhbmNlLnNldFRpdGxlID0gYXR0cmlidXRlQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluc3RhbmNlLnNldERlc2NyaXB0aW9uID0gYXR0cmlidXRlQXJyYXlbMV07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKCdtb2RpZnkgcHJvamVjdCcpO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHByb2plY3RJbnN0YW5jZSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIHByb2plY3RJbnN0YW5jZSk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX21vZGlmeVRhc2sodGFyZ2V0SXRlbUlELCBhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZUFycmF5KTtcbiAgICAgICAgbGV0IHRhc2tJbnN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2UgPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZSk7XG4gICAgICAgIGZvciAobGV0IGEgPSAxOyBhIDwgKGF0dHJpYnV0ZUFycmF5Lmxlbmd0aCAtIDEpOyBhKyspIHtcbiAgICAgICAgICAgIC8vIFt0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsICdwcmlvcml0eScsICdwcm9qZWN0SUQnLCBbdGFnc11dXG4gICAgICAgICAgICBzd2l0Y2goYSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldFRpdGxlID0gYXR0cmlidXRlQXJyYXlbMV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLmRlc2NyaXB0aW9uID0gYXR0cmlidXRlQXJyYXlbMl07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldER1ZURhdGUgPSBhdHRyaWJ1dGVBcnJheVszXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0UHJpb3JpdHkgPSBwYXJzZUludChhdHRyaWJ1dGVBcnJheVs0XSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldFByb2plY3RJRCA9IHBhcnNlSW50KGF0dHJpYnV0ZUFycmF5WzVdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0VGFncyA9IGF0dHJpYnV0ZUFycmF5WzZdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZygnbW9kaWZ5IHRhc2snKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyh0YXNrSW5zdGFuY2UpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdpdGVtTW9kaWZpZWQnLCB0YXNrSW5zdGFuY2UpOyAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgfVxuXG4gICAgLy8gZGVsZXRlIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJvamVjdChjYXJkSUQpIHtcbiAgICAgICAgbGV0IGNhcmRSZWZlcmVuY2VzID0gY2FyZElELnNwbGl0KCdfJyk7XG4gICAgICAgIGxldCBwcm9qZWN0UmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMV07XG4gICAgICAgIGxldCBwcm9qZWN0TG9vcFN0YXJ0ID0gX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAobGV0IHAgPSBwcm9qZWN0TG9vcFN0YXJ0OyBwID4gLTE7IHAtLSkge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBwcm9qZWN0UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Byb2plY3RMaWJyYXJ5LnNwbGljZShwLCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGxldCB0YXNrTG9vcFN0YXJ0ID0gX3Rhc2tMaWJyYXJ5Lmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAobGV0IHQgPSB0YXNrTG9vcFN0YXJ0OyB0ID4gLTE7IHQtLSkge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5wcm9qZWN0SUQgPT0gcHJvamVjdFJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIF90YXNrTGlicmFyeS5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKF9wcm9qZWN0TGlicmFyeSk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coX3Rhc2tMaWJyYXJ5KTtcblxuICAgICAgICAvLyAqIHNlbmQgbm90aWZpY2F0aW9uIHRvIHVwZGF0ZSBzaWRlYmFyIChyZW1vdmUgZGVsZXRlZCBwcm9qZWN0LCBzZWxlY3QgbmV3IHByb2plY3QgdmlldylcbiAgICAgICAgLy8gKiAtLS0+IHdpbGwgaW4gdHVybiBub3RpZnkgZGlzcGxheSB0byByZWZyZXNoXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZW1vdmVQcm9qZWN0RnJvbURpc3BsYXknLCBjYXJkSUQpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2RlbGV0ZVRhc2soY2FyZElEKSB7XG4gICAgICAgIGxldCBjYXJkUmVmZXJlbmNlcyA9IGNhcmRJRC5zcGxpdCgnXycpO1xuICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGNhcmRSZWZlcmVuY2VzWzFdO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IHRhc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0UmVmZXJlbmNlID0gX3Rhc2tMaWJyYXJ5W3RdLnByb2plY3RJRDtcbiAgICAgICAgICAgICAgICBfdGFza0xpYnJhcnkuc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhfdGFza0xpYnJhcnkpO1xuICAgICAgICBldmVudHMucHVibGlzaCgncmVtb3ZlVGFza0Zyb21EaXNwbGF5JywgY2FyZElEKTsgICAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVDaGVja2xpc3RJdGVtKGNoZWNrSUQpIHtcbiAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBjaGVja0lELnNwbGl0KCdfXycpWzBdLnNwbGl0KCdfJylbMV07XG4gICAgICAgIGxldCBjaGVja1JlZmVyZW5jZSA9IGNoZWNrSUQuc3BsaXQoJ19fJylbMV0uc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coX3Rhc2tMaWJyYXJ5W3RdLml0ZW1zKTtcbiAgICAgICAgICAgICAgICBfdGFza0xpYnJhcnlbdF0uaXRlbXMuc3BsaWNlKGNoZWNrUmVmZXJlbmNlLCAxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfdGFza0xpYnJhcnlbdF0uaXRlbXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgncmVtb3ZlQ2hlY2tsaXN0SXRlbUZyb21EaXNwbGF5JywgY2hlY2tJRCk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG5cbiAgICAvLyBiaW5kIGV2ZW50c1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZVByb2plY3QnLCBfY3JlYXRlUHJvamVjdCk7ICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChpbml0RGVmYXVsdCgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NyZWF0ZVRhc2snLCBfY3JlYXRlVGFzayk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKGluaXREZWZhdWx0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnb3Blbk1vZGlmeVF1ZXJ5JywgX3F1ZXJ5SXRlbSk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGZvcm1zLmpzIChfb3Blbk1vZGlmeVF1ZXJ5KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnb3BlblByb2plY3RPcHRpb25zUXVlcnknLCBfcXVlcnlQcm9qZWN0TmFtZXNJRHMpICAvLyBwdWJsaXNoZWQgZnJvbSBmb3Jtcy5qcyAoX3Nob3dGb3JtKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlUHJvamVjdCcsIF9kZWxldGVQcm9qZWN0KTsgICAgLy8gcHVibGlzaGVkIGZyb20gZm9ybXMuanMgKGNvbmZpcm1EZWxldGVCdXR0b24gZXZlbnRMaXN0ZW5lcilcbiAgICBldmVudHMuc3Vic2NyaWJlKCdkZWxldGVUYXNrJywgX2RlbGV0ZVRhc2spOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBkb21EaXNwbGF5LmpzIChfcmVuZGVySXRlbUhlYWRlcnMoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjb25maXJtSW5wdXQnLCBfc2V0SXRlbVZhbHVlcyk7IC8vcHVibGlzaGVkIGZyb20gZm9ybXMuanMgKF9jb25maXJtSW5wdXQoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0RlbGV0ZUNoZWNrbGlzdEl0ZW0nLCBfZGVsZXRlQ2hlY2tsaXN0SXRlbSkgIC8vIHB1Ymxpc2hlZCBmcm9tIGRvbURpc3BsYXkuanMgKF9yZW5kZXJDaGVja2xpc3RJdGVtQ29udHJvbHMoKSlcblxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2xheW91dC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy90eXBvLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NoYXBpbmcuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY29sb3JzLmNzcyc7XG5cbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vc2NyaXB0cy9kaXNwbGF5JztcbmltcG9ydCBkb21EaXNwbGF5IGZyb20gJy4vc2NyaXB0cy9kb21EaXNwbGF5JztcbmltcG9ydCBmb3JtcyBmcm9tICcuL3NjcmlwdHMvZm9ybXMnO1xuLy8gaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zY3JpcHRzL3NpZGViYXInO1xuLy8gaW1wb3J0IGRvbVNpZGViYXIgZnJvbSAnLnNjcmlwdHMvZG9tU2lkZWJhcic7XG5pbXBvcnQgbGlicmFyeSBmcm9tICcuL3NjcmlwdHMvbGlicmFyeSc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcblxuLy8gbWFuYWdlciBmdW5jdGlvbiBoZXJlXG5cbi8vICEgbW92ZSB2dnYgaW50byBkb21EaXNwbGF5XG5sZXQgdmlld1ByZWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctcHJlZnMnKTtcbmxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xudGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdmlld1ByZWZzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn0pO1xuXG4vLyBhY3Rpb25zXG5kaXNwbGF5LmluaXREZWZhdWx0KCk7XG5ldmVudHMudmlld0V2ZW50cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==