import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    name: 'Home',
    component: Home,
    redirect:'/app/dashboard',
    children: [
      // 首页
      {
        path: '/app/dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "music-player-dashboard" */ '@/views/pages/dashboard/index.vue'
          )
      },
      // 搜索
      {
        path: 'app/search',
        name: 'Search',
        component: () =>
          import(
            /* webpackChunkName: "music-player-dashboard" */ '@/views/pages/search/index.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
