<template>
  <div>
  <section
    ref="heroRef"
    class="relative flex items-center overflow-hidden hero-glow"
    @mousemove="onHeroMove"
  >
    <!-- Section-specific glow behind content -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-cyan-600/8 blur-[120px] pointer-events-none" aria-hidden="true"></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Left — text -->
        <div class="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

          <!-- Top row: availability + local time -->
          <div
            class="flex flex-wrap items-center gap-2 mb-8 justify-center lg:justify-start"
            v-motion
            :initial="{ opacity: 0, y: -10 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          >
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot"></span>
              {{ t('common.available') }}
            </div>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium">
              <i class="pi pi-clock text-[10px] text-cyan-400"></i>
              <span>{{ t('home.hero.localTime') }} · {{ localTime }}</span>
            </div>
          </div>

          <!-- Headline with word-by-word reveal -->
          <h1 class="font-display font-black tracking-tightest mb-5 leading-[0.95]">
            <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-1">
              <span
                v-for="(word, i) in greetingWords"
                :key="`g-${i}`"
                class="word-mask mr-[0.18em]"
              >
                <span class="word-inner" :style="{ '--word-delay': `${i * 70}ms` }">{{ word }}</span>
              </span>
            </span>
            <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              <span
                v-for="(word, i) in nameWords"
                :key="`n-${i}`"
                class="word-mask mr-[0.18em]"
              >
                <span class="word-inner gradient-text" :style="{ '--word-delay': `${(greetingWords.length + i) * 70 + 60}ms` }">{{ word }}</span>
              </span>
            </span>
          </h1>

          <!-- Typewriter rotating role -->
          <p
            class="text-lg sm:text-xl text-slate-300 font-medium mb-4 tracking-tight min-h-[1.7em]"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
          >
            <TypewriterRotator :phrases="rolePhrases" />
          </p>

          <!-- Tagline -->
          <p
            class="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 740, duration: 600 } }"
          >
            {{ t('home.hero.subtitle') }}
          </p>

          <!-- CTAs (magnetic) -->
          <div
            class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 880, duration: 500 } }"
          >
            <RouterLink
              v-magnetic="0.25"
              to="/projects"
              class="cta-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-cyan-600 hover:bg-cyan-500 shadow-lg shadow-cyan-600/30 hover:shadow-cyan-500/50"
            >
              {{ t('home.cta.viewProjects') }}
              <i class="pi pi-arrow-right text-xs"></i>
            </RouterLink>
            <a
              v-magnetic="0.2"
              href="https://www.linkedin.com/in/joanmanuelromero/"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
            >
              <i class="pi pi-linkedin text-blue-400"></i>
              LinkedIn
            </a>
            <a
              v-magnetic="0.2"
              href="/CV-JoanManuelRomero.pdf"
              download
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
            >
              <i class="pi pi-download text-slate-400"></i>
              CV
            </a>
          </div>

          <!-- Animated stats -->
          <div
            ref="statsRef"
            class="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 justify-center lg:justify-start"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 1050, duration: 600 } }"
          >
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-display font-black counter-value">{{ yearsDisplay }}</span>
              <span class="text-xs text-slate-500 leading-tight max-w-[80px]">{{ t('home.hero.stats.years') }}</span>
            </div>
            <div class="hidden sm:block w-px h-6 bg-white/8"></div>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-display font-black counter-value">{{ projectsDisplay }}</span>
              <span class="text-xs text-slate-500 leading-tight max-w-[80px]">{{ t('home.hero.stats.production') }}</span>
            </div>
            <div class="hidden sm:block w-px h-6 bg-white/8"></div>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-display font-black counter-value">{{ frameworksDisplay }}</span>
              <span class="text-xs text-slate-500 leading-tight max-w-[80px]">{{ t('home.hero.stats.stack') }}</span>
            </div>
          </div>

          <p
            class="mt-7 text-xs text-slate-600 flex items-center gap-2 justify-center lg:justify-start"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 1200, duration: 600 } }"
          >
            <i class="pi pi-verified text-cyan-500"></i>
            {{ t('home.hero.credentials') }}
          </p>
        </div>

        <!-- Right — avatar with 3D parallax -->
        <div
          class="parallax-stage flex-shrink-0 flex justify-center lg:justify-end"
          v-motion
          :initial="{ opacity: 0, scale: 0.92 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 700, ease: 'easeOut' } }"
        >
          <div
            ref="avatarCardRef"
            class="parallax-card relative"
            @mousemove="onAvatarMove"
            @mouseleave="onAvatarLeave"
          >
            <!-- Pulsing ring -->
            <div class="absolute inset-[-22px] rounded-full border-2 border-cyan-400/30 pulse-ring pointer-events-none" aria-hidden="true"></div>

            <!-- Outer glow ring (depth -40) -->
            <div
              class="parallax-layer absolute inset-[-16px] rounded-full bg-gradient-to-br from-cyan-500/25 via-emerald-500/18 to-sky-500/12 blur-2xl animate-float pointer-events-none"
              :style="{ transform: `translate3d(${tilt.gx}px, ${tilt.gy}px, 0)` }"
              aria-hidden="true"
            ></div>
            <div class="absolute inset-[-6px] rounded-full border border-cyan-500/20 pointer-events-none"></div>
            <div class="absolute inset-[-2px] rounded-full border border-white/10 pointer-events-none"></div>

            <!-- Avatar -->
            <img
              src="../assets/img/perfil.jpg"
              :alt="t('home.hero.name')"
              loading="eager"
              decoding="async"
              width="288"
              height="288"
              class="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl select-none pointer-events-none"
            />

            <!-- Floating tech chips (parallax depth) -->
            <div
              class="parallax-layer absolute -bottom-3 -left-8 glass px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-300 border border-emerald-500/25 shadow-xl animate-float pointer-events-none"
              :style="{ transform: `translate3d(${tilt.cx1}px, ${tilt.cy1}px, 0)`, animationDelay: '1s' }"
            >Vue 3</div>
            <div
              class="parallax-layer absolute top-6 -right-10 glass px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-300 border border-cyan-500/25 shadow-xl animate-float pointer-events-none"
              :style="{ transform: `translate3d(${tilt.cx2}px, ${tilt.cy2}px, 0)`, animationDelay: '2.5s' }"
            >Angular</div>
            <div
              class="parallax-layer absolute -top-2 left-2 glass px-3 py-1.5 rounded-full text-xs font-semibold text-sky-300 border border-cyan-500/25 shadow-xl animate-float pointer-events-none"
              :style="{ transform: `translate3d(${tilt.cx3}px, ${tilt.cy3}px, 0)`, animationDelay: '0.5s' }"
            >TypeScript</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1400, duration: 600 } }"
      aria-hidden="true"
    >
      <div class="w-px h-10 bg-gradient-to-b from-transparent to-cyan-500/50"></div>
      <div class="w-5 h-8 rounded-full border border-white/15 flex items-center justify-center">
        <div class="w-1 h-2 rounded-full bg-white/40 animate-bounce"></div>
      </div>
    </div>
  </section>

  <!-- Marquee tech stack -->
  <div class="relative border-y border-white/5 bg-canvas/40 backdrop-blur-sm">
    <MarqueeStack :items="marqueeItems" />
  </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import { useCountUp } from '@/composables/useCountUp'
