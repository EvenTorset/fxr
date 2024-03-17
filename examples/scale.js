import fs from 'node:fs/promises'
import { FXR } from '@cccode/fxr'

/*

This example shows how you can resize an effect.

It reads the file f000450360.fxr and outputs f000450360_edit.fxr at half the
original size. You can change it to output to the same file, but make sure to
back up any important effects before you overwrite them with this in case
something goes wrong.

This does not work with Dark Souls 3 effects, and Sekiro effects have not been
tested. Elden Ring and Armored Core 6 effects should work fine.

*/

// Parse file
const fxr = FXR.read((await fs.readFile('f000450360.fxr')).buffer)

// Scale the effect by some factor
fxr.root.scale(0.5)

// Write the modified file
await fs.writeFile('f000450360_edit.fxr', Buffer.from(fxr.toArrayBuffer()))
