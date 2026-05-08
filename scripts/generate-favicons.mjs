import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(here, '..', 'public')

const sizes = [
  { file: 'favicon-16.png', size: 16 },
  { file: 'favicon-32.png', size: 32 },
  { file: 'favicon-48.png', size: 48 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
]

const svg = await readFile(resolve(publicDir, 'favicon.svg'))

for (const { file, size } of sizes) {
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(resolve(publicDir, file))
  console.log(`✓ ${file} (${size}×${size})`)
}

// Build a multi-resolution favicon.ico (16, 32, 48). Sharp can't write .ico
// directly, so we use png-to-ico via raw PNG buffers.
const icoSizes = [16, 32, 48]
const pngBuffers = await Promise.all(
  icoSizes.map((s) =>
    sharp(svg, { density: 384 })
      .resize(s, s)
      .png({ compressionLevel: 9 })
      .toBuffer(),
  ),
)

// Minimal ICO encoder for a sequence of PNG payloads (PNG-in-ICO format).
function encodeIco(pngs) {
  const count = pngs.length
  const headerSize = 6
  const dirEntrySize = 16
  const headers = Buffer.alloc(headerSize + count * dirEntrySize)
  // ICONDIR
  headers.writeUInt16LE(0, 0) // reserved
  headers.writeUInt16LE(1, 2) // type: 1 = icon
  headers.writeUInt16LE(count, 4) // count

  let offset = headers.length
  pngs.forEach((png, i) => {
    const size = icoSizes[i]
    const w = size >= 256 ? 0 : size
    const h = size >= 256 ? 0 : size
    const base = headerSize + i * dirEntrySize
    headers.writeUInt8(w, base + 0)
    headers.writeUInt8(h, base + 1)
    headers.writeUInt8(0, base + 2) // colors
    headers.writeUInt8(0, base + 3) // reserved
    headers.writeUInt16LE(1, base + 4) // planes
    headers.writeUInt16LE(32, base + 6) // bit count
    headers.writeUInt32LE(png.length, base + 8) // bytes
    headers.writeUInt32LE(offset, base + 12) // offset
    offset += png.length
  })

  return Buffer.concat([headers, ...pngs])
}

await writeFile(resolve(publicDir, 'favicon.ico'), encodeIco(pngBuffers))
console.log(`✓ favicon.ico (multi: ${icoSizes.join(', ')})`)

console.log('\nDone.')
