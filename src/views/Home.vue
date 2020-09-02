<template>
  <Main>
    <LeftSide slot="leftSide" />
    <RightSide slot="rightSide" />
  </Main>
</template>

<script lang="ts">
// 引入子组件
import Main from './components/Main.vue'
import LeftSide from './components/LeftSide.vue'
import RightSide from './components/RightSide.vue'

import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Home',
  components: {
    Main,
    LeftSide,
    RightSide
  }
})
export default class Home extends Vue {}
</script>
