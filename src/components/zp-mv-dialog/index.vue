<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="40%">
    <video
      :src="src"
      v-if="dialogVisible"
      style="width:100%;height:100%;object-fit: cover"
      controls
    ></video>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
    </span>
  </el-dialog>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import MusicApi from '@/service/modules/music'

@Component({
  name: 'MvDialog'
})
export default class MvDialog extends Vue {
  // 标题
  @Prop({ default: '' })
  private title!: string
  // 是否需要按钮
  @Prop({ default: 0 })
  private mvId!: number
  // 开关
  private dialogVisible = false
  // 地址
  private src = ''
  // 打开
  show() {
    this.dialogVisible = true
    this.getUrlById(this.mvId)
  }
  // 关闭
  close() {
    this.dialogVisible = false
  }
  // 根据id获取播放地址
  async getUrlById(id: number) {
    const res = await MusicApi.getMvUrlById({ id })
    if (res) {
      this.src = res.data.url
    }
  }
}
</script>
<style lang="less" scoped>
::v-deep .el-dialog__header {
  text-align: left;
  .el-dialog__title {
    display: inline-block;
    max-width: 94%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
::v-deep .el-dialog__body {
  padding: 12px;
}
</style>
