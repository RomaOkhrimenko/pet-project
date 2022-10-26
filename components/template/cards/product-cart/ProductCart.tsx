import React, {FC, useState} from 'react';

import styles from './ProductCart.module.scss'
import Image from "next/image";
import productImage from '../../../../public/images/png/attikus.png'
import Button from "../../../ui/Button";
import {useAppDispatch} from "../../../../hooks/redux";
import {decrementCartItem, deleteCartItem, incrementCartItem} from "../../../../store/redux/slices/cartSlice";

interface IProductCart {
    image: string
    title: string
    price: number
    slug: string
    counts: number | undefined
    totalPrice: number | undefined
}

const ProductCart: FC<IProductCart> = ({image, title, price, slug, counts, totalPrice}) => {

    const dispatch = useAppDispatch()

    const deleteItem = () => {
        const body = {slug, price: totalPrice!}
        dispatch(deleteCartItem(body))
    }

    const incrementItem = () => {
        const body = {slug}
        dispatch(incrementCartItem(body))
    }

    const decrementItem = () => {
        console.log(counts)
        if(counts! > 1) {
            const body = {slug}
            dispatch(decrementCartItem(body))
        }
    }
    return (
        <div className={styles.product_cart}>
            <div className={styles.product_cart__image}>
                <Image src={image} width={130} height={191} alt={'product name'} objectFit={'cover'} />
            </div>
            <div className={styles.product_cart__info}>
                <h4 className={styles.product_cart__info_title}>
                    {title}
                </h4>
                <div className={styles.product_cart__info_code}>
                    <span>Код</span>
                    <span>002006</span>
                </div>
                <span>Кількість</span>
                <div className={styles.product_cart__info_counts}>
                    <div className={styles.product_cart__info_counts_btn}>
                        <Button onClick={decrementItem}>-</Button>
                        <span>{counts}</span>
                        <Button onClick={incrementItem}>+</Button>
                    </div>
                    <div className={styles.product_cart__info_counts_price}>
                        <span>{totalPrice} грн</span>
                    </div>
                </div>
            </div>

            <div className={styles.product_cart__delete} onClick={deleteItem}>X</div>
        </div>
    );
};

export default ProductCart;