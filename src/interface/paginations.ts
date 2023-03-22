export interface Filter {
  limit: number,
  page: number,
  search: string,
  sortBy: string,
  order: string,
}

export class FilterClass {
  limit?: number
  page?: number
  search?: string
  sortBy?: string
  order?: string

  constructor(data?: any) {
    this.limit = data?.limit || 10
    this.page = data?.page || 1
    this.search = data?.search || ""
    this.sortBy = data?.sortBy || "id"
    this.order = data?.order || "asc"
  }
}
