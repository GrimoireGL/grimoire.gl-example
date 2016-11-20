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
	
	var _GLTFModelComponent = __webpack_require__(1);
	
	var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);
	
	var _GLTFParser = __webpack_require__(3);
	
	var _GLTFParser2 = _interopRequireDefault(_GLTFParser);
	
	var _main = __webpack_require__(9);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __EXPOSE__ = {
	    "Components": {
	        "GLTFModelComponent": _GLTFModelComponent2.default
	    },
	    "Parser": {
	        "GLTFParser": _GLTFParser2.default
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
	
	var _Component2 = __webpack_require__(2);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _GLTFParser = __webpack_require__(3);
	
	var _GLTFParser2 = _interopRequireDefault(_GLTFParser);
	
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
	                _GLTFParser2.default.parseFromURL(gl, src).then(function (data) {
	                    _this2._populateChildren(data);
	                });
	            }
	        }
	    }, {
	        key: "_populateChildren",
	        value: function _populateChildren(data) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = data.scene.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var nodeName = _step.value;
	
	                    var node = data.tf.nodes[nodeName];
	                    if (node.meshes !== void 0) {
	                        var mesh = data.meshes[node.meshes[0]];
	                        // instanciate the mesh
	                        this.node.addChildByName("gltf-mesh", {
	                            geometry: mesh,
	                            texture: data.textures[data.material[mesh["materialName"]].texture]
	                        });
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
	    }]);
	
	    return GLTFModelComponent;
	}(_Component3.default);
	
	exports.default = GLTFModelComponent;
	
	GLTFModelComponent.componentName = "GLTFModelComponent";
	GLTFModelComponent.attributes = {
	    src: {
	        converter: "String",
	        defaultValue: undefined
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.Component;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TextFileResolver = __webpack_require__(4);
	
	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);
	
	var _Buffer = __webpack_require__(5);
	
	var _Buffer2 = _interopRequireDefault(_Buffer);
	
	var _Geometry = __webpack_require__(6);
	
	var _Geometry2 = _interopRequireDefault(_Geometry);
	
	var _ImageResolver = __webpack_require__(7);
	
	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);
	
	var _Texture2D = __webpack_require__(8);
	
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
	                var baseUrl, resolved, tf, rawArrayView, meshes, buffers, images, textures, materials, accessors, key, _key, bufferView, rawBuffer, buffer, _key2, imgLoadTask, _loop, _key3, _key4, texInfo, tex, scene, _key5, material, commonMaterial;
	
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
	                                rawArrayView = {};
	                                meshes = {};
	                                buffers = {};
	                                images = {};
	                                textures = {};
	                                materials = {};
	                                accessors = {};
	                                _context.t0 = regeneratorRuntime.keys(tf.buffers);
	
	                            case 13:
	                                if ((_context.t1 = _context.t0()).done) {
	                                    _context.next = 20;
	                                    break;
	                                }
	
	                                key = _context.t1.value;
	                                _context.next = 17;
	                                return GLTFParser.bufferFromURL(tf, key, baseUrl);
	
	                            case 17:
	                                rawArrayView[key] = _context.sent;
	                                _context.next = 13;
	                                break;
	
	                            case 20:
	                                for (_key in tf.bufferViews) {
	                                    bufferView = tf.bufferViews[_key];
	                                    rawBuffer = rawArrayView[bufferView.buffer];
	                                    buffer = buffers[_key] = new _Buffer2.default(gl, bufferView.target, WebGLRenderingContext.STATIC_DRAW);
	
	                                    buffer.update(new DataView(rawBuffer, bufferView.byteOffset, bufferView.byteLength));
	                                }
	                                for (_key2 in tf.meshes) {
	                                    meshes[_key2] = GLTFParser._parseMesh(tf, tf.meshes[_key2], buffers);
	                                }
	                                imgLoadTask = [];
	
	                                _loop = function _loop(_key3) {
	                                    var imgKey = _key3;
	                                    imgLoadTask.push(_ImageResolver2.default.resolve(baseUrl + tf.images[_key3].uri).then(function (t) {
	                                        images[imgKey] = t;
	                                    }));
	                                };
	
	                                for (_key3 in tf.images) {
	                                    _loop(_key3);
	                                }
	                                _context.next = 27;
	                                return Promise.all(imgLoadTask);
	
	                            case 27:
	                                for (_key4 in tf.textures) {
	                                    texInfo = tf.textures[_key4];
	                                    tex = textures[_key4] = new _Texture2D2.default(gl);
	
	                                    tex.update(images[texInfo.source]);
	                                }
	                                scene = tf.scenes[tf.scene];
	                                _context.t2 = regeneratorRuntime.keys(tf.materials);
	
	                            case 30:
	                                if ((_context.t3 = _context.t2()).done) {
	                                    _context.next = 41;
	                                    break;
	                                }
	
	                                _key5 = _context.t3.value;
	                                material = tf.materials[_key5];
	
	                                if (!(material.extensions !== void 0 && material.extensions.KHR_materials_common)) {
	                                    _context.next = 38;
	                                    break;
	                                }
	
	                                commonMaterial = material.extensions.KHR_materials_common;
	
	                                materials[_key5] = {
	                                    texture: commonMaterial.values.diffuse
	                                };
	                                _context.next = 39;
	                                break;
	
	                            case 38:
	                                throw new Error("Unsupported material type");
	
	                            case 39:
	                                _context.next = 30;
	                                break;
	
	                            case 41:
	                                return _context.abrupt("return", {
	                                    meshes: meshes,
	                                    textures: textures,
	                                    tf: tf,
	                                    scene: scene,
	                                    material: materials
	                                });
	
	                            case 42:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "_parseMesh",
	        value: function _parseMesh(tf, meshInfo, buffers) {
	            var primitive = meshInfo.primitives[0];
	            // construct index buffer
	            var indexAccessor = tf.accessors[primitive.indices];
	            var index = {};
	            index.topology = primitive.mode;
	            index.type = indexAccessor.componentType;
	            index.index = buffers[indexAccessor.bufferView];
	            index.byteSize = GLTFParser._asByteSize(index.type);
	            index.count = indexAccessor.count;
	            // parse verticies
	            var attribInfo = {};
	            var usedBuffers = {};
	            for (var attrib in primitive.attributes) {
	                var grAttrib = GLTFParser._asGrAttribName(attrib);
	                var accessor = tf.accessors[primitive.attributes[attrib]];
	                usedBuffers[accessor.bufferView] = buffers[accessor.bufferView];
	                attribInfo[GLTFParser._asGrAttribName(attrib)] = {
	                    bufferName: accessor.bufferView,
	                    size: GLTFParser._asVectorSize(accessor.type),
	                    type: accessor.componentType,
	                    stride: accessor.byteStride,
	                    offset: accessor.byteOffset
	                };
	            }
	            var geometry = new _Geometry2.default(usedBuffers, attribInfo, { default: index });
	            geometry["materialName"] = primitive.material; // TODO fix this bad implementation to find material from geometry
	            return geometry;
	        }
	    }, {
	        key: "_asColorValue",
	        value: function _asColorValue(a) {
	            if (a.length === 3) {
	                return "rgb(" + (a[0] * 255).toFixed() + "," + (a[1] * 255).toFixed() + "," + (a[2] * 255).toFixed();
	            } else {
	                return "rgb(" + (a[0] * 255).toFixed() + "," + (a[1] * 255).toFixed() + "," + (a[2] * 255).toFixed() + "," + (a[3] * 255).toFixed();
	            }
	        }
	    }, {
	        key: "_asVectorSize",
	        value: function _asVectorSize(type) {
	            switch (type) {
	                case "SCALAR":
	                    return 1;
	                case "VEC2":
	                    return 2;
	                case "VEC3":
	                    return 3;
	                case "VEC4":
	                    return 4;
	                default:
	                    throw new Error("Invalid vectorSize");
	            }
	        }
	    }, {
	        key: "_asByteSize",
	        value: function _asByteSize(indexType) {
	            switch (indexType) {
	                case WebGLRenderingContext.UNSIGNED_BYTE:
	                    return 1;
	                case WebGLRenderingContext.UNSIGNED_SHORT:
	                    return 2;
	                case WebGLRenderingContext.UNSIGNED_INT:
	                    return 4;
	                default:
	                    throw new Error("Unknown index size!");
	            }
	        }
	    }, {
	        key: "_asGrAttribName",
	        value: function _asGrAttribName(bufferName) {
	            switch (bufferName) {
	                case "POSITION":
	                    return "position";
	                case "NORMAL":
	                    return "normal";
	                case "TEXCOORD_0":
	                    return "texCoord";
	            }
	        }
	    }, {
	        key: "bufferFromURL",
	        value: function bufferFromURL(tf, bufferName, baseUrl) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                return _context2.abrupt("return", new Promise(function (resolve, reject) {
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
	                                }));
	
	                            case 1:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
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
/* 4 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Asset.TextFileResolver;

/***/ },
/* 5 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Resource.Buffer;

/***/ },
/* 6 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Geometry.Geometry;

/***/ },
/* 7 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Asset.ImageResolver;

/***/ },
/* 8 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Resource.Texture2D;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _GLTFModelComponent = __webpack_require__(1);
	
	var _GLTFModelComponent2 = _interopRequireDefault(_GLTFModelComponent);
	
	var _grimoirejs = __webpack_require__(10);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _MaterialFactory = __webpack_require__(11);
	
	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);
	
	var _gltfUnlit = __webpack_require__(12);
	
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
	                            _grimoirejs2.default.registerNode("model", ["Transform", "GLTFModel"]);
	                            _grimoirejs2.default.registerNode("gltf-mesh", ["Transform", "MaterialContainer", "MeshRenderer"], {
	                                material: "new(gltf-unlit)"
	                            });
	                            _MaterialFactory2.default.addSORTMaterial("gltf-unlit", _gltfUnlit2.default);
	
	                        case 4:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    });
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS;

/***/ },
/* 11 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.fundamental.Material.MaterialFactory;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "@Pass\n@NoBlend()\n@NoCull()\nFS_PREC(mediump,float)\n\nvarying vec3 vNormal;\nvarying vec2 vUV;\n\n#ifdef VS\n  attribute vec3 position;\n  attribute vec3 normal;\n  attribute vec2 texCoord;\n\n  uniform mat4 _matPVM;\n\n  void main(){\n    gl_Position = _matPVM * vec4(position,1);\n    vNormal = normal;\n    vUV = texCoord;\n  }\n\n#endif\n\n\n#ifdef FS\n\n  uniform sampler2D texture;\n\n  void main(){\n    gl_FragColor = texture2D(texture,vUV);\n  }\n#endif\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=grimoire-gltf.js.map