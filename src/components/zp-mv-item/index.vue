<template>
  <div class="zp-Mv" @click="handleMvPlay">
    <img :src="mvInfo.picUrl || mvInfo.coverUrl || mvInfo.cover" alt="" />
    <div class="zp-Mv-singer flex-column-justify-end ">
      <div class="name">
        <span>{{ mvInfo.name || mvInfo.title }}</span>
        /
        <span v-if="mvInfo.artists && mvInfo.artists.length > 0">{{
          (mvInfo.artists && mvInfo.artists[0].name) ||
            (mvInfo.creator && mvInfo.creator[0].name)
        }}</span>
      </div>
      <div class="copywriter" v-if="mvInfo.copywriter">
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
    const params = {
        id: this.mvInfo.id || this.mvInfo.vid,
        name: this.mvInfo.name || this.mvInfo.title,
        type: this.mvInfo.id ? 'mv' : this.mvInfo.vid ? 'video' : 'other'
      }
      // 断言
    ;(this as any).bus.$emit('mvDialogShow', params)
  }
}
</script>
<style lang="less" scoped>
.zp-Mv {
  cursor: pointer;
  position: relative;
  width: 360px;
  height: 240px;
  margin-right: 32px;
  margin-bottom: 24px;
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
    .copywriter {
      max-width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
.zp-Mv::after {
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
}
.zp-Mv:last-child {
  margin-right: 0;
}
.zp-Mv:hover::after {
  background-color: rgba(0, 0, 0, 0);
  transition: all 300ms;
  z-index: 999;
}
</style>
