import fs from 'node:fs/promises'
import { ActionType, EffectType, ExternalValue, ExternalValueModifier, FXR } from '@cccode/fxr'

// Input folder to grab the original files from
const inputDir = 'sfx/sfxbnd_commoneffects-ffxbnd-dcx/effect'

// Output folder to put the modified files in
const outputDir = 'output'

// FXR IDs to process
const ids = [
  524000, // These are all of the effects used in Flame Sling
  524001,
  524002,
  524003,
  524005,
  524006,
  524007,
  524008,
  524009,
]

/*
  To make the effect cycle through all of the colors, this script uses external
  value 2 (time of day) and a property modifier.

  External value modifiers multiply the property's value by different values
  depending on the external value. Here, the modifier has all of the colors of
  the rainbow, and the property value will be changed to grayscale, so the
  output color should be various shades of the colors in the modifier.
*/
const rainbowDuration = 4
const partDuration = rainbowDuration / 6
function procProp(list, idx) {
  list[idx].modifiers.push(
    new ExternalValueModifier(ExternalValue.TimeOfDay, true, [
      { position: 0,                value: [1, 0, 0, 1] },
      { position: partDuration,     value: [1, 0, 1, 1] },
      { position: partDuration * 2, value: [0, 0, 1, 1] },
      { position: partDuration * 3, value: [0, 1, 1, 1] },
      { position: partDuration * 4, value: [0, 1, 0, 1] },
      { position: partDuration * 5, value: [1, 1, 0, 1] },
      { position: partDuration * 6, value: [1, 0, 0, 1] },
    ])
  )
}

// Used to keep track of what effects have been done, so we avoid processing
// the same effect multiple times if it's referenced by multiple effects
const done = []

// Loop through all IDs in the list
while (ids.length) {

  // Remove the first ID from the list and get the file name for that ID
  const id = ids.shift()
  const fileName = `f${id.toString().padStart(9, '0')}.fxr`

  // Read the original FXR file
  const fxr = FXR.read((await fs.readFile(`${inputDir}/${fileName}`)).buffer)

  // First make the effect grayscale by setting the RGB values to the
  // percieved brightness of the original color
  fxr.root.recolor(([r, g, b, a]) => {
    const l = r * 0.21 + g * 0.72 + b * 0.07
    return [l, l, l, a]
  })

  /*
    Next, add the rainbow modifier to one of the color multipliers in the
    appearance action of all effects in the FXR.

    Adding it to Action 131 (ParticleMultiplier) wouldn't work in all cases,
    because not all appearance types are particles.
  */
  for (const effect of fxr.root.walkEffects()) {
    if (effect.type !== EffectType.Basic) continue

    const slot9 = effect.actions[9]
    switch (slot9.type) {
      case ActionType.PointSprite:
        case ActionType.QuadLine:
        procProp(slot9.properties1, 3)
        break
      case ActionType.Line:
      case ActionType.Unk10014_LensFlare:
        procProp(slot9.properties1, 2)
        break
      case ActionType.BillboardEx:
      case ActionType.Distortion:
      case ActionType.RadialBlur:
        procProp(slot9.properties1, 7)
        break
      case ActionType.MultiTextureBillboardEx:
        procProp(slot9.properties1, 15)
        break
      case ActionType.Model:
        procProp(slot9.properties1, 14)
        break
      case ActionType.Tracer:
      case ActionType.Unk10012_Tracer:
        procProp(slot9.properties1, 6)
        break
      case ActionType.PointLight:
      case ActionType.SpotLight:
        procProp(slot9.properties1, 0) // Diffuse
        procProp(slot9.properties1, 1) // Specular
        break
      case ActionType.Unk10000_StandardParticle:
      case ActionType.Unk10001_StandardCorrectParticle:
      case ActionType.Unk10015_RichModel:
        procProp(slot9.properties1, 13)
        break
    }
  }

  // Update reference lists, since we used an external value to do this
  fxr.updateReferences()

  // Write the modified file
  await fs.writeFile(`${outputDir}/${fileName}`, Buffer.from(fxr.toArrayBuffer()))

  // Add this ID to the "done" list so it won't be processed again if something
  // else references it
  done.push(id)

  // Add all of the FXR references to the list of IDs to process, but only if
  // they're not already in the list and they haven't already been processed
  for (const ref of fxr.references) if (!done.includes(ref) && !ids.includes(ref)) {
    ids.push(ref)
  }

}
