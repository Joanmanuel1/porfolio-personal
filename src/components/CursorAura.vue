<template>
  <div
    v-if="enabled"
    ref="aura"
    class="cursor-aura pointer-events-none fixed top-0 left-0 z-0"
    aria-hidden="true"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const aura = ref(null)
const enabled = ref(false)
let rafId = 0

const onMove = (e) => {
  if (!aura.value) return
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    aura.value.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
  })
}

onMounted(() => {
  if (typeof window === 'undefined') return
  const hasHover = window.matchMedia('(hover: hover)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (hasHover && !reducedMotion) {
    enabled.value = true
    window.addEventListener('mousemove', onMove, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.cursor-aura {
  width: 600px;
  height: 600px;
  margin-left: -300px;
  margin-top: -300px;
  background: radial-gradient(
    circle,
    rgba(6, 182, 212, 0.18) 0%,
    rgba(16, 185, 129, 0.10) 28%,
    rgba(14, 165, 233, 0.05) 55%,
    transparent 72%
  );
  filter: blur(40px);
  transition: transform 0.18s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}
</style>
