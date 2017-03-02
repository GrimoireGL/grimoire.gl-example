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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.Component;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ResourceBase2 = __webpack_require__(2);

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
    }], [{
        key: "generateDefaultTexture",
        value: function generateDefaultTexture(gl) {
            Texture2D.defaultTextures.set(gl, null); // for preventing called this method recursively by instanciating default texture
            var texture = new Texture2D(gl);
            texture.update(0, 1, 1, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            Texture2D.defaultTextures.set(gl, texture);
        }
    }]);

    return Texture2D;
}(_ResourceBase3.default);

exports.default = Texture2D;

Texture2D.defaultTextures = new Map();
/**
 * ミップマップの更新が必要なフィルタ
 * @type {number[]}
 */
Texture2D._filtersNeedsMipmap = [WebGLRenderingContext.LINEAR_MIPMAP_LINEAR, WebGLRenderingContext.LINEAR_MIPMAP_NEAREST, WebGLRenderingContext.NEAREST_MIPMAP_LINEAR, WebGLRenderingContext.NEAREST_MIPMAP_NEAREST];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceBase = function () {
    function ResourceBase(gl) {
        _classCallCheck(this, ResourceBase);

        this.gl = gl;
        this.destroyed = false;
        if (!gl) {
            throw new Error("missing WebGLRenderingContext");
        }
        this.index = ResourceBase._maxIndex++;
        this.valid = false;
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
            var _this = this;

            if (this._valid === val) {
                return;
            }
            this._valid = val;
            if (this._valid) {
                this._validResolve(this);
            } else {
                this.validPromise = new Promise(function (resolve) {
                    _this._validResolve = resolve;
                });
            }
        }
    }]);

    return ResourceBase;
}();

ResourceBase._maxIndex = 0;
exports.default = ResourceBase;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Matrix = __webpack_require__(6);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Vector3 = __webpack_require__(8);

var _Vector4 = _interopRequireDefault(_Vector3);

var _GLM = __webpack_require__(27);

var _GLM2 = _interopRequireDefault(_GLM);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = _GLM2.default.mat4,
    vec3 = _GLM2.default.vec3,
    vec4 = _GLM2.default.vec4;
/**
 * シーン中に存在する物体の変形を司るコンポーネント
 * このコンポーネントによって物体の座標や回転量、拡大料などが定義されます。
 * シーン中の全ての物体は必ずこのコンポーネントを含まなければなりません。
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
        _this._updatedTransform = true;
        _this._globalTransform = new _Matrix2.default();
        return _this;
    }
    /**
     * Global transform that consider parent transform and local transform
     * @return {[type]} [description]
     */


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
                _this2._matrixTransformMode = false;
                _this2.notifyUpdateTransform();
            });
            this.getAttributeRaw("rotation").watch(function (v) {
                _this2._matrixTransformMode = false;
                _this2.notifyUpdateTransform();
            });
            this.getAttributeRaw("scale").watch(function (v) {
                _this2._matrixTransformMode = false;
                _this2.notifyUpdateTransform();
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
                    _this2.notifyUpdateTransform();
                }
            });
            // assign attribute values to field
            this.__bindAttributes();
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._parentTransform = this.node.parent.getComponent(TransformComponent);
            if (this._parentTransform) {
                this._parentTransform._children.push(this);
            }
            this._updateTransform();
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            if (this._parentTransform) {
                this._parentTransform._children.splice(this._parentTransform._children.indexOf(this), 1);
                this._parentTransform = null;
            }
        }
    }, {
        key: "notifyUpdateTransform",
        value: function notifyUpdateTransform() {
            if (!this._updatedTransform) {
                this._updatedTransform = true;
                this._children.forEach(function (c) {
                    return c.notifyUpdateTransform();
                });
            }
        }
    }, {
        key: "_updateTransform",
        value: function _updateTransform(noDirectionalUpdate) {
            if (!this._updatedTransform) {
                return;
            }
            this._updatedTransform = false;
            if (!this._matrixTransformMode) {
                mat4.fromRotationTranslationScale(this.localTransform.rawElements, this.rotation.rawElements, this.position.rawElements, this.scale.rawElements);
            }
            this._updateGlobalTransform(noDirectionalUpdate);
        }
        /**
         * Update global transoform.
         */

    }, {
        key: "_updateGlobalTransform",
        value: function _updateGlobalTransform(noDirectionalUpdate) {
            if (!this._parentTransform) {
                mat4.copy(this._globalTransform.rawElements, this.localTransform.rawElements);
            } else {
                mat4.mul(this._globalTransform.rawElements, this._parentTransform.globalTransform.rawElements, this.localTransform.rawElements);
            }
            if (!noDirectionalUpdate) {
                this._updateDirections();
            }
            this._updateGlobalProperty();
            this.node.emit("transformUpdated", this);
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
                vec3.copy(this._globalPosition.rawElements, this.position.rawElements);
                vec3.copy(this._globalScale.rawElements, this.scale.rawElements);
            } else {
                vec3.transformMat4(this._globalPosition.rawElements, this.position.rawElements, this._parentTransform.globalTransform.rawElements);
                vec3.transformMat4(this._globalScale.rawElements, this.scale.rawElements, this._parentTransform.globalTransform.rawElements); // TODO buggy
            }
        }
    }, {
        key: "globalTransform",
        get: function get() {
            this._updateTransform();
            return this._globalTransform;
        }
    }, {
        key: "globalPosition",
        get: function get() {
            this._updateTransform();
            return this._globalPosition;
        }
    }, {
        key: "localPosition",
        get: function get() {
            console.warn(" localPosition depracated");
            return this.position;
        },
        set: function set(val) {
            console.warn(" localPosition depracated");
            this.position = val;
        }
    }, {
        key: "localRotation",
        get: function get() {
            console.warn(" localRotation depracated");
            return this.rotation;
        },
        set: function set(val) {
            console.warn(" localRotation depracated");
            this.rotation = val;
        }
    }, {
        key: "globalScale",
        get: function get() {
            this._updateTransform();
            return this._globalScale;
        }
    }, {
        key: "localScale",
        get: function get() {
            console.warn(" localScale depracated");
            return this.scale;
        },
        set: function set(val) {
            console.warn(" localScale depracated");
            this.scale = val;
        }
    }, {
        key: "forward",
        get: function get() {
            this._updateTransform();
            return this._forward;
        }
    }, {
        key: "up",
        get: function get() {
            this._updateTransform();
            return this._up;
        }
    }, {
        key: "right",
        get: function get() {
            this._updateTransform();
            return this._right;
        }
    }]);

    return TransformComponent;
}(_Component3.default);

exports.default = TransformComponent;

TransformComponent.attributes = {
    /**
     * この物体の座標
     */
    position: {
        converter: "Vector3",
        default: [0, 0, 0]
    },
    /**
     * この物体の回転量
     */
    rotation: {
        converter: "Rotation3",
        default: [0, 0, 0, 1]
    },
    /**
     * この物体の拡大率
     */
    scale: {
        converter: "Vector3",
        default: [1, 1, 1]
    },
    /**
     * 利用されません
     */
    rawMatrix: {
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parser = __webpack_require__(75);

var _Parser2 = _interopRequireDefault(_Parser);

var _MacroRegistory = __webpack_require__(58);

var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);

var _TextFileResolver = __webpack_require__(29);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _Material = __webpack_require__(25);

var _Material2 = _interopRequireDefault(_Material);

var _header = __webpack_require__(80);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Manage materialGenerators for materials.
 * Materials can be instanciated with this instance.
 * Every gl reference can contain 1 of MaterialFactory at most.
 */
var MaterialFactory = function () {
    function MaterialFactory(gl) {
        _classCallCheck(this, MaterialFactory);

        this.gl = gl;
        this.shaderHeader = MaterialFactory.defaultShaderHeader;
        this.macro = new _MacroRegistory2.default();
        if (MaterialFactory.factories.has(gl)) {
            throw new Error("MaterialFactory can not be instanciated dupelicately for a WebGLRenderingContext.");
        }
        MaterialFactory.factories.set(gl, this);
    }
    /**
     * Obtain an instance of MaterialFactory from WebGLRenderingContext
     * @param  {WebGLRenderingContext} gl [description]
     * @return {MaterialFactory}          [description]
     */


    _createClass(MaterialFactory, [{
        key: "instanciate",
        value: function instanciate(typeName) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!MaterialFactory.materialGenerators[typeName]) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("return", MaterialFactory.materialGenerators[typeName](this));

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
                    resolve(MaterialFactory.materialGenerators[typeName](_this));
                });
            });
        }
    }], [{
        key: "get",
        value: function get(gl) {
            var factory = this.factories.get(gl);
            if (!factory) {
                throw new Error("There was no associated MaterialFactory with specified WebGLRenderingContext");
            }
            return factory;
        }
    }, {
        key: "addMaterialType",
        value: function addMaterialType(typeName, materialGenerator) {
            MaterialFactory.materialGenerators[typeName] = materialGenerator;
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
/**
 * Map for gl reference and MaterialFactory.
 * @type {Map<WebGLRenderingContext,MaterialFactory>}
 */


exports.default = MaterialFactory;
MaterialFactory.factories = new Map();
MaterialFactory.defaultShaderHeader = _header2.default;
/**
 * Actual material generator.
 */
MaterialFactory.materialGenerators = {};
MaterialFactory.registerdHandlers = {};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector4;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DrawPriorty = __webpack_require__(70);

var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _grimoirejs = __webpack_require__(18);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * マテリアルとマテリアルへの属性を管理するためのコンポーネント
 * このコンポーネントは将来的に`MeshRenderer`と統合されます。
 * 指定されたマテリアルの初期化の管理や、マテリアルによって動的に追加される属性の管理を行います、
 */
var MaterialContainerComponent = function (_Component) {
    _inherits(MaterialContainerComponent, _Component);

    function MaterialContainerComponent() {
        _classCallCheck(this, MaterialContainerComponent);

        var _this = _possibleConstructorReturn(this, (MaterialContainerComponent.__proto__ || Object.getPrototypeOf(MaterialContainerComponent)).apply(this, arguments));

        _this.materialArgs = {};
        _this.materialReady = false;
        _this.useMaterial = false;
        return _this;
    }

    _createClass(MaterialContainerComponent, [{
        key: "getDrawPriorty",
        value: function getDrawPriorty(depth) {
            if (!this.materialReady) {
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
            this.getAttributeRaw("material").watch(this._onMaterialChanged.bind(this));
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
                                if (this._registeredAttributes) {
                                    this.__removeAttributes();
                                }
                                if (!this._materialComponent) {
                                    this._prepareInternalMaterial(materialPromise);
                                } else {
                                    this._prepareExternalMaterial(materialPromise);
                                }

                            case 7:
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
                                // waiting for material load completion
                                this.material = material;
                                this.materialArgs = this._materialComponent.materialArgs;
                                this.materialReady = true;

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

                var loader, material, _loop, key, _ret, _loop2;

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
                                // waiting for material load completion
                                this.material = material;

                                _loop = function _loop(key) {
                                    _this2.__addAtribute(key, _this2.material.argumentDeclarations[key]);
                                    try {
                                        _this2.getAttributeRaw(key).watch(function (v) {
                                            _this2.material.arguments[key] = v;
                                        }, true);
                                    } catch (e) {
                                        // TODO more convinient error handling
                                        _this2.node.emit("error-parse-material-args", e);
                                        _this2.__removeAttributes();
                                        _this2._registeredAttributes = false;
                                        _this2.materialReady = false;
                                        return {
                                            v: void 0
                                        };
                                    }
                                };

                                _context3.t0 = regeneratorRuntime.keys(this.material.argumentDeclarations);

                            case 10:
                                if ((_context3.t1 = _context3.t0()).done) {
                                    _context3.next = 17;
                                    break;
                                }

                                key = _context3.t1.value;
                                _ret = _loop(key);

                                if (!((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object")) {
                                    _context3.next = 15;
                                    break;
                                }

                                return _context3.abrupt("return", _ret.v);

                            case 15:
                                _context3.next = 10;
                                break;

                            case 17:
                                _loop2 = function _loop2(key) {
                                    _this2.__addAtribute(key, _this2.material.macroDeclarations[key]);
                                    _this2.getAttributeRaw(key).watch(function (v) {
                                        _this2.material.setMacroValue(key, v);
                                    }, true);
                                };

                                for (key in this.material.macroDeclarations) {
                                    _loop2(key);
                                }
                                this._registeredAttributes = true;
                                this.materialReady = true;

                            case 21:
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
    /**
     * 対象のマテリアル
     */
    material: {
        converter: "Material",
        default: "new(unlit)",
        componentBoundTo: "_materialComponent" // When the material was specified with the other material tag, this field would be assigned.
    },
    /**
     * 描画順序
     *
     * デフォルトの状態では、マテリアルから読み込んだ描画順序設定を用います
     */
    drawOrder: {
        converter: "String",
        default: null
    }
};
MaterialContainerComponent._defaultMaterial = "unlit";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _FrameBuffer = __webpack_require__(14);

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
            this.getAttributeRaw("layer").boundTo("layer");
            this.getAttributeRaw("clearColor").boundTo("clearColor");
            this.getAttributeRaw("clearColorEnabled").boundTo("clearColorEnabled");
            this.getAttributeRaw("clearDepthEnabled").boundTo("clearDepthEnabled");
            this.getAttributeRaw("clearDepth").boundTo("clearDepth");
            this.getAttributeRaw("camera").boundTo("_camera");
            this.getAttributeRaw("technique").boundTo("technique");
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._gl = this.companion.get("gl");
            this._canvas = this.companion.get("canvasElement");
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
            var camera = this.camera ? this.camera : args.camera;
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
            if (this._fbo && this.clearColorEnabled) {
                this._gl.clearColor(this.clearColor.R, this.clearColor.G, this.clearColor.B, this.clearColor.A);
                this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
            }
            if (this.clearDepthEnabled) {
                this._gl.clearDepth(this.clearDepth);
                this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
            }
            camera.updateContainedScene(args.loopIndex);
            camera.renderScene({
                renderer: this,
                camera: camera,
                buffers: args.buffers,
                layer: this.layer,
                viewport: args.viewport,
                loopIndex: args.loopIndex,
                technique: this.technique,
                sceneDescription: {}
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderQueueRegistry = __webpack_require__(72);

var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 特定のシーン内に関連する処理を行うためのコンポーネント
 * このコンポーネントには属性が存在しません。
 */
var SceneComponent = function (_Component) {
    _inherits(SceneComponent, _Component);

    function SceneComponent() {
        _classCallCheck(this, SceneComponent);

        var _this = _possibleConstructorReturn(this, (SceneComponent.__proto__ || Object.getPrototypeOf(SceneComponent)).apply(this, arguments));

        _this.queueRegistory = new _RenderQueueRegistry2.default();
        return _this;
    }

    _createClass(SceneComponent, [{
        key: "$mount",
        value: function $mount() {
            var _this2 = this;

            this.sceneDescription = {};
            SceneComponent._sceneDescriptionCreationHandlers.forEach(function (v) {
                return v(_this2.sceneDescription, _this2);
            });
        }
        /**
         * Notify update scene only when send update message is needed.
         * @param {number} loopIndex [description]
         */

    }, {
        key: "updateScene",
        value: function updateScene(loopIndex) {
            if (this._lastUpdateIndex !== loopIndex) {
                this.node.broadcastMessage("update", this.sceneDescription);
                this._lastUpdateIndex = loopIndex;
            }
        }
    }], [{
        key: "onSceneDescriptionCreation",
        value: function onSceneDescriptionCreation(handler) {
            SceneComponent._sceneDescriptionCreationHandlers.push(handler);
        }
    }]);

    return SceneComponent;
}(_Component3.default);

exports.default = SceneComponent;

SceneComponent.attributes = {};
SceneComponent._sceneDescriptionCreationHandlers = [];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _AABB = __webpack_require__(79);

var _AABB2 = _interopRequireDefault(_AABB);

var _Buffer = __webpack_require__(62);

var _Buffer2 = _interopRequireDefault(_Buffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The geometry class for managing buffer resource
 */
var Geometry = function () {
    function Geometry(gl) {
        _classCallCheck(this, Geometry);

        this.gl = gl;
        /**
         * Vertex buffer
         * @type {Buffer[]}
         */
        this.buffers = [];
        this.indices = {};
        this.accessors = {};
        this.aabb = new _AABB2.default([_Vector2.default.Zero]);
    }

    _createClass(Geometry, [{
        key: "addAttributes",
        value: function addAttributes(buffer, accessors) {
            var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.STATIC_DRAW;

            buffer = this._ensureToBeVertexBuffer(buffer, usage);
            var index = this.buffers.length;
            this.buffers.push(buffer);
            for (var semantic in accessors) {
                var accessor = accessors[semantic];
                accessor.bufferIndex = index;
                if (accessor.size === void 0) {
                    throw new Error("Accessor specified with the semantics \"" + semantic + "\" is not containing size as paranmeter.");
                }
                if (accessor.type === void 0) {
                    accessor.type = WebGLRenderingContext.FLOAT;
                }
                if (accessor.stride === void 0) {
                    accessor.stride = accessor.size * this._attribTypeToByteSize(accessor.type);
                }
                if (accessor.offset === void 0) {
                    accessor.offset = 0;
                }
                this.accessors[semantic] = accessor;
            }
        }
        /**
         * add new index buffer to this geometry.
         * @param {string}                       indexName [description]
         * @param {Buffer|number[]|BufferSource} buffer    [description]
         * @param {number                    =         WebGLRenderingContext.TRIANGLES} topology [description]
         * @param {number                    =         0}                               offset   [description]
         * @param {number                    =         null}                            count    [description]
         * @param {number                    =         0}                               type     [description]
         */

    }, {
        key: "addIndex",
        value: function addIndex(indexName, buffer) {
            var topology = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.TRIANGLES;
            var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var count = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            if (!count) {
                if (buffer instanceof _Buffer2.default || buffer instanceof ArrayBuffer || buffer instanceof DataView) {
                    throw new Error("The argument 'count' is necessary if you specified buffer with an instance of Buffer or ArrayBuffer");
                } else {
                    count = buffer["length"];
                }
            }
            if (type === 0) {
                type = this._indexTypeFromCount(count);
            }
            buffer = this._ensureToBeIndexBuffer(buffer, type);
            this.indices[indexName] = {
                byteOffset: offset,
                byteSize: this._indexTypeToByteSize(type),
                type: type,
                topology: topology,
                count: count,
                index: buffer
            };
        }
    }, {
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

    }, {
        key: "_ensureToBeVertexBuffer",

        /**
         * Make sure buffer sources converted into Buffer
         * @param  {Buffer|BufferSource|number[]} buffer [description]
         * @return {Buffer}                              [description]
         */
        value: function _ensureToBeVertexBuffer(buffer, usage) {
            if (!(buffer instanceof _Buffer2.default)) {
                var bufferSource = buffer;
                if (Array.isArray(bufferSource)) {
                    bufferSource = new Float32Array(bufferSource);
                }
                buffer = new _Buffer2.default(this.gl, WebGLRenderingContext.ARRAY_BUFFER, usage);
                buffer.update(bufferSource);
            }
            return buffer;
        }
        /**
         * Make sure buffer sources converted into Buffer
         * @param  {Buffer|BufferSource|number[]} buffer [description]
         * @return {Buffer}                              [description]
         */

    }, {
        key: "_ensureToBeIndexBuffer",
        value: function _ensureToBeIndexBuffer(buffer, type) {
            if (!(buffer instanceof _Buffer2.default)) {
                var bufferSource = buffer;
                if (Array.isArray(bufferSource)) {
                    bufferSource = new (this._indexTypeToArrayConstructor(type))(bufferSource);
                }
                buffer = new _Buffer2.default(this.gl, WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
                buffer.update(bufferSource);
            } else {
                if (buffer.target !== WebGLRenderingContext.ELEMENT_ARRAY_BUFFER) {
                    throw new Error("The usage of buffer specified as index buffer is not ELEMENT_ARRAY_BUFFER");
                }
            }
            return buffer;
        }
    }, {
        key: "_indexTypeFromCount",
        value: function _indexTypeFromCount(count) {
            if (count < 256) {
                return WebGLRenderingContext.UNSIGNED_BYTE;
            } else if (count < 65536) {
                return WebGLRenderingContext.UNSIGNED_SHORT;
            } else if (count < 4294967296) {
                return WebGLRenderingContext.UNSIGNED_INT;
            } else {
                throw new Error("Index count exceeds 4,294,967,296. WebGL can not handle such a big index buffer");
            }
        }
    }, {
        key: "_indexTypeToArrayConstructor",
        value: function _indexTypeToArrayConstructor(type) {
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return Uint8Array;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return Uint16Array;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return Uint32Array;
                default:
                    throw new Error("Unsupported index type");
            }
        }
    }, {
        key: "_indexTypeToByteSize",
        value: function _indexTypeToByteSize(type) {
            switch (type) {
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    return 1;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    return 2;
                case WebGLRenderingContext.UNSIGNED_INT:
                    return 4;
                default:
                    throw new Error("Unsupported index type");
            }
        }
    }, {
        key: "_attribTypeToByteSize",
        value: function _attribTypeToByteSize(type) {
            switch (type) {
                case WebGLRenderingContext.FLOAT:
                    return 4;
                default:
                    throw new Error("Unsupported attribute variable type \"" + type + "\"");
            }
        }
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
            var buffer = geometry.buffers[accessors.bufferIndex];
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
            targetIndex.index.gl.drawElements(targetIndex.topology, Math.min(targetIndex.count, count), targetIndex.type, Math.min(offset * targetIndex.byteSize + targetIndex.byteOffset, targetIndex.byteOffset + (targetIndex.count - 1) * targetIndex.byteSize));
        }
    }]);

    return Geometry;
}();

exports.default = Geometry;

Geometry._lastGeometry = new Map();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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
            var geometry = factoryDelegate(this.gl, args);
            if (GeometryFactory.factoryExtentions[type] !== void 0) {
                GeometryFactory.factoryExtentions[type].forEach(function (v) {
                    return v(geometry, args);
                });
            }
            return geometry;
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
    }, {
        key: "extend",
        value: function extend(typeName, extender) {
            if (GeometryFactory.factoryExtentions[typeName] === void 0) {
                GeometryFactory.factoryExtentions[typeName] = [];
            }
            GeometryFactory.factoryExtentions[typeName].push(extender);
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
GeometryFactory.factoryExtentions = {};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RenderBuffer = __webpack_require__(15);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _Texture2D = __webpack_require__(1);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _ResourceBase2 = __webpack_require__(2);

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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ResourceBase2 = __webpack_require__(2);

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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HashCalculator = function () {
    function HashCalculator() {
        _classCallCheck(this, HashCalculator);
    }

    _createClass(HashCalculator, null, [{
        key: "calcHash",
        value: function calcHash(source) {
            var hash = 0;
            if (source.length === 0) return hash;
            for (var i = 0; i < source.length; i++) {
                var char = source.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }
    }]);

    return HashCalculator;
}();

exports.default = HashCalculator;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
            var nw = Math.pow(2, Math.ceil(Math.log2(width))); // largest 2^n integer that does not exceed s
            var nh = Math.pow(2, Math.ceil(Math.log2(height))); // largest 2^n integer that does not exceed s
            return {
                width: nw,
                height: nh
            };
        }
    }]);

    return TextureSizeCalculator;
}();

exports.default = TextureSizeCalculator;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CacheResolver2 = __webpack_require__(19);

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
            if (href.match(/^blob\:/m)) {
                return href;
            }
            var link = document.createElement("a");
            link.href = href;
            return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
        }
    }]);

    return ExternalResourceResolver;
}(_CacheResolver3.default);

exports.default = ExternalResourceResolver;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageResolver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ExternalResourceResolver = __webpack_require__(20);

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
            var _this2 = this;

            return _get(ImageResolver.prototype.__proto__ || Object.getPrototypeOf(ImageResolver.prototype), "resolve", this).call(this, path, function (abs) {
                return new Promise(function (resolve, reject) {
                    var imgTag = new Image();
                    imgTag.crossOrigin = _this2._getCORSConfig(abs);
                    imgTag.onload = function () {
                        resolve(imgTag);
                    };
                    imgTag.onerror = function (e) {
                        reject("Error has been occured during loading \"" + abs + "(" + path + ")\"\n" + e);
                    };
                    imgTag.src = abs;
                });
            });
        }
    }, {
        key: "_getCORSConfig",
        value: function _getCORSConfig(path) {
            var corsConfig = null;
            for (var i = 0; i < ImageResolver.corsResolvers.length; i++) {
                corsConfig = ImageResolver.corsResolvers[i](path);
                if (corsConfig !== null) {
                    break;
                }
            }
            if (corsConfig === null) {
                corsConfig = ImageResolver.defaultCORSConfig;
            }
            return corsConfig;
        }
    }]);

    return ImageResolver;
}(_ExternalResourceResolver2.default);

