#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import { FXR, Game } from '@cccode/fxr'
import beautify from 'json-beautify'
import { fileURLToPath } from 'node:url'

await (async () => {
  if (process.argv.length < 3) {
    console.error('Please provide a file to convert and a game. Some examples:')
    console.error('> fxrjson f000000300.fxr DS3')
    console.error('> fxrjson f000000300.fxr.json ER')
    process.exitCode = 1
    return
  }

  const packagePath = path.dirname(fileURLToPath(import.meta.url))
  const { name, version } = JSON.parse(await fs.readFile(path.join(packagePath, 'package.json')))

  const game = process.argv.length > 3 ? {
    ds3: Game.DarkSouls3,
    darksouls3: Game.DarkSouls3,
    sdt: Game.Sekiro,
    sekiro: Game.Sekiro,
    er: Game.EldenRing,
    eldenring: Game.EldenRing,
    ac6: Game.ArmoredCore6,
    armoredcore6: Game.ArmoredCore6,
  }[process.argv[process.argv.length - 1].toLowerCase()] ?? Game.EldenRing : Game.EldenRing

  const filePath = process.argv[2]
  const content = await fs.readFile(filePath)

  if (content.subarray(0, 4).equals(Buffer.from('FXR\0'))) {
    const fxr = FXR.read(content, game)
    await fs.writeFile(filePath + '.json', beautify({
      version: `${name}@${version}`,
      fxr
    }, null, 2, 80))
  } else {
    const json = JSON.parse(await fs.readFile(filePath, 'utf-8'))
    if (json.version !== `${name}@${version}`) {
      console.warn(
        `${path.basename(filePath)} was deserialized by a different version of ${name}, ` +
        `which means that this version might fail to serialize it. To ensure that it works ` +
        `correctly, please serialize it with ${json.version} instead.`
      )
    }
    const fxr = FXR.fromJSON(json.fxr)
    await fxr.saveAs(filePath.replace(/.json$/, ''), game)
  }

})()
