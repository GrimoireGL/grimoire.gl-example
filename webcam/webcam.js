gr.registerComponent("Webcam", {
    attributes: {
        target: {
            converter: "String",
            default: "texture"
        }
    },
    $mount: function() {
        var _this = this;
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
        navigator.getUserMedia({
                video: true,
                audio: false
            },
            (localMediaStream) => {
                var url = (window.URL || window.webkitURL);
                video = document.createElement('video');
                console.log(localMediaStream);
                video.addEventListener('canplay', function() {
                    video.removeEventListener('canplay', arguments.callee, true);
                    video.play();
                    _this.node.setAttribute(_this.getValue("target"), video);
                }, true);
                video.src = url.createObjectURL(localMediaStream);
            },
            () => {}
        );

    }
});