ImageResolver.defaultCORSConfig = "anonymous";
/**
 * Cors config resolvers.
 * If all of resolvers returns null, defaultCORSConfig will be used.
 */
ImageResolver.corsResolvers = [];
exports.default = new ImageResolver();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 全体のループを管理しているコンポーネント。あまり直接ユーザーがいじることはありません。
 */
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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
            if (typeName && typeof typeName === "string") {
                this.materialPromise = this.companion.get("MaterialFactory").instanciate(typeName);
                this._registerAttributes();
            } else {
                throw new Error("Material type name must be sppecified and string");
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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Texture2D = __webpack_require__(1);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _ImageResolver = __webpack_require__(21);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Technique = __webpack_require__(60);

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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(8);

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rc = 511;
var gc = rc << 8;
var bc = gc << 8;
var ac = bc << 8;

var MeshIndexCalculator = function () {
    function MeshIndexCalculator() {
        _classCallCheck(this, MeshIndexCalculator);
    }

    _createClass(MeshIndexCalculator, null, [{
        key: "fromIndex",
        value: function fromIndex(index) {
            return new _Vector2.default((index & rc) / 255, ((index & gc) >> 8) / 255, ((index & bc) >> 16) / 255, ((index & ac) >> 24) / 255);
        }
    }, {
        key: "fromColor",
        value: function fromColor(color) {
            return color[0] + (color[1] << 8) + (color[2] << 16) + (color[3] << 24);
        }
    }]);

    return MeshIndexCalculator;
}();

exports.default = MeshIndexCalculator;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.GLM;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EEObject2 = __webpack_require__(90);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
                                        _context.t0 = resolve;
                                        _context.next = 4;
                                        return promise;

                                    case 4:
                                        _context.t1 = _context.sent;
                                        (0, _context.t0)(_context.t1);

                                        this.loadCount++;
                                        _context.next = 13;
                                        break;

                                    case 9:
                                        _context.prev = 9;
                                        _context.t2 = _context["catch"](0);

                                        reject(_context.t2);
                                        this.errorCount++;

                                    case 13:
                                        this.completeCount++;
                                        this._checkLoadCompleted();

                                    case 15:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this, [[0, 9]]);
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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextFileResolver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ExternalResourceResolver = __webpack_require__(20);

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

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grimoirejs = __webpack_require__(18);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _AssetLoader = __webpack_require__(28);

