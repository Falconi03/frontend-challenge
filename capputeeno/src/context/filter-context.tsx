'use client'
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { ReactNode, createContext, useState } from "react";



export const FilterContext = createContext({
    search: '',
    setSearch: (newValue: string) => { },
    page: 0,
    setPage: (newValue: number) => { },
    type: FilterType.ALL,
    setType: (newValue: FilterType) => { },
    priority: PriorityTypes.NEWS,
    setPriority: (newValue: PriorityTypes) => { },
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTypes.NEWS)
    return (
        <FilterContext.Provider value={{
            search,
            setSearch,
            page,
            setPage,
            type,
            setType,
            priority,
            setPriority,
        }}>
            {children}
        </FilterContext.Provider>
    )
}