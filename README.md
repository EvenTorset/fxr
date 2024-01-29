# FXR
This is a JavaScript library for creating and editing FXR files for Dark Souls 3, Sekiro, Elden Ring, and Armored Core 6. It does not require any dependencies and works in both the browser and in Node.

While it does support all of those games, its focus is on Elden Ring and some utility features may not work for the other games right now.

## Installation
While the library does not have any dependencies, it *does* have some dev dependencies for compiling TypeScript and generating docs. To avoid installing those, include `--omit=dev` when running the installation command:
```
npm i @cccode/fxr --omit=dev
```

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
import { FXR, ConstantProperty } from '@cccode/fxr'

// Get an ArrayBuffer of the file's content
const { buffer } = await fs.readFile('f002002000.fxr')

// Parse file
const fxr = FXR.read(buffer)

// Make some changes, for example changing this effect to be red
fxr.rootNode.nodes[0].effects[0].actions[9].properties1[7] = new ConstantProperty(1, 0, 0, 1)

// Write the modified file
await fs.writeFile('f002002000_edit.fxr', Buffer.from(fxr.toArrayBuffer()))
```
## Creating new FXR files
Creating brand new FXR files from scratch requires some knowledge about their structure, but below is an example to get started. The example creates lots of thin rectangular particles that change color over time in a cylindrical volume
```js
import fs from 'node:fs/promises'

import {
  FXR,
  BasicNode,
  BasicEffect,
  NodeTransform,
  PeriodicEmitter,
  CylinderEmitterShape,
  ParticleLifetime,
  QuadLine,
  BlendMode,
  LinearProperty,
} from '@cccode/fxr'

// Let's make a replacement for the ghostflame torch effect in Elden Ring.
// Its ID is 402030.
const fxr = new FXR(402030)

fxr.rootNode.nodes.push(
  // BasicNode and BasicEffect are classes that significantly simplifies
  // the structure of the FXR format. They have default actions for everything,
  // meaning you only need to replace what you care about for your FXR
  new BasicNode([
    // Node effects
    new BasicEffect([
      // Effect actions

      // The BasicEffect class does not care about the order of the actions
      // you give it. Put them in any order you want and it'll take care of it
      // for you automatically.

      // Some actions have special classes that make them easier to create.
      // You can use the generic action class as well, this is just better for
      // readability and makes the code a lot simpler.
      new NodeTransform({ // Action 35, used here for translation
        translateY: 0.5
      }),
      new PeriodicEmitter(0.1, 10, -1), // Action 300, emitter
      new CylinderEmitterShape(true, 0.2, 1, true), // Action 405, emitter shape
      new ParticleLifetime(1), // Action 129, particle duration
      new QuadLine({ // Action 602
        blendMode: BlendMode.Normal,
        width: 0.01,
        height: 0.1,
        startColor: new LinearProperty(true, [ // Animated property
          { position: 0,    value: [1, 0, 0, 1] },
          { position: 0.33, value: [0, 1, 0, 1] },
          { position: 0.67, value: [0, 0, 1, 1] },
          { position: 1,    value: [1, 0, 0, 1] },
        ]),
        endColor: [0, 0, 0, 0],
      }),
      // The BasicEffect class will fill in all of the actions that are missing
      // here, so this is all we need.
    ])
  ])
)

// Write the new file
await fs.writeFile('f000402030.fxr', Buffer.from(fxr.toArrayBuffer()))
```

## Thanks
- ivi - WitchyBND, FXR research
- The12thAvenger - Help with figuring out various unknowns

It's also worth mentioning everyone on [WitchyBND's contributors list](https://github.com/ividyon/WitchyBND?tab=readme-ov-file#contributors), especially anyone who has contributed to its FXR class.
