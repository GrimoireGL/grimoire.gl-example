gr(() => {
  var target = gr('#main')('.target').single().getComponent("GeometryUpdator");
  renderLoop((i) => {
    target.setAttribute("frame", i/3|0);
  });
});

function renderLoop(cb) {
  let renderCount = 0;
  (function () {
    window.requestAnimationFrame(arguments.callee);
    console.log(arguments.callee)
    cb(renderCount++);
  })();
}

const waveSimulation = (() => {

  const dx = 0.01;
  const dt = 0.0005;
  const conductivity = 5;
  const mew = conductivity * dt / dx;
  const lattice = 40;
  const tMax = 1000;

  const p = (v) => v * v; //pow

  return () => {
    let mapLog = [];
    let u0 = createMap(lattice);
    let u1 = createMap(lattice);
    let u2;

    for (let k = 0; k < tMax; k++) {
      u2 = createMap(lattice);
      for (let i = 1; i < lattice-1; i++) for (let j = 1; j < lattice-1; j++) {
        u2[i][j] =
          k === 0 ? (hitSpace(i, j) ? 4 : 0) :
          k === 1 ? (1-2*mew)*u1[i][j] + p(mew)/2*(u1[i+1][j]+u1[i-1][j]+u1[i][j+1]+u1[i][j-1]) :
          /*k>=2*/  2*(1-2*p(mew))*u1[i][j] + p(mew)*(u1[i+1][j]+u1[i-1][j]+u1[i][j+1]+u1[i][j-1]) - u0[i][j];
      }
      for (let i = 0; i < lattice; i++) {
        u2[i][0] = 0;
        u2[i][lattice-1] = 0;
      }
      for (var j = 0; j < lattice; j++) {
        u2[0][j] = 0;
        u2[lattice-1][j] = 0;
      }
      mapLog.push(u2);
      u0 = u1.concat();
      u1 = u2.concat();
    }

    return mapLog;
  };

  function hitSpace(x, y) {
    return p(x-lattice/2) + p(y-lattice/2) <= p(lattice/10);
  }

  function createMap(size) {
    let map = [];
    for (let i = 0; i < size; i++) map.push(
      Array.apply(null, {length: size}).map(() => 0)
    );
    return map;
  }
})();

let positionsFrames = [];
let facesFrames = [];
const simulation = waveSimulation();
simulation.forEach((o, i) => {
  const data = simulation[i];
  let faces = [];
  data.forEach((ary, x) => { if (x !== data.length-1) // xの右端以外
    ary.forEach((z, y) => { if (y !== ary.length-1) // yの下端以外
      faces.push([x+y*data.length, x+y*data.length+1, x+(y+1)*data.length]);
    });
  });
  data.forEach((ary, x) => { if (x !== 0) // xの左端以外
    ary.forEach((z, y) => { if (y !== ary.length-1) // yの下端以外
      faces.push([x+y*data.length, x+(y+1)*data.length, x+(y+1)*data.length-1]);
    });
  });
  faces = Array.prototype.concat.apply([], faces);
  let positions = [];
  data.forEach((ary, x) => ary.forEach((y, z) => {
    positions.push([(x-20)/10,y/10,-(z-20)/10]);
  }));
  positionsFrames.push(positions);
  facesFrames.push(faces);
});


const GeometryFactory = gr.lib.fundamental.Geometry.GeometryFactory;
const GeometryBuilder = gr.lib.fundamental.Geometry.GeometryBuilder;
const GeometryUtility = gr.lib.fundamental.Geometry.GeometryUtility;

GeometryFactory.addType("wave-grid", { // geometry名
  frame: {
    converter: 'Number',
    default: 4,
  }
}, (gl, attrs) => {
  const positions = positionsFrames[attrs.frame];
  const faces = facesFrames[attrs.frame];
  console.log(positionsFrames.length,positions, attrs.frame);

  return GeometryBuilder.build(gl, {
    indices: {
      default: {
        generator: function*() {
          yield* faces;
        },
        topology:WebGLRenderingContext.TRIANGLES
      },
      wireframe:{
        generator:function*(){
          yield* GeometryUtility.linesFromTriangles(faces)
        },
        topology:WebGLRenderingContext.LINES
      }
    },
    vertices: {
      pos:{
        size:{
          position:3
        },
        count:positions.length,
        getGenerators:()=>{
          return {
            position: function*() {
              for (var i = 0; i < positions.length; i++) {
                yield* positions[i];
              }
            }
          };
        }
      },
      main: {
        size: {
          normal: 3,
          texCoord: 2
        },
        count: positions.length,
        getGenerators: () => {
          return {
            normal: function*() {
              while (true) {
                yield 1;
              }
            },
            texCoord: function*() {
              while (true) yield 0;
            }
          };
        }
      },
    },
  })
});

gr.registerComponent("GeometryUpdator", {
  attributes: {
    frame: {
      converter: "Number",
      default: 0
    }
  },
  $awake: function(){
    this.geometry = this.node.getAttribute("geometry");
    var positions = positionsFrames.map((positions) => {
      return new Float32Array(Array.prototype.concat.apply([], positions))
    });
    this.getAttributeRaw("frame").watch((v)=>{
      this.geometry.vertices.pos.update(positions[v]);
    }, true); //trueは初回に動かす場合
  }
})

