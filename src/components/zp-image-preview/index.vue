<template>
  <div
    class="image-preview"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <img
      :src="imgUrl"
      alt=""
      :style="{
        width: width + 'px',
        height: height + 'px'
      }"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'ImagePreview'
})
export default class ImagePreview extends Vue {
  @Prop({ default: '' })
  private imgUrl!: string

  @Prop({ default: 120 })
  private width!: number

  @Prop({ default: 96 })
  private height!: number
}
</script>
<style lang="less" scoped>
.image-preview {
  cursor: pointer;
  background-color: #eee;
  border-radius: 8px;
}
</style>
