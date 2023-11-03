/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page.js */ \"./src/initial-page.js\");\n\n// import './style.css';\n// import chef from './images/chef.png';\n// import carne from './images/carne.png';\n// import crema from './images/crema.png';\n// import disgustoso from './images/disgustoso.png';\n// import gamberi from './images/gamberi.png';\n// import pepe from './images/pepe.png';\n// import pomodoro from './images/pomodoro.png';\n// import salsiccia from './images/salsiccia.png';\n\nconsole.log(\"working\");\n\nconst contentDiv = document.querySelector(\"#content\");\n\nconst header = (0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\ncontentDiv.appendChild(header);\n\nconst main = (0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__.createMain)();\ncontentDiv.appendChild(main);\n\nconst footer = (0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\ncontentDiv.appendChild(footer);\n\n// const chefImage = new Image();\n// chefImage.src = chef;\n// chefImage.alt = \"A chef\";\n\n// contentDiv.appendChild(chefImage);\n// LogMsg();\n\n\n//# sourceURL=webpack://project-resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ createFooter),\n/* harmony export */   createHeader: () => (/* binding */ createHeader),\n/* harmony export */   createMain: () => (/* binding */ createMain)\n/* harmony export */ });\n/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github.svg */ \"./src/images/github.svg\");\n// const headerComponent\n\n\n\n// export function LogMsg() {\n//     console.log(\"working\");\n//     const img = new Image();\n//     img.src = colorato;\n//     console.log(img);\n// }\n\n/*\n\n      <header>\n        <h1>Pizzaly</h1>\n        <nav>\n          <button type=\"button\" data-tab=\"home\" class=\"active\">Home</button>\n          <button type=\"button\" data-tab=\"menu\">Menu</button>\n          <button type=\"button\" data-tab=\"contact\">Contact</button>\n        </nav>\n      </header>\n      <main></main>\n      <footer>\n        Copyright &copy; 2023 | Tony Fred\n        <a href=\"https://github.com/tonyfred-code/\">\n          <span class=\"icon-container\">\n            <img src=\"../src/images/github.svg\" alt=\"Github\" />\n          </span>\n        </a>\n      </footer>\n\n*/\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Pizzaly\";\n\n    const nav = document.createElement(\"nav\");\n    const homeBtn = document.createElement(\"button\");\n    const menuBtn = document.createElement(\"button\");\n    const contactBtn = document.createElement(\"button\");\n\n    homeBtn.textContent = \"Home\";\n    homeBtn.dataset.tab = \"home\";\n\n    menuBtn.textContent = \"Menu\";\n    homeBtn.dataset.tab = 'menu';\n\n    contactBtn.textContent = \"Contact\";\n    contactBtn.dataset.tab = \"contact\";\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n\n    header.appendChild(h1);\n    header.appendChild(nav);\n\n    return header;\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n\n    return main;\n}\n\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n\n    footer.innerHTML = `Copyright &copy; 2023 | Tony Fred`;\n\n    const footerLink = document.createElement('a');\n    footerLink.href = \"https://github.com/tonyfred-code/\";\n\n    const iconContainer = document.createElement(\"span\");\n    iconContainer.classList.add(\"icon-container\");\n\n    const img = document.createElement(\"img\");\n    img.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"Github\";\n\n    iconContainer.appendChild(img);\n\n    footerLink.appendChild(iconContainer);\n\n    footer.appendChild(footerLink);\n\n    return footer;\n}\n\n//# sourceURL=webpack://project-resturant-page/./src/initial-page.js?");

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"550985caaa8859d4b95f.svg\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/github.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;