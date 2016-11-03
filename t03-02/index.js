gr(function() {
    var $$ = gr("#main");
    setTimeout(function(){
      $$("scene").append('<mesh geometry="cube" position="0,1,0" color="green" />');
    },1000);
});