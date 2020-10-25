<template>
  <div class="m-Module flex-row-justify-end">
    <div class="title">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'Module'
})
export default class Module extends Vue {
  // 标题
  @Prop({ default: '', type: String }) title!: string
}
</script>
<style lang="less" scoped>
.m-Module {
  padding: 14px 0;
  .title {
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }
}
</style>
