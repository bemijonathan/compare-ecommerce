webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search/index.jsx":
/*!********************************!*\
  !*** ./pages/search/index.jsx ***!
  \********************************/
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
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/navbar */ "./components/navbar.jsx");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/index.css */ "./components/index.css");
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.jsx");
/* harmony import */ var _components_frame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/frame */ "./components/frame.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);







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

      var searchValue = function searchValue() {
        console.log(_this2.props.router);
      };

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: "jsx-699946157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-699946157" + " " + "bg-green-700 p-4 text-center flex sm:flex-wrap justify-center items-center",
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
        className: "jsx-699946157" + " " + "bg-white mr-3 rounded-lg py-1 px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("input", {
        type: "checkbox",
        id: "",
        checked: true,
        className: "jsx-699946157" + " " + "ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), " Jumia", __jsx("input", {
        type: "checkbox",
        checked: true,
        className: "jsx-699946157" + " " + "ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
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
          lineNumber: 38
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
          lineNumber: 39
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
          lineNumber: 40
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
          lineNumber: 41
        },
        __self: this
      }), " Alibaba", __jsx("button", {
        onClick: searchValue,
        className: "jsx-699946157" + " " + "bg-white rounded-lg py-1 px-3 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, " Search ")), __jsx("section", {
        className: "jsx-699946157" + " " + "min-h-screen bg-green-200 flex flex-wrap ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("section", {
        className: "jsx-699946157" + " " + "h-100 flex-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-699946157" + " " + "text-center text-lg pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, " Jumia "), __jsx("div", {
        className: "jsx-699946157" + " " + "flex justify-center item-center mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        id: "button",
        className: "jsx-699946157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-699946157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_components_frame__WEBPACK_IMPORTED_MODULE_12__["default"], {
        type: 'jumia',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))), __jsx("section", {
        className: "jsx-699946157" + " " + "flex-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-699946157" + " " + "text-center text-lg pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, " Konga "), __jsx("div", {
        className: "jsx-699946157" + " " + "flex justify-center item-center mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("div", {
        id: "button",
        className: "jsx-699946157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-699946157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_components_frame__WEBPACK_IMPORTED_MODULE_12__["default"], {
        type: 'konga',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "699946157",
        __self: this
      }, "#button.jsx-699946157{height:40px;width:40px;background:transparent;border-radius:50%;border:1px solid white;border-top:2px solid green;-webkit-animation:spinner1-jsx-699946157 600ms linear infinite;animation:spinner1-jsx-699946157 600ms linear infinite;}@-webkit-keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvcGFnZXMvc2VhcmNoL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRXNCLEFBRzJCLEFBVWUsWUFUaEIsV0FDWSx1QkFDTCxrQkFDSyx1QkFDSSxBQU0zQiwyQkFMeUMsc0hBQzNDIiwiZmlsZSI6Ii9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvcGFnZXMvc2VhcmNoL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pbmRleC5jc3NcIlxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBGcmFtZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZyYW1lJ1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcblxuY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGVybTogJycsXG4gICAgc2l0ZTE6IHRydWUsXG4gICAgc2l0ZTI6IHRydWVcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGdldFZhbHVlID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlcm06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VTaXRlID0gKGUsIHNpdGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNoZWNrZWQsIGUudGFyZ2V0KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNpdGU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnJvdXRlcilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNzAwIHAtNCB0ZXh0LWNlbnRlciBmbGV4IHNtOmZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBwbGFjZWhvbGRlcj1cIndoYXQgaXRlbSBhcmUgeW91IHNlYXJjaGluZyBmb3JcIiBvbklucHV0PXtnZXRWYWx1ZX0gaWQ9XCJcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtci0zIHJvdW5kZWQtbGcgcHktMSBweC0zXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIlwiIGNsYXNzTmFtZT1cIm1sLTNcIiBjaGVja2VkIC8+IEp1bWlhXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm1sLTNcIiBjaGVja2VkIC8+IEtvbmdhXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzTmFtZT1cIm1sLTNcIiBkaXNhYmxlZCAvPiBBbWF6b25cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3NOYW1lPVwibWwtM1wiIGRpc2FibGVkIC8+IE9MWCBOaWdlcmlhXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzTmFtZT1cIm1sLTNcIiBkaXNhYmxlZCAvPiBKaWppXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzTmFtZT1cIm1sLTNcIiBkaXNhYmxlZCAvPiBBbGliYWJhXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHB5LTEgcHgtMyBtbC01XCIgb25DbGljaz17c2VhcmNoVmFsdWV9PiBTZWFyY2ggPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyZWVuLTIwMCBmbGV4IGZsZXgtd3JhcCBcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtMTAwIGZsZXgtMVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyBwdC0zXCI+IEp1bWlhIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtLWNlbnRlciBtdC0yMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25cIj48L2RpdiA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGcmFtZSB0eXBlPXsnanVtaWEnfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnIHB0LTNcIj4gS29uZ2EgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW0tY2VudGVyIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvblwiPjwvZGl2ID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEZyYW1lIHR5cGU9eydrb25nYSd9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxGb290ZXIgLz5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNidXR0b24ge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZWVuO1xuICAgICAgICAgICAgICBhbmltYXRpb246IHNwaW5uZXIxIDYwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lcjEge1xuICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2hDb21wb25lbnQpIl19 */\n/*@ sourceURL=/home/mixed_code/dev/joe/codes/compare-e-commerce/pages/search/index.jsx */")));
    }
  }]);

  return SearchComponent;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(SearchComponent));

/***/ })

})
//# sourceMappingURL=search.js.4eb9b1f867dd34b859ee.hot-update.js.map