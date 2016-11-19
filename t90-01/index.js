gr.registerComponent('Rotate', {
  attributes: {
    speed: {
      defaultValue: '1',
      converter: 'Number',
    },
  },
  $mount: function () {
    this.phi = 0;
  },
  $update: function () {
    this.phi += this.getValue('speed');
    this.node.setAttribute('rotation', this.phi + ',' + this.phi + ',' + this.phi);
  },
});

gr(function () {
  var MAIN = gr('#main');
  MAIN('mesh').addComponent('Rotate');
  MAIN('mesh')('Rotate').setAttribute('speed', 1);
});


// 
// $(function () {
//   $("input").change(function (v) {
//     gr("#main")("mesh").setAttribute("color", v.target.value);
//   });
// });

/*
gomlでかんたんに機能を追加できる。
js側のインタフェース

（componentをかんたんに作成してregisterできる。）

goml
mouseCameraControll
input
effect


rotationComponentをregister
 */
