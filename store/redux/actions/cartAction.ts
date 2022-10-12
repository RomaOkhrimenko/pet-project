import {AppDispatch} from "../index";
import {instance} from "../../../http/instance";
import {IProduct} from "../../../assets/types/IProduct";
import {clearCart} from "../slices/cartSlice";

interface CreateOrder {
    name: string,
    surname: string,
    phone: string,
    post: string,
    totalPrice: number,
    products: IProduct[]
}

export const createOrder = (body: CreateOrder) => async (dispatch: AppDispatch) => {
    try {
        await instance.post('/create/order', body)
        dispatch(clearCart())
        alert('Замовлення відправлено')
    } catch (e) {
        alert('Сталась помилка при відправці замовлення. Спробуйте будь-ласка пізніше')
    }
}