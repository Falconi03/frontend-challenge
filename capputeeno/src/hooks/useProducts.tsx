import { mountQuery } from "@/app/utils/graphql-filters";
import { FilterContext } from "@/context/filter-context";
import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useContext, useDeferredValue } from "react";


const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, { query })
}


export function useProducts() {
    const { priority, type, search } = useContext(FilterContext)
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(priority, type)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority],
        staleTime: 1000 * 60 
    })

    const products = data?.data?.data.allProducts
    const filterdProducts = products?.filter(product => product.name.toUpperCase().includes(searchDeferred.toUpperCase()))

    return {
        data: filterdProducts
    }
}

