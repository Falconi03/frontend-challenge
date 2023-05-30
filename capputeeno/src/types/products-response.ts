import { IProducts } from "./products"

export interface ProductsFetchResponse {
    data:{
        allProducts: IProducts[]
    }
}