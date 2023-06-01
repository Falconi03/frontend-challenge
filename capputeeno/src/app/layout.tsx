'use client'
import './globals.css'
import { Saira } from 'next/font/google'
import Header from '@/components/Header'
import DefaultProvider from '@/components/Default-providers'
import styled from 'styled-components'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  padding: 12px 18px;
  background-color: var(--bg-primary);
  @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 34px 160px;
    }
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProvider>
          <Header></Header>
          <PageContainer>
            {children}
          </PageContainer>
        </DefaultProvider>
      </body>
    </html>
  )
}
