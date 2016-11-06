gr.registerComponent("Print", {
    attributes: {
        test: {
            defaultValue: "HELLO WORLD!",
            converter: "String"
        }
    },
    $awake:()=>{
      console.log("This is test!");
    }
});
gr(function() {
    var $$ = gr("#main");
   $$("mesh").addComponent("Print");
   var data = $$("mesh")("Print").getAttribute("test");
    console.log(data);
});