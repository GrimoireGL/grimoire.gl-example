gr.registerComponent("RotateSelf", {
    attributes: {
        speed: {
            default: 1,
            converter: "Number"
        }
    },
    $awake: function() {
        console.log("awake");
        this.i = 0;
    },
    $mount: function() {},
    $update: function() {
      console.log("update");
        this.i+= this.getAttribute("speed");
        this.node.setAttribute("rotation", this.i + "," + this.i + "," + this.i);
    }
});
gr.registerNode("rotate", ["RotateSelf"], {}, "mesh");
gr(function() {
    var $$ = gr("#main");
    $$("#mesh-1").addComponent("RotateSelf",{
      speed:10
    });
});
