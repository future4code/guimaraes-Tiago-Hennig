export type Users = {
    id: string,
    name: string,
    email: string,
    password: string,
    purchases?: Purchase[]
}

export type Purchase = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}

export type Product = {
    id: string,
    name: string,
    price: number,
    imgUrl: string
}