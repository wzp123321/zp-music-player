<template>
  <div class="playlist-detail" v-loading.fullscreen.lock="loading">
    <div class="playlist-detail-header flex">
      <zp-image-preview
        :imgUrl="playListInfo.coverImgUrl"
        :width="320"
        :height="240"
      ></zp-image-preview>
      <div class="info flex-column-justify">
        <span class="title">{{ playListInfo.name }}</span>
        <div class="author flex-row-start-center" v-if="playListInfo.creator">
          <zp-image-preview
            :imgUrl="playListInfo.creator.avatarUrl"
            :width="32"
            :height="32"
          ></zp-image-preview>
          <span>{{ playListInfo.creator.nickname }}</span>
          <span>创建于{{ formatTime(playListInfo.createTime) }}</span>
        </div>
        <div class="tags" v-if="playListInfo.tags">
          <el-button @click="getAllPlayListPlay"
            >播放全部<i class="iconfont icon-bofang1"></i
          ></el-button>
          标签：{{ getTag(playListInfo.tags) }}
        </div>
        <div class="count flex-row-start-center">
          <span v-if="playListInfo.playCount && playListInfo.playCount > 0">
            <i class="iconfont icon-yinle"></i
            >{{ playListInfo.playCount }}</span
          >
          <span v-if="playListInfo.shareCount && playListInfo.shareCount > 0">
            <i class="iconfont icon-fenxiang"></i
            >{{ playListInfo.shareCount }}</span
          >
          <span
            v-if="playListInfo.commentCount && playListInfo.commentCount > 0"
          >
            <i class="iconfont icon-pinglun"></i
            >{{ playListInfo.commentCount }}</span
          >
        </div>
        <div class="description">
          {{ playListInfo.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { MusicApi, CommentApi } from '@/service/modules/index'

@Component({
  name: 'PlayListDetail'
})
export default class PlayListDetail extends Vue {
  private loading = false

  private playListInfo = {}
  // 格式化时间
  formatTime(time: number) {
    return (this as any).$formatTime(time)
  }
  // 处理标签
  getTag(list: string[]) {
    return list.length > 0 ? list.join(' ') : ''
  }
  // 播放全部
  getAllPlayListPlay() {
    console.log(1)
  }
  // 获取评论列表
  async getCommentList() {
    const { id } = this
    try {
      const res = await CommentApi.getPlayListCommentListById({
        id,
      })
      if (res) {
        console.log(res)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
  // 获取详情
  async getPlayListDetailById() {
    this.loading = true
    const { id } = this
    try {
      const res = await MusicApi.getPlayListDetailById({ id })
      if (res) {
        this.playListInfo = res.playlist
        this.loading = false
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
      }
      .author {
        ::v-deep .image-preview > img {
          border-radius: 50%;
        }
        span {
          margin-right: 12px;
          margin-left: 4px;
        }
      }
      .tags {
        ::v-deep .el-button {
          color: @common-color;
          border-color: @common-color;
          margin-right: 24px;
          .iconfont {
            font-size: 14px;
            margin-left: 4px;
          }
        }
      }
      .count {
        span {
          padding: 4px;
          text-align: center;
          border: 1px solid #ededed;
          margin-right: 24px;
        }
      }
      .description {
        text-indent: 2em;
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
}
</style>
