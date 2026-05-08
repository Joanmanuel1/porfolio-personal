import { ref, onUnmounted } from 'vue'

export function useCountUp(target, { duration = 1500, decimals = 0, suffix = '' } = {}) {
  const display = ref('0' + suffix)
  let rafId = 0

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function start() {
    if (reduced) {
      display.value = target.toFixed(decimals) + suffix
      return
    }
    cancelAnimationFrame(rafId)
    const startTime = performance.now()
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)

    const step = (now) => {
      const t = Math.min((now - startTime) / duration, 1)
      display.value = (easeOut(t) * target).toFixed(decimals) + suffix
      if (t < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
  }

  onUnmounted(() => cancelAnimationFrame(rafId))

  return { display, start }
}
