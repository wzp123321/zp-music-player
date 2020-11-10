declare namespace DataModule {
  interface CommentInfo {
    beReplied: {
      beRepliedCommentId: number
      content: string
      status: number
      user: UserModule.ArtistInfo
    }[]
    content: string
    liked: boolean
    likedCount: number
    parentCommentId: number
    status: number
    time: number
    user: UserModule.ArtistInfo[]
  }
}
