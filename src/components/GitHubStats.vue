<template>
  <div class="glass glass-hover rounded-2xl p-6">
    <div class="flex items-center justify-between mb-5">
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

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div
        v-for="stat in stats"
        :key="stat.url"
        class="relative rounded-xl overflow-hidden bg-[#0d1120] border border-white/5 min-h-[140px] flex items-center justify-center"
      >
        <img
          v-if="!stat.errored"
          :src="stat.url"
          :alt="stat.alt"
          loading="lazy"
          decoding="async"
          class="w-full block transition-opacity duration-300"
          :class="stat.loaded ? 'opacity-100' : 'opacity-0'"
          @load="stat.loaded = true"
          @error="stat.errored = true"
        />

        <!-- Skeleton while loading -->
        <div
          v-if="!stat.loaded && !stat.errored"
          class="absolute inset-0 flex flex-col gap-3 p-4 animate-pulse"
        >
          <div class="h-3 bg-white/5 rounded w-3/4"></div>
          <div class="h-3 bg-white/5 rounded w-1/2"></div>
          <div class="h-3 bg-white/5 rounded w-2/3"></div>
          <div class="h-3 bg-white/5 rounded w-1/3"></div>
        </div>

        <!-- Fallback when 503 / network error -->
        <div
          v-if="stat.errored"
          class="flex flex-col items-center gap-2 text-slate-600 p-6 text-center"
        >
          <i class="pi pi-github text-2xl"></i>
          <p class="text-xs leading-relaxed">
            Stats unavailable right now.<br />
            <a
              :href="`https://github.com/${username}`"
              target="_blank"
              rel="noopener"
              class="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const username = 'Joanmanuel1'

const stats = reactive([
  {
    url: `https://github-readme-stats.vercel.app/api?username=${username}&theme=tokyonight&hide_border=true&bg_color=00000000&show_icons=true&include_all_commits=true`,
    alt: `GitHub stats for ${username}`,
    loaded: false,
    errored: false,
  },
  {
    url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=tokyonight&hide_border=true&bg_color=00000000&layout=compact&langs_count=8`,
    alt: `Top languages for ${username}`,
    loaded: false,
    errored: false,
  },
])
</script>
