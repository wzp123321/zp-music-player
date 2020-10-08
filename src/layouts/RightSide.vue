<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'RightSide'
})
export default class RightSide extends Vue {}
</script>
<style lang="less" scoped></style>
