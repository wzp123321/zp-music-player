<template>
  <div class="m-Dashboard" v-loading.fullscreen.lock="loading">
    <!-- banner -->
    <el-carousel :interval="4000" type="card" height="320px">
      <el-carousel-item
        v-for="(bannerItem, bannerIndex) in bannerList"
        :key="'banner_' + bannerIndex"
      >
        <img :src="bannerItem.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <zp-module title="推荐歌单"></zp-module>
    <div v-if="recommendPlayList.length > 0" class="m-Dashboard-playlist">
      <zp-playlist-item
        v-for="(playItem, playIndex) in recommendPlayList"
        :key="playIndex"
        :playListInfo="playItem"
      >
      </zp-playlist-item>
    </div>
    <!-- 最近歌曲 -->
    <zp-module title="最近歌曲"></zp-module>
    <div v-if="recentMusicList.length > 0" class="m-Dashboard-playlist">
      <zp-recent-music
        v-for="(playItem, playIndex) in recentMusicList"
        :key="playIndex"
        :index="playIndex"
        :recentMusicInfo="playItem"
      >
      </zp-recent-music>
    </div>
    <!-- 最新mv -->
    <zp-module title="最新mv"></zp-module>
    <div v-if="recommendMvList.length > 0" class="m-Dashboard-playlist">
      <zp-mv-item
        v-for="(playItem, playIndex) in recommendMvList"
        :key="playIndex"
        :index="playIndex"
        :mvInfo="playItem"
      >
      </zp-mv-item>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// 引入api
import {
  DashboardApi,
  MusicApi,
  PlayListApi,
  MvApi
} from '@/service/modules/index'

@Component({
  name: 'Dashboard',
  components: {}
})
export default class Dashboard extends Vue {
  private loading = false
  // banner列表
  private bannerList: MusicModule.BannerInfo[] = []
  // 推荐歌单
  private recommendPlayList: MusicModule.PlayListInfo[] = []
  // 最近歌曲
  private recentMusicList: MusicModule.MusicInfo[] = []
  // 推荐mv
  private recommendMvList: MusicModule.MvInfo[] = []
  // 获取banner
  private async getBannerList() {
    try {
      const res = await DashboardApi.getDashboardBannerList({ type: 0 })
      if (res) {
        this.bannerList = res.banners
      }
    } catch (error) {
      throw new Error(error)
    }
  }
  // 获取推荐歌单
  async getRecommendPlayList() {
    try {
      const res = await PlayListApi.getRecommendPlayList({})
      if (res) {
        this.recommendPlayList = res.result
      }
    } catch (error) {
      throw new Error(error)
    }
  }
  // 获取最新音乐
  async getRecentMusicList() {
    try {
      const res = await MusicApi.getRecentMusicList({ limit: 10 })
      if (res) {
        this.recentMusicList = res.result
      }
    } catch (error) {
      throw new Error(error)
    }
  }
  // 获取推荐mv
  async getRecommendMvList() {
    const res = await MvApi.getRecommendMvList({})
    if (res) {
      this.recommendMvList = res.result
    }
  }
  mounted() {
    this.$nextTick(async () => {
      this.loading = true
      await this.getBannerList()
      await this.getRecommendPlayList()
      await this.getRecentMusicList()
      await this.getRecommendMvList()
      this.loading = false
    })
  }
}
</script>
<style lang="less" scoped>
@import url('../../../style/common.less');
.m-Dashboard {
  position: relative;
  margin: 24px 36px;
  ::v-deep .el-carousel {
    .el-carousel__container {
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
  }
  &-playlist {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
