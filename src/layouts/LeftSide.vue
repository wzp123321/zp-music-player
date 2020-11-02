<template>
  <div class="music-left-side">
    <div
      :class="[
        'menu-item',
        checkCurrentRoute(menuItem.path) ? 'active-menu' : ''
      ]"
      v-for="(menuItem, menuIndex) in menuList"
      :key="menuIndex"
    >
      <i :class="['iconfont', menuItem.icon]"></i
      ><span>{{ menuItem.title }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { menuList } from '@/common/index'

@Component({
  name: 'LeftSide'
})
export default class LeftSide extends Vue {
  private menuList = menuList
  // 判断是否为当前路由
  private checkCurrentRoute(path: string) {
    return this.$route.path.includes(path)
  }
  // 路由跳转
}
</script>
<style lang="less" scoped>
@import url('../style/common.less');
.music-left-side {
  height: 100%;
  border-right: 1px solid #eee;
  .menu-item {
    cursor: pointer;
    padding: 12px 48px;
    font-size: 16px;
    text-align: left;
    span {
      width: 80px;
      display: inline-block;
      text-align: left;
      margin-left: 20px;
    }
  }
  .active-menu {
    color: @common-color;
    background-color: #eee;
    transition: all 300ms;
  }
}
</style>
