'use client'

import BackBtn from "@/components/Back-btn";
import { useEffect, useState } from "react";
import styled from "styled-components";
import formattedValue from "../utils/format-price";
import { IProducts } from "@/types/products-types";
import ProductCardInCart from "@/components/Product-card-in-cart";
import CartInfo from "@/components/Cart-info";

const PageContent = styled.div`
    
    width: 100%;
    display: flex;
    align-items: self-start;
    justify-content: space-between;
    gap: 32px;
`

const CartContent = styled.div`
    
    >div{
        /* padding-bottom: 32px; */
        height: 80.5vh;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 3px;
            height: 8px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
        }
    }    
`



export default function Cart() {

    const cartJson = localStorage.getItem('cart-items')
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (cartJson) {
            setCart(JSON.parse(cartJson))
        }
    }, [cartJson])

    const getTotalValueCart = () => {
        let total = 0
        cart.map((item: { price_in_cents: number, qnt: number }) => {
            total += item.price_in_cents * item.qnt
        })
        return total
    }

    return (
        <PageContent>
            <CartContent>
                <BackBtn />
                <div>
                    <h1>Seu carrinho</h1>
                    <p>{`Total (${cart.length} produtos)`} <b>{`${formattedValue(getTotalValueCart())}`}</b> </p>
                    {cart.map((item: IProducts) => {
                        return (
                            <ProductCardInCart item={item} />
                        )
                    })}
                </div>
            </CartContent>
            <CartInfo cart={cart}/>
        </PageContent>
    )
}