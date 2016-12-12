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
	
	var _BasicCamera = __webpack_require__(7);
	
	var _BasicCamera2 = _interopRequireDefault(_BasicCamera);
	
	var _ViewCameraBase = __webpack_require__(8);
	
	var _ViewCameraBase2 = _interopRequireDefault(_ViewCameraBase);
	
	var _AssetLoadingManagerComponent = __webpack_require__(13);
	
	var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);
	
	var _CameraComponent = __webpack_require__(17);
	
	var _CameraComponent2 = _interopRequireDefault(_CameraComponent);
	
	var _CanvasInitializerComponent = __webpack_require__(23);
	
	var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);
	
	var _FullscreenComponent = __webpack_require__(29);
	
	var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);
	
	var _GeometryComponent = __webpack_require__(30);
	
	var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);
	
	var _GeometryRegistoryComponent = __webpack_require__(32);
	
	var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);
	
	var _HTMLBinderComponent = __webpack_require__(33);
	
	var _HTMLBinderComponent2 = _interopRequireDefault(_HTMLBinderComponent);
	
	var _LoopManagerComponent = __webpack_require__(34);
	
	var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);
	
	var _MaterialComponent = __webpack_require__(35);
	
	var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);
	
	var _MaterialContainerComponent = __webpack_require__(41);
	
	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);
	
	var _MaterialImporterComponent = __webpack_require__(43);
	
	var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);
	
	var _MaterialManagerComponent = __webpack_require__(63);
	
	var _MaterialManagerComponent2 = _interopRequireDefault(_MaterialManagerComponent);
	
	var _MeshRendererComponent = __webpack_require__(64);
	
	var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);
	
	var _MouseCameraControlComponent = __webpack_require__(65);
	
	var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);
	
	var _RenderBufferComponent = __webpack_require__(66);
	
	var _RenderBufferComponent2 = _interopRequireDefault(_RenderBufferComponent);
	
	var _RendererComponent = __webpack_require__(69);
	
	var _RendererComponent2 = _interopRequireDefault(_RendererComponent);
	
	var _RendererManagerComponent = __webpack_require__(70);
	
	var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);
	
	var _RenderQuadComponent = __webpack_require__(72);
	
	var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);
	
	var _RenderSceneComponent = __webpack_require__(74);
	
	var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);
	
	var _SceneComponent = __webpack_require__(21);
	
	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);
	
	var _TextureBufferComponent = __webpack_require__(75);
	
	var _TextureBufferComponent2 = _interopRequireDefault(_TextureBufferComponent);
	
	var _TextureComponent = __webpack_require__(76);
	
	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);
	
	var _TransformComponent = __webpack_require__(19);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _ChildrenComponentConstraint = __webpack_require__(77);
	
	var _ChildrenComponentConstraint2 = _interopRequireDefault(_ChildrenComponentConstraint);
	
	var _NoChildConstraint = __webpack_require__(78);
	
	var _NoChildConstraint2 = _interopRequireDefault(_NoChildConstraint);
	
	var _ParentConstraint = __webpack_require__(79);
	
	var _ParentConstraint2 = _interopRequireDefault(_ParentConstraint);
	
	var _RootConstraint = __webpack_require__(80);
	
	var _RootConstraint2 = _interopRequireDefault(_RootConstraint);
	
	var _Angle2DConverter = __webpack_require__(81);
	
	var _Angle2DConverter2 = _interopRequireDefault(_Angle2DConverter);
	
	var _BooleanConverter = __webpack_require__(83);
	
	var _BooleanConverter2 = _interopRequireDefault(_BooleanConverter);
	
	var _CanvasSizeConverter = __webpack_require__(84);
	
	var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);
	
	var _Color3Converter = __webpack_require__(85);
	
	var _Color3Converter2 = _interopRequireDefault(_Color3Converter);
	
	var _Color4Converter = __webpack_require__(87);
	
	var _Color4Converter2 = _interopRequireDefault(_Color4Converter);
	
	var _ComponentConverter = __webpack_require__(88);
	
	var _ComponentConverter2 = _interopRequireDefault(_ComponentConverter);
	
	var _EnumConverter = __webpack_require__(90);
	
	var _EnumConverter2 = _interopRequireDefault(_EnumConverter);
	
	var _GeometryConverter = __webpack_require__(91);
	
	var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);
	
	var _MaterialConverter = __webpack_require__(93);
	
	var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);
	
	var _NumberArrayConverter = __webpack_require__(94);
	
	var _NumberArrayConverter2 = _interopRequireDefault(_NumberArrayConverter);
	
	var _NumberConverter = __webpack_require__(95);
	
	var _NumberConverter2 = _interopRequireDefault(_NumberConverter);
	
	var _ObjectConverter = __webpack_require__(96);
	
	var _ObjectConverter2 = _interopRequireDefault(_ObjectConverter);
	
	var _Rotation3Converter = __webpack_require__(97);
	
	var _Rotation3Converter2 = _interopRequireDefault(_Rotation3Converter);
	
	var _TextureConverter = __webpack_require__(98);
	
	var _TextureConverter2 = _interopRequireDefault(_TextureConverter);
	
	var _Vector2Converter = __webpack_require__(100);
	
	var _Vector2Converter2 = _interopRequireDefault(_Vector2Converter);
	
	var _Vector3Converter = __webpack_require__(101);
	
	var _Vector3Converter2 = _interopRequireDefault(_Vector3Converter);
	
	var _Vector4Converter = __webpack_require__(102);
	
	var _Vector4Converter2 = _interopRequireDefault(_Vector4Converter);
	
	var _ViewportConverter = __webpack_require__(103);
	
	var _ViewportConverter2 = _interopRequireDefault(_ViewportConverter);
	
	var _DefaultPrimitives = __webpack_require__(105);
	
	var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);
	
	var _Geometry = __webpack_require__(92);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	var _GeometryBuilder = __webpack_require__(108);
	
	var _GeometryBuilder2 = _interopRequireDefault(_GeometryBuilder);
	
	var _GeometryFactory = __webpack_require__(31);
	
	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);
	
	var _GeometryUtility = __webpack_require__(107);
	
	var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);
	
	var _DefaultMacro = __webpack_require__(46);
	
	var _DefaultMacro2 = _interopRequireDefault(_DefaultMacro);
	
	var _DefaultMaterial = __webpack_require__(110);
	
	var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);
	
	var _EnvUniformValueResolver = __webpack_require__(51);
	
	var _EnvUniformValueResolver2 = _interopRequireDefault(_EnvUniformValueResolver);
	
	var _ImportResolver = __webpack_require__(55);
	
	var _ImportResolver2 = _interopRequireDefault(_ImportResolver);
	
	var _MacroRegistory = __webpack_require__(45);
	
	var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);
	
	var _Material = __webpack_require__(61);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	var _MaterialFactory = __webpack_require__(44);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _Pass = __webpack_require__(40);
	
	var _Pass2 = _interopRequireDefault(_Pass);
	
	var _PassFactory = __webpack_require__(47);
	
	var _PassFactory2 = _interopRequireDefault(_PassFactory);
	
	var _SORTPass = __webpack_require__(36);
	
	var _SORTPass2 = _interopRequireDefault(_SORTPass);
	
	var _TextureReference = __webpack_require__(99);
	
	var _TextureReference2 = _interopRequireDefault(_TextureReference);
	
	var _AnnotationRemover = __webpack_require__(60);
	
	var _AnnotationRemover2 = _interopRequireDefault(_AnnotationRemover);
	
	var _CommentRemover = __webpack_require__(53);
	
	var _CommentRemover2 = _interopRequireDefault(_CommentRemover);
	
	var _GLSLUtil = __webpack_require__(50);
	
	var _GLSLUtil2 = _interopRequireDefault(_GLSLUtil);
	
	var _ImportTransformer = __webpack_require__(54);
	
	var _ImportTransformer2 = _interopRequireDefault(_ImportTransformer);
	
	var _SORTPassParser = __webpack_require__(48);
	
	var _SORTPassParser2 = _interopRequireDefault(_SORTPassParser);
	
	var _UniformRegisterer = __webpack_require__(49);
	
	var _UniformRegisterer2 = _interopRequireDefault(_UniformRegisterer);
	
	var _VariableAnnotationRemover = __webpack_require__(58);
	
	var _VariableAnnotationRemover2 = _interopRequireDefault(_VariableAnnotationRemover);
	
	var _VariableParser = __webpack_require__(56);
	
	var _VariableParser2 = _interopRequireDefault(_VariableParser);
	
	var _Buffer = __webpack_require__(109);
	
	var _Buffer2 = _interopRequireDefault(_Buffer);
	
	var _FrameBuffer = __webpack_require__(73);
	
	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);
	
	var _GLExtRequestor = __webpack_require__(28);
	
	var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);
	
	var _Program = __webpack_require__(38);
	
	var _Program2 = _interopRequireDefault(_Program);
	
	var _RenderBuffer = __webpack_require__(67);
	
	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);
	
	var _ResourceBase = __webpack_require__(26);
	
	var _ResourceBase2 = _interopRequireDefault(_ResourceBase);
	
	var _Shader = __webpack_require__(37);
	
	var _Shader2 = _interopRequireDefault(_Shader);
	
	var _Texture2D = __webpack_require__(25);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _UniformProxy = __webpack_require__(39);
	
	var _UniformProxy2 = _interopRequireDefault(_UniformProxy);
	
	var _DrawPriorty = __webpack_require__(42);
	
	var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);
	
	var _RenderQueue = __webpack_require__(18);
	
	var _RenderQueue2 = _interopRequireDefault(_RenderQueue);
	
	var _RenderQueueRegistry = __webpack_require__(22);
	
	var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);
	
	var _RotationParser = __webpack_require__(82);
	
	var _RotationParser2 = _interopRequireDefault(_RotationParser);
	
	var _TextureSizeCalculator = __webpack_require__(68);
	
	var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);
	
	var _main = __webpack_require__(114);
	
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
	    "Camera": {
	        "BasicCamera": _BasicCamera2.default,
	        "ViewCameraBase": _ViewCameraBase2.default
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
	    "Constraint": {
	        "ChildrenComponentConstraint": _ChildrenComponentConstraint2.default,
	        "NoChildConstraint": _NoChildConstraint2.default,
	        "ParentConstraint": _ParentConstraint2.default,
	        "RootConstraint": _RootConstraint2.default
	    },
	    "Converters": {
	        "Angle2DConverter": _Angle2DConverter2.default,
	        "BooleanConverter": _BooleanConverter2.default,
	        "CanvasSizeConverter": _CanvasSizeConverter2.default,
	        "Color3Converter": _Color3Converter2.default,
	        "Color4Converter": _Color4Converter2.default,
	        "ComponentConverter": _ComponentConverter2.default,
	        "EnumConverter": _EnumConverter2.default,
	        "GeometryConverter": _GeometryConverter2.default,
	        "MaterialConverter": _MaterialConverter2.default,
	        "NumberArrayConverter": _NumberArrayConverter2.default,
	        "NumberConverter": _NumberConverter2.default,
	        "ObjectConverter": _ObjectConverter2.default,
	        "Rotation3Converter": _Rotation3Converter2.default,
	        "TextureConverter": _TextureConverter2.default,
	        "Vector2Converter": _Vector2Converter2.default,
	        "Vector3Converter": _Vector3Converter2.default,
	        "Vector4Converter": _Vector4Converter2.default,
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
	        "EnvUniformValueResolver": _EnvUniformValueResolver2.default,
	        "ImportResolver": _ImportResolver2.default,
	        "MacroRegistory": _MacroRegistory2.default,
	        "Material": _Material2.default,
	        "MaterialFactory": _MaterialFactory2.default,
	        "Pass": _Pass2.default,
	        "PassFactory": _PassFactory2.default,
	        "SORTPass": _SORTPass2.default,
	        "TextureReference": _TextureReference2.default,
	        "Transformers": {
	            "AnnotationRemover": _AnnotationRemover2.default,
	            "CommentRemover": _CommentRemover2.default,
	            "GLSLUtil": _GLSLUtil2.default,
	            "ImportTransformer": _ImportTransformer2.default,
	            "SORTPassParser": _SORTPassParser2.default,
	            "UniformRegisterer": _UniformRegisterer2.default,
	            "VariableAnnotationRemover": _VariableAnnotationRemover2.default,
	            "VariableParser": _VariableParser2.default
	        }
	    },
	    "Resource": {
	        "Buffer": _Buffer2.default,
	        "FrameBuffer": _FrameBuffer2.default,
	        "GLExtRequestor": _GLExtRequestor2.default,
	        "Program": _Program2.default,
	        "RenderBuffer": _RenderBuffer2.default,
	        "ResourceBase": _ResourceBase2.default,
	        "Shader": _Shader2.default,
	        "Texture2D": _Texture2D2.default,
	        "UniformProxy": _UniformProxy2.default
	    },
	    "SceneRenderer": {
	        "DrawPriorty": _DrawPriorty2.default,
	        "RenderQueue": _RenderQueue2.default,
	        "RenderQueueRegistry": _RenderQueueRegistry2.default
	    },
	    "Util": {
	        "RotationParser": _RotationParser2.default,
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
	
	var _ViewCameraBase2 = __webpack_require__(8);
	
	var _ViewCameraBase3 = _interopRequireDefault(_ViewCameraBase2);
	
	var _GLM = __webpack_require__(12);
	
	var _GLM2 = _interopRequireDefault(_GLM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mat4 = _GLM2.default.mat4,
	    vec3 = _GLM2.default.vec3,
	    vec4 = _GLM2.default.vec4;
	/**
	 * Provides perspective camera as implementation of ICamera.
	 */
	
	var BasicCamera = function (_ViewCameraBase) {
	    _inherits(BasicCamera, _ViewCameraBase);
	
	    function BasicCamera() {
	        _classCallCheck(this, BasicCamera);
	
	        var _this = _possibleConstructorReturn(this, (BasicCamera.__proto__ || Object.getPrototypeOf(BasicCamera)).apply(this, arguments));
	
	        _this._orthographic = false;
	        return _this;
	    }
	
	    _createClass(BasicCamera, [{
	        key: "getViewMatrix",
	        value: function getViewMatrix() {
	            return this.__viewMatrix;
	        }
	    }, {
	        key: "getProjectionMatrix",
	        value: function getProjectionMatrix() {
	            return this.__projectionMatrix;
	        }
	    }, {
	        key: "getInvProjectionMatrix",
	        value: function getInvProjectionMatrix() {
	            return this.__invProjectionMatrix;
	        }
	    }, {
	        key: "getProjectionViewMatrix",
	        value: function getProjectionViewMatrix() {
	            return this.__projectionViewMatrix;
	        }
	    }, {
	        key: "getFar",
	        value: function getFar() {
	            return this._far;
	        }
	    }, {
	        key: "setFar",
	        value: function setFar(far) {
	            this._far = far;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "getNear",
	        value: function getNear() {
	            return this._near;
	        }
	    }, {
	        key: "setNear",
	        value: function setNear(near) {
	            this._near = near;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "getAspect",
	        value: function getAspect() {
	            return this._aspect;
	        }
	    }, {
	        key: "setAspect",
	        value: function setAspect(aspect) {
	            this._aspect = aspect;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "getFovy",
	        value: function getFovy() {
	            return this._fovy;
	        }
	    }, {
	        key: "setFovy",
	        value: function setFovy(fov) {
	            this._fovy = fov;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "getOrthoSize",
	        value: function getOrthoSize() {
	            return this._orthoSize;
	        }
	    }, {
	        key: "setOrthoSize",
	        value: function setOrthoSize(size) {
	            this._orthoSize = size;
	        }
	    }, {
	        key: "setOrthographicMode",
	        value: function setOrthographicMode(isOrtho) {
	            this._orthographic = isOrtho;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "getOrthographicMode",
	        value: function getOrthographicMode() {
	            return this._orthographic;
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
	    }]);
	
	    return BasicCamera;
	}(_ViewCameraBase3.default);
	
	exports.default = BasicCamera;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(9);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Matrix = __webpack_require__(10);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _Vector3 = __webpack_require__(11);
	
	var _Vector4 = _interopRequireDefault(_Vector3);
	
	var _GLM = __webpack_require__(12);
	
	var _GLM2 = _interopRequireDefault(_GLM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var mat4 = _GLM2.default.mat4,
	    vec3 = _GLM2.default.vec3,
	    vec4 = _GLM2.default.vec4;
	
	var ViewCameraBase = function () {
	    function ViewCameraBase() {
	        _classCallCheck(this, ViewCameraBase);
	
	        this._eyeCache = _Vector2.default.Zero;
	        this._lookAtCache = _Vector2.default.Zero;
	        this._upCache = _Vector2.default.Zero;
	        this.__viewMatrix = new _Matrix2.default();
	        this.__projectionMatrix = new _Matrix2.default();
	        this.__invProjectionMatrix = new _Matrix2.default();
	        this.__projectionViewMatrix = new _Matrix2.default();
	    }
	
	    _createClass(ViewCameraBase, [{
	        key: "updateTransform",
	        value: function updateTransform(transform) {
	            vec3.transformMat4(this._eyeCache.rawElements, _Vector2.default.Zero.rawElements, transform.globalTransform.rawElements);
	            vec4.transformMat4(this._lookAtCache.rawElements, ViewCameraBase._frontOrigin.rawElements, transform.globalTransform.rawElements);
	            vec3.add(this._lookAtCache.rawElements, this._lookAtCache.rawElements, this._eyeCache.rawElements);
	            vec4.transformMat4(this._upCache.rawElements, ViewCameraBase._upOrigin.rawElements, transform.globalTransform.rawElements);
	            mat4.lookAt(this.__viewMatrix.rawElements, this._eyeCache.rawElements, this._lookAtCache.rawElements, this._upCache.rawElements);
	            mat4.mul(this.__projectionViewMatrix.rawElements, this.__projectionMatrix.rawElements, this.__viewMatrix.rawElements);
	        }
	    }]);
	
	    return ViewCameraBase;
	}();
	
	ViewCameraBase._frontOrigin = new _Vector4.default(0, 0, -1, 0);
	ViewCameraBase._upOrigin = new _Vector4.default(0, 1, 0, 0);
	exports.default = ViewCameraBase;

/***/ },
/* 9 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ },
/* 10 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ },
/* 11 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector4;

/***/ },
/* 12 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.GLM;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _grimoirejs = __webpack_require__(14);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _AssetLoader = __webpack_require__(1);
	
	var _AssetLoader2 = _interopRequireDefault(_AssetLoader);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _defaultLoader = __webpack_require__(16);
	
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
	            if (this.attributes.get("autoStart").Value) {
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
	            if (!this.getValue("enableLoader")) {
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
	        defaultValue: 0,
	        converter: "Number"
	    },
	    autoStart: {
	        defaultValue: true,
	        converter: "Boolean"
	    },
	    anableLoader: {
	        defaultValue: false,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS;

/***/ },
/* 15 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.Component;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div style=\"width:100%;height:100%;position: relative;\">\n    <div style=\"width: 55px;height: 55px;border-radius: 100%;border: 5px solid #381794;border-right-color: #FC659D;animation: rotate 1s linear infinite;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;\"></div>\n</div>\n<style type=\"text/css\">\n    @keyframes rotate {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RenderQueue = __webpack_require__(18);
	
	var _RenderQueue2 = _interopRequireDefault(_RenderQueue);
	
	var _TransformComponent = __webpack_require__(19);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _BasicCamera = __webpack_require__(7);
	
	var _BasicCamera2 = _interopRequireDefault(_BasicCamera);
	
	var _SceneComponent = __webpack_require__(21);
	
	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CameraComponent = function (_Component) {
	    _inherits(CameraComponent, _Component);
	
	    function CameraComponent() {
	        _classCallCheck(this, CameraComponent);
	
	        var _this = _possibleConstructorReturn(this, (CameraComponent.__proto__ || Object.getPrototypeOf(CameraComponent)).apply(this, arguments));
	
	        _this._renderQueue = new _RenderQueue2.default();
	        return _this;
	    }
	    /**
	    * Find scene tag recursively.
	    * @param  {GomlNode}       node [the node to searching currently]
	    * @return {SceneComponent}      [the scene component found]
	    */
	
	
	    _createClass(CameraComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var c = this.camera = new _BasicCamera2.default();
	            this.transform = this.node.getComponent(_TransformComponent2.default);
	            this.$transformUpdated(this.transform);
	            this.getAttribute("far").addObserver(function (v) {
	                c.setFar(v.Value);
	            }, true);
	            this.getAttribute("near").addObserver(function (v) {
	                c.setNear(v.Value);
	            }, true);
	            this.getAttribute("fovy").addObserver(function (v) {
	                c.setFovy(v.Value);
	            }, true);
	            this.getAttribute("aspect").addObserver(function (v) {
	                c.setAspect(v.Value);
	            }, true);
	            this.getAttribute("orthoSize").addObserver(function (v) {
	                c.setOrthoSize(v.Value);
	            }, true);
	            this.getAttribute("orthogonal").addObserver(function (v) {
	                c.setOrthographicMode(v.Value);
	            }, true);
	            this.getAttribute("autoAspect").boundTo("_autoAspect");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.containedScene = CameraComponent._findContainedScene(this.node);
	            this.containedScene.queueRegistory.registerQueue(this._renderQueue);
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
	                this.node.broadcastMessage("render", args);
	            }
	        }
	    }, {
	        key: "$transformUpdated",
	        value: function $transformUpdated(t) {
	            if (this.camera) {
	                this.camera.updateTransform(t);
	            }
	        }
	    }, {
	        key: "_justifyAspect",
	        value: function _justifyAspect(args) {
	            if (this._autoAspect) {
	                var asp = args.viewport.Width / args.viewport.Height;
	                if (this._aspectCache !== asp) {
	                    this.setValue("aspect", asp);
	                    this._aspectCache = asp;
	                }
	            }
	        }
	    }], [{
	        key: "_findContainedScene",
	        value: function _findContainedScene(node) {
	            if (node.parent) {
	                var scene = node.parent.getComponent("Scene");
	                if (scene && scene instanceof _SceneComponent2.default) {
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
	
	CameraComponent.attributes = {
	    fovy: {
	        defaultValue: "45d",
	        converter: "Angle2D"
	    },
	    near: {
	        defaultValue: 0.01,
	        converter: "Number"
	    },
	    far: {
	        defaultValue: 100,
	        converter: "Number"
	    },
	    aspect: {
	        defaultValue: 1.6,
	        converter: "Number"
	    },
	    autoAspect: {
	        defaultValue: true,
	        converter: "Boolean"
	    },
	    orthoSize: {
	        defaultValue: 100,
	        converter: "Number"
	    },
	    orthogonal: {
	        defaultValue: false,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Matrix = __webpack_require__(10);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _Vector = __webpack_require__(9);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Vector3 = __webpack_require__(11);
	
	var _Vector4 = _interopRequireDefault(_Vector3);
	
	var _Quaternion = __webpack_require__(20);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _GLM = __webpack_require__(12);
	
	var _GLM2 = _interopRequireDefault(_GLM);
	
	var _Component2 = __webpack_require__(15);
	
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
	            mat4.mul(this._cachePVM.rawElements, camera.getProjectionViewMatrix().rawElements, this.globalTransform.rawElements);
	            return this._cachePVM;
	        }
	    }, {
	        key: "calcVM",
	        value: function calcVM(camera) {
	            mat4.mul(this._cacheVM.rawElements, camera.getViewMatrix().rawElements, this.globalTransform.rawElements);
	            return this._cacheVM;
	        }
	    }, {
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;
	
	            // register observers
	            this.getAttribute("position").addObserver(function (v) {
	                _this2._localPosition = v.Value;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform();
	            });
	            this.getAttribute("rotation").addObserver(function (v) {
	                _this2._localRotation = v.Value;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform();
	            });
	            this.getAttribute("scale").addObserver(function (v) {
	                _this2._localScale = v.Value;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform();
	            });
	            this.getAttribute("rawMatrix").addObserver(function (v) {
	                var mat = v.Value;
	                _this2._matrixTransformMode = true;
	                // TODO should be addded?
	                // mat4.getTranslation(this._localPosition.rawElements, mat.rawElements);
	                // mat4.getScaling(this._localScale.rawElements, mat.rawElements);
	                // mat4.getRotation(this._localRotation.rawElements, mat.rawElements);
	                _this2.localTransform = mat;
	                _this2.updateGlobalTransform();
	            });
	            // assign attribute values to field
	            this._localPosition = this.getValue("position");
	            this._localRotation = this.getValue("rotation");
	            this._localScale = this.getValue("scale");
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
	        value: function updateTransform() {
	            if (!this._matrixTransformMode) {
	                mat4.fromRotationTranslationScale(this.localTransform.rawElements, this._localRotation.rawElements, this._localPosition.rawElements, this._localScale.rawElements);
	            }
	            this.updateGlobalTransform();
	        }
	        /**
	         * Update global transoform.
	         */
	
	    }, {
	        key: "updateGlobalTransform",
	        value: function updateGlobalTransform() {
	            if (!this._parentTransform) {
	                mat4.copy(this.globalTransform.rawElements, this.localTransform.rawElements);
	            } else {
	                mat4.mul(this.globalTransform.rawElements, this._parentTransform.globalTransform.rawElements, this.localTransform.rawElements);
	            }
	            this._updateDirections();
	            this._updateGlobalProperty();
	            this.node.sendMessage("transformUpdated", this);
	            this._children.forEach(function (v) {
	                return v.updateGlobalTransform();
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
	            this.setValue("position", val);
	        }
	    }, {
	        key: "localRotation",
	        get: function get() {
	            return this._localRotation;
	        },
	        set: function set(val) {
	            this._localRotation = val;
	            this.setValue("rotation", val);
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
	            this.setValue("scale", val);
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
	        defaultValue: _Vector2.default.Zero
	    },
	    "rotation": {
	        converter: "Rotation3",
	        defaultValue: _Quaternion2.default.Identity
	    },
	    "scale": {
	        converter: "Vector3",
	        defaultValue: _Vector2.default.One
	    },
	    "rawMatrix": {
	        converter: "Object",
	        defaultValue: null
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
/* 20 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Quaternion;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RenderQueueRegistry = __webpack_require__(22);
	
	var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);
	
	var _Component2 = __webpack_require__(15);
	
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GrimoireInterface = __webpack_require__(24);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _Texture2D = __webpack_require__(25);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _GLExtRequestor = __webpack_require__(28);
	
	var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);
	
	var _Component2 = __webpack_require__(15);
	
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
	            } else {}
	            // apply sizes on changed
	            this.attributes.get("width").addObserver(function (v) {
	                _this2._resize();
	            });
	            this.attributes.get("height").addObserver(function (v) {
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
	            var widthRaw = this.getValue("width");
	            var heightRaw = this.getValue("height");
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
	            if (this.getValue("containerId")) {
	                this._canvasContainer.id = this.getValue("containerId");
	            }
	            if (this.getValue("containerClass")) {
	                this._canvasContainer.className = this.getValue("containerClass");
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
	    }]);
	
	    return CanvasInitializerComponent;
	}(_Component3.default);
	
	CanvasInitializerComponent.attributes = {
	    width: {
	        defaultValue: "fit",
	        converter: "CanvasSize"
	    },
	    height: {
	        defaultValue: 480,
	        converter: "CanvasSize"
	    },
	    containerId: {
	        defaultValue: undefined,
	        converter: "String"
	    },
	    containerClass: {
	        defaultValue: "gr-container",
	        converter: "String"
	    }
	};
	exports.default = CanvasInitializerComponent;

/***/ },
/* 24 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.GrimoireInterface;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceBase2 = __webpack_require__(26);
	
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
	            var size = Math.pow(2, Math.log(Math.min(w, h)) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IDObject2 = __webpack_require__(27);
	
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
/* 27 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Base.IDObject;

/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(15);
	
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
	
	            this.getAttribute("fullscreen").addObserver(function (attr) {
	                if (_this2._fullscreen === attr.Value) {
	                    return;
	                }
	                _this2._fullscreen = attr.Value;
	                _this2._switchFullscreen();
	            });
	        }
	    }, {
	        key: "_switchFullscreen",
	        value: function _switchFullscreen() {
	            if (this._fullscreen) {
	                this.requestFullscreen(this.companion.get("canvasContainer"));
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
	        defaultValue: false
	    }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GeometryFactory = __webpack_require__(31);
	
	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);
	
	var _Component2 = __webpack_require__(15);
	
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
	            var type = this.getValue("type");
	            if (type) {
	                var gf = this.companion.get("GeometryFactory");
	                var attrs = _GeometryFactory2.default.factoryArgumentDeclarations[type];
	                var geometryArgument = {};
	                for (var key in attrs) {
	                    this.__addAtribute(key, attrs[key]);
	                    geometryArgument[key] = this.getValue(key);
	                }
	                this.geometry = gf.instanciate(type, geometryArgument);
	                var gr = this.companion.get("GeometryRegistory");
	                var name = this.getValue("name");
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
	        defaultValue: undefined
	    },
	    name: {
	        converter: "String",
	        defaultValue: undefined
	    }
	};

/***/ },
/* 31 */
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
	                args[attr] = attrDecl.defaultValue;
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GeometryFactory = __webpack_require__(31);
	
	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _grimoirejs = __webpack_require__(14);
	
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
	                for (var _iterator = this.getValue("defaultGeometry")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	        defaultValue: ["quad", "cube", "sphere"]
	    }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TransformComponent = __webpack_require__(19);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Vector = __webpack_require__(11);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Matrix = __webpack_require__(10);
	
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
	        }
	    }, {
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            var _this2 = this;
	
	            this.getAttribute("targetRenderer").addObserver(function (v) {
	                if (_this2._rendererQuery !== v.Value) {
	                    _this2._onRendererChanged();
	                }
	            }, true);
	            this.getAttribute("htmlQuery").addObserver(function (v) {
	                _this2._onQueryChanged(v.Value);
	            }, true);
	        }
	    }, {
	        key: "$render",
	        value: function $render(args) {
	            if (this._isFirstCall) {
	                this._onRendererChanged();
	                this._isFirstCall = false;
	            }
	            if (this._queriedElement && args.caller.node === this._targetNode) {
	                var vp = args.viewport;
	                var rawPos = _Matrix2.default.transform(this._currentTransform.calcPVM(args.camera.camera), new _Vector2.default(0, 0, 0, 1));
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
	            this.tree(this.getValue("targetRenderer")).forEach(function (n) {
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
	        defaultValue: undefined,
	        converter: "String"
	    },
	    targetRenderer: {
	        defaultValue: "render-scene",
	        converter: "String"
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
	
	var _Component2 = __webpack_require__(15);
	
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
	
	            this.attributes.get("loopEnabled").addObserver(function (attr) {
	                _this2._begin();
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
	        defaultValue: false,
	        converter: "Boolean"
	    }
	};
	exports.default = LoopManagerComponent;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SORTPass = __webpack_require__(36);
	
	var _SORTPass2 = _interopRequireDefault(_SORTPass);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _ResourceBase = __webpack_require__(26);
	
	var _ResourceBase2 = _interopRequireDefault(_ResourceBase);
	
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
	            var typeName = this.getValue("type");
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
	
	                var promises;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return this.materialPromise;
	
	                            case 2:
	                                this.material = _context.sent;
	                                promises = [];
	
	                                this.material.pass.forEach(function (p) {
	                                    if (p instanceof _SORTPass2.default) {
	                                        var _ret = function () {
	                                            var cp = p;
	
	                                            var _loop = function _loop(key) {
	                                                _this2.__addAtribute(key, cp.sort.gomlAttributes[key]);
	                                                _this2.attributes.get(key).addObserver(function (v) {
	                                                    _this2.materialArgs[key] = v.Value;
	                                                });
	                                                var value = _this2.materialArgs[key] = _this2.getValue(key);
	                                                if (value instanceof _ResourceBase2.default) {
	                                                    promises.push(value.validPromise);
	                                                }
	                                            };
	
	                                            for (var key in cp.sort.gomlAttributes) {
	                                                _loop(key);
	                                            }
	                                            var _iteratorNormalCompletion = true;
	                                            var _didIteratorError = false;
	                                            var _iteratorError = undefined;
	
	                                            try {
	                                                var _loop2 = function _loop2() {
	                                                    var macro = _step.value;
	
	                                                    switch (macro.type) {
	                                                        case "int":
	                                                            _this2.__addAtribute(macro.attributeName, {
	                                                                converter: "Number",
	                                                                defaultValue: macro.default
	                                                            });
	                                                            _this2.getAttribute(macro.attributeName).addObserver(function (v) {
	                                                                cp.setMacro(macro.macroName, "" + Math.floor(v.Value));
	                                                            }, true);
	                                                            return {
	                                                                v: {
	                                                                    v: void 0
	                                                                }
	                                                            };
	                                                        case "bool":
	                                                            _this2.__addAtribute(macro.attributeName, {
	                                                                converter: "Boolean",
	                                                                defaultValue: macro.default
	                                                            });
	                                                            _this2.getAttribute(macro.attributeName).addObserver(function (v) {
	                                                                cp.setMacro(macro.macroName, v.Value);
	                                                            }, true);
	                                                            return {
	                                                                v: {
	                                                                    v: void 0
	                                                                }
	                                                            };
	                                                        default:
	                                                            throw new Error("Unexpected macro type " + macro.type);
	                                                    }
	                                                };
	
	                                                for (var _iterator = cp.sort.macros[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                                    var _ret3 = _loop2();
	
	                                                    if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
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
	                                        }();
	
	                                        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	                                    }
	                                });
	                                _context.next = 7;
	                                return Promise.all(promises);
	
	                            case 7:
	                                this.ready = true;
	
	                            case 8:
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
	        defaultValue: undefined
	    }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shader = __webpack_require__(37);
	
	var _Shader2 = _interopRequireDefault(_Shader);
	
	var _Program = __webpack_require__(38);
	
	var _Program2 = _interopRequireDefault(_Program);
	
	var _Pass2 = __webpack_require__(40);
	
	var _Pass3 = _interopRequireDefault(_Pass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SORTPass = function (_Pass) {
	    _inherits(SORTPass, _Pass);
	
	    function SORTPass(factory, sort) {
	        _classCallCheck(this, SORTPass);
	
	        var _this = _possibleConstructorReturn(this, (SORTPass.__proto__ || Object.getPrototypeOf(SORTPass)).call(this));
	
	        _this.factory = factory;
	        _this.sort = sort;
	        _this._macroValues = {};
	        _this.attributes = Object.keys(sort.attributes);
	        _this.gl = factory.gl;
	        _this.fs = new _Shader2.default(_this.gl, WebGLRenderingContext.FRAGMENT_SHADER);
	        _this.vs = new _Shader2.default(_this.gl, WebGLRenderingContext.VERTEX_SHADER);
	        _this.program = new _Program2.default(_this.gl);
	        for (var i = 0; i < sort.macros.length; i++) {
	            var macroInfo = sort.macros[i];
	            if (macroInfo.type === "boolean") {
	                if (macroInfo.default) {
	                    _this._macroValues[macroInfo.macroName] = "";
	                }
	            } else {
	                _this._macroValues[macroInfo.macroName] = macroInfo.default;
	            }
	        }
	        factory.macro.addObserver(function () {
	            _this._updateProgram();
	        });
	        _this._updateProgram();
	        return _this;
	    }
	
	    _createClass(SORTPass, [{
	        key: "setMacro",
	        value: function setMacro(key, value) {
	            if (this._macroValues[key] === value) {
	                return; // Nothing to do if specified value is unchanged
	            }
	            if (typeof value === "boolean") {
	                this._macroValues[key] = value ? "" : null;
	            } else {
	                this._macroValues[key] = value;
	            }
	            this._updateProgram();
	        }
	    }, {
	        key: "getMacro",
	        value: function getMacro(key) {
	            return this._macroValues[key];
	        }
	    }, {
	        key: "__beforeDraw",
	        value: function __beforeDraw(args) {
	            for (var attributeKey in this.sort.gomlAttributes) {
	                this.sort.gomlAttributes[attributeKey].register(this.program.uniforms, args);
	            }
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this.sort.systemRegisterers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var registerer = _step.value;
	
	                    registerer(this.program.uniforms, args);
	                }
	                // apply gl states
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
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this.sort.configurator[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var configurator = _step2.value;
	
	                    configurator(this.gl);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
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
	            return "#define " + shaderType + "\n" + this.factory.shaderHeader + "\n" + this.factory.macro.macroString + "\n" + this._getMaterialMacro() + "\n/*BEGINNING OF USER CODE*/\n" + this.sort.shaderSource;
	        }
	        /**
	         * Obtain macro code of material
	         * @return {string} [description]
	         */
	
	    }, {
	        key: "_getMaterialMacro",
	        value: function _getMaterialMacro() {
	            var result = "";
	            for (var key in this._macroValues) {
	                if (this._macroValues[key] === null) {
	                    continue;
	                }
	                result += "#define " + key + " " + this._macroValues[key] + "\n";
	            }
	            return result;
	        }
	    }]);
	
	    return SORTPass;
	}(_Pass3.default);
	
	exports.default = SORTPass;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceBase2 = __webpack_require__(26);
	
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _UniformProxy = __webpack_require__(39);
	
	var _UniformProxy2 = _interopRequireDefault(_UniformProxy);
	
	var _ResourceBase2 = __webpack_require__(26);
	
	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	    _createClass(Program, [{
	        key: "update",
	        value: function update(shaders) {
	            var _this2 = this;
	
	            if (this.valid) {
	                // detach all attached shaders previously
	                var preciousShaders = this.gl.getAttachedShaders(this.program);
	                preciousShaders.forEach(function (s) {
	                    return _this2.gl.detachShader(_this2.program, s);
	                });
	            }
	            shaders.forEach(function (shader) {
	                _this2.gl.attachShader(_this2.program, shader.shader);
	            });
	            this.gl.linkProgram(this.program);
	            if (!this.gl.getProgramParameter(this.program, WebGLRenderingContext.LINK_STATUS)) {
	                var errorLog = this.gl.getProgramInfoLog(this.program);
	                throw new Error("LINK FAILED\n" + errorLog);
	            }
	            this.valid = true;
	        }
	    }, {
	        key: "use",
	        value: function use() {
	            this.gl.useProgram(this.program);
	            this.uniforms.onUse();
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Program.prototype.__proto__ || Object.getPrototypeOf(Program.prototype), "destroy", this).call(this);
	            this.gl.deleteProgram(this.program);
	        }
	    }, {
	        key: "findAttributeLocation",
	        value: function findAttributeLocation(variableName) {
	            if (typeof this._attributeLocations[variableName] === "undefined") {
	                this._attributeLocations[variableName] = this.gl.getAttribLocation(this.program, variableName);
	                this._safeEnableVertexAttribArray(this._attributeLocations[variableName]);
	                return this._attributeLocations[variableName];
	            } else {
	                return this._attributeLocations[variableName];
	            }
	        }
	    }, {
	        key: "findUniformLocation",
	        value: function findUniformLocation(variableName) {
	            if (typeof this._uniformLocations[variableName] === "undefined") {
	                return this._uniformLocations[variableName] = this.gl.getUniformLocation(this.program, variableName);
	            } else {
	                return this._uniformLocations[variableName];
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
	    }]);
	
	    return Program;
	}(_ResourceBase3.default);
	
	exports.default = Program;

/***/ },
/* 39 */
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
	        key: "uniformVector2Array",
	        value: function uniformVector2Array(variableName, val) {
	            var _this8 = this;
	
	            this._pass(variableName, function (l) {
	                return _this8._gl.uniform2fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformVector3",
	        value: function uniformVector3(variableName, val) {
	            var _this9 = this;
	
	            this._pass(variableName, function (l) {
	                return _this9._gl.uniform3f(l, val.X, val.Y, val.Z);
	            });
	        }
	    }, {
	        key: "uniformVector3Array",
	        value: function uniformVector3Array(variableName, val) {
	            var _this10 = this;
	
	            this._pass(variableName, function (l) {
	                return _this10._gl.uniform3fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformColor3",
	        value: function uniformColor3(variableName, val) {
	            var _this11 = this;
	
	            this._pass(variableName, function (l) {
	                return _this11._gl.uniform3f(l, val.R, val.G, val.B);
	            });
	        }
	    }, {
	        key: "uniformVector4",
	        value: function uniformVector4(variableName, val) {
	            var _this12 = this;
	
	            this._pass(variableName, function (l) {
	                return _this12._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
	            });
	        }
	    }, {
	        key: "uniformVector4Array",
	        value: function uniformVector4Array(variableName, val) {
	            var _this13 = this;
	
	            this._pass(variableName, function (l) {
	                return _this13._gl.uniform4fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformColor4",
	        value: function uniformColor4(variableName, val) {
	            var _this14 = this;
	
	            this._pass(variableName, function (l) {
	                return _this14._gl.uniform4f(l, val.R, val.G, val.B, val.A);
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
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Pass = function () {
	    function Pass() {
	        _classCallCheck(this, Pass);
	
	        this.attributes = [];
	    }
	
	    _createClass(Pass, [{
	        key: "draw",
	        value: function draw(arg) {
	            if (!this.program) {
	                return;
	            }
	            this.program.use();
	            this.__beforeDraw(arg);
	            arg.geometry.draw(arg.targetBuffer, this.attributes, this.program, arg.drawCount, arg.drawOffset);
	        }
	    }, {
	        key: "__beforeDraw",
	        value: function __beforeDraw(arg) {
	            // Should be overrrided or rewritten
	        }
	    }]);
	
	    return Pass;
	}();
	
	exports.default = Pass;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DrawPriorty = __webpack_require__(42);
	
	var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);
	
	var _ResourceBase = __webpack_require__(26);
	
	var _ResourceBase2 = _interopRequireDefault(_ResourceBase);
	
	var _SORTPass = __webpack_require__(36);
	
	var _SORTPass2 = _interopRequireDefault(_SORTPass);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _grimoirejs = __webpack_require__(14);
	
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
	            var orderCriteria = _DrawPriorty2.default[this._drawOrder ? this._drawOrder : this.material.drawOrder];
	            if (orderCriteria.descending) {
	                return (1.0 - depth / 10000) * orderCriteria.priorty;
	            } else {
	                return depth / 10000 * orderCriteria.priorty;
	            }
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.getAttribute("material").addObserver(this._onMaterialChanged);
	            this.companion.get("loader").register(this._onMaterialChanged());
	            this.getAttribute("drawOrder").boundTo("_drawOrder");
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
	                                materialPromise = this.getValue("material");
	
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
	
	                var loader, material, promises;
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
	                                promises = [];
	
	                                material.pass.forEach(function (p) {
	                                    if (p instanceof _SORTPass2.default) {
	                                        var _ret = function () {
	                                            var cp = p;
	
	                                            var _loop = function _loop(key) {
	                                                var val = cp.sort.gomlAttributes[key];
	                                                _this2.__addAtribute(key, val);
	                                                _this2.getAttribute(key).addObserver(function (v) {
	                                                    _this2.materialArgs[key] = v.Value;
	                                                });
	                                                var value = _this2.materialArgs[key] = _this2.getValue(key);
	                                                if (value instanceof _ResourceBase2.default) {
	                                                    promises.push(value.validPromise);
	                                                }
	                                            };
	
	                                            for (var key in cp.sort.gomlAttributes) {
	                                                _loop(key);
	                                            }
	                                            var _iteratorNormalCompletion = true;
	                                            var _didIteratorError = false;
	                                            var _iteratorError = undefined;
	
	                                            try {
	                                                var _loop2 = function _loop2() {
	                                                    var macro = _step.value;
	
	                                                    switch (macro.type) {
	                                                        case "int":
	                                                            _this2.__addAtribute(macro.attributeName, {
	                                                                converter: "Number",
	                                                                defaultValue: macro.default
	                                                            });
	                                                            _this2.getAttribute(macro.attributeName).addObserver(function (v) {
	                                                                cp.setMacro(macro.macroName, "" + Math.floor(v.Value));
	                                                            }, true);
	                                                            return {
	                                                                v: {
	                                                                    v: void 0
	                                                                }
	                                                            };
	                                                        case "bool":
	                                                            _this2.__addAtribute(macro.attributeName, {
	                                                                converter: "Boolean",
	                                                                defaultValue: macro.default
	                                                            });
	                                                            _this2.getAttribute(macro.attributeName).addObserver(function (v) {
	                                                                cp.setMacro(macro.macroName, v.Value);
	                                                            }, true);
	                                                            return {
	                                                                v: {
	                                                                    v: void 0
	                                                                }
	                                                            };
	                                                    }
	                                                };
	
	                                                for (var _iterator = cp.sort.macros[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                                    var _ret3 = _loop2();
	
	                                                    if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
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
	                                        }();
	
	                                        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	                                    }
	                                });
	                                Promise.all(promises);
	                                this.material = material;
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
	                _grimoirejs2.default.componentDeclarations.get("MaterialContainer").attributes["material"].defaultValue = "new(" + materialName + ")";
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
	        defaultValue: "new(unlit)",
	        componentBoundTo: "_materialComponent" // When the material was specified with the other material tag, this field would be assigned.
	    },
	    drawOrder: {
	        converter: "String",
	        defaultValue: null
	    }
	};
	MaterialContainerComponent._defaultMaterial = "unlit";

/***/ },
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MaterialFactory = __webpack_require__(44);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _Component2 = __webpack_require__(15);
	
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
	            if (!this.getValue("typeName") || !this.getValue("src")) {
	                throw new Error("type or src cannot be null in material importer");
	            } else {
	                _MaterialFactory2.default.addSORTMaterialFromURL(this.getValue("typeName"), this.getValue("src"));
	            }
	        }
	    }]);
	
	    return MaterialImporterComponent;
	}(_Component3.default);
	
	exports.default = MaterialImporterComponent;
	
	MaterialImporterComponent.attributes = {
	    typeName: {
	        defaultValue: undefined,
	        converter: "String"
	    },
	    src: {
	        defaultValue: undefined,
	        converter: "String"
	    }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DrawPriorty = __webpack_require__(42);
	
	var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);
	
	var _SORTPass = __webpack_require__(36);
	
	var _SORTPass2 = _interopRequireDefault(_SORTPass);
	
	var _MacroRegistory = __webpack_require__(45);
	
	var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);
	
	var _PassFactory = __webpack_require__(47);
	
	var _PassFactory2 = _interopRequireDefault(_PassFactory);
	
	var _TextFileResolver = __webpack_require__(6);
	
	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);
	
	var _Material = __webpack_require__(61);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	var _header = __webpack_require__(62);
	
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
	                var sortInfos;
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                _context2.next = 2;
	                                return _PassFactory2.default.passInfoFromSORT(source);
	
	                            case 2:
	                                sortInfos = _context2.sent;
	
	                                MaterialFactory.addMaterialType(typeName, function (factory) {
	                                    var sorts = sortInfos.map(function (p) {
	                                        return new _SORTPass2.default(factory, p);
	                                    });
	                                    return new _Material2.default(sorts, MaterialFactory._parseSortDrawOrder(source));
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
	    }, {
	        key: "_parseSortDrawOrder",
	        value: function _parseSortDrawOrder(source) {
	            var regex = /@DrawOrder\(\s*([a-zA-Z0-9]+)\s*\)/;
	            var result = regex.exec(source);
	            if (!result) {
	                return undefined;
	            } else {
	                var drawOrder = result[1];
	                if (_DrawPriorty2.default[drawOrder] === void 0) {
	                    throw new Error("Specified draw order " + drawOrder + " was not found.");
	                } else {
	                    return drawOrder;
	                }
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DefaultMacro = __webpack_require__(46);
	
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SORTPassParser = __webpack_require__(48);
	
	var _SORTPassParser2 = _interopRequireDefault(_SORTPassParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PassFactory = function () {
	    function PassFactory() {
	        _classCallCheck(this, PassFactory);
	    }
	
	    _createClass(PassFactory, null, [{
	        key: "passInfoFromSORT",
	        value: function passInfoFromSORT(source) {
	            var splitted = source.split("@Pass");
	            splitted.splice(0, 1); // Separate with @Pass and if there was some pass without containing @, that would be skipped since that is assumed as empty.
	            return Promise.all(splitted.map(function (p) {
	                return _SORTPassParser2.default.parse(p);
	            }));
	        }
	    }]);
	
	    return PassFactory;
	}();
	
	exports.default = PassFactory;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _UniformRegisterer = __webpack_require__(49);
	
	var _UniformRegisterer2 = _interopRequireDefault(_UniformRegisterer);
	
	var _CommentRemover = __webpack_require__(53);
	
	var _CommentRemover2 = _interopRequireDefault(_CommentRemover);
	
	var _ImportTransformer = __webpack_require__(54);
	
	var _ImportTransformer2 = _interopRequireDefault(_ImportTransformer);
	
	var _VariableParser = __webpack_require__(56);
	
	var _VariableParser2 = _interopRequireDefault(_VariableParser);
	
	var _VariableAnnotationRemover = __webpack_require__(58);
	
	var _VariableAnnotationRemover2 = _interopRequireDefault(_VariableAnnotationRemover);
	
	var _PreferenceParser = __webpack_require__(59);
	
	var _PreferenceParser2 = _interopRequireDefault(_PreferenceParser);
	
	var _AnnotationRemover = __webpack_require__(60);
	
	var _AnnotationRemover2 = _interopRequireDefault(_AnnotationRemover);
	
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
	
	var SORTPassParser = function () {
	    function SORTPassParser() {
	        _classCallCheck(this, SORTPassParser);
	    }
	
	    _createClass(SORTPassParser, null, [{
	        key: "parse",
	        value: function parse(source) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var transformingInfo, i;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                transformingInfo = {
	                                    origin: source,
	                                    info: {
	                                        shaderSource: source,
	                                        uniforms: {},
	                                        attributes: {},
	                                        macros: [],
	                                        configurator: [],
	                                        systemRegisterers: [],
	                                        gomlAttributes: {}
	                                    }
	                                };
	                                i = 0;
	
	                            case 2:
	                                if (!(i < SORTPassParser.transformers.length)) {
	                                    _context.next = 9;
	                                    break;
	                                }
	
	                                _context.next = 5;
	                                return SORTPassParser.transformers[i](transformingInfo);
	
	                            case 5:
	                                transformingInfo = _context.sent;
	
	                            case 6:
	                                i++;
	                                _context.next = 2;
	                                break;
	
	                            case 9:
	                                return _context.abrupt("return", transformingInfo.info);
	
	                            case 10:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }]);
	
	    return SORTPassParser;
	}();
	
	exports.default = SORTPassParser;
	
	SORTPassParser.transformers = [_CommentRemover2.default, _ImportTransformer2.default, (0, _VariableParser2.default)("uniform"), (0, _VariableParser2.default)("attribute"), _PreferenceParser2.default, _AnnotationRemover2.default, _VariableAnnotationRemover2.default, _UniformRegisterer2.default];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (input) {
	    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	            while (1) {
	                switch (_context2.prev = _context2.next) {
	                    case 0:
	                        _context2.next = 2;
	                        return _registerUserUniforms(input);
	
	                    case 2:
	                        _registerEnvUniforms(input);
	                        return _context2.abrupt("return", input);
	
	                    case 4:
	                    case "end":
	                        return _context2.stop();
	                }
	            }
	        }, _callee2, this);
	    }));
	};
	
	var _GLSLUtil = __webpack_require__(50);
	
	var _GLSLUtil2 = _interopRequireDefault(_GLSLUtil);
	
	var _EnvUniformValueResolver = __webpack_require__(51);
	
	var _EnvUniformValueResolver2 = _interopRequireDefault(_EnvUniformValueResolver);
	
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
	
	function _getDecl(converter, defaultValue, register) {
	    return {
	        converter: converter,
	        defaultValue: defaultValue,
	        register: register
	    };
	}
	// return default value if annotation containing default value. if not, return provided default value.
	function _resolveDefault(vi, defaultValue) {
	    if (vi.variableAnnotation.default) {
	        return vi.variableAnnotation.default;
	    } else {
	        return defaultValue;
	    }
	}
	function _registerUserUniforms(input) {
	    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	        var promises, attributes, _loop, variableName, _ret;
	
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        promises = [];
	                        attributes = input.info.gomlAttributes;
	
	                        _loop = function _loop(variableName) {
	                            if (variableName.charAt(0) === "_") {
	                                // this should not assigned by material argument
	                                return "continue";
	                            }
	                            var valName = variableName;
	                            var uniforms = input.info.uniforms;
	                            var variableInfo = uniforms[variableName];
	                            var annotations = variableInfo.variableAnnotation;
	                            if (_GLSLUtil2.default.isPrimitive(variableInfo.variableType)) {
	                                if (variableInfo.isArray) {
	                                    switch (variableInfo.variableType) {
	                                        case "float":
	                                            var defaultArray = new Array();
	                                            defaultArray = defaultArray.map(function (p) {
	                                                return 0;
	                                            });
	                                            attributes[valName] = _getDecl("NumberArray", _resolveDefault(variableInfo, defaultArray), function (proxy, matArg) {
	                                                proxy.uniformFloatArray(valName, matArg.attributeValues[valName]);
	                                            });
	                                            break;
	                                        case "mat4":
	                                            var defaultArray2 = new Array();
	                                            defaultArray = defaultArray2.map(function (p) {
	                                                return 0;
	                                            });
	                                            attributes[valName] = _getDecl("Object", _resolveDefault(variableInfo, defaultArray), function (proxy, matArg) {
	                                                proxy.uniformMatrixArray(valName, matArg.attributeValues[valName]);
	                                            });
	                                            break;
	                                        default:
	                                            throw new Error("Unsupported array type " + variableInfo.variableType);
	                                    }
	                                } else {
	                                    (function () {
	                                        switch (variableInfo.variableType) {
	                                            case "bool":
	                                                attributes[valName] = _getDecl("Boolean", _resolveDefault(variableInfo, false), function (proxy, matArg) {
	                                                    proxy.uniformBool(valName, matArg.attributeValues[valName]);
	                                                });
	                                                break;
	                                            case "float":
	                                                attributes[valName] = _getDecl("Number", _resolveDefault(variableInfo, 0), function (proxy, matArg) {
	                                                    proxy.uniformFloat(valName, matArg.attributeValues[valName]);
	                                                });
	                                                break;
	                                            case "vec2":
	                                                attributes[valName] = _getDecl("Vector2", _resolveDefault(variableInfo, "0,0"), function (proxy, matArg) {
	                                                    proxy.uniformVector2(valName, matArg.attributeValues[valName]);
	                                                });
	                                                break;
	                                            case "vec3":
	                                                if (annotations["type"] === "color") {
	                                                    attributes[valName] = _getDecl("Color3", _resolveDefault(variableInfo, "#000"), function (proxy, matArg) {
	                                                        proxy.uniformColor3(valName, matArg.attributeValues[valName]);
	                                                    });
	                                                } else {
	                                                    attributes[valName] = _getDecl("Vector3", _resolveDefault(variableInfo, "0,0,0"), function (proxy, matArg) {
	                                                        proxy.uniformVector3(valName, matArg.attributeValues[valName]);
	                                                    });
	                                                }
	                                                break;
	                                            case "vec4":
	                                                if (annotations["type"] === "color") {
	                                                    attributes[valName] = _getDecl("Color4", _resolveDefault(variableInfo, "#0000"), function (proxy, matArg) {
	                                                        proxy.uniformColor4(valName, matArg.attributeValues[valName]);
	                                                    });
	                                                } else {
	                                                    attributes[valName] = _getDecl("Vector4", _resolveDefault(variableInfo, "0,0,0,0"), function (proxy, matArg) {
	                                                        proxy.uniformVector4(valName, matArg.attributeValues[valName]);
	                                                    });
	                                                }
	                                                break;
	                                            case "sampler2D":
	                                                var flagAssignTo = undefined;
	                                                // check used flag is existing
	                                                if (annotations["usedFlag"]) {
	                                                    if (annotations["usedFlag"] !== void 0) {
	                                                        flagAssignTo = annotations["usedFlag"];
	                                                    }
	                                                }
	                                                attributes[valName] = _getDecl("Texture", _resolveDefault(variableInfo, undefined), function (proxy, matArgs) {
	                                                    var texture = void 0;
	                                                    if (matArgs.attributeValues[valName] && (texture = matArgs.attributeValues[valName].get(matArgs.buffers))) {
	                                                        proxy.uniformTexture2D(valName, texture);
	                                                        if (flagAssignTo) {
	                                                            proxy.uniformBool(flagAssignTo, true);
	                                                        }
	                                                    } else {
	                                                        proxy.uniformTexture2D(valName, matArgs.defaultTexture);
	                                                        if (flagAssignTo) {
	                                                            proxy.uniformBool(flagAssignTo, false);
	                                                        }
	                                                    }
	                                                });
	                                                break;
	                                            default:
	                                                throw new Error("Unsupported type was found");
	                                        }
	                                    })();
	                                }
	                            } else {
	                                debugger;
	                            }
	                        };
	
	                        _context.t0 = regeneratorRuntime.keys(input.info.uniforms);
	
	                    case 4:
	                        if ((_context.t1 = _context.t0()).done) {
	                            _context.next = 11;
	                            break;
	                        }
	
	                        variableName = _context.t1.value;
	                        _ret = _loop(variableName);
	
	                        if (!(_ret === "continue")) {
	                            _context.next = 9;
	                            break;
	                        }
	
	                        return _context.abrupt("continue", 4);
	
	                    case 9:
	                        _context.next = 4;
	                        break;
	
	                    case 11:
	                        _context.next = 13;
	                        return Promise.all(promises);
	
	                    case 13:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	}
	/**
	 * Register system shader variables whose name starts with _.
	 * @param  {ITransformingArgument} input [description]
	 * @return {Promise<void>}           [description]
	 */
	function _registerEnvUniforms(input) {
	    var registerers = input.info.systemRegisterers;
	    for (var variableName in input.info.uniforms) {
	        if (variableName.charAt(0) === "_") {
	            var _variableInfo = input.info.uniforms[variableName];
	            var resolver = _EnvUniformValueResolver2.default.resolve(variableName, _variableInfo);
	            if (resolver) {
	                registerers.push(resolver);
	                continue;
	            }
	        }
	    }
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GLSLUtil = function () {
	    function GLSLUtil() {
	        _classCallCheck(this, GLSLUtil);
	    }
	
	    _createClass(GLSLUtil, null, [{
	        key: "isPrimitive",
	        value: function isPrimitive(type) {
	            return GLSLUtil._primitives.indexOf(type) >= 0;
	        }
	    }]);
	
	    return GLSLUtil;
	}();
	
	exports.default = GLSLUtil;
	
	GLSLUtil._primitives = ["float", "bool", "int", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "mat2", "mat3", "mat4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow"];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(52);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Environment uniform value resolver
	 */
	var EnvUniformValueResolver = function () {
	    function EnvUniformValueResolver() {
	        _classCallCheck(this, EnvUniformValueResolver);
	    }
	
	    _createClass(EnvUniformValueResolver, null, [{
	        key: "addResolver",
	
	        /**
	         * Add static environment uniform value resolver to specified name.
	         * @param  {string} name     [description]
	         * @param  {string} resolver [description]
	         * @return {[type]}          [description]
	         */
	        value: function addResolver(name, resolver) {
	            EnvUniformValueResolver.resolvers[name] = resolver;
	        }
	        /**
	         * Add dynamic environment uniform value resolver.
	         * When pasased variable are not resolved by a resolver, that resolver should return null or undefined.
	         * @param  {string} resolver [description]
	         * @return {[type]}          [description]
	         */
	
	    }, {
	        key: "addDynamicResolver",
	        value: function addDynamicResolver(resolver) {
	            EnvUniformValueResolver.dynamicResolvers.push(resolver);
	        }
	    }, {
	        key: "resolve",
	        value: function resolve(name, valInfo) {
	            if (EnvUniformValueResolver.resolvers[name]) {
	                return EnvUniformValueResolver.resolvers[name](valInfo, name);
	            } else {
	                var targetResolver = null;
	                for (var i = 0; i < EnvUniformValueResolver.dynamicResolvers.length; i++) {
	                    targetResolver = EnvUniformValueResolver.dynamicResolvers[i](valInfo, name);
	                    if (targetResolver != null) {
	                        return targetResolver;
	                    }
	                }
	            }
	        }
	    }]);
	
	    return EnvUniformValueResolver;
	}();
	/**
	 * Static environment uniform value resolvers which names are already known.
	 * @type {IVariableInfo}
	 */
	
	
	exports.default = EnvUniformValueResolver;
	EnvUniformValueResolver.resolvers = {};
	/**
	 * Dynamic environment uniform value resolvers which names are not known yet.
	 * @type {IVariableInfo}
	 */
	EnvUniformValueResolver.dynamicResolvers = [];
	// Matricies
	EnvUniformValueResolver.addResolver("_matPVM", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformMatrix(name, args.transform.calcPVM(args.camera.camera));
	    };
	});
	EnvUniformValueResolver.addResolver("_matP", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformMatrix(name, args.camera.camera.getProjectionMatrix());
	    };
	});
	EnvUniformValueResolver.addResolver("_matV", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformMatrix(name, args.camera.camera.getViewMatrix());
	    };
	});
	EnvUniformValueResolver.addResolver("_matM", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformMatrix(name, args.transform.globalTransform);
	    };
	});
	EnvUniformValueResolver.addResolver("_matVM", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformMatrix(name, args.transform.calcVM(args.camera.camera));
	    };
	});
	EnvUniformValueResolver.addResolver("_matPV", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformMatrix(name, args.camera.camera.getProjectionViewMatrix());
	    };
	});
	// Misc
	EnvUniformValueResolver.addResolver("_time", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformFloat(name, Date.now() % 1000000);
	    };
	});
	EnvUniformValueResolver.addResolver("_viewportSize", function (valInfo, name) {
	    var cacheVec = new _Vector2.default(0, 0);
	    return function (proxy, args) {
	        cacheVec.X = args.viewport.Width;
	        cacheVec.Y = args.viewport.Height;
	        proxy.uniformVector2(name, cacheVec);
	    };
	});
	EnvUniformValueResolver.addResolver("_cameraPosition", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformVector3(name, args.camera.transform.globalPosition);
	    };
	});
	EnvUniformValueResolver.addResolver("_cameraDirection", function (valInfo, name) {
	    return function (proxy, args) {
	        return proxy.uniformVector3(name, args.camera.transform.forward);
	    };
	});

/***/ },
/* 52 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector2;

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (input) {
	    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        input.info.shaderSource = _removeComment(input.info.shaderSource);
	                        return _context.abrupt("return", input);
	
	                    case 2:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	};
	
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
	function _removeComment(source) {
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
	        if (c === "\n" && isLineComment) {
	            isLineComment = false;
	            continue;
	        }
	        if (!isLineComment && !isMultiLineComment) {
	            text += c;
	        }
	    }
	    return text;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (input) {
	    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	        var transformed;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	            while (1) {
	                switch (_context2.prev = _context2.next) {
	                    case 0:
	                        _context2.next = 2;
	                        return _parseImport(input.info.shaderSource);
	
	                    case 2:
	                        transformed = _context2.sent;
	
	                        input.info.shaderSource = transformed;
	                        return _context2.abrupt("return", input);
	
	                    case 5:
	                    case "end":
	                        return _context2.stop();
	                }
	            }
	        }, _callee2, this);
	    }));
	};
	
	var _ImportResolver = __webpack_require__(55);
	
	var _ImportResolver2 = _interopRequireDefault(_ImportResolver);
	
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
	
	function _parseImport(source) {
	    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	        var regexResult, importContent;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (false) {
	                            _context.next = 16;
	                            break;
	                        }
	
	                        regexResult = /\s*@import\s+"([^"]+)"/.exec(source);
	
	                        if (regexResult) {
	                            _context.next = 4;
	                            break;
	                        }
	
	                        return _context.abrupt("break", 16);
	
	                    case 4:
	                        importContent = void 0;
	                        _context.next = 7;
	                        return _ImportResolver2.default.resolve(regexResult[1]);
	
	                    case 7:
	                        _context.t0 = _context.sent;
	                        _context.next = 10;
	                        return _parseImport(_context.t0);
	
	                    case 10:
	                        importContent = _context.sent;
	
	                        if (importContent) {
	                            _context.next = 13;
	                            break;
	                        }
	
	                        throw new Error("Required shader chunk '" + regexResult[1] + "' was not found!!");
	
	                    case 13:
	                        source = source.replace(regexResult[0], "\n" + importContent + "\n");
	                        _context.next = 0;
	                        break;
	
	                    case 16:
	                        return _context.abrupt("return", source);
	
	                    case 17:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	}

/***/ },
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (type) {
	    return function (arg) {
	        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	            var variables;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            variables = _parseVariables(arg.info.shaderSource, type);
	                            _context.t0 = type;
	                            _context.next = _context.t0 === "uniform" ? 4 : _context.t0 === "attribute" ? 6 : 8;
	                            break;
	
	                        case 4:
	                            arg.info.uniforms = variables;
	                            return _context.abrupt("break", 9);
	
	                        case 6:
	                            arg.info.attributes = variables;
	                            return _context.abrupt("break", 9);
	
	                        case 8:
	                            throw new Error("Unknown variable type!!");
	
	                        case 9:
	                            return _context.abrupt("return", arg);
	
	                        case 10:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    };
	};
	
	var _json = __webpack_require__(57);
	
	var _json2 = _interopRequireDefault(_json);
	
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
	
	function _parseVariableAttributes(attributes) {
	    return _json2.default.parse(attributes);
	}
	function _generateVariableFetchRegex(variableType) {
	    return new RegExp("(?:@(\\{.+\\}))?\\s*" + variableType + "\\s+(?:(lowp|mediump|highp)\\s+)?([a-z0-9A-Z]+)\\s+([a-zA-Z0-9_]+)(?:\\s*\\[\\s*([a-zA-Z0-9_]+)\\s*\\]\\s*)?\\s*;", "g");
	}
	function _parseVariables(source, variableType) {
	    var result = {};
	    var regex = _generateVariableFetchRegex(variableType);
	    var regexResult = void 0;
	
	    var _loop = function _loop() {
	        var name = regexResult[4];
	        var type = regexResult[3];
	        var precision = regexResult[2];
	        var rawAnnotations = regexResult[1];
	        var isArray = regexResult[5] !== void 0;
	        var arrayCount = undefined;
	        if (isArray) {
	            (function () {
	                var c = parseInt(regexResult[5], 10);
	                arrayCount = function arrayCount() {
	                    return c;
	                };
	                if (isNaN(c)) {
	                    arrayCount = function (_arrayCount) {
	                        function arrayCount(_x) {
	                            return _arrayCount.apply(this, arguments);
	                        }
	
	                        arrayCount.toString = function () {
	                            return _arrayCount.toString();
	                        };
	
	                        return arrayCount;
	                    }(function (m) {
	                        return m[arrayCount];
	                    });
	                }
	            })();
	        }
	        result[name] = {
	            variableName: name,
	            variableType: type,
	            variablePrecision: precision,
	            variableAnnotation: rawAnnotations ? _parseVariableAttributes(rawAnnotations) : {},
	            isArray: isArray,
	            arrayLength: arrayCount
	        };
	    };
	
	    while (regexResult = regex.exec(source)) {
	        _loop();
	    }
	    return result;
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// json5.js
	// Modern JSON. See README.md for details.
	//
	// This file is based directly off of Douglas Crockford's json_parse.js:
	// https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
	
	var JSON5 = ( true ? exports : {});
	
	JSON5.parse = (function () {
	    "use strict";
	
	// This is a function that can parse a JSON5 text, producing a JavaScript
	// data structure. It is a simple, recursive descent parser. It does not use
	// eval or regular expressions, so it can be used as a model for implementing
	// a JSON5 parser in other languages.
	
	// We are defining the function inside of another function to avoid creating
	// global variables.
	
	    var at,           // The index of the current character
	        lineNumber,   // The current line number
	        columnNumber, // The current column number
	        ch,           // The current character
	        escapee = {
	            "'":  "'",
	            '"':  '"',
	            '\\': '\\',
	            '/':  '/',
	            '\n': '',       // Replace escaped newlines in strings w/ empty string
	            b:    '\b',
	            f:    '\f',
	            n:    '\n',
	            r:    '\r',
	            t:    '\t'
	        },
	        ws = [
	            ' ',
	            '\t',
	            '\r',
	            '\n',
	            '\v',
	            '\f',
	            '\xA0',
	            '\uFEFF'
	        ],
	        text,
	
	        renderChar = function (chr) {
	            return chr === '' ? 'EOF' : "'" + chr + "'";
	        },
	
	        error = function (m) {
	
	// Call error when something is wrong.
	
	            var error = new SyntaxError();
	            // beginning of message suffix to agree with that provided by Gecko - see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
	            error.message = m + " at line " + lineNumber + " column " + columnNumber + " of the JSON5 data. Still to read: " + JSON.stringify(text.substring(at - 1, at + 19));
	            error.at = at;
	            // These two property names have been chosen to agree with the ones in Gecko, the only popular
	            // environment which seems to supply this info on JSON.parse
	            error.lineNumber = lineNumber;
	            error.columnNumber = columnNumber;
	            throw error;
	        },
	
	        next = function (c) {
	
	// If a c parameter is provided, verify that it matches the current character.
	
	            if (c && c !== ch) {
	                error("Expected " + renderChar(c) + " instead of " + renderChar(ch));
	            }
	
	// Get the next character. When there are no more characters,
	// return the empty string.
	
	            ch = text.charAt(at);
	            at++;
	            columnNumber++;
	            if (ch === '\n' || ch === '\r' && peek() !== '\n') {
	                lineNumber++;
	                columnNumber = 0;
	            }
	            return ch;
	        },
	
	        peek = function () {
	
	// Get the next character without consuming it or
	// assigning it to the ch varaible.
	
	            return text.charAt(at);
	        },
	
	        identifier = function () {
	
	// Parse an identifier. Normally, reserved words are disallowed here, but we
	// only use this for unquoted object keys, where reserved words are allowed,
	// so we don't check for those here. References:
	// - http://es5.github.com/#x7.6
	// - https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Core_Language_Features#Variables
	// - http://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm
	// TODO Identifiers can have Unicode "letters" in them; add support for those.
	
	            var key = ch;
	
	            // Identifiers must start with a letter, _ or $.
	            if ((ch !== '_' && ch !== '$') &&
	                    (ch < 'a' || ch > 'z') &&
	                    (ch < 'A' || ch > 'Z')) {
	                error("Bad identifier as unquoted key");
	            }
	
	            // Subsequent characters can contain digits.
	            while (next() && (
	                    ch === '_' || ch === '$' ||
	                    (ch >= 'a' && ch <= 'z') ||
	                    (ch >= 'A' && ch <= 'Z') ||
	                    (ch >= '0' && ch <= '9'))) {
	                key += ch;
	            }
	
	            return key;
	        },
	
	        number = function () {
	
	// Parse a number value.
	
	            var number,
	                sign = '',
	                string = '',
	                base = 10;
	
	            if (ch === '-' || ch === '+') {
	                sign = ch;
	                next(ch);
	            }
	
	            // support for Infinity (could tweak to allow other words):
	            if (ch === 'I') {
	                number = word();
	                if (typeof number !== 'number' || isNaN(number)) {
	                    error('Unexpected word for number');
	                }
	                return (sign === '-') ? -number : number;
	            }
	
	            // support for NaN
	            if (ch === 'N' ) {
	              number = word();
	              if (!isNaN(number)) {
	                error('expected word to be NaN');
	              }
	              // ignore sign as -NaN also is NaN
	              return number;
	            }
	
	            if (ch === '0') {
	                string += ch;
	                next();
	                if (ch === 'x' || ch === 'X') {
	                    string += ch;
	                    next();
	                    base = 16;
	                } else if (ch >= '0' && ch <= '9') {
	                    error('Octal literal');
	                }
	            }
	
	            switch (base) {
	            case 10:
	                while (ch >= '0' && ch <= '9' ) {
	                    string += ch;
	                    next();
	                }
	                if (ch === '.') {
	                    string += '.';
	                    while (next() && ch >= '0' && ch <= '9') {
	                        string += ch;
	                    }
	                }
	                if (ch === 'e' || ch === 'E') {
	                    string += ch;
	                    next();
	                    if (ch === '-' || ch === '+') {
	                        string += ch;
	                        next();
	                    }
	                    while (ch >= '0' && ch <= '9') {
	                        string += ch;
	                        next();
	                    }
	                }
	                break;
	            case 16:
	                while (ch >= '0' && ch <= '9' || ch >= 'A' && ch <= 'F' || ch >= 'a' && ch <= 'f') {
	                    string += ch;
	                    next();
	                }
	                break;
	            }
	
	            if(sign === '-') {
	                number = -string;
	            } else {
	                number = +string;
	            }
	
	            if (!isFinite(number)) {
	                error("Bad number");
	            } else {
	                return number;
	            }
	        },
	
	        string = function () {
	
	// Parse a string value.
	
	            var hex,
	                i,
	                string = '',
	                delim,      // double quote or single quote
	                uffff;
	
	// When parsing for string values, we must look for ' or " and \ characters.
	
	            if (ch === '"' || ch === "'") {
	                delim = ch;
	                while (next()) {
	                    if (ch === delim) {
	                        next();
	                        return string;
	                    } else if (ch === '\\') {
	                        next();
	                        if (ch === 'u') {
	                            uffff = 0;
	                            for (i = 0; i < 4; i += 1) {
	                                hex = parseInt(next(), 16);
	                                if (!isFinite(hex)) {
	                                    break;
	                                }
	                                uffff = uffff * 16 + hex;
	                            }
	                            string += String.fromCharCode(uffff);
	                        } else if (ch === '\r') {
	                            if (peek() === '\n') {
	                                next();
	                            }
	                        } else if (typeof escapee[ch] === 'string') {
	                            string += escapee[ch];
	                        } else {
	                            break;
	                        }
	                    } else if (ch === '\n') {
	                        // unescaped newlines are invalid; see:
	                        // https://github.com/aseemk/json5/issues/24
	                        // TODO this feels special-cased; are there other
	                        // invalid unescaped chars?
	                        break;
	                    } else {
	                        string += ch;
	                    }
	                }
	            }
	            error("Bad string");
	        },
	
	        inlineComment = function () {
	
	// Skip an inline comment, assuming this is one. The current character should
	// be the second / character in the // pair that begins this inline comment.
	// To finish the inline comment, we look for a newline or the end of the text.
	
	            if (ch !== '/') {
	                error("Not an inline comment");
	            }
	
	            do {
	                next();
	                if (ch === '\n' || ch === '\r') {
	                    next();
	                    return;
	                }
	            } while (ch);
	        },
	
	        blockComment = function () {
	
	// Skip a block comment, assuming this is one. The current character should be
	// the * character in the /* pair that begins this block comment.
	// To finish the block comment, we look for an ending */ pair of characters,
	// but we also watch for the end of text before the comment is terminated.
	
	            if (ch !== '*') {
	                error("Not a block comment");
	            }
	
	            do {
	                next();
	                while (ch === '*') {
	                    next('*');
	                    if (ch === '/') {
	                        next('/');
	                        return;
	                    }
	                }
	            } while (ch);
	
	            error("Unterminated block comment");
	        },
	
	        comment = function () {
	
	// Skip a comment, whether inline or block-level, assuming this is one.
	// Comments always begin with a / character.
	
	            if (ch !== '/') {
	                error("Not a comment");
	            }
	
	            next('/');
	
	            if (ch === '/') {
	                inlineComment();
	            } else if (ch === '*') {
	                blockComment();
	            } else {
	                error("Unrecognized comment");
	            }
	        },
	
	        white = function () {
	
	// Skip whitespace and comments.
	// Note that we're detecting comments by only a single / character.
	// This works since regular expressions are not valid JSON(5), but this will
	// break if there are other valid values that begin with a / character!
	
	            while (ch) {
	                if (ch === '/') {
	                    comment();
	                } else if (ws.indexOf(ch) >= 0) {
	                    next();
	                } else {
	                    return;
	                }
	            }
	        },
	
	        word = function () {
	
	// true, false, or null.
	
	            switch (ch) {
	            case 't':
	                next('t');
	                next('r');
	                next('u');
	                next('e');
	                return true;
	            case 'f':
	                next('f');
	                next('a');
	                next('l');
	                next('s');
	                next('e');
	                return false;
	            case 'n':
	                next('n');
	                next('u');
	                next('l');
	                next('l');
	                return null;
	            case 'I':
	                next('I');
	                next('n');
	                next('f');
	                next('i');
	                next('n');
	                next('i');
	                next('t');
	                next('y');
	                return Infinity;
	            case 'N':
	              next( 'N' );
	              next( 'a' );
	              next( 'N' );
	              return NaN;
	            }
	            error("Unexpected " + renderChar(ch));
	        },
	
	        value,  // Place holder for the value function.
	
	        array = function () {
	
	// Parse an array value.
	
	            var array = [];
	
	            if (ch === '[') {
	                next('[');
	                white();
	                while (ch) {
	                    if (ch === ']') {
	                        next(']');
	                        return array;   // Potentially empty array
	                    }
	                    // ES5 allows omitting elements in arrays, e.g. [,] and
	                    // [,null]. We don't allow this in JSON5.
	                    if (ch === ',') {
	                        error("Missing array element");
	                    } else {
	                        array.push(value());
	                    }
	                    white();
	                    // If there's no comma after this value, this needs to
	                    // be the end of the array.
	                    if (ch !== ',') {
	                        next(']');
	                        return array;
	                    }
	                    next(',');
	                    white();
	                }
	            }
	            error("Bad array");
	        },
	
	        object = function () {
	
	// Parse an object value.
	
	            var key,
	                object = {};
	
	            if (ch === '{') {
	                next('{');
	                white();
	                while (ch) {
	                    if (ch === '}') {
	                        next('}');
	                        return object;   // Potentially empty object
	                    }
	
	                    // Keys can be unquoted. If they are, they need to be
	                    // valid JS identifiers.
	                    if (ch === '"' || ch === "'") {
	                        key = string();
	                    } else {
	                        key = identifier();
	                    }
	
	                    white();
	                    next(':');
	                    object[key] = value();
	                    white();
	                    // If there's no comma after this pair, this needs to be
	                    // the end of the object.
	                    if (ch !== ',') {
	                        next('}');
	                        return object;
	                    }
	                    next(',');
	                    white();
	                }
	            }
	            error("Bad object");
	        };
	
	    value = function () {
	
	// Parse a JSON value. It could be an object, an array, a string, a number,
	// or a word.
	
	        white();
	        switch (ch) {
	        case '{':
	            return object();
	        case '[':
	            return array();
	        case '"':
	        case "'":
	            return string();
	        case '-':
	        case '+':
	        case '.':
	            return number();
	        default:
	            return ch >= '0' && ch <= '9' ? number() : word();
	        }
	    };
	
	// Return the json_parse function. It will have access to all of the above
	// functions and variables.
	
	    return function (source, reviver) {
	        var result;
	
	        text = String(source);
	        at = 0;
	        lineNumber = 1;
	        columnNumber = 1;
	        ch = ' ';
	        result = value();
	        white();
	        if (ch) {
	            error("Syntax error");
	        }
	
	// If there is a reviver function, we recursively walk the new structure,
	// passing each name/value pair to the reviver function for possible
	// transformation, starting with a temporary root object that holds the result
	// in an empty key. If there is not a reviver function, we simply return the
	// result.
	
	        return typeof reviver === 'function' ? (function walk(holder, key) {
	            var k, v, value = holder[key];
	            if (value && typeof value === 'object') {
	                for (k in value) {
	                    if (Object.prototype.hasOwnProperty.call(value, k)) {
	                        v = walk(value, k);
	                        if (v !== undefined) {
	                            value[k] = v;
	                        } else {
	                            delete value[k];
	                        }
	                    }
	                }
	            }
	            return reviver.call(holder, key, value);
	        }({'': result}, '')) : result;
	    };
	}());
	
	// JSON5 stringify will not quote keys where appropriate
	JSON5.stringify = function (obj, replacer, space) {
	    if (replacer && (typeof(replacer) !== "function" && !isArray(replacer))) {
	        throw new Error('Replacer must be a function or an array');
	    }
	    var getReplacedValueOrUndefined = function(holder, key, isTopLevel) {
	        var value = holder[key];
	
	        // Replace the value with its toJSON value first, if possible
	        if (value && value.toJSON && typeof value.toJSON === "function") {
	            value = value.toJSON();
	        }
	
	        // If the user-supplied replacer if a function, call it. If it's an array, check objects' string keys for
	        // presence in the array (removing the key/value pair from the resulting JSON if the key is missing).
	        if (typeof(replacer) === "function") {
	            return replacer.call(holder, key, value);
	        } else if(replacer) {
	            if (isTopLevel || isArray(holder) || replacer.indexOf(key) >= 0) {
	                return value;
	            } else {
	                return undefined;
	            }
	        } else {
	            return value;
	        }
	    };
	
	    function isWordChar(c) {
	        return (c >= 'a' && c <= 'z') ||
	            (c >= 'A' && c <= 'Z') ||
	            (c >= '0' && c <= '9') ||
	            c === '_' || c === '$';
	    }
	
	    function isWordStart(c) {
	        return (c >= 'a' && c <= 'z') ||
	            (c >= 'A' && c <= 'Z') ||
	            c === '_' || c === '$';
	    }
	
	    function isWord(key) {
	        if (typeof key !== 'string') {
	            return false;
	        }
	        if (!isWordStart(key[0])) {
	            return false;
	        }
	        var i = 1, length = key.length;
	        while (i < length) {
	            if (!isWordChar(key[i])) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    }
	
	    // export for use in tests
	    JSON5.isWord = isWord;
	
	    // polyfills
	    function isArray(obj) {
	        if (Array.isArray) {
	            return Array.isArray(obj);
	        } else {
	            return Object.prototype.toString.call(obj) === '[object Array]';
	        }
	    }
	
	    function isDate(obj) {
	        return Object.prototype.toString.call(obj) === '[object Date]';
	    }
	
	    var objStack = [];
	    function checkForCircular(obj) {
	        for (var i = 0; i < objStack.length; i++) {
	            if (objStack[i] === obj) {
	                throw new TypeError("Converting circular structure to JSON");
	            }
	        }
	    }
	
	    function makeIndent(str, num, noNewLine) {
	        if (!str) {
	            return "";
	        }
	        // indentation no more than 10 chars
	        if (str.length > 10) {
	            str = str.substring(0, 10);
	        }
	
	        var indent = noNewLine ? "" : "\n";
	        for (var i = 0; i < num; i++) {
	            indent += str;
	        }
	
	        return indent;
	    }
	
	    var indentStr;
	    if (space) {
	        if (typeof space === "string") {
	            indentStr = space;
	        } else if (typeof space === "number" && space >= 0) {
	            indentStr = makeIndent(" ", space, true);
	        } else {
	            // ignore space parameter
	        }
	    }
	
	    // Copied from Crokford's implementation of JSON
	    // See https://github.com/douglascrockford/JSON-js/blob/e39db4b7e6249f04a195e7dd0840e610cc9e941e/json2.js#L195
	    // Begin
	    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        meta = { // table of character substitutions
	        '\b': '\\b',
	        '\t': '\\t',
	        '\n': '\\n',
	        '\f': '\\f',
	        '\r': '\\r',
	        '"' : '\\"',
	        '\\': '\\\\'
	    };
	    function escapeString(string) {
	
	// If the string contains no control characters, no quote characters, and no
	// backslash characters, then we can safely slap some quotes around it.
	// Otherwise we must also replace the offending characters with safe escape
	// sequences.
	        escapable.lastIndex = 0;
	        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
	            var c = meta[a];
	            return typeof c === 'string' ?
	                c :
	                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	        }) + '"' : '"' + string + '"';
	    }
	    // End
	
	    function internalStringify(holder, key, isTopLevel) {
	        var buffer, res;
	
	        // Replace the value, if necessary
	        var obj_part = getReplacedValueOrUndefined(holder, key, isTopLevel);
	
	        if (obj_part && !isDate(obj_part)) {
	            // unbox objects
	            // don't unbox dates, since will turn it into number
	            obj_part = obj_part.valueOf();
	        }
	        switch(typeof obj_part) {
	            case "boolean":
	                return obj_part.toString();
	
	            case "number":
	                if (isNaN(obj_part) || !isFinite(obj_part)) {
	                    return "null";
	                }
	                return obj_part.toString();
	
	            case "string":
	                return escapeString(obj_part.toString());
	
	            case "object":
	                if (obj_part === null) {
	                    return "null";
	                } else if (isArray(obj_part)) {
	                    checkForCircular(obj_part);
	                    buffer = "[";
	                    objStack.push(obj_part);
	
	                    for (var i = 0; i < obj_part.length; i++) {
	                        res = internalStringify(obj_part, i, false);
	                        buffer += makeIndent(indentStr, objStack.length);
	                        if (res === null || typeof res === "undefined") {
	                            buffer += "null";
	                        } else {
	                            buffer += res;
	                        }
	                        if (i < obj_part.length-1) {
	                            buffer += ",";
	                        } else if (indentStr) {
	                            buffer += "\n";
	                        }
	                    }
	                    objStack.pop();
	                    if (obj_part.length) {
	                        buffer += makeIndent(indentStr, objStack.length, true)
	                    }
	                    buffer += "]";
	                } else {
	                    checkForCircular(obj_part);
	                    buffer = "{";
	                    var nonEmpty = false;
	                    objStack.push(obj_part);
	                    for (var prop in obj_part) {
	                        if (obj_part.hasOwnProperty(prop)) {
	                            var value = internalStringify(obj_part, prop, false);
	                            isTopLevel = false;
	                            if (typeof value !== "undefined" && value !== null) {
	                                buffer += makeIndent(indentStr, objStack.length);
	                                nonEmpty = true;
	                                key = isWord(prop) ? prop : escapeString(prop);
	                                buffer += key + ":" + (indentStr ? ' ' : '') + value + ",";
	                            }
	                        }
	                    }
	                    objStack.pop();
	                    if (nonEmpty) {
	                        buffer = buffer.substring(0, buffer.length-1) + makeIndent(indentStr, objStack.length) + "}";
	                    } else {
	                        buffer = '{}';
	                    }
	                }
	                return buffer;
	            default:
	                // functions and undefined should be ignored
	                return undefined;
	        }
	    }
	
	    // special case...when undefined is used inside of
	    // a compound object/array, return null.
	    // but when top-level, return undefined
	    var topLevelHolder = {"":obj};
	    if (obj === undefined) {
	        return getReplacedValueOrUndefined(topLevelHolder, '', true);
	    }
	    return internalStringify(topLevelHolder, '', true);
	};


/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (input) {
	    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        input.info.shaderSource = _removeVariableAnnotations(input.info.shaderSource);
	                        return _context.abrupt("return", input);
	
	                    case 2:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	};
	
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
	function _removeVariableAnnotations(source) {
	    var regexResult = void 0;
	    while (regexResult = /@\{.+\}/g.exec(source)) {
	        source = source.substr(0, regexResult.index) + source.substring(regexResult.index + regexResult[0].length, source.length);
	    }
	    return source;
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (input) {
	    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context2) {
	            while (1) {
	                switch (_context2.prev = _context2.next) {
	                    case 0:
	                        _parsePreference(input.info);
	                        return _context2.abrupt("return", input);
	
	                    case 2:
	                    case "end":
	                        return _context2.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	};
	
	var _marked = [_regexPreferences].map(regeneratorRuntime.mark);
	
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
	function _regexPreferences(source) {
	    var regex, regexResult;
	    return regeneratorRuntime.wrap(function _regexPreferences$(_context) {
	        while (1) {
	            switch (_context.prev = _context.next) {
	                case 0:
	                    regex = /@([a-zA-Z]+)\(([^)]*)\)/g;
	                    regexResult = void 0;
	
	                case 2:
	                    if (!(regexResult = regex.exec(source))) {
	                        _context.next = 7;
	                        break;
	                    }
	
	                    _context.next = 5;
	                    return {
	                        name: regexResult[1],
	                        args: regexResult[2].split(",")
	                    };
	
	                case 5:
	                    _context.next = 2;
	                    break;
	
	                case 7:
	                case "end":
	                    return _context.stop();
	            }
	        }
	    }, _marked[0], this);
	}
	function _enablingFunc(target, enabled) {
	    if (enabled) {
	        return function (gl) {
	            gl.enable(target);
	        };
	    } else {
	        return function (gl) {
	            gl.disable(target);
	        };
	    }
	}
	function _asGLConstants(args, length) {
	    if (args.length !== length) {
	        throw new Error("The arguments should contain " + length + " of items but there was " + args.length);
	    }
	    return args.map(function (arg) {
	        var value = WebGLRenderingContext[arg.toUpperCase().trim()];
	        if (value !== void 0) {
	            return value;
	        } else {
	            throw new Error("Specified WebGL constant " + arg + " was not found");
	        }
	    });
	}
	function _exposeMacro(info, args) {
	    if (args.length !== 4) {
	        throw new Error("ExposeMacro must have 4 of arguments");
	    }
	    info.macros.push({
	        type: args[0],
	        attributeName: args[1],
	        macroName: args[2],
	        default: args[3]
	    });
	}
	function _parsePreference(info) {
	    var configs = _regexPreferences(info.shaderSource);
	    var configResult = void 0;
	    var result = [];
	    var depthEnabled = true,
	        blendEnabled = true,
	        cullEnabled = true;
	    while (configResult = configs.next()) {
	        if (configResult.done) {
	            break;
	        }
	        var config = configResult.value;
	
	        (function () {
	            switch (config.name) {
	                case "NoDepth":
	                    depthEnabled = false;
	                    break;
	                case "DepthFunc":
	                    depthEnabled = true;
	                    var depth = _asGLConstants(config.args, 1);
	                    result.push(function (gl) {
	                        gl.depthFunc(depth[0]);
	                    });
	                    break;
	                case "NoBlend":
	                    blendEnabled = false;
	                    break;
	                case "NoCull":
	                    cullEnabled = false;
	                    break;
	                case "CullFace":
	                    cullEnabled = true;
	                    var cullConfig = _asGLConstants(config.args, 1);
	                    result.push(function (gl) {
	                        gl.cullFace(cullConfig[0]);
	                    });
	                    break;
	                case "BlendFunc":
	                    blendEnabled = true;
	                    var blendFuncConfig = _asGLConstants(config.args, 2);
	                    result.push(function (gl) {
	                        gl.blendFunc(blendFuncConfig[0], blendFuncConfig[1]);
	                    });
	                    break;
	                case "BlendFuncSeparate":
	                    blendEnabled = true;
	                    var blendFuncSeparate = _asGLConstants(config.args, 4);
	                    result.push(function (gl) {
	                        gl.blendFuncSeparate(blendFuncSeparate[0], blendFuncSeparate[1], blendFuncSeparate[2], blendFuncSeparate[3]);
	                    });
	                    break;
	                case "BlendEquation":
	                    blendEnabled = true;
	                    var blendEquation = _asGLConstants(config.args, 1);
	                    result.push(function (gl) {
	                        gl.blendEquation(blendEquation[0]);
	                    });
	                    break;
	                case "BlendEquationSeparate":
	                    blendEnabled = true;
	                    var blendEquationSeparate = _asGLConstants(config.args, 2);
	                    result.push(function (gl) {
	                        gl.blendEquationSeparate(blendEquationSeparate[0], blendEquationSeparate[1]);
	                    });
	                    break;
	                case "ExposeMacro":
	                    _exposeMacro(info, config.args);
	                    break;
	            }
	        })();
	    }
	    result.unshift(_enablingFunc(WebGLRenderingContext.DEPTH_TEST, depthEnabled));
	    result.unshift(_enablingFunc(WebGLRenderingContext.BLEND, blendEnabled));
	    result.unshift(_enablingFunc(WebGLRenderingContext.CULL_FACE, cullEnabled));
	    info.configurator = result;
	}

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (input) {
	    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        input.info.shaderSource = _removeAnnotations(input.info.shaderSource);
	                        return _context.abrupt("return", input);
	
	                    case 2:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	};
	
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
	function _removeAnnotations(source) {
	    var regex = /(\s*@[a-zA-Z]*\([^)]*\))/;
	    while (true) {
	        var found = regex.exec(source);
	        if (!found) {
	            break;
	        }
	        source = source.replace(found[0], "");
	    }
	    return source;
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Material = function () {
	    function Material(pass) {
	        var drawOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "UseAlpha";
	
	        _classCallCheck(this, Material);
	
	        this.pass = pass;
	        this.drawOrder = drawOrder;
	    }
	
	    _createClass(Material, [{
	        key: "draw",
	        value: function draw(arg) {
	            this.pass.forEach(function (p) {
	                return p.draw(arg);
	            });
	        }
	    }]);
	
	    return Material;
	}();
	
	exports.default = Material;

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "/*Header start*/\n// helper macros\n#ifdef FS\n  #define FS_PREC(prec,type) precision prec type;\n  #define VS_PREC(prec,type)\n#endif\n#ifdef VS\n#define VS_PREC(prec,type) precision prec type;\n#define FS_PREC(prec,type)\n#endif\n// constants\n#define PI 3.141592653589793\n#define E 2.718281828459045\n#define LN2 0.6931471805599453\n#define LN10 2.302585092994046\n#define LOG2E 1.4426950408889634\n#define LOG10E 0.4342944819032518\n#define SQRT2 1.4142135623730951\n#define SQRT1_2 0.7071067811865476\n/*Header end*/\n"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _grimoirejs = __webpack_require__(14);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _MaterialFactory = __webpack_require__(44);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _Component2 = __webpack_require__(15);
	
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SceneComponent = __webpack_require__(21);
	
	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);
	
	var _TransformComponent = __webpack_require__(19);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MeshRenderer = function (_Component) {
	    _inherits(MeshRenderer, _Component);
	
	    function MeshRenderer() {
	        _classCallCheck(this, MeshRenderer);
	
	        return _possibleConstructorReturn(this, (MeshRenderer.__proto__ || Object.getPrototypeOf(MeshRenderer)).apply(this, arguments));
	    }
	
	    _createClass(MeshRenderer, [{
	        key: "getRenderingPriorty",
	        value: function getRenderingPriorty(camera, cameraMoved, lastPriorty) {
	            return this._materialContainer.getDrawPriorty(camera.transform.globalPosition.addWith(this._geometry.aabb.Center).subtractWith(this._transformComponent.globalPosition).magnitude); // Obtains distance between camera and center of aabb
	        }
	    }, {
	        key: "$awake",
	        value: function $awake() {
	            this.getAttribute("targetBuffer").boundTo("_targetBuffer");
	            this.getAttribute("layer").boundTo("_layer");
	            this.getAttribute("drawOffset").boundTo("_drawOffset");
	            this.getAttribute("drawCount").boundTo("_drawCount");
	            this.getAttribute("geometry").boundTo("_geometry");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._transformComponent = this.node.getComponent(_TransformComponent2.default);
	            this._materialContainer = this.node.getComponent("MaterialContainer");
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
	            if (this._layer !== args.layer) {
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
	                defaultTexture: args.defaultTexture
	            };
	            if (args.material) {
	                renderArgs.attributeValues = args.materialArgs;
	                args.material.draw(renderArgs);
	            } else {
	                renderArgs.attributeValues = this._materialContainer.materialArgs;
	                this._materialContainer.material.draw(renderArgs);
	            }
	            this.companion.get("gl").flush();
	        }
	    }], [{
	        key: "_findContainedScene",
	
	        /**
	        * Find scene tag recursively.
	        * @param  {GomlNode}       node [the node to searching currently]
	        * @return {SceneComponent}      [the scene component found]
	        */
	        value: function _findContainedScene(node) {
	            if (node.parent) {
	                var scene = node.parent.getComponent("Scene");
	                if (scene && scene instanceof _SceneComponent2.default) {
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
	        defaultValue: "quad"
	    },
	    targetBuffer: {
	        converter: "String",
	        defaultValue: "default"
	    },
	    layer: {
	        converter: "String",
	        defaultValue: "default"
	    },
	    drawCount: {
	        converter: "Number",
	        defaultValue: Number.MAX_VALUE
	    },
	    drawOffset: {
	        converter: "Number",
	        defaultValue: 0
	    }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(9);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Quaternion = __webpack_require__(20);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _Matrix = __webpack_require__(10);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _TransformComponent = __webpack_require__(19);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(15);
	
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
	        _this._center = 0;
	        return _this;
	    }
	
	    _createClass(MouseCameraControlComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this.getAttribute("center").boundTo("_center");
	            this.getAttribute("rotateSpeed").boundTo("_rotateSpeed");
	            this.getAttribute("zoomSpeed").boundTo("_zoomSpeed");
	            this.getAttribute("moveSpeed").boundTo("_moveSpeed");
	            this.getAttribute("origin").boundTo("_origin");
	            this._transform = this.node.getComponent(_TransformComponent2.default);
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._initialRight = _Vector2.default.copy(this._transform.right);
	            this._initialUp = _Vector2.default.copy(this._transform.up);
	            this._initialDirection = this._transform.localPosition.subtractWith(this._origin);
	            this._initialRotation = this._transform.localRotation;
	            this._origin = this._transform.localPosition.addWith(this._transform.forward.multiplyWith(this._center));
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
	        defaultValue: 1,
	        converter: "Number"
	    },
	    zoomSpeed: {
	        defaultValue: 1,
	        converter: "Number"
	    },
	    moveSpeed: {
	        defaultValue: 1,
	        converter: "Number"
	    },
	    center: {
	        defaultValue: 20,
	        converter: "Number"
	    },
	    origin: {
	        defaultValue: "0,0,0",
	        converter: "Vector3"
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
	
	var _RenderBuffer = __webpack_require__(67);
	
	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _TextureSizeCalculator = __webpack_require__(68);
	
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
	            var name = this.getValue("name");
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
	        defaultValue: undefined
	    }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceBase2 = __webpack_require__(26);
	
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
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(15);
	
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
	            this._camera = this.getValue("camera");
	            this.getAttribute("camera").addObserver(function (v) {
	                return _this2._camera = v.Value;
	            });
	            this.getAttribute("viewport").addObserver(function (v) {
	                _this2._viewportSizeGenerator = v.Value;
	                _this2.$resizeCanvas();
	            });
	            this._viewportSizeGenerator = this.getValue("viewport");
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
	        defaultValue: "camera",
	        target: "Camera"
	    },
	    viewport: {
	        converter: "Viewport",
	        defaultValue: "auto"
	    }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Color = __webpack_require__(71);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _Component2 = __webpack_require__(15);
	
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
	            this.getAttribute("bgColor").boundTo("_bgColor");
	            this.getAttribute("clearDepth").boundTo("_clearDepth");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.gl = this.companion.get("gl");
	        }
	    }, {
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            this.node.getComponent("LoopManager").register(this.onloop.bind(this), 1000);
	            if (this.getValue("complementRenderer") && this.node.getChildrenByNodeName("renderer").length === 0) {
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
	        defaultValue: new _Color2.default(0, 0, 0, 0),
	        converter: "Color4"
	    },
	    clearDepth: {
	        defaultValue: 1.0,
	        converter: "Number"
	    },
	    complementRenderer: {
	        defaultValue: true,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Color4;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FrameBuffer = __webpack_require__(73);
	
	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);
	
	var _Component2 = __webpack_require__(15);
	
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
	            this.getAttribute("targetBuffer").boundTo("_targetBuffer");
	            this.getAttribute("clearColor").boundTo("_clearColor");
	            this.getAttribute("clearColorEnabled").boundTo("_clearColorEnabled");
	            this.getAttribute("clearDepthEnabled").boundTo("_clearDepthEnabled");
	            this.getAttribute("clearDepth").boundTo("_clearDepth");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._gl = this.companion.get("gl");
	            this._canvas = this.companion.get("canvasElement");
	            var gr = this.companion.get("GeometryRegistory");
	            this._geom = gr.getGeometry("quad");
	            this._materialContainer = this.node.getComponent("MaterialContainer");
	        }
	    }, {
	        key: "$bufferUpdated",
	        value: function $bufferUpdated(args) {
	            var out = this.getValue("out");
	            if (out !== "default") {
	                this._fbo = new _FrameBuffer2.default(this.companion.get("gl"));
	                this._fbo.update(args.buffers[out]);
	                this._fboSize = args.bufferSizes[out];
	            }
	            var depthBuffer = this.getValue("depthBuffer");
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
	                defaultTexture: this.companion.get("defaultTexture")
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
	        defaultValue: "default",
	        converter: "String"
	    },
	    depthBuffer: {
	        defaultValue: undefined,
	        converter: "String"
	    },
	    targetBuffer: {
	        defaultValue: "default",
	        converter: "String"
	    },
	    clearColor: {
	        defaultValue: "#0000",
	        converter: "Color4"
	    },
	    clearColorEnabled: {
	        defaultValue: true,
	        converter: "Boolean"
	    },
	    clearDepthEnabled: {
	        defaultValue: true,
	        converter: "Boolean"
	    },
	    clearDepth: {
	        defaultValue: 1.0,
	        converter: "Number"
	    }
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _RenderBuffer = __webpack_require__(67);
	
	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);
	
	var _Texture2D = __webpack_require__(25);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _ResourceBase2 = __webpack_require__(26);
	
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _FrameBuffer = __webpack_require__(73);
	
	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);
	
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
	            this.getAttribute("layer").boundTo("_layer");
	            this.getAttribute("clearColor").boundTo("_clearColor");
	            this.getAttribute("clearColorEnabled").boundTo("_clearColorEnabled");
	            this.getAttribute("clearDepthEnabled").boundTo("_clearDepthEnabled");
	            this.getAttribute("clearDepth").boundTo("_clearDepth");
	            this.getAttribute("camera").boundTo("_camera");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._gl = this.companion.get("gl");
	            this._canvas = this.companion.get("canvasElement");
	            this._materialContainer = this.node.getComponent("MaterialContainer");
	        }
	    }, {
	        key: "$bufferUpdated",
	        value: function $bufferUpdated(args) {
	            var out = this.getValue("out");
	            if (out !== "default") {
	                this._fbo = new _FrameBuffer2.default(this.companion.get("gl"));
	                this._fbo.update(args.buffers[out]);
	                this._fboSize = args.bufferSizes[out];
	            }
	            var depthBuffer = this.getValue("depthBuffer");
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
	                loopIndex: args.loopIndex
	            });
	        }
	    }]);
	
	    return RenderSceneComponent;
	}(_Component3.default);
	
	exports.default = RenderSceneComponent;
	
	RenderSceneComponent.attributes = {
	    layer: {
	        converter: "String",
	        defaultValue: "default"
	    },
	    depthBuffer: {
	        defaultValue: undefined,
	        converter: "String"
	    },
	    out: {
	        converter: "String",
	        defaultValue: "default"
	    },
	    clearColor: {
	        defaultValue: "#0000",
	        converter: "Color4"
	    },
	    clearColorEnabled: {
	        defaultValue: true,
	        converter: "Boolean"
	    },
	    clearDepthEnabled: {
	        defaultValue: true,
	        converter: "Boolean"
	    },
	    clearDepth: {
	        defaultValue: 1.0,
	        converter: "Number"
	    },
	    camera: {
	        defaultValue: undefined,
	        converter: "Component",
	        target: "Camera"
	    }
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Texture2D = __webpack_require__(25);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _Component2 = __webpack_require__(15);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _TextureSizeCalculator = __webpack_require__(68);
	
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
	            var bufferName = this.getValue("name");
	            if (!bufferName) {
	                throw new Error("Attribute 'name' must be specified.");
	            }
	            var format = this.getValue("format");
	            var newSize = _TextureSizeCalculator2.default.getPow2Size(arg.width, arg.height);
	            this.buffer.update(0, newSize.width, newSize.height, 0, format, WebGLRenderingContext.UNSIGNED_BYTE, null);
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
	        defaultValue: undefined
	    },
	    format: {
	        converter: "Enum",
	        defaultValue: WebGLRenderingContext.RGBA,
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
	    }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Texture2D = __webpack_require__(25);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
	var _Component2 = __webpack_require__(15);
	
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
	
	            var src = this.getValue("src");
	            this.texture = new _Texture2D2.default(this.companion.get("gl"));
	            this.texture.magFilter = this.getValue("magFilter");
	            this.texture.minFilter = this.getValue("minFilter");
	            this.texture.wrapT = this.getValue("wrapT");
	            this.texture.wrapS = this.getValue("wrapS");
	            this.attributes.get("magFilter").addObserver(function (v) {
	                return _this2.texture.magFilter = v.Value;
	            });
	            this.attributes.get("minFilter").addObserver(function (v) {
	                return _this2.texture.minFilter = v.Value;
	            });
	            this.attributes.get("wrapS").addObserver(function (v) {
	                return _this2.texture.wrapS = v.Value;
	            });
	            this.attributes.get("wrapT").addObserver(function (v) {
	                return _this2.texture.wrapT = v.Value;
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
	        defaultValue: undefined
	    },
	    minFilter: {
	        converter: "Enum",
	        defaultValue: "LINEAR",
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
	        defaultValue: "LINEAR",
	        table: {
	            LINEAR: WebGLRenderingContext.LINEAR,
	            NEAREST: WebGLRenderingContext.NEAREST
	        }
	    },
	    wrapS: {
	        converter: "Enum",
	        defaultValue: "REPEAT",
	        table: {
	            REPEAT: WebGLRenderingContext.REPEAT,
	            MIRRORED_REPEAT: WebGLRenderingContext.MIRRORED_REPEAT,
	            CLAMP_TO_EDGE: WebGLRenderingContext.CLAMP_TO_EDGE
	        }
	    },
	    wrapT: {
	        converter: "Enum",
	        defaultValue: "REPEAT",
	        table: {
	            REPEAT: WebGLRenderingContext.REPEAT,
	            MIRRORED_REPEAT: WebGLRenderingContext.MIRRORED_REPEAT,
	            CLAMP_TO_EDGE: WebGLRenderingContext.CLAMP_TO_EDGE
	        }
	    }
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function ChildrenComponentConstraint(componentIds) {
	    return function (self) {
	        return checkRecursive(self, componentIds) ? null : "ChildrenComponentConstraint Error:" + self.name;
	    };
	}
	function checkConstraint(node, componentIds) {
	    return componentIds.every(function (id) {
	        return node.getComponent(id) !== null;
	    });
	}
	function checkRecursive(node, componentIds) {
	    if (!checkConstraint(node, componentIds)) {
	        return false;
	    }
	    return node.children.every(function (child) {
	        return checkRecursive(child, componentIds);
	    });
	}
	exports.default = ChildrenComponentConstraint;

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function NoChildConstraint() {
	    return function (self) {
	        return self.children.length === 0 ? null : "NoChildConstraint fail:" + self.name;
	    };
	}
	exports.default = NoChildConstraint;

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function ParentConstraint(components) {
	    return function (self) {
	        return components.every(function (id) {
	            return self.getComponent(id) != null;
	        }) ? null : "ParentConstraint Error:" + self.name;
	    };
	}
	exports.default = ParentConstraint;

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function RootConstraint() {
	    return function (self) {
	        if (self.parent) {
	            return "RootConstraint: this node: " + self.name.fqn + " must be tree root.";
	        }
	        return null;
	    };
	}
	exports.default = RootConstraint;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _RotationParser = __webpack_require__(82);
	
	var _RotationParser2 = _interopRequireDefault(_RotationParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Angle2DConverter(val) {
	    if (typeof val === "number") {
	        return val;
	    }
	    if (typeof val === "string") {
	        return _RotationParser2.default.parseAngle(val);
	    }
	    throw new Error("Passed argument \"" + val + "\" can't be parsed as angle.");
	}
	exports.default = Angle2DConverter;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(9);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Quaternion = __webpack_require__(20);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Utility class to parse the arguments of attributes.
	 */
	var RotationParser = function () {
	    function RotationParser() {
	        _classCallCheck(this, RotationParser);
	    }
	
	    _createClass(RotationParser, null, [{
	        key: "parseAngle",
	
	        /**
	         * Parse angle strings.
	         * "p" means Pi. Ex) 3/4 p
	         * "d" means degree. if this unit was specified, the argument will be parsed as degree. Ex) 90d
	         * @param input the string to parse.
	         * @returns {number} parsed angle in radians.
	         */
	        value: function parseAngle(input) {
	            var regex = /^ *(-?[\de+-.]*) *(?:\/ *([\de+-.]*))? *(p|prad|deg|d|r|rad)? *$/gm;
	            var result = regex.exec(input);
	            if (result == null) {
	                throw new Error("faild parse Angle string:'" + input + "'");
	            }
	            var numerator = parseFloat(result[1]);
	            if (result[2]) {
	                numerator /= parseFloat(result[2]);
	            }
	            var unit = result[3];
	            if (unit == null) {
	                unit = "d";
	            }
	            if (unit === "r" || unit === "rad") {
	                return numerator;
	            }
	            if (unit === "p" || unit === "prad") {
	                return numerator * Math.PI;
	            }
	            return numerator / 180 * Math.PI;
	        }
	        /**
	         * Parse angle string in 3D.
	         * "p" means Pi. Ex) 3/4 p
	         * "d" means degree. if this unit was specified, the argument will be parsed as degree. Ex) 90d
	         * "eular(x,y,z)" means rotation in eular. This means Z-X-Y rotation like Unity.
	         * "axis(angle,x,y,z)" means rotation around specified axis. This means angle radians will be rotated around the axis (x,y,z).
	         * This angle can be specified with the character "p" or "d".
	         * "x(angle)","y(angle)" or "z(angle)" means rotation around unit axis.
	         * This angle can be specified with the character "p" or "d".
	         * @param input the string to be parsed as angle in 3D.
	         * @returns {Quaternion} parsed rotation in Quaternion.
	         */
	
	    }, {
	        key: "parseRotation3D",
	        value: function parseRotation3D(input) {
	            var reg1 = /^ *(x|y|z) *\(([^\(\)]+)\) *$/gm;
	            var reg2 = /^ *axis *\(([^\(\),]+),([^\(\),]+),([^\(\),]+),([^\(\),]+)\) *$/gm;
	            var reg3 = /^ *([^\(\),]+),([^\(\),]+),([^\(\),]+) *$/gm;
	            var result = reg1.exec(input);
	            if (result) {
	                if (result[1] === "x") {
	                    return _Quaternion2.default.angleAxis(RotationParser.parseAngle(result[2]), _Vector2.default.XUnit);
	                }
	                if (result[1] === "y") {
	                    return _Quaternion2.default.angleAxis(RotationParser.parseAngle(result[2]), _Vector2.default.YUnit);
	                }
	                if (result[1] === "z") {
	                    return _Quaternion2.default.angleAxis(RotationParser.parseAngle(result[2]), _Vector2.default.ZUnit);
	                }
	            }
	            var res2 = reg2.exec(input);
	            if (res2) {
	                var rotation = RotationParser.parseAngle(res2[1]);
	                var x = parseFloat(res2[2]);
	                var y = parseFloat(res2[3]);
	                var z = parseFloat(res2[4]);
	                return _Quaternion2.default.angleAxis(rotation, new _Vector2.default(x, y, z));
	            }
	            var res3 = reg3.exec(input);
	            if (res3) {
	                return _Quaternion2.default.euler(RotationParser.parseAngle(res3[1]), RotationParser.parseAngle(res3[2]), RotationParser.parseAngle(res3[3]));
	            }
	            throw new Error("Unknown format for rotation3D:'" + input + "'");
	        }
	    }]);
	
	    return RotationParser;
	}();
	
	exports.default = RotationParser;

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function BooleanConverter(val) {
	    if (typeof val === "boolean") {
	        return val;
	    } else if (typeof val === "string") {
	        switch (val) {
	            case "true":
	                return true;
	            case "false":
	                return false;
	            default:
	                throw new Error("Invalid string " + val + " for parsing as boolean");
	        }
	    }
	    throw new Error("Unsupported type to be parsed as boolean");
	}
	exports.default = BooleanConverter;

/***/ },
/* 84 */
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Color = __webpack_require__(86);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _Color3 = __webpack_require__(71);
	
	var _Color4 = _interopRequireDefault(_Color3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Color3Converter(val) {
	    if (val instanceof _Color2.default) {
	        return val;
	    } else if (val instanceof _Color4.default) {
	        return new _Color2.default(val.R, val.G, val.B);
	    } else if (typeof val === "string") {
	        return _Color2.default.parse(val);
	    } else {
	        throw new Error(val + " can not be parsed as Color4.");
	    }
	}
	exports.default = Color3Converter;

/***/ },
/* 86 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Color3;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Color = __webpack_require__(86);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _Color3 = __webpack_require__(71);
	
	var _Color4 = _interopRequireDefault(_Color3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Color4Converter(val) {
	    if (val instanceof _Color4.default) {
	        return val;
	    } else if (val instanceof _Color2.default) {
	        return new _Color4.default(val.R, val.G, val.B, 1.0);
	    } else if (typeof val === "string") {
	        return _Color4.default.parse(val);
	    } else {
	        throw new Error(val + " can not be parsed as Color4.");
	    }
	}
	exports.default = Color4Converter;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Component = __webpack_require__(15);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _GomlNode = __webpack_require__(89);
	
	var _GomlNode2 = _interopRequireDefault(_GomlNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ComponentConverter(val) {
	    if (!this.declaration["target"]) {
	        throw new Error("Component converter require to be specified target");
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
	        return this.tree(val)(this.declaration["target"]).get(0, 0, 0);
	    }
	}
	exports.default = ComponentConverter;

/***/ },
/* 89 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.GomlNode;

/***/ },
/* 90 */
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
	}
	exports.default = EnumConverter;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Geometry = __webpack_require__(92);
	
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
/* 92 */
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
	    function Geometry(verticies, attribInfo, indicies, aabb) {
	        _classCallCheck(this, Geometry);
	
	        this.verticies = verticies;
	        this.attribInfo = attribInfo;
	        this.indicies = indicies;
	        this.aabb = aabb;
	        this._validateGLContext();
	        // check all buffers requested by attribute variables are all contained in verticies
	        for (var attrKey in attribInfo) {
	            if (typeof verticies[attribInfo[attrKey].bufferName] === "undefined") {
	                throw new Error("The buffer request by " + attribInfo[attrKey].bufferName + " is not contained in geometry.");
	            }
	        }
	    }
	
	    _createClass(Geometry, [{
	        key: "draw",
	        value: function draw(indexName, attribNames, program) {
	            var _this = this;
	
	            var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.MAX_VALUE;
	            var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
	            var targetIndex = this.indicies[indexName];
	            attribNames.forEach(function (name) {
	                var index = program.findAttributeLocation(name);
	                if (index < 0) {
	                    return;
	                }
	                var attribInfo = _this.attribInfo[name];
	                if (!attribInfo) {
	                    throw new Error("There is no such vertex buffer");
	                }
	                var buffer = _this.verticies[attribInfo.bufferName];
	                buffer.bind();
	                _this._gl.vertexAttribPointer(index, attribInfo.size, attribInfo.type, false, attribInfo.stride, attribInfo.offset);
	            });
	            targetIndex.index.bind();
	            this._gl.drawElements(targetIndex.topology, Math.min(targetIndex.count, count), targetIndex.type, Math.min(offset * targetIndex.byteSize + targetIndex.byteOffset, (targetIndex.count - 1) * targetIndex.byteSize));
	        }
	    }, {
	        key: "_validateGLContext",
	        value: function _validateGLContext() {
	            // Check for index buffers
	            for (var indexName in this.indicies) {
	                var index = this.indicies[indexName];
	                if (!this._gl) {
	                    this._gl = index.index.gl;
	                }
	                if (this._gl !== index.index.gl) {
	                    throw new Error("All index buffers should be initialized with same context");
	                }
	            }
	            // Check for vertex buffers
	            for (var vertexName in this.verticies) {
	                var vertex = this.verticies[vertexName];
	                if (this._gl !== vertex.gl) {
	                    throw new Error("All vertex buffers should be initialized with same context");
	                }
	            }
	        }
	    }]);
	
	    return Geometry;
	}();
	
	exports.default = Geometry;

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function MaterialConverter(val) {
	    if (typeof val === "string") {
	        var regex = /\s*new\s*\(\s*([a-zA-Z\d\-]+)\s*\)/;
	        var regexResult = void 0;
	        if (regexResult = regex.exec(val)) {
	            this.component[this.declaration["componentBoundTo"]] = null;
	            return this.companion.get("MaterialFactory").instanciate(regexResult[1]);
	        } else {
	            var mc = this.tree(val)("Material").get();
	            this.component[this.declaration["componentBoundTo"]] = mc;
	            return mc.materialPromise;
	        }
	    }
	}
	exports.default = MaterialConverter;

