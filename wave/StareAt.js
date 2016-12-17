var Quaternion = gr.lib.math.Quaternion;
var Matrix = gr.lib.math.Matrix;

gr.registerComponent('StareAt', {
  attributes: {
    center: {
      defaultValue: '0, 0, 0',
      converter: 'Vector3',
    },
    axis: {
      defaultValue: '0, 1, 0',
      converter: 'Vector3',
    },
    speed: {
      defaultValue: 0.03,
      converter: 'Number',
    },
    zoom: {
      defaultValue: 1.0,
      converter: 'Number',
    },
    zoomPhase: {
      defaultValue: 1.3,
      converter: 'Number',
    },
  },
  $awake: function() {
    this._transform = this.node.getComponent('Transform');
  },
  $mount: function() {
    this.phi = 0;
    var d = this.node.getAttribute('position').subtractWith(this.getAttribute('center'));
    this.direction = d.normalized;
    this.distance = d.magnitude;
    this.baseRotation = this._transform.localRotation;
  },
  $update: function() {
    this.phi += this.getAttribute('speed');
    var rotateQuaternion = Quaternion.angleAxis(this.phi, this.getAttribute('axis'));
    var rotateMatrix = Matrix.rotationQuaternion(rotateQuaternion);
    var rotatedDirection = Matrix.transformNormal(rotateMatrix, this.direction);
    this._transform.localPosition = this.getAttribute('center')
      .addWith(rotatedDirection.multiplyWith(this.distance - this.getAttribute('zoom') * Math.sin(this.phi * this.getAttribute('zoomPhase'))));
    this._transform.localRotation = Quaternion.multiply(rotateQuaternion, this.baseRotation);
  },
});
