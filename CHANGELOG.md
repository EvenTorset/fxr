# Changelog

## [Unreleased]

### Highlights
- Added `Game.Heuristic`, which can be used with `FXR.read` to let the library figure out what game an FXR file is for.
  - This is now the default `game` value for the `FXR.read` function. (*Was `Game.EldenRing` previously.*)
  - `FXR` objects now have a new `gameHint` property that stores what game the file was parsed as. It defaults to `Game.Generic`, and the only way to set it is using the `FXR.read` function. New effects created with `new FXR` or `FXR.fromJSON` will have the default value. The hint will be `Game.Heuristic` if the `FXR.read` function could not determine what game it was from.
  - The `FXR.toArrayBuffer` and `FXR.saveAs` methods now use `Game.Heuristic` as the default game value too (*was also `Game.EldenRing` previously*), which will cause them to use the `gameHint` as the game, unless the hint is `Game.Heuristic`. If the hint is `Game.Heuristic`, they will look for some AC6-specific things, like action 800, and will use that as the game if anything is found. Otherwise, it will throw an error. I highly recommend still giving these methods a specific game, so the library doesn't need to guess.
  - `FXR.read` can detect any DS3 or Sekiro effects perfectly, as long as they're not modified in ways that would make the effect invalid for the game.
    - It has a pretty high chance of getting it right for ER and AC6, but it is not perfect, because there are a lot of ways to make AC6 effects that would be the same in ER. It will still read the effect correctly, as it doesn't matter if it's for ER or AC6 if they're both the same, but it affects the `gameHint` property, which can then affect `FXR.toArrayBuffer` and `FXR.saveAs`.
- Added a `randomSeed` function for generating random seeds to be used with randomization modifiers. The modifier classes already generated random seeds as default values, but this allows you to easily generate seeds that can be used in multiple properties, synchronizing their randomization.
- Added a `RandomFractionProperty` function. This was the only missing function to generate properties with randomization modifiers. The other two modifiers have had functions like this one for a while now.
- Added a `getValueType` function that returns the `ValueType` of a given value. This works with numbers, vector arrays, and properties. It's probably not super useful for most people, it's just a utility function used internally that I figured might as well be exported.
- All action fields/properties have been sorted in a way to make their order closer to their order in the actual files. It's not going to match exactly, because the actions in the library have all fields and properties from all four of the supported games, and some of the games have things moved around a bit. This order doesn't really affect much in the library or the documentation, but it causes the JSON structure to have the fields/properties in the new order, so it should hopefully make it easier to find and edit unknowns in the JSON.
- Named and documented the `bloom` field (previously `unk_ds3_f2_4`) in actions 600, 601, 602, 603, 604, 606, and 10012. This is simply a boolean field that toggles the extra bloom effect. (*Requires "Effects Quality" to be set to anything but "Low", and the `bloomColor` vector field to have a non-zero alpha.*)
- The `hex` template tag now also accepts strings starting with `#`, like `#ff0000`.
- Fixed the return type of the `hex` template tag. It was previously `number[]`, and is now `Vector4` like it should be.
- `BasicEffect` and `NodeEmitterEffect` can now be constructed without any arguments to make a default effect.

## [14.1.0] - 2024-08-14

### Highlights
- Added a `find` method to FXR objects, which finds and returns a value at a given path in the FXR. For example, a path like `root/nodes/0` would be the first child node of the root node.
- Added a `getActiveEffect` method to nodes that contain effects, which returns the effect that would be active when a given state index is active.
- Added a `clamp` method to properties. This slices off peaks and troughs outside of a given range to make sure the property value stays within the range.
- Added a `minify` method to modifiers. This does nothing for most of the modifier types, but for the external value modifiers this will minify the `factor` property.
- The `minify` method on properties now also minify the modifiers.
- The `minify` method on Stepped and Linear properties now removes keyframes that aren't doing anything. For example, if you have a linear scalar property with these keyframe values: `0, 1, 1, 1, 0`, then the middle keyframe is not doing anything, because it has two equivalent ones surrounding it, so when minified, this property would end up having these keyframe values: `0, 1, 1, 0`.

## [14.0.1] - 2024-08-11

### Highlights
- Fixed a problem related to TypeScript. There are no functional changes at all in this update, the problem only occurred in rare cases when trying to use a generic Property as a type in TS. Any JavaScript using the library won't notice anything different, because there really is nothing different.

## [14.0.0] - 2024-08-07

### Highlights
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

### Highlights
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

### Highlights
- The static FXR.read method now returns an instance of the class it was called from instead of the FXR class specifically. This means that it's now possible to extend the class without rewriting the static read method from scratch as long as the constructor is similar.

## [12.1.0] - 2024-07-11

### Highlights
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

[Unreleased]: https://github.com/EvenTorset/fxr/compare/v14.1.0...HEAD
[14.1.0]: https://github.com/EvenTorset/fxr/compare/v14.0.1...v14.1.0
[14.0.1]: https://github.com/EvenTorset/fxr/compare/v14.0.0...v14.0.1
[14.0.0]: https://github.com/EvenTorset/fxr/compare/v13.0.0...v14.0.0
[13.0.0]: https://github.com/EvenTorset/fxr/compare/v12.2.0...v13.0.0
[12.2.0]: https://github.com/EvenTorset/fxr/compare/v12.1.0...v12.2.0
[12.1.0]: https://github.com/EvenTorset/fxr/compare/v12.0.0...v12.1.0
[12.0.0]: https://github.com/EvenTorset/fxr/compare/v11.0.0...v12.0.0
[11.0.0]: https://github.com/EvenTorset/fxr/compare/v10.0.1...v11.0.0
