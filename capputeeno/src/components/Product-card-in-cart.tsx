import { IProducts } from "@/types/products-types";
import TrashIcon from "./icons/Trash-icon";
import ArrowIcon from "./icons/Arrow-icon";
import formattedValue from "@/app/utils/format-price";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Card = styled.section`
    display: flex;
    background: white;
    border-radius: 8px;
    margin-bottom: 16px;

    img{
        width: 256px;
        margin-right: 31px;
        border-radius: 8px 0 0 8px;
    }

    >div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px 16px 24px 16px;

        div{
            display: flex;
            flex-direction: initial;
            justify-content: space-between;

            h2{
                font-family: inherit;
                font-weight: 300;
                font-size: 20px;
                line-height: 150%;
                color: var(--text-dark-2);
            }
        }

        >div:nth-of-type(2){
            align-items: flex-end;
            justify-content: space-between;

        }

        p{
            font-family: inherit;
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            color: var(--text-dark-2);
        }

    }
`

const TrashBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`

const QntBtn = styled.select`
    display: flex;    
    justify-content: space-between;
    align-items: center;
    flex-direction: column;    
    padding: 8px 12px;
    box-sizing: border-box;
    width: 65px;
    background: var(--bg-secondary);
    border: 1px solid #A8A8B3;
    border-radius: 8px;    
    color: var(--text-dark);
    cursor: pointer;

    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
    }
`

export default function ProductCardInCart({ item }: { item: IProducts }) {

    const cartJson = localStorage.getItem('cart-items')
    const [cart, setCart] = useState<IProducts[]>([])

    useEffect(() => {
        if (cartJson) {
            setCart(JSON.parse(cartJson))
        }
        console.log('teste')
    }, [cartJson, ])

    const existItemsIndex = cart.findIndex((cartItem: { id: string }) => cartItem.id == item.id)

    const delItem = () => {

        if (existItemsIndex > -1) {
            cart.splice(existItemsIndex, 1)
            localStorage.setItem('cart-items', JSON.stringify(cart))
            window.location.reload()
        }
    }

    const changeQntItem = (value: number) => {
        if (existItemsIndex > -1) {
            cart[existItemsIndex].qnt = value
            localStorage.setItem('cart-items', JSON.stringify(cart))
            window.location.reload()
        }
    }

    return (
        <Card>
            <img src={item.image_url} alt={item.name} />
            <div>
                <div>
                    <h2>{item.name}</h2>
                    <TrashBtn onClick={() => delItem()}>
                        <TrashIcon />
                    </TrashBtn>
                </div>
                <p>{item.description}</p>
                <div>
                    <QntBtn name={String(item.qnt)} onChange={(e) => changeQntItem(+e.currentTarget.value)}>
                        <option value={item.qnt}>{item.qnt}</option>
                        {item.qnt != 1 && <option value={1}>1</option>}
                        {item.qnt != 2 && <option value={2}>2</option>}
                        {item.qnt != 3 && <option value={3}>3</option>}
                        {item.qnt != 4 && <option value={4}>4</option>}
                        {item.qnt != 5 && <option value={5}>5</option>}
                    </QntBtn>
                    <b>{formattedValue(item.price_in_cents * item.qnt!!)}</b>
                </div>
            </div>
        </Card>
    )
}