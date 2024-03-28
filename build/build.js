import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import yaml from 'yaml'

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const srcDir = path.join(projectDir, 'src')
const distDir = path.join(projectDir, 'dist')
const actionsDir = path.join(srcDir, 'actions')

const typeMap = {
  int: 'number',
  float: 'number',
  bool: 'boolean'
}

const fieldMap = {
  int: 'FieldType.Integer',
  float: 'FieldType.Float',
  bool: 'FieldType.Boolean'
}

const gameMap = {
  DS3: 'Game.DarkSouls3',
  SDT: 'Game.Sekiro',
  ER: 'Game.EldenRing',
  AC6: 'Game.ArmoredCore6',
}

const argumentNames = {
  Constant0: 'Constant 0',
  InstanceAge: 'Instance age',
  EmissionTime: 'Emission time',
  EffectAge: 'Effect age',
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

export default async function(writeToDist = true) {

  const actionTypes = []
  const actionDataEntries = []
  const classes = []
  const actionsListEntries = []
  const actionsExport = []

  for (const fn of fs.readdirSync(actionsDir).sort(naturalSorter)) {
    const data = yaml.parse(await fs.promises.readFile(path.join(actionsDir, fn), 'utf-8'))

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
    }
    for (const game of Object.values(data.games)) if (typeof game === 'object') {
      for (const list of Object.values(game)) if (Array.isArray(list)) {
        for (const prop of list) {
          if (!(prop in data.properties)) {
            console.warn(`YAML Warning: Action ${data.type} (${data.name}) is missing the '${prop}' class property.`)
          }
        }
      }
    }

    actionsExport.push(data.name)

    actionTypes.push(`
      /**
       * ${data.desc.trim().replace(/\n/g, '\n   * ')}
       * 
       * This action type has a specialized subclass: {@link ${data.name}}
       */
      ${data.name} = ${data.type},
    `.trim().replace(/^\s{6}/gm, '  '))

    actionDataEntries.push(`
      [ActionType.${data.name}]: {
        props: {
          ${Object.entries(data.properties).map(([k, v]) => {
            let defValue = v.default ?? 0
            if (Array.isArray(defValue)) {
              defValue = `[${defValue.join(', ')}]`
            }
            return `${k}: { default: ${defValue}, paths: {}${'field' in v ? `, field: ${fieldMap[v.field]}` : ''}${'read' in v ? `, read: value => ${v.read}` : ''}${'write' in v ? `, write: value => ${v.write}` : ''} },`
          }).join('\n          ')}
        },
        games: {
          ${Object.entries(data.games).map(([k, v]) => {
            if (typeof v === 'string') {
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
      }
    `.trim().replace(/^\s{4}/gm, ''))

    if (!data.omitClass) {
      classes.push(`
        export interface ${data.name}Params {
          ${Object.entries(data.properties).map(([k, v]) => {
            let defValue = v.default ?? 0
            if (typeof defValue === 'string') {
              defValue = `{@link ${defValue}}`
            } else if (Array.isArray(defValue)) {
              defValue = `\`[${defValue.join(', ')}]\``
            } else {
              defValue = `\`${defValue}\``
            }
            return (`
                /**
                 * ${'desc' in v ? v.desc.trim().replace(/\n/g, '\n   * ') : 'Unknown.'}
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
         * ${data.desc.trim().replace(/\n/g, '\n   * ')}
         */
        class ${data.name} extends DataAction {
          declare type: ActionType.${data.name}
          ${Object.entries(data.properties).map(([k, v]) => {
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
          }
          constructor(props: ${data.name}Params = {}) {
            super(ActionType.${data.name})
            this.assign(props)
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

  await fs.promises.writeFile(path.join(srcDir, 'fxr.ts'), libSrc)
  if (writeToDist) {
    await fs.promises.mkdir(distDir, { recursive: true })
    await fs.promises.writeFile(path.join(distDir, 'fxr.ts'), libSrc)
  }

}
