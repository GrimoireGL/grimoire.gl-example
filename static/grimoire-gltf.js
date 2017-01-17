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
	
	var _Accessor = __webpack_require__(1);
	
	var _Accessor2 = _interopRequireDefault(_Accessor);
	
	var _Animation = __webpack_require__(5);
	
	var _Animation2 = _interopRequireDefault(_Animation);
	
	var _Interpolators = __webpack_require__(6);
	
	var _Interpolators2 = _interopRequireDefault(_Interpolators);
	
	var _GLTFAnimationComponent = __webpack_require__(8);
	
	var _GLTFAnimationComponent2 = _interopRequireDefault(_GLTFAnimationComponent);
	
	var _GLTFJointComponent = __webpack_require__(11);
	
	var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);
	
	var _GLTFModelComponent = __webpack_require__(13);
	
	var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);
	
	var _ConstantConverter = __webpack_require__(2);
	
	var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);
	
	var _GLTFMaterialFactory = __webpack_require__(26);
	
	var _GLTFMaterialFactory2 = _interopRequireDefault(_GLTFMaterialFactory);
	
	var _MaterialParser = __webpack_require__(18);
	
	var _MaterialParser2 = _interopRequireDefault(_MaterialParser);
	
	var _Parser = __webpack_require__(14);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _ResourceResolver = __webpack_require__(15);
	
	var _ResourceResolver2 = _interopRequireDefault(_ResourceResolver);
	
	var _main = __webpack_require__(27);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __VERSION__ = "1.8.0-beta1";
	var __NAME__ = "grimoirejs-gltf";
	
	var __EXPOSE__ = {
	    "Accessor": {
	        "Accessor": _Accessor2.default
	    },
	    "Animation": {
	        "Animation": _Animation2.default,
	        "Interpolators": _Interpolators2.default
	    },
	    "Components": {
	        "GLTFAnimationComponent": _GLTFAnimationComponent2.default,
	        "GLTFJointComponent": _GLTFJointComponent2.default,
	        "GLTFModelComponent": _GLTFModelComponent2.default
	    },
	    "Parser": {
	        "ConstantConverter": _ConstantConverter2.default,
	        "GLTFMaterialFactory": _GLTFMaterialFactory2.default,
	        "MaterialParser": _MaterialParser2.default,
	        "Parser": _Parser2.default
	    },
	    "Util": {
	        "ResourceResolver": _ResourceResolver2.default
	    }
	};
	var __BASE__ = (0, _main2.default)();
	Object.assign(__EXPOSE__, {
	    __VERSION__: __VERSION__,
	    __NAME__: __NAME__
	});
	Object.assign(__BASE__ || {}, __EXPOSE__);
	window["GrimoireJS"].lib.gltf = __EXPOSE__;
	exports.default = __BASE__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ConstantConverter = __webpack_require__(2);
	
	var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The accessor class to be used for fetching animation frames
	 */
	var Accessor = function () {
	    function Accessor(buffer, count, componentType, elementSize, byteOffset, byteStride) {
	        _classCallCheck(this, Accessor);
	
	        this.buffer = buffer;
	        this.count = count;
	        this.componentType = componentType;
	        this.elementSize = elementSize;
	        this.byteOffset = byteOffset;
	        this.byteStride = byteStride;
	        this._dView = new DataView(buffer.buffer, buffer.byteOffset + byteOffset);
	        this._elementByteSize = _ConstantConverter2.default.asByteSize(componentType);
	        if (byteStride === 0) {
	            this.byteStride = this.elementSize * this._elementByteSize;
	        }
	    }
	
	    _createClass(Accessor, [{
	        key: "getByIndex",
	        value: function getByIndex(index) {
	            if (index < 0 || index >= this.count) {
	                return null;
	            }
	            var res = new Array(this.elementSize);
	            for (var i = 0; i < this.elementSize; i++) {
	                res[i] = this._getSingleByIndex(index, i);
	            }
	            return res;
	        }
	    }, {
	        key: "_getSingleByIndex",
	        value: function _getSingleByIndex(index, elementIndex) {
	            switch (this.componentType) {
	                case WebGLRenderingContext.FLOAT:
	                    return this._dView.getFloat32(index * this.byteStride + this._elementByteSize * elementIndex, true);
	                default:
	                    throw new Error("Unsupported element type");
	            }
	        }
	    }]);
	
	    return Accessor;
	}();
	
	exports.default = Accessor;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Color = __webpack_require__(3);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _Color3 = __webpack_require__(4);
	
	var _Color4 = _interopRequireDefault(_Color3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GLTFConstantConvert = function () {
	    function GLTFConstantConvert() {
	        _classCallCheck(this, GLTFConstantConvert);
	    }
	
	    _createClass(GLTFConstantConvert, null, [{
	        key: "asColorValue",
	        value: function asColorValue(a) {
	            if (a.length === 3) {
	                return new _Color2.default(a[0], a[1], a[2]);
	            } else {
	                return new _Color4.default(a[0], a[1], a[2], a[3]);
	            }
	        }
	    }, {
	        key: "asVectorSize",
	        value: function asVectorSize(type) {
	            switch (type) {
	                case "SCALAR":
	                    return 1;
	                case "VEC2":
	                    return 2;
	                case "VEC3":
	                    return 3;
	                case "VEC4":
	                case "MAT2":
	                    return 4;
	                case "MAT3":
	                    return 9;
	                case "MAT4":
	                    return 16;
	                default:
	                    throw new Error("Invalid vectorSize");
	            }
	        }
	    }, {
	        key: "asByteSize",
	        value: function asByteSize(componentType) {
	            switch (componentType) {
	                case WebGLRenderingContext.UNSIGNED_BYTE:
	                case WebGLRenderingContext.BYTE:
	                    return 1;
	                case WebGLRenderingContext.UNSIGNED_SHORT:
	                case WebGLRenderingContext.SHORT:
	                    return 2;
	                case WebGLRenderingContext.UNSIGNED_INT:
	                case WebGLRenderingContext.INT:
	                case WebGLRenderingContext.FLOAT:
	                    return 4;
	                default:
	                    throw new Error("Unknown size!");
	            }
	        }
	    }, {
	        key: "elementTypeToTypedArray",
	        value: function elementTypeToTypedArray(type) {
	            switch (type) {
	                case WebGLRenderingContext.UNSIGNED_BYTE:
	                    return Uint8Array;
	                case WebGLRenderingContext.BYTE:
	                    return Int8Array;
	                case WebGLRenderingContext.UNSIGNED_SHORT:
	                    return Uint16Array;
	                case WebGLRenderingContext.SHORT:
	                    return Int16Array;
	                case WebGLRenderingContext.UNSIGNED_INT:
	                    return Uint32Array;
	                case WebGLRenderingContext.INT:
	                    return Int32Array;
	                case WebGLRenderingContext.FLOAT:
	                    return Float32Array;
	                default:
	                    throw new Error("Unsupported");
	            }
	        }
	    }, {
	        key: "indexCountToBufferInfo",
	        value: function indexCountToBufferInfo(count) {
	            if (count < 256) {
	                return {
	                    elementType: WebGLRenderingContext.UNSIGNED_BYTE,
	                    byteSize: 1,
	                    ctor: Uint8Array
	                };
	            } else if (count < 65536) {
	                return {
	                    elementType: WebGLRenderingContext.UNSIGNED_SHORT,
	                    byteSize: 2,
	                    ctor: Uint16Array
	                };
	            } else {
	                return {
	                    elementType: WebGLRenderingContext.UNSIGNED_INT,
	                    byteSize: 4,
	                    ctor: Uint32Array
	                };
	            }
	        }
	    }]);
	
	    return GLTFConstantConvert;
	}();
	
	exports.default = GLTFConstantConvert;

/***/ },
/* 3 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Color3;

/***/ },
/* 4 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Color4;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Interpolators = __webpack_require__(6);
	
	var _Interpolators2 = _interopRequireDefault(_Interpolators);
	
	var _ConstantConverter = __webpack_require__(2);
	
	var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);
	
	var _Accessor = __webpack_require__(1);
	
	var _Accessor2 = _interopRequireDefault(_Accessor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Animator = function () {
	    function Animator(tf, animationKey, _buffers) {
	        _classCallCheck(this, Animator);
	
	        this.tf = tf;
	        this.animationKey = animationKey;
	        this._buffers = _buffers;
	        this.accessors = {};
	        this.timeLength = 0;
	        this.targetNodes = [];
	        this._animationData = tf.animations[animationKey];
	        var accessors = {};
	        for (var key in this._animationData.parameters) {
	            var ac = tf.accessors[this._animationData.parameters[key]];
	            this.accessors[key] = new _Accessor2.default(_buffers[ac.bufferView], ac.count, ac.componentType, _ConstantConverter2.default.asVectorSize(ac.type), ac.byteOffset || 0, ac.byteStride || 0);
	        }
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = this._animationData.channels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var channel = _step.value;
	
	                var sampler = this._animationData.samplers[channel.sampler];
	                var input = this.accessors[sampler.input];
	                this.timeLength = Math.max(this.timeLength, input.getByIndex(input.count - 1)[0]);
	                this.targetNodes.push(channel.target.id);
	                if (channel.target.path === "rotation" && this._animationData.samplers[channel.sampler].interpolation === "LINEAR") {
	                    this._animationData.samplers[channel.sampler].interpolation = "SPHERICAL";
	                }
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
	
	    _createClass(Animator, [{
	        key: "processCurrentFrame",
	        value: function processCurrentFrame(time, processor) {
	            for (var i = 0; i < this._animationData.channels.length; i++) {
	                var channel = this._animationData.channels[i];
	                var v = this._getBySampler(channel.sampler, time);
	                processor(channel.target.id, channel.target.path, v);
	            }
	        }
	    }, {
	        key: "_getBySampler",
	        value: function _getBySampler(samplerName, t) {
	            var sampler = this._animationData.samplers[samplerName];
	            var inputAccessor = this.accessors[sampler.input];
	            var outputAccessor = this.accessors[sampler.output];
	            var i = 0;
	            for (i = 0; i < inputAccessor.count; i++) {
	                var nt = inputAccessor.getByIndex(i)[0];
	                if (nt > t) {
	                    return this._complementFrame(t, inputAccessor.getByIndex(i - 1), inputAccessor.getByIndex(i), outputAccessor.getByIndex(i - 1), outputAccessor.getByIndex(i), sampler.interpolation);
	                }
	            }
	            return this._complementFrame(t, inputAccessor.getByIndex(i - 1), null, outputAccessor.getByIndex(i - 1), null, sampler.interpolation);
	        }
	    }, {
	        key: "_complementFrame",
	        value: function _complementFrame(t, t1, t2, v1, v2, interpolation) {
	            if (!v1) {
	                return v2;
	            }
	            if (!v2) {
	                return v1;
	            }
	            var delta = (t2[0] - t) / (t2[0] - t1[0]); // TODO interpolator?
	            return _Interpolators2.default[interpolation](delta, v1, v2);
	        }
	    }]);
	
	    return Animator;
	}();
	
	exports.default = Animator;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _GLM = __webpack_require__(7);
	
	var _GLM2 = _interopRequireDefault(_GLM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var quat = _GLM2.default.quat;
	exports.default = {
	    LINEAR: function LINEAR(t, v1, v2) {
	        var res = new Array(v1.length);
	        for (var i = 0; i < v1.length; i++) {
	            res[i] = v1[i] + (v2[i] - v1[i]) * t;
	        }
	        return res;
	    },
	    SPHERICAL: function SPHERICAL(t, v1, v2) {
	        var res = new Array(v1.length);
	        quat.slerp(res, v1, v2, t);
	        return res;
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.GLM;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TransformComponent = __webpack_require__(9);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(10);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GLTFAnimationComponent = function (_Component) {
	    _inherits(GLTFAnimationComponent, _Component);
	
	    function GLTFAnimationComponent() {
	        _classCallCheck(this, GLTFAnimationComponent);
	
	        return _possibleConstructorReturn(this, (GLTFAnimationComponent.__proto__ || Object.getPrototypeOf(GLTFAnimationComponent)).apply(this, arguments));
	    }
	
	    _createClass(GLTFAnimationComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            this._startTime = new Date().getTime();
	            this._animation = this.getAttribute("animation");
	        }
	    }, {
	        key: "$update",
	        value: function $update() {
	            var _this2 = this;
	
	            if (!this._targetTransforms) {
	                this._targetTransforms = {};
	                var targets = this._animation.targetNodes;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var target = _step.value;
	
	                        var nodes = this.node.parent.parent.parent.getChildrenByClass(target);
	                        if (nodes.length > 0) {
	                            this._targetTransforms[target] = nodes[0].getComponent(_TransformComponent2.default);
	                        }
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
	            var t = (new Date().getTime() - this._startTime) / 1000;
	            this._animation.processCurrentFrame(t % this._animation.timeLength, function (id, path, v) {
	                var transform = _this2._targetTransforms[id];
	                if (!transform) {
	                    return;
	                }
	                switch (path) {
	                    case "translation":
	                        transform.localPosition.rawElements = v;
	                        break;
	                    case "rotation":
	                        transform.localRotation.rawElements = v;
	                        break;
	                    case "scale":
	                        transform.localScale.rawElements = v;
	                }
	            });
	            for (var tr in this._targetTransforms) {
	                this._targetTransforms[tr].updateTransform();
	            }
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {}
	    }]);
	
	    return GLTFAnimationComponent;
	}(_Component3.default);
	
	exports.default = GLTFAnimationComponent;
	
	GLTFAnimationComponent.attributes = {
	    play: {
	        converter: "Boolean",
	        default: false
	    },
	    animation: {
	        converter: "Object",
	        default: null
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Components.TransformComponent;

/***/ },
/* 10 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.Component;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Matrix = __webpack_require__(12);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _TransformComponent = __webpack_require__(9);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(10);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GLTFJointComponent = function (_Component) {
	    _inherits(GLTFJointComponent, _Component);
	
	    function GLTFJointComponent() {
	        _classCallCheck(this, GLTFJointComponent);
	
	        return _possibleConstructorReturn(this, (GLTFJointComponent.__proto__ || Object.getPrototypeOf(GLTFJointComponent)).apply(this, arguments));
	    }
	
	    _createClass(GLTFJointComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            this._transform = this.node.getComponent(_TransformComponent2.default);
	            this._skeletonTransform = this.getAttribute("skeletonTransform");
	            var skinInfo = this.getAttribute("skinInfo");
	            this._poseIndex = skinInfo.jointNames.indexOf(this.getAttribute("jointName"));
	            this._jointMatrices = this.getAttribute("jointMatrices");
	            this._bindShapeMatrix = skinInfo.bindShapeMatrix;
	            this._invBindMatrix = new _Matrix2.default(skinInfo.inverseBindMatrices.getByIndex(this._poseIndex));
	        }
	    }, {
	        key: "$update",
	        value: function $update() {
	            var poseMat = _Matrix2.default.inverse(this._skeletonTransform.globalTransform).multiplyWith(this._transform.globalTransform).multiplyWith(this._invBindMatrix).multiplyWith(this._bindShapeMatrix);
	            for (var i = 0; i < 16; i++) {
	                this._jointMatrices[this._poseIndex * 16 + i] = poseMat.rawElements[i];
	            }
	        }
	    }]);
	
	    return GLTFJointComponent;
	}(_Component3.default);
	
	exports.default = GLTFJointComponent;
	
	GLTFJointComponent.attributes = {
	    skinInfo: {
	        converter: "Object",
	        default: null
	    },
	    jointName: {
	        converter: "String",
	        default: null
	    },
	    skeletonTransform: {
	        converter: "Object",
	        default: null
	    },
	    jointMatrices: {
	        converter: "Object",
	        default: null
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TransformComponent = __webpack_require__(9);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Matrix = __webpack_require__(12);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _Component2 = __webpack_require__(10);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Parser = __webpack_require__(14);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GLTFModelComponent = function (_Component) {
	    _inherits(GLTFModelComponent, _Component);
	
	    function GLTFModelComponent() {
	        _classCallCheck(this, GLTFModelComponent);
	
	        return _possibleConstructorReturn(this, (GLTFModelComponent.__proto__ || Object.getPrototypeOf(GLTFModelComponent)).apply(this, arguments));
	    }
	
	    _createClass(GLTFModelComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var _this2 = this;
	
	            var src = this.getAttribute("src");
	            if (src) {
	                var gl = this.companion.get("gl");
	                _Parser2.default.parseFromURL(gl, src).then(function (data) {
	                    _this2._parsedData = data;
	                    _this2._populateAssets(data);
	                    _this2._populateScene(data);
	                });
	            }
	        }
	    }, {
	        key: "_populateScene",
	        value: function _populateScene(data) {
	            var sceneName = this.getAttribute("scene");
	            if (!sceneName) {
	                sceneName = data.tf.scene;
	            }
	            var sceneNodes = data.tf.scenes[sceneName];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = sceneNodes.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var nodeName = _step.value;
	
	                    this._populateNode(data, nodeName, this.node);
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
	        key: "_populateAssets",
	        value: function _populateAssets(data) {
	            this._assetRoot = this.node.addChildByName("gltf-assets", {});
	            for (var key in data.animations) {
	                this._assetRoot.addChildByName("gltf-animation", {
	                    animation: data.animations[key]
	                });
	            }
	        }
	    }, {
	        key: "_populateMaterial",
	        value: function _populateMaterial(data, materialName, skinName) {
	            var query = skinName ? "gltf-" + materialName + "-" + skinName : "gltf-" + materialName;
	            var matNodes = this.node.getChildrenByClass(query);
	            if (matNodes.length === 0) {
	                var mat = this._assetRoot.addChildByName("material", Object.assign({
	                    boneMatrices: skinName ? data.skins[skinName].jointMatrices : undefined,
	                    boneCount: skinName ? data.skins[skinName].jointNames.length : undefined
	                }, data.materials[materialName]));
	                var className = data.materials[materialName]["class"];
	                if (!!skinName) {
	                    className += " " + query;
	                }
	                mat.element.className = className;
	            }
	            return "." + query;
	        }
	    }, {
	        key: "_populateNode",
	        value: function _populateNode(data, nodeName, parentNode) {
	            var node = data.tf.nodes[nodeName];
	            if (node.skin) {
	                // adjust skin to node
	                parentNode = parentNode.addChildByName("object", {});
	            }
	            var gomlNode = parentNode.addChildByName("object", {});
	            gomlNode.element.className = nodeName;
	            if (node.meshes !== void 0) {
	                for (var i = 0; i < node.meshes.length; i++) {
	                    var mesh = data.meshes[node.meshes[i]];
	                    for (var j = 0; j < mesh.length; j++) {
	                        var matquery = this._populateMaterial(data, data.tf.meshes[node.meshes[i]].primitives[j].material, node.skin);
	                        gomlNode.addChildByName("gltf-mesh", {
	                            geometry: mesh[j],
	                            material: matquery
	                        });
	                    }
	                }
	            }
	            this._applyTransform(node, gomlNode);
	            if (node.children) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;
	
	                try {
	                    for (var _iterator2 = node.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var chNodeName = _step2.value;
	
	                        this._populateNode(data, chNodeName, gomlNode);
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
	            if (node.skeletons && node.skin) {
	                for (var _i = 0; _i < node.skeletons.length; _i++) {
	                    var jointNode = this.node.getChildrenByClass(node.skeletons[_i]);
	                    this._injectJoint(data, jointNode[0], node.skeletons[_i], gomlNode.getComponent(_TransformComponent2.default), node.skin);
	                }
	            }
	        }
	    }, {
	        key: "_injectJoint",
	        value: function _injectJoint(data, gomlNode, nodeName, skeletonTransform, skinName) {
	            gomlNode.addComponent("GLTFJoint", {
	                skinInfo: data.skins[skinName],
	                jointName: data.tf.nodes[nodeName].jointName,
	                skeletonTransform: skeletonTransform,
	                jointMatrices: data.skins[skinName].jointMatrices
	            });
	            if (data.tf.nodes[nodeName].children) {
	                var node = data.tf.nodes[nodeName];
	                for (var i = 0; i < node.children.length; i++) {
	                    var jointNode = this.node.getChildrenByClass(node.children[i]);
	                    this._injectJoint(data, jointNode[0], node.children[i], skeletonTransform, skinName);
	                }
	            }
	        }
	    }, {
	        key: "_applyTransform",
	        value: function _applyTransform(node, gomlNode) {
	            if (node.translation) {
	                gomlNode.setAttribute("position", node.translation);
	            }
	            if (node.scale) {
	                gomlNode.setAttribute("scale", node.scale);
	            }
	            if (node.rotation) {
	                gomlNode.setAttribute("rotation", node.rotation);
	            }
	            if (node.matrix) {
	                var mat = new _Matrix2.default(node.matrix);
	                gomlNode.setAttribute("rawMatrix", mat);
	            }
	        }
	    }]);
	
	    return GLTFModelComponent;
	}(_Component3.default);
	
	exports.default = GLTFModelComponent;
	
	GLTFModelComponent.componentName = "GLTFModelComponent";
	GLTFModelComponent.attributes = {
	    src: {
	        converter: "String",
	        default: null
	    },
	    scene: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ResourceResolver = __webpack_require__(15);
	
	var _ResourceResolver2 = _interopRequireDefault(_ResourceResolver);
	
	var _Accessor = __webpack_require__(1);
	
	var _Accessor2 = _interopRequireDefault(_Accessor);
	
	var _Matrix = __webpack_require__(12);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _Animation = __webpack_require__(5);
	
	var _Animation2 = _interopRequireDefault(_Animation);
	
	var _MaterialParser = __webpack_require__(18);
	
	var _MaterialParser2 = _interopRequireDefault(_MaterialParser);
	
	var _ConstantConverter = __webpack_require__(2);
	
	var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);
	
	var _Vector = __webpack_require__(21);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _AABB = __webpack_require__(22);
	
	var _AABB2 = _interopRequireDefault(_AABB);
	
	var _TextFileResolver = __webpack_require__(16);
	
	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);
	
	var _Buffer = __webpack_require__(23);
	
	var _Buffer2 = _interopRequireDefault(_Buffer);
	
	var _Geometry = __webpack_require__(24);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	var _Texture2D = __webpack_require__(25);
	
	var _Texture2D2 = _interopRequireDefault(_Texture2D);
	
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
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	
	var GLTFParser = function () {
	    function GLTFParser() {
	        _classCallCheck(this, GLTFParser);
	    }
	
	    _createClass(GLTFParser, null, [{
	        key: "parseFromURL",
	        value: function parseFromURL(gl, url) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var resourceResolver, resolved, tf, rawBuffer, rawbufferView, meshes, buffers, images, textures, animations, skins, materials, accessors, key, _key, bufferView, currentBuffer, buffer, _key2, imgLoadTask, _loop, _key3, _key4, texInfo, sampler, tex, _key5, material, _key6, _key7, skin, accessor;
	
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                resourceResolver = new _ResourceResolver2.default(url);
	                                _context.next = 3;
	                                return _TextFileResolver2.default.resolve(url);
	
	                            case 3:
	                                resolved = _context.sent;
	                                tf = JSON.parse(resolved);
	                                rawBuffer = {};
	                                rawbufferView = {};
	                                meshes = {};
	                                buffers = {};
	                                images = {};
	                                textures = {};
	                                animations = {};
	                                skins = {};
	                                materials = {};
	                                accessors = {};
	                                // constructing buffers
	
	                                _context.t0 = regeneratorRuntime.keys(tf.buffers);
	
	                            case 16:
	                                if ((_context.t1 = _context.t0()).done) {
	                                    _context.next = 23;
	                                    break;
	                                }
	
	                                key = _context.t1.value;
	                                _context.next = 20;
	                                return resourceResolver.loadBuffer(tf.buffers[key].uri);
	
	                            case 20:
	                                rawBuffer[key] = _context.sent;
	                                _context.next = 16;
	                                break;
	
	                            case 23:
	                                for (_key in tf.bufferViews) {
	                                    bufferView = tf.bufferViews[_key];
	                                    currentBuffer = rawBuffer[bufferView.buffer];
	
	                                    rawbufferView[_key] = new Uint8Array(currentBuffer, bufferView.byteOffset, bufferView.byteLength);
	                                    if (bufferView.target === void 0) {} else {
	                                        buffer = buffers[_key] = new _Buffer2.default(gl, bufferView.target, WebGLRenderingContext.STATIC_DRAW);
	
	                                        buffer.update(rawbufferView[_key]);
	                                    }
	                                }
	                                // constructing meshes
	                                for (_key2 in tf.meshes) {
	                                    meshes[_key2] = GLTFParser._parseMesh(gl, tf, _key2, buffers, rawbufferView);
	                                }
	                                // constructing textures
	                                imgLoadTask = [];
	
	                                _loop = function _loop(_key3) {
	                                    imgLoadTask.push(resourceResolver.loadImage(tf.images[_key3].uri).then(function (t) {
	                                        images[_key3] = t;
	                                    }));
	                                };
	
	                                for (_key3 in tf.images) {
	                                    _loop(_key3);
	                                }
	                                _context.next = 30;
	                                return Promise.all(imgLoadTask);
	
	                            case 30:
	                                // parse textures
	                                for (_key4 in tf.textures) {
	                                    texInfo = tf.textures[_key4];
	                                    sampler = tf.samplers[texInfo.sampler];
	                                    tex = textures[_key4] = new _Texture2D2.default(gl);
	
	                                    tex.magFilter = sampler.magFilter || WebGLRenderingContext.LINEAR;
	                                    tex.minFilter = sampler.minFilter || WebGLRenderingContext.NEAREST_MIPMAP_LINEAR;
	                                    tex.wrapS = sampler.wrapS || WebGLRenderingContext.REPEAT;
	                                    tex.wrapT = sampler.wrapT || WebGLRenderingContext.REPEAT;
	                                    tex.update(images[texInfo.source]);
	                                }
	                                _context.t2 = regeneratorRuntime.keys(tf.materials);
	
	                            case 32:
	                                if ((_context.t3 = _context.t2()).done) {
	                                    _context.next = 46;
	                                    break;
	                                }
	
	                                _key5 = _context.t3.value;
	                                material = tf.materials[_key5];
	
	                                if (!(material.extensions !== void 0 && material.extensions.KHR_materials_common)) {
	                                    _context.next = 41;
	                                    break;
	                                }
	
	                                _context.next = 38;
	                                return _MaterialParser2.default.parse(tf, _key5, resourceResolver, textures);
	
	                            case 38:
	                                materials[_key5] = _context.sent;
	                                _context.next = 44;
	                                break;
	
	                            case 41:
	                                _context.next = 43;
	                                return _MaterialParser2.default.parse(tf, _key5, resourceResolver, textures);
	
	                            case 43:
	                                materials[_key5] = _context.sent;
	
	                            case 44:
	                                _context.next = 32;
	                                break;
	
	                            case 46:
	                                // parse animations
	                                if (tf.animations) {
	                                    for (_key6 in tf.animations) {
	                                        animations[_key6] = new _Animation2.default(tf, _key6, rawbufferView);
	                                    }
	                                }
	                                if (tf.skins) {
	                                    for (_key7 in tf.skins) {
	                                        skin = tf.skins[_key7];
	                                        accessor = tf.accessors[skin.inverseBindMatrices];
	
	                                        skins[_key7] = {
	                                            bindShapeMatrix: new _Matrix2.default(skin.bindShapeMatrix),
	                                            jointNames: skin.jointNames,
	                                            inverseBindMatrices: new _Accessor2.default(rawbufferView[accessor.bufferView], accessor.count, accessor.componentType, _ConstantConverter2.default.asVectorSize(accessor.type), accessor.byteOffset || 0, accessor.byteStride || 0),
	                                            jointMatrices: new Float32Array(16 * skin.jointNames.length)
	                                        };
	                                    }
	                                }
	                                return _context.abrupt("return", {
	                                    meshes: meshes,
	                                    textures: textures,
	                                    tf: tf,
	                                    materials: materials,
	                                    animations: animations,
	                                    skins: skins
	                                });
	
	                            case 49:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "_parseMesh",
	        value: function _parseMesh(gl, tf, meshName, buffers, arrayBuffers) {
	            var meshInfo = tf.meshes[meshName];
	            var geometries = [];
	            for (var p = 0; p < meshInfo.primitives.length; p++) {
	                var geometry = new _Geometry2.default(gl);
	                var primitive = meshInfo.primitives[p];
	                var topology = primitive.mode || WebGLRenderingContext.TRIANGLES;
	                if (primitive.indices) {
	                    var indexAccessor = tf.accessors[primitive.indices];
	                    geometry.addIndex("default", buffers[indexAccessor.bufferView], topology, indexAccessor.byteOffset, indexAccessor.count, indexAccessor.componentType);
	                } else {
	                    // should generate new index buffer for primitives
	                    var vertCount = tf.accessors[primitive.attributes["POSITION"]].count;
	                    var bufferInfo = _ConstantConverter2.default.indexCountToBufferInfo(vertCount);
	                    var ibuf = new _Buffer2.default(gl, WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
	                    var array = new bufferInfo.ctor(vertCount);
	                    for (var i = 0; i < vertCount; i++) {
	                        array[i] = i;
	                    }
	                    ibuf.update(array);
	                    geometry.addIndex("default", ibuf, topology, 0, vertCount, bufferInfo.elementType);
	                }
	                // parse verticies
	                var attribInfo = {};
	                var usedBuffers = {};
	                var aabb = void 0;
	                if (!primitive.attributes["TEXCOORD_0"]) {
	                    var posAttr = tf.accessors[primitive.attributes["POSITION"]];
	                    var uvBuf = new _Buffer2.default(gl, WebGLRenderingContext.ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
	                    uvBuf.update(new Float32Array(new ArrayBuffer(8 * posAttr.count)));
	                    usedBuffers["@@UV"] = uvBuf;
	                    geometry.addAttributes(uvBuf, {
	                        TEXCOORD_0: {
	                            size: 2
	                        }
	                    });
	                }
	                for (var attrib in primitive.attributes) {
	                    var accessor = tf.accessors[primitive.attributes[attrib]];
	                    usedBuffers[accessor.bufferView] = buffers[accessor.bufferView];
	                    if (attrib === "POSITION") {
	                        if (accessor.max && accessor.min) {
	                            aabb = new _AABB2.default([new _Vector2.default(accessor.max[0], accessor.max[1], accessor.max[2]), new _Vector2.default(accessor.min[0], accessor.min[1], accessor.min[2])]);
	                        } else {
	                            aabb = GLTFParser._genAABB(arrayBuffers[accessor.bufferView], accessor.byteStride, accessor.byteOffset, accessor.count);
	                        }
	                    }
	                    var bufAccessor = {};
	                    bufAccessor[attrib] = {
	                        size: _ConstantConverter2.default.asVectorSize(accessor.type),
	                        type: accessor.componentType,
	                        stride: accessor.byteStride,
	                        offset: accessor.byteOffset
	                    };
	                    geometry.addAttributes(buffers[accessor.bufferView], bufAccessor);
	                }
	                geometry["materialName"] = primitive.material; // TODO fix this bad implementation to find material from geometry
	                geometries.push(geometry);
	            }
	            return geometries;
	        }
	    }, {
	        key: "_genAABB",
	        value: function _genAABB(view, stride, offset, count) {
	            var aabb = new _AABB2.default();
	            var dView = new Float32Array(view.buffer, view.byteOffset);
	            for (var i = offset; i < offset + (count - 1) * stride; i += stride) {
	                aabb.expand(new _Vector2.default(dView[i], dView[i + 1], dView[i + 2]));
	            }
	            return aabb;
	        }
	    }]);
	
	    return GLTFParser;
	}();
	
	exports.default = GLTFParser;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TextFileResolver = __webpack_require__(16);
	
	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);
	
	var _ImageResolver = __webpack_require__(17);
	
	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Provides resolving resource dependency while parsing gltf file.
	 */
	var ResourceResolver = function () {
	    function ResourceResolver(_rootPath) {
	        _classCallCheck(this, ResourceResolver);
	
	        this._rootPath = _rootPath;
	        this.baseDirectory = this._getBaseDir(_rootPath);
	    }
	    /**
	     * Load image from specified url or dataURL.
	     * @param  {string}  url [description]
	     * @return {Promise}     [description]
	     */
	
	
	    _createClass(ResourceResolver, [{
	        key: "loadImage",
	        value: function loadImage(url) {
	            if (this._isDataUrl(url)) {
	                return this._dataUriToImage(url);
	            } else {
	                return _ImageResolver2.default.resolve(this.baseDirectory + url);
	            }
	        }
	        /**
	         * Load buffer from specified url or dataURL.
	         * @return {Promise<ArrayBuffer>} [description]
	         */
	
	    }, {
	        key: "loadBuffer",
	        value: function loadBuffer(url) {
	            var _this = this;
	
	            if (this._isDataUrl(url)) {
	                return new Promise(function (resolve, reject) {
	                    resolve(_this._dataUriToArrayBuffer(url));
	                });
	            }
	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();
	                xhr.open("GET", _this.baseDirectory + url);
	                xhr.responseType = "arraybuffer";
	                xhr.onload = function (v) {
	                    resolve(xhr.response);
	                };
	                xhr.onerror = function (e) {
	                    reject({
	                        message: "Loading resource at '" + (_this.baseDirectory + url) + " failed. Is there resource file in dependency at correct location?'",
	                        error: e
	                    });
	                };
	                xhr.send();
	            });
	        }
	        /**
	         * Load string from specified url or dataURL
	         * @param  {string}          url [description]
	         * @return {Promise<string>}     [description]
	         */
	
	    }, {
	        key: "loadString",
	        value: function loadString(url) {
	            if (this._isDataUrl(url)) {
	                throw new Error("Not implemented yet");
	            } else {
	                return _TextFileResolver2.default.resolve(this.baseDirectory + url);
	            }
	        }
	        /**
	         * Convert data url string into array buffer
	         * @param  {string}      dataUri [description]
	         * @return {ArrayBuffer}         [description]
	         */
	
	    }, {
	        key: "_dataUriToArrayBuffer",
	        value: function _dataUriToArrayBuffer(dataUri) {
	            var splittedUri = dataUri.split(",");
	            var byteString = atob(splittedUri[1]);
	            var byteStringLength = byteString.length;
	            var arrayBuffer = new ArrayBuffer(byteStringLength);
	            var uint8Array = new Uint8Array(arrayBuffer);
	            for (var i = 0; i < byteStringLength; i++) {
	                uint8Array[i] = byteString.charCodeAt(i);
	            }
	            return arrayBuffer;
	        }
	        /**
	         * Convert data uri into image element
	         * @param  {string}  dataUrl [description]
	         * @return {Promise}         [description]
	         */
	
	    }, {
	        key: "_dataUriToImage",
	        value: function _dataUriToImage(dataUrl) {
	            return new Promise(function (resolve, reject) {
	                var canvas = document.createElement('canvas');
	                var context = canvas.getContext('2d');
	                var image = new Image();
	                image.src = dataUrl;
	                image.onload = function () {
	                    var cWidth = Math.pow(2, Math.ceil(Math.log(image.width) / Math.LN2));
	                    var cHeight = Math.pow(2, Math.ceil(Math.log(image.height) / Math.LN2));
	                    if (cWidth === image.width && cHeight == image.height) {
	                        resolve(image);
	                    }
	                    canvas.width = cWidth;
	                    canvas.height = cHeight;
	                    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, cWidth, cHeight);
	                    resolve(canvas);
	                };
	            });
	        }
	        /**
	         * Check specified url is dataUrl or not
	         * @param  {string}  dataUrl [description]
	         * @return {boolean}         [description]
	         */
	
	    }, {
	        key: "_isDataUrl",
	        value: function _isDataUrl(dataUrl) {
	            return !!dataUrl.match(/^\s*data\:.*;base64/);
	        }
	        /**
	         * Get directiory location from specified url
	         * @param  {string} url [description]
	         * @return {string}     [description]
	         */
	
	    }, {
	        key: "_getBaseDir",
	        value: function _getBaseDir(url) {
	            return url.substr(0, url.lastIndexOf("/") + 1);
	        }
	    }]);
	
	    return ResourceResolver;
	}();
	
	exports.default = ResourceResolver;

