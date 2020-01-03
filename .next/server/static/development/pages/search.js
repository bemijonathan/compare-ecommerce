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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/components/frame.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



class FrameComponent extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_link", `https://konga-jumia.herokuapp.com/${this.props.type}${this.props.router.asPath.replace('/search', '')}`);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getData", async () => {
      const res = await fetch(this._link);
      console.log(this._link);
      const data = await res.json();
      console.log(data);
      this.setState({
        products: data.items,
        totalPage: data.page,
        loading: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "paginate", async url => {
      let newlink = url.replace('/search', '');
      let link = `https://konga-jumia.herokuapp.com/${this.props.type}${newlink}`;
      this.setState({
        products: [],
        loading: true
      });
      const res = await fetch(link);
      console.log(link);
      const data = await res.json();
      console.log(data);
      this.setState({
        products: data.items,
        totalPage: data.page,
        loading: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      counter: 0,
      products: [],
      totalPage: '',
      loading: true
    });
  }

  componentDidMount() {
    console.log(this._link);
    this.setState({
      counter: 0
    });
    this.getData();
    this.props.router.events.on('routeChangeComplete', url => {
      // this.getData()
      console.log(url);
      this.setState({
        loading: true
      });
      this.paginate(url);
    });
  }

  render() {
    const PrevPage = e => {
      // this.setState({ counter:  +this.props.router.query.page + 1 })
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1
        });
      } else {
        this.setState({
          counter: 0
        });
      }

      page();
    };

    const page = async () => {
      let {
        term,
        page
      } = this.props.router.query;
      let link = `https://konga-jumia.herokuapp.com/${this.props.type}?term=${term}&page=${this.state.counter}`;
      this.setState({
        products: [],
        loading: true
      });
      const res = await fetch(link);
      console.log(link);
      const data = await res.json();
      console.log(data);
      this.setState({
        products: data.items,
        totalPage: data.page,
        loading: false
      });
    };

    const Nextpage = e => {
      this.setState({
        counter: this.state.counter + 1
      });
      page();
    };

