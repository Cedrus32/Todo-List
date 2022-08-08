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
___CSS_LOADER_EXPORT___.push([module.id, "header,\n#sidebar,\n#display,\n.form-container {\n    border: 1px solid black;\n}\n\n#sidebar,\n.form-container {\n    background-color: white;\n}\n\n.display-container {\n    border: 1px solid blue;\n}\n\n.card {\n    border: 1px solid orangered;\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    background-color: white;\n    filter: opacity(0.5);\n}\n\ninput,\nselect {\n    border: 1px solid black;\n}\n\ninput:invalid {\n    border: 1px solid red;\n}\n\n.required-badge,\n.error-message {\n    color: red;\n}", "",{"version":3,"sources":["webpack://./src/styles/colors.css"],"names":[],"mappings":"AAAA;;;;IAII,uBAAuB;AAC3B;;AAEA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;;IAEI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,UAAU;AACd","sourcesContent":["header,\n#sidebar,\n#display,\n.form-container {\n    border: 1px solid black;\n}\n\n#sidebar,\n.form-container {\n    background-color: white;\n}\n\n.display-container {\n    border: 1px solid blue;\n}\n\n.card {\n    border: 1px solid orangered;\n}\n\nsection.form-container:not(.hide) ~ .show-filter {\n    background-color: white;\n    filter: opacity(0.5);\n}\n\ninput,\nselect {\n    border: 1px solid black;\n}\n\ninput:invalid {\n    border: 1px solid red;\n}\n\n.required-badge,\n.error-message {\n    color: red;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: 0.5em;\n\n    --small-pad: 0.25em;\n    --small-gap: 0.25em;\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #sidebar,\n    #display {\n        padding: var(--main-pad);\n    }\n\n\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n\n#sidebar {\n    /* display: flex;\n    flex-flow: column;\n    gap: var(--main-gap); */\n    position: absolute;\n    top: calc(calc(var(--main-pad) * 2) + 1.65em); left: 0em;\n}\n\n    .view-prefs-container {\n        display: flex;\n        flex-flow: column;\n        gap: var(--main-gap);\n    }\n\n        #sidebar ul {\n            display: flex;\n            flex-flow: column;\n            gap: var(--main-gap);\n        }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    \n    width: 80%;\n    max-width: 450px;\n}\n\n    section.form-container:not(.hide) ~ .show-filter {\n        position: absolute;\n        top: 0px; right: 0px;\n        z-index: 1;\n\n        height: 100vh; width: 100vw;\n    }\n\nfieldset {\n    display: flex;\n    flex-flow: column;\n}\n\n    .dropdowns {\n        display: flex;\n    }\n\n        .dropdowns div {\n            display: flex;\n            flex-flow: column;\n\n            width: 50%;\n        }\n\n.form-buttons {\n    display: flex;\n    justify-content: center;\n}\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--small-gap);\n\n                padding: 1em;\n            }\n\n                .header {\n                    display: flex;\n                    justify-content: flex-start;\n                    align-items: center;\n                    gap: var(--small-gap);\n\n                    width: 100%;\n                }\n\n                    .title {\n                        margin-right: auto;\n                    }\n                \n                div.card,\n                .task-controls {\n                    padding: var(--med-pad);\n                }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--small-gap);\n                            align-content: flex-start;\n                        }\n\n                            .tags {\n                                display: flex;\n                                gap: var(--small-gap);\n                                flex-wrap: wrap;\n                            }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--small-gap);\n                }\n\n                    .description-container {\n                        display: flex;\n                    }\n\n                        .description {\n                            margin-right: auto;\n                        }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n", "",{"version":3,"sources":["webpack://./src/styles/layout.css"],"names":[],"mappings":"AAAA,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;IACI,eAAe;IACf,eAAe;;IAEf,gBAAgB;;IAEhB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;IAEI;QACI,YAAY;IAChB;;AAEJ;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;IAEI;;;QAGI,wBAAwB;IAC5B;;;AAGJ,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;AAEhB;IACI;;2BAEuB;IACvB,kBAAkB;IAClB,6CAA6C,EAAE,SAAS;AAC5D;;IAEI;QACI,aAAa;QACb,iBAAiB;QACjB,oBAAoB;IACxB;;QAEI;YACI,aAAa;YACb,iBAAiB;YACjB,oBAAoB;QACxB;;AAER,cAAc;AACd,cAAc;AACd,cAAc;;AAEd;IACI,kBAAkB;IAClB,QAAQ,EAAE,QAAQ;IAClB,gCAAgC;IAChC,UAAU;;IAEV,UAAU;IACV,gBAAgB;AACpB;;IAEI;QACI,kBAAkB;QAClB,QAAQ,EAAE,UAAU;QACpB,UAAU;;QAEV,aAAa,EAAE,YAAY;IAC/B;;AAEJ;IACI,aAAa;IACb,iBAAiB;AACrB;;IAEI;QACI,aAAa;IACjB;;QAEI;YACI,aAAa;YACb,iBAAiB;;YAEjB,UAAU;QACd;;AAER;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;IAEZ;QACI,aAAa;QACb,8BAA8B;QAC9B,4BAA4B;QAC5B;8CACsC;;QAEtC,eAAe;QACf,WAAW;IACf;;AAEJ,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;;QAEX;YACI,iBAAiB;;YAEjB,aAAa;YACb,uBAAuB;YACvB,mBAAmB;QACvB;;AAER,oBAAoB;AACpB,oBAAoB;AACpB,oBAAoB;;QAEZ;YACI,kBAAkB;QACtB;;YAEI;gBACI,aAAa;gBACb,iBAAiB;gBACjB,qBAAqB;;gBAErB,YAAY;YAChB;;gBAEI;oBACI,aAAa;oBACb,2BAA2B;oBAC3B,mBAAmB;oBACnB,qBAAqB;;oBAErB,WAAW;gBACf;;oBAEI;wBACI,kBAAkB;oBACtB;;gBAEJ;;oBAEI,uBAAuB;gBAC3B;;gBAEA;oBACI,aAAa;oBACb,2BAA2B;gBAC/B;;oBAEI;wBACI,kBAAkB;oBACtB;;gBAEJ;oBACI,aAAa;oBACb,uBAAuB;gBAC3B;;oBAEI;wBACI,8BAA8B;oBAClC;;oBAEA;wBACI,sCAAsC;oBAC1C;;oBAEA;wBACI,aAAa;wBACb,iBAAiB;wBACjB,qBAAqB;;wBAErB,WAAW;oBACf;;wBAEI;4BACI,aAAa;4BACb,qBAAqB;4BACrB,yBAAyB;wBAC7B;;4BAEI;gCACI,aAAa;gCACb,qBAAqB;gCACrB,eAAe;4BACnB;;gBAEZ;oBACI,aAAa;oBACb,iBAAiB;oBACjB,qBAAqB;gBACzB;;oBAEI;wBACI,aAAa;oBACjB;;wBAEI;4BACI,kBAAkB;wBACtB;;oBAEJ;wBACI,aAAa;wBACb,mBAAmB;oBACvB;;wBAEI;4BACI,kBAAkB;wBACtB","sourcesContent":["/* GLOBAL */\n/* GLOBAL */\n/* GLOBAL */\n\n:root {\n    --main-pad: 1em;\n    --main-gap: 1em;\n\n    --med-pad: 0.5em;\n\n    --small-pad: 0.25em;\n    --small-gap: 0.25em;\n}\n\n.hide {\n    display: none;\n}\n\nul {\n    list-style: none;\n}\n\n    li {\n        padding: 0em;\n    }\n\nbody {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n    header,\n    #sidebar,\n    #display {\n        padding: var(--main-pad);\n    }\n\n\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n/* --- SIDEBAR */\n\n#sidebar {\n    /* display: flex;\n    flex-flow: column;\n    gap: var(--main-gap); */\n    position: absolute;\n    top: calc(calc(var(--main-pad) * 2) + 1.65em); left: 0em;\n}\n\n    .view-prefs-container {\n        display: flex;\n        flex-flow: column;\n        gap: var(--main-gap);\n    }\n\n        #sidebar ul {\n            display: flex;\n            flex-flow: column;\n            gap: var(--main-gap);\n        }\n\n/* --- FORMS */\n/* --- FORMS */\n/* --- FORMS */\n\n.form-container {\n    position: absolute;\n    top: 50%; left:50%;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    \n    width: 80%;\n    max-width: 450px;\n}\n\n    section.form-container:not(.hide) ~ .show-filter {\n        position: absolute;\n        top: 0px; right: 0px;\n        z-index: 1;\n\n        height: 100vh; width: 100vw;\n    }\n\nfieldset {\n    display: flex;\n    flex-flow: column;\n}\n\n    .dropdowns {\n        display: flex;\n    }\n\n        .dropdowns div {\n            display: flex;\n            flex-flow: column;\n\n            width: 50%;\n        }\n\n.form-buttons {\n    display: flex;\n    justify-content: center;\n}\n\n/* --- CONTENT */\n/* --- CONTENT */\n/* --- CONTENT */\n\n    main {\n        display: grid;\n        grid-template-columns: 3fr 7fr;\n        grid-template-rows: auto 1fr;\n        grid-template-areas: 'header  header'\n                             'display display';\n\n        height: inherit;\n        width: 100%;\n    }\n\n/* ------- HEADER */\n/* ------- HEADER */\n/* ------- HEADER */\n\n        header {\n            grid-area: header;\n\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n/* ------- DISPLAY */\n\n        #display {\n            grid-area: display;\n        }\n\n            .display-container {\n                display: flex;\n                flex-flow: column;\n                gap: var(--small-gap);\n\n                padding: 1em;\n            }\n\n                .header {\n                    display: flex;\n                    justify-content: flex-start;\n                    align-items: center;\n                    gap: var(--small-gap);\n\n                    width: 100%;\n                }\n\n                    .title {\n                        margin-right: auto;\n                    }\n                \n                div.card,\n                .task-controls {\n                    padding: var(--med-pad);\n                }\n                \n                .task-controls {\n                    display: flex;\n                    justify-content: flex-start;\n                }\n\n                    .tally {\n                        margin-right: auto;\n                    }\n\n                .singleton {\n                    display: flex;\n                    align-items: flex-start;\n                }\n\n                    input[type='checkbox'] {\n                        margin-right: var(--small-pad);\n                    }\n\n                    .singleton input[type='checkbox'] {\n                        margin-top: calc(var(--small-pad) * 1);\n                    }\n\n                    .content {\n                        display: flex;\n                        flex-flow: column;\n                        gap: var(--small-gap);\n\n                        width: 100%;\n                    }\n\n                        .details {\n                            display: flex;\n                            gap: var(--small-gap);\n                            align-content: flex-start;\n                        }\n\n                            .tags {\n                                display: flex;\n                                gap: var(--small-gap);\n                                flex-wrap: wrap;\n                            }\n\n                .checklist {\n                    display: flex;\n                    flex-flow: column;\n                    gap: var(--small-gap);\n                }\n\n                    .description-container {\n                        display: flex;\n                    }\n\n                        .description {\n                            margin-right: auto;\n                        }\n\n                    .checklist ul li {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                        .checklist ul li label {\n                            margin-right: auto;\n                        }\n"],"sourceRoot":""}]);
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
    let taskCountSpan = document.querySelector('div.tally span');

    // * create task listener in _renderTaskCreateButton()
    // * modify & delete click listeners in _render...Header()
    // * create checklist item listener in _renderChecklistDescritionContainer()

    // display manager
    function _updateDisplay(instanceBundle) {
        let viewPreference = instanceBundle[0];

        switch (viewPreference) {
            case 'all':
                _clearDisplay()
                let taskHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h1)(instanceBundle[0], '');
                projectContainer.appendChild(taskHeader);
                for (let i = 1; i < (instanceBundle.length); i++) {
                    _renderTask(instanceBundle[i]);
                };
                break;
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
                                    title = card.querySelector('.title h2');
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
                            let priority = card.querySelector('.priority');
                            priority.textContent = taskValues[3];
                            break;
                        case 4:
                            let currentProjectCardID = projectContainer.querySelector('.card').id;
                            let currentProjectReference = currentProjectCardID.split('_')[1];
                            if (taskValues[4] !== currentProjectReference) {
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

        let projectHeader = _renderProjectHeader(project.id, project.title);
        let projectDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])(project.description, '.description');

        projectCard.append(projectHeader, projectDescription);
        projectContainer.appendChild(projectCard);

        if (project.id !== 0) {
            _renderTaskCreateButton();
        };

        _fillTaskCounter('');
    }
    const _renderProjectHeader = function(id, title) {
        let divHeader = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.header');

        let h1Title = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h1)(title, '.title');
        divHeader.appendChild(h1Title);
        if (id !== 0) {
            let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.project', '.modify');
            // * project modify/delete events
            spanModify.addEventListener('click', (e) => {   // ! align to pass similar arguments?
                _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
            });
            divHeader.appendChild(spanModify);
        };
        
        // divHeader.append(h1Title, spanModify);

        if (id !== 0) {
            let spanDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('X', '.delete');
            spanDelete.addEventListener('click', (e) => {
                let cardID = e.target.closest('div.card').id;
                _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteProject', cardID);   // subscribed by forms.js
            });
            divHeader.appendChild(spanDelete);
        };
        
        return divHeader;
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
                taskCard = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.card', '.checklist', `#${cardID}`);
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
        let h2TitleContent = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h2)(title, '');
        labelCheckmarkTitle.appendChild(h2TitleContent);

        let spanDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)(dueDate, '.date');
        let spanPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)(priority, '.priority');
        let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.task', '.modify');
        let spanDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('X', '.delete');

        // * singleton modify/delete events
        spanModify.addEventListener('click', (e) => {   // ! align to pass similar arguments?
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {    // subscribed by library.js
            let taskCardID = e.target.closest('div.card').id;
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteTask', taskCardID);   // subscribed by library.js
        });

        divHeader.append(labelCheckmarkTitle, spanDate, spanPriority, spanModify, spanDelete);
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

        let h2Title = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.h2)(title, '.title');
        let spanDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)(dueDate, '.date');
        let spanPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)(priority, '.priority');
        let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.task', '.modify');
        let spanDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('X', '.delete');

        // * checklist modify/delete events
        spanModify.addEventListener('click', (e) => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
        });
        spanDelete.addEventListener('click', (e) => {
            let cardID = e.target.closest('div.card').id;
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteTask', cardID);   // subscribed by library.js
        });

        divHeader.append(h2Title, spanDate, spanPriority, spanModify, spanDelete);
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

        let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.task', '.modify');
        let spanDelete = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('X', '.delete');

        // * checklist item modify/delete events
        spanModify.addEventListener('click', (e) => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);    // subscribed by forms.js
        });
        spanDelete.addEventListener('click', () => {
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickDeleteChecklistItem', checkID);    // subscribed by library.js
        });

        divControls.appendChild(spanModify);
        divControls.appendChild(spanDelete);

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
    if (_attributes.length > 1) {
        _setAttributes(element, _attributes);
    };
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
                _renderCheckboxForm(taskReference);
                break;
            case ((typeof formReference) === 'string'):
                _setFormReferences(formReference);
                switch (_currentFormType) {
                    case 'project':
                        _renderProjectForm();
                        break;
                    case 'task':
                        _renderTaskForm();
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
        switch (_currentFormType) {
            case 'delete-confirm':
                _hideForm();
                let projectCardID = document.querySelector('div.project.card').id;
                _clearFormValues();
                _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('confirmDeleteProject', projectCardID);  // subscribed by library.js
                break;
            default:
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
        switch (true) {
            case (project[0] !== undefined):
                _currentProject = project[1].id;
                break;
            default:
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
                _renderProjectForm();
                for (let i = 0; i < (formInputs.length); i++) {
                    formInputs[i].value = values[i + 1];
                };
                break;
            case 'task':
                _renderTaskForm();
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
                _renderCheckboxForm();
                let instanceReferences = `${values[1]}_${values[2]}`;   // * passed to library for indexing correct task && checklist item
                formInputs[0].value = instanceReferences;
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
    const _renderProjectForm = function() {
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)('Create a New Project', '');

        let spanRequiredBadge = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('*', '.required-badge');
        let spanErrorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('please include a title', '.error-message', '.hide');
        let labelTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('title ', 'project-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'project-title', 'title', 'project-title', '');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;

        let labelDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('description', '.project-description');
        let inputDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'project-description', 'description', 'project-description', '');

        formFieldset.append(fieldsetLegend, labelTitle, inputTitle, labelDescription, inputDescription);

        formInputs = formContainer.querySelectorAll('input');
    }
    const _renderTaskForm = function() {        
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)('Create a New Task', '');

        let labelTaskType = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Task Type', '');
        let divTypeOptions = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.type-options');
        let radioSingleton = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('radio', 'type', '', 'singleton', '.input',);
        radioSingleton.checked = true;
        let labelSingleton = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Single Task', 'singleton', '');
        let radioChecklist = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('radio', 'type', '', 'checklist', '.input');
        let labelChecklist = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Task List', 'checklist', '');
        divTypeOptions.append(radioSingleton, labelSingleton, radioChecklist, labelChecklist);

        let spanRequiredBadge = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('*', '.required-badge');
        let spanErrorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('please include a title', '.error-message', '.hide');
        let labelTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Title ', 'task-title');
        labelTitle.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'task-title', 'title', 'task-title', '.input');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;

        let labelDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Task Description', 'description');
        let inputDescription = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'description', 'description', 'task-description', '.input');

        let labelDueDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Due Date', 'due-date');
        let inputDueDate = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('date', 'due-date', '', 'due-date', '.input');

        let divDropdowns = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '.dropdowns');
        let divPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '');
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
        let divProject = (0,_elements__WEBPACK_IMPORTED_MODULE_1__["default"])('', '');
        let labelProject = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('Project', 'project', '');
        let selectProject = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.select)('project', '#project', '.input');
        divPriority.append(labelPriority, selectPriority);
        divProject.append(labelProject, selectProject);
        divDropdowns.append(divPriority, divProject);

        formFieldset.append(fieldsetLegend, labelTaskType, divTypeOptions, labelTitle, inputTitle, labelDescription, inputDescription, labelDueDate, inputDueDate, divDropdowns);

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
    const _renderCheckboxForm = function(taskReference) {
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)('Create a New Checklist Item', '');

        let spanRequiredBadge = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('*', '.required-badge');
        let spanErrorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('please include a title', '.error-message', '.hide');
        let titleLabel = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('title ', 'project-title');
        titleLabel.append(spanRequiredBadge, spanErrorMessage);
        let inputTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'checkbox-title', 'title', 'checkbox-title', '');
        inputTitle.required = true;
        inputTitle.ariaRequired = true;

        formFieldset.append(fieldsetLegend, titleLabel, inputTitle);

        formInputs = formContainer.querySelectorAll('input');
        formInputs[0].value = taskReference;    // * passed to library.js for indexing correct task
    }
    const _renderDeleteConfirmationForm = function() {
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)('Delete this Project', '');

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
    function _bundleInstances(viewPreference, queryReference) {
        let instanceBundle = [];

        let queryProjects = false;
        let queryTasks = false;
        
        switch (viewPreference) {
            case 'all':
                queryTasks = true;
                break;
            case 'today':
                queryTasks = true;
                break;
            case 'upcoming':
                queryTasks = true;
                break;
            case 'anytime':
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
        } else if (queryTasks === true) {

            switch (viewPreference) {
                case 'all':
                    for (let t = 0; t < (_taskLibrary.length); t++) {
                        instanceBundle.push(_taskLibrary[t]);
                    };
                    break;
                case 'anytime':
                    // loop through all tasks
                    // if task has no due date, push to instanceBundle
            };
        };

        //// console.log(instanceBundle);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('updateDisplayView', instanceBundle);    // subscribed by display.js
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

    _events__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('openViewPreferenceQuery', _bundleInstances) // published from sidebar.js (_clickViewPreferenceLink())

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
        _changeViewPreference('all', e.target.id);
    });
    viewTodayButton.addEventListener('click', () => {
        console.log('view tasks due today');
    });
    viewUpcomingButton.addEventListener('click', () => {
        console.log('view tasking due this week');
    });
    viewAnytimeButton.addEventListener('click', () => {
        console.log('view tasks with no due dates');
    });
    viewUnsortedButton.addEventListener('click', (e) => {
        _changeViewPreference('project', e.target.id);
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
                // get today's date (from date time api)
                // target reference = today's date
                break;
            case 'upcoming':
                // get today's date (drom date time api)
                // add 7 days to date
                // target reference = today's date
                break;
            case 'project':
                let splitID = targetID.split('_');
                queryReference = splitID[1];
            //     break;
            // default:
            //     queryReference = '';
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

    // event subscriptions
    
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('projectCreated', _renderProjectLink); // published by library.js (_createProject())
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeProjectFromSection', _removeProjectLink);   // published by library.js (_deleteProject());









    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('itemModified', _modifyViewPreferenceLink);   // published by library.js (_modify...())

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
/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/layout.css */ "./src/styles/layout.css");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSStCO0FBQzREOztBQUUzRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRzs7QUFFQSxRQUFRLHVEQUFjLG9EQUFvRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQWMsMENBQTBDO0FB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Q0E7QUFDVjs7QUFFOUI7QUFDQSxnRUFBaUI7QUFDakIsMkRBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2NvbG9ycy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9sYXlvdXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc2hhcGluZy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90eXBvLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvY29sb3JzLmNzcz9iMGQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcz9kODEyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zaGFwaW5nLmNzcz8wZTljIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdHlwby5jc3M/NjBlYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoZWFkZXIsXFxuI3NpZGViYXIsXFxuI2Rpc3BsYXksXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaWRlYmFyLFxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZXJlZDtcXG59XFxuXFxuc2VjdGlvbi5mb3JtLWNvbnRhaW5lcjpub3QoLmhpZGUpIH4gLnNob3ctZmlsdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnJlcXVpcmVkLWJhZGdlLFxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7O0lBSUksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXIsXFxuI3NpZGViYXIsXFxuI2Rpc3BsYXksXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaWRlYmFyLFxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZXJlZDtcXG59XFxuXFxuc2VjdGlvbi5mb3JtLWNvbnRhaW5lcjpub3QoLmhpZGUpIH4gLnNob3ctZmlsdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZpbHRlcjogb3BhY2l0eSgwLjUpO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnJlcXVpcmVkLWJhZGdlLFxcbi5lcnJvci1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tcGFkOiAxZW07XFxuICAgIC0tbWFpbi1nYXA6IDFlbTtcXG5cXG4gICAgLS1tZWQtcGFkOiAwLjVlbTtcXG5cXG4gICAgLS1zbWFsbC1wYWQ6IDAuMjVlbTtcXG4gICAgLS1zbWFsbC1nYXA6IDAuMjVlbTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiAgICBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAwZW07XFxuICAgIH1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4gICAgaGVhZGVyLFxcbiAgICAjc2lkZWJhcixcXG4gICAgI2Rpc3BsYXkge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICB9XFxuXFxuXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcbi8qIC0tLSBTSURFQkFSICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1tYWluLWdhcCk7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKGNhbGModmFyKC0tbWFpbi1wYWQpICogMikgKyAxLjY1ZW0pOyBsZWZ0OiAwZW07XFxufVxcblxcbiAgICAudmlldy1wcmVmcy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLWdhcCk7XFxuICAgIH1cXG5cXG4gICAgICAgICNzaWRlYmFyIHVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogdmFyKC0tbWFpbi1nYXApO1xcbiAgICAgICAgfVxcblxcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7IGxlZnQ6NTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbiAgICBzZWN0aW9uLmZvcm0tY29udGFpbmVyOm5vdCguaGlkZSkgfiAuc2hvdy1maWx0ZXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwcHg7IHJpZ2h0OiAwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcblxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDsgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuICAgIC5kcm9wZG93bnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAgICAgLmRyb3Bkb3ducyBkaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIH1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciAgaGVhZGVyJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXkgZGlzcGxheSc7XFxuXFxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcblxcbiAgICAgICAgaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuXFxuICAgICAgICAjZGlzcGxheSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkaXNwbGF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBkaXYuY2FyZCxcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tbWVkLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2luZ2xldG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNtYWxsLXBhZCkgKiAxKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlscyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50YWdzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXOztBQUVYO0lBQ0ksZUFBZTtJQUNmLGVBQWU7O0lBRWYsZ0JBQWdCOztJQUVoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7O0FBRUo7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7SUFFSTs7O1FBR0ksd0JBQXdCO0lBQzVCOzs7QUFHSixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjs7QUFFaEI7SUFDSTs7MkJBRXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw2Q0FBNkMsRUFBRSxTQUFTO0FBQzVEOztJQUVJO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O1FBRUk7WUFDSSxhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLG9CQUFvQjtRQUN4Qjs7QUFFUixjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7O0FBRWQ7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0NBQWdDO0lBQ2hDLFVBQVU7O0lBRVYsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixVQUFVOztRQUVWLGFBQWEsRUFBRSxZQUFZO0lBQy9COztBQUVKO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7SUFFSTtRQUNJLGFBQWE7SUFDakI7O1FBRUk7WUFDSSxhQUFhO1lBQ2IsaUJBQWlCOztZQUVqQixVQUFVO1FBQ2Q7O0FBRVI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCOztJQUVaO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUI7OENBQ3NDOztRQUV0QyxlQUFlO1FBQ2YsV0FBVztJQUNmOztBQUVKLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsbUJBQW1COztRQUVYO1lBQ0ksaUJBQWlCOztZQUVqQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtRQUN2Qjs7QUFFUixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7UUFFWjtZQUNJLGtCQUFrQjtRQUN0Qjs7WUFFSTtnQkFDSSxhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIscUJBQXFCOztnQkFFckIsWUFBWTtZQUNoQjs7Z0JBRUk7b0JBQ0ksYUFBYTtvQkFDYiwyQkFBMkI7b0JBQzNCLG1CQUFtQjtvQkFDbkIscUJBQXFCOztvQkFFckIsV0FBVztnQkFDZjs7b0JBRUk7d0JBQ0ksa0JBQWtCO29CQUN0Qjs7Z0JBRUo7O29CQUVJLHVCQUF1QjtnQkFDM0I7O2dCQUVBO29CQUNJLGFBQWE7b0JBQ2IsMkJBQTJCO2dCQUMvQjs7b0JBRUk7d0JBQ0ksa0JBQWtCO29CQUN0Qjs7Z0JBRUo7b0JBQ0ksYUFBYTtvQkFDYix1QkFBdUI7Z0JBQzNCOztvQkFFSTt3QkFDSSw4QkFBOEI7b0JBQ2xDOztvQkFFQTt3QkFDSSxzQ0FBc0M7b0JBQzFDOztvQkFFQTt3QkFDSSxhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIscUJBQXFCOzt3QkFFckIsV0FBVztvQkFDZjs7d0JBRUk7NEJBQ0ksYUFBYTs0QkFDYixxQkFBcUI7NEJBQ3JCLHlCQUF5Qjt3QkFDN0I7OzRCQUVJO2dDQUNJLGFBQWE7Z0NBQ2IscUJBQXFCO2dDQUNyQixlQUFlOzRCQUNuQjs7Z0JBRVo7b0JBQ0ksYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtnQkFDekI7O29CQUVJO3dCQUNJLGFBQWE7b0JBQ2pCOzt3QkFFSTs0QkFDSSxrQkFBa0I7d0JBQ3RCOztvQkFFSjt3QkFDSSxhQUFhO3dCQUNiLG1CQUFtQjtvQkFDdkI7O3dCQUVJOzRCQUNJLGtCQUFrQjt3QkFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuLyogR0xPQkFMICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tcGFkOiAxZW07XFxuICAgIC0tbWFpbi1nYXA6IDFlbTtcXG5cXG4gICAgLS1tZWQtcGFkOiAwLjVlbTtcXG5cXG4gICAgLS1zbWFsbC1wYWQ6IDAuMjVlbTtcXG4gICAgLS1zbWFsbC1nYXA6IDAuMjVlbTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiAgICBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAwZW07XFxuICAgIH1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4gICAgaGVhZGVyLFxcbiAgICAjc2lkZWJhcixcXG4gICAgI2Rpc3BsYXkge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWQpO1xcbiAgICB9XFxuXFxuXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcbi8qIC0tLSBTSURFQkFSICovXFxuXFxuI3NpZGViYXIge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1tYWluLWdhcCk7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKGNhbGModmFyKC0tbWFpbi1wYWQpICogMikgKyAxLjY1ZW0pOyBsZWZ0OiAwZW07XFxufVxcblxcbiAgICAudmlldy1wcmVmcy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLWdhcCk7XFxuICAgIH1cXG5cXG4gICAgICAgICNzaWRlYmFyIHVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogdmFyKC0tbWFpbi1nYXApO1xcbiAgICAgICAgfVxcblxcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcbi8qIC0tLSBGT1JNUyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7IGxlZnQ6NTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxufVxcblxcbiAgICBzZWN0aW9uLmZvcm0tY29udGFpbmVyOm5vdCguaGlkZSkgfiAuc2hvdy1maWx0ZXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwcHg7IHJpZ2h0OiAwcHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcblxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDsgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuICAgIC5kcm9wZG93bnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAgICAgLmRyb3Bkb3ducyBkaXYge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIH1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG4vKiAtLS0gQ09OVEVOVCAqL1xcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlciAgaGVhZGVyJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXkgZGlzcGxheSc7XFxuXFxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcblxcbiAgICAgICAgaGVhZGVyIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuLyogLS0tLS0tLSBESVNQTEFZICovXFxuXFxuICAgICAgICAjZGlzcGxheSB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkaXNwbGF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBkaXYuY2FyZCxcXG4gICAgICAgICAgICAgICAgLnRhc2stY29udHJvbHMge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tbWVkLXBhZCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuc2luZ2xldG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zbWFsbC1wYWQpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLnNpbmdsZXRvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNtYWxsLXBhZCkgKiAxKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlscyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tc21hbGwtZ2FwKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50YWdzIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2xpc3QgdWwgbGkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIGxhYmVsIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbmRlciBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplIG9uIGBoMWAgJiAnaDInIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIEdST1VQSU5HIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveCAqL1xcbi8qIDIuIHNob3cgb3ZlcmZsb3cgaW4gRWRnZSwgSUUgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovIC8qKiBjb25mbGljdCB3LyBgKi1zZWxlY3RvcmA/ICovXFxuICAgIGhlaWdodDogMHB4OyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qIDEuIGNvcnJlY3QgaW5oZXJpdGFuY2UsIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIGNvcnJlY3QgdGhlIG9mZiBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2VycyAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IGluaGVyaXRhbmNlLCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiBjb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogcHJldmVudCBhbGwgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIGxpbmUgaGVpZ2h0ICovXFxuLyogaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuICBcXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBjbGVhbiB1cCBib3JkZXJzIG9uIHRhYmxlcyAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyogY29ycmVjdCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuICBcXG4vKiAxLiBjb3JyZWN0IHRleHQgd3JhcHBpbmcgaW4gRWRnZSwgSUUgKi9cXG4vKiAyLiBjb3JyZWN0IGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRSAqL1xcbi8qIDMuIHJlbW92ZSBwYWRkaW5nIHNvIGRldnMgYXJlbid0IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8tb3V0ICovXFxuLyogICAgYGZpZWxkc2V0YGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBPcGVyYSAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiByZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMCAqL1xcbi8qIDIuIHJlbW92ZSBwYWRkaW5nIGluIElFIDEwICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogY29ycmVjdCBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50LCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IG9mZiBhcHBlYXJhbmNlIGluIENocm9tZSwgU2FmYXJpICovXFxuLyogMi4gY29ycmVjdCBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaSAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgU2FmYXJpIG9uIG1hY09TICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiAxLiBjaGFuZ2UgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcbi8qIDIuIGNoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaSAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcblxcbi8qIElOVEVSQUNUSVZFID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgRmlyZWZveCAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKyAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUNBQXFDOztBQUVyQzs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLFdBQVc7O0lBRXpCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixhQUFhOztJQUViLHdCQUF3QjtBQUM1Qjs7O0FBR0EsdUNBQXVDOztBQUV2Qyw2Q0FBNkM7O0FBRTdDO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLG1DQUFtQzs7QUFFbkM7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUEsOERBQThEOztBQUU5RDtJQUNJLFNBQVM7QUFDYjs7QUFFQSx5REFBeUQ7O0FBRXpEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsK0NBQStDOztBQUUvQyx5Q0FBeUM7QUFDekMsaUNBQWlDOztBQUVqQztJQUNJLHVCQUF1QixFQUFFLE1BQU0sRUFBRSwrQkFBK0I7SUFDaEUsV0FBVyxFQUFFLE1BQU07SUFDbkIsaUJBQWlCLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQSxpRUFBaUU7QUFDakUsd0RBQXdEOztBQUV4RDtJQUNJLGlDQUFpQyxFQUFFLE1BQU07SUFDekMsY0FBYyxFQUFFLE1BQU07QUFDMUI7OztBQUdBLG1EQUFtRDs7QUFFbkQsNENBQTRDOztBQUU1QztJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSwwQ0FBMEM7QUFDMUMsc0VBQXNFOztBQUV0RTtJQUNJLG1CQUFtQixFQUFFLE1BQU07SUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzdDOztBQUVBLG9EQUFvRDs7QUFFcEQ7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBLGlFQUFpRTtBQUNqRSxzREFBc0Q7O0FBRXREOzs7SUFHSSxpQ0FBaUMsRUFBRSxNQUFNO0lBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQzFCOztBQUVBLDBDQUEwQzs7QUFFMUM7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLG9FQUFvRTtBQUNwRSxvQkFBb0I7O0FBRXBCOztJQUVJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBLCtDQUErQzs7QUFFL0Msa0RBQWtEOztBQUVsRDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSwrQkFBK0I7O0FBRS9CO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLG9DQUFvQzs7QUFFcEMsMENBQTBDO0FBQzFDLDJDQUEyQzs7QUFFM0M7Ozs7O0lBS0ksb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ3JCOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBLDhEQUE4RDs7QUFFOUQ7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBLGtFQUFrRTs7QUFFbEU7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUEsNENBQTRDOztBQUU1Qzs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEsbURBQW1EOztBQUVuRDs7OztJQUlJLDhCQUE4QjtBQUNsQzs7QUFFQSwrQkFBK0I7O0FBRS9CO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBLHlDQUF5QztBQUN6QyxnRUFBZ0U7QUFDaEUsbUVBQW1FO0FBQ25FLDBDQUEwQzs7QUFFMUM7SUFDSSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDL0I7O0FBRUEsNkRBQTZEOztBQUU3RDtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSxnREFBZ0Q7O0FBRWhEO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSx1Q0FBdUM7QUFDdkMsK0JBQStCOztBQUUvQjs7SUFFSSxzQkFBc0IsRUFBRSxNQUFNO0lBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3RCOztBQUVBLG1FQUFtRTs7QUFFbkU7O0lBRUksWUFBWTtBQUNoQjs7QUFFQSxnREFBZ0Q7QUFDaEQsdUNBQXVDOztBQUV2QztJQUNJLDZCQUE2QixFQUFFLE1BQU07SUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUNoQzs7QUFFQSxvREFBb0Q7O0FBRXBEO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLGdFQUFnRTtBQUNoRSxxREFBcUQ7O0FBRXJEO0lBQ0ksMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN6Qjs7O0FBR0EsMENBQTBDOztBQUUxQyxpREFBaUQ7O0FBRWpEO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSx3Q0FBd0M7O0FBRXhDO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQSxtQ0FBbUM7O0FBRW5DLGtDQUFrQzs7QUFFbEM7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLGlDQUFpQzs7QUFFakM7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVuZGVyIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRSAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogY29ycmVjdCBmb250IHNpemUgb24gYGgxYCAmICdoMicgZWxlbWVudHMgKi9cXG4vKiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWAgY29udGV4dHMgKi9cXG4vKiBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBwYCBlbGVtZW50cyBhY3Jvc3MgYnJvd3NlcnMgKi9cXG5cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuLyogR1JPVVBJTkcgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94ICovXFxuLyogMi4gc2hvdyBvdmVyZmxvdyBpbiBFZGdlLCBJRSAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi8gLyoqIGNvbmZsaWN0IHcvIGAqLXNlbGVjdG9yYD8gKi9cXG4gICAgaGVpZ2h0OiAwcHg7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyogMS4gY29ycmVjdCBpbmhlcml0YW5jZSwgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gY29ycmVjdCB0aGUgb2ZmIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcblxcbi8qIFRFWFQtTEVWRUwgU0VNQU5USUNTID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgZ3JheSBiZyBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIDEuIHJlbW92ZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gKi9cXG4vKiAyLiBhZGQgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIFNhZmFyaSAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBTYWZhcmkgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIDEuIGNvcnJlY3QgaW5oZXJpdGFuY2UsIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIGNvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBwcmV2ZW50IGFsbCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgbGluZSBoZWlnaHQgKi9cXG4vKiBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG4gIFxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIGNsZWFuIHVwIGJvcmRlcnMgb24gdGFibGVzICovXFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKiBjb3JyZWN0IHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG4gIFxcbi8qIDEuIGNvcnJlY3QgdGV4dCB3cmFwcGluZyBpbiBFZGdlLCBJRSAqL1xcbi8qIDIuIGNvcnJlY3QgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFICovXFxuLyogMy4gcmVtb3ZlIHBhZGRpbmcgc28gZGV2cyBhcmVuJ3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVyby1vdXQgKi9cXG4vKiAgICBgZmllbGRzZXRgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIHJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiAxLiBhZGQgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwICovXFxuLyogMi4gcmVtb3ZlIHBhZGRpbmcgaW4gSUUgMTAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBjb3JyZWN0IGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQsIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZSAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIDEuIGNvcnJlY3Qgb2ZmIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgKi9cXG4vKiAyLiBjb3JyZWN0IG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lLCBTYWZhcmkgb24gbWFjT1MgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIDEuIGNoYW5nZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuLyogMi4gY2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyogSU5URVJBQ1RJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBGaXJlZm94ICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2VycyAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcblxcbi8qIE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGFwaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hhcGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHlwby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IF9ldmVudHMgPSB7fTtcblxuICAgIC8vIHN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTVUJTQ1JJQklORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICAvLyB1bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZSgoX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQVUJMSVNISU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHMsXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnXG5cbi8vICogaW5pdGlhdGVzIGRlZmF1bHQgc3RhdGVcblxuY29uc3QgZGVmYXVsdFN0YXRlID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF9zYW1wbGVQcm9qZWN0VmFsdWVzID0gW1sncHJvamVjdCcsICcnLCAnVW5zb3J0ZWQnLCBcIlRoaXMgaXMgeW91ciB0YXNrcycgZGVmYXVsdCBsb2NhdGlvbi4gQW55IHRhc2tzIHdpdGhvdXQgYSBwcm9qZWN0IGxpdmUgaGVyZS5cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICBsZXQgX3NhbXBsZVRhc2tWYWx1ZXMgPSBbWyd0YXNrJywgJycsICdzaW5nbGV0b24nLCAnVGFzayAxJywgJ3RoaXMgaXMgYSBzYW1wbGUgdGFzaycsICcyMDAxLTAxLTAxJywgMywgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsndGFzaycsICcnLCAnc2luZ2xldG9uJywgJ1Rhc2sgMicsICd0aGlzIGlzICMyJywgJzIwMDItMDItMDInLCAyLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyd0YXNrJywgJycsICdjaGVja2xpc3QnLCAnVGFzayAzJywgJ3RoaXMgaXMgYSBjaGVja2xpc3QnLCAnMjAwMy0wMy0wMycsIDEsIDAsIFsnaXRlbSAxJywgJ2l0ZW0gMicsICdpdGVtIDMnXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgIC8vIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBfY3JlYXRlRGVmYXVsdFByb2plY3QoX3NhbXBsZVByb2plY3RWYWx1ZXNbMF0pO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfc2FtcGxlVGFza1ZhbHVlcy5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIF9jcmVhdGVEZWZhdWx0VGFzayhfc2FtcGxlVGFza1ZhbHVlc1t0XSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0UHJvamVjdChwcm9qZWN0VmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCBwcm9qZWN0VmFsdWVzKTsgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0VGFzayh0YXNrVmFsdWVzKSB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCB0YXNrVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LCAgIC8vIHVzZWQgYnkgaW5kZXguanNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRTdGF0ZTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRpdiwgaDEsIGgyLCB1bCwgbGksIHNwYW4sIGlucHV0LCBsYWJlbH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8vICYgbWFuYWdlcyBkaXNwbGF5IERPTSA8LT4gbGlicmFyeSBjb21tdW5pY2F0aW9uXG4vLyAmIGNvbnRhaW5zIGZhY3RvcmllcyBmb3IgZ2VuZXJhdGluZyBkaXNwbGF5IHNlY3Rpb24gRE9NIGVsZW1lbnRzIC8gZ3JvdXBpbmdzXG5cbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xuICAgIC8vIGRhdGFcbiAgICBsZXQgX3Rhc2tDb3VudGVyID0gMDtcblxuICAgIC8vIGNhY2hlIERPTVxuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKTtcbiAgICBsZXQgdGFza0NvdW50U3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50YWxseSBzcGFuJyk7XG5cbiAgICAvLyAqIGNyZWF0ZSB0YXNrIGxpc3RlbmVyIGluIF9yZW5kZXJUYXNrQ3JlYXRlQnV0dG9uKClcbiAgICAvLyAqIG1vZGlmeSAmIGRlbGV0ZSBjbGljayBsaXN0ZW5lcnMgaW4gX3JlbmRlci4uLkhlYWRlcigpXG4gICAgLy8gKiBjcmVhdGUgY2hlY2tsaXN0IGl0ZW0gbGlzdGVuZXIgaW4gX3JlbmRlckNoZWNrbGlzdERlc2NyaXRpb25Db250YWluZXIoKVxuXG4gICAgLy8gZGlzcGxheSBtYW5hZ2VyXG4gICAgZnVuY3Rpb24gX3VwZGF0ZURpc3BsYXkoaW5zdGFuY2VCdW5kbGUpIHtcbiAgICAgICAgbGV0IHZpZXdQcmVmZXJlbmNlID0gaW5zdGFuY2VCdW5kbGVbMF07XG5cbiAgICAgICAgc3dpdGNoICh2aWV3UHJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgICAgICBfY2xlYXJEaXNwbGF5KClcbiAgICAgICAgICAgICAgICBsZXQgdGFza0hlYWRlciA9IGgxKGluc3RhbmNlQnVuZGxlWzBdLCAnJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSGVhZGVyKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IChpbnN0YW5jZUJ1bmRsZS5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX3JlbmRlclRhc2soaW5zdGFuY2VCdW5kbGVbaV0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IChpbnN0YW5jZUJ1bmRsZS5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RJbnN0YW5jZSA9IGluc3RhbmNlQnVuZGxlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZW5kZXJQcm9qZWN0KHByb2plY3RJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZW5kZXJUYXNrKGluc3RhbmNlQnVuZGxlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdXBkYXRlSXRlbShpdGVtSW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IGNhcmRJRDtcbiAgICAgICAgbGV0IGNhcmQ7XG5cbiAgICAgICAgc3dpdGNoKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgKGl0ZW1JbnN0YW5jZS50eXBlID09PSAncHJvamVjdCcpOlxuICAgICAgICAgICAgICAgIGNhcmRJRCA9IGBwcm9qZWN0XyR7aXRlbUluc3RhbmNlLmlkfWA7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRJRCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFZhbHVlcyA9IFtpdGVtSW5zdGFuY2UudGl0bGUsIGl0ZW1JbnN0YW5jZS5kZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChwcm9qZWN0VmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsdWVzWzFdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ3NpbmdsZXRvbicgfHwgaXRlbUluc3RhbmNlLnR5cGUgPT09ICdjaGVja2xpc3QnKTpcbiAgICAgICAgICAgICAgICBjYXJkSUQgPSBgdGFza18ke2l0ZW1JbnN0YW5jZS5pZH1gO1xuICAgICAgICAgICAgICAgIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSUQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCB0YXNrVmFsdWVzID0gW2l0ZW1JbnN0YW5jZS50aXRsZSwgaXRlbUluc3RhbmNlLmRlc2NyaXB0aW9uLCBpdGVtSW5zdGFuY2UuZHVlRGF0ZSwgaXRlbUluc3RhbmNlLnByaW9yaXR5LCBpdGVtSW5zdGFuY2UucHJvamVjdElEXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXNrVmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW1JbnN0YW5jZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NpbmdsZXRvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlIGgyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza1ZhbHVlc1szXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3RDYXJkSUQgPSBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJykuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0UmVmZXJlbmNlID0gY3VycmVudFByb2plY3RDYXJkSUQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFza1ZhbHVlc1s0XSAhPT0gY3VycmVudFByb2plY3RSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RlbGV0ZVRhc2tDYXJkKGNhcmRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoaXRlbUluc3RhbmNlWzBdID09PSAnY2hlY2tib3gnKTogIC8vIGl0ZW1JbnN0YW5jZSBidW5kbGVkIG1hbnVhbGx5IGluIGxpYnJhcnkuanNcbiAgICAgICAgICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGl0ZW1JbnN0YW5jZVsxXTtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tJRCA9IGl0ZW1JbnN0YW5jZVsyXTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxDb250ZW50ID0gaXRlbUluc3RhbmNlWzNdO1xuICAgIFxuICAgICAgICAgICAgICAgIGNhcmRJRCA9IGB0YXNrXyR7dGFza1JlZmVyZW5jZX1fX2xpXyR7Y2hlY2tJRH1gO1xuICAgICAgICAgICAgICAgIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSUQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBjaGVja0xhYmVsID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbENvbnRlbnQ7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBoZWxwZXJzXG4gICAgZnVuY3Rpb24gX2NsZWFyRGlzcGxheSgpIHtcbiAgICAgICAgd2hpbGUgKHByb2plY3RDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlICh0YXNrQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignLScpO1xuICAgICAgICB9O1xuICAgICAgICBfcmVtb3ZlVGFza0NyZWF0ZUJ1dHRvbigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlVGFza0NhcmQoaWQpIHtcbiAgICAgICAgbGV0IHRhcmdldFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFyZ2V0VGFzaylcbiAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignLScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlQ2hlY2tsaXN0SXRlbShpZCkge1xuICAgICAgICBsZXQgbGlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dCMke2lkfWApLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCB1bENvbnRhaW5lciA9IGxpQ29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHVsQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxpQ29udGFpbmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2ZpbGxUYXNrQ291bnRlcihvcGVyYXRvcikge1xuICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICBfdGFza0NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIF90YXNrQ291bnRlci0tO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdGFza0NvdW50U3Bhbi50ZXh0Q29udGVudCA9IF90YXNrQ291bnRlcjtcbiAgICB9XG4gICAgXG4gICAgLy8gcHJvamVjdCBmYWN0b3JpZXNcbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgaWYgKHByb2plY3RDb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIF9jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY2FyZElEID0gJyNwcm9qZWN0XycgKyBwcm9qZWN0LmlkO1xuICAgICAgICBsZXQgcHJvamVjdENhcmQgPSBkaXYoJycsICcuY2FyZCcsICcucHJvamVjdCcsIGNhcmRJRCk7XG5cbiAgICAgICAgbGV0IHByb2plY3RIZWFkZXIgPSBfcmVuZGVyUHJvamVjdEhlYWRlcihwcm9qZWN0LmlkLCBwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRpdihwcm9qZWN0LmRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kKHByb2plY3RIZWFkZXIsIHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0LmlkICE9PSAwKSB7XG4gICAgICAgICAgICBfcmVuZGVyVGFza0NyZWF0ZUJ1dHRvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9maWxsVGFza0NvdW50ZXIoJycpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdEhlYWRlciA9IGZ1bmN0aW9uKGlkLCB0aXRsZSkge1xuICAgICAgICBsZXQgZGl2SGVhZGVyID0gZGl2KCcnLCAnLmhlYWRlcicpO1xuXG4gICAgICAgIGxldCBoMVRpdGxlID0gaDEodGl0bGUsICcudGl0bGUnKTtcbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGgxVGl0bGUpO1xuICAgICAgICBpZiAoaWQgIT09IDApIHtcbiAgICAgICAgICAgIGxldCBzcGFuTW9kaWZ5ID0gc3BhbignLi4uJywgJy5wcm9qZWN0JywgJy5tb2RpZnknKTtcbiAgICAgICAgICAgIC8vICogcHJvamVjdCBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICAgICAgc3Bhbk1vZGlmeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgLy8gISBhbGlnbiB0byBwYXNzIHNpbWlsYXIgYXJndW1lbnRzP1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChzcGFuTW9kaWZ5KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIGRpdkhlYWRlci5hcHBlbmQoaDFUaXRsZSwgc3Bhbk1vZGlmeSk7XG5cbiAgICAgICAgaWYgKGlkICE9PSAwKSB7XG4gICAgICAgICAgICBsZXQgc3BhbkRlbGV0ZSA9IHNwYW4oJ1gnLCAnLmRlbGV0ZScpO1xuICAgICAgICAgICAgc3BhbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQ7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlUHJvamVjdCcsIGNhcmRJRCk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoc3BhbkRlbGV0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGl2SGVhZGVyO1xuICAgIH1cblxuICAgIC8vIHRhc2sgZmFjdG9yaWVzXG4gICAgY29uc3QgX3JlbmRlclRhc2tDcmVhdGVCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGRpdkNyZWF0ZSA9IGRpdignKycsICcuY3JlYXRlJyk7XG5cbiAgICAgICAgZGl2Q3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrQ3JlYXRlSXRlbScsICd0YXNrJyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0YXNrQ29udHJvbHMgPSB0YXNrQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICB0YXNrQ29udHJvbHMuYXBwZW5kKGRpdkNyZWF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW1vdmVUYXNrQ3JlYXRlQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0YXNrQ29udHJvbHMgPSB0YXNrQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICBsZXQgY29udHJvbHNMZW5ndGggPSB0YXNrQ29udHJvbHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgbGFzdENvbnRyb2wgPSB0YXNrQ29udHJvbHMuY2hpbGRyZW5bY29udHJvbHNMZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAobGFzdENvbnRyb2wuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcmVhdGUnKSkge1xuICAgICAgICAgICAgdGFza0NvbnRyb2xzLnJlbW92ZUNoaWxkKGxhc3RDb250cm9sKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclRhc2sgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGxldCBjYXJkSUQgPSAndGFza18nICsgdGFzay5pZDtcbiAgICAgICAgbGV0IHRhc2tDYXJkO1xuXG4gICAgICAgIHN3aXRjaCAodGFzay50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzaW5nbGV0b24nOlxuICAgICAgICAgICAgICAgIHRhc2tDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLnNpbmdsZXRvbicsIGAjJHtjYXJkSUR9YClcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xldG9uQ2hlY2ttYXJrID0gaW5wdXQoJ2NoZWNrYm94JywgJycsICcnLCB0YXNrLmlkLCAnJyk7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZXRvbkNhcmRDb250ZW50ID0gX3JlbmRlclNpbmdsZXRvbkNvbnRlbnQodGFzay5pZCwgdGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZC5hcHBlbmQoc2luZ2xldG9uQ2hlY2ttYXJrLCBzaW5nbGV0b25DYXJkQ29udGVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICAgICAgICAgIHRhc2tDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLmNoZWNrbGlzdCcsIGAjJHtjYXJkSUR9YCk7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdENhcmRDb250ZW50ID0gX3JlbmRlckNoZWNrbGlzdENhcmRDb250ZW50cyh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtcyA9IF9yZW5kZXJDaGVja2JveENvbnRhaW5lcihjYXJkSUQsIHRhc2suaXRlbXMpO1xuICAgICAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZChjaGVja2xpc3RDYXJkQ29udGVudCwgY2hlY2tsaXN0SXRlbXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIF9maWxsVGFza0NvdW50ZXIoJysnKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclNpbmdsZXRvbkNvbnRlbnQgPSBmdW5jdGlvbihpZCwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgZGl2Q29udGVudCA9IGRpdignJywgJy5jb250ZW50Jyk7XG5cbiAgICAgICAgbGV0IHRhc2tIZWFkZXIgPSBfcmVuZGVyU2luZ2xldG9uSGVhZGVyKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZGl2KGRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmQodGFza0hlYWRlciwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJTaW5nbGV0b25IZWFkZXIgPSBmdW5jdGlvbihpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBkaXZIZWFkZXIgPSBkaXYoJycsICcuaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGxhYmVsQ2hlY2ttYXJrVGl0bGUgPSBsYWJlbCgnJywgaWQsICcudGl0bGUnKTtcbiAgICAgICAgbGV0IGgyVGl0bGVDb250ZW50ID0gaDIodGl0bGUsICcnKTtcbiAgICAgICAgbGFiZWxDaGVja21hcmtUaXRsZS5hcHBlbmRDaGlsZChoMlRpdGxlQ29udGVudCk7XG5cbiAgICAgICAgbGV0IHNwYW5EYXRlID0gc3BhbihkdWVEYXRlLCAnLmRhdGUnKTtcbiAgICAgICAgbGV0IHNwYW5Qcmlvcml0eSA9IHNwYW4ocHJpb3JpdHksICcucHJpb3JpdHknKTtcbiAgICAgICAgbGV0IHNwYW5Nb2RpZnkgPSBzcGFuKCcuLi4nLCAnLnRhc2snLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgc3BhbkRlbGV0ZSA9IHNwYW4oJ1gnLCAnLmRlbGV0ZScpO1xuXG4gICAgICAgIC8vICogc2luZ2xldG9uIG1vZGlmeS9kZWxldGUgZXZlbnRzXG4gICAgICAgIHNwYW5Nb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAgIC8vICEgYWxpZ24gdG8gcGFzcyBzaW1pbGFyIGFyZ3VtZW50cz9cbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBzcGFuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICBsZXQgdGFza0NhcmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQ7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tEZWxldGVUYXNrJywgdGFza0NhcmRJRCk7ICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmQobGFiZWxDaGVja21hcmtUaXRsZSwgc3BhbkRhdGUsIHNwYW5Qcmlvcml0eSwgc3Bhbk1vZGlmeSwgc3BhbkRlbGV0ZSk7XG4gICAgICAgIHJldHVybiBkaXZIZWFkZXI7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2xpc3RDYXJkQ29udGVudHMgPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBkaXZDb250ZW50ID0gZGl2KCcnLCAnLmNvbnRlbnQnKTtcbiAgICAgICAgbGV0IGNoZWNrbGlzdEhlYWRlciA9IF9yZW5kZXJDaGVja2xpc3RIZWFkZXIodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgbGV0IGNoZWNrbGlzdERlc2NyaXB0aW9uID0gX3JlbmRlckNoZWNrbGlzdFN1YmhlYWRlcihkZXNjcmlwdGlvbik7XG4gICAgICAgIFxuICAgICAgICBkaXZDb250ZW50LmFwcGVuZChjaGVja2xpc3RIZWFkZXIsIGNoZWNrbGlzdERlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2xpc3RIZWFkZXIgPSBmdW5jdGlvbih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGRpdkhlYWRlciA9IGRpdignJywgJy5oZWFkZXInKTtcblxuICAgICAgICBsZXQgaDJUaXRsZSA9IGgyKHRpdGxlLCAnLnRpdGxlJyk7XG4gICAgICAgIGxldCBzcGFuRGF0ZSA9IHNwYW4oZHVlRGF0ZSwgJy5kYXRlJyk7XG4gICAgICAgIGxldCBzcGFuUHJpb3JpdHkgPSBzcGFuKHByaW9yaXR5LCAnLnByaW9yaXR5Jyk7XG4gICAgICAgIGxldCBzcGFuTW9kaWZ5ID0gc3BhbignLi4uJywgJy50YXNrJywgJy5tb2RpZnknKTtcbiAgICAgICAgbGV0IHNwYW5EZWxldGUgPSBzcGFuKCdYJywgJy5kZWxldGUnKTtcblxuICAgICAgICAvLyAqIGNoZWNrbGlzdCBtb2RpZnkvZGVsZXRlIGV2ZW50c1xuICAgICAgICBzcGFuTW9kaWZ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBzcGFuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBjYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlVGFzaycsIGNhcmRJRCk7ICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdkhlYWRlci5hcHBlbmQoaDJUaXRsZSwgc3BhbkRhdGUsIHNwYW5Qcmlvcml0eSwgc3Bhbk1vZGlmeSwgc3BhbkRlbGV0ZSk7XG4gICAgICAgIHJldHVybiBkaXZIZWFkZXI7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJDaGVja2xpc3RTdWJoZWFkZXIgPSBmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICBsZXQgZGl2Q29udGFpbmVyID0gZGl2KCcnLCAnLmRlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRpdkRlc2NyaXB0aW9uID0gZGl2KGRlc2NyaXB0aW9uLCAnLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBzcGFuQ3JlYXRlID0gZGl2KCcrJywgJy5jcmVhdGUnKTtcblxuICAgICAgICAvLyAqIGNoZWNrbGlzdCBpdGVtIGNyZWF0ZSBldmVudFxuICAgICAgICBzcGFuQ3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmQnKS5pZC5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgbGV0IGZvcm1SZWZlcmVuY2VzID0gWydjaGVja2JveCcsIHRhc2tSZWZlcmVuY2VdO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrQ3JlYXRlSXRlbScsIGZvcm1SZWZlcmVuY2VzKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdkNvbnRhaW5lci5hcHBlbmQoZGl2RGVzY3JpcHRpb24sIHNwYW5DcmVhdGUpO1xuICAgICAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tib3hDb250YWluZXIgPSBmdW5jdGlvbih0YXNrQ2FyZElELCBpdGVtcykge1xuICAgICAgICBsZXQgdWxJdGVtID0gdWwoJycsICcuY2hlY2tib3hlcycpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGl0ZW1zLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgX3JlbmRlckNoZWNrYm94KHVsSXRlbSwgdGFza0NhcmRJRCwgaXRlbXNbaV0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHVsSXRlbTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrYm94ID0gZnVuY3Rpb24oY2hlY2tsaXN0Q29udGFpbmVyLCB0YXNrQ2FyZElELCBjaGVja0luZm8pIHtcbiAgICAgICAgbGV0IGNoZWNrSUQgPSBjaGVja0luZm9bMF07XG4gICAgICAgIGxldCBjaGVja0NvbnRlbnQgPSBjaGVja0luZm9bMV07XG5cbiAgICAgICAgbGV0IGxpQ2FyZElEID0gYCMke3Rhc2tDYXJkSUR9X19saV8ke2NoZWNrSUR9YDtcbiAgICAgICAgbGV0IGxpQ2FyZCA9IGxpKCcnLCAnLmNhcmQnLCBsaUNhcmRJRCk7XG5cbiAgICAgICAgbGV0IGNoZWNrYm94SUQgPSBgJHt0YXNrQ2FyZElEfV9fY2hlY2tib3hfJHtjaGVja0lEfWA7ICAvLyAjIG5vdCBuZWVkZWQgdnZcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gaW5wdXQoJ2NoZWNrYm94JywgJycsICcnLCBjaGVja2JveElELCAnJyk7ICAvLyBzZXRzIElEIGRpcmVjdGx5IHZpYSBkZWZhdWx0IG9iamVjdCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgICBsZXQgbGFiZWxDaGVja2JveCA9IGxhYmVsKGNoZWNrQ29udGVudCwgY2hlY2tib3hJRCwgJycpO1xuICAgICAgICBsZXQgY2hlY2tib3hDb250cm9scyA9IF9yZW5kZXJDaGVja2JveENvbnRyb2xzKGNoZWNrYm94SUQpO1xuXG4gICAgICAgIGxpQ2FyZC5hcHBlbmQoY2hlY2tib3gsIGxhYmVsQ2hlY2tib3gsIGNoZWNrYm94Q29udHJvbHMpO1xuICAgICAgICBjaGVja2xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlDYXJkKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlck5ld0NoZWNrYm94ID0gZnVuY3Rpb24oY2hlY2tsaXN0SW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBjaGVja2xpc3RJbnN0YW5jZVsxXVxuICAgICAgICBsZXQgdGFza0NhcmRJRCA9IGB0YXNrXyR7dGFza1JlZmVyZW5jZX1gO1xuICAgICAgICBsZXQgdWxUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYjJHt0YXNrQ2FyZElEfSB1bGApO1xuXG4gICAgICAgIGxldCBjaGVja1JlZmVyZW5jZSA9IGNoZWNrbGlzdEluc3RhbmNlWzJdO1xuICAgICAgICBsZXQgY2hlY2tDb250ZW50ID0gY2hlY2tsaXN0SW5zdGFuY2VbM107XG5cbiAgICAgICAgX3JlbmRlckNoZWNrYm94KHVsVGFyZ2V0LCB0YXNrQ2FyZElELCBbY2hlY2tSZWZlcmVuY2UsIGNoZWNrQ29udGVudF0pO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyQ2hlY2tib3hDb250cm9scyA9IGZ1bmN0aW9uKGNoZWNrSUQpIHtcbiAgICAgICAgbGV0IGRpdkNvbnRyb2xzID0gZGl2KCcnLCAnLmNoZWNrbGlzdC1pdGVtLWNvbnRyb2xzJyk7XG5cbiAgICAgICAgbGV0IHNwYW5Nb2RpZnkgPSBzcGFuKCcuLi4nLCAnLnRhc2snLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgc3BhbkRlbGV0ZSA9IHNwYW4oJ1gnLCAnLmRlbGV0ZScpO1xuXG4gICAgICAgIC8vICogY2hlY2tsaXN0IGl0ZW0gbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgc3Bhbk1vZGlmeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tNb2RpZnlJdGVtJywgZSk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgfSk7XG4gICAgICAgIHNwYW5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tEZWxldGVDaGVja2xpc3RJdGVtJywgY2hlY2tJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZDb250cm9scy5hcHBlbmRDaGlsZChzcGFuTW9kaWZ5KTtcbiAgICAgICAgZGl2Q29udHJvbHMuYXBwZW5kQ2hpbGQoc3BhbkRlbGV0ZSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdkNvbnRyb2xzO1xuICAgIH1cblxuXG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCd1cGRhdGVEaXNwbGF5VmlldycsIF91cGRhdGVEaXNwbGF5KTsgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9idW5kbGVJbnN0YW5jZXMoKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RDcmVhdGVkJywgX3JlbmRlclByb2plY3QpICAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2NyZWF0ZVByb2plY3QoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCd0YXNrQ3JlYXRlZCcsIF9yZW5kZXJUYXNrKTsgICAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2NyZWF0ZVRhc2soKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjaGVja2JveENyZWF0ZWQnLCBfcmVuZGVyTmV3Q2hlY2tib3gpOyAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVDaGVja2JveCgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnaXRlbU1vZGlmaWVkJywgX3VwZGF0ZUl0ZW0pOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfbW9kaWZ5Li4uKCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVQcm9qZWN0RnJvbVNlY3Rpb24nLCBfY2xlYXJEaXNwbGF5KSAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlUHJvamVjdCgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZVRhc2tGcm9tRGlzcGxheScsIF9kZWxldGVUYXNrQ2FyZCk7IC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9kZWxldGVUYXNrKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVtb3ZlQ2hlY2tsaXN0SXRlbUZyb21EaXNwbGF5JywgX2RlbGV0ZUNoZWNrbGlzdEl0ZW0pICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9kZWxldGVDaGVja2xpc3RJdGVtKCkpXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyIsIi8vICogZmFjdG9yeSBjbGFzcyBmb3IgYmFzZS1sZXZlbCBET00gZWxlbWVudHNcblxuLy8gZGF0YVxubGV0IF9hdHRyaWJ1dGVzID0gW107XG5sZXQgZWxlbWVudDtcblxuLy8gYmFzaWMgaGVscGVyIGZhY3Rvcmllc1xuY29uc3QgZGl2ID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3Qgc3BhbiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBwID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGgxID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBoMiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgdWwgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGxpID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBpbnB1dCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyLCBpZCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgZWxlbWVudC5pZCA9IFN0cmluZyhpZCk7XG4gICAgZWxlbWVudC5uYW1lID0gU3RyaW5nKG5hbWUpO1xuICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gU3RyaW5nKGlkKTtcbiAgICB9O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3Qgc2VsZWN0ID0gZnVuY3Rpb24obmFtZSwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50Lm5hbWUgPSBuYW1lO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3Qgb3B0aW9uID0gZnVuY3Rpb24odmFsdWUsIGNvbnRlbnQpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgbGFiZWwgPSBmdW5jdGlvbihjb250ZW50LCBmb3JSZWZlcmVuY2UsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LmZvciA9IFN0cmluZyhmb3JSZWZlcmVuY2UpO1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCBsZWdlbmQgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhdHRyaWJ1dGVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzW2ldWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCk7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZGl2IGFzIGRlZmF1bHQsIHNwYW4sIHAsIGgxLCBoMiwgdWwsIGxpLCBpbnB1dCwgc2VsZWN0LCBvcHRpb24sIGxhYmVsLCBsZWdlbmQgfTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRpdiwgc3BhbiwgcCwgaW5wdXQsIGxhYmVsLCBzZWxlY3QsIG9wdGlvbiwgbGVnZW5kIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8vICYgbWFuYWdlcyBkaXNwbGF5L3NpZGViYXIgc2VjdGlvbiBET01zIC0+IGZvcm0gc2VjdGlvbiBET01zIDwtPiBsaWJyYXJ5IGNvbW11bmljYXRpb25cbi8vICYgY29udGFpbnMgZmFjdG9yaWVzIGZvciBnZW5lcmF0aW5nIGZvcm0gc2VjdGlvbiBET00gZWxlbWVudHMgLyBncm91cGluZ3NcblxuY29uc3QgZm9ybXMgPSAoKCkgPT4ge1xuICAgIC8vIGxldCBfY3VycmVudEZvcm07XG4gICAgbGV0IF9jdXJyZW50Rm9ybVR5cGU7XG4gICAgbGV0IF9jdXJyZW50UHJvamVjdDtcblxuICAgIC8vIGNhY2hlIERPTVxuICAgIGxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgbGV0IGZvcm1GaWVsZHNldCA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKTtcbiAgICBsZXQgZm9ybUlucHV0czsgLy8gKiBxdWVyaWVkIGFmdGVyIGZvcm0gZWxlbWVudHMgYXJlIHJlbmRlcmVkXG4gICAgbGV0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uY29uZmlybScpO1xuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uY2FuY2VsJyk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnNcbiAgICBjb25maXJtQnV0dG9uLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIF9jb25maXJtSW5wdXQoZSk7XG4gICAgfSkpO1xuICAgIGNhbmNlbEJ1dHRvbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIF9jYW5jZWxJbnB1dCgpO1xuICAgIH0pKTtcblxuICAgIC8vIGZvcm0gbWFuYWdlcnNcbiAgICBmdW5jdGlvbiBfb3BlbkNyZWF0ZUZvcm0oZm9ybVJlZmVyZW5jZSkge1xuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSAoKHR5cGVvZiBmb3JtUmVmZXJlbmNlKSA9PT0gJ29iamVjdCcpOiAgIC8vICogc3RvcmVzIHRhc2sgcmVmZXJlbmNlIHdoZW4gY3JlYXRpbmcgbmV3IGNoZWNrbGlzdCBpdGVtXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBmb3JtUmVmZXJlbmNlWzFdO1xuICAgICAgICAgICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlWzBdKTtcbiAgICAgICAgICAgICAgICBfcmVuZGVyQ2hlY2tib3hGb3JtKHRhc2tSZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoKHR5cGVvZiBmb3JtUmVmZXJlbmNlKSA9PT0gJ3N0cmluZycpOlxuICAgICAgICAgICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jdXJyZW50Rm9ybVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVuZGVyUHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZW5kZXJUYXNrRm9ybSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgX3Nob3dGb3JtKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9vcGVuTW9kaWZ5SW5zdGFuY2VRdWVyeShldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0SXRlbVJlZmVyZW5jZXM7XG5cbiAgICAgICAgbGV0IGlzQ2hlY2tib3g7XG4gICAgICAgIHN3aXRjaCh0cnVlKSAge1xuICAgICAgICAgICAgY2FzZSAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKSA9PT0gbnVsbCk6XG4gICAgICAgICAgICAgICAgaXNDaGVja2JveCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKSAhPT0gbnVsbCk6XG4gICAgICAgICAgICAgICAgaXNDaGVja2JveCA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoIChpc0NoZWNrYm94KSB7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIHRhcmdldEl0ZW1SZWZlcmVuY2VzID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQuc3BsaXQoJ18nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICBsZXQgZm9ybVR5cGVSZWZlcmVuY2UgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hSZWZlcmVuY2UgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnbGkuY2FyZCcpLmlkLnNwbGl0KCdfXycpWzFdLnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICAgICAgdGFyZ2V0SXRlbVJlZmVyZW5jZXMgPSBbZm9ybVR5cGVSZWZlcmVuY2UsIFt0YXNrUmVmZXJlbmNlLCBjaGVja2JveFJlZmVyZW5jZV1dOyAvLyAqIHRhc2tSZWZlcmVuY2UgJiBjaGVja2JveFJlZmVyZW5jZSBtdXN0IGJlIGJ1bmRsZWQsIHNwbGl0IGluIGxpYnJhcnkuanNcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnb3Blbk1vZGlmeUluc3RhbmNlUXVlcnknLCB0YXJnZXRJdGVtUmVmZXJlbmNlcyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX29wZW5Nb2RpZnlGb3JtKGl0ZW1WYWx1ZXMpIHtcbiAgICAgICAgX3NldEZvcm1SZWZlcmVuY2VzKGl0ZW1WYWx1ZXNbMF0pO1xuICAgICAgICBfZmlsbEZvcm1WYWx1ZXMoaXRlbVZhbHVlcyk7XG4gICAgICAgIF9zaG93Rm9ybSgpO1xuICAgIH1cblxuICAgIC8vIGZvcm0gYWN0aW9uc1xuICAgIGZ1bmN0aW9uIF9jb25maXJtSW5wdXQoKSB7XG4gICAgICAgIHN3aXRjaCAoX2N1cnJlbnRGb3JtVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlLWNvbmZpcm0nOlxuICAgICAgICAgICAgICAgIF9oaWRlRm9ybSgpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0Q2FyZElEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnByb2plY3QuY2FyZCcpLmlkO1xuICAgICAgICAgICAgICAgIF9jbGVhckZvcm1WYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnY29uZmlybURlbGV0ZVByb2plY3QnLCBwcm9qZWN0Q2FyZElEKTsgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsZXQgaXNWYWxpZCA9IF92YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaGlkZUZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtVmFsdWVzID0gX2J1bmRsZUZvcm1WYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9maW5kRXJyb3JzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xlYXJGb3JtVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnY29uZmlybUlucHV0JywgZm9ybVZhbHVlcyk7ICAgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZmluZEVycm9ycygnc2hvdycpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jYW5jZWxJbnB1dCgpIHtcbiAgICAgICAgX2hpZGVGb3JtKCk7XG4gICAgICAgIF9jbGVhckZvcm1WYWx1ZXMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3Nob3dEZWxldGVQcm9qZWN0Q29uZmlybWF0aW9uKCkge1xuICAgICAgICBfc2V0Rm9ybVJlZmVyZW5jZXMoJ2RlbGV0ZS1jb25maXJtJyk7XG4gICAgICAgIF9yZW5kZXJEZWxldGVDb25maXJtYXRpb25Gb3JtKCk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIC8vIGhlbHBlciBtZXRob2RzICBcbiAgICBmdW5jdGlvbiBfc2V0Rm9ybVJlZmVyZW5jZXMoZm9ybVJlZmVyZW5jZSkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAncHJvamVjdC1mb3JtJ1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAncHJvamVjdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmlkID0gJ3Rhc2stZm9ybSdcbiAgICAgICAgICAgICAgICBfY3VycmVudEZvcm1UeXBlID0gJ3Rhc2snO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAnY2hlY2tib3gtZm9ybSdcbiAgICAgICAgICAgICAgICBfY3VycmVudEZvcm1UeXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZS1jb25maXJtJzpcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmlkID0gJ2RlbGV0ZS1jb25maXJtJztcbiAgICAgICAgICAgICAgICBfY3VycmVudEZvcm1UeXBlID0gJ2RlbGV0ZS1jb25maXJtJztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3NldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIChwcm9qZWN0WzBdICE9PSB1bmRlZmluZWQpOlxuICAgICAgICAgICAgICAgIF9jdXJyZW50UHJvamVjdCA9IHByb2plY3RbMV0uaWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9jdXJyZW50UHJvamVjdCA9IHByb2plY3QuaWQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zaG93Rm9ybSgpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9oaWRlRm9ybSgpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9maWxsRm9ybVZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgc3dpdGNoIChfY3VycmVudEZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBfcmVuZGVyUHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmb3JtSW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgX3JlbmRlclRhc2tGb3JtKCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAodmFsdWVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRzW2kgLSAxXS52YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlc1syXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzaW5nbGV0b24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0c1sxXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlucHV0c1syXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX2Rpc2FibGVUYXNrVHlwZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIF9yZW5kZXJDaGVja2JveEZvcm0oKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5zdGFuY2VSZWZlcmVuY2VzID0gYCR7dmFsdWVzWzFdfV8ke3ZhbHVlc1syXX1gOyAgIC8vICogcGFzc2VkIHRvIGxpYnJhcnkgZm9yIGluZGV4aW5nIGNvcnJlY3QgdGFzayAmJiBjaGVja2xpc3QgaXRlbVxuICAgICAgICAgICAgICAgIGZvcm1JbnB1dHNbMF0udmFsdWUgPSBpbnN0YW5jZVJlZmVyZW5jZXM7XG4gICAgICAgICAgICAgICAgZm9ybUlucHV0c1sxXS52YWx1ZSA9IHZhbHVlc1szXTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2J1bmRsZUZvcm1WYWx1ZXMoKSB7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coX2N1cnJlbnRGb3JtVHlwZSk7XG4gICAgICAgIGxldCBmb3JtVmFsdWVzID0gW107XG5cbiAgICAgICAgc3dpdGNoIChfY3VycmVudEZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmb3JtSW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaCgndGFzaycpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGZvcm1JbnB1dHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwIHx8ICgoaSA+IDIpICYmIChpIDwgOCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAxIHx8IGkgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtSW5wdXRzW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKCdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzWzBdLnZhbHVlLnNwbGl0KCdfJylbMF0pO1xuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzWzBdLnZhbHVlLnNwbGl0KCdfJylbMV0pO1xuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzWzFdLnZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZm9ybVZhbHVlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gX2NsZWFyRm9ybVZhbHVlcygpIHtcbiAgICAgICAgX3JlbW92ZUZvcm1FbGVtZW50cygpO1xuICAgICAgICBpZiAoX2N1cnJlbnRGb3JtVHlwZSAhPT0gJ2RlbGV0ZS1jb25maXJtJykge1xuICAgICAgICAgICAgaWYgKGZvcm1JbnB1dHNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgZm9ybUlucHV0c1swXS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvcm1JbnB1dHNbMF0udmFsdWUgPSAnJztcbiAgICAgICAgfTtcbiAgICAgICAgZm9ybUlucHV0cyA9ICcnO1xuICAgICAgICBfY3VycmVudEZvcm1UeXBlID0gJyc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9yZW1vdmVGb3JtRWxlbWVudHMoKSB7XG4gICAgICAgIGxldCBmaWVsZHNldENoaWxkcmVuTGVuZ3RoID0gZm9ybUZpZWxkc2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZmllbGRzZXRDaGlsZHJlbkxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgd2hpbGUgKGZvcm1GaWVsZHNldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZm9ybUZpZWxkc2V0LnJlbW92ZUNoaWxkKGZvcm1GaWVsZHNldC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2Rpc2FibGVUYXNrVHlwZVNlbGVjdGlvbigpIHtcbiAgICAgICAgZm9ybUlucHV0c1sxXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGZvcm1JbnB1dHNbMl0uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdmFsaWRhdGVGb3JtKCkge1xuICAgICAgICByZXR1cm4gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmb3JtJykuY2hlY2tWYWxpZGl0eSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZmluZEVycm9ycyhwcm9jZXNzKSB7XG4gICAgICAgIGxldCB0aXRsZUlucHV0O1xuICAgICAgICBmb3JtSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0LmlkLnNwbGl0KCctJylbMV0gPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBzd2l0Y2ggKHByb2Nlc3MpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIF9zaG93RXJyb3JNZXNzYWdlKHRpdGxlSW5wdXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgX2hpZGVFcnJvck1lc3NhZ2UodGl0bGVJbnB1dCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zaG93RXJyb3JNZXNzYWdlKGlucHV0KSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGlucHV0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxhYmVsLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9oaWRlRXJyb3JNZXNzYWdlKGlucHV0KSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGlucHV0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxhYmVsLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybSBmYWN0b3JpZXNcbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGZpZWxkc2V0TGVnZW5kID0gbGVnZW5kKCdDcmVhdGUgYSBOZXcgUHJvamVjdCcsICcnKTtcblxuICAgICAgICBsZXQgc3BhblJlcXVpcmVkQmFkZ2UgPSBzcGFuKCcqJywgJy5yZXF1aXJlZC1iYWRnZScpO1xuICAgICAgICBsZXQgc3BhbkVycm9yTWVzc2FnZSA9IHNwYW4oJ3BsZWFzZSBpbmNsdWRlIGEgdGl0bGUnLCAnLmVycm9yLW1lc3NhZ2UnLCAnLmhpZGUnKTtcbiAgICAgICAgbGV0IGxhYmVsVGl0bGUgPSBsYWJlbCgndGl0bGUgJywgJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgbGFiZWxUaXRsZS5hcHBlbmQoc3BhblJlcXVpcmVkQmFkZ2UsIHNwYW5FcnJvck1lc3NhZ2UpO1xuICAgICAgICBsZXQgaW5wdXRUaXRsZSA9IGlucHV0KCd0ZXh0JywgJ3Byb2plY3QtdGl0bGUnLCAndGl0bGUnLCAncHJvamVjdC10aXRsZScsICcnKTtcbiAgICAgICAgaW5wdXRUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGlucHV0VGl0bGUuYXJpYVJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBsZXQgbGFiZWxEZXNjcmlwdGlvbiA9IGxhYmVsKCdkZXNjcmlwdGlvbicsICcucHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGlucHV0KCd0ZXh0JywgJ3Byb2plY3QtZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nLCAncHJvamVjdC1kZXNjcmlwdGlvbicsICcnKTtcblxuICAgICAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGZpZWxkc2V0TGVnZW5kLCBsYWJlbFRpdGxlLCBpbnB1dFRpdGxlLCBsYWJlbERlc2NyaXB0aW9uLCBpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgICAgICBmb3JtSW5wdXRzID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyVGFza0Zvcm0gPSBmdW5jdGlvbigpIHsgICAgICAgIFxuICAgICAgICBsZXQgZmllbGRzZXRMZWdlbmQgPSBsZWdlbmQoJ0NyZWF0ZSBhIE5ldyBUYXNrJywgJycpO1xuXG4gICAgICAgIGxldCBsYWJlbFRhc2tUeXBlID0gbGFiZWwoJ1Rhc2sgVHlwZScsICcnKTtcbiAgICAgICAgbGV0IGRpdlR5cGVPcHRpb25zID0gZGl2KCcnLCAnLnR5cGUtb3B0aW9ucycpO1xuICAgICAgICBsZXQgcmFkaW9TaW5nbGV0b24gPSBpbnB1dCgncmFkaW8nLCAndHlwZScsICcnLCAnc2luZ2xldG9uJywgJy5pbnB1dCcsKTtcbiAgICAgICAgcmFkaW9TaW5nbGV0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGxldCBsYWJlbFNpbmdsZXRvbiA9IGxhYmVsKCdTaW5nbGUgVGFzaycsICdzaW5nbGV0b24nLCAnJyk7XG4gICAgICAgIGxldCByYWRpb0NoZWNrbGlzdCA9IGlucHV0KCdyYWRpbycsICd0eXBlJywgJycsICdjaGVja2xpc3QnLCAnLmlucHV0Jyk7XG4gICAgICAgIGxldCBsYWJlbENoZWNrbGlzdCA9IGxhYmVsKCdUYXNrIExpc3QnLCAnY2hlY2tsaXN0JywgJycpO1xuICAgICAgICBkaXZUeXBlT3B0aW9ucy5hcHBlbmQocmFkaW9TaW5nbGV0b24sIGxhYmVsU2luZ2xldG9uLCByYWRpb0NoZWNrbGlzdCwgbGFiZWxDaGVja2xpc3QpO1xuXG4gICAgICAgIGxldCBzcGFuUmVxdWlyZWRCYWRnZSA9IHNwYW4oJyonLCAnLnJlcXVpcmVkLWJhZGdlJyk7XG4gICAgICAgIGxldCBzcGFuRXJyb3JNZXNzYWdlID0gc3BhbigncGxlYXNlIGluY2x1ZGUgYSB0aXRsZScsICcuZXJyb3ItbWVzc2FnZScsICcuaGlkZScpO1xuICAgICAgICBsZXQgbGFiZWxUaXRsZSA9IGxhYmVsKCdUaXRsZSAnLCAndGFzay10aXRsZScpO1xuICAgICAgICBsYWJlbFRpdGxlLmFwcGVuZChzcGFuUmVxdWlyZWRCYWRnZSwgc3BhbkVycm9yTWVzc2FnZSk7XG4gICAgICAgIGxldCBpbnB1dFRpdGxlID0gaW5wdXQoJ3RleHQnLCAndGFzay10aXRsZScsICd0aXRsZScsICd0YXNrLXRpdGxlJywgJy5pbnB1dCcpO1xuICAgICAgICBpbnB1dFRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgaW5wdXRUaXRsZS5hcmlhUmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGxldCBsYWJlbERlc2NyaXB0aW9uID0gbGFiZWwoJ1Rhc2sgRGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBpbnB1dCgndGV4dCcsICdkZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicsICd0YXNrLWRlc2NyaXB0aW9uJywgJy5pbnB1dCcpO1xuXG4gICAgICAgIGxldCBsYWJlbER1ZURhdGUgPSBsYWJlbCgnRHVlIERhdGUnLCAnZHVlLWRhdGUnKTtcbiAgICAgICAgbGV0IGlucHV0RHVlRGF0ZSA9IGlucHV0KCdkYXRlJywgJ2R1ZS1kYXRlJywgJycsICdkdWUtZGF0ZScsICcuaW5wdXQnKTtcblxuICAgICAgICBsZXQgZGl2RHJvcGRvd25zID0gZGl2KCcnLCAnLmRyb3Bkb3ducycpO1xuICAgICAgICBsZXQgZGl2UHJpb3JpdHkgPSBkaXYoJycsICcnKTtcbiAgICAgICAgbGV0IGxhYmVsUHJpb3JpdHkgPSBsYWJlbCgnUHJpb3JpdHknLCAncHJpb3JpdHknLCAnJyk7XG4gICAgICAgIGxldCBzZWxlY3RQcmlvcml0eSA9IHNlbGVjdCgncHJpb3JpdHknLCAnI3ByaW9yaXR5JywgJy5pbnB1dCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQ7XG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAnbm9uZSAoICknO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAnbG93ICghKSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICdtZWRpdW0gKCEhKSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICdoaWdoICghISEpJztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgb3B0aW9uUHJpb3JpdHkgPSBvcHRpb24oaSwgY29udGVudCk7XG4gICAgICAgICAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25Qcmlvcml0eSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkaXZQcm9qZWN0ID0gZGl2KCcnLCAnJyk7XG4gICAgICAgIGxldCBsYWJlbFByb2plY3QgPSBsYWJlbCgnUHJvamVjdCcsICdwcm9qZWN0JywgJycpO1xuICAgICAgICBsZXQgc2VsZWN0UHJvamVjdCA9IHNlbGVjdCgncHJvamVjdCcsICcjcHJvamVjdCcsICcuaW5wdXQnKTtcbiAgICAgICAgZGl2UHJpb3JpdHkuYXBwZW5kKGxhYmVsUHJpb3JpdHksIHNlbGVjdFByaW9yaXR5KTtcbiAgICAgICAgZGl2UHJvamVjdC5hcHBlbmQobGFiZWxQcm9qZWN0LCBzZWxlY3RQcm9qZWN0KTtcbiAgICAgICAgZGl2RHJvcGRvd25zLmFwcGVuZChkaXZQcmlvcml0eSwgZGl2UHJvamVjdCk7XG5cbiAgICAgICAgZm9ybUZpZWxkc2V0LmFwcGVuZChmaWVsZHNldExlZ2VuZCwgbGFiZWxUYXNrVHlwZSwgZGl2VHlwZU9wdGlvbnMsIGxhYmVsVGl0bGUsIGlucHV0VGl0bGUsIGxhYmVsRGVzY3JpcHRpb24sIGlucHV0RGVzY3JpcHRpb24sIGxhYmVsRHVlRGF0ZSwgaW5wdXREdWVEYXRlLCBkaXZEcm9wZG93bnMpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0UmVmZXJlbmNlQ29udGFpbmVyID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBwcm9qZWN0UmVmZXJlbmNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG5cbiAgICAgICAgZm9ybUlucHV0cyA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0Jyk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuUHJvamVjdE9wdGlvbnNRdWVyeScsICcnKTsgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdE9wdGlvbnMgPSBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBsZXQgcHJvamVjdERyb3Bkb3duID0gZm9ybUlucHV0c1s3XTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXJyYXkubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBhcnJheVtpXVswXTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SUQgPSBhcnJheVtpXVsxXTtcbiAgICAgICAgICAgIGxldCBvcHRpb25Qcm9qZWN0ID0gb3B0aW9uKHByb2plY3RJRCwgcHJvamVjdE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoX2N1cnJlbnRQcm9qZWN0ID09PSBwcm9qZWN0SUQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25Qcm9qZWN0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb2plY3REcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb25Qcm9qZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrYm94Rm9ybSA9IGZ1bmN0aW9uKHRhc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgbGV0IGZpZWxkc2V0TGVnZW5kID0gbGVnZW5kKCdDcmVhdGUgYSBOZXcgQ2hlY2tsaXN0IEl0ZW0nLCAnJyk7XG5cbiAgICAgICAgbGV0IHNwYW5SZXF1aXJlZEJhZGdlID0gc3BhbignKicsICcucmVxdWlyZWQtYmFkZ2UnKTtcbiAgICAgICAgbGV0IHNwYW5FcnJvck1lc3NhZ2UgPSBzcGFuKCdwbGVhc2UgaW5jbHVkZSBhIHRpdGxlJywgJy5lcnJvci1tZXNzYWdlJywgJy5oaWRlJyk7XG4gICAgICAgIGxldCB0aXRsZUxhYmVsID0gbGFiZWwoJ3RpdGxlICcsICdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIHRpdGxlTGFiZWwuYXBwZW5kKHNwYW5SZXF1aXJlZEJhZGdlLCBzcGFuRXJyb3JNZXNzYWdlKTtcbiAgICAgICAgbGV0IGlucHV0VGl0bGUgPSBpbnB1dCgndGV4dCcsICdjaGVja2JveC10aXRsZScsICd0aXRsZScsICdjaGVja2JveC10aXRsZScsICcnKTtcbiAgICAgICAgaW5wdXRUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGlucHV0VGl0bGUuYXJpYVJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBmb3JtRmllbGRzZXQuYXBwZW5kKGZpZWxkc2V0TGVnZW5kLCB0aXRsZUxhYmVsLCBpbnB1dFRpdGxlKTtcblxuICAgICAgICBmb3JtSW5wdXRzID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBmb3JtSW5wdXRzWzBdLnZhbHVlID0gdGFza1JlZmVyZW5jZTsgICAgLy8gKiBwYXNzZWQgdG8gbGlicmFyeS5qcyBmb3IgaW5kZXhpbmcgY29ycmVjdCB0YXNrXG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJEZWxldGVDb25maXJtYXRpb25Gb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBmaWVsZHNldExlZ2VuZCA9IGxlZ2VuZCgnRGVsZXRlIHRoaXMgUHJvamVjdCcsICcnKTtcblxuICAgICAgICBsZXQgcDEgPSBwKCdEZWxldGluZyBhIHByb2plY3Qgd2lsbCBhbHNvIGRlbGV0ZSBhbGwgb2YgaXRzIHRhc2tzLicsICcnKTtcbiAgICAgICAgbGV0IHAyID0gcCgnQXJlIHlvdSBTVVJFIHlvdSB3YW50IHRvIHByb2NlZWQ/JywgJycpO1xuICAgICAgICBcbiAgICAgICAgZm9ybUZpZWxkc2V0LmFwcGVuZChmaWVsZHNldExlZ2VuZCwgcDEsIHAyKTtcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0NyZWF0ZUl0ZW0nLCBfb3BlbkNyZWF0ZUZvcm0pOyAgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKGNyZWF0ZVRhc2tCdXR0b24gY2xpY2tFdmVudCwgX3JlbmRlckNoZWNrbGlzdFN1YmhlYWRlcigpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrQ3JlYXRlUHJvamVjdCcsIF9vcGVuQ3JlYXRlRm9ybSk7ICAgIC8vIHB1Ymxpc2hpbmcgZnJvbSBzaWRlYmFyLmpzIChjcmVhdGVQcm9qZWN0QnV0dG9uIGNsaWNrRXZlbnQpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja01vZGlmeUl0ZW0nLCBfb3Blbk1vZGlmeUluc3RhbmNlUXVlcnkpOyAgLy8gcHVibGlzaGluZyBmcm9tIGRpc3BsYXkuanMgKF9yZW5kZXIuLi5IZWFkZXIoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbG9zZU1vZGlmeUluc3RhbmNlUXVlcnknLCBfb3Blbk1vZGlmeUZvcm0pOyAgLy8gcHVibGlzaGluZyBmcm9tIGxpYnJhcnkuanMgKF9xdWVyeUl0ZW1JbnN0YW5jZSgpKTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RDcmVhdGVkJywgX3NldEN1cnJlbnRQcm9qZWN0KTsgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2NyZWF0ZVByb2plY3QoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCd1cGRhdGVEaXNwbGF5VmlldycsIF9zZXRDdXJyZW50UHJvamVjdCkgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2J1bmRsZUluc3RhbmNlcygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2Nsb3NlUHJvamVjdE9wdGlvbnNRdWVyeScsIF9yZW5kZXJQcm9qZWN0T3B0aW9ucyk7ICAvLyBwdWJsaXNoaW5nIGZyb20gbGlicmFyeS5qcyAoX3F1ZXJ5UHJvamVjdE5hbWVJRCgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tEZWxldGVQcm9qZWN0JywgX3Nob3dEZWxldGVQcm9qZWN0Q29uZmlybWF0aW9uKTsgICAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlclByb2plY3RIZWFkZXIoKSlcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zOyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzJztcblxuLy8gJiAnYmFja2VuZCcgbWFuYWdlciBtb2R1bGUgY29udGFpbmluZyBwcm9qZWN0L3Rhc2sgc3RhdGVzLCBjbGFzc2VzLCAmIG1ldGhvZHNcblxuY29uc3QgbGlicmFyeSA9ICgoKSA9PiB7XG4gICAgLy8gZHluYW1pYyBkYXRhXG4gICAgbGV0IF9wcm9qZWN0TGlicmFyeSA9IFtdO1xuICAgIGxldCBfdGFza0xpYnJhcnkgPSBbXTtcbiAgICBsZXQgX3Rhc2tDb3VudGVyID0gMDtcbiAgICBsZXQgX3Byb2plY3RDb3VudGVyID0gMDtcblxuICAgIC8vIGZhY3Rvcmllc1xuICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb2plY3RJRCwgcHJvamVjdFRpdGxlLCBwcm9qZWN0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICdwcm9qZWN0JztcbiAgICAgICAgICAgIHRoaXMuaWQgPSBwcm9qZWN0SUQ7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldHRlcnNcbiAgICAgICAgc2V0IHNldFRpdGxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFRhc2sge1xuICAgICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICAgIGNvbnN0cnVjdG9yKHRhc2tJRCwgcHJvamVjdElELCB0YXNrVHlwZSwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWUsIHRhc2tQcmlvcml0eSwgdGFza0l0ZW1zKSB7XG4gICAgICAgICAgICBsZXQgaXRlbUNvdW50ID0gMDtcblxuICAgICAgICAgICAgdGhpcy5pZCA9IHRhc2tJRDtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdGFza1R5cGU7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGFza1RpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IHRhc2tEdWU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NoZWNrbGlzdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tJdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRhc2tJdGVtcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtQnVuZGxlID0gW2l0ZW1Db3VudCwgdGFza0l0ZW1zW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtQnVuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0dGVyc1xuICAgICAgICBzZXQgc2V0VGl0bGUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy50aXRsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldERlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXREdWVEYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5kdWVEYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXRQcm9qZWN0SUQodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLnByb2plY3RJRCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdElEID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldCBzZXRDaGVja2JveEl0ZW0odmFsdWVBcnJheSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdmFsdWVBcnJheVswXTtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gdmFsdWVBcnJheVsxXTtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICE9PSB0aGlzLml0ZW1zW2luZGV4XVsxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdWzFdID0gY29udGVudDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXR0ZXJcbiAgICBmdW5jdGlvbiBfc2V0SW5zdGFuY2VWYWx1ZXModmFsdWVzKSB7XG4gICAgICAgIGxldCBsaWJyYXJ5UmVmZXJlbmNlID0gdmFsdWVzWzBdO1xuICAgICAgICBsZXQgaW5zdGFuY2VSZWZlcmVuY2UgPSB2YWx1ZXNbMV07XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoMCwgMik7ICAgIC8vIFt0aXRsZSwgZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFt0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsICdwcmlvcml0eScsICdwcm9qZWN0SUQnLCBbdGFnc11dXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2cobGlicmFyeVJlZmVyZW5jZSk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coaW5zdGFuY2VSZWZlcmVuY2UpO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHZhbHVlcyk7XG5cblxuICAgICAgICBzd2l0Y2ggKGxpYnJhcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5zdGFuY2VSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVQcm9qZWN0KHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9tb2RpZnlQcm9qZWN0KGluc3RhbmNlUmVmZXJlbmNlLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluc3RhbmNlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SUQgICAgICAgICAgICB0eXBlICAgICAgIHRpdGxlICAgIGRlc2NyaXB0aW9uICBkdWVEYXRlICAgIHByaW9yaXR5ICAgICAgICAgICAgIGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybVZhbHVlc1Jlb3JkZXJlZCA9IFtwYXJzZUludCh2YWx1ZXNbNV0pLCB2YWx1ZXNbMF0sIHZhbHVlc1sxXSwgdmFsdWVzWzJdLCB2YWx1ZXNbM10sIHBhcnNlSW50KHZhbHVlc1s0XSksIHZhbHVlc1s2XV1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUYXNrKGZvcm1WYWx1ZXNSZW9yZGVyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfbW9kaWZ5VGFzayhpbnN0YW5jZVJlZmVyZW5jZSwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtUmVmZXJlbmNlID0gdmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtQ29udGVudCA9IHZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gaW5zdGFuY2VSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0lEID0gdmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tJbnN0YW5jZSA9IF90YXNrTGlicmFyeVt0XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjaGVja0lEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVDaGVja2JveCh0YXNrSW5zdGFuY2UsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tb2RpZnlDaGVja2JveCh0YXNrSW5zdGFuY2UsIGNoZWNrbGlzdEl0ZW1SZWZlcmVuY2UsIGNoZWNrbGlzdEl0ZW1Db250ZW50KTsgLy8gZm9ybVZhbHVlc1swXSBuZWVkZWQgdG8gcGFzcyBzaW5nbGUgdmFsdWUgZnJvbSBmb3JtVmFsdWVzW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXJzXG4gICAgZnVuY3Rpb24gX3F1ZXJ5SXRlbUluc3RhbmNlKGl0ZW1SZWZlcmVuY2VzKSB7XG4gICAgICAgIGxldCBsaWJyYXJ5UmVmZXJlbmNlID0gaXRlbVJlZmVyZW5jZXNbMF07XG4gICAgICAgIGxldCBpbnN0YW5jZVJlZmVyZW5jZSA9IGl0ZW1SZWZlcmVuY2VzWzFdO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGxpYnJhcnlSZWZlcmVuY2UpO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGluc3RhbmNlUmVmZXJlbmNlKTtcblxuICAgICAgICBsZXQgaXRlbVZhbHVlQXJyYXk7XG4gICAgICAgIHN3aXRjaCAobGlicmFyeVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Byb2plY3RMaWJyYXJ5W3BdLmlkID09IGluc3RhbmNlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IF9wcm9qZWN0TGlicmFyeVtwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1WYWx1ZUFycmF5ID0gWydwcm9qZWN0JywgaXRlbS5pZCwgaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbl07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSBpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWVBcnJheSA9IFsndGFzaycsIGl0ZW0uaWQsIGl0ZW0udHlwZSwgaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5LCBpdGVtLnByb2plY3RJRF07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGluc3RhbmNlUmVmZXJlbmNlWzBdOyAgICAgICAvLyAqIHVuYnVuZGxlZCBmcm9tIGRvbURpc3BsYXkuanMgKF9vcGVuTW9kaWZ5Rm9ybVF1ZXJ5KCkpXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94UmVmZXJlbmNlID0gaW5zdGFuY2VSZWZlcmVuY2VbMV07ICAgLy8gKiB1bmJ1bmRsZWQgZnJvbSBkb21EaXNwbGF5LmpzIChfb3Blbk1vZGlmeUZvcm1RdWVyeSgpKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbXMgPSBfdGFza0xpYnJhcnlbdF0uaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChjaGVja2xpc3RJdGVtcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tsaXN0SXRlbXNbaV1bMF0gPT0gY2hlY2tib3hSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlQXJyYXkgPSBbJ2NoZWNrYm94JywgdGFza1JlZmVyZW5jZSwgY2hlY2tsaXN0SXRlbXNbaV1bMF0sIGNoZWNrbGlzdEl0ZW1zW2ldWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coaXRlbVZhbHVlQXJyYXkpO1xuICAgICAgICBldmVudHMucHVibGlzaCgnY2xvc2VNb2RpZnlJbnN0YW5jZVF1ZXJ5JywgaXRlbVZhbHVlQXJyYXkpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX3F1ZXJ5UHJvamVjdE5hbWVzSURzKCkge1xuICAgICAgICBsZXQgbmFtZUlEQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgbmFtZUlEQXJyYXkucHVzaChbX3Byb2plY3RMaWJyYXJ5W3BdLnRpdGxlLCBfcHJvamVjdExpYnJhcnlbcF0uaWRdKTtcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnY2xvc2VQcm9qZWN0T3B0aW9uc1F1ZXJ5JywgbmFtZUlEQXJyYXkpIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX2J1bmRsZUluc3RhbmNlcyh2aWV3UHJlZmVyZW5jZSwgcXVlcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlQnVuZGxlID0gW107XG5cbiAgICAgICAgbGV0IHF1ZXJ5UHJvamVjdHMgPSBmYWxzZTtcbiAgICAgICAgbGV0IHF1ZXJ5VGFza3MgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodmlld1ByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgICAgICAgcXVlcnlUYXNrcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b2RheSc6XG4gICAgICAgICAgICAgICAgcXVlcnlUYXNrcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cGNvbWluZyc6XG4gICAgICAgICAgICAgICAgcXVlcnlUYXNrcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbnl0aW1lJzpcbiAgICAgICAgICAgICAgICBxdWVyeVRhc2tzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIHF1ZXJ5UHJvamVjdHMgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYHF1ZXJ5UHJvamVjdHM6ICR7cXVlcnlQcm9qZWN0c31gKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhgcXVlcnlUYXNrczogJHtxdWVyeVRhc2tzfWApO1xuXG4gICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2godmlld1ByZWZlcmVuY2UpO1xuICAgICAgICBpZiAocXVlcnlQcm9qZWN0cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgICAgIGlmIChfcHJvamVjdExpYnJhcnlbcF0uaWQgPT0gcXVlcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaChfcHJvamVjdExpYnJhcnlbcF0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0ucHJvamVjdElEID09IHF1ZXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2goX3Rhc2tMaWJyYXJ5W3RdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVRhc2tzID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodmlld1ByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKF90YXNrTGlicmFyeVt0XSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FueXRpbWUnOlxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHRhc2tzXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRhc2sgaGFzIG5vIGR1ZSBkYXRlLCBwdXNoIHRvIGluc3RhbmNlQnVuZGxlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coaW5zdGFuY2VCdW5kbGUpO1xuICAgICAgICBldmVudHMucHVibGlzaCgndXBkYXRlRGlzcGxheVZpZXcnLCBpbnN0YW5jZUJ1bmRsZSk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBtZXRob2RzXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVByb2plY3QoYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgbGV0IF9pZCA9IF9wcm9qZWN0Q291bnRlcjtcbiAgICAgICAgbGV0IF9uZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoX2lkLCAuLi5hdHRyaWJ1dGVBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgcHJvamVjdDonKVxuICAgICAgICBjb25zb2xlLmxvZyhfbmV3UHJvamVjdCk7XG4gICAgICAgIF9wcm9qZWN0TGlicmFyeS5wdXNoKF9uZXdQcm9qZWN0KTtcbiAgICAgICAgX3Byb2plY3RDb3VudGVyKys7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Byb2plY3RDcmVhdGVkJywgX25ld1Byb2plY3QpOyAgLy8gc3Vic2NyaWJlZCBieSBkaXNwbGF5LmpzLCBzaWRlYmFyLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVUYXNrKGF0dHJpYnV0ZUFycmF5KSB7XG4gICAgICAgIGxldCBfaWQgPSBfdGFza0NvdW50ZXI7XG4gICAgICAgIGxldCBfbmV3VGFzayA9IG5ldyBUYXNrKF9pZCwgLi4uYXR0cmlidXRlQXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3IHRhc2s6JylcbiAgICAgICAgY29uc29sZS5sb2coX25ld1Rhc2spO1xuICAgICAgICBfdGFza0xpYnJhcnkucHVzaChfbmV3VGFzayk7XG4gICAgICAgIF90YXNrQ291bnRlcisrO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCd0YXNrQ3JlYXRlZCcsIF9uZXdUYXNrKTsgICAgLy8gc3Vic2NyaWJlZCBieSBkaXNwbGF5RE9NLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jcmVhdGVDaGVja2JveCh0YXNrLCBpdGVtVmFsdWUpIHtcbiAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zTGVuZ3RoID0gdGFzay5pdGVtcy5sZW5ndGg7XG4gICAgICAgIGxldCBuZXdJdGVtSUQ7XG5cbiAgICAgICAgc3dpdGNoIChjaGVja2xpc3RJdGVtc0xlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG5ld0l0ZW1JRCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxldCBsYXN0SXRlbUlEID0gdGFzay5pdGVtc1tjaGVja2xpc3RJdGVtc0xlbmd0aCAtIDFdWzBdO1xuICAgICAgICAgICAgICAgIG5ld0l0ZW1JRCA9IGxhc3RJdGVtSUQgKyAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIGl0ZW1WYWx1ZVswXSA9IG5ld0l0ZW1JRDtcbiAgICAgICAgdGFzay5pdGVtcy5wdXNoKGl0ZW1WYWx1ZSk7XG4gICAgICAgIGxldCBfbmV3Q2hlY2tib3ggPSBbJ2NoZWNrYm94JywgdGFzay5pZCwgdGFzay5pdGVtc1tjaGVja2xpc3RJdGVtc0xlbmd0aF1bMF0sIHRhc2suaXRlbXNbY2hlY2tsaXN0SXRlbXNMZW5ndGhdWzFdXTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgY2hlY2tib3g6JylcbiAgICAgICAgY29uc29sZS5sb2codGFzay5pdGVtcyk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NoZWNrYm94Q3JlYXRlZCcsIF9uZXdDaGVja2JveCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIG1vZGlmeSBtZXRob2RzXG4gICAgZnVuY3Rpb24gX21vZGlmeVByb2plY3QodGFyZ2V0SXRlbUlELCBhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZUFycmF5KVxuICAgICAgICBsZXQgcHJvamVjdEluc3RhbmNlO1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IChfcHJvamVjdExpYnJhcnkubGVuZ3RoKTsgcCsrKSB7XG4gICAgICAgICAgICBpZiAoX3Byb2plY3RMaWJyYXJ5W3BdLmlkID09IHRhcmdldEl0ZW1JRCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RJbnN0YW5jZSA9IF9wcm9qZWN0TGlicmFyeVtwXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coJ29yaWdpbmFsIHByb2plY3QgaW5zdGFuY2U6JylcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5zdGFuY2UpO1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IChhdHRyaWJ1dGVBcnJheS5sZW5ndGgpOyBhKyspIHtcbiAgICAgICAgICAgIHN3aXRjaChhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2Uuc2V0VGl0bGUgPSBhdHRyaWJ1dGVBcnJheVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2Uuc2V0RGVzY3JpcHRpb24gPSBhdHRyaWJ1dGVBcnJheVsxXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RpZmllZCBwcm9qZWN0IGluc3RhbmNlOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbnN0YW5jZSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIHByb2plY3RJbnN0YW5jZSk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanMsIGRvbVNpZGViYXIuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX21vZGlmeVRhc2sodGFyZ2V0SXRlbUlELCBhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZUFycmF5KTtcbiAgICAgICAgbGV0IHRhc2tJbnN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2UgPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbCB0YXNrIGluc3RhbmNlOicpXG4gICAgICAgIC8vLy8gY29uc29sZS5sb2codGFza0luc3RhbmNlKTtcbiAgICAgICAgZm9yIChsZXQgYSA9IDE7IGEgPCAoYXR0cmlidXRlQXJyYXkubGVuZ3RoKTsgYSsrKSB7XG4gICAgICAgICAgICAvLyBbdHlwZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCAncHJpb3JpdHknLCAncHJvamVjdElEJ11cbiAgICAgICAgICAgIHN3aXRjaChhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0VGl0bGUgPSBhdHRyaWJ1dGVBcnJheVsxXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2UuZGVzY3JpcHRpb24gPSBhdHRyaWJ1dGVBcnJheVsyXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0RHVlRGF0ZSA9IGF0dHJpYnV0ZUFycmF5WzNdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5zZXRQcmlvcml0eSA9IHBhcnNlSW50KGF0dHJpYnV0ZUFycmF5WzRdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0UHJvamVjdElEID0gcGFyc2VJbnQoYXR0cmlidXRlQXJyYXlbNV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ21vZGlmaWVkIHRhc2sgaW5zdGFuY2U6JylcbiAgICAgICAgY29uc29sZS5sb2codGFza0luc3RhbmNlKTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnaXRlbU1vZGlmaWVkJywgdGFza0luc3RhbmNlKTsgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qcywgZG9tU2lkZWJhci5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfbW9kaWZ5Q2hlY2tib3godGFza0luc3RhbmNlLCB0YXJnZXRJdGVtSUQsIHRhcmdldENvbnRlbnQpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyh0YXJnZXRJdGVtSUQsIHRhcmdldENvbnRlbnQpO1xuICAgICAgICBsZXQgY2hlY2tib3hJbnN0YW5jZTtcbiAgICAgICAgbGV0IHRhcmdldENoZWNrbGlzdEl0ZW1zID0gdGFza0luc3RhbmNlLml0ZW1zO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0YXJnZXRDaGVja2xpc3RJdGVtcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRDaGVja2xpc3RJdGVtc1tpXVswXSA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0VmFsdWVBcnJheSA9IFtpLCB0YXJnZXRDb250ZW50XTsgIC8vICogaSByZXByZXNlbnRzIGl0ZW0gaW5kZXhcbiAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2Uuc2V0Q2hlY2tib3hJdGVtID0gdGFyZ2V0VmFsdWVBcnJheTtcbiAgICAgICAgICAgICAgICBjaGVja2JveEluc3RhbmNlID0gWydjaGVja2JveCcsIHRhc2tJbnN0YW5jZS5pZCwgdGFyZ2V0SXRlbUlELCB0YXJnZXRDb250ZW50XTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coJ29yaWdpbmFsIHRhc2sgKGNoZWNrYm94KSBpbnN0YW5jZTonKVxuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RpZmllZCB0YXNrIChjaGVja2JveCkgaW5zdGFuY2U6JylcbiAgICAgICAgY29uc29sZS5sb2codGFza0luc3RhbmNlLml0ZW1zKTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgnaXRlbU1vZGlmaWVkJywgY2hlY2tib3hJbnN0YW5jZSk7ICAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgfVxuXG4gICAgLy8gZGVsZXRlIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBfZGVsZXRlUHJvamVjdChjYXJkSUQpIHtcbiAgICAgICAgbGV0IGNhcmRSZWZlcmVuY2VzID0gY2FyZElELnNwbGl0KCdfJyk7XG4gICAgICAgIGxldCBwcm9qZWN0UmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMV07XG4gICAgICAgIGxldCBwcm9qZWN0TG9vcFN0YXJ0ID0gX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCAtIDE7XG5cbiAgICAgICAgZm9yIChsZXQgcCA9IHByb2plY3RMb29wU3RhcnQ7IHAgPiAtMTsgcC0tKSB7XG4gICAgICAgICAgICBpZiAoX3Byb2plY3RMaWJyYXJ5W3BdLmlkID09IHByb2plY3RSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBfcHJvamVjdExpYnJhcnkuc3BsaWNlKHAsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdGFza0xvb3BTdGFydCA9IF90YXNrTGlicmFyeS5sZW5ndGggLSAxO1xuICAgICAgICBmb3IgKGxldCB0ID0gdGFza0xvb3BTdGFydDsgdCA+IC0xOyB0LS0pIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0ucHJvamVjdElEID09IHByb2plY3RSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBfdGFza0xpYnJhcnkuc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3QgZGVsZXRlIHJlc3VsdHM6JylcbiAgICAgICAgY29uc29sZS5sb2coX3Byb2plY3RMaWJyYXJ5KTtcbiAgICAgICAgY29uc29sZS5sb2coX3Rhc2tMaWJyYXJ5KTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgncmVtb3ZlUHJvamVjdEZyb21TZWN0aW9uJywgY2FyZElEKTsgICAgLy8gc3Vic2NyaWJlZCBieSBkaXNwbGF5LmpzLCBzaWRlYmFyLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVUYXNrKGNhcmRJRCkge1xuICAgICAgICBsZXQgY2FyZFJlZmVyZW5jZXMgPSBjYXJkSUQuc3BsaXQoJ18nKTtcbiAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBjYXJkUmVmZXJlbmNlc1sxXTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Rhc2tMaWJyYXJ5LnNwbGljZSh0LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YXNrIGRlbGV0ZSByZXN1bHRzOicpXG4gICAgICAgIGNvbnNvbGUubG9nKF90YXNrTGlicmFyeSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZVRhc2tGcm9tRGlzcGxheScsIGNhcmRJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlQ2hlY2tsaXN0SXRlbShjaGVja0lEKSB7XG4gICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gY2hlY2tJRC5zcGxpdCgnX18nKVswXS5zcGxpdCgnXycpWzFdO1xuICAgICAgICBsZXQgY2hlY2tSZWZlcmVuY2UgPSBjaGVja0lELnNwbGl0KCdfXycpWzFdLnNwbGl0KCdfJylbMV07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gdGFza1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtc0FycmF5ID0gX3Rhc2tMaWJyYXJ5W3RdLml0ZW1zO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGNoZWNrbGlzdEl0ZW1zQXJyYXkubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2xpc3RJdGVtc0FycmF5W2ldWzBdID09IGNoZWNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RJdGVtc0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2xpc3QgaXRlbSBkZWxldGUgcmVzdWx0czonKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0SXRlbXNBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZUNoZWNrbGlzdEl0ZW1Gcm9tRGlzcGxheScsIGNoZWNrSUQpOyAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnb3BlblZpZXdQcmVmZXJlbmNlUXVlcnknLCBfYnVuZGxlSW5zdGFuY2VzKSAvLyBwdWJsaXNoZWQgZnJvbSBzaWRlYmFyLmpzIChfY2xpY2tWaWV3UHJlZmVyZW5jZUxpbmsoKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NvbmZpcm1JbnB1dCcsIF9zZXRJbnN0YW5jZVZhbHVlcyk7IC8vcHVibGlzaGVkIGZyb20gZGVmYXVsdC5qcyAoaW5pdCgpKSwgZm9ybXMuanMgKF9jb25maXJtSW5wdXQoKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ29wZW5Nb2RpZnlJbnN0YW5jZVF1ZXJ5JywgX3F1ZXJ5SXRlbUluc3RhbmNlKTsgICAgLy8gcHVibGlzaGVkIGZyb20gZm9ybXMuanMgKF9vcGVuTW9kaWZ5UXVlcnkoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdvcGVuUHJvamVjdE9wdGlvbnNRdWVyeScsIF9xdWVyeVByb2plY3ROYW1lc0lEcykgIC8vIHB1Ymxpc2hlZCBmcm9tIGZvcm1zLmpzIChfc2hvd0Zvcm0oKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NvbmZpcm1EZWxldGVQcm9qZWN0JywgX2RlbGV0ZVByb2plY3QpOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBmb3Jtcy5qcyAoY29uZmlybURlbGV0ZUJ1dHRvbiBldmVudExpc3RlbmVyKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrRGVsZXRlVGFzaycsIF9kZWxldGVUYXNrKTsgICAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlci4uLih0YXNrKUhlYWRlcnMoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0RlbGV0ZUNoZWNrbGlzdEl0ZW0nLCBfZGVsZXRlQ2hlY2tsaXN0SXRlbSkgIC8vIHB1Ymxpc2hlZCBmcm9tIGRpc3BsYXkuanMgKF9yZW5kZXJDaGVja2JveENvbnRyb2xzKCkpXG59KSgpOyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzLmpzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgbGl9IGZyb20gJy4vZWxlbWVudHMnO1xuXG4vLyAmIG1hbmFnZXMgc2lkZWJhciBzZWN0aW9uIERPTSA8LT4gbGlicmFyeSBjb21tdW5pY2F0aW9uXG4vLyAmIGNvbnRhaW5zIGZhY3RvcmllcyBmb3IgZ2VuZXJhdGluZyBkaXNwbGF5IHNlY3Rpb24gRE9NIGVsZW1lbnRzIC8gZ3JvdXBpbmdzXG5cbmNvbnN0IHNpZGViYXIgPSAoKCkgPT4ge1xuICAgIC8vIGNhY2hlIGRvbVxuICAgIGxldCB2aWV3UHJlZnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuXG4gICAgbGV0IHZpZXdBbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1hbGwnKTtcbiAgICBsZXQgdmlld1RvZGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctdG9kYXknKTtcbiAgICBsZXQgdmlld1VwY29taW5nQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctdXBjb21pbmcnKTtcbiAgICBsZXQgdmlld0FueXRpbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1hbnl0aW1lJyk7XG4gICAgbGV0IHZpZXdVbnNvcnRlZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LXByb2plY3RfMCcpO1xuICAgIGxldCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy12aWV3cycpO1xuICAgIGxldCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnZpZXctcHJlZnMtY29udGFpbmVyIHNwYW4uY3JlYXRlJyk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnNcbiAgICAvLyA/IGhpZGUgc2lkZWJhciB3aGVuIG5vdCBmb2N1c2VkID9cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdmlld1ByZWZzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICB9KTtcbiAgICBcbiAgICB2aWV3QWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdhbGwnLCBlLnRhcmdldC5pZCk7XG4gICAgfSk7XG4gICAgdmlld1RvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndmlldyB0YXNrcyBkdWUgdG9kYXknKTtcbiAgICB9KTtcbiAgICB2aWV3VXBjb21pbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2aWV3IHRhc2tpbmcgZHVlIHRoaXMgd2VlaycpO1xuICAgIH0pO1xuICAgIHZpZXdBbnl0aW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndmlldyB0YXNrcyB3aXRoIG5vIGR1ZSBkYXRlcycpO1xuICAgIH0pO1xuICAgIHZpZXdVbnNvcnRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsIGUudGFyZ2V0LmlkKTtcbiAgICB9KTtcbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tDcmVhdGVQcm9qZWN0JywgJ3Byb2plY3QnKTsgICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgIH0pO1xuXG4gICAgLy8gbWFuYWdlcnNcbiAgICBmdW5jdGlvbiBfY2hhbmdlVmlld1ByZWZlcmVuY2UocHJlZmVyZW5jZUtleXdvcmQsIHRhcmdldElEKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldElEKTtcbiAgICAgICAgbGV0IHF1ZXJ5UmVmZXJlbmNlO1xuXG4gICAgICAgIHN3aXRjaCAocHJlZmVyZW5jZUtleXdvcmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgICAgICAvLyBnZXQgdG9kYXkncyBkYXRlIChmcm9tIGRhdGUgdGltZSBhcGkpXG4gICAgICAgICAgICAgICAgLy8gdGFyZ2V0IHJlZmVyZW5jZSA9IHRvZGF5J3MgZGF0ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXBjb21pbmcnOlxuICAgICAgICAgICAgICAgIC8vIGdldCB0b2RheSdzIGRhdGUgKGRyb20gZGF0ZSB0aW1lIGFwaSlcbiAgICAgICAgICAgICAgICAvLyBhZGQgNyBkYXlzIHRvIGRhdGVcbiAgICAgICAgICAgICAgICAvLyB0YXJnZXQgcmVmZXJlbmNlID0gdG9kYXkncyBkYXRlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRJRCA9IHRhcmdldElELnNwbGl0KCdfJyk7XG4gICAgICAgICAgICAgICAgcXVlcnlSZWZlcmVuY2UgPSBzcGxpdElEWzFdO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gZGVmYXVsdDpcbiAgICAgICAgICAgIC8vICAgICBxdWVyeVJlZmVyZW5jZSA9ICcnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuVmlld1ByZWZlcmVuY2VRdWVyeScsIHByZWZlcmVuY2VLZXl3b3JkLCBxdWVyeVJlZmVyZW5jZSk7IC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cblxuICAgIC8vIGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0TGluayA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgIT09IDApIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHByb2plY3QuaWQ7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgbGlJRCA9IGAjdmlldy1wcm9qZWN0XyR7aWR9YDtcbiAgICAgICAgICAgIGxldCBsaVByb2plY3RMaW5rID0gbGkodGl0bGUsIGxpSUQpO1xuXG4gICAgICAgICAgICBsaVByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ3Byb2plY3QnLCBlLnRhcmdldC5pZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGxpUHJvamVjdExpbmspO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfbW9kaWZ5Vmlld1ByZWZlcmVuY2VMaW5rKGl0ZW1JbnN0YW5jZSkge1xuICAgICAgICBpZiAoaXRlbUluc3RhbmNlLnR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHZpZXctcHJvamVjdF8ke2l0ZW1JbnN0YW5jZS5pZH1gKTtcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gaXRlbUluc3RhbmNlLnRpdGxlO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVtb3ZlUHJvamVjdExpbmsocHJvamVjdENhcmRJRCkge1xuICAgICAgICBsZXQgbGlua1JlZmVyZW5jZSA9IHByb2plY3RDYXJkSUQuc3BsaXQoJ18nKVsxXTtcblxuICAgICAgICBsZXQgbGlQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHZpZXctcHJvamVjdF8ke2xpbmtSZWZlcmVuY2V9YCk7XG4gICAgICAgIGxldCB1bENvbnRhaW5lciA9IGxpUHJvamVjdC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHVsQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxpUHJvamVjdCk7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlICh1bENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAxKTpcbiAgICAgICAgICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ3Byb2plY3QnLCB1bENvbnRhaW5lci5sYXN0Q2hpbGQuaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ3Byb2plY3QnLCAncHJvamVjdF8wJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuICAgIFxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RDcmVhdGVkJywgX3JlbmRlclByb2plY3RMaW5rKTsgLy8gcHVibGlzaGVkIGJ5IGxpYnJhcnkuanMgKF9jcmVhdGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVtb3ZlUHJvamVjdEZyb21TZWN0aW9uJywgX3JlbW92ZVByb2plY3RMaW5rKTsgICAvLyBwdWJsaXNoZWQgYnkgbGlicmFyeS5qcyAoX2RlbGV0ZVByb2plY3QoKSk7XG5cblxuXG5cblxuXG5cblxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnaXRlbU1vZGlmaWVkJywgX21vZGlmeVZpZXdQcmVmZXJlbmNlTGluayk7ICAgLy8gcHVibGlzaGVkIGJ5IGxpYnJhcnkuanMgKF9tb2RpZnkuLi4oKSlcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2xheW91dC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy90eXBvLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NoYXBpbmcuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY29sb3JzLmNzcyc7XG5cbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi9zY3JpcHRzL2RlZmF1bHQuanMnO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9zY3JpcHRzL2Rpc3BsYXknO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vc2NyaXB0cy9mb3Jtcyc7XG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NjcmlwdHMvc2lkZWJhcic7XG5pbXBvcnQgbGlicmFyeSBmcm9tICcuL3NjcmlwdHMvbGlicmFyeSc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcblxuLy8gYWN0aW9uc1xuZGVmYXVsdFN0YXRlLmluaXQoKTtcbmV2ZW50cy52aWV3RXZlbnRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9