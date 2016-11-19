(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _main = __webpack_require__(1);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __EXPOSE__ = {};
	var __BASE__ = (0, _main2.default)();
	Object.assign(__BASE__ || {}, __EXPOSE__);
	window["GrimoireJS"].lib.effect_sepia = __EXPOSE__;
	exports.default = __BASE__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _MaterialFactory = __webpack_require__(2);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _grimoirejs = __webpack_require__(3);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _sepia = __webpack_require__(4);
	
	var _sepia2 = _interopRequireDefault(_sepia);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	
	exports.default = function () {
	    _grimoirejs2.default.register(function () {
	        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _MaterialFactory2.default.addSORTMaterial("sepia", _sepia2.default);
	                            _grimoirejs2.default.registerNode("render-sepia", [], {
	                                material: "new(sepia)"
	                            }, "render-quad");
	
	                        case 2:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    });
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Material.MaterialFactory;

/***/ },
/* 3 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "@Pass\n@NoBlend()\n@NoDepth()\nFS_PREC(mediump,float)\nvarying vec2 vTexCoord;\n\n#ifdef VS\nattribute vec3 position;\nattribute vec2 texCoord;\n\nvoid main(){\n  gl_Position = vec4(position,1);\n  vTexCoord = texCoord;\n}\n\n#endif\n\n#ifdef FS\n\n  uniform sampler2D source;\n\n  uniform float _time;\n\n\nconst float redScale   = 0.298912;\nconst float greenScale = 0.586611;\nconst float blueScale  = 0.114478;\nconst vec3  monochromeScale = vec3(redScale, greenScale, blueScale);\n\nconst float sRedScale   = 1.07;\nconst float sGreenScale = 0.74;\nconst float sBlueScale  = 0.43;\nconst vec3  sepiaScale = vec3(sRedScale, sGreenScale, sBlueScale);\n\n  void main(){\n    float l = 1.;\n    l = 0.5 + sin(2000.*vTexCoord.y + _time/100.);\n    vec4 sCol = texture2D(source,vTexCoord);\n    float gray = l * dot(sCol.rgb,monochromeScale);\n    sCol.a = 1.0;\n    sCol.rgb = vec3(gray * sepiaScale);\n    gl_FragColor = sCol;\n  }\n#endif\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=grimoire-effect-sepia.js.map