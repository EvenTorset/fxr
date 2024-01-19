export enum FXRVersion {
  /**
   * Used in Dark Souls 3.
   */
  DarkSouls3 = 4,
  /**
   * Used in Sekiro, Elden Ring, and Armored Core 6.
   */
  Sekiro = 5,
}

export enum ContainerType {
  /**
   * A root container.
   * 
   * This container type has a specialized subclass: {@link RootContainer}
   */
  Root = 2000,
  Proxy = 2001,
  LevelOfDetail = 2002,
  /**
   * A basic container.
   * 
   * This container type has a specialized subclass: {@link BasicContainer}
   */
  Basic = 2200,
  Randomizer = 2202,
}

export enum EffectType {
  LODThresholds = 1002,
  /**
   * A basic effect that can emit particles of many different types.
   * 
   * This effect type has a specialized subclass: {@link BasicEffect}
   */
  Basic = 1004,
  /**
   * An effect used to modify how the subcontainers of a
   * {@link ContainerType.Randomizer randomizer container} are picked.
   * 
   * May also be used for applying transforms to those subcontainers, and
   * possibly other, still unknown things.
   * 
   * This effect type has a specialized subclass: {@link RandomizerEffect}
   */
  Randomizer = 1005,
}

export enum ActionType {
  None = 0,
  Unk1 = 1,
  Unk15 = 15,
  /**
   * Makes the container spin.
   * 
   * This action type has a specialized subclass: {@link Spin}
   */
  Spin = 34,
  /**
   * Sets the translation and rotation of the container.
   * 
   * This action type has a specialized subclass: {@link StaticTransform}
   */
  StaticTransform = 35,
  Unk36 = 36,
  Unk46 = 46,
  Unk55 = 55,
  Unk60 = 60,
  Unk64 = 64,
  Unk65 = 65,
  /**
   * Plays a sound.
   */
  PlaySound = 75,
  Unk83 = 83,
  Unk84 = 84,
  Unk105 = 105,
  Unk106 = 106,
  Unk113 = 113,
  Unk120 = 120,
  Unk121 = 121,
  Unk122 = 122,
  Unk123 = 123,
  /**
   * Controls various things about the container, like its duration, and how
   * it is attached to the parent container.
   * 
   * This action type has a specialized subclass: {@link EffectLifetime}
   */
  EffectLifetime = 128,
  /**
   * Controls various things about the particles emitted by the effect, like
   * their duration, and how they are attached to the parent container.
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
   * References a different FXR file by its ID.
   */
  FXRReference = 132,
  /**
   * Controls the level of detail (LOD) distance thresholds for the
   * subcontainers.
   */
  LODThresholds = 133,
  /**
   * Maps states to effects in the parent container.
   * 
   * This action type has a specialized subclass: {@link StateEffectMap}
   */
  StateEffectMap = 199,
  Unk200 = 200,
  /**
   * Controls the weights for picking random subcontainers. Used in
   * {@link EffectType.Randomizer}.
   * 
   * This action type has a specialized subclass: {@link ContainerWeights}
   */
  ContainerWeights = 201,
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
   * This action type has a specialized subclass: {@link MotionEmitter}
   */
  MotionEmitter = 301,
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
   * This action type has a specialized subclass: {@link CuboidEmitterShape}
   */
  CuboidEmitterShape = 404,
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
  Unk600 = 600,
  Unk601 = 601,
  /**
   * Simple rectangular gradient particle.
   * 
   * This action type has a specialized subclass: {@link GradientParticle}
   */
  GradientParticle = 602,
  /**
   * Particle with a texture that may animate.
   * 
   * This action type has a specialized subclass: {@link AnimatedTextureParticle}
   */
  AnimatedTextureParticle = 603,
  Unk604 = 604,
  Unk605 = 605,
  Unk606 = 606,
  Unk607 = 607,
  Unk608 = 608,
  /**
   * Point light source "particle".
   * 
   * This action type has a specialized subclass: {@link PointLightSource}
   */
  PointLightSource = 609,
  Unk700 = 700, // Root container action
  Unk701 = 701, // Root container action
  Unk702 = 702, // Root container action
  Unk731 = 731,
  Unk732 = 732,
  Unk734 = 734,
  Unk10000 = 10000,
  Unk10001 = 10001,
  Unk10012 = 10012,
  Unk10013 = 10013,
  Unk10014 = 10014,
  Unk10015 = 10015,
  Unk10100 = 10100, // Root container action
  Unk10300 = 10300,
  Unk10400 = 10400, // Root container action
  Unk10500 = 10500, // Root container action
  Unk11000 = 11000,
}

export enum ValueType {
  Scalar = 0,
  Vector2 = 1,
  Vector3 = 2,
  Vector4 = 3
}

