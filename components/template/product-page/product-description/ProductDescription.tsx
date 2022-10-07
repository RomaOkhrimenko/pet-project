import React from 'react';
import {motion} from "framer-motion";

import styles from './ProductDescription.module.scss'
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

const ProductDescription = () => {
    return (
        <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} className={styles.product_description}>
            <motion.h4 variants={opacityXMinusVariant} className={styles.product_description__title}>Опис товару</motion.h4>
            <motion.p variants={opacityYVariant} className={styles.product_description__desc}>Ром Captain Morgan Spiced Gold – якісний алкогольний напій, який постачається у тетрапаку на 2 літри. Пряний ром готується за технологією з додаванням спецій та прянощів з Карибських островів.
                Капітан Морган Голд виготовляє британський концерн. Купують продукцію у Великій Британії, США, Канаді, Німеччині, ПАР – ці країни є найбільшими ринками збуту для виробника. Україна також у числі топових імпортерів цієї продукції. Сьогодні це один із найкращих видів рому у світі, який ми готові Вам запропонувати.</motion.p>
        </motion.div>
    );
};

export default ProductDescription;