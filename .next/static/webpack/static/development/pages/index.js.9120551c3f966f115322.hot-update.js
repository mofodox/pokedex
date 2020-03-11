webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/fast-deep-equal/index.js":
false,

/***/ "./node_modules/swr/esm/config.js":
false,

/***/ "./node_modules/swr/esm/index.js":
false,

/***/ "./node_modules/swr/esm/libs/hash.js":
false,

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
false,

/***/ "./node_modules/swr/esm/libs/is-online.js":
false,

/***/ "./node_modules/swr/esm/libs/throttle.js":
false,

/***/ "./node_modules/swr/esm/swr-config-context.js":
false,

/***/ "./node_modules/swr/esm/use-swr-pages.js":
false,

/***/ "./node_modules/swr/esm/use-swr.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PokeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PokeCard */ "./components/PokeCard.js");

var _jsxFileName = "/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var IndexPage = function IndexPage(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageTitle: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1919080872" + " " + "columns is-multiline content-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.pokemon.results.map(function (pk) {
    return __jsx("div", {
      key: pk.name,
      className: "jsx-1919080872" + " " + "column is-one-third",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(_components_PokeCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: pk.name,
      name: pk.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  })), __jsx("button", {
    onClick: function onClick() {
      return Router.push("".concat(props.pokemon.next));
    },
    className: "jsx-1919080872",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Next"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1919080872",
    __self: this
  }, ".content-column.jsx-1919080872{margin-top:124px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCd0IsQUFHc0MsaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IFBva2VDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9rZUNhcmQnXG5cbmNvbnN0IEluZGV4UGFnZSA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIkhvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgY29udGVudC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICB7IHByb3BzLnBva2Vtb24ucmVzdWx0cy5tYXAocGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCIga2V5PXtway5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9rZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3BrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3BrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ICgpID0+IFJvdXRlci5wdXNoKGAke3Byb3BzLnBva2Vtb24ubmV4dH1gKSB9Pk5leHQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jb250ZW50LWNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5JbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHtcbiAgICBxdWVyeTogeyBsaW1pdCA9IDMwLCBvZmZzZXQgPSAwIH1cbn0pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP29mZnNldD0ke29mZnNldH0mbGltaXQ9JHtsaW1pdH1gKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBwb2tlbW9uOiAke2RhdGEucmVzdWx0cy5sZW5ndGh9YClcblxuICAgIHJldHVybiB7IFxuICAgICAgICBwb2tlbW9uOiBkYXRhLFxuICAgICAgICBsaW1pdDogcGFyc2VJbnQobGltaXQsIDMwKSxcbiAgICAgICAgb2Zmc2V0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2UiXX0= */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js */"));
};

IndexPage.getInitialProps = function _callee(_ref) {
  var _ref$query, _ref$query$limit, limit, _ref$query$offset, offset, res, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref$query = _ref.query, _ref$query$limit = _ref$query.limit, limit = _ref$query$limit === void 0 ? 30 : _ref$query$limit, _ref$query$offset = _ref$query.offset, offset = _ref$query$offset === void 0 ? 0 : _ref$query$offset;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://pokeapi.co/api/v2/pokemon?offset=".concat(offset, "&limit=").concat(limit)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          console.log("Fetched pokemon: ".concat(data.results.length));
          return _context.abrupt("return", {
            pokemon: data,
            limit: parseInt(limit, 30),
            offset: offset
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.9120551c3f966f115322.hot-update.js.map