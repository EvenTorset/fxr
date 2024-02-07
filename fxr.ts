enum FXRVersion {
  /**
   * Used in Dark Souls 3.
   */
  DarkSouls3 = 4,
  /**
   * Used in Sekiro, Elden Ring, and Armored Core 6.
   */
  Sekiro = 5,
}

enum NodeType {
  /**
   * A root node.
   * 
   * This node type has a specialized subclass: {@link RootNode}
   */
  Root = 2000,
  /**
   * Acts as a node containing another FXR.
   * 
   * This node type has a specialized subclass: {@link ProxyNode}
   */
  Proxy = 2001,
  /**
   * A node that only displays one of its child nodes at a time based on
   * distance thresholds for each.
   * 
   * This node type has a specialized subclass: {@link LevelOfDetailNode}
   */
  LevelOfDetail = 2002,
  /**
   * A basic node.
   * 
   * This node type has a specialized subclass: {@link BasicNode}
   */
  Basic = 2200,
  Randomizer = 2202,
}

enum EffectType {
  /**
   * Manages the duration and thresholds for the
   * {@link NodeType.LevelOfDetail level of detail node}.
   * 
   * This effect type has a specialized subclass: {@link LevelOfDetailEffect}
   */
  LevelOfDetail = 1002,
  /**
   * A basic effect that can emit particles of many different types.
   * 
   * This effect type has a specialized subclass: {@link BasicEffect}
   */
  Basic = 1004,
  /**
   * An effect used to modify how the subnodes of a
   * {@link NodeType.Randomizer randomizer node} are picked.
   * 
   * May also be used for applying transforms to those subnodes, and
   * possibly other, still unknown things.
   * 
   * This effect type has a specialized subclass: {@link RandomizerEffect}
   */
  Randomizer = 1005,
}

enum ActionType {
  None = 0,
  NodeAcceleration = 1,
  /**
   * Translates the node with a property, meaning the offset can be animated.
   * 
   * This action type has a specialized subclass: {@link NodeTranslation}
   */
  NodeTranslation = 15,
  /**
   * Makes the node spin.
   * 
   * This action type has a specialized subclass: {@link NodeSpin}
   */
  NodeSpin = 34,
  /**
   * Sets the translation and rotation of the node.
   * 
   * This action type has a specialized subclass: {@link NodeTransform}
   */
  StaticNodeTransform = 35,
  /**
   * Sets and randomizes the translation and rotation of the node.
   * 
   * This action type has a specialized subclass: {@link NodeTransform}
   */
  RandomNodeTransform = 36,
  /**
   * Attaches the node to the camera.
   * 
   * This action type has a specialized subclass: {@link NodeAttachToCamera}
   */
  NodeAttachToCamera = 46,
  /**
   * Controls the movement of particles.
   * 
   * This action type has a specialized subclass: {@link ParticleMovement}
   */
  ParticleAcceleration = 55,
  /**
   * Controls the movement of particles.
   * 
   * This action type has a specialized subclass: {@link ParticleMovement}
   */
  ParticleSpeed = 60,
  /**
   * Controls the movement of particles.
   * 
   * This action type has a specialized subclass: {@link ParticleMovement}
   */
  ParticleSpeedRandomTurns = 64,
  /**
   * Controls the movement of particles.
   * 
   * This action type has a specialized subclass: {@link ParticleMovement}
   */
  ParticleSpeedPartialFollow = 65,
  /**
   * Plays a sound effect.
   * 
   * This action type has a specialized subclass: {@link PlaySound}
   */
  PlaySound = 75,
  NodeAccelerationRandomTurns = 83,
  /**
   * Controls the movement of particles.
   * 
   * This action type has a specialized subclass: {@link ParticleMovement}
   */
  ParticleAccelerationRandomTurns = 84,
  /**
   * Controls the movement of particles.
   * 
   * This action type has a specialized subclass: {@link ParticleMovement}
   */
  ParticleAccelerationPartialFollow = 105,
  NodeAccelerationPartialFollow = 106,
  NodeAccelerationSpin = 113,
  NodeSpeed = 120,
  NodeSpeedRandomTurns = 121,
  NodeSpeedPartialFollow = 122,
  NodeSpeedSpin = 123,
  /**
   * Controls various things about the node, like its duration, and how
   * it is attached to the parent node.
   * 
   * This action type has a specialized subclass: {@link NodeLifetime}
   */
  NodeLifetime = 128,
  /**
   * Controls various things about the particles emitted by the effect, like
   * their duration, and how they are attached to the parent node.
   * 
   * This action type has a specialized subclass: {@link ParticleLifetime}
   */
  ParticleLifetime = 129,
  Unk130 = 130,
  /**
   * Controls various multipliers as well as the acceleration of particles.
   * 
   * This action type has a specialized subclass: {@link ParticleMultiplier}
   */
  ParticleMultiplier = 131,
  /**
   * References another FXR by its ID.
   * 
   * This action type has a specialized subclass: {@link FXRReference}
   */
  FXRReference = 132,
  /**
   * Used in the {@link EffectType.LevelOfDetail level of detail effect} to
   * manage the duration and thresholds for the
   * {@link NodeType.LevelOfDetail level of detail node}.
   * 
   * This action type has a specialized subclass:
   * {@link LevelOfDetailThresholds}
   */
  LevelOfDetail = 133,
  /**
   * Maps states to effects in the parent node.
   * 
   * This action type has a specialized subclass: {@link StateEffectMap}
   */
  StateEffectMap = 199,
  Unk200 = 200,
  /**
   * Controls the weights for picking random subnodes. Used in
   * {@link EffectType.Randomizer}.
   * 
   * This action type has a specialized subclass: {@link NodeWeights}
   */
  NodeWeights = 201,
  /**
   * Emits particles periodically.
   * 
   * This action type has a specialized subclass: {@link PeriodicEmitter}
   */
  PeriodicEmitter = 300,
  /**
   * Emits particles once it has moved a certain distance from where it last
   * emitted particles.
   * 
   * This action type has a specialized subclass: {@link EqualDistanceEmitter}
   */
  EqualDistanceEmitter = 301,
  /**
   * Emits one particle once.
   * 
   * This action type has a specialized subclass: {@link OneTimeEmitter}
   */
  OneTimeEmitter = 399,
  /**
   * Makes the emitter a single point.
   * 
   * This action type has a specialized subclass: {@link PointEmitterShape}
   */
  PointEmitterShape = 400,
  /**
   * Makes the emitter disk-shaped.
   * 
   * This action type has a specialized subclass: {@link DiskEmitterShape}
   */
  DiskEmitterShape = 401,
  /**
   * Makes the emitter rectangular.
   * 
   * This action type has a specialized subclass: {@link RectangleEmitterShape}
   */
  RectangleEmitterShape = 402,
  /**
   * Makes the emitter spherical.
   * 
   * This action type has a specialized subclass: {@link SphereEmitterShape}
   */
  SphereEmitterShape =  403,
  /**
   * Makes the emitter cuboidal.
   * 
   * This action type has a specialized subclass: {@link BoxEmitterShape}
   */
  BoxEmitterShape = 404,
  /**
   * Makes the emitter cylindrical.
   * 
   * This action type has a specialized subclass: {@link CylinderEmitterShape}
   */
  CylinderEmitterShape = 405,
  Unk500 = 500,
  Unk501 = 501,
  Unk502 = 502,
  Unk503 = 503,
  PointSprite = 600,
  Line = 601,
  /**
   * Simple rectangular particle with a gradient. Most commonly used to create
   * lines, like the {@link ActionType.Line Line action}, but this has a
   * configurable width, so the lines can be made wider than the regular lines.
   * 
   * This action type has a specialized subclass: {@link QuadLine}
   */
  QuadLine = 602,
  /**
   * Particle with a texture that may animate.
   * 
   * This action type has a specialized subclass: {@link BillboardEx}
   */
  BillboardEx = 603,
  MultiTextureBillboardEx = 604,
  Model = 605,
  Tracer = 606,
  Distortion = 607,
  RadialBlur = 608,
  /**
   * Point light source.
   * 
   * This action type has a specialized subclass: {@link PointLight}
   */
  PointLight = 609,
  Unk700 = 700, // Root node action
  Unk701 = 701, // Root node action
  Unk702 = 702, // Root node action
  /**
   * Controls how effective the wind is at pushing the node.
   * 
   * This action type has a specialized subclass: {@link NodeWindSpeed}
  */
  NodeWindSpeed = 731,
  /**
   * Controls how effective the wind is at pushing the particles emitted from
   * the node.
   * 
   * This action type has a specialized subclass:
   * {@link ParticleWindSpeed}
  */
  ParticleWindSpeed = 732,
  /**
   * Controls how effective the wind is at accelerating the node.
   * 
   * This action type has a specialized subclass: {@link NodeWindAcceleration}
   */
  NodeWindAcceleration = 733,
  /**
   * Controls how effective the wind is at accelerating the particles emitted
   * from the node.
   * 
   * Acceleration requires slot 10 to have an action that enables acceleration
   * of the particles.
   * 
   * This action type has a specialized subclass:
   * {@link ParticleWindAcceleration}
   */
  ParticleWindAcceleration = 734,
  Unk800 = 800,
  Unk10000_StandardParticle = 10000,
  Unk10001_StandardCorrectParticle = 10001,
  Unk10002_Fluid = 10002,
  Unk10003_LightShaft = 10003,
  Unk10008_SparkParticle = 10008,
  Unk10009_SparkCorrectParticle = 10009,
  Unk10010_Tracer = 10010,
  Unk10012_Tracer = 10012,
  Unk10013_WaterInteractionSimulation = 10013,
  Unk10014_LensFlare = 10014,
  Unk10015_RichModel = 10015,
  Unk10100 = 10100, // Root node action
  Unk10200_ForceFieldCancelArea = 10200,
  Unk10300_ForceFieldWindArea = 10300,
  Unk10301_ForceFieldGravityArea = 10301,
  Unk10302_CollisionFieldArea = 10302,
  Unk10303_ForceFieldTurbulenceArea = 10303,
  Unk10400 = 10400, // Root node action
  Unk10500 = 10500, // Root node action
  /**
   * Spot light source.
   * 
   * This action type has a specialized subclass: {@link SpotLight}
   */
  SpotLight = 11000,
}

enum ValueType {
  Scalar = 0,
  Vector2 = 1,
  Vector3 = 2,
  Vector4 = 3
}

enum PropertyFunction {
  /**
   * Always returns 0 for each component.
   * 
   * This property function has a specialized subclass: {@link ZeroProperty}
   */
  Zero = 0,
  /**
   * Always returns 1 for each component.
   * 
   * This property function has a specialized subclass: {@link OneProperty}
   */
  One = 1,
  /**
   * Always returns the value in the property's fields.
   * 
   * This property function has a specialized subclass:
   * {@link ConstantProperty}
   */
  Constant = 2,
  /**
   * Uses step interpolation to interpolate the property's values.
   * 
   * This property function has a specialized subclass: {@link SteppedProperty}
   */
  Stepped = 3,
  /**
   * Uses linear interpolation to interpolate the property's values.
   * 
   * This property function has a specialized subclass: {@link LinearProperty}
   */
  Linear = 4,
  /**
   * Uses a custom curve to interpolate the property's values.
   * 
   * The difference between this and {@link Curve2} is currently unknown.
   */
  Curve1 = 5,
  /**
   * Uses a custom curve to interpolate the property's values.
   * 
   * The difference between this and {@link Curve1} is currently unknown.
   * 
   * This property function has a specialized subclass: {@link Curve2Property}
   */
  Curve2 = 6,
  /**
   * Same as {@link Curve1} or {@link Curve2} (not sure which), but allows each
   * component of the value to have a different number of stops.
   * 
   * Only available in Armored Core 6.
   */
  CompCurve = 7
}

enum ModifierType {
  /**
   * Adds a random value between `-x` and `x` to the property's value, where
   * `x` is the "max change" value set in the modifier's fields.
   * 
   * There is one RNG seed field for each component of the property value
   * followed by one "max change" value per component.
   */
  Randomizer1 = 0,
  /**
   * Adds a random value between `x` and `y` to the property's value, where
   * `x` and `y` are the min/max change values set in the modifier's fields.
   * 
   * There is one RNG seed field for each component of the property value
   * followed by one "min change" value per component, and then one "max
   * change" value per component.
   */
  Randomizer2 = 1,
  /**
   * Multiplies the property's value based on some external value. The only 
   * field in the modifier controls which external value to check. For example,
   * if the field is set to 10000, the external value will be based on what the
   * "Display Blood" option in the in-game settings is set to.
   * 
   * The factor is controlled by the modifier's only property. The external
   * value is given as the property function's argument, so a linear property
   * can be used to change the factor based on the external value.
   * 
   * This modifier type has two specialized subclasses:
   * - {@link ExternalValueModifier}
   * - {@link BloodVisibilityModifier}
   */
  ExternalValue1 = 2,
  /**
   * Same as {@link ExternalValue1}, except this only updates if the effect is
   * recreated instead of updating instantly when the external value changes.
   */
  ExternalValue2 = 3,
  /**
   * Adds a random fraction of the property's value to itself. The range of the
   * fraction is controlled by the the latter half of the modifier's fields,
   * where, if `x` is the value of the field, the possible range of the
   * fraction will be `-x` to `x`.
   * 
   * There is one RNG seed field for each component of the property value
   * followed by one "max change" value per component.
   */
  Randomizer3 = 4,
}

enum FieldType {
  Boolean,
  Integer,
  Float,
}

enum BlendMode {
  Unk0 = 0,
  Unk1 = 1,
  Normal = 2,
  Multiply = 3,
  Add = 4,
  Subtract = 5,
  Unk6 = 6,
  Screen = 7,
}

enum ExternalValue {
  /**
   * This value will be set to 1 when the effect is meant to end due to the
   * source of the effect going away, for example when a fire pot explodes and
   * disappears. The value is otherwise 0.
   */
  Terminate = 0,
  /**
   * In Elden Ring, this value is 1 if it's raining or snowing, and 0 otherwise.
   */
  Precipitation = 1,
  /**
   * In Elden Ring, this represents the the time of day. At midnight, the value
   * is 0, at noon it is 12, and then it goes up to 24 before wrapping back to
   * 0, just like the hours on the clock.
   */
  TimeOfDay = 2,
  /**
   * Used in AC6.
   */
  Unk3 = 3,
  /**
   * This is based on the distance between the SFX and the camera.
   * 
   * The range is 0-1, the distance is converted in some unknown way.
   * 
   * It does not always work for all sources of effects. This is used by the
   * beacon effect in Elden Ring, so it definitely works there.
   */
  SFXDistance = 1000,
  /**
   * This value is set through the Special Attribute param field on weapons.
   */
  HitEffectVariation = 2000,
  Unk2100 = 2100, // Blood related?
  Unk2200 = 2200, // Blood related?
  /**
   * Based on the "Display Blood" setting.
   * - Off: `-1`
   * - On: `0`
   * - Mild: `1`
   * 
   * This external value has a specialized modifier subclass:
   * {@link BloodVisibilityModifier}
   */
  DisplayBlood = 10000,
  Unk20000 = 20000,
  /**
   * Used in AC6.
   */
  Unk40000 = 40000,
  /**
   * Used in AC6.
   */
  Unk70000 = 70000,
  /**
   * Used in AC6.
   */
  Unk70010 = 70010,
  /**
   * Used in AC6.
   */
  Unk70020 = 70020,
  /**
   * Used in AC6.
   */
  Unk70200 = 70200,
}

enum Operator {
  NotEqual = 0,
  Equal = 1,
  GreaterThanOrEqual = 2,
  GreaterThan = 3,
}

enum OperandType {
  /**
   * The field's value, literally.
   */
  Literal = -4,
  /**
   * Gets an external value.
   * 
   * The field refers to an {@link ExternalValue}.
   */
  External = -3,
  /**
   * Based on movement in some way?
   * 
   * Does not require a field.
   */
  UnkMinus2 = -2,
  /**
   * The time since the effect changed state in seconds.
   * 
   * Does not require a field.
   */
  StateTime = -1,
}

enum AttachMode {
  /**
   * Completely detached.
   */
  None = 0,
  /**
   * Translates and rotates with the parent.
   */
  Parent = 1,
  /**
   * Translates and rotates with the attachment point (dummypoly). Parent transformations are ignored.
   */
  DummyPoly = 2,
  /**
   * Only translates with the parent. Rotations are entirely ignored.
   */
  ParentTranslation = 3,
  /**
   * Only translates with the attachment point (dummypoly). Rotations are entirely ignored.
   */
  DummyPolyTranslation = 4
}

enum PropertyArgument {
  /**
   * A constant value, usually just 0.
   */
  Constant,
  /**
   * Time in seconds since the particle was emitted.
   */
  ParticleAge,
  /**
   * Time in seconds since the {@link Effect} became active.
   * 
   * An effect becoming active is for example the delay from
   * {@link ActionType.NodeLifetime NodeLifetime} being over, or the active
   * {@link State} changing, making a node change which of its effects is
   * active.
   */
  EffectAge,
  /**
   * Time in seconds between the effect being created and the particle being
   * emitted. Stays constant per particle.
   */
  EmissionTime
}

enum OrientationMode {
  /**
   * Faces south.
   * 
   * Seemingly identical to {@link UnkSouth}?
   */
  South = 0,
  /**
   * Faces the camera.
   * 
   * Seemingly identical to {@link UnkCamera}?
   */
  Camera = 1,
  /**
   * Faces the -Z direction of the parent node.
   */
  ParentNegativeZ = 2,
  /**
   * Faces south.
   * 
   * Seemingly identical to {@link South}?
   */
  UnkSouth = 3,
  /**
   * Tries to face the camera, but is limited to rotation around the vertical
   * axis.
   */
  GlobalYaw = 4,
  /**
   * Faces east.
   */
  East = 5,
  /**
   * Faces the camera.
   * 
   * Seemingly identical to {@link Camera}?
   */
  UnkCamera = 6,
  /**
   * Tries to face the camera, but is limited to rotation around the Y axis of
   * the parent node.
   */
  ParentYaw = 7,
}

enum LightingMode {
  /**
   * Same as {@link Lit}, but this seems to sometimes have an extra light
   * source from somewhere?
   */
  UnkMinus2 = -2,
  /**
   * Lighting does not affect the particles. No shadows or specular
   * hightlights.
   */
  Unlit = -1,
  /**
   * Lighting affects the particles just like most regular objects.
   */
  Lit = 0,
}

const EffectActionSlots = {
  [EffectType.Basic]: [
    [
      ActionType.NodeLifetime
    ],
    [
      ActionType.StaticNodeTransform,
      ActionType.RandomNodeTransform
    ],
    [
      ActionType.NodeAcceleration,
      ActionType.NodeTranslation,
      ActionType.NodeSpin,
      ActionType.NodeAttachToCamera,
      ActionType.NodeAccelerationRandomTurns,
      ActionType.NodeAccelerationPartialFollow,
      ActionType.NodeAccelerationSpin,
      ActionType.NodeSpeed,
      ActionType.NodeSpeedRandomTurns,
      ActionType.NodeSpeedPartialFollow,
      ActionType.NodeSpeedSpin
    ],
    [
      ActionType.PlaySound
    ],
    [
      ActionType.PeriodicEmitter,
      ActionType.EqualDistanceEmitter,
      ActionType.OneTimeEmitter
    ],
    [
      ActionType.PointEmitterShape,
      ActionType.DiskEmitterShape,
      ActionType.RectangleEmitterShape,
      ActionType.SphereEmitterShape,
      ActionType.BoxEmitterShape,
      ActionType.CylinderEmitterShape
    ],
    [
      ActionType.Unk500,
      ActionType.Unk501,
      ActionType.Unk502,
      ActionType.Unk503
    ],
    [
      ActionType.ParticleMultiplier
    ],
    [
      ActionType.ParticleLifetime
    ],
    [
      ActionType.PointSprite,
      ActionType.Line,
      ActionType.QuadLine,
      ActionType.BillboardEx,
      ActionType.MultiTextureBillboardEx,
      ActionType.Model,
      ActionType.Tracer,
      ActionType.Distortion,
      ActionType.RadialBlur,
      ActionType.PointLight,
      ActionType.Unk10000_StandardParticle,
      ActionType.Unk10001_StandardCorrectParticle,
      ActionType.Unk10002_Fluid,
      ActionType.Unk10003_LightShaft,
      ActionType.Unk10008_SparkParticle,
      ActionType.Unk10009_SparkCorrectParticle,
      ActionType.Unk10010_Tracer,
      ActionType.Unk10012_Tracer,
      ActionType.Unk10013_WaterInteractionSimulation,
      ActionType.Unk10014_LensFlare,
      ActionType.Unk10015_RichModel,
      ActionType.Unk10200_ForceFieldCancelArea,
      ActionType.Unk10300_ForceFieldWindArea,
      ActionType.Unk10301_ForceFieldGravityArea,
      ActionType.Unk10302_CollisionFieldArea,
      ActionType.Unk10303_ForceFieldTurbulenceArea,
      ActionType.SpotLight
    ],
    [
      ActionType.ParticleAcceleration,
      ActionType.ParticleSpeed,
      ActionType.ParticleSpeedRandomTurns,
      ActionType.ParticleSpeedPartialFollow,
      ActionType.ParticleAccelerationRandomTurns,
      ActionType.ParticleAccelerationPartialFollow
    ],
    [],
    [
      ActionType.Unk130
    ],
    [
      ActionType.NodeWindSpeed,
      ActionType.NodeWindAcceleration
    ],
    [
      ActionType.ParticleWindSpeed,
      ActionType.ParticleWindAcceleration,
      ActionType.Unk800
    ]
  ],
  [EffectType.Randomizer]: [
    [
      ActionType.NodeLifetime
    ],
    [
      ActionType.StaticNodeTransform,
      ActionType.RandomNodeTransform
    ],
    [
      ActionType.NodeAcceleration,
      ActionType.NodeTranslation,
      ActionType.NodeSpin,
      ActionType.NodeAttachToCamera,
      ActionType.NodeAccelerationRandomTurns,
      ActionType.NodeAccelerationPartialFollow,
      ActionType.NodeAccelerationSpin,
      ActionType.NodeSpeed,
      ActionType.NodeSpeedRandomTurns,
      ActionType.NodeSpeedSpin
    ],
    [
      ActionType.PlaySound
    ],
    [
      ActionType.PeriodicEmitter,
      ActionType.EqualDistanceEmitter,
      ActionType.OneTimeEmitter
    ],
    [
      ActionType.PointEmitterShape,
      ActionType.DiskEmitterShape,
      ActionType.RectangleEmitterShape,
      ActionType.SphereEmitterShape,
      ActionType.BoxEmitterShape,
      ActionType.CylinderEmitterShape
    ],
    [
      ActionType.Unk500,
      ActionType.Unk501,
      ActionType.Unk502,
      ActionType.Unk503
    ],
    [
      ActionType.Unk200,
      ActionType.NodeWeights
    ],
    [],
    [],
  ]
}

function arrayOf<T>(size: number, func: (index: number) => T): T[] {
  return Array(size).fill(null).map((e, i) => func(i))
}

function randomInt32() {
  return Math.random() * 2**32 | 0
}

export type Vector2 = [x: number, y: number]
export type Vector3 = [x: number, y: number, z: number]
export type Vector4 = [red: number, green: number, blue: number, alpha: number]
export type Vector = Vector2 | Vector3 | Vector4
export type PropertyValue = number | Vector

function setPropertyInList(list: Property[], index: number, value: Property | PropertyValue) {
  if (value instanceof Property) {
    list[index] = value
  } else if (typeof value === 'number') {
    list[index] = new ConstantProperty(value)
  } else {
    list[index] = new ConstantProperty(...value)
  }
}

function scalarFromArg(scalar: number | Property) {
  return scalar instanceof Property ? scalar : new ConstantProperty(scalar)
}

function vectorFromArg(vector: Vector | Property) {
  return vector instanceof Property ? vector : new ConstantProperty(...vector)
}

function uniqueArray<T>(a: T[]) {
  return a.filter((e, i) => a.indexOf(e) === i)
}

class BinaryReader extends DataView {

  position: number = 0
  littleEndian: boolean = true
  steps: number[] = []

  getInt16(offset: number) {
    return super.getInt16(offset, this.littleEndian)
  }

  getUint16(offset: number) {
    return super.getUint16(offset, this.littleEndian)
  }

  getInt32(offset: number) {
    return super.getInt32(offset, this.littleEndian)
  }

  getUint32(offset: number) {
    return super.getUint32(offset, this.littleEndian)
  }

  getFloat32(offset: number) {
    // Rounding to get rid of most errors from precision loss
    return Math.round(super.getFloat32(offset, this.littleEndian) * 1e7) / 1e7
  }

  getFloat64(offset: number) {
    return super.getFloat64(offset, this.littleEndian)
  }

  readUint8() {
    return this.getUint8(this.position++)
  }

  readBool() {
    const b = this.readUint8()
    if (b <= 1) {
      return !!b
    } else {
      throw new Error(`readBool encountered non-boolean value: 0x${b.toString(16).padStart(2, '0')}`)
    }
  }

  readInt16() {
    const value = this.getInt16(this.position)
    this.position += 2
    return value
  }

  readUint16() {
    const value = this.getUint16(this.position)
    this.position += 2
    return value
  }

  readInt32() {
    const value = this.getInt32(this.position)
    this.position += 4
    return value
  }

  readUint32() {
    const value = this.getUint32(this.position)
    this.position += 4
    return value
  }

  readFloat32() {
    const value = this.getFloat32(this.position)
    this.position += 4
    return value
  }

  getInt32s(offset: number, count: number) {
    return arrayOf(count, i => this.getInt32(offset + i * 4))
  }

  assertUint8(...ui8s: number[]) {
    const ocp = this.position
    const value = this.readUint8()
    for (const ui8 of ui8s) {
      if (value === ui8) return value
    }
    throw new Error(`Read: ${value} | Expected: ${ui8s.join(', ')} | Position: ${ocp}`)
  }

  assertInt16(...i16s: number[]) {
    const ocp = this.position
    const value = this.readInt16()
    for (const i16 of i16s) {
      if (value === i16) return value
    }
    throw new Error(`Read: ${value} | Expected: ${i16s.join(', ')} | Position: ${ocp}`)
  }

  assertUint16(...ui16s: number[]) {
    const ocp = this.position
    const value = this.readUint16()
    for (const ui16 of ui16s) {
      if (value === ui16) return value
    }
    throw new Error(`Read: ${value} | Expected: ${ui16s.join(', ')} | Position: ${ocp}`)
  }

  assertInt32(...i32s: number[]) {
    const ocp = this.position
    const value = this.readInt32()
    for (const i32 of i32s) {
      if (value === i32) return value
    }
    throw new Error(`Read: ${value} | Expected: ${i32s.join(', ')} | Position: ${ocp}`)
  }

  assertUint32(...ui32s: number[]) {
    const ocp = this.position
    const value = this.readUint32()
    for (const ui32 of ui32s) {
      if (value === ui32) return value
    }
    throw new Error(`Read: ${value} | Expected: ${ui32s.join(', ')} | Position: ${ocp}`)
  }

  assertASCII(ascii: string) {
    const ocp = this.position
    const value: string = String.fromCharCode.apply(null, ascii.split('').map(() => this.readUint8()))
    if (value !== ascii) {
      throw new Error(`Read: ${value} | Expected: ${ascii} | Position: ${ocp}`)
    }
    return value
  }

