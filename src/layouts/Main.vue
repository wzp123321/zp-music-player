<template>
  <div class="music-container flex flex-column flex-pack-justify">
    <div class="header-content">
      <Header></Header>
    </div>
    <div style="padding: 1.8rem 0.4rem;background:#fff"></div>
    <div class="music-container-content flex-row-justify-end">
      <div class="left-content">
        <LeftSide></LeftSide>
      </div>
      <div class="right-content">
        <RightSide></RightSide>
        <div style="height: 3rem;padding: 0.3rem 0.4rem;background:#fff"></div>
      </div>
    </div>
    <div class="foot-content">
      <MusicPlayer></MusicPlayer>
    </div>
    <!-- mv弹框 -->
    <zp-mv-dialog
      ref="mv_dialog"
      :mvId="mvId"
      :title="mvName"
      :mvType="mvType"
    ></zp-mv-dialog>
    <!-- 播放历史 -->
    <el-drawer :visible.sync="historyVisiable" :with-header="false">
      <div class="play-history">
        <span class="title">播放历史</span>
        <div class="list">
          <zp-music-table :musicList="historyMusicList"></zp-music-table>
        </div>
      </div>
    </el-drawer>
    <!-- 添加播放icon -->
    <div
      class="add_music"
      :style="{ top: x + 'px', left: y + 'px' }"
      v-if="addShow"
    >
      <i class="iconfont icon-z"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '@/layouts/Header.vue'
import LeftSide from '@/layouts/LeftSide.vue'
import RightSide from '@/layouts/RightSide.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'

@Component({
  name: 'Main',
  components: {
    Header,
    LeftSide,
    RightSide,
    MusicPlayer
  }
})
export default class Main extends Vue {
  // mv播放链接
  private mvId = 0
  // mv名称
  private mvName = ''
  // 播放历史开关
  private historyVisiable = false
  // 视频类型
  private mvType = 'mv'
  private addShow = false
  private x = 0
  private y = 0
  //添加mv播放弹框监听事件
  onMvDialogShow() {
    ;(this as any).bus.$on(
      'mvDialogShow',
      (mvInfo: { id: number; name: string; type: string }) => {
        const { id, name, type } = mvInfo
        this.mvId = id
        this.mvName = name
        this.mvType = type
        setTimeout(() => {
          ;(this.$refs.mv_dialog as any).show()
        }, 300)
      }
    )
  }
  // 监听播放历史弹框
  private onPlayhHistoryDrawer() {
    ;(this as any).bus.$on('onHistroyDrawer', () => {
      this.historyVisiable = true
    })
  }
  // 监听播放icon动画
  private onPlayIconTransition() {
    ;(this as any).bus.$on(
      'onPlayIcon',
      (data: {
        originX: number
        originY: number
        targetX: number
        targetY: number
      }) => {
        if (this.addShow) {
          ;(this.$message as any).error('您操作的太快了，人家受不了了啦')
        }
        const { originX, originY, targetX, targetY } = data
        this.x = originY - 16
        this.y = originX - 16
        this.addShow = true
        setTimeout(() => {
          this.x = targetY - 24
          this.y = targetX - 24
          setTimeout(() => {
            this.addShow = false
          }, 3600)
        }, 200)
      }
    )
  }
  created() {
    this.$nextTick(() => {
      this.onMvDialogShow()
      this.onPlayhHistoryDrawer()
      this.onPlayIconTransition()
    })
  }
  get historyMusicList(): MusicModule.SongInfo[] {
    return this.$store.state.music.playHistroy
  }
}
</script>
<style lang="less" scoped>
@import url('../style/common.less');

.music-container {
  position: relative;
  width: 100%;
  height: 100%;
  .header-content,
  .foot-content {
    width: 100%;
    height: auto;
    z-index: 999;
  }
  .header-content {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
  }
  .foot-content {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
  }
  &-content {
    flex: 1;
    .left-content {
      width: 280px;
      height: 100%;
    }
    .right-content {
      height: 100%;
      flex: 1;
    }
  }

  ::v-deep .el-drawer__body {
    height: 100%;
  }
  ::v-deep .el-drawer:focus {
    outline: none;
  }
  .play-history {
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      text-align: left;
      font-size: 18px;
      color: #333;
      font-weight: bold;
      padding: 8px;
      border-bottom: 1px solid #ededed;
    }
    .list {
      flex: 1;
      overflow-y: scroll;
    }
  }
  .add_music {
    position: absolute;
    padding: 2px;
    border: 2px solid @common-color;
    border-radius: 50%;
    animation: icon-scale 2.6s forwards;
    transition: left 1.6s linear, top 1.6s cubic-bezier(0.5, -0.5, 1, 1);
    .iconfont {
      color: @common-color;
      font-weight: bold;
      font-size: 24px;
    }
  }
}

@keyframes icon-scale {
  0% {
    transform: scale(1);
  }
  99% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(0);
  }
}
</style>
