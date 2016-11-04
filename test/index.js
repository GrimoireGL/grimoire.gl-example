gr(function() {
    var $$ = gr("#main");
    // var a = $$("mesh").get();
    // console.log(a);
    debugger;
    gr.registerComponent("Print", {
        attributes: {
            test: {
                defaultValue: "HELLO WORLD!",
                converter: "String"
            }
        },
        $awake:()=>{
          console.log(111);
        }
    });
   $$("mesh").addComponent("Print");
   var a = $$("mesh")("Print").getAttribute("test");

    console.log(gr.componentDeclarations);
    console.log(a);
});