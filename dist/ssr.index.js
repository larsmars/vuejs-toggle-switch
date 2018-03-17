(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vuejs-toggle-switch"] = factory(require("vue"));
	else
		root["vuejs-toggle-switch"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  "data-v-46bfeb61",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//


var s = function s(x) {
  return x + 's';
};
var px = function px(v) {
  return v + 'px';
};

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.defaultOptions = {
      layout: {
        color: 'black',
        backgroundColor: 'lightgray',
        selectedColor: 'white',
        selectedBackgroundColor: 'green',
        borderColor: 'black',
        fontFamily: 'Arial',
        fontWeight: 'normal'
      },
      size: {
        fontSize: 14,
        height: 34,
        padding: 7,
        width: 100
      },
      items: {
        delay: .4,
        preSelected: 'unknown',
        disabled: false,
        labels: [{ name: 'Off', color: 'black', backgroundColor: 'green' }, { name: 'On', color: 'black', backgroundColor: 'red' }]
      }
    };
  },

  name: 'ToggleSwitch',
  props: {
    options: {
      type: Object,
      required: false
    },
    value: {
      type: String,
      required: false
    }
  },
  computed: {
    switchStyle: function switchStyle() {
      return {
        width: px(this.defaultOptions.size.width),
        height: px(this.defaultOptions.size.height)
      };
    },
    itemStyle: function itemStyle() {
      return {
        height: px(this.defaultOptions.size.height),
        width: px(this.defaultOptions.size.width),
        fontFamily: this.defaultOptions.layout.fontFamily,
        fontSize: px(this.defaultOptions.size.fontSize),
        textAlign: 'center'
      };
    },
    labelStyle: function labelStyle() {
      return {
        padding: px(this.defaultOptions.size.padding),
        borderColor: this.defaultOptions.layout.borderColor,
        backgroundColor: this.defaultOptions.layout.backgroundColor,
        color: this.defaultOptions.layout.color,
        fontWeight: this.defaultOptions.layout.fontWeight,
        transition: s(this.defaultOptions.items.delay)
      };
    }
  },
  data: function data() {
    return {
      selected: false,
      selectedItem: 'unknown',
      defaultOptions: Object
    };
  },
  mounted: function mounted() {
    if (this.options !== null && this.options !== undefined) {
      this.mergeDefaultOptionsWithProp(this.options);
    }
    if (this.defaultOptions.items.preSelected !== 'unknown') {
      this.selectedItem = this.defaultOptions.items.preSelected;
      this.$emit('input', this.selectedItem);
    } else if (this.value) {
      this.selectedItem = this.value;
      this.$emit('input', this.selectedItem);
    }
  },

  watch: {
    value: function value(val) {
      this.selectedItem = val;
    }
  },
  methods: {
    toggle: function toggle(event) {
      if (!this.defaultOptions.items.disabled) {
        this.selected = true;
        this.selectedItem = event.target.id, this.$emit('selected', this.selected);
        this.$emit('input', this.selectedItem);
        this.$emit('change', {
          value: event.target.id,
          srcEvent: event
        });
      }
    },

    labelStyleSelected: function labelStyleSelected(color, backgroundColor) {
      return {
        padding: px(this.defaultOptions.size.padding),
        borderColor: this.defaultOptions.layout.borderColor,
        backgroundColor: backgroundColor !== undefined ? backgroundColor : this.defaultOptions.layout.selectedBackgroundColor,
        color: color !== undefined ? color : this.defaultOptions.layout.selectedColor,
        transition: s(this.defaultOptions.items.delay)
      };
    },
    mergeDefaultOptionsWithProp: function mergeDefaultOptionsWithProp(options) {
      var result = this.defaultOptions;
      for (var option in options) {
        if (options[option] !== null && _typeof(options[option]) === 'object') {
          for (var subOption in options[option]) {
            if (options[option][subOption] !== undefined && options[option][subOption] !== null) {
              result[option][subOption] = options[option][subOption];
            }
          }
        } else {
          result[option] = options[option];
        }
      }
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ToggleSwitch_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ToggleSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ToggleSwitch_vue__);



var plugin = {
  install: function install(Vue, options) {
    Vue.component('ToggleSwitch', __WEBPACK_IMPORTED_MODULE_1__ToggleSwitch_vue___default.a);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "ul[data-v-46bfeb61]{list-style:none}.toggle-switch[data-v-46bfeb61]{padding:0;margin:0;display:inline-flex}.toggle-switch li[data-v-46bfeb61]{position:relative}.toggle-switch li:first-child label[data-v-46bfeb61]{border:1px solid;border-top-left-radius:5px;border-bottom-left-radius:5px}.toggle-switch li:last-child label[data-v-46bfeb61]{border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-top-right-radius:5px;border-bottom-right-radius:5px}.toggle-switch input[data-v-46bfeb61],.toggle-switch label[data-v-46bfeb61]{display:block;position:absolute;top:0;left:0;right:0;bottom:0}.toggle-switch input[type=radio][data-v-46bfeb61]{opacity:.01;z-index:100}.toggle-switch li:not(:first-child):not(:last-child) label[data-v-46bfeb61]{border-right:1px solid;border-top:1px solid;border-bottom:1px solid}.active[data-v-46bfeb61]{cursor:pointer}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', {
    staticClass: "toggle-switch",
    style: (_vm.switchStyle)
  }, _vm._l((_vm.defaultOptions.items.labels), function(label, index) {
    return _c('li', {
      key: index,
      style: (_vm.itemStyle)
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.defaultItem),
        expression: "defaultItem"
      }],
      attrs: {
        "disabled": _vm.defaultOptions.items.disabled,
        "id": label.name,
        "name": _vm.defaultItem,
        "type": "radio"
      },
      domProps: {
        "value": label.name,
        "checked": _vm._q(_vm.defaultItem, label.name)
      },
      on: {
        "change": [function($event) {
          _vm.defaultItem = label.name
        }, function($event) {
          $event.stopPropagation();
          _vm.toggle($event)
        }]
      }
    }), _vm._v(" "), (label.name === _vm.selectedItem) ? _c('label', {
      class: {
        active: !_vm.defaultOptions.items.disabled
      },
      style: (_vm.labelStyleSelected(label.color, label.backgroundColor)),
      attrs: {
        "for": label.name,
        "type": "radio"
      }
    }, [_vm._v(_vm._s(label.name))]) : _c('label', {
      class: {
        active: !_vm.defaultOptions.items.disabled
      },
      style: (_vm.labelStyle),
      attrs: {
        "for": label.name,
        "type": "radio"
      }
    }, [_vm._v(_vm._s(label.name))])])
  }))])
},staticRenderFns: []}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(9)("1455857e", content, true);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(10)

module.exports = function (parentId, list, isProduction) {
  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    var context = __VUE_SSR_CONTEXT__
    var styles = context._styles

    if (!styles) {
      styles = context._styles = {}
      Object.defineProperty(context, 'styles', {
        enumberable: true,
        get : function() {
          return (
            context._renderedStyles ||
            (context._renderedStyles = renderStyles(styles))
          )
        }
      })
    }

    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        style.ids.push(part.id)
        style.css += '\n' + part.css
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=ssr.index.js.map