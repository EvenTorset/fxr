import fs from 'node:fs/promises'
import { FXR, Game } from '@cccode/fxr'

/*

This example shows how you can resize an effect.

It reads the file f000450360.fxr and outputs f000450360_edit.fxr at half the
original size. You can change it to output to the same file, but make sure to
back up any important effects before you overwrite them with this in case
something goes wrong.

*/

// Parse file, make sure to set the right game
const fxr = FXR.read(await fs.readFile('f000450360.fxr'), Game.EldenRing)

// Scale the effect by some factor
fxr.root.scale(0.5)

// Write the modified file for whatever game you want to output this to
await fs.writeFile('f000450360_edit.fxr', Buffer.from(fxr.toArrayBuffer(Game.EldenRing)))
