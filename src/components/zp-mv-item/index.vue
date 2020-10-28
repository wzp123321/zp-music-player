<template>
  <div class="m-Mv" @click="handleMvPlay">
    <img :src="mvInfo.picUrl" alt="" />
    <div class="m-Mv-singer flex-column-justify-end ">
      <div class="name">
        <span>{{ mvInfo.name }}</span>
        /
        <span v-if="mvInfo.artists && mvInfo.artists.length > 0">{{
          mvInfo.artists[0].name
        }}</span>
      </div>
      <div class="copywriter">
        {{ mvInfo.copywriter }}
      </div>
    </div>
    <div class="btn">
      <i class="iconfont icon-bofang1"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'MvItem'
})
export default class MvItem extends Vue {
  @Prop({ default: {} })
  private mvInfo!: MusicModule.MvInfo
  // mv播放
  handleMvPlay() {
    ;(this as any).bus.$emit('mvDialogShow', this.mvInfo.id, this.mvInfo.name)
  }
}
</script>
<style lang="less" scoped>
.m-Mv {
  cursor: pointer;
  position: relative;
  width: 360px;
  height: 240px;
  margin-right: 32px;
  &-singer {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    text-align: right;
    font-size: 14px;
    .copywriter,
    .name {
      padding: 6px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  .btn {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .icon-bofang1 {
      font-size: 36px;
      color: #fff;
    }
  }
}
.m-Mv::after {
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
}
.m-Mv:last-child {
  margin-right: 0;
}
.m-Mv:hover::after {
  background-color: rgba(0, 0, 0, 0);
  transition: all 300ms;
  z-index: 999;
}
</style>
