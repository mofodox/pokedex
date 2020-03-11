webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/fetcher */ "./lib/fetcher.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PokeCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PokeCard */ "./components/PokeCard.js");
var _jsxFileName = "/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var IndexPage = function IndexPage() {
  var _useSWRPages = Object(swr__WEBPACK_IMPORTED_MODULE_4__["useSWRPages"])("pokemon-list", function (_ref) {
    var offset = _ref.offset,
        withSWR = _ref.withSWR;
    var url = offset || 'https://pokeapi.co/api/v2/pokemon';

    var _withSWR = withSWR(Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])(url, _lib_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"])),
        data = _withSWR.data;

    if (!data) return null;
    var results = data.results;
    return results.map(function (result) {
      return __jsx("div", {
        className: "column is-one-third",
        key: result.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(_components_PokeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: result.name,
        name: result.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }));
    });
  }, []),
      pages = _useSWRPages.pages,
      isLoadingMore = _useSWRPages.isLoadingMore,
      loadMore = _useSWRPages.loadMore;

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageTitle: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1919080872" + " " + "columns is-multiline content-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, pages), __jsx("button", {
    disabled: isLoadingMore,
    onClick: loadMore,
    className: "jsx-1919080872",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Load More"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1919080872",
    __self: this
  }, ".content-column.jsx-1919080872{margin-top:124px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDd0IsQUFHc0MsaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2xpYi9mZXRjaGVyJ1xuaW1wb3J0IHVzZVNXUiwgeyB1c2VTV1JQYWdlcyB9IGZyb20gJ3N3cidcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IFBva2VDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9rZUNhcmQnXG5cbmNvbnN0IEluZGV4UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IHBhZ2VzLCBpc0xvYWRpbmdNb3JlLCBsb2FkTW9yZSB9ID0gdXNlU1dSUGFnZXMoXG4gICAgICAgIFwicG9rZW1vbi1saXN0XCIsICh7IG9mZnNldCwgd2l0aFNXUiB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBvZmZzZXQgfHwgJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbidcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gd2l0aFNXUih1c2VTV1IodXJsLCBmZXRjaGVyKSlcblxuICAgICAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5tYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIiBrZXk9e3Jlc3VsdC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb2tlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtyZXN1bHQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtyZXN1bHQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgKVxuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgcGFnZVRpdGxlPVwiSG9tZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBjb250ZW50LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgIHsgcGFnZXMgfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyBpc0xvYWRpbmdNb3JlIH0gb25DbGljaz17bG9hZE1vcmV9PkxvYWQgTW9yZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbi8vIEluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoe1xuLy8gICAgIHF1ZXJ5OiB7b2Zmc2V0ID0gMCB9XG4vLyB9KSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9vZmZzZXQ9JHtvZmZzZXR9YClcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgICAgY29uc29sZS5sb2coYEZldGNoZWQgcG9rZW1vbjogJHtkYXRhLnJlc3VsdHMubGVuZ3RofWApXG5cbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgcG9rZW1vbjogZGF0YSxcbi8vICAgICAgICAgb2Zmc2V0XG4vLyAgICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2UiXX0= */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js */"));
}; // IndexPage.getInitialProps = async function ({
//     query: {offset = 0 }
// }) {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
//     const data = await res.json()
//     console.log(`Fetched pokemon: ${data.results.length}`)
//     return { 
//         pokemon: data,
//         offset
//     }
// }


/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.0acfc735e0859333dd38.hot-update.js.map