gr.registerComponent("RotateSelf", {
    attributes: {
        test: {
            defaultValue: "HELLO WORLD!",
            converter: "String"
        }
    },
    $awake: function() {
        console.log("awake");
        this.i = 0;
    },
    $mount: function() {},
    $update: function() {
      console.log("update");
        this.i++;
        this.node.setAttribute("rotation", this.i + "," + this.i + "," + this.i);
    }
});
gr.registerNode("rotate", ["RotateSelf"], {}, "mesh");
gr(function() {
    var $$ = gr("#main");
    $$("#mesh-1").addComponent("RotateSelf");
});