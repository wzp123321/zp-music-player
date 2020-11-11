<template>
  <div class="m-Search">
    <el-tabs v-model="type">
      <el-tab-pane label="单曲" name="1">
        <zp-music-table
          :musicList="musicList"
          :pagination="pagination"
          @handleCurrentChange="handleCurrentChange"
        ></zp-music-table>
      </el-tab-pane>
      <el-tab-pane label="专辑" name="10"> </el-tab-pane>
      <el-tab-pane label="歌手" name="100"> </el-tab-pane>
      <el-tab-pane label="歌单" name="1000"> </el-tab-pane>
      <el-tab-pane label="用户" name="1002"> </el-tab-pane>
      <el-tab-pane label="MV" name="1004"> </el-tab-pane>
      <el-tab-pane label="歌词" name="1006"> </el-tab-pane>
      <el-tab-pane label="电台" name="1009"> </el-tab-pane>
      <el-tab-pane label="视频" name="1014"> </el-tab-pane>
      <el-tab-pane label="综合" name="1018"> </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import SearchApi from '@/service/modules/search'
@Component({
  name: 'Search'
})
export default class Search extends Vue {
  // 分页
  private pagination = {
    page: 1,
    total: 0
  }
  // 音乐列表
  private musicList: MusicModule.SongInfo[] = []
  // 搜索类型
  private type = '1'
  // 搜索
  async onSearch() {
    const { keywords, pagination } = this
    document.title = keywords
    const type = Number(this.type)
    const offset = (pagination.page - 1) * 30
    try {
      const res = await SearchApi.getSearch({
        keywords,
        offset,
        type
      })
      if (res) {
        switch (type) {
          case 1:
            this.musicList = res.result.songs
            this.pagination.total = res.result.songCount
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  // 单曲列表分页
  handleCurrentChange(page: number) {
    this.pagination.page = page
    this.onSearch()
  }
  // 初始化
  mounted() {
    this.onSearch()
  }
  // 监听关键词变化
  @Watch('keywords')
  handleKeywordsChange(newVal: string, oldVal: string) {
    this.onSearch()
  }
  // 监听类别变化
  @Watch('type')
  handleActiveNameChange(newVal: string, oldVal: string) {
    this.pagination = {
      page: 1,
      total: 0
    }
    this.onSearch()
  }
  // 搜索关键词
  get keywords(): string {
    return this.$route.query.keyword as string
  }
}
</script>
<style lang="less" scoped>
.m-Search {
  ::v-deep .el-tabs {
    .el-tabs__header {
      padding: 1rem;
    }
    .el-tabs__item {
      padding: 0 2.125rem;
    }
  }
}
</style>
