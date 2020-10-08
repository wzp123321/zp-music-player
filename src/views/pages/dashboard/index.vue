<template>
  <div class="z-Dashboard">
    <!-- banner -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
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
  // 获取banner
  private async getBannerList() {
    const res = await DashboardApi.getDashboardBannerList({ type: 0 })
    if (res) {
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped></style>
