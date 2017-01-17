gr(function() {
    var $$ = gr("#main");
    var camera = $$(".camera").get(0);
    var mc = camera.getComponent("MouseCameraControl");
    mc.setAttribute("zoomSpeed", -1);
});
