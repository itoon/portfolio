webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layouts/BaseLayout.jsx":
/*!*******************************************!*\
  !*** ./components/layouts/BaseLayout.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Header */ "./components/common/Header.jsx");



var BaseLayout = function BaseLayout(props) {
  var className = props.className,
      children = props.children,
      isAuthenticated = props.isAuthenticated,
      user = props.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layout-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isAuthenticated: isAuthenticated,
    user: user
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "cover ".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, children)));
};

BaseLayout.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ })

})
//# sourceMappingURL=index.js.296cbf6015f6e97e5b67.hot-update.js.map