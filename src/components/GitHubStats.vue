<template>
  <div class="rounded-xl border border-gray-700 bg-gray-900/50 p-4 sm:p-6 shadow-lg">
    <h4 class="text-xl sm:text-2xl font-extrabold text-white pb-2 flex items-center border-b border-gray-700 mb-4">
      <i class="pi pi-github mr-2 text-green-400"></i> GitHub
    </h4>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <img
        :src="`https://github-readme-stats.vercel.app/api?username=${username}&theme=tokyonight&hide_border=true&bg_color=00000000&show_icons=true&include_all_commits=true`"
        :alt="`GitHub stats for ${username}`"
        loading="lazy"
        decoding="async"
        class="w-full rounded-lg"
      />
      <img
        :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=tokyonight&hide_border=true&bg_color=00000000&layout=compact&langs_count=8`"
        :alt="`GitHub top languages for ${username}`"
        loading="lazy"
        decoding="async"
        class="w-full rounded-lg"
      />
    </div>
  </div>
</template>

<script setup>
const username = 'Joanmanuel1'
</script>
