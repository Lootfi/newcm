/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/landing-gatsby/src/pages/index.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/landing-gatsby/src/pages/index.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\work\\contactmajor\\resources\\js\\landing-gatsby\\src\\pages\\index.jsx: Support for the experimental syntax 'jsx' isn't currently enabled (29:11):\n\n\u001b[0m \u001b[90m 27 | \u001b[39m    render() {\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 29 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[33mHello\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m            \u001b[90m// <ThemeProvider theme={saasClassicTheme}>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 31 | \u001b[39m            \u001b[90m//     <Fragment>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 | \u001b[39m            \u001b[90m//         <SEO title=\"ContactMajor\" />\u001b[39m\u001b[0m\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Parser.raiseWithData (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:750:17)\n    at Parser.expectOnePlugin (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:8849:18)\n    at Parser.parseExprAtom (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:10164:24)\n    at Parser.parseExprSubscripts (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9688:23)\n    at Parser.parseMaybeUnary (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9668:21)\n    at Parser.parseExprOps (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9538:23)\n    at Parser.parseMaybeConditional (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9511:23)\n    at Parser.parseMaybeAssign (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9466:21)\n    at Parser.parseParenAndDistinguishExpression (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:10306:28)\n    at Parser.parseExprAtom (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:10039:21)\n    at Parser.parseExprSubscripts (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9688:23)\n    at Parser.parseMaybeUnary (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9668:21)\n    at Parser.parseExprOps (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9538:23)\n    at Parser.parseMaybeConditional (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9511:23)\n    at Parser.parseMaybeAssign (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9466:21)\n    at Parser.parseExpression (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:9418:23)\n    at Parser.parseReturnStatement (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11570:28)\n    at Parser.parseStatementContent (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11251:21)\n    at Parser.parseStatement (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11203:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11778:25)\n    at Parser.parseBlockBody (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11764:10)\n    at Parser.parseBlock (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11748:10)\n    at Parser.parseFunctionBody (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:10751:24)\n    at Parser.parseFunctionBodyAndFinish (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:10734:10)\n    at Parser.parseMethod (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:10696:10)\n    at Parser.pushClassMethod (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:12203:30)\n    at Parser.parseClassMemberWithIsStatic (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:12120:12)\n    at Parser.parseClassMember (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:12062:10)\n    at D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:12007:14\n    at Parser.withTopicForbiddingContext (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11078:14)\n    at Parser.parseClassBody (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11984:10)\n    at Parser.parseClass (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11958:22)\n    at Parser.parseExportDefaultExpression (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:12394:19)\n    at Parser.parseExport (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:12307:31)\n    at Parser.parseStatementContent (D:\\work\\contactmajor\\node_modules\\@babel\\parser\\lib\\index.js:11307:27)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************************************!*\
  !*** multi ./resources/js/landing-gatsby/src/pages/index.jsx ./resources/sass/app.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\work\contactmajor\resources\js\landing-gatsby\src\pages\index.jsx */"./resources/js/landing-gatsby/src/pages/index.jsx");
module.exports = __webpack_require__(/*! D:\work\contactmajor\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });