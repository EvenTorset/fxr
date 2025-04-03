import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import yaml from 'yaml'

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const srcDir = path.join(projectDir, 'src')
const actionsDir = path.join(srcDir, 'actions')
const enumsDir = path.join(srcDir, 'enums')

const gameMap = {
  DS3: 'DarkSouls3',
  SDT: 'Sekiro',
  ER: 'EldenRing',
  AC6: 'ArmoredCore6',
}

const fieldTypeNameMap = {
  bool: 'boolean',
  int: 'integer',
  float: 'float',
  vec2: 'vector2',
  vec3: 'vector3',
  vec4: 'vector4'
}

const componentTypeNames = {
  1: 'scalar',
  2: 'vector2',
  3: 'vector3',
  4: 'vector4',
}

function naturalSorter(as, bs) {
  let a, b, a1, b1, i = 0, n, L,
  rx = /(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g
  if (as === bs) {
    return 0
  }
  if (typeof as !== 'string') {
    a = as.toString().toLowerCase().match(rx)
  } else {
    a = as.toLowerCase().match(rx)
  }
  if (typeof bs !== 'string') {
    b = bs.toString().toLowerCase().match(rx)
  } else {
    b = bs.toLowerCase().match(rx)
  }
  L = a.length
  while (i < L) {
    if (!b[i]) return 1
    a1 = a[i],
    b1 = b[i++]
    if (a1 !== b1) {
      n = a1 - b1
      if (!isNaN(n)) return n
      return a1 > b1 ? 1 : -1
    }
  }
  return b[i] ? -1 : 0
}

function linkReplacer(name, label, context) {
  let prefix = ''
  if (!name.includes('.')) {
    if ('members' in context) {
      if (name in context.members) {
        prefix = context.name + '.'
      }
    } else if ('properties' in context) {
      if (name in context.properties) {
        prefix = context.name + '.'
      }
    }
  }
  return `[${label}](https://fxr-docs.pages.dev/~#${prefix}${name})`
}

function processMarkdown(md, context) {
  return md
    .trim()
    .replace(/\{@link ([^\}\s]+)\s*\}/g, (_, name) => linkReplacer(name, name, context))
    .replace(/\{@link ([^\}\s]+)\s+(.+?)\}/g, (_, name, label) => linkReplacer(name, label, context))
}

export default async function() {
  const enumsJSON = {}

  for (const fn of (await fs.readdir(enumsDir)).sort(naturalSorter)) {
    const data = yaml.parse(await fs.readFile(path.join(enumsDir, fn), 'utf-8'))
    const json = {}
    enumsJSON[data.name] = json

    json.desc = processMarkdown(data.desc, data)
    json.members = Object.fromEntries(Object.entries(data.members).map(([name, member]) => [
      name,
      {
        value: member.value,
        desc: processMarkdown(member.desc, data),
      }
    ]))
  }

  const actionsJSON = []

  for (const fn of (await fs.readdir(actionsDir)).sort(naturalSorter)) {
    const data = yaml.parse(await fs.readFile(path.join(actionsDir, fn), 'utf-8'))
    const json = {}
    actionsJSON.push(json)

    if (!('inGames' in data || 'games' in data)) throw 'Unsupported action'

    json.type = data.type
    json.name = data.name
    json.slot = data.slot
    json.meta = data.meta
    json.desc = processMarkdown(data.desc, data)
    json.supportedGames = 'inGames' in data ?
      data.inGames.map(game => gameMap[game]) :
      Object.keys(data.games).filter(game => {
        return data.games[game] !== 'fallback'
      }).map(game => gameMap[game])

    enumsJSON.ActionType.members[data.name] = {
      value: data.type,
      desc: json.desc
    }

    if ('properties' in data) {
      json.properties = {}
      for (const [name, prop] of Object.entries(data.properties)) {
        const jsonProp = {}
        json.properties[name] = jsonProp
        if ('desc' in prop) {
          jsonProp.desc = processMarkdown(prop.desc, data)
        } else if ('field' in prop) {
          jsonProp.desc = `Unknown ${fieldTypeNameMap[prop.field]}.`
        } else {
          jsonProp.desc = `Unknown ${componentTypeNames[prop.components ?? 1]} property.`
        }
        jsonProp.default = prop.default ?? (prop.field === 'bool' ? false : 0)
        if (!prop.s10) {
          jsonProp.components = prop.components ?? 1
        }
        if ('field' in prop) {
          if (typeof prop.field === 'string') {
            jsonProp.fieldType = fieldTypeNameMap[prop.field]
          } else {
            jsonProp.fieldType = Object.fromEntries(Object.entries(prop.field).map(([k, v]) => [
              gameMap[k],
              fieldTypeNameMap[v]
            ]))
          }
        }
        if ('argument' in prop) {
          jsonProp.argument = prop.argument
        }
        if ('enum' in prop) {
          jsonProp.enum = prop.enum
          if (typeof jsonProp.default === 'string') {
            const memberName = jsonProp.default.split('.')[1]
            jsonProp.default = enumsJSON[prop.enum].members[memberName].value
          }
        }
        if ('resource' in prop) {
          jsonProp.resource = prop.resource
          if (prop.resource === 'texture' && 'textureType' in prop) {
            jsonProp.textureType = prop.textureType
          }
        }
        if ('see' in prop) {
          jsonProp.related = prop.see
        }
        if ('type' in prop) {
          jsonProp.tsType = prop.type
        }
      }
    }

    if ('games' in data) {
      json.structure = {}
      for (const [game, value] of Object.entries(data.games)) {
        if (value === 'fallback') continue;
        const struct = typeof value === 'string' ? data.games[value] : value
        json.structure[gameMap[game]] = {
          ...'properties1' in struct && {
            properties1: typeof struct.properties1 === 'string' ? data.games[struct.properties1].properties1 : struct.properties1
          },
          ...'properties2' in struct && {
            properties2: typeof struct.properties2 === 'string' ? data.games[struct.properties2].properties2 : struct.properties2
          },
          ...'fields1' in struct && {
            fields1: typeof struct.fields1 === 'string' ? data.games[struct.fields1].fields1 : struct.fields1
          },
          ...'fields2' in struct && {
            fields2: typeof struct.fields2 === 'string' ? data.games[struct.fields2].fields2 : struct.fields2
          },
          ...'section10s' in struct && {
            section10s: typeof struct.section10s === 'string' ? data.games[struct.section10s].section10s : struct.section10s
          },
        }
      }
    }
  }

  return {
    enums: enumsJSON,
    actions: actionsJSON,
  }
}
