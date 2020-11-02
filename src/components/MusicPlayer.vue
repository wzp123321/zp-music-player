<template>
  <div class="music-player flex-row-justify-end">
    <audio
      :src="src"
      ref="audio"
      @timeupdate="onTimeUpdate"
      @loadeddata="onLoad"
    ></audio>
    <!-- 进度条 -->
    <el-slider
      :min="0"
      :max="100"
      v-model="progress"
      :show-tooltip="false"
      class="music-player-progress"
      @change="handleProgressChange"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    ></el-slider>

    <!-- 歌曲信息 -->
    <div class="music-player-avatar flex">
      <img
        src="https://zpwan-yz.com/upload/57CF44A16721D41471806BED925093D7.png"
        alt
      />
      <div class="info">
        <div>测试音乐</div>
        <div>
          {{ formatDuration(timestamp) }}/{{ formatDuration(duration) }}
        </div>
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
  // 是否处于拖动进度条状态
  private isDrag = false
  // 格式化
  formatDuration(time: number) {
    return (this as any).$formatDuration(time)
  }
  // 鼠标按下
  onMouseDown() {
    this.isDrag = true
  }
  // 鼠标抬起
  onMouseUp() {
    this.isDrag = false
  }
  // 修改进度
  handleProgressChange(value: number) {
    if (this.isDrag) {
      this.progress = value
      this.timestamp = Math.ceil(this.duration * (this.progress / 100))
      ;(this.audioPlayer as any).timeStamp = this.timestamp
    }
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
    if (this.audioPlayer && !this.isDrag) {
      this.timestamp = this.duration === 0 ? 0 : Math.ceil(e.timeStamp / 1000)
      this.progress =
        this.duration === 0
          ? 0
          : Math.ceil((100 * this.timestamp) / this.duration)
    }
  }
  // 加载完成
  onLoad() {
    this.duration = Math.ceil((this.$refs.audio as any).duration)
  }
  // 链接
  get src() {
    return this.$store.state.music.src
  }
  // audio实例
  get audioPlayer() {
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
@import url('../style/common.less');
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
      margin: 0.5rem 0;
      .el-slider__button {
        width: 0.1rem;
        height: 0.1rem;
        position: relative;
        top: -2px;
        border-color: @common-color;
      }
      .el-slider__bar {
        bottom: 0;
        height: 2px;
        background-color: @common-color;
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
    color: @common-color;
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
      height: 4px;
      margin-right: 0.6rem;
      .el-slider__runway {
        height: 4px;
      }
      .el-slider__button-wrapper {
        .el-slider__button {
          width: 0.3rem;
          height: 0.3rem;
          position: relative;
          top: -1px;
          border-color: @common-color;
        }
      }
      .el-slider__bar {
        background-color: @common-color;
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
