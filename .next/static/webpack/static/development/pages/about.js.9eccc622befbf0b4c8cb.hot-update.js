webpackHotUpdate("static/development/pages/about.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);







var Auth0 =
/*#__PURE__*/
function () {
  function Auth0() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["default"].WebAuth({
      domain: 'marvelous-studio.auth0.com',
      clientID: 'sHsD76ZBw7vm1Wnte0LnAz4SZ28vVYdE',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Auth0, [{
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);

            resolve();
          } else if (err) {
            console.log(err);
            alert("Error: ".concat(err.error, ". Check the console for further details."));
            reject();
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      var expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('user', authResult.idTokenPayLoad);
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('jwt', authResult.idToken);
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('expiresAt', expiresAt);
    }
  }, {
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('user');
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('jwt');
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('expiresAt');
      this.auth0.logout({
        returnTo: '',
        clientID: 'sHsD76ZBw7vm1Wnte0LnAz4SZ28vVYdE'
      });
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      var expiresAt = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.getJSON('expiresAt');
      return new Date().getTime() < expiresAt;
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      if (token) {
        var decodeToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.decode(token);
        var expiresAt = decodeToken.exp * 1000;
        return decodeToken && new Date().getTime() < expiresAt ? decodeToken : undefined;
      }

      return undefined;
    }
  }, {
    key: "clientAuth",
    value: function clientAuth() {
      return this.isAuthenticated();
    }
  }, {
    key: "serverAuth",
    value: function serverAuth(req) {
      if (req.headers.cookie) {
        var expiresAtCookie = req.headers.cookie.split(';').find(function (c) {
          return c.trim().startsWith('expiresAt=');
        });

        if (!expiresAtCookie) {
          return undefined;
        }

        var expiresAt = expiresAtCookie.split('=')[1];
        return new Date().getTime() < expiresAt;
      }
    }
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ })

})
//# sourceMappingURL=about.js.9eccc622befbf0b4c8cb.hot-update.js.map