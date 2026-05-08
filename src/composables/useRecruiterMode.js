import { ref, watch } from 'vue'

const recruiter = ref(localStorage.getItem('recruiterMode') === 'true')

watch(recruiter, (v) => {
  localStorage.setItem('recruiterMode', String(v))
  document.documentElement.setAttribute('data-recruiter', v ? 'true' : 'false')
})

// Apply on load
document.documentElement.setAttribute('data-recruiter', recruiter.value ? 'true' : 'false')

export function useRecruiterMode() {
  return { recruiter, toggle: () => (recruiter.value = !recruiter.value) }
}
