import {
  BasicNode,
  BillboardEx,
  BlendMode,
  FXR,
  NodeAttachToCamera,
  NodeTransform,
} from '@cccode/fxr'

/*
  This script generates effects for easily previewing blend modes. It covers
  the screen with a grid of rectangles using different colors and blend modes.
*/

const fxr = new FXR(402030)

// Width and height of screen
const w = 1.6
const h = 0.9

// Blend modes are the columns of the grid
const blendModes = [
  BlendMode.Normal,
  BlendMode.Add,
  BlendMode.Subtract,
  BlendMode.Multiply
]

// Colors are the rows of the grid
const colors = [
  [1, 0, 0, 1], // Red
  [0, 1, 0, 1], // Green
  [0, 0, 1, 1], // Blue
  [0, 1, 1, 1], // Cyan
  [1, 0, 1, 1], // Magenta
  [1, 1, 0, 1], // Yellow
]

fxr.root.nodes = [
  new BasicNode([
    // This node attaches itself to the camera and moves forward a bit so you
    // can see it.
    new NodeAttachToCamera,
    NodeTransform({
      offset: [0, 0, 1],
    })
  ],

  // This creates an array of child nodes. Each child node has a different
  // offset, blend mode, and color.
  Array(blendModes.length * colors.length).fill(null).map((e, i) => {
    const x = i % blendModes.length
    const y = Math.floor(i / blendModes.length)
    return new BasicNode([
      NodeTransform({
        offset: [
          w / blendModes.length * x - w / 2 + w / blendModes.length / 2,
          -h / colors.length * y + h / 2 - h / colors.length / 2,
          0
        ]
      }),
      new BillboardEx({
        blendMode: blendModes[x],
        color1: colors[y],
        width: w / blendModes.length,
        height: h / colors.length,
      })
    ])
  }))
]
