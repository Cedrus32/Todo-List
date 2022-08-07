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
        console.log(instanceBundle);
        let viewPreference = instanceBundle[0];
        console.log(viewPreference);

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
        //// console.log(itemInstance);
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
    
                let taskValues = [itemInstance.title, itemInstance.description, itemInstance.dueDate, itemInstance.priority];
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
                            console.log(title);
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
        console.log(id);
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
        let spanModify = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('...', '.project', '.modify');
        // * project modify/delete events
        spanModify.addEventListener('click', (e) => {   // ! align to pass similar arguments?
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickModifyItem', e);   // subscribed by forms.js
        });
        divHeader.append(h1Title, spanModify);

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
                let singletonCheckmark = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('checkbox', task.id, '');
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
            console.log(taskReference);
            let formReferences = ['checkbox', taskReference];
            _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clickCreateItem', formReferences);   // subscribed by forms.js
        });

        divContainer.append(divDescription, spanCreate);
        return divContainer;
    }
    const _renderCheckboxContainer = function(taskCardID, items) {
        let ulItem = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.ul)('', '.checkboxes');

        console.log(items);
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
        let checkbox = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('checkbox', checkboxID, '');  // sets ID directly via default object prototype methods
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
const input = function(type, id, placeholder) {
    element = document.createElement('input');
    element.type = type;
    element.id = String(id);
    element.name = String(id);
    element.placeholder = placeholder;
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
    let formInputs;
    // let projectForm = document.getElementById('project-form');
    // let deleteConfirmAlert = document.getElementById('delete-confirm');
    // let taskForm = document.getElementById('task-form');
    // let checkboxForm = document.getElementById('checkbox-form');

    // let projectFormInputs = projectForm.querySelectorAll('input');
    // let taskFormInputs = taskForm.querySelectorAll('.input');
    // let checkboxFormInputs = checkboxForm.querySelectorAll('input');

    let confirmButton = document.querySelectorAll('button.confirm');
    let cancelButton = document.querySelectorAll('button.cancel');
    // let confirmDeleteFormButton = document.querySelector('button.delete-confirm');
    // let cancelDeleteFormButton = document.querySelector('button.delete-cancel');

    // event listeners
    confirmButton.forEach(btn => btn.addEventListener('click', (e) => {
        _confirmInput(e);
    }));
    cancelButton.forEach(btn => btn.addEventListener('click', () => {
        _cancelInput();
    }));
    // confirmDeleteFormButton.addEventListener('click', () => {
    //     deleteConfirmAlert.classList.add('hide');
    //     let projectCardID = document.querySelector('div.project.card').id;
    //     events.publish('confirmDeleteProject', projectCardID);  // subscribed by library.js
    // })
    // cancelDeleteFormButton.addEventListener('click', () => {
    //     deleteConfirmAlert.classList.add('hide');
    // });

    // form managers
    function _openCreateForm(formReference) {
        console.log(formReference);

        switch (true) {
            case ((typeof formReference) === 'object'):   // * stores task reference when creating new checklist item
                checkboxFormInputs[0].value = formReference[1];
                _setFormReferences(formReference[0]);
                _renderCheckboxForm();
                break;
            case ((typeof formReference) === 'string'):
                _setFormReferences(formReference);
                switch (_currentFormType) {
                    case 'project':
                        _renderProjectForm();
                    //     break;
                    // case 'task':
                    //     _renderTaskForm();
                    // case 'delete':
                    //     _renderDeleteConfirmForm();
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
            case true:
                let formTypeReference = 'checkbox';
                let taskReference = event.target.closest('div.card').id.split('_')[1];
                let checkboxReference = event.target.closest('li.card').id.split('__')[1].split('_')[1];
                targetItemReferences = [formTypeReference, [taskReference, checkboxReference]]; // * taskReference & checkboxReference must be bundled, split in library.js
                break;
            case false:
                targetItemReferences = event.target.closest('div.card').id.split('_');
        };

        _setFormReferences(targetItemReferences[0]);    // ? move to openModifyForm incase query fails?
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openModifyInstanceQuery', targetItemReferences);  // subscribed by library.js
    }
    function _openModifyForm(itemValues) {
        _fillFormValues(itemValues);
        _disableTaskTypeSelection();
        _showForm();
    }

    // form actions
    function _confirmInput() {
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
    }
    function _cancelInput() {
        _hideForm();
        _clearFormValues();
    }
    function _showDeleteProjectConfirmation() {
        deleteConfirmAlert.classList.remove('hide');
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
                for (let i = 0; i < (values.length); i++) {
                    projectFormInputs[i].value = values[i];
                };
                break;
            case 'task':
    
                for (let i = 0; i < (values.length); i++) {
                    switch (i) {
                        case 0:
                            taskFormInputs[i].value = values[i];
                            break;
                        case 1:
                            switch (values[1]) {
                                case 'singleton':
                                    taskFormInputs[1].checked = true;
                                    break;
                                case 'checklist':
                                    taskFormInputs[2].checked = true;
                            };
                            break;
                        default:
                            taskFormInputs[i + 1].value = values[i];
                    };
                };
                _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openProjectOptionsQuery', '');  // subscribed by library.js
                break;
            case 'checkbox':
                let instanceReferences = `${values[1]}_${values[2]}`;
                checkboxFormInputs[0].value = instanceReferences;
                checkboxFormInputs[1].value = values[3];
        };
    }
    function _removeProjectOptions(taskFormInputsIndex) {
        while (taskFormInputs[taskFormInputsIndex].firstChild) {
            taskFormInputs[taskFormInputsIndex].removeChild(taskFormInputs[taskFormInputsIndex].lastChild);
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
                //// console.log(formInputs);
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
                    if (i === 8) {
                        let tagsArrayed = formInputs[i].value.split(' ');
                        formValues.push(tagsArrayed);
                    };
                };
                break;
            case 'checkbox':
                formValues.push('checkbox');
                formValues.push(formInputs[0].value.split('_')[0]);
                formValues.push(formInputs[0].value.split('_')[1]);
                formValues.push(formInputs[1].value);
        };

        console.log(formValues);
        return formValues;
    }
    function _clearFormValues() {
        _removeFormElements();

        // switch(_currentFormType) {
        //     case 'project':
        //         formInputs.forEach(input => input.value = '');
        //         break;
        //     case 'task':
        //         for (let i = 0; i < (taskFormInputs.length); i++) {
        //             switch (true) {
        //                 case ((1 === 0) || ((i > 2) && (i < 6))):
        //                     taskFormInputs[i].value = '';
        //                     break;
        //                 case (i === 1):
        //                     taskFormInputs[i].checked = true;
        //                     break;
        //                 case (i === 2):
        //                     taskFormInputs[i].checked = false;
        //                     break;
        //                 case (i === 6):
        //                     taskFormInputs[i].selectedIndex = 0;
        //                     break;
        //                 case (i === 7):
        //                     _removeProjectOptions(i);
        //             };
        //         };
        //         break;
        //     case 'checkbox':
        //         checkboxFormInputs.forEach(input => input.value = '');
        // };

        // _currentForm = '';
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

        // while (taskFormInputs[taskFormInputsIndex].firstChild) {
        //     taskFormInputs[taskFormInputsIndex].removeChild(taskFormInputs[taskFormInputsIndex].lastChild);
        // };
        // while (formFieldset.children.length > 0) {
        //     formFieldset.remove((formFieldset.lastChild));
        // };

        console.log(formFieldset);
    }
    function _enableTaskTypeSelection() {
        taskFormInputs[1].disabled = false;
        taskFormInputs[2].disabled = false;
    }
    function _disableTaskTypeSelection() {
        taskFormInputs[1].disabled = true;
        taskFormInputs[2].disabled = true;
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
    const _renderProjectOptions = function(array) {
        let projectDropdown = taskFormInputs[7];
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
    const _renderProjectForm = function() {
        let fieldsetLegend = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.legend)('Create a New Project', '');

        let spanRequiredBadge = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('*', '.required-badge');
        let spanErrorMessage = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.span)('please include a title', '.error-message', '.hide');
        let titleLabel = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('title ', 'project-title');
        titleLabel.append(spanRequiredBadge, spanErrorMessage);
        let titleInput = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'project-title', 'title');

        let descriptionLabel = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.label)('description', '.project-description');
        let descriptionInput = (0,_elements__WEBPACK_IMPORTED_MODULE_1__.input)('text', 'project-description', 'description');

        formFieldset.append(fieldsetLegend, titleLabel, titleInput, descriptionLabel, descriptionInput);

        formInputs = document.querySelectorAll('input');
    }
    const _renderTaskForm = function() {
        // render form inputs/labels

        _enableTaskTypeSelection();

        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('openProjectOptionsQuery', '');  // subscribed by library.js
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
        console.log(libraryReference);
        console.log(instanceReference);
        console.log(values);


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
        console.log(libraryReference);
        console.log(instanceReference);

        let itemValueArray;
        switch (libraryReference) {
            case 'project':
                for (let p = 0; p < (_projectLibrary.length); p++) {
                    if (_projectLibrary[p].id == instanceReference) {
                        let item = _projectLibrary[p];
                        itemValueArray = [item.id, item.title, item.description];
                    };
                };
                break;
            case 'task':
                for (let t = 0; t < (_taskLibrary.length); t++) {
                    if (_taskLibrary[t].id == instanceReference) {
                        let item = _taskLibrary[t];
                        itemValueArray = [item.id, item.type, item.title, item.description, item.dueDate, item.priority, item.projectID];
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

        console.log(itemValueArray);
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

        console.log(`queryProjects: ${queryProjects}`);
        console.log(`queryTasks: ${queryTasks}`);

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

        console.log(instanceBundle);
        _events__WEBPACK_IMPORTED_MODULE_0__["default"].publish('updateDisplayView', instanceBundle);    // subscribed by domDisplay.js
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
        console.log('original project instance:')
        console.log(projectInstance);
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
        console.log('original task instance:')
        console.log(taskInstance);
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
        console.log('original task (checkbox) instance:')
        console.log(taskInstance);
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

        console.log(cardID);
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

            let liID = `#view_${id}`;
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
        console.log(linkReference);

        let liProject = document.getElementById(`view_${linkReference}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNDO0FBQ0Y7QUFDRztBQUNEOztBQUVtQjtBQUNSO0FBQ0o7QUFDSTtBQUNBO0FBQ1Y7O0FBRTlCO0FBQ0EsZ0VBQWlCO0FBQ2pCLDJEQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9jb2xvcnMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3NoYXBpbmcuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdHlwby5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2NvbG9ycy5jc3M/YjBkOSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2xheW91dC5jc3M/ZDgxMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc2hhcGluZy5jc3M/MGU5YyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3R5cG8uY3NzPzYwZWMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9saWJyYXJ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyLFxcbiNzaWRlYmFyLFxcbiNkaXNwbGF5LFxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2lkZWJhcixcXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XFxufVxcblxcbnNlY3Rpb24uZm9ybS1jb250YWluZXI6bm90KC5oaWRlKSB+IC5zaG93LWZpbHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5yZXF1aXJlZC1iYWRnZSxcXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7OztJQUlJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyLFxcbiNzaWRlYmFyLFxcbiNkaXNwbGF5LFxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2lkZWJhcixcXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XFxufVxcblxcbnNlY3Rpb24uZm9ybS1jb250YWluZXI6bm90KC5oaWRlKSB+IC5zaG93LWZpbHRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5yZXF1aXJlZC1iYWRnZSxcXG4uZXJyb3ItbWVzc2FnZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLXBhZDogMWVtO1xcbiAgICAtLW1haW4tZ2FwOiAxZW07XFxuXFxuICAgIC0tbWVkLXBhZDogMC41ZW07XFxuXFxuICAgIC0tc21hbGwtcGFkOiAwLjI1ZW07XFxuICAgIC0tc21hbGwtZ2FwOiAwLjI1ZW07XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4gICAgbGkge1xcbiAgICAgICAgcGFkZGluZzogMGVtO1xcbiAgICB9XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuICAgIGhlYWRlcixcXG4gICAgI3NpZGViYXIsXFxuICAgICNkaXNwbGF5IHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkKTtcXG4gICAgfVxcblxcblxcbi8qIC0tLSBTSURFQkFSICovXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcblxcbiNzaWRlYmFyIHtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tbWFpbi1nYXApOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyhjYWxjKHZhcigtLW1haW4tcGFkKSAqIDIpICsgMS42NWVtKTsgbGVmdDogMGVtO1xcbn1cXG5cXG4gICAgLnZpZXctcHJlZnMtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1nYXApO1xcbiAgICB9XFxuXFxuICAgICAgICAjc2lkZWJhciB1bCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG4gICAgICAgIH1cXG5cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlOyBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIFxcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4gICAgc2VjdGlvbi5mb3JtLWNvbnRhaW5lcjpub3QoLmhpZGUpIH4gLnNob3ctZmlsdGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMHB4OyByaWdodDogMHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG5cXG4gICAgICAgIGhlaWdodDogMTAwdmg7IHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbmZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiAgICAuZHJvcGRvd25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5kcm9wZG93bnMgZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICB9XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgIGhlYWRlcidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5IGRpc3BsYXknO1xcblxcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG5cXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcblxcbiAgICAgICAgI2Rpc3BsYXkge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZGlzcGxheTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZGlzcGxheS1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuaGVhZGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgZGl2LmNhcmQsXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLW1lZC1wYWQpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAudGFzay1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnNpbmdsZXRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc21hbGwtcGFkKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5zaW5nbGV0b24gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zbWFsbC1wYWQpICogMSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbHMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFncyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jaGVja2xpc3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB1bCBsaSBsYWJlbCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtJQUNJLGVBQWU7SUFDZixlQUFlOztJQUVmLGdCQUFnQjs7SUFFaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztBQUVKO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0lBRUk7OztRQUdJLHdCQUF3QjtJQUM1Qjs7O0FBR0osZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBRWhCO0lBQ0k7OzJCQUV1QjtJQUN2QixrQkFBa0I7SUFDbEIsNkNBQTZDLEVBQUUsU0FBUztBQUM1RDs7SUFFSTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztRQUVJO1lBQ0ksYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixvQkFBb0I7UUFDeEI7O0FBRVIsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjOztBQUVkO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdDQUFnQztJQUNoQyxVQUFVOztJQUVWLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVTs7UUFFVixhQUFhLEVBQUUsWUFBWTtJQUMvQjs7QUFFSjtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOztRQUVJO1lBQ0ksYUFBYTtZQUNiLGlCQUFpQjs7WUFFakIsVUFBVTtRQUNkOztBQUVSO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjs7SUFFWjtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCOzhDQUNzQzs7UUFFdEMsZUFBZTtRQUNmLFdBQVc7SUFDZjs7QUFFSixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLG1CQUFtQjs7UUFFWDtZQUNJLGlCQUFpQjs7WUFFakIsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUI7UUFDdkI7O0FBRVIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7O1FBRVo7WUFDSSxrQkFBa0I7UUFDdEI7O1lBRUk7Z0JBQ0ksYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLHFCQUFxQjs7Z0JBRXJCLFlBQVk7WUFDaEI7O2dCQUVJO29CQUNJLGFBQWE7b0JBQ2IsMkJBQTJCO29CQUMzQixtQkFBbUI7b0JBQ25CLHFCQUFxQjs7b0JBRXJCLFdBQVc7Z0JBQ2Y7O29CQUVJO3dCQUNJLGtCQUFrQjtvQkFDdEI7O2dCQUVKOztvQkFFSSx1QkFBdUI7Z0JBQzNCOztnQkFFQTtvQkFDSSxhQUFhO29CQUNiLDJCQUEyQjtnQkFDL0I7O29CQUVJO3dCQUNJLGtCQUFrQjtvQkFDdEI7O2dCQUVKO29CQUNJLGFBQWE7b0JBQ2IsdUJBQXVCO2dCQUMzQjs7b0JBRUk7d0JBQ0ksOEJBQThCO29CQUNsQzs7b0JBRUE7d0JBQ0ksc0NBQXNDO29CQUMxQzs7b0JBRUE7d0JBQ0ksYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLHFCQUFxQjs7d0JBRXJCLFdBQVc7b0JBQ2Y7O3dCQUVJOzRCQUNJLGFBQWE7NEJBQ2IscUJBQXFCOzRCQUNyQix5QkFBeUI7d0JBQzdCOzs0QkFFSTtnQ0FDSSxhQUFhO2dDQUNiLHFCQUFxQjtnQ0FDckIsZUFBZTs0QkFDbkI7O2dCQUVaO29CQUNJLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixxQkFBcUI7Z0JBQ3pCOztvQkFFSTt3QkFDSSxhQUFhO29CQUNqQjs7d0JBRUk7NEJBQ0ksa0JBQWtCO3dCQUN0Qjs7b0JBRUo7d0JBQ0ksYUFBYTt3QkFDYixtQkFBbUI7b0JBQ3ZCOzt3QkFFSTs0QkFDSSxrQkFBa0I7d0JBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcbi8qIEdMT0JBTCAqL1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLXBhZDogMWVtO1xcbiAgICAtLW1haW4tZ2FwOiAxZW07XFxuXFxuICAgIC0tbWVkLXBhZDogMC41ZW07XFxuXFxuICAgIC0tc21hbGwtcGFkOiAwLjI1ZW07XFxuICAgIC0tc21hbGwtZ2FwOiAwLjI1ZW07XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4gICAgbGkge1xcbiAgICAgICAgcGFkZGluZzogMGVtO1xcbiAgICB9XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuICAgIGhlYWRlcixcXG4gICAgI3NpZGViYXIsXFxuICAgICNkaXNwbGF5IHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkKTtcXG4gICAgfVxcblxcblxcbi8qIC0tLSBTSURFQkFSICovXFxuLyogLS0tIFNJREVCQVIgKi9cXG4vKiAtLS0gU0lERUJBUiAqL1xcblxcbiNzaWRlYmFyIHtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tbWFpbi1nYXApOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyhjYWxjKHZhcigtLW1haW4tcGFkKSAqIDIpICsgMS42NWVtKTsgbGVmdDogMGVtO1xcbn1cXG5cXG4gICAgLnZpZXctcHJlZnMtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1nYXApO1xcbiAgICB9XFxuXFxuICAgICAgICAjc2lkZWJhciB1bCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLW1haW4tZ2FwKTtcXG4gICAgICAgIH1cXG5cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG4vKiAtLS0gRk9STVMgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlOyBsZWZ0OjUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIFxcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xcbn1cXG5cXG4gICAgc2VjdGlvbi5mb3JtLWNvbnRhaW5lcjpub3QoLmhpZGUpIH4gLnNob3ctZmlsdGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMHB4OyByaWdodDogMHB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG5cXG4gICAgICAgIGhlaWdodDogMTAwdmg7IHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbmZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbiAgICAuZHJvcGRvd25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5kcm9wZG93bnMgZGl2IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcblxcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICB9XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiAtLS0gQ09OVEVOVCAqL1xcbi8qIC0tLSBDT05URU5UICovXFxuLyogLS0tIENPTlRFTlQgKi9cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXIgIGhlYWRlcidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5IGRpc3BsYXknO1xcblxcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4vKiAtLS0tLS0tIEhFQURFUiAqL1xcbi8qIC0tLS0tLS0gSEVBREVSICovXFxuLyogLS0tLS0tLSBIRUFERVIgKi9cXG5cXG4gICAgICAgIGhlYWRlciB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcbi8qIC0tLS0tLS0gRElTUExBWSAqL1xcblxcbiAgICAgICAgI2Rpc3BsYXkge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZGlzcGxheTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZGlzcGxheS1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAuaGVhZGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcblxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgZGl2LmNhcmQsXFxuICAgICAgICAgICAgICAgIC50YXNrLWNvbnRyb2xzIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLW1lZC1wYWQpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAudGFzay1jb250cm9scyB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnNpbmdsZXRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc21hbGwtcGFkKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIC5zaW5nbGV0b24gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zbWFsbC1wYWQpICogMSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbHMge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNtYWxsLWdhcCk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFncyB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5jaGVja2xpc3Qge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1zbWFsbC1nYXApO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tsaXN0IHVsIGxpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrbGlzdCB1bCBsaSBsYWJlbCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR0xPQkFMID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4O1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbi8qIFNFQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW5kZXIgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBjb3JyZWN0IGZvbnQgc2l6ZSBvbiBgaDFgICYgJ2gyJyBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBHUk9VUElORyBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBhZGQgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3ggKi9cXG4vKiAyLiBzaG93IG92ZXJmbG93IGluIEVkZ2UsIElFICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqLyAvKiogY29uZmxpY3Qgdy8gYCotc2VsZWN0b3JgPyAqL1xcbiAgICBoZWlnaHQ6IDBweDsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IGluaGVyaXRhbmNlLCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiBjb3JyZWN0IHRoZSBvZmYgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuXFxuLyogVEVYVC1MRVZFTCBTRU1BTlRJQ1MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBncmF5IGJnIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogMS4gcmVtb3ZlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSAqL1xcbi8qIDIuIGFkZCBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgU2FmYXJpICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIFNhZmFyaSAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogMS4gY29ycmVjdCBpbmhlcml0YW5jZSwgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gY29ycmVjdCB0aGUgb2RkIGVtIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2VycyAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qIHByZXZlbnQgYWxsIGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyBsaW5lIGhlaWdodCAqL1xcbi8qIGluIGFsbCBicm93c2VycyAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcbiAgXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcblxcbi8qIEVNQkVEREVEIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogY2xlYW4gdXAgYm9yZGVycyBvbiB0YWJsZXMgKi9cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi8qIEZPUk1TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBjaGFuZ2UgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gcmVtb3ZlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBzaG93IG92ZXJmbG93IGluIElFLCBFZGdlICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qIHJlbW92ZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBJRSAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogY29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBib3JkZXIsIHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiByZXN0b3JlIGZvY3VzIHN0eWxlcyB1bnNldCBieSBwcmV2aW91cyBydWxlIF5eICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qIGNvcnJlY3QgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcbiAgXFxuLyogMS4gY29ycmVjdCB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UsIElFICovXFxuLyogMi4gY29ycmVjdCBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUgKi9cXG4vKiAzLiByZW1vdmUgcGFkZGluZyBzbyBkZXZzIGFyZW4ndCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvLW91dCAqL1xcbi8qICAgIGBmaWVsZHNldGBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgT3BlcmEgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogcmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKyAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAgKi9cXG4vKiAyLiByZW1vdmUgcGFkZGluZyBpbiBJRSAxMCAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qIGNvcnJlY3QgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCwgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogMS4gY29ycmVjdCBvZmYgYXBwZWFyYW5jZSBpbiBDaHJvbWUsIFNhZmFyaSAqL1xcbi8qIDIuIGNvcnJlY3Qgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUsIFNhZmFyaSBvbiBtYWNPUyAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyogMS4gY2hhbmdlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG4vKiAyLiBjaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBJTlRFUkFDVElWRSA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIEZpcmVmb3ggKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuXFxuLyogTUlTQyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQzs7QUFFckM7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxXQUFXOztJQUV6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsYUFBYTs7SUFFYix3QkFBd0I7QUFDNUI7OztBQUdBLHVDQUF1Qzs7QUFFdkMsNkNBQTZDOztBQUU3QztJQUNJLGNBQWM7QUFDbEI7O0FBRUEsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1QyxtQ0FBbUM7O0FBRW5DO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLDhEQUE4RDs7QUFFOUQ7SUFDSSxTQUFTO0FBQ2I7O0FBRUEseURBQXlEOztBQUV6RDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLCtDQUErQzs7QUFFL0Ms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QUN0Qjs7O0FBR0EsbUNBQW1DOztBQUVuQyxrQ0FBa0M7O0FBRWxDO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbmRlciBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplIG9uIGBoMWAgJiAnaDInIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIEdST1VQSU5HIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveCAqL1xcbi8qIDIuIHNob3cgb3ZlcmZsb3cgaW4gRWRnZSwgSUUgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovIC8qKiBjb25mbGljdCB3LyBgKi1zZWxlY3RvcmA/ICovXFxuICAgIGhlaWdodDogMHB4OyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qIDEuIGNvcnJlY3QgaW5oZXJpdGFuY2UsIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIGNvcnJlY3QgdGhlIG9mZiBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2VycyAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IGluaGVyaXRhbmNlLCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiBjb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogcHJldmVudCBhbGwgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIGxpbmUgaGVpZ2h0ICovXFxuLyogaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuICBcXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBjbGVhbiB1cCBib3JkZXJzIG9uIHRhYmxlcyAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyogY29ycmVjdCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuICBcXG4vKiAxLiBjb3JyZWN0IHRleHQgd3JhcHBpbmcgaW4gRWRnZSwgSUUgKi9cXG4vKiAyLiBjb3JyZWN0IGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRSAqL1xcbi8qIDMuIHJlbW92ZSBwYWRkaW5nIHNvIGRldnMgYXJlbid0IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8tb3V0ICovXFxuLyogICAgYGZpZWxkc2V0YGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBPcGVyYSAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiByZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMCAqL1xcbi8qIDIuIHJlbW92ZSBwYWRkaW5nIGluIElFIDEwICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogY29ycmVjdCBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50LCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IG9mZiBhcHBlYXJhbmNlIGluIENocm9tZSwgU2FmYXJpICovXFxuLyogMi4gY29ycmVjdCBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaSAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgU2FmYXJpIG9uIG1hY09TICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiAxLiBjaGFuZ2UgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcbi8qIDIuIGNoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaSAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcblxcbi8qIElOVEVSQUNUSVZFID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgRmlyZWZveCAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKyAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hhcGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXBpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBldmVudHMgPSAoKCkgPT4ge1xuICAgIGxldCBfZXZlbnRzID0ge307XG5cbiAgICAvLyBzdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgU1VCU0NSSUJJTkcgdG8gJHtldmVudE5hbWV9YCk7XG4gICAgfVxuXG4gICAgLy8gdW5zdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKSwgMSk7XG4gICAgfVxuXG4gICAgLy8gcHVibGlzaCBldmVudCB3aXRoIGRhdGFcbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgLi4uZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2V2ZW50c1tldmVudE5hbWVdKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soLi4uZGF0YSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUFVCTElTSElORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBmdW5jdGlvbiB2aWV3RXZlbnRzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgIHVuc3Vic2NyaWJlLFxuICAgICAgICBwdWJsaXNoLFxuICAgICAgICB2aWV3RXZlbnRzLFxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzLmpzJ1xuXG4vLyAqIGluaXRpYXRlcyBkZWZhdWx0IHN0YXRlXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfc2FtcGxlUHJvamVjdFZhbHVlcyA9IFtbJ3Byb2plY3QnLCAnJywgJ1Vuc29ydGVkJywgXCJUaGlzIGlzIHlvdXIgdGFza3MnIGRlZmF1bHQgbG9jYXRpb24uIEFueSB0YXNrcyB3aXRob3V0IGEgcHJvamVjdCBsaXZlIGhlcmUuXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgbGV0IF9zYW1wbGVUYXNrVmFsdWVzID0gW1sndGFzaycsICcnLCAnc2luZ2xldG9uJywgJ1Rhc2sgMScsICd0aGlzIGlzIGEgc2FtcGxlIHRhc2snLCAnMjAwMS0wMS0wMScsIDMsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3Rhc2snLCAnJywgJ3NpbmdsZXRvbicsICdUYXNrIDInLCAndGhpcyBpcyAjMicsICcyMDAyLTAyLTAyJywgMiwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsndGFzaycsICcnLCAnY2hlY2tsaXN0JywgJ1Rhc2sgMycsICd0aGlzIGlzIGEgY2hlY2tsaXN0JywgJzIwMDMtMDMtMDMnLCAxLCAwLCBbJ2l0ZW0gMScsICdpdGVtIDInLCAnaXRlbSAzJ11dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAvLyBtZXRob2RzXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgX2NyZWF0ZURlZmF1bHRQcm9qZWN0KF9zYW1wbGVQcm9qZWN0VmFsdWVzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3NhbXBsZVRhc2tWYWx1ZXMubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICBfY3JlYXRlRGVmYXVsdFRhc2soX3NhbXBsZVRhc2tWYWx1ZXNbdF0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY3JlYXRlRGVmYXVsdFByb2plY3QocHJvamVjdFZhbHVlcykge1xuICAgICAgICBldmVudHMucHVibGlzaCgnY29uZmlybUlucHV0JywgcHJvamVjdFZhbHVlcyk7IC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY3JlYXRlRGVmYXVsdFRhc2sodGFza1ZhbHVlcykge1xuICAgICAgICBldmVudHMucHVibGlzaCgnY29uZmlybUlucHV0JywgdGFza1ZhbHVlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgICAvLyB1c2VkIGJ5IGluZGV4LmpzXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0U3RhdGU7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkaXYsIGgxLCBoMiwgdWwsIGxpLCBzcGFuLCBpbnB1dCwgbGFiZWx9IGZyb20gJy4vZWxlbWVudHMnO1xuXG4vLyAmIG1hbmFnZXMgZGlzcGxheSBET00gPC0+IGxpYnJhcnkgY29tbXVuaWNhdGlvblxuLy8gJiBjb250YWlucyBmYWN0b3JpZXMgZm9yIGdlbmVyYXRpbmcgZGlzcGxheSBzZWN0aW9uIERPTSBlbGVtZW50cyAvIGdyb3VwaW5nc1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF90YXNrQ291bnRlciA9IDA7XG5cbiAgICAvLyBjYWNoZSBET01cbiAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tDb3VudFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudGFsbHkgc3BhbicpO1xuXG4gICAgLy8gKiBjcmVhdGUgdGFzayBsaXN0ZW5lciBpbiBfcmVuZGVyVGFza0NyZWF0ZUJ1dHRvbigpXG4gICAgLy8gKiBtb2RpZnkgJiBkZWxldGUgY2xpY2sgbGlzdGVuZXJzIGluIF9yZW5kZXIuLi5IZWFkZXIoKVxuICAgIC8vICogY3JlYXRlIGNoZWNrbGlzdCBpdGVtIGxpc3RlbmVyIGluIF9yZW5kZXJDaGVja2xpc3REZXNjcml0aW9uQ29udGFpbmVyKClcblxuICAgIC8vIGRpc3BsYXkgbWFuYWdlclxuICAgIGZ1bmN0aW9uIF91cGRhdGVEaXNwbGF5KGluc3RhbmNlQnVuZGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlQnVuZGxlKTtcbiAgICAgICAgbGV0IHZpZXdQcmVmZXJlbmNlID0gaW5zdGFuY2VCdW5kbGVbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdQcmVmZXJlbmNlKTtcblxuICAgICAgICBzd2l0Y2ggKHZpZXdQcmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgIF9jbGVhckRpc3BsYXkoKVxuICAgICAgICAgICAgICAgIGxldCB0YXNrSGVhZGVyID0gaDEoaW5zdGFuY2VCdW5kbGVbMF0sICcnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKGluc3RhbmNlQnVuZGxlLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBfcmVuZGVyVGFzayhpbnN0YW5jZUJ1bmRsZVtpXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKGluc3RhbmNlQnVuZGxlLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdEluc3RhbmNlID0gaW5zdGFuY2VCdW5kbGVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlbmRlclByb2plY3QocHJvamVjdEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlbmRlclRhc2soaW5zdGFuY2VCdW5kbGVbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF91cGRhdGVJdGVtKGl0ZW1JbnN0YW5jZSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGl0ZW1JbnN0YW5jZSk7XG4gICAgICAgIGxldCBjYXJkSUQ7XG4gICAgICAgIGxldCBjYXJkO1xuXG4gICAgICAgIHN3aXRjaCh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIChpdGVtSW5zdGFuY2UudHlwZSA9PT0gJ3Byb2plY3QnKTpcbiAgICAgICAgICAgICAgICBjYXJkSUQgPSBgcHJvamVjdF8ke2l0ZW1JbnN0YW5jZS5pZH1gO1xuICAgICAgICAgICAgICAgIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXJkSUQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RWYWx1ZXMgPSBbaXRlbUluc3RhbmNlLnRpdGxlLCBpdGVtSW5zdGFuY2UuZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAocHJvamVjdFZhbHVlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoaXRlbUluc3RhbmNlLnR5cGUgPT09ICdzaW5nbGV0b24nIHx8IGl0ZW1JbnN0YW5jZS50eXBlID09PSAnY2hlY2tsaXN0Jyk6XG4gICAgICAgICAgICAgICAgY2FyZElEID0gYHRhc2tfJHtpdGVtSW5zdGFuY2UuaWR9YDtcbiAgICAgICAgICAgICAgICBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FyZElEKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQgdGFza1ZhbHVlcyA9IFtpdGVtSW5zdGFuY2UudGl0bGUsIGl0ZW1JbnN0YW5jZS5kZXNjcmlwdGlvbiwgaXRlbUluc3RhbmNlLmR1ZURhdGUsIGl0ZW1JbnN0YW5jZS5wcmlvcml0eV07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGFza1ZhbHVlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtSW5zdGFuY2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzaW5nbGV0b24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZSBoMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrbGlzdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVmFsdWVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrVmFsdWVzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrVmFsdWVzWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrVmFsdWVzWzNdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChpdGVtSW5zdGFuY2VbMF0gPT09ICdjaGVja2JveCcpOiAgLy8gaXRlbUluc3RhbmNlIGJ1bmRsZWQgbWFudWFsbHkgaW4gbGlicmFyeS5qc1xuICAgICAgICAgICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gaXRlbUluc3RhbmNlWzFdO1xuICAgICAgICAgICAgICAgIGxldCBjaGVja0lEID0gaXRlbUluc3RhbmNlWzJdO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbENvbnRlbnQgPSBpdGVtSW5zdGFuY2VbM107XG4gICAgXG4gICAgICAgICAgICAgICAgY2FyZElEID0gYHRhc2tfJHt0YXNrUmVmZXJlbmNlfV9fbGlfJHtjaGVja0lEfWA7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhcmRJRCk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrTGFiZWwgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsQ29udGVudDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfY2xlYXJEaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHRhc2tDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCctJyk7XG4gICAgICAgIH07XG4gICAgICAgIF9yZW1vdmVUYXNrQ3JlYXRlQnV0dG9uKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVUYXNrQ2FyZChpZCkge1xuICAgICAgICBsZXQgdGFyZ2V0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXJnZXRUYXNrKVxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCctJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVDaGVja2xpc3RJdGVtKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgbGV0IGxpQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXQjJHtpZH1gKS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgdWxDb250YWluZXIgPSBsaUNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuICAgICAgICB1bENvbnRhaW5lci5yZW1vdmVDaGlsZChsaUNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9maWxsVGFza0NvdW50ZXIob3BlcmF0b3IpIHtcbiAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgX3Rhc2tDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICBfdGFza0NvdW50ZXItLTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRhc2tDb3VudFNwYW4udGV4dENvbnRlbnQgPSBfdGFza0NvdW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC8vIHByb2plY3QgZmFjdG9yaWVzXG4gICAgY29uc3QgX3JlbmRlclByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGlmIChwcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBfY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNhcmRJRCA9ICcjcHJvamVjdF8nICsgcHJvamVjdC5pZDtcbiAgICAgICAgbGV0IHByb2plY3RDYXJkID0gZGl2KCcnLCAnLmNhcmQnLCAnLnByb2plY3QnLCBjYXJkSUQpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGVyID0gX3JlbmRlclByb2plY3RIZWFkZXIocHJvamVjdC5pZCwgcHJvamVjdC50aXRsZSk7XG4gICAgICAgIGxldCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkaXYocHJvamVjdC5kZXNjcmlwdGlvbiwgJy5kZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZChwcm9qZWN0SGVhZGVyLCBwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcblxuICAgICAgICBpZiAocHJvamVjdC5pZCAhPT0gMCkge1xuICAgICAgICAgICAgX3JlbmRlclRhc2tDcmVhdGVCdXR0b24oKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfZmlsbFRhc2tDb3VudGVyKCcnKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclByb2plY3RIZWFkZXIgPSBmdW5jdGlvbihpZCwgdGl0bGUpIHtcbiAgICAgICAgbGV0IGRpdkhlYWRlciA9IGRpdignJywgJy5oZWFkZXInKTtcblxuICAgICAgICBsZXQgaDFUaXRsZSA9IGgxKHRpdGxlLCAnLnRpdGxlJyk7XG4gICAgICAgIGxldCBzcGFuTW9kaWZ5ID0gc3BhbignLi4uJywgJy5wcm9qZWN0JywgJy5tb2RpZnknKTtcbiAgICAgICAgLy8gKiBwcm9qZWN0IG1vZGlmeS9kZWxldGUgZXZlbnRzXG4gICAgICAgIHNwYW5Nb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAgIC8vICEgYWxpZ24gdG8gcGFzcyBzaW1pbGFyIGFyZ3VtZW50cz9cbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja01vZGlmeUl0ZW0nLCBlKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBkaXZIZWFkZXIuYXBwZW5kKGgxVGl0bGUsIHNwYW5Nb2RpZnkpO1xuXG4gICAgICAgIGlmIChpZCAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IHNwYW5EZWxldGUgPSBzcGFuKCdYJywgJy5kZWxldGUnKTtcbiAgICAgICAgICAgIHNwYW5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkSUQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0RlbGV0ZVByb2plY3QnLCBjYXJkSUQpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKHNwYW5EZWxldGUpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRpdkhlYWRlcjtcbiAgICB9XG5cbiAgICAvLyB0YXNrIGZhY3Rvcmllc1xuICAgIGNvbnN0IF9yZW5kZXJUYXNrQ3JlYXRlQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBkaXZDcmVhdGUgPSBkaXYoJysnLCAnLmNyZWF0ZScpO1xuXG4gICAgICAgIGRpdkNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0NyZWF0ZUl0ZW0nLCAndGFzaycpOyAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGFza0NvbnRyb2xzID0gdGFza0NvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgICAgICAgdGFza0NvbnRyb2xzLmFwcGVuZChkaXZDcmVhdGUpO1xuICAgIH1cbiAgICBjb25zdCBfcmVtb3ZlVGFza0NyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdGFza0NvbnRyb2xzID0gdGFza0NvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IGNvbnRyb2xzTGVuZ3RoID0gdGFza0NvbnRyb2xzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgbGV0IGxhc3RDb250cm9sID0gdGFza0NvbnRyb2xzLmNoaWxkcmVuW2NvbnRyb2xzTGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGxhc3RDb250cm9sLmNsYXNzTGlzdC5jb250YWlucygnY3JlYXRlJykpIHtcbiAgICAgICAgICAgIHRhc2tDb250cm9scy5yZW1vdmVDaGlsZChsYXN0Q29udHJvbCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgICAgICBsZXQgY2FyZElEID0gJ3Rhc2tfJyArIHRhc2suaWQ7XG4gICAgICAgIGxldCB0YXNrQ2FyZDtcblxuICAgICAgICBzd2l0Y2ggKHRhc2sudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc2luZ2xldG9uJzpcbiAgICAgICAgICAgICAgICB0YXNrQ2FyZCA9IGRpdignJywgJy5jYXJkJywgJy5zaW5nbGV0b24nLCBgIyR7Y2FyZElEfWApXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZXRvbkNoZWNrbWFyayA9IGlucHV0KCdjaGVja2JveCcsIHRhc2suaWQsICcnKTtcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xldG9uQ2FyZENvbnRlbnQgPSBfcmVuZGVyU2luZ2xldG9uQ29udGVudCh0YXNrLmlkLCB0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2sucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZChzaW5nbGV0b25DaGVja21hcmssIHNpbmdsZXRvbkNhcmRDb250ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrbGlzdCc6XG4gICAgICAgICAgICAgICAgdGFza0NhcmQgPSBkaXYoJycsICcuY2FyZCcsICcuY2hlY2tsaXN0JywgYCMke2NhcmRJRH1gKTtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0Q2FyZENvbnRlbnQgPSBfcmVuZGVyQ2hlY2tsaXN0Q2FyZENvbnRlbnRzKHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zID0gX3JlbmRlckNoZWNrYm94Q29udGFpbmVyKGNhcmRJRCwgdGFzay5pdGVtcyk7XG4gICAgICAgICAgICAgICAgdGFza0NhcmQuYXBwZW5kKGNoZWNrbGlzdENhcmRDb250ZW50LCBjaGVja2xpc3RJdGVtcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cbiAgICAgICAgX2ZpbGxUYXNrQ291bnRlcignKycpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyU2luZ2xldG9uQ29udGVudCA9IGZ1bmN0aW9uKGlkLCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBkaXZDb250ZW50ID0gZGl2KCcnLCAnLmNvbnRlbnQnKTtcblxuICAgICAgICBsZXQgdGFza0hlYWRlciA9IF9yZW5kZXJTaW5nbGV0b25IZWFkZXIoaWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkaXYoZGVzY3JpcHRpb24sICcuZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBkaXZDb250ZW50LmFwcGVuZCh0YXNrSGVhZGVyLCB0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gZGl2Q29udGVudDtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlclNpbmdsZXRvbkhlYWRlciA9IGZ1bmN0aW9uKGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGRpdkhlYWRlciA9IGRpdignJywgJy5oZWFkZXInKTtcblxuICAgICAgICBsZXQgbGFiZWxDaGVja21hcmtUaXRsZSA9IGxhYmVsKCcnLCBpZCwgJy50aXRsZScpO1xuICAgICAgICBsZXQgaDJUaXRsZUNvbnRlbnQgPSBoMih0aXRsZSwgJycpO1xuICAgICAgICBsYWJlbENoZWNrbWFya1RpdGxlLmFwcGVuZENoaWxkKGgyVGl0bGVDb250ZW50KTtcblxuICAgICAgICBsZXQgc3BhbkRhdGUgPSBzcGFuKGR1ZURhdGUsICcuZGF0ZScpO1xuICAgICAgICBsZXQgc3BhblByaW9yaXR5ID0gc3Bhbihwcmlvcml0eSwgJy5wcmlvcml0eScpO1xuICAgICAgICBsZXQgc3Bhbk1vZGlmeSA9IHNwYW4oJy4uLicsICcudGFzaycsICcubW9kaWZ5Jyk7XG4gICAgICAgIGxldCBzcGFuRGVsZXRlID0gc3BhbignWCcsICcuZGVsZXRlJyk7XG5cbiAgICAgICAgLy8gKiBzaW5nbGV0b24gbW9kaWZ5L2RlbGV0ZSBldmVudHNcbiAgICAgICAgc3Bhbk1vZGlmeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgLy8gISBhbGlnbiB0byBwYXNzIHNpbWlsYXIgYXJndW1lbnRzP1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgfSk7XG4gICAgICAgIHNwYW5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgICAgIGxldCB0YXNrQ2FyZElEID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmQnKS5pZDtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0RlbGV0ZVRhc2snLCB0YXNrQ2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZChsYWJlbENoZWNrbWFya1RpdGxlLCBzcGFuRGF0ZSwgc3BhblByaW9yaXR5LCBzcGFuTW9kaWZ5LCBzcGFuRGVsZXRlKTtcbiAgICAgICAgcmV0dXJuIGRpdkhlYWRlcjtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdENhcmRDb250ZW50cyA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGRpdkNvbnRlbnQgPSBkaXYoJycsICcuY29udGVudCcpO1xuICAgICAgICBsZXQgY2hlY2tsaXN0SGVhZGVyID0gX3JlbmRlckNoZWNrbGlzdEhlYWRlcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBsZXQgY2hlY2tsaXN0RGVzY3JpcHRpb24gPSBfcmVuZGVyQ2hlY2tsaXN0U3ViaGVhZGVyKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kKGNoZWNrbGlzdEhlYWRlciwgY2hlY2tsaXN0RGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gZGl2Q29udGVudDtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdEhlYWRlciA9IGZ1bmN0aW9uKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBsZXQgZGl2SGVhZGVyID0gZGl2KCcnLCAnLmhlYWRlcicpO1xuXG4gICAgICAgIGxldCBoMlRpdGxlID0gaDIodGl0bGUsICcudGl0bGUnKTtcbiAgICAgICAgbGV0IHNwYW5EYXRlID0gc3BhbihkdWVEYXRlLCAnLmRhdGUnKTtcbiAgICAgICAgbGV0IHNwYW5Qcmlvcml0eSA9IHNwYW4ocHJpb3JpdHksICcucHJpb3JpdHknKTtcbiAgICAgICAgbGV0IHNwYW5Nb2RpZnkgPSBzcGFuKCcuLi4nLCAnLnRhc2snLCAnLm1vZGlmeScpO1xuICAgICAgICBsZXQgc3BhbkRlbGV0ZSA9IHNwYW4oJ1gnLCAnLmRlbGV0ZScpO1xuXG4gICAgICAgIC8vICogY2hlY2tsaXN0IG1vZGlmeS9kZWxldGUgZXZlbnRzXG4gICAgICAgIHNwYW5Nb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgIC8vIHN1YnNjcmliZWQgYnkgZm9ybXMuanNcbiAgICAgICAgfSk7XG4gICAgICAgIHNwYW5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhcmRJRCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQ7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2xpY2tEZWxldGVUYXNrJywgY2FyZElEKTsgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2SGVhZGVyLmFwcGVuZChoMlRpdGxlLCBzcGFuRGF0ZSwgc3BhblByaW9yaXR5LCBzcGFuTW9kaWZ5LCBzcGFuRGVsZXRlKTtcbiAgICAgICAgcmV0dXJuIGRpdkhlYWRlcjtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrbGlzdFN1YmhlYWRlciA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGxldCBkaXZDb250YWluZXIgPSBkaXYoJycsICcuZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGl2RGVzY3JpcHRpb24gPSBkaXYoZGVzY3JpcHRpb24sICcuZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IHNwYW5DcmVhdGUgPSBkaXYoJysnLCAnLmNyZWF0ZScpO1xuXG4gICAgICAgIC8vICogY2hlY2tsaXN0IGl0ZW0gY3JlYXRlIGV2ZW50XG4gICAgICAgIHNwYW5DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrUmVmZXJlbmNlKTtcbiAgICAgICAgICAgIGxldCBmb3JtUmVmZXJlbmNlcyA9IFsnY2hlY2tib3gnLCB0YXNrUmVmZXJlbmNlXTtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0NyZWF0ZUl0ZW0nLCBmb3JtUmVmZXJlbmNlcyk7ICAgLy8gc3Vic2NyaWJlZCBieSBmb3Jtcy5qc1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZDb250YWluZXIuYXBwZW5kKGRpdkRlc2NyaXB0aW9uLCBzcGFuQ3JlYXRlKTtcbiAgICAgICAgcmV0dXJuIGRpdkNvbnRhaW5lcjtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrYm94Q29udGFpbmVyID0gZnVuY3Rpb24odGFza0NhcmRJRCwgaXRlbXMpIHtcbiAgICAgICAgbGV0IHVsSXRlbSA9IHVsKCcnLCAnLmNoZWNrYm94ZXMnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGl0ZW1zLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgX3JlbmRlckNoZWNrYm94KHVsSXRlbSwgdGFza0NhcmRJRCwgaXRlbXNbaV0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHVsSXRlbTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrYm94ID0gZnVuY3Rpb24oY2hlY2tsaXN0Q29udGFpbmVyLCB0YXNrQ2FyZElELCBjaGVja0luZm8pIHtcbiAgICAgICAgbGV0IGNoZWNrSUQgPSBjaGVja0luZm9bMF07XG4gICAgICAgIGxldCBjaGVja0NvbnRlbnQgPSBjaGVja0luZm9bMV07XG5cbiAgICAgICAgbGV0IGxpQ2FyZElEID0gYCMke3Rhc2tDYXJkSUR9X19saV8ke2NoZWNrSUR9YDtcbiAgICAgICAgbGV0IGxpQ2FyZCA9IGxpKCcnLCAnLmNhcmQnLCBsaUNhcmRJRCk7XG5cbiAgICAgICAgbGV0IGNoZWNrYm94SUQgPSBgJHt0YXNrQ2FyZElEfV9fY2hlY2tib3hfJHtjaGVja0lEfWA7ICAvLyAjIG5vdCBuZWVkZWQgdnZcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gaW5wdXQoJ2NoZWNrYm94JywgY2hlY2tib3hJRCwgJycpOyAgLy8gc2V0cyBJRCBkaXJlY3RseSB2aWEgZGVmYXVsdCBvYmplY3QgcHJvdG90eXBlIG1ldGhvZHNcbiAgICAgICAgbGV0IGxhYmVsQ2hlY2tib3ggPSBsYWJlbChjaGVja0NvbnRlbnQsIGNoZWNrYm94SUQsICcnKTtcbiAgICAgICAgbGV0IGNoZWNrYm94Q29udHJvbHMgPSBfcmVuZGVyQ2hlY2tib3hDb250cm9scyhjaGVja2JveElEKTtcblxuICAgICAgICBsaUNhcmQuYXBwZW5kKGNoZWNrYm94LCBsYWJlbENoZWNrYm94LCBjaGVja2JveENvbnRyb2xzKTtcbiAgICAgICAgY2hlY2tsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpQ2FyZCk7XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJOZXdDaGVja2JveCA9IGZ1bmN0aW9uKGNoZWNrbGlzdEluc3RhbmNlKSB7XG4gICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gY2hlY2tsaXN0SW5zdGFuY2VbMV1cbiAgICAgICAgbGV0IHRhc2tDYXJkSUQgPSBgdGFza18ke3Rhc2tSZWZlcmVuY2V9YDtcbiAgICAgICAgbGV0IHVsVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2IyR7dGFza0NhcmRJRH0gdWxgKTtcblxuICAgICAgICBsZXQgY2hlY2tSZWZlcmVuY2UgPSBjaGVja2xpc3RJbnN0YW5jZVsyXTtcbiAgICAgICAgbGV0IGNoZWNrQ29udGVudCA9IGNoZWNrbGlzdEluc3RhbmNlWzNdO1xuXG4gICAgICAgIF9yZW5kZXJDaGVja2JveCh1bFRhcmdldCwgdGFza0NhcmRJRCwgW2NoZWNrUmVmZXJlbmNlLCBjaGVja0NvbnRlbnRdKTtcbiAgICB9XG4gICAgY29uc3QgX3JlbmRlckNoZWNrYm94Q29udHJvbHMgPSBmdW5jdGlvbihjaGVja0lEKSB7XG4gICAgICAgIGxldCBkaXZDb250cm9scyA9IGRpdignJywgJy5jaGVja2xpc3QtaXRlbS1jb250cm9scycpO1xuXG4gICAgICAgIGxldCBzcGFuTW9kaWZ5ID0gc3BhbignLi4uJywgJy50YXNrJywgJy5tb2RpZnknKTtcbiAgICAgICAgbGV0IHNwYW5EZWxldGUgPSBzcGFuKCdYJywgJy5kZWxldGUnKTtcblxuICAgICAgICAvLyAqIGNoZWNrbGlzdCBpdGVtIG1vZGlmeS9kZWxldGUgZXZlbnRzXG4gICAgICAgIHNwYW5Nb2RpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrTW9kaWZ5SXRlbScsIGUpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgICAgIH0pO1xuICAgICAgICBzcGFuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsaWNrRGVsZXRlQ2hlY2tsaXN0SXRlbScsIGNoZWNrSUQpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGl2Q29udHJvbHMuYXBwZW5kQ2hpbGQoc3Bhbk1vZGlmeSk7XG4gICAgICAgIGRpdkNvbnRyb2xzLmFwcGVuZENoaWxkKHNwYW5EZWxldGUpO1xuXG4gICAgICAgIHJldHVybiBkaXZDb250cm9scztcbiAgICB9XG5cblxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndXBkYXRlRGlzcGxheVZpZXcnLCBfdXBkYXRlRGlzcGxheSk7ICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfYnVuZGxlSW5zdGFuY2VzKCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdwcm9qZWN0Q3JlYXRlZCcsIF9yZW5kZXJQcm9qZWN0KSAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVQcm9qZWN0KCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndGFza0NyZWF0ZWQnLCBfcmVuZGVyVGFzayk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGxpYnJhcnkuanMgKF9jcmVhdGVUYXNrKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2hlY2tib3hDcmVhdGVkJywgX3JlbmRlck5ld0NoZWNrYm94KTsgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfY3JlYXRlQ2hlY2tib3goKSlcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2l0ZW1Nb2RpZmllZCcsIF91cGRhdGVJdGVtKTsgICAgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX21vZGlmeS4uLigpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVtb3ZlUHJvamVjdEZyb21TZWN0aW9uJywgX2NsZWFyRGlzcGxheSkgLy8gcHVibGlzaGVkIGZyb20gbGlicmFyeS5qcyAoX2RlbGV0ZVByb2plY3QoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVUYXNrRnJvbURpc3BsYXknLCBfZGVsZXRlVGFza0NhcmQpOyAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlVGFzaygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZUNoZWNrbGlzdEl0ZW1Gcm9tRGlzcGxheScsIF9kZWxldGVDaGVja2xpc3RJdGVtKSAgICAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfZGVsZXRlQ2hlY2tsaXN0SXRlbSgpKVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiLCIvLyAqIGZhY3RvcnkgY2xhc3MgZm9yIGJhc2UtbGV2ZWwgRE9NIGVsZW1lbnRzXG5cbi8vIGRhdGFcbmxldCBfYXR0cmlidXRlcyA9IFtdO1xubGV0IGVsZW1lbnQ7XG5cbi8vIGJhc2ljIGhlbHBlciBmYWN0b3JpZXNcbmNvbnN0IGRpdiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IHNwYW4gPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgaDEgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGgyID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICB9O1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5jb25zdCB1bCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgbGkgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGlucHV0ID0gZnVuY3Rpb24odHlwZSwgaWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICBlbGVtZW50LmlkID0gU3RyaW5nKGlkKTtcbiAgICBlbGVtZW50Lm5hbWUgPSBTdHJpbmcoaWQpO1xuICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IG9wdGlvbiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZW50KSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbnN0IGxhYmVsID0gZnVuY3Rpb24oY29udGVudCwgZm9yUmVmZXJlbmNlLCAuLi5hcmdzKSB7XG4gICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgIH07XG4gICAgZWxlbWVudC5mb3IgPSBTdHJpbmcoZm9yUmVmZXJlbmNlKTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuY29uc3QgbGVnZW5kID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgfTtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXR0cmlidXRlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcuJykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICBlbGVtZW50LmlkID0gYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpO1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IGRpdiBhcyBkZWZhdWx0LCBzcGFuLCBoMSwgaDIsIHVsLCBsaSwgaW5wdXQsIG9wdGlvbiwgbGFiZWwsIGxlZ2VuZCB9OyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCB7IHNwYW4sIGlucHV0LCBsYWJlbCwgb3B0aW9uLCBsZWdlbmQgfSBmcm9tICcuL2VsZW1lbnRzJztcblxuLy8gJiBtYW5hZ2VzIGRpc3BsYXkvc2lkZWJhciBzZWN0aW9uIERPTXMgLT4gZm9ybSBzZWN0aW9uIERPTXMgPC0+IGxpYnJhcnkgY29tbXVuaWNhdGlvblxuLy8gJiBjb250YWlucyBmYWN0b3JpZXMgZm9yIGdlbmVyYXRpbmcgZm9ybSBzZWN0aW9uIERPTSBlbGVtZW50cyAvIGdyb3VwaW5nc1xuXG5jb25zdCBmb3JtcyA9ICgoKSA9PiB7XG4gICAgLy8gbGV0IF9jdXJyZW50Rm9ybTtcbiAgICBsZXQgX2N1cnJlbnRGb3JtVHlwZTtcbiAgICBsZXQgX2N1cnJlbnRQcm9qZWN0O1xuXG4gICAgLy8gY2FjaGUgRE9NXG4gICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICBsZXQgZm9ybUZpZWxkc2V0ID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmaWVsZHNldCcpO1xuICAgIGxldCBmb3JtSW5wdXRzO1xuICAgIC8vIGxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcbiAgICAvLyBsZXQgZGVsZXRlQ29uZmlybUFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1jb25maXJtJyk7XG4gICAgLy8gbGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xuICAgIC8vIGxldCBjaGVja2JveEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tib3gtZm9ybScpO1xuXG4gICAgLy8gbGV0IHByb2plY3RGb3JtSW5wdXRzID0gcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAvLyBsZXQgdGFza0Zvcm1JbnB1dHMgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQnKTtcbiAgICAvLyBsZXQgY2hlY2tib3hGb3JtSW5wdXRzID0gY2hlY2tib3hGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBsZXQgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5jb25maXJtJyk7XG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5jYW5jZWwnKTtcbiAgICAvLyBsZXQgY29uZmlybURlbGV0ZUZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uZGVsZXRlLWNvbmZpcm0nKTtcbiAgICAvLyBsZXQgY2FuY2VsRGVsZXRlRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5kZWxldGUtY2FuY2VsJyk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnNcbiAgICBjb25maXJtQnV0dG9uLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIF9jb25maXJtSW5wdXQoZSk7XG4gICAgfSkpO1xuICAgIGNhbmNlbEJ1dHRvbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIF9jYW5jZWxJbnB1dCgpO1xuICAgIH0pKTtcbiAgICAvLyBjb25maXJtRGVsZXRlRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgZGVsZXRlQ29uZmlybUFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvLyAgICAgbGV0IHByb2plY3RDYXJkSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucHJvamVjdC5jYXJkJykuaWQ7XG4gICAgLy8gICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtRGVsZXRlUHJvamVjdCcsIHByb2plY3RDYXJkSUQpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgLy8gfSlcbiAgICAvLyBjYW5jZWxEZWxldGVGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBkZWxldGVDb25maXJtQWxlcnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gZm9ybSBtYW5hZ2Vyc1xuICAgIGZ1bmN0aW9uIF9vcGVuQ3JlYXRlRm9ybShmb3JtUmVmZXJlbmNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1SZWZlcmVuY2UpO1xuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSAoKHR5cGVvZiBmb3JtUmVmZXJlbmNlKSA9PT0gJ29iamVjdCcpOiAgIC8vICogc3RvcmVzIHRhc2sgcmVmZXJlbmNlIHdoZW4gY3JlYXRpbmcgbmV3IGNoZWNrbGlzdCBpdGVtXG4gICAgICAgICAgICAgICAgY2hlY2tib3hGb3JtSW5wdXRzWzBdLnZhbHVlID0gZm9ybVJlZmVyZW5jZVsxXTtcbiAgICAgICAgICAgICAgICBfc2V0Rm9ybVJlZmVyZW5jZXMoZm9ybVJlZmVyZW5jZVswXSk7XG4gICAgICAgICAgICAgICAgX3JlbmRlckNoZWNrYm94Rm9ybSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoKHR5cGVvZiBmb3JtUmVmZXJlbmNlKSA9PT0gJ3N0cmluZycpOlxuICAgICAgICAgICAgICAgIF9zZXRGb3JtUmVmZXJlbmNlcyhmb3JtUmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jdXJyZW50Rm9ybVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVuZGVyUHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF9yZW5kZXJUYXNrRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgX3JlbmRlckRlbGV0ZUNvbmZpcm1Gb3JtKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgX3Nob3dGb3JtKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9vcGVuTW9kaWZ5SW5zdGFuY2VRdWVyeShldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0SXRlbVJlZmVyZW5jZXM7XG5cbiAgICAgICAgbGV0IGlzQ2hlY2tib3g7XG4gICAgICAgIHN3aXRjaCh0cnVlKSAge1xuICAgICAgICAgICAgY2FzZSAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKSA9PT0gbnVsbCk6XG4gICAgICAgICAgICAgICAgaXNDaGVja2JveCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKSAhPT0gbnVsbCk6XG4gICAgICAgICAgICAgICAgaXNDaGVja2JveCA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoIChpc0NoZWNrYm94KSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1UeXBlUmVmZXJlbmNlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpLmlkLnNwbGl0KCdfJylbMV07XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94UmVmZXJlbmNlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpLmNhcmQnKS5pZC5zcGxpdCgnX18nKVsxXS5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgICAgIHRhcmdldEl0ZW1SZWZlcmVuY2VzID0gW2Zvcm1UeXBlUmVmZXJlbmNlLCBbdGFza1JlZmVyZW5jZSwgY2hlY2tib3hSZWZlcmVuY2VdXTsgLy8gKiB0YXNrUmVmZXJlbmNlICYgY2hlY2tib3hSZWZlcmVuY2UgbXVzdCBiZSBidW5kbGVkLCBzcGxpdCBpbiBsaWJyYXJ5LmpzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIHRhcmdldEl0ZW1SZWZlcmVuY2VzID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJykuaWQuc3BsaXQoJ18nKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfc2V0Rm9ybVJlZmVyZW5jZXModGFyZ2V0SXRlbVJlZmVyZW5jZXNbMF0pOyAgICAvLyA/IG1vdmUgdG8gb3Blbk1vZGlmeUZvcm0gaW5jYXNlIHF1ZXJ5IGZhaWxzP1xuICAgICAgICBldmVudHMucHVibGlzaCgnb3Blbk1vZGlmeUluc3RhbmNlUXVlcnknLCB0YXJnZXRJdGVtUmVmZXJlbmNlcyk7ICAvLyBzdWJzY3JpYmVkIGJ5IGxpYnJhcnkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX29wZW5Nb2RpZnlGb3JtKGl0ZW1WYWx1ZXMpIHtcbiAgICAgICAgX2ZpbGxGb3JtVmFsdWVzKGl0ZW1WYWx1ZXMpO1xuICAgICAgICBfZGlzYWJsZVRhc2tUeXBlU2VsZWN0aW9uKCk7XG4gICAgICAgIF9zaG93Rm9ybSgpO1xuICAgIH1cblxuICAgIC8vIGZvcm0gYWN0aW9uc1xuICAgIGZ1bmN0aW9uIF9jb25maXJtSW5wdXQoKSB7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gX3ZhbGlkYXRlRm9ybSgpO1xuXG4gICAgICAgIHN3aXRjaChpc1ZhbGlkKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgX2hpZGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1WYWx1ZXMgPSBfYnVuZGxlRm9ybVZhbHVlcygpO1xuICAgICAgICAgICAgICAgIF9maW5kRXJyb3JzKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgX2NsZWFyRm9ybVZhbHVlcygpO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjb25maXJtSW5wdXQnLCBmb3JtVmFsdWVzKTsgICAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIF9maW5kRXJyb3JzKCdzaG93Jyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jYW5jZWxJbnB1dCgpIHtcbiAgICAgICAgX2hpZGVGb3JtKCk7XG4gICAgICAgIF9jbGVhckZvcm1WYWx1ZXMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3Nob3dEZWxldGVQcm9qZWN0Q29uZmlybWF0aW9uKCkge1xuICAgICAgICBkZWxldGVDb25maXJtQWxlcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIC8vIGhlbHBlciBtZXRob2RzICBcbiAgICBmdW5jdGlvbiBfc2V0Rm9ybVJlZmVyZW5jZXMoZm9ybVJlZmVyZW5jZSkge1xuICAgICAgICBzd2l0Y2ggKGZvcm1SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAncHJvamVjdC1mb3JtJ1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAncHJvamVjdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICAgICAgICAgICAgICBmb3JtQ29udGFpbmVyLmlkID0gJ3Rhc2stZm9ybSdcbiAgICAgICAgICAgICAgICBfY3VycmVudEZvcm1UeXBlID0gJ3Rhc2snO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZvcm1Db250YWluZXIuaWQgPSAnY2hlY2tib3gtZm9ybSdcbiAgICAgICAgICAgICAgICBfY3VycmVudEZvcm1UeXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3NldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIChwcm9qZWN0WzBdICE9PSB1bmRlZmluZWQpOlxuICAgICAgICAgICAgICAgIF9jdXJyZW50UHJvamVjdCA9IHByb2plY3RbMV0uaWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9jdXJyZW50UHJvamVjdCA9IHByb2plY3QuaWQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zaG93Rm9ybSgpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9oaWRlRm9ybSgpIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9maWxsRm9ybVZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgc3dpdGNoIChfY3VycmVudEZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh2YWx1ZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RGb3JtSW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0YXNrJzpcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh2YWx1ZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tGb3JtSW5wdXRzW2ldLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWVzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NpbmdsZXRvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRm9ybUlucHV0c1sxXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Zvcm1JbnB1dHNbMl0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Zvcm1JbnB1dHNbaSArIDFdLnZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5Qcm9qZWN0T3B0aW9uc1F1ZXJ5JywgJycpOyAgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgbGV0IGluc3RhbmNlUmVmZXJlbmNlcyA9IGAke3ZhbHVlc1sxXX1fJHt2YWx1ZXNbMl19YDtcbiAgICAgICAgICAgICAgICBjaGVja2JveEZvcm1JbnB1dHNbMF0udmFsdWUgPSBpbnN0YW5jZVJlZmVyZW5jZXM7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hGb3JtSW5wdXRzWzFdLnZhbHVlID0gdmFsdWVzWzNdO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVtb3ZlUHJvamVjdE9wdGlvbnModGFza0Zvcm1JbnB1dHNJbmRleCkge1xuICAgICAgICB3aGlsZSAodGFza0Zvcm1JbnB1dHNbdGFza0Zvcm1JbnB1dHNJbmRleF0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGFza0Zvcm1JbnB1dHNbdGFza0Zvcm1JbnB1dHNJbmRleF0ucmVtb3ZlQ2hpbGQodGFza0Zvcm1JbnB1dHNbdGFza0Zvcm1JbnB1dHNJbmRleF0ubGFzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX2J1bmRsZUZvcm1WYWx1ZXMoKSB7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coX2N1cnJlbnRGb3JtVHlwZSk7XG4gICAgICAgIGxldCBmb3JtVmFsdWVzID0gW107XG5cbiAgICAgICAgc3dpdGNoIChfY3VycmVudEZvcm1UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmb3JtSW5wdXRzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2goZm9ybUlucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIC8vLy8gY29uc29sZS5sb2coZm9ybUlucHV0cyk7XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKCd0YXNrJyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZm9ybUlucHV0cy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgKChpID4gMikgJiYgKGkgPCA4KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDEgfHwgaSA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1JbnB1dHNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFnc0FycmF5ZWQgPSBmb3JtSW5wdXRzW2ldLnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzLnB1c2godGFnc0FycmF5ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcy5wdXNoKCdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzWzBdLnZhbHVlLnNwbGl0KCdfJylbMF0pO1xuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzWzBdLnZhbHVlLnNwbGl0KCdfJylbMV0pO1xuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXMucHVzaChmb3JtSW5wdXRzWzFdLnZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtVmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9jbGVhckZvcm1WYWx1ZXMoKSB7XG4gICAgICAgIF9yZW1vdmVGb3JtRWxlbWVudHMoKTtcblxuICAgICAgICAvLyBzd2l0Y2goX2N1cnJlbnRGb3JtVHlwZSkge1xuICAgICAgICAvLyAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgIC8vICAgICAgICAgZm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSAndGFzayc6XG4gICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGFza0Zvcm1JbnB1dHMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2FzZSAoKDEgPT09IDApIHx8ICgoaSA+IDIpICYmIChpIDwgNikpKTpcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0YXNrRm9ybUlucHV0c1tpXS52YWx1ZSA9ICcnO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2FzZSAoaSA9PT0gMSk6XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGFza0Zvcm1JbnB1dHNbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXNlIChpID09PSAyKTpcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0YXNrRm9ybUlucHV0c1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXNlIChpID09PSA2KTpcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0YXNrRm9ybUlucHV0c1tpXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhc2UgKGkgPT09IDcpOlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIF9yZW1vdmVQcm9qZWN0T3B0aW9ucyhpKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfTtcbiAgICAgICAgLy8gICAgICAgICB9O1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAvLyAgICAgICAgIGNoZWNrYm94Rm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpO1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vIF9jdXJyZW50Rm9ybSA9ICcnO1xuICAgICAgICBmb3JtSW5wdXRzID0gJyc7XG4gICAgICAgIF9jdXJyZW50Rm9ybVR5cGUgPSAnJztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3JlbW92ZUZvcm1FbGVtZW50cygpIHtcbiAgICAgICAgbGV0IGZpZWxkc2V0Q2hpbGRyZW5MZW5ndGggPSBmb3JtRmllbGRzZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChmaWVsZHNldENoaWxkcmVuTGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICB3aGlsZSAoZm9ybUZpZWxkc2V0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBmb3JtRmllbGRzZXQucmVtb3ZlQ2hpbGQoZm9ybUZpZWxkc2V0Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHdoaWxlICh0YXNrRm9ybUlucHV0c1t0YXNrRm9ybUlucHV0c0luZGV4XS5maXJzdENoaWxkKSB7XG4gICAgICAgIC8vICAgICB0YXNrRm9ybUlucHV0c1t0YXNrRm9ybUlucHV0c0luZGV4XS5yZW1vdmVDaGlsZCh0YXNrRm9ybUlucHV0c1t0YXNrRm9ybUlucHV0c0luZGV4XS5sYXN0Q2hpbGQpO1xuICAgICAgICAvLyB9O1xuICAgICAgICAvLyB3aGlsZSAoZm9ybUZpZWxkc2V0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIGZvcm1GaWVsZHNldC5yZW1vdmUoKGZvcm1GaWVsZHNldC5sYXN0Q2hpbGQpKTtcbiAgICAgICAgLy8gfTtcblxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRmllbGRzZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZW5hYmxlVGFza1R5cGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIHRhc2tGb3JtSW5wdXRzWzFdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRhc2tGb3JtSW5wdXRzWzJdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kaXNhYmxlVGFza1R5cGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIHRhc2tGb3JtSW5wdXRzWzFdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGFza0Zvcm1JbnB1dHNbMl0uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfdmFsaWRhdGVGb3JtKCkge1xuICAgICAgICByZXR1cm4gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmb3JtJykuY2hlY2tWYWxpZGl0eSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZmluZEVycm9ycyhwcm9jZXNzKSB7XG4gICAgICAgIGxldCB0aXRsZUlucHV0O1xuICAgICAgICBmb3JtSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0LmlkLnNwbGl0KCctJylbMV0gPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBzd2l0Y2ggKHByb2Nlc3MpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIF9zaG93RXJyb3JNZXNzYWdlKHRpdGxlSW5wdXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICAgICAgICAgX2hpZGVFcnJvck1lc3NhZ2UodGl0bGVJbnB1dCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9zaG93RXJyb3JNZXNzYWdlKGlucHV0KSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGlucHV0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxhYmVsLmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9oaWRlRXJyb3JNZXNzYWdlKGlucHV0KSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGlucHV0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxhYmVsLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgLy8gZm9ybSBmYWN0b3JpZXNcbiAgICBjb25zdCBfcmVuZGVyUHJvamVjdE9wdGlvbnMgPSBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBsZXQgcHJvamVjdERyb3Bkb3duID0gdGFza0Zvcm1JbnB1dHNbN107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGFycmF5Lmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gYXJyYXlbaV1bMF07XG4gICAgICAgICAgICBsZXQgcHJvamVjdElEID0gYXJyYXlbaV1bMV07XG4gICAgICAgICAgICBsZXQgb3B0aW9uUHJvamVjdCA9IG9wdGlvbihwcm9qZWN0SUQsIHByb2plY3ROYW1lKTtcblxuICAgICAgICAgICAgaWYgKF9jdXJyZW50UHJvamVjdCA9PT0gcHJvamVjdElEKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uUHJvamVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uUHJvamVjdCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IF9yZW5kZXJQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZmllbGRzZXRMZWdlbmQgPSBsZWdlbmQoJ0NyZWF0ZSBhIE5ldyBQcm9qZWN0JywgJycpO1xuXG4gICAgICAgIGxldCBzcGFuUmVxdWlyZWRCYWRnZSA9IHNwYW4oJyonLCAnLnJlcXVpcmVkLWJhZGdlJyk7XG4gICAgICAgIGxldCBzcGFuRXJyb3JNZXNzYWdlID0gc3BhbigncGxlYXNlIGluY2x1ZGUgYSB0aXRsZScsICcuZXJyb3ItbWVzc2FnZScsICcuaGlkZScpO1xuICAgICAgICBsZXQgdGl0bGVMYWJlbCA9IGxhYmVsKCd0aXRsZSAnLCAncHJvamVjdC10aXRsZScpO1xuICAgICAgICB0aXRsZUxhYmVsLmFwcGVuZChzcGFuUmVxdWlyZWRCYWRnZSwgc3BhbkVycm9yTWVzc2FnZSk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gaW5wdXQoJ3RleHQnLCAncHJvamVjdC10aXRsZScsICd0aXRsZScpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gbGFiZWwoJ2Rlc2NyaXB0aW9uJywgJy5wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gaW5wdXQoJ3RleHQnLCAncHJvamVjdC1kZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGZvcm1GaWVsZHNldC5hcHBlbmQoZmllbGRzZXRMZWdlbmQsIHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgICAgIGZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVyVGFza0Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gcmVuZGVyIGZvcm0gaW5wdXRzL2xhYmVsc1xuXG4gICAgICAgIF9lbmFibGVUYXNrVHlwZVNlbGVjdGlvbigpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuUHJvamVjdE9wdGlvbnNRdWVyeScsICcnKTsgIC8vIHN1YnNjcmliZWQgYnkgbGlicmFyeS5qc1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrQ3JlYXRlSXRlbScsIF9vcGVuQ3JlYXRlRm9ybSk7ICAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoY3JlYXRlVGFza0J1dHRvbiBjbGlja0V2ZW50LCBfcmVuZGVyQ2hlY2tsaXN0U3ViaGVhZGVyKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tDcmVhdGVQcm9qZWN0JywgX29wZW5DcmVhdGVGb3JtKTsgICAgLy8gcHVibGlzaGluZyBmcm9tIHNpZGViYXIuanMgKGNyZWF0ZVByb2plY3RCdXR0b24gY2xpY2tFdmVudClcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrTW9kaWZ5SXRlbScsIF9vcGVuTW9kaWZ5SW5zdGFuY2VRdWVyeSk7ICAvLyBwdWJsaXNoaW5nIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlci4uLkhlYWRlcigpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2Nsb3NlTW9kaWZ5SW5zdGFuY2VRdWVyeScsIF9vcGVuTW9kaWZ5Rm9ybSk7ICAvLyBwdWJsaXNoaW5nIGZyb20gbGlicmFyeS5qcyAoX3F1ZXJ5SXRlbUluc3RhbmNlKCkpO1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncHJvamVjdENyZWF0ZWQnLCBfc2V0Q3VycmVudFByb2plY3QpOyAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfY3JlYXRlUHJvamVjdCgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3VwZGF0ZURpc3BsYXlWaWV3JywgX3NldEN1cnJlbnRQcm9qZWN0KSAvLyBwdWJsaXNoZWQgZnJvbSBsaWJyYXJ5LmpzIChfYnVuZGxlSW5zdGFuY2VzKCkpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xvc2VQcm9qZWN0T3B0aW9uc1F1ZXJ5JywgX3JlbmRlclByb2plY3RPcHRpb25zKTsgIC8vIHB1Ymxpc2hpbmcgZnJvbSBsaWJyYXJ5LmpzIChfcXVlcnlQcm9qZWN0TmFtZUlEKCkpXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGlja0RlbGV0ZVByb2plY3QnLCBfc2hvd0RlbGV0ZVByb2plY3RDb25maXJtYXRpb24pOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChfcmVuZGVyUHJvamVjdEhlYWRlcigpKVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMnO1xuXG4vLyAmICdiYWNrZW5kJyBtYW5hZ2VyIG1vZHVsZSBjb250YWluaW5nIHByb2plY3QvdGFzayBzdGF0ZXMsIGNsYXNzZXMsICYgbWV0aG9kc1xuXG5jb25zdCBsaWJyYXJ5ID0gKCgpID0+IHtcbiAgICAvLyBkeW5hbWljIGRhdGFcbiAgICBsZXQgX3Byb2plY3RMaWJyYXJ5ID0gW107XG4gICAgbGV0IF90YXNrTGlicmFyeSA9IFtdO1xuICAgIGxldCBfdGFza0NvdW50ZXIgPSAwO1xuICAgIGxldCBfcHJvamVjdENvdW50ZXIgPSAwO1xuXG4gICAgLy8gZmFjdG9yaWVzXG4gICAgY2xhc3MgUHJvamVjdCB7XG4gICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAgY29uc3RydWN0b3IocHJvamVjdElELCBwcm9qZWN0VGl0bGUsIHByb2plY3REZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gJ3Byb2plY3QnO1xuICAgICAgICAgICAgdGhpcy5pZCA9IHByb2plY3RJRDtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0dGVyc1xuICAgICAgICBzZXQgc2V0VGl0bGUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy50aXRsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldERlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgVGFzayB7XG4gICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAgY29uc3RydWN0b3IodGFza0lELCBwcm9qZWN0SUQsIHRhc2tUeXBlLCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCB0YXNrSXRlbXMpIHtcbiAgICAgICAgICAgIGxldCBpdGVtQ291bnQgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmlkID0gdGFza0lEO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0YXNrVHlwZTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0YXNrVGl0bGU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gdGFza0R1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnY2hlY2tsaXN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAodGFza0l0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGFza0l0ZW1zLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1CdW5kbGUgPSBbaXRlbUNvdW50LCB0YXNrSXRlbXNbaV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW1CdW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXR0ZXJzXG4gICAgICAgIHNldCBzZXRUaXRsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzZXQgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldER1ZURhdGUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLmR1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldFByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldFByb2plY3RJRCh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMucHJvamVjdElEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgc2V0IHNldENoZWNrYm94SXRlbSh2YWx1ZUFycmF5KSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB2YWx1ZUFycmF5WzBdO1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB2YWx1ZUFycmF5WzFdO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT09IHRoaXMuaXRlbXNbaW5kZXhdWzFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF1bMV0gPSBjb250ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldHRlclxuICAgIGZ1bmN0aW9uIF9zZXRJbnN0YW5jZVZhbHVlcyh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGxpYnJhcnlSZWZlcmVuY2UgPSB2YWx1ZXNbMF07XG4gICAgICAgIGxldCBpbnN0YW5jZVJlZmVyZW5jZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgdmFsdWVzLnNwbGljZSgwLCAyKTsgICAgLy8gW3RpdGxlLCBkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gW3R5cGUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgJ3ByaW9yaXR5JywgJ3Byb2plY3RJRCcsIFt0YWdzXV1cbiAgICAgICAgY29uc29sZS5sb2cobGlicmFyeVJlZmVyZW5jZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlUmVmZXJlbmNlKTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcblxuXG4gICAgICAgIHN3aXRjaCAobGlicmFyeVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVByb2plY3QodmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX21vZGlmeVByb2plY3QoaW5zdGFuY2VSZWZlcmVuY2UsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Rhc2snOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaW5zdGFuY2VSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJRCAgICAgICAgICAgIHR5cGUgICAgICAgdGl0bGUgICAgZGVzY3JpcHRpb24gIGR1ZURhdGUgICAgcHJpb3JpdHkgICAgICAgICAgICAgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtVmFsdWVzUmVvcmRlcmVkID0gW3BhcnNlSW50KHZhbHVlc1s1XSksIHZhbHVlc1swXSwgdmFsdWVzWzFdLCB2YWx1ZXNbMl0sIHZhbHVlc1szXSwgcGFyc2VJbnQodmFsdWVzWzRdKSwgdmFsdWVzWzZdXVxuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRhc2soZm9ybVZhbHVlc1Jlb3JkZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9tb2RpZnlUYXNrKGluc3RhbmNlUmVmZXJlbmNlLCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1SZWZlcmVuY2UgPSB2YWx1ZXNbMF07XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1Db250ZW50ID0gdmFsdWVzWzFdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSBpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrSUQgPSB2YWx1ZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0luc3RhbmNlID0gX3Rhc2tMaWJyYXJ5W3RdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoZWNrSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUNoZWNrYm94KHRhc2tJbnN0YW5jZSwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX21vZGlmeUNoZWNrYm94KHRhc2tJbnN0YW5jZSwgY2hlY2tsaXN0SXRlbVJlZmVyZW5jZSwgY2hlY2tsaXN0SXRlbUNvbnRlbnQpOyAvLyBmb3JtVmFsdWVzWzBdIG5lZWRlZCB0byBwYXNzIHNpbmdsZSB2YWx1ZSBmcm9tIGZvcm1WYWx1ZXNbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGdldHRlcnNcbiAgICBmdW5jdGlvbiBfcXVlcnlJdGVtSW5zdGFuY2UoaXRlbVJlZmVyZW5jZXMpIHtcbiAgICAgICAgbGV0IGxpYnJhcnlSZWZlcmVuY2UgPSBpdGVtUmVmZXJlbmNlc1swXTtcbiAgICAgICAgbGV0IGluc3RhbmNlUmVmZXJlbmNlID0gaXRlbVJlZmVyZW5jZXNbMV07XG4gICAgICAgIGNvbnNvbGUubG9nKGxpYnJhcnlSZWZlcmVuY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnN0YW5jZVJlZmVyZW5jZSk7XG5cbiAgICAgICAgbGV0IGl0ZW1WYWx1ZUFycmF5O1xuICAgICAgICBzd2l0Y2ggKGxpYnJhcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgKF9wcm9qZWN0TGlicmFyeS5sZW5ndGgpOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBpbnN0YW5jZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBfcHJvamVjdExpYnJhcnlbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVmFsdWVBcnJheSA9IFtpdGVtLmlkLCBpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGFzayc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLmlkID09IGluc3RhbmNlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IF90YXNrTGlicmFyeVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1WYWx1ZUFycmF5ID0gW2l0ZW0uaWQsIGl0ZW0udHlwZSwgaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5kdWVEYXRlLCBpdGVtLnByaW9yaXR5LCBpdGVtLnByb2plY3RJRF07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBsZXQgdGFza1JlZmVyZW5jZSA9IGluc3RhbmNlUmVmZXJlbmNlWzBdOyAgICAgICAvLyAqIHVuYnVuZGxlZCBmcm9tIGRvbURpc3BsYXkuanMgKF9vcGVuTW9kaWZ5Rm9ybVF1ZXJ5KCkpXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94UmVmZXJlbmNlID0gaW5zdGFuY2VSZWZlcmVuY2VbMV07ICAgLy8gKiB1bmJ1bmRsZWQgZnJvbSBkb21EaXNwbGF5LmpzIChfb3Blbk1vZGlmeUZvcm1RdWVyeSgpKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SXRlbXMgPSBfdGFza0xpYnJhcnlbdF0uaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChjaGVja2xpc3RJdGVtcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tsaXN0SXRlbXNbaV1bMF0gPT0gY2hlY2tib3hSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVZhbHVlQXJyYXkgPSBbJ2NoZWNrYm94JywgdGFza1JlZmVyZW5jZSwgY2hlY2tsaXN0SXRlbXNbaV1bMF0sIGNoZWNrbGlzdEl0ZW1zW2ldWzFdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1WYWx1ZUFycmF5KTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Nsb3NlTW9kaWZ5SW5zdGFuY2VRdWVyeScsIGl0ZW1WYWx1ZUFycmF5KTsgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9xdWVyeVByb2plY3ROYW1lc0lEcygpIHtcbiAgICAgICAgbGV0IG5hbWVJREFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgKF9wcm9qZWN0TGlicmFyeS5sZW5ndGgpOyBwKyspIHtcbiAgICAgICAgICAgIG5hbWVJREFycmF5LnB1c2goW19wcm9qZWN0TGlicmFyeVtwXS50aXRsZSwgX3Byb2plY3RMaWJyYXJ5W3BdLmlkXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Nsb3NlUHJvamVjdE9wdGlvbnNRdWVyeScsIG5hbWVJREFycmF5KSAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9idW5kbGVJbnN0YW5jZXModmlld1ByZWZlcmVuY2UsIHF1ZXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZUJ1bmRsZSA9IFtdO1xuXG4gICAgICAgIGxldCBxdWVyeVByb2plY3RzID0gZmFsc2U7XG4gICAgICAgIGxldCBxdWVyeVRhc2tzID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHZpZXdQcmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgIHF1ZXJ5VGFza3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9kYXknOlxuICAgICAgICAgICAgICAgIHF1ZXJ5VGFza3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndXBjb21pbmcnOlxuICAgICAgICAgICAgICAgIHF1ZXJ5VGFza3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYW55dGltZSc6XG4gICAgICAgICAgICAgICAgcXVlcnlUYXNrcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICBxdWVyeVByb2plY3RzID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgcXVlcnlQcm9qZWN0czogJHtxdWVyeVByb2plY3RzfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgcXVlcnlUYXNrczogJHtxdWVyeVRhc2tzfWApO1xuXG4gICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2godmlld1ByZWZlcmVuY2UpO1xuICAgICAgICBpZiAocXVlcnlQcm9qZWN0cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgICAgIGlmIChfcHJvamVjdExpYnJhcnlbcF0uaWQgPT0gcXVlcnlSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VCdW5kbGUucHVzaChfcHJvamVjdExpYnJhcnlbcF0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0ucHJvamVjdElEID09IHF1ZXJ5UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlQnVuZGxlLnB1c2goX3Rhc2tMaWJyYXJ5W3RdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeVRhc2tzID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodmlld1ByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IChfdGFza0xpYnJhcnkubGVuZ3RoKTsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUJ1bmRsZS5wdXNoKF90YXNrTGlicmFyeVt0XSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FueXRpbWUnOlxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHRhc2tzXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRhc2sgaGFzIG5vIGR1ZSBkYXRlLCBwdXNoIHRvIGluc3RhbmNlQnVuZGxlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGluc3RhbmNlQnVuZGxlKTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3VwZGF0ZURpc3BsYXlWaWV3JywgaW5zdGFuY2VCdW5kbGUpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KGF0dHJpYnV0ZUFycmF5KSB7XG4gICAgICAgIGxldCBfaWQgPSBfcHJvamVjdENvdW50ZXI7XG4gICAgICAgIGxldCBfbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KF9pZCwgLi4uYXR0cmlidXRlQXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3IHByb2plY3Q6JylcbiAgICAgICAgY29uc29sZS5sb2coX25ld1Byb2plY3QpO1xuICAgICAgICBfcHJvamVjdExpYnJhcnkucHVzaChfbmV3UHJvamVjdCk7XG4gICAgICAgIF9wcm9qZWN0Q291bnRlcisrO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdwcm9qZWN0Q3JlYXRlZCcsIF9uZXdQcm9qZWN0KTsgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qcywgc2lkZWJhci5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY3JlYXRlVGFzayhhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICBsZXQgX2lkID0gX3Rhc2tDb3VudGVyO1xuICAgICAgICBsZXQgX25ld1Rhc2sgPSBuZXcgVGFzayhfaWQsIC4uLmF0dHJpYnV0ZUFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyB0YXNrOicpXG4gICAgICAgIGNvbnNvbGUubG9nKF9uZXdUYXNrKTtcbiAgICAgICAgX3Rhc2tMaWJyYXJ5LnB1c2goX25ld1Rhc2spO1xuICAgICAgICBfdGFza0NvdW50ZXIrKztcblxuICAgICAgICBldmVudHMucHVibGlzaCgndGFza0NyZWF0ZWQnLCBfbmV3VGFzayk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheURPTS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfY3JlYXRlQ2hlY2tib3godGFzaywgaXRlbVZhbHVlKSB7XG4gICAgICAgIGxldCBjaGVja2xpc3RJdGVtc0xlbmd0aCA9IHRhc2suaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgbmV3SXRlbUlEO1xuXG4gICAgICAgIHN3aXRjaCAoY2hlY2tsaXN0SXRlbXNMZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBuZXdJdGVtSUQgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEl0ZW1JRCA9IHRhc2suaXRlbXNbY2hlY2tsaXN0SXRlbXNMZW5ndGggLSAxXVswXTtcbiAgICAgICAgICAgICAgICBuZXdJdGVtSUQgPSBsYXN0SXRlbUlEICsgMTtcbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtVmFsdWVbMF0gPSBuZXdJdGVtSUQ7XG4gICAgICAgIHRhc2suaXRlbXMucHVzaChpdGVtVmFsdWUpO1xuICAgICAgICBsZXQgX25ld0NoZWNrYm94ID0gWydjaGVja2JveCcsIHRhc2suaWQsIHRhc2suaXRlbXNbY2hlY2tsaXN0SXRlbXNMZW5ndGhdWzBdLCB0YXNrLml0ZW1zW2NoZWNrbGlzdEl0ZW1zTGVuZ3RoXVsxXV07XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGNoZWNrYm94OicpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2suaXRlbXMpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjaGVja2JveENyZWF0ZWQnLCBfbmV3Q2hlY2tib3gpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG5cbiAgICAvLyBtb2RpZnkgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIF9tb2RpZnlQcm9qZWN0KHRhcmdldEl0ZW1JRCwgYXR0cmlidXRlQXJyYXkpIHtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVBcnJheSlcbiAgICAgICAgbGV0IHByb2plY3RJbnN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCAoX3Byb2plY3RMaWJyYXJ5Lmxlbmd0aCk7IHArKykge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2UgPSBfcHJvamVjdExpYnJhcnlbcF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygnb3JpZ2luYWwgcHJvamVjdCBpbnN0YW5jZTonKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5zdGFuY2UpO1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IChhdHRyaWJ1dGVBcnJheS5sZW5ndGgpOyBhKyspIHtcbiAgICAgICAgICAgIHN3aXRjaChhKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2Uuc2V0VGl0bGUgPSBhdHRyaWJ1dGVBcnJheVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5zdGFuY2Uuc2V0RGVzY3JpcHRpb24gPSBhdHRyaWJ1dGVBcnJheVsxXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RpZmllZCBwcm9qZWN0IGluc3RhbmNlOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RJbnN0YW5jZSk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIHByb2plY3RJbnN0YW5jZSk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanMsIGRvbVNpZGViYXIuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gX21vZGlmeVRhc2sodGFyZ2V0SXRlbUlELCBhdHRyaWJ1dGVBcnJheSkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZUFycmF5KTtcbiAgICAgICAgbGV0IHRhc2tJbnN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXJnZXRJdGVtSUQpIHtcbiAgICAgICAgICAgICAgICB0YXNrSW5zdGFuY2UgPSBfdGFza0xpYnJhcnlbdF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygnb3JpZ2luYWwgdGFzayBpbnN0YW5jZTonKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSW5zdGFuY2UpO1xuICAgICAgICBmb3IgKGxldCBhID0gMTsgYSA8IChhdHRyaWJ1dGVBcnJheS5sZW5ndGgpOyBhKyspIHtcbiAgICAgICAgICAgIC8vIFt0eXBlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsICdwcmlvcml0eScsICdwcm9qZWN0SUQnXVxuICAgICAgICAgICAgc3dpdGNoKGEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5zZXRUaXRsZSA9IGF0dHJpYnV0ZUFycmF5WzFdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5kZXNjcmlwdGlvbiA9IGF0dHJpYnV0ZUFycmF5WzJdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5zZXREdWVEYXRlID0gYXR0cmlidXRlQXJyYXlbM107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgdGFza0luc3RhbmNlLnNldFByaW9yaXR5ID0gcGFyc2VJbnQoYXR0cmlidXRlQXJyYXlbNF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5zZXRQcm9qZWN0SUQgPSBwYXJzZUludChhdHRyaWJ1dGVBcnJheVs1XSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kaWZpZWQgdGFzayBpbnN0YW5jZTonKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSW5zdGFuY2UpO1xuXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdpdGVtTW9kaWZpZWQnLCB0YXNrSW5zdGFuY2UpOyAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzLCBkb21TaWRlYmFyLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9tb2RpZnlDaGVja2JveCh0YXNrSW5zdGFuY2UsIHRhcmdldEl0ZW1JRCwgdGFyZ2V0Q29udGVudCkge1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKHRhcmdldEl0ZW1JRCwgdGFyZ2V0Q29udGVudCk7XG4gICAgICAgIGxldCBjaGVja2JveEluc3RhbmNlO1xuICAgICAgICBsZXQgdGFyZ2V0Q2hlY2tsaXN0SXRlbXMgPSB0YXNrSW5zdGFuY2UuaXRlbXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRhcmdldENoZWNrbGlzdEl0ZW1zLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRhcmdldENoZWNrbGlzdEl0ZW1zW2ldWzBdID09IHRhcmdldEl0ZW1JRCkge1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRWYWx1ZUFycmF5ID0gW2ksIHRhcmdldENvbnRlbnRdOyAgLy8gKiBpIHJlcHJlc2VudHMgaXRlbSBpbmRleFxuICAgICAgICAgICAgICAgIHRhc2tJbnN0YW5jZS5zZXRDaGVja2JveEl0ZW0gPSB0YXJnZXRWYWx1ZUFycmF5O1xuICAgICAgICAgICAgICAgIGNoZWNrYm94SW5zdGFuY2UgPSBbJ2NoZWNrYm94JywgdGFza0luc3RhbmNlLmlkLCB0YXJnZXRJdGVtSUQsIHRhcmdldENvbnRlbnRdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ29yaWdpbmFsIHRhc2sgKGNoZWNrYm94KSBpbnN0YW5jZTonKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kaWZpZWQgdGFzayAoY2hlY2tib3gpIGluc3RhbmNlOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tJbnN0YW5jZS5pdGVtcyk7XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2l0ZW1Nb2RpZmllZCcsIGNoZWNrYm94SW5zdGFuY2UpOyAgIC8vIHN1YnNjcmliZWQgYnkgZG9tRGlzcGxheS5qc1xuICAgIH1cblxuICAgIC8vIGRlbGV0ZSBtZXRob2RzXG4gICAgZnVuY3Rpb24gX2RlbGV0ZVByb2plY3QoY2FyZElEKSB7XG4gICAgICAgIGxldCBjYXJkUmVmZXJlbmNlcyA9IGNhcmRJRC5zcGxpdCgnXycpO1xuICAgICAgICBsZXQgcHJvamVjdFJlZmVyZW5jZSA9IGNhcmRSZWZlcmVuY2VzWzFdO1xuICAgICAgICBsZXQgcHJvamVjdExvb3BTdGFydCA9IF9wcm9qZWN0TGlicmFyeS5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAobGV0IHAgPSBwcm9qZWN0TG9vcFN0YXJ0OyBwID4gLTE7IHAtLSkge1xuICAgICAgICAgICAgaWYgKF9wcm9qZWN0TGlicmFyeVtwXS5pZCA9PSBwcm9qZWN0UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Byb2plY3RMaWJyYXJ5LnNwbGljZShwLCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHRhc2tMb29wU3RhcnQgPSBfdGFza0xpYnJhcnkubGVuZ3RoIC0gMTtcbiAgICAgICAgZm9yIChsZXQgdCA9IHRhc2tMb29wU3RhcnQ7IHQgPiAtMTsgdC0tKSB7XG4gICAgICAgICAgICBpZiAoX3Rhc2tMaWJyYXJ5W3RdLnByb2plY3RJRCA9PSBwcm9qZWN0UmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgX3Rhc2tMaWJyYXJ5LnNwbGljZSh0LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0IGRlbGV0ZSByZXN1bHRzOicpXG4gICAgICAgIGNvbnNvbGUubG9nKF9wcm9qZWN0TGlicmFyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF90YXNrTGlicmFyeSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coY2FyZElEKTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZVByb2plY3RGcm9tU2VjdGlvbicsIGNhcmRJRCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgZGlzcGxheS5qcywgc2lkZWJhci5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiBfZGVsZXRlVGFzayhjYXJkSUQpIHtcbiAgICAgICAgbGV0IGNhcmRSZWZlcmVuY2VzID0gY2FyZElELnNwbGl0KCdfJyk7XG4gICAgICAgIGxldCB0YXNrUmVmZXJlbmNlID0gY2FyZFJlZmVyZW5jZXNbMV07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgKF90YXNrTGlicmFyeS5sZW5ndGgpOyB0KyspIHtcbiAgICAgICAgICAgIGlmIChfdGFza0xpYnJhcnlbdF0uaWQgPT0gdGFza1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIF90YXNrTGlicmFyeS5zcGxpY2UodCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygndGFzayBkZWxldGUgcmVzdWx0czonKVxuICAgICAgICBjb25zb2xlLmxvZyhfdGFza0xpYnJhcnkpO1xuICAgICAgICBldmVudHMucHVibGlzaCgncmVtb3ZlVGFza0Zyb21EaXNwbGF5JywgY2FyZElEKTsgICAgLy8gc3Vic2NyaWJlZCBieSBkb21EaXNwbGF5LmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIF9kZWxldGVDaGVja2xpc3RJdGVtKGNoZWNrSUQpIHtcbiAgICAgICAgbGV0IHRhc2tSZWZlcmVuY2UgPSBjaGVja0lELnNwbGl0KCdfXycpWzBdLnNwbGl0KCdfJylbMV07XG4gICAgICAgIGxldCBjaGVja1JlZmVyZW5jZSA9IGNoZWNrSUQuc3BsaXQoJ19fJylbMV0uc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCAoX3Rhc2tMaWJyYXJ5Lmxlbmd0aCk7IHQrKykge1xuICAgICAgICAgICAgaWYgKF90YXNrTGlicmFyeVt0XS5pZCA9PSB0YXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zQXJyYXkgPSBfdGFza0xpYnJhcnlbdF0uaXRlbXM7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoY2hlY2tsaXN0SXRlbXNBcnJheS5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrbGlzdEl0ZW1zQXJyYXlbaV1bMF0gPT0gY2hlY2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdEl0ZW1zQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrbGlzdCBpdGVtIGRlbGV0ZSByZXN1bHRzOicpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja2xpc3RJdGVtc0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBldmVudHMucHVibGlzaCgncmVtb3ZlQ2hlY2tsaXN0SXRlbUZyb21EaXNwbGF5JywgY2hlY2tJRCk7ICAvLyBzdWJzY3JpYmVkIGJ5IGRvbURpc3BsYXkuanNcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdvcGVuVmlld1ByZWZlcmVuY2VRdWVyeScsIF9idW5kbGVJbnN0YW5jZXMpIC8vIHB1Ymxpc2hlZCBmcm9tIHNpZGViYXIuanMgKF9jbGlja1ZpZXdQcmVmZXJlbmNlTGluaygpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY29uZmlybUlucHV0JywgX3NldEluc3RhbmNlVmFsdWVzKTsgLy9wdWJsaXNoZWQgZnJvbSBkZWZhdWx0LmpzIChpbml0KCkpLCBmb3Jtcy5qcyAoX2NvbmZpcm1JbnB1dCgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnb3Blbk1vZGlmeUluc3RhbmNlUXVlcnknLCBfcXVlcnlJdGVtSW5zdGFuY2UpOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBmb3Jtcy5qcyAoX29wZW5Nb2RpZnlRdWVyeSgpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ29wZW5Qcm9qZWN0T3B0aW9uc1F1ZXJ5JywgX3F1ZXJ5UHJvamVjdE5hbWVzSURzKSAgLy8gcHVibGlzaGVkIGZyb20gZm9ybXMuanMgKF9zaG93Rm9ybSgpKVxuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY29uZmlybURlbGV0ZVByb2plY3QnLCBfZGVsZXRlUHJvamVjdCk7ICAgIC8vIHB1Ymxpc2hlZCBmcm9tIGZvcm1zLmpzIChjb25maXJtRGVsZXRlQnV0dG9uIGV2ZW50TGlzdGVuZXIpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xpY2tEZWxldGVUYXNrJywgX2RlbGV0ZVRhc2spOyAgICAvLyBwdWJsaXNoZWQgZnJvbSBkaXNwbGF5LmpzIChfcmVuZGVyLi4uKHRhc2spSGVhZGVycygpKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2NsaWNrRGVsZXRlQ2hlY2tsaXN0SXRlbScsIF9kZWxldGVDaGVja2xpc3RJdGVtKSAgLy8gcHVibGlzaGVkIGZyb20gZGlzcGxheS5qcyAoX3JlbmRlckNoZWNrYm94Q29udHJvbHMoKSlcbn0pKCk7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBsaX0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbi8vICYgbWFuYWdlcyBzaWRlYmFyIHNlY3Rpb24gRE9NIDwtPiBsaWJyYXJ5IGNvbW11bmljYXRpb25cbi8vICYgY29udGFpbnMgZmFjdG9yaWVzIGZvciBnZW5lcmF0aW5nIGRpc3BsYXkgc2VjdGlvbiBET00gZWxlbWVudHMgLyBncm91cGluZ3NcblxuY29uc3Qgc2lkZWJhciA9ICgoKSA9PiB7XG4gICAgLy8gY2FjaGUgZG9tXG4gICAgbGV0IHZpZXdQcmVmcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5cbiAgICBsZXQgdmlld0FsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LWFsbCcpO1xuICAgIGxldCB2aWV3VG9kYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy10b2RheScpO1xuICAgIGxldCB2aWV3VXBjb21pbmdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy11cGNvbWluZycpO1xuICAgIGxldCB2aWV3QW55dGltZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LWFueXRpbWUnKTtcbiAgICBsZXQgdmlld1Vuc29ydGVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctcHJvamVjdF8wJyk7XG4gICAgbGV0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljLXZpZXdzJyk7XG4gICAgbGV0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudmlldy1wcmVmcy1jb250YWluZXIgc3Bhbi5jcmVhdGUnKTtcblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vID8gaGlkZSBzaWRlYmFyIHdoZW4gbm90IGZvY3VzZWQgP1xuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB2aWV3UHJlZnMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIH0pO1xuICAgIFxuICAgIHZpZXdBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ2FsbCcsIGUudGFyZ2V0LmlkKTtcbiAgICB9KTtcbiAgICB2aWV3VG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2aWV3IHRhc2tzIGR1ZSB0b2RheScpO1xuICAgIH0pO1xuICAgIHZpZXdVcGNvbWluZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZpZXcgdGFza2luZyBkdWUgdGhpcyB3ZWVrJyk7XG4gICAgfSk7XG4gICAgdmlld0FueXRpbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2aWV3IHRhc2tzIHdpdGggbm8gZHVlIGRhdGVzJyk7XG4gICAgfSk7XG4gICAgdmlld1Vuc29ydGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgX2NoYW5nZVZpZXdQcmVmZXJlbmNlKCdwcm9qZWN0JywgZS50YXJnZXQuaWQpO1xuICAgIH0pO1xuICAgIGNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdjbGlja0NyZWF0ZVByb2plY3QnLCAncHJvamVjdCcpOyAgICAvLyBzdWJzY3JpYmVkIGJ5IGZvcm1zLmpzXG4gICAgfSk7XG5cbiAgICAvLyBtYW5hZ2Vyc1xuICAgIGZ1bmN0aW9uIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZShwcmVmZXJlbmNlS2V5d29yZCwgdGFyZ2V0SUQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0SUQpO1xuICAgICAgICBsZXQgcXVlcnlSZWZlcmVuY2U7XG5cbiAgICAgICAgc3dpdGNoIChwcmVmZXJlbmNlS2V5d29yZCkge1xuICAgICAgICAgICAgY2FzZSAndG9kYXknOlxuICAgICAgICAgICAgICAgIC8vIGdldCB0b2RheSdzIGRhdGUgKGZyb20gZGF0ZSB0aW1lIGFwaSlcbiAgICAgICAgICAgICAgICAvLyB0YXJnZXQgcmVmZXJlbmNlID0gdG9kYXkncyBkYXRlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cGNvbWluZyc6XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRvZGF5J3MgZGF0ZSAoZHJvbSBkYXRlIHRpbWUgYXBpKVxuICAgICAgICAgICAgICAgIC8vIGFkZCA3IGRheXMgdG8gZGF0ZVxuICAgICAgICAgICAgICAgIC8vIHRhcmdldCByZWZlcmVuY2UgPSB0b2RheSdzIGRhdGVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgIGxldCBzcGxpdElEID0gdGFyZ2V0SUQuc3BsaXQoJ18nKTtcbiAgICAgICAgICAgICAgICBxdWVyeVJlZmVyZW5jZSA9IHNwbGl0SURbMV07XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gICAgIHF1ZXJ5UmVmZXJlbmNlID0gJyc7XG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5WaWV3UHJlZmVyZW5jZVF1ZXJ5JywgcHJlZmVyZW5jZUtleXdvcmQsIHF1ZXJ5UmVmZXJlbmNlKTsgLy8gc3Vic2NyaWJlZCBieSBsaWJyYXJ5LmpzXG4gICAgfVxuXG4gICAgLy8gZmFjdG9yaWVzXG4gICAgY29uc3QgX3JlbmRlclByb2plY3RMaW5rID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBpZiAocHJvamVjdC5pZCAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IGlkID0gcHJvamVjdC5pZDtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgIGxldCBsaUlEID0gYCN2aWV3XyR7aWR9YDtcbiAgICAgICAgICAgIGxldCBsaVByb2plY3RMaW5rID0gbGkodGl0bGUsIGxpSUQpO1xuXG4gICAgICAgICAgICBsaVByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBfY2hhbmdlVmlld1ByZWZlcmVuY2UoJ3Byb2plY3QnLCBlLnRhcmdldC5pZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGxpUHJvamVjdExpbmspO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfbW9kaWZ5Vmlld1ByZWZlcmVuY2VMaW5rKGl0ZW1JbnN0YW5jZSkge1xuICAgICAgICBpZiAoaXRlbUluc3RhbmNlLnR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHZpZXctcHJvamVjdF8ke2l0ZW1JbnN0YW5jZS5pZH1gKTtcbiAgICAgICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gaXRlbUluc3RhbmNlLnRpdGxlO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBfcmVtb3ZlUHJvamVjdExpbmsocHJvamVjdENhcmRJRCkge1xuICAgICAgICBsZXQgbGlua1JlZmVyZW5jZSA9IHByb2plY3RDYXJkSUQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgY29uc29sZS5sb2cobGlua1JlZmVyZW5jZSk7XG5cbiAgICAgICAgbGV0IGxpUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB2aWV3XyR7bGlua1JlZmVyZW5jZX1gKTtcbiAgICAgICAgbGV0IHVsQ29udGFpbmVyID0gbGlQcm9qZWN0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgdWxDb250YWluZXIucmVtb3ZlQ2hpbGQobGlQcm9qZWN0KTtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgKHVsQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpOlxuICAgICAgICAgICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsIHVsQ29udGFpbmVyLmxhc3RDaGlsZC5pZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9jaGFuZ2VWaWV3UHJlZmVyZW5jZSgncHJvamVjdCcsICdwcm9qZWN0XzAnKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncHJvamVjdENyZWF0ZWQnLCBfcmVuZGVyUHJvamVjdExpbmspOyAvLyBwdWJsaXNoZWQgYnkgbGlicmFyeS5qcyAoX2NyZWF0ZVByb2plY3QoKSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZW1vdmVQcm9qZWN0RnJvbVNlY3Rpb24nLCBfcmVtb3ZlUHJvamVjdExpbmspOyAgIC8vIHB1Ymxpc2hlZCBieSBsaWJyYXJ5LmpzIChfZGVsZXRlUHJvamVjdCgpKTtcblxuXG5cblxuXG5cblxuXG5cbiAgICBldmVudHMuc3Vic2NyaWJlKCdpdGVtTW9kaWZpZWQnLCBfbW9kaWZ5Vmlld1ByZWZlcmVuY2VMaW5rKTsgICAvLyBwdWJsaXNoZWQgYnkgbGlicmFyeS5qcyAoX21vZGlmeS4uLigpKVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbGF5b3V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3R5cG8uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc2hhcGluZy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jb2xvcnMuY3NzJztcblxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuL3NjcmlwdHMvZGVmYXVsdC5qcyc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL3NjcmlwdHMvZGlzcGxheSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9zY3JpcHRzL2Zvcm1zJztcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2NyaXB0cy9zaWRlYmFyJztcbmltcG9ydCBsaWJyYXJ5IGZyb20gJy4vc2NyaXB0cy9saWJyYXJ5JztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG4vLyBhY3Rpb25zXG5kZWZhdWx0U3RhdGUuaW5pdCgpO1xuZXZlbnRzLnZpZXdFdmVudHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=