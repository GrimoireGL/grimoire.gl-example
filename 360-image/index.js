let i = 0;
setInterval(function() {
    gr("#main")(".geo").attr("rotation", `y(${i / 10}d)`);
    i++;
}, 10);