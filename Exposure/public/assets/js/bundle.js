var MyCustomLibrary =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/*! exports provided: Lookup, utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Lookup */ \"./src/js/Lookup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Lookup\", function() { return _js_Lookup__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/utilities */ \"./src/js/utilities.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return _js_utilities__WEBPACK_IMPORTED_MODULE_1__; });\n__webpack_require__(/*! ./js/validate_form */ \"./src/js/validate_form.js\");\n\n\n\n//import {uniqueID} from \"./js/utilities\";\n//import {uniqueID, add} from \"./js/utilities\";\n\n\n//export {Lookup, utils, add};\n\n\nlet search = new _js_Lookup__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({url: 'my/api/link/here/or/whatever'});\nlet search_area = $(\"#search_results_area\");\nlet search_box = $(\"#input_query\");\n\n$().ready(function () {\n\t$(\"#btn_code\").on('click', function () {\n\t\t$(\"#code_area\").text(_js_utilities__WEBPACK_IMPORTED_MODULE_1__[\"uniqueID\"]());\n\t});\n\t\n\tsearch.changeAPI('oh/this/is/better/');\n\tsearch.subscribe(showResults);\n\t\n});\n\n$(\"#btn_search\").on('click', function () {\n\tsearch.search(search_box.val());\n\tsearch_area.empty();\n\tsearch_area.append('<div class=\"loader\"></div>');\n});\n\nfunction showResults(results) {\n\t// Remove old content.\n\tsearch_area.empty();\n\t// Add Header section\n\tsearch_area.append(\"<b>Search Results</b>\");\n\tsearch_area.append(\"<br/>\");\n\t// Load results, which is just some pre-formatted text\n\tsearch_area.append(results);\n}\n\n//# sourceURL=webpack://MyCustomLibrary/./src/bundle.js?");

/***/ }),

/***/ "./src/js/Lookup.js":
/*!**************************!*\
  !*** ./src/js/Lookup.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lookup; });\nclass Lookup {\n\tconstructor(options) {\n\t\tthis.url = options.url;\n\t\t\n\t\t// Subscribers\n\t\tthis.observers = [];\n\t}\n\t\n\tchangeAPI(url) {\n\t\tthis.url = url;\n\t}\n\t\n\tsearch(query) {\n\t\tconst waitTime = Math.random() * 3;\n\t\tconst _thisRef = this;\n\t\t\n\t\tconsole.log('Simulating wait time for ' + waitTime + ' seconds.');\n\t\t\n\t\tsetTimeout(function () {\n\t\t\t_thisRef.onSearchFinished();\n\t\t}, (waitTime * 1000));\n\t}\n\t\n\tonSearchFinished() {\n\t\tthis.notify(this.pretendedIDontExist());\n\t}\n\t\n\tpretendedIDontExist() {\n\t\treturn '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Respondent extrema primis, media utrisque, omnia omnibus. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Et quod est munus, quod opus sapientiae? Ne in odium veniam, si amicum destitero tueri. </p>\\n' +\n\t\t\t   '<p>Nos commodius agimus. Modo etiam paulum ad dexteram de via declinavi, ut ad Pericli sepulcrum accederem. Duo Reges: constructio interrete. Totum autem id externum est, et quod externum, id in casu est. Sed potestne rerum maior esse dissensio? Quis tibi ergo istud dabit praeter Pyrrhonem, Aristonem eorumve similes, quos tu non probas? </p>\\n' +\n\t\t\t   '<p>Huius, Lyco, oratione locuples, rebus ipsis ielunior. Habent enim et bene longam et satis litigiosam disputationem. Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Ita enim vivunt quidam, ut eorum vita refellatur oratio. </p>\\n' +\n\t\t\t   '\\n';\n\t}\n\t\n\tsubscribe(f) {\n\t\tthis.observers.push(f)\n\t}\n\t\n\tunsubscribe(f) {\n\t\tthis.observers.filter(o => o !== f);\n\t}\n\t\n\tnotify(data) {\n\t\tthis.observers.forEach(o => o(data));\n\t}\n}\n\n//# sourceURL=webpack://MyCustomLibrary/./src/js/Lookup.js?");

/***/ }),

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/*! exports provided: add, multiply, uniqueID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return multiply; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uniqueID\", function() { return uniqueID; });\nfunction add(a, b) {\n\treturn (a + b);\n}\n\nfunction multiply(a, b) {\n\treturn (a * b);\n}\n\nfunction uniqueID(length = 10) {\n\tlet result = '';\n\tconst characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n\tconst charactersLength = characters.length;\n\tfor (let i = 0; i < length; i++) {\n\t\tresult += characters.charAt(Math.floor(Math.random() * charactersLength));\n\t}\n\treturn result;\n}\n\n//# sourceURL=webpack://MyCustomLibrary/./src/js/utilities.js?");

/***/ }),

/***/ "./src/js/validate_form.js":
/*!*********************************!*\
  !*** ./src/js/validate_form.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Disable form submissions if there are invalid fields\n(function () {\n\t'use strict';\n\twindow.addEventListener('load', function () {\n\t\t// Get the forms we want to add validation styles to\n\t\tvar forms = document.getElementsByClassName('needs-validation');\n\t\t// Loop over them and prevent submission\n\t\tvar validation = Array.prototype.filter.call(forms, function (form) {\n\t\t\tform.addEventListener('submit', function (event) {\n\t\t\t\tif (form.checkValidity() === false) {\n\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\tevent.stopPropagation();\n\t\t\t\t}\n\t\t\t\tform.classList.add('was-validated');\n\t\t\t}, false);\n\t\t});\n\t}, false);\n})();\n\n\n//# sourceURL=webpack://MyCustomLibrary/./src/js/validate_form.js?");

/***/ })

/******/ });