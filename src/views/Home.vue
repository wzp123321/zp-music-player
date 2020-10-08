<template>
  <Main> </Main>
</template>

<script lang="ts">
// 引入子组件
import Main from '@/layouts/Main.vue'

import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Home',
  components: {
    Main
  }
})
export default class Home extends Vue {}
</script>
