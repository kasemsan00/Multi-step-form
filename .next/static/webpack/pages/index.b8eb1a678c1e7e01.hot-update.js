"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/FormInputSection.tsx":
/*!*********************************************!*\
  !*** ./src/components/FormInputSection.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormInputSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_YourInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/YourInfo */ \"./src/components/YourInfo.tsx\");\n\n\nfunction FormInputSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-input-section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_YourInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormInputSection.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-input-footer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"go-back-button\",\n                        children: \"Go Back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormInputSection.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"next-step-button\",\n                        children: \"Next Step\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormInputSection.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormInputSection.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormInputSection.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = FormInputSection;\nvar _c;\n$RefreshReg$(_c, \"FormInputSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtSW5wdXRTZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUU5QixTQUFTQyxtQkFBbUI7SUFDekMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDSCw0REFBUUE7Ozs7OzBCQUNULDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFPRCxXQUFVO2tDQUFpQjs7Ozs7O2tDQUNuQyw4REFBQ0M7d0JBQU9ELFdBQVU7a0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0MsQ0FBQztLQVZ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUlucHV0U2VjdGlvbi50c3g/OWE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWW91ckluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9Zb3VySW5mb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtSW5wdXRTZWN0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1zZWN0aW9uXCI+XG4gICAgICA8WW91ckluZm8gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1mb290ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnby1iYWNrLWJ1dHRvblwiPkdvIEJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0LXN0ZXAtYnV0dG9uXCI+TmV4dCBTdGVwPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJZb3VySW5mbyIsIkZvcm1JbnB1dFNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormInputSection.tsx\n"));

/***/ }),

/***/ "./src/components/YourInfo.tsx":
/*!*************************************!*\
  !*** ./src/components/YourInfo.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction YourInfo() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"personal-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-title\",\n                children: \"Personal Info\"\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"form-description\",\n                children: \"Please provide your name, email address, and phone number\"\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-input-field\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                                lineNumber: 10,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"input-warning\",\n                                children: \"This field is required\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                                lineNumber: 11,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"e.g. Stephen King\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-input-field\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Email Address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"input-warning\",\n                                children: \"This field is required\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        placeholder: \"e.g stephenking@lorem.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-input-field\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Phone Number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"input-warning\",\n                                children: \"This field is required\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        placeholder: \"e.g +1 234 567 890\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/YourInfo.tsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = YourInfo;\nvar _c;\n$RefreshReg$(_c, \"YourInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Zb3VySW5mby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLFdBQVc7SUFDakMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBYTs7Ozs7OzBCQUM1Qiw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQW1COzs7Ozs7MEJBR2hDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEOzswQ0FDQyw4REFBQ0c7MENBQU07Ozs7OzswQ0FDUCw4REFBQ0E7Z0NBQU1GLFdBQVU7MENBQWdCOzs7Ozs7Ozs7Ozs7a0NBRW5DLDhEQUFDRzt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDs7MENBQ0MsOERBQUNHOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNBO2dDQUFNRixXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7O2tDQUVuQyw4REFBQ0c7d0JBQU1DLE1BQUs7d0JBQVFDLGFBQVk7Ozs7Ozs7Ozs7OzswQkFFbEMsOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7OzBDQUNDLDhEQUFDRzswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQTtnQ0FBTUYsV0FBVTswQ0FBZ0I7Ozs7Ozs7Ozs7OztrQ0FFbkMsOERBQUNHO3dCQUFNQyxNQUFLO3dCQUFTQyxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekMsQ0FBQztLQTlCdUJQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1lvdXJJbmZvLnRzeD85NTUwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXJJbmZvKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyc29uYWwtaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpdGxlXCI+UGVyc29uYWwgSW5mbzwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS1kZXNjcmlwdGlvblwiPlxuICAgICAgICBQbGVhc2UgcHJvdmlkZSB5b3VyIG5hbWUsIGVtYWlsIGFkZHJlc3MsIGFuZCBwaG9uZSBudW1iZXJcbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1maWVsZFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtd2FybmluZ1wiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlLmcuIFN0ZXBoZW4gS2luZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1maWVsZFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtd2FybmluZ1wiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZS5nIHN0ZXBoZW5raW5nQGxvcmVtLmNvbVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1maWVsZFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5QaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC13YXJuaW5nXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiZS5nICsxIDIzNCA1NjcgODkwXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIllvdXJJbmZvIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/YourInfo.tsx\n"));

/***/ })

});