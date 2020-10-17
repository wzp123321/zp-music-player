<template>
  <div class="music-header flex-row-justify-center">
    <div class="title">zpwan@music.com</div>
    <div class="search">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Header'
})
export default class Header extends Vue {
  private state = ''
  private restaurants: number[] = []

  // 筛选关键字
  querySearchAsync(queryString: string, cb: Function) {
    (this as any).$debounce(() => {
      const restaurants = this.restaurants
      const results: any = []
      cb(results)
    })
  }

  createStateFilter(queryString: string) {
    return (state: { value: string }) => {
      return state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
  }

  handleSelect(item: { value: string }) {
    console.log(item)
  }

  // 主题修改
  changeTheme(theme: string) {
    const baseUrl = '/static/style/theme';
    (this as any).$addCssByLink(`${baseUrl}${theme}css`)
  }
}
</script>
<style lang="less" scoped>
.music-header {
  padding: 10px 16px;
  border-bottom: 1px solid #ededed;
  .title {
    color: #ff272c;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>
