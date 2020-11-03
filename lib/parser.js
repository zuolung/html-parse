(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("plugin", [], factory);
	else if(typeof exports === 'object')
		exports["plugin"] = factory();
	else
		root["plugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return htmlTransform; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sign_enum = {
  SIGN_END: "SIGN_END",
  // 结束标签读取 如 <xxxxx>
  SIGN_END_OK: "SIGN_EN_OK",
  // 结束标签读取完成
  SIGN_START: "SIGN_START",
  // 开始标签读取 如 </xxxxx>
  SIGN_START_OK: "SIGN_START_OK" // 开始标签读取完成 

};
function htmlTransform(htmlStr) {
  var str = htmlStr.replace(/\n/g, "");
  var result = {
    nodeName: "root",
    children: []
  }; // 默认 result.children[0]插入, use_line的[0]可以用数字1代替
  // push改成use_line++，pop改成use_line--，这里为了调试用的栈记录

  var use_line = [0];
  var current_index = 0; // 记录当前插入children的下标

  var node = result; // 当前操作的节点

  var sign = ""; // 标记标签字符串（可能包含属性字符）、文本信息

  var status = ""; // 当前状态，为空的时候我们认为是在读取当前节点（node）的文本信息

  for (var i = 0; i < str.length; i++) {
    var current = str.charAt(i);
    var next = str.charAt(i + 1);

    if (current === "<") {
      // 在开始标签完成后记录文本信息到当前节点
      if (sign && status === sign_enum.SIGN_START_OK) {
        node.text = sign;
        sign = "";
      } // 根据“</”来区分是 结束标签的（</xxx>）读取中  还是开始的标签(<xxx>) 读取中


      if (next === "/") {
        status = sign_enum.SIGN_END;
      } else {
        status = sign_enum.SIGN_START;
      }
    } else if (current === ">") {
      // (<xxx>) 读取中，遇到“>”， (<xxx>) 读取中完成
      if (status === sign_enum.SIGN_START) {
        // 记录当前node所在的位置，并更改node
        node = result;
        use_line.map(function (_, index) {
          if (!node.children) node.children = [];

          if (index === use_line.length - 1) {
            sign = sign.replace(/^\s*/g, "").replace(/\"/g, "");
            var mark = sign.match(/^[a-zA-Z0-9]*\s*/)[0].replace(/\s/g, ""); // 记录标签
            // 标签上定义的属性获取

            var attributeStr = sign.replace(mark, '').replace(/\s+/g, ",").split(",");
            var attrbuteObj = {};
            var style = {};
            attributeStr.map(function (attr) {
              if (attr) {
                var value = attr.split("=")[1];
                var key = attr.split("=")[0];

                if (key === "style") {
                  value.split(";").map(function (s) {
                    if (s) {
                      style[s.split(":")[0]] = s.split(":")[1];
                    }
                  });
                  return attrbuteObj[key] = style;
                }

                attrbuteObj[key] = value;
              }
            });
            node.children.push(_objectSpread(_objectSpread({
              nodeName: mark,
              children: []
            }, attrbuteObj), style));
          }

          current_index = node.children.length - 1;
          node = node.children[current_index];
        });
        use_line.push(current_index);
        sign = "";
        status = sign_enum.SIGN_START_OK;
      } // (</xxx>) 读取中，遇到“>”， (</xxx>) 读取中完成


      if (status === sign_enum.SIGN_END) {
        use_line.pop();
        node = result; // 重新寻找操作的node

        use_line.map(function (i) {
          node = node.children[i];
        });
        sign = "";
        status = sign_enum.SIGN_END_OK;
      }
    } else {
      sign = sign + current;
    }
  }

  return result;
}

/***/ })
/******/ ])["default"];
});