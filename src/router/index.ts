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
            /* webpackChunkName: "music-player-search" */ '@/views/pages/search/index.vue'
          )
      },
      // 歌单详情
      {
        path: '/app/playlist/detail',
        name: 'PlayListDetail',
        component: () =>
          import(
            /* webpackChunkName: "music-playlist-detail" */ '@/views/pages/detail/playlist-detail.vue'
          )
      },
      // 专辑详情
      {
        path: '/app/album/detail',
        name: 'AlbumDetail',
        component: () =>
          import(
            /* webpackChunkName: "music-album-detail" */ '@/views/pages/detail/album-detail.vue'
          )
      },
      // 歌手详情
      {
        path: '/app/artist/detail',
        name: 'AatistDetail',
        component: () =>
          import(
            /* webpackChunkName: "music-artist-detail" */ '@/views/pages/detail/artist-detail.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
