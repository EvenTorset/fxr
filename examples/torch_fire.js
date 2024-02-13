import {
  AttachMode,
  BasicNode,
  BlendMode,
  FXR,
  LinearProperty,
  MultiTextureBillboardEx,
  NodeTransform,
  ParticleLifetime,
  ParticleMovement,
  ParticleWindAcceleration,
  PeriodicEmitter,
  PointLight,
  Property,
  QuadLine,
  SphereEmitterShape,
} from '@cccode/fxr'

const fxr = new FXR(402030)

fxr.root.nodes = [
  new BasicNode([
    new PeriodicEmitter(0.1, 1),
    new SphereEmitterShape(true, 0.05),
    new ParticleLifetime(1, AttachMode.None),
    new ParticleMovement({
      gravity: -0.1,
      followFactor: LinearProperty.basic(false, 1, 1, 0),
    }),
    new ParticleWindAcceleration(0.085),
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
      alphaThreshold: new LinearProperty(false, [
        { position: 0, value: 255 },
        { position: 0.25, value: 0 },
        { position: 1, value: 255 },
      ]),
      frameIndex: LinearProperty.basic(true, 1.5, 0, 64),
      frameIndexOffset: Property.random(0, 64),
      layer1SpeedV: 0.5,
      rgbMultiplier: 400,
      offset: [0, 0.3, 0],
      negativeDepthOffset: 0.25,
      bloomStrength: 0.3,
      bloomColor: [1, 0.7, 0.5],
    }),
  ]),
  new BasicNode([
    new NodeTransform({
      rotateX: 90,
    }),
    new PeriodicEmitter(0.1, 2),
    new SphereEmitterShape(true, 0.075),
    new ParticleLifetime(2, AttachMode.None),
    new ParticleMovement({
      gravity: -1,
      maxTurnAngle: LinearProperty.basic(false, 0.7, 0, 15),
      followFactor: LinearProperty.basic(false, 0.75, 1, 0),
      followRotation: false,
    }),
    new ParticleWindAcceleration(0.03),
    new QuadLine({
      blendMode: BlendMode.Add,
      startColor: [1, 0.15, 0.025, 1],
      endColor: [1, 0, 0, 0],
      width: Property.random(0.002, 0.004, 91846942),
      height: Property.random(0.02, 0.04, 91846942),
      color1: new LinearProperty(false, [
        { position: 0, value: [0, 0, 0, 0] },
        { position: 0.5, value: [1, 1, 1, 1] },
        { position: 2, value: [0, 0, 0, 1] },
      ]),
      rgbMultiplier: 20,
      bloomStrength: 0.8,
      bloomColor: [1, 0.7, 0.5],
    })
  ]),
  new BasicNode([
    new NodeTransform({
      translateY: 0.15
    }),
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
