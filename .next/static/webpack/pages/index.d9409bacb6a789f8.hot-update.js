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

/***/ "./src/components/FormStep.tsx":
/*!*************************************!*\
  !*** ./src/components/FormStep.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormStep; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Step */ \"./src/components/Step.tsx\");\n\n\nfunction FormStep() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-step\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Step__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                number: \"1\",\n                stepTitle: \"STEP 1\",\n                stepInfo: \"YOUR INFO\",\n                active: false\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormStep.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Step__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                number: \"2\",\n                stepTitle: \"STEP 2\",\n                stepInfo: \"SELECT PLAN\",\n                active: false\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormStep.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Step__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                number: \"3\",\n                stepTitle: \"STEP 3\",\n                stepInfo: \"ADD-ONS\",\n                active: false\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormStep.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Step__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                number: \"$\",\n                stepTitle: \"STEP 4\",\n                stepInfo: \"SUMMARY\",\n                active: facle\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormStep.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/FormStep.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = FormStep;\nvar _c;\n$RefreshReg$(_c, \"FormStep\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtU3RlcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFdEIsU0FBU0MsV0FBVztJQUNqQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNILHdEQUFJQTtnQkFDSEksUUFBUTtnQkFDUkMsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsUUFBUSxLQUFLOzs7Ozs7MEJBRWYsOERBQUNQLHdEQUFJQTtnQkFDSEksUUFBUTtnQkFDUkMsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsUUFBUSxLQUFLOzs7Ozs7MEJBRWYsOERBQUNQLHdEQUFJQTtnQkFDSEksUUFBUTtnQkFDUkMsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsUUFBUSxLQUFLOzs7Ozs7MEJBRWYsOERBQUNQLHdEQUFJQTtnQkFDSEksUUFBUTtnQkFDUkMsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsUUFBUUM7Ozs7Ozs7Ozs7OztBQUloQixDQUFDO0tBN0J1QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybVN0ZXAudHN4PzE4OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0ZXAgZnJvbSBcIkAvY29tcG9uZW50cy9TdGVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1TdGVwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zdGVwXCI+XG4gICAgICA8U3RlcFxuICAgICAgICBudW1iZXI9e1wiMVwifVxuICAgICAgICBzdGVwVGl0bGU9e1wiU1RFUCAxXCJ9XG4gICAgICAgIHN0ZXBJbmZvPXtcIllPVVIgSU5GT1wifVxuICAgICAgICBhY3RpdmU9e2ZhbHNlfVxuICAgICAgLz5cbiAgICAgIDxTdGVwXG4gICAgICAgIG51bWJlcj17XCIyXCJ9XG4gICAgICAgIHN0ZXBUaXRsZT17XCJTVEVQIDJcIn1cbiAgICAgICAgc3RlcEluZm89e1wiU0VMRUNUIFBMQU5cIn1cbiAgICAgICAgYWN0aXZlPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICA8U3RlcFxuICAgICAgICBudW1iZXI9e1wiM1wifVxuICAgICAgICBzdGVwVGl0bGU9e1wiU1RFUCAzXCJ9XG4gICAgICAgIHN0ZXBJbmZvPXtcIkFERC1PTlNcIn1cbiAgICAgICAgYWN0aXZlPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICA8U3RlcFxuICAgICAgICBudW1iZXI9e1wiJFwifVxuICAgICAgICBzdGVwVGl0bGU9e1wiU1RFUCA0XCJ9XG4gICAgICAgIHN0ZXBJbmZvPXtcIlNVTU1BUllcIn1cbiAgICAgICAgYWN0aXZlPXtmYWNsZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3RlcCIsIkZvcm1TdGVwIiwiZGl2IiwiY2xhc3NOYW1lIiwibnVtYmVyIiwic3RlcFRpdGxlIiwic3RlcEluZm8iLCJhY3RpdmUiLCJmYWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormStep.tsx\n"));

/***/ }),

/***/ "./src/components/Step.tsx":
/*!*********************************!*\
  !*** ./src/components/Step.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Step; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Step(param) {\n    let { number , stepTitle , stepInfo , active  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"step\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"step-number\",\n                children: number\n            }, void 0, false, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/Step.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"step-title\",\n                        children: stepTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/Step.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"step-info\",\n                        children: stepInfo\n                    }, void 0, false, {\n                        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/Step.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/Step.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kasemsan/Documents/dev/frontendmentor.io/multi-step-form/src/components/Step.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Step;\nvar _c;\n$RefreshReg$(_c, \"Step\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT2UsU0FBU0EsS0FBSyxLQUE4QyxFQUFFO1FBQWhELEVBQUVDLE9BQU0sRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBUyxHQUE5QztJQUMzQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFlTDs7Ozs7OzBCQUM5Qiw4REFBQ0k7O2tDQUNDLDhEQUFDQTt3QkFBSUMsV0FBVTtrQ0FBY0o7Ozs7OztrQ0FDN0IsOERBQUNHO3dCQUFJQyxXQUFVO2tDQUFhSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBDLENBQUM7S0FWdUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N0ZXAudHN4PzE5ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByb3BzIHtcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHN0ZXBUaXRsZTogc3RyaW5nO1xuICBzdGVwSW5mbzogc3RyaW5nO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0ZXAoeyBudW1iZXIsIHN0ZXBUaXRsZSwgc3RlcEluZm8sIGFjdGl2ZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLW51bWJlclwiPntudW1iZXJ9PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtdGl0bGVcIj57c3RlcFRpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtaW5mb1wiPntzdGVwSW5mb308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlN0ZXAiLCJudW1iZXIiLCJzdGVwVGl0bGUiLCJzdGVwSW5mbyIsImFjdGl2ZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Step.tsx\n"));

/***/ })

});