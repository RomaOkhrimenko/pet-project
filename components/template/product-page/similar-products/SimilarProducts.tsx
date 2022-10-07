import React from 'react';
import {motion} from "framer-motion";

import styles from './SimilarProducts.module.scss'
import {MProductCard} from "../../cards/product-card/ProductCard";
import Button from "../../../ui/Button";
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

const SimilarProducts = () => {
    return (
        <div className={styles.similar_products}>
            <motion.h2 whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityXMinusVariant} className={styles.similar_products__title}>Схожі товари</motion.h2>
            <div className={styles.similar_products__container}>
                <MProductCard whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                <MProductCard whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
            </div>
            <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} className={styles.similar_products__button}>
                <Button>Дивитися каталог</Button>
            </motion.div>
        </div>
    );
};

export default SimilarProducts;