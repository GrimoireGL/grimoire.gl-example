function canWebcam() {
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
    navigator.getUserMedia({video: true, audio: false},
        // usre media の取得に成功した場合
        function(localMediaStream) {
            var url = (
                window.URL ||
                window.webkitURL
            );
            video = document.createElement('video');
            video.addEventListener('canplay', function() {
                video.removeEventListener('canplay', arguments.callee, true);
                gr("#main")("#video-renderer").setAttribute("source", video);
                video.play();
            }, true);

            video.src = url.createObjectURL(localMediaStream);
        }
    );
}

gr(function() {
    canWebcam();
})
