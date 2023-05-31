import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types"

export function GetCategoryByType(type: FilterType) {
    if (type === FilterType.MUG) return "mugs"
    if (type === FilterType.SHIRT) return "t-shirts"
    return ""
}


export function GetCategoryByPriority(priority: PriorityTypes) {
    if (priority === PriorityTypes.BIGGEST_PRICE) return { field: "price_in_cents", category: "DSC" }
    if (priority === PriorityTypes.MINOR_PRICE) return { field: "price_in_cents", category: "ASC" }
    if (priority === PriorityTypes.POPULARITY) return { field: "sales", category: "DSC" }
    return { field: "created_at", category: "DSC" }
}

export const mountQuery = (priority: PriorityTypes, type: FilterType) => {
    if (type === FilterType.ALL) {
        return (
            `query{
                allProducts(sortField: "${GetCategoryByPriority(priority).field}", sortOrder: "${GetCategoryByPriority(priority).category}"){
                    id
                    name
                    price_in_cents
                    image_url
                }
            }`
        )
    }
    return (
        `query{
            allProducts(sortField: "${GetCategoryByPriority(priority).field}", sortOrder: "${GetCategoryByPriority(priority).category}", filter: { category: "${GetCategoryByType(type)}"}){
                id
                name
                price_in_cents
                image_url
            }
        }`
    )
}