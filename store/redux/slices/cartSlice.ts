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
            const product = state.products.findIndex(item => item.slug === action.payload.slug)
            state.products[product].counts!++
            state.totalPrice += state.products[product].price
        },
        decrementCartItem(state: IInitialState, action: PayloadAction<{slug: string}>) {
            const product = state.products.findIndex(item => item.slug === action.payload.slug)
            state.products[product].counts!--
            state.totalPrice -= state.products[product].price
        },
        clearCart(state: IInitialState) {
            state.products = []
            state.totalPrice = 0
        }
    }
})

export const {addCartItem, deleteCartItem, incrementCartItem, decrementCartItem, clearCart} = cartSlice.actions
export const CartReducer = cartSlice.reducer