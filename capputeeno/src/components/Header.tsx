"use client"

import { Saira_Stencil_One } from 'next/font/google'
import styled from 'styled-components'
import SearchIcon from './Search-icon'
import PrimaryInputWSearchIcon from './Primaty-input'
import CartControl from './Cart-control'

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;  
    
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0em;

`

export default function Header() {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder='Procurando por algo específico?' />
                <CartControl />
            </div>
        </TagHeader>
    )
}