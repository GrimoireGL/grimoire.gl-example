let i = 0;
setInterval(function() {
    gr("#main")("#earth").setAttribute("rotation", "y(" + i / 10 + "d)");
    i++;
}, 10);