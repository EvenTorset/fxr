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
  LinearProperty,
  MultiTextureBillboardEx,
  NodeTransform,
  OrientationMode,
  ParticleAttributes,
  ParticleMovement,
  ParticleWindAcceleration,
  PeriodicEmitter,
  PointEmitterShape,
  PointLight,
  RandomProperty,
  State,
  Tracer,
} from '@cccode/fxr'

// Choose an ID for the effect here. 402030 is the ghostflame torch flame/light
// which I commonly use for testing. The sfx should be attached to Miséricorde
// dummy poly 120.
const fxr = new FXR(402030)

// Colors for the lightsaber
const color = [1, 0.05, 0.1] // Red
// const color = [0.1, 0.3, 1] // Blue
// const color = [0.5, 0.2, 0.8] // Purple
// const color = [0.35, 0.9, 0.3] // Green

const bloomMultiplier = 1

// This effect uses states to enable the steam when it's raining or snowing
fxr.states = [
  // State 0, no rain/snow
  State.from(`ext(${ExternalValue.EldenRing.Precipitation}) == 0 else 1`),

  // State 1, rain/snow
  State.from(`ext(${ExternalValue.EldenRing.Precipitation}) == 1 else 0`),
]

// The crossguard is made of two identical pieces with different offsets, so
// this function was made to generate them without duping code
function crossguardSide(position) {
  return new BasicNode([
    new NodeTransform({
      rotateZ: 90,
      translateY: 0.54,
      translateX: 0.135 * position
    }),
    new PointEmitterShape({ direction: InitialDirection.LocalDown }),
    new MultiTextureBillboardEx({
      orientation: OrientationMode.LocalYaw,
      blendMode: BlendMode.Source,
      height: 0.0225,
      width: 0.15,
      rgbMultiplier: 7.5,
      bloomRed: color[0],
      bloomGreen: color[1],
      bloomBlue: color[2],
      bloomStrength: bloomMultiplier * 0.5,
      octagonal: true,
      depthBlend: false
    })
  ]).mapStates(0, 0)
}

// The blade caps are similar to the crossguard pieces, and was given a
// function for the same reason
function bladeCap(position) {
  return new BasicNode([
    new NodeTransform({
      rotateX: 90,
      rotateZ: 90,
      translateY: 0.5 * position,
    }),
    new BillboardEx({
      texture: 10011,
      orientation: OrientationMode.LocalSouth,
      blendMode: BlendMode.Add,
      width: 0.0425,
      uniformScale: true,
      rgbMultiplier: 1,
      alphaMultiplier: 100,
      bloomRed: color[0],
      bloomGreen: color[1],
      bloomBlue: color[2],
      bloomStrength: bloomMultiplier * 0.5,
      depthOffset: 0.04,
    })
  ]).mapStates(0, 0)
}

fxr.root.nodes = [
  new BasicNode([
    // This is used to position the entire effect
    new NodeTransform({
      rotateX: -90,
      translateZ: 0.55
    })
  ], [
    // Steam during rain/snow
    new BasicNode([
      new PeriodicEmitter({ interval: 0.2 }),
      new CylinderEmitterShape({ radius: 0.1 }),
      new ParticleAttributes({
        duration: 4,
        attachment: AttachMode.None
      }),
      new ParticleMovement({ gravity: -0.1 }),
      new ParticleWindAcceleration({ acceleration: 0.02 }),
      new MultiTextureBillboardEx({
        mask: 31261,
        columns: 8,
        totalFrames: 64,
        width: 0.4,
        uniformScale: true,
        color1: new LinearProperty(false, [
          new Keyframe(0, [1, 1, 1, 0]),
          new Keyframe(0.5, [1, 1, 1, 0.35]),
          new Keyframe(4, [1, 1, 1, 0]),
        ]),
        frameIndex: LinearProperty.basic(true, 4, 0, 32),
        frameIndexOffset: RandomProperty(0, 32),
        rgbMultiplier: 5,
        layer1: 34020,
        layer1SpeedV: 0.5,
        layer1Color: new LinearProperty(false, [
          new Keyframe(0.5, [...color, 1]),
          new Keyframe(4, [1, 1, 1, 1]),
        ]),
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
      new PointEmitterShape({ direction: InitialDirection.LocalDown }),
      new BillboardEx({
        orientation: OrientationMode.LocalYaw,
        blendMode: BlendMode.Add,
        height: 0.03,
        rgbMultiplier: 10,
        bloomRed: color[0],
        bloomGreen: color[1],
        bloomBlue: color[2],
        bloomStrength: bloomMultiplier * 0.5,
      })
    ]).mapStates(0, 0),
    bladeCap(-1), // Blade tip cap
    bladeCap(1), // Blade base cap

    // Electric arcs
    new BasicNode([
      new PeriodicEmitter({ interval: 0.1, perInterval: 2 }),
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
        frameIndexOffset: RandomProperty(0, 15),
        height: 0.08,
        width: RandomProperty(0.2, 0.5),
        rgbMultiplier: 7.5,
        bloomRed: color[0],
        bloomGreen: color[1],
        bloomBlue: color[2],
        bloomStrength: bloomMultiplier * 0.5,
        alphaThreshold: new LinearProperty(false, [
          new Keyframe(0, 255),
          new Keyframe(0.25, 0),
          new Keyframe(0.5, 255),
        ])
      })
    ]).mapStates(0, 0),

    // Trail
    new BasicNode([
      new NodeTransform({ rotateX: 90 }),
      new Tracer({
        blendMode: BlendMode.Add,
        width: 0.5,
        segmentDuration: 0.06,
        rgbMultiplier: 7.5,
        bloomRed: color[0],
        bloomGreen: color[1],
        bloomBlue: color[2],
        bloomStrength: bloomMultiplier * 1,
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
      new ParticleMovement({
        gravity: 2,
        speed: 0.3,
      }),
      new ParticleWindAcceleration({ acceleration: 0.02 }),
      new BillboardEx({
        texture: 10020,
        blendMode: BlendMode.Add,
        width: RandomProperty(0.008, 0.04),
        uniformScale: true,
        alphaThreshold: LinearProperty.basic(false, 2, 0, 255),
        alphaMultiplier: 2,
        rgbMultiplier: 20,
        bloomRed: color[0],
        bloomGreen: color[1],
        bloomBlue: color[2],
        bloomStrength: bloomMultiplier * 0.5,
      })
    ]).mapStates(0, 0),
  ]).mapStates(0, 0)
]

// This effect uses an external value, which must be added to the external
// values list. The updateReferences method automatically handles this for you.
fxr.updateReferences()
