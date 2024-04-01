import fs from 'node:fs/promises'
import path from 'node:path'
import zlib from 'node:zlib'

async function* getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true })
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name)
    if (dirent.isDirectory()) {
      yield* getFiles(res)
    } else {
      yield res
    }
  }
}

await fs.rename('docs/functions', 'docs/funcs')

for await (const filePath of getFiles('docs')) {
  if (filePath.endsWith('.html')) {
    const content = await fs.readFile(filePath, 'utf-8')
    await fs.writeFile(filePath, content.replace(/href="functions/g, 'href="func'))
  }
}

{
  const content = await fs.readFile('docs/assets/navigation.js', 'utf-8')
  const list = JSON.parse(zlib.gunzipSync(Buffer.from(content.match(/;base64,(.*)"/)[1], 'base64')).toString('utf-8'))
  for (const e of list) {
    e.path = e.path.replace(/^functions/, 'funcs')
  }
  await fs.writeFile(
    'docs/assets/navigation.js',
    content.replace(/;base64,(.*)"/, ';base64,'+zlib.gzipSync(Buffer.from(JSON.stringify(list))).toString('base64')+'"')
  )
}

{
  const content = await fs.readFile('docs/assets/search.js', 'utf-8')
  const json = zlib.gunzipSync(Buffer.from(content.match(/;base64,(.*)"/)[1], 'base64'))
    .toString('utf-8')
    .replace(/"functions\//g, '"funcs/')
  await fs.writeFile(
    'docs/assets/search.js',
    content.replace(/;base64,(.*)"/, ';base64,'+zlib.gzipSync(Buffer.from(json)).toString('base64')+'"')
  )
}
