import React, {forwardRef} from 'react';
import {motion} from "framer-motion";

import styles from './ProductCard.module.scss'

import ProductImage from '../../../../public/images/png/product-image.png'
import Image from "next/image";
import Button from "../../../ui/Button";

export const ProductCard = forwardRef((props, ref) => {
    return (
        // @ts-ignore
        <div ref={ref} className={styles.product_card}>
            <Image width={155} height={223} src={ProductImage} />

            <h4 className={styles.product_card__title}>
                Коньяк “Молдова” 10 л
            </h4>

            <div className={styles.product_card__bottom}>
                <span className={styles.product_card__bottom_price}>
                    Ціна:  635$
                </span>
                <Button className={styles.product_card__bottom_button}>В кошик</Button>
            </div>
        </div>
    );
});

export const MProductCard = motion(ProductCard)

