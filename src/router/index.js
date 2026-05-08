import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',           name: 'Home',          component: () => import('../views/HomeView.vue') },
  { path: '/about',      name: 'About',         component: () => import('../views/AboutView.vue') },
  { path: '/projects',   name: 'Projects',      component: () => import('../views/ProjectView.vue') },
  { path: '/projects/:slug', name: 'ProjectDetail', component: () => import('../views/ProjectDetailView.vue'), props: true },
  { path: '/contact',    name: 'Contact',       component: () => import('../views/ContactView.vue') },
  { path: '/experience', name: 'Experience',    component: () => import('../views/Experience.vue') },
  { path: '/education',  name: 'Education',     component: () => import('../views/Education.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
