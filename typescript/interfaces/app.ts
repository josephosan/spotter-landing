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
