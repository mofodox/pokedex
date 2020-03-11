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
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fetcher */ "./lib/fetcher.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PokeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PokeCard */ "./components/PokeCard.js");
var _jsxFileName = "/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import fetch from 'isomorphic-unfetch'





var IndexPage = function IndexPage() {
  var _useSWRPages = Object(swr__WEBPACK_IMPORTED_MODULE_3__["useSWRPages"])("pokemon-list", function (_ref) {
    var offset = _ref.offset,
        withSWR = _ref.withSWR;
    var url = offset || 'https://pokeapi.co/api/v2/pokemon';

    var _withSWR = withSWR(Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(url, _lib_fetcher__WEBPACK_IMPORTED_MODULE_2__["default"])),
        data = _withSWR.data;

    if (!data) return null;
    var results = data.results;
    return results.map(function (result) {
      return __jsx("div", {
        className: "column is-one-third",
        key: result.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(_components_PokeCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: result.name,
        name: result.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    });
  }, function (SWR) {
    return SWR.data.next;
  }, []),
      pages = _useSWRPages.pages,
      isLoadingMore = _useSWRPages.isLoadingMore,
      loadMore = _useSWRPages.loadMore;

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageTitle: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1874521790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "All Pokemon"), __jsx("div", {
    className: "jsx-1874521790" + " " + "columns is-multiline content-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, pages), __jsx("button", {
    disabled: isLoadingMore,
    onClick: loadMore,
    className: "jsx-1874521790" + " " + "button is-medium is-danger load-more-button is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Load More"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1874521790",
    __self: this
  }, ".content-column.jsx-1874521790{margin-top:124px;}.load-more-button.jsx-1874521790{text-align:center;margin-bottom:88px;margin-top:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDd0IsQUFHc0MsQUFJQyxpQkFIdEIsQ0FJdUIsbUJBQ0gsZ0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2xpYi9mZXRjaGVyJ1xuaW1wb3J0IHVzZVNXUiwgeyB1c2VTV1JQYWdlcyB9IGZyb20gJ3N3cidcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IFBva2VDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9rZUNhcmQnXG5cbmNvbnN0IEluZGV4UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IHBhZ2VzLCBpc0xvYWRpbmdNb3JlLCBsb2FkTW9yZSB9ID0gdXNlU1dSUGFnZXMoXG4gICAgICAgIFwicG9rZW1vbi1saXN0XCIsICh7IG9mZnNldCwgd2l0aFNXUiB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBvZmZzZXQgfHwgJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbidcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gd2l0aFNXUih1c2VTV1IodXJsLCBmZXRjaGVyKSlcblxuICAgICAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGRhdGE7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzLm1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiIGtleT17cmVzdWx0Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBva2VDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3Jlc3VsdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3Jlc3VsdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgU1dSID0+IFNXUi5kYXRhLm5leHQsXG4gICAgICAgIFtdXG4gICAgKVxuIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgcGFnZVRpdGxlPVwiSG9tZVwiPlxuICAgICAgICAgICAgPGgxPkFsbCBQb2tlbW9uPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgY29udGVudC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICB7IHBhZ2VzIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1tZWRpdW0gaXMtZGFuZ2VyIGxvYWQtbW9yZS1idXR0b24gaXMtZnVsbHdpZHRoXCIgZGlzYWJsZWQ9e2lzTG9hZGluZ01vcmV9IG9uQ2xpY2s9e2xvYWRNb3JlfT5Mb2FkIE1vcmU8L2J1dHRvbj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jb250ZW50LWNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2FkLW1vcmUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4OHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG4vLyBJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHtcbi8vICAgICBxdWVyeToge29mZnNldCA9IDAgfVxuLy8gfSkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/b2Zmc2V0PSR7b2Zmc2V0fWApXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuLy8gICAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHBva2Vtb246ICR7ZGF0YS5yZXN1bHRzLmxlbmd0aH1gKVxuXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIHBva2Vtb246IGRhdGEsXG4vLyAgICAgICAgIG9mZnNldFxuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlIl19 */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js */"));
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
//# sourceMappingURL=index.js.605295a0bf3398864e2d.hot-update.js.map