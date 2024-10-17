import fs from 'node:fs/promises'
import path from 'node:path'
import zlib from 'node:zlib'

import * as cheerio from 'cheerio'

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
    const content = (await fs.readFile(filePath, 'utf-8'))
      // Replace functions links with funcs
      .replace(/href="((?:..\/)*)functions/g, 'href="$1funcs')
      // Remove HTML that got escaped and added to anchors linking to that part of the page
      .replace(/&lt;a href=&quot;.+?&quot; class=&quot;.*?&quot;&gt;<wbr\/>(.+?)&lt;\/a&gt;/, '$1')

    // Remove weird deeply nested lists that shouldn't be there
    const $ = cheerio.load(content)
    $('ul').each(function() {
      let ul = $(this)
  
      // Check if this <ul> has a single <li> child that contains a <ul> and no other content
      while (ul.children().length === 1 && ul.children().first().is('li')) {
        let li = ul.children().first()
        let nestedUl = li.children('ul').first()
  
        // If the <li> contains only the nested <ul>, replace the current <ul> with the nested one
        if (nestedUl.length && li.children().length === 1) {
          ul.replaceWith(nestedUl)
          ul = nestedUl
        } else {
          break
        }
      }
    })

    await fs.writeFile(filePath, $.html())
  }
}

{
  const content = await fs.readFile('docs/assets/navigation.js', 'utf-8')
  const list = JSON.parse(zlib.gunzipSync(Buffer.from(content.match(/;base64,(.*)"/)[1], 'base64')).toString('utf-8'))
  const todo = list.slice()
  while (todo.length > 0) {
    const e = todo.shift()
    e.path = e.path.replace(/^functions/, 'funcs')
    if ('children' in e) {
      todo.push(...e.children)
    }
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

await fs.mkdir('docs/q', { recursive: true })
await fs.writeFile('docs/q/index.html', /*html*/`
<!DOCTYPE html>
<html>
  <head>
    <title>Loading...</title>
    <style>:root{color-scheme:dark;}</style>
    <script src="/assets/navigation.js"></script>
    <script type="module">
      const navData = await new Response(
        new Blob([
          await(await fetch(window.navigationData)).arrayBuffer()
        ]).stream().pipeThrough(new DecompressionStream('gzip'))
      ).json()
      const linkMap = {}
      for (const entry of navData) {
        linkMap[entry.text] = entry.path
        if ('children' in entry) for (const child of entry.children) {
          linkMap[entry.text + '.' + child.text] = child.path
        }
      }
      const parts = location.hash.slice(1).replace(/\.prototype(?=\.)/, '').split('.')
      if (parts.slice(0, 2).join('.') in linkMap) {
        if (parts.length > 2) {
          location.href = '/' + linkMap[parts.slice(0, 2).join('.')] + '#' + parts[2]
        } else {
          location.href = '/' + linkMap[parts.slice(0, 2).join('.')]
        }
      } else if (parts[0] in linkMap) {
        if (parts.length > 1) {
          location.href = '/' + linkMap[parts[0]] + '#' + parts[1]
        } else {
          location.href = '/' + linkMap[parts[0]]
        }
      } else {
        location.href = '/'
      }
    </script>
  </head>
  <body>
    Loading...
  </body>
</html>
`)
