import styled from "styled-components";
import SearchIcon from "./Search-icon";
import { InputHTMLAttributes } from "react";

const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    background-color: var(--bg-secondary);
    color: var(--text-dark);
    padding: 10px 16px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    border: none;
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;
    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export default function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcon />
        </InputContainer>
    )
}

