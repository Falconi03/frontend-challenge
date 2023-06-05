'use client'

import BackBtn from "@/components/Back-btn"
import { useEachProduct } from "@/hooks/useEachProduct";
import styled from "styled-components"
import formattedValue from "../utils/format-price";
import WhiteCartIcon from "@/components/icons/White-cart-icon";

const PageContent = styled.section`
    display: flex;
    gap: 32px;
    width: 100%;

    img{
        max-width: 640px;
        width: 60%;
        border-radius: 4px;
    }
`
const Content = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    span{
        font-family: inherit;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
        margin-bottom: 12px;
    }

    h1{
        font-family: inherit;
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: var(--text-dark-2);
        margin-bottom: 4px;
    }

    span:nth-of-type(2){
        font-family: inherit;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%; 
        color: var(--shapes-dark);
        margin-bottom: 24px;
    }

    p{
        font-family: inherit;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: var(--text-dark-2);
        margin-bottom: 58px;
    }

    h3{
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark);
        margin-bottom: 8px;
    }
    p:nth-of-type(2){
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: var(--text-dark-2);
    }
`
const CartBtn = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: var(--brand-blue);
    color: white;
    align-self: flex-end;
    border: none;
    mix-blend-mode: multiply;
    border-radius: 4px;
    cursor: pointer;

    svg{
        margin-right: 12px;
    }

`

export default function Product({ searchParams }: { searchParams: { id: string } }) {

    const { data } = useEachProduct(searchParams.id);

    const handleAddToCart = () => {
        let cartItemsJson = localStorage.getItem('cart-items')
        if (cartItemsJson) {
            let cartItems = JSON.parse(cartItemsJson)

            let existItemsIndex = cartItems.findIndex((item: { id: string }) => item.id == data?.id)
            if (existItemsIndex !== -1) {
                cartItems[existItemsIndex].qnt += 1
                localStorage.setItem('cart-items', JSON.stringify(cartItems))
            } else {
                cartItems.push({ ...data, qnt: 1 })
                localStorage.setItem('cart-items', JSON.stringify(cartItems))
                window.location.reload()
            }
        } else {
            localStorage.setItem('cart-items', JSON.stringify([{ ...data, qnt: 1 }]))
        }
    }

    return (
        <>
            <BackBtn />
            <PageContent>
                <img src={data?.image_url} />
                <Content>
                    <Description>
                        <span>{data?.category === 'mugs' ? 'Caneca' : 'Camiseta'}</span>
                        <h1>{data?.name}</h1>
                        <span>{formattedValue(data?.price_in_cents ?? 0)}</span>
                        <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                        <h3>DESCRIÇÃO</h3>
                        <p>{data?.description}</p>
                    </Description>
                    <CartBtn onClick={() => handleAddToCart()}>
                        <WhiteCartIcon />
                        ADICIONAR AO CARRINHO
                    </CartBtn>
                </Content>
            </PageContent>
        </>
    )

}