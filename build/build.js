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
  ParticleAge: 'Particle age',
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

export default async function() {

  const actionTypes = []
  const actionDataEntries = []
  const classes = []
  const actionsListEntries = []
  const actionsExport = []

  for (const fn of fs.readdirSync(actionsDir).sort(naturalSorter)) {
    const data = yaml.parse(await fs.promises.readFile(path.join(actionsDir, fn), 'utf-8'))

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
            return `${k}: { default: ${v.default ?? 0}, paths: {}${'field' in v ? `, field: ${fieldMap[v.field]}` : ''} },`
          }).join('\n        ')}
        },
        games: {
          ${Object.entries(data.games).map(([k, v]) => {
            if (typeof v === 'string') {
              return `[${gameMap[k]}]: ${gameMap[v]}`
            }
            return `
              [${gameMap[k]}]: {
                ${Object.entries(v).map(([lk, lv]) => {
                  return `${lk}: [${lv.map(e => `'${e}'`).join(',')}]`
                }).join(',\n          ')}
              }
            `.trim().replace(/^\s{14}(?=\})/m, ' '.repeat(8)).replace(/^\s{16}/m, ' '.repeat(10))
          }).join(',\n        ')}
        }
      }
    `.trim().replace(/^\s{4}/gm, ''))

    if (!data.omitClass) {
      classes.push(`
        export interface ${data.name}Params {
          ${Object.entries(data.properties).map(([k, v]) => {
            let defValue = v.default ?? 0
            if (typeof defValue === 'string' && !defValue.startsWith('[')) {
              defValue = `{@link ${defValue}}`
            } else {
              defValue = `\`${defValue}\``
            }
            return (
              'desc' in v ? `
                /**
                 * ${v.desc.trim().replace(/\n/g, '\n   * ')}
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
              ` : '\n  '
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
  await fs.promises.mkdir(distDir, { recursive: true })
  await fs.promises.writeFile(path.join(distDir, 'fxr.ts'), libSrc)

}
