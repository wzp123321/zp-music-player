<template>
  <div class="z-Dashboard">
    <!-- banner -->
    <el-carousel :interval="4000" type="card" height="320px">
      <el-carousel-item v-for="(bannerItem,bannerIndex) in bannerList" :key="'banner_'+bannerIndex">
        <img :src="bannerItem.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// 引入api
import { DashboardApi } from '@/service/modules/index'

@Component({
  name: 'Dashboard',
  components: {}
})
export default class Dashboard extends Vue {
  // banner列表
  private bannerList: DashboardModule.BannerInfo[] = []
  // 获取banner
  private async getBannerList() {
    const res = await DashboardApi.getDashboardBannerList({ type: 0 })
    if (res && res.code === 200) {
      this.bannerList = res.banners
    }
  }

  mounted() {
    this.$nextTick(() => {
      this.getBannerList()
    })
  }
}
</script>
<style lang="less" scoped>
.z-Dashboard {
  position: relative;
  margin: 12px 36px;
}
</style>
