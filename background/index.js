let i = 0;
setInterval(function() {
  gr("#main")(".circle").attr("rotation",`y(${i}d)`);
  i++;
}, 10);