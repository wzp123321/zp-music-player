<template>
  <div
    class="image-preview"
    :style="{
      width: width + 'px',
      height: height + 'px',
      borderRadius: borderRadius
    }"
  >
    <img :src="imgUrl" alt="" />
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

  @Prop({ default: '8px' })
  private borderRadius!: string
}
</script>
<style lang="less" scoped>
.image-preview {
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #ededed;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: 500ms;
  }
  img:hover {
    transform: scale(1.1);
    transition: 500ms;
  }
}
</style>
