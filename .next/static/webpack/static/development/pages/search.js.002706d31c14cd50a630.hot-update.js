webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/frame.jsx":
/*!******************************!*\
  !*** ./components/frame.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/home/mixed_code/dev/joe/codes/compare-e-commerce/components/frame.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var FrameComponent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FrameComponent, _Component);

  function FrameComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FrameComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(FrameComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_link", "https://konga-jumia.herokuapp.com/".concat(_this.props.type).concat(_this.props.router.asPath.replace('/search', '')));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getData", function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(_this._link));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 5:
              data = _context.sent;
              console.log(data);

              _this.setState({
                products: data.items,
                totalPage: data.page,
                loading: false
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "paginate", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      counter: 0,
      products: [],
      totalPage: '',
      loading: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FrameComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this._link);
      this.setState({
        counter: 0
      });
      this.getData();
      this.props.router.events.on('routeChangeComplete', function (url) {
        _this2.getData();

        console.log('maybe');

        _this2.setState({
          loading: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var PrevPage = function PrevPage(e) {
        // this.setState({ counter:  +this.props.router.query.page + 1 })
        if (_this3.state.counter > 0) {
          _this3.setState({
            counter: _this3.state.counter - 1
          });
        } else {
          _this3.setState({
            counter: 0
          });
        }

        console.log(_this3.state);
      };

      var Nextpage = function Nextpage(e) {
        _this3.setState({
          counter: _this3.state.counter + 1
        });

        console.log(_this3.state);
      };

      var listItems = this.state.products.filter(function (product) {
        return product.image !== null;
      }).map(function (product, i) {
        return __jsx("div", {
          className: "w-1/2 bg-green-600 p-3 text-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx("div", {
          className: "bg-white text-black rounded-lg flex items-center",
          style: {
            height: '300px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, __jsx("div", {
          className: "w-100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, __jsx("p", {
          className: "m-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
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
            lineNumber: 67
          },
          __self: this
        }), __jsx("div", {
          className: "flex justify-between m-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, product.price), __jsx("a", {
          href: product.link,
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, " View ")))));
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, this.state.loading ? __jsx("div", {
        className: "jsx-699946157" + " " + "flex justify-center item-center mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        id: "button",
        className: "jsx-699946157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })) : '', __jsx("section", {
        className: "jsx-699946157" + " " + "flex flex-wrap max-h-screen overflow-y-auto bg-white m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, listItems), __jsx("section", {
        className: "jsx-699946157" + " " + "pagination class flex flex-wrap justify-center items-center pb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("button", {
        onClick: Nextpage,
        className: "jsx-699946157" + " " + "p-2 bg-green-500 text-white rounded-lg mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, 'Next >'), __jsx("button", {
        onClick: PrevPage,
        className: "jsx-699946157" + " " + "p-2 bg-white text-green-800 rounded-lg mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, '< Prev')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "699946157",
        __self: this
      }, "#button.jsx-699946157{height:40px;width:40px;background:transparent;border-radius:50%;border:1px solid white;border-top:2px solid green;-webkit-animation:spinner1-jsx-699946157 600ms linear infinite;animation:spinner1-jsx-699946157 600ms linear infinite;}@-webkit-keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner1-jsx-699946157{to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21peGVkX2NvZGUvZGV2L2pvZS9jb2Rlcy9jb21wYXJlLWUtY29tbWVyY2UvY29tcG9uZW50cy9mcmFtZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZvQixBQUcyQixBQVVlLFlBVGhCLFdBQ1ksdUJBQ0wsa0JBQ0ssdUJBQ0ksQUFNM0IsMkJBTHlDLHNIQUMzQyIsImZpbGUiOiIvaG9tZS9taXhlZF9jb2RlL2Rldi9qb2UvY29kZXMvY29tcGFyZS1lLWNvbW1lcmNlL2NvbXBvbmVudHMvZnJhbWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBGcmFtZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX2xpbmspXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6ICAwIH0pXG4gICAgdGhpcy5nZXREYXRhKClcblxuICAgIHRoaXMucHJvcHMucm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICh1cmwpID0+IHtcbiAgICB0aGlzLmdldERhdGEoKVxuICAgICBjb25zb2xlLmxvZygnbWF5YmUnKVxuICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6dHJ1ZVxuICAgICB9KVxuICAgICBcbiAgICB9KTtcbiAgfVxuICBcbiAgX2xpbmsgPSBgaHR0cHM6Ly9rb25nYS1qdW1pYS5oZXJva3VhcHAuY29tLyR7dGhpcy5wcm9wcy50eXBlfSR7dGhpcy5wcm9wcy5yb3V0ZXIuYXNQYXRoLnJlcGxhY2UoJy9zZWFyY2gnLCAnJyl9YFxuXG4gIGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGhpcy5fbGluayk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJvZHVjdHM6ZGF0YS5pdGVtcyxcbiAgICAgIHRvdGFsUGFnZTpkYXRhLnBhZ2UsXG4gICAgICBsb2FkaW5nOmZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHBhZ2luYXRlID0gKCkgPT4ge1xuICAgIFxuICB9XG5cbiAgc3RhdGU9e1xuICAgIGNvdW50ZXI6MCxcbiAgICBwcm9kdWN0czpbXSxcbiAgICB0b3RhbFBhZ2U6JycsXG4gICAgbG9hZGluZzp0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgUHJldlBhZ2UgPSAoZSkgPT4ge1xuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXI6ICArdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkucGFnZSArIDEgfSlcbiAgICAgIGlmKHRoaXMuc3RhdGUuY291bnRlciA+IDApe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOnRoaXMuc3RhdGUuY291bnRlciAtIDF9KVxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6MH0pXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIH1cblxuICAgIGNvbnN0IE5leHRwYWdlID0gKGUpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6dGhpcy5zdGF0ZS5jb3VudGVyICsgMX0pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IHRoaXMuc3RhdGUucHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmltYWdlICE9PSBudWxsKS5tYXAoKHByb2R1Y3QsIGkpID0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGJnLWdyZWVuLTYwMCBwLTMgdGV4dC13aGl0ZVwiID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHJvdW5kZWQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIiBzdHlsZT17e2hlaWdodDonMzAwcHgnfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0zXCI+e3Byb2R1Y3QubmFtZS5zbGljZSgwLDUwKSsgJy4uLid9PC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGNsYXNzTmFtZT1cIm0tYXV0byByb3VuZGVkLWxnIG9iamVjdC1jb250YWluXCIgc3R5bGU9e3toZWlnaHQ6JzE3MHB4J319Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbS0zXCI+XG4gICAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj17cHJvZHVjdC5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiA+IFZpZXcgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbS1jZW50ZXIgbXQtMjBcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uXCI+PC9kaXYgPlxuICAgICAgICA8L2Rpdj46ICcnfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtYXgtaC1zY3JlZW4gb3ZlcmZsb3cteS1hdXRvIGJnLXdoaXRlIG0tM1wiPlxuICAgICAgICAgIHtsaXN0SXRlbXN9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBjbGFzcyBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGItNVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgbXItM1wiIG9uQ2xpY2s9e05leHRwYWdlfT5cbiAgICAgICAgICAgIHsnTmV4dCA+J31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiBiZy13aGl0ZSB0ZXh0LWdyZWVuLTgwMCByb3VuZGVkLWxnIG1yLTNcIiBvbkNsaWNrPXtQcmV2UGFnZX0+XG4gICAgICAgICAgICB7JzwgUHJldid9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjYnV0dG9uIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGlubmVyMSA2MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIxIHtcbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG5cbiAgICAgIFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEZyYW1lQ29tcG9uZW50KSJdfQ== */\n/*@ sourceURL=/home/mixed_code/dev/joe/codes/compare-e-commerce/components/frame.jsx */"));
    }
  }]);

  return FrameComponent;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(FrameComponent));

/***/ })

})
//# sourceMappingURL=search.js.002706d31c14cd50a630.hot-update.js.map