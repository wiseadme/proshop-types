import { IAsset } from './asset'
import { IOption } from './option'
import { Maybe } from './utils'

export interface IVariantOption {
    _id?: string
    assets?: IAsset[]
    quantity?: number
    description?: Maybe<string>
    price?: number
    url?: string
    name: string
    variantId: string
    ownerId?: string
}

export interface IVariant {
    id: string
    group: string,
    options?: IOption[] | string[]
    attributeId: string
    ownerId: Maybe<string>
}

export interface IVariantMongoModel extends Omit<IVariant, 'id'> {
    _id: string
}
