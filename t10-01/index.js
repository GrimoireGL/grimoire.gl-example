gr.registerComponent('Rotate', {
  attributes: {
    speed: {
      defaultValue: '1',
      converter: 'Number',
    },
  },
  $mount: function() {
    this.phi = 0;
  },
  $update: function() {
    this.phi += this.getValue('speed');
    this.node.setAttribute('rotation', this.phi + ',' + this.phi + ',' + this.phi);
  },
});

gr.registerNode("rotate", ["Rotate"], {}, "mesh");

gr(function() {
    var $$ = gr("#main");
    gr.registerComponent("Print", {
        attributes: {
            test: {
                defaultValue: "HELLO WORLD!",
                converter: "String"
            }
        },
        $awake:function(){
          console.log(111);
        }
    });
    gr.registerNode("print",["Print"]);
});
