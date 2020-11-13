<template>
  <div class="m-Playlist" v-loading.fullscreen.lock="loading">
    <div class="m-Playlist-header flex" v-if="hightQualityPlaylistInfo">
      <div
        class="background"
        :style="{
          'background-image':
            'url(' + `${hightQualityPlaylistInfo.coverImgUrl}` + ')'
        }"
      ></div>
      <img
        :src="hightQualityPlaylistInfo.coverImgUrl"
        alt=""
        class="coverImg"
      />
      <div class="info">
        <el-button @click="toHighQuality">精品歌单</el-button>
        <div class="title">{{ hightQualityPlaylistInfo.name }}</div>
        <div class="description">
          {{ hightQualityPlaylistInfo.description }}
        </div>
      </div>
    </div>
    <el-divider content-position="left">热门标签</el-divider>
    <div class="m-Playlist-tags">
      <span
        v-for="(item, index) in hotTags"
        :key="index"
        :class="{ 'active-tag': cat === item.name }"
        @click="chooseCat(item.name)"
        >{{ item.name }}</span
      >
    </div>
    <el-divider content-position="left" v-if="playlist.length > 0"
      >网友自制歌单</el-divider
    >
    <div class="m-Playlist-list flex-wrap" v-if="playlist.length > 0">
      <zp-playlist-item
        v-for="(item, index) in playlist"
        :key="index"
        :playListInfo="item"
      ></zp-playlist-item>
    </div>
    <el-divider content-position="left" v-if="highQualityPlayList.length > 0"
      ><span class="highQuality">精品歌单</span></el-divider
    >
    <div
      class="m-Playlist-list flex-wrap"
      v-if="highQualityPlayList.length > 0"
    >
      <zp-playlist-item
        v-for="(item, index) in highQualityPlayList"
        :key="index"
        :playListInfo="item"
      ></zp-playlist-item>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PlayListApi from '@/service/modules/playlist'
@Component({
  name: 'PlayList'
})
export default class PlayList extends Vue {
  private loading = false
  // 网友自制歌单tag
  private hotTags: CommonModule.TagInfo[] = []
  // 当前标签
  private cat = '全部'
  // 精品歌单详情
  private hightQualityPlaylistInfo: any = {}
  // 精品歌单列表
  private highQualityPlayList: MusicModule.PlayListInfo[] = []
  // 个单列表
  private playlist: MusicModule.PlayListInfo[] = []
  // 选择标签
  chooseCat(name: string) {
    this.cat = name
    this.getPlayList()
    this.getHighQualityPlayList()
  }
  // 获取热门分类
  private async getPlayListHotCat() {
    try {
      const res = await PlayListApi.getPlayListHotCat({})
      if (res) {
        this.hotTags = res.tags
        this.hotTags.unshift({
          id: 999999,
          name: '全部'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  // 获取网友自制歌单
  async getPlayList() {
    this.loading = true
    const offset = 30
    const { cat } = this
    try {
      const res = await PlayListApi.getPlayList({ offset, cat })
      if (res) {
        this.playlist = res.playlists
        this.loading = false
      }
    } catch (error) {
      this.loading = false
      console.log(error)
    }
  }
  // 获取精品歌单
  async getHighQualityPlayList() {
    const { cat } = this
    const offset = 30
    try {
      const res = await PlayListApi.getHighQualityPlaylist({ offset, cat })
      if (res && res.playlists) {
        this.highQualityPlayList = res.playlists
        this.hightQualityPlaylistInfo = res.playlists[0]
      }
    } catch (error) {
      console.log(error)
    }
  }
  // 滚轮到精品歌单列表
  toHighQuality() {
    window.scrollTo({
      top: 2800,
      behavior: 'smooth'
    })
  }
  mounted() {
    this.getPlayListHotCat()
    this.getPlayList()
    this.getHighQualityPlayList()
  }
}
</script>
<style lang="less" scoped>
@import url('../../../style/common.less');

.m-Playlist {
  padding: 24px 48px;
  &-header {
    position: relative;
    height: 200px;
    padding: 32px;
    border-radius: 12px;
    overflow: hidden;
    .coverImg {
      width: 280px;
      height: auto;
      z-index: 1;
    }
    .info {
      z-index: 1;
      color: #fff;
      text-align: left;
      margin-left: 12px;
      .el-button {
        border: 1px solid #e7aa5a;
        color: #e7aa5a;
        background-origin: 10px;
        background-color: #333;
        font-size: 16px;
      }
      .title {
        font-size: 28px;
        margin: 18px 0;
      }
      .description {
        text-indent: 2em;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        font-size: 0.85714rem;
        color: hsla(0, 0%, 100%, 0.5);
      }
    }
    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .background::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.9);
    }
  }
  &-tags {
    text-align: left;
    padding-top: 24px;
    span {
      cursor: pointer;
      display: inline-block;
      padding: 4px 12px;
    }
    .active-tag {
      border-radius: 12px;
      background-color: @common-color;
      color: #fff;
      transition: all 500ms;
    }
  }
  ::v-deep .el-divider {
    margin-top: 48px;
    margin-bottom: 32px;
    .el-divider__text {
      font-size: 20px;
      color: #333;
      font-weight: bold;
    }
  }
}
</style>