var _AssetLoader2 = _interopRequireDefault(_AssetLoader);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _defaultLoader = __webpack_require__(94);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * アセットの読み込みを司るコンポーネント。ローダーの表示などを司る。
 */
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
    /**
     * ローディング状況(読み取り専用)
     *
     * 現在の読み込み状況を0-1で表す。
     */
    loadingProgress: {
        default: 0,
        converter: "Number"
    },
    /**
     * リソースの読み込み完了後に、自動的にレンダリングループを開始するかどうか
     */
    autoStart: {
        default: true,
        converter: "Boolean"
    },
    /**
     * リソースのロード時にローディング画面を表示するかどうか
     */
    enableLoader: {
        default: true,
        converter: "Boolean"
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GLM = __webpack_require__(27);

var _GLM2 = _interopRequireDefault(_GLM);

var _Vector = __webpack_require__(8);

var _Vector2 = _interopRequireDefault(_Vector);

var _Vector3 = __webpack_require__(7);

var _Vector4 = _interopRequireDefault(_Vector3);

var _Matrix = __webpack_require__(6);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _RenderQueue = __webpack_require__(71);

var _RenderQueue2 = _interopRequireDefault(_RenderQueue);

var _TransformComponent = __webpack_require__(3);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _SceneComponent = __webpack_require__(11);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = _GLM2.default.vec3,
    vec4 = _GLM2.default.vec4,
    mat4 = _GLM2.default.mat4;

/**
 * シーンを描画するカメラのコンポーネント
 * このコンポーネントによって、透視射影や正方射影などの歪みを調整します。
 * また、このコンポーネントの付属するノードに属する`Transoform`によって、カメラの位置や向きが確定されます。
 */
var CameraComponent = function (_Component) {
    _inherits(CameraComponent, _Component);

    function CameraComponent() {
        _classCallCheck(this, CameraComponent);

        var _this = _possibleConstructorReturn(this, (CameraComponent.__proto__ || Object.getPrototypeOf(CameraComponent)).apply(this, arguments));

        _this.__viewMatrix = new _Matrix2.default();
        _this.__projectionMatrix = new _Matrix2.default();
        _this.__invProjectionMatrix = new _Matrix2.default();
        _this.__projectionViewMatrix = new _Matrix2.default();
        _this._renderQueue = new _RenderQueue2.default();
        _this._eyeCache = _Vector4.default.Zero;
        _this._lookAtCache = _Vector4.default.Zero;
        _this._upCache = _Vector4.default.Zero;
        _this._orthographic = false;
        return _this;
    }

    _createClass(CameraComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

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
            this.transform = this.node.getComponent(_TransformComponent2.default);
            this.containedScene = CameraComponent._findContainedScene(this.node);
            this.containedScene.queueRegistory.registerQueue(this._renderQueue);
            this.node.on("transformUpdated", this.updateTransform.bind(this));
            this.updateTransform();
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
                this._renderQueue.renderAll(args, true, args.loopIndex);
            }
        }
    }, {
        key: "updateTransform",
        value: function updateTransform() {
            var transform = this.transform;
            vec3.transformMat4(this._eyeCache.rawElements, _Vector4.default.Zero.rawElements, transform.globalTransform.rawElements);
            vec4.transformMat4(this._lookAtCache.rawElements, CameraComponent._frontOrigin.rawElements, transform.globalTransform.rawElements);
            vec3.add(this._lookAtCache.rawElements, this._lookAtCache.rawElements, this._eyeCache.rawElements);
            vec4.transformMat4(this._upCache.rawElements, CameraComponent._upOrigin.rawElements, transform.globalTransform.rawElements);
            mat4.lookAt(this.__viewMatrix.rawElements, this._eyeCache.rawElements, this._lookAtCache.rawElements, this._upCache.rawElements);
            mat4.mul(this.__projectionViewMatrix.rawElements, this.__projectionMatrix.rawElements, this.__viewMatrix.rawElements);
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
    }, {
        key: "AutoAspect",
        set: function set(autoMode) {
            if (this._autoAspect !== autoMode) {
                this._autoAspect = autoMode;
                this._recalculateProjection();
            }
        },
        get: function get() {
            return this._autoAspect;
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

CameraComponent.attributes = {
    /**
     * カメラの視野角。
     * orthogonal属性がtrueである場合この属性は無視されます。
     */
    fovy: {
        default: "45d",
        converter: "Angle2D"
    },
    /**
     * カメラに映るもっとも近い距離です。
     * 0よりも大きく、far属性よりも小さい必要があります。
     */
    near: {
        default: 0.01,
        converter: "Number"
    },
    /**
     * カメラに映る最も遠い距離です。
     * near属性よりも大きい必要があります。
     *
     * far - nearの値があまりにも大きいと、Z-fighting(手前の物体が奥に表示されたように見えたりする)現象が起きる可能性があります。
     * この差があまりに大きい時、カメラに映る物体の座標の小さいz座標の値の差は0に近似されます。
     * 逆にこの値が小さい時は、カメラに映る物体はある程度小さいz座標の差でも問題なく表示されます。
     * **大切なのは、写したい空間よりも無駄に大きくしないこと。常に適切な値を設定するべきです**
     */
    far: {
        default: 100,
        converter: "Number"
    },
    /**
     * カメラのアスペクト比
     * カメラの横の大きさと縦の大きさの比率を指定します。autoAspect属性がtrueである時、毎回のレンダリング時にこの値を自動調整します。
     */
    aspect: {
        default: 1.6,
        converter: "Number"
    },
    /**
     * アスペクト比の自動調整が有効か否か
     * レンダリング時にそのビューポートの大きさに応じて比率を自動調整するかどうかを示します。
     */
    autoAspect: {
        default: true,
        converter: "Boolean"
    },
    /**
     * 正射影時の横の基準サイズ
     * 正射影時はfovy属性を用いて自動的に写す領域を決定できません。
     * そのため、横の一片のサイズをこの属性で指定します。**アスペクト比は計算に用いられることに注意してください。**
     */
    orthoSize: {
        default: 100,
        converter: "Number"
    },
    /**
     * このカメラが正射影かどうか
     *
     * この属性がfalseである場合、カメラは透視射影としてシーンをレンダリングします。この場合、レンダリング結果にパース(奥行き感)が出ます。
     * 一方、この属性がtrueである場合、カメラは正射影としてシーンをレンダリングします。この場合、レンダリング結果には奥行き感は出ません。
     */
    orthogonal: {
        default: false,
        converter: "Boolean"
    }
};
CameraComponent._frontOrigin = new _Vector2.default(0, 0, -1, 0);
CameraComponent._upOrigin = new _Vector2.default(0, 1, 0, 0);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MaterialFactory = __webpack_require__(4);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _GrimoireInterface = __webpack_require__(91);

var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);

var _Texture2D = __webpack_require__(1);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _GLExtRequestor = __webpack_require__(63);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _Component2 = __webpack_require__(0);

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
/**
 * キャンバスの初期化及び設定を司るコンポーネント
 * このコンポーネントによって、適切な位置に`<canvas>`を初期化してWebGLコンテキストを初期化します。
 */

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
            this.getAttributeRaw("antialias").watch(function (v) {
                console.warn("Changing antialias attribute is not supported. This is only works when the canvas element created.");
            });
            this.getAttributeRaw("preserveDrawingBuffer").watch(function (v) {
                console.warn("Changing preserveDrawingBuffer attribute is not supported. This is only works when the canvas element created.");
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
            this.companion.set(ns("gl"), gl);
            this.companion.set(ns("canvasElement"), this.canvas);
            this.companion.set(ns("MaterialFactory"), new _MaterialFactory2.default(gl));
            this.companion.set(ns("GLExtRequestor"), new _GLExtRequestor2.default(gl));
            _Texture2D2.default.generateDefaultTexture(gl);
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
            var contextConfig = {
                antialias: this.getAttribute("antialias"),
                preserveDrawingBuffer: this.getAttribute("preserveDrawingBuffer")
            };
            var context = canvas.getContext("webgl", contextConfig);
            if (!context) {
                context = canvas.getContext("experimental-webgl", contextConfig);
            }
            if (!context) {
                throw new Error("Failed to initializing WebGL context. Make sure your browser supporting WebGL.");
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
    /**
     * キャンバスタグの横幅を指定します。
     */
    width: {
        default: "fit",
        converter: "CanvasSize"
    },
    /**
     * キャンバスタグの縦幅を指定します。
     */
    height: {
        default: "fit",
        converter: "CanvasSize"
    },
    /**
     * キャンバス要素の直接の親要素のコンテナに割り当てるidを指定します。
     */
    containerId: {
        default: "",
        converter: "String"
    },
    /**
     * キャンバス要素の直接の親要素のコンテナに割り当てるクラス名を指定します。
     */
    containerClass: {
        default: "gr-container",
        converter: "String"
    },
    /**
     * GLコンテキストの初期化時に、preserveDrawingBufferフラグを有効にするか指定します。
     *
     * 描画結果をdataURLに変換する際などはこの属性がtrueでないと正常にレンダリング結果を取得できません。
     */
    preserveDrawingBuffer: {
        default: true,
        converter: "Boolean"
    },
    /**
     * GLコンテキストの初期化時に、MSAAによるアンチエイリアスを有効にするか指定します。
     *
     * この属性は、途中で動的に変更することができません。
     */
    antialias: {
        default: true,
        converter: "Boolean"
    }
};
exports.default = CanvasInitializerComponent;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * フルスクリーン状態を管理するコンポーネント
 * Grimoire.jsによって管理されているキャンバス(正確にはその親のコンテナ)のフルスクリーン状態等を管理します。
 * (他の要素をフルスクリーン化することも可能ですが、通常このGrimoire.jsによって生成されるキャンバスを含むDOM要素に対して用いられます。)
 * また、一部の古いブラウザでは動作しない機能であることに注意してください。
 * また、`fullscreen`属性は必ず マウスのイベントなどのユーザーのインタラクションを伴うイベントからの呼び出しで **動的に** trueにされる必要があります。
 * 最初からtrueに設定して初期状態でキャンバスをフルスクリーン状態にすることはWebAPIの制約上できません。
 */
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
    /**
     * フルスクリーン状態かどうか
     *
     * このフラグをtrueにする際は、**必ず**、マウスイベントなどのユーザーのインタラクションを伴うイベントからの呼び出しで変更されなければなりません。
     *
     * したがって、GOMLで初期状態からこのフラグをtrueにすることはできません。
     */
    fullscreen: {
        converter: "Boolean",
        default: false
    },
    /**
     * フルスクリーンにするDOM要素へのクエリ
     *
     * nullが指定された場合、キャンバスの親要素が用いられます。
     */
    fullscreenTarget: {
        converter: "String",
        default: null
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GeometryFactory = __webpack_require__(13);

var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ジオメトリを生成するためのコンポーネント
 * `type`属性に指定されたタイプのジオメトリを生成して、`name`属性に指定された名前で利用できる形にして登録します。
 * このコンポーネントは`type`属性に応じて、**動的** に属性が増えることに気をつけてください。
 */
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
    /**
     * 生成するプリミティブのタイプ
     *
     * `GeometryFactory`に登録されたプリミティブのジェネレーターの名前を指します。
     * この指定する名前によって、動的に属性が増えることに気をつけてください。
     * また、増えたジオメトリの属性は動的に操作できないことに気をつけてください。
     */
    type: {
        converter: "String",
        default: null
    },
    /**
     * ジオメトリにつける名前
     *
     * `GeometryConverter`によって取得される際に利用されるジオメトリ名です。
     * もし、`quad`など事前に登録されたジオメトリを指定した場合、そのジオメトリを上書きすることができます。
     */
    name: {
        converter: "String",
        default: null
    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GeometryFactory = __webpack_require__(13);

var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _grimoirejs = __webpack_require__(18);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ジオメトリを管理するコンポーネント
 * あまりユーザーが直接操作することはありません。
 */
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
    /**
     * デフォルトで生成するジオメトリの種類
     */
    defaultGeometry: {
        converter: "StringArray",
        default: ["quad", "cube", "sphere"]
    }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderSceneComponent = __webpack_require__(10);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

var _TransformComponent = __webpack_require__(3);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _Vector = __webpack_require__(8);

var _Vector2 = _interopRequireDefault(_Vector);

var _Matrix = __webpack_require__(6);

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * (Deprecated)DOM要素とTransformを同期させるためのコンポーネント
 * このコンポーネントはfundamentalからは削除されます。(別のパッケージとして分離予定)
 */
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
            if (this._queriedElement && args.renderer === this._targetRenderer) {
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
                    _this3._targetRenderer = n.getComponent(_RenderSceneComponent2.default);
                    if (_this3._targetRenderer) {
                        returned = true;
                    }
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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MaterialFactory = __webpack_require__(4);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * マテリアル設定ファイルを読み込むためのコンポーネント
 */
var MaterialImporterComponent = function (_Component) {
    _inherits(MaterialImporterComponent, _Component);

    function MaterialImporterComponent() {
        _classCallCheck(this, MaterialImporterComponent);

        return _possibleConstructorReturn(this, (MaterialImporterComponent.__proto__ || Object.getPrototypeOf(MaterialImporterComponent)).apply(this, arguments));
    }

    _createClass(MaterialImporterComponent, [{
        key: "$awake",
        value: function $awake() {
            this.getAttributeRaw("typeName").watch(function (v) {
                console.warn("Changeing 'typeName' on MaterialImporter makes no sense. This change won't affect anything.");
            });
            this.getAttributeRaw("src").watch(function (v) {
                console.warn("Changeing 'src' on MaterialImporter makes no sense. This change won't affect anything.");
            });
            if (!this.getAttribute("typeName") || !this.getAttribute("src")) {
                throw new Error("type or src cannot be null in material importer");
            } else {
                var typeName = this.getAttribute("typeName");
                if (_MaterialFactory2.default.factories[typeName] !== void 0) {
                    throw new Error("A material type '" + typeName + "' is already loaded.");
                }
                _MaterialFactory2.default.addSORTMaterialFromURL(this.getAttribute("typeName"), this.getAttribute("src"));
            }
        }
    }]);

    return MaterialImporterComponent;
}(_Component3.default);

exports.default = MaterialImporterComponent;

MaterialImporterComponent.attributes = {
    /**
     * マテリアル名として登録される名前
     */
    typeName: {
        default: null,
        converter: "String"
    },
    /**
     * 読み込み先のファイルパス
     */
    src: {
        default: null,
        converter: "String"
    }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SceneComponent = __webpack_require__(11);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _MaterialContainerComponent = __webpack_require__(9);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _TransformComponent = __webpack_require__(3);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _GLM = __webpack_require__(27);

var _GLM2 = _interopRequireDefault(_GLM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = _GLM2.default.vec3;
/**
 * シーン中に存在するメッシュ一つあたりのレンダリングを司るコンポーネント
 * このメッシュが、対象となるノードの`Transform`や描画に用いる`Camera`、マテリアルなどを考慮して実際のレンダリングを行います。
 */

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
            vec3.add(this._priortyCalcCache, camera.transform.globalPosition.rawElements, this.geometry.aabb.Center.rawElements);
            vec3.sub(this._priortyCalcCache, this._priortyCalcCache, this._transformComponent.globalPosition.rawElements);
            return this._materialContainer.getDrawPriorty(vec3.sqrLen(this._priortyCalcCache)); // Obtains distance between camera and center of aabb
        }
    }, {
        key: "$awake",
        value: function $awake() {
            this.__bindAttributes();
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
            if (!this.node.isActive || !this.enabled || this.layer !== args.layer) {
                return;
            }
            if (!this.geometry || !args.material && !this._materialContainer.material) {
                return; // material is not instanciated yet.
            }
            var renderArgs = {
                targetBuffer: this.targetBuffer,
                geometry: this.geometry,
                attributeValues: null,
                camera: args.camera,
                transform: this._transformComponent,
                buffers: args.buffers,
                viewport: args.viewport,
                drawCount: this.drawCount,
                drawOffset: this.drawOffset,
                sceneDescription: args.sceneDescription,
                technique: args.technique,
                renderable: this
            };
            renderArgs.attributeValues = this._materialContainer.materialArgs;
            this._materialContainer.material.draw(renderArgs);
            this.node.emit("render", args);
        }
    }, {
        key: "setRenderableIndex",
        value: function setRenderableIndex(index) {
            this.index = index;
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
    /**
     * 描画に用いる形状データ
     */
    geometry: {
        converter: "Geometry",
        default: "quad"
    },
    /**
     * 描画に用いるインデックスバッファ名
     */
    targetBuffer: {
        converter: "String",
        default: "default"
    },
    /**
     * このメッシュが属するレイヤー
     *
     * 詳しくは`render-scene`ノードを参考にしてください。
     */
    layer: {
        converter: "String",
        default: "default"
    },
    /**
     * 描画するインデックスの個数
     *
     * デフォルトの状態でジオメトリの全インデックスを描画する
     */
    drawCount: {
        converter: "Number",
        default: Number.MAX_VALUE
    },
    /**
     * 描画するジオメトリのインデックスのオフセット
     */
    drawOffset: {
        converter: "Number",
        default: 0
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _Quaternion = __webpack_require__(87);

var _Quaternion2 = _interopRequireDefault(_Quaternion);

var _Matrix = __webpack_require__(6);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _TransformComponent = __webpack_require__(3);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _Component2 = __webpack_require__(0);

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

        _this._updated = false;
        _this._lastCenter = null;
        _this._lastScreenPos = null;
        _this._xsum = 0;
        _this._ysum = 0;
        _this._d = _Vector2.default.Zero;
        return _this;
    }

    _createClass(MouseCameraControlComponent, [{
        key: "$awake",
        value: function $awake() {
            this.__bindAttributes();
            this._listeners = {
                mousemove: this._mouseMove.bind(this),
                contextmenu: this._contextMenu.bind(this),
                wheel: this._mouseWheel.bind(this)
            };
        }
    }, {
        key: "$mount",
        value: function $mount() {
            this._transform = this.node.getComponent(_TransformComponent2.default);
            var canvasElement = this.companion.get("canvasElement");
            canvasElement.addEventListener("mousemove", this._listeners.mousemove);
            canvasElement.addEventListener("contextmenu", this._listeners.contextmenu);
            canvasElement.addEventListener("wheel", this._listeners.wheel);
            this._lastScreenPos = null;
            this._xsum = 0;
            this._ysum = 0;
        }
    }, {
        key: "$unmount",
        value: function $unmount() {
            var canvasElement = this.companion.get("canvasElement");
            canvasElement.removeEventListener("mousemove", this._listeners.mousemove);
            canvasElement.removeEventListener("contextmenu", this._listeners.contextmenu);
            canvasElement.removeEventListener("wheel", this._listeners.wheel);
        }
    }, {
        key: "$initialized",
        value: function $initialized() {
            var look = _Vector2.default.normalize(this.center.subtractWith(this._transform.position));
            var g = _Quaternion2.default.fromToRotation(this._transform.forward, look).normalize();
            this._transform.rotation = g;
            this._initialRotation = g;
            this._initialDirection = _Vector2.default.copy(this._transform.forward.negateThis()).normalized;
            if (this.distance !== null) {
                this._transform.position = this.center.addWith(this._initialDirection.multiplyWith(this.distance));
            } else {
                this.distance = this._transform.position.subtractWith(this.center).magnitude;
            }
        }
    }, {
        key: "$update",
        value: function $update() {
            if (this._updated || !this._lastCenter || !this.center.equalWith(this._lastCenter)) {
                this._updated = false;
                this._lastCenter = this.center;
                // rotate excution
                var rotationVartical = _Quaternion2.default.angleAxis(-this._xsum * this.rotateSpeed * 0.01, _Vector2.default.YUnit);
                var rotationHorizontal = _Quaternion2.default.angleAxis(-this._ysum * this.rotateSpeed * 0.01, _Vector2.default.XUnit);
                var rotation = _Quaternion2.default.multiply(rotationVartical, rotationHorizontal);
                var rotationMat = _Matrix2.default.rotationQuaternion(rotation);
                var direction = _Matrix2.default.transformNormal(rotationMat, this._initialDirection);
                this._transform.position = this.center.addWith(this._d).addWith(_Vector2.default.normalize(direction).multiplyWith(this.distance));
                this._transform.rotation = rotation;
                this._transform.rotation = _Quaternion2.default.multiply(rotation, this._initialRotation);
            }
        }
    }, {
        key: "_contextMenu",
        value: function _contextMenu(m) {
            if (!this.isActive) {
                return;
            }
            m.preventDefault();
        }
    }, {
        key: "_mouseMove",
        value: function _mouseMove(m) {
            if (!this.isActive) {
                return;
            }
            if (this._lastScreenPos === null) {
                this._lastScreenPos = {
                    x: m.screenX,
                    y: m.screenY
                };
                return;
            }
            var diffX = m.screenX - this._lastScreenPos.x;
            var diffY = m.screenY - this._lastScreenPos.y;
            if (this._checkButtonPress(m, true)) {
                this._xsum += diffX;
                this._ysum += diffY;
                this._ysum = Math.min(Math.PI * 50, this._ysum);
                this._ysum = Math.max(-Math.PI * 50, this._ysum);
                this._updated = true;
            }
            if (this._checkButtonPress(m, false)) {
                var moveX = -diffX * this.moveSpeed * 0.01;
                var moveY = diffY * this.moveSpeed * 0.01;
                this._d = this._d.addWith(this._transform.right.multiplyWith(moveX)).addWith(this._transform.up.multiplyWith(moveY));
                this._updated = true;
            }
            this._lastScreenPos = {
                x: m.screenX,
                y: m.screenY
            };
        }
    }, {
        key: "_checkButtonPress",
        value: function _checkButtonPress(m, isRight) {
            if ("buttons" in m) {
                if (isRight) {
                    return (m.buttons & 1) > 0;
                } else {
                    return (m.buttons & 2) > 0;
                }
            } else {
                if (isRight) {
                    return m.which === 1;
                } else {
                    return m.which === 3;
                }
            }
        }
    }, {
        key: "_mouseWheel",
        value: function _mouseWheel(m) {
            if (!this.isActive) {
                return;
            }
            var dir = _Vector2.default.subtract(this._transform.position, this.center).normalized;
            var moveDist = m.deltaY * this.zoomSpeed * 0.05;
            this.distance = Math.max(1, this.distance + moveDist);
            this._transform.position = this.center.addWith(dir.multiplyWith(this.distance));
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
        default: "0,0,0",
        converter: "Position",
        lazy: true
    },
    distance: {
        default: null,
        converter: "Number"
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderBuffer = __webpack_require__(15);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _TextureSizeCalculator = __webpack_require__(17);

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

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MeshIndexCalculator = __webpack_require__(26);

var _MeshIndexCalculator2 = _interopRequireDefault(_MeshIndexCalculator);

var _FrameBuffer = __webpack_require__(14);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _Texture2D = __webpack_require__(1);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _RenderBuffer = __webpack_require__(15);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _TextureSizeCalculator = __webpack_require__(17);

var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

var _RenderSceneComponent = __webpack_require__(10);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderHitareaComponent = function (_Component) {
    _inherits(RenderHitareaComponent, _Component);

    function RenderHitareaComponent() {
        _classCallCheck(this, RenderHitareaComponent);

        var _this = _possibleConstructorReturn(this, (RenderHitareaComponent.__proto__ || Object.getPrototypeOf(RenderHitareaComponent)).apply(this, arguments));

        _this._readCache = new Uint8Array(4);
        return _this;
    }

    _createClass(RenderHitareaComponent, [{
        key: "$mount",
        value: function $mount() {
            this._sceneRenderer = this.node.getComponent(_RenderSceneComponent2.default);
            if (!this._sceneRenderer) {
                throw new Error("The node attaching RenderHitArea should contain RenderScene.");
            }
            this._gl = this.companion.get("gl");
            this._canvas = this.companion.get("canvasElement");
            this.hitareaTexture = new _Texture2D2.default(this._gl);
            this.hitareaRenderbuffer = new _RenderBuffer2.default(this._gl);
            if (this.hitareaFBO) {
                this.hitareaFBO.destroy();
                this.hitareaFBO = null;
            }
        }
    }, {
        key: "$resizeBuffer",
        value: function $resizeBuffer(args) {
            var size = _TextureSizeCalculator2.default.getPow2Size(args.width, args.height);
            this._bufferSize = [size.width, size.height];
            this.hitareaTexture.update(0, size.width, size.height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE);
            this.hitareaRenderbuffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, size.width, size.height);
            if (!this.hitareaFBO) {
                this.hitareaFBO = new _FrameBuffer2.default(this._gl);
                this.hitareaFBO.update(this.hitareaTexture);
                this.hitareaFBO.update(this.hitareaRenderbuffer);
            }
        }
    }, {
        key: "$render",
        value: function $render(args) {
            if (!this._mouseInside) {
                return;
            }
            this.hitareaFBO.bind();
            this._gl.viewport(0, 0, this._bufferSize[0], this._bufferSize[1]);
            // clear buffer if needed
            this._gl.clearColor(0, 0, 0, 0);
            this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
            this._gl.clearDepth(1);
            this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
            var camera = this._sceneRenderer.camera || args.camera;
            camera.renderScene({
                renderer: this._sceneRenderer,
                camera: camera,
                buffers: args.buffers,
                layer: this._sceneRenderer.layer,
                viewport: args.viewport,
                loopIndex: args.loopIndex,
                technique: "hitarea",
                sceneDescription: {}
            });
            this._gl.flush();
            this._gl.readPixels(this._lastPosition[0] * this._bufferSize[0], this._lastPosition[1] * this._bufferSize[1], 1, 1, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._readCache);
            var index = _MeshIndexCalculator2.default.fromColor(this._readCache);
            if (index === 0) {
                if (this._lastRenderable instanceof _Component3.default) {
                    this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
                }
                this._lastRenderable = null;
            } else {
                var r = camera.containedScene.queueRegistory.getByIndex(index - 1);
                if (this._lastRenderable !== r) {
                    if (this._lastRenderable instanceof _Component3.default) {
                        this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
                    }
                    if (r instanceof _Component3.default) {
                        r.node.emit("mouseenter", r);
                    }
                } else {
                    if (r instanceof _Component3.default) {
                        if (this._mouseMoved) {
                            r.node.emit("mousemove", r);
                        } else {
                            r.node.emit("mouseon", r);
                        }
                    }
                }
                this._lastRenderable = r;
            }
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);
        }
    }, {
        key: "$mousemove",
        value: function $mousemove(v) {
            this._lastPosition = [v.viewportNormalizedX, 1.0 - v.viewportNormalizedY];
            this._mouseMoved = true;
        }
    }, {
        key: "$mouseenter",
        value: function $mouseenter(v) {
            this._mouseInside = true;
            this._lastPosition = [v.viewportNormalizedX, 1.0 - v.viewportNormalizedY];
            this._mouseMoved = true;
        }
    }, {
        key: "$mouseleave",
        value: function $mouseleave(v) {
            this._mouseInside = false;
            this._lastPosition = [v.viewportNormalizedX, 1.0 - v.viewportNormalizedY];
            this._mouseMoved = true;
            if (this._lastRenderable instanceof _Component3.default) {
                this._lastRenderable.node.emit("mouseleave", this._lastRenderable);
            }
            this._lastRenderable = null;
        }
    }]);

    return RenderHitareaComponent;
}(_Component3.default);

exports.default = RenderHitareaComponent;

RenderHitareaComponent.attributes = {};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MaterialContainerComponent = __webpack_require__(9);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _FrameBuffer = __webpack_require__(14);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _Component2 = __webpack_require__(0);

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
            if (!this._materialContainer.materialReady) {
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

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

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
        _this._wasInside = false;
        return _this;
    }

    _createClass(RendererComponent, [{
        key: "$awake",
        value: function $awake() {
            var _this2 = this;

            // initializing attributes
            this.getAttributeRaw("camera").boundTo("camera");
            this.getAttributeRaw("viewport").watch(function (v) {
                _this2._viewportSizeGenerator = v;
                _this2.$resizeCanvas();
            });
            this._viewportSizeGenerator = this.getAttribute("viewport");
            // initializing mouse handlers
            this._mouseMoveHandler = function (e) {
                if (_this2._isViewportInside(e)) {
                    if (!_this2._wasInside) {
                        _this2.node.emit("mouseenter");
                        _this2.node.broadcastMessage("mouseenter", _this2._toViewportMouseArgs(e));
                    }
                    _this2.node.emit("mousemove");
                    _this2.node.broadcastMessage("mousemove", _this2._toViewportMouseArgs(e));
                    _this2._wasInside = true; // Mark as last pointer was inside of viewport
                } else {
                    if (_this2._wasInside) {
                        _this2.node.emit("mouseleave");
                        _this2.node.broadcastMessage("mouseleave", _this2._toViewportMouseArgs(e));
                    }
                    _this2._wasInside = false; // Mark as last pointer was not inside of viewport
                }
            };
            this._mouseEnterHandler = function (e) {
                if (_this2._isViewportInside(e)) {
                    _this2.node.emit("mouseenter");
                    _this2.node.broadcastMessage("mouseenter", _this2._toViewportMouseArgs(e));
                    _this2._wasInside = true;
                }
            };
            this._mouseLeaveHandler = function (e) {
                if (_this2._wasInside) {
                    _this2.node.emit("mouseleave");
                    _this2.node.broadcastMessage("mouseleave", _this2._toViewportMouseArgs(e));
                }
                _this2._wasInside = false;
            };
        }
    }, {
        key: "$mount",
        value: function $mount() {
            var _this3 = this;

            this._gl = this.companion.get("gl");
            this._canvas = this.companion.get("canvasElement");
            this.getAttributeRaw("handleMouse").watch(function (a) {
                if (a) {
                    _this3._enableMouseHandling();
                } else {
                    _this3._disableMouseHandling();
                }
            }, true);
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
                camera: this.camera,
                viewport: this._viewportCache,
                bufferSizes: this._bufferSizes,
                buffers: this._buffers,
                loopIndex: args.loopIndex
            });
        }
    }, {
        key: "_enableMouseHandling",
        value: function _enableMouseHandling() {
            this._canvas.addEventListener("mousemove", this._mouseMoveHandler);
            this._canvas.addEventListener("mouseleave", this._mouseLeaveHandler);
            this._canvas.addEventListener("mouseenter", this._mouseEnterHandler);
        }
    }, {
        key: "_disableMouseHandling",
        value: function _disableMouseHandling() {
            this._canvas.removeEventListener("mousemove", this._mouseMoveHandler);
            this._canvas.removeEventListener("mouseleave", this._mouseLeaveHandler);
            this._canvas.removeEventListener("mouseenter", this._mouseEnterHandler);
        }
        /**
         * Check mouse is inside of viewport
         * @param  {MouseEvent} e [description]
         * @return {boolean}      [description]
         */

    }, {
        key: "_isViewportInside",
        value: function _isViewportInside(e) {
            var rc = this._getRelativePosition(e);
            var n = this._viewportCache.toLocalNormalized(rc[0], rc[1]);
            return n[0] >= 0 && n[0] <= 1 && n[1] >= 0 && n[1] <= 1;
        }
        /**
         * Obtain mouse point of relative coordinate from element.
         * @param  {MouseEvent} e [description]
         * @return {number[]}     [description]
         */

    }, {
        key: "_getRelativePosition",
        value: function _getRelativePosition(e) {
            var rect = this._canvas.getBoundingClientRect();
            var positionX = rect.left + window.pageXOffset;
            var positionY = rect.top + window.pageYOffset;
            return [e.pageX - positionX, e.pageY - positionY];
        }
        /**
         * Convert mouse args into viewport mouse event
         * @param  {MouseEvent}         e [description]
         * @return {ViewportMouseEvent}   [description]
         */

    }, {
        key: "_toViewportMouseArgs",
        value: function _toViewportMouseArgs(e) {
            var ro = this._getRelativePosition(e);
            var r = this._viewportCache.toLocal(ro[0], ro[1]);
            var n = this._viewportCache.toLocalNormalized(ro[0], ro[1]);
            return Object.assign(e, {
                viewportX: r[0],
                viewportY: r[1],
                viewportNormalizedX: n[0],
                viewportNormalizedY: n[1]
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
    },
    handleMouse: {
        converter: "Boolean",
        default: true
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(86);

var _Color2 = _interopRequireDefault(_Color);

var _LoopManagerComponent = __webpack_require__(22);

var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 全レンダラーを管理するためのコンポーネント
 */
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
                this.node.broadcastMessage(1, "renderViewport", {
                    loopIndex: loopIndex
                });
            }
        }
    }]);

    return RendererManagerComponent;
}(_Component3.default);

exports.default = RendererManagerComponent;

RendererManagerComponent.attributes = {
    /**
     * キャンバスの初期化色
     */
    bgColor: {
        default: new _Color2.default(0, 0, 0, 0),
        converter: "Color4"
    },
    /**
     * キャンバスの初期化深度値
     */
    clearDepth: {
        default: 1.0,
        converter: "Number"
    },
    /**
     * goml内にrendererが一つもなかった場合に自動的に補完するかどうか
     */
    complementRenderer: {
        default: true,
        converter: "Boolean"
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Texture2D = __webpack_require__(1);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _TextureSizeCalculator = __webpack_require__(17);

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

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeComponent = function (_Component) {
    _inherits(TimeComponent, _Component);

    function TimeComponent() {
        _classCallCheck(this, TimeComponent);

        var _this = _possibleConstructorReturn(this, (TimeComponent.__proto__ || Object.getPrototypeOf(TimeComponent)).apply(this, arguments));

        _this._time = 0;
        _this._startTime = 0;
        _this._lastFrame = 0;
        return _this;
    }

    _createClass(TimeComponent, [{
        key: "$awake",
        value: function $awake() {
            this._time = 0;
            this._lastFrame = 0;
            this._startTime = Date.now();
        }
    }, {
        key: "$update",
        value: function $update() {
            var now = Date.now();
            var total = now - this._startTime;
            this.setAttribute("time", now);
            this.setAttribute("timeDelta", now - this._lastFrame);
            this._lastFrame = now;
        }
    }]);

    return TimeComponent;
}(_Component3.default);

exports.default = TimeComponent;

TimeComponent.attributes = {
    time: {
        default: 0,
        converter: "Number"
    },
    timeDelta: {
        default: 0,
        converter: "Number"
    }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CanvasSizeConverter;
/**
 * キャンバスのサイズ用のコンバーター
 * 数値を指定した場合(`100`など)はその値をそのまま返す。
 * `aspect(1.6)`などと記述する時、キャンバスのアスペクト比を1.6にするようにリサイズする。
 * `fit`と指定した時、親要素にちょうどマッチするサイズを返す。
 * もし、親要素の高さが0である時かつ、親がbodyである際で`fit`が指定されていると、bodyへの高さ属性が指定されていないものと判断して、
 * 自動的にbodyに`height:100%`を割り当てる。
 */
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

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GeometryConverter;

var _Geometry = __webpack_require__(12);

var _Geometry2 = _interopRequireDefault(_Geometry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ジオメトリを指定するためのコンバーター
 * `quad`など、ジオメトリ名を指定するか、Geometry型のインスタンスを渡す。
 */
function GeometryConverter(val, attr) {
    if (typeof val === "string") {
        return attr.companion.get("GeometryRegistory").getGeometry(val);
    } else if (val instanceof _Geometry2.default) {
        return val;
    }
    throw new Error("Specified geometry \"" + val + "\" is not supported for converting into geometry.");
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = MaterialConverter;

var _MaterialComponent = __webpack_require__(23);

var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

var _Material = __webpack_require__(25);

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * マテリアルを指定するためのコンバーター
 * `<material>へのクエリ`が指定された場合は、そのクエリによって検索された先頭の`<material>`を用いる。
 * `new(マテリアル名)`が指定された場合は、新しいマテリアルのインスタンスを生成して用いる。
 * 通常、マテリアルを指定するコンポーネントはマテリアルによって、そのコンポーネントが所持する属性が置き換わる。
 * `new(マテリアル)`名で指定した場合、そのコンポーネント自身がマテリアルの属性を管理することになるので注意が必要。
 */
function MaterialConverter(val, attr) {
    if (typeof val === "string") {
        var regex = /\s*new\s*\(\s*([a-zA-Z\d\-]+)\s*\)/;
        var regexResult = void 0;
        if (regexResult = regex.exec(val)) {
            attr.component[attr.declaration["componentBoundTo"]] = null;
            return attr.companion.get("MaterialFactory").instanciate(regexResult[1]);
        } else {
            var node = attr.tree(val).first();
            if (node) {
                var mc = node.getComponent(_MaterialComponent2.default);
                attr.component[attr.declaration["componentBoundTo"]] = mc;
                return mc.materialPromise;
            } else {
                console.warn("There was no matching material component filtered by '" + val + "'");
                return null;
            }
        }
    } else if (val instanceof _Material2.default) {
        attr.component[attr.declaration["componentBoundTo"]] = null;
        return Promise.resolve(val);
    }
    return null; // TODO ??
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = NodeConverter;

var _GomlNode = __webpack_require__(93);

var _GomlNode2 = _interopRequireDefault(_GomlNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NodeConverter(val, attr) {
    if (val === null) {
        return null;
    }
    if (val instanceof _GomlNode2.default) {
        return val;
    } else if (typeof val === "string") {
        return attr.component.node.tree(val).first();
    }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Attribute = __webpack_require__(92);

var _Attribute2 = _interopRequireDefault(_Attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _lastVal = void 0;
var _node = void 0;
/**
 * 座標を取得するためのコンバーター
 * Vector3コンバーターの受け取り売る値もしくは、任意のシーン中のノードへのクエリを受け取る。
 * クエリを受け取った場合は、そのクエリの示す対象の物体の座標が用いられる。
 */
exports.default = {
    name: "Position",
    lazy: true,
    verify: function verify(attr) {
        return true;
    },
    convert: function convert(val, attr) {
        if (val === null) {
            return null;
        }
        if (attr.convertContext._lastVal === val) {
            return attr.convertContext._node.getAttribute("position");
        } else {
            attr.convertContext._lastVal = null;
            try {
                var vec = _Attribute2.default.convert("Vector3", attr, val);
                if (vec) {
                    return vec;
                }
            } catch (e) {
                ;
            }
            attr.convertContext._node = _Attribute2.default.convert("Node", attr, val);
            if (attr.convertContext._node) {
                attr.convertContext._lastVal = val;
                return attr.convertContext._node.getAttribute("position"); // TODO should not use getAttribute on node
            }
        }
    }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = TextureConverter;

var _TextureComponent = __webpack_require__(24);

var _TextureComponent2 = _interopRequireDefault(_TextureComponent);

var _TextureReference = __webpack_require__(61);

var _TextureReference2 = _interopRequireDefault(_TextureReference);

var _Texture2D = __webpack_require__(1);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _ImageResolver = __webpack_require__(21);

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
/**
 * テクスチャへの参照を取得するためのコンバーター
 * 渡すものが文字列である場合、4つの方法がある。
 * * `url`・・・指定したアドレスから画像を解決して取得する
 * * `backbuffer(バックバッファ名)`・・・名前付きバックバッファのリストから取得する
 * * `video(ビデオファイルへのURL)`・・・指定したアドレスからビデオを取得してテクスチャとして再生する(Buggy)
 * * `query(<texture>へのクエリ)`・・・指定したクエリで`<texture>`を探索して利用する。
 * 渡すものがオブジェクトである場合、5つの方法がある。
 * * `Texture2D型`・・・そのまま利用される
 * * `HTMLImageElement`・・・必要がある場合リサイズされた上で利用される。(自動的に2の累乗に変換される)
 * * `HTMLCanvasElement`・・・必要がある場合リサイズされた上で利用される。(自動的に2の累乗に変換される)
 * * `HTMLVideoElement`・・・必要がある場合リサイズされた上で、自動的に再生される(自動的に2の累乗に変換される)
 */
function TextureConverter(val, attr) {
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
                                    v: new _TextureReference2.default(fromVideoTexture(attr.companion.get("gl"), generateVideoTag(param)))
                                }
                            };
                        case "query":
                            var obtainedTag = attr.tree(param);
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
                var tex = new _Texture2D2.default(attr.companion.get("gl"));
                _ImageResolver2.default.resolve(val).then(function (t) {
                    tex.update(t);
                });
                attr.companion.get("loader").register(tex.validPromise);
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
                var tex = new _Texture2D2.default(attr.companion.get("gl"));
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
            var tex = new _Texture2D2.default(attr.companion.get("gl"));
            tex.update(val);
            return new _TextureReference2.default(tex);
        } else if (val instanceof HTMLVideoElement) {
            return new _TextureReference2.default(fromVideoTexture(attr.companion.get("gl"), val));
        }
    }
    return null;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = ViewportConverter;

var _Rectangle = __webpack_require__(88);

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
/**
 * ビューポートサイズを設定するためのコンバーター
 * `auto`・・・親のキャンバスのサイズにあったビューポートサイズを返す
 * `左端,上端,幅,高さ`・・・キャンバスのサイズを具体的に指定する。
 * 数値を指定するとピクセル単位になるが、数値に%をつければ親のキャンバス基準での比率指定ができる。
 */
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

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Geometry = __webpack_require__(12);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _AABB = __webpack_require__(79);

var _AABB2 = _interopRequireDefault(_AABB);

var _Vector = __webpack_require__(7);

var _Vector2 = _interopRequireDefault(_Vector);

var _GeometryUtility = __webpack_require__(55);

var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);

var _GeometryFactory = __webpack_require__(13);

var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var unitBox = new _AABB2.default();
unitBox.expand(new _Vector2.default(-1, -1, -1));
unitBox.expand(new _Vector2.default(1, 1, 1));
var primitiveLayout = {
    POSITION: {
        size: 3,
        stride: 32
    },
    NORMAL: {
        size: 3,
        stride: 32,
        offset: 12
    },
    TEXCOORD: {
        size: 2,
        stride: 32,
        offset: 24
    }
};

var DefaultPrimitives = function () {
    function DefaultPrimitives() {
        _classCallCheck(this, DefaultPrimitives);
    }

    _createClass(DefaultPrimitives, null, [{
        key: "register",
        value: function register() {
            DefaultPrimitives._registerQuad();
            DefaultPrimitives._registerCube();
            DefaultPrimitives._registerSphere();
            DefaultPrimitives._registerCircle();
            DefaultPrimitives._registerCylinder();
            DefaultPrimitives._registerCone();
            DefaultPrimitives._registerPlane();
            DefaultPrimitives._registerTriangle();
            DefaultPrimitives._registerCapsule();
        }
    }, {
        key: "_registerQuad",
        value: function _registerQuad() {
            _GeometryFactory2.default.addType("quad", {}, function (gl, attrs) {
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.plane([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], 1, 1), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.planeIndex(0, 1, 1));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.planeIndex(0, 1, 1)), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerTriangle",
        value: function _registerTriangle() {
            _GeometryFactory2.default.addType("triangle", {}, function (gl, attrs) {
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.triangle([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0]), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.triangleIndex(0));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.triangleIndex(0)), WebGLRenderingContext.LINES);
                return geometry;
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
                var geometry = new _Geometry2.default(gl);
                var theta = div % 2 != 0 ? Math.PI / div : 0;
                var vertices = [].concat.apply([], [_GeometryUtility2.default.circle([0, -0.5, 0], [0, -1, 0], [-Math.sin(theta), 0, Math.cos(theta)], [Math.cos(theta), 0, Math.sin(theta)], div)]);
                var g = Math.cos(Math.PI / div) / 3;
                var length = Math.sin(Math.PI / div) / Math.pow(3, 0.5) * 2;
                var radius = Math.cos(Math.PI / div) - g;
                var s = Math.PI / div;
                for (var i = 0; i < div; i++) {
                    var step = s * (i * 2 + 1);
                    Array.prototype.push.apply(vertices, _GeometryUtility2.default.coneTriangle([-Math.sin(step) * radius, 0, -Math.cos(step) * radius], [-Math.cos(Math.PI / 2 - step), 1, -Math.sin(Math.PI / 2 - step)], [Math.sin(step) * radius, 1, Math.cos(step) * radius], [-Math.cos(step) * length, 0, Math.sin(step) * length], div, i));
                }
                geometry.addAttributes(vertices, primitiveLayout);
                var os = div + 2;
                var indices = [].concat.apply([], [_GeometryUtility2.default.circleIndex(0, div)]);
                for (var _i = 0; _i < div; _i++) {
                    Array.prototype.push.apply(indices, _GeometryUtility2.default.triangleIndex(os + _i * 3));
                }
                geometry.addIndex("default", indices);
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(indices), WebGLRenderingContext.LINES);
                return geometry;
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
                var geometry = new _Geometry2.default(gl);
                var theta = div % 2 != 0 ? Math.PI / div : 0;
                var vertices = [].concat.apply([], [_GeometryUtility2.default.circle([0, 1, 0], [0, 1, 0], [0, 0, -1], [1, 0, 0], div), _GeometryUtility2.default.circle([0, -1, 0], [0, -1, 0], [-Math.sin(theta), 0, Math.cos(theta)], [Math.cos(theta), 0, Math.sin(theta)], div)]);
                var length = Math.sin(Math.PI / div);
                var radius = Math.cos(Math.PI / div);
                var s = Math.PI / div;
                for (var i = 0; i < div; i++) {
                    var step = s * (i * 2 + 1);
                    Array.prototype.push.apply(vertices, _GeometryUtility2.default.cylinderPlane([-Math.sin(step) * radius, 0, -Math.cos(step) * radius], [-Math.sin(step), 0, -Math.cos(step)], [0, 1, 0], [-Math.cos(step) * length, 0, Math.sin(step) * length], div, i));
                }
                geometry.addAttributes(vertices, primitiveLayout);
                var os = div + 2;
                var indices = [].concat.apply([], [_GeometryUtility2.default.circleIndex(0, div), _GeometryUtility2.default.circleIndex(os, div)]);
                for (var _i2 = 0; _i2 < div; _i2++) {
                    Array.prototype.push.apply(indices, _GeometryUtility2.default.planeIndex(os * 2 + _i2 * 4, 1, 1));
                }
                geometry.addIndex("default", indices);
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(indices), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerCube",
        value: function _registerCube() {
            _GeometryFactory2.default.addType("cube", {
                divHorizontal: {
                    converter: "Number",
                    default: 1
                },
                divVertical: {
                    converter: "Number",
                    default: 1
                }
            }, function (gl, attrs) {
                var hdiv = attrs["divHorizontal"];
                var vdiv = attrs["divVertical"];
                var geometry = new _Geometry2.default(gl);
                var vertices = [].concat.apply([], [_GeometryUtility2.default.plane([0, 0, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, 0, -1], [0, 0, -1], [0, 1, 0], [-1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, 1, 0], [0, 1, 0], [0, 0, -1], [1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, -1, 0], [0, -1, 0], [0, 0, -1], [-1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([1, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, -1], hdiv, vdiv), _GeometryUtility2.default.plane([-1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, 0, 1], hdiv, vdiv)]);
                geometry.addAttributes(vertices, primitiveLayout);
                var os = (hdiv + 1) * (vdiv + 1);
                var indices = [].concat.apply([], [_GeometryUtility2.default.planeIndex(0, hdiv, vdiv), _GeometryUtility2.default.planeIndex(os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(2 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(3 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(4 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(5 * os, hdiv, vdiv)]);
                geometry.addIndex("default", indices);
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(indices), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerSphere",
        value: function _registerSphere() {
            _GeometryFactory2.default.addType("sphere", {
                divVertical: {
                    converter: "Number",
                    default: 50
                },
                divHorizontal: {
                    converter: "Number",
                    default: 50
                }
            }, function (gl, attrs) {
                var dH = attrs["divHorizontal"];
                var dV = attrs["divVertical"];
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.sphere([0, 0, 0], [0, 1, 0], [1, 0, 0], [0, 0, -1], dV, dH), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.sphereIndex(0, dV, dH));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.sphereIndex(0, dV, dH)), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerCapsule",
        value: function _registerCapsule() {
            _GeometryFactory2.default.addType("capsule", {
                divide: {
                    converter: "Number",
                    default: 50
                }
            }, function (gl, attrs) {
                var dH = attrs["divide"];
                var dV = attrs["divide"] % 2 == 1 ? attrs["divide"] + 1 : attrs["divide"];
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.capsule([0, 0, 0], [0, 1, 0], [1, 0, 0], [0, 0, -1], dV, dH), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.sphereIndex(0, dV, dH));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.sphereIndex(0, dV, dH)), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }, {
        key: "_registerCircle",
        value: function _registerCircle() {
            _GeometryFactory2.default.addType("circle", {
                divide: {
                    converter: "Number",
                    default: 30
                }
            }, function (gl, attrs) {
                var div = attrs["divide"];
                var geometry = new _Geometry2.default(gl);
                geometry.addAttributes(_GeometryUtility2.default.circle([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], div), primitiveLayout);
                geometry.addIndex("default", _GeometryUtility2.default.circleIndex(0, div));
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(_GeometryUtility2.default.circleIndex(0, div)), WebGLRenderingContext.LINES);
                return geometry;
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
                var hdiv = attrs["divide"];
                var vdiv = attrs["divide"];
                var geometry = new _Geometry2.default(gl);
                var vertices = [].concat.apply([], [_GeometryUtility2.default.plane([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, 0, 0], [0, 0, -1], [0, 1, 0], [-1, 0, 0], hdiv, vdiv)]);
                geometry.addAttributes(vertices, primitiveLayout);
                var indices = [].concat.apply([], [_GeometryUtility2.default.planeIndex(0, hdiv, vdiv), _GeometryUtility2.default.planeIndex((hdiv + 1) * (vdiv + 1), hdiv, vdiv)]);
                geometry.addIndex("default", indices);
                geometry.addIndex("wireframe", _GeometryUtility2.default.linesFromTriangles(indices), WebGLRenderingContext.LINES);
                return geometry;
            });
        }
    }]);

    return DefaultPrimitives;
}();

exports.default = DefaultPrimitives;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeometryUtility = function () {
    function GeometryUtility() {
        _classCallCheck(this, GeometryUtility);
    }

    _createClass(GeometryUtility, null, [{
        key: "linesFromTriangles",
        value: function linesFromTriangles(indices) {
            var ret = [];
            var ic = new Array(3);
            var i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = indices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var index = _step.value;

                    ic[i % 3] = index;
                    if (i % 3 === 2) {
                        var a = ic[0],
                            b = ic[1],
                            c = ic[2];
                        Array.prototype.push.apply(ret, [a, b, b, c, c, a]);
                    }
                    i++;
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

            return ret;
        }
    }, {
        key: "plane",
        value: function plane(center, normal, up, right) {
            var hdiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
            var vdiv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

            var ret = new Array(8 * (hdiv + 1) * (vdiv + 1));
            var sp = [center[0] - up[0] - right[0], center[1] - up[1] - right[1], center[2] - up[2] - right[2]];
            var sr = [right[0] / hdiv * 2, right[1] / hdiv * 2, right[2] / hdiv * 2];
            var su = [up[0] / vdiv * 2, up[1] / vdiv * 2, up[2] / vdiv * 2];
            for (var v = 0; v < vdiv + 1; v++) {
                for (var h = 0; h < hdiv + 1; h++) {
                    var fi = ((hdiv + 1) * v + h) * 8;
                    ret[fi + 0] = sp[0] + sr[0] * h + su[0] * v;
                    ret[fi + 1] = sp[1] + sr[1] * h + su[1] * v;
                    ret[fi + 2] = sp[2] + sr[2] * h + su[2] * v;
                    ret[fi + 3] = normal[0];
                    ret[fi + 4] = normal[1];
                    ret[fi + 5] = normal[2];
                    ret[fi + 6] = 1 / hdiv * h;
                    ret[fi + 7] = 1 - 1 / vdiv * v;
                }
            }
            return ret;
        }
    }, {
        key: "cylinderPlane",
        value: function cylinderPlane(center, normal, up, right, divide, order) {
            var ret = new Array(32);
            var sp = [center[0] - up[0] - right[0], center[1] - up[1] - right[1], center[2] - up[2] - right[2]];
            var sr = [right[0] * 2, right[1] * 2, right[2] * 2];
            var su = [up[0] * 2, up[1] * 2, up[2] * 2];
            for (var v = 0; v < 2; v++) {
                for (var h = 0; h < 2; h++) {
                    var fi = (2 * v + h) * 8;
                    ret[fi + 0] = sp[0] + sr[0] * h + su[0] * v;
                    ret[fi + 1] = sp[1] + sr[1] * h + su[1] * v;
                    ret[fi + 2] = sp[2] + sr[2] * h + su[2] * v;
                    var l = Math.tan(Math.PI / divide) / Math.sin(Math.PI / divide);
                    if (h == 0) {
                        ret[fi + 3] = normal[0] - l * right[0];
                        ret[fi + 4] = normal[1] - l * right[1];
                        ret[fi + 5] = normal[2] - l * right[2];
                    } else {
                        ret[fi + 3] = normal[0] + l * right[0];
                        ret[fi + 4] = normal[1] + l * right[1];
                        ret[fi + 5] = normal[2] + l * right[2];
                    }
                    ret[fi + 6] = 1 / divide * (order + 1 + h);
                    ret[fi + 7] = v == 0 ? 1 : 0;
                }
            }
            return ret;
        }
    }, {
        key: "triangle",
        value: function triangle(center, normal, up, right) {
            var ret = new Array(24);
            var delta = 2 * Math.PI / 3;
            for (var i = 0; i < 3; i++) {
                var s = Math.sin(delta * i);
                var c = Math.cos(delta * i);
                ret[0 + 8 * i] = center[0] + c * up[0] + s * right[0];
                ret[1 + 8 * i] = center[1] + c * up[1] + s * right[1];
                ret[2 + 8 * i] = center[2] + c * up[2] + s * right[2];
                ret[3 + 8 * i] = normal[0];
                ret[4 + 8 * i] = normal[1];
                ret[5 + 8 * i] = normal[2];
                ret[6 + 8 * i] = 0.5 + (c * up[0] + s * right[0]) / 2;
                ret[7 + 8 * i] = 0.5 + (c * up[1] + s * right[1]) / 2;
            }
            return ret;
        }
    }, {
        key: "coneTriangle",
        value: function coneTriangle(center, normal, up, right, divide, order) {
            var ret = new Array(24);
            var delta = 2 * Math.PI / 3;
            for (var i = 0; i < 3; i++) {
                var s = Math.sin(delta * i);
                var c = Math.cos(delta * i);
                ret[0 + 8 * i] = center[0] + c * up[0] + s * right[0];
                ret[1 + 8 * i] = center[1] + c * up[1] + s * right[1];
                ret[2 + 8 * i] = center[2] + c * up[2] + s * right[2];
                ret[3 + 8 * i] = normal[0];
                ret[4 + 8 * i] = normal[1];
                ret[5 + 8 * i] = normal[2];
                var k = Math.pow(2, 0.5);
                var l = Math.tan(Math.PI / divide) / Math.sin(Math.PI / divide) / Math.pow(3, 0.5) * 2;
                if (i == 0) {
                    ret[3 + 8 * i] = normal[0];
                    ret[4 + 8 * i] = normal[1];
                    ret[5 + 8 * i] = normal[2];
                    ret[6 + 8 * i] = 0;
                    ret[7 + 8 * i] = 0;
                } else if (i == 1) {
                    ret[3 + 8 * i] = normal[0] / k + l * right[0];
                    ret[4 + 8 * i] = normal[1] / k + l * right[1];
                    ret[5 + 8 * i] = normal[2] / k + l * right[2];
                    ret[6 + 8 * i] = Math.cos(-Math.PI / divide / 2 * (order + 1));
                    ret[7 + 8 * i] = Math.sin(-Math.PI / divide / 2 * (order + 1));
                } else {
                    ret[3 + 8 * i] = normal[0] / k - l * right[0];
                    ret[4 + 8 * i] = normal[1] / k - l * right[1];
                    ret[5 + 8 * i] = normal[2] / k - l * right[2];
                    ret[6 + 8 * i] = Math.cos(-Math.PI / divide / 2 * order);
                    ret[7 + 8 * i] = Math.sin(-Math.PI / divide / 2 * order);
                }
            }
            return ret;
        }
    }, {
        key: "triangleIndex",
        value: function triangleIndex(offset) {
            var ret = new Array(3);
            ret[0] = offset;
            ret[1] = offset + 2;
            ret[2] = offset + 1;
            return ret;
        }
    }, {
        key: "planeIndex",
        value: function planeIndex() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var hdiv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var vdiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var ret = new Array(6 * hdiv * vdiv);
            for (var v = 0; v < vdiv; v++) {
                for (var h = 0; h < hdiv; h++) {
                    var fi = (hdiv * v + h) * 6;
                    var ld = offset + (hdiv + 1) * v + h;
                    var lu = offset + (hdiv + 1) * (v + 1) + h;
                    ret[fi + 0] = ld;
                    ret[fi + 1] = ld + 1;
                    ret[fi + 2] = lu;
                    ret[fi + 3] = lu;
                    ret[fi + 4] = ld + 1;
                    ret[fi + 5] = lu + 1;
                }
            }
            return ret;
        }
    }, {
        key: "circle",
        value: function circle(center, normal, up, right) {
            var divide = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;

            var ret = new Array((3 + divide) * 6);
            // center
            ret[0] = center[0];
            ret[1] = center[1];
            ret[2] = center[2];
            ret[3] = normal[0];
            ret[4] = normal[1];
            ret[5] = normal[2];
            ret[6] = 0.5;
            ret[7] = 0.5;
            var delta = 2 * Math.PI / divide;
            for (var v = 0; v < divide + 1; v++) {
                var fi = 8 + v * 8;
                var s = Math.sin(delta * v);
                var c = Math.cos(delta * v);
                ret[fi + 0] = center[0] + c * up[0] + s * right[0];
                ret[fi + 1] = center[1] + c * up[1] + s * right[1];
                ret[fi + 2] = center[2] + c * up[2] + s * right[2];
                ret[fi + 3] = normal[0];
                ret[fi + 4] = normal[1];
                ret[fi + 5] = normal[2];
                ret[fi + 6] = 0.5 + 0.5 * s;
                ret[fi + 7] = 0.5 - 0.5 * c;
            }
            return ret;
        }
    }, {
        key: "circleIndex",
        value: function circleIndex(offset, divide) {
            var ret = new Array(3 * divide);
            for (var i = 0; i < divide; i++) {
                ret[3 * i + 0] = offset;
                ret[3 * i + 1] = offset + (i + 2);
                ret[3 * i + 2] = offset + (i + 1);
            }
            return ret;
        }
    }, {
        key: "capsule",
        value: function capsule(center, up, right, forward) {
            var vdiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
            var hdiv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;

            var ret = new Array((vdiv * hdiv + 2) * 8);
            //top(0)
            ret[0] = center[0] + 2 * up[0];
            ret[1] = center[1] + 2 * up[1];
            ret[2] = center[2] + 2 * up[2];
            ret[3] = up[0];
            ret[4] = up[1];
            ret[5] = up[2];
            ret[6] = 0;
            ret[7] = 0;
            // bottom(1)
            ret[8] = center[0] - 2 * up[0];
            ret[9] = center[1] - 2 * up[1];
            ret[10] = center[2] - 2 * up[2];
            ret[11] = -up[0];
            ret[12] = -up[1];
            ret[13] = -up[2];
            ret[14] = 0;
            ret[15] = 1;
            var vDelta = Math.PI / (vdiv + 1);
            var hDelta = Math.PI * 2 / hdiv;
            for (var v = 0; v < vdiv; v++) {
                var vc = Math.cos((v + 1) * vDelta);
                var vs = Math.sin((v + 1) * vDelta);
                var phi = vDelta * v;
                for (var h = 0; h < hdiv + 1; h++) {
                    var hc = Math.cos(h * hDelta);
                    var hs = Math.sin(h * hDelta);
                    var fi = 16 + (v * (hdiv + 1) + h) * 8;
                    ret[fi + 0] = center[0] + vc * up[0] + vs * (forward[0] * hc + right[0] * hs);
                    ret[fi + 1] = center[1] + vc * up[1] + vs * (forward[1] * hc + right[1] * hs);
                    ret[fi + 2] = center[2] + vc * up[2] + vs * (forward[2] * hc + right[2] * hs);
                    ret[fi + 3] = center[0] + vc * up[0] + vs * (forward[0] * hc + right[0] * hs);
                    ret[fi + 4] = center[1] + vc * up[1] + vs * (forward[1] * hc + right[1] * hs);
                    ret[fi + 5] = center[2] + vc * up[2] + vs * (forward[2] * hc + right[2] * hs);
                    var theta = hDelta * h;
                    ret[fi + 6] = theta / Math.PI / 2;
                    ret[fi + 7] = phi / Math.PI;
                    ret[fi + 0] = ret[fi + 0] > 0 ? ret[fi + 0] + up[0] : ret[fi + 0] - up[0];
                    ret[fi + 1] = ret[fi + 1] > 0 ? ret[fi + 1] + up[1] : ret[fi + 1] - up[1];
                    ret[fi + 2] = ret[fi + 2] > 0 ? ret[fi + 2] + up[2] : ret[fi + 2] - up[2];
                }
            }
            return ret;
        }
    }, {
        key: "sphere",
        value: function sphere(center, up, right, forward) {
            var vdiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
            var hdiv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;

            var ret = new Array((vdiv * hdiv + 2) * 8);
            //top(0)
            ret[0] = center[0] + up[0];
            ret[1] = center[1] + up[1];
            ret[2] = center[2] + up[2];
            ret[3] = up[0];
            ret[4] = up[1];
            ret[5] = up[2];
            ret[6] = 0;
            ret[7] = 0;
            // bottom(1)
            ret[8] = center[0] - up[0];
            ret[9] = center[1] - up[1];
            ret[10] = center[2] - up[2];
            ret[11] = -up[0];
            ret[12] = -up[1];
            ret[13] = -up[2];
            ret[14] = 0;
            ret[15] = 1;
            var vDelta = Math.PI / (vdiv + 1);
            var hDelta = Math.PI * 2 / hdiv;
            for (var v = 0; v < vdiv; v++) {
                var vc = Math.cos((v + 1) * vDelta);
                var vs = Math.sin((v + 1) * vDelta);
                var phi = vDelta * v;
                for (var h = 0; h < hdiv + 1; h++) {
                    var hc = Math.cos(h * hDelta);
                    var hs = Math.sin(h * hDelta);
                    var fi = 16 + (v * (hdiv + 1) + h) * 8;
                    ret[fi + 0] = center[0] + vc * up[0] + vs * (forward[0] * hc + right[0] * hs);
                    ret[fi + 1] = center[1] + vc * up[1] + vs * (forward[1] * hc + right[1] * hs);
                    ret[fi + 2] = center[2] + vc * up[2] + vs * (forward[2] * hc + right[2] * hs);
                    ret[fi + 3] = center[0] + vc * up[0] + vs * (forward[0] * hc + right[0] * hs);
                    ret[fi + 4] = center[1] + vc * up[1] + vs * (forward[1] * hc + right[1] * hs);
                    ret[fi + 5] = center[2] + vc * up[2] + vs * (forward[2] * hc + right[2] * hs);
                    var theta = hDelta * h;
                    ret[fi + 6] = theta / Math.PI / 2;
                    ret[fi + 7] = phi / Math.PI;
                }
            }
            return ret;
        }
    }, {
        key: "sphereIndex",
        value: function sphereIndex(offset) {
            var vdiv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            var hdiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

            var ret = new Array(hdiv * vdiv * 6);
            var getIndex = function getIndex(i, j) {
                return offset + (hdiv + 1) * j + 2 + i;
            };
            var top = offset;
            var bottom = offset + 1;
            // upper side
            for (var i = 0; i < hdiv; i++) {
                ret[3 * i + 0] = top;
                ret[3 * i + 1] = getIndex(i + 1, 0);
                ret[3 * i + 2] = getIndex(i, 0);
            }
            var k = 3 * hdiv;
            // middle
            for (var j = 0; j < vdiv - 1; j++) {
                for (var _i = 0; _i < hdiv; _i++) {
                    ret[(hdiv * j + _i) * 6 + k] = getIndex(_i, j);
                    ret[(hdiv * j + _i) * 6 + k + 1] = getIndex(_i + 1, j);
                    ret[(hdiv * j + _i) * 6 + k + 2] = getIndex(_i, j + 1);
                    ret[(hdiv * j + _i) * 6 + k + 3] = getIndex(_i, j + 1);
                    ret[(hdiv * j + _i) * 6 + k + 4] = getIndex(_i + 1, j);
                    ret[(hdiv * j + _i) * 6 + k + 5] = getIndex(_i + 1, j + 1);
                }
            }
            var l = hdiv * (vdiv - 1) * 6 + k;
            // lower side
            for (var _i2 = 0; _i2 < hdiv; _i2++) {
                ret[3 * _i2 + l + 0] = bottom;
                ret[3 * _i2 + l + 1] = getIndex(_i2, vdiv - 1);
                ret[3 * _i2 + l + 2] = getIndex(_i2 + 1, vdiv - 1);
            }
            return ret;
        }
    }]);

    return GeometryUtility;
}();

exports.default = GeometryUtility;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "GRIMOIRE": null,
    "WEBGL_VERSION": "1"
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MaterialFactory = __webpack_require__(4);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _Unlit = __webpack_require__(95);

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

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DefaultMacro = __webpack_require__(56);

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
         * The map of macro.
         */
        this._macro = {};
        /**
         * Handlers functions for changing macro.
         */
        this._observers = {};
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

            if (val === null) {
                val = "";
            }
            if (this._macro[key] !== val) {
                this._macro[key] = val;
                if (!this._observers[key]) {
                    this._observers[key] = [];
                }
                this._notifyMacroChanged(key, val);
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
            var macro = this._macro[key];
            if (macro === null) {
                return "";
            } else {
                return macro;
            }
        }
    }, {
        key: "watch",
        value: function watch(macroName, handler) {
            var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var observers = this._observers[macroName];
            if (!observers) {
                observers = this._observers[macroName] = [];
            }
            observers.push(handler);
            if (immediate && this._macro[macroName] !== void 0) {
                handler(this._macro[macroName], true);
            }
        }
    }, {
        key: "unwatch",
        value: function unwatch(macroName, handler) {
            var observers = this._observers[macroName];
            if (!observers) {
                return false;
            }
            for (var i = 0; i < observers.length; i++) {
                if (observers[i] === handler) {
                    observers.splice(i, 1);
                    return true;
                }
            }
        }
    }, {
        key: "_notifyMacroChanged",
        value: function _notifyMacroChanged(key, value) {
            for (var i = 0; i < this._observers[key].length; i++) {
                this._observers[key][i](value, false);
            }
        }
    }]);

    return MacroRegistory;
}();

exports.default = MacroRegistory;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ManagedProgram = __webpack_require__(64);

var _ManagedProgram2 = _interopRequireDefault(_ManagedProgram);

var _ManagedShader = __webpack_require__(65);

var _ManagedShader2 = _interopRequireDefault(_ManagedShader);

var _MaterialFactory = __webpack_require__(4);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _Geometry = __webpack_require__(12);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _UniformResolverRegistry = __webpack_require__(5);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

var _header = __webpack_require__(80);

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
        var factory = _MaterialFactory2.default.get(this._gl);
        var macroRegister = factory.macro;
        // register macro

        var _loop = function _loop(key) {
            var macro = passRecipe.macros[key];
            _this._macro[macro.macroName] = macro.value;
            if (macro.target === "expose") {
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
            } else if (macro.target === "refer") {
                _this._macro[macro.macroName] = macro.value;
                macroRegister.watch(macro.macroName, function (val, immediate) {
                    _this._macro[macro.macroName] = val;
                    if (!immediate) {
                        _this._updateProgram();
                    }
                }, true);
            }
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
            var lFS = this.fs;
            this.fs = _ManagedShader2.default.getShader(this._gl, WebGLRenderingContext.FRAGMENT_SHADER, this._generateShaderCode("FS"));
            var lVS = this.vs;
            this.vs = _ManagedShader2.default.getShader(this._gl, WebGLRenderingContext.VERTEX_SHADER, this._generateShaderCode("VS"));
            if (lFS && lVS) {
                lFS.release();
                lVS.release();
            }
            var lP = this.program;
            this.program = _ManagedProgram2.default.getProgram(this._gl, [this.vs, this.fs]);
            if (lP) {
                lP.release();
            }
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

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pass = __webpack_require__(59);

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

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ResourceBase2 = __webpack_require__(2);

var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buffer = function (_ResourceBase) {
    _inherits(Buffer, _ResourceBase);

    function Buffer(gl) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WebGLRenderingContext.ARRAY_BUFFER;
        var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.STATIC_DRAW;

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

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MaterialFactory = __webpack_require__(4);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            if (ext) {
                _MaterialFactory2.default.get(this.gl).macro.setValue(name.toUpperCase(), "");
            }
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

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashCalculator = __webpack_require__(16);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

var _Program2 = __webpack_require__(66);

var _Program3 = _interopRequireDefault(_Program2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManagedProgram = function (_Program) {
    _inherits(ManagedProgram, _Program);

    function ManagedProgram(gl, hash) {
        _classCallCheck(this, ManagedProgram);

        var _this = _possibleConstructorReturn(this, (ManagedProgram.__proto__ || Object.getPrototypeOf(ManagedProgram)).call(this, gl));

        _this.hash = hash;
        _this._referenceCount = 0;
        return _this;
    }

    _createClass(ManagedProgram, [{
        key: "release",
        value: function release() {
            this._referenceCount--;
            if (this._referenceCount === 0) {
                this.destroy();
                ManagedProgram._managedPrograms.get(this.gl)[this.hash] = void 0;
            }
        }
    }], [{
        key: "getProgram",
        value: function getProgram(gl, shaders) {
            if (!ManagedProgram._managedPrograms.has(gl)) {
                ManagedProgram._managedPrograms.set(gl, {});
            }
            var programs = ManagedProgram._managedPrograms.get(gl);
            var hashSource = "";
            shaders = shaders.sort();
            shaders.forEach(function (s) {
                hashSource += s.index + ",";
            });
            var hash = _HashCalculator2.default.calcHash(hashSource);
            if (programs[hash] === void 0) {
                programs[hash] = new ManagedProgram(gl, hash);
                programs[hash].update(shaders);
            }
            programs[hash]._referenceCount++;
            return programs[hash];
        }
    }]);

    return ManagedProgram;
}(_Program3.default);

exports.default = ManagedProgram;

ManagedProgram._managedPrograms = new Map();

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashCalculator = __webpack_require__(16);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

var _Shader2 = __webpack_require__(68);

var _Shader3 = _interopRequireDefault(_Shader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provides abstraction of shader instance.
 * If specified shader source was instanced already, delegate actual instance.
 * And counts reference of shader and if that shader was released and the count is zero, this shader resource would be deleted automatically.
 *
 * DO NOT instanciate this class directly. Use getShader method instead.
 */
var ManagedShader = function (_Shader) {
    _inherits(ManagedShader, _Shader);

    function ManagedShader(gl, type, sourceCode, hash) {
        _classCallCheck(this, ManagedShader);

        var _this = _possibleConstructorReturn(this, (ManagedShader.__proto__ || Object.getPrototypeOf(ManagedShader)).call(this, gl, type, sourceCode));

        _this.type = type;
        _this.sourceCode = sourceCode;
        _this.hash = hash;
        _this._referenceCount = 0;
        return _this;
    }
    /**
     * Obtain a reference to shader.
     * @param  {WebGLRenderingContext} gl     [description]
     * @param  {number}                type   [description]
     * @param  {string}                shader [description]
     * @return {ManagedShader}                [description]
     */


    _createClass(ManagedShader, [{
        key: "release",

        /**
         * Release shader instance from reference.
         * Do not call this method dupelicately per a getShader call.
         *
         * That would make this shader disposed unintendedly.
         */
        value: function release() {
            this._referenceCount--;
            if (this._referenceCount === 0) {
                this.destroy();
                ManagedShader._managedShaders.get(this.gl)[this.hash] = void 0;
            }
        }
    }], [{
        key: "getShader",
        value: function getShader(gl, type, shader) {
            if (!ManagedShader._managedShaders.has(gl)) {
                ManagedShader._managedShaders.set(gl, {});
            }
            var shaders = ManagedShader._managedShaders.get(gl);
            var hash = _HashCalculator2.default.calcHash(shader + type);
            if (shaders[hash] === void 0) {
                shaders[hash] = new ManagedShader(gl, type, shader, hash);
            }
            shaders[hash]._referenceCount++;
            return shaders[hash];
        }
    }]);

    return ManagedShader;
}(_Shader3.default);

exports.default = ManagedShader;

ManagedShader._managedShaders = new Map();

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ResourceCache = __webpack_require__(67);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _UniformProxy = __webpack_require__(69);

var _UniformProxy2 = _interopRequireDefault(_UniformProxy);

var _ResourceBase2 = __webpack_require__(2);

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
            }
            this._uniformLocations = {}; // reset location caches
            this._attributeLocations = {};
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
            this._uniformLocations = {};
            this._attributeLocations = {};
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

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ResourceBase2 = __webpack_require__(2);

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
                throw new Error("Compiling shader failed.\nSourceCode:\n" + this._insertLineNumbers(source) + "\n\nErrorCode:" + this.gl.getShaderInfoLog(this.shader));
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
    }, {
        key: "_insertLineNumbers",
        value: function _insertLineNumbers(source) {
            source = "1:" + source;
            var lN = 2;
            for (var i = 0; i < source.length; i++) {
                var c = source.charAt(i);
                if (c === '\n') {
                    source = source.substring(0, i + 1) + (lN + ":") + source.substring(i + 1, source.length);
                    i++;
                    lN++;
                }
            }
            return source;
        }
    }]);

    return Shader;
}(_ResourceBase3.default);

exports.default = Shader;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat3Cache = new Float32Array(9);

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
                _this2._gl.uniformMatrix4fv(l, false, mat.rawElements);
            });
        }
    }, {
        key: "uniformMatrix3",
        value: function uniformMatrix3(variableName, mat) {
            var _this3 = this;

            this._pass(variableName, function (l) {
                var r = mat.rawElements;
                for (var i = 0; i < 3; i++) {
                    mat3Cache[3 * i + 0] = r[4 * i + 0];
                    mat3Cache[3 * i + 1] = r[4 * i + 1];
                    mat3Cache[3 * i + 2] = r[4 * i + 2];
                }
                _this3._gl.uniformMatrix3fv(l, false, mat3Cache);
            });
        }
    }, {
        key: "uniformMatrixArray",
        value: function uniformMatrixArray(variableName, matricies) {
            var _this4 = this;

            var length = matricies.length / 16;

            var _loop = function _loop(i) {
                _this4._passAsArray(variableName, i, function (l) {
                    return _this4._gl.uniformMatrix4fv(l, false, new Float32Array(matricies.buffer, matricies.byteOffset + i * 64));
                });
            };

            for (var i = 0; i < length; i++) {
                _loop(i);
            }
        }
    }, {
        key: "uniformFloat",
        value: function uniformFloat(variableName, val) {
            var _this5 = this;

            this._pass(variableName, function (l) {
                return _this5._gl.uniform1f(l, val);
            });
        }
    }, {
        key: "uniformFloatArray",
        value: function uniformFloatArray(variableName, val) {
            var _this6 = this;

            this._pass(variableName, function (l) {
                return _this6._gl.uniform1fv(l, val);
            });
        }
    }, {
        key: "uniformInt",
        value: function uniformInt(variableName, val) {
            var _this7 = this;

            this._pass(variableName, function (l) {
                return _this7._gl.uniform1i(l, val);
            });
        }
    }, {
        key: "uniformVector2",
        value: function uniformVector2(variableName, val) {
            var _this8 = this;

            this._pass(variableName, function (l) {
                return _this8._gl.uniform2f(l, val.X, val.Y);
            });
        }
    }, {
        key: "uniformIntVector2",
        value: function uniformIntVector2(variableName, val) {
            var _this9 = this;

            this._pass(variableName, function (l) {
                return _this9._gl.uniform2i(l, val.X, val.Y);
            });
        }
    }, {
        key: "uniformVector2Array",
        value: function uniformVector2Array(variableName, val) {
            var _this10 = this;

            this._pass(variableName, function (l) {
                return _this10._gl.uniform2fv(l, val);
            });
        }
    }, {
        key: "uniformVector3",
        value: function uniformVector3(variableName, val) {
            var _this11 = this;

            this._pass(variableName, function (l) {
                return _this11._gl.uniform3f(l, val.X, val.Y, val.Z);
            });
        }
    }, {
        key: "uniformIntVector3",
        value: function uniformIntVector3(variableName, val) {
            var _this12 = this;

            this._pass(variableName, function (l) {
                return _this12._gl.uniform3i(l, val.X, val.Y, val.Z);
            });
        }
    }, {
        key: "uniformVector3Array",
        value: function uniformVector3Array(variableName, val) {
            var _this13 = this;

            this._pass(variableName, function (l) {
                return _this13._gl.uniform3fv(l, val);
            });
        }
    }, {
        key: "uniformColor3",
        value: function uniformColor3(variableName, val) {
            var _this14 = this;

            this._pass(variableName, function (l) {
                return _this14._gl.uniform3f(l, val.R, val.G, val.B);
            });
        }
    }, {
        key: "uniformVector4",
        value: function uniformVector4(variableName, val) {
            var _this15 = this;

            this._pass(variableName, function (l) {
                return _this15._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
            });
        }
    }, {
        key: "uniformIntVector4",
        value: function uniformIntVector4(variableName, val) {
            var _this16 = this;

            this._pass(variableName, function (l) {
                return _this16._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
            });
        }
    }, {
        key: "uniformVector4Array",
        value: function uniformVector4Array(variableName, val) {
            var _this17 = this;

            this._pass(variableName, function (l) {
                return _this17._gl.uniform4fv(l, val);
            });
        }
    }, {
        key: "uniformColor4",
        value: function uniformColor4(variableName, val) {
            var _this18 = this;

            this._pass(variableName, function (l) {
                return _this18._gl.uniform4f(l, val.R, val.G, val.B, val.A);
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

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

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
                if (r.rendarable.index === rendarable.index) {
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

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

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
            rendarable.setRenderableIndex(this._renderables.length);
        }
    }, {
        key: "removeRenderable",
        value: function removeRenderable(renderable) {
            var index = this._renderables.indexOf(renderable);
            if (index === -1) {
                return; // Could not find specified renderable
            }
            this._renderables.splice(index, 1);
            this._renderables.forEach(function (r, i) {
                r.setRenderableIndex(i + 1);
            });
            this._queues.forEach(function (q) {
                return q.remove(renderable);
            });
        }
    }, {
        key: "getByIndex",
        value: function getByIndex(index) {
            return this._renderables[index];
        }
    }]);

    return RenderQueueRegistry;
}();

exports.default = RenderQueueRegistry;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImportResolver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _CacheResolver2 = __webpack_require__(19);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

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
        _matITM: "MODELINVERMousETRANSPOSE",
        _matITVM: "MODELVIEWINVERSETRANSPOSE"
    }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HashCalculator = __webpack_require__(16);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

var _SortTransformUtility = __webpack_require__(77);

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
            var sourceHash = _HashCalculator2.default.calcHash(source);
            if (SortParser._parsedCache[sourceHash] !== void 0) {
                return new Promise(function (resolve, reject) {
                    resolve(SortParser._parsedCache[sourceHash]);
                });
            } else {
                return SortParser._parse(source).then(function (v) {
                    SortParser._parsedCache[source] = v;
                    return v;
                });
            }
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
    }]);

    return SortParser;
}();
/**
 * Cache to prevent double loading
 */


SortParser._parsedCache = {};
exports.default = SortParser;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

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
        if (index !== -1) {
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
    ExposeMacro: function ExposeMacro() {
        return;
    },
    ReferMacro: function ReferMacro() {
        return;
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Preferences = __webpack_require__(76);

var _Preferences2 = _interopRequireDefault(_Preferences);

var _TypeToConstant = __webpack_require__(78);

var _TypeToConstant2 = _interopRequireDefault(_TypeToConstant);

var _NameSemanticsPair = __webpack_require__(74);

var _NameSemanticsPair2 = _interopRequireDefault(_NameSemanticsPair);

var _ImportResolver = __webpack_require__(73);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
                    value: value,
                    target: "expose"
                };
            }
            regex = /@ReferMacro\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*(.+)\s*\)/g;
            while (regexResult = regex.exec(source)) {
                if (!regexResult[1] || !regexResult[2]) {
                    throw new Error("Invalid parameter was passed on @ReferMacro preference on '" + regexResult[0] + "'");
                }
                result[regexResult[1]] = {
                    name: regexResult[1],
                    macroName: regexResult[1],
                    value: regexResult[2],
                    target: "refer"
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
                    blendFuncSeparate: [WebGLRenderingContext.ONE, WebGLRenderingContext.ZERO, WebGLRenderingContext.ONE, WebGLRenderingContext.ZERO],
                    blendEquationSeparate: [WebGLRenderingContext.FUNC_ADD, WebGLRenderingContext.FUNC_ADD],
                    lineWidth: [1],
                    frontFace: [WebGLRenderingContext.CCW],
                    depthRange: [0, 1],
                    depthFunc: [WebGLRenderingContext.LESS]
                }
            };
            var regex = /@([A-Za-z]+)\(([\sa-zA-Z_0-9,\.\-]*)\)/g;
            var regexResult = void 0;
            while (regexResult = regex.exec(source)) {
                var prefParser = _Preferences2.default[regexResult[1]];
                if (!prefParser) {
                    throw new Error("Unknown pass preference " + regexResult[1] + " was specified.");
                }
                prefParser(result, regexResult[2].split(",").map(function (m) {
                    return m.trim();
                }));
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
                        text += "\n";
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

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.AABB;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "/*Header start*/\n// helper macros\n#ifdef FS\n  #define FS_PREC(prec,type) precision prec type;\n  #define VS_PREC(prec,type)\n#endif\n#ifdef VS\n#define VS_PREC(prec,type) precision prec type;\n#define FS_PREC(prec,type)\n#endif\n// constants\n#define PI 3.141592653589793\n#define E 2.718281828459045\n#define LN2 0.6931471805599453\n#define LN10 2.302585092994046\n#define LOG2E 1.4426950408889634\n#define LOG10E 0.4342944819032518\n#define SQRT2 1.4142135623730951\n#define SQRT1_2 0.7071067811865476\n\n/*Header end*/\n"

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Matrix = __webpack_require__(6);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _UniformResolverRegistry = __webpack_require__(5);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_UniformResolverRegistry2.default.add("MODELVIEWPROJECTION", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.transform.calcPVM(args.camera));
    };
});
_UniformResolverRegistry2.default.add("LOCAL", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.transform.localTransform);
    };
});
_UniformResolverRegistry2.default.add("MODEL", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.transform.globalTransform);
    };
});
_UniformResolverRegistry2.default.add("MODELVIEW", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.camera.ViewMatrix.multiplyWith(args.transform.globalTransform));
    };
});
_UniformResolverRegistry2.default.add("VIEW", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.camera.ViewMatrix);
    };
});
_UniformResolverRegistry2.default.add("PROJECTION", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.camera.ProjectionMatrix);
    };
});
_UniformResolverRegistry2.default.add("MODELINVERSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
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
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, args.camera.InvProjectionMatrix);
    };
});
_UniformResolverRegistry2.default.add("MODELVIEWINVERSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.calcVM(args.camera)));
    };
});
_UniformResolverRegistry2.default.add("MODELVIEWPROJECTIONINVERSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.calcPVM(args.camera)));
    };
});
_UniformResolverRegistry2.default.add("MODELINVERSETRANSPOSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix(valInfo.name, _Matrix2.default.transpose(_Matrix2.default.inverse(args.transform.globalTransform)));
    };
});
_UniformResolverRegistry2.default.add("MODELVIEWINVERSETRANSPOSE", function (valInfo) {
    return function (proxy, args) {
        if (!args.transform) {
            proxy.uniformMatrix(valInfo.name, _Matrix2.default.identity());
            return;
        }
        proxy.uniformMatrix3(valInfo.name, _Matrix2.default.transpose(_Matrix2.default.inverse(args.transform.calcVM(args.camera))));
    };
});
exports.default = null;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MeshIndexCalculator = __webpack_require__(26);

