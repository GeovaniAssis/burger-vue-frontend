import { createRouter, createWebHistory } from 'vue-router'
import FazerPedidosView from '../views/FazerPedidosView.vue'

const routes = [
  {
    path: '/',
    name: 'fazerpedidos',
    component: FazerPedidosView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/PedidosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
