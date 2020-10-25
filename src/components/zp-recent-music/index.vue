<template>
  <div class="m-Recent-music flex-row-start-center">
    <div class="m-Recent-music-index">
      {{ index }}
    </div>
    <img src="" alt="">
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'RecentMusic'
})
export default class RecentMusic extends Vue {
  @Prop({ default: 0 })
  private index!: number
}
</script>
<style lang="less" scoped></style>
