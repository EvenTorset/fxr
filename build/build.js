import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import yaml from 'yaml'

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const srcDir = path.join(projectDir, 'src')
const distDir = path.join(projectDir, 'dist')
const actionsDir = path.join(srcDir, 'actions')

const typeMap = {
  bool: 'boolean',
  int: 'number',
  float: 'number',
  vec2: 'Vector2',
  vec3: 'Vector3',
  vec4: 'Vector4',
}

const fieldMap = {
  bool: 0,
  int: 1,
  float: 2,
  vec2: 3,
  vec3: 4,
  vec4: 5
}

const fieldTypeNameMap = {
  bool: 'boolean',
  int: 'integer',
  float: 'float',
  vec2: 'vector2',
  vec3: 'vector3',
  vec4: 'vector4'
}

const gameMap = {
  DS3: 'Game.DarkSouls3',
  SDT: 'Game.Sekiro',
  ER: 'Game.EldenRing',
  AC6: 'Game.ArmoredCore6',
}

const argumentNames = {
  Constant0: 'Constant 0',
  ParticleAge: 'Particle age',
  EmissionTime: 'Emission time',
  EffectAge: 'Effect age',
}

const resourceMap = {
  texture: 0,
  model: 1,
  anibnd: 2,
  sound: 3,
}

