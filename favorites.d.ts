import { IProduct } from './product'

export interface IFavorite {
    product?: IProduct
    userId: string
    sku: string
}

export interface IFavoriteMongoModel extends Omit<IFavorite, 'id'> {
    _id: string
}
