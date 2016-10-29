let i = 0;
setInterval(function(){
  gr("#main")("#image-mesh").attr("rotation",`y(${i/10}d)`);
  i++;
},10);