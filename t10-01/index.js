gr(function() {
    var $$ = gr("#main");
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
    gr.registerNode("print",{"Print"});
});