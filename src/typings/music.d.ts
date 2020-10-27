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
    artists: ArtistInfo[]
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
  // 歌手
  interface ArtistInfo {
    albumSize: number
    briefDesc: string
    followed: boolean
    name: string
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
  // mv
  interface MvInfo {
    alg: string
    artistId: number
    artistName: string
    artists: ArtistInfo[]
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
