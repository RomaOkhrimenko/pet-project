import React from 'react';
import {motion} from "framer-motion";

// @ts-ignore
import styles from './Products.module.scss'
import {MProductCard} from "../../cards/product-card/ProductCard";
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

const Products = () => {
    return (
        <div className={styles.products}>
            <motion.h2 initial={'hidden'} whileInView={'visible'} viewport={{once: true}} variants={opacityXMinusVariant} className={styles.products__title}>Ром</motion.h2>
            <div className={styles.products__container}>
                <MProductCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
            </div>
        </div>
    );
};

export default Products;