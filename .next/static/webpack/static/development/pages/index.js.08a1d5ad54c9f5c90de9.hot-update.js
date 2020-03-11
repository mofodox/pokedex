webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PokeCard.js":
/*!********************************!*\
  !*** ./components/PokeCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fetcher */ "./lib/fetcher.js");
var _jsxFileName = "/Users/mofodox/Documents/dev/next-projects/pokedex/components/PokeCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var PokeCard = function PokeCard(_ref) {
  var name = _ref.name,
      id = _ref.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("https://pokeapi.co/api/v2/pokemon/".concat(name), _lib_fetcher__WEBPACK_IMPORTED_MODULE_4__["default"]),
      data = _useSWR.data;

  return __jsx("div", {
    className: "jsx-1981333816" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1981333816" + " " + "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1981333816" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: data.sprites.front_default,
    alt: "".concat(name),
    className: "jsx-1981333816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p/:id",
    as: "/p/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1981333816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1981333816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, name)))) : __jsx("p", {
    className: "jsx-1981333816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Loading..."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1981333816",
    __self: this
  }, ".card.jsx-1981333816{margin-bottom:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L2NvbXBvbmVudHMvUG9rZUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJ3QixBQUd3QyxtQkFDdkIiLCJmaWxlIjoiL1VzZXJzL21vZm9kb3gvRG9jdW1lbnRzL2Rldi9uZXh0LXByb2plY3RzL3Bva2VkZXgvY29tcG9uZW50cy9Qb2tlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9saWIvZmV0Y2hlcidcblxuY29uc3QgUG9rZUNhcmQgPSAoe25hbWUsIGlkfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtuYW1lfWAsIGZldGNoZXIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtgJHtuYW1lfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wLzppZFwiIGFzPXtgL3AvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGgzPntuYW1lfTwvaDM+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2VDYXJkIl19 */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/components/PokeCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PokeCard);

/***/ })

})
//# sourceMappingURL=index.js.08a1d5ad54c9f5c90de9.hot-update.js.map