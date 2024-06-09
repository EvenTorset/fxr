# Changelog

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

[11.0.0]: https://github.com/EvenTorset/fxr/compare/v10.0.1...v11.0.0
