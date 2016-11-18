var colors = ["red","blue","yellow","green"];
gr(function(){
  var i = 0;
  setInterval(function(){
    gr("script")("mesh").setAttribute("color",colors[i % 4]);
    i++;
  },1000);
});
