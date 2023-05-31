'use client'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FilterContextProvider } from '@/context/filter-context'
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface DefaultProviderProps {
    children: ReactNode
}

export default function DefaultProvider({ children }: DefaultProviderProps) {

    const client = new QueryClient();

    const theme = {
        desktopBreakpoint: "1024px",
        tabletBreakpoint: "768px",
        phoneBreakpoint: "425px"
    }

    return (
        <FilterContextProvider>
            <QueryClientProvider client={client}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </QueryClientProvider>
        </FilterContextProvider>
    )
}