const scaleMap = {
  true: 1,
  ifNotMinusOne: 2,
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

function defValString(prop) {
  let defValue = prop.default ?? 0
  if (typeof defValue === 'string') {
    defValue = `{@link ${defValue}}`
  } else if (Array.isArray(defValue)) {
    defValue = `\`[${defValue.join(', ')}]\``
  } else {
    defValue = `\`${defValue}\``
  }
  return defValue
}

function defValTS(prop) {
  const defValue = prop.default ?? 0
  if (Array.isArray(defValue)) {
    return `[${defValue.join(', ')}]`
  }
  return defValue.toString()
}

export default async function(writeToDist = true) {

  const actionTypes = []
  const actionDataEntries = []
  const classes = []
  const actionsListEntries = []
  const actionsExport = []
  const actionSlots = new Map

  for (const fn of fs.readdirSync(actionsDir).sort(naturalSorter)) {
    const data = yaml.parse(await fs.promises.readFile(path.join(actionsDir, fn), 'utf-8'))

    if ('slot' in data) {
      if (!actionSlots.has(data.slot)) {
        actionSlots.set(data.slot, [])
      }
      actionSlots.get(data.slot).push(data.name)
    }

    if ('properties' in data) {
      for (const prop of Object.keys(data.properties)) {
        let found = false
        search:
        for (const game of Object.values(data.games)) if (typeof game === 'object') {
          for (const list of Object.values(game)) if (Array.isArray(list)) {
            if (list.includes(prop)) {
              found = true
              break search
            }
          }
        }
        if (!found) {
          console.warn(`YAML Warning: Class property '${prop}' in action ${data.type} (${data.name}) is not used by any games.`)
        }
        if ('field' in data.properties[prop]) {
          let usedAsField = false
          for (const game of Object.values(data.games)) if (typeof game === 'object') {
            if (
              'fields1' in game && Array.isArray(game.fields1) && game.fields1.includes(prop) ||
              'fields2' in game && Array.isArray(game.fields2) && game.fields2.includes(prop)
            ) {
              usedAsField = true
              break
            }
          }
          if (!usedAsField) {
            console.warn(`YAML Warning: Class property '${prop}' in action ${data.type} (${data.name}) has a field type, but is not used as a field.`)
          }
        }
      }
      for (const game of Object.values(data.games)) if (typeof game === 'object') {
        for (const [listName, list] of Object.entries(game)) if (Array.isArray(list)) {
          for (const prop of list) {
            if (!(prop in data.properties)) {
              console.warn(`YAML Warning: Action ${data.type} (${data.name}) is missing the '${prop}' class property.`)
            } else if ((listName === 'fields1' || listName === 'fields2') && !('field' in data.properties[prop])) {
              console.warn(`YAML Warning: Class property '${prop}' in action ${data.type} (${data.name}) is missing a field type.`)
            }
          }
        }
      }
    }

    actionsExport.push(data.name)

    actionTypes.push(`
      /**
       * ### Action ${data.type} - ${data.name}${'slot' in data ? `
       * **Slot**: {@link ActionSlots.${data.slot}Action ${data.slot}}` : ''}
       * 
       * ${data.desc.trim().replace(/\n/g, '\n   * ')}
       * 
       * This action type has a specialized subclass: {@link ${data.name}}
       */
      ${data.name} = ${data.type},
    `.trim().replace(/^\s{6}/gm, '  '))

    actionDataEntries.push(`
      [ActionType.${data.name}]: {${'properties' in data ? `
        props: {
          ${Object.entries(data.properties).map(([k, v]) => {
            return `${k}: { default: ${defValTS(v)}${
              'field' in v ? `, field: ${fieldMap[v.field]}` : ''
            }${
              'resource' in v ? `, resource: ${resourceMap[v.resource]}` : ''
            }${
              'textureType' in v ? `, textureType: '${v.textureType}'` : ''
            }${
              'scale' in v ? `, scale: ${scaleMap[v.scale]}` : ''
            }${
              'color' in v ? `, color: 1` : ''
            }${
              v.omitClassProp ? `, omit: 1` : ''
            } },`
          }).join('\n          ')}
        },
        games: {
          ${Object.entries(data.games).map(([k, v]) => {
            if (typeof v === 'string') {
              if (v === 'fallback') {
                return `[${gameMap[k]}]: -2`
              }
              return `[${gameMap[k]}]: ${gameMap[v]}`
            }
            return `
              [${gameMap[k]}]: {
                ${Object.entries(v).map(([lk, lv]) => {
                  if (Array.isArray(lv)) {
                    return `${lk}: [${lv.map(e => `'${e}'`).join(',')}]`
                  } else {
                    if (data.games[lv]?.[lk] === undefined) {
                      console.warn(`YAML Warning: ${data.type}.games.${k}.${lk} refers to a game without ${lk}: ${lv}`)
                    }
                    return `${lk}: ${gameMap[lv]}`
                  }
                }).join(',\n            ')}
              }
            `.trim().replace(/^\s{14}(?=\})/m, ' '.repeat(10)).replace(/^\s{16}/m, ' '.repeat(12))
          }).join(',\n          ')}
        }
      ` : ''}}
    `.trim().replace(/^\s{4}/gm, ''))

    if (!data.omitClass) {
      const propNames = Object.keys(data.properties ?? {})
      const firstProp = 'properties' in data ? data.properties[propNames[0]] : {}
      if ('properties' in data && propNames.length > 1) classes.push(`
        export interface ${data.name}Params {
          ${Object.entries(data.properties).filter(e => !e[1].omitClassProp).map(([k, v]) => {
            const defValue = defValString(v)
            return (`
                /**
                 * ${'desc' in v ? v.desc.trim().replace(/\n/g, '\n   * ') : `Unknown${'field' in v ? ` ${fieldTypeNameMap[v.field]}` : ''}.`}
                 * 
                 * **Default**: ${defValue}${
                  'argument' in v ? `
                 * 
                 * **Argument**: {@link PropertyArgument.${v.argument} ${argumentNames[v.argument]}}`:''}${
                   'see' in v ? `
                 * 
                 * See also:
                 * - ${v.see.map(e => `{@link ${e}}`).join('\n   * - ')}`:''}
                 */
              `
            ) + `${k}?: ${v.type ?? typeMap[v.field]}`
          })
            .join('')
            .trim()
            .replace(/^\s{16}(?=\/\*\*| \*)|^\s{14}(?=\w)/gm, '  ')
          }
        }
      `.trim()
        .replace(/^\s{8}(?=\})/m, '')
        .replace(/^\s{10}(?=\/|\w)/m, '  ')
      )
      classes.push(`
        /**
         * ### {@link ActionType.${data.name} Action ${data.type} - ${data.name}}${'slot' in data ? `
         * **Slot**: {@link ActionSlots.${data.slot}Action ${data.slot}}` : ''}
         * 
         * ${data.desc.trim().replace(/\n/g, '\n * ')}
         */
        class ${data.name} extends DataAction {
          declare type: ActionType.${data.name}
          ${Object.entries(data.properties ?? {}).filter(e => !e[1].omitClassProp).map(([k, v]) => {
            return (
              'desc' in v ? `
                /**
                 * ${v.desc.trim().replace(/\n/g, '\n   * ')}${
                  'argument' in v ? `
                 * 
                 * **Argument**: {@link PropertyArgument.${v.argument} ${argumentNames[v.argument]}}`:''}${
                   'see' in v ? `
                 * 
                 * See also:
                 * - ${v.see.map(e => `{@link ${e}}`).join('\n   * - ')}`:''}
                 */
              ` : '\n  '
            ) + `${k}: ${v.type ?? typeMap[v.field]}`
          })
            .join('')
            .trim()
            .replace(/^\s{16}(?=\/\*\*| \*)|^\s{14}(?=\w)/gm, '  ')
          }${propNames.length === 1 ? `
          /**
           * @param ${propNames[0]} ${
            'desc' in firstProp ?
              firstProp.desc.trim().replace(/\n/g, '\n   * ') :
              `Unknown${'field' in firstProp ? ` ${fieldTypeNameMap[firstProp.field]}` : ''}.`
           }
           *
           * **Default**: ${defValString(firstProp)}${
             'argument' in firstProp ? `
           * 
           * **Argument**: {@link PropertyArgument.${firstProp.argument} ${argumentNames[firstProp.argument]}}`:''}${
             'see' in firstProp ? `
           * 
           * See also:
           * - ${firstProp.see.map(e => `{@link ${e}}`).join('\n   * - ')}`:''}
           */` : ''}
          constructor(${
            'properties' in data ?
              propNames.length > 1 ? `props: ${data.name}Params = {}` :
              `${propNames[0]}: ${data.properties[propNames[0]].type ?? typeMap[data.properties[propNames[0]].field]} = ${defValTS(firstProp)}`
            : ''}) {
            super(ActionType.${data.name})${'properties' in data ? `
            this.assign(${propNames.length > 1 ? 'props' : `{ ${propNames[0]} }`})` : ''}
          }
        }
      `.trim()
        .replace(/^\s{8}/gm, '')
      )
    }

    actionsListEntries.push(`[ActionType.${data.name}]: ${data.name}, ${data.name},`)
  }

  let libSrc = await fs.promises.readFile(path.join(srcDir, 'fxr.ts'), 'utf-8')

  const reReplacement = id => new RegExp(`( *)\\/\\*#${id} start\\*\\/[\\s\\S]*\\/\\*#${id} end\\*\\/`)
  function replace(id, content) {
    libSrc = libSrc.replace(reReplacement(id), `$1/*#${id} start*/\n${content}\n$1/*#${id} end*/`)
  }

  replace('ActionType', '  '+actionTypes.join('\n  '))
  replace('ActionData', '  '+actionDataEntries.join(',\n  '))
  replace('ActionClasses', classes.join('\n\n'))
  replace('ActionsList', '  '+actionsListEntries.join('\n  '))
  replace('ActionsExport', '  '+actionsExport.join(',\n  ') + ',')
  replace('ActionSlotTypes', Array.from(actionSlots).sort((a, b) => naturalSorter(a[0], b[0])).map(([name, actions]) => {
    return `  export type ${name}Action =\n${actions.map(e => `    | ${e}`).join('\n')}\n    | Action`
  }).join('\n\n'))

  await fs.promises.writeFile(path.join(srcDir, 'fxr.ts'), libSrc)
  if (writeToDist) {
    await fs.promises.mkdir(distDir, { recursive: true })
    await fs.promises.writeFile(path.join(distDir, 'fxr.ts'), libSrc)
  }

}
