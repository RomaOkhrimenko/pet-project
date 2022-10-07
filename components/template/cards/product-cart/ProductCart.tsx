import React from 'react';

import styles from './ProductCart.module.scss'
import Image from "next/image";
import productImage from '../../../../public/images/png/attikus.png'
import Button from "../../../ui/Button";

const ProductCart = () => {
    return (
        <div className={styles.product_cart}>
            <div className={styles.product_cart__image}>
                <Image src={productImage} alt={'product name'} objectFit={'cover'} />
            </div>
            <div className={styles.product_cart__info}>
                <h4 className={styles.product_cart__info_title}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <div className={styles.product_cart__info_code}>
                    <span>Код</span>
                    <span>002006</span>
                </div>
                <span>Кількість</span>
                <div className={styles.product_cart__info_counts}>
                    <div className={styles.product_cart__info_counts_btn}>
                        <Button>-</Button>
                        <span>1</span>
                        <Button>+</Button>
                    </div>
                    <div className={styles.product_cart__info_counts_price}>
                        <span>600 грн</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;