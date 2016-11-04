gr(function() {
    var $$ = gr("#main");
    for (var i = -5; i < 5; i++) {
        for (var j = -5; j < 5; j++) {
            $$("scene").append(`<mesh geometry="quad" scale="0.4" position="${i},${j},0" color="brown" />`);
        }
    }
    rotation();
});
var ratio = 0;

function rotation() {
    gr('#main')('mesh').setAttribute('rotation', ratio + ',' + ratio + ',' + ratio);
    ratio += 1;
    requestAnimationFrame(rotation);
}
