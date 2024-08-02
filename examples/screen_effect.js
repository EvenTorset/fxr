import {
  BasicNode,
  BlendMode,
  FXR,
  NodeAttachToCamera,
  NodeTransform,
  RadialBlur,
} from '@cccode/fxr'

/*
  This example shows off how you can create effects that are attached to the
  camera. The example effect here adds a stylized radial blur to the screen,
  increasing the contrast and giving it a more dramatic look.
*/

const fxr = new FXR(402030)

/*
  These values control the size of the particle used as a screen effect.
  The particle doesn't necessarily need to match the size of the screen, but
  it is useful for adding textures and things that make the scale important.
  The values depend on both the aspect ratio and field of view, so these
  example values might not cover everything for everyone. It might be a good
  idea to make them a bit larger than needed.
*/
const width = 16
const height = 9

/*
  This controls how far away the effect is from the camera. 0.08 is far enough
  away to make flat 2D particles visible, and it's so close to the camera that
  it's difficult to get anything between it and the camera. Higher values
  might be needed if you want to use a 3D model instead of a 2D particle.
*/
const distance = 0.08

fxr.root.nodes = [
  new BasicNode([
    // This action is what actually attaches the node to the camera.
    new NodeAttachToCamera,
    // Offset the node slightly so that it's in front of the camera instead of
    // being at the exact same position as the camera.
    NodeTransform({
      offset: [0, 0, distance]
    }),
    /*
      Use any particle type you'd like here. RadialBlur and Distortion are
      pretty good particle types to use because they just modify whatever is
      seen through the particle, but even types like BillboardEx can be used
      to apply a texture to the screen or they could be used with different
      blend modes to do achive certain effects.
    */
    new RadialBlur({
      blendMode: BlendMode.Multiply,
      rgbMultiplier: 150,
      width: width * distance * 0.1,
      height: height * distance * 0.1,
      blurRadius: 0.4
    })
  ])
]
