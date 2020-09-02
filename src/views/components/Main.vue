<template>
  <div class="music-container flex flex-column flex-pack-justify">
    <Header></Header>
    <div class="music-container-content flex-row-justify-end">
      <div class="left-content">
        <slot name="leftSide" />
      </div>
      <div class="right-content">
        <slot name="rightSide" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// 子组件
import Header from './Header.vue'

@Component({
  name: 'Main',
  components: {
    Header
  }
})
export default class Main extends Vue {}
</script>
<style lang="less" scoped>
.music-container {
  width: 100%;
  height: 100%;
  &-content {
    flex: 1;
    .left-side {
      width: 200px;
    }
    .right-side {
      flex: 1;
    }
  }
}
</style>
