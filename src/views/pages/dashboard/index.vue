<template>
  <div class="m-Dashboard">
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
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// 引入api
import { DashboardApi, MusicApi } from '@/service/modules/index'

@Component({
  name: 'Dashboard',
  components: {}
})
export default class Dashboard extends Vue {
  // banner列表
  private bannerList: DashboardModule.BannerInfo[] = []
  // 推荐歌单
  private recommendPlayList: DashboardModule.PlayListInfo[] = []
  // 获取banner
  private async getBannerList() {
    const res = await DashboardApi.getDashboardBannerList({ type: 0 })
    if (res) {
      this.bannerList = res.banners
    }
  }
  // 获取推荐歌单
  async getRecommendPlayList() {
    const res = await MusicApi.getRecommendPlayList({})
    if (res) {
      this.recommendPlayList = res.result
    }
  }
  // 获取最新音乐
  async getRecentMusicList() {
    const res = await MusicApi.getRecentMusicList({ limit: 10 })
    if (res) {
      console.log(res)
    }
  }

  mounted() {
    this.$nextTick(() => {
      this.getBannerList()
      this.getRecommendPlayList()
      this.getRecentMusicList()
    })
  }
}
</script>
<style lang="less" scoped>
.m-Dashboard {
  position: relative;
  margin: 12px 36px;
  &-playlist {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
