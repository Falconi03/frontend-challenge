'use client'
import { FilterContext } from "@/context/filter-context";
import { FilterType } from "@/types/filter-types";
import { useContext } from "react";
import styled from "styled-components";

interface FilterItemProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    list-style: none;

    @media (min-width: ${props => props.theme.tabletBreakpoint}){
        gap: 40px;
    }
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.selected ? 'var(--text-dark-2)' : 'var(--text-dark)'};
    cursor: pointer;
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};

    @media (max-width: ${props => props.theme.phoneBreakpoint}){
            font-size: 10px;
        }

`

export default function FylterByType() {

    const { type, setType } = useContext(FilterContext)

    return (
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => setType(FilterType.ALL)}>
                Todos os produtos
            </FilterItem>
            <FilterItem selected={type === FilterType.SHIRT} onClick={() => setType(FilterType.SHIRT)}>
                Camisetas
            </FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => setType(FilterType.MUG)}>
                Canecas
            </FilterItem>
        </FilterList>
    )
}