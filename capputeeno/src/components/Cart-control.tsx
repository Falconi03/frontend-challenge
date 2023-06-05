import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "./icons/Cart-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

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

const Container = styled.button`
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
`

export default function CartControl() {

    const { value } = useLocalStorage('cart-items', [])

    const router = useRouter()

    return (
        <Container onClick={() => router.push(`/cart`)}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}