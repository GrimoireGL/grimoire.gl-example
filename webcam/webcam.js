gr.registerComponent("Webcam", {
    $start: function() {
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
        navigator.getUserMedia({video: true,audio: false},
            (localMediaStream)=>{
                var url = (window.URL || window.webkitURL);
                video = document.createElement('video');
                video.addEventListener('canplay', function() {
                    video.removeEventListener('canplay', arguments.callee, true);
                    video.play();
                    this.node.setAttribute("texture",video);
                }, true);
                video.src = url.createObjectURL(localMediaStream);
            }
        );

    }
});