/***/ },
/* 16 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Asset.TextFileResolver;

/***/ },
/* 17 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Asset.ImageResolver;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Material = __webpack_require__(19);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	var _MaterialFactory = __webpack_require__(20);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _ConstantConverter = __webpack_require__(2);
	
	var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);
	
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
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	
	var MaterialParser = function () {
	    function MaterialParser() {
	        _classCallCheck(this, MaterialParser);
	    }
	
	    _createClass(MaterialParser, null, [{
	        key: "parse",
	        value: function parse(tf, matKey, rr, textures) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                var _this = this;
	
	                var material, result, key, v, teq, tv, valName, uKey;
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                material = tf.materials[matKey];
	
	                                if (!(material.extensions && material.extensions.KHR_materials_common)) {
	                                    _context2.next = 5;
	                                    break;
	                                }
	
	                                return _context2.abrupt("return", this._parseMaterialCommon(material, matKey, textures));
	
	                            case 5:
	                                if (!(_MaterialFactory2.default.materialGenerators[material.technique] === void 0)) {
	                                    _context2.next = 7;
	                                    break;
	                                }
	
	                                return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
	                                    var techniqueRecipe;
	                                    return regeneratorRuntime.wrap(function _callee$(_context) {
	                                        while (1) {
	                                            switch (_context.prev = _context.next) {
	                                                case 0:
	                                                    _context.next = 2;
	                                                    return _this._convertIntoTechniqueRecipe(tf, matKey, rr);
	
	                                                case 2:
	                                                    techniqueRecipe = _context.sent;
	
	                                                    _MaterialFactory2.default.addMaterialType(material.technique, function (factory) {
	                                                        return new _Material2.default(factory.gl, techniqueRecipe);
	                                                    });
	
	                                                case 4:
	                                                case "end":
	                                                    return _context.stop();
	                                            }
	                                        }
	                                    }, _callee, _this);
	                                })(), "t0", 7);
	
	                            case 7:
	                                result = {
	                                    type: material.technique,
	                                    class: "gltf-" + matKey
	                                };
	
	                                for (key in material.values) {
	                                    v = material.values[key];
	                                    teq = tf.techniques[material.technique];
	                                    tv = teq.parameters[key];
	                                    valName = "";
	
	                                    for (uKey in teq.uniforms) {
	                                        if (teq.uniforms[uKey] === key) {
	                                            valName = uKey;
	                                        }
	                                    }
	                                    if (tv.type !== WebGLRenderingContext.SAMPLER_2D) {
	                                        result[valName] = material.values[key];
	                                    } else {
	                                        result[valName] = textures[material.values[key]];
	                                    }
	                                }
	                                return _context2.abrupt("return", result);
	
	                            case 10:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	    }, {
	        key: "_convertIntoTechniqueRecipe",
	        value: function _convertIntoTechniqueRecipe(tf, matKey, resourceResolver) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
	                var mat, technique, program, techniqueRecipe;
	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                mat = tf.materials[matKey];
	                                technique = tf.techniques[mat.technique];
	                                program = tf.programs[technique.program];
	                                _context3.next = 5;
	                                return resourceResolver.loadString(tf.shaders[program.vertexShader].uri);
	
	                            case 5:
	                                _context3.t0 = _context3.sent;
	                                _context3.next = 8;
	                                return resourceResolver.loadString(tf.shaders[program.fragmentShader].uri);
	
	                            case 8:
	                                _context3.t1 = _context3.sent;
	                                _context3.t2 = this._asAttributeInfo(technique);
	                                _context3.t3 = this._asUniformInfo(technique);
	                                _context3.t4 = {};
	                                _context3.t5 = this._getState(technique);
	                                _context3.t6 = {
	                                    vertex: _context3.t0,
	                                    fragment: _context3.t1,
	                                    attributes: _context3.t2,
	                                    uniforms: _context3.t3,
	                                    macros: _context3.t4,
	                                    states: _context3.t5
	                                };
	                                _context3.t7 = [_context3.t6];
	                                techniqueRecipe = {
	                                    passes: _context3.t7,
	                                    drawOrder: "UseAlpha"
	                                };
	                                return _context3.abrupt("return", {
	                                    default: techniqueRecipe
	                                });
	
	                            case 17:
	                            case "end":
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        }
	    }, {
	        key: "_asAttributeInfo",
	        value: function _asAttributeInfo(technique) {
	            var result = {};
	            for (var key in technique.attributes) {
	                var attrGlue = technique.attributes[key];
	                var paramInfo = technique.parameters[attrGlue];
	                result[key] = {
	                    name: key,
	                    semantic: paramInfo.semantic,
	                    type: paramInfo.type
	                };
	            }
	            return result;
	        }
	    }, {
	        key: "_asUniformInfo",
	        value: function _asUniformInfo(technique) {
	            var result = {};
	            for (var key in technique.uniforms) {
	                var uniGlue = technique.uniforms[key];
	                var paramInfo = technique.parameters[uniGlue];
	                var annotations = {};
	                if (paramInfo.value) {
	                    annotations["default"] = paramInfo.value;
	                }
	                result[key] = {
	                    name: key,
	                    semantic: paramInfo.semantic || "USER_VALUE",
	                    type: paramInfo.type,
	                    attributes: annotations
	                };
	            }
	            return result;
	        }
	    }, {
	        key: "_getState",
	        value: function _getState(technique) {
	            var result = {
	                enable: [],
	                functions: {
	                    blendColor: [0, 0, 0, 0],
	                    cullFace: [WebGLRenderingContext.BACK],
	                    blendFuncSeparate: [WebGLRenderingContext.ONE, WebGLRenderingContext.ZERO, WebGLRenderingContext.ONE, WebGLRenderingContext.ZERO],
	                    blendEquationSeparate: [WebGLRenderingContext.FUNC_ADD, WebGLRenderingContext.FUNC_ADD],
	                    lineWidth: [1],
	                    frontFace: [WebGLRenderingContext.CCW],
	                    depthRange: [0, 1],
	                    depthFunc: [WebGLRenderingContext.LESS]
	                }
	            };
	            var st = technique.states;
	            if (st.enable) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = st.enable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;
	
	                        result.enable.push(item);
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
	            return result;
	        }
	    }, {
	        key: "_parseMaterialCommon",
	        value: function _parseMaterialCommon(material, matKey, textures) {
	            var cmatData = material.extensions.KHR_materials_common;
	            var matValues = cmatData.values;
	            switch (cmatData.technique) {
	                case "PHONG":
	                case "BLINN":
	                    var result = {
	                        type: "gltf-unlit",
	                        class: "gltf-" + matKey
	                    };
	                    if (typeof matValues.diffuse === "string") {
	                        result["texture"] = textures[matValues.diffuse];
	                    } else if (Array.isArray(matValues.diffuse)) {
	                        result["diffuse"] = _ConstantConverter2.default.asColorValue(matValues.diffuse);
	                    }
	                    return result;
	                default:
	                    throw new Error("Unsupported common material technique " + cmatData.technique);
	            }
	        }
	    }]);
	
	    return MaterialParser;
	}();
	
	exports.default = MaterialParser;

/***/ },
/* 19 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Material.Material;

/***/ },
/* 20 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Material.MaterialFactory;

/***/ },
/* 21 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ },
/* 22 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.AABB;

/***/ },
/* 23 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Resource.Buffer;

/***/ },
/* 24 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Geometry.Geometry;

/***/ },
/* 25 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Resource.Texture2D;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GLTFMaterilFactory = exports.GLTFMaterilFactory = function GLTFMaterilFactory() {
	  _classCallCheck(this, GLTFMaterilFactory);
	};
	
	exports.default = new GLTFMaterilFactory();

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _GLTFJointComponent = __webpack_require__(11);
	
	var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);
	
	var _GLTFAnimationComponent = __webpack_require__(8);
	
	var _GLTFAnimationComponent2 = _interopRequireDefault(_GLTFAnimationComponent);
	
	var _GLTFModelComponent = __webpack_require__(13);
	
	var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);
	
	var _grimoirejs = __webpack_require__(28);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _MaterialFactory = __webpack_require__(20);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _gltfUnlit = __webpack_require__(29);
	
	var _gltfUnlit2 = _interopRequireDefault(_gltfUnlit);
	
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
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	
	exports.default = function () {
	    _grimoirejs2.default.register(function () {
	        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _grimoirejs2.default.registerComponent("GLTFModel", _GLTFModelComponent2.default);
	                            _grimoirejs2.default.registerComponent("GLTFAnimation", _GLTFAnimationComponent2.default);
	                            _grimoirejs2.default.registerComponent("GLTFJoint", _GLTFJointComponent2.default);
	                            _grimoirejs2.default.registerNode("model", ["GLTFModel"], {}, "object");
	                            _grimoirejs2.default.registerNode("gltf-mesh", [], {
	                                material: "new(gltf-unlit)"
	                            }, "mesh");
	                            _grimoirejs2.default.registerNode("gltf-joint", ["GLTFJoint"], {}, "object");
	                            _grimoirejs2.default.registerNode("gltf-assets", [], {});
	                            _grimoirejs2.default.registerNode("gltf-animation", ["GLTFAnimation"], {});
	                            _MaterialFactory2.default.addSORTMaterial("gltf-unlit", _gltfUnlit2.default);
	
	                        case 9:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    });
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "@Pass{\n@ExposeMacro(int,boneCount,BONE_COUNT,0)\nFS_PREC(mediump,float)\n\nvarying vec3 vNormal;\nvarying vec2 vUV;\n\n#ifdef VS\n#if BONE_COUNT > 0\n  uniform mat4 boneMatrices[BONE_COUNT];\n#endif\n  @NORMAL\n  attribute vec3 normal;\n  @POSITION\n  attribute vec3 position;\n  @TEXCOORD_0\n  attribute vec2 texCoord;\n#if BONE_COUNT > 0\n  @JOINT\n  attribute vec4 joint;\n  @WEIGHT\n  attribute vec4 weight;\n#endif\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n  void main(){\n    #if BONE_COUNT > 0\n      mat4 skinMat = weight.x * boneMatrices[int(joint.x)] + weight.y * boneMatrices[int(joint.y)] + weight.z * boneMatrices[int(joint.z)] + weight.w * boneMatrices[int(joint.w)];\n      gl_Position = _matPVM * skinMat * vec4(position,1);\n      vNormal = normalize((_matM * skinMat  * vec4(normal,0)).xyz);\n    #else\n      gl_Position = _matPVM  * vec4(position,1);\n      vNormal = normalize((_matM  * vec4(normal,0)).xyz);\n    #endif\n    vUV = texCoord;\n  }\n\n\n#endif\n\n\n#ifdef FS\n  uniform sampler2D texture;\n\n  @HAS_TEXTURE{sampler:\"texture\"}\n  uniform bool _textureUsed;\n\n  @{type:\"color\"}\n  uniform vec4 diffuse;\n\n  @{default:\"n(1,1,-1)\"}\n  uniform vec3 sunDir;\n\n  void main(){\n    vec4 dColor;\n    if(_textureUsed){\n      dColor = texture2D(texture,vUV);\n    }else{\n      dColor = diffuse;\n    }\n    gl_FragColor.xyz = dot(sunDir,vNormal) * dColor.xyz;\n    gl_FragColor.w = dColor.w;\n  }\n#endif\n}\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=grimoire-gltf.js.map