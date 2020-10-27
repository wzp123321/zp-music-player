<template>
  <div class="m-Playlist">
    <div class="tag">
      {{ playListInfo.copywriter }}
    </div>
    <img :src="playListInfo.picUrl" alt="" />
    <div class="description">
      {{ playListInfo.name }}
    </div>
    <i class="iconfont icon-bofang1" @click="getToPlayListInfo"></i>
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
    console.log(111)
  }
}
</script>
<style lang="less" scoped>
.m-Playlist {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-right: 32px;
  margin-bottom: 24px;
  width: 272px;
  .tag {
    width: 100%;
    position: absolute;
    top: -60px;
    left: 0;
    font-size: 12px;
    padding: 12px 4px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transition: all 300ms;
  }
  img {
    width: 100%;
    height: 200px;
    border-radius: 4px;
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
    color: #ff272c;
  }
}
.m-Playlist:hover {
  .tag {
    transition: all 500ms;
    top: 0;
  }
  .icon-bofang1 {
    opacity: 1;
    transition: all 500ms;
  }
}
.m-Playlist:nth-child(5n) {
  margin-right: 0;
}
</style>
