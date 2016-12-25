gr.registerComponent('Rotate', {
  attributes: {
    speed: {
      default: '1',
      converter: 'Number',
    },
  },
  $mount: function() {
    this.phi = 0;
  },
  $update: function() {
    this.phi += this.getAttribute('speed');
    this.node.setAttribute('rotation', this.phi + ',' + this.phi + ',' + this.phi);
  },
});

gr(function() {
  var $$ = gr('#main');
  $$('mesh').addComponent('Rotate');
  $$('mesh').first().getComponent("Rotate").setAttribute('speed', 1);
});
