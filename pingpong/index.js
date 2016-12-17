const FrameBuffer = gr.lib.fundamental.Resource.FrameBuffer;
gr.registerComponent("RenderPingPong", {
    attributes: {
        out: {
            default: "default",
            converter: "String"
        },
        pingpongBuffer1: {
            default: null,
            converter: "String"
        },
        pingpongBuffer2: {
            default: null,
            converter: "String"
        },
        targetBuffer: {
            default: "default",
            converter: "String",
        },
        sourceBuffer: {
            default: null,
            converter: "String"
        },
        iteration: {
            default: 2,
            converter: "Number"
        },
        sourceName: {
            default: "source",
            converter: "String"
        },
        clearColor: {
            default: "#0000",
            converter: "Color4",
        },
        clearColorEnabled: {
            default: true,
            converter: "Boolean",
        }
    },
    $awake: function() {
        // あらかじめ変数にattributeは結び付けておく
        this.getAttribute("targetBuffer").boundTo("_targetBuffer");
        this.getAttribute("sourceName").boundTo("_sourceName");
        this.getAttribute("clearColor").boundTo("_clearColor");
        this.getAttribute("clearColorEnabled").boundTo("_clearColorEnabled");
        this.getAttribute("iteration").boundTo("_iteration");
    },
    $mount: function() {
        this._gl = this.companion.get("gl"); // companionは、gomlツリー全体でシェアするようなリソースを保存できる場所。
        this._canvas = this.companion.get("canvasElement");
        const gr = this.companion.get("GeometryRegistory");
        this._geom = gr.getGeometry("quad");
        this._materialContainer = this.node.getComponent("MaterialContainer");
    },
    $bufferUpdated: function(args) {
        const out = this.getValue("out");
        if (out !== "default") {
            this._outFBO = new FrameBuffer(this._gl);
            this._outFBO.update(args.buffers[out]);
            this._fboSize = args.bufferSizes[out];
        }
        const pingpong1 = this.getValue("pingpongBuffer1");
        if (!pingpong1) {
            throw new Error("ping pong buffer 1 must be specified")
        }
        this._pingpong1FBO = new FrameBuffer(this._gl);
        this._pingpong1FBO.update(args.buffers[pingpong1]);
        this._pfboSize1 = args.bufferSizes[pingpong1];
        const pingpong2 = this.getValue("pingpongBuffer2");
        if (!pingpong2) {
            throw new Error("ping pong buffer 2 must be specified");
        }
        this._pingpong2FBO = new FrameBuffer(this._gl);
        this._pingpong2FBO.update(args.buffers[pingpong2]);
        this._pfboSize2 = args.bufferSizes[pingpong2];

    },
    $render: function(args) {
        if (!this._materialContainer.ready) {
            return;
        }
        let currentSource = args.buffers[this.getValue("sourceBuffer")];
        let nextSource;
        let currentFBO;
        for (let i = 0; i < this._iteration; i++) {
            if (i === this._iteration - 1) {
                // 最終レンダリングなので、outFBOを用いる
                if (this._outFBO) {
                    this._outFBO.bind();
                    this._gl.viewport(0, 0, this._fboSize.width, this._fboSize.height);
                    currentFBO = this._outFBO;
                } else {
                    this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
                    this._gl.viewport(args.viewport.Left, this._canvas.height - args.viewport.Bottom, args.viewport.Width, args.viewport.Height);
                }
            } else {
                if (i % 2 === 0) {
                    this._pingpong1FBO.bind();
                    this._gl.viewport(0, 0, this._pfboSize1.width, this._pfboSize1.height);
                    currentFBO = this._pingpong1FBO;
                    nextSource = args.buffers[this.getValue("pingpongBuffer1")];
                } else {
                    this._pingpong2FBO.bind();
                    this._gl.viewport(0, 0, this._pfboSize2.width, this._pfboSize2.height);
                    currentFBO = this._pingpong2FBO;
                    nextSource = args.buffers[this.getValue("pingpongBuffer2")];
                }
            }

            // clear buffer if needed
            if (currentFBO && this._clearColorEnabled) {
                this._gl.clearColor(this._clearColor.R, this._clearColor.G, this._clearColor.B, this._clearColor.A);
                this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
            }
            // make rendering argument
            const renderArgs = {
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
            renderArgs.attributeValues[this._sourceName] = {get:()=>currentSource};
            // do render
            this._materialContainer.material.draw(renderArgs);
            this._gl.flush();
            currentSource = nextSource;
        }
    }
});
gr.registerNode("render-pingpong", ["MaterialContainer", "RenderPingPong"], {});
