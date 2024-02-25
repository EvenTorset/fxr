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
   * A basic node that can have transforms and child nodes, and emit particles.
   * 
   * This node type has a specialized subclass: {@link BasicNode}
   */
  Basic = 2200,
  /**
   * A node that overrides the emitter of its child nodes with its own,
   * allowing a single emitter to emit multiple types of particles.
   * 
   * This node type has a specialized subclass: {@link SharedEmitterNode}
   */
  SharedEmitter = 2202,
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
   * Effect used in {@link NodeType.Basic basic nodes} to apply transforms and
   * emit particles of many different types.
   * 
   * This effect type has a specialized subclass: {@link BasicEffect}
   */
  Basic = 1004,
  /**
   * Effect used in {@link NodeType.SharedEmitter shared emitter nodes} to
   * override emitters of child nodes and control which of the child nodes to use
   * the particles of.
   * 
   * This effect type has a specialized subclass: {@link SharedEmitterEffect}
   */
  SharedEmitter = 1005,
}

enum ActionType {
  /**
   * This action does nothing. It fits into most action slots and acts as a way
   * to disable the effects of the other actions that go in those slots.
   */
  None = 0,
  /**
   * Controls the movement of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
   */
  NodeAcceleration = 1,
  /**
   * Translates the node with a property, meaning the offset can be animated.
   * 
   * This action type has a specialized subclass: {@link NodeTranslation}
   */
  NodeTranslation = 15,
  /**
   * Controls the rotation speed of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
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
  /**
   * Controls the movement of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
   */
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
  /**
   * Controls the movement of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
   */
  NodeAccelerationPartialFollow = 106,
  /**
   * Controls the movement of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
   */
  NodeAccelerationSpin = 113,
  /**
   * Controls the movement of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
   */
  NodeSpeed = 120,
  /**
   * Controls the movement of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
   */
  NodeSpeedRandomTurns = 121,
  /**
   * Controls the movement of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
   */
  NodeSpeedPartialFollow = 122,
  /**
   * Controls the movement of the node.
   * 
   * This action type has a specialized subclass: {@link NodeMovement}
   */
  NodeSpeedSpin = 123,
  /**
   * Controls various things about the node, like its duration, and how
   * it is attached to the parent node.
   * 
   * This action type has a specialized subclass: {@link NodeAttributes}
   */
  NodeAttributes = 128,
  /**
   * Controls various things about the particles emitted by the effect, like
   * their duration, and how they are attached to the parent node.
   * 
   * This action type has a specialized subclass: {@link ParticleAttributes}
   */
  ParticleAttributes = 129,
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
  /**
   * Used in {@link EffectType.SharedEmitter} to emit all particles from child
   * nodes every time the shared emitter emits something.
   * 
   * This action type has a specialized subclass: {@link EmitAllParticles}
   */
  EmitAllParticles = 200,
  /**
   * Used in {@link EffectType.SharedEmitter} to emit a particle from a random
   * child node every time the shared emitter emits something.
   * 
   * This action type has a specialized subclass: {@link EmitRandomParticles}
   */
  EmitRandomParticles = 201,
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
  /**
   * Particle with multiple texture that can scroll.
   * 
   * This action type has a specialized subclass:
   * {@link MultiTextureBillboardEx}
   */
  MultiTextureBillboardEx = 604,
  /**
   * Particle with a 3D model.
   * 
   * This action type has a specialized subclass: {@link Model}
   */
  Model = 605,
  /**
   * Creates a trail behind moving effects.
   * 
   * This action type has a specialized subclass: {@link Tracer}
   */
  Tracer = 606,
  /**
   * A particle that distorts anything seen through it.
   * 
   * Note: This particle is not visible if the "Effects" setting is set to "Low".
   * 
   * This action type has a specialized subclass: {@link Distortion}
   */
  Distortion = 607,
  /**
   * A particle that applies a radial blur to anything seen through it.
   * 
   * Note: This particle is not visible if the "Effects" setting is set to "Low".
   * 
   * This action type has a specialized subclass: {@link RadialBlur}
   */
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

export type ValuePropertyFunction = 
  PropertyFunction.Zero |
  PropertyFunction.One |
  PropertyFunction.Constant

export type KeyframePropertyFunction =
  PropertyFunction.Stepped |
  PropertyFunction.Linear |
  PropertyFunction.Curve1 |
  PropertyFunction.Curve2

export type ComponentKeyframePropertyFunction = PropertyFunction.CompCurve

export type ValueTypeMap = {
  [ValueType.Scalar]: number
  [ValueType.Vector2]: Vector2
  [ValueType.Vector3]: Vector3
  [ValueType.Vector4]: Vector4
}

export interface IKeyframe<T extends ValueType> {
  position: number
  value: ValueTypeMap[T]
  unkTangent1?: ValueTypeMap[T]
  unkTangent2?: ValueTypeMap[T]
}

export interface IProperty<T extends ValueType, F extends PropertyFunction> {
  valueType: T
  function: F
  componentCount: number
  fieldCount: number
  fields: NumericalField[]
  toJSON(): any
  scale(factor: number): void
  minify(): IProperty<T, any>
  valueAt(arg: number): ValueTypeMap[T]
  clone(): IProperty<T, F>
}

export interface IValueProperty<T extends ValueType, F extends PropertyFunction> extends IProperty<T, F> {
  value: ValueTypeMap[T]
  clone(): IValueProperty<T, F>
}

export interface IKeyframeProperty<T extends ValueType, F extends PropertyFunction> extends IProperty<T, F> {
  loop: boolean
  keyframes: IKeyframe<T>[]
  sortKeyframes(): void
  clone(): IKeyframeProperty<T, F>
}

export interface IModifiableProperty<T extends ValueType, F extends PropertyFunction> extends IProperty<T, F> {
  modifiers: Modifier[]
}

export type Vector2 = [x: number, y: number]
export type Vector3 = [x: number, y: number, z: number]
export type Vector4 = [red: number, green: number, blue: number, alpha: number]
export type Vector = Vector2 | Vector3 | Vector4
export type PropertyValue = number | Vector
export type AnyProperty = Property<any, any>
export type ScalarProperty = Property<ValueType.Scalar, any>
export type Vector2Property = Property<ValueType.Vector2, any>
export type Vector3Property = Property<ValueType.Vector3, any>
export type Vector4Property = Property<ValueType.Vector4, any>
export type VectorProperty = Vector2Property | Vector3Property | Vector4Property
export type ScalarPropertyArg = number | ScalarProperty
export type Vector2PropertyArg = Vector2 | Vector2Property
export type Vector3PropertyArg = Vector3 | Vector3Property
export type Vector4PropertyArg = Vector4 | Vector4Property
export type VectorPropertyArg = Vector | VectorProperty

enum ModifierType {
  /**
   * Adds a random value between `-x` and `x` to the property's value, where
   * `x` is the "max change" value set in the modifier's fields.
   * 
   * There is one RNG seed field for each component of the property value
   * followed by one "max change" value per component.
   */
  Randomizer1 = 21,
  /**
   * Adds a random value between `x` and `y` to the property's value, where
   * `x` and `y` are the min/max change values set in the modifier's fields.
   * 
   * There is one RNG seed field for each component of the property value
   * followed by one "min change" value per component, and then one "max
   * change" value per component.
   */
  Randomizer2 = 24,
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
  ExternalValue1 = 38,
  /**
   * Same as {@link ExternalValue1}, except this only updates if the effect is
   * recreated instead of updating instantly when the external value changes.
   * 
   * Note: This type seems to only work with the
   * {@link ExternalValue.DisplayBlood DisplayBlood external value}.
   */
  ExternalValue2 = 39,
  /**
   * Adds a random fraction of the property's value to itself. The range of the
   * fraction is controlled by the the latter half of the modifier's fields,
   * where, if `x` is the value of the field, the possible range of the
   * fraction will be `-x` to `x`.
   * 
   * There is one RNG seed field for each component of the property value
   * followed by one "max change" value per component.
   */
  Randomizer3 = 53,
}

enum FieldType {
  Boolean,
  Integer,
  Float,
}

enum BlendMode {
  Unk0 = 0,
  Source = 1,
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

