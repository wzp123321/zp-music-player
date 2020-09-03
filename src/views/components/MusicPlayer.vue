<template>
  <div class="music-player flex-row-justify-end">
    <div class="music-player-avatar flex">
      <img src="https://zpwan-yz.com/upload/57CF44A16721D41471806BED925093D7.png" alt />
      <div class="info">
        <div>测试音乐</div>
        <div>00:00/01:00</div>
      </div>
    </div>
    <div class="music-player-switchover">
      <i class="iconfont icon-shangyishou"></i>
      <i v-show="playing" class="iconfont icon-bofang"></i>
      <i v-show="!playing" class="iconfont icon-bofang1"></i>
      <i class="iconfont icon-xiayishou"></i>
    </div>
    <div class="music-player-operation">
      <i class="iconfont icon-yinliang"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'MusicPlayer'
})
export default class MusicPlayer extends Vue {
  // 是否在播放
  private playing = false
}
</script>
<style lang="less" scoped>
.music-player {
  height: 3rem;
  padding: 0 0.73rem;
  align-items: center;
  &-avatar {
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  &-switchover{
    font-size: 1rem;
    color: #05c1ae;
  }
}
</style>
