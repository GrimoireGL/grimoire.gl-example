gr(function() {
    var n = 30;
    var r = 10;
    for (var i = 0; i < n; i++) {
        var px = r * Math.sin(Math.PI * 2 / n * i);
        var pz = r * Math.cos(Math.PI * 2 / n * i);
        var position = 'position="' + px + ',0,' + pz + '"';
        var color = ["red","yellow","blue","green","orange","white","black"][i % 7];
        console.log('<mesh geometry="cube" ' + position + ' color="'+color+'"/>');
        gr("#main")("scene").append('<mesh geometry="cube" ' + position + ' color="'+color+'"/>');
    }
});
