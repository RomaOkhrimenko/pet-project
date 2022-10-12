import {AppDispatch} from "../index";
import {instance} from "../../../http/instance";

interface ICreateConsultation {
    phone: string,
    name: string
}

export const createConsultation = (body: ICreateConsultation) =>  async () => {
    try {
        await instance.post('/create/feedback', body)
        alert('Запит успішно відправлений')
    } catch(e) {
        alert('Сталась помилка, попробуйте спробувати пізніше')
    }
}