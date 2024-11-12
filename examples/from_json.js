import {
  AttachMode,
  BlendMode,
  FXR,
  Keyframe,
  LinearProperty,
  Node,
  NodeAttributes,
  RainbowProperty,
  SteppedProperty
} from '@cccode/fxr'

/*

This example shows how you can use the library's JSON format and methods to
edit existing effects in a convenient way.

*/

const fxr = new FXR(123456)

fxr.root.nodes = [
  /*
    This JSON structure has been copied from an existing effect and then
    edited to show how various things from the library can be used.

    The original effect was converted to JSON using the fxrjson tool:
    https://www.npmjs.com/package/fxrjson
  */
  Node.fromJSON({
    "type": 2200,
    "stateConfigMap": [ 0 ],
    "effects": [
      {
        "type": 1004,
        // Actions can be replaced with classes from the library:
        "nodeAttributes": new NodeAttributes({ duration: 4 }),
        // Action slots that have their default actions can be removed or
        // commented out:
        //   "nodeMovement": null,
        //   "nodeAudio": null,
        //   "emitter": { "type": 399 },
        "particleAttributes": {
          "type": 129,
          // Enums from the library can be used as values for properties:
          "attachment": AttachMode.None,
          // JS is not as strict as JSON. You can remove the quotes around keys
          // if you want, but there is no real difference other than how the
          // code looks:
          duration: -1
        },
        "appearance": {
          "type": 600,
          "texture": 10020,
          "blendMode": BlendMode.Add,
          // Functions and classes from the library can be used to create
          // properties in an easier way than writing the JSON structure
          // for animations manually:
          "size": LinearProperty.basic(false, 4, 0, 2),
          "color1": [ 1, 1, 1, 1 ],
          "color3": RainbowProperty(4),
          "rgbMultiplier": new SteppedProperty(false, [
            new Keyframe(0, 1),
            new Keyframe(1, 2),
            new Keyframe(2, 3),
            new Keyframe(3, 4),
          ]),
          "alphaMultiplier": 1,
          // Feel free to remove or comment out any action properties that you
          // want to use the default values for:
          //   "alphaThreshold": 0,
          //   "unk_sdt_f2_30": 0,
          //   "unk_sdt_f2_31": 0,
          //   "unk_er_f1_3": 1,
          //   "unk_er_f1_4": 1,
          //   "unk_er_f2_39": 0
        },
      }
    ],
    "nodes": []
  })
]


// You can also put the entire JSON from fxrjson into FXR.fromJSON:
// (nodes and some actions have been left out to keep the example short)
const fxr2 = FXR.fromJSON({
  "id": 123456,
  "states": [ "External(0) < 1 else -1" ],
  "root": {
    "type": 2000,
    "termination": { "type": 700 },
    "nodes": []
  }
})


// The outer object with "version" and "fxr" is optional, but that can also
// be used, and it will produce the same FXR object:
const fxr3 = FXR.fromJSON({
  "version": "@cccode/fxr@10.0.0",
  "fxr": {
    "id": 123456,
    "states": [ "External(0) < 1 else -1" ],
    "root": {
      "type": 2000,
      "termination": { "type": 700 },
      "nodes": []
    }
  }
})
