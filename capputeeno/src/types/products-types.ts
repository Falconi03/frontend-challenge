export interface IProducts {
    name: string,
    price_in_cents: number,
    id: string,
    image_url: string,
    category: string,
    description?: string,
    qnt?: number,
}
