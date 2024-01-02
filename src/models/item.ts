export interface Item {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: Boolean
}

export interface Price {
    currency: string,
    amount: Number,
    decimals: Number
}
