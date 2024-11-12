import {
  BasicConfig,
  BillboardEx,
  ConstantProperty,
  Distortion,
  DynamicTracer,
  ExternalValue,
  ExternalValue1Modifier,
  LinearProperty,
  FXR,
  Game,
  Keyframe,
  Line,
  Model,
  MultiTextureBillboardEx,
  PointLight,
  PointSprite,
  Property,
  QuadLine,
  RadialBlur,
  GPUStandardParticle,
  GPUStandardCorrectParticle,
  GPUSparkParticle,
  GPUSparkCorrectParticle,
  LensFlare,
  RichModel,
  SpotLight,
  Tracer,
  Recolor,
} from '@cccode/fxr'

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
const partDuration = rainbowDuration / 360
function procProp(list, idx) {
  if (!(list[idx] instanceof Property)) {
    list[idx] = new ConstantProperty(...list[idx])
  }
  list[idx].modifiers.push(
    new ExternalValue1Modifier(ExternalValue.EldenRing.TimeOfDay, new LinearProperty(true, [
      new Keyframe(0,                [1, 0, 0, 1]),
      new Keyframe(partDuration,     [1, 0, 1, 1]),
      new Keyframe(partDuration * 2, [0, 0, 1, 1]),
      new Keyframe(partDuration * 3, [0, 1, 1, 1]),
      new Keyframe(partDuration * 4, [0, 1, 0, 1]),
      new Keyframe(partDuration * 5, [1, 1, 0, 1]),
      new Keyframe(partDuration * 6, [1, 0, 0, 1]),
    ]))
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
  
  // Read the original FXR file. These effects are from Elden Ring, so make
  // sure to let it know to parse it as an ER FXR.
  const fxr = await FXR.read(`${inputDir}/${fileName}`, Game.EldenRing)

  // First make the effect grayscale
  fxr.root.recolor(Recolor.grayscale)

  /*
    Next, add the rainbow modifier to one of the color multipliers in the
    appearance action of all effects in the FXR.

    Adding it to Action 131 (ParticleModifier) wouldn't work in all cases,
    because not all appearance types are particles.
  */
  for (const config of fxr.root.walkConfigs()) {
    if (!(config instanceof BasicConfig)) continue

    const action = config.appearance
    if (
      action instanceof PointSprite ||
      action instanceof Line ||
      action instanceof QuadLine ||
      action instanceof BillboardEx ||
      action instanceof MultiTextureBillboardEx ||
      action instanceof Model ||
      action instanceof RichModel ||
      action instanceof Tracer ||
      action instanceof DynamicTracer
    ) {
      procProp(action, 'color1')
    } else if (
      action instanceof PointLight ||
      action instanceof SpotLight
    ) {
      procProp(action, 'diffuseColor')
      procProp(action, 'specularColor')
    } else if (
      action instanceof Distortion ||
      action instanceof RadialBlur ||
      action instanceof GPUStandardParticle ||
      action instanceof GPUStandardCorrectParticle ||
      action instanceof GPUSparkParticle ||
      action instanceof GPUSparkCorrectParticle
    ) {
      procProp(action, 'color')
    } else if (action instanceof LensFlare) {
      procProp(action, 'layer1Color')
      procProp(action, 'layer2Color')
      procProp(action, 'layer3Color')
      procProp(action, 'layer4Color')
    }
  }

  // Write the modified file back to ER's FXR format
  await fxr.saveAs(`${outputDir}/${fileName}`, Game.EldenRing)

  // Add this ID to the "done" list so it won't be processed again if something
  // else references it
  done.push(id)

  // Add all of the sfx references to the list of IDs to process, but only if
  // they're not already in the list and they haven't already been processed
  for (const ref of fxr.getReferences().sfx) if (!done.includes(ref) && !ids.includes(ref)) {
    ids.push(ref)
  }

}
