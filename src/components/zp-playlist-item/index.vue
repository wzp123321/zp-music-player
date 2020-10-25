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
  margin-right: 24px;
  margin-bottom: 24px;
  .tag {
    width: 100%;
    text-align: center;
    position: absolute;
    top: -40px;
    left: 0;
    font-size: 12px;
    padding: 12px 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transition: all 300ms;
  }
  img {
    width: 220px;
    height: 180px;
    border-radius: 4px;
  }
  .description {
    text-align: left;
    font-size: 14px;
    padding: 6px 0;
  }
  .icon-bofang1 {
    position: absolute;
    bottom: 42px;
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
.m-Playlist:nth-child(6n) {
  margin-right: 0;
}
</style>
