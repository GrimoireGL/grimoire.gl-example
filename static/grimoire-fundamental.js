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
	
	var _AssetLoader = __webpack_require__(1);
	
	var _AssetLoader2 = _interopRequireDefault(_AssetLoader);
	
	var _CacheResolver = __webpack_require__(3);
	
	var _CacheResolver2 = _interopRequireDefault(_CacheResolver);
	
	var _ExternalResourceResolver = __webpack_require__(4);
	
	var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);
	
	var _ImageResolver = __webpack_require__(5);
	
	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);
	
	var _TextFileResolver = __webpack_require__(6);
	
	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);
	
	var _AssetLoadingManagerComponent = __webpack_require__(7);
	
	var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);
	
	var _CameraComponent = __webpack_require__(11);
	
	var _CameraComponent2 = _interopRequireDefault(_CameraComponent);
	
	var _CanvasInitializerComponent = __webpack_require__(21);
	
	var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);
	
	var _FullscreenComponent = __webpack_require__(27);
	
	var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);
	
	var _GeometryComponent = __webpack_require__(28);
	
	var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);
	
	var _GeometryRegistoryComponent = __webpack_require__(30);
	
	var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);
	
	var _HTMLBinderComponent = __webpack_require__(31);
	
	var _HTMLBinderComponent2 = _interopRequireDefault(_HTMLBinderComponent);
	
	var _LoopManagerComponent = __webpack_require__(32);
	
	var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);
	
	var _MaterialComponent = __webpack_require__(33);
	
	var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);
	
	var _MaterialContainerComponent = __webpack_require__(34);
	
	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);
	
	var _MaterialImporterComponent = __webpack_require__(36);
	
	var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);
	
	var _MaterialManagerComponent = __webpack_require__(56);
	
	var _MaterialManagerComponent2 = _interopRequireDefault(_MaterialManagerComponent);
	
	var _MeshRendererComponent = __webpack_require__(57);
	
	var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);
	
	var _MouseCameraControlComponent = __webpack_require__(58);
	
	var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);
	
	var _RenderBufferComponent = __webpack_require__(59);
	
	var _RenderBufferComponent2 = _interopRequireDefault(_RenderBufferComponent);
	
	var _RendererComponent = __webpack_require__(62);
	
	var _RendererComponent2 = _interopRequireDefault(_RendererComponent);
	
	var _RendererManagerComponent = __webpack_require__(63);
	
	var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);
	
	var _RenderQuadComponent = __webpack_require__(65);
	
	var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);
	
	var _RenderSceneComponent = __webpack_require__(67);
	
	var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);
	
	var _SceneComponent = __webpack_require__(19);
	
	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);
	
	var _TextureBufferComponent = __webpack_require__(68);
	
	var _TextureBufferComponent2 = _interopRequireDefault(_TextureBufferComponent);
	
	var _TextureComponent = __webpack_require__(69);
	
	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);
	
	var _TransformComponent = __webpack_require__(17);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _CanvasSizeConverter = __webpack_require__(70);
	
	var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);
	
	var _ComponentConverter = __webpack_require__(71);
	
	var _ComponentConverter2 = _interopRequireDefault(_ComponentConverter);
	
	var _EnumConverter = __webpack_require__(73);
	
	var _EnumConverter2 = _interopRequireDefault(_EnumConverter);
	
	var _GeometryConverter = __webpack_require__(74);
	
	var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);
	
	var _MaterialConverter = __webpack_require__(75);
	
	var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);
	
	var _NumberArrayConverter = __webpack_require__(76);
	
	var _NumberArrayConverter2 = _interopRequireDefault(_NumberArrayConverter);
	
	var _NumberConverter = __webpack_require__(77);
	
	var _NumberConverter2 = _interopRequireDefault(_NumberConverter);
	
	var _ObjectConverter = __webpack_require__(78);
	
	var _ObjectConverter2 = _interopRequireDefault(_ObjectConverter);
	
	var _TextureConverter = __webpack_require__(79);
	
	var _TextureConverter2 = _interopRequireDefault(_TextureConverter);
	
	var _ViewportConverter = __webpack_require__(81);
	
	var _ViewportConverter2 = _interopRequireDefault(_ViewportConverter);
	
	var _DefaultPrimitives = __webpack_require__(83);
	
	var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);
	
	var _Geometry = __webpack_require__(50);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	var _GeometryBuilder = __webpack_require__(86);
	
	var _GeometryBuilder2 = _interopRequireDefault(_GeometryBuilder);
	
	var _GeometryFactory = __webpack_require__(29);
	
	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);
	
	var _GeometryUtility = __webpack_require__(85);
	
	var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);
	
	var _DefaultMacro = __webpack_require__(45);
	
	var _DefaultMacro2 = _interopRequireDefault(_DefaultMacro);
	
	var _DefaultMaterial = __webpack_require__(88);
	
	var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);
	
	var _MacroRegistory = __webpack_require__(44);
	
	var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);
	
	var _Material = __webpack_require__(46);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	var _MaterialFactory = __webpack_require__(37);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _Pass = __webpack_require__(48);
	
	var _Pass2 = _interopRequireDefault(_Pass);
	
	var _Technique = __webpack_require__(47);
	
	var _Technique2 = _interopRequireDefault(_Technique);
	
	var _TextureReference = __webpack_require__(80);
	
	var _TextureReference2 = _interopRequireDefault(_TextureReference);
	
	var _UniformResolverRegistry = __webpack_require__(51);
	
	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);
	
	var _MatricesRegister = __webpack_require__(90);
	
	var _MatricesRegister2 = _interopRequireDefault(_MatricesRegister);
	
	var _MiscRegister = __webpack_require__(91);
	
	var _MiscRegister2 = _interopRequireDefault(_MiscRegister);
	
	var _UserValueRegister = __webpack_require__(93);
	
	var _UserValueRegister2 = _interopRequireDefault(_UserValueRegister);
	
	var _Buffer = __webpack_require__(87);
	
	var _Buffer2 = _interopRequireDefault(_Buffer);
	
	var _FrameBuffer = __webpack_require__(66);
	
	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);
	
	var _GLExtRequestor = __webpack_require__(26);
	
	var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);
	
	var _Program = __webpack_require__(52);
	
	var _Program2 = _interopRequireDefault(_Program);
	
	var _RenderBuffer = __webpack_require__(60);
	
	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);
	
	var _ResourceBase = __webpack_require__(24);
	
	var _ResourceBase2 = _interopRequireDefault(_ResourceBase);
	
	var _ResourceCache = __webpack_require__(53);
	
	var _ResourceCache2 = _interopRequireDefault(_ResourceCache);
	
	var _Shader = __webpack_require__(49);
	
	var _Shader2 = _interopRequireDefault(_Shader);
	
	var _Texture2D = __webpack_require__(23);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _UniformProxy = __webpack_require__(54);
	
	var _UniformProxy2 = _interopRequireDefault(_UniformProxy);
	
	var _DrawPriorty = __webpack_require__(35);
	
	var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);
	
	var _RenderQueue = __webpack_require__(16);
	
	var _RenderQueue2 = _interopRequireDefault(_RenderQueue);
	
	var _RenderQueueRegistry = __webpack_require__(20);
	
	var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);
	
	var _ImportResolver = __webpack_require__(43);
	
	var _ImportResolver2 = _interopRequireDefault(_ImportResolver);
	
	var _NameSemanticsPair = __webpack_require__(42);
	
	var _NameSemanticsPair2 = _interopRequireDefault(_NameSemanticsPair);
	
	var _Parser = __webpack_require__(38);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _Preferences = __webpack_require__(40);
	
	var _Preferences2 = _interopRequireDefault(_Preferences);
	
	var _SortTransformUtility = __webpack_require__(39);
	
	var _SortTransformUtility2 = _interopRequireDefault(_SortTransformUtility);
	
	var _TypeToConstant = __webpack_require__(41);
	
	var _TypeToConstant2 = _interopRequireDefault(_TypeToConstant);
	
	var _TextureSizeCalculator = __webpack_require__(61);
	
	var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);
	
	var _main = __webpack_require__(94);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __EXPOSE__ = {
	    "Asset": {
	        "AssetLoader": _AssetLoader2.default,
	        "CacheResolver": _CacheResolver2.default,
	        "ExternalResourceResolver": _ExternalResourceResolver2.default,
	        "ImageResolver": _ImageResolver2.default,
	        "TextFileResolver": _TextFileResolver2.default
	    },
	    "Components": {
	        "AssetLoadingManagerComponent": _AssetLoadingManagerComponent2.default,
	        "CameraComponent": _CameraComponent2.default,
	        "CanvasInitializerComponent": _CanvasInitializerComponent2.default,
	        "FullscreenComponent": _FullscreenComponent2.default,
	        "GeometryComponent": _GeometryComponent2.default,
	        "GeometryRegistoryComponent": _GeometryRegistoryComponent2.default,
	        "HTMLBinderComponent": _HTMLBinderComponent2.default,
	        "LoopManagerComponent": _LoopManagerComponent2.default,
	        "MaterialComponent": _MaterialComponent2.default,
	        "MaterialContainerComponent": _MaterialContainerComponent2.default,
	        "MaterialImporterComponent": _MaterialImporterComponent2.default,
	        "MaterialManagerComponent": _MaterialManagerComponent2.default,
	        "MeshRendererComponent": _MeshRendererComponent2.default,
	        "MouseCameraControlComponent": _MouseCameraControlComponent2.default,
	        "RenderBufferComponent": _RenderBufferComponent2.default,
	        "RendererComponent": _RendererComponent2.default,
	        "RendererManagerComponent": _RendererManagerComponent2.default,
	        "RenderQuadComponent": _RenderQuadComponent2.default,
	        "RenderSceneComponent": _RenderSceneComponent2.default,
	        "SceneComponent": _SceneComponent2.default,
	        "TextureBufferComponent": _TextureBufferComponent2.default,
	        "TextureComponent": _TextureComponent2.default,
	        "TransformComponent": _TransformComponent2.default
	    },
	    "Converters": {
	        "CanvasSizeConverter": _CanvasSizeConverter2.default,
	        "ComponentConverter": _ComponentConverter2.default,
	        "EnumConverter": _EnumConverter2.default,
	        "GeometryConverter": _GeometryConverter2.default,
	        "MaterialConverter": _MaterialConverter2.default,
	        "NumberArrayConverter": _NumberArrayConverter2.default,
	        "NumberConverter": _NumberConverter2.default,
	        "ObjectConverter": _ObjectConverter2.default,
	        "TextureConverter": _TextureConverter2.default,
	        "ViewportConverter": _ViewportConverter2.default
	    },
	    "Geometry": {
	        "DefaultPrimitives": _DefaultPrimitives2.default,
	        "Geometry": _Geometry2.default,
	        "GeometryBuilder": _GeometryBuilder2.default,
	        "GeometryFactory": _GeometryFactory2.default,
	        "GeometryUtility": _GeometryUtility2.default
	    },
	    "Material": {
	        "DefaultMacro": _DefaultMacro2.default,
	        "DefaultMaterial": _DefaultMaterial2.default,
	        "MacroRegistory": _MacroRegistory2.default,
	        "Material": _Material2.default,
	        "MaterialFactory": _MaterialFactory2.default,
	        "Pass": _Pass2.default,
	        "Technique": _Technique2.default,
	        "TextureReference": _TextureReference2.default,
	        "UniformResolverRegistry": _UniformResolverRegistry2.default,
	        "Uniforms": {
	            "MatricesRegister": _MatricesRegister2.default,
	            "MiscRegister": _MiscRegister2.default,
	            "UserValueRegister": _UserValueRegister2.default
	        }
	    },
	    "Resource": {
	        "Buffer": _Buffer2.default,
	        "FrameBuffer": _FrameBuffer2.default,
	        "GLExtRequestor": _GLExtRequestor2.default,
	        "Program": _Program2.default,
	        "RenderBuffer": _RenderBuffer2.default,
	        "ResourceBase": _ResourceBase2.default,
	        "ResourceCache": _ResourceCache2.default,
	        "Shader": _Shader2.default,
	        "Texture2D": _Texture2D2.default,
	        "UniformProxy": _UniformProxy2.default
	    },
	    "SceneRenderer": {
	        "DrawPriorty": _DrawPriorty2.default,
	        "RenderQueue": _RenderQueue2.default,
	        "RenderQueueRegistry": _RenderQueueRegistry2.default
	    },
	    "Sort": {
	        "ImportResolver": _ImportResolver2.default,
	        "NameSemanticsPair": _NameSemanticsPair2.default,
	        "Parser": _Parser2.default,
	        "Preferences": _Preferences2.default,
	        "SortTransformUtility": _SortTransformUtility2.default,
	        "TypeToConstant": _TypeToConstant2.default
	    },
	    "Util": {
	        "TextureSizeCalculator": _TextureSizeCalculator2.default
	    }
	};
	var __BASE__ = (0, _main2.default)();
	Object.assign(__BASE__ || {}, __EXPOSE__);
	window["GrimoireJS"].lib.fundamental = __EXPOSE__;
	exports.default = __BASE__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EEObject2 = __webpack_require__(2);
	
	var _EEObject3 = _interopRequireDefault(_EEObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	                step(generator["throw"](value));
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
	
	/**
	 * Provides managing all promise on initializing resources.
	 */
	var AssetLoader = function (_EEObject) {
	    _inherits(AssetLoader, _EEObject);
	
	    function AssetLoader() {
	        _classCallCheck(this, AssetLoader);
	
	        /**
	         * Promise count registered.
	         * @type {number}
	         */
	        var _this = _possibleConstructorReturn(this, (AssetLoader.__proto__ || Object.getPrototypeOf(AssetLoader)).apply(this, arguments));
	
	        _this.registerCount = 0;
	        /**
	         * Promise count finished successfully.
	         * @type {number}
	         */
	        _this.loadCount = 0;
	        /**
	         * Promise count completed(success and errored)
	         * @type {number}
	         */
	        _this.completeCount = 0;
	        /**
	         * Promise count errored
	         * @type {number}
	         */
	        _this.errorCount = 0;
	        /**
	         * Main promise to provide tasks for waiting for all resource loading.
	         * @type {Promise<void>}
	         */
	        _this.promise = new Promise(function (resolve) {
	            _this._resolve = resolve;
	        });
	        return _this;
	    }
	    /**
	     * Register an promise to be waited until finished.
	     */
	
	
	    _createClass(AssetLoader, [{
	        key: "register",
	        value: function register(promise) {
	            var _this2 = this;
	
	            this.registerCount++;
	            return new Promise(function (resolve, reject) {
	                (function () {
	                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                        return regeneratorRuntime.wrap(function _callee$(_context) {
	                            while (1) {
	                                switch (_context.prev = _context.next) {
	                                    case 0:
	                                        _context.prev = 0;
	                                        _context.next = 3;
	                                        return promise;
	
	                                    case 3:
	                                        _context.t0 = _context.sent;
	                                        resolve(_context.t0);
	
	                                        this.loadCount++;
	                                        _context.next = 12;
	                                        break;
	
	                                    case 8:
	                                        _context.prev = 8;
	                                        _context.t1 = _context["catch"](0);
	
	                                        reject(_context.t1);
	                                        this.errorCount++;
	
	                                    case 12:
	                                        this.completeCount++;
	                                        this._checkLoadCompleted();
	
	                                    case 14:
	                                    case "end":
	                                        return _context.stop();
	                                }
	                            }
	                        }, _callee, this, [[0, 8]]);
	                    }));
	                }).bind(_this2)();
	            });
	        }
	        /**
	         * Verify all promises are completed.
	         */
	
	    }, {
	        key: "_checkLoadCompleted",
	        value: function _checkLoadCompleted() {
	            this.emit("progress", this);
	            if (this.registerCount === this.completeCount) {
	                this._resolve();
	            }
	        }
	    }]);
	
	    return AssetLoader;
	}(_EEObject3.default);
	
	exports.default = AssetLoader;

/***/ },
/* 2 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Base.EEObject;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	                step(generator["throw"](value));
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
	/**
	 * Resolve resources with caching.
	 */
	/**
	 * Resolve resources with caching.
	 */
	var CacheResolver = function () {
	    function CacheResolver(toAbsolute) {
	        _classCallCheck(this, CacheResolver);
	
	        this.toAbsolute = toAbsolute;
	        this.cache = {};
	        this.resolvers = {};
	    }
	
	    _createClass(CacheResolver, [{
	        key: "resolve",
	        value: function resolve(src, resolver) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var abs, result;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                abs = this.toAbsolute(src);
	
	                                if (!this._cached(abs)) {
	                                    _context.next = 5;
	                                    break;
	                                }
	
	                                return _context.abrupt("return", this.cache[abs]);
	
	                            case 5:
	                                if (!this._resolving(abs)) {
	                                    _context.next = 11;
	                                    break;
	                                }
	
	                                _context.next = 8;
	                                return this.resolvers[abs];
	
	                            case 8:
	                                return _context.abrupt("return", _context.sent);
	
	                            case 11:
	                                this.resolvers[abs] = resolver(abs);
	                                _context.next = 14;
	                                return this.resolvers[abs];
	
	                            case 14:
	                                result = _context.sent;
	
	                                this._resolved(abs, result);
	                                return _context.abrupt("return", result);
	
	                            case 17:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "_cached",
	        value: function _cached(abs) {
	            return typeof this.cache[abs] !== "undefined";
	        }
	    }, {
	        key: "_resolving",
	        value: function _resolving(abs) {
	            return typeof this.resolvers[abs] !== "undefined";
	        }
	    }, {
	        key: "_resolved",
	        value: function _resolved(abs, result) {
	            delete this.resolvers[abs];
	            this.cache[abs] = result;
	        }
	    }]);
	
	    return CacheResolver;
	}();
	
	exports.default = CacheResolver;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _CacheResolver2 = __webpack_require__(3);
	
	var _CacheResolver3 = _interopRequireDefault(_CacheResolver2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ExternalResourceResolver = function (_CacheResolver) {
	    _inherits(ExternalResourceResolver, _CacheResolver);
	
	    function ExternalResourceResolver() {
	        _classCallCheck(this, ExternalResourceResolver);
	
	        return _possibleConstructorReturn(this, (ExternalResourceResolver.__proto__ || Object.getPrototypeOf(ExternalResourceResolver)).call(this, ExternalResourceResolver._toAbsolute));
	    }
	
	    _createClass(ExternalResourceResolver, null, [{
	        key: "_toAbsolute",
	        value: function _toAbsolute(href) {
	            var link = document.createElement("a");
	            link.href = href;
	            return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
	        }
	    }]);
	
	    return ExternalResourceResolver;
	}(_CacheResolver3.default);
	
	exports.default = ExternalResourceResolver;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ImageResolver = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ExternalResourceResolver = __webpack_require__(4);
	
	var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImageResolver = exports.ImageResolver = function (_ExternalResourceReso) {
	    _inherits(ImageResolver, _ExternalResourceReso);
	
	    function ImageResolver() {
	        _classCallCheck(this, ImageResolver);
	
	        return _possibleConstructorReturn(this, (ImageResolver.__proto__ || Object.getPrototypeOf(ImageResolver)).apply(this, arguments));
	    }
	
	    _createClass(ImageResolver, [{
	        key: "resolve",
	        value: function resolve(path) {
	            return _get(ImageResolver.prototype.__proto__ || Object.getPrototypeOf(ImageResolver.prototype), "resolve", this).call(this, path, function (abs) {
	                return new Promise(function (resolve, reject) {
	                    var imgTag = new Image();
	                    imgTag.onload = function () {
	                        resolve(imgTag);
	                    };
	                    imgTag.onerror = function (e) {
	                        reject(e);
	                    };
	                    imgTag.src = abs;
	                });
	            });
	        }
	    }]);
	
	    return ImageResolver;
	}(_ExternalResourceResolver2.default);
	
	exports.default = new ImageResolver();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TextFileResolver = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ExternalResourceResolver = __webpack_require__(4);
	
	var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextFileResolver = exports.TextFileResolver = function (_ExternalResourceReso) {
	    _inherits(TextFileResolver, _ExternalResourceReso);
	
	    function TextFileResolver() {
	        _classCallCheck(this, TextFileResolver);
	
	        return _possibleConstructorReturn(this, (TextFileResolver.__proto__ || Object.getPrototypeOf(TextFileResolver)).apply(this, arguments));
	    }
	
	    _createClass(TextFileResolver, [{
	        key: "resolve",
	        value: function resolve(path) {
	            return _get(TextFileResolver.prototype.__proto__ || Object.getPrototypeOf(TextFileResolver.prototype), "resolve", this).call(this, path, function (abs) {
	                return new Promise(function (resolve, reject) {
	                    var xhr = new XMLHttpRequest();
	                    xhr.open("GET", abs);
	                    xhr.onload = function (v) {
	                        resolve(xhr.responseText);
	                    };
	                    xhr.onerror = function (e) {
	                        reject(e);
	                    };
	                    xhr.send();
	                });
	            });
	        }
	    }]);
	
	    return TextFileResolver;
	}(_ExternalResourceResolver2.default);
	
	exports.default = new TextFileResolver();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _grimoirejs = __webpack_require__(8);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _AssetLoader = __webpack_require__(1);
	
	var _AssetLoader2 = _interopRequireDefault(_AssetLoader);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _defaultLoader = __webpack_require__(10);
	
	var _defaultLoader2 = _interopRequireDefault(_defaultLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	                step(generator["throw"](value));
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
	
	var AssetLoadingManagerComponent = function (_Component) {
	    _inherits(AssetLoadingManagerComponent, _Component);
	
	    function AssetLoadingManagerComponent() {
	        _classCallCheck(this, AssetLoadingManagerComponent);
	
	        var _this = _possibleConstructorReturn(this, (AssetLoadingManagerComponent.__proto__ || Object.getPrototypeOf(AssetLoadingManagerComponent)).apply(this, arguments));
	
	        _this.loader = new _AssetLoader2.default();
	        return _this;
	    }
	
	    _createClass(AssetLoadingManagerComponent, [{
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            if (this.getAttribute("autoStart")) {
	                this._autoStart();
	            }
	            this._documentResolver();
	        }
	    }, {
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;
	
	            this.companion.set(_grimoirejs2.default.ns(this.name.ns)("loader"), this.loader);
	            this.loader.register(new Promise(function (resolve) {
	                _this2._documentResolver = resolve;
	            }));
	            var canvasContainer = this.companion.get("canvasContainer");
	            if (!this.getAttribute("enableLoader")) {
	                return;
	            }
	            var loaderContainer = document.createElement("div");
	            loaderContainer.innerHTML = _defaultLoader2.default;
	            loaderContainer.style.width = loaderContainer.style.height = "100%";
	            canvasContainer.appendChild(loaderContainer);
	            this._loaderElement = loaderContainer;
	        }
	    }, {
	        key: "_autoStart",
	        value: function _autoStart() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return this.loader.promise;
	
	                            case 2:
	                                if (this._loaderElement) {
	                                    this._loaderElement.remove();
	                                }
	                                this.node.emit("asset-load-completed");
	                                this.tree("goml").setAttribute("loopEnabled", true);
	
	                            case 5:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }]);
	
	    return AssetLoadingManagerComponent;
	}(_Component3.default);
	
	exports.default = AssetLoadingManagerComponent;
	
	AssetLoadingManagerComponent.attributes = {
	    loadingProgress: {
	        default: 0,
	        converter: "Number"
	    },
	    autoStart: {
	        default: true,
	        converter: "Boolean"
	    },
	    enableLoader: {
	        default: true,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS;

/***/ },
/* 9 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.Component;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div style=\"width:100%;height:100%;position: relative;\">\n    <div style=\"width: 55px;height: 55px;border-radius: 100%;border: 5px solid #381794;border-right-color: #FC659D;animation: rotate 1s linear infinite;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;\"></div>\n</div>\n<style type=\"text/css\">\n    @keyframes rotate {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GLM = __webpack_require__(12);
	
	var _GLM2 = _interopRequireDefault(_GLM);
	
	var _Vector = __webpack_require__(13);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Vector3 = __webpack_require__(14);
	
	var _Vector4 = _interopRequireDefault(_Vector3);
	
	var _Matrix = __webpack_require__(15);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _RenderQueue = __webpack_require__(16);
	
	var _RenderQueue2 = _interopRequireDefault(_RenderQueue);
	
	var _TransformComponent = __webpack_require__(17);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _SceneComponent = __webpack_require__(19);
	
	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var vec3 = _GLM2.default.vec3,
	    vec4 = _GLM2.default.vec4,
	    mat4 = _GLM2.default.mat4;
	
	var CameraComponent = function (_Component) {
	    _inherits(CameraComponent, _Component);
	
	    function CameraComponent() {
	        _classCallCheck(this, CameraComponent);
	
	        var _this = _possibleConstructorReturn(this, (CameraComponent.__proto__ || Object.getPrototypeOf(CameraComponent)).apply(this, arguments));
	
	        _this._renderQueue = new _RenderQueue2.default();
	        _this._eyeCache = _Vector4.default.Zero;
	        _this._lookAtCache = _Vector4.default.Zero;
	        _this._upCache = _Vector4.default.Zero;
	        _this.__viewMatrix = new _Matrix2.default();
	        _this.__projectionMatrix = new _Matrix2.default();
	        _this.__invProjectionMatrix = new _Matrix2.default();
	        _this.__projectionViewMatrix = new _Matrix2.default();
	        _this._orthographic = false;
	        return _this;
	    }
	
	    _createClass(CameraComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;
	
	            this.transform = this.node.getComponent(_TransformComponent2.default);
	            this.updateTransform(this.transform);
	            this.getAttributeRaw("far").watch(function (v) {
	                _this2.Far = v;
	            }, true);
	            this.getAttributeRaw("near").watch(function (v) {
	                _this2.Near = v;
	            }, true);
	            this.getAttributeRaw("fovy").watch(function (v) {
	                _this2.Fovy = v;
	            }, true);
	            this.getAttributeRaw("aspect").watch(function (v) {
	                _this2.Aspect = v;
	            }, true);
	            this.getAttributeRaw("orthoSize").watch(function (v) {
	                _this2.OrthoSize = v;
	            }, true);
	            this.getAttributeRaw("orthogonal").watch(function (v) {
	                _this2.OrthographicMode = v;
	            }, true);
	            this.getAttributeRaw("autoAspect").boundTo("_autoAspect");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.containedScene = CameraComponent._findContainedScene(this.node);
	            this.containedScene.queueRegistory.registerQueue(this._renderQueue);
	            this.node.on("transformUpdated", this.updateTransform.bind(this));
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            this.containedScene.queueRegistory.unregisterQueue(this._renderQueue);
	            this.containedScene = null;
	        }
	    }, {
	        key: "updateContainedScene",
	        value: function updateContainedScene(loopIndex) {
	            if (this.containedScene) {
	                this.containedScene.updateScene(loopIndex);
	            }
	        }
	    }, {
	        key: "renderScene",
	        value: function renderScene(args) {
	            if (this.containedScene) {
	                this._justifyAspect(args);
	                args.sceneDescription = this.containedScene.sceneDescription;
	                args.defaultTexture = this.companion.get("defaultTexture");
	                this._renderQueue.renderAll(args, true, args.loopIndex);
	            }
	        }
	    }, {
	        key: "_justifyAspect",
	        value: function _justifyAspect(args) {
	            if (this._autoAspect) {
	                var asp = args.viewport.Width / args.viewport.Height;
	                if (this._aspectCache !== asp) {
	                    this.setAttribute("aspect", asp);
	                    this._aspectCache = asp;
	                }
	            }
	        }
	    }, {
	        key: "updateTransform",
	        value: function updateTransform(transform) {
	            vec3.transformMat4(this._eyeCache.rawElements, _Vector4.default.Zero.rawElements, transform.globalTransform.rawElements);
	            vec4.transformMat4(this._lookAtCache.rawElements, CameraComponent._frontOrigin.rawElements, transform.globalTransform.rawElements);
	            vec3.add(this._lookAtCache.rawElements, this._lookAtCache.rawElements, this._eyeCache.rawElements);
	            vec4.transformMat4(this._upCache.rawElements, CameraComponent._upOrigin.rawElements, transform.globalTransform.rawElements);
	            mat4.lookAt(this.__viewMatrix.rawElements, this._eyeCache.rawElements, this._lookAtCache.rawElements, this._upCache.rawElements);
	            mat4.mul(this.__projectionViewMatrix.rawElements, this.__projectionMatrix.rawElements, this.__viewMatrix.rawElements);
	        }
	    }, {
	        key: "_recalculateProjection",
	        value: function _recalculateProjection() {
	            if (!this._orthographic) {
	                mat4.perspective(this.__projectionMatrix.rawElements, this._fovy, this._aspect, this._near, this._far);
	            } else {
	                mat4.ortho(this.__projectionMatrix.rawElements, -this._orthoSize * this._aspect, this._orthoSize * this._aspect, -this._orthoSize, this._orthoSize, this._near, this._far);
	            }
	            mat4.mul(this.__projectionViewMatrix.rawElements, this.__projectionMatrix.rawElements, this.__viewMatrix.rawElements);
	            mat4.invert(this.__invProjectionMatrix.rawElements, this.__projectionMatrix.rawElements);
	        }
	    }, {
	        key: "ViewMatrix",
	        get: function get() {
	            return this.__viewMatrix;
	        }
	    }, {
	        key: "ProjectionMatrix",
	        get: function get() {
	            return this.__projectionMatrix;
	        }
	    }, {
	        key: "InvProjectionMatrix",
	        get: function get() {
	            return this.__invProjectionMatrix;
	        }
	    }, {
	        key: "ProjectionViewMatrix",
	        get: function get() {
	            return this.__projectionViewMatrix;
	        }
	    }, {
	        key: "Far",
	        get: function get() {
	            return this._far;
	        },
	        set: function set(far) {
	            this._far = far;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "Near",
	        get: function get() {
	            return this._near;
	        },
	        set: function set(near) {
	            this._near = near;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "Aspect",
	        get: function get() {
	            return this._aspect;
	        },
	        set: function set(aspect) {
	            this._aspect = aspect;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "Fovy",
	        get: function get() {
	            return this._fovy;
	        },
	        set: function set(fov) {
	            this._fovy = fov;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "OrthoSize",
	        get: function get() {
	            return this._orthoSize;
	        },
	        set: function set(size) {
	            this._orthoSize = size;
	        }
	    }, {
	        key: "OrthographicMode",
	        set: function set(isOrtho) {
	            this._orthographic = isOrtho;
	            this._recalculateProjection();
	        },
	        get: function get() {
	            return this._orthographic;
	        }
	        /**
	        * Find scene tag recursively.
	        * @param  {GomlNode}       node [the node to searching currently]
	        * @return {SceneComponent}      [the scene component found]
	        */
	
	    }], [{
	        key: "_findContainedScene",
	        value: function _findContainedScene(node) {
	            if (node.parent) {
	                var scene = node.parent.getComponent(_SceneComponent2.default);
	                if (scene) {
	                    return scene;
	                } else {
	                    return CameraComponent._findContainedScene(node.parent);
	                }
	            } else {
	                return null;
	            }
	        }
	    }]);
	
	    return CameraComponent;
	}(_Component3.default);
	
	exports.default = CameraComponent;
	
	CameraComponent._frontOrigin = new _Vector2.default(0, 0, -1, 0);
	CameraComponent._upOrigin = new _Vector2.default(0, 1, 0, 0);
	CameraComponent.attributes = {
	    fovy: {
	        default: "45d",
	        converter: "Angle2D"
	    },
	    near: {
	        default: 0.01,
	        converter: "Number"
	    },
	    far: {
	        default: 100,
	        converter: "Number"
	    },
	    aspect: {
	        default: 1.6,
	        converter: "Number"
	    },
	    autoAspect: {
	        default: true,
	        converter: "Boolean"
	    },
	    orthoSize: {
	        default: 100,
	        converter: "Number"
	    },
	    orthogonal: {
	        default: false,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.GLM;

/***/ },
/* 13 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector4;

/***/ },
/* 14 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ },
/* 15 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RenderQueue = function () {
	    function RenderQueue() {
	        _classCallCheck(this, RenderQueue);
	
	        this._rendeables = [];
	    }
	
	    _createClass(RenderQueue, [{
	        key: "add",
	        value: function add(rendarable) {
	            this._rendeables.push({
	                rendarable: rendarable,
	                priortyCache: Number.MIN_VALUE
	            });
	        }
	    }, {
	        key: "remove",
	        value: function remove(rendarable) {
	            var index = 0;
	            for (; index < this._rendeables.length; index++) {
	                var r = this._rendeables[index];
	                if (r.rendarable.id === rendarable.id) {
	                    break;
	                }
	            }
	            if (this._rendeables.length !== index) {
	                this._rendeables.splice(index, 1);
	            }
	        }
	    }, {
	        key: "renderAll",
	        value: function renderAll(args, cameraMoved, frameNumber) {
	            for (var i = 0; i < this._rendeables.length; i++) {
	                this._rendeables[i].priortyCache = this._rendeables[i].rendarable.getRenderingPriorty(args.camera, cameraMoved, this._rendeables[i].priortyCache);
	            }
	            this._rendeables.sort(function (a, b) {
	                return a.priortyCache - b.priortyCache;
	            });
	            this._rendeables.forEach(function (r) {
	                r.rendarable.render(args);
	            });
	        }
	    }]);
	
	    return RenderQueue;
	}();
	
	exports.default = RenderQueue;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Matrix = __webpack_require__(15);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _Vector = __webpack_require__(14);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Vector3 = __webpack_require__(13);
	
	var _Vector4 = _interopRequireDefault(_Vector3);
	
	var _Quaternion = __webpack_require__(18);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _GLM = __webpack_require__(12);
	
	var _GLM2 = _interopRequireDefault(_GLM);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mat4 = _GLM2.default.mat4,
	    vec3 = _GLM2.default.vec3,
	    vec4 = _GLM2.default.vec4;
	/**
	 * Provides object transformation like translation,rotation,scaling.
	 */
	
	var TransformComponent = function (_Component) {
	    _inherits(TransformComponent, _Component);
	
	    function TransformComponent() {
	        _classCallCheck(this, TransformComponent);
	
	        /**
	         * Local transform matrix representing scaling,rotation and translation of attached object.
	         * @return {[type]} [description]
	         */
	        var _this = _possibleConstructorReturn(this, (TransformComponent.__proto__ || Object.getPrototypeOf(TransformComponent)).apply(this, arguments));
	
	        _this.localTransform = new _Matrix2.default();
	        /**
	         * Global transform that consider parent transform and local transform
	         * @return {[type]} [description]
	         */
	        _this.globalTransform = new _Matrix2.default();
	        /**
	         * The children transform should be notified when this transform was updated.
	         * @type {TransformComponent[]}
	         */
	        _this._children = [];
	        /**
	         * Calculation cache to
	         * @return {[type]} [description]
	         */
	        _this._cachePVM = new _Matrix2.default();
	        _this._cacheVM = new _Matrix2.default();
	        /**
	         * Cache of forward direction of this object
	         */
	        _this._forward = new _Vector2.default([0, 0, -1, 0]);
	        /**
	         * Cache of up direction of this object.
	         */
	        _this._up = new _Vector2.default([0, 1, 0, 0]);
	        /**
	         * Cache of right direction of this object.
	         */
	        _this._right = new _Vector2.default([1, 0, 0, 0]);
	        _this._globalPosition = new _Vector2.default([0, 0, 0]);
	        _this._globalScale = new _Vector2.default([1, 1, 1]);
	        _this._matrixTransformMode = false;
	        return _this;
	    }
	
	    _createClass(TransformComponent, [{
	        key: "calcPVM",
	        value: function calcPVM(camera) {
	            mat4.mul(this._cachePVM.rawElements, camera.ProjectionViewMatrix.rawElements, this.globalTransform.rawElements);
	            return this._cachePVM;
	        }
	    }, {
	        key: "calcVM",
	        value: function calcVM(camera) {
	            mat4.mul(this._cacheVM.rawElements, camera.ViewMatrix.rawElements, this.globalTransform.rawElements);
	            return this._cacheVM;
	        }
	    }, {
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;
	
	            // register observers
	            this.getAttributeRaw("position").watch(function (v) {
	                _this2._localPosition = v;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform(true);
	            });
	            this.getAttributeRaw("rotation").watch(function (v) {
	                _this2._localRotation = v;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform();
	            });
	            this.getAttributeRaw("scale").watch(function (v) {
	                _this2._localScale = v;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform(true);
	            });
	            this.getAttributeRaw("rawMatrix").watch(function (v) {
	                if (v !== null) {
	                    var mat = v;
	                    _this2._matrixTransformMode = true;
	                    // TODO should be addded?
	                    // mat4.getTranslation(this._localPosition.rawElements, mat.rawElements);
	                    // mat4.getScaling(this._localScale.rawElements, mat.rawElements);
	                    // mat4.getRotation(this._localRotation.rawElements, mat.rawElements);
	                    _this2.localTransform = mat;
	                    _this2.updateGlobalTransform();
	                }
	            });
	            // assign attribute values to field
	            this._localPosition = this.getAttribute("position");
	            this._localRotation = this.getAttribute("rotation");
	            this._localScale = this.getAttribute("scale");
	            this.updateTransform();
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._parentTransform = this.node.parent.getComponent(TransformComponent);
	            if (this._parentTransform) {
	                this._parentTransform._children.push(this);
	            }
	            this.updateTransform();
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            if (this._parentTransform) {
	                this._parentTransform._children.splice(this._parentTransform._children.indexOf(this), 1);
	                this._parentTransform = null;
	            }
	        }
	        /**
	         * update local transform and global transform.
	         * This need to be called if you manually edit raw elements of scale,position or rotation to recalculate transform matricies.
	         */
	
	    }, {
	        key: "updateTransform",
	        value: function updateTransform(noDirectionalUpdate) {
	            if (!this._matrixTransformMode) {
	                mat4.fromRotationTranslationScale(this.localTransform.rawElements, this._localRotation.rawElements, this._localPosition.rawElements, this._localScale.rawElements);
	            }
	            this.updateGlobalTransform(noDirectionalUpdate);
	        }
	        /**
	         * Update global transoform.
	         */
	
	    }, {
	        key: "updateGlobalTransform",
	        value: function updateGlobalTransform(noDirectionalUpdate) {
	            if (!this._parentTransform) {
	                mat4.copy(this.globalTransform.rawElements, this.localTransform.rawElements);
	            } else {
	                mat4.mul(this.globalTransform.rawElements, this._parentTransform.globalTransform.rawElements, this.localTransform.rawElements);
	            }
	            if (noDirectionalUpdate) {
	                this._updateDirections();
	            }
	            this._updateGlobalProperty();
	            this.node.emit("transformUpdated", this);
	            this._children.forEach(function (v) {
	                return v.updateGlobalTransform(noDirectionalUpdate);
	            });
	        }
	    }, {
	        key: "_updateDirections",
	        value: function _updateDirections() {
	            vec4.transformMat4(this._forward.rawElements, TransformComponent._forwardBase.rawElements, this.globalTransform.rawElements);
	            vec4.transformMat4(this._up.rawElements, TransformComponent._upBase.rawElements, this.globalTransform.rawElements);
	            vec4.transformMat4(this._right.rawElements, TransformComponent._rightBase.rawElements, this.globalTransform.rawElements);
	        }
	    }, {
	        key: "_updateGlobalProperty",
	        value: function _updateGlobalProperty() {
	            if (!this._parentTransform) {
	                vec3.copy(this._globalPosition.rawElements, this._localPosition.rawElements);
	                vec3.copy(this._globalScale.rawElements, this._localScale.rawElements);
	            } else {
	                vec3.transformMat4(this._globalPosition.rawElements, this._localPosition.rawElements, this._parentTransform.globalTransform.rawElements);
	                vec3.transformMat4(this._globalScale.rawElements, this._localScale.rawElements, this._parentTransform.globalTransform.rawElements); // TODO buggy
	            }
	        }
	    }, {
	        key: "globalPosition",
	        get: function get() {
	            return this._globalPosition;
	        }
	    }, {
	        key: "localPosition",
	        get: function get() {
	            return this._localPosition;
	        },
	        set: function set(val) {
	            this._localPosition = val;
	            this.setAttribute("position", val);
	        }
	    }, {
	        key: "localRotation",
	        get: function get() {
	            return this._localRotation;
	        },
	        set: function set(val) {
	            this._localRotation = val;
	            this.setAttribute("rotation", val);
	        }
	    }, {
	        key: "globalScale",
	        get: function get() {
	            return this._globalScale;
	        }
	    }, {
	        key: "localScale",
	        get: function get() {
	            return this._localScale;
	        },
	        set: function set(val) {
	            this._localScale = val;
	            this.setAttribute("scale", val);
	        }
	    }, {
	        key: "forward",
	        get: function get() {
	            return this._forward;
	        }
	    }, {
	        key: "up",
	        get: function get() {
	            return this._up;
	        }
	    }, {
	        key: "right",
	        get: function get() {
	            return this._right;
	        }
	    }]);
	
	    return TransformComponent;
	}(_Component3.default);
	
	exports.default = TransformComponent;
	
	TransformComponent.attributes = {
	    "position": {
	        converter: "Vector3",
	        default: _Vector2.default.Zero
	    },
	    "rotation": {
	        converter: "Rotation3",
	        default: _Quaternion2.default.Identity
	    },
	    "scale": {
	        converter: "Vector3",
	        default: _Vector2.default.One
	    },
	    "rawMatrix": {
	        converter: "Object",
	        default: null
	    }
	};
	/**
	 * Source vector to be multiplied with global transform to calculate forward direction of attached object.
	 */
	TransformComponent._forwardBase = new _Vector4.default(0, 0, -1, 0);
	/**
	 * Source vector to be multiplied with global transform to calculate up direction of attached object.
	 */
	TransformComponent._upBase = new _Vector4.default(0, 1, 0, 0);
	/**
	 * Source vector to be multiplied with global transform to calculate right direction of attached object.
	 */
	TransformComponent._rightBase = new _Vector4.default(1, 0, 0, 0);

