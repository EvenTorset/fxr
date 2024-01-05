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
  Root = 2000,
  FXRReference = 2001,
  LevelOfDetail = 2002,
  Normal = 2200, //TODO: Better name?
  Unk0 = 2202,
}

export enum EffectType {
  LODThresholds = 1002,
  Normal = 1004, //TODO: Better name?
  Unk0 = 1005,
}

export enum ActionType {
  None = 0,
  Unk1 = 1,
  Unk15 = 15,
  Spin = 34,
  StaticTransform = 35,
  Unk36 = 36,
  Unk46 = 46,
  Unk55 = 55,
  Unk60 = 60,
  Unk64 = 64,
  Unk65 = 65,
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
  Unk128 = 128,
  Unk129 = 129,
  Unk130 = 130,
  Unk131 = 131,
  FXRReference = 132,
  LODThresholds = 133,
  StateEffectMap = 199,
  Unk200 = 200,
  Unk201 = 201,
  PeriodicEmitter = 300,
  MotionEmitter = 301,
  OneTimeEmitter = 399,
  PointEmitterShape = 400,
  DiskEmitterShape = 401,
  RectangleEmitterShape = 402,
  SphereEmitterShape =  403,
  CuboidEmitterShape = 404,
  CylinderEmitterShape = 405,
  Unk500 = 500,
  Unk501 = 501,
  Unk502 = 502,
  Unk503 = 503,
  Unk600 = 600,
  Unk601 = 601,
  RectangleParticle = 602,
  Unk603 = 603,
  Unk604 = 604,
  Unk605 = 605,
  Unk606 = 606,
  Unk607 = 607,
  Unk608 = 608,
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
   */
  Zero = 0,
  /**
   * Always returns 1 for each component.
   */
  One = 1,
  /**
   * Always returns the value in the property's fields.
   */
  Constant = 2,
  /**
   * Uses step interpolation to interpolate the property's values.
   */
  Stepped = 3,
  /**
   * Uses linear interpolation to interpolate the property's values.
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
  HitEffectVariation = 2000,
  Unk2100 = 2100, // Blood related?
  Unk2200 = 2200, // Blood related?
  /**
   * Based on the "Display Blood" setting.
   * - Off: `-1`
   * - On: `0`
   * - Mild: `1`
   */
  DisplayBlood = 10000,
}

export enum Operator {
  Equal = 0,
  NotEqual = 1,
  LessThan = 2,
  LessThanOrEqual = 3,
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
   * The time since the effect was created in seconds.
   * 
   * Does not require a field.
   */
  Age = -1,
}

function arrayOf<T>(size: number, func: (index: number) => T): T[] {
  return Array(size).fill(null).map((e, i) => func(i))
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
    return super.getFloat32(offset, this.littleEndian)
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
        new StateCondition(Operator.LessThanOrEqual, 2, -1, OperandType.Literal, 1, OperandType.External, 0)
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

}

export class StateCondition {

  operator: Operator
  unk1: number
  targetStateIndex: number
  leftOperandType: OperandType
  leftOperandValue: number | null
  rightOperandType: OperandType
  rightOperandValue: number | null

