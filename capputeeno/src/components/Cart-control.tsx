import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "./Cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -10px;
    top: 50%;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: var(--delete-color);
    color: white;
    font-weight: 500;
    font-size: 10px;
    line-height: 26px;
`

const Container = styled.div`
    position: relative;
`

export default function CartControl() {

    const { value } = useLocalStorage('cart-items', [])

    return (
        <Container>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}