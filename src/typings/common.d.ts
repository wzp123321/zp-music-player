declare namespace CommonModule {
  // 公共返回
  interface Responsive<T> {
    code: number
    data?: T
    banners?: T
    category: number
    hasTaste: boolean
  }
  // list返回
  interface ListResponse<T> {
    list: Array<T>
    data: Array<T>
    total: number
    interactCount: number
  }
}
