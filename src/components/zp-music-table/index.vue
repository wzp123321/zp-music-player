<template>
  <div class="zp-Musictable">
    <el-table :data="musicList" @row-dblclick="handleRowDbClick">
      <el-table-column type="index"> </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <zp-image-preview
            v-if="scope.row.al && scope.row.al.picUrl"
            :imgUrl="scope.row.al.picUrl"
            :width="84"
            :height="84"
          ></zp-image-preview>
          <zp-image-preview
            v-if="scope.row.artists && scope.row.artists[0].img1v1Url"
            :imgUrl="scope.row.artists[0].img1v1Url"
            :width="84"
            :height="84"
          ></zp-image-preview>
        </template>
      </el-table-column>
      <!-- 歌名 -->
      <el-table-column label="歌名">
        <template slot-scope="scope" v-if="scope.row.name">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <!-- 歌手 -->
      <el-table-column label="歌手" align="center">
        <template slot-scope="scope">
          {{ getArtist(scope.row.ar || scope.row.artists) }}
        </template>
      </el-table-column>
      <!-- 所属专辑 -->
      <el-table-column label="所属专辑" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.al && scope.row.al.name">
            {{ scope.row.al.name }}
          </span>
          <span v-if="scope.row.album && scope.row.album.name">
            {{ scope.row.album.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="时长" align="center">
        <template slot-scope="scope">
          {{ formatDuration(scope.row.dt || scope.row.duration, 1000) }}
        </template>
      </el-table-column>
      <el-table-column align="center" width="80">
        <template slot-scope="scope">
          <i
            class="iconfont icon-tianjia"
            @click="
              e => {
                addMusixToPlaylist(e, scope.row.id)
              }
            "
          ></i>
          <i class="iconfont icon-z" @click="play(scope.row.id)"></i>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="pagination.total > 10"
      style="text-align:right;margin:20px 0"
      @current-change="handleCurrentChange"
      :current-page="pagination.page"
      background
      :total="pagination.total"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import commonFnMixins from '@/utils/mixins'

@Component({
  name: 'MusicTable'
})
export default class MusicTable extends Mixins(commonFnMixins) {
  @Prop({ default: [] })
  private musicList!: MusicModule.SongInfo[]
  @Prop({
    default: () => {
      return { page: 1, total: 0 }
    }
  })
  private pagination!: { page: number; total: number }
  // 双击事件
  handleRowDbClick(row: any, column: any, event: any) {
    this.play(row.id)
  }
  // 播放
  play(id: number) {
    this.musicList.forEach((item, index) => {
      if (item.id === id) {
        this.$store.dispatch('music/setCurrentMusicList', this.musicList)
        this.$store.dispatch('music/setCurrentMusicIndex', index)
      }
    })
  }
  // 分页
  handleCurrentChange(page: number) {
    this.$emit('handleCurrentChange', page)
  }
  // 添加歌曲到自己的歌单
  addMusixToPlaylist(e: any, id: number) {
    const targetX = document.body.clientWidth / 2 + 55
    const targetY = document.body.clientHeight + 30
    ;(this as any).bus.$emit('onPlayIcon', {
      originX: e.pageX,
      originY: e.pageY,
      targetX,
      targetY
    })
  }
}
</script>
<style lang="less" scoped>
::v-deep .el-table,
::v-deep .el-pagination {
  cursor: pointer;
}
.iconfont {
  font-size: 20px;
}
.icon-z {
  margin-left: 12px;
}
</style>
