'use client'
import formattedValue from "@/app/utils/format-price"
import { IProducts } from "@/types/products-types"
import styled from "styled-components"

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    min-width: 352px;
    height: 85.5vh;
    padding: 16px 24px 24px 24px;
    position: relative;


    h2{
        font-family: inherit;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark-2);
        margin-bottom: 30px;
    }

    p{
        font-family: inherit;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
    }
    p:nth-of-type(2){
        margin-bottom: 24px;
    }

    >div:nth-of-type(1){
        align-items: center;
        width: 100%;
        height: 1px;
        background: var(--shapes-2);
        margin: 8px 0;
    }
    >div:nth-of-type(2){
        position: absolute;
        display: flex;
        flex-direction: column;
        bottom: 12px;
        left: 24px;
    }

    button{
        border: none;
        width: 100%;
        background: #51B853;
        color: var(--shapes-light);
        mix-blend-mode: multiply;
        border-radius: 4px;
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        text-align: center;
        text-transform: uppercase;
        padding: 10px 0;
        margin-top: 28px;
    }

    a{
        font-family: inherit;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark);
        margin-bottom:12px;
    }
`

export default function CartInfo({ cart }: { cart: IProducts[] }) {

    const getTotalValueCart = () => {
        let total = 0
        cart.map((item) => {
            total += item.price_in_cents * item.qnt!!
        })
        return total
    }

    return (
        <Content>
            <h2>Resumo do pedido</h2>
            <p> <span>Subtotal de produtos </span><span>{formattedValue(getTotalValueCart())}</span></p>
            <p><span>Entrega </span><span>{formattedValue(cart.length > 0 ? 4000 : 0)}</span></p>
            <div></div>
            <p><span><b>Total</b></span><span><b>{formattedValue(cart.length > 0 ? getTotalValueCart() + 4000 : 0)}</b></span></p>
            <button>Finalizar Compra</button>
            <div>
                <a href="">Ajuda</a>
                <a href="">Reembolsos</a>
                <a href="">Entregas e frete</a>
                <a href="">Trocas e devoluções</a>
            </div>
        </Content>
    )
}