/***/ },
/* 94 */
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
/* 95 */
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
	    }
	    throw new Error("Unsupported input to convert into number!");
	}
	exports.default = NumberConverter;

/***/ },
/* 96 */
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _RotationParser = __webpack_require__(82);
	
	var _RotationParser2 = _interopRequireDefault(_RotationParser);
	
	var _Quaternion = __webpack_require__(20);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Rotation3Converter(val) {
	    if (val instanceof _Quaternion2.default) {
	        return val;
	    } else if (Array.isArray(val)) {
	        return new _Quaternion2.default([val[0], val[1], val[2], val[3]]);
	    }
	    return _RotationParser2.default.parseRotation3D(val);
	}
	exports.default = Rotation3Converter;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _TextureComponent = __webpack_require__(76);
	
	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);
	
	var _TextureReference = __webpack_require__(99);
	
	var _TextureReference2 = _interopRequireDefault(_TextureReference);
	
	var _Texture2D = __webpack_require__(25);
	
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
	}
	exports.default = TextureConverter;

/***/ },
/* 99 */
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(52);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Vector2Converter(val) {
	    if (val instanceof _Vector2.default) {
	        return val;
	    } else if (typeof val === "string") {
	        return _Vector2.default.parse(val);
	    } else if (typeof val === "number") {
	        return new _Vector2.default(val, val);
	    } else if (Array.isArray(val)) {
	        return new _Vector2.default(val[0], val[1]);
	    }
	}
	exports.default = Vector2Converter;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(9);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Vector3Converter(val) {
	    if (val instanceof _Vector2.default) {
	        return val;
	    } else if (typeof val === "string") {
	        return _Vector2.default.parse(val);
	    } else if (typeof val == "number") {
	        return new _Vector2.default(val, val, val);
	    } else if (Array.isArray(val)) {
	        return new _Vector2.default(val[0], val[1], val[2]);
	    }
	}
	exports.default = Vector3Converter;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(11);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Vector4Converter(val) {
	    if (val instanceof _Vector2.default) {
	        return val;
	    } else if (typeof val === "string") {
	        return _Vector2.default.parse(val);
	    } else if (typeof val === "number") {
	        return new _Vector2.default(val, val, val, val);
	    } else if (Array.isArray(val)) {
	        return new _Vector2.default(val[0], val[1], val[2], val[3]);
	    }
	}
	exports.default = Vector4Converter;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Rectangle = __webpack_require__(104);
	
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
/* 104 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Rectangle;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AABB = __webpack_require__(106);
	
	var _AABB2 = _interopRequireDefault(_AABB);
	
	var _Vector = __webpack_require__(9);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _GeometryUtility = __webpack_require__(107);
	
	var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);
	
	var _GeometryFactory = __webpack_require__(31);
	
	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);
	
	var _GeometryBuilder = __webpack_require__(108);
	
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
	                    indicies: {
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
	                    verticies: {
	                        main: {
	                            size: {
	                                position: 3,
	                                normal: 3,
	                                texCoord: 2
	                            },
	                            count: _GeometryUtility2.default.triangleSize(),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    position: regeneratorRuntime.mark(function position() {
	                                        return regeneratorRuntime.wrap(function position$(_context3) {
	                                            while (1) {
	                                                switch (_context3.prev = _context3.next) {
	                                                    case 0:
	                                                        return _context3.delegateYield(_GeometryUtility2.default.trianglePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context3.stop();
	                                                }
	                                            }
	                                        }, position, this);
	                                    }),
	                                    normal: regeneratorRuntime.mark(function normal() {
	                                        return regeneratorRuntime.wrap(function normal$(_context4) {
	                                            while (1) {
	                                                switch (_context4.prev = _context4.next) {
	                                                    case 0:
	                                                        return _context4.delegateYield(_GeometryUtility2.default.triangleNormal(_Vector2.default.ZUnit), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context4.stop();
	                                                }
	                                            }
	                                        }, normal, this);
	                                    }),
	                                    texCoord: regeneratorRuntime.mark(function texCoord() {
	                                        return regeneratorRuntime.wrap(function texCoord$(_context5) {
	                                            while (1) {
	                                                switch (_context5.prev = _context5.next) {
	                                                    case 0:
	                                                        return _context5.delegateYield(_GeometryUtility2.default.triangleTexCoord(), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context5.stop();
	                                                }
	                                            }
	                                        }, texCoord, this);
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
	                    indicies: {
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
	                    verticies: {
	                        main: {
	                            size: {
	                                position: 3,
	                                normal: 3,
	                                texCoord: 2
	                            },
	                            count: _GeometryUtility2.default.quadSize(),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    position: regeneratorRuntime.mark(function position() {
	                                        return regeneratorRuntime.wrap(function position$(_context8) {
	                                            while (1) {
	                                                switch (_context8.prev = _context8.next) {
	                                                    case 0:
	                                                        return _context8.delegateYield(_GeometryUtility2.default.quadPosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context8.stop();
	                                                }
	                                            }
	                                        }, position, this);
	                                    }),
	                                    normal: regeneratorRuntime.mark(function normal() {
	                                        return regeneratorRuntime.wrap(function normal$(_context9) {
	                                            while (1) {
	                                                switch (_context9.prev = _context9.next) {
	                                                    case 0:
	                                                        return _context9.delegateYield(_GeometryUtility2.default.quadNormal(_Vector2.default.ZUnit), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context9.stop();
	                                                }
	                                            }
	                                        }, normal, this);
	                                    }),
	                                    texCoord: regeneratorRuntime.mark(function texCoord() {
	                                        return regeneratorRuntime.wrap(function texCoord$(_context10) {
	                                            while (1) {
	                                                switch (_context10.prev = _context10.next) {
	                                                    case 0:
	                                                        return _context10.delegateYield(_GeometryUtility2.default.quadTexCoord(), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context10.stop();
	                                                }
	                                            }
	                                        }, texCoord, this);
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
	                    indicies: {
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
	                    verticies: {
	                        main: {
	                            size: {
	                                position: 3,
	                                normal: 3,
	                                texCoord: 2
	                            },
	                            count: _GeometryUtility2.default.cubeSize(),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    position: regeneratorRuntime.mark(function position() {
	                                        return regeneratorRuntime.wrap(function position$(_context13) {
	                                            while (1) {
	                                                switch (_context13.prev = _context13.next) {
	                                                    case 0:
	                                                        return _context13.delegateYield(_GeometryUtility2.default.cubePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis()), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context13.stop();
	                                                }
	                                            }
	                                        }, position, this);
	                                    }),
	                                    normal: regeneratorRuntime.mark(function normal() {
	                                        return regeneratorRuntime.wrap(function normal$(_context14) {
	                                            while (1) {
	                                                switch (_context14.prev = _context14.next) {
	                                                    case 0:
	                                                        return _context14.delegateYield(_GeometryUtility2.default.cubeNormal(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis()), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context14.stop();
	                                                }
	                                            }
	                                        }, normal, this);
	                                    }),
	                                    texCoord: regeneratorRuntime.mark(function texCoord() {
	                                        return regeneratorRuntime.wrap(function texCoord$(_context15) {
	                                            while (1) {
	                                                switch (_context15.prev = _context15.next) {
	                                                    case 0:
	                                                        return _context15.delegateYield(_GeometryUtility2.default.cubeTexCoord(), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context15.stop();
	                                                }
	                                            }
	                                        }, texCoord, this);
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
	                    defaultValue: 100
	                },
	                divHorizontal: {
	                    converter: "Number",
	                    defaultValue: 100
	                }
	            }, function (gl, attrs) {
	                var dH = attrs["divHorizontal"];
	                var dV = attrs["divVertical"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indicies: {
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
	                    verticies: {
	                        main: {
	                            size: {
	                                position: 3,
	                                normal: 3,
	                                texCoord: 2
	                            },
	                            count: _GeometryUtility2.default.sphereSize(dH, dV),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    position: regeneratorRuntime.mark(function position() {
	                                        return regeneratorRuntime.wrap(function position$(_context18) {
	                                            while (1) {
	                                                switch (_context18.prev = _context18.next) {
	                                                    case 0:
	                                                        return _context18.delegateYield(_GeometryUtility2.default.spherePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), dH, dV), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context18.stop();
	                                                }
	                                            }
	                                        }, position, this);
	                                    }),
	                                    normal: regeneratorRuntime.mark(function normal() {
	                                        return regeneratorRuntime.wrap(function normal$(_context19) {
	                                            while (1) {
	                                                switch (_context19.prev = _context19.next) {
	                                                    case 0:
	                                                        return _context19.delegateYield(_GeometryUtility2.default.sphereNormal(_Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), dH, dV), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context19.stop();
	                                                }
	                                            }
	                                        }, normal, this);
	                                    }),
	                                    texCoord: regeneratorRuntime.mark(function texCoord() {
	                                        return regeneratorRuntime.wrap(function texCoord$(_context20) {
	                                            while (1) {
	                                                switch (_context20.prev = _context20.next) {
	                                                    case 0:
	                                                        return _context20.delegateYield(_GeometryUtility2.default.sphereTexCoord(dH, dV), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context20.stop();
	                                                }
	                                            }
	                                        }, texCoord, this);
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
	                    defaultValue: 50
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indicies: {
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
	                    verticies: {
	                        main: {
	                            size: {
	                                position: 3,
	                                normal: 3,
	                                texCoord: 2
	                            },
	                            count: _GeometryUtility2.default.ellipseSize(div),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    position: regeneratorRuntime.mark(function position() {
	                                        return regeneratorRuntime.wrap(function position$(_context23) {
	                                            while (1) {
	                                                switch (_context23.prev = _context23.next) {
	                                                    case 0:
	                                                        return _context23.delegateYield(_GeometryUtility2.default.ellipsePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context23.stop();
	                                                }
	                                            }
	                                        }, position, this);
	                                    }),
	                                    normal: regeneratorRuntime.mark(function normal() {
	                                        return regeneratorRuntime.wrap(function normal$(_context24) {
	                                            while (1) {
	                                                switch (_context24.prev = _context24.next) {
	                                                    case 0:
	                                                        return _context24.delegateYield(_GeometryUtility2.default.ellipseNormal(_Vector2.default.ZUnit, div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context24.stop();
	                                                }
	                                            }
	                                        }, normal, this);
	                                    }),
	                                    texCoord: regeneratorRuntime.mark(function texCoord() {
	                                        return regeneratorRuntime.wrap(function texCoord$(_context25) {
	                                            while (1) {
	                                                switch (_context25.prev = _context25.next) {
	                                                    case 0:
	                                                        return _context25.delegateYield(_GeometryUtility2.default.ellipseTexCoord(div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context25.stop();
	                                                }
	                                            }
	                                        }, texCoord, this);
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
	                    defaultValue: 50
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indicies: {
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
	                    verticies: {
	                        main: {
	                            size: {
	                                position: 3,
	                                normal: 3,
	                                texCoord: 2
	                            },
	                            count: _GeometryUtility2.default.cylinderSize(div),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    position: regeneratorRuntime.mark(function position() {
	                                        return regeneratorRuntime.wrap(function position$(_context28) {
	                                            while (1) {
	                                                switch (_context28.prev = _context28.next) {
	                                                    case 0:
	                                                        return _context28.delegateYield(_GeometryUtility2.default.cylinderPosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context28.stop();
	                                                }
	                                            }
	                                        }, position, this);
	                                    }),
	                                    normal: regeneratorRuntime.mark(function normal() {
	                                        return regeneratorRuntime.wrap(function normal$(_context29) {
	                                            while (1) {
	                                                switch (_context29.prev = _context29.next) {
	                                                    case 0:
	                                                        return _context29.delegateYield(_GeometryUtility2.default.cylinderNormal(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context29.stop();
	                                                }
	                                            }
	                                        }, normal, this);
	                                    }),
	                                    texCoord: regeneratorRuntime.mark(function texCoord() {
	                                        return regeneratorRuntime.wrap(function texCoord$(_context30) {
	                                            while (1) {
	                                                switch (_context30.prev = _context30.next) {
	                                                    case 0:
	                                                        return _context30.delegateYield(_GeometryUtility2.default.cylinderTexCoord(div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context30.stop();
	                                                }
	                                            }
	                                        }, texCoord, this);
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
	                    defaultValue: 50
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indicies: {
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
	                    verticies: {
	                        main: {
	                            size: {
	                                position: 3,
	                                normal: 3,
	                                texCoord: 2
	                            },
	                            count: _GeometryUtility2.default.coneSize(div),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    position: regeneratorRuntime.mark(function position() {
	                                        return regeneratorRuntime.wrap(function position$(_context33) {
	                                            while (1) {
	                                                switch (_context33.prev = _context33.next) {
	                                                    case 0:
	                                                        return _context33.delegateYield(_GeometryUtility2.default.conePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context33.stop();
	                                                }
	                                            }
	                                        }, position, this);
	                                    }),
	                                    normal: regeneratorRuntime.mark(function normal() {
	                                        return regeneratorRuntime.wrap(function normal$(_context34) {
	                                            while (1) {
	                                                switch (_context34.prev = _context34.next) {
	                                                    case 0:
	                                                        return _context34.delegateYield(_GeometryUtility2.default.coneNormal(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, _Vector2.default.ZUnit.negateThis(), div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context34.stop();
	                                                }
	                                            }
	                                        }, normal, this);
	                                    }),
	                                    texCoord: regeneratorRuntime.mark(function texCoord() {
	                                        return regeneratorRuntime.wrap(function texCoord$(_context35) {
	                                            while (1) {
	                                                switch (_context35.prev = _context35.next) {
	                                                    case 0:
	                                                        return _context35.delegateYield(_GeometryUtility2.default.coneTexCoord(div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context35.stop();
	                                                }
	                                            }
	                                        }, texCoord, this);
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
	                    defaultValue: 10
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                return _GeometryBuilder2.default.build(gl, {
	                    indicies: {
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
	                    verticies: {
	                        main: {
	                            size: {
	                                position: 3,
	                                normal: 3,
	                                texCoord: 2
	                            },
	                            count: _GeometryUtility2.default.planeSize(div),
	                            getGenerators: function getGenerators() {
	                                return {
	                                    position: regeneratorRuntime.mark(function position() {
	                                        return regeneratorRuntime.wrap(function position$(_context38) {
	                                            while (1) {
	                                                switch (_context38.prev = _context38.next) {
	                                                    case 0:
	                                                        return _context38.delegateYield(_GeometryUtility2.default.planePosition(_Vector2.default.Zero, _Vector2.default.YUnit, _Vector2.default.XUnit, div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context38.stop();
	                                                }
	                                            }
	                                        }, position, this);
	                                    }),
	                                    normal: regeneratorRuntime.mark(function normal() {
	                                        return regeneratorRuntime.wrap(function normal$(_context39) {
	                                            while (1) {
	                                                switch (_context39.prev = _context39.next) {
	                                                    case 0:
	                                                        return _context39.delegateYield(_GeometryUtility2.default.planeNormal(_Vector2.default.ZUnit, div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context39.stop();
	                                                }
	                                            }
	                                        }, normal, this);
	                                    }),
	                                    texCoord: regeneratorRuntime.mark(function texCoord() {
	                                        return regeneratorRuntime.wrap(function texCoord$(_context40) {
	                                            while (1) {
	                                                switch (_context40.prev = _context40.next) {
	                                                    case 0:
	                                                        return _context40.delegateYield(_GeometryUtility2.default.planeTexCoord(div), "t0", 1);
	
	                                                    case 1:
	                                                    case "end":
	                                                        return _context40.stop();
	                                                }
	                                            }
	                                        }, texCoord, this);
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
/* 106 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.AABB;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(9);
	
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
	         * @param  {IterableIterator<number>} indicies [description]
	         * @return {IterableIterator<number>}          [description]
	         */
	        value: regeneratorRuntime.mark(function linesFromTriangles(indicies) {
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
	                            _iterator = indicies[Symbol.iterator]();
	
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(9);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _AABB = __webpack_require__(106);
	
	var _AABB2 = _interopRequireDefault(_AABB);
	
	var _Buffer = __webpack_require__(109);
	
	var _Buffer2 = _interopRequireDefault(_Buffer);
	
	var _Geometry = __webpack_require__(92);
	
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
	            var buffers = {};
	            var attribs = {};
	            var aabb = info.aabb;
	            var needConstructAABB = !aabb;
	            if (needConstructAABB) {
	                aabb = new _AABB2.default();
	            }
	            for (var bufferKey in info.verticies) {
	                var byteWidth = 4;
	                var buffer = info.verticies[bufferKey];
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
	                    if (_attribKey2 === "position") {
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
	            return new _Geometry2.default(buffers, attribs, this._generateIndicies(gl, info.indicies), aabb);
	        }
	    }, {
	        key: "_generateIndicies",
	        value: function _generateIndicies(gl, indexGenerator) {
	            var indexMap = {};
	            for (var indexName in indexGenerator) {
	                var indicies = [];
	                var generatorInfo = indexGenerator[indexName];
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = generatorInfo.generator()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var variable = _step.value;
	
	                        indicies.push(variable);
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
	
	                var bufferType = this._getIndexType(indicies.length);
	                var buffer = new _Buffer2.default(gl, WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
	                buffer.update(new bufferType.ctor(indicies));
	                indexMap[indexName] = {
	                    count: indicies.length,
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _ResourceBase2 = __webpack_require__(26);
	
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MaterialFactory = __webpack_require__(44);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _Unlit = __webpack_require__(111);
	
	var _Unlit2 = _interopRequireDefault(_Unlit);
	
	var _UnlitColor = __webpack_require__(112);
	
	var _UnlitColor2 = _interopRequireDefault(_UnlitColor);
	
	var _UnlitTextured = __webpack_require__(113);
	
	var _UnlitTextured2 = _interopRequireDefault(_UnlitTextured);
	
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
	            _MaterialFactory2.default.addSORTMaterial("unlit-texture", _UnlitTextured2.default);
	            _MaterialFactory2.default.addSORTMaterial("unlit-color", _UnlitColor2.default);
	        }
	    }]);
	
	    return DefaultMaterial;
	}();
	
	exports.default = DefaultMaterial;

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "@Pass\n@BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\nFS_PREC(mediump,float)\nvarying vec2 vTexCoord;\n#ifdef VS\nattribute vec3 position;\nattribute vec2 texCoord;\nuniform mat4 _matPVM;\nvoid main()\n{\n  gl_Position = _matPVM * vec4(position,1.0);\n  vTexCoord = texCoord;\n}\n#endif\n#ifdef FS\n@{type:\"color\",default:\"white\"}\nuniform vec4 color;\n@{usedFlag:\"_textureUsed\"}\nuniform sampler2D texture;\nuniform bool _textureUsed;\nvoid main(void)\n{\n  if(_textureUsed){\n    gl_FragColor = color * texture2D(texture,vTexCoord);\n  }else{\n    gl_FragColor = color;\n }\n}\n#endif\n"

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "@Pass\nFS_PREC(mediump,float)\nvarying vec2 vTexCoord;\n#ifdef VS\nattribute vec3 position;\nattribute vec2 texCoord;\nuniform mat4 _matPVM;\nvoid main()\n{\n  gl_Position = _matPVM * vec4(position,1.0);\n  vTexCoord = texCoord;\n}\n#endif\n#ifdef FS\n@{type:\"color\",default:\"white\"}\nuniform vec4 color;\nvoid main(void)\n{\n    gl_FragColor = color;\n}\n#endif\n"

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "@Pass\nFS_PREC(mediump,float)\nvarying vec2 vTexCoord;\n#ifdef VS\nattribute vec3 position;\nattribute vec2 texCoord;\nuniform mat4 _matPVM;\nvoid main()\n{\n  gl_Position = _matPVM * vec4(position,1.0);\n  vTexCoord = texCoord;\n}\n#endif\n#ifdef FS\nuniform sampler2D texture;\nvoid main(void)\n{\n  gl_FragColor = texture2D(texture,vTexCoord);\n}\n#endif\n"

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _DefaultMaterial = __webpack_require__(110);
	
	var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);
	
	var _DefaultPrimitives = __webpack_require__(105);
	
	var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);
	
	var _grimoirejs = __webpack_require__(14);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _AssetLoadingManagerComponent = __webpack_require__(13);
	
	var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);
	
	var _CameraComponent = __webpack_require__(17);
	
	var _CameraComponent2 = _interopRequireDefault(_CameraComponent);
	
	var _CanvasInitializerComponent = __webpack_require__(23);
	
	var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);
	
	var _FullscreenComponent = __webpack_require__(29);
	
	var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);
	
	var _GeometryComponent = __webpack_require__(30);
	
	var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);
	
	var _GeometryRegistoryComponent = __webpack_require__(32);
	
	var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);
	
	var _HTMLBinderComponent = __webpack_require__(33);
	
	var _HTMLBinderComponent2 = _interopRequireDefault(_HTMLBinderComponent);
	
	var _LoopManagerComponent = __webpack_require__(34);
	
	var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);
	
	var _MaterialComponent = __webpack_require__(35);
	
	var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);
	
	var _MaterialContainerComponent = __webpack_require__(41);
	
	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);
	
	var _MaterialImporterComponent = __webpack_require__(43);
	
	var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);
	
	var _MaterialManagerComponent = __webpack_require__(63);
	
	var _MaterialManagerComponent2 = _interopRequireDefault(_MaterialManagerComponent);
	
	var _MeshRendererComponent = __webpack_require__(64);
	
	var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);
	
	var _MouseCameraControlComponent = __webpack_require__(65);
	
	var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);
	
	var _RenderBufferComponent = __webpack_require__(66);
	
	var _RenderBufferComponent2 = _interopRequireDefault(_RenderBufferComponent);
	
	var _RendererComponent = __webpack_require__(69);
	
	var _RendererComponent2 = _interopRequireDefault(_RendererComponent);
	
	var _RendererManagerComponent = __webpack_require__(70);
	
	var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);
	
	var _RenderQuadComponent = __webpack_require__(72);
	
	var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);
	
	var _RenderSceneComponent = __webpack_require__(74);
	
	var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);
	
	var _SceneComponent = __webpack_require__(21);
	
	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);
	
	var _TextureBufferComponent = __webpack_require__(75);
	
	var _TextureBufferComponent2 = _interopRequireDefault(_TextureBufferComponent);
	
	var _TextureComponent = __webpack_require__(76);
	
	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);
	
	var _TransformComponent = __webpack_require__(19);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Angle2DConverter = __webpack_require__(81);
	
	var _Angle2DConverter2 = _interopRequireDefault(_Angle2DConverter);
	
	var _BooleanConverter = __webpack_require__(83);
	
	var _BooleanConverter2 = _interopRequireDefault(_BooleanConverter);
	
	var _CanvasSizeConverter = __webpack_require__(84);
	
	var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);
	
	var _Color3Converter = __webpack_require__(85);
	
	var _Color3Converter2 = _interopRequireDefault(_Color3Converter);
	
	var _Color4Converter = __webpack_require__(87);
	
	var _Color4Converter2 = _interopRequireDefault(_Color4Converter);
	
	var _ComponentConverter = __webpack_require__(88);
	
	var _ComponentConverter2 = _interopRequireDefault(_ComponentConverter);
	
	var _EnumConverter = __webpack_require__(90);
	
	var _EnumConverter2 = _interopRequireDefault(_EnumConverter);
	
	var _GeometryConverter = __webpack_require__(91);
	
	var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);
	
	var _MaterialConverter = __webpack_require__(93);
	
	var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);
	
	var _TextureConverter = __webpack_require__(98);
	
	var _TextureConverter2 = _interopRequireDefault(_TextureConverter);
	
	var _NumberArrayConverter = __webpack_require__(94);
	
	var _NumberArrayConverter2 = _interopRequireDefault(_NumberArrayConverter);
	
	var _NumberConverter = __webpack_require__(95);
	
	var _NumberConverter2 = _interopRequireDefault(_NumberConverter);
	
	var _ObjectConverter = __webpack_require__(96);
	
	var _ObjectConverter2 = _interopRequireDefault(_ObjectConverter);
	
	var _Rotation3Converter = __webpack_require__(97);
	
	var _Rotation3Converter2 = _interopRequireDefault(_Rotation3Converter);
	
	var _Vector2Converter = __webpack_require__(100);
	
	var _Vector2Converter2 = _interopRequireDefault(_Vector2Converter);
	
	var _Vector3Converter = __webpack_require__(101);
	
	var _Vector3Converter2 = _interopRequireDefault(_Vector3Converter);
	
	var _Vector4Converter = __webpack_require__(102);
	
	var _Vector4Converter2 = _interopRequireDefault(_Vector4Converter);
	
	var _ViewportConverter = __webpack_require__(103);
	
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
	                            _grimoirejs2.default.registerConverter(_$ns("Angle2D"), _Angle2DConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Boolean"), _BooleanConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("CanvasSize"), _CanvasSizeConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Color3"), _Color3Converter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Color4"), _Color4Converter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Component"), _ComponentConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Enum"), _EnumConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Geometry"), _GeometryConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Material"), _MaterialConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Texture"), _TextureConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("NumberArray"), _NumberArrayConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Number"), _NumberConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Object"), _ObjectConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Rotation3"), _Rotation3Converter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Texture2D"), _TextureConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Vector2"), _Vector2Converter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Vector3"), _Vector3Converter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Vector4"), _Vector4Converter2.default);
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
	
	                        case 60:
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