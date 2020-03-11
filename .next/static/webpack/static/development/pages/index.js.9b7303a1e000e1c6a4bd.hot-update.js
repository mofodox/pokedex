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
    className: "jsx-1408410377" + " " + "columns title-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1408410377" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1408410377" + " " + "is-size-3 has-font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "All Pokemon"))), __jsx("div", {
    className: "jsx-1408410377" + " " + "columns is-multiline content-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, pages), __jsx("button", {
    disabled: isLoadingMore,
    onClick: loadMore,
    className: "jsx-1408410377" + " " + "button is-medium is-danger load-more-button is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Load More"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1408410377",
    __self: this
  }, ".title-column.jsx-1408410377{margin-top:124px;margin-bottom:40px;}.load-more-button.jsx-1408410377{text-align:center;margin-bottom:88px;margin-top:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDd0IsQUFHc0MsQUFTQyxpQkFSQyxDQVNBLGtCQVJ2QixDQVNvQixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21vZm9kb3gvRG9jdW1lbnRzL2Rldi9uZXh0LXByb2plY3RzL3Bva2VkZXgvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vbGliL2ZldGNoZXInXG5pbXBvcnQgdXNlU1dSLCB7IHVzZVNXUlBhZ2VzIH0gZnJvbSAnc3dyJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgUG9rZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2tlQ2FyZCdcblxuY29uc3QgSW5kZXhQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgcGFnZXMsIGlzTG9hZGluZ01vcmUsIGxvYWRNb3JlIH0gPSB1c2VTV1JQYWdlcyhcbiAgICAgICAgXCJwb2tlbW9uLWxpc3RcIiwgKHsgb2Zmc2V0LCB3aXRoU1dSIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG9mZnNldCB8fCAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uJ1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB3aXRoU1dSKHVzZVNXUih1cmwsIGZldGNoZXIpKVxuXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gZGF0YTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCIga2V5PXtyZXN1bHQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9rZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cmVzdWx0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cmVzdWx0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBTV1IgPT4gU1dSLmRhdGEubmV4dCxcbiAgICAgICAgW11cbiAgICApXG4gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJIb21lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgdGl0bGUtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtMyBoYXMtZm9udC13ZWlnaHQtYm9sZFwiPkFsbCBQb2tlbW9uPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBjb250ZW50LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgIHsgcGFnZXMgfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW1lZGl1bSBpcy1kYW5nZXIgbG9hZC1tb3JlLWJ1dHRvbiBpcy1mdWxsd2lkdGhcIiBkaXNhYmxlZD17aXNMb2FkaW5nTW9yZX0gb25DbGljaz17bG9hZE1vcmV9PkxvYWQgTW9yZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRpdGxlLWNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyNHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIC5jb250ZW50LWNvbHVtbiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDEyNHB4O1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC5sb2FkLW1vcmUtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4OHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG4vLyBJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHtcbi8vICAgICBxdWVyeToge29mZnNldCA9IDAgfVxuLy8gfSkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/b2Zmc2V0PSR7b2Zmc2V0fWApXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuLy8gICAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHBva2Vtb246ICR7ZGF0YS5yZXN1bHRzLmxlbmd0aH1gKVxuXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIHBva2Vtb246IGRhdGEsXG4vLyAgICAgICAgIG9mZnNldFxuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlIl19 */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js */"));
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
//# sourceMappingURL=index.js.9b7303a1e000e1c6a4bd.hot-update.js.map