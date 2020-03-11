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
    className: "jsx-2286281581" + " " + "columns title-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2286281581" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2286281581",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "All Pokemon"))), __jsx("div", {
    className: "jsx-2286281581" + " " + "columns is-multiline content-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, pages), __jsx("button", {
    disabled: isLoadingMore,
    onClick: loadMore,
    className: "jsx-2286281581" + " " + "button is-medium is-danger load-more-button is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Load More"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2286281581",
    __self: this
  }, ".title-column.jsx-2286281581{margin-top:124px;margin-bottom:124px;}.content-column.jsx-2286281581{margin-top:124px;}.load-more-button.jsx-2286281581{text-align:center;margin-bottom:88px;margin-top:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDd0IsQUFHc0MsQUFLQSxBQUlDLGlCQVJFLEFBS3hCLENBSXVCLG1CQVJ2QixBQVNvQixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21vZm9kb3gvRG9jdW1lbnRzL2Rldi9uZXh0LXByb2plY3RzL3Bva2VkZXgvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vbGliL2ZldGNoZXInXG5pbXBvcnQgdXNlU1dSLCB7IHVzZVNXUlBhZ2VzIH0gZnJvbSAnc3dyJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgUG9rZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2tlQ2FyZCdcblxuY29uc3QgSW5kZXhQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgcGFnZXMsIGlzTG9hZGluZ01vcmUsIGxvYWRNb3JlIH0gPSB1c2VTV1JQYWdlcyhcbiAgICAgICAgXCJwb2tlbW9uLWxpc3RcIiwgKHsgb2Zmc2V0LCB3aXRoU1dSIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG9mZnNldCB8fCAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uJ1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB3aXRoU1dSKHVzZVNXUih1cmwsIGZldGNoZXIpKVxuXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gZGF0YTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCIga2V5PXtyZXN1bHQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9rZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cmVzdWx0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cmVzdWx0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBTV1IgPT4gU1dSLmRhdGEubmV4dCxcbiAgICAgICAgW11cbiAgICApXG4gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJIb21lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgdGl0bGUtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkFsbCBQb2tlbW9uPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBjb250ZW50LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgIHsgcGFnZXMgfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLW1lZGl1bSBpcy1kYW5nZXIgbG9hZC1tb3JlLWJ1dHRvbiBpcy1mdWxsd2lkdGhcIiBkaXNhYmxlZD17aXNMb2FkaW5nTW9yZX0gb25DbGljaz17bG9hZE1vcmV9PkxvYWQgTW9yZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRpdGxlLWNvbHVtbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyNHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGVudC1jb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMjRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9hZC1tb3JlLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogODhweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuLy8gSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICh7XG4vLyAgICAgcXVlcnk6IHtvZmZzZXQgPSAwIH1cbi8vIH0pIHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP29mZnNldD0ke29mZnNldH1gKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBwb2tlbW9uOiAke2RhdGEucmVzdWx0cy5sZW5ndGh9YClcblxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBwb2tlbW9uOiBkYXRhLFxuLy8gICAgICAgICBvZmZzZXRcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZSJdfQ== */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/pages/index.js */"));
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
//# sourceMappingURL=index.js.776d086e5f17b3e93c96.hot-update.js.map