import TypewriterRotator from '@/components/TypewriterRotator.vue'
import MarqueeStack from '@/components/MarqueeStack.vue'

const { t, tm } = useI18n()

useSeo({
  titleKey: 'home.meta.title',
  descKey: 'home.meta.description',
})

// ─── Headline word splitting ──────────────────────────────────
const greetingWords = computed(() => t('home.hero.greeting').split(/\s+/).filter(Boolean))
const nameWords = ['Joan', 'Manuel', 'Romero']

// ─── Typewriter rotator phrases ───────────────────────────────
const rolePhrases = computed(() => {
  const v = tm('home.hero.roles')
  return Array.isArray(v) ? v : []
})

// ─── Live local time (Buenos Aires) ───────────────────────────
const localTime = ref('')
let timeInterval = 0
function updateTime() {
  const opts = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Argentina/Buenos_Aires' }
  localTime.value = new Intl.DateTimeFormat('es-AR', opts).format(new Date())
}

// ─── Animated counters ────────────────────────────────────────
const { display: yearsDisplay, start: startYears } = useCountUp(3, { duration: 1400, suffix: '+' })
const { display: projectsDisplay, start: startProjects } = useCountUp(4, { duration: 1600 })
const { display: frameworksDisplay, start: startFrameworks } = useCountUp(2, { duration: 1200 })
const statsRef = ref(null)
let statsObserver = null

// ─── Avatar 3D parallax ───────────────────────────────────────
const heroRef = ref(null)
const avatarCardRef = ref(null)
const tilt = reactive({
  gx: 0, gy: 0,
  cx1: 0, cy1: 0,
  cx2: 0, cy2: 0,
  cx3: 0, cy3: 0,
})
let avatarRaf = 0

function onHeroMove(e) {
  if (!heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  const mx = ((e.clientX - rect.left) / rect.width) * 100
  const my = ((e.clientY - rect.top) / rect.height) * 100
  heroRef.value.style.setProperty('--mx', `${mx}%`)
  heroRef.value.style.setProperty('--my', `${my}%`)
}

function onAvatarMove(e) {
  if (!avatarCardRef.value) return
  cancelAnimationFrame(avatarRaf)
  avatarRaf = requestAnimationFrame(() => {
    const rect = avatarCardRef.value.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const rotY = x * 14
    const rotX = -y * 14
    avatarCardRef.value.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`
    // Per-layer parallax depth
    tilt.gx = x * -16
    tilt.gy = y * -16
    tilt.cx1 = x * 22
    tilt.cy1 = y * 22
    tilt.cx2 = x * -28
    tilt.cy2 = y * -28
    tilt.cx3 = x * 16
    tilt.cy3 = y * -16
  })
}

function onAvatarLeave() {
  cancelAnimationFrame(avatarRaf)
  if (avatarCardRef.value) avatarCardRef.value.style.transform = ''
  tilt.gx = tilt.gy = tilt.cx1 = tilt.cy1 = tilt.cx2 = tilt.cy2 = tilt.cx3 = tilt.cy3 = 0
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 30000)

  if (statsRef.value) {
    statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startYears()
          startProjects()
          startFrameworks()
          statsObserver.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    statsObserver.observe(statsRef.value)
  }
})

onUnmounted(() => {
  clearInterval(timeInterval)
  cancelAnimationFrame(avatarRaf)
  if (statsObserver) statsObserver.disconnect()
})

// ─── Marquee stack ────────────────────────────────────────────
const marqueeItems = [
  { label: 'Vue 3',        color: '#4ade80' },
  { label: 'Angular',      color: '#f87171' },
  { label: 'TypeScript',   color: '#60a5fa' },
  { label: 'JavaScript',   color: '#facc15' },
  { label: 'Tailwind CSS', color: '#67e8f9' },
  { label: 'PrimeVue',     color: '#c084fc' },
  { label: 'Vite',         color: '#a78bfa' },
  { label: 'Node.js',      color: '#86efac' },
  { label: 'PostgreSQL',   color: '#93c5fd' },
  { label: 'Firebase',     color: '#fb923c' },
  { label: 'Git',          color: '#f97316' },
]
</script>
