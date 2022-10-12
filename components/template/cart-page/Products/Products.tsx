import React from 'react';
import {motion} from "framer-motion";

import styles from './Products.module.scss'
import Button from "../../../ui/Button";
import ProductCart from "../../cards/product-cart/ProductCart";
import {opacityXMinusVariant, opacityXPlusVariant} from "../../../../constants/animation-variants/opacityVariant";
import {useAppSelector} from "../../../../hooks/redux";

const animateLine = {
    hidden: {
        scaleX: 0
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: 1
        }
    }
}

const Products = () => {
    const products = useAppSelector(state => state.cart.products)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)


    const onClick = () => {
       const btn = document.querySelector('.order-submit')
       // @ts-ignore
        btn.click()
    }
    return (
        <div className={`${styles.products_cart} container`}>
            <motion.h2 variants={opacityXMinusVariant} whileInView={'visible'} viewport={{amount: 0.2, once: true}} initial={'hidden'}>Товари для доставки</motion.h2>
            <div className={styles.products_cart__container}>
                <div className={styles.products_cart__products}>
                    <div className={styles.products_cart__products_line}></div>
                    {products.map(item => <ProductCart key={item.slug} counts={item.counts} price={item.price} image={item.image} title={item.name} slug={item.slug} />)}
                </div>

                <div className={styles.products_cart_info}>
                    <motion.div variants={opacityXPlusVariant} whileInView={'visible'} viewport={{amount: 0.2, once: true}} initial={'hidden'} className={styles.products_cart_info__content}>
                        <div className={styles.products_cart_info__title}>
                            <h4>Ваше замовлення:</h4>
                        </div>
                        <div className={styles.products_cart_info__counts}>
                            <span>Кількість товарів:</span>
                            <b>{products.length}</b>
                        </div>
                        <div className={styles.products_cart_info__delivery}>
                            <span>Вартість доставки:</span>
                            <b>40 грн</b>
                        </div>
                        <div className={styles.products_cart_info__total}>
                            <span>Загальна сума замовлення:</span>
                            <b>{totalPrice} грн</b>
                        </div>
                    </motion.div>
                    <motion.div variants={opacityXMinusVariant} whileInView={'visible'} viewport={{amount: 0.2, once: true}} initial={'hidden'} className={styles.products_cart_info__button}>
                        <Button onClick={onClick} className={!products.length ? styles.disabled_btn : ''} type={'submit'}>Оформити замовлення</Button>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default Products;