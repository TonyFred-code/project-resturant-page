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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Tangerine/Tangerine-Bold.ttf */ \"./src/fonts/Tangerine/Tangerine-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf */ \"./src/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: Tangerine;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(truetype);\n}\n\n@font-face {\n  font-family: \"Montserrat Alternates\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nhtml {\n  box-sizing: inherit;\n  font-size: 62.5%;\n  line-height: 1.6;\n}\n\nbody {\n  font-family: \"Montserrat Alternates\", serif;\n  background-color: #ccc8c8;\n  font-size: 1.6rem;\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\n.icon-container {\n    width: 40px;\n    height: 40px;\n    display: inline-block;\n}\n\n.icon-container img {\n    display: inline-block;\n}\n\n#content {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n\nheader {\n  display: flex;\n  background-color: white;\n  color: black;\n  width: 100%;\n  font-size: 2.4rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n\nheader h1 {\n  width: 100%;\n  font-family: Tangerine, cursive;\n  text-align: center;\n  padding: 12px;\n  margin: 6px 0;\n  line-height: 1.2;\n  font-size: 8rem;\n}\n\nheader nav {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 20px;\n  padding: 8px;\n  height: 100px;\n}\n\nheader nav button {\n  outline: none;\n  border: none;\n  padding: 18px 20px;\n  font-family: inherit;\n  background-color: transparent;\n  transition: all ease-in-out 0.2s;\n  margin-bottom: 4px;\n  cursor: pointer;\n  color: black;\n}\n\nheader nav button.active {\n  background-color: #ccc8c8;\n}\n\nheader nav button:hover {\n  margin-bottom: 18px;\n  padding-top: 0px;\n}\n\n/* Main Content */\nmain {\n  background-color: #eee;\n  max-width: 700px;\n  padding: 4rem;\n  margin: 6rem 8px;\n  font-size: 2rem;\n}\n\n.home-tab-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 530px;\n  width: 630px;\n}\n\n.home-tab-content img {\n  width: 50%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  opacity: 0.9;\n}\n\n.menu-tab-content {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 4rem;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  padding: 4rem;\n  cursor: pointer;\n}\n\n.menu-item:hover {\n    background-color: rgba(204, 200, 200, 0.8);\n}\n\n.menu-ingredients {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.contact-tab-content p {\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    gap: 1rem;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  width: 100%;\n}\n\nfooter a {\n  text-decoration: none;\n  color: black;\n}\n\nfooter .icon-container {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n}\n\n@media (max-width: 700px) {\n  .home-tab-content,\n  .contact {\n    height: 100%;\n    width: 100%;\n  }\n  .menu-tab-content {\n    grid-template-columns: 1fr;\n\n  }\n  .menu img {\n    width: 50%;\n  }\n}\n\n@media (max-width: 500px) {\n  html {\n    font-size: 57.5%;\n  }\n  .home-tab-content img {\n    width: 80%;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-resturant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-resturant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-resturant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactTab: () => (/* binding */ createContactTab)\n/* harmony export */ });\n/* harmony import */ var _images_card_account_details_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/card-account-details-outline.svg */ \"./src/images/card-account-details-outline.svg\");\n/* harmony import */ var _images_home_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/home-outline.svg */ \"./src/images/home-outline.svg\");\n\n\n\n/*\n\n<div class=\"contact-tab-content\">\n          <p>\n            <span class=\"icon-container\">\n              <img\n                src=\"../src/images/card-account-details-outline.svg\"\n                alt=\"Phone number details\"\n              />\n            </span>\n\n            123-123-123\n          </p>\n          <p>\n            <span class=\"icon-container\">\n              <img src=\"../src/images/home-outline.svg\" alt=\"Home Address\" />\n            </span>\n            2, somewhere of someplace opposite this place.\n          </p>\n          <p>We expect your patronage!!!</p>\n        </div>\n\n*/\n\nfunction createContactTab() {\n    const contactTab = document.createElement(\"div\");\n    contactTab.classList.add(\"contact-tab-content\");\n    contactTab.dataset.shownTab = \"contact\";\n\n    const p1 = document.createElement(\"p\");\n    const icon1container = document.createElement(\"span\");\n    icon1container.classList.add(\"icon-container\");\n    const img1 = document.createElement(\"img\");\n    img1.src = _images_card_account_details_outline_svg__WEBPACK_IMPORTED_MODULE_0__;\n    img1.alt = \"Phone Details\";\n\n    icon1container.appendChild(img1);\n    p1.appendChild(icon1container);\n    p1.innerHTML += '123-123-123';\n\n    const p2 = document.createElement(\"p\");\n    const icon2container = document.createElement(\"span\");\n    icon2container.classList.add(\"icon-container\");\n    const img2 = document.createElement(\"img\");\n    img2.src = _images_home_outline_svg__WEBPACK_IMPORTED_MODULE_1__;\n    img2.alt = \"Home Address\";\n\n    icon2container.appendChild(img2);\n    p2.appendChild(icon2container);\n    p2.innerHTML += '2, somewhere of someplace opposite this place.';\n\n    const p3 = document.createElement(\"p\");\n    p3.textContent = \"We expect your patronage!!!\";\n\n    contactTab.appendChild(p1)\n    contactTab.appendChild(p2)\n    contactTab.appendChild(p3)\n\n    return contactTab;\n}\n\n//# sourceURL=webpack://project-resturant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomeTab: () => (/* binding */ createHomeTab)\n/* harmony export */ });\n/* harmony import */ var _images_carne_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/carne.png */ \"./src/images/carne.png\");\n\n\n/*\n<div class=\"home-tab-content\">\n          <p>Best pizza in your country</p>\n          <p>Today's special</p>\n          <img src=\"../src/images/carne.png\" alt=\"A pizza\">\n          <p>Visit us today for your next meal!</p>\n        </div>\n*/\n\nfunction createHomeTab() {\n  const homeTab = document.createElement(\"div\");\n  homeTab.classList.add(\"home-tab-content\");\n  homeTab.dataset.shownTab = \"home\";\n\n  const text1 = document.createElement(\"p\");\n  text1.textContent = \"Best pizza in your country!\";\n  const text2 = document.createElement(\"p\");\n  text2.textContent = \"Today's special: Carne Pizza\";\n  const text3 = document.createElement(\"p\");\n  text3.textContent = \"Visit us today for your next meal!\";\n  const img = document.createElement(\"img\");\n  img.src = _images_carne_png__WEBPACK_IMPORTED_MODULE_0__;\n  img.alt = \"Carne Pizza\";\n\n  homeTab.appendChild(text1);\n  homeTab.appendChild(text2);\n  homeTab.appendChild(img);\n  homeTab.appendChild(text3);\n\n  return homeTab;\n}\n\n\n//# sourceURL=webpack://project-resturant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page.js */ \"./src/initial-page.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n// import chef from './images/chef.png';\n// import carne from './images/carne.png';\n// import crema from './images/crema.png';\n// import disgustoso from './images/disgustoso.png';\n// import gamberi from './images/gamberi.png';\n// import pepe from './images/pepe.png';\n// import pomodoro from './images/pomodoro.png';\n// import salsiccia from './images/salsiccia.png';\n\nfunction renderInitialPage() {\nconst contentDiv = document.querySelector(\"#content\");\n\nconst header = (0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\ncontentDiv.appendChild(header);\n\nconst tabButtons = header.querySelectorAll(\"[data-tab]\");\ntabButtons.forEach((tabBtn) => {\n    tabBtn.addEventListener(\"click\", getTab)\n})\n\nconst main = (0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__.createMain)();\ncontentDiv.appendChild(main);\n\nconst footer = (0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\ncontentDiv.appendChild(footer);\n}\n\nrenderInitialPage();\n\nfunction getTab(e) {\n    const tabName = e.target.dataset.tab;\n    if (tabName === \"home\") {\n        switchTab((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomeTab)());\n    } else if (tabName === \"menu\") {\n        switchTab((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuTab)());\n    } else if (tabName === \"contact\") {\n       switchTab((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.createContactTab)());\n    }\n}\n\nfunction switchTab(tab) {\n    const main = document.querySelector(\"main\");\n\n    if (!tab || tab === null) return;\n\n    main.innerHTML = \"\";\n    main.appendChild(tab);\n    setActiveTabBtn();\n}\n\nswitchTab((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuTab)());\n\nfunction setActiveTabBtn() {\n    const tabBtns = document.querySelectorAll('[data-tab]');\n    tabBtns.forEach((tabBtn) => {\n        tabBtn.classList.remove(\"active\");\n    })\n\n    const shownTab = document.querySelector(\"[data-shown-tab]\")\n    const shownTabName = shownTab.dataset.shownTab;\n    const tabBtn = document.querySelector(`[data-tab=\"${shownTabName}\"]`);\n    tabBtn.classList.add(\"active\");\n}\n\n// setActiveTabBtn();\n\n\n\n\n\n// const chefImage = new Image();\n// chefImage.src = chef;\n// chefImage.alt = \"A chef\";\n\n// contentDiv.appendChild(chefImage);\n// LogMsg();\n\n\n//# sourceURL=webpack://project-resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ createFooter),\n/* harmony export */   createHeader: () => (/* binding */ createHeader),\n/* harmony export */   createMain: () => (/* binding */ createMain)\n/* harmony export */ });\n/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github.svg */ \"./src/images/github.svg\");\n// const headerComponent\n\n\n\n// export function LogMsg() {\n//     console.log(\"working\");\n//     const img = new Image();\n//     img.src = colorato;\n//     console.log(img);\n// }\n\n/*\n\n      <header>\n        <h1>Pizzaly</h1>\n        <nav>\n          <button type=\"button\" data-tab=\"home\" class=\"active\">Home</button>\n          <button type=\"button\" data-tab=\"menu\">Menu</button>\n          <button type=\"button\" data-tab=\"contact\">Contact</button>\n        </nav>\n      </header>\n      <main></main>\n      <footer>\n        Copyright &copy; 2023 | Tony Fred\n        <a href=\"https://github.com/tonyfred-code/\">\n          <span class=\"icon-container\">\n            <img src=\"../src/images/github.svg\" alt=\"Github\" />\n          </span>\n        </a>\n      </footer>\n\n*/\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Pizzaly\";\n\n    const nav = document.createElement(\"nav\");\n    const homeBtn = document.createElement(\"button\");\n    const menuBtn = document.createElement(\"button\");\n    const contactBtn = document.createElement(\"button\");\n\n    homeBtn.textContent = \"Home\";\n    homeBtn.dataset.tab = \"home\";\n\n    menuBtn.textContent = \"Menu\";\n    menuBtn.dataset.tab = 'menu';\n\n    contactBtn.textContent = \"Contact\";\n    contactBtn.dataset.tab = \"contact\";\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n\n    header.appendChild(h1);\n    header.appendChild(nav);\n\n    return header;\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n\n    return main;\n}\n\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n\n    footer.innerHTML = `Copyright &copy; 2023 | Tony Fred`;\n\n    const footerLink = document.createElement('a');\n    footerLink.href = \"https://github.com/tonyfred-code/\";\n\n    const iconContainer = document.createElement(\"span\");\n    iconContainer.classList.add(\"icon-container\");\n\n    const img = document.createElement(\"img\");\n    img.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"Github\";\n\n    iconContainer.appendChild(img);\n\n    footerLink.appendChild(iconContainer);\n\n    footer.appendChild(footerLink);\n\n    return footer;\n}\n\n//# sourceURL=webpack://project-resturant-page/./src/initial-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuTab: () => (/* binding */ createMenuTab)\n/* harmony export */ });\n/* harmony import */ var _images_colorato_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/colorato.png */ \"./src/images/colorato.png\");\n/* harmony import */ var _images_crema_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/crema.png */ \"./src/images/crema.png\");\n/* harmony import */ var _images_disgustoso_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/disgustoso.png */ \"./src/images/disgustoso.png\");\n/* harmony import */ var _images_gamberi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/gamberi.png */ \"./src/images/gamberi.png\");\n/* harmony import */ var _images_pepe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pepe.png */ \"./src/images/pepe.png\");\n/* harmony import */ var _images_pomodoro_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pomodoro.png */ \"./src/images/pomodoro.png\");\n\n\n\n\n\n\n/*\n\n        <div class=\"menu-tab-content\">\n          <div class=\"menu-item\">\n            <img src=\"../src/images/colorato.png\" alt=\"A pizza choice\" />\n\n            <div class=\"menu-ingredients\">\n              Pizza menu-ingredients cheese garlic tomato toppings\n            </div>\n          </div>\n\n          <div class=\"menu-item\">\n            <img src=\"../src/images/crema.png\" alt=\"A pizza choice\" />\n\n            <div class=\"menu-ingredients\">\n              Pizza menu-ingredients cheese garlic tomato toppings\n            </div>\n          </div>\n\n          <div class=\"menu-item\">\n            <img src=\"../src/images/disgustoso.png\" alt=\"A pizza choice\" />\n\n            <div class=\"menu-ingredients\">\n              Pizza menu-ingredients cheese garlic tomato toppings\n            </div>\n          </div>\n\n          <div class=\"menu-item\">\n            <img src=\"../src/images/gamberi.png\" alt=\"A pizza choice\" />\n\n            <div class=\"menu-ingredients\">\n              Pizza menu-ingredients cheese garlic tomato toppings\n            </div>\n          </div>\n\n          <div class=\"menu-item\">\n            <img src=\"../src/images/pepe.png\" alt=\"A pizza choice\" />\n\n            <div class=\"menu-ingredients\">\n              Pizza menu-ingredients cheese garlic tomato toppings\n            </div>\n          </div>\n\n          <div class=\"menu-item\">\n            <img src=\"../src/images/pomodoro.png\" alt=\"A pizza choice\" />\n\n            <div class=\"menu-ingredients\">\n              Pizza menu-ingredients cheese garlic tomato toppings\n            </div>\n          </div>\n        </div>\n\n*/\n\nfunction createMenuItem(imgLink,imgAlt , menuIngredients) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n\n    const img = document.createElement(\"img\");\n    img.src = imgLink;\n    img.alt = imgAlt;\n\n    const menuIngredientsContainer = document.createElement(\"p\");\n    menuIngredientsContainer.textContent = menuIngredients;\n\n    menuItem.appendChild(img);\n    menuItem.appendChild(menuIngredientsContainer);\n\n    return menuItem;\n}\n\nfunction createMenuTab() {\n    const menuTab = document.createElement(\"div\");\n    menuTab.classList.add(\"menu-tab-content\");\n    menuTab.dataset.shownTab = \"menu\"\n\n\n    const menuItem1 = createMenuItem(_images_colorato_png__WEBPACK_IMPORTED_MODULE_0__, \"Colorato Pizza\",\"Pizza ingredients cheese garlic tomato toppings\");\n    menuTab.appendChild(menuItem1);\n\n    const menuItem2 = createMenuItem(_images_crema_png__WEBPACK_IMPORTED_MODULE_1__, \"Crema Pizza\",\"Pizza ingredients cheese garlic tomato toppings\");\n    menuTab.appendChild(menuItem2);\n\n    const menuItem3 = createMenuItem(_images_disgustoso_png__WEBPACK_IMPORTED_MODULE_2__, \"Disgustoso Pizza\",\"Pizza ingredients cheese garlic tomato toppings\");\n    menuTab.appendChild(menuItem3);\n\n    const menuItem4 = createMenuItem(_images_pepe_png__WEBPACK_IMPORTED_MODULE_4__, \"Pepe Pizza\",\"Pizza ingredients cheese garlic tomato toppings\");\n    menuTab.appendChild(menuItem4);\n\n    const menuItem5 = createMenuItem(_images_gamberi_png__WEBPACK_IMPORTED_MODULE_3__, \"Gamberi Pizza\",\"Pizza ingredients cheese garlic tomato toppings\");\n    menuTab.appendChild(menuItem5);\n\n    const menuItem6 = createMenuItem(_images_pomodoro_png__WEBPACK_IMPORTED_MODULE_5__, \"Pomodoro Pizza\",\"Pizza ingredients cheese garlic tomato toppings\");\n    menuTab.appendChild(menuItem6);\n\n    return menuTab;\n}\n\n//# sourceURL=webpack://project-resturant-page/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf":
/*!**************************************************************************!*\
  !*** ./src/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"17043267bfe178ef8921.ttf\";\n\n//# sourceURL=webpack://project-resturant-page/./src/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Tangerine/Tangerine-Bold.ttf":
/*!************************************************!*\
  !*** ./src/fonts/Tangerine/Tangerine-Bold.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"290f181679aa2ef327e4.ttf\";\n\n//# sourceURL=webpack://project-resturant-page/./src/fonts/Tangerine/Tangerine-Bold.ttf?");

/***/ }),

