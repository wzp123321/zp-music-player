<template>
  <div class="music-player flex-row-justify-end">
    <audio
      :src="src"
      ref="audio"
      autoplay
      @timeupdate="onTimeUpdate"
      @loadeddata="onLoad"
      @ended="onEnd"
    ></audio>
    <!-- 进度条 -->
    <el-slider
      :min="0"
      :max="duration"
      v-model="progress"
      :show-tooltip="false"
      class="music-player-progress"
      @change="handleProgressChange"
      @mousedown.native="onMouseDown"
      @mouseup.native="onMouseUp"
    ></el-slider>

    <!-- 歌曲信息 -->
    <div class="music-player-avatar flex">
      <img v-if="musicInfo.picUrl" :src="musicInfo.picUrl" alt />
      <div class="info">
        <div>{{ musicInfo.name || '' }}</div>
        <div>{{ musicInfo.artist || '' }}</div>
        <div v-if="duration">
          {{ formatDuration(progress) }}/{{ formatDuration(duration) }}
        </div>
      </div>
    </div>

    <!-- 按钮 -->
    <div class="music-player-btn">
      <i class="iconfont icon-shangyishou" @click="preview"></i>
      <i v-show="playing" class="iconfont icon-bofang" @click="pause"></i>
      <i v-show="!playing" class="iconfont icon-bofang1" @click="play"></i>
      <i class="iconfont icon-xiayishou" @click="next"></i>
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
import { MusicApi } from '@/service/modules/index'

@Component({
  name: 'MusicPlayer'
})
export default class MusicPlayer extends Vue {
  // 播放链接
  private src = ''
  // 是否在播放
  private playing = false
  // 音量*100
  private volumeSlide = 50
  // 进度
  private progress = 0
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
    this.isDrag = false
    this.progress = value
    this.audioPlayer.currentTime = value
  }
  // 暂停
  pause() {
    if (this.audioPlayer) {
      this.audioPlayer.pause()
    }
    this.playing = false
  }
  // 播放
  play() {
    this.playing = true
    if (this.audioPlayer) {
      this.audioPlayer.play()
    }
  }
  // 上一首
  preview() {
    let index = this.$store.state.music.musicIndex
    const musicList = this.$store.state.music.musicList
    index =
      index - 1 < 0 ? this.$store.state.music.musicList.length - 1 : index - 1
    this.$store.dispatch('music/setCurrentMusicIndex', index)
  }
  // 下一首
  next() {
    let index = this.$store.state.music.musicIndex
    const musicList = this.$store.state.music.musicList
    index = index + 1 > this.$store.state.music.musicList.length ? 0 : index + 1
    this.$store.dispatch('music/setCurrentMusicIndex', index)
  }
  // 更新时间
  onTimeUpdate(e: any) {
    if (this.audioPlayer && !this.isDrag) {
      this.progress = this.audioPlayer.currentTime
    }
  }
  // 加载完成
  onLoad() {
    this.duration = Math.floor(this.audioPlayer.duration)
  }
  // 播放结束
  onEnd() {
    this.next()
  }
  // 获取歌曲
  get musicInfo() {
    return this.$store.state.music.musicInfo
  }
  // audio实例
  get audioPlayer(): HTMLAudioElement {
    return this.$refs.audio as HTMLAudioElement
  }
  // 监听musicinfo变化
  @Watch('musicInfo')
  async handleMusicInfoChange(
    newVal: { id: string; name: string; picUrl: string },
    oldVal: { id: string; name: string; picUrl: string }
  ) {
    try {
      const res = await MusicApi.getMusicUrlById({ id: newVal.id })
      if (res && res.data) {
        this.src = res.data[0].url
        this.playing = true
        document.title = newVal.name
      }
    } catch (error) {
      console.log(error)
    }
  }
  // 监听音量变化
  @Watch('volumeSlide')
  handleVolumeSlideChange(newVal: number, oldVal: number) {
    if (this.audioPlayer) {
      this.audioPlayer.volume = Number((newVal / 100).toFixed(1))
    }
  }
  mounted() {
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
    top: -1.2rem;
    left: 0;
    width: 100%;
    ::v-deep .el-slider__runway {
      .el-slider__button-wrapper {
        top: -0.9875rem;
      }
      height: 0.1rem;
      background-color: #ededed;
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
        top: -0.8875rem;
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
