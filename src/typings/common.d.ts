declare namespace CommonModule {
  // 公共返回
  interface Responsive<T> {
    code: number
    data: T
    urls: T
    result: T
    banners: T
    album: T
    category: number
    hasTaste: boolean
    playlist: { [key: string]: value }
    songs: T
  }
  // list返回
  interface ListResponse<T> {
    result: Array<T>
    data: Array<T>
    total: number
    interactCount: number
    comments: Array<T>
  }
  // tag
  interface TagInfo {
    id: number
    name: string
  }
}
