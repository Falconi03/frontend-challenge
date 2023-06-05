'use client'
import BackIcon from "@/components/icons/Back-icon"
import { useRouter } from "next/navigation"
import styled from "styled-components"

const BackBtnStyled = styled.button`
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 11px;
    align-self: flex-start;
    cursor: pointer;
    margin-bottom: 24px;
    
    :focus-visible {
	outline: none;
    }

`

export default function BackBtn() {

    const router = useRouter();    

    return (
        <BackBtnStyled onClick={() => router.push('/')}>
            <BackIcon /> Voltar
        </BackBtnStyled>
    )
}