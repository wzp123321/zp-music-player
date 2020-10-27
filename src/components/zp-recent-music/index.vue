<template>
  <div class="m-Recent-music flex-row-start-center">
    <div class="m-Recent-music-index">0{{ index + 1 }}</div>
    <img :src="recentMusicInfo.picUrl" alt="" />
    <div class="m-Recent-music-artist">
      <div class="title">
        {{ recentMusicInfo.name }}
      </div>
      <div class="name">
        {{ getArtists() }}
      </div>
    </div>
    <i class="iconfont icon-bofang1" @click="getMusicPlay"></i>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'RecentMusic'
})
export default class RecentMusic extends Vue {
  @Prop({ default: 0 })
  private index!: number
  @Prop({ default: {} })
  private recentMusicInfo!: MusicModule.MusicInfo
  // 获取歌手
  getArtists() {
    const { artists } = this.recentMusicInfo.song
    const singers = artists.map(item => {
      return item.name
    })
    return singers.join('/')
  }
  // 播放音乐
  getMusicPlay() {
    console.log(111)
  }
}
</script>
<style lang="less" scoped>
.m-Recent-music {
  position: relative;
  margin-bottom: 24px;
  margin-right: 24px;
  &-index {
    margin-right: 10px;
    font-size: 16px;
  }
  img {
    cursor: pointer;
    width: 80px;
    height: 80px;
    border-radius: 4px;
  }
  &-artist {
    width: 160px;
    text-align: left;
    margin-left: 12px;
    .title {
      margin-bottom: 20px;
    }
  }
  .icon-bofang1 {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translateY(-50%) scale(1);
    transition: all 300ms;
    font-size: 24px;
    color: #ff272c;
  }
  .icon-bofang1:hover {
    transform: translateY(-50%) scale(1.1);
    transition: all 300ms;
  }
}
</style>