var _MeshIndexCalculator2 = _interopRequireDefault(_MeshIndexCalculator);

var _Vector = __webpack_require__(89);

var _Vector2 = _interopRequireDefault(_Vector);

var _Vector3 = __webpack_require__(8);

var _Vector4 = _interopRequireDefault(_Vector3);

var _UniformResolverRegistry = __webpack_require__(5);

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
_UniformResolverRegistry2.default.add("MESH_INDEX", function (valInfo) {
    return function (proxy, args) {
        var index = args.renderable.index;
        proxy.uniformVector4(valInfo.name, _MeshIndexCalculator2.default.fromIndex(index));
    };
});
exports.default = null;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Texture2D = __webpack_require__(1);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _UniformResolverRegistry = __webpack_require__(5);

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
        proxy.uniformTexture2D(name, _Texture2D2.default.defaultTextures.get(proxy.program.gl));
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

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TimeComponent = __webpack_require__(46);

var _TimeComponent2 = _interopRequireDefault(_TimeComponent);

var _RenderHitareaComponent = __webpack_require__(41);

var _RenderHitareaComponent2 = _interopRequireDefault(_RenderHitareaComponent);

var _PositionConverter = __webpack_require__(51);

var _PositionConverter2 = _interopRequireDefault(_PositionConverter);

