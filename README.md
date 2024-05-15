# FXR
This is a JavaScript library for creating and editing FXR files (particle effects, lights, etc.) for Dark Souls 3, Sekiro, Elden Ring, and Armored Core 6. It does not require any dependencies, and works in both the browser and in Node.

It includes classes for most known structures in the file format that makes it relatively very easy to create brand new effects from scratch. It also has functions that allow you to modify existing effects in different ways: scaling, recoloring, converting between games, and more.

## Installation
The library is available on [npm](https://www.npmjs.com/package/@cccode/fxr), so you can use a package manager like npm, yarn or pnpm to install it.

While the library does not have any dependencies, it *does* have some dev dependencies for compiling TypeScript and generating docs. To avoid installing those with npm, include `--omit=dev` when running the installation command:
```
npm i @cccode/fxr --omit=dev
```

If you are new to using Node.js and want to use the library locally, check out [the Node.js guide here](https://github.com/EvenTorset/fxr/blob/main/NODE.md).

## Documentation
Check out the auto-generated docs at https://fxr-docs.pages.dev/ to find more information about the specialized action classes and other things. Also check out the [example directory](https://github.com/EvenTorset/fxr/tree/main/examples) in the GitHub repo, it includes examples for creating new effects as well as editing existing effects in various ways.

## Editing FXR files
To edit existing FXR files, all you need is an ArrayBuffer or typed array with the file's content. The example below is written for Node, but by replacing how you get the buffer and what you do with the output it should also work fine in the browser.
```js
import { FXR, Game } from '@cccode/fxr'

// Parse file
const fxr = await FXR.read('f000450360.fxr', Game.EldenRing)

// Make changes to the FXR, for example scaling it so it's half as big:
fxr.root.scale(0.5)

// Let's also recolor this effect. This is the color we want to change this to,
// a red-ish orange.
const targetColor = [1, 0.3, 0]

// This function takes a function that remaps colors passed to it. You can use
// any remapping method you like, but here is one that works pretty well in
// most cases and only requires small tweaks depending on the FXR it's used
// with and what your target color is.
fxr.root.recolor(([r, g, b, a]) => {
  // Colors in FXRs are allowed to go above 1, and it usually just adds a bloom
  // effect to the particles. We need to scale it back down to the 0-1 range
  // for these calculations, and then scale it back to what it was after.
  const scale = Math.max(r, g, b, 1)
  r /= scale
  g /= scale
  b /= scale

  // Calculate HSV value and saturation
  const min = Math.min(r, g, b)
  const max = Math.max(r, g, b)
  let s = max > 0 ? (max - min) / max : 0

  // Linear interpolation between the HSV "value" (max) and the target color
  // based on the saturation of the original color.
  r = max * (1 - s) + targetColor[0] * s
  g = max * (1 - s) + targetColor[1] * s
  b = max * (1 - s) + targetColor[2] * s

  // Scale the values to match the original brightness of the effect.
  r *= scale
  g *= scale
  b *= scale

  // Return the modified color with the original alpha.
  return [r, g, b, a]
})

// Write the modified file. Note that you may change the game to output this
// for to any of the four supported games, as long as the game supports all
// of the features used in the effect.
await fxr.saveAs('f000450360_edit.fxr', Game.EldenRing)
```
## Creating new FXR files
Creating brand new FXR files from scratch requires some knowledge about their structure, but below is an example to get started. The example creates lots of thin rectangular particles that change color over time in a cylindrical volume
```js
import {
  FXR,
  BasicNode,
  Action,
  FloatField,
  StaticNodeTransform,
  PeriodicEmitter,
  CylinderEmitterShape,
  ParticleAttributes,
  BillboardEx,
  BlendMode,
  LinearProperty,
  Keyframe,
  Game,
} from '@cccode/fxr'

// Let's make a replacement for the ghostflame torch effect in Elden Ring.
// Its ID is 402030.
const fxr = new FXR(402030)

fxr.root.nodes = [
  // The BasicNode class makes it very easy to create new nodes. You can give
  // it a list of effects, or just a list of actions that it will create an
  // effect out of.
  new BasicNode([
    // The order of the actions in this list does not matter, they will be put
    // in the correct slot automatically. If you add more than one action that
    // go in the the same slot, only the last one will be used.

    // Creating a new action:
    new Action(35, [
      new FloatField(0),
      new FloatField(0.5),
      new FloatField(0),
      new FloatField(0),
      new FloatField(0),
      new FloatField(0),
    ]),

    // Most actions have their own subclasses that make them easier to create.
    // You can always use the generic Action class, but the subclasses are
    // better for readability and they are a lot easier to create.

    // This is equivalent to the action created above:
    new StaticNodeTransform({ offsetY: 0.5 }),


    new PeriodicEmitter({ interval: 0.1, perInterval: 10 }), // Action 300
    new CylinderEmitterShape({ radius: 0.2 }), // Action 405
    new ParticleAttributes({ duration: 1 }), // Action 129
    new BillboardEx({ // Action 603
      blendMode: BlendMode.Normal,
      width: 0.01,
      height: 0.1,
      color1: new LinearProperty(true, [ // Animated property
        new Keyframe(0,    [1, 0, 0, 1]),
        new Keyframe(0.33, [0, 1, 0, 1]),
        new Keyframe(0.67, [0, 0, 1, 1]),
        new Keyframe(1,    [1, 0, 0, 1]),
      ]),
      color2: [1, 1, 1, 0.9],
    })

  ])
]

// Write the new file. Note that you may change the game to output this for to
// any of the four supported games, as long as the game supports all of the
// features used in the effect.
await fxr.saveAs('f000402030.fxr', Game.EldenRing)
```

## Thanks
- ivi - FXR research, and WitchyBND, whose [C# FXR class](https://github.com/ividyon/WitchyBND/blob/main/WitchyFormats/Formats/RSFXR.cs) formed the basis of this library's functions for reading and writing FXR files.
- The12thAvenger - Help with figuring out various unknowns.
- Rayan - Testing, feedback, FXR research.

It's also worth mentioning everyone on [WitchyBND's contributors list](https://github.com/ividyon/WitchyBND?tab=readme-ov-file#contributors), especially anyone who has contributed to its FXR class.
