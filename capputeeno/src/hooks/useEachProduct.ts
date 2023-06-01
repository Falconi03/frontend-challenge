import { EachProductFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (id: string): AxiosPromise<EachProductFetchResponse> => {
    return axios.post(API_URL, {
        query: `
    query{
        Product(id:"${id}"){
          name
          price_in_cents
          description
          image_url
          category
        }
      }    
    `
    })
}


export function useEachProduct(id: string) {
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id,
    })


    return {
        data: data?.data?.data.Product
    }
}