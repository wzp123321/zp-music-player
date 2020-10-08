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
export default class Main extends Vue {}
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
      width: 200px;
    }
    .right-content {
      flex: 1;
    }
  }
}
</style>
