<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <div class="marquee-group" v-for="n in 2" :key="n">
        <span v-for="item in items" :key="`${n}-${item.label}`" class="marquee-item">
          <span class="marquee-dot" :style="{ background: item.color, boxShadow: `0 0 12px ${item.color}80` }"></span>
          <span class="marquee-label">{{ item.label }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<style scoped>
.marquee {
  position: relative;
  overflow: hidden;
  padding: 1.5rem 0;
  mask-image: linear-gradient(90deg, transparent, white 8%, white 92%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, white 8%, white 92%, transparent);
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 38s linear infinite;
  will-change: transform;
}
.marquee:hover .marquee-track {
  animation-play-state: paused;
}
.marquee-group {
  display: flex;
  gap: 3rem;
  padding-right: 3rem;
  align-items: center;
}
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: -0.01em;
  color: rgba(148, 163, 184, 0.35);
  white-space: nowrap;
  transition: color 0.3s ease;
}
.marquee-item:hover .marquee-label {
  color: rgba(226, 232, 240, 0.95);
}
.marquee-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.marquee-label {
  transition: color 0.3s ease;
}
@keyframes marquee-scroll {
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
</style>