var _NodeConverter = __webpack_require__(50);

var _NodeConverter2 = _interopRequireDefault(_NodeConverter);

var _DefaultMaterial = __webpack_require__(57);

var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);

var _DefaultPrimitives = __webpack_require__(54);

var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);

var _grimoirejs = __webpack_require__(18);

var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

var _AssetLoadingManagerComponent = __webpack_require__(30);

var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);

var _CameraComponent = __webpack_require__(31);

var _CameraComponent2 = _interopRequireDefault(_CameraComponent);

var _CanvasInitializerComponent = __webpack_require__(32);

var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);

var _FullscreenComponent = __webpack_require__(33);

var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);

var _GeometryComponent = __webpack_require__(34);

var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);

var _GeometryRegistoryComponent = __webpack_require__(35);

var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);

var _HTMLBinderComponent = __webpack_require__(36);

var _HTMLBinderComponent2 = _interopRequireDefault(_HTMLBinderComponent);

var _LoopManagerComponent = __webpack_require__(22);

var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

var _MaterialComponent = __webpack_require__(23);

var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

var _MaterialContainerComponent = __webpack_require__(9);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _MaterialImporterComponent = __webpack_require__(37);

var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);

var _MeshRendererComponent = __webpack_require__(38);

var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

var _MouseCameraControlComponent = __webpack_require__(39);

