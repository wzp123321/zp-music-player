<template>
  <div class="playlist-detail" v-loading.fullscreen.lock="loading"></div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { MusicApi } from '@/service/modules/index'

@Component({
  name: 'PlayListDetail'
})
export default class PlayListDetail extends Vue {
  private loading = false

  private playListInfo = {}
  // 获取详情
  async getPlayListDetailById() {
    this.loading = true
    const id = Number(this.$route.query.id)
    try {
      const res = await MusicApi.getPlayListDetailById({ id })
      if (res) {
        this.playListInfo = res.playlist
        this.loading = false
      }
    } catch (error) {
      this.loading = false
      throw new Error(error)
    }
  }
  mounted() {
    this.getPlayListDetailById()
  }
}
</script>
<style lang="less" scoped></style>
