<template>
  <Main>
    <Header slot="topSide"/>
    <LeftSide slot="leftSide" />
    <RightSide slot="rightSide" />
    <MusicPlayer slot="footSide"/>
  </Main>
</template>

<script lang="ts">
// 引入子组件
import Main from './components/Main.vue'
import Header from './components/Header.vue'
import LeftSide from './components/LeftSide.vue'
import RightSide from './components/RightSide.vue'
import MusicPlayer from './components/MusicPlayer.vue'

import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Home',
  components: {
    Main,
    Header,
    LeftSide,
    RightSide,
    MusicPlayer
  }
})
export default class Home extends Vue {}
</script>