/***/ },
/* 18 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Quaternion;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RenderQueueRegistry = __webpack_require__(20);
	
	var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SceneComponent = function (_Component) {
	    _inherits(SceneComponent, _Component);
	
	    function SceneComponent() {
	        _classCallCheck(this, SceneComponent);
	
	        var _this = _possibleConstructorReturn(this, (SceneComponent.__proto__ || Object.getPrototypeOf(SceneComponent)).apply(this, arguments));
	
	        _this.sceneDescription = {};
	        _this.queueRegistory = new _RenderQueueRegistry2.default();
	        return _this;
	    }
	    /**
	     * Notify update scene only when send update message is needed.
	     * @param {number} loopIndex [description]
	     */
	
	
	    _createClass(SceneComponent, [{
	        key: "updateScene",
	        value: function updateScene(loopIndex) {
	            if (this._lastUpdateIndex !== loopIndex) {
	                this.node.broadcastMessage("update", this.sceneDescription);
	                this._lastUpdateIndex = loopIndex;
	            }
	        }
	    }]);
	
	    return SceneComponent;
	}(_Component3.default);
	
	exports.default = SceneComponent;
	
	SceneComponent.attributes = {};

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RenderQueueRegistry = function () {
	    function RenderQueueRegistry() {
	        _classCallCheck(this, RenderQueueRegistry);
	
	        this._queues = [];
	        this._renderables = [];
	    }
	
	    _createClass(RenderQueueRegistry, [{
	        key: "registerQueue",
	        value: function registerQueue(queue) {
	            this._queues.push(queue);
	            this._renderables.forEach(function (r) {
	                return queue.add(r);
	            });
	        }
	    }, {
	        key: "unregisterQueue",
	        value: function unregisterQueue(queue) {
	            var index = this._queues.indexOf(queue);
	            if (index > -1) {
	                this._queues.splice(index, 1);
	            }
	        }
	    }, {
	        key: "addRenderable",
	        value: function addRenderable(rendarable) {
	            this._renderables.push(rendarable);
	            this._queues.forEach(function (q) {
	                return q.add(rendarable);
	            });
	        }
	    }, {
	        key: "removeRenderable",
	        value: function removeRenderable(renderable) {
	            var index = this._renderables.indexOf(renderable);
	            if (index === -1) {
	                return; // Could not find specified renderable
	            }
	            this._renderables.splice(index, 1);
	            this._queues.forEach(function (q) {
	                return q.remove(renderable);
	            });
	        }
	    }]);
	
	    return RenderQueueRegistry;
	}();
	
	exports.default = RenderQueueRegistry;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GrimoireInterface = __webpack_require__(22);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _Texture2D = __webpack_require__(23);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _GLExtRequestor = __webpack_require__(26);
	
	var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ns = _GrimoireInterface2.default.ns("HTTP://GRIMOIRE.GL/NS/DEFAULT");
	var ResizeMode;
	(function (ResizeMode) {
	    ResizeMode[ResizeMode["Aspect"] = 0] = "Aspect";
	    ResizeMode[ResizeMode["Fit"] = 1] = "Fit";
	    ResizeMode[ResizeMode["Manual"] = 2] = "Manual";
	})(ResizeMode || (ResizeMode = {}));
	
	var CanvasInitializerComponent = function (_Component) {
	    _inherits(CanvasInitializerComponent, _Component);
	
	    function CanvasInitializerComponent() {
	        _classCallCheck(this, CanvasInitializerComponent);
	
	        return _possibleConstructorReturn(this, (CanvasInitializerComponent.__proto__ || Object.getPrototypeOf(CanvasInitializerComponent)).apply(this, arguments));
	    }
	
	    _createClass(CanvasInitializerComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;
	
	            this._scriptTag = this.companion.get("scriptElement");
	            if (this._isContainedInBody(this._scriptTag)) {
	                // canvas should be placed siblings of the script tag
	                this._generateCanvas(this._scriptTag);
	            } else {
	                throw new Error("goml script should have body as ancesotor to instanciate canvas element in the location");
	            }
	            // apply sizes on changed
	            this.getAttributeRaw("width").watch(function (v) {
	                _this2._resize();
	            });
	            this.getAttributeRaw("height").watch(function (v) {
	                _this2._resize();
	            });
	        }
	        /**
	         * Generate canvas element
	         * @param  {Element}           parent [description]
	         * @return {HTMLCanvasElement}        [description]
	         */
	
	    }, {
	        key: "_generateCanvas",
	        value: function _generateCanvas(scriptTag) {
	            var _this3 = this;
	
	            this._autoFixForBody(scriptTag);
	            this.canvas = document.createElement("canvas");
	            window.addEventListener("resize", function () {
	                return _this3._onWindowResize();
	            });
	            this._configureCanvas(this.canvas, scriptTag);
	            var gl = this._getContext(this.canvas);
	            this._defaultTexture = new _Texture2D2.default(gl);
	            this._defaultTexture.update(0, 1, 1, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
	            this.companion.set(ns("gl"), gl);
	            this.companion.set(ns("canvasElement"), this.canvas);
	            this.companion.set(ns("GLExtRequestor"), new _GLExtRequestor2.default(gl));
	            this.companion.set(ns("defaultTexture"), this._defaultTexture);
	            return this.canvas;
	        }
	    }, {
	        key: "_resize",
	        value: function _resize(supressBroadcast) {
	            var canvas = this.companion.get("canvasElement");
	            var widthRaw = this.getAttribute("width");
	            var heightRaw = this.getAttribute("height");
	            this._widthMode = this._asResizeMode(widthRaw);
	            this._heightMode = this._asResizeMode(heightRaw);
	            if (this._widthMode === this._heightMode && this._widthMode === ResizeMode.Aspect) {
	                throw new Error("Width and height could not have aspect mode in same time!");
	            }
	            if (this._widthMode === ResizeMode.Aspect) {
	                this._ratio = widthRaw.aspect;
	            }
	            if (this._heightMode === ResizeMode.Aspect) {
	                this._ratio = heightRaw.aspect;
	            }
	            if (this._widthMode === ResizeMode.Manual) {
	                this._applyManualWidth(widthRaw.size, supressBroadcast);
	            }
	            if (this._heightMode === ResizeMode.Manual) {
	                this._applyManualHeight(heightRaw.size, supressBroadcast);
	            }
	            this._onWindowResize(supressBroadcast);
	        }
	    }, {
	        key: "_onWindowResize",
	        value: function _onWindowResize(supressBroadcast) {
	            var size = this._getParentSize();
	            if (this._widthMode === ResizeMode.Fit) {
	                this._applyManualWidth(size.width, supressBroadcast);
	            }
	            if (this._heightMode === ResizeMode.Fit) {
	                if (size.height === 0 && _GrimoireInterface2.default.debug) {
	                    console.warn("Canvas height parameter specified as fit and height of parent element is 0.\n This is possibly the reason you haven't set css to html or body element.");
	                }
	                this._applyManualHeight(size.height, supressBroadcast);
	            }
	        }
	    }, {
	        key: "_applyManualWidth",
	        value: function _applyManualWidth(width, supressBroadcast) {
	            if (width === this.canvas.width) {
	                return;
	            }
	            this.canvas.width = width;
	            this._canvasContainer.style.width = width + "px";
	            if (!supressBroadcast) {
	                this.node.broadcastMessage(1, "resizeCanvas");
	            }
	            if (this._heightMode === ResizeMode.Aspect) {
	                this._applyManualHeight(width / this._ratio, supressBroadcast);
	            }
	        }
	    }, {
	        key: "_applyManualHeight",
	        value: function _applyManualHeight(height, supressBroadcast) {
	            if (height === this.canvas.height) {
	                return;
	            }
	            this.canvas.height = height;
	            this._canvasContainer.style.height = height + "px";
	            if (!supressBroadcast) {
	                this.node.broadcastMessage(1, "resizeCanvas");
	            }
	            if (this._widthMode === ResizeMode.Aspect) {
	                this._applyManualWidth(height * this._ratio, supressBroadcast);
	            }
	        }
	    }, {
	        key: "_getParentSize",
	        value: function _getParentSize() {
	            var parent = this._canvasContainer.parentElement;
	            var boundingBox = parent.getBoundingClientRect();
	            return boundingBox;
	        }
	        /**
	         * Get resize mode from raw attribute of height or width
	         * @param  {string  | number}      mode [description]
	         * @return {ResizeMode}   [description]
	         */
	
	    }, {
	        key: "_asResizeMode",
	        value: function _asResizeMode(cso) {
	            if (cso.mode === "fit") {
	                return ResizeMode.Fit;
	            } else if (cso.mode === "aspect") {
	                return ResizeMode.Aspect;
	            } else {
	                return ResizeMode.Manual;
	            }
	        }
	    }, {
	        key: "_configureCanvas",
	        value: function _configureCanvas(canvas, scriptTag) {
	            canvas.style.position = "absolute";
	            canvas.style.top = "0px";
	            canvas.style.left = "0px";
	            this._canvasContainer = document.createElement("div");
	            this._canvasContainer.style.position = "relative";
	            this._canvasContainer.style.overflow = "hidden";
	            this._canvasContainer.appendChild(canvas);
	            if (this.getAttribute("containerId")) {
	                this._canvasContainer.id = this.getAttribute("containerId");
	            }
	            if (this.getAttribute("containerClass")) {
	                this._canvasContainer.className = this.getAttribute("containerClass");
	            }
	            this.companion.set(ns("canvasContainer"), this._canvasContainer);
	            scriptTag.parentElement.insertBefore(this._canvasContainer, scriptTag.nextSibling);
	            this._resize(true);
	        }
	    }, {
	        key: "_getContext",
	        value: function _getContext(canvas) {
	            var context = canvas.getContext("webgl");
	            if (!context) {
	                context = canvas.getContext("webgl-experimental");
	            }
	            return context;
	        }
	        /**
	         * Check the tag is included in the body
	         * @param  {Element} tag [description]
	         * @return {boolean}     [description]
	         */
	
	    }, {
	        key: "_isContainedInBody",
	        value: function _isContainedInBody(tag) {
	            if (!tag.parentElement) {
	                return false;
	            }
	            if (tag.parentNode.nodeName === "BODY") {
	                return true;
	            }
	            return this._isContainedInBody(tag.parentElement);
	        }
	    }, {
	        key: "_autoFixForBody",
	        value: function _autoFixForBody(scriptTag) {
	            if (scriptTag.parentElement.nodeName === "BODY") {
	                var boudningBox = document.body.getBoundingClientRect();
	                if (boudningBox.height === 0) {
	                    document.body.style.height = "100%";
	                    document.body.parentElement.style.height = "100%";
	                }
	            }
	        }
	    }]);
	
	    return CanvasInitializerComponent;
	}(_Component3.default);
	
	CanvasInitializerComponent.attributes = {
	    width: {
	        default: "fit",
	        converter: "CanvasSize"
	    },
	    height: {
	        default: "fit",
	        converter: "CanvasSize"
	    },
	    containerId: {
	        default: "",
	        converter: "String"
	    },
	    containerClass: {
	        default: "gr-container",
	        converter: "String"
	    }
	};
	exports.default = CanvasInitializerComponent;

