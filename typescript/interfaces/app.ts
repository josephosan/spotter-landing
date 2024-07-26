export interface IProductCard {
  img: string
  title: string
  desc: string
}

interface IDescriptionCollapseItem {
  text: string
  url: string
}

export interface ICollapseItem {
  title: string
  descriptions: IDescriptionCollapseItem[]
}

export interface IComment {
  title: {
    numberOfUsers: number
    averageUserRating: number
  }
  comments: Array<{
    name: string
    profileImage: string
    date: string
    description: string
  }>
}

// course
export interface ICategory {
  createdAt: string
  updatedAt: string
  id: number
  name: string
}

export interface IImage {
  url: string | null
  createdAt: string
  updatedAt: string
  id: number
}

export interface ITrainer {
  createdAt: string
  updatedAt: string
  id: number
  image: IImage
  name: string
  certificate: string
  description: string
}
