import styled from "styled-components";
import SearchIcon from "./icons/Search-icon";
import { InputHTMLAttributes, useContext } from "react";
import { FilterContext } from "@/context/filter-context";

const PrimaryInput = styled.input`
    width: 220px;
    border-radius: 8px;
    background-color: var(--bg-secondary);
    color: var(--text-dark);
    padding: 10px 8px;
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    border: none;

    @media (min-width: ${props=> props.theme.desktopBreakpoint}){
        width: 352px;
        font-size: 14px;
        padding: 10px 16px;
    }
`

const InputContainer = styled.div`
    position: relative;
    width: 90%;
    svg{
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media (min-width: ${props=> props.theme.desktopBreakpoint}){
        width: 352px;
        right: 20px;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export default function PrimaryInputWSearchIcon(props: InputProps) {

    const { setSearch } = useContext(FilterContext)

    return (
        <InputContainer>
            <PrimaryInput onChange={(e) => setSearch(e.target.value)} {...props} />
            <SearchIcon />
        </InputContainer>
    )
}