var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);

var _RenderBufferComponent = __webpack_require__(40);

var _RenderBufferComponent2 = _interopRequireDefault(_RenderBufferComponent);

var _RendererComponent = __webpack_require__(43);

var _RendererComponent2 = _interopRequireDefault(_RendererComponent);

var _RendererManagerComponent = __webpack_require__(44);

var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);

var _RenderQuadComponent = __webpack_require__(42);

var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);

var _RenderSceneComponent = __webpack_require__(10);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

var _SceneComponent = __webpack_require__(11);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _TextureBufferComponent = __webpack_require__(45);

var _TextureBufferComponent2 = _interopRequireDefault(_TextureBufferComponent);

var _TextureComponent = __webpack_require__(24);

var _TextureComponent2 = _interopRequireDefault(_TextureComponent);

var _TransformComponent = __webpack_require__(3);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _CanvasSizeConverter = __webpack_require__(47);

var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);

var _GeometryConverter = __webpack_require__(48);

var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);

var _MaterialConverter = __webpack_require__(49);

var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);

var _TextureConverter = __webpack_require__(52);

var _TextureConverter2 = _interopRequireDefault(_TextureConverter);

var _ViewportConverter = __webpack_require__(53);

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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
                            _grimoirejs2.default.registerComponent(_$ns("RenderHitArea"), _RenderHitareaComponent2.default);
                            _grimoirejs2.default.registerComponent(_$ns("Time"), _TimeComponent2.default);
                            _grimoirejs2.default.registerConverter(_$ns("CanvasSize"), _CanvasSizeConverter2.default);
                            _grimoirejs2.default.registerConverter(_$ns("Geometry"), _GeometryConverter2.default);
                            _grimoirejs2.default.registerConverter(_$ns("Material"), _MaterialConverter2.default);
                            _grimoirejs2.default.registerConverter(_$ns("Texture"), _TextureConverter2.default);
                            _grimoirejs2.default.registerConverter(_$ns("Texture2D"), _TextureConverter2.default);
                            _grimoirejs2.default.registerConverter(_$ns("Viewport"), _ViewportConverter2.default);
                            _grimoirejs2.default.registerConverter(_$ns("Node"), _NodeConverter2.default);
                            _grimoirejs2.default.registerConverter(_PositionConverter2.default);
                            _grimoirejs2.default.registerNode("goml", ["CanvasInitializer", "LoopManager", "AssetLoadingManager", "GeometryRegistory", "RendererManager", "Fullscreen"]);
                            _grimoirejs2.default.registerNode("scene", ["Scene"]);
                            _grimoirejs2.default.registerNode("object", ["Transform"]);
                            _grimoirejs2.default.registerNode("camera", ["Camera"], { position: "0,0,10" }, "object");
                            _grimoirejs2.default.registerNode("mesh", ["MaterialContainer", "MeshRenderer"], {}, "object");
                            _grimoirejs2.default.registerNode("renderer", ["Renderer"]);
                            _grimoirejs2.default.registerNode("geometry", ["Geometry"]);
                            _grimoirejs2.default.registerNode("texture", ["Texture"]);
                            _grimoirejs2.default.registerNode("material", ["Material"]);
                            _grimoirejs2.default.registerNode("import-material", ["MaterialImporter"]);
                            _grimoirejs2.default.registerNode("texture-buffer", ["TextureBuffer"]);
                            _grimoirejs2.default.registerNode("render-buffer", ["RenderBuffer"]);
                            _grimoirejs2.default.registerNode("render-scene", ["RenderScene", "RenderHitArea"], {
                                material: null
                            });
                            _grimoirejs2.default.registerNode("render-quad", ["MaterialContainer", "RenderQuad"], {
                                material: null
                            });
                            _DefaultPrimitives2.default.register();
                            _DefaultMaterial2.default.register();

                        case 49:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    });
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * GOMLファイルのルートノード
     * ツリーに唯一一つ必要なコンポーネントなどをつけておくためのノード。
     * 特に、`<canvas>`の初期化やループの管理など、最初の初期化時のパラメーターを受け取るためのコンポーネントとともに、
     * `<canvas>`の設定(`width`や`height`)またはフルスクリーンなどのコンポーネントを含む。
     */
    goml: {
        components: ["CanvasInitializer", "LoopManager", "AssetLoadingManager", "GeometryRegistory", "RendererManager", "Fullscreen"]
    },
    /**
     * ある3D空間上のモデルの配置やカメラの設定などの場面の設定を含むためのノード
     * カメラや、ライト、メッシュなど空間に配置するためのノードです。
     * 全ての場面に存在する座標を持ちうるノード(`TransformComponent`を含むノード)は必ずこのノードの子ノードのとして存在する必要があります。
     */
    scene: {
        components: ["Scene"]
    },
    /**
     * 3D空間上の物体を意味するノード
     * メッシュやカメラなどのベースとなるノードです。このノードの子要素には親要素の変型量(`position`や`rotation`)などが伝搬します。
     * 詳しくは`TransformComponent`を参照すると良いでしょう。
     */
    object: {
        components: ["Transform"]
    },
    /**
     * 3D空間を撮影するためのカメラのノード
     * 3D空間を撮影するためのカメラを意味するノードです。シーンをレンダリングするには最低一つのカメラがシーンに属していなければなりません。
     */
    camera: {
        components: ["Camera"],
        default: {
            position: [0, 0, 10]
        },
        super: "object"
    },
    /**
     * 3D空間上のモデルなど、 **映るもの** を表すためのノード
     * 3D空間上に存在する映るものを意味するノードです。シーンに何かを写すには最低一つのメッシュがシーンに属していなければなりません。
     * メッシュは、マテリアル(材質)とジオメトリ(形状)からなります。この2つの指定を変えることで、様々な表現が3D空間上で可能になります。
     */
    mesh: {
        components: ["MaterialContainer", "MeshRenderer"],
        super: "object"
    },
    /**
     * キャンバスの描画手法を指定するためのノード
     * キャンバス上の領域をどのように描画するかを示すためのノードです。gomlの読み込み時に一つも存在しない場合は、自動的にgoml直下に生成されます。
     * 1つ以上のレンダラーを含むことで、キャンバスの複数の領域をレンダリングしたりすることができるようになります。
     * また、この子要素に指定する`<render-XXX>`ノードなどによって、どのようにその領域を描画するかが決定されます。
     * 通常、`<renderer>`の子ノードに何も存在しない場合、自動的に`<render-scene>`タグが生成されます。
     */
    renderer: {
        components: ["Renderer"]
    },
    /**
     * 新しい形状を生成するためのノード
     * 単純な変形(`scale`、`position`、`rotation`だけで表せない)、例えば円の分割数などを指定したい別の形状を明示的に生成するためのノードです。
     */
    geometry: {
        components: ["Geometry"]
    },
    /**
     * テクスチャを明示的に読み込むためのノード
     * テクスチャを読み込むためのノードです。通常、テクスチャはurlをマテリアルに指定するなどして読み込まれますが、
     * サンプラの指定などをしたい場合、このタグで明示的に読み込むことにより読み込むことができます。
     */
    texture: {
        components: ["Texture"]
    },
    /**
     * マテリアルを明示的に読み込むためのノード
     * マテリアルを生成するためのノードです。メッシュからこのノードを参照して利用することにより、複数のメッシュで共通のマテリアルのインスタンスを参照させることができます。
     * これは、同時にマテリアルの値が編集できるだけでなく、パフォーマンス的にも大きな利点をもたらします。
     */
    material: {
        components: ["Material"]
    },
    /**
     * 新しいマテリアルを外部から読み込むためのノード
     * Grimoire.jsのマテリアルファイル(*.sort)から新しい種類のマテリアルを読み込むためのノードです。
     */
    "import-material": {
        components: ["MaterialImporter"]
    },
    /**
     * カラーバッファ用のテクスチャを生成するためのノード
     * `<renderer>`ノードの直下に含まれうるノードの一つです。
     * このノードによってレンダリングに用いるカラーバッファを生成することができます。
     * カラーバッファはオフスクリーンレンダリングなどへの利用など様々な面で利用することができます。
     */
    "texture-buffer": {
        components: ["TextureBuffer"]
    },
    /**
     * 深度バッファ/ステンシルバッファ用の`renderbuffer`を生成するためのノード
     * `<renderer>`ノードの直下に含まれうるノードの一つです。
     * このノードによってレンダリングに用いる深度バッファやステンシルバッファを生成することができます。
     */
    "render-buffer": {
        components: ["RenderBuffer"]
    },
    /**
     *
     * シーンを描画するレンダリング手順を表すためのノード
     * `<renderer>`ノードの直下に含まれうるノードの一つです。
     * このノードは`out`に指定されたテクスチャ(デフォルトではキャンバス自身)に対して、シーンの内容を描画します。
     */
    "render-scene": {
        components: ["RenderScene", "RenderHitArea"],
        default: {
            material: null
        }
    },
    /**
     * 四角形単体を特定のマテリアルで描画するためのノード
     * `<renderer>`ノードの直下に含まれうるノードの一つです。
     * このノードは`out`に指定されたテクスチャ(デフォルトではキャンバス自身)に対して、単純な四角形(`quad`)を指定されたマテリアルで描画します。
     */
    "render-quad": {
        components: ["MaterialContainer", "RenderQuad"],
        default: {
            material: null
        }
    }
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Color4;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Quaternion;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Rectangle;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math.Vector2;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Base.EEObject;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.GrimoireInterface;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.Attribute;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.Node.GomlNode;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:100%;position: relative;\">\n    <div style=\"width: 55px;height: 55px;border-radius: 100%;border: 5px solid #381794;border-right-color: #FC659D;animation: rotate 1s linear infinite;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;\"></div>\n</div>\n<style type=\"text/css\">\n    @keyframes rotate {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n"

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "@Technique default{\n@Pass{\n  @BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\n  FS_PREC(mediump,float)\n  varying vec2 vTexCoord;\n  #ifdef VS\n\n  attribute vec3 position;\n  attribute vec2 texCoord;\n  @MODELVIEWPROJECTION\n  uniform mat4 _matPVM;\n  void main()\n  {\n    gl_Position = _matPVM * vec4(position,1.0);\n    vTexCoord = texCoord;\n  }\n  #endif\n  #ifdef FS\n  @{type:\"color\",default:\"white\"}\n  uniform vec4 color;\n\n  uniform sampler2D texture;\n  @HAS_TEXTURE{sampler:\"texture\"}\n  uniform bool _textureUsed;\n\n  uniform float _time;\n  void main(void)\n  {\n    if(_textureUsed){\n      gl_FragColor = color * texture2D(texture,vTexCoord);\n    }else{\n      gl_FragColor = color;\n   }\n  }\n  #endif\n}\n}\n\n@Technique hitarea{\n  @Disable(BLEND)\n  @Pass{\n    FS_PREC(mediump,float)\n\n    #ifdef VS\n      attribute vec3 position;\n      uniform mat4 _matPVM;\n\n      void main(){\n        gl_Position = _matPVM * vec4(position,1.0);\n      }\n    #endif\n\n    #ifdef FS\n      @MESH_INDEX\n      uniform vec4 meshIndex;\n      void main(){\n        gl_FragColor = meshIndex;\n      }\n    #endif\n  }\n}\n"

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AssetLoader = __webpack_require__(28);

