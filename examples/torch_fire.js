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
  ParticleForceAcceleration,
  PeriodicEmitter,
  PointLight,
  QuadLine,
  RandomRangeProperty,
  SphereEmitterShape,
  randomSeed,
} from '@cccode/fxr'

const qlSeed = randomSeed()

const fxr = new FXR(402030, true, [
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
    new ParticleForceAcceleration({ acceleration: 0.085 }),
    new MultiTextureBillboardEx({
      layer1: 31001,
      layer2: 34060,
      columns: 8,
      totalFrames: 64,
      blendMode: BlendMode.Add,
      width: 0.6,
      height: 0.6,
      color1: [1, 0.36, 0.16, 1],
      layer2Color: [1, 1, 1, 0.75],
      alphaFadeThreshold: new LinearProperty(false, [
        new Keyframe(0, 255),
        new Keyframe(0.25, 0),
        new Keyframe(1, 255),
      ]),
      frameIndex: LinearProperty.basic(true, 1.5, 0, 64),
      frameIndexOffset: RandomRangeProperty(0, 64),
      layer2SpeedV: 0.5,
      rgbMultiplier: 400,
      offsetY: 0.3,
      unkDepthBlend2: 0.25,
      bloomColor: [1, 0.7, 0.5, 0.3],
    }),
  ]),
  new BasicNode([
    NodeTransform({ rotation: [90, 0, 0] }),
    new PeriodicEmitter({ interval: 0.1, perEmission: 2 }),
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
    new ParticleForceAcceleration({ acceleration: 0.03 }),
    new QuadLine({
      blendMode: BlendMode.Add,
      startColor: [1, 0.15, 0.025, 1],
      endColor: [1, 0, 0, 0],
      width: RandomRangeProperty(0.002, 0.004, qlSeed),
      length: RandomRangeProperty(0.02, 0.04, qlSeed),
      color1: new LinearProperty(false, [
        new Keyframe(0, [0, 0, 0, 0]),
        new Keyframe(0.5, [1, 1, 1, 1]),
        new Keyframe(2, [0, 0, 0, 1]),
      ]),
      rgbMultiplier: 20,
      bloomColor: [1, 0.7, 0.5, 0.8],
    })
  ]),
  new BasicNode([
    NodeTransform({ offset: [0, 0.15, 0] }),
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
])
