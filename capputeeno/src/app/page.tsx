'use client'

import FilterBar from '@/components/Filter-bar'
import ProductsList from '@/components/Product-list'
import styled from 'styled-components'

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  min-height: 100vh;
  background-color: var(--bg-primary);
  @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 34px 160px;
    }
`

export default function Home() {

  return (    
      <PageContainer>
        <FilterBar />
        <ProductsList />
      </PageContainer>
  )
}