var _AssetLoader2 = _interopRequireDefault(_AssetLoader);

var _CacheResolver = __webpack_require__(19);

var _CacheResolver2 = _interopRequireDefault(_CacheResolver);

var _ExternalResourceResolver = __webpack_require__(20);

var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);

var _ImageResolver = __webpack_require__(21);

var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

var _TextFileResolver = __webpack_require__(29);

var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

var _AssetLoadingManagerComponent = __webpack_require__(30);

var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);

var _CameraComponent = __webpack_require__(31);

var _CameraComponent2 = _interopRequireDefault(_CameraComponent);

var _CanvasInitializerComponent = __webpack_require__(32);

var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);

var _FullscreenComponent = __webpack_require__(33);

var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);

var _GeometryComponent = __webpack_require__(34);

var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);

var _GeometryRegistoryComponent = __webpack_require__(35);

var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);

var _HTMLBinderComponent = __webpack_require__(36);

var _HTMLBinderComponent2 = _interopRequireDefault(_HTMLBinderComponent);

var _LoopManagerComponent = __webpack_require__(22);

var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

var _MaterialComponent = __webpack_require__(23);

var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

var _MaterialContainerComponent = __webpack_require__(9);

var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

var _MaterialImporterComponent = __webpack_require__(37);

var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);

