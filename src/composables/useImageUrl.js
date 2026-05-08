// Resolves /src/assets/img/<name> to a Vite-handled URL at module level.
// Centralizes the previously-duplicated `getImgUrl`/`getImageUrl` helpers
// from ProjectView.vue and ProjectCard.vue.

const modules = import.meta.glob('@/assets/img/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const map = Object.create(null)
for (const path in modules) {
  const file = path.split('/').pop()
  map[file] = modules[path]
}

export function useImageUrl() {
  return (name) => (name && map[name]) || null
}
