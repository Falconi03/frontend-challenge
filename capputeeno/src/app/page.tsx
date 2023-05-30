'use client'

import FilterBar from '@/components/Filter-bar'
import ProductsList from '@/components/Product-list'
import styled from 'styled-components'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 34px 160px;
  min-height: 100vh;
  background-color: var(--bg-primary);
`

export default function Home() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <PageContainer>
        <FilterBar />
        <ProductsList />
      </PageContainer>
    </QueryClientProvider>

  )
}
