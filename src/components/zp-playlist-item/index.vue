<template>
  <div class="zp-Playlist" @click="getToPlayListInfo">
    <div class="tag">
      {{ getTag(playListInfo.copywriter || playListInfo.description) }}
    </div>
    <zp-image-preview
      :imgUrl="playListInfo.picUrl || playListInfo.coverImgUrl"
      :width="272"
      :height="200"
    ></zp-image-preview>
    <div class="description">
      {{ playListInfo.name }}
    </div>
    <i class="iconfont icon-bofang1"></i>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'PlaylistItem'
})
export default class PlaylistItem extends Vue {
  // 歌单详情
  @Prop({ default: {} })
  private playListInfo!: MusicModule.PlayListInfo
  // 跳转歌单详情
  getToPlayListInfo() {
    this.$router.push('/app/playlist/detail?id=' + this.playListInfo.id)
  }
  getTag(title: string) {
    if (!title) {
      return ''
    }
    return title.substring(0, 40)
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/common.less');

.zp-Playlist {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-right: 32px;
  margin-bottom: 24px;
  width: 272px;
  .tag {
    width: 272px;
    position: absolute;
    top: -60px;
    left: 0;
    font-size: 12px;
    padding: 12px 4px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transition: all 300ms;
    z-index: 999;
  }
  .description {
    width: 100%;
    text-align: left;
    font-size: 14px;
    padding: 6px 0;
  }
  .icon-bofang1 {
    position: absolute;
    top: 160px;
    right: 8px;
    text-align: right;
    opacity: 0;
    transition: all 300ms;
    font-size: 26px;
    color: @common-color;
  }
}
.zp-Playlist:hover {
  .tag {
    transition: all 500ms;
    top: 0;
  }
  .icon-bofang1 {
    opacity: 1;
    transition: all 500ms;
  }
}
.zp-Playlist:nth-child(5n) {
  margin-right: 0;
}
</style>
