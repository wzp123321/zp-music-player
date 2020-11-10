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
  // 音乐
  interface MusicInfo {
    alg: string
    song: SongInfo
    canDislike: boolean
    copywriter: string
    id: number
    name: string
    picUrl: string
    type: number
  }
  // 歌曲
  interface SongInfo {
    artists: UserModule.ArtistInfo[]
    copyright: number
    copyrightId: number
    dayPlays: number
    duration: number
    id: number
    name: string
    playedNum: number
    popularity: number
    position: number
    ringtone: string
    rtype: number
    score: number
    starred: boolean
    starredNum: number
    status: number
  }
  // mv
  interface MvInfo {
    alg: string
    artistId: number
    artistName: string
    artists: UserModule.ArtistInfo[]
    canDislike: boolean
    copywriter: string
    duration: number
    id: number
    name: string
    picUrl: string
    playCount: number
    subed: boolean
    trackNumberUpdateTime: number
    type: number
  }
}
