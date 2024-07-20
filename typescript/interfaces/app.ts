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
