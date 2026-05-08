<template>
  <div v-if="type === 'mobile'" class="device-mobile mx-auto">
    <div class="device-mobile-notch"></div>
    <div class="device-mobile-screen">
      <video
        v-if="videoSrc"
        :src="videoSrc"
        autoplay
        loop
        muted
        playsinline
        class="device-media"
      />
      <slot v-else />
    </div>
  </div>

  <div v-else-if="type === 'browser'" class="device-browser mx-auto">
    <div class="device-browser-bar">
      <span class="device-dot bg-red-400"></span>
      <span class="device-dot bg-yellow-400"></span>
      <span class="device-dot bg-green-400"></span>
      <div class="device-url">{{ url || 'localhost' }}</div>
    </div>
    <div class="device-browser-screen">
      <slot />
    </div>
  </div>

  <div v-else>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  type: { type: String, default: null },
  url: { type: String, default: '' },
  videoSrc: { type: String, default: '' },
})
</script>

<style scoped>
.device-mobile {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 9 / 19;
  background: #0f172a;
  border-radius: 2rem;
  padding: 0.6rem;
  box-shadow:
    inset 0 0 0 2px #1f2937,
    0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
.device-mobile-notch {
  position: absolute;
  top: 0.65rem;
  left: 50%;
  transform: translateX(-50%);
  width: 35%;
  height: 18px;
  background: #0b1120;
  border-radius: 0 0 0.75rem 0.75rem;
  z-index: 2;
}
.device-mobile-screen {
  width: 100%;
  height: 100%;
  border-radius: 1.4rem;
  overflow: hidden;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.device-media,
.device-mobile-screen :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.device-browser {
  width: 100%;
  background: #0f172a;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.05),
    0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
.device-browser-bar {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.75rem;
  background: #1f2937;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.device-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 9999px;
  display: inline-block;
}
.device-url {
  flex: 1;
  margin-left: 0.5rem;
  background: #111827;
  border-radius: 9999px;
  padding: 0.2rem 0.75rem;
  color: #9ca3af;
  font-size: 0.7rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.device-browser-screen {
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
}
.device-browser-screen :deep(img) {
  width: 100%;
  height: auto;
  display: block;
}
</style>
