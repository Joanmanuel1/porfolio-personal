<template>
  <div class="glass glass-hover rounded-2xl p-6">
    <div class="flex items-center justify-between mb-6">
      <h4 class="text-sm font-semibold tracking-widest text-cyan-400 uppercase flex items-center gap-2">
        <i class="pi pi-github"></i> GitHub
      </h4>
      <a
        :href="`https://github.com/${username}`"
        target="_blank"
        rel="noopener"
        class="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
      >
        @{{ username }} <i class="pi pi-arrow-up-right text-[10px]"></i>
      </a>
    </div>

    <!-- Loading skeleton -->
    <div v-if="loading" class="space-y-4 animate-pulse">
      <div class="grid grid-cols-3 gap-3">
        <div v-for="i in 3" :key="i" class="h-16 bg-white/5 rounded-xl"></div>
      </div>
      <div class="h-4 bg-white/5 rounded w-1/3"></div>
      <div class="flex flex-wrap gap-2">
        <div v-for="i in 6" :key="i" class="h-6 bg-white/5 rounded-full w-20"></div>
      </div>
    </div>

    <!-- Error fallback -->
    <div v-else-if="error" class="flex flex-col items-center gap-3 py-6 text-center text-slate-600">
      <i class="pi pi-github text-3xl"></i>
      <p class="text-xs leading-relaxed">
        {{ t('about.github.unavailable') }}<br />
        <a :href="`https://github.com/${username}`" target="_blank" rel="noopener" class="text-cyan-400 hover:text-cyan-300 transition-colors">
          {{ t('about.github.viewProfile') }} →
        </a>
      </p>
    </div>

    <!-- Stats -->
    <div v-else>
      <!-- Top row: key numbers -->
      <div class="grid grid-cols-3 gap-3 mb-6">
        <div
          v-for="stat in keyStats"
          :key="stat.label"
          class="rounded-xl bg-white/[0.03] border border-white/5 p-3.5 text-center"
        >
          <p class="text-2xl font-display font-black counter-value">{{ stat.value }}</p>
          <p class="text-xs text-slate-500 mt-0.5">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Repos recientes -->
      <div class="mb-5">
        <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">{{ t('about.github.recentActivity') }}</p>
        <div class="space-y-2">
          <a
            v-for="repo in recentRepos"
            :key="repo.name"
            :href="repo.html_url"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all group"
          >
            <div class="flex items-center gap-2.5 min-w-0">
              <i class="pi pi-book text-xs text-slate-600 flex-shrink-0"></i>
              <span class="text-sm text-slate-300 group-hover:text-white transition-colors truncate font-medium">{{ repo.name }}</span>
              <span v-if="repo.language" class="text-xs text-slate-600 hidden sm:block">{{ repo.language }}</span>
            </div>
            <span class="text-xs text-slate-600 flex-shrink-0 ml-2">{{ formatDate(repo.updated_at) }}</span>
          </a>
        </div>
      </div>

      <!-- Top languages -->
      <div>
        <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">{{ t('about.github.topLanguages') }}</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="lang in topLanguages"
            :key="lang.name"
            class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
            :style="{ color: lang.color, borderColor: lang.color + '40', background: lang.color + '14' }"
          >
            <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" :style="{ background: lang.color }"></span>
            {{ lang.name }}
            <span class="text-slate-600">× {{ lang.count }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const username = 'Joanmanuel1'
const loading = ref(true)
const error = ref(false)
const userData = ref(null)
const repos = ref([])

const langColors = {
  Vue: '#4ade80',
  TypeScript: '#60a5fa',
  JavaScript: '#facc15',
  'C#': '#a78bfa',
  Java: '#fb923c',
  C: '#94a3b8',
  HTML: '#f97316',
  Python: '#34d399',
  CSS: '#67e8f9',
}

async function fetchStats() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
    ])
    if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error')
    userData.value = await userRes.json()
    repos.value = await reposRes.json()
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

const keyStats = computed(() => {
  if (!userData.value) return []
  const yearsActive = new Date().getFullYear() - new Date(userData.value.created_at).getFullYear()
  return [
    { value: userData.value.public_repos, label: t('about.github.repos') },
    { value: repos.value.filter(r => r.stargazers_count > 0).reduce((s, r) => s + r.stargazers_count, 0) || repos.value.length, label: repos.value.filter(r => r.stargazers_count > 0).length ? 'Stars' : t('about.github.totalRepos') },
    { value: yearsActive + '+', label: t('about.github.yearsOnGithub') },
  ]
})

const recentRepos = computed(() =>
  [...repos.value]
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 4)
)

const topLanguages = computed(() => {
  const counts = {}
  for (const r of repos.value) {
    if (r.language) counts[r.language] = (counts[r.language] ?? 0) + 1
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7)
    .map(([name, count]) => ({ name, count, color: langColors[name] ?? '#94a3b8' }))
})

function formatDate(iso) {
  const d = new Date(iso)
  const now = new Date()
  const diff = Math.floor((now - d) / 86400000)
  if (diff === 0) return 'hoy'
  if (diff === 1) return 'ayer'
  if (diff < 7) return `hace ${diff}d`
  if (diff < 30) return `hace ${Math.floor(diff / 7)}sem`
  if (diff < 365) return `hace ${Math.floor(diff / 30)}m`
  return `hace ${Math.floor(diff / 365)}a`
}

onMounted(fetchStats)
</script>
