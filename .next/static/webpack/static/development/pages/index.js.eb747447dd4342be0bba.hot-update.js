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

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p/:id",
    as: "/p/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1061061549" + " " + "card has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1061061549" + " " + "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1061061549" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: data.sprites.front_default,
    alt: "".concat(name),
    className: "jsx-1061061549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-1061061549" + " " + "is-capitalized",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, name)) : __jsx("p", {
    className: "jsx-1061061549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Loading..."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1061061549",
    __self: this
  }, ".card.jsx-1061061549{margin-bottom:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L2NvbXBvbmVudHMvUG9rZUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJnQyxBQUdnRCxtQkFDdkIiLCJmaWxlIjoiL1VzZXJzL21vZm9kb3gvRG9jdW1lbnRzL2Rldi9uZXh0LXByb2plY3RzL3Bva2VkZXgvY29tcG9uZW50cy9Qb2tlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9saWIvZmV0Y2hlcidcblxuY29uc3QgUG9rZUNhcmQgPSAoe25hbWUsIGlkfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtuYW1lfWAsIGZldGNoZXIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPVwiL3AvOmlkXCIgYXM9e2AvcC8ke2lkfWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuc3ByaXRlcy5mcm9udF9kZWZhdWx0fSBhbHQ9e2Ake25hbWV9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJpcy1jYXBpdGFsaXplZFwiPntuYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2VDYXJkIl19 */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/components/PokeCard.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PokeCard);

/***/ })

})
//# sourceMappingURL=index.js.eb747447dd4342be0bba.hot-update.js.map