/***/ },
/* 22 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.GrimoireInterface;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceBase2 = __webpack_require__(24);
	
	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Texture2D = function (_ResourceBase) {
	    _inherits(Texture2D, _ResourceBase);
	
	    function Texture2D(gl) {
	        _classCallCheck(this, Texture2D);
	
	        var _this = _possibleConstructorReturn(this, (Texture2D.__proto__ || Object.getPrototypeOf(Texture2D)).call(this, gl));
	
	        _this._texParameterChanged = true;
	        _this._magFilter = WebGLRenderingContext.LINEAR;
	        _this._minFilter = WebGLRenderingContext.LINEAR;
	        _this._wrapS = WebGLRenderingContext.REPEAT;
	        _this._wrapT = WebGLRenderingContext.REPEAT;
	        if (!Texture2D._maxTextureSize) {
	            Texture2D._maxTextureSize = gl.getParameter(WebGLRenderingContext.MAX_TEXTURE_SIZE);
	        }
	        _this.texture = gl.createTexture();
	        return _this;
	    }
	
	    _createClass(Texture2D, [{
	        key: "update",
	        value: function update(levelOrImage, widthOrConfig, height, border, format, type, pixels, config) {
	            this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.texture);
	            var uploadConfig = void 0;
	            var image = void 0;
	            var width = void 0;
	            var level = void 0;
	            if (height === void 0) {
	                uploadConfig = widthOrConfig || {
	                    flipY: false,
	                    premultipliedAlpha: false
	                };
	                image = levelOrImage;
	            } else {
	                level = levelOrImage;
	                width = widthOrConfig;
	                uploadConfig = config || {
	                    flipY: false,
	                    premultipliedAlpha: false
	                };
	            }
	            if (uploadConfig.flipY === void 0) {
	                uploadConfig.flipY = false;
	            }
	            if (uploadConfig.premultipliedAlpha === void 0) {
	                uploadConfig.premultipliedAlpha = false;
	            }
	            this.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, uploadConfig.flipY ? 1 : 0);
	            this.gl.pixelStorei(WebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL, uploadConfig.premultipliedAlpha ? 1 : 0);
	            if (height === void 0) {
	                if (image instanceof HTMLImageElement) {
	                    this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._justifyImage(image));
	                } else if (image instanceof HTMLCanvasElement) {
	                    this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._justifyCanvas(image));
	                } else if (image instanceof HTMLVideoElement) {
	                    this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._justifyVideo(image));
	                }
	            } else {
	                if (pixels === void 0) {
	                    pixels = null;
	                }
	                this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, level, format, width, height, border, format, type, pixels);
	            }
	            this._ensureMipmap();
	            this.valid = true;
	        }
	    }, {
	        key: "register",
	        value: function register(registerNumber) {
	            this.gl.activeTexture(WebGLRenderingContext.TEXTURE0 + registerNumber);
	            this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.texture);
	            if (this._texParameterChanged) {
	                this._updateTexParameter();
	            }
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Texture2D.prototype.__proto__ || Object.getPrototypeOf(Texture2D.prototype), "destroy", this).call(this);
	            this.gl.deleteTexture(this.texture);
	        }
	        // There should be more effective way to resize texture
	
	    }, {
	        key: "_justifyImage",
	        value: function _justifyImage(img) {
	            var w = img.naturalWidth,
	                h = img.naturalHeight;
	            var size = Math.min(Math.pow(2, Math.log(Math.min(w, h)) / Math.LN2 | 0), Texture2D._maxTextureSize); // largest 2^n integer that does not exceed s
	            if (w !== h || w !== size) {
	                var canv = document.createElement("canvas");
	                canv.height = canv.width = size;
	                canv.getContext("2d").drawImage(img, 0, 0, w, h, 0, 0, size, size);
	                return canv;
	            }
	            return img;
	        }
	    }, {
	        key: "_justifyCanvas",
	        value: function _justifyCanvas(canvas) {
	            var w = canvas.width;
	            var h = canvas.height;
	            var size = Math.pow(2, Math.log(Math.min(w, h)) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
	            if (w !== h || w !== size) {
	                canvas.height = canvas.width = size * 2;
	            }
	            return canvas;
	        }
	    }, {
	        key: "_justifyVideo",
	        value: function _justifyVideo(video) {
	            var w = video.videoWidth,
	                h = video.videoHeight;
	            var size = Math.pow(2, Math.log(Math.min(w, h)) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
	            if (w !== h || w !== size) {
	                var canv = document.createElement("canvas");
	                canv.height = canv.width = size;
	                canv.getContext("2d").drawImage(video, 0, 0, w, h, 0, 0, size, size);
	                return canv;
	            }
	            return video;
	        }
	    }, {
	        key: "_updateTexParameter",
	        value: function _updateTexParameter() {
	            this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, this._minFilter);
	            this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, this._magFilter);
	            this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, this._wrapS);
	            this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, this._wrapT);
	            this._texParameterChanged = false;
	        }
	    }, {
	        key: "_ensureMipmap",
	        value: function _ensureMipmap() {
	            if (Texture2D._filtersNeedsMipmap.indexOf(this.magFilter) >= 0 || Texture2D._filtersNeedsMipmap.indexOf(this.minFilter) >= 0) {
	                this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.texture);
	                this.gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);
	            }
	        }
	    }, {
	        key: "magFilter",
	        get: function get() {
	            return this._magFilter;
	        },
	        set: function set(filter) {
	            if (this._magFilter !== filter) {
	                this._texParameterChanged = true;
	                this._magFilter = filter;
	                this._ensureMipmap();
	            }
	        }
	    }, {
	        key: "minFilter",
	        get: function get() {
	            return this._minFilter;
	        },
	        set: function set(filter) {
	            if (this._minFilter !== filter) {
	                this._texParameterChanged = true;
	                this._minFilter = filter;
	                this._ensureMipmap();
	            }
	        }
	    }, {
	        key: "wrapS",
	        get: function get() {
	            return this._wrapS;
	        },
	        set: function set(filter) {
	            if (this._wrapS !== filter) {
	                this._texParameterChanged = true;
	                this._wrapS = filter;
	            }
	        }
	    }, {
	        key: "wrapT",
	        get: function get() {
	            return this._wrapT;
	        },
	        set: function set(filter) {
	            if (this._wrapT !== filter) {
	                this._texParameterChanged = true;
	                this._wrapT = filter;
	            }
	        }
	    }]);
	
	    return Texture2D;
	}(_ResourceBase3.default);
	/**
	 * ミップマップの更新が必要なフィルタ
	 * @type {number[]}
	 */
	
	
	exports.default = Texture2D;
	Texture2D._filtersNeedsMipmap = [WebGLRenderingContext.LINEAR_MIPMAP_LINEAR, WebGLRenderingContext.LINEAR_MIPMAP_NEAREST, WebGLRenderingContext.NEAREST_MIPMAP_LINEAR, WebGLRenderingContext.NEAREST_MIPMAP_NEAREST];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IDObject2 = __webpack_require__(25);
	
	var _IDObject3 = _interopRequireDefault(_IDObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ResourceBase = function (_IDObject) {
	    _inherits(ResourceBase, _IDObject);
	
	    function ResourceBase(gl) {
	        _classCallCheck(this, ResourceBase);
	
	        var _this = _possibleConstructorReturn(this, (ResourceBase.__proto__ || Object.getPrototypeOf(ResourceBase)).call(this));
	
	        _this.gl = gl;
	        _this.destroyed = false;
	        _this.valid = false;
	        return _this;
	    }
	
	    _createClass(ResourceBase, [{
	        key: "destroy",
	        value: function destroy() {
	            this.destroyed = true;
	        }
	    }, {
	        key: "valid",
	        get: function get() {
	            return this._valid;
	        },
	        set: function set(val) {
	            var _this2 = this;
	
	            if (this._valid === val) {
	                return;
	            }
	            this._valid = val;
	            if (this._valid) {
	                this._validResolve(this);
	            } else {
	                this.validPromise = new Promise(function (resolve) {
	                    _this2._validResolve = resolve;
	                });
	            }
	        }
	    }]);
	
	    return ResourceBase;
	}(_IDObject3.default);
	
	exports.default = ResourceBase;

/***/ },
/* 25 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Base.IDObject;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GLExtRequestor = function () {
	    function GLExtRequestor(gl) {
	        _classCallCheck(this, GLExtRequestor);
	
	        this.gl = gl;
	        this.extensions = {};
	        this._readyExtensions = {};
	        this._resolveRequested();
	        GLExtRequestor._requestObserver.push(this._resolveExtensionSafely);
	    }
	    /**
	     * Request extension to use.
	     * @param {string} str [description]
	     */
	
	
	    _createClass(GLExtRequestor, [{
	        key: "_resolveRequested",
	
	        /**
	         * Resolve all extension requested already.
	         */
	        value: function _resolveRequested() {
	            var _this = this;
	
	            GLExtRequestor._requestedExtensions.forEach(function (e) {
	                _this._resolveExtensionSafely(e.extensionName);
	            });
	        }
	    }, {
	        key: "_resolveExtensionSafely",
	        value: function _resolveExtensionSafely(extName) {
	            var e = GLExtRequestor._requestedExtensions[GLExtRequestor._requestIndexOf(extName)];
	            if (!this._resolveExtension(e.extensionName) && e.isNecessary) {
	                throw new Error("A WebGL extension '" + e.extensionName + "' was requested. But that is not supported on this device.");
	            }
	        }
	    }, {
	        key: "_resolveExtension",
	        value: function _resolveExtension(name) {
	            if (this._readyExtensions[name]) {
	                return true;
	            }
	            var ext = void 0;
	            if (typeof GLExtRequestor._customExtensionResolvers[name] === "undefined") {
	                ext = this.extensions[name] = this.gl.getExtension(name);
	            } else {
	                ext = this.extensions[name] = GLExtRequestor._customExtensionResolvers[name](this.gl);
	            }
	            this._readyExtensions[name] = this.extensions[name] !== void 0;
	            return !!this._readyExtensions[name];
	        }
	    }], [{
	        key: "request",
	        value: function request(extName) {
	            var isNecessary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	            var index = GLExtRequestor._requestIndexOf(extName);
	            if (index > -1 && isNecessary) {
	                GLExtRequestor._requestedExtensions[index] = { extensionName: extName, isNecessary: isNecessary };
	            } else if (index === -1) {
	                GLExtRequestor._requestedExtensions.push({ extensionName: extName, isNecessary: isNecessary });
	            }
	            GLExtRequestor._requestObserver.forEach(function (o) {
	                return o(extName);
	            });
	        }
	    }, {
	        key: "_requestIndexOf",
	        value: function _requestIndexOf(extName) {
	            for (var i = 0; i < GLExtRequestor._requestedExtensions.length; i++) {
	                if (GLExtRequestor._requestedExtensions[i].extensionName === extName) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }]);
	
	    return GLExtRequestor;
	}();
	/**
	 * Extension list requested to use.
	 * @type {string[]}
	 */
	
	
	exports.default = GLExtRequestor;
	GLExtRequestor._requestedExtensions = [];
	/**
	 * Some of extensions needed to override resolving extensions by this.
	 */
	GLExtRequestor._customExtensionResolvers = {};
	GLExtRequestor._requestObserver = [];
	GLExtRequestor._customExtensionResolvers["WEBGL_color_buffer_float"] = function (gl) {
	    var isSupported = void 0;
	    if (gl.getExtension("WEBGL_color_buffer_float") === null) {
	        var fbo = gl.createFramebuffer();
	        var tex = gl.createTexture();
	        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.FLOAT, null);
	        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
	        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
	            isSupported = false;
	        } else {
	            isSupported = true;
	        }
	        gl.deleteTexture(tex);
	        gl.deleteFramebuffer(fbo);
	    } else {
	        isSupported = true;
	    }
	    return isSupported;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FullscreenComponent = function (_Component) {
	    _inherits(FullscreenComponent, _Component);
	
	    function FullscreenComponent() {
	        _classCallCheck(this, FullscreenComponent);
	
	        var _this = _possibleConstructorReturn(this, (FullscreenComponent.__proto__ || Object.getPrototypeOf(FullscreenComponent)).apply(this, arguments));
	
	        _this._fullscreen = false;
	        return _this;
	    }
	
	    _createClass(FullscreenComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;
	
	            this.getAttributeRaw("fullscreen").watch(function (attr) {
	                if (_this2._fullscreen === attr) {
	                    return;
	                }
	                _this2._fullscreen = attr;
	                _this2._switchFullscreen();
	            });
	        }
	    }, {
	        key: "_switchFullscreen",
	        value: function _switchFullscreen() {
	            if (this._fullscreen) {
	                this.requestFullscreen(this.getAttribute("fullscreenTarget") || this.companion.get("canvasContainer"));
	            } else {
	                this.exitFullscreen();
	            }
	        }
	    }, {
	        key: "requestFullscreen",
	        value: function requestFullscreen(target) {
	            if (target.webkitRequestFullscreen) {
	                target.webkitRequestFullscreen(); //Chrome15+, Safari5.1+, Opera15+
	            } else if (target["mozRequestFullScreen"]) {
	                target["mozRequestFullScreen"](); //FF10+
	            } else if (target["msRequestFullscreen"]) {
	                target["msRequestFullscreen"](); //IE11+
	            } else if (target.requestFullscreen) {
	                target.requestFullscreen(); // HTML5 Fullscreen API仕様
	            } else {
	                console.error('ご利用のブラウザはフルスクリーン操作に対応していません');
	                return;
	            }
	        }
	        /*フルスクリーン終了用ファンクション*/
	
	    }, {
	        key: "exitFullscreen",
	        value: function exitFullscreen() {
	            if (document.webkitCancelFullScreen) {
	                document.webkitCancelFullScreen(); //Chrome15+, Safari5.1+, Opera15+
	            } else if (document["mozCancelFullScreen"]) {
	                document["mozCancelFullScreen"](); //FF10+
	            } else if (document["msExitFullscreen"]) {
	                document["msExitFullscreen"](); //IE11+
	            } else if (document["cancelFullScreen"]) {
	                document["cancelFullScreen"](); //Gecko:FullScreenAPI仕様
	            } else if (document.exitFullscreen) {
	                document.exitFullscreen(); // HTML5 Fullscreen API仕様
	            }
	        }
	    }]);
	
	    return FullscreenComponent;
	}(_Component3.default);
	
	exports.default = FullscreenComponent;
	
	FullscreenComponent.attributes = {
	    fullscreen: {
	        converter: "Boolean",
	        default: false
	    },
	    fullscreenTarget: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GeometryFactory = __webpack_require__(29);
	
	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GeometryComponent = function (_Component) {
	    _inherits(GeometryComponent, _Component);
	
	    function GeometryComponent() {
	        _classCallCheck(this, GeometryComponent);
	
	        return _possibleConstructorReturn(this, (GeometryComponent.__proto__ || Object.getPrototypeOf(GeometryComponent)).apply(this, arguments));
	    }
	
	    _createClass(GeometryComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var type = this.getAttribute("type");
	            if (type) {
	                var gf = this.companion.get("GeometryFactory");
	                var attrs = _GeometryFactory2.default.factoryArgumentDeclarations[type];
	                var geometryArgument = {};
	                for (var key in attrs) {
	                    this.__addAtribute(key, attrs[key]);
	                    geometryArgument[key] = this.getAttribute(key);
	                }
	                this.geometry = gf.instanciate(type, geometryArgument);
	                var gr = this.companion.get("GeometryRegistory");
	                var name = this.getAttribute("name");
	                if (!name) {
	                    throw new Error("Name was not specified");
	                }
	                gr.addGeometry(name, this.geometry);
	            }
	        }
	    }]);
	
	    return GeometryComponent;
	}(_Component3.default);
	
	exports.default = GeometryComponent;
	
	GeometryComponent.attributes = {
	    type: {
	        converter: "String",
	        default: null
	    },
	    name: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Provides the feature to instanciate primitive geometry.
	 */
	var GeometryFactory = function () {
	    function GeometryFactory(gl) {
	        _classCallCheck(this, GeometryFactory);
	
	        this.gl = gl;
	    }
	    /**
	     * Add new type geometry
	     * @param {string}                   typeName        [description]
	     * @param {IAttributeDeclaration }}             argumentDeclarations [description]
	     * @param {IGeometryFactoryDelegate} factoryDelegate [description]
	     */
	
	
	    _createClass(GeometryFactory, [{
	        key: "instanciate",
	        value: function instanciate(type, args) {
	            var factoryDelegate = GeometryFactory.factoryDelegates[type];
	            if (!factoryDelegate) {
	                throw new Error("Can not instanciate unknown geometry type " + type);
	            }
	            return factoryDelegate(this.gl, args);
	        }
	    }, {
	        key: "instanciateAsDefault",
	        value: function instanciateAsDefault(type) {
	            var decl = GeometryFactory.factoryArgumentDeclarations[type];
	            var args = {};
	            for (var attr in decl) {
	                var attrDecl = decl[attr];
	                args[attr] = attrDecl.default;
	            }
	            return this.instanciate(type, args);
	        }
	    }], [{
	        key: "addType",
	        value: function addType(typeName, argumentDeclarations, factoryDelegate) {
	            GeometryFactory.factoryDelegates[typeName] = factoryDelegate;
	            GeometryFactory.factoryArgumentDeclarations[typeName] = argumentDeclarations;
	        }
	    }]);
	
	    return GeometryFactory;
	}();
	/**
	 * Delegates to be used as factory
	 */
	
	
	exports.default = GeometryFactory;
	GeometryFactory.factoryDelegates = {};
	/**
	 * Argument inputs to be used for construction of geometry.
	 */
	GeometryFactory.factoryArgumentDeclarations = {};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GeometryFactory = __webpack_require__(29);
	
	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _grimoirejs = __webpack_require__(8);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GeometryRegistoryComponent = function (_Component) {
	    _inherits(GeometryRegistoryComponent, _Component);
	
	    function GeometryRegistoryComponent() {
	        _classCallCheck(this, GeometryRegistoryComponent);
	
	        var _this = _possibleConstructorReturn(this, (GeometryRegistoryComponent.__proto__ || Object.getPrototypeOf(GeometryRegistoryComponent)).apply(this, arguments));
	
	        _this._geometries = {};
	        return _this;
	    }
	
	    _createClass(GeometryRegistoryComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this._factory = new _GeometryFactory2.default(this.companion.get("gl"));
	            this.companion.set(this.name, this);
	            this.companion.set(_grimoirejs2.default.ns(this.name.ns)("GeometryFactory"), this._factory);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this.getAttribute("defaultGeometry")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var geometry = _step.value;
	
	                    this.addGeometry(geometry, this._factory.instanciateAsDefault(geometry));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "addGeometry",
	        value: function addGeometry(name, geometry) {
	            this._geometries[name] = geometry;
	        }
	    }, {
	        key: "removeGeometry",
	        value: function removeGeometry(name) {
	            if (this._geometries[name]) {
	                delete this._geometries[name];
	            }
	        }
	    }, {
	        key: "getGeometry",
	        value: function getGeometry(name) {
	            return this._geometries[name];
	        }
	    }]);
	
	    return GeometryRegistoryComponent;
	}(_Component3.default);
	
	exports.default = GeometryRegistoryComponent;
	
	GeometryRegistoryComponent.attributes = {
	    defaultGeometry: {
	        converter: "StringArray",
	        default: ["quad", "cube", "sphere"]
	    }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TransformComponent = __webpack_require__(17);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Vector = __webpack_require__(13);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Matrix = __webpack_require__(15);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HTMLBinderComponent = function (_Component) {
	    _inherits(HTMLBinderComponent, _Component);
	
	    function HTMLBinderComponent() {
	        _classCallCheck(this, HTMLBinderComponent);
	
	        var _this = _possibleConstructorReturn(this, (HTMLBinderComponent.__proto__ || Object.getPrototypeOf(HTMLBinderComponent)).apply(this, arguments));
	
	        _this._isFirstCall = true;
	        return _this;
	    }
	
	    _createClass(HTMLBinderComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this._canvasContainer = this.companion.get("canvasContainer");
	            this._currentTransform = this.node.getComponent(_TransformComponent2.default);
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._canvasContainer = this.companion.get("canvasContainer");
	            this._currentTransform = this.node.getComponent(_TransformComponent2.default);
	            this.node.on("render", this._onRender.bind(this));
	        }
	    }, {
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            var _this2 = this;
	
	            this.getAttributeRaw("targetRenderer").watch(function (v) {
	                if (_this2._rendererQuery !== v) {
	                    _this2._onRendererChanged();
	                }
	            }, true);
	            this.getAttributeRaw("htmlQuery").watch(function (v) {
	                _this2._onQueryChanged(v);
	            }, true);
	        }
	    }, {
	        key: "_onRender",
	        value: function _onRender(args) {
	            if (this._isFirstCall) {
	                this._onRendererChanged();
	                this._isFirstCall = false;
	            }
	            if (this._queriedElement && args.caller.node === this._targetNode) {
	                var vp = args.viewport;
	                var rawPos = _Matrix2.default.transform(this._currentTransform.calcPVM(args.camera), new _Vector2.default(0, 0, 0, 1));
	                var rawScPos = {
	                    x: rawPos.X / rawPos.W,
	                    y: rawPos.Y / rawPos.W,
	                    z: rawPos.Z / rawPos.W
	                };
	                if (rawScPos.z >= -1 && rawScPos.z <= 1) {
	                    var scPos = {
	                        x: vp.Left + (rawScPos.x + 1) / 2 * vp.Width,
	                        y: vp.Top + (rawScPos.y + 1) / 2 * vp.Height
	                    };
	                    this._queriedElement.style.visibility = "visible";
	                    this._queriedElement.style.left = scPos.x + "px";
	                    this._queriedElement.style.bottom = scPos.y + "px";
	                } else {
	                    this._queriedElement.style.visibility = "hidden";
	                }
	            }
	        }
	        /**
	         * Restore default position of queried html
	         */
	
	    }, {
	        key: "_restoreDefault",
	        value: function _restoreDefault() {
	            this._canvasContainer.removeChild(this._queriedElement);
	            this._parentCache.appendChild(this._queriedElement);
	            var s = this._queriedElement.style;
	            var c = this._styleCache;
	            s.position = c["position"];
	            s.left = c["left"];
	            s.bottom = c["bottom"];
	            s.visibility = c["visibility"];
	        }
	    }, {
	        key: "_beginTrack",
	        value: function _beginTrack() {
	            this._parentCache.removeChild(this._queriedElement);
	            this._canvasContainer.appendChild(this._queriedElement);
	            this._queriedElement.style.position = "absolute";
	        }
	    }, {
	        key: "_onRendererChanged",
	        value: function _onRendererChanged() {
	            var _this3 = this;
	
	            var returned = false;
	            this.tree(this.getAttribute("targetRenderer")).forEach(function (n) {
	                if (returned) {
	                    return true;
	                } else {
	                    _this3._targetNode = n;
	                    returned = true;
	                }
	            });
	        }
	    }, {
	        key: "_onQueryChanged",
	        value: function _onQueryChanged(query) {
	            var queried = void 0;
	            if (query && query !== "") {
	                queried = document.querySelectorAll(query);
	            }
	            if (this._queriedElement) {
	                this._restoreDefault();
	            }
	            if (!queried || queried.length === 0) {
	                this._queriedElement = undefined;
	                this._parentCache = undefined;
	            } else {
	                this._queriedElement = queried.item(0);
	                var s = this._queriedElement.style;
	                this._styleCache = {
	                    position: s.position,
	                    visibility: s.visibility,
	                    left: s.left,
	                    bottom: s.bottom
	                };
	                this._parentCache = this._queriedElement.parentElement;
	                this._beginTrack();
	            }
	        }
	    }]);
	
	    return HTMLBinderComponent;
	}(_Component3.default);
	
	exports.default = HTMLBinderComponent;
	
	HTMLBinderComponent.attributes = {
	    htmlQuery: {
	        default: null,
	        converter: "String"
	    },
	    targetRenderer: {
	        default: "render-scene",
	        converter: "String"
	    }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoopManagerComponent = function (_Component) {
	    _inherits(LoopManagerComponent, _Component);
	
	    function LoopManagerComponent() {
	        _classCallCheck(this, LoopManagerComponent);
	
	        var _this = _possibleConstructorReturn(this, (LoopManagerComponent.__proto__ || Object.getPrototypeOf(LoopManagerComponent)).apply(this, arguments));
	
	        _this._loopActions = [];
	        _this._loopIndex = 0;
	        return _this;
	    }
	
	    _createClass(LoopManagerComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;
	
	            this.getAttributeRaw("loopEnabled").watch(function (attr) {
	                if (attr) {
	                    _this2._begin();
	                }
	            });
	            this._registerNextLoop = window.requestAnimationFrame // if window.requestAnimationFrame is defined or undefined
	            ? function () {
	                window.requestAnimationFrame(_this2._loop.bind(_this2));
	            } : function () {
	                window.setTimeout(_this2._loop.bind(_this2), 1000 / 60);
	            };
	        }
	    }, {
	        key: "register",
	        value: function register(action, priorty) {
	            this._loopActions.push({
	                action: action,
	                priorty: priorty
	            });
	            this._loopActions.sort(function (a, b) {
	                return a.priorty - b.priorty;
	            });
	        }
	    }, {
	        key: "_begin",
	        value: function _begin() {
	            this._registerNextLoop();
	        }
	    }, {
	        key: "_loop",
	        value: function _loop() {
	            var _this3 = this;
	
	            this.node.emit("loop", {
	                loopIndex: this._loopIndex
	            });
	            this._loopActions.forEach(function (a) {
	                return a.action(_this3._loopIndex);
	            });
	            this._loopIndex++;
	            this._registerNextLoop();
	        }
	    }]);
	
	    return LoopManagerComponent;
	}(_Component3.default);
	
	LoopManagerComponent.attributes = {
	    loopEnabled: {
	        default: false,
	        converter: "Boolean"
	    }
	};
	exports.default = LoopManagerComponent;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	                step(generator["throw"](value));
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
	
	var MaterialComponent = function (_Component) {
	    _inherits(MaterialComponent, _Component);
	
	    function MaterialComponent() {
	        _classCallCheck(this, MaterialComponent);
	
	        var _this = _possibleConstructorReturn(this, (MaterialComponent.__proto__ || Object.getPrototypeOf(MaterialComponent)).apply(this, arguments));
	
	        _this.materialArgs = {};
	        return _this;
	    }
	
	    _createClass(MaterialComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var typeName = this.getAttribute("type");
	            if (typeName) {
	                this.materialPromise = this.companion.get("MaterialFactory").instanciate(typeName);
	                this._registerAttributes();
	            }
	        }
	    }, {
	        key: "_registerAttributes",
	        value: function _registerAttributes() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var _this2 = this;
	
	                var key, _loop, _key;
	
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return this.materialPromise;
	
	                            case 2:
	                                this.material = _context.sent;
	
	                                for (key in this.material.argumentDeclarations) {
	                                    this.__addAtribute(key, this.material.argumentDeclarations[key]);
	                                    this.getAttributeRaw(key).boundTo(key, this.material.arguments);
	                                }
	
	                                _loop = function _loop(_key) {
	                                    _this2.__addAtribute(_key, _this2.material.macroDeclarations[_key]);
	                                    _this2.getAttributeRaw(_key).watch(function (v) {
	                                        _this2.material.setMacroValue(_key, v);
	                                    }, true);
	                                };
	
	                                for (_key in this.material.macroDeclarations) {
	                                    _loop(_key);
	                                }
	                                this.ready = true;
	
	                            case 7:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }]);
	
	    return MaterialComponent;
	}(_Component3.default);
	
	exports.default = MaterialComponent;
	
	MaterialComponent.attributes = {
	    type: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DrawPriorty = __webpack_require__(35);
	
	var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _grimoirejs = __webpack_require__(8);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	                step(generator["throw"](value));
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
	
	var MaterialContainerComponent = function (_Component) {
	    _inherits(MaterialContainerComponent, _Component);
	
	    function MaterialContainerComponent() {
	        _classCallCheck(this, MaterialContainerComponent);
	
	        var _this = _possibleConstructorReturn(this, (MaterialContainerComponent.__proto__ || Object.getPrototypeOf(MaterialContainerComponent)).apply(this, arguments));
	
	        _this.materialArgs = {};
	        _this.ready = false;
	        _this.useMaterial = false;
	        return _this;
	    }
	
	    _createClass(MaterialContainerComponent, [{
	        key: "getDrawPriorty",
	        value: function getDrawPriorty(depth) {
	            if (!this.ready) {
	                return Number.MAX_VALUE;
	            }
	            var orderCriteria = _DrawPriorty2.default[this._drawOrder ? this._drawOrder : this.material.techniques["default"].drawOrder];
	            if (orderCriteria === void 0) {
	                throw new Error("Specified drawing order \"" + this.material.techniques["default"].drawOrder + "\" is not defined");
	            }
	            if (orderCriteria.descending) {
	                return (1.0 - depth / 10000) * orderCriteria.priorty;
	            } else {
	                return depth / 10000 * orderCriteria.priorty;
	            }
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.getAttributeRaw("material").watch(this._onMaterialChanged);
	            this.companion.get("loader").register(this._onMaterialChanged());
	            this.getAttributeRaw("drawOrder").boundTo("_drawOrder");
	        }
	        /**
	         * When the material attribute is changed.
	         */
	
	    }, {
	        key: "_onMaterialChanged",
	        value: function _onMaterialChanged() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var materialPromise;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                materialPromise = this.getAttribute("material");
	
	                                if (!(materialPromise === void 0)) {
	                                    _context.next = 4;
	                                    break;
	                                }
	
	                                this.useMaterial = false;
	                                return _context.abrupt("return");
	
	                            case 4:
	                                this.useMaterial = true;
	                                if (!this._materialComponent) {
	                                    this._prepareInternalMaterial(materialPromise);
	                                } else {
	                                    this._prepareExternalMaterial(materialPromise);
	                                }
	
	                            case 6:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	        /**
	         * Resolve materials only when the material required from external material component.
	         * @return {Promise<void>} [description]
	         */
	
	    }, {
	        key: "_prepareExternalMaterial",
	        value: function _prepareExternalMaterial(materialPromise) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                var loader, material;
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                loader = this.companion.get("loader");
	
	                                loader.register(materialPromise);
	                                _context2.next = 4;
	                                return materialPromise;
	
	                            case 4:
	                                material = _context2.sent;
	
	                                this.material = material;
	                                this.materialArgs = this._materialComponent.materialArgs;
	                                this.ready = true;
	
	                            case 8:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	    }, {
	        key: "_prepareInternalMaterial",
	        value: function _prepareInternalMaterial(materialPromise) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
	                var _this2 = this;
	
	                var loader, material, key, _loop, _key;
	
	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                // obtain promise of instanciating material
	                                loader = this.companion.get("loader");
	
	                                loader.register(materialPromise);
	
	                                if (materialPromise) {
	                                    _context3.next = 4;
	                                    break;
	                                }
	
	                                return _context3.abrupt("return");
	
	                            case 4:
	                                _context3.next = 6;
	                                return materialPromise;
	
	                            case 6:
	                                material = _context3.sent;
	
	                                this.material = material;
	                                for (key in this.material.argumentDeclarations) {
	                                    this.__addAtribute(key, this.material.argumentDeclarations[key]);
	                                    this.getAttributeRaw(key).boundTo(key, this.material.arguments);
	                                }
	
	                                _loop = function _loop(_key) {
	                                    _this2.__addAtribute(_key, _this2.material.macroDeclarations[_key]);
	                                    _this2.getAttributeRaw(_key).watch(function (v) {
	                                        _this2.material.setMacroValue(_key, v);
	                                    }, true);
	                                };
	
	                                for (_key in this.material.macroDeclarations) {
	                                    _loop(_key);
	                                }
	                                this.ready = true;
	
	                            case 12:
	                            case "end":
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        }
	    }], [{
	        key: "rewriteDefaultMaterial",
	        value: function rewriteDefaultMaterial(materialName) {
	            if (materialName !== MaterialContainerComponent._defaultMaterial) {
	                MaterialContainerComponent._defaultMaterial = materialName;
	                _grimoirejs2.default.componentDeclarations.get("MaterialContainer").attributes["material"].default = "new(" + materialName + ")";
	            }
	        }
	    }, {
	        key: "defaultMaterial",
	        get: function get() {
	            return this._defaultMaterial;
	        }
	    }]);
	
	    return MaterialContainerComponent;
	}(_Component3.default);
	
	exports.default = MaterialContainerComponent;
	
	MaterialContainerComponent.attributes = {
	    material: {
	        converter: "Material",
	        default: "new(unlit)",
	        componentBoundTo: "_materialComponent" // When the material was specified with the other material tag, this field would be assigned.
	    },
	    drawOrder: {
	        converter: "String",
	        default: null
	    }
	};
	MaterialContainerComponent._defaultMaterial = "unlit";

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    Background: { priorty: 1000 },
	    NoAlpha: { priorty: 2000 },
	    UseAlpha: { priorty: 3000, descending: true },
	    NoDepth: { priorty: 4000, descending: true },
	    Overlay: { priorty: 5000, descending: true }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MaterialFactory = __webpack_require__(37);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialImporterComponent = function (_Component) {
	    _inherits(MaterialImporterComponent, _Component);
	
	    function MaterialImporterComponent() {
	        _classCallCheck(this, MaterialImporterComponent);
	
	        return _possibleConstructorReturn(this, (MaterialImporterComponent.__proto__ || Object.getPrototypeOf(MaterialImporterComponent)).apply(this, arguments));
	    }
	
	    _createClass(MaterialImporterComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            if (!this.getAttribute("typeName") || !this.getAttribute("src")) {
	                throw new Error("type or src cannot be null in material importer");
	            } else {
	                _MaterialFactory2.default.addSORTMaterialFromURL(this.getAttribute("typeName"), this.getAttribute("src"));
	            }
	        }
	    }]);
	
	    return MaterialImporterComponent;
	}(_Component3.default);
	
	exports.default = MaterialImporterComponent;
	
	MaterialImporterComponent.attributes = {
	    typeName: {
	        default: null,
	        converter: "String"
	    },
	    src: {
	        default: null,
	        converter: "String"
	    }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Parser = __webpack_require__(38);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _MacroRegistory = __webpack_require__(44);
	
	var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);
	
	var _TextFileResolver = __webpack_require__(6);
	
	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);
	
	var _Material = __webpack_require__(46);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	var _header = __webpack_require__(55);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	                step(generator["throw"](value));
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
	
	/**
	 * Manage factories for materials.
	 * Materials can be instanciated with this instance.
	 */
	var MaterialFactory = function () {
	    function MaterialFactory(gl) {
	        _classCallCheck(this, MaterialFactory);
	
	        this.gl = gl;
	        this.shaderHeader = MaterialFactory.defaultShaderHeader;
	        this.macro = new _MacroRegistory2.default();
	    }
	
	    _createClass(MaterialFactory, [{
	        key: "instanciate",
	        value: function instanciate(typeName) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!MaterialFactory.factories[typeName]) {
	                                    _context.next = 4;
	                                    break;
	                                }
	
	                                return _context.abrupt("return", MaterialFactory.factories[typeName](this));
	
	                            case 4:
	                                _context.next = 6;
	                                return this._waitForRegistered(typeName);
	
	                            case 6:
	                                return _context.abrupt("return", _context.sent);
	
	                            case 7:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "_waitForRegistered",
	        value: function _waitForRegistered(typeName) {
	            var _this = this;
	
	            return new Promise(function (resolve) {
	                MaterialFactory._onRegister(typeName, function () {
	                    resolve(MaterialFactory.factories[typeName](_this));
	                });
	            });
	        }
	    }], [{
	        key: "addMaterialType",
	        value: function addMaterialType(typeName, factory) {
	            MaterialFactory.factories[typeName] = factory;
	            if (MaterialFactory.registerdHandlers[typeName]) {
	                MaterialFactory.registerdHandlers[typeName].forEach(function (t) {
	                    return t();
	                });
	            }
	        }
	        /**
	         * Add source of .sort material as specified typename.
	         * @param  {string}        typeName [description]
	         * @param  {string}        source   [description]
	         * @return {Promise<void>}          [description]
	         */
	
	    }, {
	        key: "addSORTMaterial",
	        value: function addSORTMaterial(typeName, source) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                var techniques;
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                _context2.next = 2;
	                                return _Parser2.default.parse(source);
	
	                            case 2:
	                                techniques = _context2.sent;
	
	                                MaterialFactory.addMaterialType(typeName, function (factory) {
	                                    return new _Material2.default(factory.gl, techniques);
	                                });
	
	                            case 4:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	        /**
	         * Add source of .sort material from external url as specified typeName.
	         * @param  {string}        typeName [description]
	         * @param  {string}        url      [description]
	         * @return {Promise<void>}          [description]
	         */
	
	    }, {
	        key: "addSORTMaterialFromURL",
	        value: function addSORTMaterialFromURL(typeName, url) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
	                var source;
	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                _context3.next = 2;
	                                return _TextFileResolver2.default.resolve(url);
	
	                            case 2:
	                                source = _context3.sent;
	                                _context3.next = 5;
	                                return MaterialFactory.addSORTMaterial(typeName, source);
	
	                            case 5:
	                            case "end":
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        }
	    }, {
	        key: "_onRegister",
	        value: function _onRegister(factoryName, handler) {
	            if (MaterialFactory.registerdHandlers[factoryName]) {
	                MaterialFactory.registerdHandlers[factoryName].push(handler);
	            } else {
	                MaterialFactory.registerdHandlers[factoryName] = [handler];
	            }
	        }
	    }]);
	
	    return MaterialFactory;
	}();
	
	exports.default = MaterialFactory;
	
	MaterialFactory.defaultShaderHeader = _header2.default;
	/**
	 * Actual material generator.
	 */
	MaterialFactory.factories = {};
	MaterialFactory.registerdHandlers = {};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SortTransformUtility = __webpack_require__(39);
	
	var _SortTransformUtility2 = _interopRequireDefault(_SortTransformUtility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SortParser = function () {
	    function SortParser() {
	        _classCallCheck(this, SortParser);
	    }
	
	    _createClass(SortParser, null, [{
	        key: "parse",
	        value: function parse(source) {
	            // const sourceHash = SortParser._getHash(source);
	            // if (SortParser._parsedCache[sourceHash] !== void 0) { // When specified source was loaded already
	            //   return new Promise((resolve, reject) => {
	            //     resolve(SortParser._parsedCache[sourceHash]);
	            //   });
	            // } else {
	            //
	            // }
	            return SortParser._parse(source).then(function (v) {
	                SortParser._parsedCache[source] = v;
	                return v;
	            });
	        }
	    }, {
	        key: "_parse",
	        value: function _parse(source) {
	            return new Promise(function (resolve, reject) {
	                var result = {};
	                _SortTransformUtility2.default.resolveImports(_SortTransformUtility2.default.removeComment(source)).then(function (uncommented) {
	                    try {
	                        var techniqueSources = _SortTransformUtility2.default.separateTechniqueSource(uncommented);
	                        for (var key in techniqueSources) {
	                            result[key] = SortParser._parseTechnique(techniqueSources[key]);
	                        }
	                        resolve(result);
	                    } catch (e) {
	                        reject(e);
	                    }
	                });
	            });
	        }
	    }, {
	        key: "_parseTechnique",
	        value: function _parseTechnique(techniqueSource) {
	            var drawOrder = _SortTransformUtility2.default.fetchDrawOrder(techniqueSource) || "Auto";
	            var passSources = _SortTransformUtility2.default.separatePassSource(techniqueSource);
	            var passes = new Array(passSources.length);
	            for (var i = 0; i < passSources.length; i++) {
	                passes[i] = SortParser._parsePassSource(passSources[i]);
	            }
	            return {
	                drawOrder: drawOrder,
	                passes: passes
	            };
	        }
	    }, {
	        key: "_parsePassSource",
	        value: function _parsePassSource(passSource) {
	            var shaderSource = _SortTransformUtility2.default.removePreferences(passSource);
	            var attributes = _SortTransformUtility2.default.parseVariables(passSource, "attribute");
	            var uniforms = _SortTransformUtility2.default.parseVariables(passSource, "uniform");
	            var macros = _SortTransformUtility2.default.parseMacros(passSource);
	            var states = _SortTransformUtility2.default.parsePreferences(passSource);
	            return {
	                fragment: shaderSource,
	                vertex: shaderSource,
	                attributes: attributes,
	                uniforms: uniforms,
	                macros: macros,
	                states: states
	            };
	        }
	    }, {
	        key: "_getHash",
	        value: function _getHash(source) {
	            var hash = 0,
	                i = void 0,
	                chr = void 0,
	                len = void 0;
	            if (source.length === 0) return hash;
	            for (i = 0, len = this.length; i < len; i++) {
	                chr = source.charCodeAt(i);
	                hash = (hash << 5) - hash + chr;
	                hash |= 0;
	            }
	            return hash;
	        }
	    }]);
	
	    return SortParser;
	}();
	/**
	 * Cache to prevent double loading
	 */
	
	
	SortParser._parsedCache = {};
	exports.default = SortParser;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Preferences = __webpack_require__(40);
	
	var _Preferences2 = _interopRequireDefault(_Preferences);
	
	var _TypeToConstant = __webpack_require__(41);
	
	var _TypeToConstant2 = _interopRequireDefault(_TypeToConstant);
	
	var _NameSemanticsPair = __webpack_require__(42);
	
	var _NameSemanticsPair2 = _interopRequireDefault(_NameSemanticsPair);
	
	var _ImportResolver = __webpack_require__(43);
	
	var _ImportResolver2 = _interopRequireDefault(_ImportResolver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	                step(generator["throw"](value));
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
	
	var SortTransformUtility = function () {
	    function SortTransformUtility() {
	        _classCallCheck(this, SortTransformUtility);
	    }
	
	    _createClass(SortTransformUtility, null, [{
	        key: "separateTechniqueSource",
	
	        /**
	         * Separate .sort shader text with @Technique statements.
	         * @param  {string} uncommentedSource [description]
	         * @return {[type]}                   [description]
	         */
	        value: function separateTechniqueSource(uncommentedSource) {
	            if (uncommentedSource.indexOf("@Technique") === -1) {
	                return { default: uncommentedSource };
	            } else {
	                var result = {};
	                var regex = /@Technique\s+([a-zA-Z0-9_]+)/g;
	                var regexResult = void 0;
	                while (regexResult = regex.exec(uncommentedSource)) {
	                    var techniqueName = regexResult[1];
	                    if (result[techniqueName] !== void 0) {
	                        throw new Error("Technique name " + techniqueName + " is dupelicated");
	                    } else {
	                        result[techniqueName] = SortTransformUtility.obtainNextSection(uncommentedSource, "{", "}", regexResult.index + regexResult.length);
	                    }
	                }
	                return result;
	            }
	        }
	        /**
	         * Separate technique source with @Pass statement.
	         * @param  {string}   uncommentedSource [description]
	         * @return {string[]}                   [description]
	         */
	
	    }, {
	        key: "separatePassSource",
	        value: function separatePassSource(uncommentedSource) {
	            if (uncommentedSource.indexOf("@Pass") === -1) {
	                return [uncommentedSource];
	            } else {
	                var result = [];
	                var regex = /@Pass/g;
	                var regexResult = void 0;
	                while (regexResult = regex.exec(uncommentedSource)) {
	                    result.push(SortTransformUtility.obtainNextSection(uncommentedSource, "{", "}", regexResult.index + regexResult.length));
	                }
	                return result;
	            }
	        }
	        /**
	         * Fetch draw order preference from technique source.
	         * @param  {string} uncommentedTechniqueSource [description]
	         * @return {string}                            [description]
	         */
	
	    }, {
	        key: "fetchDrawOrder",
	        value: function fetchDrawOrder(uncommentedTechniqueSource) {
	            var regexResult = /@DrawOrder\s*\((\w+)\)/g.exec(uncommentedTechniqueSource);
	            if (regexResult) {
	                var firstPassIndex = uncommentedTechniqueSource.indexOf("@Pass");
	                if (firstPassIndex !== -1 && firstPassIndex < regexResult.index) {
	                    throw new Error("DrawOrder preference should be just under @Technique section");
	                }
	                return regexResult[1];
	            }
	            return null;
	        }
	    }, {
	        key: "removePreferences",
	        value: function removePreferences(source) {
	            var regex = /@.+$/gm;
	            return source.replace(regex, "");
	        }
	    }, {
	        key: "resolveImports",
	        value: function resolveImports(uncommentedSource) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var regexResult, importContent;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (false) {
	                                    _context.next = 17;
	                                    break;
	                                }
	
	                                regexResult = /\s*@import\s+"([^"]+)"/.exec(uncommentedSource);
	
	                                if (regexResult) {
	                                    _context.next = 4;
	                                    break;
	                                }
	
	                                return _context.abrupt("break", 17);
	
	                            case 4:
	                                importContent = void 0;
	                                _context.t0 = SortTransformUtility;
	                                _context.next = 8;
	                                return _ImportResolver2.default.resolve(regexResult[1]);
	
	                            case 8:
	                                _context.t1 = _context.sent;
	                                _context.next = 11;
	                                return _context.t0.resolveImports.call(_context.t0, _context.t1);
	
	                            case 11:
	                                importContent = _context.sent;
	
	                                if (importContent) {
	                                    _context.next = 14;
	                                    break;
	                                }
	
	                                throw new Error("Required shader chunk '" + regexResult[1] + "' was not found!!");
	
	                            case 14:
	                                uncommentedSource = uncommentedSource.replace(regexResult[0], "\n" + importContent + "\n");
	                                _context.next = 0;
	                                break;
	
	                            case 17:
	                                return _context.abrupt("return", uncommentedSource);
	
	                            case 18:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "parseMacros",
	        value: function parseMacros(source) {
	            var result = {};
	            var regex = /@ExposeMacro\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*\)/g;
	            var regexResult = void 0;
	            while (regexResult = regex.exec(source)) {
	                if (!regexResult[1] || !regexResult[2] || !regexResult[3] || !regexResult[4]) {
	                    throw new Error("Invalid parameter was passed on @ExposeMacro preference on '" + regexResult[0] + "'");
	                }
	                if (regexResult[1] !== "bool" && regexResult[1] !== "int") {
	                    throw new Error("Invalid macro type \"" + regexResult[1] + "\". regexResult type must be int or bool");
	                }
	                var value = void 0;
	                if (regexResult[1] === "bool") {
	                    if (regexResult[4] !== "true" && regexResult[4] !== "false") {
	                        throw new Error("Default macro value \"" + regexResult[4] + "\" is invalid for bool type macro. Must be true or false");
	                    }
	                    value = regexResult[4] === "true";
	                } else {
	                    value = parseFloat(regexResult[4]);
	                    if (isNaN(value)) {
	                        throw new Error("Default macro value \"" + regexResult[4] + "\" is invalid for int type macro. Must be a number.");
	                    }
	                }
	                result[regexResult[2]] = {
	                    name: regexResult[2],
	                    macroName: regexResult[3],
	                    type: regexResult[1],
	                    value: value
	                };
	            }
	            return result;
	        }
	    }, {
	        key: "parsePreferences",
	        value: function parsePreferences(source) {
	            var result = {
	                enable: [WebGLRenderingContext.CULL_FACE, WebGLRenderingContext.BLEND, WebGLRenderingContext.DEPTH_TEST],
	                functions: {
	                    blendColor: [0, 0, 0, 0],
	                    cullFace: [WebGLRenderingContext.BACK],
	                    blendFuncSeparate: [WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA, WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA],
	                    blendEquationSeparate: [WebGLRenderingContext.FUNC_ADD, WebGLRenderingContext.FUNC_ADD],
	                    lineWidth: [1],
	                    frontFace: [WebGLRenderingContext.CCW],
	                    depthRange: [0, 1],
	                    depthFunc: [WebGLRenderingContext.LESS]
	                }
	            };
	            var regex = /@([A-Za-z]+)\(([a-zA-Z_0-9,\.\-]*)\)/g;
	            var regexResult = void 0;
	            while (regexResult = regex.exec(source)) {
	                var prefParser = _Preferences2.default[regexResult[1]];
	                if (!prefParser) {
	                    throw new Error("Unknown pass preference " + regexResult[1] + " was specified.");
	                }
	                prefParser(result, regexResult[2].split(","));
	            }
	            return result;
	        }
	    }, {
	        key: "asValidJSON",
	        value: function asValidJSON(json) {
	            var regex = /([\{,]\s*)([a-zA-Z0-9_]+)(\s*\:)/gm;
	            var result = json.replace(regex, '$1"$2"$3');
	            return result;
	        }
	    }, {
	        key: "removeComment",
	        value: function removeComment(source) {
	            var text = "";
	            var isLineComment = false;
	            var isMultiLineComment = false;
	            for (var i = 0; i < source.length; i++) {
	                var c = source.charAt(i);
	                if (c === "/") {
	                    if (i + 1 < source.length) {
	                        if (source.charAt(i + 1) === "/" && !isMultiLineComment) {
	                            isLineComment = true;
	                            i++;
	                            continue;
	                        } else if (source.charAt(i + 1) === "*" && !isLineComment) {
	                            isMultiLineComment = true;
	                            i++;
	                            continue;
	                        }
	                    }
	                }
	                if (c === "*" && isMultiLineComment && i + 1 < source.length && source.charAt(i + 1) === "/") {
	                    isMultiLineComment = false;
	                    i++;
	                    continue;
	                }
	                if (c === "\n") {
	                    if (isLineComment) {
	                        isLineComment = false;
	                        continue;
	                    } else if (isMultiLineComment) {
	                        text += "\n"; // for keeping line break
	                    }
	                }
	                if (!isLineComment && !isMultiLineComment) {
	                    text += c;
	                }
	            }
	            return text;
	        }
	    }, {
	        key: "obtainNextSection",
	        value: function obtainNextSection(source, begin, end, offset) {
	            var beginningPosition = source.indexOf(begin, offset);
	            if (beginningPosition === -1) {
	                throw new Error("Begining section charactor '" + begin + "' was not found.");
	            }
	            if (begin.length > 1 || end.length > 1) {
	                throw new Error("Invalid parameter");
	            }
	            var matchingCount = 1;
	            var beginCode = begin.charCodeAt(0);
	            var endCode = end.charCodeAt(0);
	            for (var i = beginningPosition + 1; i < source.length; i++) {
	                var current = source.charCodeAt(i);
	                if (current === beginCode) {
	                    matchingCount++;
	                } else if (current === endCode) {
	                    matchingCount--;
	                }
	                if (matchingCount === 0) {
	                    return source.substring(beginningPosition + 1, i);
	                }
	            }
	            throw new Error("Invalid bracket matching");
	        }
	    }, {
	        key: "generateVariableFetchRegex",
	        value: function generateVariableFetchRegex(variableType) {
	            return new RegExp("(?:@([a-zA-Z0-9_]+)?(\\{.+\\})?)?\\s*" + variableType + "\\s+(?:(lowp|mediump|highp)\\s+)?([a-z0-9A-Z]+)\\s+([a-zA-Z0-9_]+)(?:\\s*\\[\\s*([a-zA-Z0-9_]+)\\s*\\]\\s*)?\\s*;", "g");
	        }
	    }, {
	        key: "parseVariables",
	        value: function parseVariables(source, variableType) {
	            var result = {};
	            var regex = SortTransformUtility.generateVariableFetchRegex(variableType);
	            var regexResult = void 0;
	            while (regexResult = regex.exec(source)) {
	                var name = regexResult[5];
	                var type = _TypeToConstant2.default[regexResult[4]];
	                var precision = regexResult[3];
	                var rawAnnotations = regexResult[2];
	                var isArray = regexResult[6] !== void 0;
	                var arrayCount = undefined;
	                var semantic = regexResult[1];
	                if (!semantic) {
	                    semantic = _NameSemanticsPair2.default[variableType][name];
	                    if (!semantic) {
	                        semantic = variableType === "uniform" ? "USER_VALUE" : name.toUpperCase();
	                    }
	                }
	                if (isArray) {
	                    arrayCount = parseInt(regexResult[6], 10);
	                    if (isNaN(arrayCount)) {
	                        arrayCount = regexResult[6];
	                    }
	                }
	                result[name] = {
	                    semantic: semantic,
	                    name: name,
	                    type: type,
	                    precision: precision,
	                    attributes: rawAnnotations ? JSON.parse(SortTransformUtility.asValidJSON(rawAnnotations)) : {},
	                    isArray: isArray,
	                    count: arrayCount
	                };
	            }
	            return result;
	        }
	    }]);
	
	    return SortTransformUtility;
	}();
	
	exports.default = SortTransformUtility;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function asGLConstantArgs(args, length) {
	    if (args.length !== length) {
	        throw new Error("Unmatching argument count on preference parse");
	    }
	    return args.map(function (arg) {
	        var argNum = WebGLRenderingContext[arg];
	        if (typeof argNum !== "number") {
	            throw new Error("Unknown WebGL constant " + arg + " was specified");
	        }
	        return argNum;
	    });
	}
	function asNumberArgs(args, length) {
	    if (args.length !== length) {
	        throw new Error("Unmatching argument count on preference parse");
	    }
	    return args.map(function (arg) {
	        var argNum = Number.parseFloat(arg);
	        if (isNaN(argNum)) {
	            throw new Error("Failed to parse number on preference parsing");
	        }
	        return argNum;
	    });
	}
	function asBooleanArgs(args, length) {
	    if (args.length !== length) {
	        throw new Error("Unmatching argument count on preference parse");
	    }
	    return args.map(function (arg) {
	        if (arg !== "true" && arg !== "false") {
	            throw new Error(arg + " is not boolean");
	        }
	        return arg === "true";
	    });
	}
	exports.default = {
	    Enable: function Enable(state, args) {
	        var enableTarget = WebGLRenderingContext[args[0]];
	        if (typeof enableTarget !== "number") {
	            throw new Error("Unknown WebGL constant \"" + args[0] + "\" was specified on @Enable");
	        }
	        state.enable.push(enableTarget);
	    },
	    Disable: function Disable(state, args) {
	        var disableTarget = WebGLRenderingContext[args[0]];
	        if (typeof disableTarget !== "number") {
	            throw new Error("Unknown WebGL constant \"" + args[0] + "\" was specified on @Disable");
	        }
	        var index = state.enable.indexOf(disableTarget);
	        if (index !== index) {
	            state.enable.splice(index, 1);
	        }
	    },
	    BlendFunc: function BlendFunc(state, args) {
	        var config = asGLConstantArgs(args, 2);
	        state.functions.blendFuncSeparate = [config[0], config[1], config[0], config[1]];
	    },
	    BlendFuncSeparate: function BlendFuncSeparate(state, args) {
	        state.functions.blendFuncSeparate = asGLConstantArgs(args, 4);
	    },
	    BlendEquation: function BlendEquation(state, args) {
	        var config = asGLConstantArgs(args, 1);
	        state.functions.blendEquationSeparate = [config[0], config[0]];
	    },
	    BlendEquationSeparate: function BlendEquationSeparate(state, args) {
	        state.functions.blendEquationSeparate = asGLConstantArgs(args, 4);
	    },
	    BlendColor: function BlendColor(state, args) {
	        state.functions.blendColor = asNumberArgs(args, 4);
	    },
	    ColorMask: function ColorMask(state, args) {
	        state.functions.colorMask = asBooleanArgs(args, 4);
	        state.enable.push(WebGLRenderingContext.COLOR_WRITEMASK);
	    },
	    CullFace: function CullFace(state, args) {
	        state.functions.cullFace = asGLConstantArgs(args, 1);
	    },
	    DepthFunc: function DepthFunc(state, args) {
	        state.functions.depthFunc = asGLConstantArgs(args, 1);
	    },
	    DepthRange: function DepthRange(state, args) {
	        state.functions.depthRange = asNumberArgs(args, 2);
	    },
	    FrontFace: function FrontFace(state, args) {
	        state.functions.frontFace = asGLConstantArgs(args, 1);
	    },
	    LineWidth: function LineWidth(state, args) {
	        state.functions.lineWidth = asNumberArgs(args, 1);
	    },
	    PolygonOffset: function PolygonOffset(state, args) {
	        state.functions.polygonOffset = asNumberArgs(args, 2);
	        state.enable.push(WebGLRenderingContext.POLYGON_OFFSET_FILL);
	    },
	    Scissor: function Scissor(state, args) {
	        state.functions.scissor = asNumberArgs(args, 4);
	        state.enable.push(WebGLRenderingContext.SCISSOR_TEST);
	    },
	    ExposeMacro: function ExposeMacro(state, args) {
	        return;
	    }
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!WebGLRenderingContext.ONE) {
	    throw new Error("WebGLRenderingContext constant can not be retrived!");
	}
	var gl = WebGLRenderingContext;
	var result = {
	    vec2: gl.FLOAT_VEC2,
	    vec3: gl.FLOAT_VEC3,
	    vec4: gl.FLOAT_VEC4,
	    ivec2: gl.INT_VEC2,
	    ivec3: gl.INT_VEC3,
	    ivec4: gl.INT_VEC4,
	    bvec2: gl.BOOL_VEC2,
	    bvec3: gl.BOOL_VEC3,
	    bvec4: gl.BOOL_VEC4,
	    float: gl.FLOAT,
	    int: gl.INT,
	    bool: gl.BOOL,
	    sampler2D: gl.SAMPLER_2D,
	    samplerCube: gl.SAMPLER_CUBE,
	    mat4: gl.FLOAT_MAT4,
	    mat3: gl.FLOAT_MAT3,
	    mat2: gl.FLOAT_MAT2
	};
	exports.default = result;

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    attribute: {
	        position: "POSITION",
	        normal: "NORMAL",
	        texCoord: "TEXCOORD"
	    },
	    uniform: {
	        _time: "TIME",
	        _viewportSize: "VIEWPORT_SIZE",
	        _matL: "LOCAL",
	        _matM: "MODEL",
	        _matV: "VIEW",
	        _matP: "PROJECTION",
	        _matVM: "MODELVIEW",
	        _matPVM: "MODELVIEWPROJECTION",
	        _matIM: "MODELINVERSE",
	        _matIV: "VIEWINVERSE",
	        _matIP: "PROJECTIONINVERSE",
	        _matIVM: "MODELVIEWINVERSE",
	        _matIPVM: "MODELVIEWPROJECTIONINVERSE",
	        _matITM: "MODELINVERSETRANSPOSE",
	        _matITVM: "MODELVIEWINVERSETRANSPOSE"
	    }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ImportResolver = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _CacheResolver2 = __webpack_require__(3);
	
	var _CacheResolver3 = _interopRequireDefault(_CacheResolver2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	                step(generator["throw"](value));
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
	
	var ImportResolver = exports.ImportResolver = function (_CacheResolver) {
	    _inherits(ImportResolver, _CacheResolver);
	
	    function ImportResolver() {
	        _classCallCheck(this, ImportResolver);
	
	        var _this = _possibleConstructorReturn(this, (ImportResolver.__proto__ || Object.getPrototypeOf(ImportResolver)).call(this, function (str) {
	            var regex = /^https?:\/\/.*/gm;
	            return regex.test(str) ? ImportResolver._toAbsolute(str) : str;
	        }));
	
	        _this.staticImports = {};
	        return _this;
	    }
	
	    _createClass(ImportResolver, [{
	        key: "resolve",
	        value: function resolve(path) {
	            var _this2 = this;
	
	            return _get(ImportResolver.prototype.__proto__ || Object.getPrototypeOf(ImportResolver.prototype), "resolve", this).call(this, path, function (abs) {
	                return _this2._resolve(path);
	            });
	        }
	    }, {
	        key: "_resolve",
	        value: function _resolve(path) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this.staticImports[path]) {
	                                    _context.next = 4;
	                                    break;
	                                }
	
	                                return _context.abrupt("return", this.staticImports[path]);
	
	                            case 4:
	                                _context.next = 6;
	                                return this._fromExternal(path);
	
	                            case 6:
	                                return _context.abrupt("return", _context.sent);
	
	                            case 7:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "_fromExternal",
	        value: function _fromExternal(path) {
	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();
	                xhr.open("GET", path);
	                xhr.onload = function (v) {
	                    resolve(xhr.responseText);
	                };
	                xhr.onerror = function (e) {
	                    reject(e);
	                };
	                xhr.send();
	            });
	        }
	    }], [{
	        key: "_toAbsolute",
	        value: function _toAbsolute(href) {
	            var link = document.createElement("a");
	            link.href = href;
	            return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
	        }
	    }]);
	
	    return ImportResolver;
	}(_CacheResolver3.default);
	
	exports.default = new ImportResolver();

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DefaultMacro = __webpack_require__(45);
	
	var _DefaultMacro2 = _interopRequireDefault(_DefaultMacro);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Manage macros which would be appended head of all shaders grimoire.js would load.
	 */
	var MacroRegistory = function () {
	    function MacroRegistory() {
	        _classCallCheck(this, MacroRegistory);
	
	        /**
	         * Macro string which generated by registored macro.
	         * @type {string}
	         */
	        this.macroString = "";
	        /**
	         * The map of macro.
	         */
	        this._macro = {};
	        /**
	         * Handlers functions for changing macro.
	         */
	        this._observers = [];
	        for (var key in _DefaultMacro2.default) {
	            this.setValue(key, _DefaultMacro2.default[key]);
	        }
	    }
	    /**
	     * Set the value of macros.
	     * @param {string}    key [description]
	     * @param {string =   null}        val [description]
	     */
	
	
	    _createClass(MacroRegistory, [{
	        key: "setValue",
	        value: function setValue(key) {
	            var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	            if (this._macro[key] !== val) {
	                this._macro[key] = val;
	                this.macroString = this._getMacroString();
	                this._notifyMacroChanged();
	            }
	        }
	        /**
	         * Get the value of macro.
	         * @param  {string} key [description]
	         * @return {string}     [description]
	         */
	
	    }, {
	        key: "getValue",
	        value: function getValue(key) {
	            return this._macro[key];
	        }
	    }, {
	        key: "addObserver",
	        value: function addObserver(handler) {
	            this._observers.push(handler);
	        }
	    }, {
	        key: "removeObserver",
	        value: function removeObserver(handler) {
	            for (var i = 0; i < this._observers.length; i++) {
	                if (this._observers[i] === handler) {
	                    this._observers.splice(i, 1);
	                }
	            }
	        }
	    }, {
	        key: "_getMacroString",
	        value: function _getMacroString() {
	            var result = "";
	            for (var key in this._macro) {
	                result += this._genSingleMacroString(key, this._macro[key]);
	            }
	            return result;
	        }
	    }, {
	        key: "_notifyMacroChanged",
	        value: function _notifyMacroChanged() {
	            for (var i = 0; i < this._observers.length; i++) {
	                this._observers[i]();
	            }
	        }
	        /**
	         * Generate macro string for single macro
	         * @param  {string} key [description]
	         * @param  {string} val [description]
	         * @return {string}     [description]
	         */
	
	    }, {
	        key: "_genSingleMacroString",
	        value: function _genSingleMacroString(key, val) {
	            if (val === void 0) {
	                throw new Error("Macro value of " + key + " can't be undefined");
	            }
	            if (val === null) {
	                return "#define " + key + "\n";
	            } else {
	                return "#define " + key + " " + val + "\n";
	            }
	        }
	    }]);
	
	    return MacroRegistory;
	}();
	
	exports.default = MacroRegistory;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    "GRIMOIRE": null,
	    "WEBGL_VERSION": "1"
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Technique = __webpack_require__(47);
	
	var _Technique2 = _interopRequireDefault(_Technique);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Material = function () {
	    function Material(gl, techniqueRecipes) {
	        _classCallCheck(this, Material);
	
	        this.gl = gl;
	        this.techniqueRecipes = techniqueRecipes;
	        this.argumentDeclarations = {};
	        this.arguments = {};
	        this.macroDeclarations = {};
	        this.techniques = {};
	        this._macroObserver = {};
	        for (var key in techniqueRecipes) {
	            this.techniques[key] = new _Technique2.default(this, techniqueRecipes[key]);
	        }
	    }
	
	    _createClass(Material, [{
	        key: "draw",
	        value: function draw(arg) {
	            var technique = this.techniques[arg.technique];
	            if (technique) {
	                technique.draw(arg);
	            }
	        }
	    }, {
	        key: "addMacroObserver",
	        value: function addMacroObserver(key, macroDeclaration, onChanged) {
	            if (!this._macroObserver[key]) {
	                this._macroObserver[key] = [];
	            }
	            this._macroObserver[key].push(onChanged);
	            this.macroDeclarations[key] = macroDeclaration;
	        }
	    }, {
	        key: "setMacroValue",
	        value: function setMacroValue(key, value) {
	            if (this._macroObserver[key]) {
	                this._macroObserver[key].forEach(function (o) {
	                    return o(value);
	                });
	            }
	        }
	    }, {
	        key: "addArgument",
	        value: function addArgument(key, argumentDeclaration) {
	            this.argumentDeclarations[key] = argumentDeclaration;
	        }
	    }, {
	        key: "deleteArgument",
	        value: function deleteArgument(key) {
	            delete this.argumentDeclarations[key];
	        }
	    }]);
	
	    return Material;
	}();
	
	exports.default = Material;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Pass = __webpack_require__(48);
	
	var _Pass2 = _interopRequireDefault(_Pass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Technique = function () {
	    function Technique(material, recipe) {
	        _classCallCheck(this, Technique);
	
	        this.material = material;
	        this.passes = [];
	        if (recipe.drawOrder === "Auto") {
	            this.drawOrder = "UseAlpha";
	        } else {
	            this.drawOrder = recipe.drawOrder;
	        }
	        this.passes = recipe.passes.map(function (p) {
	            return new _Pass2.default(material, p);
	        });
	    }
	
	    _createClass(Technique, [{
	        key: "draw",
	        value: function draw(args) {
	            for (var i = 0; i < this.passes.length; i++) {
	                this.passes[i].draw(args);
	            }
	        }
	    }, {
	        key: "dispose",
	        value: function dispose() {
	            this.passes.forEach(function (p) {
	                return p.dispose();
	            });
	        }
	    }]);
	
	    return Technique;
	}();
	
	exports.default = Technique;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shader = __webpack_require__(49);
	
	var _Shader2 = _interopRequireDefault(_Shader);
	
	var _Geometry = __webpack_require__(50);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	var _UniformResolverRegistry = __webpack_require__(51);
	
	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);
	
	var _Program = __webpack_require__(52);
	
	var _Program2 = _interopRequireDefault(_Program);
	
	var _header = __webpack_require__(55);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Pass = function () {
	    function Pass(material, passRecipe) {
	        var _this = this;
	
	        _classCallCheck(this, Pass);
	
	        this.material = material;
	        this.passRecipe = passRecipe;
	        this._macro = {};
	        var registers = _UniformResolverRegistry2.default.generateRegisterers(material, passRecipe);
	        this._registers = registers.registerers;
	        this._disposers = registers.disposers;
	        this._gl = material.gl;
	        this.program = new _Program2.default(this._gl);
	        this.fs = new _Shader2.default(this._gl, WebGLRenderingContext.FRAGMENT_SHADER);
	        this.vs = new _Shader2.default(this._gl, WebGLRenderingContext.VERTEX_SHADER);
	
	        var _loop = function _loop(key) {
	            var macro = passRecipe.macros[key];
	            _this._macro[macro.macroName] = macro.value;
	            _this.material.addMacroObserver(key, {
	                converter: macro.type === "bool" ? "Boolean" : "Number",
	                default: macro.value
	            }, function (value) {
	                if (macro.type === "bool") {
	                    _this._macro[macro.macroName] = value ? "" : undefined;
	                } else {
	                    _this._macro[macro.macroName] = value;
	                }
	                _this._updateProgram();
	            });
	        };
	
	        for (var key in passRecipe.macros) {
	            _loop(key);
	        }
	        this._updateProgram();
	        this._disables = Pass._glEnableTargets.concat();
	        for (var i = 0; i < passRecipe.states.enable.length; i++) {
	            var enable = passRecipe.states.enable[i];
	            var index = this._disables.indexOf(enable);
	            if (index > -1) {
	                this._disables.splice(index, 1);
	            }
	        }
	    }
	
	    _createClass(Pass, [{
	        key: "draw",
	        value: function draw(args) {
	            this.program.use();
	            for (var i = 0; i < this._registers.length; i++) {
	                this._registers[i](this.program.uniforms, args);
	            }
	            this._configure();
	            for (var key in this.passRecipe.attributes) {
	                var attribute = this.passRecipe.attributes[key];
	                _Geometry2.default.bindBufferToAttribute(args.geometry, this.program, key, attribute.semantic);
	            }
	            _Geometry2.default.drawWithCurrentVertexBuffer(args.geometry, args.targetBuffer, args.drawCount, args.drawOffset);
	        }
	    }, {
	        key: "dispose",
	        value: function dispose() {
	            for (var i = 0; i < this._disposers.length; i++) {
	                this._disposers[i]();
	            }
	        }
	    }, {
	        key: "_configure",
	        value: function _configure() {
	            var states = this.passRecipe.states;
	            var functions = this.passRecipe.states.functions;
	            for (var i = 0; i < states.enable.length; i++) {
	                this._gl.enable(states.enable[i]);
	            }
	            for (var _i = 0; _i < this._disables.length; _i++) {
	                this._gl.disable(this._disables[_i]);
	            }
	            if (functions.blendColor) {
	                this._gl.blendColor(functions.blendColor[0], functions.blendColor[1], functions.blendColor[2], functions.blendColor[3]);
	            }
	            if (functions.blendEquationSeparate) {
	                this._gl.blendEquationSeparate(functions.blendEquationSeparate[0], functions.blendEquationSeparate[1]);
	            }
	            if (functions.blendFuncSeparate) {
	                this._gl.blendFuncSeparate(functions.blendFuncSeparate[0], functions.blendFuncSeparate[1], functions.blendFuncSeparate[2], functions.blendFuncSeparate[3]);
	            }
	            if (functions.colorMask) {
	                this._gl.colorMask(functions.colorMask[0], functions.colorMask[1], functions.colorMask[2], functions.colorMask[3]);
	            }
	            if (functions.cullFace) {
	                this._gl.cullFace(functions.cullFace[0]);
	            }
	            if (functions.depthFunc) {
	                this._gl.depthFunc(functions.depthFunc[0]);
	            }
	            if (functions.depthMask) {
	                this._gl.depthMask(functions.depthMask[0]);
	            }
	            if (functions.depthRange) {
	                this._gl.depthRange(functions.depthRange[0], functions.depthRange[1]);
	            }
	            if (functions.frontFace) {
	                this._gl.frontFace(functions.frontFace[0]);
	            }
	            if (functions.lineWidth) {
	                this._gl.lineWidth(functions.lineWidth[0]);
	            }
	            if (functions.polygonOffset) {
	                this._gl.polygonOffset(functions.polygonOffset[0], functions.polygonOffset[1]);
	            }
	            if (functions.scissor) {
	                this._gl.scissor(functions.scissor[0], functions.scissor[1], functions.scissor[2], functions.scissor[3]);
	            }
	        }
	    }, {
	        key: "_updateProgram",
	        value: function _updateProgram() {
	            this.fs.update(this._generateShaderCode("FS"));
	            this.vs.update(this._generateShaderCode("VS"));
	            this.program.update([this.vs, this.fs]);
	        }
	    }, {
	        key: "_generateShaderCode",
	        value: function _generateShaderCode(shaderType) {
	            return "#define " + shaderType + "\n" + this._macroCode() + "\n" + _header2.default + "/*BEGINNING OF USER CODE*/\n" + (shaderType === "VS" ? this.passRecipe.vertex : this.passRecipe.fragment);
	        }
	    }, {
	        key: "_macroCode",
	        value: function _macroCode() {
	            var macroCode = "";
	            for (var macroName in this._macro) {
	                macroCode += "#define " + macroName + " " + this._macro[macroName] + "\n";
	            }
	            return macroCode;
	        }
	    }]);
	
	    return Pass;
	}();
	
	exports.default = Pass;
	
	Pass._glEnableTargets = [WebGLRenderingContext.CULL_FACE, WebGLRenderingContext.DEPTH_TEST, WebGLRenderingContext.STENCIL_TEST, WebGLRenderingContext.BLEND, WebGLRenderingContext.SCISSOR_TEST, WebGLRenderingContext.DITHER, WebGLRenderingContext.POLYGON_OFFSET_FILL, WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE, WebGLRenderingContext.SAMPLE_COVERAGE];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceBase2 = __webpack_require__(24);
	
	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Shader = function (_ResourceBase) {
	    _inherits(Shader, _ResourceBase);
	
	    function Shader(gl, type, sourceCode) {
	        _classCallCheck(this, Shader);
	
	        var _this = _possibleConstructorReturn(this, (Shader.__proto__ || Object.getPrototypeOf(Shader)).call(this, gl));
	
	        _this.type = type;
	        _this.sourceCode = sourceCode;
	        _this.shader = gl.createShader(type);
	        if (sourceCode) {
	            _this.update(sourceCode);
	        }
	        return _this;
	    }
	
	    _createClass(Shader, [{
	        key: "update",
	        value: function update(source) {
	            this.gl.shaderSource(this.shader, source);
	            this.gl.compileShader(this.shader);
	            if (!this.gl.getShaderParameter(this.shader, WebGLRenderingContext.COMPILE_STATUS)) {
	                throw new Error("Compiling shader failed.\nSourceCode:\n" + source + "\n\nErrorCode:" + this.gl.getShaderInfoLog(this.shader));
	            }
	            this.sourceCode = source;
	            this.valid = true;
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Shader.prototype.__proto__ || Object.getPrototypeOf(Shader.prototype), "destroy", this).call(this);
	            this.gl.deleteShader(this.shader);
	        }
	    }]);
	
	    return Shader;
	}(_ResourceBase3.default);
	
	exports.default = Shader;

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The geometry class for managing buffer resource
	 */
	var Geometry = function () {
	    function Geometry(vertices, accessors, indices, aabb) {
	        _classCallCheck(this, Geometry);
	
	        this.vertices = vertices;
	        this.accessors = accessors;
	        this.indices = indices;
	        this.aabb = aabb;
	        // check all buffers requested by attribute variables are all contained in vertices
	        for (var semantics in accessors) {
	            var accessor = accessors[semantics];
	            if (vertices[accessor.bufferName] === void 0) {
	                throw new Error("Non existing buffer \"" + accessor.bufferName + "\" was bind with \"" + semantics + "\".");
	            }
	        }
	    }
	
	    _createClass(Geometry, [{
	        key: "drawByDefault",
	        value: function drawByDefault(indexName, attribNames, program) {
	            var _this = this;
	
	            var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.MAX_VALUE;
	            var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
	            attribNames.forEach(function (name) {
	                Geometry.bindBufferToAttribute(_this, program, name, name);
	            });
	            Geometry.drawWithCurrentVertexBuffer(this, indexName, count, offset);
	        }
	        /**
	         * bind a vertex buffer to specified attribute variable.
	         * @param  {Geometry} geometry      [description]
	         * @param  {Program}  program       [description]
	         * @param  {string}   attributeName [description]
	         * @param  {string}   semantics    [description]
	         * @return {boolean}                [description]
	         */
	
	    }], [{
	        key: "bindBufferToAttribute",
	        value: function bindBufferToAttribute(geometry, program, attributeName, semantics) {
	            var index = program.findAttributeLocation(attributeName);
	            if (index < 0) {
	                return false;
	            }
	            var accessors = geometry.accessors[semantics];
	            if (!accessors) {
	                throw new Error("Specified buffer \"" + semantics + " was not found on this geometry while attempt to bind \"" + attributeName + "\" of attribute variables.\n\n\t  All of the vertex buffer available on this geometry is " + Object.keys(geometry.accessors) + "\"");
	            }
	            var buffer = geometry.vertices[accessors.bufferName];
	            buffer.bind();
	            program.gl.vertexAttribPointer(index, accessors.size, accessors.type, false, accessors.stride, accessors.offset);
	            return true;
	        }
	    }, {
	        key: "drawWithCurrentVertexBuffer",
	        value: function drawWithCurrentVertexBuffer(geometry, indexName) {
	            var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE;
	            var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	            var targetIndex = geometry.indices[indexName];
	            if (targetIndex === void 0) {
	                throw new Error("Specified index buffer \"" + indexName + "\" was not found on this geometry.All of the index buffer available on this geometry is \"" + Object.keys(geometry.indices) + "\"");
	            }
	            targetIndex.index.bind();
	            targetIndex.index.gl.drawElements(targetIndex.topology, Math.min(targetIndex.count, count), targetIndex.type, Math.min(offset * targetIndex.byteSize + targetIndex.byteOffset, (targetIndex.count - 1) * targetIndex.byteSize));
	        }
	    }]);
	
	    return Geometry;
	}();
	
	exports.default = Geometry;
	
	Geometry._lastGeometry = new Map();

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UniformResolverRegistry = exports.UniformResolverRegistry = function () {
	    function UniformResolverRegistry() {
	        _classCallCheck(this, UniformResolverRegistry);
	
	        this._generators = {};
	    }
	
	    _createClass(UniformResolverRegistry, [{
	        key: "add",
	        value: function add(semantic, generator) {
	            if (typeof generator !== "function") {
	                throw new Error("secound argument of add must be function");
	            }
	            this._generators[semantic.toUpperCase()] = generator;
	        }
	    }, {
	        key: "generateRegisterers",
	        value: function generateRegisterers(material, passInfo) {
	            var registerers = [],
	                disposers = [];
	            for (var key in passInfo.uniforms) {
	                var valueInfo = passInfo.uniforms[key];
	                var semantic = valueInfo.semantic;
	                var registeredGenerator = this._generators[semantic];
	                if (!registeredGenerator) {
	                    throw new Error("There was no suitable registerer for specified semantic " + semantic);
	                }
	                var registerer = registeredGenerator(valueInfo, material);
	                if (typeof registerer === "function") {
	                    registerers.push(registerer);
	                } else {
	                    registerers.push(registerer.register);
	                    if (registerer.dispose) {
	                        disposers.push(registerer.dispose);
	                    }
	                }
	            }
	            return {
	                registerers: registerers,
	                disposers: disposers
	            };
	        }
	    }]);
	
	    return UniformResolverRegistry;
	}();
	
	exports.default = new UniformResolverRegistry();

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceCache = __webpack_require__(53);
	
	var _ResourceCache2 = _interopRequireDefault(_ResourceCache);
	
	var _UniformProxy = __webpack_require__(54);
	
	var _UniformProxy2 = _interopRequireDefault(_UniformProxy);
	
	var _ResourceBase2 = __webpack_require__(24);
	
	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Manages WebGLProgram related stuff.
	 */
	var Program = function (_ResourceBase) {
	    _inherits(Program, _ResourceBase);
	
	    function Program(gl) {
	        _classCallCheck(this, Program);
	
	        var _this = _possibleConstructorReturn(this, (Program.__proto__ || Object.getPrototypeOf(Program)).call(this, gl));
	
	        _this._uniformLocations = {};
	        _this._attributeLocations = {};
	        _this.uniforms = new _UniformProxy2.default(_this);
	        _this.program = gl.createProgram();
	        return _this;
	    }
	    /**
	     * Check this program is the last used one or not.
	     * @return {boolean} [description]
	     */
	
	
	    _createClass(Program, [{
	        key: "update",
	
	        /**
	         * Update program with shader instance.
	         * The array might be set of vertex shader and fragment shader couple.
	         * @param {Shader[]} shaders [description]
	         */
	        value: function update(shaders) {
	            var _this2 = this;
	
	            if (this.valid) {
	                // detach all attached shaders previously
	                var preciousShaders = this.gl.getAttachedShaders(this.program);
	                preciousShaders.forEach(function (s) {
	                    return _this2.gl.detachShader(_this2.program, s);
	                });
	                this._uniformLocations = {}; // reset location caches
	                this._attributeLocations = {};
	            }
	            // attach all shader passed
	            shaders.forEach(function (shader) {
	                _this2.gl.attachShader(_this2.program, shader.shader);
	            });
	            this.gl.linkProgram(this.program); // link program and check errors
	            if (!this.gl.getProgramParameter(this.program, WebGLRenderingContext.LINK_STATUS)) {
	                var errorLog = this.gl.getProgramInfoLog(this.program);
	                throw new Error("LINK FAILED\n" + errorLog);
	            }
	            this.valid = true;
	        }
	        /**
	         * Use this program for drawing.
	         */
	
	    }, {
	        key: "use",
	        value: function use() {
	            if (!this.isLastUsed) {
	                this.gl.useProgram(this.program);
	            }
	            this.uniforms.onUse();
	        }
	        /**
	         * Destroy this instance.
	         */
	
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Program.prototype.__proto__ || Object.getPrototypeOf(Program.prototype), "destroy", this).call(this);
	            this.gl.deleteProgram(this.program);
	        }
	        /**
	         * Fetch attribute location from this program.
	         * @param  {string} variableName [description]
	         * @return {number}              [description]
	         */
	
	    }, {
	        key: "findAttributeLocation",
	        value: function findAttributeLocation(variableName) {
	            if (this._attributeLocations[variableName] === void 0) {
	                this._attributeLocations[variableName] = this.gl.getAttribLocation(this.program, variableName);
	                this._safeEnableVertexAttribArray(this._attributeLocations[variableName]);
	                return this._attributeLocations[variableName];
	            } else {
	                return this._attributeLocations[variableName];
	            }
	        }
	        /**
	         * Fetch uniform location from this program
	         * @param  {string}               variableName [description]
	         * @return {WebGLUniformLocation}              [description]
	         */
	
	    }, {
	        key: "findUniformLocation",
	        value: function findUniformLocation(variableName) {
	            var location = this._uniformLocations[variableName];
	            if (location === void 0) {
	                return this._uniformLocations[variableName] = this.gl.getUniformLocation(this.program, variableName);
	            } else {
	                return location;
	            }
	        }
	    }, {
	        key: "_safeEnableVertexAttribArray",
	        value: function _safeEnableVertexAttribArray(location) {
	            if (location < 0) {
	                return;
	            }
	            this.gl.enableVertexAttribArray(location);
	        }
	    }, {
	        key: "isLastUsed",
	        get: function get() {
	            return _ResourceCache2.default.useProgramCheck(this.gl, this.program);
	        }
	    }]);
	
	    return Program;
	}(_ResourceBase3.default);
	
	exports.default = Program;

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ResourceCache = exports.ResourceCache = function () {
	    function ResourceCache() {
	        _classCallCheck(this, ResourceCache);
	
	        this._lastUsedPrograms = new Map();
	    }
	    /**
	     * Save the specified WebGLProgram as last used program.
	     * And check the specified program was used last time.
	     */
	
	
	    _createClass(ResourceCache, [{
	        key: "useProgramCheck",
	        value: function useProgramCheck(gl, program) {
	            if (this._lastUsedPrograms.get(gl) === program) {
	                return true;
	            }
	            this._lastUsedPrograms.set(gl, program);
	            return false;
	        }
	    }]);
	
	    return ResourceCache;
	}();
	
	exports.default = new ResourceCache();

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UniformProxy = function () {
	    function UniformProxy(program) {
	        _classCallCheck(this, UniformProxy);
	
	        this.program = program;
	        this._currentTextureRegister = 0;
	        this._gl = program.gl;
	    }
	
	    _createClass(UniformProxy, [{
	        key: "uniformBool",
	        value: function uniformBool(variableName, val) {
	            var _this = this;
	
	            this._pass(variableName, function (l) {
	                return _this._gl.uniform1i(l, val ? 1 : 0);
	            });
	        }
	    }, {
	        key: "uniformMatrix",
	        value: function uniformMatrix(variableName, mat) {
	            var _this2 = this;
	
	            this._pass(variableName, function (l) {
	                return _this2._gl.uniformMatrix4fv(l, false, mat.rawElements);
	            });
	        }
	    }, {
	        key: "uniformMatrixArray",
	        value: function uniformMatrixArray(variableName, matricies) {
	            var _this3 = this;
	
	            var length = matricies.length / 16;
	
	            var _loop = function _loop(i) {
	                _this3._passAsArray(variableName, i, function (l) {
	                    return _this3._gl.uniformMatrix4fv(l, false, new Float32Array(matricies.buffer, matricies.byteOffset + i * 64));
	                });
	            };
	
	            for (var i = 0; i < length; i++) {
	                _loop(i);
	            }
	        }
	    }, {
	        key: "uniformFloat",
	        value: function uniformFloat(variableName, val) {
	            var _this4 = this;
	
	            this._pass(variableName, function (l) {
	                return _this4._gl.uniform1f(l, val);
	            });
	        }
	    }, {
	        key: "uniformFloatArray",
	        value: function uniformFloatArray(variableName, val) {
	            var _this5 = this;
	
	            this._pass(variableName, function (l) {
	                return _this5._gl.uniform1fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformInt",
	        value: function uniformInt(variableName, val) {
	            var _this6 = this;
	
	            this._pass(variableName, function (l) {
	                return _this6._gl.uniform1i(l, val);
	            });
	        }
	    }, {
	        key: "uniformVector2",
	        value: function uniformVector2(variableName, val) {
	            var _this7 = this;
	
	            this._pass(variableName, function (l) {
	                return _this7._gl.uniform2f(l, val.X, val.Y);
	            });
	        }
	    }, {
	        key: "uniformIntVector2",
	        value: function uniformIntVector2(variableName, val) {
	            var _this8 = this;
	
	            this._pass(variableName, function (l) {
	                return _this8._gl.uniform2i(l, val.X, val.Y);
	            });
	        }
	    }, {
	        key: "uniformVector2Array",
	        value: function uniformVector2Array(variableName, val) {
	            var _this9 = this;
	
	            this._pass(variableName, function (l) {
	                return _this9._gl.uniform2fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformVector3",
	        value: function uniformVector3(variableName, val) {
	            var _this10 = this;
	
	            this._pass(variableName, function (l) {
	                return _this10._gl.uniform3f(l, val.X, val.Y, val.Z);
	            });
	        }
	    }, {
	        key: "uniformIntVector3",
	        value: function uniformIntVector3(variableName, val) {
	            var _this11 = this;
	
	            this._pass(variableName, function (l) {
	                return _this11._gl.uniform3i(l, val.X, val.Y, val.Z);
	            });
	        }
	    }, {
	        key: "uniformVector3Array",
	        value: function uniformVector3Array(variableName, val) {
	            var _this12 = this;
	
	            this._pass(variableName, function (l) {
	                return _this12._gl.uniform3fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformColor3",
	        value: function uniformColor3(variableName, val) {
	            var _this13 = this;
	
	            this._pass(variableName, function (l) {
	                return _this13._gl.uniform3f(l, val.R, val.G, val.B);
	            });
	        }
	    }, {
	        key: "uniformVector4",
	        value: function uniformVector4(variableName, val) {
	            var _this14 = this;
	
	            this._pass(variableName, function (l) {
	                return _this14._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
	            });
	        }
	    }, {
	        key: "uniformIntVector4",
	        value: function uniformIntVector4(variableName, val) {
	            var _this15 = this;
	
	            this._pass(variableName, function (l) {
	                return _this15._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
	            });
	        }
	    }, {
	        key: "uniformVector4Array",
	        value: function uniformVector4Array(variableName, val) {
	            var _this16 = this;
	
	            this._pass(variableName, function (l) {
	                return _this16._gl.uniform4fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformColor4",
	        value: function uniformColor4(variableName, val) {
	            var _this17 = this;
	
	            this._pass(variableName, function (l) {
	                return _this17._gl.uniform4f(l, val.R, val.G, val.B, val.A);
	            });
	        }
	    }, {
	        key: "uniformTexture2D",
	        value: function uniformTexture2D(variableName, val) {
	            if (val.valid) {
	                val.register(this._currentTextureRegister);
	                this.uniformInt(variableName, this._currentTextureRegister);
	                this._currentTextureRegister++;
	            } else {
	                console.warn("The texture assigned to '" + variableName + "' is not valid.");
	            }
	        }
	    }, {
	        key: "onUse",
	        value: function onUse() {
	            this._currentTextureRegister = 0;
	        }
	    }, {
	        key: "_pass",
	        value: function _pass(variableName, act) {
	            var location = this.program.findUniformLocation(variableName);
	            if (location) {
	                act(location);
	            }
	        }
	    }, {
	        key: "_passAsArray",
	        value: function _passAsArray(variableName, index, act) {
	            var location = this.program.findUniformLocation(variableName + "[" + index + "]");
	            if (location) {
	                act(location);
	            }
	        }
	    }]);
	
	    return UniformProxy;
	}();
	
	exports.default = UniformProxy;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "/*Header start*/\n// helper macros\n#ifdef FS\n  #define FS_PREC(prec,type) precision prec type;\n  #define VS_PREC(prec,type)\n#endif\n#ifdef VS\n#define VS_PREC(prec,type) precision prec type;\n#define FS_PREC(prec,type)\n#endif\n// constants\n#define PI 3.141592653589793\n#define E 2.718281828459045\n#define LN2 0.6931471805599453\n#define LN10 2.302585092994046\n#define LOG2E 1.4426950408889634\n#define LOG10E 0.4342944819032518\n#define SQRT2 1.4142135623730951\n#define SQRT1_2 0.7071067811865476\n/*Header end*/\n"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _grimoirejs = __webpack_require__(8);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _MaterialFactory = __webpack_require__(37);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MaterialManagerComponent = function (_Component) {
	    _inherits(MaterialManagerComponent, _Component);
	
	    function MaterialManagerComponent() {
	        _classCallCheck(this, MaterialManagerComponent);
	
	        return _possibleConstructorReturn(this, (MaterialManagerComponent.__proto__ || Object.getPrototypeOf(MaterialManagerComponent)).apply(this, arguments));
	    }
	
	    _createClass(MaterialManagerComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var ns = _grimoirejs2.default.ns(this.name.ns);
	            this.companion.set(ns("MaterialFactory"), new _MaterialFactory2.default(this.companion.get("gl")));
	        }
	    }]);
	
	    return MaterialManagerComponent;
	}(_Component3.default);
	
	exports.default = MaterialManagerComponent;
	
	MaterialManagerComponent.attributes = {};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SceneComponent = __webpack_require__(19);
	
	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);
	
	var _MaterialContainerComponent = __webpack_require__(34);
	
	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);
	
	var _TransformComponent = __webpack_require__(17);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _GLM = __webpack_require__(12);
	
	var _GLM2 = _interopRequireDefault(_GLM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var vec3 = _GLM2.default.vec3;
	
	var MeshRenderer = function (_Component) {
	    _inherits(MeshRenderer, _Component);
	
	    function MeshRenderer() {
	        _classCallCheck(this, MeshRenderer);
	
	        var _this = _possibleConstructorReturn(this, (MeshRenderer.__proto__ || Object.getPrototypeOf(MeshRenderer)).apply(this, arguments));
	
	        _this._priortyCalcCache = new Float32Array(3);
	        return _this;
	    }
	    /**
	    * Find scene tag recursively.
	    * @param  {GomlNode}       node [the node to searching currently]
	    * @return {SceneComponent}      [the scene component found]
	    */
	
	
	    _createClass(MeshRenderer, [{
	        key: "getRenderingPriorty",
	        value: function getRenderingPriorty(camera, cameraMoved, lastPriorty) {
	            vec3.add(this._priortyCalcCache, camera.transform.globalPosition.rawElements, this._geometry.aabb.Center.rawElements);
	            vec3.sub(this._priortyCalcCache, this._priortyCalcCache, this._transformComponent.globalPosition.rawElements);
	            return this._materialContainer.getDrawPriorty(vec3.sqrLen(this._priortyCalcCache)); // Obtains distance between camera and center of aabb
	        }
	    }, {
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("targetBuffer").boundTo("_targetBuffer");
	            this.getAttributeRaw("layer").boundTo("_layer");
	            this.getAttributeRaw("drawOffset").boundTo("_drawOffset");
	            this.getAttributeRaw("drawCount").boundTo("_drawCount");
	            this.getAttributeRaw("geometry").boundTo("_geometry");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._transformComponent = this.node.getComponent(_TransformComponent2.default);
	            this._materialContainer = this.node.getComponent(_MaterialContainerComponent2.default);
	            this._containedScene = MeshRenderer._findContainedScene(this.node);
	            this._containedScene.queueRegistory.addRenderable(this);
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            this._containedScene.queueRegistory.removeRenderable(this);
	        }
	    }, {
	        key: "render",
	        value: function render(args) {
	            if (!this.node.isActive || !this.enabled || this._layer !== args.layer) {
	                return;
	            }
	            if (!this._geometry || !args.material && !this._materialContainer.ready) {
	                return; // material is not instanciated yet.
	            }
	            var renderArgs = {
	                targetBuffer: this._targetBuffer,
	                geometry: this._geometry,
	                attributeValues: null,
	                camera: args.camera,
	                transform: this._transformComponent,
	                buffers: args.buffers,
	                viewport: args.viewport,
	                drawCount: this._drawCount,
	                drawOffset: this._drawOffset,
	                sceneDescription: args.sceneDescription,
	                defaultTexture: args.defaultTexture,
	                technique: args.technique
	            };
	            if (args.material) {
	                renderArgs.attributeValues = args.materialArgs;
	                args.material.draw(renderArgs);
	            } else {
	                renderArgs.attributeValues = this._materialContainer.materialArgs;
	                this._materialContainer.material.draw(renderArgs);
	            }
	            this.node.emit("render", args);
	        }
	    }], [{
	        key: "_findContainedScene",
	        value: function _findContainedScene(node) {
	            if (node.parent) {
	                var scene = node.parent.getComponent(_SceneComponent2.default);
	                if (scene) {
	                    return scene;
	                } else {
	                    return MeshRenderer._findContainedScene(node.parent);
	                }
	            } else {
	                return null;
	            }
	        }
	    }]);
	
	    return MeshRenderer;
	}(_Component3.default);
	
	exports.default = MeshRenderer;
	
	MeshRenderer.attributes = {
	    geometry: {
	        converter: "Geometry",
	        default: "quad"
	    },
	    targetBuffer: {
	        converter: "String",
	        default: "default"
	    },
	    layer: {
	        converter: "String",
	        default: "default"
	    },
	    drawCount: {
	        converter: "Number",
	        default: Number.MAX_VALUE
	    },
	    drawOffset: {
	        converter: "Number",
	        default: 0
	    }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(14);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Quaternion = __webpack_require__(18);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _Matrix = __webpack_require__(15);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _TransformComponent = __webpack_require__(17);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MouseCameraControlComponent = function (_Component) {
	    _inherits(MouseCameraControlComponent, _Component);
	
	    function MouseCameraControlComponent() {
	        _classCallCheck(this, MouseCameraControlComponent);
	
	        var _this = _possibleConstructorReturn(this, (MouseCameraControlComponent.__proto__ || Object.getPrototypeOf(MouseCameraControlComponent)).apply(this, arguments));
	
	        _this._lastScreenPos = null;
	        _this._xsum = 0;
	        _this._ysum = 0;
	        return _this;
	    }
	
	    _createClass(MouseCameraControlComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("rotateSpeed").boundTo("_rotateSpeed");
	            this.getAttributeRaw("zoomSpeed").boundTo("_zoomSpeed");
	            this.getAttributeRaw("moveSpeed").boundTo("_moveSpeed");
	            this.getAttributeRaw("origin").boundTo("_origin");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            var center = this.getAttribute("center");
	            var distance = null;
	            if (center !== null) {
	                console.warn("The attribute 'center' is deprecated now. This attribute would be removed on next version. Use 'distance' instead.");
	                distance = center;
	            } else {
	                distance = this.getAttribute("distance");
	            }
	            this._transform = this.node.getComponent(_TransformComponent2.default);
	            this._initialRight = _Vector2.default.copy(this._transform.right);
	            this._initialUp = _Vector2.default.copy(this._transform.up);
	            this._initialDirection = _Vector2.default.copy(this._transform.forward.negateThis());
	            this._initialRotation = this._transform.localRotation;
	            var origin = this.getAttribute("origin");
	            if (distance !== null) {
	                this._origin = this._transform.localPosition.addWith(this._transform.forward.multiplyWith(distance));
	            } else {
	                this._origin = origin;
	            }
	            var scriptTag = this.companion.get("canvasElement");
	            scriptTag.addEventListener("mousemove", this._mouseMove.bind(this));
	            scriptTag.addEventListener("contextmenu", this._contextMenu.bind(this));
	            scriptTag.addEventListener("mousewheel", this._mouseWheel.bind(this));
	        }
	    }, {
	        key: "_contextMenu",
	        value: function _contextMenu(m) {
	            m.preventDefault();
	        }
	    }, {
	        key: "_mouseMove",
	        value: function _mouseMove(m) {
	            if (this._lastScreenPos === null) {
	                this._lastScreenPos = {
	                    x: m.screenX,
	                    y: m.screenY
	                };
	                return;
	            }
	            var updated = false;
	            var diffX = m.screenX - this._lastScreenPos.x;
	            var diffY = m.screenY - this._lastScreenPos.y;
	            var distance = this._transform.localPosition.subtractWith(this._origin).magnitude;
	            if ((m.buttons & 1) > 0) {
	                this._xsum += diffX;
	                this._ysum += diffY;
	                this._ysum = Math.min(Math.PI * 50, this._ysum);
	                this._ysum = Math.max(-Math.PI * 50, this._ysum);
	                updated = true;
	            }
	            if ((m.buttons & 2) > 0) {
	                var moveX = -diffX * this._moveSpeed * 0.01;
	                var moveY = diffY * this._moveSpeed * 0.01;
	                this._origin = this._origin.addWith(this._transform.right.multiplyWith(moveX)).addWith(this._transform.up.multiplyWith(moveY));
	                distance = this._transform.localPosition.subtractWith(this._origin).magnitude;
	                updated = true;
	            }
	            if (updated) {
	                // rotate excution
	                var rotationVartical = _Quaternion2.default.angleAxis(-this._xsum * this._rotateSpeed * 0.01, this._initialUp);
	                var rotationHorizontal = _Quaternion2.default.angleAxis(-this._ysum * this._rotateSpeed * 0.01, this._initialRight);
	                var rotation = _Quaternion2.default.multiply(rotationVartical, rotationHorizontal);
	                var rotationMat = _Matrix2.default.rotationQuaternion(rotation);
	                var direction = _Matrix2.default.transformNormal(rotationMat, this._initialDirection);
	                this._transform.localPosition = this._origin.addWith(_Vector2.default.normalize(direction).multiplyWith(distance));
	                this._transform.localRotation = _Quaternion2.default.multiply(this._initialRotation, rotation);
	            }
	            this._lastScreenPos = {
	                x: m.screenX,
	                y: m.screenY
	            };
	        }
	    }, {
	        key: "_mouseWheel",
	        value: function _mouseWheel(m) {
	            var dir = _Vector2.default.normalize(_Vector2.default.subtract(this._transform.localPosition, this._origin));
	            var moveDist = -m.deltaY * this._zoomSpeed * 0.05;
	            var distance = _Vector2.default.subtract(this._origin, this._transform.localPosition).magnitude;
	            var nextDist = Math.max(1, distance - moveDist);
	            this._transform.localPosition = this._origin.addWith(dir.multiplyWith(nextDist));
	            m.preventDefault();
	        }
	    }]);
	
	    return MouseCameraControlComponent;
	}(_Component3.default);
	
	exports.default = MouseCameraControlComponent;
	
	MouseCameraControlComponent.attributes = {
	    rotateSpeed: {
	        default: 1,
	        converter: "Number"
	    },
	    zoomSpeed: {
	        default: 1,
	        converter: "Number"
	    },
	    moveSpeed: {
	        default: 1,
	        converter: "Number"
	    },
	    center: {
	        default: null,
	        converter: "Number"
	    },
	    distance: {
	        default: null,
	        converter: "Number"
	    },
	    origin: {
	        default: "0,0,0",
	        converter: "Vector3"
	    }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RenderBuffer = __webpack_require__(60);
	
	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _TextureSizeCalculator = __webpack_require__(61);
	
	var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RenderBufferComponent = function (_Component) {
	    _inherits(RenderBufferComponent, _Component);
	
	    function RenderBufferComponent() {
	        _classCallCheck(this, RenderBufferComponent);
	
	        return _possibleConstructorReturn(this, (RenderBufferComponent.__proto__ || Object.getPrototypeOf(RenderBufferComponent)).apply(this, arguments));
	    }
	
	    _createClass(RenderBufferComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            this.buffer = new _RenderBuffer2.default(this.companion.get("gl"));
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            this.buffer.destroy();
	            this.buffer = null;
	        }
	    }, {
	        key: "$resizeBuffer",
	        value: function $resizeBuffer(arg) {
	            var name = this.getAttribute("name");
	            if (!name) {
	                throw new Error("Attribute 'name' must be specified.");
	            }
	            var newSize = _TextureSizeCalculator2.default.getPow2Size(arg.width, arg.height);
	            this.buffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, newSize.width, newSize.height);
	            arg.bufferSizes[name] = { width: newSize.width, height: newSize.height };
	            arg.buffers[name] = this.buffer;
	        }
	    }]);
	
	    return RenderBufferComponent;
	}(_Component3.default);
	
	exports.default = RenderBufferComponent;
	
	RenderBufferComponent.attributes = {
	    name: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceBase2 = __webpack_require__(24);
	
	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RenderBuffer = function (_ResourceBase) {
	    _inherits(RenderBuffer, _ResourceBase);
	
	    function RenderBuffer(gl) {
	        _classCallCheck(this, RenderBuffer);
	
	        var _this = _possibleConstructorReturn(this, (RenderBuffer.__proto__ || Object.getPrototypeOf(RenderBuffer)).call(this, gl));
	
	        _this.renderBuffer = gl.createRenderbuffer();
	        return _this;
	    }
	
	    _createClass(RenderBuffer, [{
	        key: "update",
	        value: function update(format, width, height) {
	            this.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, this.renderBuffer);
	            this.gl.renderbufferStorage(WebGLRenderingContext.RENDERBUFFER, format, width, height);
	            this.valid = true;
	        }
	    }, {
	        key: "bind",
	        value: function bind() {
	            this.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, this.renderBuffer);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.gl.deleteRenderbuffer(this.renderBuffer);
	            _get(RenderBuffer.prototype.__proto__ || Object.getPrototypeOf(RenderBuffer.prototype), "destroy", this).call(this);
	        }
	    }]);
	
	    return RenderBuffer;
	}(_ResourceBase3.default);
	
	exports.default = RenderBuffer;

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TextureSizeCalculator = function () {
	    function TextureSizeCalculator() {
	        _classCallCheck(this, TextureSizeCalculator);
	    }
	
	    _createClass(TextureSizeCalculator, null, [{
	        key: "getPow2Size",
	        value: function getPow2Size(width, height) {
	            var nw = Math.pow(2, Math.log(width) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
	            var nh = Math.pow(2, Math.log(height) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
	            return {
	                width: nw,
	                height: nh
	            };
	        }
	    }]);
	
	    return TextureSizeCalculator;
	}();
	
	exports.default = TextureSizeCalculator;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RendererComponent = function (_Component) {
	    _inherits(RendererComponent, _Component);
	
	    function RendererComponent() {
	        _classCallCheck(this, RendererComponent);
	
	        var _this = _possibleConstructorReturn(this, (RendererComponent.__proto__ || Object.getPrototypeOf(RendererComponent)).apply(this, arguments));
	
	        _this._buffers = {};
	        _this._bufferSizes = {};
	        return _this;
	    }
	
	    _createClass(RendererComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var _this2 = this;
	
	            this._gl = this.companion.get("gl");
	            this._canvas = this.companion.get("canvasElement");
	            this._camera = this.getAttribute("camera");
	            this.getAttributeRaw("camera").watch(function (v) {
	                return _this2._camera = v;
	            });
	            this.getAttributeRaw("viewport").watch(function (v) {
	                _this2._viewportSizeGenerator = v;
	                _this2.$resizeCanvas();
	            });
	            this._viewportSizeGenerator = this.getAttribute("viewport");
	        }
	    }, {
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            // This should be called after mounting all of tree nodes in children
	            this.$resizeCanvas();
	        }
	    }, {
	        key: "$resizeCanvas",
	        value: function $resizeCanvas() {
	            this._viewportCache = this._viewportSizeGenerator(this._canvas);
	            if (this.node.children.length === 0) {
	                this.node.addChildByName("render-scene", {});
	            }
	            this.node.broadcastMessage("resizeBuffer", {
	                width: this._viewportCache.Width,
	                height: this._viewportCache.Height,
	                buffers: this._buffers,
	                bufferSizes: this._bufferSizes
	            });
	            this.node.broadcastMessage("bufferUpdated", {
	                buffers: this._buffers,
	                bufferSizes: this._bufferSizes
	            });
	        }
	    }, {
	        key: "$renderViewport",
	        value: function $renderViewport(args) {
	            this.node.broadcastMessage("render", {
	                camera: this._camera,
	                viewport: this._viewportCache,
	                bufferSizes: this._bufferSizes,
	                buffers: this._buffers,
	                loopIndex: args.loopIndex
	            });
	        }
	    }]);
	
	    return RendererComponent;
	}(_Component3.default);
	
	exports.default = RendererComponent;
	
	RendererComponent.attributes = {
	    camera: {
	        converter: "Component",
	        default: "camera",
	        target: "Camera"
	    },
	    viewport: {
	        converter: "Viewport",
	        default: "auto"
	    }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Color = __webpack_require__(64);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _LoopManagerComponent = __webpack_require__(32);
	
	var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RendererManagerComponent = function (_Component) {
	    _inherits(RendererManagerComponent, _Component);
	
	    function RendererManagerComponent() {
	        _classCallCheck(this, RendererManagerComponent);
	
	        return _possibleConstructorReturn(this, (RendererManagerComponent.__proto__ || Object.getPrototypeOf(RendererManagerComponent)).apply(this, arguments));
	    }
	
	    _createClass(RendererManagerComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("bgColor").boundTo("_bgColor");
	            this.getAttributeRaw("clearDepth").boundTo("_clearDepth");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.gl = this.companion.get("gl");
	        }
	    }, {
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            this.node.getComponent(_LoopManagerComponent2.default).register(this.onloop.bind(this), 1000);
	            if (this.getAttribute("complementRenderer") && this.node.getChildrenByNodeName("renderer").length === 0) {
	                this.node.addChildByName("renderer", {});
	            }
	        }
	    }, {
	        key: "onloop",
	        value: function onloop(loopIndex) {
	            if (this.enabled) {
	                var c = this._bgColor;
	                this.gl.clearColor(c.R, c.G, c.B, c.A);
	                this.gl.clearDepth(this._clearDepth);
	                this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
	                this.node.broadcastMessage(1, "renderViewport", { loopIndex: loopIndex });
	            }
	        }
	    }]);
	
	    return RendererManagerComponent;
	}(_Component3.default);
	
	exports.default = RendererManagerComponent;
	
	RendererManagerComponent.attributes = {
	    bgColor: {
	        default: new _Color2.default(0, 0, 0, 0),
	        converter: "Color4"
	    },
	    clearDepth: {
	        default: 1.0,
	        converter: "Number"
	    },
	    complementRenderer: {
	        default: true,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Color4;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MaterialContainerComponent = __webpack_require__(34);
	
	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);
	
	var _FrameBuffer = __webpack_require__(66);
	
	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RenderQuadComponent = function (_Component) {
	    _inherits(RenderQuadComponent, _Component);
	
	    function RenderQuadComponent() {
	        _classCallCheck(this, RenderQuadComponent);
	
	        return _possibleConstructorReturn(this, (RenderQuadComponent.__proto__ || Object.getPrototypeOf(RenderQuadComponent)).apply(this, arguments));
	    }
	
	    _createClass(RenderQuadComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("targetBuffer").boundTo("_targetBuffer");
	            this.getAttributeRaw("clearColor").boundTo("_clearColor");
	            this.getAttributeRaw("clearColorEnabled").boundTo("_clearColorEnabled");
	            this.getAttributeRaw("clearDepthEnabled").boundTo("_clearDepthEnabled");
	            this.getAttributeRaw("clearDepth").boundTo("_clearDepth");
	            this.getAttributeRaw("technique").boundTo("_technique");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._gl = this.companion.get("gl");
	            this._canvas = this.companion.get("canvasElement");
	            var gr = this.companion.get("GeometryRegistory");
	            this._geom = gr.getGeometry("quad");
	            this._materialContainer = this.node.getComponent(_MaterialContainerComponent2.default);
	        }
	    }, {
	        key: "$bufferUpdated",
	        value: function $bufferUpdated(args) {
	            var out = this.getAttribute("out");
	            if (out !== "default") {
	                this._fbo = new _FrameBuffer2.default(this.companion.get("gl"));
	                this._fbo.update(args.buffers[out]);
	                this._fboSize = args.bufferSizes[out];
	            }
	            var depthBuffer = this.getAttribute("depthBuffer");
	            if (depthBuffer && this._fbo) {
	                this._fbo.update(args.buffers[depthBuffer]);
	            }
	        }
	    }, {
	        key: "$render",
	        value: function $render(args) {
	            if (!this._materialContainer.ready) {
	                return;
	            }
	            // bound render target
	            if (this._fbo) {
	                this._fbo.bind();
	                this._gl.viewport(0, 0, this._fboSize.width, this._fboSize.height);
	            } else {
	                this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
	                this._gl.viewport(args.viewport.Left, this._canvas.height - args.viewport.Bottom, args.viewport.Width, args.viewport.Height);
	            }
	            // clear buffer if needed
	            if (this._fbo && this._clearColorEnabled) {
	                this._gl.clearColor(this._clearColor.R, this._clearColor.G, this._clearColor.B, this._clearColor.A);
	                this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
	            }
	            if (this._clearDepthEnabled) {
	                this._gl.clearDepth(this._clearDepth);
	                this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
	            }
	            // make rendering argument
	            var renderArgs = {
	                targetBuffer: this._targetBuffer,
	                geometry: this._geom,
	                attributeValues: {},
	                camera: null,
	                transform: null,
	                buffers: args.buffers,
	                viewport: args.viewport,
	                defaultTexture: this.companion.get("defaultTexture"),
	                technique: this._technique
	            };
	            renderArgs.attributeValues = this._materialContainer.materialArgs;
	            // do render
	            this._materialContainer.material.draw(renderArgs);
	            this._gl.flush();
	        }
	    }]);
	
	    return RenderQuadComponent;
	}(_Component3.default);
	
	exports.default = RenderQuadComponent;
	
	RenderQuadComponent.attributes = {
	    out: {
	        default: "default",
	        converter: "String"
	    },
	    depthBuffer: {
	        default: null,
	        converter: "String"
	    },
	    targetBuffer: {
	        default: "default",
	        converter: "String"
	    },
	    clearColor: {
	        default: "#0000",
	        converter: "Color4"
	    },
	    clearColorEnabled: {
	        default: true,
	        converter: "Boolean"
	    },
	    clearDepthEnabled: {
	        default: true,
	        converter: "Boolean"
	    },
	    clearDepth: {
	        default: 1.0,
	        converter: "Number"
	    },
	    technique: {
	        default: "default",
	        converter: "String"
	    }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _RenderBuffer = __webpack_require__(60);
	
	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);
	
	var _Texture2D = __webpack_require__(23);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _ResourceBase2 = __webpack_require__(24);
	
	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FrameBuffer = function (_ResourceBase) {
	    _inherits(FrameBuffer, _ResourceBase);
	
	    function FrameBuffer(gl) {
	        _classCallCheck(this, FrameBuffer);
	
	        var _this = _possibleConstructorReturn(this, (FrameBuffer.__proto__ || Object.getPrototypeOf(FrameBuffer)).call(this, gl));
	
	        _this.fbo = gl.createFramebuffer();
	        return _this;
	    }
	
	    _createClass(FrameBuffer, [{
	        key: "update",
	        value: function update(boundTo, level, bindIndex) {
	            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.fbo);
	            if (boundTo instanceof _Texture2D2.default) {
	                if (typeof bindIndex === "undefined") {
	                    bindIndex = 0;
	                }
	                if (typeof level === "undefined") {
	                    level = 0;
	                }
	                this.gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.COLOR_ATTACHMENT0 + bindIndex, WebGLRenderingContext.TEXTURE_2D, boundTo.texture, level);
	                if (this.gl.checkFramebufferStatus(WebGLRenderingContext.FRAMEBUFFER) !== WebGLRenderingContext.FRAMEBUFFER_COMPLETE) {
	                    throw new Error("INCOMPLETE framebuffer");
	                }
	            } else if (boundTo instanceof _RenderBuffer2.default) {
	                var registerTarget = level;
	                if (typeof level === "undefined") {
	                    registerTarget = WebGLRenderingContext.DEPTH_ATTACHMENT;
	                }
	                this.gl.framebufferRenderbuffer(WebGLRenderingContext.FRAMEBUFFER, registerTarget, WebGLRenderingContext.RENDERBUFFER, boundTo.renderBuffer);
	            }
	            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
	        }
	    }, {
	        key: "bind",
	        value: function bind() {
	            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.fbo);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(FrameBuffer.prototype.__proto__ || Object.getPrototypeOf(FrameBuffer.prototype), "destroy", this).call(this);
	            this.gl.deleteFramebuffer(this.fbo);
	        }
	    }]);
	
	    return FrameBuffer;
	}(_ResourceBase3.default);
	
	exports.default = FrameBuffer;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _FrameBuffer = __webpack_require__(66);
	
	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);
	
	var _MaterialContainerComponent = __webpack_require__(34);
	
	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RenderSceneComponent = function (_Component) {
	    _inherits(RenderSceneComponent, _Component);
	
	    function RenderSceneComponent() {
	        _classCallCheck(this, RenderSceneComponent);
	
	        return _possibleConstructorReturn(this, (RenderSceneComponent.__proto__ || Object.getPrototypeOf(RenderSceneComponent)).apply(this, arguments));
	    }
	
	    _createClass(RenderSceneComponent, [{
	        key: "$awake",
	
	        // messages
	        value: function $awake() {
	            this.getAttributeRaw("layer").boundTo("_layer");
	            this.getAttributeRaw("clearColor").boundTo("_clearColor");
	            this.getAttributeRaw("clearColorEnabled").boundTo("_clearColorEnabled");
	            this.getAttributeRaw("clearDepthEnabled").boundTo("_clearDepthEnabled");
	            this.getAttributeRaw("clearDepth").boundTo("_clearDepth");
	            this.getAttributeRaw("camera").boundTo("_camera");
	            this.getAttributeRaw("technique").boundTo("_technique");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._gl = this.companion.get("gl");
	            this._canvas = this.companion.get("canvasElement");
	            this._materialContainer = this.node.getComponent(_MaterialContainerComponent2.default);
	        }
	    }, {
	        key: "$bufferUpdated",
	        value: function $bufferUpdated(args) {
	            var out = this.getAttribute("out");
	            if (out !== "default") {
	                this._fbo = new _FrameBuffer2.default(this.companion.get("gl"));
	                this._fbo.update(args.buffers[out]);
	                this._fboSize = args.bufferSizes[out];
	            }
	            var depthBuffer = this.getAttribute("depthBuffer");
	            if (depthBuffer && this._fbo) {
	                this._fbo.update(args.buffers[depthBuffer]);
	            }
	        }
	    }, {
	        key: "$render",
	        value: function $render(args) {
	            var camera = this._camera ? this._camera : args.camera;
	            if (!camera) {
	                return;
	            }
	            if (this._fbo) {
	                this._fbo.bind();
	                this._gl.viewport(0, 0, this._fboSize.width, this._fboSize.height);
	            } else {
	                this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
	                this._gl.viewport(args.viewport.Left, this._canvas.height - args.viewport.Bottom, args.viewport.Width, args.viewport.Height);
	            }
	            // clear buffer if needed
	            if (this._fbo && this._clearColorEnabled) {
	                this._gl.clearColor(this._clearColor.R, this._clearColor.G, this._clearColor.B, this._clearColor.A);
	                this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
	            }
	            if (this._clearDepthEnabled) {
	                this._gl.clearDepth(this._clearDepth);
	                this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
	            }
	            args.camera.updateContainedScene(args.loopIndex);
	            var useMaterial = this._materialContainer.useMaterial;
	            args.camera.renderScene({
	                caller: this,
	                camera: camera,
	                buffers: args.buffers,
	                layer: this._layer,
	                viewport: args.viewport,
	                material: useMaterial ? this._materialContainer.material : undefined,
	                materialArgs: useMaterial ? this._materialContainer.material : undefined,
	                loopIndex: args.loopIndex,
	                technique: this._technique
	            });
	        }
	    }]);
	
	    return RenderSceneComponent;
	}(_Component3.default);
	
	exports.default = RenderSceneComponent;
	
	RenderSceneComponent.attributes = {
	    layer: {
	        converter: "String",
	        default: "default"
	    },
	    depthBuffer: {
	        default: null,
	        converter: "String"
	    },
	    out: {
	        converter: "String",
	        default: "default"
	    },
	    clearColor: {
	        default: "#0000",
	        converter: "Color4"
	    },
	    clearColorEnabled: {
	        default: true,
	        converter: "Boolean"
	    },
	    clearDepthEnabled: {
	        default: true,
	        converter: "Boolean"
	    },
	    clearDepth: {
	        default: 1.0,
	        converter: "Number"
	    },
	    camera: {
	        default: null,
	        converter: "Component",
	        target: "Camera"
	    },
	    technique: {
	        default: "default",
	        converter: "String"
	    }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Texture2D = __webpack_require__(23);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _TextureSizeCalculator = __webpack_require__(61);
	
	var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextureBufferComponent = function (_Component) {
	    _inherits(TextureBufferComponent, _Component);
	
	    function TextureBufferComponent() {
	        _classCallCheck(this, TextureBufferComponent);
	
	        return _possibleConstructorReturn(this, (TextureBufferComponent.__proto__ || Object.getPrototypeOf(TextureBufferComponent)).apply(this, arguments));
	    }
	
	    _createClass(TextureBufferComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            this.buffer = new _Texture2D2.default(this.companion.get("gl"));
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            this.buffer.destroy();
	            this.buffer = null;
	        }
	    }, {
	        key: "$resizeBuffer",
	        value: function $resizeBuffer(arg) {
	            var bufferName = this.getAttribute("name");
	            if (!bufferName) {
	                throw new Error("Attribute 'name' must be specified.");
	            }
	            var format = this.getAttribute("format");
	            var type = this.getAttribute("type");
	            var newSize = _TextureSizeCalculator2.default.getPow2Size(arg.width, arg.height);
	            this.buffer.update(0, newSize.width, newSize.height, 0, format, type, null);
	            arg.bufferSizes[bufferName] = { width: newSize.width, height: newSize.height };
	            arg.buffers[bufferName] = this.buffer;
	        }
	    }]);
	
	    return TextureBufferComponent;
	}(_Component3.default);
	
	exports.default = TextureBufferComponent;
	
	TextureBufferComponent.attributes = {
	    name: {
	        converter: "String",
	        default: null
	    },
	    format: {
	        converter: "Enum",
	        default: WebGLRenderingContext.RGBA,
	        table: {
	            RGBA: WebGLRenderingContext.RGBA,
	            RGB: WebGLRenderingContext.RGB,
	            ALPHA: WebGLRenderingContext.ALPHA,
	            LUMINANCE: WebGLRenderingContext.LUMINANCE,
	            LUMINANCE_ALPHA: WebGLRenderingContext.LUMINANCE_ALPHA,
	            SRGB_EXT: WebGLRenderingContext["SRGB_EXT"],
	            SRGB_ALPHA_EXT: WebGLRenderingContext["SRGB_ALPHA_EXT"],
	            DEPTH_COMPONENT: WebGLRenderingContext["DEPTH_COMPONENT"],
	            DEPTH_STENCIL: WebGLRenderingContext["DEPTH_STENCIL"]
	        }
	    },
	    type: {
	        converter: "Enum",
	        default: WebGLRenderingContext.UNSIGNED_BYTE,
	        table: {
	            UNSIGNED_BYTE: WebGLRenderingContext.UNSIGNED_BYTE,
	            UNSIGNED_SHORT_5_6_5: WebGLRenderingContext.UNSIGNED_SHORT_5_6_5,
	            UNSIGNED_SHORT_4_4_4_4: WebGLRenderingContext.UNSIGNED_SHORT_4_4_4_4,
	            UNSIGNED_SHORT_5_5_5_1: WebGLRenderingContext.UNSIGNED_SHORT_5_5_5_1,
	            UNSIGNED_SHORT: WebGLRenderingContext.UNSIGNED_SHORT,
	            UNSIGNED_INT: WebGLRenderingContext.UNSIGNED_INT,
	            FLOAT: WebGLRenderingContext.FLOAT
	        }
	    }
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Texture2D = __webpack_require__(23);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _Component2 = __webpack_require__(9);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _ImageResolver = __webpack_require__(5);
	
	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	                step(generator["throw"](value));
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
	
	var TextureComponent = function (_Component) {
	    _inherits(TextureComponent, _Component);
	
	    function TextureComponent() {
	        _classCallCheck(this, TextureComponent);
	
	        return _possibleConstructorReturn(this, (TextureComponent.__proto__ || Object.getPrototypeOf(TextureComponent)).apply(this, arguments));
	    }
	
	    _createClass(TextureComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var _this2 = this;
	
	            var src = this.getAttribute("src");
	            this.texture = new _Texture2D2.default(this.companion.get("gl"));
	            this.texture.magFilter = this.getAttribute("magFilter");
	            this.texture.minFilter = this.getAttribute("minFilter");
	            this.texture.wrapT = this.getAttribute("wrapT");
	            this.texture.wrapS = this.getAttribute("wrapS");
	            this.getAttributeRaw("magFilter").watch(function (v) {
	                return _this2.texture.magFilter = v;
	            });
	            this.getAttributeRaw("minFilter").watch(function (v) {
	                return _this2.texture.minFilter = v;
	            });
	            this.getAttributeRaw("wrapS").watch(function (v) {
	                return _this2.texture.wrapS = v;
	            });
	            this.getAttributeRaw("wrapT").watch(function (v) {
	                return _this2.texture.wrapT = v;
	            });
	            if (src) {
	                this._loadTask(src);
	            }
	        }
	    }, {
	        key: "_loadTask",
	        value: function _loadTask(src) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var img;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return _ImageResolver2.default.resolve(src);
	
	                            case 2:
	                                img = _context.sent;
	
	                                this.texture.update(img);
	
	                            case 4:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }]);
	
	    return TextureComponent;
	}(_Component3.default);
	
	exports.default = TextureComponent;
	
	TextureComponent.attributes = {
	    src: {
	        converter: "String",
	        default: null
	    },
	    minFilter: {
	        converter: "Enum",
	        default: "LINEAR",
	        table: {
	            LINEAR: WebGLRenderingContext.LINEAR,
	            NEAREST: WebGLRenderingContext.NEAREST,
	            NEAREST_MIPMAP_NEAREST: WebGLRenderingContext.NEAREST_MIPMAP_NEAREST,
	            NEAREST_MIPMAP_LINEAR: WebGLRenderingContext.NEAREST_MIPMAP_LINEAR,
	            LINEAR_MIPMAP_NEAREST: WebGLRenderingContext.LINEAR_MIPMAP_NEAREST,
	            LINEAR_MIPMAP_LINEAR: WebGLRenderingContext.LINEAR_MIPMAP_LINEAR
	        }
	    },
	    magFilter: {
	        converter: "Enum",
	        default: "LINEAR",
	        table: {
	            LINEAR: WebGLRenderingContext.LINEAR,
	            NEAREST: WebGLRenderingContext.NEAREST
	        }
	    },
	    wrapS: {
	        converter: "Enum",
	        default: "REPEAT",
	        table: {
	            REPEAT: WebGLRenderingContext.REPEAT,
	            MIRRORED_REPEAT: WebGLRenderingContext.MIRRORED_REPEAT,
	            CLAMP_TO_EDGE: WebGLRenderingContext.CLAMP_TO_EDGE
	        }
	    },
	    wrapT: {
	        converter: "Enum",
	        default: "REPEAT",
	        table: {
	            REPEAT: WebGLRenderingContext.REPEAT,
	            MIRRORED_REPEAT: WebGLRenderingContext.MIRRORED_REPEAT,
	            CLAMP_TO_EDGE: WebGLRenderingContext.CLAMP_TO_EDGE
	        }
	    }
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function CanvasSizeConverter(val) {
	    if (val === "fit") {
	        return {
	            mode: "fit"
	        };
	    }
	    if (typeof val === "string") {
	        var matched = /aspect\(([\d+(?.\d*)?]+)\)/.exec(val);
	        if (matched) {
	            return {
	                mode: "aspect",
	                aspect: Number.parseFloat(matched[1])
	            };
	        }
	    }
	    return {
	        mode: "manual",
	        size: Number.parseFloat(val)
	    };
	}
	exports.default = CanvasSizeConverter;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Component = __webpack_require__(9);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _GomlNode = __webpack_require__(72);
	
	var _GomlNode2 = _interopRequireDefault(_GomlNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ComponentConverter(val) {
	    if (!this.declaration["target"]) {
	        throw new Error("Component converter require to be specified target");
	    }
	    if (val === null) {
	        return null;
	    }
	    if (val instanceof _GomlNode2.default) {
	        return val.getComponent(this.declaration["target"]);
	    } else if (val instanceof _Component2.default) {
	        if (val.name === this.declaration["target"]) {
	            return val; // check component type?
	        } else {
	            throw new Error("Specified component must be " + this.declaration["target"]);
	        }
	    } else {
	        var n = this.tree(val).first();
	        if (n) {
	            return n.getComponent(this.declaration["target"]);
	        }
	        return null;
	    }
	}
	exports.default = ComponentConverter;

/***/ },
/* 72 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.GomlNode;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function EnumConverter(val) {
	    if (!this.declaration["table"]) {
	        throw new Error("Enum converter needs to be specified table in attribute dictionary");
	    }
	    if (typeof val === "number") {
	        return val;
	    }
	    if (typeof val === "string") {
	        var result = this.declaration["table"][val];
	        if (!result) {
	            throw new Error("Specified value is not exisiting in the relation table");
	        } else {
	            return result;
	        }
	    }
	    return null;
	}
	exports.default = EnumConverter;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Geometry = __webpack_require__(50);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function GeometryConverter(val) {
	    if (typeof val === "string") {
	        return this.companion.get("GeometryRegistory").getGeometry(val);
	    } else if (val instanceof _Geometry2.default) {
	        return val;
	    }
	    throw new Error("Specified geometry \"" + val + "\" is not supported for converting into geometry.");
	}
	exports.default = GeometryConverter;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _MaterialComponent = __webpack_require__(33);
	
	var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MaterialConverter(val) {
	    if (typeof val === "string") {
	        var regex = /\s*new\s*\(\s*([a-zA-Z\d\-]+)\s*\)/;
	        var regexResult = void 0;
	        if (regexResult = regex.exec(val)) {
	            this.component[this.declaration["componentBoundTo"]] = null;
	            return this.companion.get("MaterialFactory").instanciate(regexResult[1]);
	        } else {
	            var mc = this.tree(val).first().getComponent(_MaterialComponent2.default);
	            this.component[this.declaration["componentBoundTo"]] = mc;
	            return mc.materialPromise;
	        }
	    }
	    return null; // TODO ??
	}
	exports.default = MaterialConverter;

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function NumberArrayConverter(val) {
	    if (val instanceof Array) {
	        return val;
	    }
	    if (typeof val === "string") {
	        var splitted = val.split(",");
	        return splitted.map(function (s) {
	            return Number.parseFloat(s);
	        });
	    }
	}
	exports.default = NumberArrayConverter;

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function NumberConverter(val) {
	    if (typeof val === "number") {
	        return val;
	    } else if (typeof val === "string") {
	        return Number.parseFloat(val);
	    } else if (val === null) {
	        return null;
	    }
	}
	exports.default = NumberConverter;

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function ObjectConverter(val) {
	    return val;
	}
	exports.default = ObjectConverter;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _TextureComponent = __webpack_require__(69);
	
	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);
	
	var _TextureReference = __webpack_require__(80);
	
	var _TextureReference2 = _interopRequireDefault(_TextureReference);
	
	var _Texture2D = __webpack_require__(23);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _ImageResolver = __webpack_require__(5);
	
	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function updateVideo(tex, video) {
	    tex.update(video);
	    requestAnimationFrame(function () {
	        return updateVideo(tex, video);
	    });
	}
	function _parseQuery(query) {
	    var regex = /(query|backbuffer|video)\((.+)\)[^\)]*$/;
	    var regexResult = void 0;
	    if (regexResult = regex.exec(query)) {
	        return {
	            type: regexResult[1],
	            param: regexResult[2]
	        };
	    }
	    return null;
	}
	function generateVideoTag(src) {
	    var vTag = document.createElement("video");
	    vTag.src = src;
	    return vTag;
	}
	function fromVideoTexture(gl, val) {
	    var tex = new _Texture2D2.default(gl);
	    val.play();
	    tex.update(val);
	    updateVideo(tex, val);
	    return tex;
	}
	function TextureConverter(val) {
	    var _this = this;
	
	    if (val instanceof _Texture2D2.default) {
	        return new _TextureReference2.default(val);
	    }
	    if (typeof val === "string") {
	        var parseResult = _parseQuery(val);
	        if (parseResult) {
	            var _ret = function () {
	                var param = parseResult.param;
	
	                var _ret2 = function () {
	                    switch (parseResult.type) {
	                        case "backbuffer":
	                            return {
	                                v: {
	                                    v: new _TextureReference2.default(function (buffers) {
	                                        return buffers[param];
	                                    })
	                                }
	                            };
	                        case "video":
	                            return {
	                                v: {
	                                    v: new _TextureReference2.default(fromVideoTexture(_this.companion.get("gl"), generateVideoTag(param)))
	                                }
	                            };
	                        case "query":
	                            var obtainedTag = _this.tree(param);
	                            var texture = obtainedTag.first().getComponent(_TextureComponent2.default);
	                            return {
	                                v: {
	                                    v: new _TextureReference2.default(function () {
	                                        return texture.texture;
	                                    })
	                                }
	                            };
	                    }
	                }();
	
	                if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
	            }();
	
	            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	        } else {
	            var _ret3 = function () {
	                var tex = new _Texture2D2.default(_this.companion.get("gl"));
	                _ImageResolver2.default.resolve(val).then(function (t) {
	                    tex.update(t);
	                });
	                _this.companion.get("loader").register(tex.validPromise);
	                return {
	                    v: new _TextureReference2.default(tex)
	                };
	            }();
	
	            if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
	        }
	    }
	    if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") {
	        if (val instanceof HTMLImageElement) {
	            var _ret4 = function () {
	                var tex = new _Texture2D2.default(_this.companion.get("gl"));
	                if (val.complete && val.naturalWidth) {
	                    tex.update(val);
	                } else {
	                    val.onload = function () {
	                        tex.update(val);
	                    };
	                }
	                return {
	                    v: new _TextureReference2.default(tex)
	                };
	            }();
	
	            if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
	        } else if (val instanceof HTMLCanvasElement) {
	            var _tex = new _Texture2D2.default(this.companion.get("gl"));
	            _tex.update(val);
	            return new _TextureReference2.default(_tex);
	        } else if (val instanceof HTMLVideoElement) {
	            return new _TextureReference2.default(fromVideoTexture(this.companion.get("gl"), val));
	        }
	    }
	    return null;
	}
	exports.default = TextureConverter;

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Proxy of texture reference
	 */
	var TextureReference = function () {
	    function TextureReference(rawResource) {
	        _classCallCheck(this, TextureReference);
	
	        this.rawResource = rawResource;
	        this._isFunctionalProxy = typeof rawResource === "function";
	    }
	
	    _createClass(TextureReference, [{
	        key: "get",
	        value: function get(buffers) {
	            if (!this._isFunctionalProxy) {
	                return this.rawResource;
	            } else {
	                return this.rawResource(buffers);
	            }
	        }
	    }]);
	
	    return TextureReference;
	}();
	
	exports.default = TextureReference;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Rectangle = __webpack_require__(82);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toPixel(parentSize, rep) {
	    var regex = /(\d+)\s*%/;
	    var regexResult = void 0;
	    if (regexResult = regex.exec(rep)) {
	        var percentage = Number.parseFloat(regexResult[1]);
	        return Math.floor(parentSize * percentage * 0.01);
	    } else {
	        return Math.floor(Number.parseFloat(rep));
	    }
	}
	function ViewportConverter(val) {
	    if (val instanceof _Rectangle2.default) {
	        return function () {
	            return val;
	        };
	    }
	    if (typeof val === "string") {
	        if (val === "auto") {
	            return function (canvas) {
	                return new _Rectangle2.default(0, 0, canvas.width, canvas.height);
	            };
	        } else {
	            var _ret = function () {
	                var sizes = val.split(",");
	                if (sizes.length !== 4) {
	                    throw new Error("Invalid viewport size was specified.");
	                } else {
	                    return {
	                        v: function v(canvas) {
	                            return new _Rectangle2.default(_toPixel(canvas.width, sizes[0]), _toPixel(canvas.height, sizes[1]), _toPixel(canvas.width, sizes[2]), _toPixel(canvas.height, sizes[3]));
	                        }
	                    };
	                }
	            }();
	
	            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	        }
	    }
	    throw new Error(val + " could not be parsed");
	}
	exports.default = ViewportConverter;

/***/ },
/* 82 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Rectangle;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AABB = __webpack_require__(84);
	
	var _AABB2 = _interopRequireDefault(_AABB);
	
	var _Vector = __webpack_require__(14);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _GeometryUtility = __webpack_require__(85);
	
	var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);
	
	var _GeometryFactory = __webpack_require__(29);
	
	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);
	
	var _GeometryBuilder = __webpack_require__(86);
	
	var _GeometryBuilder2 = _interopRequireDefault(_GeometryBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var unitBox = new _AABB2.default();
	unitBox.expand(new _Vector2.default(-1, -1, -1));
	unitBox.expand(new _Vector2.default(1, 1, 1));
	
	var DefaultPrimitives = function () {
	    function DefaultPrimitives() {
	        _classCallCheck(this, DefaultPrimitives);
	    }
	
	    _createClass(DefaultPrimitives, null, [{
	        key: "register",
	        value: function register() {
	            DefaultPrimitives._registerTriangle();
	            DefaultPrimitives._registerQuad();
	            DefaultPrimitives._registerCube();
	            DefaultPrimitives._registerSphere();
	            DefaultPrimitives._registerCircle();
	            DefaultPrimitives._registerCylinder();
	            DefaultPrimitives._registerCone();
	            DefaultPrimitives._registerPlane();
	        }
	    }, {
	        key: "_registerTriangle",
	        value: function _registerTriangle() {
	            _GeometryFactory2.default.addType("triangle", {}, function (gl, attrs) {
	                return _GeometryBuilder2.default.build(gl, {
	                    indices: {
	                        default: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context) {
	                                    while (1) {
	                                        switch (_context.prev = _context.next) {
	                                            case 0:
	                                                return _context.delegateYield(_GeometryUtility2.default.triangleIndex(0), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.TRIANGLES
	                        },
	                        wireframe: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context2) {
	                                    while (1) {
	                                        switch (_context2.prev = _context2.next) {
	                                            case 0:
	                                                return _context2.delegateYield(_GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.triangleIndex(0)), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context2.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.LINES
	                        }
	                    },
	                    vertices: {
	                        main: {
	                            size: {
	                                POSITION: 3,
	                                NORMAL: 3,
	                                TEXCOORD: 2
	                            },
	                            count: _GeometryUtility2.default.triangleSize(),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    POSITION: regeneratorRuntime.mark(function POSITION() {
	                                        return regeneratorRuntime.wrap(function POSITION$(_context3) {
	                                            while (1) {
	                                                switch (_context3.prev = _context3.next) {
	                                                    case 0:
	                                                        return _context3.delegateYield(_GeometryUtility2.default.trianglePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context3.stop();
	                                                }
	                                            }
	                                        }, POSITION, this);
	                                    }),
	                                    NORMAL: regeneratorRuntime.mark(function NORMAL() {
	                                        return regeneratorRuntime.wrap(function NORMAL$(_context4) {
	                                            while (1) {
	                                                switch (_context4.prev = _context4.next) {
	                                                    case 0:
	                                                        return _context4.delegateYield(_GeometryUtility2.default.triangleNormal(_Vector2.default.ZUnit), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context4.stop();
	                                                }
	                                            }
	                                        }, NORMAL, this);
	                                    }),
	                                    TEXCOORD: regeneratorRuntime.mark(function TEXCOORD() {
	                                        return regeneratorRuntime.wrap(function TEXCOORD$(_context5) {
	                                            while (1) {
	                                                switch (_context5.prev = _context5.next) {
	                                                    case 0:
	                                                        return _context5.delegateYield(_GeometryUtility2.default.triangleTexCoord(), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context5.stop();
	                                                }
	                                            }
	                                        }, TEXCOORD, this);
	                                    })
	                                };
	                            }
	                        }
	                    }
	                });
	            });
	        }
	    }, {
	        key: "_registerQuad",
	        value: function _registerQuad() {
	            _GeometryFactory2.default.addType("quad", {}, function (gl, attrs) {
	                return _GeometryBuilder2.default.build(gl, {
	                    indices: {
	                        default: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context6) {
	                                    while (1) {
	                                        switch (_context6.prev = _context6.next) {
	                                            case 0:
	                                                return _context6.delegateYield(_GeometryUtility2.default.quadIndex(0), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context6.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.TRIANGLES
	                        },
	                        wireframe: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context7) {
	                                    while (1) {
	                                        switch (_context7.prev = _context7.next) {
	                                            case 0:
	                                                return _context7.delegateYield(_GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.quadIndex(0)), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context7.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.LINES
	                        }
	                    },
	                    vertices: {
	                        main: {
	                            size: {
	                                POSITION: 3,
	                                NORMAL: 3,
	                                TEXCOORD: 2
	                            },
	                            count: _GeometryUtility2.default.quadSize(),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    POSITION: regeneratorRuntime.mark(function POSITION() {
	                                        return regeneratorRuntime.wrap(function POSITION$(_context8) {
	                                            while (1) {
	                                                switch (_context8.prev = _context8.next) {
	                                                    case 0:
	                                                        return _context8.delegateYield(_GeometryUtility2.default.quadPosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context8.stop();
	                                                }
	                                            }
	                                        }, POSITION, this);
	                                    }),
	                                    NORMAL: regeneratorRuntime.mark(function NORMAL() {
	                                        return regeneratorRuntime.wrap(function NORMAL$(_context9) {
	                                            while (1) {
	                                                switch (_context9.prev = _context9.next) {
	                                                    case 0:
	                                                        return _context9.delegateYield(_GeometryUtility2.default.quadNormal(_Vector2.default.ZUnit), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context9.stop();
	                                                }
	                                            }
	                                        }, NORMAL, this);
	                                    }),
	                                    TEXCOORD: regeneratorRuntime.mark(function TEXCOORD() {
	                                        return regeneratorRuntime.wrap(function TEXCOORD$(_context10) {
	                                            while (1) {
	                                                switch (_context10.prev = _context10.next) {
	                                                    case 0:
	                                                        return _context10.delegateYield(_GeometryUtility2.default.quadTexCoord(), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context10.stop();
	                                                }
	                                            }
	                                        }, TEXCOORD, this);
	                                    })
	                                };
	                            }
	                        }
	                    }
	                });
	            });
	        }
	    }, {
	        key: "_registerCube",
	        value: function _registerCube() {
	            _GeometryFactory2.default.addType("cube", {}, function (gl, attrs) {
	                return _GeometryBuilder2.default.build(gl, {
	                    indices: {
	                        default: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context11) {
	                                    while (1) {
	                                        switch (_context11.prev = _context11.next) {
	                                            case 0:
	                                                return _context11.delegateYield(_GeometryUtility2.default.cubeIndex(0), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context11.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.TRIANGLES
	                        },
	                        wireframe: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context12) {
	                                    while (1) {
	                                        switch (_context12.prev = _context12.next) {
	                                            case 0:
	                                                return _context12.delegateYield(_GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.cubeIndex(0)), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context12.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.LINES
	                        }
	                    },
	                    vertices: {
	                        main: {
	                            size: {
	                                POSITION: 3,
	                                NORMAL: 3,
	                                TEXCOORD: 2
	                            },
	                            count: _GeometryUtility2.default.cubeSize(),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    POSITION: regeneratorRuntime.mark(function POSITION() {
	                                        return regeneratorRuntime.wrap(function POSITION$(_context13) {
	                                            while (1) {
	                                                switch (_context13.prev = _context13.next) {
	                                                    case 0:
	                                                        return _context13.delegateYield(_GeometryUtility2.default.cubePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis()), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context13.stop();
	                                                }
	                                            }
	                                        }, POSITION, this);
	                                    }),
	                                    NORMAL: regeneratorRuntime.mark(function NORMAL() {
	                                        return regeneratorRuntime.wrap(function NORMAL$(_context14) {
	                                            while (1) {
	                                                switch (_context14.prev = _context14.next) {
	                                                    case 0:
	                                                        return _context14.delegateYield(_GeometryUtility2.default.cubeNormal(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis()), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context14.stop();
	                                                }
	                                            }
	                                        }, NORMAL, this);
	                                    }),
	                                    TEXCOORD: regeneratorRuntime.mark(function TEXCOORD() {
	                                        return regeneratorRuntime.wrap(function TEXCOORD$(_context15) {
	                                            while (1) {
	                                                switch (_context15.prev = _context15.next) {
	                                                    case 0:
	                                                        return _context15.delegateYield(_GeometryUtility2.default.cubeTexCoord(), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context15.stop();
	                                                }
	                                            }
	                                        }, TEXCOORD, this);
	                                    })
	                                };
	                            }
	                        }
	                    },
	                    aabb: unitBox
	                });
	            });
	        }
	    }, {
	        key: "_registerSphere",
	        value: function _registerSphere() {
	            _GeometryFactory2.default.addType("sphere", {
	                divVertical: {
	                    converter: "Number",
	                    default: 100
	                },
	                divHorizontal: {
	                    converter: "Number",
	                    default: 100
	                }
	            }, function (gl, attrs) {
	                var dH = attrs["divHorizontal"];
	                var dV = attrs["divVertical"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indices: {
	                        default: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context16) {
	                                    while (1) {
	                                        switch (_context16.prev = _context16.next) {
	                                            case 0:
	                                                return _context16.delegateYield(_GeometryUtility2.default.sphereIndex(0, dH, dV), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context16.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.TRIANGLES
	                        },
	                        wireframe: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context17) {
	                                    while (1) {
	                                        switch (_context17.prev = _context17.next) {
	                                            case 0:
	                                                return _context17.delegateYield(_GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.sphereIndex(0, dH, dV)), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context17.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.LINES
	                        }
	                    },
	                    vertices: {
	                        main: {
	                            size: {
	                                POSITION: 3,
	                                NORMAL: 3,
	                                TEXCOORD: 2
	                            },
	                            count: _GeometryUtility2.default.sphereSize(dH, dV),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    POSITION: regeneratorRuntime.mark(function POSITION() {
	                                        return regeneratorRuntime.wrap(function POSITION$(_context18) {
	                                            while (1) {
	                                                switch (_context18.prev = _context18.next) {
	                                                    case 0:
	                                                        return _context18.delegateYield(_GeometryUtility2.default.spherePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), dH, dV), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context18.stop();
	                                                }
	                                            }
	                                        }, POSITION, this);
	                                    }),
	                                    NORMAL: regeneratorRuntime.mark(function NORMAL() {
	                                        return regeneratorRuntime.wrap(function NORMAL$(_context19) {
	                                            while (1) {
	                                                switch (_context19.prev = _context19.next) {
	                                                    case 0:
	                                                        return _context19.delegateYield(_GeometryUtility2.default.sphereNormal(_Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), dH, dV), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context19.stop();
	                                                }
	                                            }
	                                        }, NORMAL, this);
	                                    }),
	                                    TEXCOORD: regeneratorRuntime.mark(function TEXCOORD() {
	                                        return regeneratorRuntime.wrap(function TEXCOORD$(_context20) {
	                                            while (1) {
	                                                switch (_context20.prev = _context20.next) {
	                                                    case 0:
	                                                        return _context20.delegateYield(_GeometryUtility2.default.sphereTexCoord(dH, dV), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context20.stop();
	                                                }
	                                            }
	                                        }, TEXCOORD, this);
	                                    })
	                                };
	                            }
	                        }
	                    },
	                    aabb: unitBox
	                });
	            });
	        }
	    }, {
	        key: "_registerCircle",
	        value: function _registerCircle() {
	            _GeometryFactory2.default.addType("circle", {
	                divide: {
	                    converter: "Number",
	                    default: 50
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indices: {
	                        default: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context21) {
	                                    while (1) {
	                                        switch (_context21.prev = _context21.next) {
	                                            case 0:
	                                                return _context21.delegateYield(_GeometryUtility2.default.ellipseIndex(0, div), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context21.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.TRIANGLES
	                        },
	                        wireframe: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context22) {
	                                    while (1) {
	                                        switch (_context22.prev = _context22.next) {
	                                            case 0:
	                                                return _context22.delegateYield(_GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.ellipseIndex(0, div)), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context22.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.LINES
	                        }
	                    },
	                    vertices: {
	                        main: {
	                            size: {
	                                POSITION: 3,
	                                NORMAL: 3,
	                                TEXCOORD: 2
	                            },
	                            count: _GeometryUtility2.default.ellipseSize(div),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    POSITION: regeneratorRuntime.mark(function POSITION() {
	                                        return regeneratorRuntime.wrap(function POSITION$(_context23) {
	                                            while (1) {
	                                                switch (_context23.prev = _context23.next) {
	                                                    case 0:
	                                                        return _context23.delegateYield(_GeometryUtility2.default.ellipsePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context23.stop();
	                                                }
	                                            }
	                                        }, POSITION, this);
	                                    }),
	                                    NORMAL: regeneratorRuntime.mark(function NORMAL() {
	                                        return regeneratorRuntime.wrap(function NORMAL$(_context24) {
	                                            while (1) {
	                                                switch (_context24.prev = _context24.next) {
	                                                    case 0:
	                                                        return _context24.delegateYield(_GeometryUtility2.default.ellipseNormal(_Vector2.default.ZUnit, div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context24.stop();
	                                                }
	                                            }
	                                        }, NORMAL, this);
	                                    }),
	                                    TEXCOORD: regeneratorRuntime.mark(function TEXCOORD() {
	                                        return regeneratorRuntime.wrap(function TEXCOORD$(_context25) {
	                                            while (1) {
	                                                switch (_context25.prev = _context25.next) {
	                                                    case 0:
	                                                        return _context25.delegateYield(_GeometryUtility2.default.ellipseTexCoord(div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context25.stop();
	                                                }
	                                            }
	                                        }, TEXCOORD, this);
	                                    })
	                                };
	                            }
	                        }
	                    }
	                });
	            });
	        }
	    }, {
	        key: "_registerCylinder",
	        value: function _registerCylinder() {
	            _GeometryFactory2.default.addType("cylinder", {
	                divide: {
	                    converter: "Number",
	                    default: 50
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indices: {
	                        default: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context26) {
	                                    while (1) {
	                                        switch (_context26.prev = _context26.next) {
	                                            case 0:
	                                                return _context26.delegateYield(_GeometryUtility2.default.cylinderIndex(0, div), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context26.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.TRIANGLES
	                        },
	                        wireframe: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context27) {
	                                    while (1) {
	                                        switch (_context27.prev = _context27.next) {
	                                            case 0:
	                                                return _context27.delegateYield(_GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.cylinderIndex(0, div)), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context27.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.LINES
	                        }
	                    },
	                    vertices: {
	                        main: {
	                            size: {
	                                POSITION: 3,
	                                NORMAL: 3,
	                                TEXCOORD: 2
	                            },
	                            count: _GeometryUtility2.default.cylinderSize(div),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    POSITION: regeneratorRuntime.mark(function POSITION() {
	                                        return regeneratorRuntime.wrap(function POSITION$(_context28) {
	                                            while (1) {
	                                                switch (_context28.prev = _context28.next) {
	                                                    case 0:
	                                                        return _context28.delegateYield(_GeometryUtility2.default.cylinderPosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context28.stop();
	                                                }
	                                            }
	                                        }, POSITION, this);
	                                    }),
	                                    NORMAL: regeneratorRuntime.mark(function NORMAL() {
	                                        return regeneratorRuntime.wrap(function NORMAL$(_context29) {
	                                            while (1) {
	                                                switch (_context29.prev = _context29.next) {
	                                                    case 0:
	                                                        return _context29.delegateYield(_GeometryUtility2.default.cylinderNormal(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context29.stop();
	                                                }
	                                            }
	                                        }, NORMAL, this);
	                                    }),
	                                    TEXCOORD: regeneratorRuntime.mark(function TEXCOORD() {
	                                        return regeneratorRuntime.wrap(function TEXCOORD$(_context30) {
	                                            while (1) {
	                                                switch (_context30.prev = _context30.next) {
	                                                    case 0:
	                                                        return _context30.delegateYield(_GeometryUtility2.default.cylinderTexCoord(div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context30.stop();
	                                                }
	                                            }
	                                        }, TEXCOORD, this);
	                                    })
	                                };
	                            }
	                        }
	                    },
	                    aabb: unitBox
	                });
	            });
	        }
	    }, {
	        key: "_registerCone",
	        value: function _registerCone() {
	            _GeometryFactory2.default.addType("cone", {
	                divide: {
	                    converter: "Number",
	                    default: 50
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indices: {
	                        default: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context31) {
	                                    while (1) {
	                                        switch (_context31.prev = _context31.next) {
	                                            case 0:
	                                                return _context31.delegateYield(_GeometryUtility2.default.coneIndex(0, div), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context31.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.TRIANGLES
	                        },
	                        wireframe: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context32) {
	                                    while (1) {
	                                        switch (_context32.prev = _context32.next) {
	                                            case 0:
	                                                return _context32.delegateYield(_GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.coneIndex(0, div)), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context32.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.LINES
	                        }
	                    },
	                    vertices: {
	                        main: {
	                            size: {
	                                POSITION: 3,
	                                NORMAL: 3,
	                                TEXCOORD: 2
	                            },
	                            count: _GeometryUtility2.default.coneSize(div),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    POSITION: regeneratorRuntime.mark(function POSITION() {
	                                        return regeneratorRuntime.wrap(function POSITION$(_context33) {
	                                            while (1) {
	                                                switch (_context33.prev = _context33.next) {
	                                                    case 0:
	                                                        return _context33.delegateYield(_GeometryUtility2.default.conePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context33.stop();
	                                                }
	                                            }
	                                        }, POSITION, this);
	                                    }),
	                                    NORMAL: regeneratorRuntime.mark(function NORMAL() {
	                                        return regeneratorRuntime.wrap(function NORMAL$(_context34) {
	                                            while (1) {
	                                                switch (_context34.prev = _context34.next) {
	                                                    case 0:
	                                                        return _context34.delegateYield(_GeometryUtility2.default.coneNormal(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context34.stop();
	                                                }
	                                            }
	                                        }, NORMAL, this);
	                                    }),
	                                    TEXCOORD: regeneratorRuntime.mark(function TEXCOORD() {
	                                        return regeneratorRuntime.wrap(function TEXCOORD$(_context35) {
	                                            while (1) {
	                                                switch (_context35.prev = _context35.next) {
	                                                    case 0:
	                                                        return _context35.delegateYield(_GeometryUtility2.default.coneTexCoord(div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context35.stop();
	                                                }
	                                            }
	                                        }, TEXCOORD, this);
	                                    })
	                                };
	                            }
	                        }
	                    },
	                    aabb: unitBox
	                });
	            });
	        }
	    }, {
	        key: "_registerPlane",
	        value: function _registerPlane() {
	            _GeometryFactory2.default.addType("plane", {
	                divide: {
	                    converter: "Number",
	                    default: 10
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indices: {
	                        default: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context36) {
	                                    while (1) {
	                                        switch (_context36.prev = _context36.next) {
	                                            case 0:
	                                                return _context36.delegateYield(_GeometryUtility2.default.planeIndex(0, div), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context36.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.TRIANGLES
	                        },
	                        wireframe: {
	                            generator: regeneratorRuntime.mark(function generator() {
	                                return regeneratorRuntime.wrap(function generator$(_context37) {
	                                    while (1) {
	                                        switch (_context37.prev = _context37.next) {
	                                            case 0:
	                                                return _context37.delegateYield(_GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.planeIndex(0, div)), "t0", 1);
	
	                                            case 1:
	                                            case "end":
	                                                return _context37.stop();
	                                        }
	                                    }
	                                }, generator, this);
	                            }),
	                            topology: WebGLRenderingContext.LINES
	                        }
	                    },
	                    vertices: {
	                        main: {
	                            size: {
	                                POSITION: 3,
	                                NORMAL: 3,
	                                TEXCOORD: 2
	                            },
	                            count: _GeometryUtility2.default.planeSize(div),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    POSITION: regeneratorRuntime.mark(function POSITION() {
	                                        return regeneratorRuntime.wrap(function POSITION$(_context38) {
	                                            while (1) {
	                                                switch (_context38.prev = _context38.next) {
	                                                    case 0:
	                                                        return _context38.delegateYield(_GeometryUtility2.default.planePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context38.stop();
	                                                }
	                                            }
	                                        }, POSITION, this);
	                                    }),
	                                    NORMAL: regeneratorRuntime.mark(function NORMAL() {
	                                        return regeneratorRuntime.wrap(function NORMAL$(_context39) {
	                                            while (1) {
	                                                switch (_context39.prev = _context39.next) {
	                                                    case 0:
	                                                        return _context39.delegateYield(_GeometryUtility2.default.planeNormal(_Vector2.default.ZUnit, div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context39.stop();
	                                                }
	                                            }
	                                        }, NORMAL, this);
	                                    }),
	                                    TEXCOORD: regeneratorRuntime.mark(function TEXCOORD() {
	                                        return regeneratorRuntime.wrap(function TEXCOORD$(_context40) {
	                                            while (1) {
	                                                switch (_context40.prev = _context40.next) {
	                                                    case 0:
	                                                        return _context40.delegateYield(_GeometryUtility2.default.planeTexCoord(div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context40.stop();
	                                                }
	                                            }
	                                        }, TEXCOORD, this);
	                                    })
	                                };
	                            }
	                        }
	                    }
	                });
	            });
	        }
	    }]);
	
	    return DefaultPrimitives;
	}();
	
	exports.default = DefaultPrimitives;

/***/ },
/* 84 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.AABB;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(14);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GeometryUtility = function () {
	    function GeometryUtility() {
	        _classCallCheck(this, GeometryUtility);
	    }
	
	    _createClass(GeometryUtility, null, [{
	        key: "linesFromTriangles",
	
	        /**
	         * Convert triangles topology to lines. Basically uses for making wireframes.
	         * @param  {IterableIterator<number>} indices [description]
	         * @return {IterableIterator<number>}          [description]
	         */
	        value: regeneratorRuntime.mark(function linesFromTriangles(indices) {
	            var ic, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, index, a, b, c;
	
	            return regeneratorRuntime.wrap(function linesFromTriangles$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            ic = new Array(3);
	                            i = 0;
	                            _iteratorNormalCompletion = true;
	                            _didIteratorError = false;
	                            _iteratorError = undefined;
	                            _context.prev = 5;
	                            _iterator = indices[Symbol.iterator]();
	
	                        case 7:
	                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                                _context.next = 17;
	                                break;
	                            }
	
	                            index = _step.value;
	
	                            ic[i % 3] = index;
	
	                            if (!(i % 3 === 2)) {
	                                _context.next = 13;
	                                break;
	                            }
	
	                            a = ic[0], b = ic[1], c = ic[2];
	                            return _context.delegateYield([a, b, b, c, c, a], "t0", 13);
	
	                        case 13:
	                            i++;
	
	                        case 14:
	                            _iteratorNormalCompletion = true;
	                            _context.next = 7;
	                            break;
	
	                        case 17:
	                            _context.next = 23;
	                            break;
	
	                        case 19:
	                            _context.prev = 19;
	                            _context.t1 = _context["catch"](5);
	                            _didIteratorError = true;
	                            _iteratorError = _context.t1;
	
	                        case 23:
	                            _context.prev = 23;
	                            _context.prev = 24;
	
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	
	                        case 26:
	                            _context.prev = 26;
	
	                            if (!_didIteratorError) {
	                                _context.next = 29;
	                                break;
	                            }
	
	                            throw _iteratorError;
	
	                        case 29:
	                            return _context.finish(26);
	
	                        case 30:
	                            return _context.finish(23);
	
	                        case 31:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, linesFromTriangles, this, [[5, 19, 23, 31], [24,, 26, 30]]);
	        })
	        /**
	         * Generator for ellipse positions
	         * @param  {Vector3}                  center [the center position of ellipse]
	         * @param  {Vector3}                  up     [up vector for ellipse]
	         * @param  {Vector3}                  right  [right vector for ellipse]
	         * @param  {number}                   divide [how many triangles should consists in the ellipse]
	         * @return {IterableIterator<number>}        [Generated iterator for position]
	         */
	
	    }, {
	        key: "ellipsePosition",
	        value: regeneratorRuntime.mark(function ellipsePosition(center, up, right, divide) {
	            var step, i, theta, sin, cos;
	            return regeneratorRuntime.wrap(function ellipsePosition$(_context2) {
	                while (1) {
	                    switch (_context2.prev = _context2.next) {
	                        case 0:
	                            _context2.next = 2;
	                            return center.X;
	
	                        case 2:
	                            _context2.next = 4;
	                            return center.Y;
	
	                        case 4:
	                            _context2.next = 6;
	                            return center.Z;
	
	                        case 6:
	                            step = 2 * Math.PI / divide;
	                            i = 0;
	
	                        case 8:
	                            if (!(i < divide)) {
	                                _context2.next = 21;
	                                break;
	                            }
	
	                            theta = step * i;
	                            sin = Math.sin(Math.PI * 2 - theta);
	                            cos = Math.cos(Math.PI * 2 - theta);
	                            _context2.next = 14;
	                            return center.X + cos * up.X + sin * right.X;
	
	                        case 14:
	                            _context2.next = 16;
	                            return center.Y + cos * up.Y + sin * right.Y;
	
	                        case 16:
	                            _context2.next = 18;
	                            return center.Z + cos * up.Z + sin * right.Z;
	
	                        case 18:
	                            i++;
	                            _context2.next = 8;
	                            break;
	
	                        case 21:
	                        case "end":
	                            return _context2.stop();
	                    }
	                }
	            }, ellipsePosition, this);
	        })
	    }, {
	        key: "trianglePosition",
	        value: regeneratorRuntime.mark(function trianglePosition(center, up, right) {
	            var p0, p1, p2;
	            return regeneratorRuntime.wrap(function trianglePosition$(_context3) {
	                while (1) {
	                    switch (_context3.prev = _context3.next) {
	                        case 0:
	                            p0 = center.addWith(up);
	                            p1 = center.subtractWith(up).addWith(right);
	                            p2 = center.subtractWith(up).subtractWith(right);
	                            return _context3.delegateYield(p0.rawElements, "t0", 4);
	
	                        case 4:
	                            return _context3.delegateYield(p1.rawElements, "t1", 5);
	
	                        case 5:
	                            return _context3.delegateYield(p2.rawElements, "t2", 6);
	
	                        case 6:
	                        case "end":
	                            return _context3.stop();
	                    }
	                }
	            }, trianglePosition, this);
	        })
	    }, {
	        key: "cubePosition",
	        value: regeneratorRuntime.mark(function cubePosition(center, up, right, forward) {
	            return regeneratorRuntime.wrap(function cubePosition$(_context4) {
	                while (1) {
	                    switch (_context4.prev = _context4.next) {
	                        case 0:
	                            return _context4.delegateYield(GeometryUtility.quadPosition(center.subtractWith(forward), up, right), "t0", 1);
	
	                        case 1:
	                            return _context4.delegateYield(GeometryUtility.quadPosition(center.addWith(forward), up, right.negateThis()), "t1", 2);
	
	                        case 2:
	                            return _context4.delegateYield(GeometryUtility.quadPosition(center.addWith(up), forward, right), "t2", 3);
	
	                        case 3:
	                            return _context4.delegateYield(GeometryUtility.quadPosition(center.addWith(right), forward, up.negateThis()), "t3", 4);
	
	                        case 4:
	                            return _context4.delegateYield(GeometryUtility.quadPosition(center.subtractWith(up), forward, right.negateThis()), "t4", 5);
	
	                        case 5:
	                            return _context4.delegateYield(GeometryUtility.quadPosition(center.subtractWith(right), forward, up), "t5", 6);
	
	                        case 6:
	                        case "end":
	                            return _context4.stop();
	                    }
	                }
	            }, cubePosition, this);
	        })
	    }, {
	        key: "quadPosition",
	        value: regeneratorRuntime.mark(function quadPosition(center, up, right) {
	            var p0, p1, p2, p3;
	            return regeneratorRuntime.wrap(function quadPosition$(_context5) {
	                while (1) {
	                    switch (_context5.prev = _context5.next) {
	                        case 0:
	                            p0 = center.subtractWith(right).addWith(up);
	                            p1 = center.addWith(right).addWith(up);
	                            p2 = center.addWith(right).subtractWith(up);
	                            p3 = center.subtractWith(right).subtractWith(up);
	                            return _context5.delegateYield(p0.rawElements, "t0", 5);
	
	                        case 5:
	                            return _context5.delegateYield(p1.rawElements, "t1", 6);
	
	                        case 6:
	                            return _context5.delegateYield(p2.rawElements, "t2", 7);
	
	                        case 7:
	                            return _context5.delegateYield(p3.rawElements, "t3", 8);
	
	                        case 8:
	                        case "end":
	                            return _context5.stop();
	                    }
	                }
	            }, quadPosition, this);
	        })
	    }, {
	        key: "planePosition",
	        value: regeneratorRuntime.mark(function planePosition(center, up, right, divide) {
	            var x, y, i, j, _i, _j;
	
	            return regeneratorRuntime.wrap(function planePosition$(_context6) {
	                while (1) {
	                    switch (_context6.prev = _context6.next) {
	                        case 0:
	                            x = center.addWith(right).multiplyWith(2);
	                            y = center.subtractWith(up).multiplyWith(2);
	                            i = -divide / 2;
	
	                        case 3:
	                            if (!(i < divide / 2 + 1)) {
	                                _context6.next = 13;
	                                break;
	                            }
	
	                            j = -divide / 2;
	
	                        case 5:
	                            if (!(j < divide / 2 + 1)) {
	                                _context6.next = 10;
	                                break;
	                            }
	
	                            return _context6.delegateYield(x.multiplyWith(j / divide).addWith(y.multiplyWith(i / divide)).rawElements, "t0", 7);
	
	                        case 7:
	                            j++;
	                            _context6.next = 5;
	                            break;
	
	                        case 10:
	                            i++;
	                            _context6.next = 3;
	                            break;
	
	                        case 13:
	                            _i = -divide / 2;
	
	                        case 14:
	                            if (!(_i < divide / 2 + 1)) {
	                                _context6.next = 24;
	                                break;
	                            }
	
	                            _j = -divide / 2;
	
	                        case 16:
	                            if (!(_j < divide / 2 + 1)) {
	                                _context6.next = 21;
	                                break;
	                            }
	
	                            return _context6.delegateYield(x.multiplyWith(_j / divide).addWith(y.multiplyWith(_i / divide)).rawElements, "t1", 18);
	
	                        case 18:
	                            _j++;
	                            _context6.next = 16;
	                            break;
	
	                        case 21:
	                            _i++;
	                            _context6.next = 14;
	                            break;
	
	                        case 24:
	                        case "end":
	                            return _context6.stop();
	                    }
	                }
	            }, planePosition, this);
	        })
	    }, {
	        key: "cylinderPosition",
	        value: regeneratorRuntime.mark(function cylinderPosition(center, up, right, forward, divide) {
	            var step, d, d2, temp, i, theta, sin, cos, currentCenter, currentRight;
	            return regeneratorRuntime.wrap(function cylinderPosition$(_context7) {
	                while (1) {
	                    switch (_context7.prev = _context7.next) {
	                        case 0:
	                            return _context7.delegateYield(GeometryUtility.ellipsePosition(center.addWith(up), forward, right, divide), "t0", 1);
	
	                        case 1:
	                            return _context7.delegateYield(GeometryUtility.ellipsePosition(center.subtractWith(up), forward, _Vector2.default.negate(right), divide), "t1", 2);
	
	                        case 2:
	                            step = 2 * Math.PI / divide;
	                            d = Math.cos(step / 2);
	                            d2 = Math.sin(step / 2);
	                            temp = divide % 2 == 0 ? step / 2 : 0;
	                            i = 0;
	
	                        case 7:
	                            if (!(i < divide)) {
	                                _context7.next = 17;
	                                break;
	                            }
	
	                            theta = step / 2 + step * i;
	                            sin = Math.sin((Math.PI - step) / 2 - theta - temp);
	                            cos = Math.cos((Math.PI - step) / 2 - theta - temp);
	                            currentCenter = new _Vector2.default(d * cos, center.Y, d * sin);
	                            currentRight = new _Vector2.default(Math.cos(-step / 2 - theta - temp), center.Y, Math.sin(-step / 2 - theta - temp));
	                            return _context7.delegateYield(GeometryUtility.quadPosition(currentCenter, up, _Vector2.default.multiply(d2, currentRight)), "t2", 14);
	
	                        case 14:
	                            i++;
	                            _context7.next = 7;
	                            break;
	
	                        case 17:
	                        case "end":
	                            return _context7.stop();
	                    }
	                }
	            }, cylinderPosition, this);
	        })
	    }, {
	        key: "conePosition",
	        value: regeneratorRuntime.mark(function conePosition(center, up, right, forward, divide) {
	            var step, d, d2, temp, i, theta, sin, cos, currentCenter, currentRight;
	            return regeneratorRuntime.wrap(function conePosition$(_context8) {
	                while (1) {
	                    switch (_context8.prev = _context8.next) {
	                        case 0:
	                            return _context8.delegateYield(GeometryUtility.ellipsePosition(center.subtractWith(up), forward, _Vector2.default.negate(right), divide), "t0", 1);
	
	                        case 1:
	                            step = 2 * Math.PI / divide;
	                            d = Math.cos(step / 2) / 2;
	                            d2 = Math.sin(step / 2);
	                            temp = divide % 2 == 1 ? step / 2 : 0;
	                            i = 0;
	
	                        case 6:
	                            if (!(i < divide)) {
	                                _context8.next = 16;
	                                break;
	                            }
	
	                            theta = step * i;
	                            sin = Math.sin((Math.PI - step) / 2 - theta - temp);
	                            cos = Math.cos((Math.PI - step) / 2 - theta - temp);
	                            currentCenter = new _Vector2.default(d * cos, center.Y, d * sin);
	                            currentRight = new _Vector2.default(Math.cos(-step / 2 - theta - temp), center.Y, Math.sin(-step / 2 - theta - temp));
	                            return _context8.delegateYield(GeometryUtility.trianglePosition(currentCenter, up.subtractWith(currentCenter), _Vector2.default.multiply(d2, currentRight)), "t1", 13);
	
	                        case 13:
	                            i++;
	                            _context8.next = 6;
	                            break;
	
	                        case 16:
	                        case "end":
	                            return _context8.stop();
	                    }
	                }
	            }, conePosition, this);
	        })
	    }, {
	        key: "spherePosition",
	        value: regeneratorRuntime.mark(function spherePosition(center, up, right, forward, rowDiv, circleDiv) {
	            var ia, ja, j, phi, sinPhi, upVector, i, theta;
	            return regeneratorRuntime.wrap(function spherePosition$(_context9) {
	                while (1) {
	                    switch (_context9.prev = _context9.next) {
	                        case 0:
	                            return _context9.delegateYield(center.addWith(up).rawElements, "t0", 1);
	
	                        case 1:
	                            return _context9.delegateYield(center.subtractWith(up).rawElements, "t1", 2);
	
	                        case 2:
	                            ia = 2 * Math.PI / circleDiv;
	                            ja = Math.PI / (rowDiv + 1);
	                            j = 1;
	
	                        case 5:
	                            if (!(j <= rowDiv)) {
	                                _context9.next = 19;
	                                break;
	                            }
	
	                            phi = ja * j;
	                            sinPhi = Math.sin(phi);
	                            upVector = up.multiplyWith(Math.cos(phi));
	                            i = 0;
	
	                        case 10:
	                            if (!(i <= circleDiv)) {
	                                _context9.next = 16;
	                                break;
	                            }
	
	                            theta = ia * i;
	                            return _context9.delegateYield(right.multiplyWith(Math.cos(theta)).addWith(forward.multiplyWith(Math.sin(theta))).multiplyWith(sinPhi).addWith(upVector).rawElements, "t2", 13);
	
	                        case 13:
	                            i++;
	                            _context9.next = 10;
	                            break;
	
	                        case 16:
	                            j++;
	                            _context9.next = 5;
	                            break;
	
	                        case 19:
	                        case "end":
	                            return _context9.stop();
	                    }
	                }
	            }, spherePosition, this);
	        })
	    }, {
	        key: "quadNormal",
	        value: regeneratorRuntime.mark(function quadNormal(normal) {
	            return regeneratorRuntime.wrap(function quadNormal$(_context10) {
	                while (1) {
	                    switch (_context10.prev = _context10.next) {
	                        case 0:
	                            return _context10.delegateYield(normal.rawElements, "t0", 1);
	
	                        case 1:
	                            return _context10.delegateYield(normal.rawElements, "t1", 2);
	
	                        case 2:
	                            return _context10.delegateYield(normal.rawElements, "t2", 3);
	
	                        case 3:
	                            return _context10.delegateYield(normal.rawElements, "t3", 4);
	
	                        case 4:
	                        case "end":
	                            return _context10.stop();
	                    }
	                }
	            }, quadNormal, this);
	        })
	    }, {
	        key: "ellipseNormal",
	        value: regeneratorRuntime.mark(function ellipseNormal(normal, divide) {
	            var i;
	            return regeneratorRuntime.wrap(function ellipseNormal$(_context11) {
	                while (1) {
	                    switch (_context11.prev = _context11.next) {
	                        case 0:
	                            i = 0;
	
	                        case 1:
	                            if (!(i < divide + 1)) {
	                                _context11.next = 6;
	                                break;
	                            }
	
	                            return _context11.delegateYield(normal.rawElements, "t0", 3);
	
	                        case 3:
	                            i++;
	                            _context11.next = 1;
	                            break;
	
	                        case 6:
	                        case "end":
	                            return _context11.stop();
	                    }
	                }
	            }, ellipseNormal, this);
	        })
	    }, {
	        key: "triangleNormal",
	        value: regeneratorRuntime.mark(function triangleNormal(normal) {
	            return regeneratorRuntime.wrap(function triangleNormal$(_context12) {
	                while (1) {
	                    switch (_context12.prev = _context12.next) {
	                        case 0:
	                            return _context12.delegateYield(normal.rawElements, "t0", 1);
	
	                        case 1:
	                            return _context12.delegateYield(normal.rawElements, "t1", 2);
	
	                        case 2:
	                            return _context12.delegateYield(normal.rawElements, "t2", 3);
	
	                        case 3:
	                        case "end":
	                            return _context12.stop();
	                    }
	                }
	            }, triangleNormal, this);
	        })
	    }, {
	        key: "cubeNormal",
	        value: regeneratorRuntime.mark(function cubeNormal(center, up, right, forward) {
	            return regeneratorRuntime.wrap(function cubeNormal$(_context13) {
	                while (1) {
	                    switch (_context13.prev = _context13.next) {
	                        case 0:
	                            return _context13.delegateYield(GeometryUtility.quadNormal(forward.negateThis()), "t0", 1);
	
	                        case 1:
	                            return _context13.delegateYield(GeometryUtility.quadNormal(forward), "t1", 2);
	
	                        case 2:
	                            return _context13.delegateYield(GeometryUtility.quadNormal(up), "t2", 3);
	
	                        case 3:
	                            return _context13.delegateYield(GeometryUtility.quadNormal(right), "t3", 4);
	
	                        case 4:
	                            return _context13.delegateYield(GeometryUtility.quadNormal(up.negateThis()), "t4", 5);
	
	                        case 5:
	                            return _context13.delegateYield(GeometryUtility.quadNormal(right.negateThis()), "t5", 6);
	
	                        case 6:
	                        case "end":
	                            return _context13.stop();
	                    }
	                }
	            }, cubeNormal, this);
	        })
	    }, {
	        key: "cylinderNormal",
	        value: regeneratorRuntime.mark(function cylinderNormal(center, up, right, forward, divide) {
	            var step, lastRight, i, theta, sin, cos, currentRight;
	            return regeneratorRuntime.wrap(function cylinderNormal$(_context14) {
	                while (1) {
	                    switch (_context14.prev = _context14.next) {
	                        case 0:
	                            return _context14.delegateYield(GeometryUtility.ellipseNormal(up, divide), "t0", 1);
	
	                        case 1:
	                            return _context14.delegateYield(GeometryUtility.ellipseNormal(up.negateThis(), divide), "t1", 2);
	
	                        case 2:
	                            step = 2 * Math.PI / divide;
	                            lastRight = new _Vector2.default(Math.cos(-step / 2), center.Y, Math.sin(-step / 2));
	                            i = 0;
	
	                        case 5:
	                            if (!(i < divide)) {
	                                _context14.next = 18;
	                                break;
	                            }
	
	                            theta = step * (i + 1);
	                            sin = Math.sin(Math.PI / 2 - theta);
	                            cos = Math.cos(Math.PI / 2 - theta);
	                            currentRight = new _Vector2.default(Math.cos(-step / 2 - theta), center.Y, Math.sin(-step / 2 - theta));
	                            return _context14.delegateYield(_Vector2.default.cross(lastRight, up).rawElements, "t2", 11);
	
	                        case 11:
	                            return _context14.delegateYield(_Vector2.default.cross(currentRight, up).rawElements, "t3", 12);
	
	                        case 12:
	                            return _context14.delegateYield(_Vector2.default.cross(currentRight, up).rawElements, "t4", 13);
	
	                        case 13:
	                            return _context14.delegateYield(_Vector2.default.cross(lastRight, up).rawElements, "t5", 14);
	
	                        case 14:
	                            lastRight = currentRight;
	
	                        case 15:
	                            i++;
	                            _context14.next = 5;
	                            break;
	
	                        case 18:
	                        case "end":
	                            return _context14.stop();
	                    }
	                }
	            }, cylinderNormal, this);
	        })
	    }, {
	        key: "coneNormal",
	        value: regeneratorRuntime.mark(function coneNormal(center, up, right, forward, divide) {
	            var step, d, lastNormal, i, theta, sin, cos, currentCenter, currentRight;
	            return regeneratorRuntime.wrap(function coneNormal$(_context15) {
	                while (1) {
	                    switch (_context15.prev = _context15.next) {
	                        case 0:
	                            return _context15.delegateYield(GeometryUtility.ellipseNormal(up.negateThis(), divide), "t0", 1);
	
	                        case 1:
	                            step = Math.PI / divide;
	                            d = Math.cos(step / 2) / 2;
	                            lastNormal = _Vector2.default.cross(new _Vector2.default(Math.cos(step / 2), center.Y, Math.sin(step / 2)), up.subtractWith(new _Vector2.default(d * Math.cos((Math.PI + step) / 2), center.Y, d * Math.sin((Math.PI + step) / 2))));
	                            i = 0;
	
	                        case 5:
	                            if (!(i < divide * 2)) {
	                                _context15.next = 18;
	                                break;
	                            }
	
	                            theta = step * i;
	                            sin = Math.sin((Math.PI - step) / 2 - theta);
	                            cos = Math.cos((Math.PI - step) / 2 - theta);
	                            currentCenter = new _Vector2.default(d * cos, center.Y, d * sin);
	                            currentRight = new _Vector2.default(Math.cos(-step / 2 - theta), center.Y, Math.sin(-step / 2 - theta));
	                            return _context15.delegateYield(_Vector2.default.cross(currentRight, up.subtractWith(currentCenter)).rawElements, "t1", 12);
	
	                        case 12:
	                            if (!(i % 2 == 1)) {
	                                _context15.next = 15;
	                                break;
	                            }
	
	                            return _context15.delegateYield(lastNormal.rawElements, "t2", 14);
	
	                        case 14:
	                            lastNormal = _Vector2.default.cross(currentRight, up.subtractWith(currentCenter));
	
	                        case 15:
	                            i++;
	                            _context15.next = 5;
	                            break;
	
	                        case 18:
	                            return _context15.delegateYield(_Vector2.default.cross(new _Vector2.default(Math.cos(step / 2), center.Y, Math.sin(step / 2)), up.subtractWith(new _Vector2.default(d * Math.cos((Math.PI + step) / 2), center.Y, d * Math.sin((Math.PI + step) / 2)))).rawElements, "t3", 19);
	
	                        case 19:
	                        case "end":
	                            return _context15.stop();
	                    }
	                }
	            }, coneNormal, this);
	        })
	    }, {
	        key: "planeNormal",
	        value: regeneratorRuntime.mark(function planeNormal(normal, divide) {
	            var s, i, _i2;
	
	            return regeneratorRuntime.wrap(function planeNormal$(_context16) {
	                while (1) {
	                    switch (_context16.prev = _context16.next) {
	                        case 0:
	                            s = GeometryUtility.planeSize(divide) / 2;
	                            i = 0;
	
	                        case 2:
	                            if (!(i < s)) {
	                                _context16.next = 7;
	                                break;
	                            }
	
	                            return _context16.delegateYield(normal.rawElements, "t0", 4);
	
	                        case 4:
	                            i++;
	                            _context16.next = 2;
	                            break;
	
	                        case 7:
	                            _i2 = 0;
	
	                        case 8:
	                            if (!(_i2 < s)) {
	                                _context16.next = 13;
	                                break;
	                            }
	
	                            return _context16.delegateYield(normal.negateThis().rawElements, "t1", 10);
	
	                        case 10:
	                            _i2++;
	                            _context16.next = 8;
	                            break;
	
	                        case 13:
	                        case "end":
	                            return _context16.stop();
	                    }
	                }
	            }, planeNormal, this);
	        })
	    }, {
	        key: "sphereNormal",
	        value: regeneratorRuntime.mark(function sphereNormal(up, right, forward, rowDiv, circleDiv) {
	            return regeneratorRuntime.wrap(function sphereNormal$(_context17) {
	                while (1) {
	                    switch (_context17.prev = _context17.next) {
	                        case 0:
	                            return _context17.delegateYield(GeometryUtility.spherePosition(_Vector2.default.Zero, up, right, forward, rowDiv, circleDiv), "t0", 1);
	
	                        case 1:
	                        case "end":
	                            return _context17.stop();
	                    }
	                }
	            }, sphereNormal, this);
	        })
	    }, {
	        key: "sphereTexCoord",
	        value: regeneratorRuntime.mark(function sphereTexCoord(rowDiv, circleDiv) {
	            var ia, ja, j, phi, sinPhi, i, theta;
	            return regeneratorRuntime.wrap(function sphereTexCoord$(_context18) {
	                while (1) {
	                    switch (_context18.prev = _context18.next) {
	                        case 0:
	                            return _context18.delegateYield([0, 0, 0, 1], "t0", 1);
	
	                        case 1:
	                            ia = 2 * Math.PI / circleDiv;
	                            ja = Math.PI / (rowDiv + 1);
	                            j = 1;
	
	                        case 4:
	                            if (!(j <= rowDiv)) {
	                                _context18.next = 17;
	                                break;
	                            }
	
	                            phi = ja * j;
	                            sinPhi = Math.sin(phi);
	                            i = 0;
	
	                        case 8:
	                            if (!(i <= circleDiv)) {
	                                _context18.next = 14;
	                                break;
	                            }
	
	                            theta = ia * i;
	                            return _context18.delegateYield([theta / Math.PI / 2, phi / Math.PI], "t1", 11);
	
	                        case 11:
	                            i++;
	                            _context18.next = 8;
	                            break;
	
	                        case 14:
	                            j++;
	                            _context18.next = 4;
	                            break;
	
	                        case 17:
	                        case "end":
	                            return _context18.stop();
	                    }
	                }
	            }, sphereTexCoord, this);
	        })
	    }, {
	        key: "quadTexCoord",
	        value: regeneratorRuntime.mark(function quadTexCoord() {
	            return regeneratorRuntime.wrap(function quadTexCoord$(_context19) {
	                while (1) {
	                    switch (_context19.prev = _context19.next) {
	                        case 0:
	                            return _context19.delegateYield([0, 0], "t0", 1);
	
	                        case 1:
	                            return _context19.delegateYield([1, 0], "t1", 2);
	
	                        case 2:
	                            return _context19.delegateYield([1, 1], "t2", 3);
	
	                        case 3:
	                            return _context19.delegateYield([0, 1], "t3", 4);
	
	                        case 4:
	                        case "end":
	                            return _context19.stop();
	                    }
	                }
	            }, quadTexCoord, this);
	        })
	    }, {
	        key: "cubeTexCoord",
	        value: regeneratorRuntime.mark(function cubeTexCoord() {
	            var i;
	            return regeneratorRuntime.wrap(function cubeTexCoord$(_context20) {
	                while (1) {
	                    switch (_context20.prev = _context20.next) {
	                        case 0:
	                            i = 0;
	
	                        case 1:
	                            if (!(i < 6)) {
	                                _context20.next = 6;
	                                break;
	                            }
	
	                            return _context20.delegateYield(GeometryUtility.quadTexCoord(), "t0", 3);
	
	                        case 3:
	                            i++;
	                            _context20.next = 1;
	                            break;
	
	                        case 6:
	                        case "end":
	                            return _context20.stop();
	                    }
	                }
	            }, cubeTexCoord, this);
	        })
	    }, {
	        key: "triangleTexCoord",
	        value: regeneratorRuntime.mark(function triangleTexCoord() {
	            return regeneratorRuntime.wrap(function triangleTexCoord$(_context21) {
	                while (1) {
	                    switch (_context21.prev = _context21.next) {
	                        case 0:
	                            return _context21.delegateYield([0, 0], "t0", 1);
	
	                        case 1:
	                            return _context21.delegateYield([1, 0], "t1", 2);
	
	                        case 2:
	                            return _context21.delegateYield([0, 1], "t2", 3);
	
	                        case 3:
	                        case "end":
	                            return _context21.stop();
	                    }
	                }
	            }, triangleTexCoord, this);
	        })
	    }, {
	        key: "ellipseTexCoord",
	        value: regeneratorRuntime.mark(function ellipseTexCoord(divide) {
	            var step, i, theta;
	            return regeneratorRuntime.wrap(function ellipseTexCoord$(_context22) {
	                while (1) {
	                    switch (_context22.prev = _context22.next) {
	                        case 0:
	                            return _context22.delegateYield([0.5, 0.5], "t0", 1);
	
	                        case 1:
	                            step = 2 * Math.PI / divide;
	                            i = 0;
	
	                        case 3:
	                            if (!(i < divide)) {
	                                _context22.next = 9;
	                                break;
	                            }
	
	                            theta = step * i;
	                            return _context22.delegateYield([0.5 + Math.cos(theta + Math.PI) / 2, 0.5 + Math.sin(theta + Math.PI) / 2], "t1", 6);
	
	                        case 6:
	                            i++;
	                            _context22.next = 3;
	                            break;
	
	                        case 9:
	                        case "end":
	                            return _context22.stop();
	                    }
	                }
	            }, ellipseTexCoord, this);
	        })
	    }, {
	        key: "planeTexCoord",
	        value: regeneratorRuntime.mark(function planeTexCoord(divide) {
	            var i, j, _i3, _j2;
	
	            return regeneratorRuntime.wrap(function planeTexCoord$(_context23) {
	                while (1) {
	                    switch (_context23.prev = _context23.next) {
	                        case 0:
	                            i = 0;
	
	                        case 1:
	                            if (!(i < divide + 1)) {
	                                _context23.next = 11;
	                                break;
	                            }
	
	                            j = 0;
	
	                        case 3:
	                            if (!(j < divide + 1)) {
	                                _context23.next = 8;
	                                break;
	                            }
	
	                            return _context23.delegateYield([j / divide, i / divide], "t0", 5);
	
	                        case 5:
	                            j++;
	                            _context23.next = 3;
	                            break;
	
	                        case 8:
	                            i++;
	                            _context23.next = 1;
	                            break;
	
	                        case 11:
	                            _i3 = 0;
	
	                        case 12:
	                            if (!(_i3 < divide + 1)) {
	                                _context23.next = 22;
	                                break;
	                            }
	
	                            _j2 = 0;
	
	                        case 14:
	                            if (!(_j2 < divide + 1)) {
	                                _context23.next = 19;
	                                break;
	                            }
	
	                            return _context23.delegateYield([_j2 / divide, _i3 / divide], "t1", 16);
	
	                        case 16:
	                            _j2++;
	                            _context23.next = 14;
	                            break;
	
	                        case 19:
	                            _i3++;
	                            _context23.next = 12;
	                            break;
	
	                        case 22:
	                        case "end":
	                            return _context23.stop();
	                    }
	                }
	            }, planeTexCoord, this);
	        })
	    }, {
	        key: "cylinderTexCoord",
	        value: regeneratorRuntime.mark(function cylinderTexCoord(divide) {
	            var p, j;
	            return regeneratorRuntime.wrap(function cylinderTexCoord$(_context24) {
	                while (1) {
	                    switch (_context24.prev = _context24.next) {
	                        case 0:
	                            return _context24.delegateYield(GeometryUtility.ellipseTexCoord(divide), "t0", 1);
	
	                        case 1:
	                            return _context24.delegateYield(GeometryUtility.ellipseTexCoord(divide), "t1", 2);
	
	                        case 2:
	                            p = 1 / divide;
	                            j = 0;
	
	                        case 4:
	                            if (!(j < divide)) {
	                                _context24.next = 12;
	                                break;
	                            }
	
	                            return _context24.delegateYield([p * j, 0], "t2", 6);
	
	                        case 6:
	                            return _context24.delegateYield([p * (j + 1), 0], "t3", 7);
	
	                        case 7:
	                            return _context24.delegateYield([p * (j + 1), 1], "t4", 8);
	
	                        case 8:
	                            return _context24.delegateYield([p * j, 1], "t5", 9);
	
	                        case 9:
	                            j++;
	                            _context24.next = 4;
	                            break;
	
	                        case 12:
	                        case "end":
	                            return _context24.stop();
	                    }
	                }
	            }, cylinderTexCoord, this);
	        })
	    }, {
	        key: "coneTexCoord",
	        value: regeneratorRuntime.mark(function coneTexCoord(divide) {
	            var step, i, theta;
	            return regeneratorRuntime.wrap(function coneTexCoord$(_context25) {
	                while (1) {
	                    switch (_context25.prev = _context25.next) {
	                        case 0:
	                            return _context25.delegateYield(GeometryUtility.ellipseTexCoord(divide), "t0", 1);
	
	                        case 1:
	                            step = Math.PI / 2 / divide;
	                            i = 0;
	
	                        case 3:
	                            if (!(i < divide)) {
	                                _context25.next = 11;
	                                break;
	                            }
	
	                            theta = -step * i;
	                            return _context25.delegateYield([0, 0], "t1", 6);
	
	                        case 6:
	                            return _context25.delegateYield([Math.cos(theta - step), Math.sin(theta - step)], "t2", 7);
	
	                        case 7:
	                            return _context25.delegateYield([Math.cos(theta), Math.sin(theta)], "t3", 8);
	
	                        case 8:
	                            i++;
	                            _context25.next = 3;
	                            break;
	
	                        case 11:
	                        case "end":
	                            return _context25.stop();
	                    }
	                }
	            }, coneTexCoord, this);
	        })
	    }, {
	        key: "triangleIndex",
	        value: regeneratorRuntime.mark(function triangleIndex(offset) {
	            var o;
	            return regeneratorRuntime.wrap(function triangleIndex$(_context26) {
	                while (1) {
	                    switch (_context26.prev = _context26.next) {
	                        case 0:
	                            o = offset;
	                            return _context26.delegateYield([o, o + 2, o + 1], "t0", 2);
	
	                        case 2:
	                        case "end":
	                            return _context26.stop();
	                    }
	                }
	            }, triangleIndex, this);
	        })
	    }, {
	        key: "quadIndex",
	        value: regeneratorRuntime.mark(function quadIndex(offset) {
	            var o;
	            return regeneratorRuntime.wrap(function quadIndex$(_context27) {
	                while (1) {
	                    switch (_context27.prev = _context27.next) {
	                        case 0:
	                            o = offset;
	                            return _context27.delegateYield([o, o + 2, o + 1, o, o + 3, o + 2], "t0", 2);
	
	                        case 2:
	                        case "end":
	                            return _context27.stop();
	                    }
	                }
	            }, quadIndex, this);
	        })
	    }, {
	        key: "cubeIndex",
	        value: regeneratorRuntime.mark(function cubeIndex(offset) {
	            var s, i;
	            return regeneratorRuntime.wrap(function cubeIndex$(_context28) {
	                while (1) {
	                    switch (_context28.prev = _context28.next) {
	                        case 0:
	                            s = GeometryUtility.quadSize();
	                            i = 0;
	
	                        case 2:
	                            if (!(i < 6)) {
	                                _context28.next = 7;
	                                break;
	                            }
	
	                            return _context28.delegateYield(GeometryUtility.quadIndex(offset + s * i), "t0", 4);
	
	                        case 4:
	                            i++;
	                            _context28.next = 2;
	                            break;
	
	                        case 7:
	                        case "end":
	                            return _context28.stop();
	                    }
	                }
	            }, cubeIndex, this);
	        })
	    }, {
	        key: "sphereIndex",
	        value: regeneratorRuntime.mark(function sphereIndex(offset, rowDiv, circleDiv) {
	            var getIndex, top, bottom, i, j, _i4, _i5;
	
	            return regeneratorRuntime.wrap(function sphereIndex$(_context29) {
	                while (1) {
	                    switch (_context29.prev = _context29.next) {
	                        case 0:
	                            getIndex = function getIndex(i, j) {
	                                return offset + (circleDiv + 1) * j + 2 + i;
	                            };
	
	                            top = offset;
	                            bottom = offset + 1;
	                            // upper side
	
	                            i = 0;
	
	                        case 4:
	                            if (!(i < circleDiv)) {
	                                _context29.next = 14;
	                                break;
	                            }
	
	                            _context29.next = 7;
	                            return top;
	
	                        case 7:
	                            _context29.next = 9;
	                            return getIndex(i, 0);
	
	                        case 9:
	                            _context29.next = 11;
	                            return getIndex(i + 1, 0);
	
	                        case 11:
	                            i++;
	                            _context29.next = 4;
	                            break;
	
	                        case 14:
	                            j = 0;
	
	                        case 15:
	                            if (!(j < rowDiv - 1)) {
	                                _context29.next = 36;
	                                break;
	                            }
	
	                            _i4 = 0;
	
	                        case 17:
	                            if (!(_i4 < circleDiv)) {
	                                _context29.next = 33;
	                                break;
	                            }
	
	                            _context29.next = 20;
	                            return getIndex(_i4, j);
	
	                        case 20:
	                            _context29.next = 22;
	                            return getIndex(_i4, j + 1);
	
	                        case 22:
	                            _context29.next = 24;
	                            return getIndex(_i4 + 1, j);
	
	                        case 24:
	                            _context29.next = 26;
	                            return getIndex(_i4, j + 1);
	
	                        case 26:
	                            _context29.next = 28;
	                            return getIndex(_i4 + 1, j + 1);
	
	                        case 28:
	                            _context29.next = 30;
	                            return getIndex(_i4 + 1, j);
	
	                        case 30:
	                            _i4++;
	                            _context29.next = 17;
	                            break;
	
	                        case 33:
	                            j++;
	                            _context29.next = 15;
	                            break;
	
	                        case 36:
	                            _i5 = 0;
	
	                        case 37:
	                            if (!(_i5 < circleDiv)) {
	                                _context29.next = 47;
	                                break;
	                            }
	
	                            _context29.next = 40;
	                            return bottom;
	
	                        case 40:
	                            _context29.next = 42;
	                            return getIndex(_i5 + 1, rowDiv - 1);
	
	                        case 42:
	                            _context29.next = 44;
	                            return getIndex(_i5, rowDiv - 1);
	
	                        case 44:
	                            _i5++;
	                            _context29.next = 37;
	                            break;
	
	                        case 47:
	                        case "end":
	                            return _context29.stop();
	                    }
	                }
	            }, sphereIndex, this);
	        })
	    }, {
	        key: "cylinderIndex",
	        value: regeneratorRuntime.mark(function cylinderIndex(offset, divide) {
	            var s, t, i;
	            return regeneratorRuntime.wrap(function cylinderIndex$(_context30) {
	                while (1) {
	                    switch (_context30.prev = _context30.next) {
	                        case 0:
	                            s = GeometryUtility.ellipseSize(divide);
	                            t = GeometryUtility.quadSize();
	                            return _context30.delegateYield(GeometryUtility.ellipseIndex(offset, divide), "t0", 3);
	
	                        case 3:
	                            return _context30.delegateYield(GeometryUtility.ellipseIndex(offset + s, divide), "t1", 4);
	
	                        case 4:
	                            i = 0;
	
	                        case 5:
	                            if (!(i < divide)) {
	                                _context30.next = 10;
	                                break;
	                            }
	
	                            return _context30.delegateYield(GeometryUtility.quadIndex(offset + s * 2 + t * i), "t2", 7);
	
	                        case 7:
	                            i++;
	                            _context30.next = 5;
	                            break;
	
	                        case 10:
	                        case "end":
	                            return _context30.stop();
	                    }
	                }
	            }, cylinderIndex, this);
	        })
	    }, {
	        key: "coneIndex",
	        value: regeneratorRuntime.mark(function coneIndex(offset, divide) {
	            var s, t, i;
	            return regeneratorRuntime.wrap(function coneIndex$(_context31) {
	                while (1) {
	                    switch (_context31.prev = _context31.next) {
	                        case 0:
	                            s = GeometryUtility.ellipseSize(divide);
	                            t = GeometryUtility.triangleSize();
	                            return _context31.delegateYield(GeometryUtility.ellipseIndex(offset, divide), "t0", 3);
	
	                        case 3:
	                            i = 0;
	
	                        case 4:
	                            if (!(i < divide)) {
	                                _context31.next = 9;
	                                break;
	                            }
	
	                            return _context31.delegateYield(GeometryUtility.triangleIndex(offset + s + i * t), "t1", 6);
	
	                        case 6:
	                            i++;
	                            _context31.next = 4;
	                            break;
	
	                        case 9:
	                        case "end":
	                            return _context31.stop();
	                    }
	                }
	            }, coneIndex, this);
	        })
	    }, {
	        key: "planeIndex",
	        value: regeneratorRuntime.mark(function planeIndex(offset, divide) {
	            var o, s, j, i, _j3, _i6;
	
	            return regeneratorRuntime.wrap(function planeIndex$(_context32) {
	                while (1) {
	                    switch (_context32.prev = _context32.next) {
	                        case 0:
	                            o = offset;
	                            s = GeometryUtility.planeSize(divide) / 2;
	                            j = 0;
	
	                        case 3:
	                            if (!(j < divide)) {
	                                _context32.next = 15;
	                                break;
	                            }
	
	                            i = 0;
	
	                        case 5:
	                            if (!(i < divide)) {
	                                _context32.next = 12;
	                                break;
	                            }
	
	                            o = offset + i + j * (divide + 1);
	                            return _context32.delegateYield([o, o + divide + 2, o + 1], "t0", 8);
	
	                        case 8:
	                            return _context32.delegateYield([o, o + divide + 1, o + divide + 2], "t1", 9);
	
	                        case 9:
	                            i++;
	                            _context32.next = 5;
	                            break;
	
	                        case 12:
	                            j++;
	                            _context32.next = 3;
	                            break;
	
	                        case 15:
	                            _j3 = 0;
	
	                        case 16:
	                            if (!(_j3 < divide)) {
	                                _context32.next = 28;
	                                break;
	                            }
	
	                            _i6 = 0;
	
	                        case 18:
	                            if (!(_i6 < divide)) {
	                                _context32.next = 25;
	                                break;
	                            }
	
	                            o = offset + _i6 + _j3 * (divide + 1) + s;
	                            return _context32.delegateYield([o, o + 1, o + divide + 2], "t2", 21);
	
	                        case 21:
	                            return _context32.delegateYield([o, o + divide + 2, o + divide + 1], "t3", 22);
	
	                        case 22:
	                            _i6++;
	                            _context32.next = 18;
	                            break;
	
	                        case 25:
	                            _j3++;
	                            _context32.next = 16;
	                            break;
	
	                        case 28:
	                        case "end":
	                            return _context32.stop();
	                    }
	                }
	            }, planeIndex, this);
	        })
	    }, {
	        key: "ellipseIndex",
	        value: regeneratorRuntime.mark(function ellipseIndex(offset, divide) {
	            var i;
	            return regeneratorRuntime.wrap(function ellipseIndex$(_context33) {
	                while (1) {
	                    switch (_context33.prev = _context33.next) {
	                        case 0:
	                            i = 0;
	
	                        case 1:
	                            if (!(i < divide - 1)) {
	                                _context33.next = 6;
	                                break;
	                            }
	
	                            return _context33.delegateYield([offset, offset + 1 + i, offset + 2 + i], "t0", 3);
	
	                        case 3:
	                            i++;
	                            _context33.next = 1;
	                            break;
	
	                        case 6:
	                            return _context33.delegateYield([offset, offset + divide, offset + 1], "t1", 7);
	
	                        case 7:
	                        case "end":
	                            return _context33.stop();
	                    }
	                }
	            }, ellipseIndex, this);
	        })
	    }, {
	        key: "quadSize",
	        value: function quadSize() {
	            return 4;
	        }
	    }, {
	        key: "triangleSize",
	        value: function triangleSize() {
	            return 3;
	        }
	    }, {
	        key: "cubeSize",
	        value: function cubeSize() {
	            return 6 * GeometryUtility.quadSize();
	        }
	    }, {
	        key: "sphereSize",
	        value: function sphereSize(rowDiv, circleDiv) {
	            return 2 + rowDiv * (circleDiv + 1);
	        }
	    }, {
	        key: "cylinderSize",
	        value: function cylinderSize(divide) {
	            return GeometryUtility.ellipseSize(divide) * 2 + divide * GeometryUtility.quadSize();
	        }
	    }, {
	        key: "coneSize",
	        value: function coneSize(divide) {
	            return GeometryUtility.ellipseSize(divide) + divide * GeometryUtility.triangleSize();
	        }
	    }, {
	        key: "planeSize",
	        value: function planeSize(divide) {
	            return (divide + 1) * (divide + 1) * 2;
	        }
	    }, {
	        key: "ellipseSize",
	        value: function ellipseSize(divide) {
	            return divide + 1;
	        }
	    }]);
	
	    return GeometryUtility;
	}();
	
	exports.default = GeometryUtility;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(14);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _AABB = __webpack_require__(84);
	
	var _AABB2 = _interopRequireDefault(_AABB);
	
	var _Buffer = __webpack_require__(87);
	
	var _Buffer2 = _interopRequireDefault(_Buffer);
	
	var _Geometry = __webpack_require__(50);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Helper class to instanciate Geometry easily.
	 */
	var GeometryBuilder = function () {
	    function GeometryBuilder() {
	        _classCallCheck(this, GeometryBuilder);
	    }
	
	    _createClass(GeometryBuilder, null, [{
	        key: "build",
	        value: function build(gl, info) {
	            if (info["verticies"] | info["indicies"]) {
	                throw new Error("Misspelled API was fixed already. use vertices and indices");
	            }
	            var buffers = {};
	            var attribs = {};
	            var aabb = info.aabb;
	            var needConstructAABB = !aabb;
	            if (needConstructAABB) {
	                aabb = new _AABB2.default();
	            }
	            for (var bufferKey in info.vertices) {
	                var byteWidth = 4;
	                var buffer = info.vertices[bufferKey];
	                var sizeSum = 0;
	                for (var attribKey in buffer.size) {
	                    if (attribs[attribKey]) {
	                        throw new Error("Attribute variable name was dupelicated");
	                    }
	                    var size = buffer.size[attribKey];
	                    attribs[attribKey] = {
	                        size: size,
	                        offset: sizeSum * byteWidth,
	                        bufferName: bufferKey,
	                        type: buffer.type ? buffer.type : WebGLRenderingContext.FLOAT,
	                        stride: 0
	                    };
	                    sizeSum += size;
	                }
	                for (var _attribKey in buffer.size) {
	                    attribs[_attribKey].stride = sizeSum * byteWidth;
	                }
	                // generate source array of vertex buffer
	                var bufferSource = new Array(sizeSum * buffer.count);
	                var bufferGenerator = buffer.getGenerators();
	                var generators = [];
	                var positionGeneratorIndex = 0;
	                var sizes = [];
	                var beforeEach = bufferGenerator.beforeEach ? bufferGenerator.beforeEach() : undefined;
	                for (var _attribKey2 in buffer.size) {
	                    if (_attribKey2 === "beforeEach") {
	                        continue;
	                    }
	                    var generator = bufferGenerator[_attribKey2];
	                    generators.push(generator());
	                    sizes.push(buffer.size[_attribKey2]);
	                    if (_attribKey2 === "POSITION") {
	                        positionGeneratorIndex = generators.length - 1;
	                    }
	                }
	                var i = 0;
	                for (var vertCount = 0; vertCount < buffer.count; vertCount++) {
	                    if (beforeEach && beforeEach.next().done) {
	                        throw new Error("before each was ended before reaching count.");
	                    }
	                    for (var genIndex = 0; genIndex < generators.length; genIndex++) {
	                        var _generator = generators[genIndex];
	                        for (var sizeIndex = 0; sizeIndex < sizes[genIndex]; sizeIndex++) {
	                            var genResult = _generator.next();
	                            if (genResult.done) {
	                                throw new Error("Generator function finished before reaching specified count");
	                            }
	                            bufferSource[i] = genResult.value;
	                            i++;
	                        }
	                        if (needConstructAABB && genIndex === positionGeneratorIndex) {
	                            aabb.expand(new _Vector2.default(bufferSource[i - 3], bufferSource[i - 2], bufferSource[i - 1]));
	                        }
	                    }
	                }
	                // instanciate buffers
	                buffers[bufferKey] = new _Buffer2.default(gl, WebGLRenderingContext.ARRAY_BUFFER, buffer.usage ? buffer.usage : WebGLRenderingContext.STATIC_DRAW);
	                buffers[bufferKey].update(new Float32Array(bufferSource));
	            }
	            return new _Geometry2.default(buffers, attribs, this._generateIndices(gl, info.indices), aabb);
	        }
	    }, {
	        key: "_generateIndices",
	        value: function _generateIndices(gl, indexGenerator) {
	            var indexMap = {};
	            for (var indexName in indexGenerator) {
	                var indices = [];
	                var generatorInfo = indexGenerator[indexName];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = generatorInfo.generator()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var variable = _step.value;
	
	                        indices.push(variable);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                var bufferType = this._getIndexType(indices.length);
	                var buffer = new _Buffer2.default(gl, WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
	                buffer.update(new bufferType.ctor(indices));
	                indexMap[indexName] = {
	                    count: indices.length,
	                    index: buffer,
	                    type: bufferType.format,
	                    byteSize: bufferType.byteSize,
	                    byteOffset: 0,
	                    topology: generatorInfo.topology ? generatorInfo.topology : WebGLRenderingContext.TRIANGLES
	                };
	            }
	            return indexMap;
	        }
	        /**
	         * Determine which index type should be used
	         * @param  {number} length [description]
	         * @return {[type]}        [description]
	         */
	
	    }, {
	        key: "_getIndexType",
	        value: function _getIndexType(length) {
	            var format = WebGLRenderingContext.UNSIGNED_INT;
	            var arrayConstructor = Uint32Array;
	            var byteSize = 4;
	            if (length < 256) {
	                format = WebGLRenderingContext.UNSIGNED_BYTE;
	                arrayConstructor = Uint8Array;
	                byteSize = 1;
	            } else if (length < 65535) {
	                format = WebGLRenderingContext.UNSIGNED_SHORT;
	                arrayConstructor = Uint16Array;
	                byteSize = 2;
	            } else if (length >= 4294967296) {
	                throw new Error("Too many index of geometry!");
	            }
	            return {
	                format: format,
	                ctor: arrayConstructor,
	                byteSize: byteSize
	            };
	        }
	    }]);
	
	    return GeometryBuilder;
	}();
	
	exports.default = GeometryBuilder;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceBase2 = __webpack_require__(24);
	
	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Buffer = function (_ResourceBase) {
	    _inherits(Buffer, _ResourceBase);
	
	    function Buffer(gl) {
	        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WebGLRenderingContext.ARRAY_BUFFER;
	        var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.ELEMENT_ARRAY_BUFFER;
	
	        _classCallCheck(this, Buffer);
	
	        var _this = _possibleConstructorReturn(this, (Buffer.__proto__ || Object.getPrototypeOf(Buffer)).call(this, gl));
	
	        _this.target = target;
	        _this.usage = usage;
	        _this.buffer = gl.createBuffer();
	        return _this;
	    }
	
	    _createClass(Buffer, [{
	        key: "update",
	        value: function update(length, subBuffer) {
	            this.bind();
	            if (subBuffer) {
	                if (!this.valid) {
	                    this.gl.bufferData(this.target, length + subBuffer.byteLength, this.usage);
	                }
	                this.gl.bufferSubData(this.target, length, subBuffer);
	            } else {
	                if (typeof length === "number") {
	                    this.gl.bufferData(this.target, length, this.usage);
	                } else {
	                    this.gl.bufferData(this.target, length, this.usage);
	                }
	            }
	            this.valid = true;
	        }
	    }, {
	        key: "bind",
	        value: function bind() {
	            this.gl.bindBuffer(this.target, this.buffer);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Buffer.prototype.__proto__ || Object.getPrototypeOf(Buffer.prototype), "destroy", this).call(this);
	            this.gl.deleteBuffer(this.buffer);
	        }
	    }]);
	
	    return Buffer;
	}(_ResourceBase3.default);
	
	exports.default = Buffer;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MaterialFactory = __webpack_require__(37);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _Unlit = __webpack_require__(89);
	
	var _Unlit2 = _interopRequireDefault(_Unlit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DefaultMaterial = function () {
	    function DefaultMaterial() {
	        _classCallCheck(this, DefaultMaterial);
	    }
	
	    _createClass(DefaultMaterial, null, [{
	        key: "register",
	        value: function register() {
	            _MaterialFactory2.default.addSORTMaterial("unlit", _Unlit2.default);
	        }
	    }]);
	
	    return DefaultMaterial;
	}();
	
	exports.default = DefaultMaterial;

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "@Technique default{\n@DrawOrder(NoAlpha)\n@Pass{\n  @BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\n  @ExposeMacro(bool,test,TEST,true)\n  @ExposeMacro(int,test2,TEST2,3)\n  FS_PREC(mediump,float)\n  varying vec2 vTexCoord;\n  #ifdef VS\n\n  attribute vec3 position;\n  attribute vec2 texCoord;\n  @MODELVIEWPROJECTION\n  uniform mat4 _matPVM;\n  void main()\n  {\n    gl_Position = _matPVM * vec4(position,1.0);\n    vTexCoord = texCoord;\n  }\n  #endif\n  #ifdef FS\n  @{type:\"color\",default:\"white\"}\n  uniform vec4 color;\n\n  uniform sampler2D texture;\n  @HAS_TEXTURE{sampler:\"texture\"}\n  uniform bool _textureUsed;\n\n  uniform float _time;\n  void main(void)\n  {\n    if(_textureUsed){\n      gl_FragColor = color * texture2D(texture,vTexCoord);\n    }else{\n      gl_FragColor = color;\n   }\n  }\n  #endif\n}\n}\n"

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Matrix = __webpack_require__(15);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _UniformResolverRegistry = __webpack_require__(51);
	
	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_UniformResolverRegistry2.default.add("MODELVIEWPROJECTION", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.transform.calcPVM(args.camera));
	    };
	});
	_UniformResolverRegistry2.default.add("LOCAL", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.transform.localTransform);
	    };
	});
	_UniformResolverRegistry2.default.add("MODEL", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.transform.globalTransform);
	    };
	});
	_UniformResolverRegistry2.default.add("VIEW", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.camera.ViewMatrix);
	    };
	});
	_UniformResolverRegistry2.default.add("PROJECTION", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.camera.ProjectionMatrix);
	    };
	});
	_UniformResolverRegistry2.default.add("MODELINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.globalTransform));
	    };
	});
	_UniformResolverRegistry2.default.add("VIEWINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.camera.ViewMatrix));
	    };
	});
	_UniformResolverRegistry2.default.add("PROJECTIONINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.camera.InvProjectionMatrix);
	    };
	});
	_UniformResolverRegistry2.default.add("MODELVIEWINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.calcVM(args.camera)));
	    };
	});
	_UniformResolverRegistry2.default.add("MODELVIEWPROJECTIONINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.calcPVM(args.camera)));
	    };
	});
	_UniformResolverRegistry2.default.add("MODELINVERSETRANSPOSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.transpose(_Matrix2.default.inverse(args.transform.globalTransform)));
	    };
	});
	_UniformResolverRegistry2.default.add("MODELVIEWINVERSETRANSPOSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.transpose(_Matrix2.default.inverse(args.transform.calcVM(args.camera))));
	    };
	});
	exports.default = null;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(92);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Vector3 = __webpack_require__(13);
	
	var _Vector4 = _interopRequireDefault(_Vector3);
	
	var _UniformResolverRegistry = __webpack_require__(51);
	
	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_UniformResolverRegistry2.default.add("VIEWPORT", function (valInfo) {
	    return function (proxy, args) {
	        var vp = args.viewport;
	        proxy.uniformVector4(valInfo.name, new _Vector4.default(vp.Left, vp.Top, vp.Width, vp.Height));
	    };
	});
	_UniformResolverRegistry2.default.add("VIEWPORT_SIZE", function (valInfo) {
	    return function (proxy, args) {
	        var vp = args.viewport;
	        proxy.uniformVector2(valInfo.name, new _Vector2.default(vp.Width, vp.Height));
	    };
	});
	_UniformResolverRegistry2.default.add("TIME", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformFloat(valInfo.name, Date.now() % 1.0e7);
	    };
	});
	_UniformResolverRegistry2.default.add("HAS_TEXTURE", function (valInfo, material) {
	    var sampler = valInfo.attributes["sampler"];
	    if (!sampler) {
	        throw new Error("The variable having HAS_TEXTURE as semantics must have sampler attribute");
	    }
	    return function (proxy, args) {
	        var hasTexture = !!material.arguments[sampler] && !!material.arguments[sampler].get(args.buffers);
	        proxy.uniformBool(valInfo.name, hasTexture);
	    };
	});
	_UniformResolverRegistry2.default.add("CAMERA_POSITION", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformVector3(valInfo.name, args.camera.transform.globalPosition);
	    };
	});
	_UniformResolverRegistry2.default.add("CAMERA_DIRECTION", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformVector3(valInfo.name, args.camera.transform.forward);
	    };
	});
	exports.default = null;

