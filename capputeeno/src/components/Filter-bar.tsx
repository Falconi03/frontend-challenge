'use client'
import styled from "styled-components";
import FilterByType from "./Filter-by-type";
import FilterByPriority from "./Filter-by-priority";

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export default function FilterBar() {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>
    )
}