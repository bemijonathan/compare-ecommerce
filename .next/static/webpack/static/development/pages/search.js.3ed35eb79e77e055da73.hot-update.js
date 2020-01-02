webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search/index.jsx":
/*!********************************!*\
  !*** ./pages/search/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchComponent; });
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
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/navbar */ "./components/navbar.jsx");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/index.css */ "./components/index.css");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.jsx");
/* harmony import */ var _components_frame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/frame */ "./components/frame.jsx");







var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/pages/search/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var SearchComponent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchComponent, _Component);

  function SearchComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      term: '',
      site1: true,
      site2: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var getValue = function getValue(e) {
        console.log(e.target.value);

        _this2.setState({
          term: e.target.value
        });
      };

      var changeSite = function changeSite(e, site) {
        console.log(e.target.checked, e.target);

        _this2.setState({
          site: e.target.value
        });

        console.log(_this2.state);
      };

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: "jsx-699946157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      }, __jsx(_components_frame__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      }, __jsx(_components_frame__WEBPACK_IMPORTED_MODULE_12__["default"], {
        type: 'konga',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "699946157",
        __self: this
      }, "#button.jsx-699946157{height:40px;width:40px;background:transparent;border-radius:50%;border:1px solid white;border-top:2px solid green;-webkit-animation:spinner1-jsx-699946157 600ms linear infinite;animation:spinner1-jsx-699946157 600ms linear infinite;}@-webkit-keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvcGFnZXMvc2VhcmNoL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHNCLEFBRzJCLEFBVWUsWUFUaEIsV0FDWSx1QkFDTCxrQkFDSyx1QkFDSSxBQU0zQiwyQkFMeUMsc0hBQzNDIiwiZmlsZSI6Ii9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvcGFnZXMvc2VhcmNoL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pbmRleC5jc3NcIlxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBGcmFtZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZyYW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0ZXJtOiAnJyxcbiAgICBzaXRlMTogdHJ1ZSxcbiAgICBzaXRlMjogdHJ1ZVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGVybTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZVNpdGUgPSAoZSwgc2l0ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuY2hlY2tlZCwgZS50YXJnZXQpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2l0ZTogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi03MDAgcC00IHRleHQtY2VudGVyIGZsZXggc206ZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIHBsYWNlaG9sZGVyPVwid2hhdCBpdGVtIGFyZSB5b3Ugc2VhcmNoaW5nIGZvclwiIG9uSW5wdXQ9e2dldFZhbHVlfSBpZD1cIlwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIG1yLTMgcm91bmRlZC1sZyBweS0xIHB4LTNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGNoZWNrZWQgLz4gSnVtaWFcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwibWwtM1wiIGNoZWNrZWQgLz4gS29uZ2FcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGRpc2FibGVkIC8+IEFtYXpvblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiXCIgaWQ9XCJcIiBjbGFzc05hbWU9XCJtbC0zXCIgZGlzYWJsZWQgLz4gT0xYIE5pZ2VyaWFcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGRpc2FibGVkIC8+IEppamlcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGRpc2FibGVkIC8+IEFsaWJhYmFcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgcHktMSBweC0zIG1sLTVcIj4gU2VhcmNoIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmVlbi0yMDAgZmxleCBmbGV4LXdyYXAgXCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLTEwMCBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGcgcHQtM1wiPiBKdW1pYSA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbS1jZW50ZXIgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uXCI+PC9kaXYgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RnJhbWUgdHlwZT17J2p1bWlhJ30vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyBwdC0zXCI+IEtvbmdhIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtLWNlbnRlciBtdC0yMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25cIj48L2RpdiA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGcmFtZSB0eXBlPXsna29uZ2EnfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjYnV0dG9uIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyMSA2MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIxIHtcbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/mixed_code/dev/joe/codes/compare-e-commerce/pages/search/index.jsx */")));
    }
  }]);

  return SearchComponent;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=search.js.3ed35eb79e77e055da73.hot-update.js.map