declare namespace MusicModule {
  // banner
  interface BannerInfo {
    encodeId: string
    imageUrl: string
    scm: string
    targetId: number
    targetType: number
    titleColor: string
    typeTitle: string
  }
  // 歌单
  interface PlayListInfo {
    alg: string
    canDislike: boolean
    copywriter: string
    highQuality: boolean
    id: number
    name: string
    picUrl: string
    playCount: number
    trackCount: number
    trackNumberUpdateTime: number
    type: number
  }
  // 歌曲
  interface MusicInfo {
    artists: ArtistInfo[]
    copyrightId: number
    dayPlays: number
    disc: string
    duration: number
    exclusive: boolean
    fee: number
    ftype: number
    hearTime: number
    id: number
    mp3Url: string
    name: string
    playedNum: number
    popularity: number
    position: number
    ringtone: string
    rtUrl: string
    rtUrls: string
    score: number
    starredNum: number
    status: number
  }
  // 歌手
  interface ArtistInfo {
    albumSize: number
    briefDesc: string
    followed: boolean
    id: number
    img1v1Id: number
    img1v1Id_str: string
    img1v1Url: string
    musicSize: number
    picId: number
    picUrl: string
    topicPerson: number
    trans: string
  }
}