  stepIn(offset: number) {
    this.steps.push(this.position)
    this.position = offset
  }

  stepOut() {
    if (this.steps.length === 0) {
      throw new Error('Reader is already stepped all the way out.')
    }
    this.position = this.steps.pop() ?? 0
  }

}

interface ReservationList {
  [name: string]: { offset: number, size: 1 | 2 | 4, func?: string }
}

class BinaryWriter {

  static #te = new TextEncoder

  littleEndian: boolean
  array: number[] = []
  reservations: ReservationList = {}

  #transBuf = new ArrayBuffer(4)
  #transDV = new DataView(this.#transBuf)
  #transArr16 = new Int8Array(this.#transBuf, 0, 2)
  #transArr32 = new Int8Array(this.#transBuf, 0, 4)

  constructor(littleEndian: boolean = true) {
    this.littleEndian = littleEndian
  }

  get position() {
    return this.array.length
  }

  writeBool(b: boolean) {
    this.array.push(+b)
  }

  writeInt8(i8: number) {
    this.array.push(i8)
  }

  writeUint8(ui8: number) {
    this.array.push(ui8)
  }

  writeInt16(i16: number) {
    this.#transDV.setInt16(0, i16, this.littleEndian)
    this.array.push(...this.#transArr16)
  }

  writeUint16(ui16: number) {
    this.#transDV.setUint16(0, ui16, this.littleEndian)
    this.array.push(...this.#transArr16)
  }

  writeInt32(i32: number) {
    this.#transDV.setInt32(0, i32, this.littleEndian)
    this.array.push(...this.#transArr32)
  }

  writeUint32(ui32: number) {
    this.#transDV.setUint32(0, ui32, this.littleEndian)
    this.array.push(...this.#transArr32)
  }

  writeFloat32(f32: number) {
    // Make sure that the value is not -0
    f32 = f32 === 0 ? 0 : f32
    this.#transDV.setFloat32(0, f32, this.littleEndian)
    this.array.push(...this.#transArr32)
  }

  writeInt8s(i8s: number[]) {
    for (const i8 of i8s) this.writeInt8(i8)
  }

  writeUint8s(ui8s: number[]) {
    for (const ui8 of ui8s) this.writeUint8(ui8)
  }

  writeInt16s(i16s: number[]) {
    for (const i16 of i16s) this.writeInt16(i16)
  }

  writeUint16s(ui16s: number[]) {
    for (const ui16 of ui16s) this.writeUint16(ui16)
  }

  writeInt32s(i32s: number[]) {
    for (const i32 of i32s) this.writeInt32(i32)
  }

  writeUint32s(ui32s: number[]) {
    for (const ui32 of ui32s) this.writeUint32(ui32)
  }

  writeFloat32s(f32s: number[]) {
    for (const f32 of f32s) this.writeFloat32(f32)
  }

  writeString(s: string) {
    this.array.push(...BinaryWriter.#te.encode(s))
  }

  reserveInt8(name: string) {
    this.reservations[name] = {
      offset: this.array.length,
      size: 1
    }
    this.writeInt8(0)
  }

  reserveUint8(name: string) {
    this.reservations[name] = {
      offset: this.array.length,
      size: 1
    }
    this.writeUint8(0)
  }

  reserveInt16(name: string) {
    this.reservations[name] = {
      offset: this.array.length,
      size: 2,
      func: 'setInt16'
    }
    this.writeInt16(0)
  }

  reserveUint16(name: string) {
    this.reservations[name] = {
      offset: this.array.length,
      size: 2,
      func: 'setUint16'
    }
    this.writeUint16(0)
  }

  reserveInt32(name: string) {
    this.reservations[name] = {
      offset: this.array.length,
      size: 4,
      func: 'setInt32'
    }
    this.writeInt32(0)
  }

  reserveUint32(name: string) {
    this.reservations[name] = {
      offset: this.array.length,
      size: 4,
      func: 'setUint32'
    }
    this.writeUint32(0)
  }

  reserveFloat32(name: string) {
    this.reservations[name] = {
      offset: this.array.length,
      size: 4,
      func: 'setFloat32'
    }
    this.writeFloat32(0)
  }

  fill(name: string, value: number) {
    if (!(name in this.reservations)) {
      throw new Error('Key is not reserved: ' + name)
    }
    const reservation = this.reservations[name]
    switch (reservation.size) {
      case 1: {
        this.array.splice(reservation.offset, 1, value)
        break
      }
      case 2: {
        this.#transDV[reservation.func](0, value, this.littleEndian)
        this.array.splice(reservation.offset, 2, ...this.#transArr16)
        break
      }
      case 4: {
        this.#transDV[reservation.func](0, value, this.littleEndian)
        this.array.splice(reservation.offset, 4, ...this.#transArr32)
        break
      }
    }
    delete this.reservations[name]
  }

  pad(align: number) {
    while (this.array.length % align > 0) this.writeInt8(0)
  }

  getArrayBuffer() {
    return new Uint8Array(this.array).buffer
  }

}

class FXR {

  id: number
  version: FXRVersion

  states: State[]
  rootNode: Node

  references: number[]
  externalValues: number[]
  unkBloodEnabler: number[]
  // unkEmpty: number[]

  /**
   * Creates a new effects resource (FXR) for FromSoftware's game engine.
   */
  constructor(
    id: number,
    version = FXRVersion.Sekiro,
    rootNode: Node = new RootNode,
    states: State[] = [ new State ],
    references: number[] = [],
    externalValues: number[] = [],
    unkBloodEnabler: number[] = [],
    // unkEmpty: number[] = [],
  ) {
    this.id = id
    this.version = version
    this.rootNode = rootNode
    this.states = states
    this.references = references
    this.externalValues = externalValues
    this.unkBloodEnabler = unkBloodEnabler
    // this.unkEmpty = unkEmpty
  }

  /**
   * Parses an FXR file.
   * @param buffer ArrayBuffer containing the contents of the FXR file.
   */
  static read(buffer: ArrayBuffer) {
    const br = new BinaryReader(buffer)

    br.assertASCII('FXR\0')
    br.assertInt16(0)
    const version = br.assertInt16(
      FXRVersion.DarkSouls3,
      FXRVersion.Sekiro
    )
    br.assertInt32(1)
    const id = br.readInt32()
    const stateListOffset = br.readInt32()
    br.assertInt32(1) // StateMachineCount
    br.position += 4 * 4
    // br.readInt32() // StateOffset
    // br.readInt32() // StateCount
    // br.readInt32() // ConditionOffset
    // br.readInt32() // ConditionCount
    const nodeOffset = br.readInt32()
    br.position += 15 * 4
    // br.readInt32() // NodeCount
    // br.readInt32() // EffectOffset
    // br.readInt32() // EffectCount
    // br.readInt32() // ActionOffset
    // br.readInt32() // ActionCount
    // br.readInt32() // PropertyOffset
    // br.readInt32() // PropertyCount
    // br.readInt32() // Section8Offset
    // br.readInt32() // Section8Count
    // br.readInt32() // Section9Offset
    // br.readInt32() // Section9Count
    // br.readInt32() // Section10Offset
    // br.readInt32() // Section10Count
    // br.readInt32() // FieldOffset
    // br.readInt32() // FieldCount
    br.assertInt32(1)
    br.assertInt32(0)

    let references: number[] = []
    let externalValues: number[] = []
    let unkBloodEnabler: number[] = []
    // let unkEmpty: number[] = []

    if (version === FXRVersion.Sekiro) {
      const referencesOffset = br.readInt32()
      const referencesCount  = br.readInt32()
      const externalValuesOffset = br.readInt32()
      const externalValuesCount  = br.readInt32()
      const unkBloodEnablerOffset = br.readInt32()
      const unkBloodEnablerCount  = br.readInt32()
      br.readInt32()
      br.assertInt32(0)
      // const unkEmptyOffset = br.readInt32()
      // const unkEmptyCount  = br.readInt32()

      references = br.getInt32s(referencesOffset, referencesCount)
      externalValues = br.getInt32s(externalValuesOffset, externalValuesCount)
      unkBloodEnabler = br.getInt32s(unkBloodEnablerOffset, unkBloodEnablerCount)
      // unkEmpty = br.getInt32s(unkEmptyOffset, unkEmptyCount)
    }

    br.position = stateListOffset
    br.assertInt32(0)
    const stateCount = br.readInt32()
    const statesOffset = br.readInt32()
    br.assertInt32(0)
    br.stepIn(statesOffset)
    const states = []
    for (let i = 0; i < stateCount; ++i) {
      states.push(State.read(br))
    }
    br.stepOut()

    br.position = nodeOffset
    const rootNode = Node.read(br)

    return new FXR(
      id,
      version,
      rootNode,
      states,
      references,
      externalValues,
      unkBloodEnabler,
      // unkEmpty,
    )
  }

  /**
   * Serialize to the FXR file format.
   * @returns ArrayBuffer containing the contents of the FXR file.
   */
  toArrayBuffer() {
    const bw = new BinaryWriter
    bw.writeString('FXR\0')
    bw.writeInt16(0)
    bw.writeUint16(this.version)
    bw.writeInt32(1)
    bw.writeInt32(this.id)
    bw.reserveInt32('StateListOffset')
    bw.writeInt32(1)
    bw.reserveInt32('StatesOffset1')
    bw.writeInt32(this.states.length)
    bw.reserveInt32('ConditionOffset')
    bw.reserveInt32('ConditionCount')
    bw.reserveInt32('NodeOffset')
    bw.reserveInt32('NodeCount')
    bw.reserveInt32('EffectOffset')
    bw.reserveInt32('EffectCount')
    bw.reserveInt32('ActionOffset')
    bw.reserveInt32('ActionCount')
    bw.reserveInt32('PropertyOffset')
    bw.reserveInt32('PropertyCount')
    bw.reserveInt32('Section8Offset')
    bw.reserveInt32('Section8Count')
    bw.reserveInt32('Section9Offset')
    bw.reserveInt32('Section9Count')
    bw.reserveInt32('Section10Offset')
    bw.reserveInt32('Section10Count')
    bw.reserveInt32('FieldOffset')
    bw.reserveInt32('FieldCount')
    bw.writeInt32(1)
    bw.writeInt32(0)

    if (this.version === FXRVersion.Sekiro) {
      bw.reserveInt32('ReferencesOffset')
      bw.writeInt32(this.references.length)
      bw.reserveInt32('ExternalValuesOffset')
      bw.writeInt32(this.externalValues.length)
      bw.reserveInt32('UnkBloodEnablerOffset')
      bw.writeInt32(this.unkBloodEnabler.length)
      // bw.reserveInt32('UnkEmptyOffset')
      // bw.writeInt32(this.unkEmpty.length)
      bw.writeInt32(0)
      bw.writeInt32(0)
    }

    bw.fill('StateListOffset', bw.position)
    bw.writeInt32(0)
    bw.writeInt32(this.states.length)
    bw.reserveInt32('StatesOffset2')
    bw.writeInt32(0)
    bw.pad(16)
    bw.fill('StatesOffset1', bw.position)
    bw.fill('StatesOffset2', bw.position)
    for (let i = 0; i < this.states.length; ++i) {
      this.states[i].write(bw, i)
    }

    bw.pad(16)
    bw.fill('ConditionOffset', bw.position)
    const conditions: StateCondition[] = []
    for (let i = 0; i < this.states.length; ++i) {
      this.states[i].writeConditions(bw, i, conditions)
    }
    bw.fill('ConditionCount', conditions.length)
    bw.pad(16)
    bw.fill('NodeOffset', bw.position)
    const nodes: Node[] = []
    this.rootNode.write(bw, nodes)
    this.rootNode.writeNodes(bw, nodes)
    bw.fill('NodeCount', nodes.length)
    bw.pad(16)
    bw.fill('EffectOffset', bw.position)
    let counter = { value: 0 }
    for (let i = 0; i < nodes.length; ++i) {
      nodes[i].writeEffects(bw, i, counter)
    }
    bw.fill('EffectCount', counter.value)
    bw.pad(16)
    bw.fill('ActionOffset', bw.position)
    counter.value = 0
    const actions: Action[] = []
    for (let i = 0; i < nodes.length; ++i) {
      nodes[i].writeActions(bw, i, counter, actions)
    }
    bw.fill('ActionCount', actions.length)
    bw.pad(16)
    bw.fill('PropertyOffset', bw.position)
    const properties: Property[] = []
    for (let i = 0; i < actions.length; ++i) {
      actions[i].writeProperties(bw, i, properties)
    }
    bw.fill('PropertyCount', properties.length)
    bw.pad(16)
    bw.fill('Section8Offset', bw.position)
    const modifiers: Modifier[] = []
    for (let i = 0; i < properties.length; ++i) {
      properties[i].writeModifiers(bw, i, modifiers)
    }
    bw.fill('Section8Count', modifiers.length)
    bw.pad(16)
    bw.fill('Section9Offset', bw.position)
    const conditionalProperties: Property[] = []
    for (let i = 0; i < modifiers.length; ++i) {
      modifiers[i].writeProperties(bw, i, conditionalProperties)
    }
    bw.fill('Section9Count', conditionalProperties.length)
    bw.pad(16)
    bw.fill('Section10Offset', bw.position)
    const section10s: Section10[] = []
    for (let i = 0; i < actions.length; ++i) {
      actions[i].writeSection10s(bw, i, section10s)
    }
    bw.fill('Section10Count', section10s.length)
    bw.pad(16)
    bw.fill('FieldOffset', bw.position)
    let fieldCount = 0
    for (let i = 0; i < conditions.length; ++i) {
      fieldCount += conditions[i].writeFields(bw, i)
    }
    for (let i = 0; i < actions.length; ++i) {
      fieldCount += actions[i].writeFields(bw, i)
    }
    for (let i = 0; i < properties.length; ++i) {
      fieldCount += properties[i].writeFields(bw, i, false)
    }
    for (let i = 0; i < modifiers.length; ++i) {
      fieldCount += modifiers[i].writeFields(bw, i)
    }
    for (let i = 0; i < conditionalProperties.length; ++i) {
      fieldCount += conditionalProperties[i].writeFields(bw, i, true)
    }
    for (let i = 0; i < section10s.length; ++i) {
      fieldCount += section10s[i].writeFields(bw, i)
    }
    bw.fill('FieldCount', fieldCount)
    bw.pad(16)

    if (this.version !== FXRVersion.Sekiro) {
      return bw.getArrayBuffer()
    }

    bw.fill('ReferencesOffset', bw.position)
    bw.writeInt32s(this.references)
    bw.pad(16)

    bw.fill('ExternalValuesOffset', bw.position)
    bw.writeInt32s(this.externalValues)
    bw.pad(16)

    bw.fill('UnkBloodEnablerOffset', bw.position)
    bw.writeInt32s(this.unkBloodEnabler)
    bw.pad(16)

    // if (this.unkEmpty.length > 0) {
    //   bw.fill('UnkEmptyOffset', bw.position)
    //   bw.writeInt32s(this.unkEmpty)
    //   bw.pad(16)
    // } else {
    //   bw.fill('UnkEmptyOffset', 0)
    // }

    return bw.getArrayBuffer()
  }

  static fromJSON({
    id,
    version,
    states,
    root,
    references,
    externalValues,
    unkBloodEnabler
  }: {
    id: number
    version: string
    states: string[]
    root: any
    references: number[]
    externalValues: number[]
    unkBloodEnabler: number[]
    unkEmpty: number[]
  }) {
    return new FXR(
      id,
      FXRVersion[version],
      Node.fromJSON(root),
      states.map(state => State.from(state)),
      references,
      externalValues,
      unkBloodEnabler
    )
  }

  toJSON() {
    return {
      id: this.id,
      version: FXRVersion[this.version],
      states: this.states.map(state => state.toString()),
      references: this.references,
      externalValues: this.externalValues,
      unkBloodEnabler: this.unkBloodEnabler,
      root: this.rootNode.toJSON(),
    }
  }

  /**
   * Creates a minified version of this FXR.
   * 
   * The minified FXR might result in a smaller file size, but should be
   * functionally identical to the FXR it was made from.
   */
  minify() {
    return new FXR(
      this.id,
      this.version,
      this.rootNode.minify(),
      this.states,
      this.references,
      this.externalValues,
      this.unkBloodEnabler
    )
  }

  /**
   * Automatically updates {@link references}, {@link externalValues}, and
   * {@link unkBloodEnabler} with the values used in the FXR.
   */
  updateReferences() {
    const references: number[] = []
    const externalValues: number[] = []
    let unkBloodEnabler = false
    for (const node of this.rootNode.walk()) {
      if (node.type === NodeType.Proxy) {
        references.push(node.actions[0].fields1[0].value as number)
      }
    }
    for (const prop of this.rootNode.walkProperties()) {
      for (const mod of prop.modifiers) {
        if (mod.type === ModifierType.ExternalValue1) {
          externalValues.push(mod.fields[0].value as number)
        } else if (mod.type === ModifierType.ExternalValue2 && mod.fields[0].value === ExternalValue.DisplayBlood) {
          unkBloodEnabler = true
        }
      }
    }
    for (const state of this.states) {
      for (const condition of state.conditions) {
        if (condition.leftOperandType === OperandType.External) {
          externalValues.push(condition.leftOperandValue)
        }
        if (condition.rightOperandType === OperandType.External) {
          externalValues.push(condition.rightOperandValue)
        }
      }
    }
    this.references = uniqueArray(references).sort((a, b) => a - b)
    this.externalValues = uniqueArray(externalValues).sort((a, b) => a - b)
    this.unkBloodEnabler = unkBloodEnabler ? [ExternalValue.DisplayBlood] : []
    return this
  }

}

class State {

  conditions: StateCondition[]

  constructor(conditions: StateCondition[] = []) {
    this.conditions = conditions
  }

  /**
   * Parses a logical expression in a string and creates a
   * {@link State} from it.
   * @param stateString A logical expression comprised of one or more
   * conditions separated by `&&`. The state may only be active if all of its
   * conditions are true.
   * 
   * Syntax:
   * ```text
   * stateString = <conditionExpression>[ && <conditionExpression>[...]]
   * ```
   * See {@link StateCondition.from} for more information about
   * `conditionExpression`.
   * 
   * Examples:
   * ```text
   * time < 0.5 else 1 && ext(2000) == 2
   * ext(0) < 1 && time < 2 && 1 == 1
   * ```
   * @returns The new state.
   */
  static from(stateString: string) {
    return new State(stateString.split('&&').map(e => StateCondition.from(e)))
  }

  static read(br: BinaryReader) {
    br.assertInt32(0)
    const count = br.readInt32()
    const offset = br.readInt32()
    br.assertInt32(0)
    br.stepIn(offset)
    const conditions = []
    for (let i = 0; i < count; ++i) {
      conditions.push(StateCondition.read(br))
    }
    br.stepOut()
    return new State(conditions)
  }

  write(bw: BinaryWriter, index: number) {
    bw.writeInt32(0)
    bw.writeInt32(this.conditions.length)
    bw.reserveInt32(`StateConditionsOffset${index}`)
    bw.writeInt32(0)
  }

  writeConditions(bw: BinaryWriter, index: number, conditions: StateCondition[]) {
    bw.fill(`StateConditionsOffset${index}`, bw.position)
    for (const condition of this.conditions) {
      condition.write(bw, conditions)
    }
  }

  toString() {
    return this.conditions.map(c => c.toString()).join(' && ')
  }

}

class StateCondition {

  operator: Operator
  unk1: number
  elseIndex: number
  leftOperandType: OperandType
  leftOperandValue: number | null
  rightOperandType: OperandType
  rightOperandValue: number | null

  /**
   * A condition for a state. The state is active if all of its conditions are
   * true. If the condition is false, the state at the {@link elseIndex} is
   * checked next.
   * @param operator Controls what operation should be used for the condition.
   * @param unk1 Unknown. Seems to always be 2 in vanilla Elden Ring. 3 seems
   * to make the condition always true.
   * @param elseIndex If the condition is false, the state at this index will
   * be checked instead. Set it to -1 to disable the node if the condition
   * is false.
   * @param leftOperandType Controls what type of value the operand to the left
   * of the operator should be.
   * @param leftOperandValue This does different things depending on the
   * {@link leftOperandType}:
   * - {@link OperandType.Literal}: This value is the operand's value.
   * - {@link OperandType.External}: This value refers to an external value to
   * use as the operand's value.
   * - {@link OperandType.UnkMinus2}: This value is ignored and should be null.
   * - {@link OperandType.StateTime}: This value is ignored and should be null.
   * @param rightOperandType Controls what type of value the operand to the
   * right of the operator should be.
   * @param rightOperandValue This does different things depending on the
   * {@link rightOperandType}:
   * - {@link OperandType.Literal}: This value is the operand's value.
   * - {@link OperandType.External}: This value refers to an external value to
   * use as the operand's value.
   * - {@link OperandType.UnkMinus2}: This value is ignored and should be null.
   * - {@link OperandType.StateTime}: This value is ignored and should be null.
   */
  constructor(
    operator: Operator,
    unk1: number,
    elseIndex: number,
    leftOperandType: OperandType,
    leftOperandValue: number | null,
    rightOperandType: OperandType,
    rightOperandValue: number | null,
  ) {
    this.operator = operator
    this.unk1 = unk1
    this.elseIndex = elseIndex
    this.leftOperandType = leftOperandType
    this.leftOperandValue = leftOperandValue
    this.rightOperandType = rightOperandType
    this.rightOperandValue = rightOperandValue
  }

  static #reExpression = /^\s*(?<left>(?:state)?time|(?:unk)?minus2|ext(?:ernal)?\(\d+\)|-?\d+(?:\.\d+)?|-?\.\d+)\s*(?<op>==?|<=?|>=?|!=)\s*(?<right>(?:state)?time|(?:unk)?minus2|ext(?:ernal)?\(\d+\)|-?\d+(?:\.\d+)?|-?\.\d+)\s*(?:else(?:\sgoto)?\s+(?<else>-?\d+|stop|disable))?\s*$/i
  static #reLiteralOperand = /^-?\d+(?:\.\d+)?|-?\.\d+$/
  static #reExternalOperand = /^[Ee]xt(?:ernal)?\((\d+)\)$/

  static #parseOperand(op: string) {
    switch (op.toLowerCase()) {
      case 'time':
      case 'statetime':
        return {
          type: OperandType.StateTime,
          value: null
        }
      case 'minus2':
      case 'unkminus2':
        return {
          type: OperandType.UnkMinus2,
          value: null
        }
      default: if (this.#reLiteralOperand.test(op)) {
        return {
          type: OperandType.Literal,
          value: parseFloat(op)
        }
      } else {
        return {
          type: OperandType.External,
          value: parseInt(op.match(this.#reExternalOperand)[1])
        }
      }
    }
  }

  /**
   * Parses a logical expression in a string and creates a
   * {@link StateCondition} from it.
   * @param expression A string with a logical expression and optionally an
   * `else` statement with a state index.
   * 
   * ## Syntax:
   * ```text
   * expression = <operand> <operator> <operand>[ else[ goto] <stateIndex>]
   * operand = <number> | External(<integer>) | StateTime | UnkMinus2
   * operator = != | == | > | >= | < | <=
   * stateIndex = <integer> | stop | disable
   * ```
   * 
   * `External`, `StateTime`, and `UnkMinus2` are all case-insensitive and have
   * shorter variations available. Here are some examples:
   * ```text
   * ext(0)
   * stateTime
   * time
   * minus2
   * ```
   * 
   * ## Examples:
   * ```text
   * ext(0) > 1
   * time < 5 else goto 2
   * 1 != External(10000) else 1
   * ```
   * 
   * @returns A new {@link StateCondition} based on the expression.
   */
  static from(expression: string) {
    const m = expression.match(this.#reExpression)
    if (m === null) {
      throw new Error('Syntax error in condition expression: ' + expression)
    }
    let op: Operator
    let flipOperands = false
    switch (m.groups.op) {
      case '!=':
        op = Operator.NotEqual
        break
      case '=':
      case '==':
        op = Operator.Equal
        break
      case '<':
        flipOperands = true
      case '>':
        op = Operator.GreaterThan
        break
      case '<=':
        flipOperands = true
      case '>=':
        op = Operator.GreaterThanOrEqual
        break
    }
    const left = this.#parseOperand(flipOperands ? m.groups.right : m.groups.left)
    const right = this.#parseOperand(flipOperands ? m.groups.left : m.groups.right)
    let elseIndex = -1
    if ('else' in m.groups) {
      switch (m.groups.else) {
        case '-1':
        case 'stop':
        case 'disable':
        case undefined:
          break
        default:
          elseIndex = parseInt(m.groups.else)
          break
      }
    }
    return new StateCondition(op, 2, elseIndex, left.type, left.value, right.type, right.value)
  }

  static read(br: BinaryReader) {
    const bf1 = br.readInt16()
    const operator = bf1 & 0b11
    const unk1 = (bf1 & 0b1100) >>> 2
    br.assertUint8(0)
    br.assertUint8(1)
    br.assertInt32(0)
    const targetStateIndex = br.readInt32()
    br.assertInt32(0)
    const leftOperand = br.assertInt16(-4, -3, -2, -1)
    br.assertUint8(0)
    br.assertUint8(1)
    br.assertInt32(0)
    const hasLeftValue = !!br.assertInt32(0, 1)
    br.assertInt32(0)
    const leftOffset = br.readInt32()
    br.assertInt32(0)
    br.assertInt32(0)
    br.assertInt32(0)
    br.assertInt32(0)
    br.assertInt32(0)
    const rightOperand = br.assertInt16(-4, -3, -2, -1)
    br.assertUint8(0)
    br.assertUint8(1)
    br.assertInt32(0)
    const hasRightValue = !!br.assertInt32(0, 1)
    br.assertInt32(0)
    const rightOffset = br.readInt32()
    br.assertInt32(0)
    br.assertInt32(0)
    br.assertInt32(0)
    br.assertInt32(0)
    br.assertInt32(0)
    return new StateCondition(
      operator,
      unk1,
      targetStateIndex,
      leftOperand,
      hasLeftValue ? StateCondition.readOperandValue(br, leftOperand, leftOffset) : null,
      rightOperand,
      hasRightValue ? StateCondition.readOperandValue(br, rightOperand, rightOffset) : null,
    )
  }

  static readOperandValue(br: BinaryReader, type: number, offset: number) {
    switch (type) {
      case OperandType.Literal: {
        br.stepIn(offset)
        const value = br.readFloat32()
        br.stepOut()
        return value
      }
      case OperandType.External: {
        br.stepIn(offset)
        const value = br.readInt32()
        br.stepOut()
        return value
      }
      case OperandType.UnkMinus2:
      case OperandType.StateTime:
        throw new Error('Unexpected value for operand without value: ' + OperandType[type])
    }
  }

  write(bw: BinaryWriter, conditions: StateCondition[]) {
    const count = conditions.length
    bw.writeInt16(this.operator | this.unk1 << 2)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(0)
    bw.writeInt32(this.elseIndex)
    bw.writeInt32(0)
    bw.writeInt16(this.leftOperandType)
    bw.writeInt8(0)
    bw.writeInt8(1)
    bw.writeInt32(0)
    bw.writeInt32(+(this.leftOperandValue !== null))
    bw.writeInt32(0)
    bw.reserveInt32(`ConditionLeftOffset${count}`)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt16(this.rightOperandType)
    bw.writeInt8(0)
    bw.writeInt8(1)
    bw.writeInt32(0)
    bw.writeInt32(+(this.rightOperandValue !== null))
    bw.writeInt32(0)
    bw.reserveInt32(`ConditionRightOffset${count}`)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt32(0)
    conditions.push(this)
  }

  writeFields(bw: BinaryWriter, index: number): number {
    let count = 0
    if (this.leftOperandValue === null) {
      bw.fill(`ConditionLeftOffset${index}`, 0)
    } else {
      if (this.leftOperandType === OperandType.Literal) {
        bw.fill(`ConditionLeftOffset${index}`, bw.position)
        bw.writeFloat32(this.leftOperandValue)
      } else {
        bw.fill(`ConditionLeftOffset${index}`, bw.position)
        bw.writeInt32(this.leftOperandValue)
      }
      count++
    }
    if (this.rightOperandValue === null) {
      bw.fill(`ConditionRightOffset${index}`, 0)
    } else {
      if (this.rightOperandType === OperandType.Literal) {
        bw.fill(`ConditionRightOffset${index}`, bw.position)
        bw.writeFloat32(this.rightOperandValue)
      } else {
        bw.fill(`ConditionRightOffset${index}`, bw.position)
        bw.writeInt32(this.rightOperandValue)
      }
      count++
    }
    return count
  }

  toString() {
    let left, op, right
    if (this.leftOperandType === OperandType.Literal && this.rightOperandType !== OperandType.Literal) {
      right = this.leftOperandValue
      switch (this.rightOperandType) {
        case OperandType.External:
          left = `External(${this.rightOperandValue})`
          break
        case OperandType.UnkMinus2:
        case OperandType.StateTime:
          left = OperandType[this.rightOperandType]
          break
      }
      switch (this.operator) {
        case Operator.NotEqual: op = '!='; break
        case Operator.Equal: op = '=='; break
        case Operator.GreaterThan: op = '<'; break
        case Operator.GreaterThanOrEqual: op = '<='; break
      }
    } else {
      switch (this.leftOperandType) {
        case OperandType.External:
          left = `External(${this.leftOperandValue})`
          break
        case OperandType.UnkMinus2:
        case OperandType.StateTime:
          left = OperandType[this.leftOperandType]
          break
        case OperandType.Literal:
          left = this.leftOperandValue
          break
      }
      switch (this.rightOperandType) {
        case OperandType.External:
          right = `External(${this.rightOperandValue})`
          break
        case OperandType.UnkMinus2:
        case OperandType.StateTime:
          right = OperandType[this.rightOperandType]
          break
        case OperandType.Literal:
          right = this.rightOperandValue
          break
      }
      switch (this.operator) {
        case Operator.NotEqual: op = '!='; break
        case Operator.Equal: op = '=='; break
        case Operator.GreaterThan: op = '>'; break
        case Operator.GreaterThanOrEqual: op = '>='; break
      }
    }
    return `${left} ${op} ${right} else ${this.elseIndex}`
  }

}

/**
 * The base class for all nodes.
 * 
 * A node is a container with actions, effects, and other nodes, and they form
 * the general structure of the FXR.
 */
class Node {

  type: NodeType
  actions: Action[] = []
  effects: Effect[] = []
  nodes: Node[] = []

  constructor(
    type: NodeType,
    actions: Action[] = [],
    effects: Effect[] = [],
    nodes: Node[] = []
  ) {
    this.type = type
    this.actions = actions
    this.effects = effects
    this.nodes = nodes
  }

  static read(br: BinaryReader) {
    const node = new Node(br.readInt16())
    br.assertUint8(0)
    br.assertUint8(1)
    br.assertInt32(0)
    const effectCount = br.readInt32()
    const actionCount = br.readInt32()
    const nodeCount = br.readInt32()
    br.assertInt32(0)
    const effectOffset = br.readInt32()
    br.assertInt32(0)
    const actionOffset = br.readInt32()
    br.assertInt32(0)
    const nodeOffset = br.readInt32()
    br.assertInt32(0)
    br.stepIn(nodeOffset)
    for (let i = 0; i < nodeCount; ++i) {
      node.nodes.push(Node.read(br))
    }
    br.stepOut()
    br.stepIn(effectOffset)
    for (let i = 0; i < effectCount; ++i) {
      node.effects.push(Effect.read(br))
    }
    br.stepOut()
    br.stepIn(actionOffset)
    for (let i = 0; i < actionCount; ++i) {
      node.actions.push(Action.read(br))
    }
    br.stepOut()
    return node
  }

  write(bw: BinaryWriter, nodes: Node[]) {
    const count = nodes.length
    bw.writeInt16(this.type)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(0)
    bw.writeInt32(this.effects.length)
    bw.writeInt32(this.actions.length)
    bw.writeInt32(this.nodes.length)
    bw.writeInt32(0)
    bw.reserveInt32(`NodeEffectsOffset${count}`)
    bw.writeInt32(0)
    bw.reserveInt32(`NodeActionsOffset${count}`)
    bw.writeInt32(0)
    bw.reserveInt32(`NodeChildNodesOffset${count}`)
    bw.writeInt32(0)
    nodes.push(this)
  }

  writeNodes(bw: BinaryWriter, nodes: Node[]) {
    const num = nodes.indexOf(this)
    if (this.nodes.length === 0) {
      bw.fill(`NodeChildNodesOffset${num}`, 0)
    } else {
      bw.fill(`NodeChildNodesOffset${num}`, bw.position)
      for (const node of this.nodes) {
        node.write(bw, nodes)
      }
      for (const node of this.nodes) {
        node.writeNodes(bw, nodes)
      }
    }
  }

  writeEffects(bw: BinaryWriter, index: number, effectCounter: { value: number }) {
    if (this.effects.length === 0) {
      bw.fill(`NodeEffectsOffset${index}`, 0)
    } else {
      bw.fill(`NodeEffectsOffset${index}`, bw.position)
      for (let i = 0; i < this.effects.length; ++i) {
        this.effects[i].write(bw, effectCounter.value + i)
      }
      effectCounter.value += this.effects.length
    }
  }

  writeActions(bw: BinaryWriter, index: number, effectCounter: { value: number }, actions: Action[]) {
    bw.fill(`NodeActionsOffset${index}`, bw.position)
    for (const action of this.actions) {
      action.write(bw, actions)
    }
    for (let i = 0; i < this.effects.length; ++i) {
      this.effects[i].writeActions(bw, effectCounter.value + i, actions)
    }
    effectCounter.value += this.effects.length
  }

  static fromJSON({
    type,
    actions,
    effects,
    nodes
  }: {
    type: number
    actions: []
    effects: []
    nodes: []
  }) {
    return new Node(
      type,
      actions.map(action => Action.fromJSON(action)),
      effects.map(effect => Effect.fromJSON(effect)),
      nodes.map(node => Node.fromJSON(node)),
    )
  }

  toJSON() {
    return {
      type: this.type,
      actions: this.actions.map(action => action.toJSON()),
      effects: this.effects.map(effect => effect.toJSON()),
      nodes: this.nodes.map(node => node.toJSON()),
    }
  }

  minify() {
    return new Node(
      this.type,
      this.actions.map(action => action.minify()),
      this.effects.map(effect => effect.minify()),
      this.nodes.map(node => node.minify())
    )
  }

  /**
   * Yields all nodes in this branch, including this node.
   */
  *walk(): Generator<Node> {
    yield this
    for (const node of this.nodes) {
      yield* node.walk()
    }
  }

  /**
   * Yields all effects in this branch.
   */
  *walkEffects() {
    for (const node of this.walk()) {
      yield* node.effects
    }
  }

  /**
   * Yields all actions in this branch.
   */
  *walkActions() {
    for (const node of this.walk()) {
      yield* node.actions
      for (const effect of node.effects) {
        yield* effect.actions
      }
    }
  }

  /**
   * Yields all properties in this branch, excluding properties inside
   * modifiers.
   */
  *walkProperties() {
    for (const action of this.walkActions()) {
      yield* action.properties1
      yield* action.properties2
    }
  }

}

/**
 * Simplifies the creation of new {@link NodeType.Root root nodes} by giving
 * them default actions.
 */
class RootNode extends Node {

  constructor(
    rateOfTime: number | Property = 1,
    effects: Effect[] = [],
    nodes: Node[] = [],
  ) {
    super(NodeType.Root, [
      new Action(ActionType.Unk700),
      new Action(ActionType.Unk10100, arrayOf(56, () => new IntField(0))),
      new Action(ActionType.Unk10400, arrayOf(65, () => new IntField(1))),
      new Action(ActionType.Unk10500, arrayOf(10, () => new IntField(0)), [], [
        rateOfTime instanceof Property ? rateOfTime : new ConstantProperty(rateOfTime as number)
      ]),
    ], effects, nodes)
  }

  get rateOfTime(): number { return this.actions.find(a => a.type === ActionType.Unk10500)?.properties1[0].stops[0].value as number }
  set rateOfTime(value: number | Property) {
    if (value instanceof Property) {
      this.actions.find(a => a.type === ActionType.Unk10500).properties1[0] = value
    } else {
      this.actions.find(a => a.type === ActionType.Unk10500).properties1[0] = new ConstantProperty(value as number)
    }
  }

}

/**
 * Acts as a node containing another FXR.
 */
class ProxyNode extends Node {

  declare actions: [FXRReference]

  /**
   * @param fxrID The ID of the FXR that this node should act as a proxy for.
   */
  constructor(fxrID: number) {
    super(NodeType.Proxy, [
      new FXRReference(fxrID)
    ])
  }

  /**
   * The ID of the FXR that this node should act as a proxy for.
   */
  get fxrID() { return this.actions[0].referenceID }
  set fxrID(value) { this.actions[0].referenceID = value }

}

/**
 * A node that only displays one of its child nodes at a time based on
 * distance thresholds for each.
 * 
 * This node can only manage up to five levels of detail. If you need more
 * levels, you can put another LOD node as the fifth child of this node and set
 * higher thresholds in that.
 */
class LevelOfDetailNode extends Node {

  /**
   * @param duration The duration for the node to stay active. Once its time is
   * up, it will deactivate and none of the child nodes will be visible/audible
   * anymore.
   * @param thresholds An array of distance thresholds. Each threshold is used
   * for the child node of the same index.
   * @param nodes An array of child nodes.
   */
  constructor(duration: number | Property, thresholds: number[], nodes: Node[]) {
    super(NodeType.LevelOfDetail, [
      new StateEffectMap(0)
    ], [
      new LevelOfDetailEffect(duration, thresholds)
    ], nodes)
  }

  mapStates(...effectIndices: number[]) {
    this.actions = [new StateEffectMap(...effectIndices)]
    return this
  }

}

/**
 * Simplifies the creation of new {@link NodeType.Basic basic nodes} by giving
 * them a default {@link ActionType.StateEffectMap state-effect map} and a
 * simpler way to modify the map.
 */
class BasicNode extends Node {

  constructor(effects: Effect[] = [], nodes: Node[] = []) {
    if (!Array.isArray(effects) || effects.some(e => !(e instanceof Effect))) {
      throw new Error('Non-effect passed as effect to BasicNode.')
    }
    if (!Array.isArray(nodes) || nodes.some(e => !(e instanceof Node))) {
      throw new Error('Non-node passed as node to BasicNode.')
    }
    super(NodeType.Basic, [
      new StateEffectMap(0)
    ], effects, nodes)
  }

  mapStates(...effectIndices: number[]) {
    this.actions = [new StateEffectMap(...effectIndices)]
    return this
  }

}

class Effect {

  type: EffectType
  actions: Action[]

  constructor(type: EffectType, actions: Action[] = []) {
    this.type = type
    this.actions = actions
  }

  static read(br: BinaryReader) {
    const effect = new Effect(br.readInt16())
    br.assertUint8(0)
    br.assertUint8(1)
    br.assertInt32(0)
    br.assertInt32(0)
    const actionCount = br.readInt32()
    br.assertInt32(0)
    br.assertInt32(0)
    const actionOffset = br.readInt32()
    br.assertInt32(0)
    br.stepIn(actionOffset)
    for (let i = 0; i < actionCount; ++i) {
      effect.actions.push(Action.read(br))
    }
    br.stepOut()
    return effect
  }

  write(bw: BinaryWriter, index: number) {
    bw.writeInt16(this.type)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt32(this.actions.length)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.reserveInt32(`EffectActionsOffset${index}`)
    bw.writeInt32(0)
  }

  writeActions(bw: BinaryWriter, index: number, actions: Action[]) {
    bw.fill(`EffectActionsOffset${index}`, bw.position)
    for (const action of this.actions) {
      action.write(bw, actions)
    }
  }

  static fromJSON({
    type,
    actions
  }: {
    type: number
    actions: []
  }) {
    return new Effect(type, actions.map(action => Action.fromJSON(action)))
  }

  toJSON() {
    return {
      type: this.type,
      actions: this.actions.map(action => action.toJSON())
    }
  }

  minify() {
    return new Effect(this.type, this.actions.map(action => action.minify()))
  }

}

/**
 * Manages the duration and thresholds for the
 * {@link NodeType.LevelOfDetail level of detail node}.
 */
class LevelOfDetailEffect extends Effect {

  /**
   * @param duration The duration for the node to stay active. Once its time is
   * up, it will deactivate and none of the child nodes will be visible/audible
   * anymore.
   * @param thresholds An array of distance thresholds. Each threshold is used
   * for the child node of the same index.
   */
  constructor(duration: number | Property, thresholds: number[]) {
    super(EffectType.LevelOfDetail, [
      new LevelOfDetailThresholds(duration, thresholds)
    ])
  }

}

/**
 * Utility class for creating basic effects without needing to know the order
   * of actions, and without needing to create actions that have defaults.
   * 
   * Default actions:
   * Index | Action
   * ------|----------
   * 0     | {@link ActionType.NodeLifetime NodeLifetime}
   * 1     | {@link ActionType.None None}
   * 2     | {@link ActionType.None None}
   * 3     | {@link ActionType.None None}
   * 4     | {@link ActionType.OneTimeEmitter OneTimeEmitter}
   * 5     | {@link ActionType.PointEmitterShape PointEmitterShape}
   * 6     | {@link ActionType.Unk500 Unk500}
   * 7     | {@link ActionType.ParticleMultiplier ParticleMultiplier}
   * 8     | {@link ActionType.ParticleLifetime ParticleLifetime}
   * 9     | {@link ActionType.None None}
   * 10    | {@link ActionType.None None}
   * 11    | {@link ActionType.None None}
   * 12    | {@link ActionType.Unk130 Unk130}
   * 13    | {@link ActionType.None None}
   * 14    | {@link ActionType.None None}
 */
class BasicEffect extends Effect {

  /**
   * @param actions Actions to use in the effect. The order does not matter,
   * and it does not need to be a complete list. Actions will be placed in the
   * slots they fit in.
   */
  constructor(actions: Action[] = []) {
    super(EffectType.Basic, [
      new NodeLifetime,
      new Action,
      new Action,
      new Action,
      new OneTimeEmitter,
      new PointEmitterShape,
      new Action(ActionType.Unk500),
      new ParticleMultiplier,
      new ParticleLifetime,
      new Action,
      new Action,
      new Action,
      new Action(ActionType.Unk130, [
        new IntField(1),
        new Field,
        new Field,
        new Field,
        new Field,
        new Field,
        new Field,
        new Field,
        new Field,
      ], [], [
        new ZeroProperty,
        new ZeroProperty,
        new ZeroProperty,
        new ZeroProperty,
        new ZeroProperty,
        new ZeroProperty,
        new ZeroProperty,
        new ZeroProperty,
      ]),
      new Action,
      new Action,
    ])
    for (const action of actions) {
      const index = EffectActionSlots[EffectType.Basic].findIndex(a => a.includes(action.type))
      if (index >= 0) {
        this.actions[index] = action
      } else {
        throw new Error('No slot for action: ' + action.type)
      }
    }
  }

}

/**
 * Utility class for creating randomizer effects without needing to know the
   * order of actions, and without needing to create actions that have
   * defaults.
   * 
   * Default actions:
   * Index | Action
   * ------|----------
   * 0     | {@link ActionType.NodeLifetime NodeLifetime}
   * 1     | {@link ActionType.None None}
   * 2     | {@link ActionType.None None}
   * 3     | {@link ActionType.None None}
   * 4     | {@link ActionType.OneTimeEmitter OneTimeEmitter}
   * 5     | {@link ActionType.PointEmitterShape PointEmitterShape}
   * 6     | {@link ActionType.Unk500 Unk500}
   * 7     | {@link ActionType.Unk200 Unk200}
   * 13    | {@link ActionType.None None}
   * 14    | {@link ActionType.None None}
 */
class RandomizerEffect extends Effect {
  
  /**
   * @param actions Actions to use in the effect. The order does not matter,
   * and it does not need to be a complete list. Actions will be placed in the
   * slots they fit in.
   */
  constructor(actions: Action[] = []) {
    super(EffectType.Randomizer, [
      new NodeLifetime,
      new Action,
      new Action,
      new Action,
      new OneTimeEmitter,
      new PointEmitterShape,
      new Action(ActionType.Unk500),
      new Action(ActionType.Unk200),
      new Action,
      new Action,
    ])
    for (const action of actions) {
      const index = EffectActionSlots[EffectType.Randomizer].findIndex(a => a.includes(action.type))
      if (index >= 0) {
        this.actions[index] = action
      } else {
        throw new Error('No slot for action: ' + action.type)
      }
    }
  }

}

const commonAction6xxFields2Types = [
  null,
  null,
  FieldType.Integer,
  null,
  FieldType.Integer,
  FieldType.Float, // Bloom - Red multiplier
  FieldType.Float, // Bloom - Green multiplier
  FieldType.Float, // Bloom - Blue multiplier
  FieldType.Float, // Bloom strength
  null,
  null,
  null,
  null,
  null,
  FieldType.Float, // Distance Fade: Close 0
  FieldType.Float, // Distance Fade: Close 1
  FieldType.Float, // Distance Fade: Far 0
  FieldType.Float, // Distance Fade: Far 1
  FieldType.Float, // Minimum view distance
  FieldType.Float, // Maximum view distance
  null,
  null,
  null,
  null,
  null,
  FieldType.Float,
  null,
  FieldType.Integer,
  null,
  FieldType.Float,
  FieldType.Float, // Shadow darkness
  null,
  FieldType.Integer,
  FieldType.Boolean, // Specular
  FieldType.Float, // Glossiness
  FieldType.Integer, // Lighting mode
  FieldType.Integer,
  null,
  FieldType.Float, // Specularity
  FieldType.Integer,
  null,
  null,
  null,
  null,
  null,
]
const ActionFieldTypes: { [index: string]: { Fields1: FieldType[], Fields2: FieldType[] } } = {
  [ActionType.NodeTranslation]: {
    Fields1: [
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.NodeSpin]: {
    Fields1: [
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.StaticNodeTransform]: {
    Fields1: [
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
    ],
    Fields2: []
  },
  [ActionType.RandomNodeTransform]: {
    Fields1: [
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
    ],
    Fields2: []
  },
  [ActionType.NodeAttachToCamera]: {
    Fields1: [
      FieldType.Boolean,
      null,
    ],
    Fields2: []
  },
  [ActionType.ParticleAcceleration]: {
    Fields1: [
      null,
      FieldType.Float,
    ],
    Fields2: []
  },
  [ActionType.ParticleSpeed]: {
    Fields1: [
      null,
      FieldType.Float,
    ],
    Fields2: []
  },
  [ActionType.ParticleSpeedRandomTurns]: {
    Fields1: [
      FieldType.Float,
      FieldType.Integer,
    ],
    Fields2: []
  },
  [ActionType.ParticleSpeedPartialFollow]: {
    Fields1: [
      null,
      FieldType.Integer,
      FieldType.Boolean
    ],
    Fields2: []
  },
  [ActionType.PlaySound]: {
    Fields1: [
      FieldType.Integer,
      FieldType.Float,
      FieldType.Boolean
    ],
    Fields2: []
  },
  [ActionType.ParticleAccelerationRandomTurns]: {
    Fields1: [
      FieldType.Float,
      FieldType.Integer,
    ],
    Fields2: []
  },
  [ActionType.ParticleAccelerationPartialFollow]: {
    Fields1: [
      null,
      FieldType.Integer,
      FieldType.Boolean
    ],
    Fields2: []
  },
  [ActionType.ParticleLifetime]: {
    Fields1: [
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.ParticleMultiplier]: {
    Fields1: [
      FieldType.Boolean
    ],
    Fields2: []
  },
  [ActionType.FXRReference]: {
    Fields1: [
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.Unk130]: {
    Fields1: [
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.PointEmitterShape]: {
    Fields1: [
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.DiskEmitterShape]: {
    Fields1: [
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.RectangleEmitterShape]: {
    Fields1: [
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.SphereEmitterShape]: {
    Fields1: [
      FieldType.Boolean,
    ],
    Fields2: []
  },
  [ActionType.BoxEmitterShape]: {
    Fields1: [
      FieldType.Integer,
      FieldType.Boolean,
    ],
    Fields2: []
  },
  [ActionType.CylinderEmitterShape]: {
    Fields1: [
      FieldType.Integer,
      FieldType.Boolean,
      FieldType.Boolean,
    ],
    Fields2: []
  },
  [ActionType.QuadLine]: {
    Fields1: [
      FieldType.Integer,
      null,
      null,
    ],
    Fields2: commonAction6xxFields2Types
  },
  [ActionType.BillboardEx]: {
    Fields1: [
      FieldType.Integer, // Orientation mode
      FieldType.Integer, // Normal map ID
      FieldType.Float, // Random width mult
      FieldType.Float, // Random height mult
      FieldType.Boolean, // Uniform scale
      FieldType.Integer,
      FieldType.Integer, // Columns
      FieldType.Integer, // Total frames
      FieldType.Boolean, // Interpolate frames
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Float,
      FieldType.Integer,
      null,
      null,
      FieldType.Integer,
      FieldType.Integer,
      null,
    ],
    Fields2: commonAction6xxFields2Types
  },
  [ActionType.PointLight]: {
    Fields1: [
      null,
      FieldType.Float,
    ],
    Fields2: [
      null, // Boolean?
      FieldType.Boolean, // Toggle for the 8 floats below, which control some sort of animation
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Boolean, // Cast shadows
      FieldType.Boolean, // Separate specular
      FieldType.Integer, // Fade-out time
      FieldType.Float, // Shadow darkness
      FieldType.Integer, // Shadow caching behavior?
      FieldType.Integer, // Always 2?
      FieldType.Integer,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Integer,
      FieldType.Integer, // Always 100?
      null,
      null,
      FieldType.Float, // Glow
      FieldType.Float,
      null,
      FieldType.Float, // Glow concentration
      FieldType.Float,
      FieldType.Integer,
      FieldType.Float,
      FieldType.Integer,
      null,
    ]
  },
  [ActionType.NodeWindSpeed]: {
    Fields1: [
      FieldType.Boolean,
    ],
    Fields2: []
  },
  [ActionType.ParticleWindSpeed]: {
    Fields1: [
      FieldType.Boolean,
      FieldType.Integer,
    ],
    Fields2: []
  },
  [ActionType.NodeWindAcceleration]: {
    Fields1: [
      FieldType.Boolean,
    ],
    Fields2: []
  },
  [ActionType.ParticleWindAcceleration]: {
    Fields1: [
      FieldType.Boolean,
      FieldType.Integer,
    ],
    Fields2: []
  },
  [ActionType.SpotLight]: {
    Fields1: [
      null,
      FieldType.Boolean,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Boolean,
      FieldType.Boolean,
      FieldType.Float,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      null,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Boolean,
      FieldType.Float,
      FieldType.Float,
      FieldType.Integer,
      FieldType.Float,
    ],
    Fields2: []
  }
}

class Action {

  type: ActionType
  fields1: Field[]
  fields2: Field[]
  properties1: Property[]
  properties2: Property[]
  section10s: Section10[]

  constructor(
    type: number = ActionType.None,
    fields1: Field[] = [],
    fields2: Field[] = [],
    properties1: Property[] = [],
    properties2: Property[] = [],
    section10s: Section10[] = [],
  ) {
    this.type = type
    this.fields1 = fields1
    this.fields2 = fields2
    this.properties1 = properties1
    this.properties2 = properties2
    this.section10s = section10s
  }

  static read(br: BinaryReader): Action {
    const type = br.readInt16()
    br.position += 6
    // br.readUint8() // Unk02
    // br.readUint8() // Unk03
    // br.readInt32() // Unk04
    const fieldCount1 = br.readInt32()
    const section10Count = br.readInt32()
    const propertyCount1 = br.readInt32()
    const fieldCount2 = br.readInt32()
    br.assertInt32(0)
    const propertyCount2 = br.readInt32()
    const fieldOffset = br.readInt32()
    br.assertInt32(0)
    const section10Offset = br.readInt32()
    br.assertInt32(0)
    const propertyOffset = br.readInt32()
    br.assertInt32(0)
    br.assertInt32(0)
    br.assertInt32(0)

    br.stepIn(propertyOffset)
    const properties1: Property[] = []
    const properties2: Property[] = []
    for (let i = 0; i < propertyCount1; ++i) {
      properties1.push(Property.read(br, false))
    }
    for (let i = 0; i < propertyCount2; ++i) {
      properties2.push(Property.read(br, false))
    }
    br.stepOut()

    br.stepIn(section10Offset)
    const section10s: Section10[] = []
    for (let i = 0; i < section10Count; ++i) {
      section10s.push(Section10.read(br))
    }
    br.stepOut()

    br.stepIn(fieldOffset)
    let fields1: Field[], fields2: Field[]
    if (type in ActionFieldTypes) {
      fields1 = Field.readWithTypes(br, fieldCount1, ActionFieldTypes[type].Fields1, this)
      fields2 = Field.readWithTypes(br, fieldCount2, ActionFieldTypes[type].Fields2, this)
    } else {
      fields1 = Field.readMany(br, fieldCount1, this)
      fields2 = Field.readMany(br, fieldCount2, this)
    }
    br.stepOut()
    if (type in Actions) {
      const action = new Actions[type]()
      action.type = type
      action.fields1 = fields1
      action.fields2 = fields2
      action.properties1 = properties1
      action.properties2 = properties2
      action.section10s = section10s
      return action
    } else {
      return new Action(type, fields1, fields2, properties1, properties2, section10s)
    }
  }

  write(bw: BinaryWriter, actions: Action[]) {
    const count = actions.length
    bw.writeInt16(this.type)
    bw.writeUint8(0) // Unk02
    bw.writeUint8(0) // Unk03
    bw.writeInt32(0) // Unk04
    bw.writeInt32(this.fields1.length)
    bw.writeInt32(this.section10s.length)
    bw.writeInt32(this.properties1.length)
    bw.writeInt32(this.fields2.length)
    bw.writeInt32(0)
    bw.writeInt32(this.properties2.length)
    bw.reserveInt32(`ActionFieldsOffset${count}`)
    bw.writeInt32(0)
    bw.reserveInt32(`ActionSection10sOffset${count}`)
    bw.writeInt32(0)
    bw.reserveInt32(`ActionPropertiesOffset${count}`)
    bw.writeInt32(0)
    bw.writeInt32(0)
    bw.writeInt32(0)
    actions.push(this)
  }

  writeProperties(bw: BinaryWriter, index: number, properties: Property[]) {
    bw.fill(`ActionPropertiesOffset${index}`, bw.position)
    for (const property of this.properties1) {
      property.write(bw, properties, false)
    }
    for (const property of this.properties2) {
      property.write(bw, properties, false)
    }
  }

  writeSection10s(bw: BinaryWriter, index: number, section10s: Section10[]) {
    bw.fill(`ActionSection10sOffset${index}`, bw.position)
    for (const section10 of this.section10s) {
      section10.write(bw, section10s)
    }
  }

  writeFields(bw: BinaryWriter, index: number): number {
    const count = this.fields1.length + this.fields2.length
    if (count === 0) {
      bw.fill(`ActionFieldsOffset${index}`, 0)
    } else {
      bw.fill(`ActionFieldsOffset${index}`, bw.position)
      for (const field of this.fields1) {
        field.write(bw)
      }
      for (const field of this.fields2) {
        field.write(bw)
      }
    }
    return count
  }

  withFields1(...fields: { index: number, field: Field | number | boolean }[]) {
    for (const { index, field } of fields) {
      if (field instanceof Field) {
        this.fields1[index] = field
      } else {
        this.fields1[index].value = field
      }
    }
    return this
  }

  withFields2(...fields: { index: number, field: Field | number | boolean }[]) {
    for (const { index, field } of fields) {
      if (field instanceof Field) {
        this.fields2[index] = field
      } else {
        this.fields2[index].value = field
      }
    }
    return this
  }

  static fromJSON({
    type,
    fields1 = [],
    fields2 = [],
    properties1 = [],
    properties2 = [],
    section10s = [],
  }: {
    type: ActionType
    fields1?: []
    fields2?: []
    properties1?: []
    properties2?: []
    section10s?: []
  }) {
    return new Action(
      type,
      fields1,
      fields2,
      properties1,
      properties2,
      section10s
    )
  }

  toJSON() {
    const o: {
      type: ActionType
      fields1?: any[]
      fields2?: any[]
      properties1?: any[]
      properties2?: any[]
      section10s?: any[]
    } = { type: this.type }
    if (this.fields1.length > 0) o.fields1 = this.fields1.map(field => field.toJSON())
    if (this.fields2.length > 0) o.fields2 = this.fields2.map(field => field.toJSON())
    if (this.properties1.length > 0) o.properties1 = this.properties1.map(prop => prop.toJSON())
    if (this.properties2.length > 0) o.properties2 = this.properties2.map(prop => prop.toJSON())
    if (this.section10s.length > 0) o.section10s = this.section10s.map(s10 => s10.toJSON())
    return o
  }

  /**
   * Creates a minified version of this action.
   * 
   * Some actions can be minified to make the output smaller. This is done by
   * creating a simpler action that is functionally equivalent to this action.
   * 
   * Actions that can not be minified will not be changed.
   */
  minify() {
    return new Action(
      this.type,
      this.fields1,
      this.fields2,
      this.properties1.map(prop => prop.minify()),
      this.properties2.map(prop => prop.minify()),
      this.section10s
    )
  }

}

/**
 * Translates the node using a property, meaning it can be animated. This can
 * be useful if you need the node to follow a specific path.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | translation
 */
class NodeTranslation extends Action {

  /**
   * @param translation A 3D vector used as an offset for the position of the
   * node. Defaults to [0, 0, 0].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * @param unkField Unknown. Fields1, index 0. An integer that has at least
   * three valid values: 0, 1, 2. Defaults to 0.
   */
  constructor(translation: Vector3 | Property = [0, 0, 0], unkField: number = 0) {
    super(ActionType.NodeTranslation, [
      new IntField(0)
    ], [], [
      vectorFromArg(translation)
    ])
  }

}

/**
 * Makes the node spin.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | spinX
 * 1     | spinXMult
 * 2     | spinY
 * 3     | spinYMult
 * 4     | spinZ
 * 5     | spinZMult
 */
class NodeSpin extends Action {

  /**
   * @param spinX X spin in degrees per second. Defaults to 0.
   * @param spinY Y spin in degrees per second. Defaults to 0.
   * @param spinZ Z spin in degrees per second. Defaults to 0.
   * @param spinXMult X spin multiplier. Defaults to 1.
   * @param spinYMult Y spin multiplier. Defaults to 1.
   * @param spinZMult Z spin multiplier. Defaults to 1.
   * @param unkField Unknown. Fields1, index 0. Defaults to 1.
   */
  constructor(
    spinX: number | Property = 0,
    spinY: number | Property = 0,
    spinZ: number | Property = 0,
    spinXMult: number | Property = 1,
    spinYMult: number | Property = 1,
    spinZMult: number | Property = 1,
    unkField: number = 1
  ) {
    super(ActionType.NodeSpin, [
      new IntField(unkField)
    ], [], [
      scalarFromArg(spinX),
      scalarFromArg(spinXMult),
      scalarFromArg(spinY),
      scalarFromArg(spinYMult),
      scalarFromArg(spinZ),
      scalarFromArg(spinZMult),
    ])
  }

}

export interface NodeTransformParams {
  /**
   * Translates the node along the X-axis. Defaults to 0.
   */
  translateX?: number
  /**
   * Translates the node along the Y-axis. Defaults to 0.
   */
  translateY?: number
  /**
   * Translates the node along the Z-axis. Defaults to 0.
   */
  translateZ?: number
  /**
   * Node rotation around the X-axis in degrees. Defaults to 0.
   */
  rotateX?: number
  /**
   * Node rotation around the Y-axis in degrees. Defaults to 0.
   */
  rotateY?: number
  /**
   * Node rotation around the Z-axis in degrees. Defaults to 0.
   */
  rotateZ?: number
  /**
   * The maximum change in translation along the X-axis from
   * {@link translateX the base value} caused by randomization. When the
   * node is created, its translation along this axis will be a random
   * number between the base value minus this value and the base value plus
   * this value. Defaults to 0.
   */
  randomTranslationX?: number
  /**
   * The maximum change in translation along the Y-axis from
   * {@link translateY the base value} caused by randomization. When the
   * node is created, its translation along this axis will be a random
   * number between the base value minus this value and the base value plus
   * this value. Defaults to 0.
   */
  randomTranslationY?: number
  /**
   * The maximum change in translation along the Z-axis from
   * {@link translateZ the base value} caused by randomization. When the
   * node is created, its translation along this axis will be a random
   * number between the base value minus this value and the base value plus
   * this value. Defaults to 0.
   */
  randomTranslationZ?: number
  /**
   * The maximum change in rotation around the X-axis from
   * {@link rotateX the base value} caused by randomization. When the node
   * is created, its rotation around this axis will be a random number between
   * the base value minus this value and the base value plus this value.
   * Defaults to 0.
   */
  randomRotationX?: number
  /**
   * The maximum change in rotation around the Y-axis from
   * {@link rotateY the base value} caused by randomization. When the node
   * is created, its rotation around this axis will be a random number between
   * the base value minus this value and the base value plus this value.
   * Defaults to 0.
   */
  randomRotationY?: number
  /**
   * The maximum change in rotation around the Z-axis from
   * {@link rotateZ the base value} caused by randomization. When the node
   * is created, its rotation around this axis will be a random number between
   * the base value minus this value and the base value plus this value.
   * Defaults to 0.
   */
  randomRotationZ?: number
}
/**
 * Sets the translation and rotation of the node. Optionally randomizes
 * the translation and rotation.
 * 
 * If any of the randomization parameters are not 0, it will create a
 * {@link ActionType.RandomNodeTransform RandomNodeTransform action} instead of
 * a {@link ActionType.StaticNodeTransform StaticNodeTransform action}, which
 * have different numbers of fields.
 * 
 * **Note about the X-axis**:  
 * Both of the action types represented by this class have the X-axis reversed.
 * RandomNodeTransform only has it reversed for translation, not rotation. This
 * class will automatically handle these strange inconsitencies and correct
 * them when using its accessors or contructor parameters, but it is important
 * to keep in mind if you are manually editing the fields of the action.
 */
class NodeTransform extends Action {

  declare fields1: FloatField[]

  constructor({
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    randomTranslationX = 0,
    randomTranslationY = 0,
    randomTranslationZ = 0,
    randomRotationX = 0,
    randomRotationY = 0,
    randomRotationZ = 0,
  }: NodeTransformParams = {}) {
    if (
      randomTranslationX === 0 &&
      randomTranslationY === 0 &&
      randomTranslationZ === 0 &&
      randomRotationX === 0 &&
      randomRotationY === 0 &&
      randomRotationZ === 0
    ) {
      super(ActionType.StaticNodeTransform, [
        // These two actions have their X-axis reversed for some reason
        new FloatField(-translateX),
        new FloatField(translateY),
        new FloatField(translateZ),
        new FloatField(-rotateX),
        new FloatField(rotateY),
        new FloatField(rotateZ),
      ])
    } else {
      super(ActionType.RandomNodeTransform, [
        new FloatField(-translateX),
        new FloatField(translateY),
        new FloatField(translateZ),
        // While action 35 has the X-axis reversed for both translation and
        // rotation, action 36 only has it reversed for translation
        new FloatField(rotateX),
        new FloatField(rotateY),
        new FloatField(rotateZ),
        new FloatField(randomTranslationX),
        new FloatField(randomTranslationY),
        new FloatField(randomTranslationZ),
        new FloatField(randomRotationX),
        new FloatField(randomRotationY),
        new FloatField(randomRotationZ),
      ])
    }
  }

  get translateX() { return -this.fields1[0].value }
  set translateX(value) { this.fields1[0].value = -value }

  get translateY() { return this.fields1[1].value }
  set translateY(value) { this.fields1[1].value = value }

  get translateZ() { return this.fields1[2].value }
  set translateZ(value) { this.fields1[2].value = value }

  get rotateX() {
    switch (this.type) {
      case ActionType.StaticNodeTransform: return -this.fields1[3].value
      case ActionType.RandomNodeTransform: return this.fields1[3].value
    }
  }
  set rotateX(value) {
    switch (this.type) {
      case ActionType.StaticNodeTransform: this.fields1[3].value = -value; break
      case ActionType.RandomNodeTransform: this.fields1[3].value = value; break
    }
  }

  get rotateY() { return this.fields1[4].value }
  set rotateY(value) { this.fields1[4].value = value }

  get rotateZ() { return this.fields1[5].value }
  set rotateZ(value) { this.fields1[5].value = value }

  #setRandomizationField(index: number, value: number) {
    if (value !== 0 && this.type === ActionType.StaticNodeTransform) {
      this.type = ActionType.RandomNodeTransform
      // The X rotation field needs to swap sign because it rotates the
      // opposite direction in action 35 for some reason.
      this.fields1[3].value *= -1
      this.fields1.push(
        new FloatField(0),
        new FloatField(0),
        new FloatField(0),
        new FloatField(0),
        new FloatField(0),
        new FloatField(0),
      )
    }
    this.fields1[index].value = value
  }

  get randomTranslationX() { return this.fields1[6]?.value ?? 0 }
  set randomTranslationX(value) { this.#setRandomizationField(6, value) }

  get randomTranslationY() { return this.fields1[7]?.value ?? 0 }
  set randomTranslationY(value) { this.#setRandomizationField(7, value) }

  get randomTranslationZ() { return this.fields1[8]?.value ?? 0 }
  set randomTranslationZ(value) { this.#setRandomizationField(8, value) }

  get randomRotationX() { return this.fields1[9]?.value ?? 0 }
  set randomRotationX(value) { this.#setRandomizationField(9, value) }

  get randomRotationY() { return this.fields1[10]?.value ?? 0 }
  set randomRotationY(value) { this.#setRandomizationField(10, value) }

  get randomRotationZ() { return this.fields1[11]?.value ?? 0 }
  set randomRotationZ(value) { this.#setRandomizationField(11, value) }

  minify() {
    if (this.type === ActionType.RandomNodeTransform) {
      if (
        this.fields1[6].value === 0 &&
        this.fields1[7].value === 0 &&
        this.fields1[8].value === 0 &&
        this.fields1[9].value === 0 &&
        this.fields1[10].value === 0 &&
        this.fields1[11].value === 0
      ) {
        if (
          this.fields1[0].value === 0 &&
          this.fields1[1].value === 0 &&
          this.fields1[2].value === 0 &&
          this.fields1[3].value === 0 &&
          this.fields1[4].value === 0 &&
          this.fields1[5].value === 0
        ) {
          // This transform doesn't do anything, return a None action.
          return new Action
        } else {
          // This doesn't use the randomization fields, return a static
          // transform action instead
          return new Action(ActionType.StaticNodeTransform, [
            this.fields1[0],
            this.fields1[1],
            this.fields1[2],
            new FloatField(-this.fields1[3].value),
            this.fields1[4],
            this.fields1[5],
          ])
        }
      } else {
        // This action can't be minified more without losing functionality,
        // return it without any changes
        return this
      }
    } else {
      if (
        this.fields1[0].value === 0 &&
        this.fields1[1].value === 0 &&
        this.fields1[2].value === 0 &&
        this.fields1[3].value === 0 &&
        this.fields1[4].value === 0 &&
        this.fields1[5].value === 0
      ) {
        // This transform doesn't do anything, return a None action.
        return new Action
      } else {
        // This action can't be minified more without losing functionality,
        // return it without any changes
        return this
      }
    }
  }

}

/**
 * Attaches the node to the camera.
 */
class NodeAttachToCamera extends Action {

  declare fields1: [BoolField, IntField]

  /**
   * @param followRotation Disable this to stop the node from following the
   * rotation of the camera. Defaults to true.
   * @param unkField1 Unknown. Fields1, index 1. Defaults to 1.
   */
  constructor(followRotation: boolean = true, unkField1: number = 1) {
    super(ActionType.NodeAttachToCamera, [
      new BoolField(followRotation),
      new IntField(unkField1)
    ])
  }

  /**
   * Controls if the node should also follow the rotation of the camera or only
   * the translation.
   */
  get followRotation() { return this.fields1[0].value }
  set followRotation(value) { this.fields1[0].value = value }

}

/**
 * Plays a sound effect.
 */
class PlaySound extends Action {

  /**
   * @param soundID The ID of the sound to play.
   * @param repeat Controls whether the sound will repeat or not.
   * 
   * Does not seem to work in Elden Ring.
   * @param volume Volume multiplier.
   * 
   * Does not seem to work in Elden Ring.
   */
  constructor(soundID: number, repeat: boolean = false, volume: number = 1) {
    super(ActionType.PlaySound, [
      new IntField(soundID),
      new FloatField(volume),
      new BoolField(repeat)
    ])
  }

  /**
   * The ID of the sound to play.
   */
  get soundID() { return this.fields1[0].value as number }
  set soundID(value) { this.fields1[0].value = value }

  /**
   * Volume multiplier.
   * 
   * Does not seem to work in Elden Ring.
   */
  get volume() { return this.fields1[1].value as number }
  set volume(value) { this.fields1[1].value = value }

  /**
   * Controls whether the sound will repeat or not.
   * 
   * Does not seem to work in Elden Ring.
   */
  get repeat() { return this.fields1[2].value as number }
  set repeat(value) { this.fields1[2].value = value }

}

export interface ParticleMovementParams {
  /**
   * Downwards acceleration. This will always point towards global down, even
   * if the node is rotated. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  gravity?: number | Property
  /**
   * The acceleration for the particles. The direction depends on the emitter
   * shape. Defaults to 0.
   * 
   * This can not be used together with any of the speed properties:
   * - {@link speed}
   * - {@link speedMult}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  acceleration?: number | Property
  /**
   * Multiplier for the {@link acceleration} property. Defaults to 1.
   * 
   * This can not be used together with any of the speed properties:
   * - {@link speed}
   * - {@link speedMult}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  accelerationMult?: number | Property
  /**
   * The speed that the particles will travel at. The direction depends on the
   * emitter shape. Defaults to 0.
   * 
   * This can not be used together with any of the acceleration properties:
   * - {@link acceleration}
   * - {@link accelerationMult}
   * 
   * Setting this will produce one of the speed actions instead of one of the
   * acceleration actions:
   * - {@link ActionType.ParticleSpeed ParticleSpeed}
   * - {@link ActionType.ParticleSpeedRandomTurns ParticleSpeedRandomTurns}
   * - {@link ActionType.ParticleSpeedPartialFollow ParticleSpeedPartialFollow}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  speed?: number | Property
  /**
   * Multiplier for the {@link speed} property. Defaults to 1.
   * 
   * This can not be used together with any of the acceleration properties:
   * - {@link acceleration}
   * - {@link accelerationMult}
   * 
   * Setting this will produce one of the speed actions instead of one of the
   * acceleration actions:
   * - {@link ActionType.ParticleSpeed ParticleSpeed}
   * - {@link ActionType.ParticleSpeedRandomTurns ParticleSpeedRandomTurns}
   * - {@link ActionType.ParticleSpeedPartialFollow ParticleSpeedPartialFollow}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  speedMult?: number | Property
  /**
   * The particles will turn a random amount based on this value at intervals
   * defined by {@link turnInterval}.
   * 
   * Unless one of the partial follow parameters are set, setting this will
   * produce one of the random turns actions:
   * - {@link ActionType.ParticleSpeedRandomTurns ParticleSpeedRandomTurns}
   * - {@link ActionType.ParticleAccelerationRandomTurns ParticleAccelerationRandomTurns}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  maxTurnAngle?: number | Property
  /**
   * The particles will turn a random amount based on {@link maxTurnAngle} at
   * this interval. The units are seconds, but due to how the field that stores
   * this value works, the value will be rounded to the nearest 0.02 seconds.
   * 
   * Unless one of the partial follow parameters are set, setting this will
   * produce one of the random turns actions:
   * - {@link ActionType.ParticleSpeedRandomTurns ParticleSpeedRandomTurns}
   * - {@link ActionType.ParticleAccelerationRandomTurns ParticleAccelerationRandomTurns}
   */
  turnInterval?: number
  /**
   * Disabling this will make the {@link followFactor} only affect translation
   * and not rotation. Defaults to true.
   * 
   * Setting this will produce one of the partial follow actions:
   * - {@link ActionType.ParticleSpeedPartialFollow ParticleSpeedPartialFollow}
   * - {@link ActionType.ParticleAccelerationPartialFollow ParticleAccelerationPartialFollow}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  followRotation?: boolean
  /**
   * Controls how well the particles should follow the node if they are not
   * attached. At 0, particles will not follow at all. At 1, particles will
   * follow perfectly, as if attached to the node. Negative values will make
   * the particles move in the opposite direction compared to the node. Values
   * greater than 1 will make the particles exaggerate the node's movement.
   * Defaults to 0.
   * 
   * Setting this will produce one of the partial follow actions:
   * - {@link ActionType.ParticleSpeedPartialFollow ParticleSpeedPartialFollow}
   * - {@link ActionType.ParticleAccelerationPartialFollow ParticleAccelerationPartialFollow}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link followRotation}
   */
  followFactor?: number | Property
  /**
   * Unknown. Fields1, index 0.
   */
  unkField0?: number
  /**
   * Unknown. Fields1, index 1.
   * 
   * Only used when creating one of the basic particle movement actions:
   * - {@link ActionType.ParticleAcceleration}
   * - {@link ActionType.ParticleSpeed}
   */
  unkField1?: number
}
/**
 * Controls how particles move.
 * 
 * This class covers all of the Particle Movement action types:
 * - {@link ActionType.ParticleAcceleration ParticleAcceleration}
 * - {@link ActionType.ParticleSpeed ParticleSpeed}
 * - {@link ActionType.ParticleSpeedRandomTurns ParticleSpeedRandomTurns}
 * - {@link ActionType.ParticleSpeedPartialFollow ParticleSpeedPartialFollow}
 * - {@link ActionType.ParticleAccelerationRandomTurns ParticleAccelerationRandomTurns}
 * - {@link ActionType.ParticleAccelerationPartialFollow ParticleAccelerationPartialFollow}
 * 
 * Which one is produced by the constructor depends on what arguments are set.
 * By default, the basic acceleration action is created.
 */
class ParticleMovement extends Action {

  constructor({
    gravity = 0,
    maxTurnAngle = null,
    turnInterval = null,
    acceleration = null,
    accelerationMult = null,
    speed = null,
    speedMult = null,
    followRotation = null,
    followFactor = null,
    unkField0 = 0,
    unkField1 = null,
  }: ParticleMovementParams = {}) {
    let asProp: number | Property, asMultProp: number | Property
    const isSpeedAct = speed !== null || speedMult !== null
    if (isSpeedAct) {
      if (acceleration !== null || accelerationMult !== null) {
        throw new Error('The speed properties and the acceleration properties cannot be used together in a ParticleMovement action.')
      }
      asProp = speed ?? 0
      asMultProp = speedMult ?? 1
    } else {
      asProp = acceleration ?? 0
      asMultProp = accelerationMult ?? 1
    }
    if (followFactor !== null || followRotation !== null) {
      turnInterval ??= 0
      maxTurnAngle ??= 0
      followRotation ??= true
      followFactor ??= 0
      super(
        isSpeedAct ?
          ActionType.ParticleSpeedPartialFollow
        : ActionType.ParticleAccelerationPartialFollow,
        [
          new FloatField(unkField0),
          new IntField(Math.round(turnInterval * 50)),
          new BoolField(!followRotation),
        ], [], [
          scalarFromArg(gravity),
          scalarFromArg(asProp),
          scalarFromArg(asMultProp),
          scalarFromArg(maxTurnAngle),
          scalarFromArg(followFactor),
        ]
      )
    } else if (turnInterval !== null || maxTurnAngle !== null) {
      turnInterval ??= 0
      maxTurnAngle ??= 0
      super(
        isSpeedAct ?
          ActionType.ParticleSpeedRandomTurns
        : ActionType.ParticleAccelerationRandomTurns,
        [
          new FloatField(unkField0),
          new IntField(Math.round(turnInterval * 50)),
        ], [], [
          scalarFromArg(gravity),
          scalarFromArg(asProp),
          scalarFromArg(asMultProp),
          scalarFromArg(maxTurnAngle),
        ]
      )
    } else {
      unkField1 ??= 0
      super(
        isSpeedAct ?
          ActionType.ParticleSpeed
        : ActionType.ParticleAcceleration,
        [
          new FloatField(unkField0),
          new FloatField(unkField1),
        ], [], [
          scalarFromArg(gravity),
          scalarFromArg(asProp),
          scalarFromArg(asMultProp),
        ]
      )
    }
  }

}

/**
 * Controls various things about the node, like its duration, and how
 * it is attached to the parent node.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | delay
 * 1     | unkField1
 * 2     | attachment
 * 3     | unkField3
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | duration
 */
class NodeLifetime extends Action {

  /**
   * @param duration The node duration in seconds. Defaults to -1
   * (infinite).
   * @param delay The delay before the emitter begins emitting. Defaults to 0.
   * @param attachment Controls how the node is attached to its parent.
   * Defaults to {@link AttachMode.Parent}.
   * @param unkField1 Unknown int. Fields1, index 1. Possibly a boolean field.
   * Defaults to 1.
   * @param unkField3 Unknown float. Fields1, index 3. Defaults to 0.
   */
  constructor(
    duration: number | Property = -1,
    delay: number = 0,
    attachment: AttachMode = AttachMode.Parent,
    unkField1: number = 1,
    unkField3: number = 0,
  ) {
    super(ActionType.NodeLifetime, [
      new FloatField(delay),
      new IntField(unkField1),
      new IntField(attachment),
      new FloatField(unkField3),
    ], [], [
      scalarFromArg(duration)
    ])
  }

}

/**
 * Controls various things about the particles emitted by the effect, like
 * their duration, and how they are attached to the parent node.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | attachment
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | duration
 */
class ParticleLifetime extends Action {

  /**
   * @param duration The particle duration in seconds. Defaults to -1
   * (infinite).
   * @param attachment Controls how the particle is attached to its parent.
   * Defaults to {@link AttachMode.Parent}.
   */
  constructor(
    duration: number | Property = -1,
    attachment: AttachMode = AttachMode.Parent
  ) {
    super(ActionType.ParticleLifetime, [
      new IntField(attachment)
    ], [], [
      scalarFromArg(duration)
    ])
  }

}

/**
 * Controls various multipliers as well as the acceleration of particles.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | uniformScale
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | acceleration
 * 1     | scaleX
 * 2     | scaleY
 * 3     | scaleZ
 * 4     | color
 */
class ParticleMultiplier extends Action {

  /**
   * @param uniformScale Scales the model uniformly based on {@link scaleX}.
   * The other scale properties in this action have no effect when this is
   * enabled.
   * @param speed Controls the speed of the particles, but only if they have an
   * action in slot 10. The direction depends on the emitter shape.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * @param scaleX Multiplier for the scale along the X-axis. If
   * {@link uniformScale} is enabled, this scales the particles uniformly.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * @param scaleY Multiplier for the scale along the Y-axis. If
   * {@link uniformScale} is enabled, this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * @param scaleZ Multiplier for the scale along the Z-axis. If
   * {@link uniformScale} is enabled, this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * @param color Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  constructor(
    uniformScale: boolean = true,
    speed: number | Property = 0,
    scaleX: number | Property = 1,
    scaleY: number | Property = scaleX instanceof Property ? Property.copy(scaleX) : scaleX,
    scaleZ: number | Property = scaleX instanceof Property ? Property.copy(scaleX) : scaleX,
    color: Vector4 | Property = [1, 1, 1, 1],
  ) {
    super(ActionType.ParticleMultiplier, [
      new BoolField(uniformScale),
    ], [], [
      scalarFromArg(speed),
      scalarFromArg(scaleX),
      scalarFromArg(scaleY),
      scalarFromArg(scaleZ),
      vectorFromArg(color),
    ])
  }

}

/**
 * References another FXR by its ID.
 */
class FXRReference extends Action {

  declare fields1: [IntField]

  /**
   * @param referenceID The ID of the referenced FXR.
   */
  constructor(referenceID: number) {
    super(ActionType.FXRReference, [
      new IntField(referenceID)
    ])
  }

  /**
   * The ID of the referenced FXR.
   */
  get referenceID() { return this.fields1[0].value }
  set referenceID(value) { this.fields1[0].value = value }

}

/**
 * Used in the {@link EffectType.LevelOfDetail level of detail effect} to
 * manage the duration and thresholds for the
 * {@link NodeType.LevelOfDetail level of detail node}.
 */
class LevelOfDetailThresholds extends Action {

  declare fields1: IntField[]

  /**
   * @param duration The duration for the node to stay active. Once its time is
   * up, it will deactivate and none of the child nodes will be visible/audible
   * anymore.
   * @param thresholds An array of distance thresholds. Each threshold is used
   * for the child node of the same index.
   */
  constructor(duration: number | Property = -1, thresholds: number[] = []) {
    thresholds = arrayOf(5, i => thresholds[i] ?? 1000)
    super(
      ActionType.LevelOfDetail,
      thresholds.map(l => new IntField(l)), [], [
        scalarFromArg(duration)
      ]
    )
  }

}

/**
 * Maps states to effects in the parent node.
 * 
 * The index of each value represents the index of the state, and the value
 * represents the index of the effect that should be active when the state is
 * active.
 */
class StateEffectMap extends Action {

  constructor(...effectIndices: number[]) {
    super(ActionType.StateEffectMap, [], [], [], [], [
      new Section10(effectIndices.map(i => new IntField(i)))
    ])
  }

}

/**
 * Controls the weights for picking random subnodes. Used in {@link EffectType.Randomizer}.
 */
class NodeWeights extends Action {

  constructor(...weights: number[]) {
    super(ActionType.NodeWeights, [], [], [], [], [
      new Section10(weights.map(w => new IntField(w)))
    ])
  }

}

/**
 * Emits particles periodically.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | interval
 * 1     | perInterval
 * 2     | totalIntervals
 * 3     | maxConcurrent
 */
class PeriodicEmitter extends Action {

  /**
   * @param interval Time between emitting new particles in seconds.
   * @param perInterval The number of particles to emit per interval. They all
   * spawn at the same time per interval.
   * @param totalIntervals The total number of intervals to emit particles.
   * Once this limit is reached, the emitter is will stop emitting.
   * @param maxConcurrent Maximum number of concurrent particles. Defaults to
   * -1 (infinite).
   * @param unkField Unknown. Fields1, index 0.
   */
  constructor(
    interval: number | Property = 1,
    perInterval: number | Property = 1,
    totalIntervals: number | Property = -1,
    maxConcurrent: number | Property = -1,
    unkField: number = 1
  ) {
    super(ActionType.PeriodicEmitter, [
      new IntField(unkField)
    ], [], [
      interval instanceof Property ? interval : new ConstantProperty(interval as number),
      perInterval instanceof Property ? perInterval : new ConstantProperty(perInterval as number),
      totalIntervals instanceof Property ? totalIntervals : new ConstantProperty(totalIntervals as number),
      maxConcurrent instanceof Property ? maxConcurrent : new ConstantProperty(maxConcurrent as number),
    ])
  }

  get interval() { return this.properties1[0] }
  set interval(value) { this.properties1[0] = value }

  get perInterval() { return this.properties1[1] }
  set perInterval(value) { this.properties1[1] = value }

  get total() { return this.properties1[2] }
  set total(value) { this.properties1[2] = value }

  get maxConcurrent() { return this.properties1[3] }
  set maxConcurrent(value) { this.properties1[3] = value }

  get unkField() { return this.fields1[0].value }
  set unkField(value) { this.fields1[0].value = value }

}

/**
 * Emits particles once it has moved a certain distance from where it last
 * emitted particles.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField0
 * 1     | unkField1
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | threshold
 * 1     | unkProp
 * 2     | maxConcurrent
 */
class EqualDistanceEmitter extends Action {

  /**
   * @param threshold How much the emitter must move to trigger emission.
   * Defaults to 0.1.
   * @param maxConcurrent How many particles from this emitter are allowed at
   * the same time. Defaults to 100.
   * @param unkField0 Unknown. Fields1, index 0. Defaults to 1.
   * @param unkField1 Unknown. Fields1, index 1. Defaults to 0.
   * @param unkProp Unknown. Properties1, index 1. Defaults to -1.
   */
  constructor(
    threshold: number | Property = 0.1,
    maxConcurrent: number | Property = 100,
    unkField0: number = 1,
    unkField1: number = 0,
    unkProp: number | Property = -1
  ) {
    super(ActionType.EqualDistanceEmitter, [
      new IntField(unkField0),
      new IntField(unkField1),
    ], [], [
      threshold instanceof Property ? threshold : new ConstantProperty(threshold as number),
      unkProp instanceof Property ? unkProp : new ConstantProperty(unkProp as number),
      maxConcurrent instanceof Property ? maxConcurrent : new ConstantProperty(maxConcurrent as number),
    ])
  }

}
/**
 * Emits one particle once.
 * 
 * Contains no fields or properties.
 */
class OneTimeEmitter extends Action {

  constructor() {
    super(ActionType.OneTimeEmitter)
  }

}

/**
 * Makes the emitter a single point.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField
 */
class PointEmitterShape extends Action {

  /**
   * @param unkField Unknown. Fields1, index 0. Defaults to 5.
   */
  constructor(unkField: number = 5) {
    super(ActionType.PointEmitterShape, [
      new IntField(unkField)
    ])
  }

}

/**
 * Makes the emitter disk-shaped. The normal of the disk is aligned with the
 * Z-axis.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | radius
 * 1     | centerWeight
 */
class DiskEmitterShape extends Action {

  /**
   * @param radius The radius of the disk in meters. Defaults to 1.
   * @param centerWeight
   * Controls the weight of the center of the disk for picking random
   * positions to emit from.
   * - At 0, particles are equally likely to emit from anywhere inside the
   * disk.
   * - At 1, particles have a 100% chance of being emitted from the center
   * point.
   * - At -1, particles have a 100% chance of being emitted from the perimeter
   * circle of the disk.
   * 
   * Defaults to 0.
   * @param unkField Unknown. Fields1, index 0. Defaults to 5.
   */
  constructor(
    radius: number | Property = 1,
    centerWeight: number | Property = 0,
    unkField: number = 5
  ) {
    super(ActionType.DiskEmitterShape, [
      new IntField(unkField)
    ], [], [
      radius instanceof Property ? radius : new ConstantProperty(radius as number),
      centerWeight instanceof Property ? centerWeight : new ConstantProperty(centerWeight as number),
    ])
  }

}

/**
 * Makes the emitter rectangular. The normal of the rectangle is aligned
 * with the Z-axis.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | sizeX
 * 1     | sizeY
 * 2     | centerWeight
 */
class RectangleEmitterShape extends Action {

  /**
   * @param sizeX Width of the rectangle. Defaults to 1.
   * @param sizeY Height of the rectangle. Defaults to sizeX.
   * @param centerWeight
   * Controls the weight of the center of the rectangle for picking random
   * positions to emit from.
   * - At 0, particles are equally likely to emit from anywhere inside the
   * rectangle.
   * - At 1, particles have a 100% chance of being emitted from the center
   * point.
   * - At -1, particles have a 100% chance of being emitted from the perimeter
   * of the rectangle.
   * 
   * Defaults to 0.
   * @param unkField Unknown. Fields1, index 0. Defaults to 5.
   */
  constructor(
    sizeX: number | Property = 1,
    sizeY: number | Property = sizeX instanceof Property ? Property.copy(sizeX) : sizeX,
    centerWeight: number | Property = 0,
    unkField: number = 5
  ) {
    super(ActionType.RectangleEmitterShape, [
      new IntField(unkField)
    ], [], [
      sizeX instanceof Property ? sizeX : new ConstantProperty(sizeX as number),
      sizeY instanceof Property ? sizeY : new ConstantProperty(sizeY as number),
      centerWeight instanceof Property ? centerWeight : new ConstantProperty(centerWeight as number),
    ])
  }

}

/**
 * Makes the emitter spherical.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | volume
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | radius
 */
class SphereEmitterShape extends Action {

  /**
   * @param volume If true, particles will be emitted from anywhere within the
   * sphere. Otherwise the particles will be emitted from the surface of the
   * sphere. Defaults to true.
   * @param radius The radius of the sphere in meters. Defaults to 1.
   */
  constructor(
    volume: boolean = true,
    radius: number | Property = 1,
  ) {
    super(ActionType.SphereEmitterShape, [
      new BoolField(volume)
    ], [], [
      radius instanceof Property ? radius : new ConstantProperty(radius as number),
    ])
  }

}

/**
 * Makes the emitter cuboidal.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField
 * 1     | volume
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | sizeX
 * 1     | sizeY
 * 2     | sizeZ
 */
class BoxEmitterShape extends Action {

  /**
   * @param volume If true, particles will be emitted from anywhere within the
   * cuboid. Otherwise the particles will be emitted from the surface of the
   * cuboid. Defaults to true.
   * @param sizeX Width of the cuboid. Defaults to 1.
   * @param sizeY Height of the cuboid. Defaults to sizeX.
   * @param sizeZ Depth of the cuboid. Defaults to sizeX.
   * @param unkField Unknown. Fields1, index 0. Defaults to 0.
   */
  constructor(
    volume: boolean = true,
    sizeX: number | Property = 1,
    sizeY: number | Property = sizeX instanceof Property ? Property.copy(sizeX) : sizeX,
    sizeZ: number | Property = sizeX instanceof Property ? Property.copy(sizeX) : sizeX,
    unkField: number = 0,
  ) {
    super(ActionType.BoxEmitterShape, [
      new IntField(unkField),
      new BoolField(volume),
    ], [], [
      sizeX instanceof Property ? sizeX : new ConstantProperty(sizeX as number),
      sizeY instanceof Property ? sizeY : new ConstantProperty(sizeY as number),
      sizeZ instanceof Property ? sizeZ : new ConstantProperty(sizeZ as number),
    ])
  }

}

/**
 * Makes the emitter cylindrical.
 * 
 * Fields1:
 * Index | Value
 * ------|------
 * 0     | unkField
 * 1     | volume
 * 2     | yAxis
 * 
 * Properties1:
 * Index | Value
 * ------|------
 * 0     | radius
 * 1     | height
 */
class CylinderEmitterShape extends Action {

  /**
   * @param volume If true, particles will be emitted from anywhere within the
   * cylinder. Otherwise the particles will be emitted from the surface of the
   * cylinder. Defaults to true.
   * @param radius The radius of the cylinder. Defaults to 1.
   * @param height The height of the cylinder. Defaults to 1.
   * @param yAxis If true, the cylinder will be aligned with the Y-axis instead
   * of the Z-axis. Defaults to true.
   * @param unkField Unknown. Fields1, index 0. Defaults to 5.
   */
  constructor(
    volume: boolean = true,
    radius: number | Property = 1,
    height: number | Property = 1,
    yAxis: boolean = true,
    unkField: number = 5,
  ) {
    super(ActionType.CylinderEmitterShape, [
      new IntField(unkField),
      new BoolField(volume),
      new BoolField(yAxis),
    ], [], [
      radius instanceof Property ? radius : new ConstantProperty(radius as number),
      height instanceof Property ? height : new ConstantProperty(height as number),
    ])
  }

}

/**
 * Super class for some of the 6xx actions that share part of their fields2
 * structure with other 6xx actions.
 */
class CommonAction6xxFields2Action extends Action {

  /**
   * Controls the color of the additional bloom effect. The colors of the
   * particles will be multiplied with this color to get the final color
   * of the bloom effect.
   * 
   * Note:
   * - This has no effect if the "Effects Quality" setting is set to "Low".
   * - This does not affect the natural bloom effect from high color values.
   * 
   * See also:
   * - {@link bloomStrength}
   */
  get bloomColor() {
    return [
      this.fields2[5].value as number,
      this.fields2[6].value as number,
      this.fields2[7].value as number,
    ] as Vector3
  }
  set bloomColor([r, g, b]) {
    this.fields2[5].value = r
    this.fields2[6].value = g
    this.fields2[7].value = b
  }

  /**
   * Controls the strength of the additional bloom effect.
   * 
   * Note:
   * - This has no effect if the "Effects Quality" setting is set to "Low".
   * - This does not affect the natural bloom effect from high color values.
   * 
   * See also:
   * - {@link bloomColor}
   */
  get bloomStrength() { return this.fields2[8].value as number }
  set bloomStrength(value) { this.fields2[8].value = value }

  /**
   * Minimum view distance. If the particle is closer than this distance from
   * the camera, it will be hidden. Can be set to -1 to disable the limit.
   * 
   * See also:
   * - {@link maxDistance}
   */
  get minDistance() { return this.fields2[18].value as number }
  set minDistance(value) { this.fields2[18].value = value }

  /**
   * Maximum view distance. If the particle is farther away than this distance
   * from the camera, it will be hidden. Can be set to -1 to disable the limit.
   * 
   * See also:
   * - {@link minDistance}
   */
  get maxDistance() { return this.fields2[19].value as number }
  set maxDistance(value) { this.fields2[19].value = value }

}

export interface QuadLineParams {
  blendMode?: BlendMode | Property
  width?: number | Property
  height?: number | Property
  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link color2}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color1?: Vector4 | Property
  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link color1}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color2?: Vector4 | Property
  /**
   * The color for the "start" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link endColor end color} across the rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  startColor?: Vector4 | Property
  /**
   * The color for the "end" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link startColor start color} across the rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  endColor?: Vector4 | Property
  widthMultiplier?: number | Property
  heightMultiplier?: number | Property
  /**
   * Color multiplier for the entire rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  color3?: Vector4 | Property
  rgbMultiplier?: number | Property
  alphaMultiplier?: number | Property
  /**
   * Controls the color of the additional bloom effect. The colors of the
   * particles will be multiplied with this color to get the final color
   * of the bloom effect. Defaults to [1, 1, 1].
   * 
   * Note:
   * - This has no effect if the "Effects Quality" setting is set to "Low".
   * - This does not affect the natural bloom effect from high color values.
   * 
   * See also:
   * - {@link bloomStrength}
   */
  bloomColor?: Vector3
  /**
   * Controls the strength of the additional bloom effect. Defaults to 0.
   * 
   * Note:
   * - This has no effect if the "Effects Quality" setting is set to "Low".
   * - This does not affect the natural bloom effect from high color values.
   * 
   * See also:
   * - {@link bloomColor}
   */
  bloomStrength?: number
  /**
   * Minimum view distance. If the particle is closer than this distance from
   * the camera, it will be hidden. Can be set to -1 to disable the limit.
   * Defaults to -1.
   * 
   * See also:
   * - {@link maxDistance}
   */
  minDistance?: number
  /**
   * Maximum view distance. If the particle is farther away than this distance
   * from the camera, it will be hidden. Can be set to -1 to disable the limit.
   * Defaults to -1.
   * 
   * See also:
   * - {@link minDistance}
   */
  maxDistance?: number
  unkScalarProp2_2?: number | Property
  unkVec4Prop2_3?: Vector4 | Property
  unkVec4Prop2_4?: Vector4 | Property
  unkVec4Prop2_5?: Vector4 | Property
  unkScalarProp2_6?: number | Property
}
/**
 * Simple rectangular particle with a gradient. Most commonly used to create
 * lines, like the {@link ActionType.Line Line action}, but this has a
 * configurable width, so the lines can be made wider than the regular lines.
 */
class QuadLine extends CommonAction6xxFields2Action {

  constructor({
    blendMode = BlendMode.Normal,
    width = 1,
    height = 1,
    color1 = [1, 1, 1, 1],
    color2 = [1, 1, 1, 1],
    startColor = [1, 1, 1, 1],
    endColor = [1, 1, 1, 1],
    widthMultiplier = 1,
    heightMultiplier = 1,
    color3 = [1, 1, 1, 1],
    rgbMultiplier = 1,
    alphaMultiplier = 1,
    bloomColor = [1, 1, 1],
    bloomStrength = 0,
    minDistance = -1,
    maxDistance = -1,
    unkScalarProp2_2 = 0,
    unkVec4Prop2_3 = [1, 1, 1, 1],
    unkVec4Prop2_4 = [1, 1, 1, 1],
    unkVec4Prop2_5 = [1, 1, 1, 1],
    unkScalarProp2_6 = 0,
  }: QuadLineParams = {}) {
    super(ActionType.QuadLine, [
      /*  0 */ new IntField(-1),
      /*  1 */ new IntField(1),
      /*  2 */ new IntField(1),
    ], [
      /*  0 */ new IntField(0),
      /*  1 */ new IntField(0),
      /*  2 */ new IntField(8),
      /*  3 */ new IntField(0),
      /*  4 */ new IntField(1),
      /*  5 */ new FloatField(bloomColor[0]),
      /*  6 */ new FloatField(bloomColor[1]),
      /*  7 */ new FloatField(bloomColor[2]),
      /*  8 */ new FloatField(bloomStrength),
      /*  9 */ new IntField(0),
      /* 10 */ new IntField(0),
      /* 11 */ new IntField(0),
      /* 12 */ new IntField(0),
      /* 13 */ new IntField(0),
      /* 14 */ new FloatField(-1),
      /* 15 */ new FloatField(-1),
      /* 16 */ new FloatField(-1),
      /* 17 */ new FloatField(-1),
      /* 18 */ new FloatField(minDistance),
      /* 19 */ new FloatField(maxDistance),
      /* 20 */ new IntField(0),
      /* 21 */ new IntField(0),
      /* 22 */ new IntField(0),
      /* 23 */ new IntField(0),
      /* 24 */ new IntField(0),
      /* 25 */ new FloatField(1),
      /* 26 */ new FloatField(0),
      /* 27 */ new IntField(1),
      /* 28 */ new IntField(0),
      /* 29 */ new FloatField(5),
      /* 30 */ new FloatField(0),
      /* 31 */ new IntField(0),
      /* 32 */ new IntField(1),
      /* 33 */ new BoolField(false),
      /* 34 */ new FloatField(0),
      /* 35 */ new IntField(-1),
      /* 36 */ new IntField(-2),
      /* 37 */ new IntField(0),
      /* 38 */ new FloatField(0),
      /* 39 */ new IntField(1),
    ], [ // Properties1
      /*  0 */ scalarFromArg(blendMode),
      /*  1 */ scalarFromArg(width),
      /*  2 */ scalarFromArg(height),
      /*  3 */ vectorFromArg(color1),
      /*  4 */ vectorFromArg(color2),
      /*  5 */ vectorFromArg(startColor),
      /*  6 */ vectorFromArg(endColor),
      /*  7 */ scalarFromArg(widthMultiplier),
      /*  8 */ scalarFromArg(heightMultiplier),
      /*  9 */ vectorFromArg(color3),
    ], [ // Properties2
      /*  0 */ scalarFromArg(rgbMultiplier),
      /*  1 */ scalarFromArg(alphaMultiplier),
      /*  2 */ scalarFromArg(unkScalarProp2_2),
      /*  3 */ vectorFromArg(unkVec4Prop2_3),
      /*  4 */ vectorFromArg(unkVec4Prop2_4),
      /*  5 */ vectorFromArg(unkVec4Prop2_5),
      /*  6 */ scalarFromArg(unkScalarProp2_6),
    ])
  }

  get blendMode() { return this.properties1[0].stops[0].value as BlendMode }
  set blendMode(value: Property | PropertyValue) { setPropertyInList(this.properties1, 0, value) }
  get blendModeProperty() { return this.properties1[0] }

  get width() { return this.properties1[1] }
  set width(value: Property | PropertyValue) { setPropertyInList(this.properties1, 1, value) }

  get height() { return this.properties1[2] }
  set height(value: Property | PropertyValue) { setPropertyInList(this.properties1, 2, value) }

  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link colorMultiplier2}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get colorMultiplier1() { return this.properties1[3] }
  set colorMultiplier1(value: Property | PropertyValue) { setPropertyInList(this.properties1, 3, value) }

  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link colorMultiplier1}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get colorMultiplier2() { return this.properties1[4] }
  set colorMultiplier2(value: Property | PropertyValue) { setPropertyInList(this.properties1, 4, value) }

  /**
   * The color for the "start" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link endColor end color} across the rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get startColor() { return this.properties1[5] }
  set startColor(value: Property | PropertyValue) { setPropertyInList(this.properties1, 5, value) }

  /**
   * The color for the "end" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link startColor start color} across the rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get endColor() { return this.properties1[6] }
  set endColor(value: Property | PropertyValue) { setPropertyInList(this.properties1, 6, value) }

  get widthMultiplier() { return this.properties1[7] }
  set widthMultiplier(value: Property | PropertyValue) { setPropertyInList(this.properties1, 7, value) }

  get heightMultiplier() { return this.properties1[8] }
  set heightMultiplier(value: Property | PropertyValue) { setPropertyInList(this.properties1, 8, value) }

  /**
   * Color multiplier for the entire rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get colorMultiplier3() { return this.properties1[9] }
  set colorMultiplier3(value: Property | PropertyValue) { setPropertyInList(this.properties1, 9, value) }

  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value: Property | PropertyValue) { setPropertyInList(this.properties2, 0, value) }

  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value: Property | PropertyValue) { setPropertyInList(this.properties2, 1, value) }

}

export interface BillboardExParams {
  /**
   * Texture ID. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  texture?: number | Property
  /**
   * Blend mode. Defaults to {@link BlendMode.Normal}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  blendMode?: BlendMode | Property
  /**
   * Offset for the position of the particle. Each axis has its own property.
   * Defaults to [0, 0, 0].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offset?: Vector3 | Property[]
  /**
   * The width of the particle.
   * 
   * If {@link BillboardExParams.uniformScale uniformScale} is
   * enabled, this also controls the height.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  width?: number | Property
  /**
   * The height of the particle.
   * 
   * If {@link BillboardExParams.uniformScale uniformScale} is
   * enabled, {@link BillboardExParams.width width} also controls
   * the height, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  height?: number | Property
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color1?: Vector4 | Property
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  color2?: Vector4 | Property
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  color3?: Vector4 | Property
  /**
   * Parts of the particle with less opacity than this threshold will be
   * invisible. The range is 0-255. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaThreshold?: number | Property
  /**
   * Rotation in degrees. Each axis has its own property. Defaults to
   * [0, 0, 0].
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  rotation?: Vector3 | Property[]
  /**
   * Rotation speed in degrees per second. Each axis has its own property.
   * Defaults to [0, 0, 0].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  rotationSpeed?: Vector3 | Property[]
  /**
   * Rotation speed multiplier. Each axis has its own property. Defaults to
   * [1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  rotationSpeedMultiplier?: Vector3 | Property[]
  /**
   * Positive values will make the particle draw in front of objects closer to
   * the camera, while negative values will make it draw behind objects farther
   * away from the camera. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link negativeDepthOffset}
   */
  depthOffset?: number | Property
  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * Defaults to 0.
   * 
   * Seemingly identical to
   * {@link BillboardExParams.frameIndexOffset unkProp1_22}? The sum of
   * these two properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndex?: number | Property
  /**
   * Seemingly identical to
   * {@link BillboardExParams.frameIndex frameIndex}? The sum of
   * these two properties is the actual frame index that gets used. Defaults to
   * 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndexOffset?: number | Property
  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  rgbMultiplier?: number | Property
  /**
   * Alpha multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaMultiplier?: number | Property
  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information. Defaults to
   * {@link OrientationMode.Camera}.
   */
  orientation?: OrientationMode
  /**
   * Normal map ID. Defaults to 0.
   */
  normalMap?: number
  /**
   * Each particle will pick a random number between this value and 1, and the
   * width of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly thinner, down to half
   * width. Setting it to 2 will make them randomly wider, up to double width.
   * Defaults to 1.
   * 
   * If {@link BillboardExParams.uniformScale uniformScale} is
   * enabled, this also affects the height.
   * 
   * See also:
   * - {@link BillboardExParams.randomHeightMultiplier randomHeightMultiplier}
   */
  randomWidthMultiplier?: number
  /**
   * Each particle will pick a random number between this value and 1, and the
   * height of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shorter, down to half
   * height. Setting it to 2 will make them randomly taller, up to double
   * height. Defaults to 1.
   * 
   * If {@link BillboardExParams.uniformScale uniformScale} is
   * enabled,
   * {@link BillboardExParams.randomWidthMultiplier randomWidthMultiplier}
   * also affects the height, and this field is ignored.
   */
  randomHeightMultiplier?: number
  /**
   * If enabled, the particle width-related properties and fields will control
   * both the width and height of the particles, and the height counterparts
   * will be ignored. Defaults to true.
   * 
   * See also:
   * - {@link BillboardExParams.width width}
   * - {@link BillboardExParams.height height}
   * - {@link BillboardExParams.randomWidthMultiplier randomWidthMultiplier}
   * - {@link BillboardExParams.randomHeightMultiplier randomHeightMultiplier}
   */
  uniformScale?: boolean
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`. Defaults to 1.
   * 
   * See also:
   * - {@link BillboardExParams.totalFrames totalFrames}
   */
  columns?: number
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture. Defaults to 1.
   * 
   * See also:
   * - {@link BillboardExParams.columns columns}
   */
  totalFrames?: number
  /**
   * If enabled, the texture animation will use linear interpolation to mix
   * frames when the frame index is not a whole number. For example, if the
   * frame index is 0.5, enabling this will cause the average of the first two
   * frames to be shown instead of just the first frame.
   * 
   * If disabled, the frame index will just be truncated to get a whole number.
   * 
   * Defaults to true.
   * 
   * See also:
   * - {@link BillboardExParams.frameIndex frameIndex}
   */
  interpolateFrames?: boolean
  /**
   * Controls the color of the additional bloom effect. The colors of the
   * particles will be multiplied with this color to get the final color
   * of the bloom effect. Defaults to [1, 1, 1].
   * 
   * Note:
   * - This has no effect if the "Effects Quality" setting is set to "Low".
   * - This does not affect the natural bloom effect from high color values.
   * 
   * See also:
   * - {@link bloomStrength}
   */
  bloomColor?: Vector3
  /**
   * Controls the strength of the additional bloom effect. Defaults to 0.
   * 
   * Note:
   * - This has no effect if the "Effects Quality" setting is set to "Low".
   * - This does not affect the natural bloom effect from high color values.
   * 
   * See also:
   * - {@link bloomColor}
   */
  bloomStrength?: number
  /**
   * Minimum view distance. If the particle is closer than this distance from
   * the camera, it will be hidden. Can be set to -1 to disable the limit.
   * Defaults to -1.
   * 
   * See also:
   * - {@link maxDistance}
   */
  minDistance?: number
  /**
   * Maximum view distance. If the particle is farther away than this distance
   * from the camera, it will be hidden. Can be set to -1 to disable the limit.
   * Defaults to -1.
   * 
   * See also:
   * - {@link minDistance}
   */
  maxDistance?: number
  /**
   * Negative values will make the particle draw in front of objects closer to
   * the camera, while positive values will make it draw behind objects farther
   * away from the camera. Defaults to 0.
   * 
   * {@link ActionType.BillboardEx BillboardEx} has a
   * {@link BillboardExParams.depthOffset property} that works the
   * same way, but reversed. Since that property was discovered before this
   * field, this field was given the "negative" name.
   */
  negativeDepthOffset?: number
  /**
   * Controls how dark shaded parts of the particle are. Defaults to 0.
   */
  shadowDarkness?: number
  /**
   * Controls whether or not specular highlights should be visible. Defaults to
   * false.
   * 
   * See also:
   * - {@link lighting}
   * - {@link glossiness}
   * - {@link specularity}
   */
  specular?: boolean
  /**
   * Controls how sharp the specular highlights are. Defaults to 0.25.
   * 
   * See also:
   * - {@link lighting}
   * - {@link specular}
   * - {@link specularity}
   */
  glossiness?: number
  /**
   * Controls how the particles are lit. See {@link LightingMode} for more
   * information. Defaults to {@link LightingMode.Unlit}.
   */
  lighting?: LightingMode
  /**
   * Controls how bright the specular highlights are. Defaults to 0.5.
   * 
   * See also:
   * - {@link lighting}
   * - {@link specular}
   * - {@link glossiness}
   */
  specularity?: number
  unkScalarProp1_23?: number | Property
  unkScalarProp1_24?: number | Property
  unkScalarProp2_2?: number | Property
  unkVec4Prop2_3?: Vector4 | Property
  unkVec4Prop2_4?: Vector4 | Property
  unkVec4Prop2_5?: Vector4 | Property
  unkScalarProp2_6?: number | Property
}
/**
 * Particle with a texture that may be animated. This is the most common
 * particle type and it has a lot of useful fields and properties.
 */
class BillboardEx extends CommonAction6xxFields2Action {

  constructor({
    texture = 1,
    blendMode = BlendMode.Normal,
    offset = [0, 0, 0],
    width = 1,
    height = 1,
    color1 = [1, 1, 1, 1],
    color2 = [1, 1, 1, 1],
    color3 = [1, 1, 1, 1],
    alphaThreshold = 0,
    rotation = [0, 0, 0],
    rotationSpeed = [0, 0, 0],
    rotationSpeedMultiplier = [1, 1, 1],
    depthOffset = 0,
    frameIndex = 0,
    frameIndexOffset = 0,
    rgbMultiplier = 1,
    alphaMultiplier = 1,
    orientation = OrientationMode.Camera,
    normalMap = 0,
    randomWidthMultiplier = 1,
    randomHeightMultiplier = 1,
    uniformScale = true,
    columns = 1,
    totalFrames = 1,
    interpolateFrames = true,
    bloomColor = [1, 1, 1],
    bloomStrength = 0,
    minDistance = -1,
    maxDistance = -1,
    negativeDepthOffset = 0,
    shadowDarkness = 0,
    specular = false,
    glossiness = 0.25,
    lighting = LightingMode.Unlit,
    specularity = 0.5,
    unkScalarProp1_23 = 0,
    unkScalarProp1_24 = 0,
    unkScalarProp2_2 = 0,
    unkVec4Prop2_3 = [1, 1, 1, 1],
    unkVec4Prop2_4 = [1, 1, 1, 1],
    unkVec4Prop2_5 = [1, 1, 1, 1],
    unkScalarProp2_6 = 0,
  }: BillboardExParams = {}) {
    super(ActionType.BillboardEx, [
      /*  0 */ new IntField(orientation),
      /*  1 */ new IntField(normalMap),
      /*  2 */ new FloatField(randomWidthMultiplier),
      /*  3 */ new FloatField(randomHeightMultiplier),
      /*  4 */ new BoolField(uniformScale),
      /*  5 */ new IntField(0),
      /*  6 */ new IntField(columns),
      /*  7 */ new IntField(totalFrames),
      /*  8 */ new BoolField(interpolateFrames),
      /*  9 */ new IntField(0),
      /* 10 */ new IntField(0),
      /* 11 */ new FloatField(-1),
      /* 12 */ new IntField(1),
      /* 13 */ new IntField(0),
      /* 14 */ new IntField(0),
      /* 15 */ new IntField(1),
      /* 16 */ new IntField(1),
      /* 17 */ new IntField(0),
    ], [
      /*  0 */ new IntField(0),
      /*  1 */ new IntField(0),
      /*  2 */ new IntField(8),
      /*  3 */ new IntField(0),
      /*  4 */ new IntField(1),
      /*  5 */ new FloatField(bloomColor[0]),
      /*  6 */ new FloatField(bloomColor[1]),
      /*  7 */ new FloatField(bloomColor[2]),
      /*  8 */ new FloatField(bloomStrength),
      /*  9 */ new IntField(0),
      /* 10 */ new IntField(0),
      /* 11 */ new IntField(0),
      /* 12 */ new IntField(0),
      /* 13 */ new IntField(0),
      /* 14 */ new FloatField(-1),
      /* 15 */ new FloatField(-1),
      /* 16 */ new FloatField(-1),
      /* 17 */ new FloatField(-1),
      /* 18 */ new FloatField(minDistance),
      /* 19 */ new FloatField(maxDistance),
      /* 20 */ new IntField(0),
      /* 21 */ new IntField(0),
      /* 22 */ new IntField(0),
      /* 23 */ new IntField(0),
      /* 24 */ new IntField(0),
      /* 25 */ new FloatField(1),
      /* 26 */ new FloatField(negativeDepthOffset),
      /* 27 */ new IntField(1),
      /* 28 */ new IntField(0),
      /* 29 */ new FloatField(5),
      /* 30 */ new FloatField(shadowDarkness),
      /* 31 */ new IntField(0),
      /* 32 */ new IntField(1),
      /* 33 */ new BoolField(specular),
      /* 34 */ new FloatField(glossiness),
      /* 35 */ new IntField(lighting),
      /* 36 */ new IntField(-2),
      /* 37 */ new IntField(0),
      /* 38 */ new FloatField(specularity),
      /* 39 */ new IntField(1),
      /* 40 */ new IntField(0),
      /* 41 */ new IntField(0),
      /* 42 */ new IntField(0),
      /* 43 */ new IntField(0),
      /* 44 */ new IntField(0),
    ], [
      /*  0 */ scalarFromArg(texture),
      /*  1 */ scalarFromArg(blendMode),
      /*  2 */ scalarFromArg(offset[0]),
      /*  3 */ scalarFromArg(offset[1]),
      /*  4 */ scalarFromArg(offset[2]),
      /*  5 */ scalarFromArg(width),
      /*  6 */ scalarFromArg(height),
      /*  7 */ vectorFromArg(color1),
      /*  8 */ vectorFromArg(color2),
      /*  9 */ vectorFromArg(color3),
      /* 10 */ scalarFromArg(alphaThreshold),
      /* 11 */ scalarFromArg(rotation[0]),
      /* 12 */ scalarFromArg(rotation[1]),
      /* 13 */ scalarFromArg(rotation[2]),
      /* 14 */ scalarFromArg(rotationSpeed[0]),
      /* 15 */ scalarFromArg(rotationSpeedMultiplier[0]),
      /* 16 */ scalarFromArg(rotationSpeed[1]),
      /* 17 */ scalarFromArg(rotationSpeedMultiplier[1]),
      /* 18 */ scalarFromArg(rotationSpeed[2]),
      /* 19 */ scalarFromArg(rotationSpeedMultiplier[2]),
      /* 20 */ scalarFromArg(depthOffset),
      /* 21 */ scalarFromArg(frameIndex),
      /* 22 */ scalarFromArg(frameIndexOffset),
      /* 23 */ scalarFromArg(unkScalarProp1_23),
      /* 24 */ scalarFromArg(unkScalarProp1_24),
    ], [
      /*  0 */ scalarFromArg(rgbMultiplier),
      /*  1 */ scalarFromArg(alphaMultiplier),
      /*  2 */ scalarFromArg(unkScalarProp2_2),
      /*  3 */ vectorFromArg(unkVec4Prop2_3),
      /*  4 */ vectorFromArg(unkVec4Prop2_4),
      /*  5 */ vectorFromArg(unkVec4Prop2_5),
      /*  6 */ scalarFromArg(unkScalarProp2_6),
    ])
  }

  get texture() { return this.properties1[0] }
  set texture(value) { setPropertyInList(this.properties1, 0, value) }

  get blendMode() { return this.properties1[1].stops[1].value as BlendMode }
  set blendMode(value: Property | PropertyValue) { setPropertyInList(this.properties1, 1, value) }
  get blendModeProperty() { return this.properties1[1] }

  get offsetX() { return this.properties1[2] }
  set offsetX(value) { setPropertyInList(this.properties1, 2, value) }

  get offsetY() { return this.properties1[3] }
  set offsetY(value) { setPropertyInList(this.properties1, 3, value) }

  get offsetZ() { return this.properties1[4] }
  set offsetZ(value) { setPropertyInList(this.properties1, 4, value) }

  get offset() { return this.properties1.slice(2, 5) }
  set offset(value) {
    for (let i = 2; i >= 0; i--) {
      setPropertyInList(this.properties1, 2 + i, value[i])
    }
  }

  get width() { return this.properties1[5] }
  set width(value) { setPropertyInList(this.properties1, 5, value) }

  get height() { return this.properties1[6] }
  set height(value) { setPropertyInList(this.properties1, 6, value) }

  get color1() { return this.properties1[7] }
  set color1(value) { setPropertyInList(this.properties1, 7, value) }

  get color2() { return this.properties1[8] }
  set color2(value) { setPropertyInList(this.properties1, 8, value) }

  get color3() { return this.properties1[9] }
  set color3(value) { setPropertyInList(this.properties1, 9, value) }

  get alphaThreshold() { return this.properties1[10] }
  set alphaThreshold(value) { setPropertyInList(this.properties1, 10, value) }

  get rotationX() { return this.properties1[11] }
  set rotationX(value) { setPropertyInList(this.properties1, 11, value) }

  get rotationY() { return this.properties1[12] }
  set rotationY(value) { setPropertyInList(this.properties1, 12, value) }

  get rotationZ() { return this.properties1[13] }
  set rotationZ(value) { setPropertyInList(this.properties1, 13, value) }

  get rotation() { return this.properties1.slice(11, 14) }
  set rotation(value) {
    for (let i = 2; i >= 0; i--) {
      setPropertyInList(this.properties1, 11 + i, value[i])
    }
  }

  get rotationSpeedX() { return this.properties1[14] }
  set rotationSpeedX(value) { setPropertyInList(this.properties1, 14, value) }

  get rotationSpeedY() { return this.properties1[16] }
  set rotationSpeedY(value) { setPropertyInList(this.properties1, 16, value) }

  get rotationSpeedZ() { return this.properties1[18] }
  set rotationSpeedZ(value) { setPropertyInList(this.properties1, 18, value) }

  get rotationSpeed() { return [
    this.properties1[14],
    this.properties1[16],
    this.properties1[18],
  ] }
  set rotationSpeed(value) {
    for (let i = 2; i >= 0; i--) {
      setPropertyInList(this.properties1, 14 + i * 2, value[i])
    }
  }

  get rotationSpeedMultiplierX() { return this.properties1[15] }
  set rotationSpeedMultiplierX(value) { setPropertyInList(this.properties1, 15, value) }

  get rotationSpeedMultiplierY() { return this.properties1[17] }
  set rotationSpeedMultiplierY(value) { setPropertyInList(this.properties1, 17, value) }

  get rotationSpeedMultiplierZ() { return this.properties1[19] }
  set rotationSpeedMultiplierZ(value) { setPropertyInList(this.properties1, 19, value) }

  get rotationSpeedMultiplier() { return [
    this.properties1[15],
    this.properties1[17],
    this.properties1[19],
  ] }
  set rotationSpeedMultiplier(value) {
    for (let i = 2; i >= 0; i--) {
      setPropertyInList(this.properties1, 15 + i * 2, value[i])
    }
  }

  get depthOffset() { return this.properties1[20] }
  set depthOffset(value) { setPropertyInList(this.properties1, 20, value) }

  get frameIndex() { return this.properties1[21] }
  set frameIndex(value) { setPropertyInList(this.properties1, 21, value) }

  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value) { setPropertyInList(this.properties2, 0, value) }

  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value) { setPropertyInList(this.properties2, 1, value) }

  get orientation() { return this.fields1[0].value as OrientationMode }
  set orientation(value) { this.fields1[0].value = value }

  get normalMap() { return this.fields1[1].value as number }
  set normalMap(value) { this.fields1[1].value = value }

  get randomWidthMultiplier() { return this.fields1[2].value as number }
  set randomWidthMultiplier(value) { this.fields1[2].value = value }

  get randomHeightMultiplier() { return this.fields1[3].value as number }
  set randomHeightMultiplier(value) { this.fields1[3].value = value }

  get uniformScale() { return this.fields1[4].value as boolean }
  set uniformScale(value) { this.fields1[4].value = value }

  get columns() { return this.fields1[6].value as number }
  set columns(value) { this.fields1[6].value = value }

  get totalFrames() { return this.fields1[7].value as number }
  set totalFrames(value) { this.fields1[7].value = value }

  get interpolateFrames() { return this.fields1[8].value as number }
  set interpolateFrames(value) { this.fields1[8].value = value }

  /**
   * Negative values will make the particle draw in front of objects closer to
   * the camera, while positive values will make it draw behind objects farther
   * away from the camera.
   * 
   * {@link ActionType.BillboardEx BillboardEx} has a
   * {@link BillboardExParams.depthOffset property} that works the
   * same way, but reversed. Since that property was discovered before this
   * field, this field was given the "negative" name.
   */
  get negativeDepthOffset() { return this.fields2[26].value as number }
  set negativeDepthOffset(value) { this.fields2[26].value = value }

  /**
   * Controls how dark shaded parts of the particle are.
   */
  get shadowDarkness() { return this.fields2[30].value as number }
  set shadowDarkness(value) { this.fields2[30].value = value }

  /**
   * Controls whether or not specular highlights should be visible.
   * 
   * See also:
   * - {@link lighting}
   * - {@link glossiness}
   * - {@link specularity}
   */
  get specular() { return this.fields2[33].value as number }
  set specular(value) { this.fields2[33].value = value }

  /**
   * Controls how sharp the specular highlights are.
   * 
   * See also:
   * - {@link lighting}
   * - {@link specular}
   * - {@link specularity}
   */
  get glossiness() { return this.fields2[34].value as number }
  set glossiness(value) { this.fields2[34].value = value }

  /**
   * Controls how the particles are lit. See {@link LightingMode} for more
   * information.
   */
  get lighting() { return this.fields2[35].value as LightingMode }
  set lighting(value) { this.fields2[35].value = value }

  /**
   * Controls how bright the specular highlights are.
   * 
   * See also:
   * - {@link lighting}
   * - {@link specular}
   * - {@link glossiness}
   */
  get specularity() { return this.fields2[38].value as number }
  set specularity(value) { this.fields2[38].value = value }

}

export interface PointLightParams {
  /**
   * Controls the diffuse color of the light.
   * 
   * If {@link separateSpecular} is disabled, this also controls the specular
   * color of the light.
   * 
   * Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  diffuseColor?: Vector4 | Property
  /**
   * Controls the specular color of the light.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored and
   * {@link diffuseColor} controls both the diffuse as well as the specular
   * color.
   * 
   * Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  specularColor?: Vector4 | Property
  /**
   * The maximum distance that the light may travel from the source, and the
   * radius of the sphere in which other effects caused by the light source
   * (for example {@link fogDensity} and its related fields) may act. Defaults
   * to 10.
   */
  radius?: number | Property
  /**
   * A scalar multiplier for the {@link diffuseColor diffuse color}. Good for
   * easily adjusting the brightness of the light without changing the color.
   * 
   * If {@link separateSpecular} is disabled, this also affects the specular
   * color of the light.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  diffuseMultiplier?: number | Property
  /**
   * A scalar multiplier for the {@link specularColor specular color}.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  specularMultiplier?: number | Property
  /**
   * Controls if the light should have shadows or not.
   * 
   * Note: Objects also have a setting for casting shadows, and both must be
   * enabled for an object to cast shadows from this light source.
   * 
   * Defaults to false.
   */
  shadows?: boolean
  /**
   * When enabled, this allows other properties and fields of the action to
   * control the specular color independently of the diffuse color. When
   * disabled, the diffuse counterpart of the properties or fields will affect
   * both the diffuse and specular color. Defaults to false.
   * 
   * See also:
   * - {@link diffuseColor}
   * - {@link specularColor}
   * - {@link diffuseMultiplier}
   * - {@link specularMultiplier}
   */
  separateSpecular?: boolean
  /**
   * The number of seconds the light takes to fade to nothing after being
   * destroyed.
   * 
   * Due to how the field this represents works, the time will be rounded to
   * the nearest multiple of 1/30s. The field itself is an integer with 1/30s
   * as the units.
   * 
   * Defaults to 0.
   */
  fadeOutTime?: number
  /**
   * Controls how dark shadows from this light source are. At 0, the shadows
   * will be entirely invisible. Defaults to 1.
   */
  shadowDarkness?: number
  /**
   * Controls the density of some sort of fake fog in the volume hit by the
   * light. The fog does not affect the actual light produced by the source and
   * is not affected by shadows. Defaults to 0.
   * 
   * See also:
   * - {@link phaseFunction}
   * - {@link asymmetryParam}
   */
  fogDensity?: number
  /**
   * Controls whether or not {@link asymmetryParam} affects the fake fog from
   * {@link fogDensity}. Defaults to true.
   */
  phaseFunction?: boolean
  /**
   * Controls how the fake fog from {@link fogDensity} scatters the light. This
   * value is ignored if {@link phaseFunction} is disabled, and the fog will
   * scatter the light equally in all directions.
   * 
   * - At 0, the light is scattered equally in every direction.
   * - As the value approaches 1, the light is scattered more and more forward,
   * in the same direction as the light was already traveling. This means that
   * the fake fog will be less visible from the side or behind, and more
   * visible from in front of the light.
   * - At 1, the fog will not scatter the light at all, so it will be entirely
   * invisible.
   * - Values above 1 produce unnatural-looking effects where the light darkens
   * the fog instead.
   * 
   * Defaults to 0.75.
   */
  asymmetryParam?: number
  /**
   * Controls the falloff exponent of the light.
   * 
   * Note: This is possibly something else, but the behavior is pretty similar
   * to a falloff exponent in a few ways.
   * 
   * Defaults to 1.
   */
  falloffExponent?: number
}
/**
 * Point light source.
 */
class PointLight extends Action {

  constructor({
    diffuseColor = [1, 1, 1, 1],
    specularColor = diffuseColor instanceof Property ? Property.copy(diffuseColor) : diffuseColor.slice(),
    radius = 10,
    diffuseMultiplier = 1,
    specularMultiplier = 1,
    shadows = false,
    separateSpecular = false,
    fadeOutTime = 0,
    shadowDarkness = 1,
    fogDensity = 0,
    phaseFunction = true,
    asymmetryParam = 0.5,
    falloffExponent = 1,
  }: PointLightParams = {}) {
    super(ActionType.PointLight, [
      /*  0 */ new IntField(0),
      /*  1 */ new FloatField(0),
    ], [ // Fields 2
      /*  0 */ new IntField(0),
      /*  1 */ new BoolField(false),
      /*  2 */ new FloatField(0),
      /*  3 */ new FloatField(0),
      /*  4 */ new FloatField(0),
      /*  5 */ new FloatField(0),
      /*  6 */ new FloatField(0),
      /*  7 */ new FloatField(0),
      /*  8 */ new FloatField(0),
      /*  9 */ new FloatField(0),
      /* 10 */ new BoolField(shadows),
      /* 11 */ new BoolField(separateSpecular),
      /* 12 */ new IntField(Math.round(fadeOutTime * 30)),
      /* 13 */ new FloatField(shadowDarkness),
      /* 14 */ new BoolField(false),
      /* 15 */ new IntField(2),
      /* 16 */ new BoolField(false),
      /* 17 */ new FloatField(0.5),
      /* 18 */ new FloatField(0.5),
      /* 19 */ new FloatField(0.5),
      /* 20 */ new IntField(1),
      /* 21 */ new IntField(100),
      /* 22 */ new IntField(1),
      /* 23 */ new IntField(1),
      /* 24 */ new FloatField(fogDensity),
      /* 25 */ new FloatField(0),
      /* 26 */ new BoolField(phaseFunction),
      /* 27 */ new FloatField(asymmetryParam),
      /* 28 */ new FloatField(falloffExponent),
      /* 29 */ new IntField(1),
      /* 30 */ new FloatField(1),
      /* 31 */ new IntField(1),
      /* 32 */ new IntField(1),
    ], [ // Properties1
      /*  0 */ vectorFromArg(diffuseColor),
      /*  1 */ vectorFromArg(specularColor),
      /*  2 */ scalarFromArg(radius),
      /*  3 */ new ConstantProperty(0),
      /*  4 */ new ConstantProperty(0),
      /*  5 */ new ConstantProperty(0),
      /*  6 */ new ConstantProperty(0),
      /*  7 */ new ConstantProperty(10),
      /*  8 */ new ConstantProperty(10),
      /*  9 */ new ConstantProperty(10),
    ], [ // Properties2
      /*  0 */ new ConstantProperty(1),
      /*  1 */ new ConstantProperty(1),
      /*  2 */ new ConstantProperty(1),
      /*  3 */ scalarFromArg(diffuseMultiplier),
      /*  4 */ scalarFromArg(specularMultiplier),
    ])
  }

  /**
   * Controls the diffuse color of the light.
   * 
   * If {@link separateSpecular} is disabled, this also controls the specular
   * color of the light.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get diffuseColor() { return this.properties1[0] }
  set diffuseColor(value) { setPropertyInList(this.properties1, 0, value) }

  /**
   * Controls the specular color of the light.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored and
   * {@link diffuseColor} controls both the diffuse as well as the specular
   * color.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get specularColor() { return this.properties1[1] }
  set specularColor(value) { setPropertyInList(this.properties1, 1, value) }

  /**
   * The maximum distance that the light may travel from the source, and the
   * radius of the sphere in which other effects caused by the light source
   * (for example {@link fogDensity} and its related fields) may act.
   */
  get radius() { return this.properties1[2] }
  set radius(value) { setPropertyInList(this.properties1, 2, value) }

  /**
   * A scalar multiplier for the {@link diffuseColor diffuse color}. Good for
   * easily adjusting the brightness of the light without changing the color.
   * 
   * If {@link separateSpecular} is disabled, this also affects the specular
   * color of the light.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get diffuseMultiplier() { return this.properties2[3] }
  set diffuseMultiplier(value) { setPropertyInList(this.properties2, 3, value) }

  /**
   * A scalar multiplier for the {@link specularColor specular color}.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get specularMultiplier() { return this.properties1[4] }
  set specularMultiplier(value) { setPropertyInList(this.properties2, 4, value) }

  /**
   * Controls if the light should have shadows or not.
   * 
   * Note: Objects also have a setting for casting shadows, and both must be
   * enabled for an object to cast shadows from this light source.
   */
  get shadows() { return this.fields2[10].value as boolean }
  set shadows(value) { this.fields2[10].value = value }

  /**
   * When enabled, this allows other properties and fields of the action to
   * control the specular color independently of the diffuse color. When
   * disabled, the diffuse counterpart of the properties or fields will affect
   * both the diffuse and specular color.
   * 
   * See also:
   * - {@link diffuseColor}
   * - {@link specularColor}
   * - {@link diffuseMultiplier}
   * - {@link specularMultiplier}
   */
  get separateSpecular() { return this.fields2[11].value as boolean }
  set separateSpecular(value) { this.fields2[11].value = value }

  /**
   * The number of seconds the light takes to fade to nothing after being
   * destroyed.
   * 
   * Due to how the field this represents works, the time will be rounded to
   * the nearest multiple of 1/30s. The field itself is an integer with 1/30s
   * as the units.
   */
  get fadeOutTime() { return (this.fields2[12].value as number) / 30 }
  set fadeOutTime(value) { this.fields2[12].value = Math.round(value * 30) }

  /**
   * Controls how dark shadows from this light source are. At 0, the shadows
   * will be entirely invisible.
   */
  get shadowDarkness() { return this.fields2[13].value as number }
  set shadowDarkness(value) { this.fields2[13].value = value }

  /**
   * Controls the density of some sort of fake fog in the volume hit by the
   * light. The fog does not affect the actual light produced by the source and
   * is not affected by shadows.
   * 
   * See also:
   * - {@link phaseFunction}
   * - {@link asymmetryParam}
   */
  get fogDensity() { return this.fields2[24].value as number }
  set fogDensity(value) { this.fields2[24].value = value }

  /**
   * Controls whether or not {@link asymmetryParam} affects the fake fog from
   * {@link fogDensity}.
   */
  get phaseFunction() { return this.fields2[26].value as boolean }
  set phaseFunction(value) { this.fields2[26].value = value }

  /**
   * Controls how the fake fog from {@link fogDensity} scatters the light. This
   * value is ignored if {@link phaseFunction} is disabled, and the fog will
   * scatter the light equally in all directions.
   * 
   * - At 0, the light is scattered equally in every direction.
   * - As the value approaches 1, the light is scattered more and more forward,
   * in the same direction as the light was already traveling. This means that
   * the fake fog will be less visible from the side or behind, and more
   * visible from in front of the light.
   * - At 1, the fog will not scatter the light at all, so it will be entirely
   * invisible.
   * - Values above 1 produce unnatural-looking effects where the light darkens
   * the fog instead.
   */
  get asymmetryParam() { return this.fields2[27].value as number }
  set asymmetryParam(value) { this.fields2[27].value = value }

  /**
   * Controls the falloff exponent of the light.
   * 
   * Note: This is possibly something else, but the behavior is pretty similar
   * to a falloff exponent in a few ways.
   */
  get falloffExponent() { return this.fields2[28].value as number }
  set falloffExponent(value) { this.fields2[28].value = value }

}

/**
 * Controls how effective the wind is at pushing the node.
 */
class NodeWindSpeed extends Action {

  constructor(
    /**
     * The speed in the direction of the wind. Defaults to 0.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windSpeed: number | Property = 0,
    /**
     * A multiplier for
     * {@link windSpeed the speed in the direction of the wind}.
     * Defalts to 1.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windSpeedMult: number | Property = 1,
    /**
     * Controls whether the wind should have any effect at all or not. Defaults
     * to true.
     */
    enabled: boolean = true,
  ) {
    super(ActionType.NodeWindSpeed, [
      new BoolField(enabled),
    ], [], [
      scalarFromArg(windSpeed),
      scalarFromArg(windSpeedMult),
    ])
  }

  /**
   * The speed in the direction of the wind.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windSpeed(): Property { return this.properties1[0] }
  set windSpeed(value: number | Property) { setPropertyInList(this.properties1, 0, value) }

  /**
   * A multiplier for
   * {@link windSpeed the speed in the direction of the wind}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windSpeedMult(): Property { return this.properties1[1] }
  set windSpeedMult(value: number | Property) { setPropertyInList(this.properties1, 1, value) }

  /**
   * Controls whether the wind should have any effect at all or not.
   */
  get enabled() { return this.fields1[0].value as boolean }
  set enabled(value) { this.fields1[0].value = value }

  minify(): Action {
    if (this.enabled) {
      return this
    } else {
      return new Action
    }
  }

}

/**
 * Controls how effective the wind is at pushing the particles emitted from
 * the node.
 */
class ParticleWindSpeed extends Action {

  constructor(
    /**
     * The speed in the direction of the wind. Defaults to 0.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windSpeed: number | Property = 0,
    /**
     * A multiplier for
     * {@link windSpeed the speed in the direction of the wind}.
     * Defalts to 1.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windSpeedMult: number | Property = 1,
    /**
     * Controls whether the wind should have any effect at all or not. Defaults
     * to true.
     */
    enabled: boolean = true,
    /**
     * Unknown. Fields1, index 1. 0 and 1 seems to be valid values, while all
     * other values cause the wind to not affect the particles. Defaults to 0.
     */
    unkField1: number = 0
  ) {
    super(ActionType.ParticleWindSpeed, [
      new BoolField(enabled),
      new IntField(unkField1),
    ], [], [
      scalarFromArg(windSpeed),
      scalarFromArg(windSpeedMult),
    ])
  }

  /**
   * The speed in the direction of the wind.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windSpeed(): Property { return this.properties1[0] }
  set windSpeed(value: number | Property) { setPropertyInList(this.properties1, 0, value) }

  /**
   * A multiplier for
   * {@link windSpeed the speed in the direction of the wind}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windSpeedMult(): Property { return this.properties1[1] }
  set windSpeedMult(value: number | Property) { setPropertyInList(this.properties1, 1, value) }

  /**
   * Controls whether the wind should have any effect at all or not.
   */
  get enabled() { return this.fields1[0].value as boolean }
  set enabled(value) { this.fields1[0].value = value }

  minify(): Action {
    if (this.enabled) {
      return this
    } else {
      return new Action
    }
  }

}

/**
 * Controls how effective the wind is at accelerating the node.
 */
class NodeWindAcceleration extends Action {

  constructor(
    /**
     * The acceleration in the direction of the wind. Defaults to 0.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windAcceleration: number | Property = 0,
    /**
     * A multiplier for
     * {@link windAcceleration the acceleration in the direction of the wind}.
     * Defalts to 1.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windAccelerationMult: number | Property = 1,
    /**
     * Controls whether the wind should have any effect at all or not. Defaults
     * to true.
     */
    enabled: boolean = true,
  ) {
    super(ActionType.NodeWindAcceleration, [
      new BoolField(enabled),
    ], [], [
      scalarFromArg(windAcceleration),
      scalarFromArg(windAccelerationMult),
    ])
  }

  /**
   * The acceleration in the direction of the wind.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windAcceleration(): Property { return this.properties1[0] }
  set windAcceleration(value: number | Property) { setPropertyInList(this.properties1, 0, value) }

  /**
   * A multiplier for
   * {@link windAcceleration the acceleration in the direction of the wind}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windAccelerationMult(): Property { return this.properties1[1] }
  set windAccelerationMult(value: number | Property) { setPropertyInList(this.properties1, 1, value) }

  /**
   * Controls whether the wind should have any effect at all or not.
   */
  get enabled() { return this.fields1[0].value as boolean }
  set enabled(value) { this.fields1[0].value = value }

  minify(): Action {
    if (this.enabled) {
      return this
    } else {
      return new Action
    }
  }

}

/**
 * Controls how effective the wind is at accelerating the particles emitted
 * from the node.
 * 
 * Acceleration requires slot 10 to have an action that enables acceleration
 * of the particles.
 */
class ParticleWindAcceleration extends Action {

  constructor(
    /**
     * The acceleration in the direction of the wind. Defaults to 0.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windAcceleration: number | Property = 0,
    /**
     * A multiplier for
     * {@link windAcceleration the acceleration in the direction of the wind}.
     * Defalts to 1.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windAccelerationMult: number | Property = 1,
    /**
     * Controls whether the wind should have any effect at all or not. Defaults
     * to true.
     */
    enabled: boolean = true,
    /**
     * Unknown. Fields1, index 1. 0 and 1 seems to be valid values, while all
     * other values cause the wind to not affect the particles. Defaults to 0.
     */
    unkField1: number = 0
  ) {
    super(ActionType.ParticleWindAcceleration, [
      new BoolField(enabled),
      new IntField(unkField1),
    ], [], [
      scalarFromArg(windAcceleration),
      scalarFromArg(windAccelerationMult),
    ])
  }

  /**
   * The acceleration in the direction of the wind.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windAcceleration(): Property { return this.properties1[0] }
  set windAcceleration(value: number | Property) { setPropertyInList(this.properties1, 0, value) }

  /**
   * A multiplier for
   * {@link windAcceleration the acceleration in the direction of the wind}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windAccelerationMult(): Property { return this.properties1[1] }
  set windAccelerationMult(value: number | Property) { setPropertyInList(this.properties1, 1, value) }

  /**
   * Controls whether the wind should have any effect at all or not.
   */
  get enabled() { return this.fields1[0].value as boolean }
  set enabled(value) { this.fields1[0].value = value }

  minify(): Action {
    if (this.enabled) {
      return this
    } else {
      return new Action
    }
  }

}

export interface SpotLightParams {
  /**
   * Controls the diffuse color of the light.
   * 
   * If {@link separateSpecular} is disabled, this also controls the specular
   * color of the light.
   * 
   * Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  diffuseColor?: Vector4 | Property
  /**
   * Controls the specular color of the light.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored and
   * {@link diffuseColor} controls both the diffuse as well as the specular
   * color.
   * 
   * Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  specularColor?: Vector4 | Property
  /**
   * A scalar multiplier for the {@link diffuseColor diffuse color}. Good for
   * easily adjusting the brightness of the light without changing the color.
   * 
   * If {@link separateSpecular} is disabled, this also affects the specular
   * color of the light.
   * 
   * Defaults to 100.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  diffuseMultiplier?: number | Property
  /**
   * A scalar multiplier for the {@link specularColor specular color}.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored.
   * 
   * Defaults to 100.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  specularMultiplier?: number | Property
  /**
   * Controls where the light starts in the cone. It bascially "slices off" the
   * tip of the cone. If set to 0, it acts as if it is set to 0.5. Defaults to
   * 0.01.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  near?: number | Property
  /**
   * Controls how far away the base of the cone is from the light source.
   * Defaults to 50.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  far?: number | Property
  /**
   * The default value for {@link xRadius} and {@link yRadius}. Just a
   * convenient way to control both at the same time. This value is not used if
   * {@link xRadius} and {@link yRadius} are given values. Defaults to 50.
   */
  radius?: number | Property
  /**
   * The X radius for the elliptic base of the cone. Defaults to
   * {@link radius}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  xRadius?: number | Property
  /**
   * The Y radius for the elliptic base of the cone. Defaults to
   * {@link radius}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  yRadius?: number | Property
  /**
   * Controls if the light should have shadows or not.
   * 
   * Note: Objects also have a setting for casting shadows, and both must be
   * enabled for an object to cast shadows from this light source.
   * 
   * Defaults to false.
   */
  shadows?: boolean
  /**
   * When enabled, this allows other properties and fields of the action to
   * control the specular color independently of the diffuse color. When
   * disabled, the diffuse counterpart of the properties or fields will affect
   * both the diffuse and specular color. Defaults to false.
   * 
   * See also:
   * - {@link diffuseColor}
   * - {@link specularColor}
   * - {@link diffuseMultiplier}
   * - {@link specularMultiplier}
   */
  separateSpecular?: boolean
  /**
   * Controls how dark shadows from this light source are. At 0, the shadows
   * will be entirely invisible. Defaults to 1.
   */
  shadowDarkness?: number
  /**
   * The number of seconds the light takes to fade to nothing after being
   * destroyed.
   * 
   * Due to how the field this represents works, the time will be rounded to
   * the nearest multiple of 1/30s. The field itself is an integer with 1/30s
   * as the units.
   * 
   * Defaults to 0.
   */
  fadeOutTime?: number
  /**
   * Controls the density of some sort of fake fog in the volume hit by the
   * light. The fog does not affect the actual light produced by the source and
   * is not affected by shadows. Defaults to 0.
   * 
   * See also:
   * - {@link phaseFunction}
   * - {@link asymmetryParam}
   */
  fogDensity?: number
  /**
   * Controls whether or not {@link asymmetryParam} affects the fake fog from
   * {@link fogDensity}. Defaults to true.
   */
  phaseFunction?: boolean
  /**
   * Controls how the fake fog from {@link fogDensity} scatters the light. This
   * value is ignored if {@link phaseFunction} is disabled, and the fog will
   * scatter the light equally in all directions.
   * 
   * - At 0, the light is scattered equally in every direction.
   * - As the value approaches 1, the light is scattered more and more forward,
   * in the same direction as the light was already traveling. This means that
   * the fake fog will be less visible from the side or behind, and more
   * visible from in front of the light.
   * - At 1, the fog will not scatter the light at all, so it will be entirely
   * invisible.
   * - Values above 1 produce unnatural-looking effects where the light darkens
   * the fog instead.
   * 
   * Defaults to 0.75.
   */
  asymmetryParam?: number
  /**
   * Controls the falloff exponent of the light.
   * 
   * Note: This is possibly something else, but the behavior is pretty similar
   * to a falloff exponent in a few ways.
   * 
   * Defaults to 1.
   */
  falloffExponent?: number
  unkScalarProp8?: number | Property
  unkScalarProp9?: number | Property
  unkScalarProp10?: number | Property
}
/**
 * Light source with an elliptic cone shape, a spot light.
 * 
 * It points towards +Z.
 */
class SpotLight extends Action {

  constructor({
    diffuseColor = [1, 1, 1, 1],
    specularColor = [1, 1, 1, 1],
    diffuseMultiplier = 100,
    specularMultiplier = 100,
    near = 0.01,
    far = 50,
    radius = 50,
    xRadius = radius instanceof Property ? Property.copy(radius) : radius,
    yRadius = radius instanceof Property ? Property.copy(radius) : radius,
    shadows = false,
    separateSpecular = false,
    shadowDarkness = 1,
    fadeOutTime = 0,
    fogDensity = 0,
    phaseFunction = true,
    asymmetryParam = 0.75,
    falloffExponent = 1,
    unkScalarProp8 = 1,
    unkScalarProp9 = 1,
    unkScalarProp10 = 1,
  }: SpotLightParams = {}) {
    super(ActionType.SpotLight, [
      /*  0 */ new IntField(0),
      /*  1 */ new BoolField(false), // Animation toggle?
      /*  2 */ new FloatField(0),
      /*  3 */ new FloatField(0),
      /*  4 */ new FloatField(0), // X jitter
      /*  5 */ new FloatField(0), // Y jitter
      /*  6 */ new FloatField(0), // Z jitter
      /*  7 */ new FloatField(0), // Pulse period 1?
      /*  8 */ new FloatField(0), // Pulse period 2?
      /*  9 */ new FloatField(1), // Pulse brightness
      /* 10 */ new BoolField(shadows),
      /* 11 */ new BoolField(separateSpecular),
      /* 12 */ new FloatField(shadowDarkness),
      /* 13 */ new IntField(2),
      /* 14 */ new IntField(1),
      /* 15 */ new IntField(Math.round(fadeOutTime * 30)),
      /* 16 */ new IntField(100),
      /* 17 */ new IntField(0),
      /* 18 */ new FloatField(0),
      /* 19 */ new FloatField(fogDensity),
      /* 20 */ new FloatField(0),
      /* 21 */ new BoolField(phaseFunction),
      /* 22 */ new FloatField(asymmetryParam),
      /* 23 */ new FloatField(falloffExponent),
      /* 24 */ new IntField(1),
      /* 25 */ new FloatField(1),
    ], [], [
      /*  0 */ vectorFromArg(diffuseColor),
      /*  1 */ vectorFromArg(specularColor),
      /*  2 */ scalarFromArg(diffuseMultiplier),
      /*  3 */ scalarFromArg(specularMultiplier),
      /*  4 */ scalarFromArg(near),
      /*  5 */ scalarFromArg(far),
      /*  6 */ scalarFromArg(xRadius),
      /*  7 */ scalarFromArg(yRadius),
      /*  8 */ scalarFromArg(unkScalarProp8),
      /*  9 */ scalarFromArg(unkScalarProp9),
      /* 10 */ scalarFromArg(unkScalarProp10),
    ])
  }

  /**
   * Controls the diffuse color of the light.
   * 
   * If {@link separateSpecular} is disabled, this also controls the specular
   * color of the light.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get diffuseColor() { return this.properties1[0] }
  set diffuseColor(value) { setPropertyInList(this.properties1, 0, value) }

  /**
   * Controls the specular color of the light.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored and
   * {@link diffuseColor} controls both the diffuse as well as the specular
   * color.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get specularColor() { return this.properties1[1] }
  set specularColor(value) { setPropertyInList(this.properties1, 1, value) }

  /**
   * A scalar multiplier for the {@link diffuseColor diffuse color}. Good for
   * easily adjusting the brightness of the light without changing the color.
   * 
   * If {@link separateSpecular} is disabled, this also affects the specular
   * color of the light.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get diffuseMultiplier() { return this.properties1[2] }
  set diffuseMultiplier(value) { setPropertyInList(this.properties1, 2, value) }

  /**
   * A scalar multiplier for the {@link specularColor specular color}.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get specularMultiplier() { return this.properties1[3] }
  set specularMultiplier(value) { setPropertyInList(this.properties1, 3, value) }

  /**
   * Controls where the light starts in the cone. It bascially "slices off" the
   * tip of the cone. If set to 0, it acts as if it is set to 0.5.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get near() { return this.properties1[4] }
  set near(value) { setPropertyInList(this.properties1, 4, value) }

  /**
   * Controls how far away the base of the cone is from the light source.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get far() { return this.properties1[5] }
  set far(value) { setPropertyInList(this.properties1, 5, value) }

  /**
   * The X radius for the elliptic base of the cone.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get xRadius() { return this.properties1[6] }
  set xRadius(value) { setPropertyInList(this.properties1, 6, value) }

  /**
   * The Y radius for the elliptic base of the cone.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get yRadius() { return this.properties1[7] }
  set yRadius(value) { setPropertyInList(this.properties1, 7, value) }

  /**
   * Controls if the light should have shadows or not.
   * 
   * Note: Objects also have a setting for casting shadows, and both must be
   * enabled for an object to cast shadows from this light source.
   */
  get shadows() { return this.fields1[10].value as boolean }
  set shadows(value) { this.fields1[10].value = value }

  /**
   * When enabled, this allows other properties and fields of the action to
   * control the specular color independently of the diffuse color. When
   * disabled, the diffuse counterpart of the properties or fields will affect
   * both the diffuse and specular color.
   * 
   * See also:
   * - {@link diffuseColor}
   * - {@link specularColor}
   * - {@link diffuseMultiplier}
   * - {@link specularMultiplier}
   */
  get separateSpecular() { return this.fields1[11].value as boolean }
  set separateSpecular(value) { this.fields1[11].value = value }

  /**
   * Controls how dark shadows from this light source are. At 0, the shadows
   * will be entirely invisible.
   */
  get shadowDarkness() { return this.fields1[12].value as number }
  set shadowDarkness(value) { this.fields1[12].value = value }

  /**
   * The number of seconds the light takes to fade to nothing after being
   * destroyed.
   * 
   * Due to how the field this represents works, the time will be rounded to
   * the nearest multiple of 1/30s. The field itself is an integer with 1/30s
   * as the units.
   */
  get fadeOutTime() { return (this.fields1[15].value as number) / 30 }
  set fadeOutTime(value) { this.fields1[15].value = Math.round(value * 30) }

  /**
   * Controls the density of some sort of fake fog in the volume hit by the
   * light. The fog does not affect the actual light produced by the source and
   * is not affected by shadows.
   * 
   * See also:
   * - {@link phaseFunction}
   * - {@link asymmetryParam}
   */
  get fogDensity() { return this.fields1[19].value as number }
  set fogDensity(value) { this.fields1[19].value = value }

  /**
   * Controls whether or not {@link asymmetryParam} affects the fake fog from
   * {@link fogDensity}.
   */
  get phaseFunction() { return this.fields1[21].value as boolean }
  set phaseFunction(value) { this.fields1[21].value = value }

  /**
   * Controls how the fake fog from {@link fogDensity} scatters the light. This
   * value is ignored if {@link phaseFunction} is disabled, and the fog will
   * scatter the light equally in all directions.
   * 
   * - At 0, the light is scattered equally in every direction.
   * - As the value approaches 1, the light is scattered more and more forward,
   * in the same direction as the light was already traveling. This means that
   * the fake fog will be less visible from the side or behind, and more
   * visible from in front of the light.
   * - At 1, the fog will not scatter the light at all, so it will be entirely
   * invisible.
   * - Values above 1 produce unnatural-looking effects where the light darkens
   * the fog instead.
   */
  get asymmetryParam() { return this.fields1[22].value as number }
  set asymmetryParam(value) { this.fields1[22].value = value }

  /**
   * Controls the falloff exponent of the light.
   * 
   * Note: This is possibly something else, but the behavior is pretty similar
   * to a falloff exponent in a few ways.
   */
  get falloffExponent() { return this.fields1[23].value as number }
  set falloffExponent(value) { this.fields1[23].value = value }

}

const Actions = {
  [ActionType.NodeTranslation]: NodeTranslation, NodeTranslation,
  [ActionType.NodeSpin]: NodeSpin, NodeSpin,
  NodeTransform,
  [ActionType.StaticNodeTransform]: NodeTransform, StaticNodeTransform: NodeTransform,
  [ActionType.RandomNodeTransform]: NodeTransform, RandomNodeTransform: NodeTransform,
  [ActionType.NodeAttachToCamera]: NodeAttachToCamera, NodeAttachToCamera,
  ParticleMovement,
  [ActionType.ParticleAcceleration]: ParticleMovement, ParticleAcceleration: ParticleMovement,
  [ActionType.ParticleSpeed]: ParticleMovement, ParticleSpeed: ParticleMovement,
  [ActionType.ParticleSpeedRandomTurns]: ParticleMovement, ParticleSpeedRandomTurns: ParticleMovement,
  [ActionType.ParticleSpeedPartialFollow]: ParticleMovement, ParticleSpeedPartialFollow: ParticleMovement,
  [ActionType.PlaySound]: PlaySound, PlaySound,
  [ActionType.ParticleAccelerationRandomTurns]: ParticleMovement, ParticleAccelerationRandomTurns: ParticleMovement,
  [ActionType.ParticleAccelerationPartialFollow]: ParticleMovement, ParticleAccelerationPartialFollow: ParticleMovement,
  [ActionType.NodeLifetime]: NodeLifetime, NodeLifetime,
  [ActionType.ParticleLifetime]: ParticleLifetime, ParticleLifetime,
  [ActionType.ParticleMultiplier]: ParticleMultiplier, ParticleMultiplier,
  [ActionType.FXRReference]: FXRReference, FXRReference,
  [ActionType.StateEffectMap]: StateEffectMap, StateEffectMap,
  [ActionType.NodeWeights]: NodeWeights, NodeWeights,
  [ActionType.PeriodicEmitter]: PeriodicEmitter, PeriodicEmitter,
  [ActionType.EqualDistanceEmitter]: EqualDistanceEmitter, EqualDistanceEmitter,
  [ActionType.OneTimeEmitter]: OneTimeEmitter, OneTimeEmitter,
  [ActionType.PointEmitterShape]: PointEmitterShape, PointEmitterShape,
  [ActionType.DiskEmitterShape]: DiskEmitterShape, DiskEmitterShape,
  [ActionType.RectangleEmitterShape]: RectangleEmitterShape, RectangleEmitterShape,
  [ActionType.SphereEmitterShape]: SphereEmitterShape, SphereEmitterShape,
  [ActionType.BoxEmitterShape]: BoxEmitterShape, BoxEmitterShape,
  [ActionType.CylinderEmitterShape]: CylinderEmitterShape, CylinderEmitterShape,
  [ActionType.QuadLine]: QuadLine, QuadLine,
  [ActionType.BillboardEx]: BillboardEx, BillboardEx,
  [ActionType.PointLight]: PointLight, PointLight,
  [ActionType.NodeWindSpeed]: NodeWindSpeed, NodeWindSpeed,
  [ActionType.ParticleWindSpeed]: ParticleWindSpeed, ParticleWindSpeed,
  [ActionType.NodeWindAcceleration]: NodeWindAcceleration, NodeWindAcceleration,
  [ActionType.ParticleWindAcceleration]: ParticleWindAcceleration, ParticleWindAcceleration,
  [ActionType.SpotLight]: SpotLight, SpotLight,
}

class Field {

  type: FieldType
  value: number | boolean

  constructor(type: FieldType = FieldType.Integer, value: number | boolean = 0) {
    this.type = type
    this.value = value
  }

  static read(br: BinaryReader, context: any, index: number) {
    let ffxField: (Field | null) = null
    let isInt = false

    if (context instanceof Property) {
      if (context.function === PropertyFunction.CompCurve) {
        isInt = index > 0 && index <= context.valueType + 1
      } else if (context.function !== PropertyFunction.Constant) {
        isInt = !index
      }
    } else if (context instanceof StateCondition) {
      if (index === 0) {
        isInt = (context.leftOperandType & 3) > 0
      } else {
        isInt = (context.rightOperandType & 3) > 0
      }
    } else {
      const single = br.getFloat32(br.position)
      if (single >=  9.99999974737875E-05 && single <  1000000.0 ||
          single <= -9.99999974737875E-05 && single > -1000000.0
      ) {
        ffxField = new FloatField(single)
      } else {
        isInt = true
      }
    }

    if (ffxField === null) {
      if (isInt) {
        ffxField = new IntField(br.getInt32(br.position))
      } else {
        ffxField = new FloatField(br.getFloat32(br.position))
      }
    }

    br.position += 4
    return ffxField
  }

  static readAt(br: BinaryReader, offset: number, context: any, index: number) {
    br.stepIn(offset)
    const field = Field.read(br, context, index)
    br.stepOut()
    return field
  }

  static readMany(br: BinaryReader, count: number, context: any) {
    const ffxFieldList: Field[] = []
    for (let i = 0; i < count; ++i) {
      ffxFieldList.push(Field.read(br, context, i))
    }
    return ffxFieldList
  }

  static readManyAt(br: BinaryReader, offset: number, count: number, context: any) {
    br.stepIn(offset)
    const ffxFieldList = Field.readMany(br, count, context)
    br.stepOut()
    return ffxFieldList
  }

  static readWithTypes(br: BinaryReader, count: number, types: any[], context: any) {
    return arrayOf(count, i => {
      switch (types[i]) {
        case FieldType.Boolean:
          return new BoolField(!!br.readInt32())
        case FieldType.Integer:
          return new IntField(br.readInt32())
        case FieldType.Float:
          return new FloatField(br.readFloat32())
        default:
          return Field.read(br, context, 0)
      }
    })
  }

  /**
   * Creates a copy of a field.
   * @param field The field to copy.
   * @returns The copy.
   */
  static copy(field: Field) {
    return new Field(field.type, field.value)
  }

  write(bw: BinaryWriter) {
    switch (this.type) {
      case FieldType.Boolean:
        return bw.writeInt32(+this.value)
      case FieldType.Integer:
        return bw.writeInt32(this.value as number)
      case FieldType.Float:
        return bw.writeFloat32(this.value as number)
      default:
        throw new Error('Invalid field type: ' + this.type)
    }
  }

  static fromJSON({
    type,
    value
  }: {
    type: string
    value: number
  }) {
    return new Field(FieldType[type], value)
  }

  toJSON() {
    return {
      type: FieldType[this.type],
      value: this.value
    }
  }

}

class BoolField extends Field {

  declare value: boolean

  constructor(value: boolean) {
    super(FieldType.Boolean, value)
  }

}

class IntField extends Field {

  declare value: number

  constructor(value: number) {
    super(FieldType.Integer, value)
  }

}

class FloatField extends Field {

  declare value: number

  constructor(value: number) {
    super(FieldType.Float, value)
  }

}

export type Stop = {
  value: PropertyValue,
  x: number,
  y: number,
  z: number,
  w: number,
  r: number,
  g: number,
  b: number,
  a: number,
  [0]: number,
  [1]: number,
  [2]: number,
  [3]: number,
  position: number,
  length: number
}
export type StopList = {
  [index: number]: Stop,
  length: number,
  add: (position: number, value: PropertyValue) => void,
}

class Property {

  valueType: ValueType
  function: PropertyFunction
  loop: boolean
  modifiers: Modifier[]
  fields: Field[]

  #stops: StopList

  constructor(
    valueType: ValueType = ValueType.Scalar,
    func: PropertyFunction = PropertyFunction.Zero,
    loop: boolean = false,
    fields: Field[] = [],
    modifiers: Modifier[] = []
  ) {
    this.valueType = valueType
    this.function = func
    this.loop = loop
    this.fields = fields
    this.modifiers = modifiers
  }

  static read(br: BinaryReader, conditional: boolean) {
    const typeEnumA = br.readInt16()
    br.assertUint8(0)
    br.assertUint8(1)
    const type =     typeEnumA & 0b00000000_00000011
    const func =    (typeEnumA & 0b00000000_11110000) >>> 4
    const loop = !!((typeEnumA & 0b00010000_00000000) >>> 12)
    br.readInt32() // TypeEnumB
    const count = br.readInt32()
    br.assertInt32(0)
    const offset = br.readInt32()
    br.assertInt32(0)
    const modifiers = []
    if (!conditional) {
      const num3 = br.readInt32()
      br.assertInt32(0)
      const capacity = br.readInt32()
      br.assertInt32(0)
      br.stepIn(num3)
      for (let i = 0; i < capacity; ++i) {
        modifiers.push(Modifier.read(br))
      }
      br.stepOut()
    }
    const fields = Field.readManyAt(br, offset, count, this)
    return new Property(type, func, loop, fields, modifiers)
  }

  static copy(prop: Property) {
    return new Property(
      prop.valueType,
      prop.function,
      prop.loop,
      prop.fields.map(f => Field.copy(f)),
      prop.modifiers.map(m => Modifier.copy(m))
    )
  }

  write(bw: BinaryWriter, properties: Property[], conditional: boolean) {
    const count = properties.length
    const typeEnumA = this.valueType | this.function << 4 | +this.loop << 12
    const typeEnumB = this.valueType | this.function << 2 | +this.loop << 4
    bw.writeInt16(typeEnumA)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(typeEnumB)
    bw.writeInt32(this.fields.length)
    bw.writeInt32(0)
    bw.reserveInt32(`${conditional ? 'Section9' : 'Property'}FieldsOffset${count}`)
    bw.writeInt32(0)
    if (!conditional) {
      bw.reserveInt32(`PropertySection8sOffset${count}`)
      bw.writeInt32(0)
      bw.writeInt32(this.modifiers.length)
      bw.writeInt32(0)
    }
    properties.push(this)
  }

  writeModifiers(bw: BinaryWriter, index: number, modifiers: Modifier[]) {
    bw.fill(`PropertySection8sOffset${index}`, bw.position)
    for (const modifier of this.modifiers) {
      modifier.write(bw, modifiers)
    }
  }

  writeFields(bw: BinaryWriter, index: number, conditional: boolean): number {
    const offsetName = `${conditional ? 'Section9' : 'Property'}FieldsOffset${index}`
    if (this.fields.length === 0) {
      bw.fill(offsetName, 0)
    } else {
      bw.fill(offsetName, bw.position)
      for (const field of this.fields) {
        field.write(bw)
      }
    }
    return this.fields.length
  }

  get componentCount() {
    return this.valueType + 1
  }

  get #positionIndex() {
    switch (this.function) {
      case PropertyFunction.Constant:
      case PropertyFunction.Zero:
      case PropertyFunction.One:
      case PropertyFunction.CompCurve:
        return -1
      default:
        return 1 + 2 * this.componentCount
    }
  }

  get #valueIndex() {
    switch (this.function) {
      case PropertyFunction.Stepped:
      case PropertyFunction.Linear:
      case PropertyFunction.Curve1:
      case PropertyFunction.Curve2:
        return this.#positionIndex + (+this.fields[0].value)
      case PropertyFunction.Constant:
        return 0
      case PropertyFunction.Zero:
      case PropertyFunction.One:
      case PropertyFunction.CompCurve:
        return -1
    }
  }

  #valueIndexUnkAc6(comp: number) {
    const cc = this.componentCount
    const a = this.fields.slice(1, 1 + comp).reduce((a, e) => a + (+e.value), 0)
    return 1 + cc * 3 + a * 4
  }

  /**
   * Utility for dealing with stops without directly messing with property fields.
   */
  get stops(): StopList {
    //TODO: Deal with CompCurve function props
    const prop = this
    return this.#stops ??= new Proxy({} as StopList, {
      get(target, sk, receiver) {
        if (typeof sk !== 'symbol' && !isNaN(+sk)) {
          const n = +sk
          const comps = prop.componentCount
          return new Proxy({} as Stop, {
            get(target, ck, receiver) {
              switch (ck) {
                case 'value': {
                  const i = prop.#valueIndex
                  if (comps === 1) {
                    if (i === -1) {
                      return prop.function // Zero = 0, One = 1
                    } else {
                      return prop.fields[prop.#valueIndex + comps * n].value
                    }
                  } else {
                    if (i === -1) {
                      return arrayOf(comps, () => prop.function) // Zero = 0, One = 1
                    } else {
                      const start = prop.#valueIndex + comps * n
                      return prop.fields.slice(start, start + comps).map(f => f.value)
                    }
                  }
                }
                case 'x':
                case 'r':
                case '0': {
                  const i = prop.#valueIndex
                  if (i === -1) {
                    return prop.function // Zero = 0, One = 1
                  } else {
                    return prop.fields[prop.#valueIndex + comps * n].value
                  }
                }
                case 'y':
                case 'g':
                case '1': {
                  if (prop.valueType < 1) return 0
                  const i = prop.#valueIndex
                  if (i === -1) {
                    return prop.function // Zero = 0, One = 1
                  } else {
                    return prop.fields[prop.#valueIndex + comps * n + 1].value
                  }
                }
                case 'z':
                case 'b':
                case '2': {
                  if (prop.valueType < 2) return 0
                  const i = prop.#valueIndex
                  if (i === -1) {
                    return prop.function // Zero = 0, One = 1
                  } else {
                    return prop.fields[prop.#valueIndex + comps * n + 2].value
                  }
                }
                case 'w':
                case 'a':
                case '3': {
                  if (prop.valueType < 3) return 0
                  const i = prop.#valueIndex
                  if (i === -1) {
                    return prop.function // Zero = 0, One = 1
                  } else {
                    return prop.fields[prop.#valueIndex + comps * n + 3].value
                  }
                }
                case 'position':
                  const pos = prop.#positionIndex
                  if (pos === -1) return 0
                  return prop.fields[pos + n].value
                case 'length':
                  return comps
                case Symbol.iterator:
                  return function* () {
                    const comps = prop.componentCount
                    for (let i = 0; i < comps; i++) {
                      yield this[i]
                    }
                  }
                default:
                  return target[ck]
              }
            },
            set(target, ck, v, receiver) {
              switch (ck) {
                case 'value': {
                  const i = prop.#valueIndex
                  for (let j = 0; j < comps; j++) {
                    const field = prop.fields[i + comps * n + j]
                    field.type = FieldType.Float
                    field.value = typeof v === 'number' ? v : v[j]
                  }
                  return true
                }
                case 'x':
                case 'r':
                case '0': {
                  const i = prop.#valueIndex
                  if (i === -1) {
                    throw new Error('Unable to set field values in property without fields.')
                  } else {
                    const field = prop.fields[i + comps * n]
                    field.type = FieldType.Float
                    field.value = v
                  }
                  return true
                }
                case 'y':
                case 'g':
                case '1': {
                  if (prop.valueType < 1) throw new Error('Index out of bounds: 1')
                  const i = prop.#valueIndex
                  if (i === -1) {
                    throw new Error('Unable to set field values in property without fields.')
                  } else {
                    const field = prop.fields[i + comps * n + 1]
                    field.type = FieldType.Float
                    field.value = v
                  }
                  return true
                }
                case 'z':
                case 'b':
                case '2': {
                  if (prop.valueType < 2) throw new Error('Index out of bounds: 2')
                  const i = prop.#valueIndex
                  if (i === -1) {
                    throw new Error('Unable to set field values in property without fields.')
                  } else {
                    const field = prop.fields[i + comps * n + 2]
                    field.type = FieldType.Float
                    field.value = v
                  }
                  return true
                }
                case 'w':
                case 'a':
                case '3': {
                  if (prop.valueType < 3) throw new Error('Index out of bounds: 3')
                  const i = prop.#valueIndex
                  if (i === -1) {
                    throw new Error('Unable to set field values in property without fields.')
                  } else {
                    const field = prop.fields[i + comps * n + 3]
                    field.type = FieldType.Float
                    field.value = v
                  }
                  return true
                }
                case 'position':
                  const pos = prop.#positionIndex
                  if (pos === -1) throw new Error(`Unable to set the stop position in property with function: ${PropertyFunction[prop.function]}`)
                  prop.fields[pos + n].value = v
                  return true
                default:
                  return false
              }
            }
          })
        } else if (sk === 'length') {
          switch (prop.function) {
            case PropertyFunction.Zero:
            case PropertyFunction.One:
            case PropertyFunction.Constant:
              return 1
            default:
              return prop.fields[0].value
          }
        } else if (sk === 'add') {
          return function(position: number, value: PropertyValue) {
            const valuesArray = typeof value === 'number' ? [value] : value
            if (prop.function <= PropertyFunction.Constant) {
              prop.convertToFunction(PropertyFunction.Linear)
              const newStop = prop.#stops[2]
              newStop.position = position
              for (const [i, v] of valuesArray.entries()) {
                newStop[i] = v
              }
              return
            }
            const sc = +prop.fields[0].value
            const cc = prop.componentCount
            prop.fields.splice(1 + cc * (2 + sc) + sc, 0, ...valuesArray.map(v => new FloatField(v)))
            prop.fields.splice(1 + cc * 2 + sc, 0, new FloatField(position))
            prop.fields[0].value = sc + 1
          }
        } else if (sk === Symbol.iterator) {
          return function* () {
            const stops = prop.#stops.length
            for (let i = 0; i < stops; i++) {
              yield prop.#stops[i]
            }
          }
        }
      }
    })
  }

  convertToFunction(func: PropertyFunction) {
    if (this.function === func) return;
    switch (func) {
      case PropertyFunction.Zero:
      case PropertyFunction.One:
        this.fields.splice(0, this.fields.length)
        break
      case PropertyFunction.Constant:
        switch (this.function) {
          case PropertyFunction.Zero:
            this.fields.push(...arrayOf(this.componentCount, () => new FloatField(0)))
            break
          case PropertyFunction.One:
            this.fields.push(...arrayOf(this.componentCount, () => new FloatField(1)))
            break
          case PropertyFunction.Constant:
            break
          case PropertyFunction.Linear:
          case PropertyFunction.Stepped:
          case PropertyFunction.Curve1:
          case PropertyFunction.Curve2: {
            const i = this.#valueIndex
            const cc = this.componentCount
            this.fields.splice(0, this.fields.length, ...this.fields.slice(FieldType.Integer, i + cc))
            break
          }
          case PropertyFunction.CompCurve: {
            const cc = this.componentCount
            const comps = arrayOf(cc, i => this.fields[this.#valueIndexUnkAc6(i)])
            this.fields.splice(0, this.fields.length, ...comps)
            break
          }
        }
        break
      case PropertyFunction.Linear:
      case PropertyFunction.Stepped:
        switch (this.function) {
          case PropertyFunction.Zero: {
            const cc = this.componentCount
            this.fields.push(...arrayOf(3 + 4 * cc, () => new FloatField(0)))
            this.fields[0].type = FieldType.Integer
            this.fields[0].value = 2
            this.fields[2 + cc * 2].value = 1 // Stop 2 position
            break
          }
          case PropertyFunction.One: {
            const cc = this.componentCount
            this.fields.push(...arrayOf(3 + 4 * cc, () => new FloatField(1)))
            this.fields[0].type = FieldType.Integer
            this.fields[0].value = 2
            this.fields[1 + cc * 2].value = 0 // Stop 1 position
            break
          }
          case PropertyFunction.Constant: {
            const cc = this.componentCount
            this.fields.push(...this.fields.map(f => new FloatField(f.value as number)))
            this.fields.splice(0, 0,
              new IntField(2),
              ...arrayOf(cc * 2 + 2, () => new FloatField(0))
            )
            this.fields[2 + cc * 2].value = 1 // Stop 2 position
            break
          }
          case PropertyFunction.Linear:
          case PropertyFunction.Stepped:
            break
          case PropertyFunction.Curve1:
          case PropertyFunction.Curve2: {
            const i = this.#valueIndex
            const cc = this.componentCount
            this.fields.splice(i + cc * (+this.fields[0].value))
            break
          }
          case PropertyFunction.CompCurve: {
            //TODO:
            throw new Error(`Not implemented: UnkAc6 -> ${PropertyFunction[func]} property function conversion.`)
          }
        }
        break
      case PropertyFunction.Curve1:
      case PropertyFunction.Curve2:
      case PropertyFunction.CompCurve:
        //TODO:
        throw new Error(`Not implemented: ${PropertyFunction[this.function]} -> ${PropertyFunction[func]} property function conversion.`)
    }
    this.function = func
  }

  /**
   * Adds modifiers to the property.
   * @param mods The modifiers to add.
   * @returns this
   */
  withModifiers(...mods: Modifier[]) {
    this.modifiers.push(...mods)
    return this
  }

  static fromJSON({
    type,
    function: func,
    loop = false,
    fields = [],
    modifiers = []
  }: {
    type: string
    function: string
    loop?: boolean
    fields?: []
    modifiers?: []
  }) {
    return new Property(
      ValueType[type],
      PropertyFunction[func],
      loop,
      fields.map(field => Field.fromJSON(field)),
      modifiers.map(mod => Modifier.fromJSON(mod))
    )
  }

  toJSON() {
    const o: {
      type: string
      function: string
      loop?: boolean
      fields?: any[]
      modifiers?: any[]
    } = {
      type: ValueType[this.valueType],
      function: PropertyFunction[this.function],
    }
    if (this.function > PropertyFunction.Constant) o.loop = this.loop
    if (this.fields.length > 0) o.fields = this.fields.map(field => field.toJSON())
    if (this.modifiers.length > 0) o.modifiers = this.modifiers.map(mod => mod.toJSON())
    return o
  }

  minify() {
    if (this.function === PropertyFunction.Constant) {
      if (this.fields.every(f => f.value === 0)) {
        // Constant with only 0 fields, might as well be a ZeroProperty
        return new ZeroProperty(this.valueType, this.modifiers)
      }
      if (this.fields.every(f => f.value === 1)) {
        // Constant with only 1 fields, might as well be a OneProperty
        return new OneProperty(this.valueType, this.modifiers)
      }
    }
    return this
  }

}

class ZeroProperty extends Property {
  constructor(type: ValueType = ValueType.Scalar, modifiers: Modifier[] = []) {
    super(type, PropertyFunction.Zero, false, [], modifiers)
  }
}

class OneProperty extends Property {
  constructor(type: ValueType = ValueType.Scalar, modifiers: Modifier[] = []) {
    super(type, PropertyFunction.One, false, [], modifiers)
  }
}

class ConstantProperty extends Property {
  constructor(...args: [value: number] | Vector) {
    if (args.length < 1 || args.length > 4) {
      throw new Error(`Invalid number of arguments for ConstantProperty: ${args.length}`)
    }
    super(args.length - 1, PropertyFunction.Constant, false, args.map(v => new FloatField(v)))
  }
}

class SteppedProperty extends Property {

  constructor(loop: boolean, stops: { position: number, value: PropertyValue}[]) {
    if (stops.length === 0) {
      throw new Error ('Properties with a stepped function must have at least 2 stops.')
    }
    const comps = Array.isArray(stops[0].value) ? stops[0].value.length : 1
    super(comps - 1, PropertyFunction.Stepped, loop, [
      new IntField(stops.length),
      ...arrayOf(comps * 2, () => new FloatField(0)),
      ...stops.map(s => new FloatField(s.position)),
      ...stops.flatMap(s => comps === 1 ?
        new FloatField(s.value as number)
      :
        (s.value as number[]).map(v => new FloatField(v))
      ),
    ])
  }

}

class LinearProperty extends Property {

  constructor(loop: boolean, stops: { position: number, value: PropertyValue}[]) {
    if (stops.length === 0) {
      throw new Error ('Properties with a linear function must have at least 2 stops.')
    }
    const comps = Array.isArray(stops[0].value) ? stops[0].value.length : 1
    super(comps - 1, PropertyFunction.Linear, loop, [
      new IntField(stops.length),
      ...arrayOf(comps * 2, () => new FloatField(0)),
      ...stops.map(s => new FloatField(s.position)),
      ...stops.flatMap(s => comps === 1 ?
        new FloatField(s.value as number)
      :
        (s.value as number[]).map(v => new FloatField(v))
      ),
    ])
  }

}

/**
 * A {@link LinearProperty linear property} with only two stops. A bit
 * limited, but very easy to create.
 */
class BasicLinearProperty extends LinearProperty {

  constructor(
    loop: boolean,
    endPosition: number,
    startValue: PropertyValue,
    endValue: PropertyValue
  ) {
    super(loop, [
      { position: 0, value: startValue },
      { position: endPosition, value: endValue },
    ])
  }

}

class Curve2Property extends Property {

  constructor(loop: boolean, stops: { position: number, value: PropertyValue, inSlope: number, outSlope: number}[], unk1: number, unk2: number) {
    if (stops.length === 0) {
      throw new Error ('Properties with a curve function must have at least 2 stops.')
    }
    const comps = Array.isArray(stops[0].value) ? stops[0].value.length : 1
    super(comps - 1, PropertyFunction.Curve2, loop, [
      new IntField(stops.length),
      ...arrayOf(comps * 2, () => new FloatField(0)),
      ...stops.map(s => new FloatField(s.position)),
      ...stops.flatMap(s => comps === 1 ?
        new FloatField(s.value as number)
      :
        (s.value as number[]).map(v => new FloatField(v))
      ),
      ...stops.slice(0, -1).flatMap(s => arrayOf(comps, i => new FloatField(Array.isArray(s.outSlope) ? s.outSlope[i] : s.outSlope))),
      ...arrayOf(comps, i => new FloatField(Array.isArray(unk1) ? unk1[i] : unk1)),
      ...stops.slice(1).flatMap(s => arrayOf(comps, i => new FloatField(Array.isArray(s.inSlope) ? s.inSlope[i] : s.inSlope))),
      ...arrayOf(comps, i => new FloatField(Array.isArray(unk2) ? unk2[i] : unk2)),
    ])
  }

}

/**
 * A preset rainbow color animation with a configurable duration.
 */
class RainbowProperty extends LinearProperty {

  /**
   * @param duration How long it takes to go around the entire hue circle in
   * seconds. Defaults to 4 seconds.
   * @param loop Controls whether the animation should loop or not. Defaults to
   * true.
   */
  constructor(duration: number = 4, loop: boolean = true) {
    const unit = duration / 6
    super(loop, [
      { position: 0,        value: [1, 0, 0, 1] },
      { position: unit,     value: [1, 0, 1, 1] },
      { position: unit * 2, value: [0, 0, 1, 1] },
      { position: unit * 3, value: [0, 1, 1, 1] },
      { position: unit * 4, value: [0, 1, 0, 1] },
      { position: unit * 5, value: [1, 1, 0, 1] },
      { position: unit * 6, value: [1, 0, 0, 1] },
    ])
  }

}

class Modifier {

  static #knownTypeEnumAs = new Set([
    53328,
    53376,
    57440,
    57456,
    61520
  ])

  static #typeEnumAValues = {
    0: 53328,
    1: 53376,
    2: 57440,
    3: 57456,
    4: 61520,
  }

  typeEnumA: number
  typeEnumB: number
  fields: Field[]
  properties: Property[]

  constructor(
    typeEnumA: number,
    typeEnumB: number,
    fields: Field[] = [],
    properties: Property[] = []
  ) {
    this.typeEnumA = typeEnumA
    this.typeEnumB = typeEnumB
    this.fields = fields
    this.properties = properties
  }

  static read(br: BinaryReader) {
    const typeEnumA = br.readUint16()
    // if (!Modifier.#knownTypeEnumAs.has(typeEnumA & 0b11111111_11111100)) {
    //   throw new Error('Unknown property modifier type enum A: ' + typeEnumA)
    // }
    br.assertUint8(0)
    br.assertUint8(1)
    const typeEnumB = br.readUint32()
    // if ((typeEnumB & 0xffffffe0) !== 0) {
    //   throw new Error('Unknown property modifier type enum B: ' + typeEnumB)
    // }
    // This is apparently wrong in some cases. Needs to be looked into more.
    // const modifierType = (typeEnumB & 0b11100) >>> 2
    // const valueType = typeEnumB & 0b11
    const fieldCount = br.readInt32()
    const propertyCount = br.readInt32()
    const fieldOffset = br.readInt32()
    br.assertInt32(0)
    const propertyOffset = br.readInt32()
    br.assertInt32(0)
    br.stepIn(propertyOffset)
    const properties = []
    for (let i = 0; i < propertyCount; ++i) {
      properties.push(Property.read(br, true))
    }
    br.stepOut()
    const fields = Field.readManyAt(br, fieldOffset, fieldCount, this)
    return new Modifier(typeEnumA, typeEnumB, fields, properties)
  }

  static copy(mod: Modifier) {
    return new Modifier(
      mod.typeEnumA,
      mod.typeEnumB,
      mod.fields.map(f => Field.copy(f)),
      mod.properties.map(p => Property.copy(p))
    )
  }

  write(bw: BinaryWriter, modifiers: Modifier[]) {
    const count = modifiers.length
    bw.writeInt16(this.typeEnumA)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(this.typeEnumB)
    bw.writeInt32(this.fields.length)
    bw.writeInt32(this.properties.length)
    bw.reserveInt32(`Section8FieldsOffset${count}`)
    bw.writeInt32(0)
    bw.reserveInt32(`Section8Section9sOffset${count}`)
    bw.writeInt32(0)
    modifiers.push(this)
  }

  writeProperties(bw: BinaryWriter, index: number, properties: Property[]) {
    bw.fill(`Section8Section9sOffset${index}`, bw.position)
    for (const property of this.properties) {
      property.write(bw, properties, true)
    }
  }

  writeFields(bw: BinaryWriter, index: number): number {
    bw.fill(`Section8FieldsOffset${index}`, bw.position)
    for (const field of this.fields) {
      field.write(bw)
    }
    return this.fields.length
  }

  get type(): ModifierType {
    //TODO: This does not always work correctly. For example, in AC6, some
    // vanilla FXRs have 53376 modifiers with typeEnumB set to 0 instead of 4.
    return (this.typeEnumB & 0b11100) >>> 2
  }

  set type(value) {
    const valueType = this.valueType
    this.typeEnumA = Modifier.#typeEnumAValues[value] | valueType
    //TODO: This does not always work correctly. For example, in AC6, some
    // vanilla FXRs have 53376 modifiers with typeEnumB set to 0 instead of 4.
    this.typeEnumB = (value << 2) | valueType
  }

  /**
   * Sets the modifier type and returns the modifier.
   * @param type The new type for the modifier.
   */
  withType(type: ModifierType) {
    this.type = type
    return this
  }

  get valueType(): ValueType {
    return this.typeEnumA & 0b11
  }

  set valueType(value) {
    this.typeEnumA = (this.typeEnumA & 0xfffc) | value
    this.typeEnumB = (this.typeEnumB & 0xfffffffc) | value
  }

  /**
   * Sets the value type and returns the modifier.
   * @param type The new value type for the modifier.
   */
  withValueType(type: ValueType) {
    this.valueType = type
    return this
  }

  static fromJSON({
    typeEnumA,
    typeEnumB,
    fields,
    properties = [],
  }: {
    typeEnumA: number
    typeEnumB: number
    fields: []
    properties?: []
  }) {
    return new Modifier(
      typeEnumA,
      typeEnumB,
      fields.map(field => Field.fromJSON(field)),
      properties.map(prop => Property.fromJSON(prop))
    )
  }

  toJSON() {
    const o: {
      typeEnumA: number
      typeEnumB: number
      fields: any[]
      properties?: any[]
    } = {
      typeEnumA: this.typeEnumA,
      typeEnumB: this.typeEnumB,
      fields: this.fields.map(field => field.toJSON()),
    }
    if (this.properties.length > 0) o.properties = this.properties.map(prop => prop.toJSON())
    return o
  }

}

/**
 * A property modifier that changes the property value depending on an
 * {@link ExternalValue external value}.
 * 
 * The property value wil be multiplied by the values in this modifier.
 */
class ExternalValueModifier extends Modifier {

  /**
   * @param extVal The ID of the external value to use.
   * @param loop Controls if the modifier property should loop or not.
   * @param stops An array of objects with `position` and `value` properties
   * representing the external value and the modifier value it maps to. For
   * example, the value of {@link ExternalValue.DisplayBlood} is -1 when the
   * "Display Blood" option is off, so the `position` for the modifier value
   * should be -1 to change the property based on that.
   */
  constructor(
    extVal: ExternalValue,
    loop: boolean,
    stops: { position: number, value: PropertyValue }[],
  ) {
    const valueType = typeof stops[0].value === 'number' ? 0 : stops[0].value.length - 1
    super(57440 | valueType, 8 | valueType, [
      new IntField(extVal)
    ], [
      new LinearProperty(loop, stops)
    ])
  }

  get externalValue() { return this.fields[0].value as number }
  set externalValue(value) { this.fields[0].value = value }

  get stops() { return this.properties[0].stops }

}

/**
 * A property modifier that changes the property value depending on the
 * "Display Blood" option.
 * 
 * The property value wil be multiplied by the values in this modifier.
 */
class BloodVisibilityModifier extends ExternalValueModifier {

  /**
   * @param onValue The value when "Display Blood" is set to "On".
   * @param mildValue The value when "Display Blood" is set to "Mild".
   * @param offValue The value when "Display Blood" is set to "Off".
   */
  constructor(
    onValue: PropertyValue,
    mildValue: PropertyValue,
    offValue: PropertyValue,
  ) {
    super(ExternalValue.DisplayBlood, false, [
      { position: -1,
        value: offValue
      },
      { position: 0,
        value: onValue
      },
      { position: 1,
        value: mildValue
      }
    ])
  }

  get offValue() { return this.properties[0].stops[0].value }
  set offValue(value) { this.properties[0].stops[0].value = value }

  get onValue() { return this.properties[0].stops[1].value }
  set onValue(value) { this.properties[0].stops[1].value = value }

  get mildValue() { return this.properties[0].stops[2].value }
  set mildValue(value) { this.properties[0].stops[2].value = value }

}

/**
 * A property modifier that changes the property's value based on the weather.
 * 
 * Only functional in Elden Ring.
 */
class PrecipitationModifier extends ExternalValueModifier {

  /**
   * @param clear The value when it's not raining or snowing.
   * @param precip The value when it's raining or snowing.
   */
  constructor(clear: PropertyValue, precip: PropertyValue) {
    super(ExternalValue.Precipitation, false, [
      { position: 0, value: clear },
      { position: 1, value: precip },
    ])
  }

}

/**
 * A property modifer that changes the property value by a random amount in a
 * given range.
 */
class RandomizerModifier extends Modifier {

  constructor(minValue: PropertyValue, maxValue: PropertyValue, seed: PropertyValue = randomInt32()) {
    if (Array.isArray(minValue)) {
      if (!Array.isArray(maxValue) || maxValue.length !== minValue.length) {
        throw new Error(`Incompatible min and max values for randomizer modifier: Min: ${minValue.toString()}, Max: ${maxValue.toString()}`)
      }
      if (minValue.length < 1 || minValue.length > 4) {
        throw new Error(`Invalid number of vector components: ${minValue.length}`)
      }
      const seedArray = Array.isArray(seed) ? seed : [seed]
      const valueType = minValue.length - 1
      super(53376 | valueType, 4 | valueType, [
        ...arrayOf(minValue.length, i => new IntField(seedArray[i % seedArray.length])),
        ...minValue.map(e => new FloatField(e)),
        ...maxValue.map(e => new FloatField(e)),
      ])
    } else {
      if (Array.isArray(maxValue)) {
        throw new Error(`Incompatible min and max values for randomizer modifier: Min: ${minValue}, Max: ${maxValue.toString()}`)
      }
      if (Array.isArray(seed)) {
        throw new Error('Random scalar modifiers cannot use vector seeds.')
      }
      super(53376, 4, [
        new IntField(seed),
        new FloatField(minValue),
        new FloatField(maxValue),
      ])
    }
  }

}

/**
 * A property with random values in a given range.
 * 
 * This is technically just a {@link ZeroProperty} with a
 * {@link RandomizerModifier}.
 */
class RandomProperty extends ZeroProperty {

  constructor(minValue: PropertyValue, maxValue: PropertyValue, seed: PropertyValue = randomInt32()) {
    super(Array.isArray(minValue) ? minValue.length - 1 : ValueType.Scalar, [
      new RandomizerModifier(minValue, maxValue, seed)
    ])
  }

}

class Section10 {

  fields: Field[]

  constructor(fields: Field[]) {
    this.fields = fields
  }

  static read(br: BinaryReader) {
    const offset = br.readInt32()
    br.assertInt32(0)
    const count = br.readInt32()
    br.assertInt32(0)
    return new Section10(Field.readManyAt(br, offset, count, this))
  }

  write(bw: BinaryWriter, section10s: Section10[]) {
    const count = section10s.length
    bw.reserveInt32(`Section10FieldsOffset${count}`)
    bw.writeInt32(0)
    bw.writeInt32(this.fields.length)
    bw.writeInt32(0)
    section10s.push(this)
  }

  writeFields(bw: BinaryWriter, index: number): number {
    bw.fill(`Section10FieldsOffset${index}`, bw.position)
    for (const field of this.fields) {
      field.write(bw)
    }
    return this.fields.length
  }

  static fromJSON(fields: []) {
    return new Section10(fields.map(field => Field.fromJSON(field)))
  }

  toJSON() {
    return this.fields.map(field => field.toJSON())
  }

}

export {
  FXRVersion,
  NodeType,
  EffectType,
  ActionType,
  ValueType,
  PropertyFunction,
  ModifierType,
  FieldType,
  BlendMode,
  ExternalValue,
  Operator,
  OperandType,
  AttachMode,
  PropertyArgument,
  OrientationMode,
  LightingMode,

  EffectActionSlots,
  Actions,

  FXR,

  State,
  StateCondition,

  Node,
  RootNode,
  ProxyNode,
  LevelOfDetailNode,
  BasicNode,

  Effect,
  LevelOfDetailEffect,
  BasicEffect,
  RandomizerEffect,

  Action,
  NodeTranslation,
  NodeSpin,
  NodeTransform,
  NodeAttachToCamera,
  PlaySound,
  ParticleMovement,
  NodeLifetime,
  ParticleLifetime,
  ParticleMultiplier,
  FXRReference,
  LevelOfDetailThresholds,
  StateEffectMap,
  NodeWeights,
  PeriodicEmitter,
  EqualDistanceEmitter,
  OneTimeEmitter,
  PointEmitterShape,
  DiskEmitterShape,
  RectangleEmitterShape,
  SphereEmitterShape,
  BoxEmitterShape,
  CylinderEmitterShape,
  CommonAction6xxFields2Action,
  QuadLine,
  BillboardEx,
  PointLight,
  NodeWindSpeed,
  ParticleWindSpeed,
  NodeWindAcceleration,
  ParticleWindAcceleration,
  SpotLight,

  Field,
  BoolField,
  IntField,
  FloatField,

  Property,
  ZeroProperty,
  OneProperty,
  ConstantProperty,
  SteppedProperty,
  LinearProperty,
  BasicLinearProperty,
  Curve2Property,
  RainbowProperty,
  RandomProperty,

  Modifier,
  ExternalValueModifier,
  BloodVisibilityModifier,
  PrecipitationModifier,
  RandomizerModifier,

  Section10
}
