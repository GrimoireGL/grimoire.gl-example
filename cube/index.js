var ratio = 0;

function rot() {
  gr('#canvas')('mesh').setAttribute('rotation', ratio + ',' + ratio + ',' + ratio);
  ratio += 1;
  requestAnimationFrame(rot);
}

rot();

document.getElementById('color').addEventListener('change', function(e) {
  var color = e.target.value;
  var elm = document.createElement('div');
  elm.style.color = color;
  if (elm.style.color === color) {
    gr('#canvas')('#sprite').setAttribute('color', color);
  } else {
    console.error(color + ' is not a real color. well done...');
  }
});
