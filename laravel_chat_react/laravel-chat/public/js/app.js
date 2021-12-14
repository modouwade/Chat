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

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/resources/assets/js/app.js: Unexpected token (16:10)\n\n\u001b[0m \u001b[90m 14 | \u001b[39m    render() {\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m          \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 16 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m              \u001b[33m<\u001b[39m\u001b[33mChatMessages\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m          )\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.unexpected (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:8757:16)\n    at Parser.parseExprAtom (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:10052:20)\n    at Parser.parseExprSubscripts (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Parser.parseMaybeUnary (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseParenAndDistinguishExpression (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:10193:28)\n    at Parser.parseExprAtom (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9947:21)\n    at Parser.parseExprSubscripts (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Parser.parseMaybeUnary (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseExpression (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:9332:23)\n    at Parser.parseReturnStatement (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11448:28)\n    at Parser.parseStatementContent (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11129:21)\n    at Parser.parseStatement (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseBlock (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11626:10)\n    at Parser.parseFunctionBody (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:10634:24)\n    at Parser.parseFunctionBodyAndFinish (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:10617:10)\n    at Parser.parseMethod (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:10579:10)\n    at Parser.pushClassMethod (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:12081:30)\n    at Parser.parseClassMemberWithIsStatic (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11998:12)\n    at Parser.parseClassMember (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11940:10)\n    at withTopicForbiddingContext (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11885:14)\n    at Parser.withTopicForbiddingContext (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:10956:14)\n    at Parser.parseClassBody (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11862:10)\n    at Parser.parseClass (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11836:22)\n    at Parser.parseStatementContent (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11123:21)\n    at Parser.parseStatement (/opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/node_modules/@babel/parser/lib/index.js:11081:17)");

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/*!****************************************!*\
  !*** ./resources/assets/sass/app.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./resources/assets/js/app.js ./resources/assets/sass/app.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/resources/assets/js/app.js */"./resources/assets/js/app.js");
module.exports = __webpack_require__(/*! /opt/lampp/htdocs/laravel/laravel chat react/laravel-chat/resources/assets/sass/app.scss */"./resources/assets/sass/app.scss");


/***/ })

/******/ });