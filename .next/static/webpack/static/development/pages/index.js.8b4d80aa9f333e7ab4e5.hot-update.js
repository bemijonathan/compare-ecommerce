webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.jsx");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/index.css */ "./components/index.css");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var HomePage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HomePage, _Component);

  function HomePage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      term: ''
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var getValue = function getValue(e) {
        console.log(e.target.value);

        _this2.setState({
          term: e.target.value
        });
      };

      var searchValue = function searchValue() {
        _this2.props.router.push("/search?term=".concat(_this2.state.term, "&page=0"));
      };

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "My page title"), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("div", {
        className: "body bg-green-400 flex items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("img", {
        src: "/bags.png",
        width: "300",
        className: "m-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx("div", {
        className: "text-5xl text-white m-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Compare The Prices Of Goods from Two Ecommerce Websites", __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("input", {
        type: "search",
        placeholder: "handbags",
        onInput: getValue,
        className: "bg-white text-lg px-3 py-2 rounded-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("button", {
        onClick: searchValue,
        className: "bg-white text-lg px-3 text-black py-2 rounded-lg ml-5 hover:text-black hover:bg-green-500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Search")))), __jsx("div", {
        className: "flex flex-wrap my-10 items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        className: "p-10 m-3 text-lg w-1/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quaerat beatae similique, fugit odit iure dolore deserunt, necessitatibus sunt, reprehenderit harum obcaecati perspiciatis quo ratione esse totam possimus a saepe!"), __jsx("div", {
        className: "p-10 m-3 text-lg w-1/3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quaerat beatae similique, fugit odit iure dolore deserunt, necessitatibus sunt, reprehenderit harum obcaecati perspiciatis quo ratione esse totam possimus a saepe!"), __jsx("div", {
        className: "flex-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("img", {
        src: "/illustration.png",
        width: "350",
        className: "m-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

__jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
  id: "2341949478",
  __self: undefined
}, ".body{background:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFbUIsQUFHeUIsaUJBQ3BCIiwiZmlsZSI6Ii9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaW5kZXguY3NzXCJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlPXtcbiAgICAgICAgdGVybTonJ1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgZ2V0VmFsdWUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGVybTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKGAvc2VhcmNoP3Rlcm09JHt0aGlzLnN0YXRlLnRlcm19JnBhZ2U9MGApXG4gICAgICAgICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TXkgcGFnZSB0aXRsZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE5hdj48L05hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keSBiZy1ncmVlbi00MDAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9iYWdzLnBuZ1wiIHdpZHRoPVwiMzAwXCIgY2xhc3NOYW1lPVwibS0xMFwiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgbS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICBDb21wYXJlIFRoZSBQcmljZXMgT2YgR29vZHMgZnJvbSBUd28gRWNvbW1lcmNlIFdlYnNpdGVzXG4gICAgICAgICAgICAgICAgICAgIDxwPiBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cImhhbmRiYWdzXCIgb25JbnB1dD17Z2V0VmFsdWV9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtbGcgcHgtMyBweS0yIHJvdW5kZWQtbGdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VhcmNoVmFsdWV9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtbGcgcHgtMyB0ZXh0LWJsYWNrIHB5LTIgcm91bmRlZC1sZyBtbC01IGhvdmVyOnRleHQtYmxhY2sgaG92ZXI6YmctZ3JlZW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL3NlYXJjaD90ZXJtPScnJnBhZ2U9MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXktMTAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIG0tMyB0ZXh0LWxnIHctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcmUgcXVhZXJhdCBiZWF0YWUgc2ltaWxpcXVlLCBmdWdpdCBvZGl0IGl1cmUgZG9sb3JlIGRlc2VydW50LCBcbiAgICAgICAgICAgICAgICAgICAgbmVjZXNzaXRhdGlidXMgc3VudCwgcmVwcmVoZW5kZXJpdCBoYXJ1bSBvYmNhZWNhdGkgcGVyc3BpY2lhdGlzIHF1byBcbiAgICAgICAgICAgICAgICAgICAgcmF0aW9uZSBlc3NlIHRvdGFtIHBvc3NpbXVzIGEgc2FlcGUhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIG0tMyB0ZXh0LWxnIHctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgICAgICAgICAgICBJbnZlbnRvcmUgcXVhZXJhdCBiZWF0YWUgc2ltaWxpcXVlLCBmdWdpdCBvZGl0IGl1cmUgZG9sb3JlIGRlc2VydW50LCBcbiAgICAgICAgICAgICAgICAgICAgbmVjZXNzaXRhdGlidXMgc3VudCwgcmVwcmVoZW5kZXJpdCBoYXJ1bSBvYmNhZWNhdGkgcGVyc3BpY2lhdGlzIHF1byBcbiAgICAgICAgICAgICAgICAgICAgcmF0aW9uZSBlc3NlIHRvdGFtIHBvc3NpbXVzIGEgc2FlcGUhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWxsdXN0cmF0aW9uLnBuZ1wiIHdpZHRoPVwiMzUwXCIgY2xhc3NOYW1lPVwibS02XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgdGV4dC1jZW50ZXIgcC0xMFwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1sZyBweC0zIHB5LTIgcm91bmRlZC1sZyBtbC01IGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JlZW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG48c3R5bGUganN4IGdsb2JhbD57YFxuICAgIC5ib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kOmdyZWVuO1xuICAgIH1cbmB9PC9zdHlsZT5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl19 */\n/*@ sourceURL=/home/mixed_code/dev/joe/codes/compare-e-commerce/pages/index.jsx */");

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.8b4d80aa9f333e7ab4e5.hot-update.js.map