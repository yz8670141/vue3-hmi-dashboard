import { createRouter, createWebHistory } from 'vue-router'
import CanvasView from '../views/CanvasView.vue'
import StatusSimulate from '../views/StatusSimulate.vue'

const routes = [
  { path: '/', redirect: '/canvas' },
  { path: '/canvas', component: CanvasView },
  { path: '/simulate', component: StatusSimulate }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