export enum PropertyFunction {
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

export enum ModifierType {
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

export enum FieldType {
  Boolean,
  Integer,
  Float,
}

export enum BlendMode {
  Unk0 = 0,
  Unk1 = 1,
  Normal = 2,
  Multiply = 3,
  Add = 4,
  Subtract = 5,
  Unk6 = 6,
  Screen = 7,
}

export enum ExternalValue {
  Unk0 = 0,
  Unk1 = 1, // Boolean? Only 0 or 1
  Unk3 = 3,
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
}

export enum Operator {
  NotEqual = 0,
  Equal = 1,
  GreaterThanOrEqual = 2,
  GreaterThan = 3,
}

export enum OperandType {
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

export enum AttachMode {
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

export enum PropertyArgument {
  /**
   * A constant value, usually just 0.
   */
  Constant,
  /**
   * Time in seconds since the particle was emitted.
   */
  ParticleAge,
  /**
   * Time in seconds since the effect was created.
   */
  EffectAge,
  /**
   * Time in seconds between the effect being created and the particle being
   * emitted. Stays constant per particle.
   */
  EmissionTime
}

export enum OrientationMode {
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
   * Faces the -Z direction of the parent container.
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
   * the parent container.
   */
  ParentYaw = 7,
}

export enum LightingMode {
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

export const EffectActionSlots = {
  [EffectType.Basic]: [
    [
      ActionType.EffectLifetime
    ],
    [
      ActionType.StaticTransform,
      ActionType.Unk36
    ],
    [
      ActionType.Unk1,
      ActionType.Unk15,
      ActionType.Spin,
      ActionType.Unk46,
      ActionType.Unk83,
      ActionType.Unk106,
      ActionType.Unk113,
      ActionType.Unk120,
      ActionType.Unk121,
      ActionType.Unk123
    ],
    [
      ActionType.PlaySound
    ],
    [
      ActionType.PeriodicEmitter,
      ActionType.MotionEmitter,
      ActionType.OneTimeEmitter
    ],
    [
      ActionType.PointEmitterShape,
      ActionType.DiskEmitterShape,
      ActionType.RectangleEmitterShape,
      ActionType.SphereEmitterShape,
      ActionType.CuboidEmitterShape,
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
      ActionType.Unk600,
      ActionType.Unk601,
      ActionType.GradientParticle,
      ActionType.AnimatedTextureParticle,
      ActionType.Unk604,
      ActionType.Unk605,
      ActionType.Unk606,
      ActionType.Unk607,
      ActionType.Unk608,
      ActionType.PointLightSource,
      ActionType.Unk10000,
      ActionType.Unk10001,
      ActionType.Unk10012,
      ActionType.Unk10013,
      ActionType.Unk10014,
      ActionType.Unk10015,
      ActionType.Unk10300,
      ActionType.Unk11000
    ],
    [
      ActionType.Unk55,
      ActionType.Unk60,
      ActionType.Unk64,
      ActionType.Unk65,
      ActionType.Unk84,
      ActionType.Unk105
    ],
    [],
    [
      ActionType.Unk130
    ],
    [
      ActionType.Unk731
    ],
    [
      ActionType.Unk732,
      ActionType.Unk734
    ]
  ],
  [EffectType.Randomizer]: [
    [
      ActionType.EffectLifetime
    ],
    [
      ActionType.StaticTransform,
      ActionType.Unk36
    ],
    [
      ActionType.Unk1,
      ActionType.Unk15,
      ActionType.Spin,
      ActionType.Unk46,
      ActionType.Unk83,
      ActionType.Unk106,
      ActionType.Unk113,
      ActionType.Unk120,
      ActionType.Unk121,
      ActionType.Unk123
    ],
    [
      ActionType.PlaySound
    ],
    [
      ActionType.PeriodicEmitter,
      ActionType.MotionEmitter,
      ActionType.OneTimeEmitter
    ],
    [
      ActionType.PointEmitterShape,
      ActionType.DiskEmitterShape,
      ActionType.RectangleEmitterShape,
      ActionType.SphereEmitterShape,
      ActionType.CuboidEmitterShape,
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
      ActionType.ContainerWeights
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

export class FXR {

  id: number
  version: FXRVersion

  stateMachine: StateMachine
  rootContainer: Container

  references: number[]
  unkExternalValues: number[]
  unkBloodEnabler: number[]
  unkEmpty: number[]

  /**
   * Creates a new effects resource (FXR) for FromSoftware's game engine.
   */
  constructor(
    id: number,
    version = FXRVersion.Sekiro,
    rootContainer: Container = new RootContainer,
    rootStateMachine: StateMachine = new StateMachine([
      new State([
        new StateCondition(Operator.GreaterThan, 2, -1, OperandType.Literal, 1, OperandType.External, 0)
      ])
    ]),
    references: number[] = [],
    unkExternalValues: number[] = [0],
    unkBloodEnabler: number[] = [],
    unkEmpty: number[] = [],
  ) {
    this.id = id
    this.version = version
    this.rootContainer = rootContainer
    this.stateMachine = rootStateMachine
    this.references = references
    this.unkExternalValues = unkExternalValues
    this.unkBloodEnabler = unkBloodEnabler
    this.unkEmpty = unkEmpty
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
    const stateMachineOffset = br.readInt32()
    br.assertInt32(1) // StateMachineCount
    br.position += 4 * 4
    // br.readInt32() // StateOffset
    // br.readInt32() // StateCount
    // br.readInt32() // ConditionOffset
    // br.readInt32() // ConditionCount
    const containerOffset = br.readInt32()
    br.position += 15 * 4
    // br.readInt32() // ContainerCount
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
    let unkExternalValues: number[] = []
    let unkBloodEnabler: number[] = []
    let unkEmpty: number[] = []

    if (version === FXRVersion.Sekiro) {
      const section12Offset = br.readInt32()
      const section12Count  = br.readInt32()
      const section13Offset = br.readInt32()
      const section13Count  = br.readInt32()
      const section14Offset = br.readInt32()
      const section14Count  = br.readInt32()
      const section15Offset = br.readInt32()
      const section15Count  = br.readInt32()

      references = br.getInt32s(section12Offset, section12Count)
      unkExternalValues = br.getInt32s(section13Offset, section13Count)
      unkBloodEnabler = br.getInt32s(section14Offset, section14Count)
      unkEmpty = br.getInt32s(section15Offset, section15Count)
    }

    br.position = stateMachineOffset
    const rootStateMachine = StateMachine.read(br)

    br.position = containerOffset
    const rootContainer = Container.read(br)

    return new FXR(
      id,
      version,
      rootContainer,
      rootStateMachine,
      references,
      unkExternalValues,
      unkBloodEnabler,
      unkEmpty,
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
    bw.reserveInt32('StateMachineOffset')
    bw.writeInt32(1)
    bw.reserveInt32('StateOffset')
    bw.writeInt32(this.stateMachine.states.length)
    bw.reserveInt32('ConditionOffset')
    bw.reserveInt32('ConditionCount')
    bw.reserveInt32('ContainerOffset')
    bw.reserveInt32('ContainerCount')
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
      bw.reserveInt32('Section12Offset')
      bw.writeInt32(this.references.length)
      bw.reserveInt32('Section13Offset')
      bw.writeInt32(this.unkExternalValues.length)
      bw.reserveInt32('Section14Offset')
      bw.writeInt32(this.unkBloodEnabler.length)
      bw.reserveInt32('Section15Offset')
      bw.writeInt32(this.unkEmpty.length)
    }

    bw.fill('StateMachineOffset', bw.position)
    this.stateMachine.write(bw)
    bw.pad(16)
    bw.fill('StateOffset', bw.position)
    this.stateMachine.writeStates(bw)
    bw.pad(16)
    bw.fill('ConditionOffset', bw.position)
    const states = this.stateMachine.states
    const conditions: StateCondition[] = []
    for (let i = 0; i < states.length; ++i) {
      states[i].writeConditions(bw, i, conditions)
    }
    bw.fill('ConditionCount', conditions.length)
    bw.pad(16)
    bw.fill('ContainerOffset', bw.position)
    const containers: Container[] = []
    this.rootContainer.write(bw, containers)
    this.rootContainer.writeContainers(bw, containers)
    bw.fill('ContainerCount', containers.length)
    bw.pad(16)
    bw.fill('EffectOffset', bw.position)
    let counter = { value: 0 }
    for (let i = 0; i < containers.length; ++i) {
      containers[i].writeEffects(bw, i, counter)
    }
    bw.fill('EffectCount', counter.value)
    bw.pad(16)
    bw.fill('ActionOffset', bw.position)
    counter.value = 0
    const actions: Action[] = []
    for (let i = 0; i < containers.length; ++i) {
      containers[i].writeActions(bw, i, counter, actions)
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

    bw.fill('Section12Offset', bw.position)
    bw.writeInt32s(this.references)
    bw.pad(16)

    bw.fill('Section13Offset', bw.position)
    bw.writeInt32s(this.unkExternalValues)
    bw.pad(16)

    bw.fill('Section14Offset', bw.position)
    bw.writeInt32s(this.unkBloodEnabler)
    bw.pad(16)

    if (this.unkEmpty.length > 0) {
      bw.fill('Section15Offset', bw.position)
      bw.writeInt32s(this.unkEmpty)
      bw.pad(16)
    } else {
      bw.fill('Section15Offset', 0)
    }

    return bw.getArrayBuffer()
  }

}

export class StateMachine {

  states: State[] = []

  constructor(states: State[] = []) {
    this.states = states
  }

  static read(br: BinaryReader) {
    br.assertInt32(0)
    const count = br.readInt32()
    const offset = br.readInt32()
    br.assertInt32(0)
    br.stepIn(offset)
    const states = []
    for (let i = 0; i < count; ++i) {
      states.push(State.read(br))
    }
    br.stepOut()
    return new StateMachine(states)
  }

  write(bw: BinaryWriter) {
    bw.writeInt32(0)
    bw.writeInt32(this.states.length)
    bw.reserveInt32('Section1StatesOffset')
    bw.writeInt32(0)
  }

  writeStates(bw: BinaryWriter) {
    bw.fill('Section1StatesOffset', bw.position)
    for (let i = 0; i < this.states.length; ++i) {
      this.states[i].write(bw, i)
    }
  }

}

export class State {

  conditions: StateCondition[] = []

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
   * ```txt
   * stateString = <conditionExpression>[ && <conditionExpression>[...]]
   * ```
   * See {@link StateCondition.from} for more information about
   * `conditionExpression`.
   * 
   * Examples:
   * ```txt
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

export class StateCondition {

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
   * be checked instead. Set it to -1 to disable the container if the condition
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

  static #reExpression = /^\s*(?<left>(?:state)?time|(?:unk)?minus2|ext(?:ernal)?\(\d+\)|\d+(?:\.\d+)?|\.\d+)\s*(?<op>==?|<=?|>=?|!=)\s*(?<right>(?:state)?time|(?:unk)?minus2|ext(?:ernal)?\(\d+\)|\d+(?:\.\d+)?|\.\d+)\s*(?:else(?:\sgoto)?\s+(?<else>-?\d+|stop|disable))?\s*$/i
  static #reLiteralOperand = /^\d+(?:\.\d+)?|\.\d+$/
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
   * ```txt
   * expression = <operand> <operator> <operand>[ else[ goto] <stateIndex>]
   * operand = <number> | External(<integer>) | StateTime | UnkMinus2
   * operator = != | == | > | >= | < | <=
   * stateIndex = <integer> | stop | disable
   * ```
   * 
   * `External`, `StateTime`, and `UnkMinus2` are all case-insensitive and have
   * shorter variations available. Here are some examples:
   * ```txt
   * ext(0)
   * stateTime
   * time
   * minus2
   * ```
   * 
   * ## Examples:
   * ```txt
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
    const leftOffset = hasLeftValue ? br.readInt32() : br.assertInt32(0)
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
    const rightOffset = hasRightValue ? br.readInt32() : br.assertInt32(0)
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

export class Container {

  type: ContainerType
  actions: Action[] = []
  effects: Effect[] = []
  containers: Container[] = []

  constructor(
    type: ContainerType,
    actions: Action[] = [],
    effects: Effect[] = [],
    containers: Container[] = []
  ) {
    this.type = type
    this.actions = actions
    this.effects = effects
    this.containers = containers
  }

  static read(br: BinaryReader) {
    const container = new Container(br.readInt16())
    br.assertUint8(0)
    br.assertUint8(1)
    br.assertInt32(0)
    const effectCount = br.readInt32()
    const actionCount = br.readInt32()
    const containerCount = br.readInt32()
    br.assertInt32(0)
    const effectOffset = br.readInt32()
    br.assertInt32(0)
    const actionOffset = br.readInt32()
    br.assertInt32(0)
    const containerOffset = br.readInt32()
    br.assertInt32(0)
    br.stepIn(containerOffset)
    for (let i = 0; i < containerCount; ++i) {
      container.containers.push(Container.read(br))
    }
    br.stepOut()
    br.stepIn(effectOffset)
    for (let i = 0; i < effectCount; ++i) {
      container.effects.push(Effect.read(br))
    }
    br.stepOut()
    br.stepIn(actionOffset)
    for (let i = 0; i < actionCount; ++i) {
      container.actions.push(Action.read(br))
    }
    br.stepOut()
    return container
  }

  write(bw: BinaryWriter, containers: Container[]) {
    const count = containers.length
    bw.writeInt16(this.type)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(0)
    bw.writeInt32(this.effects.length)
    bw.writeInt32(this.actions.length)
    bw.writeInt32(this.containers.length)
    bw.writeInt32(0)
    bw.reserveInt32(`ContainerEffectsOffset${count}`)
    bw.writeInt32(0)
    bw.reserveInt32(`ContainerActionsOffset${count}`)
    bw.writeInt32(0)
    bw.reserveInt32(`ContainerChildContainersOffset${count}`)
    bw.writeInt32(0)
    containers.push(this)
  }

  writeContainers(bw: BinaryWriter, containers: Container[]) {
    const num = containers.indexOf(this)
    if (this.containers.length === 0) {
      bw.fill(`ContainerChildContainersOffset${num}`, 0)
    } else {
      bw.fill(`ContainerChildContainersOffset${num}`, bw.position)
      for (const container of this.containers) {
        container.write(bw, containers)
      }
      for (const container of this.containers) {
        container.writeContainers(bw, containers)
      }
    }
  }

  writeEffects(bw: BinaryWriter, index: number, effectCounter: { value: number }) {
    if (this.effects.length === 0) {
      bw.fill(`ContainerEffectsOffset${index}`, 0)
    } else {
      bw.fill(`ContainerEffectsOffset${index}`, bw.position)
      for (let i = 0; i < this.effects.length; ++i) {
        this.effects[i].write(bw, effectCounter.value + i)
      }
      effectCounter.value += this.effects.length
    }
  }

  writeActions(bw: BinaryWriter, index: number, effectCounter: { value: number }, actions: Action[]) {
    bw.fill(`ContainerActionsOffset${index}`, bw.position)
    for (const action of this.actions) {
      action.write(bw, actions)
    }
    for (let i = 0; i < this.effects.length; ++i) {
      this.effects[i].writeActions(bw, effectCounter.value + i, actions)
    }
    effectCounter.value += this.effects.length
  }

}

export class RootContainer extends Container {

  constructor(
    rateOfTime: number | Property = 1,
    effects: Effect[] = [],
    containers: Container[] = [],
  ) {
    super(ContainerType.Root, [
      new Action(ActionType.Unk700),
      new Action(ActionType.Unk10100, false, true, 0, arrayOf(56, () => new Field(FieldType.Integer, 0))),
      new Action(ActionType.Unk10400, false, true, 0, arrayOf(65, () => new Field(FieldType.Integer, 1))),
      new Action(ActionType.Unk10500, false, true, 0, arrayOf(10, () => new Field(FieldType.Integer, 0)), [], [
        rateOfTime instanceof Property ? rateOfTime : new ConstantProperty(rateOfTime as number)
      ]),
    ], effects, containers)
  }

  get rateOfTime(): number { return this.actions.find(a => a.id === ActionType.Unk10500)?.properties1[0].stops[0].value as number }
  set rateOfTime(value: number | Property) {
    if (value instanceof Property) {
      this.actions.find(a => a.id === ActionType.Unk10500).properties1[0] = value
    } else {
      this.actions.find(a => a.id === ActionType.Unk10500).properties1[0] = new ConstantProperty(value as number)
    }
  }

}

export class BasicContainer extends Container {

  constructor(effects: Effect[] = [], containers: Container[] = []) {
    super(ContainerType.Basic, [
      new StateEffectMap(0)
    ], effects, containers)
  }

  mapStates(...effectIndices: number[]) {
    this.actions = [new StateEffectMap(...effectIndices)]
    return this
  }

}

export class Effect {

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

}

export class BasicEffect extends Effect {

  /**
   * Utility class for creating basic effects without needing to know the order
   * of actions, and without needing to create actions that have defaults.
   * 
   * Default actions:
   * Index | Action
   * ------|----------
   * 0     | {@link ActionType.EffectLifetime}
   * 1     | {@link ActionType.None}
   * 2     | {@link ActionType.None}
   * 3     | {@link ActionType.None}
   * 4     | {@link ActionType.OneTimeEmitter}
   * 5     | {@link ActionType.PointEmitterShape}
   * 6     | {@link ActionType.Unk500}
   * 7     | {@link ActionType.ParticleMultiplier}
   * 8     | {@link ActionType.ParticleLifetime}
   * 9     | {@link ActionType.None}
   * 10    | {@link ActionType.None}
   * 11    | {@link ActionType.None}
   * 12    | {@link ActionType.Unk130}
   * 13    | {@link ActionType.None}
   * 14    | {@link ActionType.None}
   * @param actions Actions to use in the effect. The order does not matter,
   * and it does not need to be a complete list. Actions will be placed in the
   * slots they fit in.
   */
  constructor(actions: Action[] = []) {
    super(EffectType.Basic, [
      new EffectLifetime,
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
      new Action(ActionType.Unk130, false, true, 0, [
        new Field(FieldType.Integer, 1),
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
      const index = EffectActionSlots[EffectType.Basic].findIndex(a => a.includes(action.id))
      if (index >= 0) {
        this.actions[index] = action
      } else {
        throw new Error('No slot for action: ' + action.id)
      }
    }
  }

}

export class RandomizerEffect extends Effect {
  
  /**
   * Utility class for creating randomizer effects without needing to know the
   * order of actions, and without needing to create actions that have
   * defaults.
   * 
   * Default actions:
   * Index | Action
   * ------|----------
   * 0     | {@link ActionType.EffectLifetime}
   * 1     | {@link ActionType.None}
   * 2     | {@link ActionType.None}
   * 3     | {@link ActionType.None}
   * 4     | {@link ActionType.OneTimeEmitter}
   * 5     | {@link ActionType.PointEmitterShape}
   * 6     | {@link ActionType.Unk500}
   * 7     | {@link ActionType.Unk200}
   * 13    | {@link ActionType.None}
   * 14    | {@link ActionType.None}
   * @param actions Actions to use in the effect. The order does not matter,
   * and it does not need to be a complete list. Actions will be placed in the
   * slots they fit in.
   */
  constructor(actions: Action[] = []) {
    super(EffectType.Randomizer, [
      new EffectLifetime,
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
      const index = EffectActionSlots[EffectType.Randomizer].findIndex(a => a.includes(action.id))
      if (index >= 0) {
        this.actions[index] = action
      } else {
        throw new Error('No slot for action: ' + action.id)
      }
    }
  }

}

type FieldTypeList = (FieldType | null)[]

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
const ActionFieldTypes: { [index: string]: { Fields1: FieldTypeList, Fields2: FieldTypeList } } = {
  [ActionType.Spin]: {
    Fields1: [
      FieldType.Integer
    ],
    Fields2: []
  },
  [ActionType.StaticTransform]: {
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
  [ActionType.ParticleLifetime]: {
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
  [ActionType.CuboidEmitterShape]: {
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
  [ActionType.GradientParticle]: {
    Fields1: [
      FieldType.Integer,
      null,
      null,
    ],
    Fields2: commonAction6xxFields2Types
  },
  [ActionType.AnimatedTextureParticle]: {
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
  [ActionType.PointLightSource]: {
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
      FieldType.Boolean, // Unk. Related to the 3 floats below
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
  }
}

export class Action {

  id: ActionType
  unk02: boolean
  unk03: boolean
  unk04: number
  fields1: Field[]
  fields2: Field[]
  properties1: Property[]
  properties2: Property[]
  section10s: Section10[]

  constructor(
    id: number = ActionType.None,
    unk02: boolean = false,
    unk03: boolean = true,
    unk04: number = 0,
    fields1: Field[] = [],
    fields2: Field[] = [],
    properties1: Property[] = [],
    properties2: Property[] = [],
    section10s: Section10[] = [],
  ) {
    this.id = id
    this.unk02 = unk02
    this.unk03 = unk03
    this.unk04 = unk04
    this.fields1 = fields1
    this.fields2 = fields2
    this.properties1 = properties1
    this.properties2 = properties2
    this.section10s = section10s
  }

  static read(br: BinaryReader): Action {
    const id = br.readInt16()
    const unk02 = br.readBool()
    const unk03 = br.readBool()
    const unk04 = br.readInt32()
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
    if (id in ActionFieldTypes) {
      fields1 = Field.readWithTypes(br, fieldCount1, ActionFieldTypes[id].Fields1, this)
      fields2 = Field.readWithTypes(br, fieldCount2, ActionFieldTypes[id].Fields2, this)
    } else {
      fields1 = Field.readMany(br, fieldCount1, this)
      fields2 = Field.readMany(br, fieldCount2, this)
    }
    br.stepOut()
    if (id in Actions) {
      const action = new Actions[id]()
      action.id = id,
      action.unk02 = unk02
      action.unk03 = unk03
      action.unk04 = unk04
      action.fields1 = fields1
      action.fields2 = fields2
      action.properties1 = properties1
      action.properties2 = properties2
      action.section10s = section10s
      return action
    } else {
      return new Action(id, unk02, unk03, unk04, fields1, fields2, properties1, properties2, section10s)
    }
  }

  write(bw: BinaryWriter, actions: Action[]) {
    const count = actions.length
    bw.writeInt16(this.id)
    bw.writeBool(this.unk02)
    bw.writeBool(this.unk03)
    bw.writeInt32(this.unk04)
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

}

/**
 * Makes the container spin.
 */
export class Spin extends Action {

  /**
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
    super(ActionType.Spin, false, true, 0, [
      new Field(FieldType.Integer, unkField)
    ], [], [
      spinX instanceof Property ? spinX : new ConstantProperty(spinX),
      spinXMult instanceof Property ? spinXMult : new ConstantProperty(spinXMult),
      spinY instanceof Property ? spinY : new ConstantProperty(spinY),
      spinYMult instanceof Property ? spinYMult : new ConstantProperty(spinYMult),
      spinZ instanceof Property ? spinZ : new ConstantProperty(spinZ),
      spinZMult instanceof Property ? spinZMult : new ConstantProperty(spinZMult),
    ])
  }

}

/**
 * Sets the translation and rotation of the container.
 */
export class StaticTransform extends Action {

  /**
   * Fields1:
   * Index | Value
   * ------|------
   * 0     | translateX
   * 1     | translateY
   * 2     | translateZ
   * 3     | rotateX
   * 4     | rotateY
   * 5     | rotateZ
   * @param translateX X translation. Defaults to 0.
   * @param translateY Y translation. Defaults to 0.
   * @param translateZ Z translation. Defaults to 0.
   * @param rotateX X rotation in degrees. Defaults to 0.
   * @param rotateY Y rotation in degrees. Defaults to 0.
   * @param rotateZ Z rotation in degrees. Defaults to 0.
   */
  constructor(
    translateX: number = 0,
    translateY: number = 0,
    translateZ: number = 0,
    rotateX: number = 0,
    rotateY: number = 0,
    rotateZ: number = 0
  ) {
    super(ActionType.StaticTransform, false, true, 0, [
      new Field(FieldType.Float, translateX),
      new Field(FieldType.Float, translateY),
      new Field(FieldType.Float, translateZ),
      new Field(FieldType.Float, rotateX),
      new Field(FieldType.Float, rotateY),
      new Field(FieldType.Float, rotateZ),
    ])
  }

}

export class UnkAction105 extends Action {

  constructor(
    acceleration: number | Property = 0,
    followFactor: number | Property = 0,
    maxRandomTurnAngle: number | Property = 0,
    unkProp1: number | Property = 0,
    unkProp2: number | Property = 0,
    unkField0: number = 0,
    unkField1: number = 0,
    unkField2: number = 0,
  ) {
    super(ActionType.Unk105, false, true, 0, [
      new Field(FieldType.Integer, unkField0),
      new Field(FieldType.Integer, unkField1),
      new Field(FieldType.Integer, unkField2), // Boolean? "Follow translation only"
    ], [], [
      acceleration instanceof Property ? acceleration : new ConstantProperty(acceleration),
      unkProp1 instanceof Property ? unkProp1 : new ConstantProperty(unkProp1),
      unkProp2 instanceof Property ? unkProp2 : new ConstantProperty(unkProp2),
      maxRandomTurnAngle instanceof Property ? maxRandomTurnAngle : new ConstantProperty(maxRandomTurnAngle),
      followFactor instanceof Property ? followFactor : new ConstantProperty(followFactor),
    ])
  }

}

/**
 * Controls various things about the container, like its duration, and how
 * it is attached to the parent container.
 */
export class EffectLifetime extends Action {

  /**
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
   * @param duration The container duration in seconds. Defaults to -1
   * (infinite).
   * @param delay The delay before the emitter begins emitting. Defaults to 0.
   * @param attachment Controls how the container is attached to its parent.
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
    super(ActionType.EffectLifetime, false, true, 0, [
      new Field(FieldType.Float, delay),
      new Field(FieldType.Integer, unkField1),
      new Field(FieldType.Integer, attachment),
      new Field(FieldType.Float, unkField3),
    ], [], [
      duration instanceof Property ? duration : new ConstantProperty(duration)
    ])
  }

}

/**
 * Controls various things about the particles emitted by the effect, like
 * their duration, and how they are attached to the parent container.
 */
export class ParticleLifetime extends Action {

  /**
   * Fields1:
   * Index | Value
   * ------|------
   * 0     | attachment
   * 
   * Properties1:
   * Index | Value
   * ------|------
   * 0     | duration
   * @param duration The particle duration in seconds. Defaults to -1
   * (infinite).
   * @param attachment Controls how the particle is attached to its parent.
   * Defaults to {@link AttachMode.Parent}.
   */
  constructor(
    duration: number | Property = -1,
    attachment: AttachMode = AttachMode.Parent
  ) {
    super(ActionType.ParticleLifetime, false, true, 0, [
      new Field(FieldType.Integer, attachment)
    ], [], [
      duration instanceof Property ? duration : new ConstantProperty(duration)
    ])
  }

}

/**
 * Controls various multipliers as well as the acceleration of particles.
 */
export class ParticleMultiplier extends Action {

  /**
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
   * @param uniformScale Scales the model uniformly based on {@link scaleX}.
   * The other scale properties in this action have no effect when this is
   * enabled.
   * @param acceleration Controls the acceleration of the particles, but only
   * if they have an action that allows them to accelerate. The direction of
   * the acceleration depends on the emitter shape.
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
    acceleration: number | Property = 0,
    scaleX: number | Property = 1,
    scaleY: number | Property = scaleX instanceof Property ? Property.copy(scaleX) : scaleX,
    scaleZ: number | Property = scaleX instanceof Property ? Property.copy(scaleX) : scaleX,
    color: Vector4 | Property = [1, 1, 1, 1],
  ) {
    super(ActionType.ParticleMultiplier, false, true, 0, [
      new Field(FieldType.Boolean, uniformScale),
    ], [], [
      acceleration instanceof Property ? acceleration : new ConstantProperty(acceleration),
      scaleX instanceof Property ? scaleX : new ConstantProperty(scaleX),
      scaleY instanceof Property ? scaleY : new ConstantProperty(scaleY),
      scaleZ instanceof Property ? scaleZ : new ConstantProperty(scaleZ),
      color instanceof Property ? color : new ConstantProperty(...color),
    ])
  }

}

/**
 * Maps states to effects in the parent container.
 * 
 * The index of each value represents the index of the state, and the value
 * represents the index of the effect that should be active when the state is
 * active.
 */
export class StateEffectMap extends Action {

  constructor(...effectIndices: number[]) {
    super(ActionType.StateEffectMap, true, false, 0, [], [], [], [], [
      new Section10(effectIndices.map(i => new Field(FieldType.Integer, i)))
    ])
  }

}

/**
 * Controls the weights for picking random subcontainers. Used in {@link EffectType.Randomizer}.
 */
export class ContainerWeights extends Action {

  constructor(...weights: number[]) {
    super(ActionType.ContainerWeights, false, true, 1, [], [], [], [], [
      new Section10(weights.map(w => new Field(FieldType.Integer, w)))
    ])
  }

}

/**
 * Emits particles periodically.
 */
export class PeriodicEmitter extends Action {

  /**
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
    super(ActionType.PeriodicEmitter, false, true, 0, [
      new Field(FieldType.Integer, unkField)
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
 */
export class MotionEmitter extends Action {

  /**
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
    super(ActionType.MotionEmitter, false, true, 0, [
      new Field(FieldType.Integer, unkField0),
      new Field(FieldType.Integer, unkField1),
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
export class OneTimeEmitter extends Action {

  constructor() {
    super(ActionType.OneTimeEmitter, false, true, 2)
  }

}

/**
 * Makes the emitter a single point.
 */
export class PointEmitterShape extends Action {

  /**
   * Fields1:
   * Index | Value
   * ------|------
   * 0     | unkField
   * @param unkField Unknown. Fields1, index 0. Defaults to 5.
   */
  constructor(unkField: number = 5) {
    super(ActionType.PointEmitterShape, false, true, 0, [
      new Field(FieldType.Integer, unkField)
    ])
  }

}

/**
 * Makes the emitter disk-shaped. The normal of the disk is aligned with the
 * Z-axis.
 */
export class DiskEmitterShape extends Action {

  /**
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
    super(ActionType.DiskEmitterShape, false, true, 0, [
      new Field(FieldType.Integer, unkField)
    ], [], [
      radius instanceof Property ? radius : new ConstantProperty(radius as number),
      centerWeight instanceof Property ? centerWeight : new ConstantProperty(centerWeight as number),
    ])
  }

}

/**
 * Makes the emitter rectangular. The normal of the rectangle is aligned
 * with the Z-axis.
 */
export class RectangleEmitterShape extends Action {

  /**
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
    super(ActionType.RectangleEmitterShape, false, true, 0, [
      new Field(FieldType.Integer, unkField)
    ], [], [
      sizeX instanceof Property ? sizeX : new ConstantProperty(sizeX as number),
      sizeY instanceof Property ? sizeY : new ConstantProperty(sizeY as number),
      centerWeight instanceof Property ? centerWeight : new ConstantProperty(centerWeight as number),
    ])
  }

}

/**
 * Makes the emitter spherical.
 */
export class SphereEmitterShape extends Action {

  /**
   * Fields1:
   * Index | Value
   * ------|------
   * 0     | volume
   * 
   * Properties1:
   * Index | Value
   * ------|------
   * 0     | radius
   * @param volume If true, particles will be emitted from anywhere within the
   * sphere. Otherwise the particles will be emitted from the surface of the
   * sphere. Defaults to true.
   * @param radius The radius of the sphere in meters. Defaults to 1.
   */
  constructor(
    volume: boolean = true,
    radius: number | Property = 1,
  ) {
    super(ActionType.SphereEmitterShape, false, true, 0, [
      new Field(FieldType.Boolean, volume)
    ], [], [
      radius instanceof Property ? radius : new ConstantProperty(radius as number),
    ])
  }

}

/**
 * Makes the emitter cuboidal.
 */
export class CuboidEmitterShape extends Action {

  /**
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
    super(ActionType.CuboidEmitterShape, false, true, 0, [
      new Field(FieldType.Integer, unkField),
      new Field(FieldType.Boolean, volume),
    ], [], [
      sizeX instanceof Property ? sizeX : new ConstantProperty(sizeX as number),
      sizeY instanceof Property ? sizeY : new ConstantProperty(sizeY as number),
      sizeZ instanceof Property ? sizeZ : new ConstantProperty(sizeZ as number),
    ])
  }

}

/**
 * Makes the emitter cylindrical.
 */
export class CylinderEmitterShape extends Action {

  /**
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
    super(ActionType.CylinderEmitterShape, false, true, 0, [
      new Field(FieldType.Integer, unkField),
      new Field(FieldType.Boolean, volume),
      new Field(FieldType.Integer, yAxis),
    ], [], [
      radius instanceof Property ? radius : new ConstantProperty(radius as number),
      height instanceof Property ? height : new ConstantProperty(height as number),
    ])
  }

}

export interface CommonAction6xxFields2Params {
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
  bloomColor?: Vector3,
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
  bloomStrength?: number,
  /**
   * Minimum view distance. If the particle is closer than this distance from
   * the camera, it will be hidden. Can be set to -1 to disable the limit.
   * Defaults to -1.
   * 
   * See also:
   * - {@link maxDistance}
   */
  minDistance?: number,
  /**
   * Maximum view distance. If the particle is farther away than this distance
   * from the camera, it will be hidden. Can be set to -1 to disable the limit.
   * Defaults to -1.
   * 
   * See also:
   * - {@link minDistance}
   */
  maxDistance?: number,
  /**
   * Negative values will make the particle draw in front of objects closer to
   * the camera, while positive values will make it draw behind objects farther
   * away from the camera. Defaults to 0.
   * 
   * {@link ActionType.AnimatedTextureParticle AnimatedTextureParticle} has a
   * {@link AnimatedTextureParticleParams.depthOffset property} that works the
   * same way, but reversed. Since that property was discovered before this
   * field, this field was given the "negative" name.
   */
  negativeDepthOffset?: number,
  /**
   * Controls how dark shaded parts of the particle are. Defaults to 0.
   */
  shadowDarkness?: number,
  /**
   * Controls whether or not specular highlights should be visible. Defaults to
   * false.
   * 
   * See also:
   * - {@link lighting}
   * - {@link glossiness}
   * - {@link specularity}
   */
  specular?: boolean,
  /**
   * Controls how sharp the specular highlights are. Defaults to 0.25.
   * 
   * See also:
   * - {@link lighting}
   * - {@link specular}
   * - {@link specularity}
   */
  glossiness?: number,
  /**
   * Controls how the particles are lit. See {@link LightingMode} for more
   * information. Defaults to {@link LightingMode.Unlit}.
   */
  lighting?: LightingMode,
  /**
   * Controls how bright the specular highlights are. Defaults to 0.5.
   * 
   * See also:
   * - {@link lighting}
   * - {@link specular}
   * - {@link glossiness}
   */
  specularity?: number,
}
export function createCommonAction6xxFields2({
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
}: CommonAction6xxFields2Params = {}) {
  return [
    /*  0 */ new Field(FieldType.Integer, 0),
    /*  1 */ new Field(FieldType.Integer, 0),
    /*  2 */ new Field(FieldType.Integer, 8),
    /*  3 */ new Field(FieldType.Integer, 0),
    /*  4 */ new Field(FieldType.Integer, 1),
    /*  5 */ new Field(FieldType.Float, bloomColor[0]),
    /*  6 */ new Field(FieldType.Float, bloomColor[1]),
    /*  7 */ new Field(FieldType.Float, bloomColor[2]),
    /*  8 */ new Field(FieldType.Float, bloomStrength),
    /*  9 */ new Field(FieldType.Integer, 0),
    /* 10 */ new Field(FieldType.Integer, 0),
    /* 11 */ new Field(FieldType.Integer, 0),
    /* 12 */ new Field(FieldType.Integer, 0),
    /* 13 */ new Field(FieldType.Integer, 0),
    /* 14 */ new Field(FieldType.Float, -1),
    /* 15 */ new Field(FieldType.Float, -1),
    /* 16 */ new Field(FieldType.Float, -1),
    /* 17 */ new Field(FieldType.Float, -1),
    /* 18 */ new Field(FieldType.Float, minDistance),
    /* 19 */ new Field(FieldType.Float, maxDistance),
    /* 20 */ new Field(FieldType.Integer, 0),
    /* 21 */ new Field(FieldType.Integer, 0),
    /* 22 */ new Field(FieldType.Integer, 0),
    /* 23 */ new Field(FieldType.Integer, 0),
    /* 24 */ new Field(FieldType.Integer, 0),
    /* 25 */ new Field(FieldType.Float, 1),
    /* 26 */ new Field(FieldType.Float, negativeDepthOffset),
    /* 27 */ new Field(FieldType.Integer, 1),
    /* 28 */ new Field(FieldType.Integer, 0),
    /* 29 */ new Field(FieldType.Float, 5),
    /* 30 */ new Field(FieldType.Float, shadowDarkness),
    /* 31 */ new Field(FieldType.Integer, 0),
    /* 32 */ new Field(FieldType.Integer, 1),
    /* 33 */ new Field(FieldType.Boolean, specular),
    /* 34 */ new Field(FieldType.Float, glossiness),
    /* 35 */ new Field(FieldType.Integer, lighting),
    /* 36 */ new Field(FieldType.Integer, -2),
    /* 37 */ new Field(FieldType.Integer, 0),
    /* 38 */ new Field(FieldType.Float, specularity),
    /* 39 */ new Field(FieldType.Integer, 1),
    /* 40 */ new Field(FieldType.Integer, 0),
    /* 41 */ new Field(FieldType.Integer, 0),
    /* 42 */ new Field(FieldType.Integer, 0),
    /* 43 */ new Field(FieldType.Integer, 0),
    /* 44 */ new Field(FieldType.Integer, 0),
  ]
}
/**
 * Super class for all specialized action classes using the common action 6xx
 * fields2 lists with accessors for each known field.
 */
export class CommonAction6xxFields2Action extends Action {

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

  /**
   * Negative values will make the particle draw in front of objects closer to
   * the camera, while positive values will make it draw behind objects farther
   * away from the camera.
   * 
   * {@link ActionType.AnimatedTextureParticle AnimatedTextureParticle} has a
   * {@link AnimatedTextureParticleParams.depthOffset property} that works the
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

export interface RectangleParticleParams extends CommonAction6xxFields2Params {
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
  unkScalarProp2_2?: number | Property
  unkVec4Prop2_3?: Vector4 | Property
  unkVec4Prop2_4?: Vector4 | Property
  unkVec4Prop2_5?: Vector4 | Property
  unkScalarProp2_6?: number | Property
}
/**
 * Simple particle with a gradient. Very primitive, but easy to create and use.
 * 
 * This action is really only good for creating simple rectangular particles
 * with a gradient and nothing fancy. In most cases, you probably want
 * {@link AnimatedTextureParticle} instead if you are making or modifying an
 * effect to use in a mod, as it has almost everything this action does, and
 * a lot more.
 */
export class GradientParticle extends CommonAction6xxFields2Action {

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
    negativeDepthOffset = 0,
    shadowDarkness = 0,
    specular = false,
    glossiness = 0.25,
    lighting = LightingMode.Unlit,
    specularity = 0.5,
    unkScalarProp2_2 = 0,
    unkVec4Prop2_3 = [1, 1, 1, 1],
    unkVec4Prop2_4 = [1, 1, 1, 1],
    unkVec4Prop2_5 = [1, 1, 1, 1],
    unkScalarProp2_6 = 0,
  }: RectangleParticleParams = {}) {
    super(ActionType.GradientParticle, false, true, 0, [
      /*  0 */ new Field(FieldType.Integer, -1),
      /*  1 */ new Field(FieldType.Integer, 1),
      /*  2 */ new Field(FieldType.Integer, 1),
    ], createCommonAction6xxFields2({
      bloomColor,
      bloomStrength,
      minDistance,
      maxDistance,
      negativeDepthOffset,
      shadowDarkness,
      specular,
      glossiness,
      lighting,
      specularity,
    }), [ // Properties1
      /*  0 */ blendMode instanceof Property ? blendMode : new ConstantProperty(blendMode),
      /*  1 */ width instanceof Property ? width : new ConstantProperty(width),
      /*  2 */ height instanceof Property ? height : new ConstantProperty(height),
      /*  3 */ color1 instanceof Property ? color1 : new ConstantProperty(...color1),
      /*  4 */ color2 instanceof Property ? color2 : new ConstantProperty(...color2),
      /*  5 */ startColor instanceof Property ? startColor : new ConstantProperty(...startColor),
      /*  6 */ endColor instanceof Property ? endColor : new ConstantProperty(...endColor),
      /*  7 */ widthMultiplier instanceof Property ? widthMultiplier : new ConstantProperty(widthMultiplier),
      /*  8 */ heightMultiplier instanceof Property ? heightMultiplier : new ConstantProperty(heightMultiplier),
      /*  9 */ color3 instanceof Property ? color3 : new ConstantProperty(...color3),
    ], [ // Properties2
      /*  0 */ rgbMultiplier instanceof Property ? rgbMultiplier : new ConstantProperty(rgbMultiplier),
      /*  1 */ alphaMultiplier instanceof Property ? alphaMultiplier : new ConstantProperty(alphaMultiplier),
      /*  2 */ unkScalarProp2_2 instanceof Property ? unkScalarProp2_2 : new ConstantProperty(unkScalarProp2_2),
      /*  3 */ unkVec4Prop2_3 instanceof Property ? unkVec4Prop2_3 : new ConstantProperty(...unkVec4Prop2_3),
      /*  4 */ unkVec4Prop2_4 instanceof Property ? unkVec4Prop2_4 : new ConstantProperty(...unkVec4Prop2_4),
      /*  5 */ unkVec4Prop2_5 instanceof Property ? unkVec4Prop2_5 : new ConstantProperty(...unkVec4Prop2_5),
      /*  6 */ unkScalarProp2_6 instanceof Property ? unkScalarProp2_6 : new ConstantProperty(unkScalarProp2_6),
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

  get minViewDistance() { return this.fields2[18].value as number }
  set minViewDistance(value) { this.fields2[18].value = value }

  get maxViewDistance() { return this.fields2[19].value as number }
  set maxViewDistance(value) { this.fields2[19].value = value }

}

export interface AnimatedTextureParticleParams extends CommonAction6xxFields2Params {
  /**
   * Texture ID. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  texture?: number | Property,
  /**
   * Blend mode. Defaults to {@link BlendMode.Normal}.
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  blendMode?: BlendMode | Property,
  /**
   * Offset for the position of the particle. Each axis has its own property.
   * Defaults to [0, 0, 0].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  offset?: Vector3 | Property[],
  /**
   * The width of the particle.
   * 
   * If {@link AnimatedTextureParticleParams.uniformScale uniformScale} is
   * enabled, this also controls the height.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  width?: number | Property,
  /**
   * The height of the particle.
   * 
   * If {@link AnimatedTextureParticleParams.uniformScale uniformScale} is
   * enabled, {@link AnimatedTextureParticleParams.width width} also controls
   * the height, and this property is ignored.
   * 
   * Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  height?: number | Property,
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  color1?: Vector4 | Property,
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EmissionTime Emission time}
   */
  color2?: Vector4 | Property,
  /**
   * Color multiplier. Defaults to [1, 1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}.
   */
  color3?: Vector4 | Property,
  /**
   * Parts of the particle with less opacity than this threshold will be
   * invisible. The range is 0-255. Defaults to 0.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaThreshold?: number | Property,
  /**
   * Rotation in degrees. Each axis has its own property. Defaults to
   * [0, 0, 0].
   * 
   * **Argument**: {@link PropertyArgument.Constant Constant 0}
   */
  rotation?: Vector3 | Property[],
  /**
   * Rotation speed in degrees per second. Each axis has its own property.
   * Defaults to [0, 0, 0].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  rotationSpeed?: Vector3 | Property[],
  /**
   * Rotation speed multiplier. Each axis has its own property. Defaults to
   * [1, 1, 1].
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  rotationSpeedMultiplier?: Vector3 | Property[],
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
  depthOffset?: number | Property,
  /**
   * The index of the frame to show from the texture atlas. Can be animated
   * using a {@link PropertyFunction.Linear linear property} or similar.
   * Defaults to 0.
   * 
   * Seemingly identical to
   * {@link AnimatedTextureParticleParams.frameIndexOffset unkProp1_22}? The sum of
   * these two properties is the actual frame index that gets used.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndex?: number | Property,
  /**
   * Seemingly identical to
   * {@link AnimatedTextureParticleParams.frameIndex frameIndex}? The sum of
   * these two properties is the actual frame index that gets used. Defaults to
   * 0.
   * 
   * **Argument**: {@link PropertyArgument.ParticleAge Particle age}
   */
  frameIndexOffset?: number | Property,
  /**
   * Scalar multiplier for the color that does not affect the alpha.
   * Effectively a brightness multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  rgbMultiplier?: number | Property,
  /**
   * Alpha multiplier. Defaults to 1.
   * 
   * **Argument**: {@link PropertyArgument.EffectAge Effect age}
   */
  alphaMultiplier?: number | Property,
  /**
   * Controls the orientation mode for the particles. See
   * {@link OrientationMode} for more information. Defaults to
   * {@link OrientationMode.Camera}.
   */
  orientation?: OrientationMode,
  /**
   * Normal map ID. Defaults to 0.
   */
  normalMap?: number,
  /**
   * Each particle will pick a random number between this value and 1, and the
   * width of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly thinner, down to half
   * width. Setting it to 2 will make them randomly wider, up to double width.
   * Defaults to 1.
   * 
   * If {@link AnimatedTextureParticleParams.uniformScale uniformScale} is
   * enabled, this also affects the height.
   * 
   * See also:
   * - {@link AnimatedTextureParticleParams.randomHeightMultiplier randomHeightMultiplier}
   */
  randomWidthMultiplier?: number,
  /**
   * Each particle will pick a random number between this value and 1, and the
   * height of the particle will be multiplied by this number. For example,
   * setting this to 0.5 will make the particles randomly shorter, down to half
   * height. Setting it to 2 will make them randomly taller, up to double
   * height. Defaults to 1.
   * 
   * If {@link AnimatedTextureParticleParams.uniformScale uniformScale} is
   * enabled,
   * {@link AnimatedTextureParticleParams.randomWidthMultiplier randomWidthMultiplier}
   * also affects the height, and this field is ignored.
   */
  randomHeightMultiplier?: number,
  /**
   * If enabled, the particle width-related properties and fields will control
   * both the width and height of the particles, and the height counterparts
   * will be ignored. Defaults to true.
   * 
   * See also:
   * - {@link AnimatedTextureParticleParams.width width}
   * - {@link AnimatedTextureParticleParams.height height}
   * - {@link AnimatedTextureParticleParams.randomWidthMultiplier randomWidthMultiplier}
   * - {@link AnimatedTextureParticleParams.randomHeightMultiplier randomHeightMultiplier}
   */
  uniformScale?: boolean,
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the number of columns in the texture. It should equal
   * `textureWidth / frameWidth`. Defaults to 1.
   * 
   * See also:
   * - {@link AnimatedTextureParticleParams.totalFrames totalFrames}
   */
  columns?: number,
  /**
   * To split the texture into multiple animation frames, this value must be
   * set to the total number of frames in the texture. Defaults to 1.
   * 
   * See also:
   * - {@link AnimatedTextureParticleParams.columns columns}
   */
  totalFrames?: number,
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
   * - {@link AnimatedTextureParticleParams.frameIndex frameIndex}
   */
  interpolateFrames?: boolean,
  unkScalarProp1_23?: number | Property,
  unkScalarProp1_24?: number | Property,
  unkScalarProp2_2?: number | Property,
  unkVec4Prop2_3?: Vector4 | Property,
  unkVec4Prop2_4?: Vector4 | Property,
  unkVec4Prop2_5?: Vector4 | Property,
  unkScalarProp2_6?: number | Property,
}
/**
 * Particle with a texture that may be animated. This is the most common
 * particle type and it has a lot of useful fields and properties.
 */
export class AnimatedTextureParticle extends CommonAction6xxFields2Action {

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
  }: AnimatedTextureParticleParams = {}) {
    super(ActionType.AnimatedTextureParticle, false, true, 0, [
      /*  0 */ new Field(FieldType.Integer, orientation),
      /*  1 */ new Field(FieldType.Integer, normalMap),
      /*  2 */ new Field(FieldType.Float, randomWidthMultiplier),
      /*  3 */ new Field(FieldType.Float, randomHeightMultiplier),
      /*  4 */ new Field(FieldType.Boolean, uniformScale),
      /*  5 */ new Field(FieldType.Integer, 0),
      /*  6 */ new Field(FieldType.Integer, columns),
      /*  7 */ new Field(FieldType.Integer, totalFrames),
      /*  8 */ new Field(FieldType.Boolean, interpolateFrames),
      /*  9 */ new Field(FieldType.Integer, 0),
      /* 10 */ new Field(FieldType.Integer, 0),
      /* 11 */ new Field(FieldType.Float, -1),
      /* 12 */ new Field(FieldType.Integer, 1),
      /* 13 */ new Field(FieldType.Integer, 0),
      /* 14 */ new Field(FieldType.Integer, 0),
      /* 15 */ new Field(FieldType.Integer, 1),
      /* 16 */ new Field(FieldType.Integer, 1),
      /* 17 */ new Field(FieldType.Integer, 0),
    ], createCommonAction6xxFields2({
      bloomColor,
      bloomStrength,
      minDistance,
      maxDistance,
      negativeDepthOffset,
      shadowDarkness,
      specular,
      glossiness,
      lighting,
      specularity,
    }), [
      /*  0 */ texture instanceof Property ? texture : new ConstantProperty(texture),
      /*  1 */ blendMode instanceof Property ? blendMode : new ConstantProperty(blendMode),
      /*  2 */ offset[0] instanceof Property ? offset[0] : new ConstantProperty(offset[0]),
      /*  3 */ offset[1] instanceof Property ? offset[1] : new ConstantProperty(offset[1]),
      /*  4 */ offset[2] instanceof Property ? offset[2] : new ConstantProperty(offset[2]),
      /*  5 */ width instanceof Property ? width : new ConstantProperty(width),
      /*  6 */ height instanceof Property ? height : new ConstantProperty(height),
      /*  7 */ color1 instanceof Property ? color1 : new ConstantProperty(...color1),
      /*  8 */ color2 instanceof Property ? color2 : new ConstantProperty(...color2),
      /*  9 */ color3 instanceof Property ? color3 : new ConstantProperty(...color3),
      /* 10 */ alphaThreshold instanceof Property ? alphaThreshold : new ConstantProperty(alphaThreshold),
      /* 11 */ rotation[0] instanceof Property ? rotation[0] : new ConstantProperty(rotation[0]),
      /* 12 */ rotation[1] instanceof Property ? rotation[1] : new ConstantProperty(rotation[1]),
      /* 13 */ rotation[2] instanceof Property ? rotation[2] : new ConstantProperty(rotation[2]),
      /* 14 */ rotationSpeed[0] instanceof Property ? rotationSpeed[0] : new ConstantProperty(rotationSpeed[0]),
      /* 15 */ rotationSpeedMultiplier[0] instanceof Property ? rotationSpeedMultiplier[0] : new ConstantProperty(rotationSpeedMultiplier[0]),
      /* 16 */ rotationSpeed[1] instanceof Property ? rotationSpeed[1] : new ConstantProperty(rotationSpeed[1]),
      /* 17 */ rotationSpeedMultiplier[1] instanceof Property ? rotationSpeedMultiplier[1] : new ConstantProperty(rotationSpeedMultiplier[1]),
      /* 18 */ rotationSpeed[2] instanceof Property ? rotationSpeed[2] : new ConstantProperty(rotationSpeed[2]),
      /* 19 */ rotationSpeedMultiplier[2] instanceof Property ? rotationSpeedMultiplier[2] : new ConstantProperty(rotationSpeedMultiplier[2]),
      /* 20 */ depthOffset instanceof Property ? depthOffset : new ConstantProperty(depthOffset),
      /* 21 */ frameIndex instanceof Property ? frameIndex : new ConstantProperty(frameIndex),
      /* 22 */ frameIndexOffset instanceof Property ? frameIndexOffset : new ConstantProperty(frameIndexOffset),
      /* 23 */ unkScalarProp1_23 instanceof Property ? unkScalarProp1_23 : new ConstantProperty(unkScalarProp1_23),
      /* 24 */ unkScalarProp1_24 instanceof Property ? unkScalarProp1_24 : new ConstantProperty(unkScalarProp1_24),
    ], [
      /*  0 */ rgbMultiplier instanceof Property ? rgbMultiplier : new ConstantProperty(rgbMultiplier),
      /*  1 */ alphaMultiplier instanceof Property ? alphaMultiplier : new ConstantProperty(alphaMultiplier),
      /*  2 */ unkScalarProp2_2 instanceof Property ? unkScalarProp2_2 : new ConstantProperty(unkScalarProp2_2),
      /*  3 */ unkVec4Prop2_3 instanceof Property ? unkVec4Prop2_3 : new ConstantProperty(...unkVec4Prop2_3),
      /*  4 */ unkVec4Prop2_4 instanceof Property ? unkVec4Prop2_4 : new ConstantProperty(...unkVec4Prop2_4),
      /*  5 */ unkVec4Prop2_5 instanceof Property ? unkVec4Prop2_5 : new ConstantProperty(...unkVec4Prop2_5),
      /*  6 */ unkScalarProp2_6 instanceof Property ? unkScalarProp2_6 : new ConstantProperty(unkScalarProp2_6),
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

}

export type PointLightSourceParams = {
  diffuseColor?: Vector4 | Property,
  specularColor?: Vector4 | Property,
  radius?: number | Property,
  diffuseMultiplier?: Vector4 | Property,
  specularMultiplier?: Vector4 | Property,
  castShadows?: boolean,
  separateSpecular?: boolean,
  fadeOutTime?: number,
  shadowDarkness?: number,
  glow?: number,
  glowConcentration?: number,
}
/**
 * Point light source.
 */
export class PointLightSource extends Action {

  constructor({
    diffuseColor = [1, 1, 1, 1],
    specularColor = diffuseColor instanceof Property ? Property.copy(diffuseColor) : diffuseColor.slice(),
    radius = 10,
    diffuseMultiplier = [1, 1, 1, 1],
    specularMultiplier = [1, 1, 1, 1],
    castShadows = false,
    separateSpecular = false,
    fadeOutTime = 0,
    shadowDarkness = 1,
    glow = 0,
    glowConcentration = 0.5,
  }: PointLightSourceParams = {}) {
    super(ActionType.PointLightSource, false, true, 0, [
      /*  0 */ new Field(FieldType.Integer, 0),
      /*  1 */ new Field(FieldType.Float, 0),
    ], [ // Fields 2
      /*  0 */ new Field(FieldType.Integer, 0),
      /*  1 */ new Field(FieldType.Boolean, false),
      /*  2 */ new Field(FieldType.Float, 0),
      /*  3 */ new Field(FieldType.Float, 0),
      /*  4 */ new Field(FieldType.Float, 0),
      /*  5 */ new Field(FieldType.Float, 0),
      /*  6 */ new Field(FieldType.Float, 0),
      /*  7 */ new Field(FieldType.Float, 0),
      /*  8 */ new Field(FieldType.Float, 0),
      /*  9 */ new Field(FieldType.Float, 0),
      /* 10 */ new Field(FieldType.Boolean, castShadows),
      /* 11 */ new Field(FieldType.Boolean, separateSpecular),
      /* 12 */ new Field(FieldType.Integer, fadeOutTime),
      /* 13 */ new Field(FieldType.Float, shadowDarkness),
      /* 14 */ new Field(FieldType.Boolean, false),
      /* 15 */ new Field(FieldType.Integer, 2),
      /* 16 */ new Field(FieldType.Boolean, false),
      /* 17 */ new Field(FieldType.Float, 0.5),
      /* 18 */ new Field(FieldType.Float, 0.5),
      /* 19 */ new Field(FieldType.Float, 0.5),
      /* 20 */ new Field(FieldType.Integer, 1),
      /* 21 */ new Field(FieldType.Integer, 100),
      /* 22 */ new Field(FieldType.Integer, 1),
      /* 23 */ new Field(FieldType.Integer, 1),
      /* 24 */ new Field(FieldType.Float, glow),
      /* 25 */ new Field(FieldType.Float, 100),
      /* 26 */ new Field(FieldType.Integer, 1),
      /* 27 */ new Field(FieldType.Float, glowConcentration),
      /* 28 */ new Field(FieldType.Float, 1),
      /* 29 */ new Field(FieldType.Integer, 1),
      /* 30 */ new Field(FieldType.Float, 1),
      /* 31 */ new Field(FieldType.Integer, 1),
      /* 32 */ new Field(FieldType.Integer, 1),
    ], [ // Properties1
      /*  0 */ diffuseColor instanceof Property ? diffuseColor : new ConstantProperty(...diffuseColor),
      /*  1 */ specularColor instanceof Property ? specularColor : new ConstantProperty(...specularColor),
      /*  2 */ radius instanceof Property ? radius : new ConstantProperty(radius),
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
      /*  3 */ diffuseMultiplier instanceof Property ? diffuseMultiplier : new ConstantProperty(...diffuseMultiplier),
      /*  4 */ specularMultiplier instanceof Property ? specularMultiplier : new ConstantProperty(...specularMultiplier),
    ])
  }

  get diffuseColor() { return this.properties1[0] }
  set diffuseColor(value) { setPropertyInList(this.properties1, 0, value) }

  get specularColor() { return this.properties1[1] }
  set specularColor(value) { setPropertyInList(this.properties1, 1, value) }

  get radius() { return this.properties1[2] }
  set radius(value) { setPropertyInList(this.properties1, 2, value) }

  get diffuseMultiplier() { return this.properties2[3] }
  set diffuseMultiplier(value) { setPropertyInList(this.properties2, 3, value) }

  get specularMultiplier() { return this.properties1[4] }
  set specularMultiplier(value) { setPropertyInList(this.properties2, 4, value) }

  get castShadows() { return this.fields2[10].value as boolean }
  set castShadows(value) { this.fields2[10].value = value }

  get separateSpecular() { return this.fields2[11].value as boolean }
  set separateSpecular(value) { this.fields2[11].value = value }

  get fadeOutTime() { return this.fields2[12].value as number }
  set fadeOutTime(value) { this.fields2[12].value = value }

  get shadowDarkness() { return this.fields2[13].value as number }
  set shadowDarkness(value) { this.fields2[13].value = value }

  get glow() { return this.fields2[24].value as number }
  set glow(value) { this.fields2[24].value = value }

  get glowConcentration() { return this.fields2[27].value as number }
  set glowConcentration(value) { this.fields2[27].value = value }

}

export const Actions = {
  [ActionType.Spin]: Spin, Spin,
  [ActionType.StaticTransform]: StaticTransform, StaticTransform,
  [ActionType.Unk105]: UnkAction105, UnkAction105,
  [ActionType.EffectLifetime]: EffectLifetime, EffectLifetime,
  [ActionType.ParticleLifetime]: ParticleLifetime, ParticleLifetime,
  [ActionType.ParticleMultiplier]: ParticleMultiplier, ParticleMultiplier,
  [ActionType.StateEffectMap]: StateEffectMap, StateEffectMap,
  [ActionType.ContainerWeights]: ContainerWeights, ContainerWeights,
  [ActionType.PeriodicEmitter]: PeriodicEmitter, PeriodicEmitter,
  [ActionType.MotionEmitter]: MotionEmitter, MotionEmitter,
  [ActionType.OneTimeEmitter]: OneTimeEmitter, OneTimeEmitter,
  [ActionType.PointEmitterShape]: PointEmitterShape, PointEmitterShape,
  [ActionType.DiskEmitterShape]: DiskEmitterShape, DiskEmitterShape,
  [ActionType.RectangleEmitterShape]: RectangleEmitterShape, RectangleEmitterShape,
  [ActionType.SphereEmitterShape]: SphereEmitterShape, SphereEmitterShape,
  [ActionType.CuboidEmitterShape]: CuboidEmitterShape, CuboidEmitterShape,
  [ActionType.CylinderEmitterShape]: CylinderEmitterShape, CylinderEmitterShape,
  [ActionType.GradientParticle]: GradientParticle, GradientParticle,
  [ActionType.AnimatedTextureParticle]: AnimatedTextureParticle, AnimatedTextureParticle,
  [ActionType.PointLightSource]: PointLightSource, PointLightSource,
}

export class Field {

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
        ffxField = new Field(FieldType.Float, single)
      } else {
        isInt = true
      }
    }

    if (ffxField === null) {
      if (isInt) {
        ffxField = new Field(FieldType.Integer, br.getInt32(br.position))
      } else {
        ffxField = new Field(FieldType.Float, br.getFloat32(br.position))
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
          return new Field(FieldType.Boolean, !!br.readInt32())
        case FieldType.Integer:
          return new Field(FieldType.Integer, br.readInt32())
        case FieldType.Float:
          return new Field(FieldType.Float, br.readFloat32())
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

export class Property {

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
    // Optimize constant properties with 0 and 1 values
    // Note: Doing this means reading and writing an FXR file does not produce
    // byte-perfect copies of the original, but it can make the file smaller,
    // and they should be functionally identical.
    if (this.function === PropertyFunction.Constant) {
      if (this.fields.every(f => f.value === 0)) {
        // Constant with only 0 fields, might as well be a ZeroProperty
        return new ZeroProperty(this.valueType).withModifiers(...this.modifiers).write(bw, properties, conditional)
      }
      if (this.fields.every(f => f.value === 1)) {
        // Constant with only 1 fields, might as well be a OneProperty
        return new OneProperty(this.valueType).withModifiers(...this.modifiers).write(bw, properties, conditional)
      }
    }

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
            prop.fields.splice(1 + cc * (2 + sc) + sc, 0, ...valuesArray.map(v => new Field(FieldType.Float, v)))
            prop.fields.splice(1 + cc * 2 + sc, 0, new Field(FieldType.Float, position))
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
            this.fields.push(...arrayOf(this.componentCount, () => new Field(FieldType.Float, 0)))
            break
          case PropertyFunction.One:
            this.fields.push(...arrayOf(this.componentCount, () => new Field(FieldType.Float, 1)))
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
            this.fields.push(...arrayOf(3 + 4 * cc, () => new Field(FieldType.Float, 0)))
            this.fields[0].type = FieldType.Integer
            this.fields[0].value = 2
            this.fields[2 + cc * 2].value = 1 // Stop 2 position
            break
          }
          case PropertyFunction.One: {
            const cc = this.componentCount
            this.fields.push(...arrayOf(3 + 4 * cc, () => new Field(FieldType.Float, 1)))
            this.fields[0].type = FieldType.Integer
            this.fields[0].value = 2
            this.fields[1 + cc * 2].value = 0 // Stop 1 position
            break
          }
          case PropertyFunction.Constant: {
            const cc = this.componentCount
            this.fields.push(...this.fields.map(f => new Field(FieldType.Float, f.value)))
            this.fields.splice(0, 0,
              new Field(FieldType.Integer, 2),
              ...arrayOf(cc * 2 + 2, () => new Field(FieldType.Float, 0))
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

}

export class ZeroProperty extends Property {
  constructor(type: ValueType = ValueType.Scalar) {
    super(type)
  }
}

export class OneProperty extends Property {
  constructor(type: ValueType = ValueType.Scalar) {
    super(type, PropertyFunction.One)
  }
}

export class ConstantProperty extends Property {
  constructor(...args: [value: number] | Vector) {
    if (args.length < 1 || args.length > 4) {
      throw new Error(`Invalid number of arguments for ConstantProperty: ${args.length}`)
    }
    super(args.length - 1, PropertyFunction.Constant, false, args.map(v => new Field(FieldType.Float, v)))
  }
}

export class SteppedProperty extends Property {

  constructor(loop: boolean, stops: { position: number, value: PropertyValue}[]) {
    if (stops.length === 0) {
      throw new Error ('Properties with a stepped function must have at least 2 stops.')
    }
    const comps = Array.isArray(stops[0].value) ? stops[0].value.length : 1
    super(comps - 1, PropertyFunction.Stepped, loop, [
      new Field(FieldType.Integer, stops.length),
      ...arrayOf(comps * 2, () => new Field(FieldType.Float, 0)),
      ...stops.map(s => new Field(FieldType.Float, s.position)),
      ...stops.flatMap(s => comps === 1 ?
        new Field(FieldType.Float, s.value as number)
      :
        (s.value as number[]).map(v => new Field(FieldType.Float, v))
      ),
    ])
  }

}

export class LinearProperty extends Property {

  constructor(loop: boolean, stops: { position: number, value: PropertyValue}[]) {
    if (stops.length === 0) {
      throw new Error ('Properties with a linear function must have at least 2 stops.')
    }
    const comps = Array.isArray(stops[0].value) ? stops[0].value.length : 1
    super(comps - 1, PropertyFunction.Linear, loop, [
      new Field(FieldType.Integer, stops.length),
      ...arrayOf(comps * 2, () => new Field(FieldType.Float, 0)),
      ...stops.map(s => new Field(FieldType.Float, s.position)),
      ...stops.flatMap(s => comps === 1 ?
        new Field(FieldType.Float, s.value as number)
      :
        (s.value as number[]).map(v => new Field(FieldType.Float, v))
      ),
    ])
  }

}

/**
 * A {@link LinearProperty linear property} with only two stops. A bit
 * limited, but very easy to create.
 */
export class BasicLinearProperty extends LinearProperty {

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

export class Curve2Property extends Property {

  constructor(loop: boolean, stops: { position: number, value: PropertyValue, inSlope: number, outSlope: number}[], unk1: number, unk2: number) {
    if (stops.length === 0) {
      throw new Error ('Properties with a curve function must have at least 2 stops.')
    }
    const comps = Array.isArray(stops[0].value) ? stops[0].value.length : 1
    super(comps - 1, PropertyFunction.Curve2, loop, [
      new Field(FieldType.Integer, stops.length),
      ...arrayOf(comps * 2, () => new Field(FieldType.Float, 0)),
      ...stops.map(s => new Field(FieldType.Float, s.position)),
      ...stops.flatMap(s => comps === 1 ?
        new Field(FieldType.Float, s.value as number)
      :
        (s.value as number[]).map(v => new Field(FieldType.Float, v))
      ),
      ...stops.slice(0, -1).flatMap(s => arrayOf(comps, i => new Field(FieldType.Float, Array.isArray(s.outSlope) ? s.outSlope[i] : s.outSlope))),
      ...arrayOf(comps, i => new Field(FieldType.Float, Array.isArray(unk1) ? unk1[i] : unk1)),
      ...stops.slice(1).flatMap(s => arrayOf(comps, i => new Field(FieldType.Float, Array.isArray(s.inSlope) ? s.inSlope[i] : s.inSlope))),
      ...arrayOf(comps, i => new Field(FieldType.Float, Array.isArray(unk2) ? unk2[i] : unk2)),
    ])
  }

}

export class Modifier {

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

}

/**
 * A property modifier that changes the property value depending on an
 * {@link ExternalValue external value}.
 * 
 * The property value wil be multiplied by the values in this modifier.
 */
export class ExternalValueModifier extends Modifier {

  /**
   * @param extVal The ID of the external value to use.
   * @param stops An array of objects with `position` and `value` properties
   * representing the external value and the modifier value it maps to. For
   * example, the value of {@link ExternalValue.DisplayBlood} is -1 when the
   * "Display Blood" option is off, so the `position` for the modifier value
   * should be -1 to change the property based on that.
   */
  constructor(
    extVal: ExternalValue,
    stops: { position: number, value: PropertyValue }[],
  ) {
    const valueType = typeof stops[0].value === 'number' ? 0 : stops[0].value.length - 1
    super(57440 | valueType, 8 | valueType, [
      new Field(FieldType.Integer, extVal)
    ], [
      new LinearProperty(false, stops)
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
export class BloodVisibilityModifier extends ExternalValueModifier {

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
    super(ExternalValue.DisplayBlood, [
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
 * A property modifer that changes the property value by a random amount in a
 * given range.
 */
export class Randomizer extends Modifier {

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
        ...arrayOf(minValue.length, i => new Field(FieldType.Integer, seedArray[i % seedArray.length])),
        ...minValue.map(e => new Field(FieldType.Float, e)),
        ...maxValue.map(e => new Field(FieldType.Float, e)),
      ])
    } else {
      if (Array.isArray(maxValue)) {
        throw new Error(`Incompatible min and max values for randomizer modifier: Min: ${minValue}, Max: ${maxValue.toString()}`)
      }
      if (Array.isArray(seed)) {
        throw new Error('Random scalar modifiers cannot use vector seeds.')
      }
      super(53376, 4, [
        new Field(FieldType.Integer, seed),
        new Field(FieldType.Float, minValue),
        new Field(FieldType.Float, maxValue),
      ])
    }
  }

}

/**
 * A property with random values in a given range.
 * 
 * Uses a {@link Randomizer} modifier.
 */
export class RandomProperty extends Property {

  constructor(minValue: PropertyValue, maxValue: PropertyValue, seed: PropertyValue = randomInt32()) {
    super(Array.isArray(minValue) ? minValue.length - 1 : ValueType.Scalar, PropertyFunction.Zero, false, [], [
      new Randomizer(minValue, maxValue, seed)
    ])
  }

}

export class Section10 {

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

}
