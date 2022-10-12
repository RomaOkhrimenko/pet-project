export interface IProduct {
    category: string,
    category_id: number,
    description: string,
    image: string,
    in_stock: boolean,
    name: string,
    opt_price: {counts: string, price: number}[] | {}[],
    price: number,
    product_banner_category: string,
    product_banner_img: string,
    slug: string,
    counts?: number
}