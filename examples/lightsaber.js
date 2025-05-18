import {
  AttachMode,
  BasicNode,
  BillboardEx,
  BlendMode,
  CylinderEmitterShape,
  ExternalValue,
  FXR,
  InitialDirection,
  Keyframe,
  LightingMode,
  LinearProperty,
  MultiTextureBillboardEx,
  NodeTransform,
  OrientationMode,
  ParticleAttributes,
  ParticleMovement,
  ParticleForceAcceleration,
  PeriodicEmitter,
  PointLight,
  RandomRangeProperty,
  State,
  LegacyTracer,
} from '@cccode/fxr'

// Colors for the lightsaber
const color = [1, 0.05, 0.1] // Red
// const color = [0.1, 0.3, 1] // Blue
// const color = [0.5, 0.2, 0.8] // Purple
// const color = [0.35, 0.9, 0.3] // Green

const bloomMultiplier = 1

// The crossguard is made of two identical pieces with different offsets, so
// this function was made to generate them without duping code
function crossguardSide(position) {
  return new BasicNode([
    NodeTransform({
      offset: [0.135 * position, 0.54, 0],
      rotation: [0, 90, 0],
    }),
    new MultiTextureBillboardEx({
      orientation: OrientationMode.LocalYaw,
      blendMode: BlendMode.Source,
      height: 0.0225,
      width: 0.15,
      rgbMultiplier: 7.5,
      bloomColor: [...color, bloomMultiplier * 0.5],
      octagonal: true,
      depthBlend: false
    })
  ]).mapStates(0, 0)
}

// The blade caps are similar to the crossguard pieces, and was given a
// function for the same reason
function bladeCap(position) {
  return new BasicNode([
    NodeTransform({
      rotation: [90, 0, 90],
      offset: [0, 0.5 * position, 0],
    }),
    new BillboardEx({
      texture: 10011,
      orientation: OrientationMode.LocalSouth,
      blendMode: BlendMode.Add,
      width: 0.0425,
      uniformScale: true,
      rgbMultiplier: 1,
      alphaMultiplier: 100,
      bloomColor: [...color, bloomMultiplier * 0.5],
      depthOffset: 0.04,
    })
  ]).mapStates(0, 0)
}

const fxr = new FXR(1, [
  // This effect uses states to enable the steam when it's raining or snowing
  // State 0, no rain/snow
  State.from(`ext(${ExternalValue.EldenRing.Precipitation}) == 0 else 1`),

  // State 1, rain/snow
  State.from(`ext(${ExternalValue.EldenRing.Precipitation}) == 1 else 0`),
], [
  new BasicNode([
    // This is used to position the entire effect
    NodeTransform({
      rotation: [-90, 0, 0],
      offset: [0, 0, 0.55]
    })
  ], [
    // Steam during rain/snow
    new BasicNode([
      new PeriodicEmitter({ interval: 0.1 }),
      new CylinderEmitterShape({ radius: 0.1 }),
      new ParticleAttributes({
        duration: 4,
        attachment: AttachMode.None
      }),
      ParticleMovement({
        gravity: -0.1,
        followFactor: LinearProperty.basic(false, 0.25, 1, 0),
      }),
      new ParticleForceAcceleration({ acceleration: 0.02 }),
      new BillboardEx({
        texture: 21021,
        columns: 8,
        totalFrames: 64,
        width: RandomRangeProperty(0.1, 0.4),
        uniformScale: true,
        rotationZ: RandomRangeProperty(0, 360),
        color1: new LinearProperty(false, [
          new Keyframe(0, [1, 1, 1, 0]),
          new Keyframe(0.5, [1, 1, 1, 0.35]),
          new Keyframe(4, [1, 1, 1, 0]),
        ]),
        frameIndex: LinearProperty.basic(true, 4, 0, 32),
        frameIndexOffset: RandomRangeProperty(0, 32),
        hideIndoors: true,
        minDistance: 2,
        minFadeDistance: 4,
        lighting: LightingMode.Lit,
      })
    ]).mapStates(-1, 0), // Disable when there's no rain/snow

    // Crossguard
    crossguardSide(1),
    crossguardSide(-1),

    // Light source
    new BasicNode([
      new PointLight({
        diffuseColor: [...color, 1],
        diffuseMultiplier: 3,
        radius: 10,
      })
    ]).mapStates(0, 0),

    // Blade
    new BasicNode([
      NodeTransform({ rotation: [90, 0, 0] }),
      new BillboardEx({
        orientation: OrientationMode.LocalYaw,
        blendMode: BlendMode.Add,
        height: 0.03,
        rgbMultiplier: 10,
        bloomColor: [...color, bloomMultiplier * 0.5],
      })
    ]).mapStates(0, 0),
    bladeCap(-1), // Blade tip cap
    bladeCap(1), // Blade base cap

    // Electric arcs
    new BasicNode([
      new PeriodicEmitter({ interval: 0.1, perEmission: 2 }),
      new CylinderEmitterShape({
        radius: 0.01,
        height: 0.5,
        direction: InitialDirection.LocalDown
      }),
      new ParticleAttributes({ duration: 0.5 }),
      new BillboardEx({
        orientation: OrientationMode.LocalYaw,
        blendMode: BlendMode.Add,
        texture: 33020,
        totalFrames: 16,
        frameIndex: LinearProperty.basic(true, 0.5, 0, 16),
        frameIndexOffset: RandomRangeProperty(0, 15),
        height: 0.08,
        width: RandomRangeProperty(0.2, 0.5),
        rgbMultiplier: 7.5,
        bloomColor: [...color, bloomMultiplier * 0.5],
        alphaFadeThreshold: new LinearProperty(false, [
          new Keyframe(0, 255),
          new Keyframe(0.25, 0),
          new Keyframe(0.5, 255),
        ])
      })
    ]).mapStates(0, 0),

    // Trail
    new BasicNode([
      NodeTransform({ rotation: [90, 0, 0] }),
      new LegacyTracer({
        blendMode: BlendMode.Add,
        width: 0.5,
        segmentDuration: 0.06,
        rgbMultiplier: 7.5,
        bloomColor: [...color, bloomMultiplier],
      }),
    ]).mapStates(0, 0),

    // Falling sparks
    new BasicNode([
      new PeriodicEmitter({ interval: 0.1 }),
      new CylinderEmitterShape({ radius: 0.01 }),
      new ParticleAttributes({
        duration: 2,
        attachment: AttachMode.None
      }),
      ParticleMovement({
        gravity: 2,
        speed: 0.3,
      }),
      new ParticleForceAcceleration({ acceleration: 0.02 }),
      new BillboardEx({
        texture: 10020,
        blendMode: BlendMode.Add,
        width: RandomRangeProperty(0.008, 0.04),
        uniformScale: true,
        alphaFadeThreshold: LinearProperty.basic(false, 2, 0, 255),
        alphaMultiplier: 2,
        rgbMultiplier: 20,
        bloomColor: [...color, bloomMultiplier * 0.5],
      })
    ]).mapStates(0, 0),
  ])
])
