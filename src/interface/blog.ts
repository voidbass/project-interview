interface BlogDataBody {
  content: string,
  image: string,
  title: string,
}

interface BlogData {
  body: BlogDataBody,
  content: string,
  createdAt: string,
  id: string | number,
  image: string,
  title: string
}

export class BlogDataBodyDetail {
  content?: string
  image?: string
  title?: string

  constructor(data?: BlogDataBodyDetail) {
    this.content = data?.content
    this.image = data?.image
    this.title = data?.title
  }
}

export class BlogDataDetail {
  body?: BlogDataBodyDetail
  content?: string
  createdAt?: string
  id?: string | number
  image?: string
  title?: string

  constructor(data?: BlogData) {
    this.body = new BlogDataBodyDetail(data?.body)
    this.content = data?.content
    this.createdAt = data?.createdAt
    this.id = data?.id
    this.image = data?.image
    this.title = data?.title
  }
}