/***/ "./src/images/card-account-details-outline.svg":
/*!*****************************************************!*\
  !*** ./src/images/card-account-details-outline.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"700e75ec2fafeae74bfc.svg\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/card-account-details-outline.svg?");

/***/ }),

/***/ "./src/images/carne.png":
/*!******************************!*\
  !*** ./src/images/carne.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8bf9bfdca8c5e63f3aa.png\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/carne.png?");

/***/ }),

/***/ "./src/images/colorato.png":
/*!*********************************!*\
  !*** ./src/images/colorato.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"16638ff23489422a5d03.png\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/colorato.png?");

/***/ }),

/***/ "./src/images/crema.png":
/*!******************************!*\
  !*** ./src/images/crema.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7f675715f467c0f08f3.png\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/crema.png?");

/***/ }),

/***/ "./src/images/disgustoso.png":
/*!***********************************!*\
  !*** ./src/images/disgustoso.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34362ada84919363d765.png\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/disgustoso.png?");

/***/ }),

/***/ "./src/images/gamberi.png":
/*!********************************!*\
  !*** ./src/images/gamberi.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39cec0b6bfec797325ef.png\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/gamberi.png?");

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"550985caaa8859d4b95f.svg\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/github.svg?");

/***/ }),

/***/ "./src/images/home-outline.svg":
/*!*************************************!*\
  !*** ./src/images/home-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e995b1fa6c9a2c09ac7.svg\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/home-outline.svg?");

/***/ }),

/***/ "./src/images/pepe.png":
/*!*****************************!*\
  !*** ./src/images/pepe.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c8c231f8597e0da675e.png\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/pepe.png?");

/***/ }),

/***/ "./src/images/pomodoro.png":
/*!*********************************!*\
  !*** ./src/images/pomodoro.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1896a43718b529295942.png\";\n\n//# sourceURL=webpack://project-resturant-page/./src/images/pomodoro.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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