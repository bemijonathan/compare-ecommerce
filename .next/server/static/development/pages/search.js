module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.jsx":
/*!*******************************!*\
  !*** ./components/footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return componentName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/components/footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function componentName() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "bg-white p-3 text-center text-green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Made with Love \u2764\uFE0F ", __jsx("a", {
    target: "_blank",
    href: "https://twitter.com/bemijonathan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, " mixed_code ")));
}

/***/ }),

/***/ "./components/frame.jsx":
/*!******************************!*\
  !*** ./components/frame.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/components/frame.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class FrameComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_link", `https://konga-jumia.herokuapp.com/${this.props.type}${this.props.router.asPath.replace('/search', '')}`);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getData", async () => {// https://konga-jumia.herokuapp.com/konga?term=shoe&page=2
    });
  }

  componentDidMount() {
    console.log(this._link);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Image"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "title"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Price"), __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Visit"))), __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Image"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "title"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Price"), __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Visit"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(FrameComponent));

/***/ }),

/***/ "./components/index.css":
/*!******************************!*\
  !*** ./components/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/navbar.jsx":
/*!*******************************!*\
  !*** ./components/navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return componentName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/components/navbar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class componentName extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "flex justify-between bg-blue-100 items-center p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("h1", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, " ", __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "SHOP"), "bine "), __jsx("div", {
      className: "flex list-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("li", {
      className: "m-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Support"), __jsx("li", {
      className: "m-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Join Us"), __jsx("li", {
      className: "m-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Developers"))));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/search/index.jsx":
/*!********************************!*\
  !*** ./pages/search/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/navbar */ "./components/navbar.jsx");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index.css */ "./components/index.css");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.jsx");
/* harmony import */ var _components_frame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/frame */ "./components/frame.jsx");

var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/pages/search/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





class SearchComponent extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      term: '',
      site1: true,
      site2: true
    });
  }

  render() {
    const getValue = e => {
      console.log(e.target.value);
      this.setState({
        term: e.target.value
      });
    };

    const changeSite = (e, site) => {
      console.log(e.target.checked, e.target);
      this.setState({
        site: e.target.value
      });
      console.log(this.state);
    };

    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "jsx-699946157",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-699946157" + " " + "bg-green-700 p-4 text-center flex sm:flex-wrap justify-center items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      name: "",
      placeholder: "what item are you searching for",
      onInput: getValue,
      id: "",
      className: "jsx-699946157" + " " + "bg-white mr-3 rounded-lg py-1 px-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("input", {
      type: "checkbox",
      id: "",
      checked: true,
      className: "jsx-699946157" + " " + "ml-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), " Jumia", __jsx("input", {
      type: "checkbox",
      checked: true,
      className: "jsx-699946157" + " " + "ml-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), " Konga", __jsx("input", {
      type: "checkbox",
      name: "",
      id: "",
      disabled: true,
      className: "jsx-699946157" + " " + "ml-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), " Amazon", __jsx("input", {
      type: "checkbox",
      name: "",
      id: "",
      disabled: true,
      className: "jsx-699946157" + " " + "ml-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), " OLX Nigeria", __jsx("input", {
      type: "checkbox",
      name: "",
      id: "",
      disabled: true,
      className: "jsx-699946157" + " " + "ml-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), " Jiji", __jsx("input", {
      type: "checkbox",
      name: "",
      id: "",
      disabled: true,
      className: "jsx-699946157" + " " + "ml-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), " Alibaba", __jsx("button", {
      className: "jsx-699946157" + " " + "bg-white rounded-lg py-1 px-3 ml-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, " Search ")), __jsx("section", {
      className: "jsx-699946157" + " " + "min-h-screen bg-green-200 flex flex-wrap ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("section", {
      className: "jsx-699946157" + " " + "h-100 flex-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-699946157" + " " + "text-center text-lg pt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, " Jumia "), __jsx("div", {
      className: "jsx-699946157" + " " + "flex justify-center item-center mt-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      id: "button",
      className: "jsx-699946157",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-699946157",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(_components_frame__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: 'jumia',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }))), __jsx("section", {
      className: "jsx-699946157" + " " + "flex-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-699946157" + " " + "text-center text-lg pt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, " Konga "), __jsx("div", {
      className: "jsx-699946157" + " " + "flex justify-center item-center mt-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      id: "button",
      className: "jsx-699946157",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-699946157",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(_components_frame__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: 'konga',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "699946157",
      __self: this
    }, "#button.jsx-699946157{height:40px;width:40px;background:transparent;border-radius:50%;border:1px solid white;border-top:2px solid green;-webkit-animation:spinner1-jsx-699946157 600ms linear infinite;animation:spinner1-jsx-699946157 600ms linear infinite;}@-webkit-keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvcGFnZXMvc2VhcmNoL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHNCLEFBRzJCLEFBVWUsWUFUaEIsV0FDWSx1QkFDTCxrQkFDSyx1QkFDSSxBQU0zQiwyQkFMeUMsc0hBQzNDIiwiZmlsZSI6Ii9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvcGFnZXMvc2VhcmNoL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pbmRleC5jc3NcIlxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBGcmFtZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZyYW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0ZXJtOiAnJyxcbiAgICBzaXRlMTogdHJ1ZSxcbiAgICBzaXRlMjogdHJ1ZVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGVybTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZVNpdGUgPSAoZSwgc2l0ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuY2hlY2tlZCwgZS50YXJnZXQpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2l0ZTogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi03MDAgcC00IHRleHQtY2VudGVyIGZsZXggc206ZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIHBsYWNlaG9sZGVyPVwid2hhdCBpdGVtIGFyZSB5b3Ugc2VhcmNoaW5nIGZvclwiIG9uSW5wdXQ9e2dldFZhbHVlfSBpZD1cIlwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIG1yLTMgcm91bmRlZC1sZyBweS0xIHB4LTNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGNoZWNrZWQgLz4gSnVtaWFcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibWwtM1wiIGNoZWNrZWQgLz4gS29uZ2FcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGRpc2FibGVkIC8+IEFtYXpvblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJcIiBjbGFzc05hbWU9XCJtbC0zXCIgZGlzYWJsZWQgLz4gT0xYIE5pZ2VyaWFcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGRpc2FibGVkIC8+IEppamlcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGRpc2FibGVkIC8+IEFsaWJhYmFcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgcHktMSBweC0zIG1sLTVcIj4gU2VhcmNoIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmVlbi0yMDAgZmxleCBmbGV4LXdyYXAgXCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLTEwMCBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGcgcHQtM1wiPiBKdW1pYSA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbS1jZW50ZXIgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uXCI+PC9kaXYgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RnJhbWUgdHlwZT17J2p1bWlhJ30vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyBwdC0zXCI+IEtvbmdhIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtLWNlbnRlciBtdC0yMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25cIj48L2RpdiA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGcmFtZSB0eXBlPXsna29uZ2EnfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjYnV0dG9uIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyMSA2MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIxIHtcbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/mixed_code/dev/joe/codes/compare-e-commerce/pages/search/index.jsx */")));
  }

}

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/search/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mixed_code/dev/joe/codes/compare-e-commerce/pages/search/index.jsx */"./pages/search/index.jsx");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map