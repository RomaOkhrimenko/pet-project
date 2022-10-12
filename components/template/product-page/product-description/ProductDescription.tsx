import React, {FC} from 'react';
import {motion} from "framer-motion";

import styles from './ProductDescription.module.scss'
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

const ProductDescription: FC<{description: string}> = ({description}) => {
    return (
        <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} className={styles.product_description}>
            <motion.h4 variants={opacityXMinusVariant} className={styles.product_description__title}>Опис товару</motion.h4>
            <motion.p variants={opacityYVariant} className={styles.product_description__desc}>{description}</motion.p>
        </motion.div>
    );
};

export default ProductDescription;