var _MeshRendererComponent = __webpack_require__(38);

var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

var _MouseCameraControlComponent = __webpack_require__(39);

var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);

var _RenderBufferComponent = __webpack_require__(40);

var _RenderBufferComponent2 = _interopRequireDefault(_RenderBufferComponent);

var _RendererComponent = __webpack_require__(43);

var _RendererComponent2 = _interopRequireDefault(_RendererComponent);

var _RendererManagerComponent = __webpack_require__(44);

var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);

var _RenderHitareaComponent = __webpack_require__(41);

var _RenderHitareaComponent2 = _interopRequireDefault(_RenderHitareaComponent);

var _RenderQuadComponent = __webpack_require__(42);

var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);

var _RenderSceneComponent = __webpack_require__(10);

var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

var _SceneComponent = __webpack_require__(11);

var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

var _TextureBufferComponent = __webpack_require__(45);

var _TextureBufferComponent2 = _interopRequireDefault(_TextureBufferComponent);

var _TextureComponent = __webpack_require__(24);

var _TextureComponent2 = _interopRequireDefault(_TextureComponent);

var _TimeComponent = __webpack_require__(46);

var _TimeComponent2 = _interopRequireDefault(_TimeComponent);

var _TransformComponent = __webpack_require__(3);

var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

var _CanvasSizeConverter = __webpack_require__(47);

var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);

var _GeometryConverter = __webpack_require__(48);

var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);

var _MaterialConverter = __webpack_require__(49);

var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);

var _NodeConverter = __webpack_require__(50);

var _NodeConverter2 = _interopRequireDefault(_NodeConverter);

var _PositionConverter = __webpack_require__(51);

var _PositionConverter2 = _interopRequireDefault(_PositionConverter);

var _TextureConverter = __webpack_require__(52);

var _TextureConverter2 = _interopRequireDefault(_TextureConverter);

var _ViewportConverter = __webpack_require__(53);

var _ViewportConverter2 = _interopRequireDefault(_ViewportConverter);

var _DefaultPrimitives = __webpack_require__(54);

var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);

var _Geometry = __webpack_require__(12);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _GeometryFactory = __webpack_require__(13);

var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

var _GeometryUtility = __webpack_require__(55);

var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);

var _DefaultMacro = __webpack_require__(56);

var _DefaultMacro2 = _interopRequireDefault(_DefaultMacro);

var _DefaultMaterial = __webpack_require__(57);

var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);

var _MacroRegistory = __webpack_require__(58);

var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);

var _Material = __webpack_require__(25);

var _Material2 = _interopRequireDefault(_Material);

var _MaterialFactory = __webpack_require__(4);

var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

var _Pass = __webpack_require__(59);

var _Pass2 = _interopRequireDefault(_Pass);

var _Technique = __webpack_require__(60);

var _Technique2 = _interopRequireDefault(_Technique);

var _TextureReference = __webpack_require__(61);

var _TextureReference2 = _interopRequireDefault(_TextureReference);

var _UniformResolverRegistry = __webpack_require__(5);

var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

var _MatricesRegister = __webpack_require__(81);

var _MatricesRegister2 = _interopRequireDefault(_MatricesRegister);

var _MiscRegister = __webpack_require__(82);

var _MiscRegister2 = _interopRequireDefault(_MiscRegister);

var _UserValueRegister = __webpack_require__(83);

var _UserValueRegister2 = _interopRequireDefault(_UserValueRegister);

var _nodes = __webpack_require__(85);

var _nodes2 = _interopRequireDefault(_nodes);

var _Buffer = __webpack_require__(62);

var _Buffer2 = _interopRequireDefault(_Buffer);

var _FrameBuffer = __webpack_require__(14);

var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

var _GLExtRequestor = __webpack_require__(63);

var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

var _ManagedProgram = __webpack_require__(64);

var _ManagedProgram2 = _interopRequireDefault(_ManagedProgram);

var _ManagedShader = __webpack_require__(65);

var _ManagedShader2 = _interopRequireDefault(_ManagedShader);

var _Program = __webpack_require__(66);

var _Program2 = _interopRequireDefault(_Program);

var _RenderBuffer = __webpack_require__(15);

var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

var _ResourceBase = __webpack_require__(2);

var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

var _ResourceCache = __webpack_require__(67);

var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

var _Shader = __webpack_require__(68);

var _Shader2 = _interopRequireDefault(_Shader);

var _Texture2D = __webpack_require__(1);

var _Texture2D2 = _interopRequireDefault(_Texture2D);

var _UniformProxy = __webpack_require__(69);

var _UniformProxy2 = _interopRequireDefault(_UniformProxy);

var _DrawPriorty = __webpack_require__(70);

var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);

var _RenderQueue = __webpack_require__(71);

var _RenderQueue2 = _interopRequireDefault(_RenderQueue);

var _RenderQueueRegistry = __webpack_require__(72);

var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);

var _ImportResolver = __webpack_require__(73);

var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

var _NameSemanticsPair = __webpack_require__(74);

var _NameSemanticsPair2 = _interopRequireDefault(_NameSemanticsPair);

var _Parser = __webpack_require__(75);

var _Parser2 = _interopRequireDefault(_Parser);

var _Preferences = __webpack_require__(76);

var _Preferences2 = _interopRequireDefault(_Preferences);

var _SortTransformUtility = __webpack_require__(77);

var _SortTransformUtility2 = _interopRequireDefault(_SortTransformUtility);

var _TypeToConstant = __webpack_require__(78);

var _TypeToConstant2 = _interopRequireDefault(_TypeToConstant);

var _HashCalculator = __webpack_require__(16);

var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

var _MeshIndexCalculator = __webpack_require__(26);

var _MeshIndexCalculator2 = _interopRequireDefault(_MeshIndexCalculator);

var _TextureSizeCalculator = __webpack_require__(17);

var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

var _main = __webpack_require__(84);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __VERSION__ = "0.13.3";
var __NAME__ = "grimoirejs-fundamental";

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
        "MeshRendererComponent": _MeshRendererComponent2.default,
        "MouseCameraControlComponent": _MouseCameraControlComponent2.default,
        "RenderBufferComponent": _RenderBufferComponent2.default,
        "RendererComponent": _RendererComponent2.default,
        "RendererManagerComponent": _RendererManagerComponent2.default,
        "RenderHitareaComponent": _RenderHitareaComponent2.default,
        "RenderQuadComponent": _RenderQuadComponent2.default,
        "RenderSceneComponent": _RenderSceneComponent2.default,
        "SceneComponent": _SceneComponent2.default,
        "TextureBufferComponent": _TextureBufferComponent2.default,
        "TextureComponent": _TextureComponent2.default,
        "TimeComponent": _TimeComponent2.default,
        "TransformComponent": _TransformComponent2.default
    },
    "Converters": {
        "CanvasSizeConverter": _CanvasSizeConverter2.default,
        "GeometryConverter": _GeometryConverter2.default,
        "MaterialConverter": _MaterialConverter2.default,
        "NodeConverter": _NodeConverter2.default,
        "PositionConverter": _PositionConverter2.default,
        "TextureConverter": _TextureConverter2.default,
        "ViewportConverter": _ViewportConverter2.default
    },
    "Geometry": {
        "DefaultPrimitives": _DefaultPrimitives2.default,
        "Geometry": _Geometry2.default,
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
    "nodes": _nodes2.default,
    "Resource": {
        "Buffer": _Buffer2.default,
        "FrameBuffer": _FrameBuffer2.default,
        "GLExtRequestor": _GLExtRequestor2.default,
        "ManagedProgram": _ManagedProgram2.default,
        "ManagedShader": _ManagedShader2.default,
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
        "HashCalculator": _HashCalculator2.default,
        "MeshIndexCalculator": _MeshIndexCalculator2.default,
        "TextureSizeCalculator": _TextureSizeCalculator2.default
    }
};
var __BASE__ = (0, _main2.default)();
Object.assign(__EXPOSE__, {
    __VERSION__: __VERSION__,
    __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);
window["GrimoireJS"].lib.fundamental = __EXPOSE__;
exports.default = __BASE__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=grimoire-fundamental.js.map