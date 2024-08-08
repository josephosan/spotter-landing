import type { ICategory, IImage, ITrainer } from './app'

// settings
export interface ISettings {
  OTP_TYPE: 'EMAIL' | 'PHONE'
  SITE_NAME: string
  SITE_TITLE: string
  SITE_META_DESCRIPTION: string
  SITE_META_KEYWORDS: string
  SITE_CONTACT_PHONE: string
  SITE_CONTACT_EMAIL: string
  SITE_CONTACT_ADDRESS: string
  SITE_CONTACT_LOCATION: string
  SHOW_LOCATION_MAP: 'YES' | 'NO'
  USE_SPOT_PLAYER: 'YES' | 'NO'
  SPOT_PLAYER_SECRET: string
  USE_RECAPTCHA: 'YES' | 'NO' | 'UNSET'
  IS_SITE_CONFIGURED?: 'YES' | 'NO'
  PLAN_TYPE?: string
}

// profile
export interface IProfile {
  createdAt: string
  updatedAt: string
  id: number
  phoneNumber: string
}

// course
export interface ICourse {
  createdAt: string
  updatedAt: string
  id: number
  category: ICategory
  thumbnailImage: IImage
  trainer: ITrainer
  status: string
  spotPlayerId: string | null
  title: string
  shortDescription: string
  description: string
  headlines: string[]
  price: number
  discountPercent: number
  discountConstant: number
  tags: string[]
  totalPrice: number
}

export interface ICourseList {
  courses: ICourse[]
  hasNext: boolean | null
  hasPrev: boolean | null
  totalItems: number | null
  totalPages: number | null
  page: number | null
}
