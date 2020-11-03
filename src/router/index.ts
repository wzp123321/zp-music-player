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
    redirect: '/app/discovery',
    children: [
      // 首页
      {
        path: '/app/discovery',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "music-player-dashboard" */ '@/views/pages/discover/index.vue'
          )
      },
      // 搜索
      {
        path: '/app/search',
        name: 'Search',
        component: () =>
          import(
            /* webpackChunkName: "music-player-dashboard" */ '@/views/pages/search/index.vue'
          )
      },
      // 歌单详情
      {
        path: '/app/playlist/Detail',
        name: 'PlayListDetail',
        component: () =>
          import(
            /* webpackChunkName: "music-player-dashboard" */ '@/views/pages/playlist-detail/index.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
