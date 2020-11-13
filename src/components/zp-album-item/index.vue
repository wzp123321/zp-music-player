<template>
  <div class="zp-Album" @click="toDetail">
    <zp-image-preview
      :imgUrl="albumInfo.blurPicUrl"
      :width="240"
      :height="180"
    ></zp-image-preview>
    <div class="name">
      {{ albumInfo.name }}
    </div>
    <div class="artist">
      {{ albumInfo.artist && albumInfo.artist.name }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'AlbumItem'
})
export default class AlbumItem extends Vue {
  @Prop({ default: {} })
  private albumInfo!: MusicModule.AlbumInfo
  toDetail() {
    this.$router.push('/app/album/detail?id=' + this.albumInfo.id)
  }
}
</script>
<style lang="less" scoped>
.zp-Album {
  margin-right: 24px;
  margin-bottom: 24px;
  text-align: left;
  font-size: 14px;
  color: #333;
  .name,
  .artist {
    max-width: 240px;
    margin: 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.zp-Album:nth-child(6n) {
  margin-right: 0;
}
</style>
