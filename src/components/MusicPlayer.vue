<template>
  <div class="music-player flex-row-justify-end">
    <audio :src="src" ref="audio" @timeupdate="onTimeUpdate"></audio>
    <!-- 进度条 -->
    <el-slider
      class="music-player-progress"
      v-model="progress"
      :min="0"
      :max="100"
    ></el-slider>

    <!-- 歌曲信息 -->
    <div class="music-player-avatar flex">
      <img
        src="https://zpwan-yz.com/upload/57CF44A16721D41471806BED925093D7.png"
        alt
      />
      <div class="info">
        <div>测试音乐</div>
        <div>00:00/{{ formatDuration(duration) }}</div>
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
  // 是否在播放
  private playing = false
  // 音量*100
  private volumeSlide = 0
  // 音量
  private volume = 0
  // 进度
  private progress = 0
  // 进度时间
  private timestamp = 0
  // 歌曲总时长
  private duration = 0
  // 格式化
  formatDuration(time: number) {
    return (this as any).$formatDuration(time)
  }
  // 暂停
  pause() {
    if (this.audioPlayer) {
      ;(this.audioPlayer as any).pause()
    }
    this.playing = false
  }
  // 播放
  play() {
    this.playing = true
    if (this.audioPlayer) {
      ;(this.audioPlayer as any).play()
    }
  }
  // 更新时间
  onTimeUpdate(e: any) {
    this.timestamp = e.timeStamp
    this.progress = Math.ceil((100 * this.timestamp) / this.duration / 1000)
  }
  // 初始化
  get src() {
    return this.$store.state.music.src
  }
  get audioPlayer() {
    this.duration = Math.ceil((this.$refs.audio as any).duration)
    return this.$refs.audio
  }
  mounted() {
    this.timestamp = 0
    this.progress = 0
    this.duration = 0
  }
}
</script>
<style lang="less" scoped>
.music-player {
  position: relative;
  height: 3rem;
  padding: 1.3rem 0.4rem 0.3rem 0.4rem;
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
        height: 0.4rem;
        position: relative;
        top: -1px;
        border-color: #ff272c;
      }
      .el-slider__bar {
        bottom: -3px;
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
      top: 0.5rem;
    }
  }
}
</style>