  /*
    These two are not part of the format. The StateCondition class will just
    switch the operands around and use the greater than operators automatically
    when these are used.
  */
  LessThanOrEqual = 4,
  LessThan = 5,
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
   * {@link ActionType.NodeAttributes NodeAttributes} being over, or the active
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

/**
 * Used by {@link ActionType.Distortion distortion} particles to control what
 * type of distortion to apply.
 */
enum DistortionMode {
  /**
   * Distorts the background as if you stuck something into it and stirred it.
   * It is animated, and the stir speed is controlled by a property.
   */
  Stir = 0,
  /**
   * Distorts the background based on the normal map.
   */
  NormalMap = 1,
  /**
   * Distorts the background as if the edges were held in place and you grabbed
   * the center and twisted it.
   */
  Twist = 2,
  /**
   * Seemingly identical to {@link NormalMap}?
   */
  Unk3 = 3,
  /**
   * This seems to just squeeze everything to the bottom left corner?
   */
  Unk4 = 4,
}

/**
 * Possible shapes for {@link ActionType.Distortion distortion} particles.
 */
enum DistortionShape {
  /**
   * A flat rectangle.
   */
  Rectangle = 0,
  /**
   * Half of an ellipsoid. (Like a hemisphere, but with three different radii.)
   */
  Hemiellipsoid = 1,
  /**
   * An ellipsoid. (Like a sphere, but with three different radii.)
   */
  Ellipsoid = 2,
}

const EffectActionSlots = {
  [EffectType.Basic]: [
    [
      ActionType.NodeAttributes
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
      ActionType.ParticleAttributes
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
  [EffectType.SharedEmitter]: [
    [
      ActionType.NodeAttributes
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
      ActionType.EmitAllParticles,
      ActionType.EmitRandomParticles
    ],
    [],
    [
      ActionType.NodeWindSpeed,
      ActionType.NodeWindAcceleration
    ]
  ]
}

function arrayOf<T>(size: number, func: (index: number) => T): T[] {
  return Array(size).fill(null).map((e, i) => func(i))
}

function randomInt32() {
  return Math.random() * 2**32 | 0
}

function setPropertyInList(list: Property<any, any>[], index: number, value: Property<any, any> | PropertyValue) {
  if (value instanceof Property) {
    list[index] = value
  } else if (typeof value === 'number') {
    list[index] = new ConstantProperty(value)
  } else {
    list[index] = new ConstantProperty(...value)
  }
}

function scalarFromArg(scalar: ScalarPropertyArg) {
  return scalar instanceof Property ? scalar : new ConstantProperty(scalar)
}

function vectorFromArg(vector: VectorPropertyArg) {
  return vector instanceof Property ? vector : new ConstantProperty(...vector)
}

function uniqueArray<T>(a: T[]) {
  return a.filter((e, i) => a.indexOf(e) === i)
}

function lerp(a: number, b: number, c: number) {
  return a * (1 - c) + b * c
}

function readProperty<T extends IProperty<any, any> | IModifiableProperty<any, any>>(
  br: BinaryReader,
  modifierProp: T extends IModifiableProperty<any, any> ? false : true
): T {
  const typeEnumA = br.readInt16()
  br.assertUint8(0)
  br.assertUint8(1)
  const type: ValueType =         typeEnumA & 0b00000000_00000011
  const func: PropertyFunction = (typeEnumA & 0b00000000_11110000) >>> 4
  const loop: boolean =       !!((typeEnumA & 0b00010000_00000000) >>> 12)
  br.readInt32() // TypeEnumB
  const count = br.readInt32()
  br.assertInt32(0)
  const offset = br.readInt32()
  br.assertInt32(0)
  const modifiers = []
  if (!modifierProp) {
    const modOffset = br.readInt32()
    br.assertInt32(0)
    const modCount = br.readInt32()
    br.assertInt32(0)
    br.stepIn(modOffset)
    for (let i = 0; i < modCount; ++i) {
      modifiers.push(Modifier.read(br))
    }
    br.stepOut()
  }
  const fields = Field.readManyAt(br, offset, count, this).map(f => f.value)
  switch (func) {
    case PropertyFunction.Zero:
    case PropertyFunction.One:
    case PropertyFunction.Constant:
      return ValueProperty.fromFields(type, func, modifiers, fields) as unknown as T
    case PropertyFunction.Stepped:
    case PropertyFunction.Linear:
    case PropertyFunction.Curve1:
    case PropertyFunction.Curve2:
      return KeyframeProperty.fromFields(type, func, loop, modifiers, fields) as unknown as T
    case PropertyFunction.CompCurve:
      return ComponentKeyframeProperty.fromFields(type, loop, modifiers, fields) as unknown as T
    default:
      throw new Error('Unknown property function: ' + func)
  }
}

function writeProperty(prop: IProperty<any, any>, bw: BinaryWriter, properties: IProperty<any, any>[], modifierProp: boolean) {
  const count = properties.length
  const typeEnumA = prop.valueType | prop.function << 4 | +('loop' in prop ? prop.loop : false) << 12
  const typeEnumB = prop.valueType | prop.function << 2 | +('loop' in prop ? prop.loop : false) << 4
  bw.writeInt16(typeEnumA)
  bw.writeUint8(0)
  bw.writeUint8(1)
  bw.writeInt32(typeEnumB)
  bw.writeInt32(prop.fieldCount)
  bw.writeInt32(0)
  bw.reserveInt32(`${modifierProp ? 'Property' : 'ModifiableProperty'}FieldsOffset${count}`)
  bw.writeInt32(0)
  if (!modifierProp) {
    bw.reserveInt32(`PropertyModifiersOffset${count}`)
    bw.writeInt32(0)
    bw.writeInt32((prop as IModifiableProperty<any, any>).modifiers.length)
    bw.writeInt32(0)
  }
  properties.push(prop)
}

function writePropertyModifiers(prop: IModifiableProperty<any, any>, bw: BinaryWriter, index: number, modifiers: Modifier[]) {
  bw.fill(`PropertyModifiersOffset${index}`, bw.position)
  for (const modifier of prop.modifiers) {
    modifier.write(bw, modifiers)
  }
}

function writePropertyFields(prop: IProperty<any, any>, bw: BinaryWriter, index: number, modifierProp: boolean): number {
  const offsetName = `${modifierProp ? 'Property' : 'ModifiableProperty'}FieldsOffset${index}`
  const fieldCount = prop.fieldCount
  if (fieldCount === 0) {
    bw.fill(offsetName, 0)
  } else {
    bw.fill(offsetName, bw.position)
    for (const field of prop.fields) {
      field.write(bw)
    }
  }
  return fieldCount
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
  root: RootNode

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
    root: RootNode = new RootNode,
    states: State[] = [ new State ],
    references: number[] = [],
    externalValues: number[] = [],
    unkBloodEnabler: number[] = [],
    // unkEmpty: number[] = [],
  ) {
    this.id = id
    this.version = version
    this.root = root
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
  static read(buffer: ArrayBuffer, version: FXRVersion = null) {
    const br = new BinaryReader(buffer)

    br.assertASCII('FXR\0')
    br.assertInt16(0)
    if (version !== null) {
      br.assertInt16(
        FXRVersion.DarkSouls3,
        FXRVersion.Sekiro
      )
    } else {
      version = br.assertInt16(
        FXRVersion.DarkSouls3,
        FXRVersion.Sekiro
      )
    }
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
    const states: State[] = []
    for (let i = 0; i < stateCount; ++i) {
      states.push(State.read(br))
    }
    br.stepOut()

    br.position = nodeOffset
    const rootNode = Node.read(br, version) as RootNode

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
    this.root.write(bw, nodes)
    this.root.writeNodes(bw, nodes)
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
    const properties: IModifiableProperty<any, any>[] = []
    for (let i = 0; i < actions.length; ++i) {
      actions[i].writeProperties(bw, i, properties)
    }
    bw.fill('PropertyCount', properties.length)
    bw.pad(16)
    bw.fill('Section8Offset', bw.position)
    const modifiers: Modifier[] = []
    for (let i = 0; i < properties.length; ++i) {
      writePropertyModifiers(properties[i], bw, i, modifiers)
    }
    bw.fill('Section8Count', modifiers.length)
    bw.pad(16)
    bw.fill('Section9Offset', bw.position)
    const modProps: Property<any, any>[] = []
    for (let i = 0; i < modifiers.length; ++i) {
      modifiers[i].writeProperties(bw, i, modProps)
    }
    bw.fill('Section9Count', modProps.length)
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
      fieldCount += writePropertyFields(properties[i], bw, i, false)
    }
    for (let i = 0; i < modifiers.length; ++i) {
      fieldCount += modifiers[i].writeFields(bw, i)
    }
    for (let i = 0; i < modProps.length; ++i) {
      fieldCount += writePropertyFields(modProps[i], bw, i, true)
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
      root: this.root.toJSON(),
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
      this.root.minify(),
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
    for (const node of this.root.walk()) {
      if (node.type === NodeType.Proxy) {
        references.push(node.actions[0].fields1[0].value as number)
      }
    }
    for (const prop of this.root.walkProperties()) {
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
    return new State(stateString.split('&&').filter(e => e.trim().length > 0).map(e => StateCondition.from(e)))
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

  /**
   * A condition for a state. The state remains active if all of its conditions
   * are true or if it has no conditions. If the condition is false, the state
   * is deactivated and the {@link nextState next state} is activated.
   * @param operator Controls what operation should be used for the condition.
   * @param unk1 Unknown. Seems to always be 2 in vanilla Elden Ring. 3 seems
   * to make the condition always true.
   * @param nextState If the condition is false, the state at this index will
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
    public operator: Operator,
    public unk1: number,
    public nextState: number,
    public leftOperandType: OperandType,
    public leftOperandValue: number | null,
    public rightOperandType: OperandType,
    public rightOperandValue: number | null,
  ) {}

  static #reExpression = /^\s*(?<left>(?:state)?time|(?:unk)?minus2|ext(?:ernal)?\(\d+\)|-?\d+(?:\.\d+)?|-?\.\d+)\s*(?<op>==?|<=?|>=?|!=)\s*(?<right>(?:state)?time|(?:unk)?minus2|ext(?:ernal)?\(\d+\)|-?\d+(?:\.\d+)?|-?\.\d+)\s*(?:else(?:\sgoto)?\s+(?<else>-?\d+|none))?\s*$/i
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
   * stateIndex = <integer> | none
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
    switch (m.groups.op) {
      case '!=': op = Operator.NotEqual; break;
      case '=':
      case '==': op = Operator.Equal; break;
      case '<': op = Operator.LessThan; break;
      case '>': op = Operator.GreaterThan; break;
      case '<=': op = Operator.LessThanOrEqual; break;
      case '>=': op = Operator.GreaterThanOrEqual; break;
    }
    const left = this.#parseOperand(m.groups.left)
    const right = this.#parseOperand(m.groups.right)
    let nextState = -1
    if ('else' in m.groups) {
      switch (m.groups.else) {
        case '-1':
        case 'none':
        case undefined:
          break
        default:
          nextState = parseInt(m.groups.else)
          break
      }
    }
    return new StateCondition(op, 2, nextState, left.type, left.value, right.type, right.value)
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
    ).sortOperands()
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

  /**
   * Swaps the operands and changes the operator to match if the left operand
   * is a literal value and the right operand is a non-literal value. This
   * makes it a bit easier to read the expression, but doesn't affect
   * functionality.
   */
  sortOperands() {
    if (this.leftOperandType !== OperandType.Literal || this.rightOperandType === OperandType.Literal) {
      return this
    }
    ;[
      this.leftOperandType,
      this.leftOperandValue,
      this.rightOperandType,
      this.rightOperandValue,
    ] = [
      this.rightOperandType,
      this.rightOperandValue,
      this.leftOperandType,
      this.leftOperandValue,
    ]
    switch (this.operator) {
      case Operator.GreaterThan: this.operator = Operator.LessThan; break;
      case Operator.GreaterThanOrEqual: this.operator = Operator.LessThanOrEqual; break;
      case Operator.LessThan: this.operator = Operator.GreaterThan; break;
      case Operator.LessThanOrEqual: this.operator = Operator.GreaterThanOrEqual; break;
    }
    return this
  }

  /**
   * The {@link Operator.LessThanOrEqual LessThanOrEqual} and
   * {@link Operator.LessThan LessThan} operators are not valid operators in
   * the FXR format. This method returns an equivalent condition that *is*
   * valid.
   */
  formatCondition() {
    if (this.operator !== Operator.LessThan && this.operator !== Operator.LessThanOrEqual) {
      return this
    }
    return new StateCondition(
      this.operator - 2, this.unk1, this.nextState,
      this.rightOperandType, this.rightOperandValue,
      this.leftOperandType, this.leftOperandValue
    )
  }

  #write(bw: BinaryWriter, conditions: StateCondition[]) {
    const count = conditions.length
    bw.writeInt16(this.operator | this.unk1 << 2)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(0)
    bw.writeInt32(this.nextState)
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

  write(bw: BinaryWriter, conditions: StateCondition[]) {
    this.formatCondition().#write(bw, conditions)
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

  clone() {
    return new StateCondition(
      this.operator, this.unk1, this.nextState,
      this.leftOperandType, this.leftOperandValue,
      this.rightOperandType, this.rightOperandValue
    )
  }

  #toString() {
    let left: string | number, right: string | number
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
    return `${left} ${['!=','==','>=','>','<=','<'][this.operator]} ${right} else ${this.nextState}`
  }

  toString() {
    return this.clone().sortOperands().#toString()
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

  static read(br: BinaryReader, version: FXRVersion) {
    const type = br.readInt16()
    const node = new (type in Nodes ? Nodes[type] : Node)
    node.type = type
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
    node.nodes = []
    for (let i = 0; i < nodeCount; ++i) {
      node.nodes.push(Node.read(br, version))
    }
    br.stepOut()
    br.stepIn(effectOffset)
    node.effects = []
    for (let i = 0; i < effectCount; ++i) {
      node.effects.push(Effect.read(br, version))
    }
    br.stepOut()
    br.stepIn(actionOffset)
    node.actions = []
    for (let i = 0; i < actionCount; ++i) {
      node.actions.push(Action.read(br, version))
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
    const node = new (type in Nodes ? Nodes[type] : Node)
    node.type = type
    node.actions = actions?.map(action => Action.fromJSON(action)) ?? []
    node.effects = effects?.map(effect => Effect.fromJSON(effect)) ?? []
    node.nodes = nodes?.map(node => Node.fromJSON(node)) ?? []
    return node
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

  /**
   * Scales the entire branch by a factor. This updates all sizes, offsets,
   * lengths, and radii of the actions in the branch, except certain
   * multiplicative fields and properties.
   * 
   * This will not work properly in Dark Souls 3 FXRs due to some actions
   * having different indices for various properties and fields.
   * @param factor The factor to scale the branch with.
   */
  scale(factor: number) {
    for (const effect of this.walkEffects()) if (
      effect.type === EffectType.Basic || effect.type === EffectType.SharedEmitter
    ) {
      const slot1 = effect.actions[1] as ActionWithNumericalFields
      switch (slot1.type) {
        case ActionType.RandomNodeTransform:
          slot1.fields1[6] = new FloatField(slot1.fields1[6].value * factor)
          slot1.fields1[7] = new FloatField(slot1.fields1[7].value * factor)
          slot1.fields1[8] = new FloatField(slot1.fields1[8].value * factor)
        case ActionType.StaticNodeTransform:
          slot1.fields1[0] = new FloatField(slot1.fields1[0].value * factor)
          slot1.fields1[1] = new FloatField(slot1.fields1[1].value * factor)
          slot1.fields1[2] = new FloatField(slot1.fields1[2].value * factor)
          break
      }
      const slot2 = effect.actions[2]
      switch (slot2.type) {
        case ActionType.NodeTranslation:
          slot2.properties1[0].scale(factor)
          break
        case ActionType.NodeAcceleration:
        case ActionType.NodeAccelerationRandomTurns:
        case ActionType.NodeAccelerationPartialFollow:
        case ActionType.NodeAccelerationSpin:
          slot2.properties1[0].scale(factor)
          slot2.properties1[1].scale(factor)
          slot2.properties1[3].scale(factor)
          break
        case ActionType.NodeSpeed:
        case ActionType.NodeSpeedRandomTurns:
        case ActionType.NodeSpeedPartialFollow:
        case ActionType.NodeSpeedSpin:
          slot2.properties1[0].scale(factor)
          slot2.properties1[2].scale(factor)
          break
      }
      const slot4 = effect.actions[1]
      if (slot4.type === ActionType.EqualDistanceEmitter) {
        slot4.properties1[0].scale(factor)
      }
      const slot5 = effect.actions[5]
      switch (slot5.type) {
        case ActionType.BoxEmitterShape:
          slot5.properties1[2].scale(factor)
        case ActionType.RectangleEmitterShape:
        case ActionType.CylinderEmitterShape:
          slot5.properties1[1].scale(factor)
        case ActionType.DiskEmitterShape:
        case ActionType.SphereEmitterShape:
          slot5.properties1[0].scale(factor)
          break
      }

      if (effect.type === EffectType.Basic) {
        const slot7 = effect.actions[7]
        slot7.properties1[0].scale(factor)
        slot7.properties1[1].scale(factor)
        slot7.properties1[2].scale(factor)
        slot7.properties1[3].scale(factor)

        const slot9 = effect.actions[9] as ActionWithNumericalFields
        switch (slot9.type) {
          case ActionType.BillboardEx:
            slot9.properties1[2].scale(factor)
            slot9.properties1[3].scale(factor)
            slot9.properties1[4].scale(factor)
            slot9.properties1[20].scale(factor)
            slot9.fields2[26] = new FloatField(slot9.fields2[26].value * factor)
            break
          case ActionType.MultiTextureBillboardEx:
          case ActionType.Model:
          case ActionType.Distortion:
            slot9.properties1[1].scale(factor)
            slot9.properties1[2].scale(factor)
            slot9.properties1[3].scale(factor)
            break
          case ActionType.RadialBlur:
            slot9.properties1[2].scale(factor)
            slot9.properties1[3].scale(factor)
            slot9.properties1[4].scale(factor)
            break
          case ActionType.PointLight:
            slot9.properties1[2].scale(factor)
            slot9.fields2[4] = new FloatField(slot9.fields2[4].value * factor)
            slot9.fields2[5] = new FloatField(slot9.fields2[5].value * factor)
            slot9.fields2[6] = new FloatField(slot9.fields2[6].value * factor)
            break
          case ActionType.SpotLight:
            slot9.properties1[4].scale(factor)
            slot9.properties1[5].scale(factor)
            slot9.properties1[6].scale(factor)
            slot9.properties1[7].scale(factor)
            slot9.fields2[4] = new FloatField(slot9.fields2[4].value * factor)
            slot9.fields2[5] = new FloatField(slot9.fields2[5].value * factor)
            slot9.fields2[6] = new FloatField(slot9.fields2[6].value * factor)
            break
        }
        switch (slot9.type) {
          case ActionType.PointSprite:
          case ActionType.Line:
          case ActionType.QuadLine:
          case ActionType.BillboardEx:
          case ActionType.MultiTextureBillboardEx:
          case ActionType.Model:
          case ActionType.Tracer:
          case ActionType.Distortion:
          case ActionType.RadialBlur:
          case ActionType.Unk10000_StandardParticle:
          case ActionType.Unk10001_StandardCorrectParticle:
          case ActionType.Unk10012_Tracer:
          case ActionType.Unk10015_RichModel:
            for (let i = 19; i >= 14; i--) if (slot9.fields2[i].value > 0) {
              slot9.fields2[i] = new FloatField(slot9.fields2[i].value * factor)
            }
            break
        }
        const slot10 = effect.actions[10]
        switch (slot10.type) {
          case ActionType.ParticleAcceleration:
          case ActionType.ParticleSpeed:
          case ActionType.ParticleSpeedRandomTurns:
          case ActionType.ParticleSpeedPartialFollow:
          case ActionType.ParticleAccelerationRandomTurns:
          case ActionType.ParticleAccelerationPartialFollow:
            slot10.properties1[0].scale(factor)
            slot10.properties1[1].scale(factor)
            break
        }
        const slot13 = effect.actions[13]
        switch (slot13.type) {
          case ActionType.NodeWindAcceleration:
          case ActionType.NodeWindSpeed:
            slot13.properties1[0].scale(factor)
            break
        }
        const slot14 = effect.actions[14]
        switch (slot14.type) {
          case ActionType.ParticleWindAcceleration:
          case ActionType.ParticleWindSpeed:
            slot14.properties1[0].scale(factor)
            break
        }
      } else { // Shared emitter effect
        const slot9 = effect.actions[9]
        switch (slot9.type) {
          case ActionType.NodeWindAcceleration:
          case ActionType.NodeWindSpeed:
            slot9.properties1[0].scale(factor)
            break
        }
      }
    }
  }

  /**
   * Recolors the entire branch by modifying color properties and fields using
   * a function.
   * 
   * This will not work properly in Dark Souls 3 FXRs due to some actions
   * having different indices for various properties and fields.
   * @param func The function used to recolor the branch. It is passed the
   * original color and should return the color to replace it with.
   */
  recolor(func: (color: Vector4) => Vector4) {
    const procFields = (list: NumericalField[], i: number, alpha = false) => {
      const [r, g, b, a] = func([
        list[i  ].value,
        list[i+1].value,
        list[i+2].value,
        alpha ? list[i+3].value : 1
      ])
      list[i  ] = new FloatField(r)
      list[i+1] = new FloatField(g)
      list[i+2] = new FloatField(b)
      if (alpha) {
        list[i+3] = new FloatField(a)
      }
    }
    const procProp = (list: IProperty<ValueType.Vector4, any>[], index: number) => {
      let prop = list[index]
      if (prop instanceof ValueProperty) {
        if (prop.function <= PropertyFunction.One) {
          prop.function = PropertyFunction.Constant
        }
        prop.value = func(prop.value)
      } else if (prop instanceof KeyframeProperty) {
        for (const keyframe of prop.keyframes) {
          keyframe.value = func(keyframe.value as Vector4)
        }
      } else if (prop instanceof ComponentKeyframeProperty) {
        const positions = new Set<number>
        for (const comp of prop.components) {
          for (const keyframe of comp.keyframes) {
            positions.add(keyframe.position)
          }
        }
        const keyframes = Array.from(positions).sort((a, b) => a - b).map(e => new Keyframe<ValueType.Vector4>(e, prop.valueAt(e)))
        list[index] = new LinearProperty(prop.loop, keyframes)
        if ('modifiers' in prop) {
          (list[index] as IModifiableProperty<ValueType.Vector4, any>).modifiers = prop.modifiers
        }
        prop = list[index]
      }
      if ('modifiers' in prop) {
        for (const mod of (prop as IModifiableProperty<ValueType.Vector4, any>).modifiers) {
          switch (mod.type) {
            case ModifierType.Randomizer2:
              procFields(mod.fields, 8, true)
            case ModifierType.Randomizer1:
            case ModifierType.Randomizer3:
              procFields(mod.fields, 4, true)
              break
            case ModifierType.ExternalValue1:
            case ModifierType.ExternalValue2:
              procProp(mod.properties, 0)
              break
          }
        }
      }
    }
    for (const effect of this.walkEffects()) if (effect.type === EffectType.Basic) {
      procProp(effect.actions[7].properties1, 4)
      const slot9 = effect.actions[9] as ActionWithNumericalFields
      switch (slot9.type) {
        case ActionType.PointSprite:
          procProp(slot9.properties1, 3)
          procProp(slot9.properties1, 4)
          procProp(slot9.properties1, 5)
          break
        case ActionType.Line:
          procProp(slot9.properties1, 2)
          procProp(slot9.properties1, 3)
          procProp(slot9.properties1, 4)
          procProp(slot9.properties1, 5)
          procProp(slot9.properties1, 7)
          break
        case ActionType.QuadLine:
          procProp(slot9.properties1, 3)
          procProp(slot9.properties1, 4)
          procProp(slot9.properties1, 5)
          procProp(slot9.properties1, 6)
          procProp(slot9.properties1, 9)
          break
        case ActionType.BillboardEx:
          procProp(slot9.properties1, 7)
          procProp(slot9.properties1, 8)
          procProp(slot9.properties1, 9)
          break
        case ActionType.MultiTextureBillboardEx:
          procProp(slot9.properties1, 15)
          procProp(slot9.properties1, 16)
          procProp(slot9.properties1, 17)
          procProp(slot9.properties1, 18)
          procProp(slot9.properties1, 19)
          procProp(slot9.properties1, 20)
          break
        case ActionType.Model:
          procProp(slot9.properties1, 14)
          procProp(slot9.properties1, 15)
          procProp(slot9.properties1, 16)
          break
        case ActionType.Tracer:
        case ActionType.Unk10012_Tracer:
          procProp(slot9.properties1, 6)
          procProp(slot9.properties1, 7)
          procProp(slot9.properties1, 8)
          break
        case ActionType.Distortion:
        case ActionType.RadialBlur:
          procProp(slot9.properties1, 7)
          procProp(slot9.properties1, 8)
          break
        case ActionType.PointLight:
        case ActionType.SpotLight:
          procProp(slot9.properties1, 0)
          procProp(slot9.properties1, 1)
          break
        case ActionType.Unk10000_StandardParticle:
        case ActionType.Unk10001_StandardCorrectParticle:
          procProp(slot9.properties1, 13)
          procProp(slot9.properties2, 3)
          procProp(slot9.properties2, 4)
          procProp(slot9.properties2, 5)
          break
        case ActionType.Unk10014_LensFlare:
          procProp(slot9.properties1, 2)
          procProp(slot9.properties1, 5)
          procProp(slot9.properties1, 8)
          procProp(slot9.properties1, 11)
          break
        case ActionType.Unk10015_RichModel:
          procProp(slot9.properties1, 13)
          procProp(slot9.properties1, 14)
          procProp(slot9.properties1, 15)
      }
      switch (slot9.type) {
        case ActionType.PointSprite:
        case ActionType.Line:
        case ActionType.QuadLine:
        case ActionType.BillboardEx:
        case ActionType.MultiTextureBillboardEx:
        case ActionType.Model:
        case ActionType.Tracer:
        case ActionType.Distortion:
        case ActionType.RadialBlur:
        case ActionType.Unk10012_Tracer:
        case ActionType.Unk10015_RichModel:
          procProp(slot9.properties2, 3)
          procProp(slot9.properties2, 4)
          procProp(slot9.properties2, 5)
          procFields(slot9.fields2, 5)
          break
      }
    }
  }

}

/**
 * Simplifies the creation of new {@link NodeType.Root root nodes} by giving
 * them default actions.
 */
class RootNode extends Node {

  constructor(
    rateOfTime: ScalarPropertyArg = 1,
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

  get rateOfTime(): ScalarProperty { return this.actions.find(a => a.type === ActionType.Unk10500)?.properties1[0] }
  set rateOfTime(value: ScalarPropertyArg) {
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
 * Super class for any type of node that contains {@link EffectType effects}.
 */
class NodeWithEffects extends Node {

  constructor(type: NodeType, effects: Effect[] = [], nodes: Node[] = []) {
    super(type, [ new StateEffectMap ], effects, nodes)
  }

  mapStates(...effectIndices: number[]) {
    this.actions = [new StateEffectMap(...effectIndices)]
    return this
  }

}

/**
 * A node that only displays one of its child nodes at a time based on
 * distance thresholds for each.
 * 
 * This node can only manage up to five levels of detail. If you need more
 * levels, you can put another LOD node as the fifth child of this node and set
 * higher thresholds in that.
 */
class LevelOfDetailNode extends NodeWithEffects {

  /**
   * @param effects An array of {@link EffectType.LevelOfDetail LOD effects}.
   * Other effect types do not work in this node type.
   * @param nodes An array of child nodes.
   */
  constructor(effects: Effect[] = [], nodes: Node[] = []) {
    super(NodeType.LevelOfDetail, effects, nodes)
  }

  /**
   * Alternative method to construct the node. Use this if you don't need
   * multiple effects or a non-infinite duration.
   * @param thresholds An array of distance thresholds. Each threshold is used
   * for the child node of the same index.
   * @param nodes An array of child nodes.
   */
  static withThresholds(thresholds: number[], nodes: Node[]) {
    return new LevelOfDetailNode([
      new LevelOfDetailEffect(-1, thresholds)
    ], nodes)
  }

}

/**
 * A basic node that can have transforms and child nodes, and emit particles.
 */
class BasicNode extends NodeWithEffects {

  /**
   * @param effectsOrEffectActions This is either the list of effects to add
   * to the node or a list of actions to create a {@link BasicEffect} with to
   * add to the node.
   * @param nodes A list of child nodes.
   */
  constructor(effectsOrEffectActions: Effect[] | Action[] = [], nodes: Node[] = []) {
    if (!Array.isArray(nodes) || nodes.some(e => !(e instanceof Node))) {
      throw new Error('Non-node passed as node to BasicNode.')
    }
    if (effectsOrEffectActions.every(e => e instanceof Action)) {
      super(NodeType.Basic, [
        new BasicEffect(effectsOrEffectActions as Action[])
      ], nodes)
    } else {
      super(
        NodeType.Basic,
        effectsOrEffectActions as Effect[],
        nodes
      )
    }
  }

}

/**
 * A node that overrides the emitter of its child nodes with its own, allowing
 * a single emitter to emit multiple types of particles.
 */
class SharedEmitterNode extends NodeWithEffects {

  constructor(effectsOrEffectActions: Effect[] | Action[] = [], nodes: Node[] = []) {
    if (!Array.isArray(nodes) || nodes.some(e => !(e instanceof Node))) {
      throw new Error('Non-node passed as node to SharedEmitterNode.')
    }
    if (effectsOrEffectActions.every(e => e instanceof Action)) {
      super(NodeType.SharedEmitter, [
        new SharedEmitterEffect(effectsOrEffectActions as Action[])
      ], nodes)
    } else {
      super(
        NodeType.SharedEmitter,
        effectsOrEffectActions as Effect[],
        nodes
      )
    }
  }

}

const Nodes = {
  [NodeType.Root]: RootNode, RootNode,
  [NodeType.Proxy]: ProxyNode, ProxyNode,
  [NodeType.LevelOfDetail]: LevelOfDetailNode, LevelOfDetailNode,
  [NodeType.Basic]: BasicNode, BasicNode,
}

class Effect {

  type: EffectType
  actions: Action[]

  constructor(type: EffectType, actions: Action[] = []) {
    this.type = type
    this.actions = actions
  }

  static read(br: BinaryReader, version: FXRVersion) {
    const type = br.readInt16()
    const effect = new (type in Effects ? Effects[type] : Effect)
    effect.type = type
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
    effect.actions = []
    for (let i = 0; i < actionCount; ++i) {
      effect.actions.push(Action.read(br, version))
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
    const effect = new (type in Effects ? Effects[type] : Effect)
    effect.type = type
    effect.actions = actions?.map(action => Action.fromJSON(action)) ?? []
    return effect
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
  constructor(duration: ScalarPropertyArg, thresholds: number[]) {
    super(EffectType.LevelOfDetail, [
      new LevelOfDetailThresholds(duration, thresholds)
    ])
  }

}

/**
 * Effect used in {@link NodeType.Basic basic nodes} to apply transforms and
 * emit particles of many different types.
 * 
 * Default actions:
 * Index | Action
 * ------|----------
 * 0     | {@link ActionType.NodeAttributes NodeAttributes}
 * 1     | {@link ActionType.None None}
 * 2     | {@link ActionType.None None}
 * 3     | {@link ActionType.None None}
 * 4     | {@link ActionType.OneTimeEmitter OneTimeEmitter}
 * 5     | {@link ActionType.PointEmitterShape PointEmitterShape}
 * 6     | {@link ActionType.Unk500 Unk500}
 * 7     | {@link ActionType.ParticleMultiplier ParticleMultiplier}
 * 8     | {@link ActionType.ParticleAttributes ParticleAttributes}
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
      new NodeAttributes,
      new Action,
      new Action,
      new Action,
      new OneTimeEmitter,
      new PointEmitterShape,
      new Action(ActionType.Unk500),
      new ParticleMultiplier,
      new ParticleAttributes,
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
 * Effect used in {@link NodeType.SharedEmitter shared emitter nodes} to
 * override emitters of child nodes and control which of the child nodes to use
 * the particles of.
 * 
 * Default actions:
 * Index | Action
 * ------|----------
 * 0     | {@link ActionType.NodeAttributes NodeAttributes}
 * 1     | {@link ActionType.None None}
 * 2     | {@link ActionType.None None}
 * 3     | {@link ActionType.None None}
 * 4     | {@link ActionType.OneTimeEmitter OneTimeEmitter}
 * 5     | {@link ActionType.PointEmitterShape PointEmitterShape}
 * 6     | {@link ActionType.Unk500 Unk500}
 * 7     | {@link ActionType.EmitAllParticles AllChildNodes}
 * 13    | {@link ActionType.None None}
 * 14    | {@link ActionType.None None}
 */
class SharedEmitterEffect extends Effect {
  
  /**
   * @param actions Actions to use in the effect. The order does not matter,
   * and it does not need to be a complete list. Actions will be placed in the
   * slots they fit in.
   */
  constructor(actions: Action[] = []) {
    super(EffectType.SharedEmitter, [
      new NodeAttributes,
      new Action,
      new Action,
      new Action,
      new OneTimeEmitter,
      new PointEmitterShape,
      new Action(ActionType.Unk500),
      new EmitAllParticles,
      new Action,
      new Action,
    ])
    for (const action of actions) {
      const index = EffectActionSlots[EffectType.SharedEmitter].findIndex(a => a.includes(action.type))
      if (index >= 0) {
        this.actions[index] = action
      } else {
        throw new Error('No slot for action: ' + action.type)
      }
    }
  }

}

const Effects = {
  [EffectType.LevelOfDetail]: LevelOfDetailEffect, LevelOfDetailEffect,
  [EffectType.Basic]: BasicEffect, BasicEffect,
  [EffectType.SharedEmitter]: SharedEmitterEffect, SharedEmitterEffect,
}

const commonAction6xxFields2Types = [
  /*  0 */ null,
  /*  1 */ FieldType.Boolean,
  /*  2 */ FieldType.Integer,
  /*  3 */ FieldType.Float,
  /*  4 */ FieldType.Integer,
  /*  5 */ FieldType.Float, // Bloom - Red multiplier
  /*  6 */ FieldType.Float, // Bloom - Green multiplier
  /*  7 */ FieldType.Float, // Bloom - Blue multiplier
  /*  8 */ FieldType.Float, // Bloom strength
  /*  9 */ null,
  /* 10 */ null,
  /* 11 */ null,
  /* 12 */ null,
  /* 13 */ null,
  /* 14 */ FieldType.Float, // Distance Fade: Close 0
  /* 15 */ FieldType.Float, // Distance Fade: Close 1
  /* 16 */ FieldType.Float, // Distance Fade: Far 0
  /* 17 */ FieldType.Float, // Distance Fade: Far 1
  /* 18 */ FieldType.Float, // Minimum view distance
  /* 19 */ FieldType.Float, // Maximum view distance
  /* 20 */ null,
  /* 21 */ null,
  /* 22 */ null,
  /* 23 */ null,
  /* 24 */ null,
  /* 25 */ FieldType.Float, // Depth blend 1
  /* 26 */ FieldType.Float, // Depth blend 2
  /* 27 */ FieldType.Boolean,
  /* 28 */ null,
  /* 29 */ FieldType.Float,
  /* 30 */ FieldType.Float, // Shadow darkness
  /* 31 */ null,
  /* 32 */ FieldType.Boolean,
  /* 33 */ FieldType.Integer, // Specular texture
  /* 34 */ FieldType.Float, // Glossiness
  /* 35 */ FieldType.Integer, // Lighting mode
  /* 36 */ FieldType.Integer,
  /* 37 */ null,
  /* 38 */ FieldType.Float, // Specularity
  /* 39 */ FieldType.Integer,
  /* 40 */ null,
  /* 41 */ null,
  /* 42 */ null,
  /* 43 */ null,
  /* 44 */ null,
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
  [ActionType.ParticleAttributes]: {
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
  [ActionType.MultiTextureBillboardEx]: {
    Fields1: [
      FieldType.Integer, // Orientation mode
      FieldType.Integer, // Mask
      FieldType.Integer, // Layer 1
      FieldType.Integer, // Layer 2
      FieldType.Boolean, // Uniform scale
      null,
      FieldType.Integer, // Columns
      FieldType.Integer, // Total frames
      FieldType.Boolean, // Interpolate frames
      null,
      null,
      null,
      FieldType.Boolean,
      FieldType.Boolean,
      null,
      null,
      null,
      null,
    ],
    Fields2: commonAction6xxFields2Types
  },
  [ActionType.Model]: {
    Fields1: [
      FieldType.Integer,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Boolean,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Boolean,
      FieldType.Boolean,
      null,
      null,
      null,
      null,
      FieldType.Float,
      null,
      null,
      null,
      null,
    ],
    Fields2: commonAction6xxFields2Types
  },
  [ActionType.Tracer]: {
    Fields1: [
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Float,
      FieldType.Float,
      FieldType.Integer,
      null,
      null,
      FieldType.Float,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Boolean,
      FieldType.Integer,
      FieldType.Integer,
      null,
      FieldType.Integer,
      FieldType.Integer,
      null,
    ],
    Fields2: commonAction6xxFields2Types
  },
  [ActionType.Distortion]: {
    Fields1: [
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      FieldType.Boolean,
      FieldType.Integer,
      null,
      FieldType.Integer,
      FieldType.Integer,
    ],
    Fields2: commonAction6xxFields2Types
  },
  [ActionType.RadialBlur]: {
    Fields1: [
      FieldType.Boolean,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
      FieldType.Integer,
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
  properties1: AnyProperty[]
  properties2: AnyProperty[]
  section10s: Section10[]

  constructor(
    type: number = ActionType.None,
    fields1: Field[] = [],
    fields2: Field[] = [],
    properties1: AnyProperty[] = [],
    properties2: AnyProperty[] = [],
    section10s: Section10[] = [],
  ) {
    this.type = type
    this.fields1 = fields1
    this.fields2 = fields2
    this.properties1 = properties1
    this.properties2 = properties2
    this.section10s = section10s
  }

  static read(br: BinaryReader, version: FXRVersion): Action {
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
    const properties1: AnyProperty[] = []
    const properties2: AnyProperty[] = []
    for (let i = 0; i < propertyCount1; ++i) {
      properties1.push(readProperty(br, false))
    }
    for (let i = 0; i < propertyCount2; ++i) {
      properties2.push(readProperty(br, false))
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
    if (version !== FXRVersion.DarkSouls3 && type in ActionFieldTypes) {
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

  writeProperties(bw: BinaryWriter, index: number, properties: IModifiableProperty<any, any>[]) {
    bw.fill(`ActionPropertiesOffset${index}`, bw.position)
    for (const property of this.properties1) {
      writeProperty(property, bw, properties, false)
    }
    for (const property of this.properties2) {
      writeProperty(property, bw, properties, false)
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

export interface NodeMovementParams {
  /**
   * Controls how fast the node should spin around its X-axis in degrees per
   * second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link maxTurnAngle}
   * - {@link turnInterval}
   * - {@link followFactor}
   * - {@link followRotation}
   * 
   * See also:
   * - {@link spinXMultiplier}
   */
  spinX?: ScalarPropertyArg
  /**
   * Multiplier for {@link spinX}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link maxTurnAngle}
   * - {@link turnInterval}
   * - {@link followFactor}
   * - {@link followRotation}
   */
  spinXMultiplier?: ScalarPropertyArg
  /**
   * Controls how fast the node should spin around its Y-axis in degrees per
   * second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link maxTurnAngle}
   * - {@link turnInterval}
   * - {@link followFactor}
   * - {@link followRotation}
   * 
   * See also:
   * - {@link spinYMultiplier}
   */
  spinY?: ScalarPropertyArg
  /**
   * Multiplier for {@link spinY}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link maxTurnAngle}
   * - {@link turnInterval}
   * - {@link followFactor}
   * - {@link followRotation}
   */
  spinYMultiplier?: ScalarPropertyArg
  /**
   * Controls how fast the node should spin around its Z-axis in degrees per
   * second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link maxTurnAngle}
   * - {@link turnInterval}
   * - {@link followFactor}
   * - {@link followRotation}
   * 
   * See also:
   * - {@link spinZMultiplier}
   */
  spinZ?: ScalarPropertyArg
  /**
   * Multiplier for {@link spinZ}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link maxTurnAngle}
   * - {@link turnInterval}
   * - {@link followFactor}
   * - {@link followRotation}
   */
  spinZMultiplier?: ScalarPropertyArg
  /**
   * Controls the speed of the node along its Z-axis. Defaults to 0.
   * 
   * **Argument**:
   * - If {@link speedZMultiplier} is set:
   * {@link PropertyArgument.EffectAge Effect age}
   * - If {@link speedZMultiplier} is **not** set:
   * {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link speedZMultiplier}
   */
  speedZ?: ScalarPropertyArg
  /**
   * Multiplier for {@link speedZ}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link accelerationZ}
   * - {@link accelerationZMultiplier}
   */
  speedZMultiplier?: ScalarPropertyArg
  /**
   * Controls the acceleration of the node in the +Z direction. This value
   * cannot be negative. Defaults to 0.
   * 
   * Incompatible with the following parameters:
   * - {@link speedZMultiplier}
   * 
   * See also:
   * - {@link accelerationZMultiplier}
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  accelerationZ?: ScalarPropertyArg
  /**
   * Multiplier for {@link accelerationZ}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link speedZMultiplier}
   */
  accelerationZMultiplier?: ScalarPropertyArg
  /**
   * Controls the acceleration of the node along its Y-axis. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  accelerationY?: ScalarPropertyArg
  /**
   * The node will turn a random amount based on this value at intervals
   * defined by {@link turnInterval}. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link spinX}
   * - {@link spinXMultiplier}
   * - {@link spinY}
   * - {@link spinYMultiplier}
   * - {@link spinZ}
   * - {@link spinZMultiplier}
   */
  maxTurnAngle?: ScalarPropertyArg
  /**
   * The node will turn a random amount based on {@link maxTurnAngle} at
   * this interval. The units are seconds, but due to how the field that stores
   * this value works, the value will be rounded to the nearest 0.02 seconds.
   * Defaults to 0.
   * 
   * Incompatible with the following parameters:
   * - {@link spinX}
   * - {@link spinXMultiplier}
   * - {@link spinY}
   * - {@link spinYMultiplier}
   * - {@link spinZ}
   * - {@link spinZMultiplier}
   */
  turnInterval?: number
  /**
   * Controls how well the node should follow the parent node if it is not
   * attached. At 0, the node will not follow at all. At 1, the node will
   * follow perfectly, as if attached to the parent node. Negative values will
   * make the node move in the opposite direction compared to the parent node.
   * Values greater than 1 will make the node exaggerate the parent node's
   * movement. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link spinX}
   * - {@link spinXMultiplier}
   * - {@link spinY}
   * - {@link spinYMultiplier}
   * - {@link spinZ}
   * - {@link spinZMultiplier}
   * 
   * See also:
   * - {@link followRotation}
   */
  followFactor?: ScalarPropertyArg
  /**
   * Disabling this will make {@link followFactor} only affect translation and
   * not rotation. Defaults to true.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   * 
   * Incompatible with the following parameters:
   * - {@link spinX}
   * - {@link spinXMultiplier}
   * - {@link spinY}
   * - {@link spinYMultiplier}
   * - {@link spinZ}
   * - {@link spinZMultiplier}
   */
  followRotation?: boolean
}
/**
 * Controls the movement of the node.
 * 
 * This class covers most of the Node Movement action types:
 * - {@link ActionType.NodeSpin NodeSpin}
 * - {@link ActionType.NodeAcceleration NodeAcceleration}
 * - {@link ActionType.NodeAccelerationRandomTurns NodeAccelerationRandomTurns}
 * - {@link ActionType.NodeAccelerationPartialFollow NodeAccelerationPartialFollow}
 * - {@link ActionType.NodeAccelerationSpin NodeAccelerationSpin}
 * - {@link ActionType.NodeSpeed NodeSpeed}
 * - {@link ActionType.NodeSpeedRandomTurns NodeSpeedRandomTurns}
 * - {@link ActionType.NodeSpeedPartialFollow NodeSpeedPartialFollow}
 * - {@link ActionType.NodeSpeedSpin NodeSpeedSpin}
 * 
 * Which one is produced by the constructor depends on what arguments are set.
 * By default, the basic acceleration action is created.
 */
class NodeMovement extends Action {

  constructor({
    spinX = null,
    spinXMultiplier = null,
    spinY = null,
    spinYMultiplier = null,
    spinZ = null,
    spinZMultiplier = null,
    speedZ = null,
    speedZMultiplier = null,
    accelerationZ = null,
    accelerationZMultiplier = null,
    accelerationY = null,
    maxTurnAngle = null,
    turnInterval = null,
    followFactor = null,
    followRotation = null,
  }: NodeMovementParams = {}) {
    const speed = +(speedZMultiplier !== null)
    const acceleration = +(accelerationZ !== null || accelerationZMultiplier !== null) << 1
    const spin = +[spinX, spinXMultiplier, spinY, spinYMultiplier, spinZ, spinZMultiplier].some(e => e !== null) << 2
    const randomTurns = +(maxTurnAngle !== null || turnInterval !== null) << 3
    const partialFollow = +(followFactor !== null || followRotation !== null) << 4
    const aos = +(speed || acceleration || speedZ !== null || accelerationY !== null) << 5
    spinX ??= 0
    spinXMultiplier ??= 1
    spinY ??= 0
    spinYMultiplier ??= 1
    spinZ ??= 0
    spinZMultiplier ??= 1
    speedZ ??= 0
    speedZMultiplier ??= 1
    accelerationZ ??= 0
    accelerationZMultiplier ??= 1
    accelerationY ??= 0
    maxTurnAngle ??= 0
    turnInterval ??= 0
    followFactor ??= 0
    followRotation ??= true
    switch (speed | acceleration | spin | randomTurns | partialFollow | aos) {
      case acceleration | aos: super(ActionType.NodeAcceleration, [
        new IntField,
        new IntField,
        new FloatField,
      ], [], [
        scalarFromArg(speedZ),
        scalarFromArg(accelerationZ),
        scalarFromArg(accelerationZMultiplier),
        scalarFromArg(accelerationY),
      ]); break;
      case spin: super(ActionType.NodeSpin, [
        new IntField(1),
      ], [], [
        scalarFromArg(spinX),
        scalarFromArg(spinXMultiplier),
        scalarFromArg(spinY),
        scalarFromArg(spinYMultiplier),
        scalarFromArg(spinZ),
        scalarFromArg(spinZMultiplier),
      ]); break;
      case acceleration | randomTurns | aos: super(ActionType.NodeAccelerationRandomTurns, [
        new IntField,
        new IntField,
        new IntField(Math.round(turnInterval * 50)),
      ], [], [
        scalarFromArg(speedZ),
        scalarFromArg(accelerationZ),
        scalarFromArg(accelerationZMultiplier),
        scalarFromArg(accelerationY),
        scalarFromArg(maxTurnAngle),
      ]); break;
      case acceleration | partialFollow | aos:
      case acceleration | partialFollow | randomTurns | aos: super(ActionType.NodeAccelerationPartialFollow, [
        new IntField,
        new IntField(Math.round(turnInterval * 50)),
        new BoolField(followRotation),
      ], [], [
        scalarFromArg(speedZ),
        scalarFromArg(accelerationZ),
        scalarFromArg(accelerationZMultiplier),
        scalarFromArg(accelerationY),
        scalarFromArg(maxTurnAngle),
        scalarFromArg(followFactor),
      ]); break;
      case acceleration | spin | aos: super(ActionType.NodeAccelerationSpin, [
        new IntField,
        new IntField,
        new IntField,
        new IntField,
      ], [], [
        scalarFromArg(speedZ),
        scalarFromArg(accelerationZ),
        scalarFromArg(accelerationZMultiplier),
        scalarFromArg(accelerationY),
        scalarFromArg(spinX),
        scalarFromArg(spinXMultiplier),
        scalarFromArg(spinY),
        scalarFromArg(spinYMultiplier),
        scalarFromArg(spinZ),
        scalarFromArg(spinZMultiplier),
      ]); break;
      case speed | aos: super(ActionType.NodeSpeed, [
        new IntField,
        new IntField,
        new IntField,
      ], [], [
        scalarFromArg(speedZ),
        scalarFromArg(speedZMultiplier),
        scalarFromArg(accelerationY),
      ]); break;
      case speed | randomTurns | aos: super(ActionType.NodeSpeedRandomTurns, [
        new IntField,
        new IntField,
        new IntField(Math.round(turnInterval * 50)),
      ], [], [
        scalarFromArg(speedZ),
        scalarFromArg(speedZMultiplier),
        scalarFromArg(accelerationY),
        scalarFromArg(maxTurnAngle),
      ]); break;
      case speed | partialFollow | aos:
      case speed | partialFollow | randomTurns | aos: super(ActionType.NodeSpeedPartialFollow, [
        new IntField,
        new IntField,
        new IntField(Math.round(turnInterval * 50)),
        new BoolField(followRotation),
      ], [], [
        scalarFromArg(speedZ),
        scalarFromArg(speedZMultiplier),
        scalarFromArg(accelerationY),
        scalarFromArg(maxTurnAngle),
        scalarFromArg(followFactor),
      ]); break;
      case speed | spin | aos: super(ActionType.NodeSpeedSpin, [
        new IntField,
        new IntField,
        new IntField,
        new IntField,
      ], [], [
        scalarFromArg(speedZ),
        scalarFromArg(speedZMultiplier),
        scalarFromArg(accelerationY),
        scalarFromArg(spinX),
        scalarFromArg(spinXMultiplier),
        scalarFromArg(spinY),
        scalarFromArg(spinYMultiplier),
        scalarFromArg(spinZ),
        scalarFromArg(spinZMultiplier),
      ]); break;
      default:
        if (speed && acceleration) {
          throw new Error('Speed Z multiplier is not compatible with acceleration node movement actions.')
        }
        if (spin && (randomTurns || partialFollow)) {
          throw new Error('Spin cannot be used together with random turns or partial follow in node movement actions.')
        }
        throw new Error('Incompatible arguments given to NodeMovement constructor.')
    }
  }

}

export interface ActionWithNumericalFields extends Action {
  fields1: NumericalField[]
  fields2: NumericalField[]
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
  constructor(translation: Vector3PropertyArg = [0, 0, 0], unkField: number = 0) {
    super(ActionType.NodeTranslation, [
      new IntField(unkField)
    ], [], [
      vectorFromArg(translation)
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
  gravity?: ScalarPropertyArg
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
  acceleration?: ScalarPropertyArg
  /**
   * Multiplier for the {@link acceleration} property. Defaults to 1.
   * 
   * This can not be used together with any of the speed properties:
   * - {@link speed}
   * - {@link speedMult}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  accelerationMult?: ScalarPropertyArg
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
  speed?: ScalarPropertyArg
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
  speedMult?: ScalarPropertyArg
  /**
   * The particles will turn a random amount based on this value at intervals
   * defined by {@link turnInterval}. Defaults to 0.
   * 
   * Unless one of the partial follow parameters are set, setting this will
   * produce one of the random turns actions:
   * - {@link ActionType.ParticleSpeedRandomTurns ParticleSpeedRandomTurns}
   * - {@link ActionType.ParticleAccelerationRandomTurns ParticleAccelerationRandomTurns}
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  maxTurnAngle?: ScalarPropertyArg
  /**
   * The particles will turn a random amount based on {@link maxTurnAngle} at
   * this interval. The units are seconds, but due to how the field that stores
   * this value works, the value will be rounded to the nearest 0.02 seconds.
   * Defaults to 0.
   * 
   * Unless one of the partial follow parameters are set, setting this will
   * produce one of the random turns actions:
   * - {@link ActionType.ParticleSpeedRandomTurns ParticleSpeedRandomTurns}
   * - {@link ActionType.ParticleAccelerationRandomTurns ParticleAccelerationRandomTurns}
   */
  turnInterval?: number
  /**
   * Disabling this will make {@link followFactor} only affect translation and
   * not rotation. Defaults to true.
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
  followFactor?: ScalarPropertyArg
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
    let asProp: ScalarPropertyArg, asMultProp: ScalarPropertyArg
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
class NodeAttributes extends Action {

  constructor({
    duration = -1,
    delay = 0,
    attachment = AttachMode.Parent,
    unkField1 = 1,
    unkField3 = 0,
  }: {
    /**
     * The node duration in seconds. Defaults to -1 (infinite).
     * 
     * **Argument**: {@link PropertyArgument.Constant Constant 0}
     */
    duration?: ScalarPropertyArg
    /**
     * The delay before the node becomes active. Defaults to 0.
     */
    delay?: number
    /**
     * Controls how the node is attached to its parent. Defaults to
     * {@link AttachMode.Parent}.
     */
    attachment?: AttachMode
    /**
     * Unknown int. Fields1, index 1. Possibly a boolean field. Defaults to 1.
     */
    unkField1?: number
    /**
     * Unknown float. Fields1, index 3. Possibly a bit field. Defaults to 0.
     */
    unkField3?: number
  } = {}) {
    super(ActionType.NodeAttributes, [
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
class ParticleAttributes extends Action {

  constructor({
    attachment = AttachMode.Parent,
    duration = -1,
  }: {
    /**
     * Controls how the particle is attached to its parent. Defaults to
     * {@link AttachMode.Parent}.
     */
    attachment?: AttachMode
    /**
     * The particle duration in seconds. Defaults to -1 (infinite).
     * 
     * **Argument**: {@link PropertyArgument.Constant Constant 0}
     */
    duration?: ScalarPropertyArg
  } = {}) {
    super(ActionType.ParticleAttributes, [
      new IntField(attachment)
    ], [], [
      scalarFromArg(duration)
    ])
  }

}

export interface ParticleMultiplierParams {
  /**
   * Scales the model uniformly based on {@link scaleX}. The other scale
   * properties in this action have no effect when this is enabled. Defaults to
   * false.
   */
  uniformScale?: boolean
  /**
   * Controls the speed of the particles, but only if the effect has an action
   * in slot 10 that enables acceleration of particles. The direction depends
   * on the emitter shape. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  speed?: ScalarPropertyArg
  /**
   * Multiplier for the scale along the X-axis. If {@link uniformScale} is
   * enabled, this scales the particles uniformly. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  scaleX?: ScalarPropertyArg
  /**
   * Multiplier for the scale along the Y-axis. If {@link uniformScale} is
   * enabled, this property is ignored. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  scaleY?: ScalarPropertyArg
  /**
   * Multiplier for the scale along the Z-axis. If {@link uniformScale} is
   * enabled, this property is ignored. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  scaleZ?: ScalarPropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  color?: Vector4PropertyArg
}
/**
 * Controls various multipliers as well as the speed of particles.
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

  declare fields1: [BoolField]

  constructor({
    uniformScale = false,
    speed = 0,
    scaleX = 1,
    scaleY = 1,
    scaleZ = 1,
    color = [1, 1, 1, 1],
  }: ParticleMultiplierParams = {}) {
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

  /**
   * Scales the model uniformly based on {@link scaleX}. The other scale
   * properties in this action have no effect when this is enabled.
   */
  get uniformScale() { return this.fields1[0].value }
  set uniformScale(value) { this.fields1[0].value = value }

  /**
   * Controls the speed of the particles, but only if the effect has an action
   * in slot 10 that enables acceleration of particles. The direction depends
   * on the emitter shape.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get speed(): ScalarProperty { return this.properties1[0] }
  set speed(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 0, value) }

  /**
   * Multiplier for the scale along the X-axis. If {@link uniformScale} is
   * enabled, this scales the particles uniformly.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get scaleX(): ScalarProperty { return this.properties1[1] }
  set scaleX(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 1, value) }

  /**
   * Multiplier for the scale along the Y-axis. If {@link uniformScale} is
   * enabled, this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get scaleY(): ScalarProperty { return this.properties1[2] }
  set scaleY(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 2, value) }

  /**
   * Multiplier for the scale along the Z-axis. If {@link uniformScale} is
   * enabled, this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get scaleZ(): ScalarProperty { return this.properties1[3] }
  set scaleZ(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 3, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get color(): Vector4Property { return this.properties1[4] }
  set color(value: Vector4PropertyArg) { setPropertyInList(this.properties1, 4, value) }

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
  constructor(duration: ScalarPropertyArg = -1, thresholds: number[] = []) {
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
    if (effectIndices.length === 0) {
      effectIndices.push(0)
    }
    super(ActionType.StateEffectMap, [], [], [], [], [
      new Section10(effectIndices.map(i => new IntField(i)))
    ])
  }

}

/**
 * Used in {@link EffectType.SharedEmitter} to emit all particles from child
 * nodes every time the shared emitter emits something.
 */
class EmitAllParticles extends Action {

  constructor() {
    super(ActionType.EmitAllParticles)
  }

}

/**
 * Used in {@link EffectType.SharedEmitter} to emit a particle from a random
 * child node every time the shared emitter emits something.
 */
class EmitRandomParticles extends Action {

  constructor(...weights: number[]) {
    super(ActionType.EmitRandomParticles, [], [], [], [], [
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
    interval: ScalarPropertyArg = 1,
    perInterval: ScalarPropertyArg = 1,
    totalIntervals: ScalarPropertyArg = -1,
    maxConcurrent: ScalarPropertyArg = -1,
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
    threshold: ScalarPropertyArg = 0.1,
    maxConcurrent: ScalarPropertyArg = 100,
    unkField0: number = 1,
    unkField1: number = 0,
    unkProp: ScalarPropertyArg = -1
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
    radius: ScalarPropertyArg = 1,
    centerWeight: ScalarPropertyArg = 0,
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
    sizeX: ScalarPropertyArg = 1,
    sizeY: ScalarPropertyArg = sizeX instanceof Property ? sizeX.clone() : sizeX,
    centerWeight: ScalarPropertyArg = 0,
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
    radius: ScalarPropertyArg = 1,
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
    sizeX: ScalarPropertyArg = 1,
    sizeY: ScalarPropertyArg = sizeX instanceof Property ? sizeX.clone() : sizeX,
    sizeZ: ScalarPropertyArg = sizeX instanceof Property ? sizeX.clone() : sizeX,
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
    radius: ScalarPropertyArg = 1,
    height: ScalarPropertyArg = 1,
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
  blendMode?: BlendMode | ScalarProperty
  width?: ScalarPropertyArg
  height?: ScalarPropertyArg
  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link color2}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color1?: Vector4PropertyArg
  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link color1}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color2?: Vector4PropertyArg
  /**
   * The color for the "start" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link endColor end color} across the rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  startColor?: Vector4PropertyArg
  /**
   * The color for the "end" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link startColor start color} across the rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  endColor?: Vector4PropertyArg
  widthMultiplier?: ScalarPropertyArg
  heightMultiplier?: ScalarPropertyArg
  /**
   * Color multiplier for the entire rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  color3?: Vector4PropertyArg
  rgbMultiplier?: ScalarPropertyArg
  alphaMultiplier?: ScalarPropertyArg
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
  unkScalarProp2_2?: ScalarPropertyArg
  unkVec4Prop2_3?: Vector4PropertyArg
  unkVec4Prop2_4?: Vector4PropertyArg
  unkVec4Prop2_5?: Vector4PropertyArg
  unkScalarProp2_6?: ScalarPropertyArg
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

  get blendMode() { return this.properties1[0].valueAt(0) as BlendMode }
  set blendMode(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 0, value) }
  get blendModeProperty() { return this.properties1[0] }

  get width() { return this.properties1[1] }
  set width(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 1, value) }

  get height() { return this.properties1[2] }
  set height(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 2, value) }

  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link colorMultiplier2}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get colorMultiplier1() { return this.properties1[3] }
  set colorMultiplier1(value: Vector4PropertyArg) { setPropertyInList(this.properties1, 3, value) }

  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link colorMultiplier1}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get colorMultiplier2() { return this.properties1[4] }
  set colorMultiplier2(value: Vector4PropertyArg) { setPropertyInList(this.properties1, 4, value) }

  /**
   * The color for the "start" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link endColor end color} across the rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get startColor() { return this.properties1[5] }
  set startColor(value: Vector4PropertyArg) { setPropertyInList(this.properties1, 5, value) }

  /**
   * The color for the "end" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link startColor start color} across the rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get endColor() { return this.properties1[6] }
  set endColor(value: Vector4PropertyArg) { setPropertyInList(this.properties1, 6, value) }

  get widthMultiplier() { return this.properties1[7] }
  set widthMultiplier(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 7, value) }

  get heightMultiplier() { return this.properties1[8] }
  set heightMultiplier(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 8, value) }

  /**
   * Color multiplier for the entire rectangle.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get colorMultiplier3() { return this.properties1[9] }
  set colorMultiplier3(value: Vector4PropertyArg) { setPropertyInList(this.properties1, 9, value) }

  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value: ScalarPropertyArg) { setPropertyInList(this.properties2, 0, value) }

  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value: ScalarPropertyArg) { setPropertyInList(this.properties2, 1, value) }

}

export interface BillboardExParams {
  /**
   * Texture ID. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  texture?: ScalarPropertyArg
  /**
   * Blend mode. Defaults to {@link BlendMode.Normal}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  blendMode?: BlendMode | ScalarProperty
  /**
   * X position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetX?: ScalarPropertyArg
  /**
   * Y position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetY?: ScalarPropertyArg
  /**
   * Z position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetZ?: ScalarPropertyArg
  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  width?: ScalarPropertyArg
  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link width} also controls the
   * height, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  height?: ScalarPropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color1?: Vector4PropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  color2?: Vector4PropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  color3?: Vector4PropertyArg
  /**
   * Parts of the particle with less opacity than this threshold will be
   * invisible. The range is 0-255. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaThreshold?: ScalarPropertyArg
  /**
   * Rotation around the X-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedX}
   * - {@link rotationSpeedMultiplierX}
   */
  rotationX?: ScalarPropertyArg
  /**
   * Rotation around the Y-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedY}
   * - {@link rotationSpeedMultiplierY}
   */
  rotationY?: ScalarPropertyArg
  /**
   * Rotation around the Z-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  rotationZ?: ScalarPropertyArg
  /**
   * Rotation speed around the X-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedMultiplierX}
   */
  rotationSpeedX?: ScalarPropertyArg
  /**
   * Rotation speed around the Y-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedMultiplierY}
   */
  rotationSpeedY?: ScalarPropertyArg
  /**
   * Rotation speed around the Z-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  rotationSpeedZ?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the X-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedX}
   */
  rotationSpeedMultiplierX?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the Y-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedY}
   */
  rotationSpeedMultiplierY?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the Z-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedZ}
   */
  rotationSpeedMultiplierZ?: ScalarPropertyArg
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
  depthOffset?: ScalarPropertyArg
  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * Defaults to 0.
   * 
   * Seemingly identical to {@link frameIndexOffset}? The sum of these two
   * properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndex?: ScalarPropertyArg
  /**
   * Seemingly identical to {@link frameIndex}? The sum of these two properties
   * is the actual frame index that gets used. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndexOffset?: ScalarPropertyArg
  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  rgbMultiplier?: ScalarPropertyArg
  /**
   * Alpha multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaMultiplier?: ScalarPropertyArg
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
   * If {@link uniformScale} is enabled, this also affects the height.
   * 
   * See also:
   * - {@link scaleVariationY}
   */
  scaleVariationX?: number
  /**
   * Each particle will pick a random number between this value and 1, and the
   * height of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shorter, down to half
   * height. Setting it to 2 will make them randomly taller, up to double
   * height. Defaults to 1.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the height, and this field is ignored.
   */
  scaleVariationY?: number
  /**
   * If enabled, the particle width-related properties and fields will control
   * both the width and height of the particles, and the height counterparts
   * will be ignored. Defaults to false.
   * 
   * See also:
   * - {@link width}
   * - {@link height}
   * - {@link scaleVariationX}
   * - {@link scaleVariationY}
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
   * Specular texture ID. Defaults to 0.
   * 
   * See also:
   * - {@link lighting}
   * - {@link glossiness}
   * - {@link specularity}
   */
  specular?: number
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
  unkScalarProp1_23?: ScalarPropertyArg
  unkScalarProp1_24?: ScalarPropertyArg
  unkScalarProp2_2?: ScalarPropertyArg
  unkVec4Prop2_3?: Vector4PropertyArg
  unkVec4Prop2_4?: Vector4PropertyArg
  unkVec4Prop2_5?: Vector4PropertyArg
  unkScalarProp2_6?: ScalarPropertyArg
}
/**
 * Particle with a texture that may be animated. This is the most common
 * particle type and it has a lot of useful fields and properties.
 */
class BillboardEx extends CommonAction6xxFields2Action {

  constructor({
    texture = 1,
    blendMode = BlendMode.Normal,
    offsetX = 0,
    offsetY = 0,
    offsetZ = 0,
    width = 1,
    height = 1,
    color1 = [1, 1, 1, 1],
    color2 = [1, 1, 1, 1],
    color3 = [1, 1, 1, 1],
    alphaThreshold = 0,
    rotationX = 0,
    rotationY = 0,
    rotationZ = 0,
    rotationSpeedX = 0,
    rotationSpeedY = 0,
    rotationSpeedZ = 0,
    rotationSpeedMultiplierX = 1,
    rotationSpeedMultiplierY = 1,
    rotationSpeedMultiplierZ = 1,
    depthOffset = 0,
    frameIndex = 0,
    frameIndexOffset = 0,
    rgbMultiplier = 1,
    alphaMultiplier = 1,
    orientation = OrientationMode.Camera,
    normalMap = 0,
    scaleVariationX = 1,
    scaleVariationY = 1,
    uniformScale = false,
    columns = 1,
    totalFrames = 1,
    interpolateFrames = true,
    bloomColor = [1, 1, 1],
    bloomStrength = 0,
    minDistance = -1,
    maxDistance = -1,
    negativeDepthOffset = 0,
    shadowDarkness = 0,
    specular = 0,
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
      /*  2 */ new FloatField(scaleVariationX),
      /*  3 */ new FloatField(scaleVariationY),
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
      /* 33 */ new IntField(specular),
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
      /*  2 */ scalarFromArg(offsetX),
      /*  3 */ scalarFromArg(offsetY),
      /*  4 */ scalarFromArg(offsetZ),
      /*  5 */ scalarFromArg(width),
      /*  6 */ scalarFromArg(height),
      /*  7 */ vectorFromArg(color1),
      /*  8 */ vectorFromArg(color2),
      /*  9 */ vectorFromArg(color3),
      /* 10 */ scalarFromArg(alphaThreshold),
      /* 11 */ scalarFromArg(rotationX),
      /* 12 */ scalarFromArg(rotationY),
      /* 13 */ scalarFromArg(rotationZ),
      /* 14 */ scalarFromArg(rotationSpeedX),
      /* 15 */ scalarFromArg(rotationSpeedMultiplierX),
      /* 16 */ scalarFromArg(rotationSpeedY),
      /* 17 */ scalarFromArg(rotationSpeedMultiplierY),
      /* 18 */ scalarFromArg(rotationSpeedZ),
      /* 19 */ scalarFromArg(rotationSpeedMultiplierZ),
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

  /**
   * Texture ID.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get texture() { return this.properties1[0] }
  set texture(value) { setPropertyInList(this.properties1, 0, value) }

  /**
   * Blend mode. See {@link BlendMode} for more information.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendMode() { return this.properties1[1].valueAt(0) as BlendMode }
  set blendMode(value: BlendMode | ScalarProperty) { setPropertyInList(this.properties1, 1, value) }
  /**
   * Blend mode. See {@link BlendMode} for more information.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendModeProperty() { return this.properties1[1] }

  /**
   * X position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetX() { return this.properties1[2] }
  set offsetX(value) { setPropertyInList(this.properties1, 2, value) }

  /**
   * Y position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetY() { return this.properties1[3] }
  set offsetY(value) { setPropertyInList(this.properties1, 3, value) }

  /**
   * Z position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetZ() { return this.properties1[4] }
  set offsetZ(value) { setPropertyInList(this.properties1, 4, value) }

  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get width() { return this.properties1[5] }
  set width(value) { setPropertyInList(this.properties1, 5, value) }

  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link width} also controls the
   * height, and this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get height() { return this.properties1[6] }
  set height(value) { setPropertyInList(this.properties1, 6, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get color1() { return this.properties1[7] }
  set color1(value) { setPropertyInList(this.properties1, 7, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  get color2() { return this.properties1[8] }
  set color2(value) { setPropertyInList(this.properties1, 8, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  get color3() { return this.properties1[9] }
  set color3(value) { setPropertyInList(this.properties1, 9, value) }

  /**
   * Parts of the particle with less opacity than this threshold will be
   * invisible. The range is 0-255.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaThreshold() { return this.properties1[10] }
  set alphaThreshold(value) { setPropertyInList(this.properties1, 10, value) }

  /**
   * Rotation around the X-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedX}
   * - {@link rotationSpeedMultiplierX}
   */
  get rotationX() { return this.properties1[11] }
  set rotationX(value) { setPropertyInList(this.properties1, 11, value) }

  /**
   * Rotation around the Y-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedY}
   * - {@link rotationSpeedMultiplierY}
   */
  get rotationY() { return this.properties1[12] }
  set rotationY(value) { setPropertyInList(this.properties1, 12, value) }

  /**
   * Rotation around the Z-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  get rotationZ() { return this.properties1[13] }
  set rotationZ(value) { setPropertyInList(this.properties1, 13, value) }

  /**
   * Rotation speed around the X-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedMultiplierX}
   */
  get rotationSpeedX() { return this.properties1[14] }
  set rotationSpeedX(value) { setPropertyInList(this.properties1, 14, value) }

  /**
   * Rotation speed around the Y-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedMultiplierY}
   */
  get rotationSpeedY() { return this.properties1[16] }
  set rotationSpeedY(value) { setPropertyInList(this.properties1, 16, value) }

  /**
   * Rotation speed around the Z-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  get rotationSpeedZ() { return this.properties1[18] }
  set rotationSpeedZ(value) { setPropertyInList(this.properties1, 18, value) }

  /**
   * Multiplier for the rotation speed around the X-axis.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedX}
   */
  get rotationSpeedMultiplierX() { return this.properties1[15] }
  set rotationSpeedMultiplierX(value) { setPropertyInList(this.properties1, 15, value) }

  /**
   * Multiplier for the rotation speed around the Y-axis.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedY}
   */
  get rotationSpeedMultiplierY() { return this.properties1[17] }
  set rotationSpeedMultiplierY(value) { setPropertyInList(this.properties1, 17, value) }

  /**
   * Multiplier for the rotation speed around the Z-axis.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedZ}
   */
  get rotationSpeedMultiplierZ() { return this.properties1[19] }
  set rotationSpeedMultiplierZ(value) { setPropertyInList(this.properties1, 19, value) }

  /**
   * Positive values will make the particle draw in front of objects closer to
   * the camera, while negative values will make it draw behind objects farther
   * away from the camera.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link negativeDepthOffset}
   */
  get depthOffset() { return this.properties1[20] }
  set depthOffset(value) { setPropertyInList(this.properties1, 20, value) }

  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * 
   * Seemingly identical to {@link frameIndexOffset}? The sum of these two
   * properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get frameIndex() { return this.properties1[21] }
  set frameIndex(value) { setPropertyInList(this.properties1, 21, value) }

  /**
   * Seemingly identical to {@link frameIndex}? The sum of these two properties
   * is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get frameIndexOffset() { return this.properties1[22] }
  set frameIndexOffset(value) { setPropertyInList(this.properties1, 22, value) }

  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value) { setPropertyInList(this.properties2, 0, value) }

  /**
   * Alpha multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value) { setPropertyInList(this.properties2, 1, value) }

  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information.
   */
  get orientation() { return this.fields1[0].value as OrientationMode }
  set orientation(value) { this.fields1[0].value = value }

  /**
   * Normal map ID.
   */
  get normalMap() { return this.fields1[1].value as number }
  set normalMap(value) { this.fields1[1].value = value }

  /**
   * Each particle will pick a random number between this value and 1, and the
   * width of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly thinner, down to half
   * width. Setting it to 2 will make them randomly wider, up to double width.
   * 
   * If {@link uniformScale} is enabled, this also affects the height.
   * 
   * See also:
   * - {@link scaleVariationY}
   */
  get scaleVariationX() { return this.fields1[2].value as number }
  set scaleVariationX(value) { this.fields1[2].value = value }

  /**
   * Each particle will pick a random number between this value and 1, and the
   * height of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shorter, down to half
   * height. Setting it to 2 will make them randomly taller, up to double
   * height.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the height, and this field is ignored.
   */
  get scaleVariationY() { return this.fields1[3].value as number }
  set scaleVariationY(value) { this.fields1[3].value = value }

  /**
   * If enabled, the particle width-related properties and fields will control
   * both the width and height of the particles, and the height counterparts
   * will be ignored.
   * 
   * See also:
   * - {@link width}
   * - {@link height}
   * - {@link scaleVariationX}
   * - {@link scaleVariationY}
   */
  get uniformScale() { return this.fields1[4].value as boolean }
  set uniformScale(value) { this.fields1[4].value = value }

  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`.
   * 
   * See also:
   * - {@link BillboardExParams.totalFrames totalFrames}
   */
  get columns() { return this.fields1[6].value as number }
  set columns(value) { this.fields1[6].value = value }

  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture.
   * 
   * See also:
   * - {@link BillboardExParams.columns columns}
   */
  get totalFrames() { return this.fields1[7].value as number }
  set totalFrames(value) { this.fields1[7].value = value }

  /**
   * If enabled, the texture animation will use linear interpolation to mix
   * frames when the frame index is not a whole number. For example, if the
   * frame index is 0.5, enabling this will cause the average of the first two
   * frames to be shown instead of just the first frame.
   * 
   * If disabled, the frame index will just be truncated to get a whole number.
   * 
   * See also:
   * - {@link BillboardExParams.frameIndex frameIndex}
   */
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
   * Specular texture ID. Defaults to 0.
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

export interface MultiTextureBillboardExParams {
  /**
   * Blend mode. Defaults to {@link BlendMode.Normal}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  blendMode?: BlendMode | ScalarProperty
  /**
   * X position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetX?: ScalarPropertyArg
  /**
   * Y position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetY?: ScalarPropertyArg
  /**
   * Z position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetZ?: ScalarPropertyArg
  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  width?: ScalarPropertyArg
  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link width} also controls the
   * height, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  height?: ScalarPropertyArg
  /**
   * Rotation around the X-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedX}
   * - {@link rotationSpeedMultiplierX}
   */
  rotationX?: ScalarPropertyArg
  /**
   * Rotation around the Y-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedY}
   * - {@link rotationSpeedMultiplierY}
   */
  rotationY?: ScalarPropertyArg
  /**
   * Rotation around the Z-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  rotationZ?: ScalarPropertyArg
  /**
   * Rotation speed around the X-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedMultiplierX}
   */
  rotationSpeedX?: ScalarPropertyArg
  /**
   * Rotation speed around the Y-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedMultiplierY}
   */
  rotationSpeedY?: ScalarPropertyArg
  /**
   * Rotation speed around the Z-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  rotationSpeedZ?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the X-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedX}
   */
  rotationSpeedMultiplierX?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the Y-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedY}
   */
  rotationSpeedMultiplierY?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the Z-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedZ}
   */
  rotationSpeedMultiplierZ?: ScalarPropertyArg
  /**
   * Color multiplier for the particle. Seemingly identical to {@link color3}?
   * Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color1?: Vector4PropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  color2?: Vector4PropertyArg
  /**
   * Color multiplier for the particle. Seemingly identical to {@link color1}?
   * Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}.
   */
  color3?: Vector4PropertyArg
  /**
   * Color multiplier for both of the texture layers. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layersColor?: Vector4PropertyArg
  /**
   * Color multiplier for Layer 1. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer1Color?: Vector4PropertyArg
  /**
   * Color multiplier for Layer 2. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer2Color?: Vector4PropertyArg
  /**
   * Parts of the particle with less opacity than this threshold will be
   * invisible. The range is 0-255. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaThreshold?: ScalarPropertyArg
  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * Defaults to 0.
   * 
   * Seemingly identical to {@link frameIndexOffset}? The sum of these two
   * properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link interpolateFrames}
   */
  frameIndex?: ScalarPropertyArg
  /**
   * Seemingly identical to {@link frameIndex}? The sum of these two properties
   * is the actual frame index that gets used. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link interpolateFrames}
   */
  frameIndexOffset?: ScalarPropertyArg
  /**
   * Horiztonal scroll speed for Layer 1. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer1SpeedU?: ScalarPropertyArg
  /**
   * Vertical scroll speed for Layer 1. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer1SpeedV?: ScalarPropertyArg
  /**
   * Horizontal offset for the UV coordinates of Layer 1. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  layer1OffsetU?: ScalarPropertyArg
  /**
   * Vertical offset for the UV coordinates of Layer 1. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  layer1OffsetV?: ScalarPropertyArg
  /**
   * Horizontal scale for the UV coordinates of Layer 1. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer1ScaleU?: ScalarPropertyArg
  /**
   * Vertical scale for the UV coordinates of Layer 1. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer1ScaleV?: ScalarPropertyArg
  /**
   * Horiztonal scroll speed for Layer 2. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer2SpeedU?: ScalarPropertyArg
  /**
   * Vertical scroll speed for Layer 2. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer2SpeedV?: ScalarPropertyArg
  /**
   * Horizontal offset for the UV coordinates of Layer 2. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  layer2OffsetU?: ScalarPropertyArg
  /**
   * Vertical offset for the UV coordinates of Layer 2. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  layer2OffsetV?: ScalarPropertyArg
  /**
   * Horizontal scale for the UV coordinates of Layer 2. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer2ScaleU?: ScalarPropertyArg
  /**
   * Vertical scale for the UV coordinates of Layer 2. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  layer2ScaleV?: ScalarPropertyArg
  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  rgbMultiplier?: ScalarPropertyArg
  /**
   * Alpha multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaMultiplier?: ScalarPropertyArg
  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information. Defaults to
   * {@link OrientationMode.Camera}.
   */
  orientation?: OrientationMode
  /**
   * Mask texture ID. Defaults to 1.
   */
  mask?: number
  /**
   * Layer 1 texture ID. Defaults to 1.
   */
  layer1?: number
  /**
   * Layer 2 texture ID. Defaults to 1.
   */
  layer2?: number
  /**
   * If enabled, the particle width-related properties and fields will control
   * both the width and height of the particles, and the height counterparts
   * will be ignored. Defaults to false.
   * 
   * See also:
   * - {@link width}
   * - {@link height}
   */
  uniformScale?: boolean
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`. Defaults to 1.
   * 
   * See also:
   * - {@link totalFrames}
   */
  columns?: number
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture. Defaults to 1.
   * 
   * See also:
   * - {@link columns}
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
   * - {@link frameIndex}
   * - {@link frameIndexOffset}
   */
  interpolateFrames?: boolean
  /**
   * Controls how the particles should intersect with objects they touch. If
   * disabled, the particles will simply be cut off where they intersect
   * objects. If enabled, they will instead display in front of the object if
   * they are close enough, and will fade out with distance from the object's
   * surface that is blocking the view of the particle. Defaults to true.
   */
  depthBlend?: boolean
  /**
   * Controls the shape of the particles. If disabled, the particles will be
   * rectangular. If enabled, they will be octagonal. Defaults to false.
   */
  octagonal?: boolean
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
   * Specular texture ID. Defaults to 0.
   * 
   * See also:
   * - {@link lighting}
   * - {@link glossiness}
   * - {@link specularity}
   */
  specular?: number
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
}
/**
 * Particle with multiple texture that can scroll.
 */
class MultiTextureBillboardEx extends CommonAction6xxFields2Action {

  constructor({
    orientation = OrientationMode.Camera,
    mask = 1,
    layer1 = 1,
    layer2 = 1,
    uniformScale = false,
    columns = 1,
    totalFrames = 1,
    interpolateFrames = true,
    depthBlend = true,
    octagonal = false,
    bloomColor = [1, 1, 1],
    bloomStrength = 0,
    minDistance = -1,
    maxDistance = -1,
    negativeDepthOffset = 0,
    shadowDarkness = 0,
    specular = 0,
    glossiness = 0.25,
    lighting = LightingMode.Unlit,
    specularity = 0.5,
    blendMode = BlendMode.Normal,
    offsetX = 0,
    offsetY = 0,
    offsetZ = 0,
    width = 1,
    height = 1,
    rotationX = 0,
    rotationY = 0,
    rotationZ = 0,
    rotationSpeedX = 0,
    rotationSpeedY = 0,
    rotationSpeedZ = 0,
    rotationSpeedMultiplierX = 1,
    rotationSpeedMultiplierY = 1,
    rotationSpeedMultiplierZ = 1,
    color1 = [1, 1, 1, 1],
    color2 = [1, 1, 1, 1],
    color3 = [1, 1, 1, 1],
    layersColor = [1, 1, 1, 1],
    layer1Color = [1, 1, 1, 1],
    layer2Color = [1, 1, 1, 1],
    alphaThreshold = 0,
    frameIndex = 0,
    frameIndexOffset = 0,
    layer1SpeedU = 0,
    layer1SpeedV = 0,
    layer1OffsetU = 0,
    layer1OffsetV = 0,
    layer1ScaleU = 1,
    layer1ScaleV = 1,
    layer2SpeedU = 0,
    layer2SpeedV = 0,
    layer2OffsetU = 0,
    layer2OffsetV = 0,
    layer2ScaleU = 1,
    layer2ScaleV = 1,
    rgbMultiplier = 1,
    alphaMultiplier = 1,
  }: MultiTextureBillboardExParams = {}) {
    super(ActionType.MultiTextureBillboardEx, [
      /*  0 */ new IntField(orientation),
      /*  1 */ new IntField(mask),
      /*  2 */ new IntField(layer1),
      /*  3 */ new IntField(layer2),
      /*  4 */ new BoolField(uniformScale),
      /*  5 */ new IntField(0),
      /*  6 */ new IntField(columns),
      /*  7 */ new IntField(totalFrames),
      /*  8 */ new BoolField(interpolateFrames),
      /*  9 */ new IntField(-2),
      /* 10 */ new IntField(-2),
      /* 11 */ new BoolField(depthBlend),
      /* 12 */ new BoolField(octagonal),
      /* 13 */ new IntField(0),
      /* 14 */ new IntField(1),
      /* 15 */ new IntField(1),
      /* 16 */ new IntField(0),
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
      /* 33 */ new IntField(specular),
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
      /* 45 */ new IntField(0),
    ], [
      /*  0 */ scalarFromArg(blendMode),
      /*  1 */ scalarFromArg(offsetX),
      /*  2 */ scalarFromArg(offsetY),
      /*  3 */ scalarFromArg(offsetZ),
      /*  4 */ scalarFromArg(width),
      /*  5 */ scalarFromArg(height),
      /*  6 */ scalarFromArg(rotationX),
      /*  7 */ scalarFromArg(rotationY),
      /*  8 */ scalarFromArg(rotationZ),
      /*  9 */ scalarFromArg(rotationSpeedX),
      /* 10 */ scalarFromArg(rotationSpeedMultiplierX),
      /* 11 */ scalarFromArg(rotationSpeedY),
      /* 12 */ scalarFromArg(rotationSpeedMultiplierY),
      /* 13 */ scalarFromArg(rotationSpeedZ),
      /* 14 */ scalarFromArg(rotationSpeedMultiplierZ),
      /* 15 */ vectorFromArg(color1),
      /* 16 */ vectorFromArg(color2),
      /* 17 */ vectorFromArg(color3),
      /* 18 */ vectorFromArg(layersColor),
      /* 19 */ vectorFromArg(layer1Color),
      /* 20 */ vectorFromArg(layer2Color),
      /* 21 */ scalarFromArg(alphaThreshold),
      /* 22 */ scalarFromArg(frameIndex),
      /* 23 */ scalarFromArg(frameIndexOffset),
      /* 24 */ new ConstantProperty(0),
      /* 25 */ new ConstantProperty(0),
      /* 26 */ new ConstantProperty(0),
      /* 27 */ new ConstantProperty(0),
      /* 28 */ new ConstantProperty(1),
      /* 29 */ new ConstantProperty(1),
      /* 30 */ scalarFromArg(layer1SpeedU),
      /* 31 */ scalarFromArg(layer1SpeedV),
      /* 32 */ scalarFromArg(layer1OffsetU),
      /* 33 */ scalarFromArg(layer1OffsetV),
      /* 34 */ scalarFromArg(layer1ScaleU),
      /* 35 */ scalarFromArg(layer1ScaleV),
      /* 30 */ scalarFromArg(layer2SpeedU),
      /* 31 */ scalarFromArg(layer2SpeedV),
      /* 38 */ scalarFromArg(layer2OffsetU),
      /* 39 */ scalarFromArg(layer2OffsetV),
      /* 34 */ scalarFromArg(layer2ScaleU),
      /* 35 */ scalarFromArg(layer2ScaleV),
    ], [
      /*  0 */ scalarFromArg(rgbMultiplier),
      /*  1 */ scalarFromArg(alphaMultiplier),
      /*  2 */ new ConstantProperty(0),
      /*  3 */ new ConstantProperty(1, 1, 1, 1),
      /*  4 */ new ConstantProperty(1, 1, 1, 1),
      /*  5 */ new ConstantProperty(1, 1, 1, 1),
      /*  6 */ new ConstantProperty(0),
    ])
  }

  /**
   * Blend mode. See {@link BlendMode} for more information.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendMode() { return this.properties1[0].valueAt(0) as BlendMode }
  set blendMode(value: BlendMode | ScalarProperty) { setPropertyInList(this.properties1, 0, value) }
  /**
   * Blend mode. See {@link BlendMode} for more information.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendModeProperty() { return this.properties1[0] }

  /**
   * X position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetX() { return this.properties1[1] }
  set offsetX(value) { setPropertyInList(this.properties1, 1, value) }

  /**
   * Y position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetY() { return this.properties1[2] }
  set offsetY(value) { setPropertyInList(this.properties1, 2, value) }

  /**
   * Z position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetZ() { return this.properties1[3] }
  set offsetZ(value) { setPropertyInList(this.properties1, 3, value) }

  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get width() { return this.properties1[4] }
  set width(value) { setPropertyInList(this.properties1, 4, value) }

  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link width} also controls the
   * height, and this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get height() { return this.properties1[5] }
  set height(value) { setPropertyInList(this.properties1, 5, value) }

  /**
   * Rotation around the X-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedX}
   * - {@link rotationSpeedMultiplierX}
   */
  get rotationX() { return this.properties1[6] }
  set rotationX(value) { setPropertyInList(this.properties1, 6, value) }

  /**
   * Rotation around the Y-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedY}
   * - {@link rotationSpeedMultiplierY}
   */
  get rotationY() { return this.properties1[7] }
  set rotationY(value) { setPropertyInList(this.properties1, 7, value) }

  /**
   * Rotation around the Z-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  get rotationZ() { return this.properties1[8] }
  set rotationZ(value) { setPropertyInList(this.properties1, 8, value) }

  /**
   * Rotation speed around the X-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedMultiplierX}
   */
  get rotationSpeedX() { return this.properties1[9] }
  set rotationSpeedX(value) { setPropertyInList(this.properties1, 9, value) }

  /**
   * Rotation speed around the Y-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedMultiplierY}
   */
  get rotationSpeedY() { return this.properties1[11] }
  set rotationSpeedY(value) { setPropertyInList(this.properties1, 11, value) }

  /**
   * Rotation speed around the Z-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  get rotationSpeedZ() { return this.properties1[13] }
  set rotationSpeedZ(value) { setPropertyInList(this.properties1, 13, value) }

  /**
   * Multiplier for the rotation speed around the X-axis.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedX}
   */
  get rotationSpeedMultiplierX() { return this.properties1[10] }
  set rotationSpeedMultiplierX(value) { setPropertyInList(this.properties1, 10, value) }

  /**
   * Multiplier for the rotation speed around the Y-axis.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedY}
   */
  get rotationSpeedMultiplierY() { return this.properties1[12] }
  set rotationSpeedMultiplierY(value) { setPropertyInList(this.properties1, 12, value) }

  /**
   * Multiplier for the rotation speed around the Z-axis.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedZ}
   */
  get rotationSpeedMultiplierZ() { return this.properties1[14] }
  set rotationSpeedMultiplierZ(value) { setPropertyInList(this.properties1, 14, value) }

  /**
   * Color multiplier for the particle. Seemingly identical to {@link color3}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get color1() { return this.properties1[15] }
  set color1(value) { setPropertyInList(this.properties1, 15, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  get color2() { return this.properties1[16] }
  set color2(value) { setPropertyInList(this.properties1, 16, value) }

  /**
   * Color multiplier for the particle. Seemingly identical to {@link color1}?
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}.
   */
  get color3() { return this.properties1[17] }
  set color3(value) { setPropertyInList(this.properties1, 17, value) }

  /**
   * Color multiplier for both of the texture layers.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layersColor() { return this.properties1[18] }
  set layersColor(value) { setPropertyInList(this.properties1, 18, value) }

  /**
   * Color multiplier for Layer 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer1Color() { return this.properties1[19] }
  set layer1Color(value) { setPropertyInList(this.properties1, 19, value) }

  /**
   * Color multiplier for Layer 2.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer2Color() { return this.properties1[20] }
  set layer2Color(value) { setPropertyInList(this.properties1, 20, value) }

  /**
   * Parts of the particle with less opacity than this threshold will be
   * invisible. The range is 0-255.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaThreshold() { return this.properties1[21] }
  set alphaThreshold(value) { setPropertyInList(this.properties1, 21, value) }

  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * 
   * Seemingly identical to {@link frameIndexOffset}? The sum of these two
   * properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link interpolateFrames}
   */
  get frameIndex() { return this.properties1[22] }
  set frameIndex(value) { setPropertyInList(this.properties1, 22, value) }

  /**
   * Seemingly identical to {@link frameIndex}? The sum of these two properties
   * is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link interpolateFrames}
   */
  get frameIndexOffset() { return this.properties1[23] }
  set frameIndexOffset(value) { setPropertyInList(this.properties1, 23, value) }

  /**
   * Horiztonal scroll speed for Layer 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer1SpeedU() { return this.properties1[30] }
  set layer1SpeedU(value) { setPropertyInList(this.properties1, 30, value) }

  /**
   * Vertical scroll speed for Layer 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer1SpeedV() { return this.properties1[31] }
  set layer1SpeedV(value) { setPropertyInList(this.properties1, 31, value) }

  /**
   * Horizontal offset for the UV coordinates of Layer 1.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get layer1OffsetU() { return this.properties1[32] }
  set layer1OffsetU(value) { setPropertyInList(this.properties1, 32, value) }

  /**
   * Vertical offset for the UV coordinates of Layer 1.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get layer1OffsetV() { return this.properties1[33] }
  set layer1OffsetV(value) { setPropertyInList(this.properties1, 33, value) }

  /**
   * Horizontal scale for the UV coordinates of Layer 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer1ScaleU() { return this.properties1[34] }
  set layer1ScaleU(value) { setPropertyInList(this.properties1, 34, value) }

  /**
   * Vertical scale for the UV coordinates of Layer 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer1ScaleV() { return this.properties1[35] }
  set layer1ScaleV(value) { setPropertyInList(this.properties1, 35, value) }

  /**
   * Horiztonal scroll speed for Layer 2.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer2SpeedU() { return this.properties1[36] }
  set layer2SpeedU(value) { setPropertyInList(this.properties1, 36, value) }

  /**
   * Vertical scroll speed for Layer 2.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer2SpeedV() { return this.properties1[37] }
  set layer2SpeedV(value) { setPropertyInList(this.properties1, 37, value) }

  /**
   * Horizontal offset for the UV coordinates of Layer 2.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get layer2OffsetU() { return this.properties1[38] }
  set layer2OffsetU(value) { setPropertyInList(this.properties1, 38, value) }

  /**
   * Vertical offset for the UV coordinates of Layer 2.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get layer2OffsetV() { return this.properties1[39] }
  set layer2OffsetV(value) { setPropertyInList(this.properties1, 39, value) }

  /**
   * Horizontal scale for the UV coordinates of Layer 2.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer2ScaleU() { return this.properties1[40] }
  set layer2ScaleU(value) { setPropertyInList(this.properties1, 40, value) }

  /**
   * Vertical scale for the UV coordinates of Layer 2.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get layer2ScaleV() { return this.properties1[41] }
  set layer2ScaleV(value) { setPropertyInList(this.properties1, 41, value) }

  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value) { setPropertyInList(this.properties2, 0, value) }

  /**
   * Alpha multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value) { setPropertyInList(this.properties2, 1, value) }

  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information.
   */
  get orientation() { return this.fields1[0].value as OrientationMode }
  set orientation(value) { this.fields1[0].value = value }

  /**
   * Mask texture ID.
   */
  get mask() { return this.fields1[1].value as number }
  set mask(value) { this.fields1[1].value = value }

  /**
   * Layer 1 texture ID.
   */
  get layer1() { return this.fields1[2].value as number }
  set layer1(value) { this.fields1[2].value = value }

  /**
   * Layer 2 texture ID.
   */
  get layer2() { return this.fields1[3].value as number }
  set layer2(value) { this.fields1[3].value = value }

  /**
   * If enabled, the particle width-related properties and fields will control
   * both the width and height of the particles, and the height counterparts
   * will be ignored.
   * 
   * See also:
   * - {@link width}
   * - {@link height}
   */
  get uniformScale() { return this.fields1[4].value as boolean }
  set uniformScale(value) { this.fields1[4].value = value }

  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`.
   * 
   * See also:
   * - {@link totalFrames}
   */
  get columns() { return this.fields1[6].value as number }
  set columns(value) { this.fields1[6].value = value }

  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture.
   * 
   * See also:
   * - {@link columns}
   */
  get totalFrames() { return this.fields1[7].value as number }
  set totalFrames(value) { this.fields1[7].value = value }

  /**
   * If enabled, the texture animation will use linear interpolation to mix
   * frames when the frame index is not a whole number. For example, if the
   * frame index is 0.5, enabling this will cause the average of the first two
   * frames to be shown instead of just the first frame.
   * 
   * If disabled, the frame index will just be truncated to get a whole number.
   * 
   * See also:
   * - {@link frameIndex}
   * - {@link frameIndexOffset}
   */
  get interpolateFrames() { return this.fields1[8].value as number }
  set interpolateFrames(value) { this.fields1[8].value = value }

  /**
   * Controls how the particles should intersect with objects they touch. If
   * disabled, the particles will simply be cut off where they intersect
   * objects. If enabled, they will instead display in front of the object if
   * they are close enough, and will fade out with distance from the object's
   * surface that is blocking the view of the particle.
   */
  get depthBlend() { return this.fields1[11].value as boolean }
  set depthBlend(value) { this.fields1[11].value = value }

  /**
   * Controls the shape of the particles. If disabled, the particles will be
   * rectangular. If enabled, they will be octagonal.
   */
  get octagonal() { return this.fields1[12].value as boolean }
  set octagonal(value) { this.fields1[12].value = value }

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
   * Specular texture ID. Defaults to 0.
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

export interface ModelParams {
  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information. Defaults to
   * {@link OrientationMode.ParentNegativeZ}.
   */
  orientation?: OrientationMode
  /**
   * Each particle will pick a random number between this value and 1, and the
   * width of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly thinner, down to half
   * width. Setting it to 2 will make them randomly wider, up to double width.
   * Defaults to 1.
   * 
   * If {@link uniformScale} is enabled, this also affects the height and
   * depth.
   */
  scaleVariationX?: number
  /**
   * Each particle will pick a random number between this value and 1, and the
   * height of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shorter, down to half
   * height. Setting it to 2 will make them randomly taller, up to double
   * height. Defaults to 1.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the height, and this field is ignored.
   */
  scaleVariationY?: number
  /**
   * Each particle will pick a random number between this value and 1, and the
   * depth of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shallower, down to
   * half depth. Setting it to 2 will make them randomly deeper, up to double
   * depth. Defaults to 1.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the depth, and this field is ignored.
   */
  scaleVariationZ?: number
  /**
   * If enabled, the particle X scale-related properties and fields will
   * control the scale in all axes, and the Y and Z counterparts will be
   * ignored. Defaults to false.
   * 
   * See also:
   * - {@link sizeX}
   * - {@link sizeY}
   * - {@link sizeZ}
   * - {@link scaleVariationX}
   * - {@link scaleVariationY}
   * - {@link scaleVariationZ}
   */
  uniformScale?: boolean
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`. Defaults to 1.
   * 
   * Setting this to any value other thn 1 will disable UV offset properties:
   * - {@link offsetU}
   * - {@link offsetV}
   * - {@link speedU}
   * - {@link speedV}
   * 
   * See also:
   * - {@link totalFrames}
   */
  columns?: number
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture. Defaults to 1.
   * 
   * Setting this to any value other thn 1 will disable UV offset properties:
   * - {@link offsetU}
   * - {@link offsetV}
   * - {@link speedU}
   * - {@link speedV}
   * 
   * See also:
   * - {@link columns}
   */
  totalFrames?: number
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
   * Controls how the particles are lit. See {@link LightingMode} for more
   * information. Defaults to {@link LightingMode.Lit Lit}.
   */
  lighting?: LightingMode
  /**
   * The ID of the model to use. Defaults to 80201.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  model?: ScalarPropertyArg
  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link scaleVariationX}
   */
  sizeX?: ScalarPropertyArg
  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link sizeX} also controls the
   * height, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link scaleVariationY}
   */
  sizeY?: ScalarPropertyArg
  /**
   * The depth of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link sizeX} also controls the
   * depth, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link scaleVariationY}
   */
  sizeZ?: ScalarPropertyArg
  /**
   * Rotation around the X-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedX}
   * - {@link rotationSpeedMultiplierX}
   */
  rotationX?: ScalarPropertyArg
  /**
   * Rotation around the Y-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedY}
   * - {@link rotationSpeedMultiplierY}
   */
  rotationY?: ScalarPropertyArg
  /**
   * Rotation around the Z-axis in degrees. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  rotationZ?: ScalarPropertyArg
  /**
   * Rotation speed around the X-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedMultiplierX}
   */
  rotationSpeedX?: ScalarPropertyArg
  /**
   * Rotation speed around the Y-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedMultiplierY}
   */
  rotationSpeedY?: ScalarPropertyArg
  /**
   * Rotation speed around the Z-axis in degrees per second. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  rotationSpeedZ?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the X-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedX}
   */
  rotationSpeedMultiplierX?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the Y-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedY}
   */
  rotationSpeedMultiplierY?: ScalarPropertyArg
  /**
   * Multiplier for the rotation speed around the Z-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedZ}
   */
  rotationSpeedMultiplierZ?: ScalarPropertyArg
  /**
   * Blend mode. Defaults to {@link BlendMode.Normal}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  blendMode?: BlendMode | ScalarProperty
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color1?: Vector4PropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  color2?: Vector4PropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  color3?: Vector4PropertyArg
  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * Defaults to 0.
   * 
   * Seemingly identical to {@link frameIndexOffset}? The sum of these two
   * properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndex?: ScalarPropertyArg
  /**
   * Seemingly identical to {@link frameIndex}? The sum of these two properties
   * is the actual frame index that gets used. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndexOffset?: ScalarPropertyArg
  /**
   * Horizontal offset for the UV coordinates of the model. Defaults to 0.
   * 
   * If the texture is an animation sheet that is split up into multiple frames
   * using {@link columns} and/or {@link totalFrames}, this property has no
   * effect.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  offsetU?: ScalarPropertyArg
  /**
   * Vertical offset for the UV coordinates of the model. Defaults to 0.
   * 
   * If the texture is an animation sheet that is split up into multiple frames
   * using {@link columns} and/or {@link totalFrames}, this property has no
   * effect.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  offsetV?: ScalarPropertyArg
  /**
   * Horiztonal scroll speed for the model's texture. Defaults to 0.
   * 
   * If the texture is an animation sheet that is split up into multiple frames
   * using {@link columns} and/or {@link totalFrames}, this property has no
   * effect.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  speedU?: ScalarPropertyArg
  /**
   * Multiplier for {@link speedU}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  speedUMultiplier?: ScalarPropertyArg
  /**
   * Vertical scroll speed for the model's texture. Defaults to 0.
   * 
   * If the texture is an animation sheet that is split up into multiple frames
   * using {@link columns} and/or {@link totalFrames}, this property has no
   * effect.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  speedV?: ScalarPropertyArg
  /**
   * Multiplier for {@link speedV}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  speedVMultiplier?: ScalarPropertyArg
  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  rgbMultiplier?: ScalarPropertyArg
  /**
   * Alpha multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaMultiplier?: ScalarPropertyArg
}
/**
 * Particle with a 3D model.
 */
class Model extends CommonAction6xxFields2Action {

  constructor({
    orientation = OrientationMode.ParentNegativeZ,
    scaleVariationX = 1,
    scaleVariationY = 1,
    scaleVariationZ = 1,
    uniformScale = false,
    columns = 1,
    totalFrames = 1,
    bloomColor = [1, 1, 1],
    bloomStrength = 0,
    minDistance = -1,
    maxDistance = -1,
    lighting = LightingMode.Lit,
    model = 80201,
    sizeX = 1,
    sizeY = 1,
    sizeZ = 1,
    rotationX = 0,
    rotationY = 0,
    rotationZ = 0,
    rotationSpeedX = 0,
    rotationSpeedY = 0,
    rotationSpeedZ = 0,
    rotationSpeedMultiplierX = 1,
    rotationSpeedMultiplierY = 1,
    rotationSpeedMultiplierZ = 1,
    blendMode = BlendMode.Normal,
    color1 = [1, 1, 1, 1],
    color2 = [1, 1, 1, 1],
    color3 = [1, 1, 1, 1],
    frameIndex = 0,
    frameIndexOffset = 0,
    offsetU = 0,
    offsetV = 0,
    speedU = 0,
    speedUMultiplier = 1,
    speedV = 0,
    speedVMultiplier = 1,
    rgbMultiplier = 1,
    alphaMultiplier = 1,
  }: ModelParams = {}) {
    super(ActionType.Model, [
      /*  0 */ new IntField(orientation),
      /*  1 */ new FloatField(scaleVariationX),
      /*  2 */ new FloatField(scaleVariationY),
      /*  3 */ new FloatField(scaleVariationZ),
      /*  4 */ new BoolField(uniformScale),
      /*  5 */ new IntField(columns),
      /*  6 */ new IntField(totalFrames),
      /*  7 */ new IntField(-2),
      /*  8 */ new IntField(-2),
      /*  9 */ new BoolField(true),
      /* 10 */ new BoolField(true),
      /* 11 */ new IntField(1),
      /* 12 */ new IntField(0),
      /* 13 */ new IntField(0),
      /* 14 */ new IntField(1),
      /* 15 */ new FloatField(1),
      /* 16 */ new IntField(0),
      /* 17 */ new IntField(1),
      /* 18 */ new IntField(1),
      /* 19 */ new IntField(0),
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
      /* 24 */ new FloatField(0),
      /* 25 */ new FloatField(1),
      /* 26 */ new FloatField(0),
      /* 27 */ new IntField(1),
      /* 28 */ new IntField(0),
      /* 29 */ new FloatField(0),
      /* 30 */ new FloatField(0),
      /* 31 */ new IntField(0),
      /* 32 */ new IntField(1),
      /* 33 */ new IntField(0),
      /* 34 */ new FloatField(0),
      /* 35 */ new IntField(lighting),
      /* 36 */ new IntField(-2),
      /* 37 */ new IntField(0),
    ], [
      /*  0 */ scalarFromArg(model),
      /*  1 */ scalarFromArg(sizeX),
      /*  2 */ scalarFromArg(sizeY),
      /*  3 */ scalarFromArg(sizeZ),
      /*  4 */ scalarFromArg(rotationX),
      /*  5 */ scalarFromArg(rotationY),
      /*  6 */ scalarFromArg(rotationZ),
      /*  7 */ scalarFromArg(rotationSpeedX),
      /*  8 */ scalarFromArg(rotationSpeedMultiplierX),
      /*  9 */ scalarFromArg(rotationSpeedY),
      /* 10 */ scalarFromArg(rotationSpeedMultiplierY),
      /* 11 */ scalarFromArg(rotationSpeedZ),
      /* 12 */ scalarFromArg(rotationSpeedMultiplierZ),
      /* 13 */ scalarFromArg(blendMode),
      /* 14 */ vectorFromArg(color1),
      /* 15 */ vectorFromArg(color2),
      /* 16 */ vectorFromArg(color3),
      /* 17 */ new ConstantProperty(0),
      /* 18 */ scalarFromArg(frameIndex),
      /* 19 */ scalarFromArg(frameIndexOffset),
      /* 20 */ scalarFromArg(offsetU),
      /* 21 */ scalarFromArg(offsetV),
      /* 22 */ scalarFromArg(speedU),
      /* 23 */ scalarFromArg(speedUMultiplier),
      /* 24 */ scalarFromArg(speedV),
      /* 25 */ scalarFromArg(speedVMultiplier),
      /* 26 */ new ConstantProperty(0),
    ], [
      /*  0 */ scalarFromArg(rgbMultiplier),
      /*  1 */ scalarFromArg(alphaMultiplier),
      /*  2 */ new ConstantProperty(0),
      /*  3 */ new ConstantProperty(1, 1, 1, 1),
      /*  4 */ new ConstantProperty(1, 1, 1, 1),
      /*  5 */ new ConstantProperty(1, 1, 1, 1),
      /*  6 */ new ConstantProperty(0),
    ])
  }

  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information.
   */
  get orientation() { return this.fields1[0].value as OrientationMode }
  set orientation(value) { this.fields1[0].value = value }

  /**
   * Each particle will pick a random number between this value and 1, and the
   * width of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly thinner, down to half
   * width. Setting it to 2 will make them randomly wider, up to double width.
   * 
   * If {@link uniformScale} is enabled, this also affects the height and
   * depth.
   */
  get scaleVariationX() { return this.fields1[1].value as number }
  set scaleVariationX(value) { this.fields1[1].value = value }

  /**
   * Each particle will pick a random number between this value and 1, and the
   * height of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shorter, down to half
   * height. Setting it to 2 will make them randomly taller, up to double
   * height.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the height, and this field is ignored.
   */
  get scaleVariationY() { return this.fields1[2].value as number }
  set scaleVariationY(value) { this.fields1[2].value = value }

  /**
   * Each particle will pick a random number between this value and 1, and the
   * depth of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shallower, down to
   * half depth. Setting it to 2 will make them randomly deeper, up to double
   * depth.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the depth, and this field is ignored.
   */
  get scaleVariationZ() { return this.fields1[3].value as number }
  set scaleVariationZ(value) { this.fields1[3].value = value }

  /**
   * If enabled, the particle X scale-related properties and fields will
   * control the scale in all axes, and the Y and Z counterparts will be
   * ignored.
   * 
   * See also:
   * - {@link sizeX}
   * - {@link sizeY}
   * - {@link sizeZ}
   * - {@link scaleVariationX}
   * - {@link scaleVariationY}
   * - {@link scaleVariationZ}
   */
  get uniformScale() { return this.fields1[4].value as boolean }
  set uniformScale(value) { this.fields1[4].value = value }

  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`.
   * 
   * Setting this to any value other thn 1 will disable UV offset properties:
   * - {@link offsetU}
   * - {@link offsetV}
   * - {@link speedU}
   * - {@link speedV}
   * 
   * See also:
   * - {@link totalFrames}
   */
  get columns() { return this.fields1[5].value as number }
  set columns(value) { this.fields1[5].value = value }

  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture.
   * 
   * Setting this to any value other thn 1 will disable UV offset properties:
   * - {@link offsetU}
   * - {@link offsetV}
   * - {@link speedU}
   * - {@link speedV}
   * 
   * See also:
   * - {@link columns}
   */
  get totalFrames() { return this.fields1[6].value as number }
  set totalFrames(value) { this.fields1[6].value = value }

  /**
   * Controls how the particles are lit. See {@link LightingMode} for more
   * information.
   */
  get lighting() { return this.fields2[35].value as LightingMode }
  set lighting(value) { this.fields2[35].value = value }

  /**
   * The ID of the model to use.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get model() { return this.properties1[0].valueAt(0) as number }
  set model(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 0, value) }
  /**
   * The ID of the model to use.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get modelProperty() { return this.properties1[0] }

  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link scaleVariationX}
   */
  get sizeX() { return this.properties1[1] }
  set sizeX(value) { setPropertyInList(this.properties1, 1, value) }

  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link sizeX} also controls the
   * height, and this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link scaleVariationY}
   */
  get sizeY() { return this.properties1[2] }
  set sizeY(value) { setPropertyInList(this.properties1, 2, value) }

  /**
   * The depth of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link sizeX} also controls the
   * depth, and this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link scaleVariationY}
   */
  get sizeZ() { return this.properties1[3] }
  set sizeZ(value) { setPropertyInList(this.properties1, 3, value) }

  /**
   * Rotation around the X-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedX}
   * - {@link rotationSpeedMultiplierX}
   */
  get rotationX() { return this.properties1[4] }
  set rotationX(value) { setPropertyInList(this.properties1, 4, value) }

  /**
   * Rotation around the Y-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedY}
   * - {@link rotationSpeedMultiplierY}
   */
  get rotationY() { return this.properties1[5] }
  set rotationY(value) { setPropertyInList(this.properties1, 5, value) }

  /**
   * Rotation around the Z-axis in degrees.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   * 
   * See also:
   * - {@link rotationSpeedZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  get rotationZ() { return this.properties1[6] }
  set rotationZ(value) { setPropertyInList(this.properties1, 6, value) }

  /**
   * Rotation speed around the X-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedMultiplierX}
   */
  get rotationSpeedX() { return this.properties1[7] }
  set rotationSpeedX(value) { setPropertyInList(this.properties1, 7, value) }

  /**
   * Rotation speed around the Y-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedMultiplierY}
   */
  get rotationSpeedY() { return this.properties1[9] }
  set rotationSpeedY(value) { setPropertyInList(this.properties1, 9, value) }

  /**
   * Rotation speed around the Z-axis in degrees per second.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedMultiplierZ}
   */
  get rotationSpeedZ() { return this.properties1[11] }
  set rotationSpeedZ(value) { setPropertyInList(this.properties1, 11, value) }

  /**
   * Multiplier for the rotation speed around the X-axis.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationX}
   * - {@link rotationSpeedX}
   */
  get rotationSpeedMultiplierX() { return this.properties1[8] }
  set rotationSpeedMultiplierX(value) { setPropertyInList(this.properties1, 8, value) }

  /**
   * Multiplier for the rotation speed around the Y-axis. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationY}
   * - {@link rotationSpeedY}
   */
  get rotationSpeedMultiplierY() { return this.properties1[10] }
  set rotationSpeedMultiplierY(value) { setPropertyInList(this.properties1, 10, value) }

  /**
   * Multiplier for the rotation speed around the Z-axis.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   * 
   * See also:
   * - {@link rotationZ}
   * - {@link rotationSpeedZ}
   */
  get rotationSpeedMultiplierZ() { return this.properties1[12] }
  set rotationSpeedMultiplierZ(value) { setPropertyInList(this.properties1, 12, value) }

  /**
   * Blend mode.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendMode() { return this.properties1[13].valueAt(0) as BlendMode }
  set blendMode(value: BlendMode | ScalarProperty) { setPropertyInList(this.properties1, 13, value) }
  /**
   * Blend mode.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendModeProperty() { return this.properties1[13] }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get color1() { return this.properties1[14] }
  set color1(value) { setPropertyInList(this.properties1, 14, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  get color2() { return this.properties1[15] }
  set color2(value) { setPropertyInList(this.properties1, 15, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  get color3() { return this.properties1[16] }
  set color3(value) { setPropertyInList(this.properties1, 16, value) }

  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * 
   * Seemingly identical to {@link frameIndexOffset}? The sum of these two
   * properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get frameIndex() { return this.properties1[18] }
  set frameIndex(value) { setPropertyInList(this.properties1, 18, value) }

  /**
   * Seemingly identical to {@link frameIndex}? The sum of these two properties
   * is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get frameIndexOffset() { return this.properties1[19] }
  set frameIndexOffset(value) { setPropertyInList(this.properties1, 19, value) }

  /**
   * Horizontal offset for the UV coordinates of the model.
   * 
   * If the texture is an animation sheet that is split up into multiple frames
   * using {@link columns} and/or {@link totalFrames}, this property has no
   * effect.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get offsetU() { return this.properties1[20] }
  set offsetU(value) { setPropertyInList(this.properties1, 20, value) }

  /**
   * Vertical offset for the UV coordinates of the model.
   * 
   * If the texture is an animation sheet that is split up into multiple frames
   * using {@link columns} and/or {@link totalFrames}, this property has no
   * effect.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get offsetV() { return this.properties1[21] }
  set offsetV(value) { setPropertyInList(this.properties1, 21, value) }

  /**
   * Horizontal scroll speed for the model's texture.
   * 
   * If the texture is an animation sheet that is split up into multiple frames
   * using {@link columns} and/or {@link totalFrames}, this property has no
   * effect.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get speedU() { return this.properties1[22] }
  set speedU(value) { setPropertyInList(this.properties1, 22, value) }

  /**
   * Multiplier for {@link speedU}.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get speedUMultiplier() { return this.properties1[23] }
  set speedUMultiplier(value) { setPropertyInList(this.properties1, 23, value) }

  /**
   * Vertical scroll speed for the model's texture.
   * 
   * If the texture is an animation sheet that is split up into multiple frames
   * using {@link columns} and/or {@link totalFrames}, this property has no
   * effect.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get speedV() { return this.properties1[24] }
  set speedV(value) { setPropertyInList(this.properties1, 24, value) }

  /**
   * Multiplier for {@link speedV}.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get speedVMultiplier() { return this.properties1[25] }
  set speedVMultiplier(value) { setPropertyInList(this.properties1, 25, value) }

  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value) { setPropertyInList(this.properties2, 0, value) }

  /**
   * Alpha multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value) { setPropertyInList(this.properties2, 1, value) }

}

export interface TracerParams {
  /**
   * Controls the orientation mode for the trail. Note that this is **not**
   * {@link OrientationMode} - It works differently for this action, and not
   * all of the values have been documented yet. Defaults to 1.
   */
  orientation?: number
  /**
   * The trail is made up of multiple quads, or *segments*. This controls how
   * many seconds to wait between new segments being created. Lower values
   * produce a smoother trail. Defaults to 0.
   */
  segmentInterval?: number
  /**
   * The trail is made up of multiple quads, or *segments*. This controls how
   * long each segment should last in seconds. Defaults to 1.
   */
  segmentDuration?: number
  /**
   * The trail is made up of multiple quads, or *segments*. This controls how
   * many segments may exist at the same time. Defaults to 50.
   */
  concurrentSegments?: number
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`. Defaults to 1.
   * 
   * See also:
   * - {@link totalFrames}
   */
  columns?: number
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture. Defaults to 1.
   * 
   * See also:
   * - {@link columns}
   */
  totalFrames?: number
  /**
   * Controls whether or not the UV of the trail should be attached to the node
   * or not. If it is attached, the texture will slide along the segments to
   * follow the source wherever it moves, as if it was a flag attached to a
   * pole. If it is not attached, the texture will stay where it was when the
   * segment was created, like a skid mark on a road where the road is the
   * segments and the mark is the texture, it wouldn't follow the car/node.
   * Defaults to false.
   */
  attachedUV?: boolean
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
   * Specular texture ID. Defaults to 0.
   * 
   * See also:
   * - {@link lighting}
   * - {@link glossiness}
   * - {@link specularity}
   */
  specular?: number
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
  /**
   * The ID of the texture for the trail. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  texture?: ScalarPropertyArg
  /**
   * Blend mode. Defaults to {@link BlendMode.Normal}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  blendMode?: ScalarPropertyArg
  /**
   * The length of the trail source. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  length?: ScalarPropertyArg
  /**
   * Multiplier for {@link length}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  lengthMultiplier?: ScalarPropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color1?: Vector4PropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  color2?: Vector4PropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  color3?: Vector4PropertyArg
  /**
   * Parts of the particle with less opacity than this threshold will be
   * invisible. The range is 0-255. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaThreshold?: ScalarPropertyArg
  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * Defaults to 0.
   * 
   * Seemingly identical to {@link frameIndexOffset}? The sum of these two
   * properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndex?: ScalarPropertyArg
  /**
   * Seemingly identical to {@link frameIndex}? The sum of these two properties
   * is the actual frame index that gets used. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndexOffset?: ScalarPropertyArg
  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  rgbMultiplier?: ScalarPropertyArg
  /**
   * Alpha multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaMultiplier?: ScalarPropertyArg
}
/**
 * Creates a trail behind moving effects.
 */
class Tracer extends CommonAction6xxFields2Action {

  constructor({
    orientation = 1,
    segmentInterval = 0,
    segmentDuration = 1,
    concurrentSegments = 50,
    columns = 1,
    totalFrames = 1,
    attachedUV = false,
    bloomColor = [1, 1, 1],
    bloomStrength = 0,
    minDistance = -1,
    maxDistance = -1,
    negativeDepthOffset = 0,
    shadowDarkness = 0,
    specular = 0,
    glossiness = 0.25,
    lighting = LightingMode.Unlit,
    specularity = 0.5,
    texture = 1,
    blendMode = BlendMode.Normal,
    length = 1,
    lengthMultiplier = 1,
    color1 = [1, 1, 1, 1],
    color2 = [1, 1, 1, 1],
    color3 = [1, 1, 1, 1],
    alphaThreshold = 0,
    frameIndex = 0,
    frameIndexOffset = 0,
    rgbMultiplier = 1,
    alphaMultiplier = 1,
  }: TracerParams = {}) {
    super(ActionType.Tracer, [
      /*  0 */ new IntField(orientation),
      /*  1 */ new IntField(0),
      /*  2 */ new FloatField(segmentInterval),
      /*  3 */ new FloatField(segmentDuration),
      /*  4 */ new IntField(concurrentSegments),
      /*  5 */ new IntField(0),
      /*  6 */ new IntField(0),
      /*  7 */ new FloatField(0),
      /*  8 */ new IntField(columns),
      /*  9 */ new IntField(totalFrames),
      /* 10 */ new BoolField(attachedUV),
      /* 11 */ new IntField(-1),
      /* 12 */ new IntField(-1),
      /* 13 */ new IntField(0),
      /* 14 */ new IntField(1),
      /* 15 */ new IntField(1),
      /* 16 */ new IntField(0),
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
      /* 33 */ new IntField(specular),
      /* 34 */ new FloatField(glossiness),
      /* 35 */ new IntField(lighting),
      /* 36 */ new IntField(-2),
      /* 37 */ new IntField(0),
      /* 38 */ new FloatField(specularity),
      /* 39 */ new IntField(0),
    ], [
      /*  0 */ scalarFromArg(texture),
      /*  1 */ scalarFromArg(blendMode),
      /*  2 */ scalarFromArg(length),
      /*  3 */ scalarFromArg(lengthMultiplier),
      /*  4 */ new ConstantProperty(0),
      /*  5 */ new ConstantProperty(0),
      /*  6 */ vectorFromArg(color1),
      /*  7 */ vectorFromArg(color2),
      /*  8 */ vectorFromArg(color3),
      /*  9 */ scalarFromArg(alphaThreshold),
      /* 10 */ scalarFromArg(frameIndex),
      /* 11 */ scalarFromArg(frameIndexOffset),
      /* 12 */ new ConstantProperty(0),
      /* 13 */ new ConstantProperty(0),
      /* 14 */ new ConstantProperty(0),
      /* 15 */ new ConstantProperty(-1),
    ], [
      /*  0 */ scalarFromArg(rgbMultiplier),
      /*  1 */ scalarFromArg(alphaMultiplier),
      /*  2 */ new ConstantProperty(0),
      /*  3 */ new ConstantProperty(1, 1, 1, 1),
      /*  4 */ new ConstantProperty(1, 1, 1, 1),
      /*  5 */ new ConstantProperty(1, 1, 1, 1),
      /*  6 */ new ConstantProperty(0),
    ])
  }

  /**
   * Controls the orientation mode for the trail. Note that this is **not**
   * {@link OrientationMode} - It works differently for this action, and not
   * all of the values have been documented yet.
   */
  get orientation() { return this.fields1[0].value as number }
  set orientation(value) { this.fields1[0].value = value }

  /**
   * The trail is made up of multiple quads, or *segments*. This controls how
   * many seconds to wait between new segments being created. Lower values
   * produce a smoother trail.
   */
  get segmentInterval() { return this.fields1[2].value as number }
  set segmentInterval(value) { this.fields1[2].value = value }

  /**
   * The trail is made up of multiple quads, or *segments*. This controls how
   * long each segment should last in seconds.
   */
  get segmentDuration() { return this.fields1[3].value as number }
  set segmentDuration(value) { this.fields1[3].value = value }

  /**
   * The trail is made up of multiple quads, or *segments*. This controls how
   * many segments may exist at the same time.
   */
  get concurrentSegments() { return this.fields1[4].value as number }
  set concurrentSegments(value) { this.fields1[4].value = value }

  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`.
   * 
   * See also:
   * - {@link totalFrames}
   */
  get columns() { return this.fields1[8].value as number }
  set columns(value) { this.fields1[8].value = value }

  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture.
   * 
   * See also:
   * - {@link columns}
   */
  get totalFrames() { return this.fields1[9].value as number }
  set totalFrames(value) { this.fields1[9].value = value }

  /**
   * Controls whether or not the UV of the trail should be attached to the node
   * or not. If it is attached, the texture will slide along the segments to
   * follow the source wherever it moves, as if it was a flag attached to a
   * pole. If it is not attached, the texture will stay where it was when the
   * segment was created, like a skid mark on a road where the road is the
   * segments and the mark is the texture, it wouldn't follow the car/node.
   */
  get attachedUV() { return this.fields1[10].value as boolean }
  set attachedUV(value) { this.fields1[10].value = value }

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
   * Specular texture ID. Defaults to 0.
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

  /**
   * The ID of the texture for the trail.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get texture() { return this.properties1[0] }
  set texture(value) { setPropertyInList(this.properties1, 0, value) }

  /**
   * Blend mode.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendMode() { return this.properties1[1].valueAt(0) as BlendMode }
  set blendMode(value: BlendMode | ScalarProperty) { setPropertyInList(this.properties1, 1, value) }
  /**
   * Blend mode.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendModeProperty() { return this.properties1[1] }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get color1() { return this.properties1[6] }
  set color1(value) { setPropertyInList(this.properties1, 6, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  get color2() { return this.properties1[7] }
  set color2(value) { setPropertyInList(this.properties1, 7, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  get color3() { return this.properties1[8] }
  set color3(value) { setPropertyInList(this.properties1, 8, value) }

  /**
   * Parts of the particle with less opacity than this threshold will be
   * invisible. The range is 0-255.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaThreshold() { return this.properties1[10] }
  set alphaThreshold(value) { setPropertyInList(this.properties1, 10, value) }

  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * 
   * Seemingly identical to {@link frameIndexOffset}? The sum of these two
   * properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get frameIndex() { return this.properties1[10] }
  set frameIndex(value) { setPropertyInList(this.properties1, 10, value) }

  /**
   * Seemingly identical to {@link frameIndex}? The sum of these two properties
   * is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get frameIndexOffset() { return this.properties1[11] }
  set frameIndexOffset(value) { setPropertyInList(this.properties1, 11, value) }

  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value) { setPropertyInList(this.properties2, 0, value) }

  /**
   * Alpha multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value) { setPropertyInList(this.properties2, 1, value) }

}

export interface DistortionParams {
  /**
   * Controls what type of distortion to apply. See {@link DistortionMode} for
   * more details. Defaults to {@link DistortionMode.NormalMap}.
   */
  mode?: DistortionMode
  /**
   * Controls the shape of the particle. See {@link DistortionShape} for more
   * information. Defaults to {@link DistortionShape.Rectangle}.
   */
  shape?: DistortionShape
  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information. Defaults to
   * {@link OrientationMode.Camera}.
   */
  orientation?: OrientationMode
  /**
   * Texture ID. Defaults to 0 (no texture).
   * 
   * This texture seems to completely hide the distortion effect. It's probably
   * best to just leave it at 0 unless you are trying to figure out how to use
   * it properly.
   */
  texture?: number
  /**
   * Normal map ID. Defaults to 0 (no texture).
   * 
   * Only used if the distortion {@link mode} is set to something that uses it.
   */
  normalMap?: number
  /**
   * Mask texture ID. This texture is used to control the color and opacity of
   * the particle. Defaults to 0 (no texture).
   */
  mask?: number
  /**
   * Each particle will pick a random number between this value and 1, and the
   * width of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly thinner, down to half
   * width. Setting it to 2 will make them randomly wider, up to double width.
   * Defaults to 1.
   * 
   * If {@link uniformScale} is enabled, this also affects the height.
   * 
   * See also:
   * - {@link scaleVariationY}
   */
  scaleVariationX?: number
  /**
   * Each particle will pick a random number between this value and 1, and the
   * height of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shorter, down to half
   * height. Setting it to 2 will make them randomly taller, up to double
   * height. Defaults to 1.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the height, and this field is ignored.
   */
  scaleVariationY?: number
  /**
   * Each particle will pick a random number between this value and 1, and the
   * depth of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shallower, down to
   * half depth. Setting it to 2 will make them randomly deeper, up to double
   * depth. Defaults to 1.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the depth, and this field is ignored.
   */
  scaleVariationZ?: number
  /**
   * If enabled, the particle X scale-related properties and fields will
   * control the scale in all axes, and the Y and Z counterparts will be
   * ignored. Defaults to false.
   * 
   * See also:
   * - {@link sizeX}
   * - {@link sizeY}
   * - {@link sizeZ}
   * - {@link scaleVariationX}
   * - {@link scaleVariationY}
   * - {@link scaleVariationZ}
   */
  uniformScale?: boolean
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
   * Blend mode. Defaults to {@link BlendMode.Normal}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  blendMode?: BlendMode | ScalarProperty
  /**
   * X position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetX?: ScalarPropertyArg
  /**
   * Y position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetY?: ScalarPropertyArg
  /**
   * Z position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetZ?: ScalarPropertyArg
  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  sizeX?: ScalarPropertyArg
  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link sizeX} also controls the
   * height, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  sizeY?: ScalarPropertyArg
  /**
   * The depth of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link sizeX} also controls the
   * depth, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  sizeZ?: ScalarPropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color?: Vector4PropertyArg
  /**
   * Controls the intensity of the distortion effect. At 0, there is no
   * distortion at all. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  intensity?: ScalarPropertyArg
  /**
   * Controls the speed of the stirring effect in radians per second. Requires
   * {@link mode} to be set to {@link DistortionMode.Stir}. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  stirSpeed?: ScalarPropertyArg
  /**
   * The distortion effect is only applied to an ellipse inside the particle.
   * This property controls how large this ellipse is. At 1, it inscribes the
   * particle's rectangle. At values greater than 1, it is the same size as 1,
   * but there might be strange artifacts around the edges of the distortion.
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  radius?: ScalarPropertyArg
  /**
   * Horizontal offset for the {@link normalMap normal map}. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  normalMapOffsetU?: ScalarPropertyArg
  /**
   * Vertical offset for the {@link normalMap normal map}. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  normalMapOffsetV?: ScalarPropertyArg
  /**
   * Horizontal offset speed for the {@link normalMap normal map}. Defaults to
   * 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  normalMapSpeedU?: ScalarPropertyArg
  /**
   * Vertical offset speed for the {@link normalMap normal map}. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  normalMapSpeedV?: ScalarPropertyArg
  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  rgbMultiplier?: ScalarPropertyArg
  /**
   * Alpha multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaMultiplier?: ScalarPropertyArg
}
/**
 * A particle that distorts anything seen through it.
 * 
 * Note: This particle is not visible if the "Effects" setting is set to "Low".
 */
class Distortion extends CommonAction6xxFields2Action {

  constructor({
    mode = DistortionMode.NormalMap,
    shape = DistortionShape.Rectangle,
    orientation = OrientationMode.Camera,
    texture = 0,
    normalMap = 0,
    mask = 0,
    scaleVariationX = 1,
    scaleVariationY = 1,
    scaleVariationZ = 1,
    uniformScale = false,
    bloomColor = [1, 1, 1],
    bloomStrength = 0,
    minDistance = -1,
    maxDistance = -1,
    blendMode = BlendMode.Normal,
    offsetX = 0,
    offsetY = 0,
    offsetZ = 0,
    sizeX = 1,
    sizeY = 1,
    sizeZ = 1,
    color = [1, 1, 1, 1],
    intensity = 1,
    stirSpeed = 1,
    radius = 1,
    normalMapOffsetU = 0,
    normalMapOffsetV = 0,
    normalMapSpeedU = 0,
    normalMapSpeedV = 0,
    rgbMultiplier = 1,
    alphaMultiplier = 1,
  }: DistortionParams = {}) {
    super(ActionType.Distortion, [
      new IntField(mode),
      new IntField(shape),
      new IntField(orientation),
      new IntField(texture),
      new IntField(normalMap),
      new IntField(mask),
      new FloatField(scaleVariationX),
      new FloatField(scaleVariationY),
      new FloatField(scaleVariationZ),
      new BoolField(uniformScale),
      new IntField(-2),
      new IntField(0),
      new IntField(1),
      new IntField(1),
    ], [
      new IntField(0),
      new IntField(0),
      new IntField(8),
      new FloatField(1),
      new IntField(0),
      new FloatField(bloomColor[0]),
      new FloatField(bloomColor[1]),
      new FloatField(bloomColor[2]),
      new FloatField(bloomStrength),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new FloatField(-1),
      new FloatField(-1),
      new FloatField(-1),
      new FloatField(-1),
      new FloatField(minDistance),
      new FloatField(maxDistance),
      new IntField(1),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new FloatField(0),
      new IntField(0),
      new IntField(1),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new IntField(0),
      new IntField(-1),
      new IntField(-2),
      new IntField(0),
      new IntField(0),
    ], [
      scalarFromArg(blendMode),
      scalarFromArg(offsetX),
      scalarFromArg(offsetY),
      scalarFromArg(offsetZ),
      scalarFromArg(sizeX),
      scalarFromArg(sizeY),
      scalarFromArg(sizeZ),
      vectorFromArg(color),
      new ConstantProperty(1, 1, 1, 1),
      scalarFromArg(intensity),
      new ConstantProperty(0),
      scalarFromArg(stirSpeed),
      scalarFromArg(radius),
      scalarFromArg(normalMapOffsetU),
      scalarFromArg(normalMapOffsetV),
      scalarFromArg(normalMapSpeedU),
      scalarFromArg(normalMapSpeedV),
    ], [
      scalarFromArg(rgbMultiplier),
      scalarFromArg(alphaMultiplier),
      new ConstantProperty(0),
      new ConstantProperty(1, 1, 1, 1),
      new ConstantProperty(1, 1, 1, 1),
      new ConstantProperty(1, 1, 1, 1),
      new ConstantProperty(0),
      new ConstantProperty(1),
      new ConstantProperty(1),
    ])
  }

  /**
   * Controls what type of distortion to apply. See {@link DistortionMode} for
   * more details.
   */
  get mode() { return this.fields1[0].value as DistortionMode }
  set mode(value) { this.fields1[0].value = value }

  /**
   * Controls the shape of the particle. See {@link DistortionShape} for more
   * information.
   */
  get shape() { return this.fields1[1].value as DistortionShape }
  set shape(value) { this.fields1[1].value = value }

  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information.
   */
  get orientation() { return this.fields1[2].value as OrientationMode }
  set orientation(value) { this.fields1[2].value = value }

  /**
   * Texture ID.
   * 
   * This texture seems to completely hide the distortion effect. It's probably
   * best to just leave it at 0 unless you are trying to figure out how to use
   * it properly.
   */
  get texture() { return this.fields1[3].value as number }
  set texture(value) { this.fields1[3].value = value }

  /**
   * Normal map ID.
   * 
   * Only used if the distortion {@link mode} is set to something that uses it.
   */
  get normalMap() { return this.fields1[4].value as number }
  set normalMap(value) { this.fields1[4].value = value }

  /**
   * Mask texture ID. This texture is used to control the color and opacity of
   * the particle.
   */
  get mask() { return this.fields1[5].value as number }
  set mask(value) { this.fields1[5].value = value }

  /**
   * Each particle will pick a random number between this value and 1, and the
   * width of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly thinner, down to half
   * width. Setting it to 2 will make them randomly wider, up to double width.
   * 
   * If {@link uniformScale} is enabled, this also affects the height.
   * 
   * See also:
   * - {@link scaleVariationY}
   */
  get scaleVariationX() { return this.fields1[6].value as number }
  set scaleVariationX(value) { this.fields1[6].value = value }

  /**
   * Each particle will pick a random number between this value and 1, and the
   * height of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shorter, down to half
   * height. Setting it to 2 will make them randomly taller, up to double
   * height.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the height, and this field is ignored.
   */
  get scaleVariationY() { return this.fields1[7].value as number }
  set scaleVariationY(value) { this.fields1[7].value = value }

  /**
   * Each particle will pick a random number between this value and 1, and the
   * depth of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shallower, down to
   * half depth. Setting it to 2 will make them randomly deeper, up to double
   * depth.
   * 
   * If {@link uniformScale} is enabled, {@link scaleVariationX} also affects
   * the depth, and this field is ignored.
   */
  get scaleVariationZ() { return this.fields1[8].value as number }
  set scaleVariationZ(value) { this.fields1[8].value = value }

  /**
   * If enabled, the particle X scale-related properties and fields will
   * control the scale in all axes, and the Y and Z counterparts will be
   * ignored.
   * 
   * See also:
   * - {@link sizeX}
   * - {@link sizeY}
   * - {@link sizeZ}
   * - {@link scaleVariationX}
   * - {@link scaleVariationY}
   * - {@link scaleVariationZ}
   */
  get uniformScale() { return this.fields1[9].value as boolean }
  set uniformScale(value) { this.fields1[9].value = value }

  /**
   * Blend mode. See {@link BlendMode} for more information.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendMode() { return this.properties1[0].valueAt(0) as BlendMode }
  set blendMode(value: BlendMode | ScalarProperty) { setPropertyInList(this.properties1, 0, value) }
  /**
   * Blend mode. See {@link BlendMode} for more information.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendModeProperty() { return this.properties1[0] }

  /**
   * X position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetX() { return this.properties1[1] }
  set offsetX(value) { setPropertyInList(this.properties1, 1, value) }

  /**
   * Y position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetY() { return this.properties1[2] }
  set offsetY(value) { setPropertyInList(this.properties1, 2, value) }

  /**
   * Z position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetZ() { return this.properties1[3] }
  set offsetZ(value) { setPropertyInList(this.properties1, 3, value) }

  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get sizeX() { return this.properties1[4] }
  set sizeX(value) { setPropertyInList(this.properties1, 4, value) }

  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link sizeX} also controls the
   * height, and this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get sizeY() { return this.properties1[5] }
  set sizeY(value) { setPropertyInList(this.properties1, 5, value) }

  /**
   * The depth of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link sizeX} also controls the
   * depth, and this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get sizeZ() { return this.properties1[6] }
  set sizeZ(value) { setPropertyInList(this.properties1, 6, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get color() { return this.properties1[7] }
  set color(value) { setPropertyInList(this.properties1, 7, value) }

  /**
   * Controls the intensity of the distortion effect. At 0, there is no
   * distortion at all.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get intensity() { return this.properties1[9] }
  set intensity(value) { setPropertyInList(this.properties1, 9, value) }

  /**
   * Controls the speed of the stirring effect in radians per second. Requires
   * {@link mode} to be set to {@link DistortionMode.Stir}.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get stirSpeed() { return this.properties1[11] }
  set stirSpeed(value) { setPropertyInList(this.properties1, 11, value) }

  /**
   * The distortion effect is only applied to an ellipse inside the particle.
   * This property controls how large this ellipse is. At 1, it inscribes the
   * particle's rectangle. At values greater than 1, it is the same size as 1,
   * but there might be strange artifacts around the edges of the distortion.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get radius() { return this.properties1[12] }
  set radius(value) { setPropertyInList(this.properties1, 12, value) }

  /**
   * Horizontal offset for the {@link normalMap normal map}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get normalMapOffsetU() { return this.properties1[13] }
  set normalMapOffsetU(value) { setPropertyInList(this.properties1, 13, value) }

  /**
   * Vertical offset for the {@link normalMap normal map}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get normalMapOffsetV() { return this.properties1[14] }
  set normalMapOffsetV(value) { setPropertyInList(this.properties1, 14, value) }

  /**
   * Horizontal offset speed for the {@link normalMap normal map}.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get normalMapSpeedU() { return this.properties1[15] }
  set normalMapSpeedU(value) { setPropertyInList(this.properties1, 15, value) }

  /**
   * Vertical offset speed for the {@link normalMap normal map}.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get normalMapSpeedV() { return this.properties1[16] }
  set normalMapSpeedV(value) { setPropertyInList(this.properties1, 16, value) }

  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value) { setPropertyInList(this.properties2, 0, value) }

  /**
   * Alpha multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value) { setPropertyInList(this.properties2, 1, value) }

}

export interface RadialBlurParams {
  /**
   * If enabled, the particle width-related properties and fields will control
   * both the width and height of the particles, and the height counterparts
   * will be ignored. Defaults to false.
   * 
   * See also:
   * - {@link width}
   * - {@link height}
   */
  uniformScale?: boolean
  /**
   * Controls how many times to apply the effect. Higher values can have a
   * significant impact on performance. Defaults to 1.
   */
  iterations?: number
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
   * Blend mode. Defaults to {@link BlendMode.Normal}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  blendMode?: BlendMode | ScalarProperty
  /**
   * Mask texture ID. This texture is used to control the opacity of the
   * particle. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  mask?: ScalarPropertyArg
  /**
   * X position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetX?: ScalarPropertyArg
  /**
   * Y position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetY?: ScalarPropertyArg
  /**
   * Z position offset. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offsetZ?: ScalarPropertyArg
  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  width?: ScalarPropertyArg
  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link width} also controls the
   * height, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  height?: ScalarPropertyArg
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color?: Vector4PropertyArg
  /**
   * Controls the amount of blur to apply. Values greater than 1 may appear
   * glitchy. Defaults to 0.5.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  blurRadius?: ScalarPropertyArg
  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  rgbMultiplier?: ScalarPropertyArg
  /**
   * Alpha multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaMultiplier?: ScalarPropertyArg
}
/**
 * A particle that applies a radial blur to anything seen through it.
 * 
 * Note: This particle is not visible if the "Effects" setting is set to "Low".
 */
class RadialBlur extends CommonAction6xxFields2Action {

  constructor({
    uniformScale = false,
    iterations = 1,
    bloomColor = [1, 1, 1],
    bloomStrength = 0,
    minDistance = -1,
    maxDistance = -1,
    blendMode = BlendMode.Normal,
    mask = 1,
    offsetX = 0,
    offsetY = 0,
    offsetZ = 0,
    width = 1,
    height = 1,
    color = [1, 1, 1, 1],
    blurRadius = 0.5,
    rgbMultiplier = 1,
    alphaMultiplier = 1,
  }: RadialBlurParams = {}) {
    super(ActionType.RadialBlur, [
      /*  0 */ new BoolField(uniformScale),
      /*  1 */ new IntField(iterations),
      /*  2 */ new IntField(0),
      /*  3 */ new IntField(1),
      /*  4 */ new IntField(1),
    ], [
      /*  0 */ new IntField(0),
      /*  1 */ new IntField(0),
      /*  2 */ new IntField(8),
      /*  3 */ new FloatField(1),
      /*  4 */ new IntField(0),
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
      /* 20 */ new FloatField(0.5),
      /* 21 */ new IntField(1),
      /* 22 */ new IntField(0),
      /* 23 */ new IntField(0),
      /* 24 */ new IntField(0),
      /* 25 */ new FloatField(1), // depth blend 1
      /* 26 */ new FloatField(0), // depth blend 2
      /* 27 */ new IntField(1),
      /* 28 */ new IntField(0),
      /* 29 */ new FloatField(0),
      /* 30 */ new FloatField(0),
    ], [
      /*  0 */ scalarFromArg(blendMode),
      /*  1 */ scalarFromArg(mask),
      /*  2 */ scalarFromArg(offsetX),
      /*  3 */ scalarFromArg(offsetY),
      /*  4 */ scalarFromArg(offsetZ),
      /*  5 */ scalarFromArg(width),
      /*  6 */ scalarFromArg(height),
      /*  7 */ vectorFromArg(color),
      /*  8 */ new ConstantProperty(1, 1, 1, 1),
      /*  9 */ scalarFromArg(blurRadius),
    ], [
      /*  0 */ scalarFromArg(rgbMultiplier),
      /*  1 */ scalarFromArg(alphaMultiplier),
      /*  2 */ new ConstantProperty(0),
      /*  3 */ new ConstantProperty(1, 1, 1, 1),
      /*  4 */ new ConstantProperty(1, 1, 1, 1),
      /*  5 */ new ConstantProperty(1, 1, 1, 1),
      /*  6 */ new ConstantProperty(0),
    ])
  }

  /**
   * If enabled, the particle width-related properties and fields will control
   * both the width and height of the particles, and the height counterparts
   * will be ignored.
   * 
   * See also:
   * - {@link width}
   * - {@link height}
   */
  get uniformScale() { return this.fields1[0].value as number }
  set uniformScale(value) { this.fields1[0].value = value }

  /**
   * Controls how many times to apply the effect. Higher values can have a
   * significant impact on performance. Defaults to 1.
   */
  get iterations() { return this.fields1[1].value as number }
  set iterations(value) { this.fields1[1].value = value }

  /**
   * Blend mode. See {@link BlendMode} for more information.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendMode() { return this.properties1[0].valueAt(0) as BlendMode }
  set blendMode(value: BlendMode | ScalarProperty) { setPropertyInList(this.properties1, 0, value) }
  /**
   * Blend mode. See {@link BlendMode} for more information.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get blendModeProperty() { return this.properties1[0] }

  /**
   * Mask texture ID. This texture is used to control the opacity of the
   * particle.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get mask() { return this.properties1[1].valueAt(0) }
  set mask(value) { setPropertyInList(this.properties1, 1, value) }
  /**
   * Mask texture ID. This texture is used to control the opacity of the
   * particle.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  get maskProperty() { return this.properties1[1] }

  /**
   * X position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetX() { return this.properties1[2] }
  set offsetX(value) { setPropertyInList(this.properties1, 2, value) }

  /**
   * Y position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetY() { return this.properties1[3] }
  set offsetY(value) { setPropertyInList(this.properties1, 3, value) }

  /**
   * Z position offset.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get offsetZ() { return this.properties1[4] }
  set offsetZ(value) { setPropertyInList(this.properties1, 4, value) }

  /**
   * The width of the particle.
   * 
   * If {@link uniformScale} is enabled, this also controls the height.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get width() { return this.properties1[5] }
  set width(value) { setPropertyInList(this.properties1, 5, value) }

  /**
   * The height of the particle.
   * 
   * If {@link uniformScale} is enabled, {@link width} also controls the
   * height, and this property is ignored.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get height() { return this.properties1[6] }
  set height(value) { setPropertyInList(this.properties1, 6, value) }

  /**
   * Color multiplier.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get color() { return this.properties1[7] }
  set color(value) { setPropertyInList(this.properties1, 7, value) }

  /**
   * Controls the amount of blur to apply. Values greater than 1 may appear
   * glitchy.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  get blurRadius() { return this.properties1[9] }
  set blurRadius(value) { setPropertyInList(this.properties1, 9, value) }

  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get rgbMultiplier() { return this.properties2[0] }
  set rgbMultiplier(value) { setPropertyInList(this.properties2, 0, value) }

  /**
   * Alpha multiplier.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get alphaMultiplier() { return this.properties2[1] }
  set alphaMultiplier(value) { setPropertyInList(this.properties2, 1, value) }

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
  diffuseColor?: Vector4PropertyArg
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
  specularColor?: Vector4PropertyArg
  /**
   * The maximum distance that the light may travel from the source, and the
   * radius of the sphere in which other effects caused by the light source
   * (for example {@link volumeDensity} and its related fields) may act. Defaults
   * to 10.
   */
  radius?: ScalarPropertyArg
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
  diffuseMultiplier?: ScalarPropertyArg
  /**
   * A scalar multiplier for the {@link specularColor specular color}.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  specularMultiplier?: ScalarPropertyArg
  /**
   * Toggles the jitter and flicker animations for the light. Defaults to
   * false.
   * 
   * See also:
   * - {@link jitterAcceleration}
   * - {@link jitter}
   * - {@link flickerIntervalMin}
   * - {@link flickerIntervalMax}
   * - {@link flickerBrightness}
   */
  jitterAndFlicker?: boolean
  /**
   * Controls the acceleration of the jittering. Defaults to 1.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link jitter}
   */
  jitterAcceleration?: number
  /**
   * Controls how much the light should move around randomly. Defaults to
   * [0, 0, 0].
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link jitterAcceleration}
   */
  jitter?: Vector3
  /**
   * Controls the minimum interval for flickering. Defaults to 0.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMax}
   * - {@link flickerBrightness}
   */
  flickerIntervalMin?: number
  /**
   * Controls the maximum interval for flickering. Defaults to 1.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMin}
   * - {@link flickerBrightness}
   */
  flickerIntervalMax?: number
  /**
   * Brightness multiplier for the light when it flickers. Defaults to 0.5.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMin}
   * - {@link flickerIntervalMax}
   */
  flickerBrightness?: number
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
  volumeDensity?: number
  /**
   * Controls whether or not {@link asymmetryParam} affects the fake fog from
   * {@link volumeDensity}. Defaults to true.
   */
  phaseFunction?: boolean
  /**
   * Controls how the fake fog from {@link volumeDensity} scatters the light. This
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
    specularColor = diffuseColor instanceof Property ? diffuseColor.clone() : diffuseColor.slice() as Vector4,
    radius = 10,
    diffuseMultiplier = 1,
    specularMultiplier = 1,
    jitterAndFlicker = false,
    jitterAcceleration = 1,
    jitter = [0, 0, 0],
    flickerIntervalMin = 0,
    flickerIntervalMax = 1,
    flickerBrightness = 0.5,
    shadows = false,
    separateSpecular = false,
    fadeOutTime = 0,
    shadowDarkness = 1,
    volumeDensity = 0,
    phaseFunction = true,
    asymmetryParam = 0.5,
    falloffExponent = 1,
  }: PointLightParams = {}) {
    super(ActionType.PointLight, [
      /*  0 */ new IntField(0),
      /*  1 */ new FloatField(0),
    ], [ // Fields 2
      /*  0 */ new IntField(0),
      /*  1 */ new BoolField(jitterAndFlicker),
      /*  2 */ new FloatField(jitterAcceleration),
      /*  3 */ new FloatField(0),
      /*  4 */ new FloatField(jitter[0]),
      /*  5 */ new FloatField(jitter[1]),
      /*  6 */ new FloatField(jitter[2]),
      /*  7 */ new FloatField(flickerIntervalMin),
      /*  8 */ new FloatField(flickerIntervalMax),
      /*  9 */ new FloatField(flickerBrightness),
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
      /* 24 */ new FloatField(volumeDensity),
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
   * (for example {@link volumeDensity} and its related fields) may act.
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
   * Toggles the jitter and flicker animations for the light. Defaults to
   * false.
   * 
   * See also:
   * - {@link jitterAcceleration}
   * - {@link jitter}
   * - {@link flickerIntervalMin}
   * - {@link flickerIntervalMax}
   * - {@link flickerBrightness}
   */
  get jitterAndFlicker() { return this.fields2[1].value as boolean }
  set jitterAndFlicker(value) { this.fields2[1].value = value }

  /**
   * Controls the acceleration of the jittering. Defaults to 1.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link jitter}
   */
  get jitterAcceleration() { return this.fields2[2].value as number }
  set jitterAcceleration(value) { this.fields2[2].value = value }

  /**
   * Controls how much the light should move around randomly.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link jitterAcceleration}
   */
  get jitter() { return this.fields2.slice(4, 7).map(f => f.value) as Vector3 }
  set jitter(value) { for (let i = 2; i >= 0; i--) this.fields2[4 + i].value = value[i] }

  /**
   * Controls the minimum interval for flickering.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMax}
   * - {@link flickerBrightness}
   */
  get flickerIntervalMin() { return this.fields2[7].value as number }
  set flickerIntervalMin(value) { this.fields2[7].value = value }

  /**
   * Controls the maximum interval for flickering.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMin}
   * - {@link flickerBrightness}
   */
  get flickerIntervalMax() { return this.fields2[8].value as number }
  set flickerIntervalMax(value) { this.fields2[8].value = value }

  /**
   * Brightness multiplier for the light when it flickers.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMin}
   * - {@link flickerIntervalMax}
   */
  get flickerBrightness() { return this.fields2[9].value as number }
  set flickerBrightness(value) { this.fields2[9].value = value }

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
  get volumeDensity() { return this.fields2[24].value as number }
  set volumeDensity(value) { this.fields2[24].value = value }

  /**
   * Controls whether or not {@link asymmetryParam} affects the fake fog from
   * {@link volumeDensity}.
   */
  get phaseFunction() { return this.fields2[26].value as boolean }
  set phaseFunction(value) { this.fields2[26].value = value }

  /**
   * Controls how the fake fog from {@link volumeDensity} scatters the light. This
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
    windSpeed: ScalarPropertyArg = 0,
    /**
     * A multiplier for
     * {@link windSpeed the speed in the direction of the wind}.
     * Defalts to 1.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windSpeedMult: ScalarPropertyArg = 1,
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
  get windSpeed(): ScalarProperty { return this.properties1[0] }
  set windSpeed(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 0, value) }

  /**
   * A multiplier for
   * {@link windSpeed the speed in the direction of the wind}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windSpeedMult(): ScalarProperty { return this.properties1[1] }
  set windSpeedMult(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 1, value) }

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
    windSpeed: ScalarPropertyArg = 0,
    /**
     * A multiplier for
     * {@link windSpeed the speed in the direction of the wind}.
     * Defalts to 1.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windSpeedMult: ScalarPropertyArg = 1,
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
  get windSpeed(): ScalarProperty { return this.properties1[0] }
  set windSpeed(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 0, value) }

  /**
   * A multiplier for
   * {@link windSpeed the speed in the direction of the wind}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windSpeedMult(): ScalarProperty { return this.properties1[1] }
  set windSpeedMult(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 1, value) }

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
    windAcceleration: ScalarPropertyArg = 0,
    /**
     * A multiplier for
     * {@link windAcceleration the acceleration in the direction of the wind}.
     * Defalts to 1.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windAccelerationMult: ScalarPropertyArg = 1,
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
  get windAcceleration(): ScalarProperty { return this.properties1[0] }
  set windAcceleration(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 0, value) }

  /**
   * A multiplier for
   * {@link windAcceleration the acceleration in the direction of the wind}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windAccelerationMult(): ScalarProperty { return this.properties1[1] }
  set windAccelerationMult(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 1, value) }

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
    windAcceleration: ScalarPropertyArg = 0,
    /**
     * A multiplier for
     * {@link windAcceleration the acceleration in the direction of the wind}.
     * Defalts to 1.
     * 
     * **Argument**: {@link PropertyArgument.EffectAge Effect age}
     */
    windAccelerationMult: ScalarPropertyArg = 1,
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
  get windAcceleration(): ScalarProperty { return this.properties1[0] }
  set windAcceleration(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 0, value) }

  /**
   * A multiplier for
   * {@link windAcceleration the acceleration in the direction of the wind}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  get windAccelerationMult(): ScalarProperty { return this.properties1[1] }
  set windAccelerationMult(value: ScalarPropertyArg) { setPropertyInList(this.properties1, 1, value) }

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
  diffuseColor?: Vector4PropertyArg
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
  specularColor?: Vector4PropertyArg
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
  diffuseMultiplier?: ScalarPropertyArg
  /**
   * A scalar multiplier for the {@link specularColor specular color}.
   * 
   * If {@link separateSpecular} is disabled, this property is ignored.
   * 
   * Defaults to 100.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  specularMultiplier?: ScalarPropertyArg
  /**
   * Controls where the light starts in the cone. It bascially "slices off" the
   * tip of the cone. If set to 0, it acts as if it is set to 0.5. Defaults to
   * 0.01.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  near?: ScalarPropertyArg
  /**
   * Controls how far away the base of the cone is from the light source.
   * Defaults to 50.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  far?: ScalarPropertyArg
  /**
   * The default value for {@link xRadius} and {@link yRadius}. Just a
   * convenient way to control both at the same time. This value is not used if
   * {@link xRadius} and {@link yRadius} are given values. Defaults to 50.
   */
  radius?: ScalarPropertyArg
  /**
   * The X radius for the elliptic base of the cone. Defaults to
   * {@link radius}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  xRadius?: ScalarPropertyArg
  /**
   * The Y radius for the elliptic base of the cone. Defaults to
   * {@link radius}.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  yRadius?: ScalarPropertyArg
  /**
   * Toggles the jitter and flicker animations for the light. Defaults to
   * false.
   * 
   * See also:
   * - {@link jitterAcceleration}
   * - {@link jitter}
   * - {@link flickerIntervalMin}
   * - {@link flickerIntervalMax}
   * - {@link flickerBrightness}
   */
  jitterAndFlicker?: boolean
  /**
   * Controls the acceleration of the jittering. Defaults to 1.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link jitter}
   */
  jitterAcceleration?: number
  /**
   * Controls how much the light should move around randomly. Defaults to
   * [0, 0, 0].
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link jitterAcceleration}
   */
  jitter?: Vector3
  /**
   * Controls the minimum interval for flickering. Defaults to 0.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMax}
   * - {@link flickerBrightness}
   */
  flickerIntervalMin?: number
  /**
   * Controls the maximum interval for flickering. Defaults to 1.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMin}
   * - {@link flickerBrightness}
   */
  flickerIntervalMax?: number
  /**
   * Brightness multiplier for the light when it flickers. Defaults to 0.5.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMin}
   * - {@link flickerIntervalMax}
   */
  flickerBrightness?: number
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
  volumeDensity?: number
  /**
   * Controls whether or not {@link asymmetryParam} affects the fake fog from
   * {@link volumeDensity}. Defaults to true.
   */
  phaseFunction?: boolean
  /**
   * Controls how the fake fog from {@link volumeDensity} scatters the light. This
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
  unkScalarProp8?: ScalarPropertyArg
  unkScalarProp9?: ScalarPropertyArg
  unkScalarProp10?: ScalarPropertyArg
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
    xRadius = radius instanceof Property ? radius.clone() : radius,
    yRadius = radius instanceof Property ? radius.clone() : radius,
    jitterAndFlicker = false,
    jitterAcceleration = 1,
    jitter = [0, 0, 0],
    flickerIntervalMin = 0,
    flickerIntervalMax = 1,
    flickerBrightness = 0.5,
    shadows = false,
    separateSpecular = false,
    shadowDarkness = 1,
    fadeOutTime = 0,
    volumeDensity = 0,
    phaseFunction = true,
    asymmetryParam = 0.75,
    falloffExponent = 1,
    unkScalarProp8 = 1,
    unkScalarProp9 = 1,
    unkScalarProp10 = 1,
  }: SpotLightParams = {}) {
    super(ActionType.SpotLight, [
      /*  0 */ new IntField(0),
      /*  1 */ new BoolField(jitterAndFlicker),
      /*  2 */ new FloatField(jitterAcceleration),
      /*  3 */ new FloatField(0),
      /*  4 */ new FloatField(jitter[0]),
      /*  5 */ new FloatField(jitter[1]),
      /*  6 */ new FloatField(jitter[2]),
      /*  7 */ new FloatField(flickerIntervalMin),
      /*  8 */ new FloatField(flickerIntervalMax),
      /*  9 */ new FloatField(flickerBrightness),
      /* 10 */ new BoolField(shadows),
      /* 11 */ new BoolField(separateSpecular),
      /* 12 */ new FloatField(shadowDarkness),
      /* 13 */ new IntField(2),
      /* 14 */ new IntField(1),
      /* 15 */ new IntField(Math.round(fadeOutTime * 30)),
      /* 16 */ new IntField(100),
      /* 17 */ new IntField(0),
      /* 18 */ new FloatField(0),
      /* 19 */ new FloatField(volumeDensity),
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
   * Toggles the jitter and flicker animations for the light. Defaults to
   * false.
   * 
   * See also:
   * - {@link jitterAcceleration}
   * - {@link jitter}
   * - {@link flickerIntervalMin}
   * - {@link flickerIntervalMax}
   * - {@link flickerBrightness}
   */
  get jitterAndFlicker() { return this.fields2[1].value as boolean }
  set jitterAndFlicker(value) { this.fields2[1].value = value }

  /**
   * Controls the acceleration of the jittering. Defaults to 1.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link jitter}
   */
  get jitterAcceleration() { return this.fields2[2].value as number }
  set jitterAcceleration(value) { this.fields2[2].value = value }

  /**
   * Controls how much the light should move around randomly.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link jitterAcceleration}
   */
  get jitter() { return this.fields2.slice(4, 7).map(f => f.value) as Vector3 }
  set jitter(value) { for (let i = 2; i >= 0; i--) this.fields2[4 + i].value = value[i] }

  /**
   * Controls the minimum interval for flickering.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMax}
   * - {@link flickerBrightness}
   */
  get flickerIntervalMin() { return this.fields2[7].value as number }
  set flickerIntervalMin(value) { this.fields2[7].value = value }

  /**
   * Controls the maximum interval for flickering.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMin}
   * - {@link flickerBrightness}
   */
  get flickerIntervalMax() { return this.fields2[8].value as number }
  set flickerIntervalMax(value) { this.fields2[8].value = value }

  /**
   * Brightness multiplier for the light when it flickers.
   * 
   * See also:
   * - {@link jitterAndFlicker}
   * - {@link flickerIntervalMin}
   * - {@link flickerIntervalMax}
   */
  get flickerBrightness() { return this.fields2[9].value as number }
  set flickerBrightness(value) { this.fields2[9].value = value }

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
  get volumeDensity() { return this.fields1[19].value as number }
  set volumeDensity(value) { this.fields1[19].value = value }

  /**
   * Controls whether or not {@link asymmetryParam} affects the fake fog from
   * {@link volumeDensity}.
   */
  get phaseFunction() { return this.fields1[21].value as boolean }
  set phaseFunction(value) { this.fields1[21].value = value }

  /**
   * Controls how the fake fog from {@link volumeDensity} scatters the light. This
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
  NodeMovement,
  [ActionType.NodeAcceleration]: NodeMovement, NodeAcceleration: NodeMovement,
  [ActionType.NodeSpin]: NodeMovement, NodeSpin: NodeMovement,
  [ActionType.NodeAccelerationRandomTurns]: NodeMovement, NodeAccelerationRandomTurns: NodeMovement,
  [ActionType.NodeAccelerationPartialFollow]: NodeMovement, NodeAccelerationPartialFollow: NodeMovement,
  [ActionType.NodeAccelerationSpin]: NodeMovement, NodeAccelerationSpin: NodeMovement,
  [ActionType.NodeSpeed]: NodeMovement, NodeSpeed: NodeMovement,
  [ActionType.NodeSpeedRandomTurns]: NodeMovement, NodeSpeedRandomTurns: NodeMovement,
  [ActionType.NodeSpeedPartialFollow]: NodeMovement, NodeSpeedPartialFollow: NodeMovement,
  [ActionType.NodeSpeedSpin]: NodeMovement, NodeSpeedSpin: NodeMovement,

  NodeTransform,
  [ActionType.StaticNodeTransform]: NodeTransform, StaticNodeTransform: NodeTransform,
  [ActionType.RandomNodeTransform]: NodeTransform, RandomNodeTransform: NodeTransform,

  ParticleMovement,
  [ActionType.ParticleAcceleration]: ParticleMovement, ParticleAcceleration: ParticleMovement,
  [ActionType.ParticleSpeed]: ParticleMovement, ParticleSpeed: ParticleMovement,
  [ActionType.ParticleSpeedRandomTurns]: ParticleMovement, ParticleSpeedRandomTurns: ParticleMovement,
  [ActionType.ParticleSpeedPartialFollow]: ParticleMovement, ParticleSpeedPartialFollow: ParticleMovement,
  [ActionType.ParticleAccelerationRandomTurns]: ParticleMovement, ParticleAccelerationRandomTurns: ParticleMovement,
  [ActionType.ParticleAccelerationPartialFollow]: ParticleMovement, ParticleAccelerationPartialFollow: ParticleMovement,

  [ActionType.NodeTranslation]: NodeTranslation, NodeTranslation,
  [ActionType.NodeAttachToCamera]: NodeAttachToCamera, NodeAttachToCamera,
  [ActionType.PlaySound]: PlaySound, PlaySound,
  [ActionType.NodeAttributes]: NodeAttributes, NodeAttributes,
  [ActionType.ParticleAttributes]: ParticleAttributes, ParticleAttributes,
  [ActionType.ParticleMultiplier]: ParticleMultiplier, ParticleMultiplier,
  [ActionType.FXRReference]: FXRReference, FXRReference,
  [ActionType.StateEffectMap]: StateEffectMap, StateEffectMap,
  [ActionType.EmitAllParticles]: EmitAllParticles, EmitAllParticles,
  [ActionType.EmitRandomParticles]: EmitRandomParticles, EmitRandomParticles,
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
  [ActionType.MultiTextureBillboardEx]: MultiTextureBillboardEx, MultiTextureBillboardEx,
  [ActionType.Model]: Model, Model,
  [ActionType.Tracer]: Tracer, Tracer,
  [ActionType.Distortion]: Distortion, Distortion,
  [ActionType.RadialBlur]: RadialBlur, RadialBlur,
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
    let ffxField: NumericalField = null
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
    const ffxFieldList: NumericalField[] = []
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
          return new BoolField(!!br.assertInt32(0, 1))
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

export interface NumericalField extends Field {
  value: number
}

class BoolField extends Field {

  declare value: boolean

  constructor(value: boolean = false) {
    super(FieldType.Boolean, value)
  }

}

class IntField extends Field implements NumericalField {

  declare value: number

  constructor(value: number = 0) {
    super(FieldType.Integer, value)
  }

}

class FloatField extends Field implements NumericalField {

  declare value: number

  constructor(value: number = 0) {
    super(FieldType.Float, value)
  }

}

class Keyframe<T extends ValueType> implements IKeyframe<T> {

  position: number
  value: ValueTypeMap[T]
  unkTangent1?: ValueTypeMap[T]
  unkTangent2?: ValueTypeMap[T]

  constructor(
    position: number,
    value: ValueTypeMap[T],
    unkTangent1?: ValueTypeMap[T],
    unkTangent2?: ValueTypeMap[T]
  ) {
    this.position = position
    this.value = value
    this.unkTangent1 = unkTangent1
    this.unkTangent2 = unkTangent2
  }

  static copy<T extends ValueType>(orig: IKeyframe<T>) {
    return new Keyframe(orig.position, orig.value, orig.unkTangent1, orig.unkTangent2)
  }

}

abstract class Property<T extends ValueType, F extends PropertyFunction> implements IModifiableProperty<T, F> {

  valueType: T
  function: F
  modifiers: Modifier[]

  constructor(
    valueType: T,
    func: F,
    modifiers: Modifier[] = []
  ) {
    this.valueType = valueType
    this.function = func
    this.modifiers = modifiers
  }

  get componentCount() { return this.valueType + 1 as 1 | 2 | 3 | 4 }

  withModifiers(...modifiers: Modifier[]) {
    this.modifiers.push(...modifiers)
    return this
  }

  static fromJSON(obj: {
    function: string
  }) {
    switch (PropertyFunction[obj.function]) {
      case PropertyFunction.Constant:
        return ValueProperty.fromJSON(obj)
      case PropertyFunction.Stepped:
      case PropertyFunction.Linear:
      case PropertyFunction.Curve1:
      case PropertyFunction.Curve2:
        return KeyframeProperty.fromJSON(obj)
      case PropertyFunction.CompCurve:
        return ComponentKeyframeProperty.fromJSON(obj)
    }
  }

  /**
   * Creates a {@link ZeroProperty} with a {@link RandomizerModifier},
   * effectively creating a property with a random value in a given range.
   * @param minValue The lower bound of the range of possible values for the
   * property.
   * @param maxValue The upper bound of the range of possible values for the
   * property.
   * @param seed A seed or set of seeds for the random number generator to use
   * to generate the random property values.
   * @returns 
   */
  static random(minValue: PropertyValue, maxValue: PropertyValue, seed: PropertyValue = randomInt32()) {
    return new ZeroProperty(Array.isArray(minValue) ? minValue.length - 1 : ValueType.Scalar, [
      new RandomizerModifier(minValue, maxValue, seed)
    ])
  }

  /**
   * Generates a rainbow color animation with a configurable duration.
   * @param duration How long it takes to go around the entire hue circle in
   * seconds. Defaults to 4 seconds.
   * @param loop Controls whether the animation should loop or not. Defaults to
   * true.
   * @returns 
   */
  static rainbow(duration: number = 4, loop: boolean = true) {
    const unit = duration / 6
    return new LinearProperty(loop, [
      new Keyframe(0,        [1, 0, 0, 1]),
      new Keyframe(unit,     [1, 0, 1, 1]),
      new Keyframe(unit * 2, [0, 0, 1, 1]),
      new Keyframe(unit * 3, [0, 1, 1, 1]),
      new Keyframe(unit * 4, [0, 1, 0, 1]),
      new Keyframe(unit * 5, [1, 1, 0, 1]),
      new Keyframe(unit * 6, [1, 0, 0, 1]),
    ])
  }

  abstract fieldCount: number
  abstract fields: NumericalField[]
  abstract toJSON(): any
  abstract scale(factor: number): void
  abstract minify(): Property<T, any>
  abstract valueAt(arg: number): ValueTypeMap[T]
  abstract clone(): Property<T, F>

}

class ValueProperty<T extends ValueType, F extends ValuePropertyFunction>
  extends Property<T, F>
  implements IModifiableProperty<T, F>, IValueProperty<T, F> {

  value: ValueTypeMap[T]

  constructor(
    valueType: T,
    func: F,
    value: ValueTypeMap[T],
    modifiers: Modifier[] = []
  ) {
    super(valueType, func, modifiers)
    this.value = value
  }

  get fieldCount(): number {
    switch (this.function) {
      case PropertyFunction.Zero:
      case PropertyFunction.One:
        return 0
      case PropertyFunction.Constant:
        return this.componentCount
    }
  }

  get fields(): NumericalField[] {
    switch (this.function) {
      case PropertyFunction.Zero:
      case PropertyFunction.One:
        return []
      case PropertyFunction.Constant:
        if (this.valueType === ValueType.Scalar) {
          return [ new FloatField(this.value as number) ]
        }
        return (this.value as Vector).map(e => new FloatField(e))
      default:
        throw new Error('Incompatible or unknown function in value property: ' + this.function)
    }
  }

  static fromFields<T extends ValueType, F extends ValuePropertyFunction>(
    valueType: T,
    func: F,
    modifiers: Modifier[],
    fieldValues: number[]
  ): ValueProperty<T, F> {
    switch (func) {
      case PropertyFunction.Zero:
        return new ZeroProperty(valueType).withModifiers(
          ...modifiers
        ) as unknown as ValueProperty<T, F>
      case PropertyFunction.One:
        return new OneProperty(valueType).withModifiers(
          ...modifiers
        ) as unknown as ValueProperty<T, F>
      case PropertyFunction.Constant:
        return new ConstantProperty(...(fieldValues as [number] | Vector)).withModifiers(
          ...modifiers
        ) as unknown as ValueProperty<T, F>
      default:
        throw new Error('Incompatible or unknown function in property: ' + func)
    }
  }

  static fromJSON(obj: {
    function: string
    value?: PropertyValue
    loop?: boolean
    modifiers?: any[]
  }) {
    return new ConstantProperty(...(Array.isArray(obj.value) ? obj.value : [obj.value])).withModifiers(
      ...(obj.modifiers ?? []).map(e => Modifier.fromJSON(e))
    )
  }

  toJSON() {
    switch (this.function) {
      case PropertyFunction.Zero:
      case PropertyFunction.One: {
        const o: {
          function: string
          value: PropertyValue
          modifiers?: any[]
        } = {
          function: 'Constant',
          value: this.valueType === ValueType.Scalar ? this.function : Array(this.componentCount).fill(this.function) as Vector,
        }
        if (this.modifiers.length > 0) o.modifiers = this.modifiers.map(mod => mod.toJSON())
        return o
      }
      case PropertyFunction.Constant: {
        const o: {
          function: string
          value: PropertyValue
          modifiers?: any[]
        } = {
          function: PropertyFunction[this.function],
          value: this.value,
        }
        if (this.modifiers.length > 0) o.modifiers = this.modifiers.map(mod => mod.toJSON())
        return o
      }
    }
  }

  scale(factor: number) {
    if (this.valueType === ValueType.Scalar) {
      (this.value as number) *= factor
    } else {
      this.value = (this.value as Vector).map(e => e * factor) as ValueTypeMap[T]
    }
  }

  minify(): ValueProperty<T, any> {
    switch (this.function) {
      case PropertyFunction.Zero:
      case PropertyFunction.One:
        return this
      case PropertyFunction.Constant:
        if (
          Array.isArray(this.value) &&
            this.value.every(e => e === 0) ||
            this.value === 0
        ) {
          return new ZeroProperty(this.valueType)
        }
        if (
          Array.isArray(this.value) &&
            this.value.every(e => e === 1) ||
            this.value === 1
        ) {
          return new OneProperty(this.valueType)
        }
        return this
    }
  }

  valueAt(arg: number): ValueTypeMap[T] {
    return this.value
  }

  clone(): ValueProperty<T, F> {
    return new ValueProperty(this.valueType, this.function, this.value, this.modifiers.map(e => Modifier.copy(e)))
  }

}

class KeyframeProperty<T extends ValueType, F extends KeyframePropertyFunction>
  extends Property<T, F>
  implements IModifiableProperty<T, F>, IKeyframeProperty<T, F> {

  loop: boolean
  keyframes: IKeyframe<T>[]

  constructor(
    valueType: T,
    func: F,
    loop: boolean = false,
    keyframes: IKeyframe<T>[] = [],
    modifiers: Modifier[] = []
  ) {
    super(valueType, func, modifiers)
    this.loop = loop
    this.keyframes = keyframes
  }

  sortKeyframes() {
    this.keyframes.sort((a, b) => a.position - b.position)
  }

  get fieldCount(): number {
    switch (this.function) {
      case PropertyFunction.Stepped:
      case PropertyFunction.Linear:
        return 1 + 2 * this.componentCount + (1 + this.componentCount) * this.keyframes.length
      case PropertyFunction.Curve1:
      case PropertyFunction.Curve2:
        return 1 + 2 * this.componentCount + (1 + 3 * this.componentCount) * this.keyframes.length
    }
  }

  get fields(): NumericalField[] {
    switch (this.function) {
      case PropertyFunction.Stepped:
      case PropertyFunction.Linear:
        this.sortKeyframes()
        return [
          new IntField(this.keyframes.length),
          ...arrayOf(2 * this.componentCount, () => new FloatField),
          ...this.keyframes.map(e => new FloatField(e.position)),
          ...this.keyframes.flatMap(
            this.valueType === ValueType.Scalar ?
              e => [ new FloatField(e.value as number) ] :
              e => (e.value as Vector).map(e => new FloatField(e))
          )
        ]
      case PropertyFunction.Curve1:
      case PropertyFunction.Curve2:
        this.sortKeyframes()
        return [
          new IntField(this.keyframes.length),
          ...arrayOf(2 * this.componentCount, () => new FloatField),
          ...this.keyframes.map(e => new FloatField(e.position)),
          ...this.keyframes.flatMap(
            this.valueType === ValueType.Scalar ?
              e => [ new FloatField(e.value as number) ] :
              e => (e.value as Vector).map(e => new FloatField(e))
          ),
          ...this.keyframes.flatMap(
            this.valueType === ValueType.Scalar ?
              e => [ new FloatField(e.unkTangent2 as number) ] :
              e => (e.unkTangent2 as Vector).map(e => new FloatField(e))
          ),
          ...this.keyframes.flatMap(
            this.valueType === ValueType.Scalar ?
              e => [ new FloatField(e.unkTangent1 as number) ] :
              e => (e.unkTangent1 as Vector).map(e => new FloatField(e))
          ),
        ]
      default:
        throw new Error('Incompatible or unknown function in property: ' + this.function)
    }
  }

  static fromFields<T extends ValueType, F extends KeyframePropertyFunction>(
    valueType: T,
    func: F,
    loop: boolean,
    modifiers: Modifier[],
    fieldValues: number[]
  ): KeyframeProperty<T, F> {
    switch (func) {
      case PropertyFunction.Stepped:
      case PropertyFunction.Linear:
        return new KeyframeProperty(valueType, func, loop, arrayOf(
          fieldValues[0],
          i => new Keyframe(
            fieldValues[1 + 2 * (valueType + 1) + i],
            (valueType === ValueType.Scalar ?
              fieldValues[1 + (2 + i) * (valueType + 1) + fieldValues[0]] :
              fieldValues.slice(1 + (2 + i) * (valueType + 1) + fieldValues[0], 1 + (2 + i) * (valueType + 1) + fieldValues[0] + (valueType + 1)) as Vector
            ) as ValueTypeMap[T]
          )
        ), modifiers)
      case PropertyFunction.Curve1:
      case PropertyFunction.Curve2:
        return new KeyframeProperty(valueType, func, loop, arrayOf(
          fieldValues[0],
          i => new Keyframe(
            fieldValues[1 + 2 * (valueType + 1) + i],
            (valueType === ValueType.Scalar ?
              fieldValues[1 + (2 + i) * (valueType + 1) + fieldValues[0]] :
              fieldValues.slice(1 + (2 + i) * (valueType + 1) + fieldValues[0], 1 + (2 + i) * (valueType + 1) + fieldValues[0] + (valueType + 1)) as Vector
            ) as ValueTypeMap[T],
            (valueType === ValueType.Scalar ?
              fieldValues[1 + (2 + i + fieldValues[0]) * (valueType + 1) + fieldValues[0]] :
              fieldValues.slice(1 + (2 + i + fieldValues[0]) * (valueType + 1) + fieldValues[0], 1 + (2 + i + fieldValues[0]) * (valueType + 1) + fieldValues[0] + (valueType + 1)) as Vector
            ) as ValueTypeMap[T],
            (valueType === ValueType.Scalar ?
              fieldValues[1 + (2 + i + 2 * fieldValues[0]) * (valueType + 1) + fieldValues[0]] :
              fieldValues.slice(1 + (2 + i + 2 * fieldValues[0]) * (valueType + 1) + fieldValues[0], 1 + (2 + i + 2 * fieldValues[0]) * (valueType + 1) + fieldValues[0] + (valueType + 1)) as Vector
            ) as ValueTypeMap[T],
          )
        ), modifiers)
      default:
        throw new Error('Incompatible or unknown function in property: ' + func)
    }
  }

  static fromJSON(obj: {
    function: string
    modifiers?: any[]
    keyframes?: IKeyframe<any>[]
    loop?: boolean
  }) {
    return new KeyframeProperty(
      Array.isArray(obj.keyframes[0].value) ? obj.keyframes[0].value.length - 1 : ValueType.Scalar,
      PropertyFunction[obj.function],
      obj.loop ?? false,
      obj.keyframes
    )
  }

  toJSON() {
    switch (this.function) {
      case PropertyFunction.Stepped:
      case PropertyFunction.Linear: {
        const o: {
          function: string
          loop?: boolean
          keyframes?: any[]
          modifiers?: any[]
        } = {
          function: PropertyFunction[this.function],
        }
        if (this.function > PropertyFunction.Constant) o.loop = this.loop
        o.keyframes = this.keyframes.map(e => ({
          position: e.position,
          value: e.value
        }))
        if (this.modifiers.length > 0) o.modifiers = this.modifiers.map(mod => mod.toJSON())
        return o
      }
      case PropertyFunction.Curve1:
      case PropertyFunction.Curve2: {
        const o: {
          function: string
          loop?: boolean
          keyframes?: any[]
          modifiers?: any[]
        } = {
          function: PropertyFunction[this.function],
        }
        if (this.function > PropertyFunction.Constant) o.loop = this.loop
        o.keyframes = this.keyframes.map(e => ({
          position: e.position,
          value: e.value,
          unkTangent1: e.unkTangent1,
          unkTangent2: e.unkTangent2,
        }))
        if (this.modifiers.length > 0) o.modifiers = this.modifiers.map(mod => mod.toJSON())
        return o
      }
    }
  }

  scale(factor: number) {
    for (const kf of this.keyframes) {
      if (this.valueType === ValueType.Scalar) {
        (kf.value as number) *= factor
      } else {
        kf.value = (kf.value as Vector).map(e => e * factor) as ValueTypeMap[T]
      }
    }
  }

  minify(): this {
    return this
  }

  valueAt(arg: number): ValueTypeMap[T] {
    switch (this.function) {
      case PropertyFunction.Stepped: {
        let i = 0
        while (
          i < this.keyframes.length - 1 && this.keyframes[i].position > arg
        ) i++
        return this.keyframes[i].value
      }
      case PropertyFunction.Linear:
      case PropertyFunction.Curve1:
      case PropertyFunction.Curve2: {
        //TODO: Implement better approximations for Curve1 and Curve2 prop values
        let i = 0
        while (
          i < this.keyframes.length - 1 && this.keyframes[i].position > arg
        ) i++
        if (i < this.keyframes.length - 1) {
          const d = this.keyframes[i+1].position - this.keyframes[i].position
          if (d === 0) return this.keyframes[i].value
          const p = (arg - this.keyframes[i].position) / d
          return (this.valueType === ValueType.Scalar ?
            lerp(
              this.keyframes[i].value as number,
              this.keyframes[i+1].value as number,
              p
            )
          : arrayOf(this.componentCount, j => lerp(
              this.keyframes[i].value[j],
              this.keyframes[i+1].value[j],
              p
            ))
          ) as ValueTypeMap[T]
        }
        return this.keyframes[i].value
      }
    }
  }

  clone(): KeyframeProperty<T, F> {
    return new KeyframeProperty(
      this.valueType,
      this.function,
      this.loop,
      this.keyframes.map(e => Keyframe.copy<T>(e)),
      this.modifiers.map(e => Modifier.copy(e))
    )
  }

}

class ComponentKeyframeProperty<T extends ValueType>
  extends Property<T, PropertyFunction.CompCurve>
  implements IModifiableProperty<T, PropertyFunction.CompCurve> {

  declare function: PropertyFunction.CompCurve
  loop: boolean
  components: IKeyframeProperty<ValueType.Scalar, PropertyFunction.Curve2>[]

  constructor(
    valueType: T,
    loop: boolean = false,
    components: IKeyframeProperty<ValueType.Scalar, PropertyFunction.Curve2>[],
    modifiers: Modifier[] = []
  ) {
    super(valueType, PropertyFunction.CompCurve, modifiers)
    this.loop = loop
    this.components = components
  }

  sortComponentKeyframes() {
    for (const comp of this.components) {
      comp.sortKeyframes()
    }
  }

  get fieldCount(): number {
    return 1 + 3 * this.componentCount + this.components.reduce((a, e) => a + 4 * e.keyframes.length, 0)
  }

  get fields(): NumericalField[] {
    this.sortComponentKeyframes()
    return [
      new FloatField(this.components.reduce(
        (a, e) => Math.max(a, e.keyframes[e.keyframes.length - 1].position),
        0
      )),
      ...this.components.map(e => new IntField(e.keyframes.length)),
      ...arrayOf(2 * this.componentCount, () => new FloatField),
      ...this.components.flatMap(comp => [
        ...comp.keyframes.map(e => new FloatField(e.position)),
        ...comp.keyframes.map(e => new FloatField(e.value)),
        ...comp.keyframes.map(e => new FloatField(e.unkTangent1)),
        ...comp.keyframes.map(e => new FloatField(e.unkTangent2)),
      ])
    ]
  }

  static fromFields<T extends ValueType>(
    valueType: T,
    loop: boolean,
    modifiers: Modifier[],
    fieldValues: number[]
  ): ComponentKeyframeProperty<T> {
    let offset = 1 + 3 * (valueType + 1)
    return new ComponentKeyframeProperty(valueType, loop, arrayOf(valueType + 1, i => {
      return KeyframeProperty.fromFields(ValueType.Scalar, PropertyFunction.Curve2, false, [], [
        fieldValues[1 + i], 0, 0,
        ...fieldValues.slice(offset, offset = offset + 4 * fieldValues[1 + i])
      ])
    }), modifiers)
  }

  toJSON() {
    const o: {
      function: 'CompCurve'
      components: IKeyframe<ValueType.Scalar>[][]
      loop?: boolean
      modifiers?: any[]
    } = {
      function: 'CompCurve',
      components: []
    }
    if (this.loop) o.loop = true
    o.components = this.components.map(e => e.keyframes.map(f => ({
      position: f.position,
      value: f.value,
      unkTangent1: f.unkTangent1,
      unkTangent2: f.unkTangent2,
    })))
    if (this.modifiers.length > 0) o.modifiers = this.modifiers.map(e => e.toJSON())
    return o
  }

  scale(factor: number) {
    for (const comp of this.components) {
      comp.scale(factor)
    }
  }

  minify(): this {
    return this
  }

  valueAt(arg: number): ValueTypeMap[T] {
    return (
      this.valueType === ValueType.Scalar ?
        this.components[0].valueAt(arg)
      : this.components.map(e => e.valueAt(arg))
    ) as ValueTypeMap[T]
  }

  clone(): ComponentKeyframeProperty<T> {
    return new ComponentKeyframeProperty(
      this.valueType,
      this.loop,
      this.components.map(e => e.clone()),
      this.modifiers.map(e => Modifier.copy(e))
    )
  }

}

class ZeroProperty extends ValueProperty<any, PropertyFunction.Zero> {
  constructor(valueType: ValueType = ValueType.Scalar, modifiers: Modifier[] = []) {
    super(
      valueType,
      PropertyFunction.Zero,
      valueType === ValueType.Scalar ? 0 : Array(valueType + 1).fill(0),
      modifiers
    )
  }
}

class OneProperty extends ValueProperty<any, PropertyFunction.One> {
  constructor(valueType: ValueType = ValueType.Scalar, modifiers: Modifier[] = []) {
    super(
      valueType,
      PropertyFunction.One,
      valueType === ValueType.Scalar ? 1 : Array(valueType + 1).fill(1),
      modifiers
    )
  }
}

class ConstantProperty<T extends ValueType> extends ValueProperty<T, PropertyFunction.Constant> {

  constructor(
    ...args:
      T extends ValueType.Scalar ? [number] :
      T extends ValueType.Vector2 ? Vector2 :
      T extends ValueType.Vector3 ? Vector3 :
      Vector4
  ) {
    super(args.length - 1 as T, PropertyFunction.Constant, (args.length === 1 ? args[0] : args) as ValueTypeMap[T])
  }

}

class SteppedProperty<T extends ValueType> extends KeyframeProperty<T, PropertyFunction.Stepped> {

  constructor(loop: boolean, keyframes: IKeyframe<T>[]) {
    if (keyframes.length < 2) {
      throw new Error ('Properties with a stepped function must have at least 2 stops.')
    }
    const comps = Array.isArray(keyframes[0].value) ? keyframes[0].value.length : 1
    super(comps - 1 as T, PropertyFunction.Stepped, loop, keyframes)
  }

}

class LinearProperty<T extends ValueType> extends KeyframeProperty<T, PropertyFunction.Linear> {

  constructor(loop: boolean, keyframes: IKeyframe<T>[]) {
    if (keyframes.length < 2) {
      throw new Error ('Properties with a linear function must have at least 2 stops.')
    }
    const comps = Array.isArray(keyframes[0].value) ? keyframes[0].value.length : 1
    super(comps - 1 as T, PropertyFunction.Linear, loop, keyframes)
  }

  /**
   * Creates a new linear property with only two steps.
   * @param loop Controls whether the property should loop or not.
   * @param endPosition The position of the second stop.
   * @param startValue The value of the first stop.
   * @param endValue The value of the second stop.
   * @returns The new linear property.
   */
  static basic(
    loop: boolean,
    endPosition: number,
    startValue: PropertyValue,
    endValue: PropertyValue
  ) {
    return new LinearProperty(loop, [
      new Keyframe(0, startValue),
      new Keyframe(endPosition, endValue),
    ])
  }

  /**
   * Creates a new linear property that approximates a power function.
   * @param loop Controls whether the property should loop or not.
   * @param exponent The exponent used in the power function. For example,
   * setting this to values greater than 1 will make the property value change
   * slowly at the start, but get faster and faster until it reaches the end.
   * @param stops How many stops to use. Must be greater than or equal to 2.
   * Using higher values will produce a smoother curve. Setting it to 2 will
   * make it linear, which means you might as well use the {@link basic} 
   * method instead of this.
   * @param endPosition The position of the last stop.
   * @param startValue The value of the first stop.
   * @param endValue The value of the last stop.
   * @returns The new linear property.
   */
  static power(
    loop: boolean,
    exponent: number,
    stops: number,
    endPosition: number,
    startValue: PropertyValue,
    endValue: PropertyValue
  ) {
    if (stops < 2) {
      throw new Error('Property stop count must be greater than or equal to 2.')
    }
    if (Array.isArray(startValue) && Array.isArray(endValue)) {
      return new LinearProperty(loop, arrayOf(stops, i => new Keyframe(
        i / (stops - 1) * endPosition,
        startValue.map((e: number, j: number) => lerp(e, endValue[j], (i / (stops - 1)) ** exponent)) as Vector
      )))
    } else if (typeof startValue === 'number' && typeof endValue === 'number') {
      return new LinearProperty(loop, arrayOf(stops, i => new Keyframe(
        i / (stops - 1) * endPosition,
        lerp(startValue, endValue, (i / (stops - 1)) ** exponent)
      )))
    } else {
      throw new Error('startValue and endValue must be of the same type.')
    }
  }

  /**
   * Creates a new linear property that approximates a sine wave.
   * @param min The value used when the sine wave is at its minimum.
   * @param max The value used when the sine wave is at its maximum.
   * @param period The period of the sine wave.
   * @param stops The number of stops to use to approximate the sine wave.
   * Higher values result in a smoother curve. Defaults to 21.
   * @returns The new linear property.
   */
  static sine(
    min: PropertyValue,
    max: PropertyValue,
    period: number,
    stops: number = 21
  ) {
    if (Array.isArray(min) && Array.isArray(max)) {
      return new LinearProperty(true, arrayOf(stops, i => new Keyframe(
        i / (stops - 1) * period,
        min.map((e, j) => (max[j] + e) / 2 + (max[j] - e) / 2 * Math.sin(i / (stops - 1) * Math.PI * 2)) as Vector
      )))
    } else if (typeof min === 'number' && typeof max === 'number') {
      return new LinearProperty(true, arrayOf(stops, i => new Keyframe(
        i / (stops - 1) * period,
        (max + min) / 2 + (max - min) / 2 * Math.sin(i / (stops - 1) * Math.PI * 2)
      )))
    } else {
      throw new Error('min and max must be of the same type.')
    }
  }

}

class Curve2Property<T extends ValueType> extends KeyframeProperty<T, PropertyFunction.Curve2> {

  constructor(loop: boolean, keyframes: IKeyframe<T>[]) {
    if (keyframes.length < 2) {
      throw new Error ('Properties with a curve function must have at least 2 stops.')
    }
    const comps = Array.isArray(keyframes[0].value) ? keyframes[0].value.length : 1
    super(comps - 1 as T, PropertyFunction.Curve2, loop, keyframes)
  }

}

class Modifier {

  static #typeEnumBValues = {
    [ModifierType.Randomizer1]: 0,
    [ModifierType.Randomizer2]: 4,
    [ModifierType.ExternalValue1]: 8,
    [ModifierType.ExternalValue2]: 12,
    [ModifierType.Randomizer3]: 16,
  }

  typeEnumA: number
  typeEnumB: number
  fields: NumericalField[]
  properties: IProperty<any, any>[]

  constructor(
    type: ModifierType,
    valueType: ValueType,
    fields: NumericalField[] = [],
    properties: IProperty<any, any>[] = []
  ) {
    this.type = type
    this.valueType = valueType
    this.fields = fields
    this.properties = properties
  }

  static typeEnumAToModifierType(typeEnumA: number): ModifierType {
    return (typeEnumA >>> 12 & 0b11) << 4 | typeEnumA >>> 4 & 0b1111
  }

  static modifierTypeToTypeEnumA(type: ModifierType, valueType: ValueType = ValueType.Scalar) {
    return (type >>> 4 | 0b1100) << 12 | (type & 0b1111) << 4 | valueType
  }

  static read(br: BinaryReader) {
    const typeEnumA = br.readUint16()
    const teA1 = typeEnumA >>> 12 & 0b11
    const teA2 = typeEnumA >>> 4 & 0b1111
    const modifierType = teA1 << 4 | teA2
    const valueType = typeEnumA & 0b11
    if (!(modifierType in ModifierType)) {
      throw new Error('Unknown property modifier type enum A: ' + typeEnumA)
    }
    br.assertUint8(0)
    br.assertUint8(1)
    const typeEnumB = br.readUint32()
    const fieldCount = br.readInt32()
    const propertyCount = br.readInt32()
    const fieldOffset = br.readInt32()
    br.assertInt32(0)
    const propertyOffset = br.readInt32()
    br.assertInt32(0)
    br.stepIn(propertyOffset)
    const properties = []
    for (let i = 0; i < propertyCount; ++i) {
      properties.push(readProperty(br, true))
    }
    br.stepOut()
    const fields = Field.readManyAt(br, fieldOffset, fieldCount, this)
    const mod = new Modifier(modifierType, valueType, fields, properties)
    mod.typeEnumB = typeEnumB
    return mod
  }

  static copy(mod: Modifier) {
    const copy = new Modifier(
      mod.type,
      mod.valueType,
      mod.fields.map(f => Field.copy(f) as NumericalField),
      mod.properties.map(p => p.clone())
    )
    copy.typeEnumB = mod.typeEnumB
    return copy
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

  writeProperties(bw: BinaryWriter, index: number, properties: IProperty<any, any>[]) {
    bw.fill(`Section8Section9sOffset${index}`, bw.position)
    for (const property of this.properties) {
      writeProperty(property, bw, properties, true)
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
    return Modifier.typeEnumAToModifierType(this.typeEnumA)
  }

  set type(value) {
    const valueType = this.valueType
    this.typeEnumA = Modifier.modifierTypeToTypeEnumA(value, valueType)
    this.typeEnumB = Modifier.#typeEnumBValues[value] | valueType
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
  }): Modifier {
    return new Modifier(
      typeEnumA,
      typeEnumB,
      fields.map(field => Field.fromJSON(field) as NumericalField),
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
   * @param type Controls what type of modifier to use. Defaults to
   * {@link ModifierType.ExternalValue1}.
   */
  constructor(
    extVal: ExternalValue,
    loop: boolean,
    stops: { position: number, value: PropertyValue }[],
    type: ModifierType.ExternalValue1 | ModifierType.ExternalValue2 = ModifierType.ExternalValue1
  ) {
    const valueType = typeof stops[0].value === 'number' ? 0 : stops[0].value.length - 1
    super(type, valueType, [
      new IntField(extVal)
    ], [
      new LinearProperty(loop, stops)
    ])
  }

  get externalValue() { return this.fields[0].value as number }
  set externalValue(value) { this.fields[0].value = value }

  valueAt(arg: number) { return this.properties[0].valueAt(arg) }

}

/**
 * A property modifier that changes the property value depending on the
 * "Display Blood" option.
 * 
 * The property value wil be multiplied by the values in this modifier.
 */
class BloodVisibilityModifier extends ExternalValueModifier {

  declare properties: [KeyframeProperty<any, any>]

  /**
   * @param onValue The value when "Display Blood" is set to "On".
   * @param mildValue The value when "Display Blood" is set to "Mild".
   * @param offValue The value when "Display Blood" is set to "Off".
   * @param type Controls what type of modifier to use. Defaults to
   * {@link ModifierType.ExternalValue1}.
   */
  constructor(
    onValue: PropertyValue,
    mildValue: PropertyValue,
    offValue: PropertyValue,
    type: ModifierType.ExternalValue1 | ModifierType.ExternalValue2 = ModifierType.ExternalValue1
  ) {
    super(ExternalValue.DisplayBlood, false, [
      new Keyframe(-1, offValue),
      new Keyframe(0, onValue),
      new Keyframe(1, mildValue),
    ], type)
  }

  get offValue() { return this.properties[0].keyframes[0].value }
  set offValue(value) { this.properties[0].keyframes[0].value = value }

  get onValue() { return this.properties[0].keyframes[1].value }
  set onValue(value) { this.properties[0].keyframes[1].value = value }

  get mildValue() { return this.properties[0].keyframes[2].value }
  set mildValue(value) { this.properties[0].keyframes[2].value = value }

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
      super(ModifierType.Randomizer2, valueType, [
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
      super(ModifierType.Randomizer2, ValueType.Scalar, [
        new IntField(seed),
        new FloatField(minValue),
        new FloatField(maxValue),
      ])
    }
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
  DistortionMode,
  DistortionShape,

  Nodes,
  Effects,
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
  SharedEmitterNode,

  Effect,
  LevelOfDetailEffect,
  BasicEffect,
  SharedEmitterEffect,

  Action,
  NodeMovement,
  NodeTranslation,
  NodeTransform,
  NodeAttachToCamera,
  PlaySound,
  ParticleMovement,
  NodeAttributes,
  ParticleAttributes,
  ParticleMultiplier,
  FXRReference,
  LevelOfDetailThresholds,
  StateEffectMap,
  EmitAllParticles,
  EmitRandomParticles,
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
  MultiTextureBillboardEx,
  Model,
  Tracer,
  Distortion,
  RadialBlur,
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

  Keyframe,
  Property,
  ValueProperty,
  KeyframeProperty,
  ComponentKeyframeProperty,
  ZeroProperty,
  OneProperty,
  ConstantProperty,
  SteppedProperty,
  LinearProperty,
  Curve2Property,

  Modifier,
  ExternalValueModifier,
  BloodVisibilityModifier,
  PrecipitationModifier,
  RandomizerModifier,

  Section10
}
