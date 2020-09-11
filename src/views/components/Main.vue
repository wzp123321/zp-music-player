<template>
  <div class="music-container flex flex-column flex-pack-justify">
    <div class="header-content">
      <slot name="topSide" />
    </div>
    <div class="music-container-content flex-row-justify-end">
      <div class="left-content">
        <slot name="leftSide" />
      </div>
      <div class="right-content">
        <slot name="rightSide" />
      </div>
    </div>
    <div class="foot-content">
      <slot name="footSide" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Main'
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
