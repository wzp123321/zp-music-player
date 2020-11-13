<template>
  <el-divider content-position="left">{{ title }}</el-divider>
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
.el-divider {
  margin: 2.5rem 0;
  .el-divider__text {
    font-size: 20px;
    color: #333;
    font-weight: bold;
  }
}
</style>
