<template>
  <div class="m-Search" v-loading.fullscreen.lock="loading">
    <el-tabs v-model="type">
      <el-tab-pane label="单曲" name="1">
        <zp-music-table
          :musicList="musicList"
          :pagination="pagination"
          @handleCurrentChange="handleCurrentChange"
        ></zp-music-table>
      </el-tab-pane>
      <el-tab-pane label="专辑" name="10">
        <div class="flex-wrap">
          <zp-album-item
            v-for="(playItem, playIndex) in albumList"
            :key="playIndex"
            :albumInfo="playItem"
          >
          </zp-album-item>
        </div>
        <p class="load-more" @click="loadMore('albumList')">
          {{
            pagination.total === albumList.length ? '没有更多了~' : '加载更多~'
          }}
        </p>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="100"> </el-tab-pane>
      <el-tab-pane label="歌单" name="1000">
        <div class="flex-wrap">
          <zp-playlist-item
            v-for="(playItem, playIndex) in playlist"
            :key="playIndex"
            :playListInfo="playItem"
          >
          </zp-playlist-item>
        </div>
        <p class="load-more" @click="loadMore('playlist')">
          {{
            pagination.total === playlist.length ? '没有更多了~' : '加载更多~'
          }}
        </p>
      </el-tab-pane>
      <el-tab-pane label="用户" name="1002"> </el-tab-pane>
      <el-tab-pane label="MV" name="1004">
        <div class="flex-wrap">
          <zp-mv-item
            v-for="(playItem, playIndex) in videoList"
            :key="playIndex"
            :index="playIndex"
            :mvInfo="playItem"
          ></zp-mv-item>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌词" name="1006"> </el-tab-pane>
      <el-tab-pane label="电台" name="1009"> </el-tab-pane>
      <el-tab-pane label="视频" name="1014">
        <div class="flex-wrap">
          <zp-mv-item
            v-for="(playItem, playIndex) in videoList"
            :key="playIndex"
            :index="playIndex"
            :mvInfo="playItem"
          ></zp-mv-item>
        </div>
      </el-tab-pane>
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
  private loading = false
  // 分页
  private pagination = {
    page: 1,
    total: 0
  }
  // 音乐列表
  private musicList: MusicModule.SongInfo[] = []
  // 视频列表
  private videoList: MusicModule.MvInfo[] = []
  // 歌单列表
  private playlist: MusicModule.PlayListInfo[] = []
  // 专辑列表
  private albumList: MusicModule.AlbumInfo[] = []
  // 搜索类型
  private type = '1'
  // 搜索
  async onSearch() {
    this.loading = true
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
        console.log(res)
        switch (type) {
          case 1:
            this.musicList = [...this.musicList, ...res.result.songs]
            this.pagination.total = res.result.songCount
            break
          case 10:
            this.albumList = [...this.albumList, ...res.result.albums]
            this.pagination.total = res.result.albumCount
            break
          case 1000:
            this.playlist = [...this.playlist, ...res.result.playlists]
            this.pagination.total = res.result.playlistCount
            break
          case 1004:
            this.videoList = [...this.videoList, ...res.result.mvs]
            this.pagination.total = res.result.mvCount
            break
          case 1014:
            this.videoList = [...this.videoList, ...res.result.videos]
            this.pagination.total = res.result.videoCount
            break
        }
        this.loading = false
      }
    } catch (error) {
      this.loading = false
      console.log(error)
    }
  }
  // 单曲列表分页
  handleCurrentChange(page: number) {
    this.pagination.page = page
    this.onSearch()
  }
  // 加载更多
  loadMore(type = 'playlist' || 'albumList') {
    if ((this as any)[type].length < this.pagination.total) {
      this.pagination.page += 1
      this.onSearch()
    }
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
  padding: 12px 24px;
  .load-more {
    padding: 12px 0;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  ::v-deep .el-tabs {
    .el-tabs__header {
      padding: 1rem 0;
    }
    .el-tabs__item {
      padding: 0 2.125rem;
    }
  }
}
</style>
