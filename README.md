# FXR
This is a JavaScript library for creating and editing FXR files for Dark Souls 3, Sekiro, Elden Ring, and Armored Core 6. It does not require any dependencies and works in both the browser and in Node.

While it does support all of those games, its focus is on Elden Ring and some utility features may not work for the other games right now.

## Installation
While the library does not have any dependencies, it *does* have some dev dependencies for compiling TypeScript and generating docs. To avoid installing those, include `--omit=dev` when running the installation command:
```
npm i @cccode/fxr --omit=dev
```

If you are new to using Node.js and want to use the library locally, check out [the Node.js guide here](https://github.com/EvenTorset/fxr/blob/main/NODE.md).

## WitchyBND
While it has evolved quite a bit, this library started out as a JS port of [WitchyBND's C# FXR class](https://github.com/ividyon/WitchyBND/blob/main/WitchyFormats/Formats/RSFXR.cs). Most of the code for reading and writing the format is based on that.

## Unknowns & to-dos
The FXR format is still being reverse-engineered, so there are a lot of unknown fields and properties everywhere, as well as some placeholder names (like Section10s) for things. This library does not hide anything that is still unknown, you are able to set any unknown value to whatever you want, allowing you to use it for your own research. If you discover something that is not documented by this library or the [ER FXR sheet](https://docs.google.com/spreadsheets/d/12hKQg5kBvOJ_M0Udoz5GqS_2RX-d8YtaBapwpSJ2Csg/edit#gid=1424830463), please make a comment on the sheet or a pull request to this repo.

In addition to the unknowns, there are lots of known things that are not yet implemented in this library. The goal is to eventually have specialized subclasses for every action type, property function, and modifier type. That would make it much easier to work with FXR files. The actions that have specialized subclasses so far have been tested pretty thoroughly to make sure that everything is correct (in Elden Ring).

## Documentation
Check out the auto-generated docs at https://fxr-docs.pages.dev/ to find more information about the specialized action classes and other things.

## Editing FXR files
To edit existing FXR files, all you need is an ArrayBuffer with the file's content. The example below is written for Node, but replacing how you get the ArrayBuffer and what you do with the output it should also work fine in the browser.
```js
import fs from 'node:fs/promises'
import { FXR } from '@cccode/fxr'

// Get an ArrayBuffer of the file's content
const { buffer } = await fs.readFile('f000450360.fxr')

// Parse file
const fxr = FXR.read(buffer)

// Make changes to the FXR, for example scaling it so it's half as big:
fxr.root.scale(0.5)

// Let's also recolor this effect. This function takes a function that remaps
// colors passed to it. You can use any remapping method you like, but here is
// one that works pretty well in most cases and only requires small tweaks
// depending on the FXR it's used with and what your target color is.
fxr.root.recolor(([r, g, b, a]) => {
  // Colors in FXRs are allowed to go above 1, and it usually just adds a bloom
  // effect to the particles. We need to scale it back down to the 0-1 range
  // for these calculations, and then scale it back to what it was after.
  const scale = Math.max(r, g, b, 1)
  r /= scale
  g /= scale
  b /= scale

  // Calculate saturation - It's better to use chroma from the Oklch space, but
  // this is just an example, so using HSV "saturation" since it's simple.
  const min = Math.min(r, g, b)
  const max = Math.max(r, g, b)
  let s = max > 0 ? (max - min) / max : 0

  // This FXR (450360) is a pretty pale purple, so double the saturation value
  // here so we get some more color out of it. Must be capped at 1.
  s = Math.min(s * 2, 1)

  // The color we want to change this to, a red-ish orange.
  const targetColor = [1, 0.3, 0]

  // Linear interpolation between the HSV "value" (max) and the target color.
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

// Write the modified file
await fs.writeFile('f000450360_edit.fxr', Buffer.from(fxr.toArrayBuffer()))
```
## Creating new FXR files
Creating brand new FXR files from scratch requires some knowledge about their structure, but below is an example to get started. The example creates lots of thin rectangular particles that change color over time in a cylindrical volume
```js
import fs from 'node:fs/promises'

import {
  FXR,
  BasicNode,
  Action,
  FloatField,
  NodeTransform,
  PeriodicEmitter,
  CylinderEmitterShape,
  ParticleAttributes,
  BillboardEx,
  BlendMode,
  LinearProperty,
  Keyframe,
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
    new NodeTransform({
      translateY: 0.5
    }),

    new PeriodicEmitter(0.1, 10, -1), // Action 300, emitter
    new CylinderEmitterShape(true, 0.2, 1, true), // Action 405, emitter shape
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
    }),

    // All of the action slots here have defaults, so you don't need to fill
    // every slot.
  ])
]

// Write the new file
await fs.writeFile('f000402030.fxr', Buffer.from(fxr.toArrayBuffer()))
```

## Thanks
- ivi - WitchyBND, FXR research
- The12thAvenger - Help with figuring out various unknowns

It's also worth mentioning everyone on [WitchyBND's contributors list](https://github.com/ividyon/WitchyBND?tab=readme-ov-file#contributors), especially anyone who has contributed to its FXR class.
