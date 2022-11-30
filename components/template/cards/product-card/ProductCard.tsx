import React, {forwardRef, useEffect, useState} from 'react';
import {motion} from "framer-motion";

import styles from './ProductCard.module.scss'

import Image from "next/image";
import Button from "../../../ui/Button";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {addCartItem} from "../../../../store/redux/slices/cartSlice";
import {IProduct} from "../../../../assets/types/IProduct";

interface IProps {
    product: IProduct
}

export const ProductCard = forwardRef(({product}: IProps, ref) => {
    const [isCartItem, setIsCartItem] = useState(false)

    const products = useAppSelector(state => state.cart.products)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const onClick = (e: any) => {
        router.push(`/product/${product.slug}`)
    }

    const addToCart = (e: any) => {
        e.stopPropagation()
        if(isCartItem) {
            router.push('/cart')
            return
        }
        dispatch(addCartItem(product))
    }

    useEffect(() => {
        const isEntry = products.find(item => item.slug === product.slug)
        if (isEntry) {
            setIsCartItem(true)
        }
    }, [products])
    return (
        // @ts-ignore
        <div ref={ref} onClick={onClick} className={styles.product_card}>
            <Image width={155} height={223} src={product.image} alt={'name'} />

            <h4 className={styles.product_card__title}>
                {product.name}
            </h4>

            <div className={styles.product_card__bottom}>
                <span className={styles.product_card__bottom_price}>
                    Ціна: {product.price}₴
                </span>
                <Button className={`${styles.product_card__bottom_button}`} onClick={addToCart}>{isCartItem ? 'В кошику' : 'В кошик'}</Button>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard'

export const MProductCard = motion(ProductCard)

MProductCard.displayName = 'MProductCard'

