<template>
  <div class="m-Artist" v-loading.fullscreen.lock="loading">
    <div class="flex-wrap">
      <zp-artist-item
        v-for="(playItem, playIndex) in artistList"
        :key="playIndex"
        :index="playIndex"
        :artistInfo="playItem"
      ></zp-artist-item>
    </div>
    <p class="load-more" @click="loadMore">
      {{ hasMore ? '加载更多~' : '没有更多了~' }}
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ArtistApi from '@/service/modules/artist'
@Component({
  name: 'Artist'
})
export default class Artist extends Vue {
  // 分页
  private page = 1
  // 歌手列表
  private artistList: UserModule.ArtistInfo[] = []
  // loading
  private loading = false
  // 是否有更多
  private hasMore = false
  // 获取热门歌手列表
  private async getHotArtistList() {
    this.loading = true
    const { page } = this
    const offset = (page - 1) * 50
    try {
      const res = await ArtistApi.getHotArtistList({ offset })
      if (res) {
        this.artistList = [...this.artistList, ...res.artists]
        this.hasMore = res.more
        this.loading = false
      }
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }
  // 加载更多
  loadMore() {
    if (this.hasMore) {
      this.page += 1
      this.getHotArtistList()
    }
  }
  mounted() {
    this.getHotArtistList()
  }
}
</script>
<style lang="less" scoped>
.m-Artist {
  padding: 24px;
  .load-more {
    text-align: center;
    cursor: pointer;
  }
}
</style>
