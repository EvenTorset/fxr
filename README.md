# FXR
This is a JavaScript library for creating and editing FXR files (particle effects, lights, etc.) for Dark Souls 3, Sekiro, Elden Ring, and Armored Core 6. It does not require any dependencies, and works in both the browser and in Node.js.

It includes classes for all known structures in the file format that makes it relatively easy to create brand new effects from scratch. It also has functions that allow you to modify existing effects in many different ways: scaling, recoloring, converting between games, and more.

## Try it out
The library can be used without needing to install anything at the [FXR Playground](https://fxr-playground.pages.dev). Installing it may be more convenient in some cases, but the playground is great for trying it out and also includes a UI for some simple actions, such as recoloring or resizing effects.

## Installation
The library is available on [npm](https://www.npmjs.com/package/@cccode/fxr), so you can use a package manager like npm, yarn or pnpm to install it.

**I highly recommend checking out [the setup guide for Node.js here](https://github.com/EvenTorset/fxr/blob/main/NODE.md) if you are not familiar with JS or Node.js.**

<br>

If you *are* familiar with JS and Node.js, you can install the library with this command:
```
npm i @cccode/fxr
```

## Documentation
Check out the auto-generated docs at https://fxr-docs.pages.dev/ to find more information about the specialized action classes and other things. Also check out the [example directory](https://github.com/EvenTorset/fxr/tree/main/examples) in the GitHub repo, it includes examples for creating new effects as well as editing existing effects in various ways.

## fxrjson
The library has the ability to deserialize FXR files into JSON objects and it can also do the reverse. [**fxrjson**](https://www.npmjs.com/package/fxrjson) is a tool that uses this to allow you to do it through the right-click context menu on Windows or through a command line interface.

[![fxrjson context menu](https://raw.githubusercontent.com/EvenTorset/fxr/main/images/fxrjson_context_menu.png)](https://www.npmjs.com/package/fxrjson)

This can be useful to see what existing effects do, or to copy parts of existing effects to use in your own, like in [the example script about this](https://github.com/EvenTorset/fxr/blob/main/examples/from_json.js). The JSON files can also be edited manually and converted back to FXR after using fxrjson again.

## Editing FXR files
To edit existing FXR files, you need to first have the library read the file. When using Node.js, you can simply give it the file path and await the result. If you need to do it in the browser, you can give it an ArrayBuffer or typed array instead of a file path.

Once it has been read, you can change things in the FXR object to whatever you need. The library also provides useful functions for common actions like scaling or recoloring effects.

Once you have made your changes to the FXR object, you can write it to a file if you're using Node.js, or you can generate an ArrayBuffer with the file's content if you need it to run in the browser.

[Open in FXR Playground](https://fxr-playground.pages.dev/shared/examples/readme/edit)
```js
import { FXR, Game, Recolor, hex } from '@cccode/fxr'

// Parse file
const fxr = await FXR.read('f000450360.fxr')

// Make some changes to the FXR here.

// For example, you can scale the effect to be half as big as the original:
fxr.root.scale(0.5)

// Or you can recolor the effect:
fxr.root.recolor(Recolor.replace(hex`ff4d00`))

// Write the modified file. Note that you may change the game to output this
// for to any of the four supported games, as long as the game supports all
// of the features used in the effect.
await fxr.saveAs('f000450360_edit.fxr', Game.EldenRing)
```
## Creating new FXR files
Creating brand new FXR files from scratch requires some knowledge about their structure, but below is an example to get started. The example creates lots of thin rectangular particles that change color over time in a cylindrical volume.

[Open in FXR Playground](https://fxr-playground.pages.dev/shared/examples/readme/create)
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
  // it a list of configs, or just a list of actions that it will create a
  // config out of.
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
    // better for readability, are a lot easier to create, and allows various
    // utility functions in the library to work with them.

    // This is equivalent to the action created above:
    new StaticNodeTransform({ offset: [0, 0.5, 0] }),


    new PeriodicEmitter({ interval: 0.1, perEmission: 10 }), // Action 300
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

// Write the new file. `fxr.name` here is equivalent to 'f000402030.fxr',
// `fxr.name` simply generates the file name based on the FXR's ID.
// Also note that you may change the game to output this for to any of the four
// supported games, as long as the game supports all of the features used in
// the effect.
await fxr.saveAs(fxr.name, Game.EldenRing)
```

## Thanks
- ivi - FXR research, and WitchyBND, whose [C# FXR class](https://github.com/ividyon/WitchyBND/blob/main/WitchyFormats/Formats/RSFXR.cs) formed the basis of this library's functions for reading and writing FXR files.
- The12thAvenger - Help with figuring out various unknowns.
- Rayan - Testing, feedback, FXR research.

It's also worth mentioning everyone on [WitchyBND's contributors list](https://github.com/ividyon/WitchyBND?tab=readme-ov-file#contributors), especially anyone who has contributed to its FXR class.
