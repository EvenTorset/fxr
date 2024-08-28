import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import yaml from 'yaml'

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const srcDir = path.join(projectDir, 'src')
const actionsDir = path.join(srcDir, 'actions')

function getLineIndex(str, index) {
  if (index < 0 || index > str.length) return -1
  let lineNumber = 1
  let lineIndex = 0
  for (let i = 0; i < index; i++) {
    if (str[i] === '\n') {
      lineNumber++
      lineIndex = i + 1
    }
  }
  return lineIndex
}

const gamesSort = {
  DS3: 4e5,
  SDT: 3e5,
  ER:  2e5,
  AC6: 1e5,
}

for (const fn of fs.readdirSync(actionsDir)) {
  const filePath = path.join(actionsDir, fn)
  const yamlString = await fs.promises.readFile(filePath, 'utf-8')
  const doc = yaml.parseDocument(yamlString)
  if (!doc.get('properties')) continue;

  const props = doc.get('properties').items.map(item => ({
    key: item.key.value,
    start: getLineIndex(yamlString, item.key.range[0]),
    end: getLineIndex(yamlString, item.value.range[2]),
  }))

  const propsStart = props[0].start
  const propsEnd = props.at(-1).end

  const propIndices = {}
  const games = doc.get('games').toJSON()
  for (const { key } of props) {
    let min = Infinity
    for (const [n, game] of Object.entries(games)) {
      if (typeof game !== 'object') continue;
      if ('properties1' in game && Array.isArray(game.properties1) && game.properties1.includes(key)) {
        min = Math.min(min, gamesSort[n] + 0e6 + game.properties1.indexOf(key))
      }
      if ('properties2' in game && Array.isArray(game.properties2) && game.properties2.includes(key)) {
        min = Math.min(min, gamesSort[n] + 1e6 + game.properties2.indexOf(key))
      }
      if ('fields1' in game && Array.isArray(game.fields1) && game.fields1.includes(key)) {
        min = Math.min(min, gamesSort[n] + 2e6 + game.fields1.indexOf(key))
      }
      if ('fields2' in game && Array.isArray(game.fields2) && game.fields2.includes(key)) {
        min = Math.min(min, gamesSort[n] + 3e6 + game.fields2.indexOf(key))
      }
      if ('section10s' in game && Array.isArray(game.section10s) && game.section10s.includes(key)) {
        min = Math.min(min, gamesSort[n] + 4e6 + game.section10s.indexOf(key))
      }
    }
    propIndices[key] = min
  }

  props.sort((a, b) => propIndices[a.key] - propIndices[b.key])

  const outputString =
    yamlString.slice(0, propsStart) +
    props.map(p => yamlString.slice(p.start, p.end)).join('') +
    yamlString.slice(propsEnd)
  
  await fs.promises.writeFile(filePath, outputString)
}