    const listItems = this.state.products.filter(product => product.image !== null).map((product, i) => __jsx("div", {
      className: "lg:w-1/2 bg-green-600 lg:p-3 p-2 text-white w-full",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("div", {
      className: "bg-white text-black rounded-lg flex items-center",
      style: {
        height: '300px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: "w-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("p", {
      className: "m-2 lg:m-3 text-xs lg:text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, product.name.slice(0, 50) + '...'), __jsx("img", {
      src: product.image,
      className: "m-auto rounded-lg object-contain",
      style: {
        height: '170px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), __jsx("div", {
      className: "flex justify-between lg:m-3 m-2 text-xs lg:text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, product.price), __jsx("a", {
      href: product.link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, " View "))))));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, this.state.loading ? __jsx("div", {
      className: "jsx-699946157" + " " + "flex justify-center item-center mt-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("div", {
      id: "button",
      className: "jsx-699946157",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })) : '', __jsx("section", {
      className: "jsx-699946157" + " " + "flex flex-wrap max-h-screen overflow-y-auto bg-white m-1 lg:m-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, listItems), __jsx("section", {
      style: {
        bottom: '30px'
      },
      className: "jsx-699946157" + " " + "pagination class flex flex-wrap justify-center items-center pb-5 fixed l-0 r-0 m-auto w-1/2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("button", {
      onClick: Nextpage,
      className: "jsx-699946157" + " " + "lg:p-2 p-1 text-xs lg:text-sm bg-green-500 text-white rounded-lg mr-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, 'Next >'), __jsx("span", {
      className: "jsx-699946157" + " " + "text-xs lg:text-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, this.state.counter, " of ", this.state.totalPage, " "), __jsx("button", {
      onClick: PrevPage,
      className: "jsx-699946157" + " " + "lg:p-2  p-1 bg-white text-green-800 text-xs lg:text-sm rounded-lg ml-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, '< Prev')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "699946157",
      __self: this
    }, "#button.jsx-699946157{height:40px;width:40px;background:transparent;border-radius:50%;border:1px solid white;border-top:2px solid green;-webkit-animation:spinner1-jsx-699946157 600ms linear infinite;animation:spinner1-jsx-699946157 600ms linear infinite;}@-webkit-keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvY29tcG9uZW50cy9mcmFtZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlvQixBQUcyQixBQVVlLFlBVGhCLFdBQ1ksdUJBQ0wsa0JBQ0ssdUJBQ0ksQUFNM0IsMkJBTHlDLHNIQUMzQyIsImZpbGUiOiIvaG9tZS9taXhlZF9jb2RlL2Rldi9qb2UvY29kZXMvY29tcGFyZS1lLWNvbW1lcmNlL2NvbXBvbmVudHMvZnJhbWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBGcmFtZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX2xpbmspXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6ICAwIH0pXG4gICAgdGhpcy5nZXREYXRhKClcblxuICAgIHRoaXMucHJvcHMucm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICh1cmwpID0+IHtcbiAgICAvLyB0aGlzLmdldERhdGEoKVxuICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzp0cnVlXG4gICAgIH0pXG4gICAgIHRoaXMucGFnaW5hdGUodXJsKVxuICAgIH0pO1xuICB9XG4gIFxuICBfbGluayA9IGBodHRwczovL2tvbmdhLWp1bWlhLmhlcm9rdWFwcC5jb20vJHt0aGlzLnByb3BzLnR5cGV9JHt0aGlzLnByb3BzLnJvdXRlci5hc1BhdGgucmVwbGFjZSgnL3NlYXJjaCcsICcnKX1gXG5cbiAgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh0aGlzLl9saW5rKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9saW5rKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByb2R1Y3RzOmRhdGEuaXRlbXMsXG4gICAgICB0b3RhbFBhZ2U6ZGF0YS5wYWdlLFxuICAgICAgbG9hZGluZzpmYWxzZVxuICAgIH0pXG4gIH1cblxuICBwYWdpbmF0ZSA9IGFzeW5jKHVybCkgPT4ge1xuICAgIGxldCBuZXdsaW5rID0gdXJsLnJlcGxhY2UoJy9zZWFyY2gnLCcnKTtcbiAgICBsZXQgbGluayA9IGBodHRwczovL2tvbmdhLWp1bWlhLmhlcm9rdWFwcC5jb20vJHt0aGlzLnByb3BzLnR5cGV9JHtuZXdsaW5rfWBcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByb2R1Y3RzOltdLFxuICAgICAgbG9hZGluZzp0cnVlXG4gICAgfSlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChsaW5rKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJvZHVjdHM6ZGF0YS5pdGVtcyxcbiAgICAgIHRvdGFsUGFnZTpkYXRhLnBhZ2UsXG4gICAgICBsb2FkaW5nOmZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRlPXtcbiAgICBjb3VudGVyOjAsXG4gICAgcHJvZHVjdHM6W10sXG4gICAgdG90YWxQYWdlOicnLFxuICAgIGxvYWRpbmc6dHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IFByZXZQYWdlID0gKGUpID0+IHtcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVyOiAgK3RoaXMucHJvcHMucm91dGVyLnF1ZXJ5LnBhZ2UgKyAxIH0pXG4gICAgICBpZih0aGlzLnN0YXRlLmNvdW50ZXIgPiAwKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjp0aGlzLnN0YXRlLmNvdW50ZXIgLSAxfSlcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOjB9KVxuICAgICAgfVxuICAgICAgcGFnZSgpXG4gICAgfVxuXG4gICAgY29uc3QgcGFnZSA9IGFzeW5jKCkgPT4ge1xuXG4gICAgICBsZXQge3Rlcm0gLCBwYWdlfSA9IHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5XG4gICAgICBcbiAgICAgIGxldCBsaW5rID0gYGh0dHBzOi8va29uZ2EtanVtaWEuaGVyb2t1YXBwLmNvbS8ke3RoaXMucHJvcHMudHlwZX0/dGVybT0ke3Rlcm19JnBhZ2U9JHt0aGlzLnN0YXRlLmNvdW50ZXJ9YFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RzOltdLFxuICAgICAgICBsb2FkaW5nOnRydWVcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxpbmspO1xuICAgICAgY29uc29sZS5sb2cobGluaylcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByb2R1Y3RzOmRhdGEuaXRlbXMsXG4gICAgICAgIHRvdGFsUGFnZTpkYXRhLnBhZ2UsXG4gICAgICAgIGxvYWRpbmc6ZmFsc2VcbiAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBOZXh0cGFnZSA9IChlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOnRoaXMuc3RhdGUuY291bnRlciArIDF9KVxuICAgICAgcGFnZSgpXG4gICAgfVxuXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gdGhpcy5zdGF0ZS5wcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaW1hZ2UgIT09IG51bGwpLm1hcCgocHJvZHVjdCwgaSkgPT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzIgYmctZ3JlZW4tNjAwIGxnOnAtMyBwLTIgdGV4dC13aGl0ZSB3LWZ1bGxcIiBrZXk9e2l9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmxhY2sgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7aGVpZ2h0OiczMDBweCd9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0yIGxnOm0tMyB0ZXh0LXhzIGxnOnRleHQtc21cIj57cHJvZHVjdC5uYW1lLnNsaWNlKDAsNTApKyAnLi4uJ308L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gY2xhc3NOYW1lPVwibS1hdXRvIHJvdW5kZWQtbGcgb2JqZWN0LWNvbnRhaW5cIiBzdHlsZT17e2hlaWdodDonMTcwcHgnfX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBsZzptLTMgbS0yIHRleHQteHMgbGc6dGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8cD57cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2R1Y3QubGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgPiBWaWV3IDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW0tY2VudGVyIG10LTIwXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImJ1dHRvblwiPjwvZGl2ID5cbiAgICAgICAgPC9kaXY+OiAnJ31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbWF4LWgtc2NyZWVuIG92ZXJmbG93LXktYXV0byBiZy13aGl0ZSBtLTEgbGc6bS0zXCI+XG4gICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIGNsYXNzIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwYi01IGZpeGVkIGwtMCByLTAgbS1hdXRvIHctMS8yXCIgc3R5bGU9e3tib3R0b206JzMwcHgnfX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZzpwLTIgcC0xIHRleHQteHMgbGc6dGV4dC1zbSBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIG1yLTNcIiBvbkNsaWNrPXtOZXh0cGFnZX0+XG4gICAgICAgICAgICB7J05leHQgPid9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGxnOnRleHQtc21cIj57dGhpcy5zdGF0ZS5jb3VudGVyfSBvZiB7dGhpcy5zdGF0ZS50b3RhbFBhZ2UgfSA8L3NwYW4+IFxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZzpwLTIgIHAtMSBiZy13aGl0ZSB0ZXh0LWdyZWVuLTgwMCB0ZXh0LXhzIGxnOnRleHQtc20gcm91bmRlZC1sZyBtbC0zXCIgb25DbGljaz17UHJldlBhZ2V9PlxuICAgICAgICAgICAgeyc8IFByZXYnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgI2J1dHRvbiB7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgZ3JlZW47XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogc3Bpbm5lcjEgNjAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBzcGlubmVyMSB7XG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvPlxuXG4gICAgICBcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihGcmFtZUNvbXBvbmVudCkiXX0= */\n/*@ sourceURL=/home/mixed_code/dev/joe/codes/compare-e-commerce/components/frame.jsx */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(FrameComponent));

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
      className: "flex justify-between items-center p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("a", {
      className: "",
      href: "/",
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
    }, "Join Us"))));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar */ "./components/navbar.jsx");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index.css */ "./components/index.css");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.jsx");
