<template>
  <div class="playlist-detail" v-loading.fullscreen.lock="loading">
    <div class="playlist-detail-header flex">
      <zp-image-preview
        :imgUrl="albumInfo.picUrl"
        :width="320"
        :height="240"
      ></zp-image-preview>
      <div class="info flex-column">
        <span class="title">{{ albumInfo.name }}</span>
        <div class="author flex-row-start-center">
          <span>歌手：{{ getArtist(albumInfo.artists) }}</span>
        </div>
        <div class="create-time">
          发行时间：{{ formatTime(albumInfo.publishTime) }}
        </div>
        <div class="company" v-if="albumInfo.company">
          发行公司：{{ albumInfo.company }}
        </div>
        <div class="description">
          {{ albumInfo.description }}
        </div>
        <div class="tags">
          <el-button @click="getAllPlayListPlay"
            >播放全部<i class="iconfont icon-bofang1"></i
          ></el-button>
        </div>
      </div>
    </div>
    <!-- 音乐列表 -->
    <div class="module-title">
      歌曲列表
    </div>
    <zp-music-table
      :musicList="musicList"
      :pagination="pagination"
    ></zp-music-table>
    <!-- 评论区 -->
    <div class="module-title">
      评论区
    </div>
    <div v-if="commentList.length > 0">
      <zp-comment-item
        v-for="(item, index) in commentList"
        :key="index"
        :commentInfo="item"
      ></zp-comment-item>
      <p class="load-more" @click="loadMore">
        {{
          commentList.length === pagination.total ? '没有更多了~' : '加载更多~'
        }}
      </p>
    </div>
    <zp-no-data v-else text="还没有评论~"></zp-no-data>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { PlayListApi, CommentApi, MusicApi } from '@/service/modules/index'

@Component({
  name: 'AlbumDetail'
})
export default class AlbumDetail extends Vue {
  private loading = false
  private albumInfo: any = {}
  // 评论列表
  private commentList: DataModule.CommentInfo[] = []
  // 评论分页
  private pagination = {
    page: 1,
    total: 0
  }
  // 音乐列表
  private musicList: MusicModule.SongInfo[] = []
  // 格式化时间
  formatTime(time: number) {
    return (this as any).$formatTime(time)
  }
  getArtist(list: any) {
    if (!list) {
      return ''
    }
    const names = list.map((item: any) => {
      return item.name
    })
    return names.join('/')
  }
  // 播放
  getMusicPlay(index: number) {
    const list = this.musicList.map((item: any) => {
      return {
        name: item.name,
        picUrl: item.al.picUrl,
        artist: this.getArtist(item.ar),
        id: item.id
      }
    })
    this.$store.dispatch('music/setCurrentMusicList', list)
    this.$store.dispatch('music/setCurrentMusicIndex', index)
  }
  // 播放全部
  getAllPlayListPlay() {
    this.getMusicPlay(0)
  }
  // 获取评论列表
  async getCommentList() {
    this.loading = true
    const { id, pagination } = this
    const offset = (pagination.page - 1) * 20
    try {
      const res = await CommentApi.getAlbumCommentListById({
        id,
        offset
      })
      if (res) {
        this.commentList = [...this.commentList, ...res.comments]
        this.pagination.total = res.total
        this.loading = false
      }
    } catch (error) {
      this.loading = false
      throw new Error(error)
    }
  }
  // 加载更多
  loadMore() {
    if (this.pagination.total > this.commentList.length) {
      this.pagination.page += 1
      this.getCommentList()
    }
  }
  // 获取歌单详情
  async getPlayListDetailById() {
    this.loading = true
    const { id } = this
    try {
      const res = await MusicApi.getAlbumInfoById({ id })
      if (res) {
        this.albumInfo = res.album
        this.musicList = res.songs
        document.title = this.albumInfo.name
      }
    } catch (error) {
      this.loading = false
      throw new Error(error)
    }
  }
  mounted() {
    this.getPlayListDetailById()
    this.getCommentList()
  }
  // 歌单id
  get id() {
    return Number(this.$route.query.id)
  }
}
</script>
<style lang="less" scoped>
@import url('../../../style/common.less');

.playlist-detail {
  padding: 24px;
  text-align: left;
  span {
    display: inline-block;
  }
  &-header {
    margin-bottom: 24px;
    .info {
      font-size: 16px;
      color: #666;
      margin-left: 16px;
      .title {
        font-size: 24px;
        color: #333;
        margin-bottom: 24px;
      }
      ::v-deep .el-button {
        margin-top: 24px;
        color: @common-color;
        border-color: @common-color;
        margin-right: 24px;
        .iconfont {
          font-size: 14px;
          margin-left: 4px;
        }
      }
      .author,
      .company,
      .create-time,
      .description {
        padding: 6px 0;
      }
      .description {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
  .module-title {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    padding: 12px 0;
    margin-top: 48px;
  }

  .module-title:nth-child(2) {
    margin-top: 0;
  }
  .load-more {
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
