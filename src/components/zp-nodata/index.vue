<template>
  <div class="m-NoData flex-column-center-center">
    <img src="../../assets/img/common/no_data.png" alt="" />
    <span>{{ text }}</span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'CommentItem'
})
export default class CommentItem extends Vue {
  @Prop({ default: '暂无数据' })
  private text!: string
}
</script>
<style lang="less" scoped>
.m-NoData {
  width: 100%;
  height: 100%;
  color: #999;
  img{
    width: 160px;
    height: 160px;
  }
}
</style>