/* harmony import */ var _components_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/frame */ "./components/frame.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/pages/search/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class SearchComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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

    const searchValue = () => {
      this.props.router.push(`/search?term=${this.state.term}&page=0`);
    };

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("div", {
      className: "bg-green-700 p-4 text-center flex flex-wrap lg:flex-nowrap justify-center items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      name: "",
      placeholder: "what item are you searching for",
      onInput: getValue,
      id: "",
      className: "bg-white lg:mr-3 m-3  rounded-lg py-1 px-3 lg:w-auto w-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("input", {
      type: "checkbox",
      id: "",
      className: "ml-3",
      checked: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), " Jumia", __jsx("input", {
      type: "checkbox",
      className: "ml-3",
      checked: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), " Konga", __jsx("input", {
      type: "checkbox",
      name: "",
      id: "",
      className: "ml-3",
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), " Amazon", __jsx("input", {
      type: "checkbox",
      name: "",
      id: "",
      className: "ml-3",
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), " OLX Nigeria", __jsx("input", {
      type: "checkbox",
      name: "",
      id: "",
      className: "ml-3",
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), " Jiji", __jsx("input", {
      type: "checkbox",
      name: "",
      id: "",
      className: "ml-3",
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), " Alibaba", __jsx("button", {
      className: "bg-white rounded-lg py-1 px-3 lg:ml-5 m-0 w-1/2 lg:w-auto",
      onClick: searchValue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, " Search ")), __jsx("section", {
      className: "min-h-screen flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("section", {
      className: "h-100 flex-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h1", {
      className: "text-center text-lg pt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, " Jumia "), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(_components_frame__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: 'jumia',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }))), __jsx("section", {
      className: "flex-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("h1", {
      className: "text-center text-lg pt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, " Konga "), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(_components_frame__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: 'konga',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(SearchComponent));

/***/ }),

/***/ 4:
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