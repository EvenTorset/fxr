# Changelog

## [12.0.0] - 2024-06-27

### Highlights
- The ComponentSequenceProperty.combineComponents method has been improved so that it should now return an equal HermiteProperty if all of the components have the same number of keyframes and keyframe positions. This method is used internally to, for example, enable correct recoloring of these properties, so the output structure of recolored AC6 effects should now look a lot nicer if they were originally of this type.
- Added .minify methods to all types of properties.
  - Modifiers for all properties will be filtered to remove ones that are ineffective, i.e. modifiers that don't change anything about the property, for example a random range modifier with 0 as both the min and max values.
  - ValueProperty.minify simply returns a clone of the property with the modifiers filtered.
  - SequenceProperty.minify returns a ConstantProperty with the same value and filtered modifiers if the property only has a single keyframe. Otherwise, it returns a clone of the property with the modifiers filtered.
  - ComponentSequenceProperty returns a ConstantProperty with the same value and filtered modifiers if all components only have a single keyframe each, and it returns a HermiteProperty if an equivalent one can be constructed with filtered modifiers. Otherwise, it returns a clone of the property with the modifiers filtered.
- The Action.minify and DataAction.minify methods now also minify all properties.
- The FXR.read method now gives a much better error message if given some invalid input.
- Fixed vector fields causing problems in some cases due to not being counted properly. This primarily fixes reading the GPU particle actions, but might have also fixed some other actions.
- Omitted class properties in actions are now handled in a much better way. They will no longer be in the JSON structure for the action class, and they don't cause read actions to end up with some nullish properties.
- Improved how modifiers are combined from or separated into components. This fixes a couple of issues with the combined properties in action 10015.
- Fixed the specular color of spot lights being handled differently depending on the value of the separateSpecular property when writing it for DS3.
- Added an option to the FXR.read method to automatically round floats to 7 significant digits, which should make most floats a lot easier to read for humans.
- Added some missing documentation for the game parameter in the FXR.read function.
- Added a Modifier.isEffective function that can be used to check if a given modifier would have any effect if applied to a property. This is never useful for most people, but it is used internally to filter modifiers when splitting a vector property into its components and when minifying properties.

## [11.0.0] - 2024-06-09

### Highlights
- Added subclasses and documentation for pretty much all remaining actions, including the ones not used in any of the games:
  - 10003 - LightShaft
  - 10008 - GPUSparkParticle
  - 10009 - GPUSparkCorrectParticle
  - 10200 - CancelForce (unused, but works)
  - 10301 - GravityForce
  - 10302 - ForceCollision (unused, but works)
  - 10303 - TurbulenceForce (unused, but works)
  - 10002 and 10010 still remain, but 10002 (at least, and maybe also 10010) seems to have been removed from Sekiro and later games, so they most likely only exist in DS3, but they're not used, so their structure is unknown.
- Action 10300 (WindForce) has been updated with many documented fields and fixes for various field types.
- Actions 10000 and 10001 have been renamed to something closer to their (ER) RTTI names since the old names are too vague now that it's been discovered that 10008 and 10009 also fit those old names:
  - 10000 - ParticleSystem -> GPUStandardParticle
  - 10001 - ParticleSystem2 -> GPUStandardCorrectParticle
- Actions 731, 732, 733, and 734 have all been renamed, both to match ER's RTTI names and to make them more accurate:
  - 731 - NodeWindSpeed -> NodeForceSpeed
  - 732 - ParticleWindSpeed -> ParticleForceSpeed
  - 733 - NodeWindAcceleration -> NodeForceAcceleration
  - 734 - ParticleWindAcceleration -> ParticleForceAcceleration
- Scaling, recoloring, and resource listing have all been redone and now uses the library's action data system, which was previously only used for default values, field types, documentation, and data specific to each game.
  - A few things that were not being scaled or recolored properly before now should be.
  - DataActions (all action subclasses) now have methods to scale and recolor the action, and one to list the resource properties of the action.
  - Nodes now have a new remapResources method that can be used to easily remap all resource IDs, which can be useful when porting sfx from one game to another.
  - This does not change much about the existing scale and recolor methods on nodes. They still work the same way, they should just have fewer bugs now.
- Reworked fields to add support for *vector fields*.
  - Sometimes there are sets of consecutive fields with the same type that might as well be part of a single thing, for example the bloom color fields in many of the appearance actions. These are now a single vector field, and therefore a single property on those action subclasses, so it's now possible to just set "bloomColor" to a 4D RGBA vector instead of setting "bloomRed", "bloomGreen", and so on individually.
- "TypeEnumB" in property modifiers don't seem to be used by the games, so this should not change anything functionally, but the library will now write the correct values for these for DS3 and Sekiro too. It used to always use ER's values, but they're different in different games. AC6 isn't even consistent in vanilla, so the library still uses ER's values for that, which still lines up with like half of the effects in AC6.
- The LinearProperty.sine function now has a parameter for the phase shift.
- External values 2000 and 70200 for AC6 have been documented thanks to lugia19.
- Fixed action 301 (EqualDistanceEmitter) missing a type for one of its fields, potentially causing issues when writing to DS3's structure.

[12.0.0]: https://github.com/EvenTorset/fxr/compare/v11.0.0...v12.0.0
[11.0.0]: https://github.com/EvenTorset/fxr/compare/v10.0.1...v11.0.0
