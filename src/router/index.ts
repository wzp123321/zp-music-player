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
        meta: {
          name: '发现音乐'
        },
        component: () =>
          import(
            /* webpackChunkName: "music-player-dashboard" */ '@/views/pages/discover/index.vue'
          )
      },
      // 排行榜
      {
        path: '/app/rank',
        name: 'Rank',
        meta: {
          name: '排行榜'
        },
        component: () =>
          import(
            /* webpackChunkName: "music-player-rank" */ '@/views/pages/rank/index.vue'
          )
      },
      // 歌单
      {
        path: '/app/playlist',
        name: 'PlayList',
        meta: {
          name: '歌单'
        },
        component: () =>
          import(
            /* webpackChunkName: "music-player-playlist" */ '@/views/pages/playlist/index.vue'
          )
      },
      // 歌手
      {
        path: '/app/artist',
        name: 'Artist',
        meta: {
          name: '歌手'
        },
        component: () =>
          import(
            /* webpackChunkName: "music-player-artist" */ '@/views/pages/artist/index.vue'
          )
      },
      // mv
      {
        path: '/app/mv',
        name: 'Mv',
        meta: {
          name: 'mv'
        },
        component: () =>
          import(
            /* webpackChunkName: "music-player-mv" */ '@/views/pages/mv/index.vue'
          )
      },
      // 搜索
      {
        path: '/app/search',
        name: 'Search',
        meta: {
          name: '搜索'
        },
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
