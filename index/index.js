var ratio = 0;

function rot() {
  gr('#canvas')('mesh').attr('rotation', ratio + ',' + ratio + ',' + ratio);
  ratio += 1;
  requestAnimationFrame(rot);
}

rot();
