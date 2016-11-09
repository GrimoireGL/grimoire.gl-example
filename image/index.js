let i = 0;
setInterval(function() {
    gr("#main")("mesh").setAttribute("rotation", "y(" + i / 10 + "d)");
    i++;
}, 10);