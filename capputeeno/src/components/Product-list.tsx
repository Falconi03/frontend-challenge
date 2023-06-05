'use client'

import {useProducts} from "@/hooks/useProducts"
import ProductCard from "./Product-card";
import styled from "styled-components";

const ListCOntainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
`

export default function ProductsList() {

    const { data } = useProducts();

    return (
        <ListCOntainer>
            {data?.map((product) => {
                return (
                    <ProductCard
                        key={product.id}
                        id = {product.id}
                        title={product.name}
                        image={product.image_url}
                        price={product.price_in_cents}
                    />
                )
            })}
        </ListCOntainer>
    )
}