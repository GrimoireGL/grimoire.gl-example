gr(function() {
  var colors = ['white', 'red', 'lime'];
  var i = 0;
  setInterval(function() {
    gr('#canvas')('mesh').setAttribute('color', colors[i % 3]);
    i++;
  }, 1000);
});

