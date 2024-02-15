import {
  BasicNode,
  BillboardEx,
  BoxEmitterShape,
  EmitRandomParticles,
  FXR,
  ParticleLifetime,
  PeriodicEmitter,
  SharedEmitterNode,
} from '@cccode/fxr'

const fxr = new FXR(402030)
const particleSize = 0.05

fxr.root.nodes = [
  /*
    The SharedEmitterNode replaces the emitters of its child nodes with its
    own, allowing a single emitter to emit mutliple types of particles.

    In this example, the particles are all of the same type, but they have
    different colors to show which one is being emitted.
  */
  new SharedEmitterNode([
    /*
      This action makes the shared emitter pick a random child node to emit
      particles from every time it emits. The action has weights for each
      child node which control how likely the node is to be picked.

      In this case, the first child node has a 10 in 15 chance to be picked,
      the second one has a 4 in 15 chance, and the third has a 1 in 15 chance.
    */
    new EmitRandomParticles(10, 4, 1),
    /*
      The shared emitter will emit 10 particles of the same type every 0.1
      seconds, and it will pick a new type every time. It's shaped like a cube,
      with particles only emitting from the surface.
    */
    new PeriodicEmitter(0.1, 10),
    new BoxEmitterShape(false)
  ], [
    new BasicNode([ // Child node 0 - red particles
      new ParticleLifetime(1),
      new BillboardEx({
        width: particleSize,
        height: particleSize,
        color1: [1, 0, 0, 1],
      })
    ]),
    new BasicNode([ // Child node 1 - green particles
      new ParticleLifetime(1),
      new BillboardEx({
        width: particleSize,
        height: particleSize,
        color1: [0, 1, 0, 1],
      })
    ]),
    new BasicNode([ // Child node 2 - blue particles
      new ParticleLifetime(1),
      new BillboardEx({
        width: particleSize,
        height: particleSize,
        color1: [0, 0, 1, 1],
      })
    ])
  ])
]
