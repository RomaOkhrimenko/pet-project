import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../../assets/types/IProduct";

interface IInitialState {
    products: IProduct[] | [],
    totalPrice: number
}

const initialState: IInitialState = {
    products: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addCartItem(state: IInitialState, action: PayloadAction<IProduct>) {
            const isEntry = state.products.find(item => item.slug === action.payload.slug)
            if(isEntry) {
                return
            }
            action.payload.counts = 1
            action.payload.currentPrice = action.payload.price
            console.log(action.payload)
            // @ts-ignore
            state.products.push(action.payload)
            state.totalPrice += action.payload.price
        },
        deleteCartItem(state: IInitialState, action: PayloadAction<{slug: string, price: number}>) {
            const products = state.products
            state.products = products.filter(item => item.slug !== action.payload.slug)
            state.totalPrice -= action.payload.price
        },
        incrementCartItem(state: IInitialState, action: PayloadAction<{slug: string}>) {
            const productIndex = state.products.findIndex(item => item.slug === action.payload.slug)
            const product = state.products[productIndex]
            if (product.opt_price.length) {
                for(let i = 0; i < product.opt_price.length; i++) {
                    if(product.counts! + 1 < product.opt_price[0].start_count) {
                        state.products[productIndex].counts!++
                        state.products[productIndex].currentPrice! += state.products[productIndex].price
                        state.totalPrice += state.products[productIndex].price
                        return
                    } else if(!(product.counts! + 1 >= product.opt_price[i].start_count)) {
                        state.products[productIndex].counts!++
                        const currentPrice = state.totalPrice - product.currentPrice!
                        const newPrice = product.opt_price[i - 1].price * (product.counts!)
                        state.products[productIndex].currentPrice = newPrice
                        state.totalPrice = currentPrice + newPrice
                        return
                    }
                    if (i === product.opt_price.length - 1) {
                        state.products[productIndex].counts!++
                        const currentPrice = state.totalPrice - product.currentPrice!
                        const newPrice = product.opt_price[i].price * (product.counts!)
                        state.products[productIndex].currentPrice = newPrice
                        state.totalPrice = currentPrice + newPrice
                    }
                }
                return
            }
            state.products[productIndex].counts!++
            state.products[productIndex].currentPrice! += state.products[productIndex].price
            state.totalPrice += state.products[productIndex].price
        },
        decrementCartItem(state: IInitialState, action: PayloadAction<{slug: string}>) {
            const productIndex = state.products.findIndex(item => item.slug === action.payload.slug)
            const product = state.products[productIndex]
            if (product.opt_price.length) {
                for(let i = 0; i < product.opt_price.length; i++) {
                    if(product.counts! - 1 < product.opt_price[0].start_count) {
                        state.products[productIndex].counts!--
                        const currentPrice = state.totalPrice - product.currentPrice!
                        const newPrice = state.products[productIndex].price * (product.counts!)
                        state.products[productIndex].currentPrice = newPrice
                        state.totalPrice = currentPrice + newPrice
                        return
                    } else if(!(product.counts! - 1 >= product.opt_price[i].start_count)) {
                        state.products[productIndex].counts!--
                        const currentPrice = state.totalPrice - product.currentPrice!
                        const newPrice = product.opt_price[i - 1].price * (product.counts!)
                        state.products[productIndex].currentPrice = newPrice
                        state.totalPrice = currentPrice + newPrice
                        return
                    }
                    if(i === product.opt_price.length - 1) {
                        state.products[productIndex].counts!--
                        const currentPrice = state.totalPrice - product.currentPrice!
                        const newPrice = product.opt_price[i].price * (product.counts!)
                        state.products[productIndex].currentPrice = newPrice
                        state.totalPrice = currentPrice + newPrice
                    }
                }
                return
            }
            state.products[productIndex].counts!--

            state.products[productIndex].currentPrice! -= state.products[productIndex].price
            state.totalPrice -= state.products[productIndex].price
        },
        clearCart(state: IInitialState) {
            state.products = []
            state.totalPrice = 0
        }
    }
})

export const {addCartItem, deleteCartItem, incrementCartItem, decrementCartItem, clearCart} = cartSlice.actions
export const CartReducer = cartSlice.reducer