<template>
  <div class="m-Comment flex">
    <img :src="commentInfo.user.avatarUrl" alt="" />
    <div class="m-Comment-info">
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
      <span class="time">{{ formatTime(commentInfo.time) }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'CommentItem'
})
export default class CommentItem extends Vue {
  @Prop({ default: '' })
  private commentInfo!: DataModule.CommentInfo
  // 格式时间
  private formatTime(time: number) {
    return (this as any).$formatTime(time, 'YYYY-MM-DD HH:mm:ss')
  }
}
</script>
<style lang="less" scoped>
.m-Comment {
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
