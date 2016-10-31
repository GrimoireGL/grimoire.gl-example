let i = 0;
setInterval(function(){
  gr("#main")("mesh").attr("rotation",`y(${i/10}d)`);
  i++;
},10);