"use client"

import { Saira_Stencil_One } from 'next/font/google'
import styled from 'styled-components'
import PrimaryInputWSearchIcon from './Primaty-input'
import CartControl from './Cart-control'

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;  
    flex-wrap: wrap;
    background-color: white;
    
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 20px 160px;
    }
    @media (min-width: ${props => props.theme.tabletBreakpoint}){        
        justify-content: space-between;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 30px;
    font-weight: 400;
    line-height: 50px;

    @media (min-width: ${props => props.theme.tabletBreakpoint}){
        font-size: 40px;
        line-height: 60px;
    }

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