import React, {FC} from 'react';
import {motion} from "framer-motion";

// @ts-ignore
import styles from './Products.module.scss'
import {MProductCard} from "../../cards/product-card/ProductCard";
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";
import {IProduct} from "../../../../assets/types/IProduct";

interface IProps {
    products: IProduct[]
}

const Products: FC<IProps> = ({products}) => {
    return (
        <div className={styles.products}>
            <motion.h2 initial={'hidden'} whileInView={'visible'} viewport={{once: true}} variants={opacityXMinusVariant} className={styles.products__title}>{products[0].category}</motion.h2>
            <div className={styles.products__container}>

                {products?.map(item => {
                    return <MProductCard initial={'hidden'} key={item.slug} product={item} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                })}
            </div>
        </div>
    );
};

export default Products;