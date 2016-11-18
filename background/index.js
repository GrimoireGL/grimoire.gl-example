let i = 0;
setInterval(function() {
    gr("#main")(".circle").setAttribute("rotation", "y(" + i + "d)");
    i++;
}, 10);