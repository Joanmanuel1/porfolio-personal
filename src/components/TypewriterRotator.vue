<template>
  <span class="typewriter">
    <span class="typewriter-text">{{ displayed }}</span><span class="typewriter-caret" :class="{ blink: !typing }">|</span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  phrases: { type: Array, required: true },
  typeSpeed: { type: Number, default: 70 },
  deleteSpeed: { type: Number, default: 32 },
  pauseDuration: { type: Number, default: 1800 },
})

const displayed = ref('')
const typing = ref(true)
let phraseIdx = 0
let charIdx = 0
let timeout = null

function tick() {
  if (!props.phrases.length) return
  const current = props.phrases[phraseIdx % props.phrases.length]

  if (typing.value) {
    if (charIdx < current.length) {
      displayed.value = current.slice(0, ++charIdx)
      timeout = setTimeout(tick, props.typeSpeed)
    } else {
      typing.value = false
      timeout = setTimeout(tick, props.pauseDuration)
    }
  } else {
    if (charIdx > 0) {
      displayed.value = current.slice(0, --charIdx)
      timeout = setTimeout(tick, props.deleteSpeed)
    } else {
      phraseIdx = (phraseIdx + 1) % props.phrases.length
      typing.value = true
      timeout = setTimeout(tick, props.typeSpeed)
    }
  }
}

function reset() {
  if (timeout) clearTimeout(timeout)
  displayed.value = ''
  phraseIdx = 0
  charIdx = 0
  typing.value = true
  tick()
}

onMounted(() => {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced && props.phrases.length) {
    displayed.value = props.phrases[0]
    return
  }
  tick()
})

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
})

watch(() => props.phrases, reset)
</script>

<style scoped>
.typewriter {
  display: inline-flex;
  align-items: baseline;
}
.typewriter-caret {
  display: inline-block;
  margin-left: 2px;
  color: #22d3ee;
  font-weight: 300;
  transform: translateY(2px);
}
.typewriter-caret.blink {
  animation: caret-blink 0.85s steps(1) infinite;
}
@keyframes caret-blink {
  50% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .typewriter-caret { animation: none; opacity: 0.6; }
}
</style>
