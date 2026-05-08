<template>
  <Transition name="fab">
    <div
      v-if="visible"
      class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      <!-- Expanded menu -->
      <Transition name="fab-menu">
        <div v-if="open" class="flex flex-col items-end gap-2 mb-1">
          <a
            href="/contact"
            class="fab-option"
            @click="open = false"
          >
            <span class="fab-label">{{ t('contact.title') }}</span>
            <span class="fab-icon-sm bg-cyan-600"><i class="pi pi-envelope text-xs text-white"></i></span>
          </a>
          <a
            href="https://www.linkedin.com/in/joanmanuelromero/"
            target="_blank"
            rel="noopener"
            class="fab-option"
            @click="open = false"
          >
            <span class="fab-label">LinkedIn</span>
            <span class="fab-icon-sm bg-[#0a66c2]"><i class="pi pi-linkedin text-xs text-white"></i></span>
          </a>
          <a
            href="mailto:joanmanuelromero100@gmail.com"
            class="fab-option"
            @click="open = false"
          >
            <span class="fab-label">Gmail</span>
            <span class="fab-icon-sm bg-red-600"><i class="pi pi-at text-xs text-white"></i></span>
          </a>
        </div>
      </Transition>

      <!-- Main button -->
      <button
        @click="open = !open"
        class="fab-main group"
        :aria-label="t('common.letsTalk')"
        :aria-expanded="open"
      >
        <Transition name="fab-icon" mode="out-in">
          <i v-if="open" key="close" class="pi pi-times text-sm"></i>
          <span v-else key="chat" class="flex items-center gap-2 text-sm font-semibold">
            <i class="pi pi-comments text-base"></i>
            <span class="hidden sm:inline">{{ t('common.letsTalk') }}</span>
          </span>
        </Transition>
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const open = ref(false)
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.fab-main {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #0891b2, #06b6d4);
  color: white;
  font-weight: 600;
  box-shadow: 0 8px 32px -8px rgba(6, 182, 212, 0.5), 0 2px 8px rgba(0,0,0,0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  cursor: pointer;
  border: none;
}
.fab-main:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 12px 40px -8px rgba(6, 182, 212, 0.6), 0 4px 16px rgba(0,0,0,0.3);
  filter: brightness(1.08);
}
.fab-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.fab-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #e2e8f0;
  background: rgba(13, 21, 32, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.fab-icon-sm {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
}

/* Transitions */
.fab-enter-active, .fab-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fab-enter-from, .fab-leave-to { opacity: 0; transform: translateY(12px) scale(0.9); }

.fab-menu-enter-active { transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1); }
.fab-menu-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.fab-menu-enter-from, .fab-menu-leave-to { opacity: 0; transform: translateY(8px) scale(0.95); }

.fab-icon-enter-active, .fab-icon-leave-active { transition: opacity 0.12s ease, transform 0.12s ease; }
.fab-icon-enter-from { opacity: 0; transform: rotate(-90deg) scale(0.6); }
.fab-icon-leave-to { opacity: 0; transform: rotate(90deg) scale(0.6); }
</style>
