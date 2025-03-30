# Changelog

## [Unreleased]

- Fixed the rounding option for the `FXR.read` function incorrectly rounding numbers with an absolute value below 1. The incorrectly rounded numbers had much higher precision than intended.

## [20.1.1] - 2025-03-19

- Fixed the `anyValueMult` and `anyValueSum` functions creating invalid properties when operating on a value property and a component sequence property.

## [20.1.0] - 2025-03-15

- Added a new member to the `PropertyArgument` enum to describe the argument given to properties in modifiers: `ExternalValue`.

## [20.0.1] - 2025-03-10

- Fixed a bug in the JSON schemas.

## [20.0.0] - 2025-03-10

- Added two JSON Schemas that can be used to validate FXR JSON objects. They are accessible through subpath exports:
  - `/schema` - Describes the structure of FXR JSON objects that may contain "generic" objects. Also available at https://fxr-docs.pages.dev/json/schema.json
  - `/schema/strict` - Same as the other one, but disallows generic objects and is much stricter about where certain actions can be placed. Also available at https://fxr-docs.pages.dev/json/schema_strict.json
- All generic classes (`GenericNode`, `NodeConfig`, `Action`) and their JSON form now have a `$generic` property with a value of `true`.
  - The property in the JSON form prevents an issue where converting an node, config, or action to JSON and then back to the class object could produce unexpected results in some cases. Since the JSON now requires this property for the generic types, the library is able to correctly determine what class to construct based on its presence and value.
  - This also allows validation of the JSON objects to correctly determine what kind of structure the object must have.
