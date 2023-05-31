import { IProducts } from "./products-types"

export interface ProductsFetchResponse {
    data:{
        allProducts: IProducts[]
    }
}