/***/ },
/* 92 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector2;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UniformResolverRegistry = __webpack_require__(51);
	
	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var gl = WebGLRenderingContext;
	var _userValueRegisterers = {
	    array: {},
	    single: {}
	};
	_UniformResolverRegistry2.default.add("USER_VALUE", function (valInfo, material) {
	    var register = void 0;
	    if (valInfo.count) {
	        register = _userValueRegisterers.array[valInfo.type];
	        if (!register) {
	            throw new Error("No user_value registerer was registered for " + valInfo.type + "[]");
	        }
	    } else {
	        register = _userValueRegisterers.single[valInfo.type];
	        if (!register) {
	            throw new Error("No user_value registerer was registered for " + valInfo.type);
	        }
	    }
	    return register(valInfo, material);
	});
	function basicRegister(type, isArray, converter, defaultValue, _register) {
	    var registerTarget = void 0;
	    if (isArray) {
	        registerTarget = _userValueRegisterers.array;
	    } else {
	        registerTarget = _userValueRegisterers.single;
	    }
	    registerTarget[type] = function (valInfo, material) {
	        material.addArgument(valInfo.name, {
	            converter: converter,
	            default: valInfo.attributes["default"] ? valInfo.attributes["default"] : defaultValue
	        });
	        return {
	            register: function register(proxy, args) {
	                _register(proxy, valInfo.name, material.arguments[valInfo.name], args);
	            },
	            dispose: function dispose() {
	                material.deleteArgument(valInfo.name);
	            }
	        };
	    };
	}
	basicRegister(gl.FLOAT, false, "Number", 0, function (proxy, name, value) {
	    return proxy.uniformFloat(name, value);
	});
	basicRegister(gl.INT, false, "Number", 0, function (proxy, name, value) {
	    return proxy.uniformInt(name, value);
	});
	basicRegister(gl.BOOL, false, "Boolean", false, function (proxy, name, value) {
	    return proxy.uniformBool(name, value);
	});
	basicRegister(gl.INT_VEC2, false, "Vector2", [0, 0], function (proxy, name, value) {
	    return proxy.uniformVector2(name, value);
	});
	basicRegister(gl.INT_VEC3, false, "Vector3", [0, 0, 0], function (proxy, name, value) {
	    return proxy.uniformVector3(name, value);
	});
	basicRegister(gl.INT_VEC4, false, "Vector4", [0, 0, 0, 0], function (proxy, name, value) {
	    return proxy.uniformVector4(name, value);
	});
	basicRegister(gl.FLOAT_VEC2, false, "Vector2", [0, 0], function (proxy, name, value) {
	    return proxy.uniformVector2(name, value);
	});
	basicRegister(gl.FLOAT_MAT4, true, "Object", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], function (proxy, name, value) {
	    return proxy.uniformMatrixArray(name, value);
	});
	basicRegister(gl.SAMPLER_2D, false, "Texture", null, function (proxy, name, value, args) {
	    var texture = void 0;
	    if (value && (texture = value.get(args.buffers))) {
	        proxy.uniformTexture2D(name, texture);
	    } else {
	        proxy.uniformTexture2D(name, args.defaultTexture);
	    }
	});
	_userValueRegisterers.single[gl.FLOAT_VEC3] = function (valInfo, material) {
	    var isColor = valInfo.attributes["type"] === "color";
	    var attrDefault = valInfo.attributes["default"];
	    var defaultValue = attrDefault ? attrDefault : isColor ? [1, 1, 1] : [0, 0, 0];
	    material.addArgument(valInfo.name, {
	        converter: isColor ? "Color3" : "Vector3",
	        default: defaultValue
	    });
	    return {
	        register: isColor ? function (proxy, args) {
	            proxy.uniformColor3(valInfo.name, material.arguments[valInfo.name]);
	        } : function (proxy, args) {
	            proxy.uniformVector3(valInfo.name, material.arguments[valInfo.name]);
	        },
	        dispose: function dispose() {
	            material.deleteArgument(valInfo.name);
	        }
	    };
	};
	_userValueRegisterers.single[gl.FLOAT_VEC4] = function (valInfo, material) {
	    var isColor = valInfo.attributes["type"] === "color";
	    var attrDefault = valInfo.attributes["default"];
	    var defaultValue = attrDefault ? attrDefault : isColor ? [1, 1, 1, 1] : [0, 0, 0, 0];
	    material.addArgument(valInfo.name, {
	        converter: isColor ? "Color4" : "Vector4",
	        default: defaultValue
	    });
	    return {
	        register: isColor ? function (proxy, args) {
	            proxy.uniformColor4(valInfo.name, material.arguments[valInfo.name]);
	        } : function (proxy, args) {
	            proxy.uniformVector4(valInfo.name, material.arguments[valInfo.name]);
	        },
	        dispose: function dispose() {
	            material.deleteArgument(valInfo.name);
	        }
	    };
	};
	exports.default = null;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _DefaultMaterial = __webpack_require__(88);
	
	var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);
	
	var _DefaultPrimitives = __webpack_require__(83);
	
	var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);
	
	var _grimoirejs = __webpack_require__(8);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _AssetLoadingManagerComponent = __webpack_require__(7);
	
	var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);
	
	var _CameraComponent = __webpack_require__(11);
	
	var _CameraComponent2 = _interopRequireDefault(_CameraComponent);
	
	var _CanvasInitializerComponent = __webpack_require__(21);
	
	var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);
	
	var _FullscreenComponent = __webpack_require__(27);
	
	var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);
	
	var _GeometryComponent = __webpack_require__(28);
	
	var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);
	
	var _GeometryRegistoryComponent = __webpack_require__(30);
	
	var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);
	
	var _HTMLBinderComponent = __webpack_require__(31);
	
	var _HTMLBinderComponent2 = _interopRequireDefault(_HTMLBinderComponent);
	
	var _LoopManagerComponent = __webpack_require__(32);
	
	var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);
	
	var _MaterialComponent = __webpack_require__(33);
	
	var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);
	
	var _MaterialContainerComponent = __webpack_require__(34);
	
	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);
	
	var _MaterialImporterComponent = __webpack_require__(36);
	
	var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);
	
	var _MaterialManagerComponent = __webpack_require__(56);
	
	var _MaterialManagerComponent2 = _interopRequireDefault(_MaterialManagerComponent);
	
	var _MeshRendererComponent = __webpack_require__(57);
	
	var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);
	
	var _MouseCameraControlComponent = __webpack_require__(58);
	
	var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);
	
	var _RenderBufferComponent = __webpack_require__(59);
	
	var _RenderBufferComponent2 = _interopRequireDefault(_RenderBufferComponent);
	
	var _RendererComponent = __webpack_require__(62);
	
	var _RendererComponent2 = _interopRequireDefault(_RendererComponent);
	
	var _RendererManagerComponent = __webpack_require__(63);
	
	var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);
	
	var _RenderQuadComponent = __webpack_require__(65);
	
	var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);
	
	var _RenderSceneComponent = __webpack_require__(67);
	
	var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);
	
	var _SceneComponent = __webpack_require__(19);
	
	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);
	
	var _TextureBufferComponent = __webpack_require__(68);
	
	var _TextureBufferComponent2 = _interopRequireDefault(_TextureBufferComponent);
	
	var _TextureComponent = __webpack_require__(69);
	
	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);
	
	var _TransformComponent = __webpack_require__(17);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _CanvasSizeConverter = __webpack_require__(70);
	
	var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);
	
	var _ComponentConverter = __webpack_require__(71);
	
	var _ComponentConverter2 = _interopRequireDefault(_ComponentConverter);
	
	var _EnumConverter = __webpack_require__(73);
	
	var _EnumConverter2 = _interopRequireDefault(_EnumConverter);
	
	var _GeometryConverter = __webpack_require__(74);
	
	var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);
	
	var _MaterialConverter = __webpack_require__(75);
	
	var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);
	
	var _TextureConverter = __webpack_require__(79);
	
	var _TextureConverter2 = _interopRequireDefault(_TextureConverter);
	
	var _NumberArrayConverter = __webpack_require__(76);
	
	var _NumberArrayConverter2 = _interopRequireDefault(_NumberArrayConverter);
	
	var _NumberConverter = __webpack_require__(77);
	
	var _NumberConverter2 = _interopRequireDefault(_NumberConverter);
	
	var _ObjectConverter = __webpack_require__(78);
	
	var _ObjectConverter2 = _interopRequireDefault(_ObjectConverter);
	
	var _ViewportConverter = __webpack_require__(81);
	
	var _ViewportConverter2 = _interopRequireDefault(_ViewportConverter);
	
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
	                step(generator["throw"](value));
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
	//
	// DO NOT REMOVE THE LINE BELOW.
	//
	
	exports.default = function () {
	    _grimoirejs2.default.register(function () {
	        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	            var _$ns;
	
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _$ns = _grimoirejs2.default.ns("HTTP://GRIMOIRE.GL/NS/DEFAULT");
	
	                            _grimoirejs2.default.registerComponent(_$ns("AssetLoadingManager"), _AssetLoadingManagerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Camera"), _CameraComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("CanvasInitializer"), _CanvasInitializerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Fullscreen"), _FullscreenComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Geometry"), _GeometryComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("GeometryRegistory"), _GeometryRegistoryComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("HTMLBinder"), _HTMLBinderComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("LoopManager"), _LoopManagerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Material"), _MaterialComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MaterialContainer"), _MaterialContainerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MaterialImporter"), _MaterialImporterComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MaterialManager"), _MaterialManagerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MeshRenderer"), _MeshRendererComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MouseCameraControl"), _MouseCameraControlComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("RenderBuffer"), _RenderBufferComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Renderer"), _RendererComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("RendererManager"), _RendererManagerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("RenderQuad"), _RenderQuadComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("RenderScene"), _RenderSceneComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Scene"), _SceneComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("TextureBuffer"), _TextureBufferComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Texture"), _TextureComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Transform"), _TransformComponent2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("CanvasSize"), _CanvasSizeConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Component"), _ComponentConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Enum"), _EnumConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Geometry"), _GeometryConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Material"), _MaterialConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Texture"), _TextureConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("NumberArray"), _NumberArrayConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Number"), _NumberConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Object"), _ObjectConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Texture2D"), _TextureConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Viewport"), _ViewportConverter2.default);
	                            _grimoirejs2.default.registerNode("goml", ["CanvasInitializer", "LoopManager", "AssetLoadingManager", "GeometryRegistory", "MaterialManager", "RendererManager", "Fullscreen"]);
	                            _grimoirejs2.default.registerNode("renderer", ["Renderer"]);
	                            _grimoirejs2.default.registerNode("scene", ["Scene"]);
	                            _grimoirejs2.default.registerNode("camera", ["Camera"], { position: "0,0,10" }, "object");
	                            _grimoirejs2.default.registerNode("empty", []);
	                            _grimoirejs2.default.registerNode("object", ["Transform"]);
	                            _grimoirejs2.default.registerNode("geometry", ["Geometry"]);
	                            _grimoirejs2.default.registerNode("texture", ["Texture"]);
	                            _grimoirejs2.default.registerNode("mesh", ["MaterialContainer", "MeshRenderer"], {}, "object");
	                            _grimoirejs2.default.registerNode("material", ["Material"]);
	                            _grimoirejs2.default.registerNode("import-material", ["MaterialImporter"]);
	                            _grimoirejs2.default.registerNode("texture-buffer", ["TextureBuffer"]);
	                            _grimoirejs2.default.registerNode("render-buffer", ["RenderBuffer"]);
	                            _grimoirejs2.default.registerNode("render-scene", ["MaterialContainer", "RenderScene"], {
	                                material: null
	                            });
	                            _grimoirejs2.default.registerNode("render-quad", ["MaterialContainer", "RenderQuad"], {
	                                material: null
	                            });
	                            _DefaultPrimitives2.default.register();
	                            _DefaultMaterial2.default.register();
	
	                        case 52:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    });
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=grimoire-fundamental.js.map