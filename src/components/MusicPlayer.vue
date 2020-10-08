<template>
  <div class="music-player flex-row-justify-end">
    <!-- audio实例 -->
    <audio ref="audio" src></audio>

    <!-- 进度条 -->
    <el-slider
      class="music-player-progress"
      v-model="progress"
      :min="0"
      :max="total"
    ></el-slider>

    <!-- 歌曲信息 -->
    <div class="music-player-avatar flex">
      <img
        src="https://zpwan-yz.com/upload/57CF44A16721D41471806BED925093D7.png"
        alt
      />
      <div class="info">
        <div>测试音乐</div>
        <div>00:00/01:00</div>
      </div>
    </div>

    <!-- 按钮 -->
    <div class="music-player-btn">
      <i class="iconfont icon-shangyishou"></i>
      <i v-show="playing" class="iconfont icon-bofang" @click="pause"></i>
      <i v-show="!playing" class="iconfont icon-bofang1" @click="play"></i>
      <i class="iconfont icon-xiayishou"></i>
    </div>

    <!-- 音量 -->
    <div class="music-player-operation flex">
      <el-slider v-model="volumeSlide" :min="0" :max="100"></el-slider>
      <i class="iconfont icon-yinliang"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({
  name: 'MusicPlayer'
})
export default class MusicPlayer extends Vue {
  private musicInfo = {}
  // 是否在播放
  private playing = false
  // 音量*100
  private volumeSlide = 0
  // 音量
  private volume = 0
  // 进度
  private progress = 0
  // 歌曲总时长
  private total = 0
  // audio实例
  get audioPlayer() {
    return this.$refs.audio
  }

  // 播放
  pause() {
    this.playing = false
  }
  // 暂停
  play() {
    this.playing = true
  }
  // 监听歌曲实例变化
  @Watch('musicInfo')
  handleMusicInfoChange() {
    console.log(111)
  }

}
</script>
<style lang="less" scoped>
.music-player {
  position: relative;
  height: 3rem;
  padding: 0.3rem 0.4rem;
  align-items: center;
  &-progress {
    position: absolute;
    top: -0.9rem;
    left: 0;
    width: 100%;
    ::v-deep .el-slider__runway {
      height: 0.1rem;
      background-color: #ededed;
      .el-slider__button {
        width: 0.3rem;
        height: 0.3rem;
        position: relative;
        top: -0.1rem;
        border-color: #ff272c;
      }
      .el-slider__bar {
        background-color: #ff272c;
      }
    }
  }
  &-avatar {
    .info {
      font-size: 0.8rem;
      padding-left: 0.5rem;
      text-align: left;
      div {
        line-height: 1.2rem;
      }
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  &-btn {
    font-size: 1rem;
    color: #ff272c;
    cursor: pointer;

    .icon-bofang,
    .icon-bofang1 {
      font-size: 2.2rem;
      margin: 1rem;
    }
    .icon-shangyishou,
    .icon-xiayishou {
      position: relative;
      bottom: 0.2rem;
      font-size: 1.2rem;
    }
    .icon-shangyishou:hover,
    .icon-xiayishou:hover {
      transition: 200ms all ease-in;
      font-size: 1.3rem;
    }
  }
  &-operation {
    ::v-deep .el-slider {
      width: 7rem;
      margin-right: 0.6rem;
      .el-slider__button-wrapper {
        .el-slider__button {
          width: 0.4rem;
          height: 0.4rem;
          position: relative;
          top: 0.05rem;
          border-color: #ff272c;
        }
      }
      .el-slider__bar {
        background-color: #ff272c;
      }
    }
    .iconfont {
      font-size: 1.1rem;
      position: relative;
      top: 0.3rem;
    }
  }
}
</style>
