import formattedValue from "@/app/utils/format-price";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface ProductCardProps {
    image: string,
    title: string,
    price: number,
    id:string
}

const Card = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 256px;
    background: #ffffff66;
    backdrop-filter: blur(10px);
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    
    img{
        width: 256px;
        height: 300;
    }
    
    h3{
        font-family: inherit;
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
        margin: 8px 12px;
    }

    div{
        width: 228px;
        height: 1px;
        background: var(--shapes-2);
        margin: 0 12px;
    }

    p{
        font-family: inherit;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark);
        margin: 8px 12px;
    }
`

export default function ProductCard(props: ProductCardProps) {

    const router = useRouter()

    return (
        <Card  onClick={() => router.push(`/product?id=${props.id}`)}>
            <img src={props.image}></img>
            <h3>{props.title}</h3>
            <div></div>
            <p>{formattedValue(props.price)}</p>
        </Card>
    )

}