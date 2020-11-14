<template>
  <div class="zp-Artist" @click="toDetail">
    <zp-image-preview
      :imgUrl="artistInfo.img1v1Url"
      :width="120"
      :height="120"
      borderRadius="50%"
    ></zp-image-preview>
    <span>{{ artistInfo.name }}</span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'ArtistItem'
})
export default class ArtistItem extends Vue {
  @Prop({ default: {} })
  private artistInfo!: UserModule.ArtistInfo
  // 跳转详情
  toDetail() {
    this.$router.push('/app/artist/detail?id=' + this.artistInfo.id)
  }
}
</script>
<style lang="less" scoped>
.zp-Artist {
  margin-right: 36px;
  margin-bottom: 54px;
  span {
    display: inline-block;
    max-width: 120px;
  }
}
.zp-Artist:nth-child(10n) {
  margin-right: 0;
}
</style>
