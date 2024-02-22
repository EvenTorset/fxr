import {
  AttachMode,
  BasicNode,
  BlendMode,
  EqualDistanceEmitter,
  FXR,
  Keyframe,
  LinearProperty,
  MultiTextureBillboardEx,
  ParticleAttributes,
  ParticleMovement,
  PeriodicEmitter,
  Property,
} from '@cccode/fxr'

/*
  This example creates a small smoke trail. It's pretty simple, but it shows
  how you can use two emitters of the same particle type to achieve something
  that a single emitter could not.
*/

const fxr = new FXR(402030)

/*
  To make a node emit particles when it's just sitting still, you need a
  periodic emitter. But, to make a node consitently emit particles close enough
  to each other when the node is moving, you need an equal distance emitter.

  A single node can't have two different emitters, so to solve this we need
  two nodes that emit the same particle.

  These are the two emitters we'll use:
*/
const emitters = [
  new PeriodicEmitter(0.05),
  new EqualDistanceEmitter(0.1, 200)
]

/*
  Since we want everything about the two nodes to be the same except for the
  emitter, we can map the emitter array to nodes containing them and all of the
  particle actions.
*/
fxr.root.nodes = emitters.map(emitter => new BasicNode([
  // This is one of the emitters from the array above
  emitter,
  /*
    We don't want the particles to be attached to the node, because if they
    were, they would always perfectly follow the node if it moves, making it
    look unnatural.
  */
  new ParticleAttributes({
    duration: 3,
    attachment: AttachMode.None
  }),
  /*
    We want the particles to slowly float up and fade out, but the smoke should
    also try to follow the node a bit if the node is moving. The follow factor
    here starts out at 1 (perfectly follow, as if attached to the node), and it
    goes down to 0 (completely detached) over 1.5 seconds.
  */
  new ParticleMovement({
    gravity: -0.2,
    followFactor: LinearProperty.basic(false, 1.5, 1, 0)
  }),
  /*
    MultiTextureBillboardEx is the best for creating smoke particles, as a
    smoke texture can be used as the mask and up to 2 separate layers can be
    added on top of that which can scroll and have random offsets. Here I'm
    only using a single layer that scrolls.
  */
  new MultiTextureBillboardEx({
    blendMode: BlendMode.Screen,
    width: 0.1,
    uniformScale: true,
    mask: 10061,
    layer1: 26020,
    layer1SpeedV: 0.1,
    layer1OffsetU: Property.random(0, 1),
    alphaThreshold: new LinearProperty(false, [
      new Keyframe(0, 255),
      new Keyframe(0.5, 0),
      new Keyframe(1.5, 32),
      new Keyframe(2.5, 64),
      new Keyframe(3, 255),
    ])
  })
]))
