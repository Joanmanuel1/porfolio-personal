export const magnetic = {
  mounted(el, binding) {
    if (typeof window === 'undefined') return
    const hasHover = window.matchMedia('(hover: hover)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hasHover || reduced) return

    const strength = typeof binding.value === 'number' ? binding.value : 0.3
    let rafId = 0

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
      })
    }

    const onLeave = () => {
      cancelAnimationFrame(rafId)
      el.style.transform = ''
    }

    el.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
    el.addEventListener('mousemove', onMove, { passive: true })
    el.addEventListener('mouseleave', onLeave, { passive: true })

    el._magneticCleanup = () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    }
  },
  unmounted(el) {
    if (el._magneticCleanup) el._magneticCleanup()
  },
}
