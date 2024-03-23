import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import chokidar from 'chokidar'

import build from './build.js'

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const srcDir = path.join(projectDir, 'src')
const distDir = path.join(projectDir, 'dist')
const fxrTSPath = path.resolve(path.join(srcDir, 'fxr.ts'))

try {
  await build()
} catch (err) {
  console.error(err)
}

const watcher = chokidar.watch(srcDir)

watcher.on('ready', () => {
  watcher.on('all', async (event, filePath) => {
    if (path.resolve(filePath) === fxrTSPath) {
      await fs.promises.copyFile(fxrTSPath, path.join(distDir, 'fxr.ts'))
    } else {
      try {
        await build()
      } catch (err) {
        console.error(err)
      }
    }
  })
})
