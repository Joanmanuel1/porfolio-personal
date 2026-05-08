import sharp from 'sharp'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
const publicDir = resolve(root, 'public')
const portraitPath = resolve(root, 'src', 'assets', 'img', 'perfil.jpg')

const W = 1200
const H = 630
const PORTRAIT = 320

// 1) Background: dark gradient with subtle gradient blobs
const bgSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <radialGradient id="blob1" cx="20%" cy="30%" r="40%">
      <stop offset="0%" stop-color="#22c55e" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#22c55e" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blob2" cx="85%" cy="85%" r="40%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blob3" cx="60%" cy="20%" r="35%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#blob1)"/>
  <rect width="${W}" height="${H}" fill="url(#blob2)"/>
  <rect width="${W}" height="${H}" fill="url(#blob3)"/>
</svg>
`

// 2) Foreground: text, badge, monogram, and a circle border for the portrait
const portraitX = 80
const portraitY = (H - PORTRAIT) / 2
const portraitCx = portraitX + PORTRAIT / 2
const portraitCy = portraitY + PORTRAIT / 2

const textX = portraitX + PORTRAIT + 60

const fgSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="name" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
      <feOffset dx="0" dy="6" result="off"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.5"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Portrait halo + ring -->
  <circle cx="${portraitCx}" cy="${portraitCy}" r="${PORTRAIT / 2 + 18}"
          fill="none" stroke="#22c55e" stroke-opacity="0.35" stroke-width="2"/>
  <circle cx="${portraitCx}" cy="${portraitCy}" r="${PORTRAIT / 2 + 6}"
          fill="none" stroke="#22c55e" stroke-width="3"/>

  <!-- Availability badge -->
  <g transform="translate(${textX}, 110)">
    <rect width="280" height="44" rx="22" fill="#22c55e" fill-opacity="0.15" stroke="#22c55e" stroke-opacity="0.4"/>
    <circle cx="22" cy="22" r="6" fill="#34d399"/>
    <text x="40" y="29"
          font-family="'Inter', system-ui, sans-serif" font-weight="600"
          font-size="18" fill="#86efac">
      Available for projects
    </text>
  </g>

  <!-- Name (line 1) -->
  <text x="${textX}" y="220"
        font-family="'Space Grotesk', 'Inter', system-ui, sans-serif"
        font-weight="800" font-size="64" letter-spacing="-2"
        fill="url(#name)">
    Joan Manuel
  </text>
  <!-- Name (line 2) -->
  <text x="${textX}" y="285"
        font-family="'Space Grotesk', 'Inter', system-ui, sans-serif"
        font-weight="800" font-size="64" letter-spacing="-2"
        fill="url(#name)">
    Romero
  </text>

  <!-- Role -->
  <text x="${textX}" y="340"
        font-family="'Inter', system-ui, sans-serif"
        font-weight="600" font-size="30" fill="#e2e8f0">
    Frontend Developer · Vue.js
  </text>

  <!-- Tagline -->
  <text x="${textX}" y="385"
        font-family="'Inter', system-ui, sans-serif"
        font-weight="400" font-size="22" fill="#94a3b8">
    Scalable SPAs, accessible UX, clean code.
  </text>

  <!-- Tech chips -->
  <g transform="translate(${textX}, 425)">
    ${chip(0, 'Vue 3', '#22c55e')}
    ${chip(110, 'TypeScript', '#3b82f6')}
    ${chip(265, 'Tailwind', '#06b6d4')}
    ${chip(395, 'PrimeVue', '#a855f7')}
  </g>

  <!-- Site URL -->
  <text x="${textX}" y="555"
        font-family="'Inter', system-ui, sans-serif"
        font-weight="600" font-size="20" fill="#64748b">
    joanmanuelromero.dev
  </text>

  <!-- Bottom-right monogram -->
  <g transform="translate(${W - 130}, ${H - 130})">
    <rect width="80" height="80" rx="18" fill="#0f172a" stroke="#22c55e" stroke-opacity="0.4"/>
    <text x="40" y="55" text-anchor="middle"
          font-family="'Space Grotesk', 'Inter', system-ui, sans-serif"
          font-weight="800" font-size="36" fill="#34d399">JM</text>
  </g>
</svg>
`

function chip(x, label, color) {
  const w = label.length * 11 + 32
  return `
    <g transform="translate(${x}, 0)">
      <rect width="${w}" height="40" rx="20" fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-opacity="0.5"/>
      <text x="${w / 2}" y="26" text-anchor="middle"
            font-family="'Inter', system-ui, sans-serif" font-weight="700" font-size="16"
            fill="${color}">${label}</text>
    </g>
  `
}

// 3) Build a circular portrait
const portraitMask = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${PORTRAIT}" height="${PORTRAIT}">
    <circle cx="${PORTRAIT / 2}" cy="${PORTRAIT / 2}" r="${PORTRAIT / 2}" fill="#fff"/>
  </svg>
`)

const portraitJpg = await readFile(portraitPath)
const portraitCircle = await sharp(portraitJpg)
  .resize(PORTRAIT, PORTRAIT, { fit: 'cover', position: 'attention' })
  .composite([{ input: portraitMask, blend: 'dest-in' }])
  .png()
  .toBuffer()

// 4) Compose: bg → portrait → fg
const out = await sharp(Buffer.from(bgSvg))
  .composite([
    { input: portraitCircle, top: portraitY, left: portraitX },
    { input: Buffer.from(fgSvg), top: 0, left: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(resolve(publicDir, 'og-image.png'))

console.log('✓ public/og-image.png', `${out.width}×${out.height}`, `${(out.size / 1024).toFixed(1)} KB`)
