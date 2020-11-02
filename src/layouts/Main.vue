<template>
  <div class="music-container flex flex-column flex-pack-justify">
    <div class="header-content">
      <Header></Header>
    </div>
    <div class="music-container-content flex-row-justify-end">
      <div class="left-content">
        <LeftSide></LeftSide>
      </div>
      <div class="right-content">
        <RightSide></RightSide>
      </div>
    </div>
    <div class="foot-content">
      <MusicPlayer></MusicPlayer>
    </div>
    <!-- mv弹框 -->
    <zp-mv-dialog ref="mv_dialog" :mvId="mvId" :title="mvName"></zp-mv-dialog>
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
  //添加mv播放弹框监听事件
  onMvDialogShow() {
    ;(this as any).bus.$on('mvDialogShow', (mvInfo: MusicModule.MvInfo) => {
      const { id, name } = mvInfo
      this.mvId = id
      this.mvName = name
      setTimeout(() => {
        ;(this.$refs.mv_dialog as any).show()
      }, 300)
    })
  }
  created() {
    this.$nextTick(() => {
      this.onMvDialogShow()
    })
  }
}
</script>
<style lang="less" scoped>
.music-container {
  width: 100%;
  height: 100%;
  .header-content,
  .foot-content {
    width: 100%;
    height: auto;
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
}
</style>
