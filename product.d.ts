import { Maybe } from './utils'
import { ISEOType } from './common'
import { IUnit } from './unit'
import { ICategory } from './category'
import { IAsset } from './asset'
import { IVariant } from './variant'
import { IAttribute } from './attribute'
import { ICurrency } from './currency'

export interface IProductQuery {
    _id?: string,
    category?: string
    name?: string
    url?: string
}

export interface IProductConditions {
    visible: boolean
    countable: boolean
    exists: boolean
    hasDiscounts: boolean
    hasActions: boolean
}

export interface IProduct {
    _id: string
    name: string
    description: string
    price: number
    currency: Maybe<ICurrency | string>
    quantity: number
    image: Maybe<string>
    url: string
    seo: ISEOType
    unit: Maybe<IUnit>
    categories: ICategory[]
    assets: IAsset[]
    variants: IVariant[]
    attributes: IAttribute[]
    conditions: IProductConditions
    related: IProduct[] | string[]
}