  constructor(
    operator: Operator,
    unk1: number,
    targetStateIndex: number,
    leftOperandType: OperandType,
    leftOperandValue: number | null,
    rightOperandType: OperandType,
    rightOperandValue: number | null,
  ) {
    this.operator = operator
    this.unk1 = unk1
    this.targetStateIndex = targetStateIndex
    this.leftOperandType = leftOperandType
    this.leftOperandValue = leftOperandValue
    this.rightOperandType = rightOperandType
    this.rightOperandValue = rightOperandValue
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
        const value = br.readFloat32()
        br.stepOut()
        return value
      }
      case OperandType.UnkMinus2:
      case OperandType.Age:
        throw new Error('Unexpected value for operand without value: ' + OperandType[type])
    }
  }

  write(bw: BinaryWriter, conditions: StateCondition[]) {
    const count = conditions.length
    bw.writeInt16(this.operator | this.unk1 << 2)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(0)
    bw.writeInt32(this.targetStateIndex)
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

type FieldTypeList = (FieldType | null)[]

const ActionFieldTypes: { [index: string]: { Fields1: FieldTypeList, Fields2: FieldTypeList } } = {
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
  [ActionType.RectangleParticle]: {
    Fields1: [
      FieldType.Integer, // Blend mode
      null,
      null,
    ],
    Fields2: [
      null,
      null,
      null,
      null,
      null,
      FieldType.Float, // Red multiplier? Doesn't seem to work?
      FieldType.Float, // Green multiplier? Doesn't seem to work?
      FieldType.Float, // Blue multiplier? Doesn't seem to work?
      FieldType.Float, // Alpha multiplier? Doesn't seem to work?
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
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      FieldType.Float,
      null,
      null,
      null,
      null,
      null,
    ]
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
      null,
      null,
      FieldType.Float,
      FieldType.Float,
      FieldType.Float,
      null,
      null, // Always 100, integer?
      null,
      null,
      FieldType.Float, // Glow
      FieldType.Float,
      null,
      FieldType.Float, // Glow concentration
      FieldType.Float,
      null,
      null,
      null,
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

export class Spin extends Action {

  /**
   * Makes the emitter spin.
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
      spinX instanceof Property ? spinX : new ConstantProperty(spinX as number),
      spinXMult instanceof Property ? spinXMult : new ConstantProperty(spinXMult as number),
      spinY instanceof Property ? spinY : new ConstantProperty(spinY as number),
      spinYMult instanceof Property ? spinYMult : new ConstantProperty(spinYMult as number),
      spinZ instanceof Property ? spinZ : new ConstantProperty(spinZ as number),
      spinZMult instanceof Property ? spinZMult : new ConstantProperty(spinZMult as number),
    ])
  }

}

export class StaticTransform extends Action {

  /**
   * Sets the translation and rotation of the effect.
   * 
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

export class StateEffectMap extends Action {

  constructor(...effectIndices: number[]) {
    super(ActionType.StateEffectMap, true, false, 0, [], [], [], [], [
      new Section10(effectIndices.map(i => new Field(FieldType.Integer, i)))
    ])
  }

}

export class PeriodicEmitter extends Action {

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
   * 3     | unkProp
   * @param interval Time between emitting new particles in seconds.
   * @param perInterval The number of particles to emit per interval. They all spawn at the same time per interval.
   * @param totalIntervals The total number of intervals to emit particles. Once this limit is reached, the emitter is will stop emitting.
   * @param unkProp Unknown. Properties1, index 3.
   * @param unkField Unknown. Fields1, index 0.
   */
  constructor(
    interval: number | Property = 1,
    perInterval: number | Property = 1,
    totalIntervals: number | Property = -1,
    unkProp: number | Property = -1,
    unkField: number = 1
  ) {
    super(ActionType.PeriodicEmitter, false, true, 0, [
      new Field(FieldType.Integer, unkField)
    ], [], [
      interval instanceof Property ? interval : new ConstantProperty(interval as number),
      perInterval instanceof Property ? perInterval : new ConstantProperty(perInterval as number),
      totalIntervals instanceof Property ? totalIntervals : new ConstantProperty(totalIntervals as number),
      unkProp instanceof Property ? unkProp : new ConstantProperty(unkProp as number),
    ])
  }

  get interval() { return this.properties1[0] }
  set interval(value) { this.properties1[0] = value }

  get perInterval() { return this.properties1[1] }
  set perInterval(value) { this.properties1[1] = value }

  get total() { return this.properties1[2] }
  set total(value) { this.properties1[2] = value }

  get unkProp() { return this.properties1[3] }
  set unkProp(value) { this.properties1[3] = value }

  get unkField() { return this.fields1[0].value }
  set unkField(value) { this.fields1[0].value = value }

}

export class MotionEmitter extends Action {

  /**
   * Emits particles once it has moved a certain distance from where it last emitted particles.			
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
   * @param threshold How much the emitter must move to trigger emission. Defaults to 0.1.
   * @param maxConcurrent How many particles from this emitter are allowed at the same time. Defaults to 100.
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

export class OneTimeEmitter extends Action {

  /**
   * Emits one particle once.
   * 
   * Contains no fields or properties.
   */
  constructor() {
    super(ActionType.OneTimeEmitter, false, true, 2)
  }

}

export class PointEmitterShape extends Action {

  /**
   * Makes the emitter a single point.
   * 
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

export class DiskEmitterShape extends Action {

  /**
   * Makes the emitter disk-shaped. The normal of the disk is aligned with the Z-axis.
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
   * @param radius The radius of the disk in meters. Defaults to 1.
   * @param centerWeight
   *   Controls the weight of the center of the disk for picking random positions to emit from.
   *   At 0, particles are equally likely to emit from anywhere inside the disk.
   *   At 1, particles have a 100% chance of being emitted from the center point.
   *   At -1, particles have a 100% chance of being emitted from the perimeter circle of the disk.
   *   Defaults to 0.
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

export class RectangleEmitterShape extends Action {

  /**
   * Makes the emitter rectangle-shaped. The normal of the rectangle is aligned with the Z-axis.
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
   * @param sizeX Width of the rectangle. Defaults to 1.
   * @param sizeY Height of the rectangle. Defaults to sizeX.
   * @param centerWeight
   *   Controls the weight of the center of the rectangle for picking random positions to emit from.
   *   At 0, particles are equally likely to emit from anywhere inside the rectangle.
   *   At 1, particles have a 100% chance of being emitted from the center point.
   *   At -1, particles have a 100% chance of being emitted from the perimeter of the rectangle.
   *   Defaults to 0.
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

export class SphereEmitterShape extends Action {

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
   * @param volume If true, particles will be emitted from anywhere within the sphere. Otherwise the particles will be emitted from the surface of the sphere. Defaults to true.
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

export class CuboidEmitterShape extends Action {

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
   * @param volume If true, particles will be emitted from anywhere within the cuboid. Otherwise the particles will be emitted from the surface of the cuboid. Defaults to true.
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

export class CylinderEmitterShape extends Action {

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
   * @param volume If true, particles will be emitted from anywhere within the cylinder. Otherwise the particles will be emitted from the surface of the cylinder. Defaults to true.
   * @param radius The radius of the cylinder. Defaults to 1.
   * @param height The height of the cylinder. Defaults to 1.
   * @param yAxis If true, the cylinder will be aligned with the Y-axis instead of the Z-axis. Defaults to true.
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

export type RectangleParticleParams = {
  blendMode?: BlendMode | Property
  width?: number | Property
  height?: number | Property
  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link RectangleParticleParams.colorMultiplier2 colorMultiplier2}?
   * 
   * **Argument**: Particle age
   */
  colorMultiplier1?: Vector4 | Property
  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link RectangleParticleParams.colorMultiplier1 colorMultiplier1}?
   * 
   * **Argument**: Particle age
   */
  colorMultiplier2?: Vector4 | Property
  /**
   * The color for the "start" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link RectangleParticleParams.endColor end color} across the rectangle.
   * 
   * **Argument**: Effect age
   */
  startColor?: Vector4 | Property
  /**
   * The color for the "end" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link RectangleParticleParams.startColor start color} across the rectangle.
   * 
   * **Argument**: Effect age
   */
  endColor?: Vector4 | Property
  widthMultiplier?: number | Property
  heightMultiplier?: number | Property
  /**
   * Color multiplier for the entire rectangle.
   * 
   * **Argument**: Effect age
   */
  colorMultiplier3?: Vector4 | Property
  rgbMultiplier?: number | Property
  alphaMultiplier?: number | Property
  unkScalarProp2_2?: number | Property
  unkVec4Prop2_3?: Vector4 | Property
  unkVec4Prop2_4?: Vector4 | Property
  unkVec4Prop2_5?: Vector4 | Property
  unkScalarProp2_6?: number | Property
}
export class RectangleParticle extends Action {

  constructor({
    blendMode = BlendMode.Normal,
    width = 1,
    height = 1,
    colorMultiplier1 = [1, 1, 1, 1],
    colorMultiplier2 = [1, 1, 1, 1],
    startColor = [1, 1, 1, 1],
    endColor = [1, 1, 1, 1],
    widthMultiplier = 1,
    heightMultiplier = 1,
    colorMultiplier3 = [1, 1, 1, 1],
    rgbMultiplier = 1,
    alphaMultiplier = 1,
    unkScalarProp2_2 = 0,
    unkVec4Prop2_3 = [1, 1, 1, 1],
    unkVec4Prop2_4 = [1, 1, 1, 1],
    unkVec4Prop2_5 = [1, 1, 1, 1],
    unkScalarProp2_6 = 0,
  }: RectangleParticleParams = {}) {
    super(ActionType.RectangleParticle, false, true, 0, [
      /*  0 */ new Field(FieldType.Integer, -1),
      /*  1 */ new Field(FieldType.Integer, 1),
      /*  2 */ new Field(FieldType.Integer, 1),
    ], [ // Fields2
      /*  0 */ new Field(FieldType.Integer, 0),
      /*  1 */ new Field(FieldType.Integer, 0),
      /*  2 */ new Field(FieldType.Integer, 8),
      /*  3 */ new Field(FieldType.Integer, 0),
      /*  4 */ new Field(FieldType.Integer, 1),
      /*  5 */ new Field(FieldType.Float, 1),
      /*  6 */ new Field(FieldType.Float, 1),
      /*  7 */ new Field(FieldType.Float, 1),
      /*  8 */ new Field(FieldType.Float, 1),
      /*  9 */ new Field(FieldType.Integer, 1),
      /* 10 */ new Field(FieldType.Integer, 0),
      /* 11 */ new Field(FieldType.Integer, 0),
      /* 12 */ new Field(FieldType.Integer, 0),
      /* 13 */ new Field(FieldType.Integer, 0),
      /* 14 */ new Field(FieldType.Float, -1),
      /* 15 */ new Field(FieldType.Float, -1),
      /* 16 */ new Field(FieldType.Float, -1),
      /* 17 */ new Field(FieldType.Float, -1),
      /* 18 */ new Field(FieldType.Float, -1),
      /* 19 */ new Field(FieldType.Float, -1),
      /* 20 */ new Field(FieldType.Integer, 0),
      /* 21 */ new Field(FieldType.Integer, 0),
      /* 22 */ new Field(FieldType.Integer, 0),
      /* 23 */ new Field(FieldType.Integer, 0),
      /* 24 */ new Field(FieldType.Integer, 0),
      /* 25 */ new Field(FieldType.Float, 1),
      /* 26 */ new Field(FieldType.Integer, 0),
      /* 27 */ new Field(FieldType.Integer, 1),
      /* 28 */ new Field(FieldType.Integer, 0),
      /* 29 */ new Field(FieldType.Integer, 0),
      /* 30 */ new Field(FieldType.Integer, 0),
      /* 31 */ new Field(FieldType.Integer, 0),
      /* 32 */ new Field(FieldType.Integer, 1),
      /* 33 */ new Field(FieldType.Integer, 0),
      /* 34 */ new Field(FieldType.Float, 0.5),
      /* 35 */ new Field(FieldType.Integer, -2),
      /* 36 */ new Field(FieldType.Integer, -2),
      /* 37 */ new Field(FieldType.Integer, 0),
      /* 38 */ new Field(FieldType.Integer, 0),
      /* 39 */ new Field(FieldType.Integer, 0),
    ], [ // Properties1
      /*  0 */ blendMode instanceof Property ? blendMode : new ConstantProperty(blendMode),
      /*  1 */ width instanceof Property ? width : new ConstantProperty(width),
      /*  2 */ height instanceof Property ? height : new ConstantProperty(height),
      /*  3 */ colorMultiplier1 instanceof Property ? colorMultiplier1 : new ConstantProperty(...colorMultiplier1),
      /*  4 */ colorMultiplier2 instanceof Property ? colorMultiplier2 : new ConstantProperty(...colorMultiplier2),
      /*  5 */ startColor instanceof Property ? startColor : new ConstantProperty(...startColor),
      /*  6 */ endColor instanceof Property ? endColor : new ConstantProperty(...endColor),
      /*  7 */ widthMultiplier instanceof Property ? widthMultiplier : new ConstantProperty(widthMultiplier),
      /*  8 */ heightMultiplier instanceof Property ? heightMultiplier : new ConstantProperty(heightMultiplier),
      /*  9 */ colorMultiplier3 instanceof Property ? colorMultiplier3 : new ConstantProperty(...colorMultiplier3),
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

  get width() { return this.properties1[1] }
  set width(value: Property | PropertyValue) { setPropertyInList(this.properties1, 1, value) }

  get height() { return this.properties1[2] }
  set height(value: Property | PropertyValue) { setPropertyInList(this.properties1, 2, value) }

  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link colorMultiplier2}?
   * 
   * **Argument**: Particle age
   */
  get colorMultiplier1() { return this.properties1[3] }
  set colorMultiplier1(value: Property | PropertyValue) { setPropertyInList(this.properties1, 3, value) }

  /**
   * Color multiplier for the entire rectangle.
   * 
   * Seemingly identical to {@link colorMultiplier1}?
   * 
   * **Argument**: Particle age
   */
  get colorMultiplier2() { return this.properties1[4] }
  set colorMultiplier2(value: Property | PropertyValue) { setPropertyInList(this.properties1, 4, value) }

  /**
   * The color for the "start" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link endColor end color} across the rectangle.
   * 
   * **Argument**: Effect age
   */
  get startColor() { return this.properties1[5] }
  set startColor(value: Property | PropertyValue) { setPropertyInList(this.properties1, 5, value) }

  /**
   * The color for the "end" edge of the rectangle.
   * 
   * This color transitions linearly into the {@link startColor start color} across the rectangle.
   * 
   * **Argument**: Effect age
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
   * **Argument**: Effect age
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
      /* 14 */ new Field(FieldType.Boolean, 0),
      /* 15 */ new Field(FieldType.Integer, 2),
      /* 16 */ new Field(FieldType.Boolean, 0),
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
  set diffuseColor(value) { this.properties1[0] = value }

  get specularColor() { return this.properties1[1] }
  set specularColor(value) { this.properties1[1] = value }

  get radius() { return this.properties1[2] }
  set radius(value) { this.properties1[2] = value }

  get diffuseMultiplier() { return this.properties2[3] }
  set diffuseMultiplier(value) { this.properties2[3] = value }

  get specularMultiplier() { return this.properties1[4] }
  set specularMultiplier(value) { this.properties2[4] = value }

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
  [ActionType.StateEffectMap]: StateEffectMap, StateEffectMap,
  [ActionType.PeriodicEmitter]: PeriodicEmitter, PeriodicEmitter,
  [ActionType.MotionEmitter]: MotionEmitter, MotionEmitter,
  [ActionType.OneTimeEmitter]: OneTimeEmitter, OneTimeEmitter,
  [ActionType.PointEmitterShape]: PointEmitterShape, PointEmitterShape,
  [ActionType.DiskEmitterShape]: DiskEmitterShape, DiskEmitterShape,
  [ActionType.RectangleEmitterShape]: RectangleEmitterShape, RectangleEmitterShape,
  [ActionType.SphereEmitterShape]: SphereEmitterShape, SphereEmitterShape,
  [ActionType.CuboidEmitterShape]: CuboidEmitterShape, CuboidEmitterShape,
  [ActionType.CylinderEmitterShape]: CylinderEmitterShape, CylinderEmitterShape,
  [ActionType.RectangleParticle]: RectangleParticle, RectangleParticle,
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
                    prop.fields[i + comps * n + j].value = typeof v === 'number' ? v : v[j]
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
                    prop.fields[i + comps * n].value = v
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
                    prop.fields[i + comps * n + 1].value = v
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
                    prop.fields[i + comps * n + 2].value = v
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
                    prop.fields[i + comps * n + 3].value = v
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
            this.fields.splice(0, this.fields.length, ...this.fields.slice(i, i + cc))
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
      throw new Error ('Not enough arguments given. Properties with a linear function must have at least 2 stops.')
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
      throw new Error ('Not enough arguments given. Properties with a linear function must have at least 2 stops.')
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

  #typeEnumA: number = 0
  #typeEnumB: number = 0

  fields: Field[]
  properties: Property[]

  constructor(
    type: ModifierType,
    valueType: ValueType = ValueType.Scalar,
    fields: Field[] = [],
    properties: Property[] = []
  ) {
    this.type = type
    this.valueType = valueType
    this.fields = fields
    this.properties = properties
  }

  static read(br: BinaryReader) {
    const typeEnumA = br.readUint16()
    if (!Modifier.#knownTypeEnumAs.has(typeEnumA & 0b11111111_11111100)) {
      throw new Error('Unknown property modifier type enum A: ' + typeEnumA)
    }
    br.assertUint8(0)
    br.assertUint8(1)
    const typeEnumB = br.readUint32()
    if ((typeEnumB & 0xffffffe0) !== 0) {
      throw new Error('Unknown property modifier type enum B: ' + typeEnumB)
    }
    const modifierType = (typeEnumB & 0b11100) >>> 2
    const valueType = typeEnumB & 0b11
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
    return new Modifier(modifierType, valueType, fields, properties)
  }

  static copy(mod: Modifier) {
    return new Modifier(
      mod.type,
      mod.valueType,
      mod.fields.map(f => Field.copy(f)),
      mod.properties.map(p => Property.copy(p))
    )
  }

  write(bw: BinaryWriter, modifiers: Modifier[]) {
    const count = modifiers.length
    bw.writeInt16(this.#typeEnumA)
    bw.writeUint8(0)
    bw.writeUint8(1)
    bw.writeInt32(this.#typeEnumB)
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

  get typeEnumA() { return this.#typeEnumA }
  set typeEnumA(value) { this.#typeEnumA = value }

  get typeEnumB() { return this.#typeEnumB }
  set typeEnumB(value) { this.#typeEnumB = value }

  get type(): ModifierType {
    return (this.#typeEnumB & 0b11100) >>> 2
  }

  set type(value) {
    const valueType = this.valueType
    this.#typeEnumA = Modifier.#typeEnumAValues[value] | valueType
    this.#typeEnumB = (value << 2) | valueType
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
    return this.#typeEnumB & 0b11
  }

  set valueType(value) {
    this.#typeEnumA = (this.#typeEnumA & 0xffffffe0) | value
    this.#typeEnumB = (this.#typeEnumB & 0xffe0) | value
  }

}

export class ExternalValueModifier extends Modifier {

  /**
   * Makes the value of the property depend on an external value.
   * 
   * The property value wil be multiplied by the values in this modifier.
   * @param extVal The ID of the external value to get.
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
    super(ModifierType.ExternalValue1, valueType, [
      new Field(FieldType.Integer, extVal)
    ], [
      new LinearProperty(false, stops)
    ])
  }

  get externalValue() { return this.fields[0].value as number }
  set externalValue(value) { this.fields[0].value = value }

  get stops() { return this.properties[0].stops }

}

export class BloodVisibilityModifier extends ExternalValueModifier {

  /**
   * Makes the value of the property depend on the "Display Blood" option in
   * the settings menu.
   * 
   * The property value wil be multiplied by the values in this modifier.
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
