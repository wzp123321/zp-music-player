<template>
  <div class="music-header flex-row-justify-center">
    <div class="title">zpwan@music.com</div>
    <div class="search flex-row-justify-center">
      <i class="iconfont icon-fanhui" @click="goBack"></i>
      <el-input
        placeholder="请输入内容"
        v-model="state"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="handleSearch"
        ></el-button>
      </el-input>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SearchApi from '@/service/modules/search'
@Component({
  name: 'Header'
})
export default class Header extends Vue {
  // 搜索关键词
  private state = ''
  // 获取搜索默认词
  async getSearchDefaultKeyword() {
    const res = await SearchApi.getSearchDefaultKeyword({})
    if (res) {
      this.state = res.data.realkeyword
    }
  }
  // 返回
  goBack() {
    this.$router.back()
  }
  // 搜索
  handleSearch() {
    this.$router.push(`/app/search?keyword=${this.state}`)
  }
  // 主题修改
  changeTheme(theme: string) {
    const baseUrl = '/static/style/theme'
    ;(this as any).$addCssByLink(`${baseUrl}${theme}css`)
  }
  mounted() {
    this.getSearchDefaultKeyword()
  }
}
</script>
<style lang="less" scoped>
@import url('../style/common.less');

.music-header {
  padding: 10px 16px;
  border-bottom: 1px solid #ededed;
  .title {
    color: @common-color;
    text-align: left;
    width: 16rem;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
  .search {
    flex: 1;
    .input-with-select {
      width: 240px;
    }
    .iconfont {
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
}
</style>
