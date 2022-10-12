import React, {FormEvent, useState} from 'react'

import {motion} from "framer-motion";

// @ts-ignore
import styles from './PlacingOrder.module.scss'
import {
    opacityXMinusVariant,
    opacityXPlusVariant,
    opacityYVariant
} from "../../../../constants/animation-variants/opacityVariant";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {createOrder} from "../../../../store/redux/actions/cartAction";
import {clearCart} from "../../../../store/redux/slices/cartSlice";

const PlacingOrder = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [post, setPost] = useState('')

    const products = useAppSelector(state => state.cart.products)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const dispatch = useAppDispatch()

    const {register, watch, formState: {errors}, handleSubmit, reset} = useForm()

    const onSubmit = (e: any) => {
        e.preventDefault()
        const body = {
            name,
            phone,
            post,
            surname,
            products,
            totalPrice
        }
        console.log(body)
        dispatch(createOrder(body))

        setName('')
        setPhone('')
        setPost('')
        setSurname('')
    }

    return (
        <div className={`${styles.placing_order} container`}>
            <motion.h3 whileInView={'visible'} initial={'hidden'} variants={opacityXMinusVariant} viewport={{amount: 0.5, once: true}} className={styles.placing_order__title}>Company</motion.h3>

            <div className={styles.placing_order_content}>
                <form onSubmit={onSubmit} className={styles.placing_order_form}>
                    <motion.h3 whileInView={'visible'} initial={'hidden'} variants={opacityXMinusVariant} viewport={{amount: 0.2, once: true}} className={styles.placing_order_form__title}>Оформлення замовлення</motion.h3>
                    <div className={styles.placing_order_form__inputs}>
                        <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityYVariant} viewport={{amount: 0.2, once: true}} className={styles.input_wrap}>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label>Введіть ваше ім’я</label>
                        </motion.div>
                        <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityYVariant} viewport={{amount: 0.2, once: true}} className={styles.input_wrap}>
                            <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <label>Телефон</label>
                        </motion.div>
                    </div>
                    <div className={styles.placing_order_form__inputs}>
                        <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityYVariant} viewport={{amount: 0.5, once: true}} className={styles.input_wrap}>
                            <input type="text" required value={surname} onChange={(e) => setSurname(e.target.value)} />
                            <label>Прізвище</label>
                        </motion.div>
                        <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityYVariant} viewport={{amount: 0.5, once: true}} className={styles.input_wrap}>
                            <input type="text" required value={post} onChange={(e) => setPost(e.target.value)} />
                            <label>Адреса, номер відділення</label>
                        </motion.div>
                    </div>
                    <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityYVariant} viewport={{amount: 0.2, once: true}} className={styles.placing_order_form__checkbox}>
                        <input type="checkbox" required={true} />
                        <label>Погоджуюсь на обробку персональних даних</label>
                    </motion.div>
                    <input type="submit" className={'order-submit'} hidden={true}/>
                </form>
                <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityXPlusVariant} viewport={{amount: 0.2, once: true}} className={styles.placing_order__delivery}>
                    <span className={styles.placing_order__delivery_title}>Спосіб доставки</span>
                    <div className={styles.placing_order__delivery_method}>Доставка у відділення Нової пошти</div>
                </motion.div>
            </div>

        </div>
    );
};

export default PlacingOrder;