- Added `Unk5` with a value of `5` to the `EmitterShape` enum. Found in FXR 800020 in Sekiro.
- Added `Unk11` with a value of `11` to the `OrientationMode` enum. Found in FXR 639742 in Elden Ring.
- Fixed all of the values in the `ForceVolumeShape` enum being 0. They should now be the correct values instead.
- All fields of type `LightingMode` are now just generic integer fields. This enum still exists and partially documents some of the tested values for these fields, but since some vanilla effects contain different values that have not been tested or documented yet and this whole field still needs to be better understood, the library will now accept any integer value for these fields.
- Added the TypeScript type of action properties that have one to the [actions.json file on the docs site](https://fxr-docs.pages.dev/data/actions.json).
- Updated the description for the `particleRandomTurnIntervalMax` field in `GPUStandardParticle` and `GPUStandardCorrectParticle` to mention the fact that the value will be rounded to the nearest 1/30s due to how the value is stored.

## [19.0.2] - 2025-03-03

- Fixed a couple of small TypeScript errors. There should not be any functional changes.

## [19.0.1] - 2025-02-20

- To match the behavior of the games, the field count in property modifiers is now ignored when reading FXR files unless it is reading it as a generic modifier. The field count is now calculated based on the modifer and value types instead, and if the calculated count does not match the count in the file it will print a warning to notify the user about the error, but it will continue to correctly read the file and not throw because of the field count value being wrong.
  - The games apparently ignore this field count value and just reads the correct number of fields anyway.
  - Generic modifiers have unknown structures, so this fix cannot be applied to those. Modifiers are only read as generic ones if [`Game.Generic`](https://fxr-docs.pages.dev/~#Game.Generic) is passed to the [`FXR.read`](https://fxr-docs.pages.dev/~#FXR.read) function, which is only meant for debugging and research anyway.
  - It may still fail at reading the modifier fields if there are not enough fields to read, but that most likely errors in-game as well.
  - TL;DR: The library can now read some files that contain certain invalid values, but still work in-game.

## [19.0.0] - 2025-02-18

- Named and documented some properties in the `Tracer` and `DynamicTracer` actions:
  - `unk_ds3_f1_7` -> `segmentSubdivision`
  - `unk_ds3_f1_9` -> `fadeOutTime`
  - `unk_ds3_p1_2` -> `startFadeEndpoint`
  - `unk_ds3_p1_3` -> `endFadeEndpoint`
- Documented the order that the rotations and translations from `StaticNodeTransform` and `RandomNodeTransform` are applied in.
- Updated the documentation for the `totalIntervals` property in `PeriodicEmitter` to clarify exactly what it does when the limit is reached.
- Fixed the `FXRUtility.outlineEmitters` function using the `sizeX` property instead of `sizeY` for the height of `RectangleEmitterShape`s.
- Fixed the `FXRUtility.line` function not always rotating the line correctly. This function is used by many of the other functions in the `FXRUtility` namespace, so this also fixes issues with those.

## [18.0.2] - 2024-12-21

- Fixed the `depth` parameter for the `clone` method in the base `Node` class not being marked as optional. It *is* optional, and always has been for all of the subclasses.
- Added a note about proxy nodes not being able to contain child nodes to the `ProxyNode` class description since it is the only node type with that property.

## [18.0.1] - 2024-12-05

- The `Recolor.isPrimary` function now returns `true` instead of throwing an error when the `action` parameter is `undefined`. This fixes an issue where trying to use one of the recolor functions that use the `Recolor.isPrimary` function without giving it context would cause it to throw an error.

## [18.0.0] - 2024-12-05

- Updated action 604 with new names and documentation for all of the layer-specific properties and fields.
  - `mask` is now `layer1`, and the old `layer1` and `layer2` fields are now `layer2` and `layer3` respectively.
  - All other properties with the `layer#` prefix have also been changed to match.
  - Previously unknown or incorrectly documented properties related to layer 1 (what used to be "mask") have been properly named and documented:
    - `layersColor` -> `layer1Color`
    - `unk_ds3_p1_23` -> `layer1SpeedU`
    - `unk_ds3_p1_24` -> `layer1SpeedV`
    - `unk_ds3_p1_25` -> `layer1OffsetU`
    - `unk_ds3_p1_26` -> `layer1OffsetV`
    - `unk_ds3_p1_27` -> `layer1ScaleU`
    - `unk_ds3_p1_28` -> `layer1ScaleV`
- The `unk_er_f1_7` field in `RichModel` has been given a name: `dither`. It has also been documented and had its type corrected.
- The `unk_ds3_f1_7` and `unk_ac6_f1_7` fields in `Unk10500` have been merged into one named `initialSimulationTime`, and it has been properly documented. This was previously two separate fields because it was untested in AC6, where it also has a different field type and unit. It has been tested now, and it does work exactly like the field in the other games, except it's in seconds instead of 1/30s. The library will handle the type and unit conversion automatically, so the unit is always 1s and floats can be used, even if you're writing the effect for one of the other games. This field is now also scaled by the `scaleRateOfTime` methods, which means that it will work the same way on DS3 as the other games.
  - This required some changes to how field types are stored in the library, so now each game can have its own type for each field. This is currently only used for this one field, but it might be useful later if similar fields are found.
- Added two new methods to all node classes:
  - `getColor` - Calculates the color value for the node the same way that the games do, which can be used to generate accurate color previews for nodes. If the node wouldn't produce anything with a color, this function instead returns `null`. This function was originally made for the FXR Playground to generate the color previews there, but has been improved slightly since then.
  - `hasColor` - A fast way to check if the `getColor` function will return a color or not. Can be used to check if it would make sense to display a color preview for a node.
- Recoloring functions have been updated to be simpler and more intuitive, but also much more useful:
  - `BasicConfig` now has a `recolor` method, which works just like the one on nodes, except this only recolors the config it is called on.
  - Recolor functions are now given the config, action, and property name for context. This can be used to make recolor functions that handle different properties differently. For example, one could change one property to be red and another property in the same action to green using the same recolor function.
  - `Recolor.isPrimary` is a new function that labeles some action color properties as "primary" and others as "secondary". By setting primary color properties to a target color and secondary color properties to white, the final color of the effect will match the target color exactly. This function is now used internally in combination with the new context explained above in some of the pre-defined recolor functions, but may also be used to create your own custom ones.
  - The `Recolor.replace`, `Recolor.multiply`, and `Recolor.colorBlend` functions have been updated to use this new system for separating primary and secondary color properties, which means that they will produce colors that more closely match what you would expect. For example, using `Recolor.replace` with an orange color should now make the effect orange, whereas before it would most likely end up being pretty red, depending on what actions were used in the effect.
  - The `Recolor.replace` function has also been updated to handle opacity and brightness in a smarter way. Optional parameters have been added to disable these changes if needed. This function should now be considered the "standard" recolor function, because it should handle most cases in the most intuitive way. Without messing with the optional parameters, this function should basically just make any effect have exactly the color you give it.
  - Some less useful recolor functions have been **removed** in order to make it easier to pick the right function for a job:
    - `Recolor.standardBlend` - This function should simply not be needed anymore. It was designed as a hacky way around the old problem of requiring a single recolor function that handled every property equally. `Recolor.replace` can be used in place of this to get similar results, and it also works with grayscale effects, which `Recolor.standardBlend` couldn't handle.
    - `Recolor.add` - This recolor function caused a bit of confusion for some and wasn't all that useful anyway. If anyone finds a good use for this, it may be added back, but maybe with some tweaks.
    - `Recolor.replaceSaturation` - Similar to the `add` function, this was just not very useful, but it may be added back in some form if needed.
- A few improvements and fixes have been made to scaling:
  - Configs now have a `scale` method.
    - This works just like method on nodes and data actions, but only affects the config it is called on and the actions it contains.
    - The `scale` method on nodes with configs now call the method on the configs instead of calling it on the data actions directly.
      - This fixes an issue where the view distance thresholds in `LevelsOfDetailConfig` objects would not be scaled by the `scale` method on nodes since these thresholds are stored in the config instead of in an action internally.
  - All of the `scale` methods now take a factor and an options object.
    - The old `recurse` parameter in the `scale` method on nodes is now a property of the options object instead of being its own parameter.
    - For now, the only other option is `includeViewDistance`, which can be enabled to also scale properties that are based on the view distance in some way. By default, this option is disabled, which means the default behavior of the `scale` method is now different. Before, these properties were also scaled, which could cause some annoying side-effects in some cases.
  - The `maxViewDistance` fields in `PointLight` and `Unk10500` and the thresholds in `LevelsOfDetailThresholds` are now scaled by the `scale` methods if `includeViewDistance` is enabled. They were previously not scaled at all, which was inconsistent with the other view distance limit fields in other actions.
  - The `depthBias` field in `NodeAttributes` is now scaled by the `scale` methods.
  - The `unk_sdt_f2_38` field in `Distortion` is now scaled by the `scale` methods if `includeViewDistance` is enabled, and its effect has been documented. Exactly what it does is still unknown, so it remains unnamed.
  - The `unk_ds3_f2_29` field in many of the appearance actions has been identified as some kind of view distance threshold, and is therefore now also scaled by the `scale` methods if `includeViewDistance` is enabled. Exactly what this field does is still unknown.
- A new read-only `hasAppearance` property has been added to FXR objects, which can be used to check if an effect contains any appearance actions.
- The documentation site has been updated with a few improvements.
  - It now has a new theme, one that uses colors closer to the FXR Playground style.
  - Enum members are now sorted in ascending order based on the value instead of alphabetically.
  - Added links to the FXR Playground and Ko-fi to the sidebar.
  - Added the library version number to the header.
- The `unk_ds3_f2_1` field in `BillboardEx`, `Tracer`, and `DynamicTracer` has been changed to be an integer field. It was previously a boolean field, which was possibly an error because this field is entirely unknown. It is only ever 0 or 1 in vanilla, but that doesn't mean that those are the only possible values. As a side-effect of this, converting between `BillboardEx` and `MultiTextureBillboardEx` is now a bit easier, since the latter has always had this field as an integer.
- Fixed the `getActionCount` method on `NodeEmitterConfig` objects always returning `10`. It now correctly returns `9` if the given game is `Game.DarkSouls3`, and `10` otherwise.
- Fixed writing effects for Dark Souls 3 being destructive if the rate of time was set to anything other than 1. It now creates a clone of the tree structure and scales the rate of time in the clone before writing it instead of scaling the rate on the original directly. This shouldn't matter unless the same FXR object was written to a file multiple times, which most people would rarely have to do.
- `DataAction`s (basically any class that represents a specific action in the library) now have a `$data` property for easily accessing most of the data stored in the library about the action type the class is for. This was already accessible from the `ActionData` object, and this property is just making it easier to access it.
  - The `meta` property on `DataAction`s has been merged into the `ActionData` object, which means that any references to this property should be replaced with `$data` now.
  - This uses a new naming scheme in the library. Properties with a name starting with `$` are for accessing various internal functions and information in the library. These are not meant to be useful for most people. They may be useful for some more advanced operations, but they are primarily for use internally.
- Similar to the note above, `DataAction`s now have a `$convert` property for accessing internal conversion functions for the action, which were only accessible from the `ActionDataConversion` object before.
- Fixed the documented default value of some boolean fields being `0` instead of `false`. The actual default value was `false`, so this was just an error in the documentation.
- Replaced all data action constructor parameter interfaces with types based on the classes. This doesn't change anything functionally, but cleans up the code and the documentation site a lot. ~10k lines of code was removed by doing this.

## [17.0.0] - 2024-11-12

- Named and documented three actions:
  - 700 - `SimulateTermination`
  - 701 - `FadeTermination`
  - 702 - `InstantTermination`
- Named and documented some fields:
  - Action 128 (`NodeAttributes`): `unk_ds3_f1_3` is now `depthBias`.
  - Action 609 (`PointLight`): `unk_ds3_f2_24` is now `maxViewDistance`.
- Renamed "Effects" to "Configs". The old name had a bunch of different issues, including making writing documentation just more annoying because it could be referring to different things. The new name should better descibe what they are (basically a configuration that defines the characteristics of the node that can be swapped out with another by state changes), and isn't used to refer to anything else that is related to FXRs so far. This is the biggest breaking change in this update, so check out the table under the patch notes for things to find and replace if you need to update your scripts.
  - The `EffectAge` property argument was renamed to `ActiveTime` due to this, which is the biggest change in the documentation. No code should need to change because of this, because this is only used to document the argument given to properties, but it's worth mentioning due to how important this might be. The description for it was also updated to say that it is the time since the *action* (previously "effect") became active, which is also more accurate since this is also used outside of configs/effects.
- Changed the default value of `unk_sdt_f2_32` in some of the appearance actions to 0. (Was previously 1.)
  - When this is 1, it can cause object seen through particles with the depth blending effect to have some ugly-looking outlines. When it's set to 0, this doesn't happen at all, and it also seems to allow some other fields in the action to work.
  - This seems to make the texture on the particle a bit blurry in some cases, but for most particles that shouldn't matter much since they often use textures that are blurry anyway. Just set the property to 1 again if you need the detail in the texture to be visible, but keep in mind that this will cause the outline problem described above to occur again.
  - What this field does exactly is still unknown, so if this change has any other side-effects is also unknown.
- Renamed the `unk70x` property in the `RootNode` class to `termination` to match the actions it can be set to.
- Renamed `BlendMode.Screen` to `BlendMode.Unk7`. The old name was based on some old, and apparently incorrect, documentation. This blend mode is seemingly identical to `BlendMode.Add`.
- The documentation site now generates JSON files that contain a lot of the information that is in the library. The main reason behind this addition was to allow the FXR Playground to have easy access to the documentation in the library, but feel free to use these in other tools if you need any of this information.
  - [`/data/actions.json`](https://fxr-docs.pages.dev/data/actions.json) - This is an array of objects that contain information about all action types, including a name, description, what games it works in, the structure of the action in each of the supported games, and detailed information about every field, property, and section10 in the action.
  - [`/data/enums.json`](https://fxr-docs.pages.dev/data/enums.json) - This is an object that contains various enums, like `BlendMode`, `InitialDirection`, `OrientationMode`, and so on. Each enum has a description and a members object. Each member has a value and a description.
  - All of the descriptions are Markdown strings.
  - As a bonus for this, more enums are now properly documented, and some documentation errors in some actions have been fixed.
- `DataAction`s now check if there are any properties that have the wrong type or number of components when they are written to an FXR buffer, and throws descriptive errors if there are any. This should make it easier to find out if and where you put an invalid value.
- Added the missing descriptions for the `particleLength` and `particleWidth` properties in actions 10008 and 10009.
- Fixed a bug where recoloring actions white would cause them to be randomly extra colorful due to randomization modifiers on the color properties in the action. Recoloring now removes randomization modifiers from color properties.
- Fixed the `delay` field in `NodeAttributes` actions not being scaled when using the `scaleRateOfTime` method.

If you need to update your scripts, here's a table of things to find and replace which should fix most of the problems:
| Old | New |
|-|-|
| `BasicEffect` | `BasicConfig` |
| `LevelsOfDetailEffect` | `LevelsOfDetailConfig` |
| `NodeEmitterEffect` | `NodeEmitterConfig` |
| `.walkEffects` | `.walkConfigs` |
| `.effects` | `.configs` |
| `.stateEffectMap` | `.stateConfigMap` |

## [16.0.0] - 2024-09-13

- Named and documented action 800: `ParticleForceCollision`. This enables collision with the full 3D environment for regular particles, but also causes the game to crash if a particle despawns. It is most likely an unfinished action, and it only exists in AC6, where it's used just once, in an effect that also causes the game to crash. It seems very stable as long as the particles don't despawn, though.
- The `valueAt` method on properties should now give the correct value for sequence properties and component sequence properties with keyframes that are out of order. These properties can be considered invalid in some sense, but they are still functional in-game, and this method should now reflect that.
  - Any keyframes that are out of order, i.e. their position is less than the position of the previous keyframe, are now ignored entirely, unless the property does not loop and the given argument is greater than the duration of the property, in which case the last keyframe's value is always returned, no matter what its position is.
- Sequence properties and component sequence properties no longer automatically sort their keyframes.
  - This allows these properties to be written with their keyframes out of order, which means that reading and then writing an FXR file with such a property no longer has a chance to break that property because of the different keyframe order.
  - Sorting the keyframes can still be done using the `sortKeyframes` and `sortComponentKeyframes` methods on sequence properties and component sequence properties respectively, and these methods have been changed to return the property they were called on to make them more convenient.
- Fixed the brightness of point lights when converted to or from DS3. Hopefully it's actually fixed this time...
- Renamed `unk_ac6_f1_1` in actions 10008 and 10009 to `unk_ac6_f1_2`. The old name did not match the field's index.
- Fixed the argument for some properties:
  - `color3` in `PointSprite` is now `ParticleAge` (*was `EffectAge`*)
  - `lengthMultiplier` in `Line` is now `ParticleAge` (*was `EffectAge`*)
  - `lengthMultiplier` in `QuadLine` is now `ParticleAge` (*was `EffectAge`*)
  - `widthMultiplier` in `QuadLine` is now `ParticleAge` (*was `EffectAge`*)
  - This was just a documentation error and should not affect any functionality.
- Updated the description for the `DataAction` class. It was very out of date.
- Updated the description for most color properties to mention if the values are clamped or not.

## [15.2.0] - 2024-09-01

- Added a `getResources` method to nodes. This does the same thing that the `FXR` method with the same name does, except it only lists resources used in the node it is called on, and optionally descendant nodes.

## [15.1.0] - 2024-09-01

- Added a `depth` argument to the `clone` method on nodes that controls how many levels of descendants to clone. It defaults to `Infinity` (same behavior as before), and can be set to 0 to not clone any child nodes.
- Updated links in the readme to work with the FXR Playground update.

## [15.0.0] - 2024-08-28

- Added `Game.Heuristic`, which can be used with `FXR.read` to let the library figure out what game an FXR file is for.
  - This is now the default `game` value for the `FXR.read` function. (*Was `Game.EldenRing` previously.*)
  - `FXR` objects now have a new `gameHint` property that stores what game the file was parsed as. It defaults to `Game.Generic`, and the only way to set it is using the `FXR.read` function. New effects created with `new FXR` or `FXR.fromJSON` will have the default value. The hint will be `Game.Heuristic` if the `FXR.read` function could not determine what game it was from.
  - The `FXR.toArrayBuffer` and `FXR.saveAs` methods now use `Game.Heuristic` as the default game value too (*was also `Game.EldenRing` previously*), which will cause them to use the `gameHint` as the game, unless the hint is `Game.Heuristic`. If the hint is `Game.Heuristic`, they will look for some AC6-specific things, like action 800, and will use that as the game if anything is found. Otherwise, it will throw an error. I highly recommend still giving these methods a specific game, so the library doesn't need to guess.
  - `FXR.read` can detect any DS3 or Sekiro effects perfectly, as long as they're not modified in ways that would make the effect invalid for the game.
    - It has a pretty high chance of getting it right for ER and AC6, but it is not perfect, because there are a lot of ways to make AC6 effects that would be the same in ER. It will still read the effect correctly, as it doesn't matter if it's for ER or AC6 if they're both the same, but it affects the `gameHint` property, which can then affect `FXR.toArrayBuffer` and `FXR.saveAs`.
- Added a `Recolor.weightedAveragePalette` function, which takes a color palette with weights for each entry and returns a new palette that has the weighted average of all entries for each slot.
- Added a `randomSeed` function for generating random seeds to be used with randomization modifiers. The modifier classes already generated random seeds as default values, but this allows you to easily generate seeds that can be used in multiple properties, synchronizing their randomization.
- Added a `RandomFractionProperty` function. This was the only missing function to generate properties with randomization modifiers. The other two modifiers have had functions like this one for a while now.
- Added a `getValueType` function that returns the `ValueType` of a given value. This works with numbers, vector arrays, and properties. It's probably not super useful for most people, it's just a utility function used internally that I figured might as well be exported.
- All action fields/properties have been sorted in a way to make their order closer to their order in the actual files. It's not going to match exactly, because the actions in the library have all fields and properties from all four of the supported games, and some of the games have things moved around a bit. This order doesn't really affect much in the library or the documentation, but it causes the JSON structure to have the fields/properties in the new order, so it should hopefully make it easier to find and edit unknowns in the JSON.
- Named and documented the `bloom` field (previously `unk_ds3_f2_4`) in actions 600, 601, 602, 603, 604, 606, and 10012. This is simply a boolean field that toggles the extra bloom effect. (*Requires "Effects Quality" to be set to anything but "Low", and the `bloomColor` vector field to have a non-zero alpha.*)
- The behavior of the `unk_ds3_p2_0` property in `PointLight`s has been documented. The property is still unnamed.
- The `hex` template tag now also accepts strings starting with `#`, like `#ff0000`.
- Fixed the return type of the `hex` template tag. It was previously `number[]`, and is now `Vector4` like it should be.
- `BasicEffect` and `NodeEmitterEffect` can now be constructed without any arguments to make a default effect.

## [14.1.0] - 2024-08-14

- Added a `find` method to FXR objects, which finds and returns a value at a given path in the FXR. For example, a path like `root/nodes/0` would be the first child node of the root node.
- Added a `getActiveEffect` method to nodes that contain effects, which returns the effect that would be active when a given state index is active.
- Added a `clamp` method to properties. This slices off peaks and troughs outside of a given range to make sure the property value stays within the range.
- Added a `minify` method to modifiers. This does nothing for most of the modifier types, but for the external value modifiers this will minify the `factor` property.
- The `minify` method on properties now also minify the modifiers.
- The `minify` method on Stepped and Linear properties now removes keyframes that aren't doing anything. For example, if you have a linear scalar property with these keyframe values: `0, 1, 1, 1, 0`, then the middle keyframe is not doing anything, because it has two equivalent ones surrounding it, so when minified, this property would end up having these keyframe values: `0, 1, 1, 0`.

## [14.0.1] - 2024-08-11

- Fixed a problem related to TypeScript. There are no functional changes at all in this update, the problem only occurred in rare cases when trying to use a generic Property as a type in TS. Any JavaScript using the library won't notice anything different, because there really is nothing different.

## [14.0.0] - 2024-08-07

- Added more utility functions:
  - `FXRUtility.box` - Creates an outline of a cuboid shape.
  - `FXRUtility.rect` - Creates a rectangle.
  - `FXRUtility.ellipse` - Creates an ellipse.
  - `FXRUtility.ellipsoid` - Creates three ellipses that form the outline of an ellipsoid.
  - `FXRUtility.cylinder` - Creates an outline of a cylinder.
  - `FXRUtility.transform` - Wraps a list of nodes in one that has a transform applied to it. The transform is defined by a translation, a direction to align with, and a roll angle. This makes it easier to point nodes in specific directions, or to just move them.
  - `FXRUtility.outlineEmitters` - Adds outlines for all node and particle emitters in a node.
  - `FXRUtility.animatedNodeRotation` - Creates a `NodeSpin` action from a rotation property. Animating the rotation directly is not normally possible, it can only be done by controlling the angular speed. This function makes it possible by converting a rotation property to an angular speed property.
- Added `anyValueDiff` - This function subtracts one `AnyValue` from another. (An `AnyValue` is any scalar or vector value, including all types of properties.) This function simply uses the existing `anyValueSum` and `anyValueMult` functions to do this, so it works very similarly to those.
- The three box size fields in the force volume actions have been converted to a single vector field.
- The fallback for distortion and blur colors when applying a color palette has been changed to just white. This fixes partial palettes making some effects have strange-looking, bright or dark rectangles floating around.
- `DataAction`s now have a new `meta` property with some information about the action type.
  - `meta.isAppearance` - True if the action is an appearance action.
  - `meta.isParticle` - True if the action defines a particle appearance.
  - More is likely to be added to this in the future, if there are other things like this that is useful to have easy access to.
- All of the position offset, speed, and acceleration fields in the GPU particle actions have been converted to vector fields. This got rid of 68 fields in total, so it can simplify things a lot.

## [13.0.0] - 2024-08-04

- Many new recolor-related features have been added to make recoloring even easier.
  - There is now a template tag for converting hex color strings into color vectors for FXRs. This tag is simply called `hex`, so it is now possible to do something like `` hex`5588ff` `` and it would be equivalent to `[0.333, 0.533, 1, 1]`. It supports 3-, 4-, 6-, and 8-digit hex values. This can be used anywhere where you would normally put color vectors.
  - There are now two new functions for generating a color palette from existing effects:
    - `Node.generateColorPalette` - Generates a palette from the node it is called on.
    - `Recolor.generatePalette` - Generates a palette from an array of nodes or FXR objects.
  - The `Node.recolor` method can now also take a color palette generated from the two functions above. This will apply the palette to the node it is called on, allowing you to copy a set of colors from one effect and apply them to another. This can be very useful if you want to make an effect fit an existing theme or set of effects.
  - Added a new `Recolor` namespace, which contains many different recolor functions that can be used with the `Node.recolor` and `DataAction.recolor` methods:
    - `Recolor.standardBlend`
    - `Recolor.replace`
    - `Recolor.multiply`
    - `Recolor.add`
    - `Recolor.invert`
    - `Recolor.grayscale`
    - `Recolor.curves`
    - `Recolor.mix`
    - `Recolor.hueShift`
    - `Recolor.replaceHue`
    - `Recolor.replaceSaturation`
    - `Recolor.colorBlend`
    - `Recolor.scaleSaturation`
  - There is now also a `DataAction.recolorProperty` method that can be used to apply a recolor function to a single color property or color vector field.
  - Added `Node.colors` and `DataAction.colors` generator methods, which yield all unique color values in the node/action.
- Added a new `FXRUtility` namespace, which contains methods to simplify various things when creating new effects.
  - `FXRUtility.line` - Creates a node with a particle attached that forms a line between two points you give it. This has options for line width, color, and more.
  - `FXRUtility.text` - Converts a given string to a node that looks like that string. This has options for font size, text alignment, and more.
- The offset and rotation fields in the node transform actions (35 and 36) have been converted to vector fields.
- The color multiplier and bloom color fields in the LensFlare action (10014) have been converted to vector fields.
  - This fixes a bug where these fields were not changed by the recolor functions in the library.
- Converting point lights between DS3 and the other games should now keep the brightness more like the original. DS3 point lights seem to work a bit differently, so it stil won't be perfectly accurate, but it should be much closer than before.
- The rate of time can now be adjusted on nodes or actions using the new `scaleRateOfTime` method.
- The rate of time in action 10500 is now automatically applied to everything when writing to DS3. This fixes converting effects from newer games to DS3 causing them to play at a different rate than the original effect if the original had a non-unit value for the rate of time.
- The `FXR.toArrayBuffer` method will now throw if the FXR's ID is invalid.
- Added an `FXR.name` getter function to FXR objects, which returns a file name for the FXR based on its ID.
  - For example, an FXR with 1 as the ID would return `f000000001.fxr`.
  - This is very useful when saving an effect to a file, as now you can just do `await fxr.saveAs(fxr.name, Game.EldenRing)`, for example.
- Various functions that combine properties will now filter out some keyframes if they are less than a millisecond apart.
- Sequence properties and component sequence properties can now be minified to constant properties if all of their keyframes are the same.
- Some bugs have been fixed, and some improvements have been made to the anyValueSum and anyValueMult functions.
- Various broken links on the documentation site have been fixed.
- The Node.js setup guide has been updated to use the new `@cccode/create-fxr` module to set up the project folder, which eliminates some manual steps that are important to get right.
- The editing example in the readme has been updated to use some of the new recolor features instead of doing it the old way.

## [12.2.0] - 2024-07-14

- The static FXR.read method now returns an instance of the class it was called from instead of the FXR class specifically. This means that it's now possible to extend the class without rewriting the static read method from scratch as long as the constructor is similar.

## [12.1.0] - 2024-07-11

- The following Node methods now have a new recurse parameter that controls whether or not the method should be applied to descendant nodes:
  - scale
  - recolor
  - remapResources
- The following Node generator methods now have a new recurse parameter that controls whether or not the method should yield objects of descendant nodes:
  - walkEffects
  - walkActions
  - walkProperties
- This new recurse parameter for the Node methods defaults to true, so calling them without it works just like before this change.

## [12.0.0] - 2024-06-27

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

[Unreleased]: https://github.com/EvenTorset/fxr/compare/v20.1.1...HEAD
[20.1.1]: https://github.com/EvenTorset/fxr/compare/v20.1.0...v20.1.1
[20.1.0]: https://github.com/EvenTorset/fxr/compare/v20.0.1...v20.1.0
[20.0.1]: https://github.com/EvenTorset/fxr/compare/v20.0.0...v20.0.1
[20.0.0]: https://github.com/EvenTorset/fxr/compare/v19.0.2...v20.0.0
[19.0.2]: https://github.com/EvenTorset/fxr/compare/v19.0.1...v19.0.2
[19.0.1]: https://github.com/EvenTorset/fxr/compare/v19.0.0...v19.0.1
[19.0.0]: https://github.com/EvenTorset/fxr/compare/v18.0.2...v19.0.0
[18.0.2]: https://github.com/EvenTorset/fxr/compare/v18.0.1...v18.0.2
[18.0.1]: https://github.com/EvenTorset/fxr/compare/v18.0.0...v18.0.1
[18.0.0]: https://github.com/EvenTorset/fxr/compare/v17.0.0...v18.0.0
[17.0.0]: https://github.com/EvenTorset/fxr/compare/v16.0.0...v17.0.0
[16.0.0]: https://github.com/EvenTorset/fxr/compare/v15.2.0...v16.0.0
[15.2.0]: https://github.com/EvenTorset/fxr/compare/v15.1.0...v15.2.0
[15.1.0]: https://github.com/EvenTorset/fxr/compare/v15.0.0...v15.1.0
[15.0.0]: https://github.com/EvenTorset/fxr/compare/v14.1.0...v15.0.0
[14.1.0]: https://github.com/EvenTorset/fxr/compare/v14.0.1...v14.1.0
[14.0.1]: https://github.com/EvenTorset/fxr/compare/v14.0.0...v14.0.1
[14.0.0]: https://github.com/EvenTorset/fxr/compare/v13.0.0...v14.0.0
[13.0.0]: https://github.com/EvenTorset/fxr/compare/v12.2.0...v13.0.0
[12.2.0]: https://github.com/EvenTorset/fxr/compare/v12.1.0...v12.2.0
[12.1.0]: https://github.com/EvenTorset/fxr/compare/v12.0.0...v12.1.0
[12.0.0]: https://github.com/EvenTorset/fxr/compare/v11.0.0...v12.0.0
[11.0.0]: https://github.com/EvenTorset/fxr/compare/v10.0.1...v11.0.0
