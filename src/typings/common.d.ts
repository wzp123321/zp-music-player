declare namespace CommonModule {
  // 公共返回
  interface Responsive<T> {
    code: number
    data: T
    result: T
    banners: T
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
}
