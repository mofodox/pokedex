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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p/:id",
    as: "/p/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1981333816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1981333816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, name))), data ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: data.sprites.front_default,
    alt: "".concat(name),
    className: "jsx-1981333816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })) : __jsx("p", {
    className: "jsx-1981333816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Loading..."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1981333816",
    __self: this
  }, ".card.jsx-1981333816{margin-bottom:32px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2ZvZG94L0RvY3VtZW50cy9kZXYvbmV4dC1wcm9qZWN0cy9wb2tlZGV4L2NvbXBvbmVudHMvUG9rZUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJ3QixBQUd3QyxtQkFDdkIiLCJmaWxlIjoiL1VzZXJzL21vZm9kb3gvRG9jdW1lbnRzL2Rldi9uZXh0LXByb2plY3RzL3Bva2VkZXgvY29tcG9uZW50cy9Qb2tlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9saWIvZmV0Y2hlcidcblxuY29uc3QgUG9rZUNhcmQgPSAoe25hbWUsIGlkfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtuYW1lfWAsIGZldGNoZXIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcC86aWRcIiBhcz17YC9wLyR7aWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48aDM+e25hbWV9PC9oMz48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5zcHJpdGVzLmZyb250X2RlZmF1bHR9IGFsdD17YCR7bmFtZX1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZUNhcmQiXX0= */\n/*@ sourceURL=/Users/mofodox/Documents/dev/next-projects/pokedex/components/PokeCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PokeCard);

/***/ })

})
//# sourceMappingURL=index.js.ee48e172534cb952be43.hot-update.js.map