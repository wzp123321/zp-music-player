<template>
  <div class="zp-Comment flex">
    <img :src="commentInfo.user.avatarUrl" alt="" />
    <div class="zp-Comment-info">
      <span class="content">{{ commentInfo.content }}</span>
      <div v-if="commentInfo.beReplied.length > 0">
        <span
          class="reply"
          v-for="(item, index) in commentInfo.beReplied"
          :key="index"
        >
          {{ item.content }}
        </span>
      </div>
      <span class="time">{{
        formatTime(commentInfo.time, 'YYYY-MM-DD HH:mm:ss')
      }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import commonFnMixins from '@/utils/mixins'

@Component({
  name: 'CommentItem'
})
export default class CommentItem extends Mixins(commonFnMixins) {
  @Prop({ default: '' })
  private commentInfo!: DataModule.CommentInfo
}
</script>
<style lang="less" scoped>
.zp-Comment {
  font-size: 16px;
  color: #333;
  padding: 24px 0;
  font-size: 15px;
  border-bottom: 1px solid #ededed;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 12px;
  }
  &-info {
    flex: 1;
    .reply {
      width: 100%;
      display: inline-block;
      padding: 8px;
      margin: 8px 0;
      background-color: #e6e5e6;
      border-radius: 4px;
    }
    .time {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
