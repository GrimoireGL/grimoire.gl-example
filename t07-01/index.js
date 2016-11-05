gr(function() {
    var $$ = gr("#main");
    debugger;
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
   $$("mesh").addComponent("Print");
   var data = $$("mesh")("Print").getAttribute("test");
    console.log(gr.componentDeclarations);
    console.log(data);
});