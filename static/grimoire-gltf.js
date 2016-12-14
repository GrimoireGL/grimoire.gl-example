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
	
	var _GLTFJointComponent = __webpack_require__(10);
	
	var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);
	
	var _GLTFModelComponent = __webpack_require__(13);
	
	var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);
	
	var _ConstantConverter = __webpack_require__(2);
	
	var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);
	
	var _MaterialsCommonParser = __webpack_require__(15);
	
	var _MaterialsCommonParser2 = _interopRequireDefault(_MaterialsCommonParser);
	
	var _Parser = __webpack_require__(14);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _main = __webpack_require__(23);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	        "MaterialsCommonParser": _MaterialsCommonParser2.default,
	        "Parser": _Parser2.default
	    }
	};
	var __BASE__ = (0, _main2.default)();
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
	                    return this._dView.getFloat32(index * (this.elementSize * this._elementByteSize + this.byteStride) + this._elementByteSize * elementIndex, true);
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
	    }, {
	        key: "asGrAttribName",
	        value: function asGrAttribName(bufferName) {
	            switch (bufferName) {
	                case "POSITION":
	                    return "position";
	                case "NORMAL":
	                    return "normal";
	                case "TEXCOORD_0":
	                    return "texCoord";
	                case "JOINT":
	                    return "joint";
	                case "WEIGHT":
	                    return "weight";
	                default:
	                    throw new Error("Unknown semantic" + bufferName);
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
	
	var _Component2 = __webpack_require__(9);
	
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
	            this._animation = this.getValue("animation");
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
	                        this._targetTransforms[target] = nodes[0].getComponent("Transform");
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
	            this._animation.processCurrentFrame(t % 5, function (id, path, v) {
	                var transform = _this2._targetTransforms[id];
	                switch (path) {
	                    case "translation":
	                        transform.localPosition.rawElements = v;
	                        break;
	                    case "rotation":
	                        transform.localRotation.rawElements = v;
	                        break;
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
	        defaultValue: false
	    },
	    animation: {
	        converter: "Object",
	        defaultValue: null
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.Component;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Matrix = __webpack_require__(11);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _TransformComponent = __webpack_require__(12);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Component2 = __webpack_require__(9);
	
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
	            this._skeletonTransform = this.getValue("skeletonTransform");
	            var skinInfo = this.getValue("skinInfo");
	            this._poseIndex = skinInfo.jointNames.indexOf(this.getValue("jointName"));
	            this._jointMatrices = this.getValue("jointMatrices");
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
	        defaultValue: null
	    },
	    jointName: {
	        converter: "String",
	        defaultValue: null
	    },
	    skeletonTransform: {
	        converter: "Object",
	        defaultValue: null
	    },
	    jointMatrices: {
	        converter: "Object",
	        defaultValue: null
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ },
/* 12 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Components.TransformComponent;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TransformComponent = __webpack_require__(12);
	
	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);
	
	var _Matrix = __webpack_require__(11);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _Component2 = __webpack_require__(9);
	
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
	
	            var src = this.getValue("src");
	            if (src) {
	                var gl = this.companion.get("gl");
	                _Parser2.default.parseFromURL(gl, src).then(function (data) {
	                    _this2._populateAssets(data);
	                    _this2._populateScene(data);
	                });
	            }
	        }
	    }, {
	        key: "_populateScene",
	        value: function _populateScene(data) {
	            var sceneName = this.getValue("scene");
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
	            var assetRoot = this.node.addChildByName("gltf-assets", {});
	            for (var key in data.materials) {
	                //data.materials[key]["boneMatricies"] = data.skins["Armature_Cylinder-skin"].jointMatrices;
	                var node = assetRoot.addChildByName("material", data.materials[key]);
	                node.element.className = data.materials[key]["class"]; // hack for bug
	            }
	            for (var _key in data.animations) {
	                assetRoot.addChildByName("gltf-animation", {
	                    animation: data.animations[_key]
	                });
	            }
	        }
	    }, {
	        key: "_populateNode",
	        value: function _populateNode(data, nodeName, parentNode) {
	            var node = data.tf.nodes[nodeName];
	            var gomlNode = parentNode.addChildByName("object", {});
	            gomlNode.element.className = nodeName;
	            if (node.meshes !== void 0) {
	                for (var i = 0; i < node.meshes.length; i++) {
	                    var mesh = data.meshes[node.meshes[i]];
	                    for (var j = 0; j < mesh.length; j++) {
	                        gomlNode.addChildByName("gltf-mesh", {
	                            geometry: mesh[j],
	                            material: ".gltf-" + data.tf.meshes[node.meshes[i]].primitives[j].material,
	                            boneMatricies: node.skin ? data.skins[node.skin].jointMatrices : undefined
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
	                    this._injectJoint(data, jointNode[0], node.skeletons[_i], this.node.getComponent(_TransformComponent2.default), node.skin);
	                }
	            }
	        }
	    }, {
	        key: "_injectJoint",
	        value: function _injectJoint(data, gomlNode, nodeName, skeletonTransform, skinName) {
	            gomlNode.addComponent("GLTFJoint", {
	                skinInfo: data.skins[skinName],
	                jointName: nodeName,
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
	                gomlNode.setAttribute("position", mat.getTranslation());
	                gomlNode.setAttribute("scale", mat.getScaling());
	                gomlNode.setAttribute("rotation", mat.getRotation());
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
	        defaultValue: null
	    },
	    scene: {
	        converter: "String",
	        defaultValue: null
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
	
	var _Accessor = __webpack_require__(1);
	
	var _Accessor2 = _interopRequireDefault(_Accessor);
	
	var _Matrix = __webpack_require__(11);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _Animation = __webpack_require__(5);
	
	var _Animation2 = _interopRequireDefault(_Animation);
	
	var _MaterialsCommonParser = __webpack_require__(15);
	
	var _MaterialsCommonParser2 = _interopRequireDefault(_MaterialsCommonParser);
	
	var _ConstantConverter = __webpack_require__(2);
	
	var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);
	
	var _Vector = __webpack_require__(16);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _AABB = __webpack_require__(17);
	
	var _AABB2 = _interopRequireDefault(_AABB);
	
	var _TextFileResolver = __webpack_require__(18);
	
	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);
	
	var _Buffer = __webpack_require__(19);
	
	var _Buffer2 = _interopRequireDefault(_Buffer);
	
	var _Geometry = __webpack_require__(20);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	var _ImageResolver = __webpack_require__(21);
	
	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);
	
	var _Texture2D = __webpack_require__(22);
	
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
	
	var GLTFParser = function () {
	    function GLTFParser() {
	        _classCallCheck(this, GLTFParser);
	    }
	
	    _createClass(GLTFParser, null, [{
	        key: "parseFromURL",
	        value: function parseFromURL(gl, url) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var _this = this;
	
	                var baseUrl, resolved, tf, rawBuffer, rawbufferView, meshes, buffers, images, textures, animations, skins, materials, accessors, key, _key, bufferView, currentBuffer, buffer, _key2, imgLoadTask, _loop, _key3, _key4, texInfo, tex, _key5, material, _key6, _key7, skin, accessor;
	
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                baseUrl = GLTFParser.getBaseDir(url);
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
	                                return GLTFParser.bufferFromURL(tf, key, baseUrl);
	
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
	                                    if (GLTFParser.isDataUri(tf.images[_key3].uri)) {
	                                        imgLoadTask.push(_this.imageFromDataUrl(tf.images[_key3].uri).then(function (t) {
	                                            images[_key3] = t;
	                                        }));
	                                    } else {
	                                        imgLoadTask.push(_ImageResolver2.default.resolve(baseUrl + tf.images[_key3].uri).then(function (t) {
	                                            images[_key3] = t;
	                                        }));
	                                    }
	                                };
	
	                                for (_key3 in tf.images) {
	                                    _loop(_key3);
	                                }
	                                _context.next = 30;
	                                return Promise.all(imgLoadTask);
	
	                            case 30:
	                                for (_key4 in tf.textures) {
	                                    texInfo = tf.textures[_key4];
	                                    tex = textures[_key4] = new _Texture2D2.default(gl);
	
	                                    tex.update(images[texInfo.source]);
	                                }
	                                for (_key5 in tf.materials) {
	                                    material = tf.materials[_key5];
	
	                                    if (material.extensions !== void 0 && material.extensions.KHR_materials_common) {
	                                        materials[_key5] = _MaterialsCommonParser2.default.parse(tf, _key5, baseUrl, textures);
	                                    } else {
	                                        console.warn("program is not parsed. Common material configuration are used alternatively");
	                                        tf.materials[_key5].extensions = {};
	                                        tf.materials[_key5].extensions.KHR_materials_common = {
	                                            values: material.values,
	                                            technique: "PHONG",
	                                            transparent: true,
	                                            jointCount: 0,
	                                            doubleSided: true
	                                        };
	                                        materials[_key5] = _MaterialsCommonParser2.default.parse(tf, _key5, baseUrl, textures);
	                                    }
	                                }
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
	
	                            case 35:
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
	                var primitive = meshInfo.primitives[p];
	                var index = {};
	                index.topology = primitive.mode || WebGLRenderingContext.TRIANGLES;
	                if (primitive.indices) {
	                    var indexAccessor = tf.accessors[primitive.indices];
	                    index.byteSize = _ConstantConverter2.default.asByteSize(indexAccessor.componentType);
	                    // construct index buffer
	                    var baseBuffer = arrayBuffers[indexAccessor.bufferView];
	                    var typedArrCtor = _ConstantConverter2.default.elementTypeToTypedArray(indexAccessor.componentType);
	                    var indexBufferSrc = new typedArrCtor(baseBuffer.buffer, indexAccessor.byteOffset + baseBuffer.byteOffset);
	                    var indexBuffer = new _Buffer2.default(gl, WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
	                    indexBuffer.update(indexBufferSrc);
	                    index.type = indexAccessor.componentType;
	                    index.index = indexBuffer;
	                    index.byteOffset = 0;
	                    index.count = indexAccessor.count;
	                } else {
	                    // should generate new index buffer for primitives
	                    var vertCount = tf.accessors[primitive.attributes["POSITION"]].count;
	                    var bufferInfo = _ConstantConverter2.default.indexCountToBufferInfo(vertCount);
	                    index.type = bufferInfo.elementType;
	                    index.index = new _Buffer2.default(gl, WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
	                    index.byteSize = bufferInfo.byteSize;
	                    index.byteOffset = 0;
	                    index.count = vertCount;
	                    var array = new bufferInfo.ctor(index.count);
	                    for (var i = 0; i < index.count; i++) {
	                        array[i] = i;
	                    }
	                    index.index.update(array);
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
	                    attribInfo["texCoord"] = {
	                        bufferName: "@@UV",
	                        size: 2,
	                        offset: 0,
	                        stride: 0,
	                        type: WebGLRenderingContext.FLOAT
	                    };
	                }
	                for (var attrib in primitive.attributes) {
	                    var grAttrib = _ConstantConverter2.default.asGrAttribName(attrib);
	                    var accessor = tf.accessors[primitive.attributes[attrib]];
	                    usedBuffers[accessor.bufferView] = buffers[accessor.bufferView];
	                    if (attrib === "POSITION") {
	                        if (accessor.max && accessor.min) {
	                            aabb = new _AABB2.default([new _Vector2.default(accessor.max[0], accessor.max[1], accessor.max[2]), new _Vector2.default(accessor.min[0], accessor.min[1], accessor.min[2])]);
	                        } else {
	                            aabb = GLTFParser._genAABB(arrayBuffers[accessor.bufferView], accessor.byteStride, accessor.byteOffset, accessor.count);
	                        }
	                    }
	                    attribInfo[grAttrib] = {
	                        bufferName: accessor.bufferView,
	                        size: _ConstantConverter2.default.asVectorSize(accessor.type),
	                        type: accessor.componentType,
	                        stride: accessor.byteStride,
	                        offset: accessor.byteOffset
	                    };
	                }
	                var geometry = new _Geometry2.default(usedBuffers, attribInfo, { default: index }, aabb);
	                geometry["materialName"] = primitive.material; // TODO fix this bad implementation to find material from geometry
	                geometries.push(geometry);
	            }
	            return geometries;
	        }
	    }, {
	        key: "bufferFromURL",
	        value: function bufferFromURL(tf, bufferName, baseUrl) {
	            if (GLTFParser.isDataUri(tf.buffers[bufferName].uri)) {
	                return new Promise(function (resolve, reject) {
	                    resolve(GLTFParser.dataUriToArrayBuffer(tf.buffers[bufferName].uri));
	                });
	            }
	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();
	                xhr.open("GET", baseUrl + tf.buffers[bufferName].uri);
	                xhr.responseType = "arraybuffer";
	                xhr.onload = function (v) {
	                    resolve(xhr.response);
	                };
	                xhr.onerror = function (e) {
	                    reject(e);
	                };
	                xhr.send();
	            });
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
	    }, {
	        key: "isDataUri",
	        value: function isDataUri(dataUri) {
	            return !!dataUri.match(/^\s*data\:.*;base64/);
	        }
	    }, {
	        key: "dataUriToArrayBuffer",
	        value: function dataUriToArrayBuffer(dataUri) {
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
	    }, {
	        key: "imageFromDataUrl",
	        value: function imageFromDataUrl(dataUrl) {
	            return new Promise(function (resolve, reject) {
	                var canvas = document.createElement('canvas');
	                var context = canvas.getContext('2d');
	                var image = new Image();
	                image.src = dataUrl;
	                image.onload = function () {
	                    var cWidth = Math.pow(2, Math.log(image.width) / Math.LN2 | 0) * 2;
	                    var cHeight = Math.pow(2, Math.log(image.height) / Math.LN2 | 0) * 2;
	                    canvas.width = cWidth;
	                    canvas.height = cHeight;
	                    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, cWidth, cHeight);
	                    resolve(canvas);
	                };
	            });
	        }
	    }, {
	        key: "getBaseDir",
	        value: function getBaseDir(url) {
	            return url.substr(0, url.lastIndexOf("/") + 1);
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
	
	var _ConstantConverter = __webpack_require__(2);
	
	var _ConstantConverter2 = _interopRequireDefault(_ConstantConverter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GLTFMaterialsCommonParser = function () {
	    function GLTFMaterialsCommonParser() {
	        _classCallCheck(this, GLTFMaterialsCommonParser);
	    }
	
	    _createClass(GLTFMaterialsCommonParser, null, [{
	        key: "parse",
	        value: function parse(tf, matKey, baseUrl, textures) {
	            var material = tf.materials[matKey];
	            if (material.extensions.KHR_materials_common) {
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
	        }
	    }]);
	
	    return GLTFMaterialsCommonParser;
	}();
	
	exports.default = GLTFMaterialsCommonParser;

/***/ },
/* 16 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ },
/* 17 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.AABB;

/***/ },
/* 18 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Asset.TextFileResolver;

/***/ },
/* 19 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Resource.Buffer;

/***/ },
/* 20 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Geometry.Geometry;

/***/ },
/* 21 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Asset.ImageResolver;

/***/ },
/* 22 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Resource.Texture2D;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _GLTFJointComponent = __webpack_require__(10);
	
	var _GLTFJointComponent2 = _interopRequireDefault(_GLTFJointComponent);
	
	var _GLTFAnimationComponent = __webpack_require__(8);
	
	var _GLTFAnimationComponent2 = _interopRequireDefault(_GLTFAnimationComponent);
	
	var _GLTFModelComponent = __webpack_require__(13);
	
	var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);
	
	var _grimoirejs = __webpack_require__(24);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _MaterialFactory = __webpack_require__(25);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _gltfUnlit = __webpack_require__(26);
	
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
/* 24 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS;

/***/ },
/* 25 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Material.MaterialFactory;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "@Pass\n@NoCull()\nFS_PREC(mediump,float)\n varying vec3 vNormal;\nvarying vec2 vUV;\n\n#ifdef VS\n  uniform mat4 boneMatricies[2];\n  attribute vec3 normal;\n  attribute vec3 position;\n  attribute vec2 texCoord;\n  // attribute vec4 joint;\n  // attribute vec4 weight;\n\n  uniform mat4 _matPVM;\n  uniform mat4 _matM;\n\n  void main(){\n  //  mat4 skinMat = weight.x * boneMatricies[int(joint.x)] + weight.y * boneMatricies[int(joint.y)] + weight.z * boneMatricies[int(joint.z)] + weight.w * boneMatricies[int(joint.w)];\n    gl_Position = _matPVM  * vec4(position,1);\n    vNormal = normalize((_matM  * vec4(normal,0)).xyz);\n    vUV = texCoord;\n  }\n\n\n#endif\n\n\n#ifdef FS\n  @{usedFlag:\"_textureUsed\"}\n  uniform sampler2D texture;\n\n  uniform bool _textureUsed;\n\n  @{type:\"color\"}\n  uniform vec4 diffuse;\n\n  @{default:\"n(1,1,-1)\"}\n  uniform vec3 sunDir;\n\n  void main(){\n    vec4 dColor;\n    if(_textureUsed){\n      dColor = texture2D(texture,vUV);\n    }else{\n      dColor = diffuse;\n    }\n    gl_FragColor.xyz = dot(sunDir,vNormal) * dColor.xyz;\n    gl_FragColor.w = dColor.w;\n  }\n#endif\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=grimoire-gltf.js.map