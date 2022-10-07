import React from 'react';
import {motion} from "framer-motion";

import styles from './Product.module.scss'
import Image from "next/image";

import ProductImage from '../../../../public/images/png/product-image-big.png'
import Button from "../../../ui/Button";
import TablesPrice from "../../tables/tables-price/TablesPrice";
import {
    opacityXMinusVariant,
    opacityXPlusVariant,
    opacityYVariant
} from "../../../../constants/animation-variants/opacityVariant";

const Product = () => {
    return (
        <div className={styles.product}>
            <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityXMinusVariant} className={styles.product__image}>
                <Image src={ProductImage} objectFit={'contain'} />
            </motion.div>
            <div className={styles.product_info}>
                <motion.h3 whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityXPlusVariant} className={styles.product_info__title}>Горілка «Finlandia» – 3л</motion.h3>
                <motion.span whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} className={styles.product_info__price}>Ціна: 250 грн</motion.span>
                <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} className={styles.product_info__buttons}>
                    <Button className={styles.product_info__buttons_buy}>Купити зараз</Button>
                    <Button className={styles.product_info__buttons_take}>Отримати консультацію</Button>
                </motion.div>
                <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityXMinusVariant} className={styles.product_info__delivery}>
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M32.4946 11.8346C32.6155 11.7943 32.7768 11.8749 32.9381 12.0967C32.9381 12.0967 32.9381 12.0967 40.2365 19.1934C40.6599 19.6168 40.6599 20.262 40.2365 20.5846C40.2365 20.5846 40.2365 20.5846 32.9381 27.8023C32.7768 28.0039 32.6155 28.0644 32.4946 28.0039C32.3736 27.9434 32.293 27.7418 32.293 27.4797V12.2983C32.293 12.0362 32.3736 11.8749 32.4946 11.8346Z" fill="#ED1C24"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.0144 0H20.5386L21.0225 0.201613C21.0225 0.201613 21.0225 0.201613 28.5426 7.64113C28.8652 8.06452 28.7443 8.36694 28.2201 8.36694C28.2201 8.36694 28.2201 8.36694 25.0951 8.36694C24.5709 8.36694 24.1273 8.81048 24.1273 9.33468C24.1273 9.33468 24.1273 9.33468 24.1273 14.8589C24.1273 15.3831 23.7039 15.8065 23.0588 15.8065C23.0588 15.8065 23.0588 15.8065 17.5951 15.8065C17.0507 15.8065 16.6273 15.3831 16.6273 14.8589C16.6273 14.8589 16.6273 14.8589 16.6273 9.33468C16.6273 8.81048 16.2039 8.36694 15.6596 8.36694H12.333C11.7886 8.36694 11.6878 8.06452 12.0104 7.64113C12.0104 7.64113 12.0104 7.64113 19.5305 0.201613L20.0144 0Z" fill="#ED1C24"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.26109 11.6734C8.38206 11.754 8.4627 11.9355 8.4627 12.1976V27.6814C8.4627 27.9637 8.38206 28.125 8.26109 28.1653C8.11996 28.2258 7.93851 28.1653 7.71673 28.004C7.71673 28.004 7.71673 28.004 0.31754 20.5847C-0.105847 20.2621 -0.105847 19.6169 0.31754 19.1935C0.31754 19.1935 0.31754 19.1935 7.71673 11.875C7.93851 11.6734 8.11996 11.6129 8.26109 11.6734Z" fill="#ED1C24"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.5974 23.8708C17.5974 23.8708 17.5974 23.8708 23.0612 23.8708C23.7063 23.8708 24.1499 24.2942 24.1499 24.8386C24.1499 24.8386 24.1499 24.8386 24.1499 30.6652C24.1499 31.3104 24.5733 31.7338 25.0975 31.7338H28.0007C28.545 31.7338 28.7466 32.0362 28.3233 32.3588C28.3233 32.3588 28.3233 32.3588 21.0249 39.6773C20.8031 39.8991 20.541 39.9999 20.2789 39.9999C20.0168 39.9999 19.7345 39.8991 19.5329 39.6773C19.5329 39.6773 19.5329 39.6773 12.2345 32.3588C11.791 32.0362 12.0128 31.7338 12.537 31.7338C12.537 31.7338 12.537 31.7338 15.662 31.7338C16.2063 31.7338 16.6297 31.3104 16.6297 30.6652C16.6297 30.6652 16.6297 30.6652 16.6297 24.8386C16.6297 24.2942 17.0531 23.8708 17.5974 23.8708Z" fill="#ED1C24"/>
                    </svg>
                    <span>доставка Новою Поштою</span>
                </motion.div>
                <div className={styles.product_info__table_container}>
                    <TablesPrice />
                </div>
            </div>

        </div>
    );
};

export default Product;