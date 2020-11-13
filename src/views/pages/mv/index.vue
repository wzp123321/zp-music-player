<template>
  <div class="m-Mv" v-loading.fullscreen.lock="loading">
    <div class="m-Mv-tag">
      <div class="m-Mv-tag-item">
        地区：<span
          v-for="(item, index) in areas"
          :key="index"
          :class="{ 'active-tag': area === item }"
          @click="chooseTag('area', item)"
          >{{ item }}</span
        >
      </div>
      <div class="m-Mv-tag-item">
        类型：<span
          v-for="(item, index) in types"
          :key="index"
          :class="{ 'active-tag': type === item }"
          @click="chooseTag('type', item)"
          >{{ item }}</span
        >
      </div>
      <div class="m-Mv-tag-item">
        排序：<span
          v-for="(item, index) in orders"
          :key="index"
          :class="{ 'active-tag': order === item }"
          @click="chooseTag('order', item)"
          >{{ item }}</span
        >
      </div>
      <div class="m-Mv-list">
        <div v-if="mvList.length > 0">
          <div class="flex-wrap">
            <zp-mv-item
              v-for="(playItem, playIndex) in mvList"
              :key="playIndex"
              :index="playIndex"
              :mvInfo="playItem"
            ></zp-mv-item>
          </div>
          <p class="load-more" @click="loadMore()">
            {{
              pagination.total === mvList.length ? '没有更多了~' : '加载更多~'
            }}
          </p>
        </div>
        <zp-no-data v-else text="还没有mv~"></zp-no-data>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MvApi from '@/service/modules/mv'
@Component({
  name: 'Mv'
})
export default class Mv extends Vue {
  private loading = false
  // 地区
  private areas = ['全部', '内地', '港台', '欧美', '日本', '韩国']
  // 类型
  private types = ['全部', '官方版', '原生', '现场版', '网易出品']
  // 排序
  private orders = ['上升最快', '最新', '最热']
  // 选择的地区
  private area = '全部'
  // 选择的类型
  private type = '全部'
  // 选择的排序
  private order = '上升最快'
  // mv列表
  private mvList: MusicModule.MvInfo[] = []
  // 分页
  private pagination = {
    page: 1,
    total: 0
  }
  // 筛选
  chooseTag(type = 'area' || 'type' || 'order', value: string) {
    ;(this as any)[type] = value
    this.pagination.page = 1
    this.pagination.total = 0
    this.mvList = []
    this.getMvList()
  }
  // 加载更多
  loadMore() {
    this.pagination.page += 1
    this.getMvList()
  }
  // 获取mv列表
  async getMvList() {
    this.loading = true
    const { area, type, order, pagination } = this
    const offset = (pagination.page - 1) * 24
    const limit = 20
    try {
      const res = await MvApi.getMvList({ area, type, order, offset, limit })
      if (res) {
        this.mvList = [...this.mvList, ...res.data]
        this.pagination.total = res.count
        this.loading = false
      }
    } catch (error) {
      this.loading = false
      console.log(error)
    }
  }
  mounted() {
    this.getMvList()
  }
}
</script>
<style lang="less" scoped>
@import url('../../../style/common.less');

.m-Mv {
  position: relative;
  &-tag {
    text-align: left;
    padding: 24px;
    &-item {
      font-size: 14px;
      margin-bottom: 16px;
      span {
        cursor: pointer;
        display: inline-block;
        padding: 4px 12px;
        margin-right: 12px;
      }
      .active-tag {
        background-color: @common-color;
        color: #fff;
        transition: all 500ms;
        border-radius: 12px;
      }
    }
  }
  .load-more {
    cursor: pointer;
    text-align: center;
  }
}
</style>
