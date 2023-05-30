import styled from "styled-components"
import ArrowIcon from "./Arrow-icon"
import { useContext, useState } from "react"
import { FilterContext } from "@/context/filter-context"
import { PriorityTypes } from "@/types/priority-types"


const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: inherit;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg{
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    list-style: none;
    width: 176px;
    background: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    li{

        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        cursor: pointer;
    }
    li+li{
        margin-top: 4px;
    }
`

export default function FilterByPriority() {

    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useContext(FilterContext)

    const handleChangePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(!isOpen)
        console.log(value)
    }

    return (
        <FilterContainer>
            <button onClick={() => setIsOpen(!isOpen)}>
                Organizar por
                <ArrowIcon />
            </button>
            {isOpen && <PriorityFilter>
                <li onClick={() => handleChangePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleChangePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() => handleChangePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={() => handleChangePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>}
        </FilterContainer>
    )
}