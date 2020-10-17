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
export default class Main extends Vue {
  mounted() {
    this.$store.dispatch('music/setCurrentMusicList', [
      { src: 'http://m8.music.126.net/20201017153359/ad2f68471bd20389e272cc69d11b94ce/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3' }
    ])

    this.$store.dispatch('music/setCurrentSrc', 0)
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
