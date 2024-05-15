import {
  AttachMode,
  BasicNode,
  BlendMode,
  FXR,
  Keyframe,
  LinearProperty,
  MultiTextureBillboardEx,
  NodeTransform,
  ParticleAttributes,
  ParticleMovement,
  ParticleWindAcceleration,
  PeriodicEmitter,
  PointLight,
  QuadLine,
  RandomProperty,
  SphereEmitterShape,
} from '@cccode/fxr'

const fxr = new FXR(402030)

fxr.root.nodes = [
  new BasicNode([
    new PeriodicEmitter({ interval: 0.1 }),
    new SphereEmitterShape({ radius: 0.05 }),
    new ParticleAttributes({
      duration: 1,
      attachment: AttachMode.None
    }),
    ParticleMovement({
      gravity: -0.1,
      followFactor: LinearProperty.basic(false, 1, 1, 0),
    }),
    new ParticleWindAcceleration({ acceleration: 0.085 }),
    new MultiTextureBillboardEx({
      mask: 31001,
      layer1: 34060,
      columns: 8,
      totalFrames: 64,
      blendMode: BlendMode.Add,
      width: 0.6,
      height: 0.6,
      color1: [1, 0.36, 0.16, 1],
      layer1Color: [1, 1, 1, 0.75],
      alphaFadeThreshold: new LinearProperty(false, [
        new Keyframe(0, 255),
        new Keyframe(0.25, 0),
        new Keyframe(1, 255),
      ]),
      frameIndex: LinearProperty.basic(true, 1.5, 0, 64),
      frameIndexOffset: RandomProperty(0, 64),
      layer1SpeedV: 0.5,
      rgbMultiplier: 400,
      offsetY: 0.3,
      unkDepthBlend2: 0.25,
      bloomStrength: 0.3,
      bloomRed: 1,
      bloomGreen: 0.7,
      bloomBlue: 0.5
    }),
  ]),
  new BasicNode([
    NodeTransform({ rotationX: 90 }),
    new PeriodicEmitter({ interval: 0.1, perInterval: 2 }),
    new SphereEmitterShape({ radius: 0.075 }),
    new ParticleAttributes({
      duration: 2,
      attachment: AttachMode.None
    }),
    ParticleMovement({
      gravity: -1,
      maxTurnAngle: LinearProperty.basic(false, 0.7, 0, 15),
      followFactor: LinearProperty.basic(false, 0.75, 1, 0),
      followRotation: false,
    }),
    new ParticleWindAcceleration({ acceleration: 0.03 }),
    new QuadLine({
      blendMode: BlendMode.Add,
      startColor: [1, 0.15, 0.025, 1],
      endColor: [1, 0, 0, 0],
      width: RandomProperty(0.002, 0.004, 91846942),
      length: RandomProperty(0.02, 0.04, 91846942),
      color1: new LinearProperty(false, [
        new Keyframe(0, [0, 0, 0, 0]),
        new Keyframe(0.5, [1, 1, 1, 1]),
        new Keyframe(2, [0, 0, 0, 1]),
      ]),
      rgbMultiplier: 20,
      bloomStrength: 0.8,
      bloomRed: 1,
      bloomGreen: 0.7,
      bloomBlue: 0.5
    })
  ]),
  new BasicNode([
    NodeTransform({ offsetY: 0.15 }),
    new PointLight({
      diffuseColor: [1, 0.65, 0.475, 1],
      radius: 20,
      volumeDensity: 2,
      asymmetryParam: 0.65,
      falloffExponent: 2,
      diffuseMultiplier: 150,
      shadows: true,
      jitterAndFlicker: true,
      flickerBrightness: 0.7,
    })
  ])
]
