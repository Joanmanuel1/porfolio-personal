<template>
  <div
    class="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent"
    role="presentation"
    aria-hidden="true"
  >
    <div
      class="h-full origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-transform duration-100 will-change-transform"
      :style="{ transform: `scaleX(${progress})` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function update() {
  const h = document.documentElement
  const scrollable = h.scrollHeight - h.clientHeight
  progress.value = scrollable > 0 ? h.scrollTop / scrollable : 0
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
})

onUnmounted(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>
