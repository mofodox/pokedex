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
  }, __jsx("div", {
    className: "jsx-1935900366" + " " + "columns title-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1935900366" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1935900366",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "All Pokemon"))), __jsx("div", {
    className: "jsx-1935900366" + " " + "columns is-multiline content-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, pages), __jsx("button", {
    disabled: isLoadingMore,
    onClick: loadMore,
    className: "jsx-1935900366" + " " + "button is-medium is-danger load-more-button is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Load More"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1935900366",
    __self: this
  }, ".title-column.jsx-1935900366{margin-top:124px;}.content-column.jsx-1935900366{margin-top:124px;}.load-more-button.jsx-1935900366{text-align:center;margin-bottom:88px;margin-top:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDd0IsQUFHc0MsQUFJQSxBQUlDLGlCQVB0QixBQUlBLENBSXVCLG1CQUNILGdCQUNwQiIsImZpbGUiOiIvVXNlcnMvbW9mb2RveC9Eb2N1bWVudHMvZGV2L25leHQtcHJvamVjdHMvcG9rZWRleC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9saWIvZmV0Y2hlcidcbmltcG9ydCB1c2VTV1IsIHsgdXNlU1dSUGFnZXMgfSBmcm9tICdzd3InXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCBQb2tlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bva2VDYXJkJ1xuXG5jb25zdCBJbmRleFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgeyBwYWdlcywgaXNMb2FkaW5nTW9yZSwgbG9hZE1vcmUgfSA9IHVzZVNXUlBhZ2VzKFxuICAgICAgICBcInBva2Vtb24tbGlzdFwiLCAoeyBvZmZzZXQsIHdpdGhTV1IgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gb2Zmc2V0IHx8ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24nXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHdpdGhTV1IodXNlU1dSKHVybCwgZmV0Y2hlcikpXG5cbiAgICAgICAgICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGxcblxuICAgICAgICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5tYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIiBrZXk9e3Jlc3VsdC5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb2tlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtyZXN1bHQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtyZXN1bHQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIFNXUiA9PiBTV1IuZGF0YS5uZXh0LFxuICAgICAgICBbXVxuICAgIClcbiBcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIkhvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyB0aXRsZS1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QWxsIFBva2Vtb248L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGNvbnRlbnQtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgeyBwYWdlcyB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbWVkaXVtIGlzLWRhbmdlciBsb2FkLW1vcmUtYnV0dG9uIGlzLWZ1bGx3aWR0aFwiIGRpc2FibGVkPXtpc0xvYWRpbmdNb3JlfSBvbkNsaWNrPXtsb2FkTW9yZX0+TG9hZCBNb3JlPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAudGl0bGUtY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTI0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtY29sdW1uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTI0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvYWQtbW9yZS1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDg4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbi8vIEluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoe1xuLy8gICAgIHF1ZXJ5OiB7b2Zmc2V0ID0gMCB9XG4vLyB9KSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9vZmZzZXQ9JHtvZmZzZXR9YClcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgICAgY29uc29sZS5sb2coYEZldGNoZWQgcG9rZW1vbjogJHtkYXRhLnJlc3VsdHMubGVuZ3RofWApXG5cbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgcG9rZW1vbjogZGF0YSxcbi8vICAgICAgICAgb2Zmc2V0XG4vLyAgICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2UiXX0= */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js */"));
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
//# sourceMappingURL=index.js.3fdf147e1874a4e6fc39.hot-update.js.map