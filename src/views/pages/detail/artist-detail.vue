<template>
  <div class="m-ArtistDetail" v-loading.fullscreen.lock="loading">
    <!-- 歌手介绍 -->
    <div class="m-ArtistDetail-briefDesc flex-row-start">
      <zp-image-preview
        :imgUrl="artistInfo.coverUrl"
        :width="360"
        :height="240"
      ></zp-image-preview>
      <div class="info">
        <span class="title">{{ artistInfo.mainTitle }}</span>
        <span class="desc">
          {{ briefDesc }}
        </span>
      </div>
    </div>
    <zp-module title="热门歌曲"></zp-module>
    <div class="m-ArtistDetail-data">
      {{ hotSong }}
    </div>
    <zp-module title="演艺经历"></zp-module>
    <div class="m-ArtistDetail-data">
      {{ hotSong }}
    </div>
    <zp-module title="荣誉记录"></zp-module>
    <div class="m-ArtistDetail-data honorRecord">
      {{ honorRecord }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator'
import ArtistApi from '@/service/modules/artist'
import commonFnMixins from '@/utils/mixins'
@Component({
  name: 'ArtistDetail'
})
export default class ArtistDetail extends Mixins(commonFnMixins) {
  private loading = false
  private artistInfo: any = {}
  // 简短介绍
  private briefDesc = ''
  // 热门歌曲
  private hotSong = ''
  // 演出经历
  private showExperience = ''
  // 荣誉记录
  private honorRecord = ''
  // 获取歌手描述
  async getArtistDescription() {
    this.loading = true
    const { id } = this
    try {
      const res = await ArtistApi.getArtistDescription({ id })
      if (res) {
        this.artistInfo = res.topicData[0]
        this.briefDesc = res.briefDesc
        this.hotSong = res.introduction[0].txt
        this.showExperience = res.introduction[1].txt
        this.honorRecord = res.introduction[2].txt
        this.setDocumentTitle(this.artistInfo.mainTitle)
        this.loading = false
      }
    } catch (error) {
      this.loading = false
      console.log(error)
    }
  }
  mounted() {
    this.getArtistDescription()
  }
  // 歌手id
  get id(): number {
    return Number(this.$route.query.id)
  }
}
</script>
<style lang="less" scoped>
.m-ArtistDetail {
  padding: 24px;
  &-briefDesc {
    font-size: 14px;
    color: #333;
    margin-bottom: 60px;
    .info {
      flex: 1;
      text-align: left;
      margin-left: 16px;
      .title {
        font-size: 18px;
        color: #333;
        font-weight: bold;
        margin-bottom: 16px;
      }
      .desc {
        text-indent: 2em;
      }
    }
    span {
      display: inline-block;
    }
  }
  &-data {
    text-align: left;
    padding: 8px;
  }
  .honorRecord {
    text-indent: 2em;
    letter-spacing: 0.1em;
  }
}
</style>
