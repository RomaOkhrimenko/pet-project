import React from 'react';
import {motion} from "framer-motion";

import styles from './TablesPrice.module.scss'
import {opacityXMinusVariant} from "../../../../constants/animation-variants/opacityVariant";

const TablesPrice = () => {
    return (
        <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityXMinusVariant} className={styles.table_price}>
            <div className={styles.table_price__title}>
                <span>Кількість</span>
                <span>Ціна</span>
            </div>
            <div className={styles.table_price__opt}>
                <div className={styles.table_price__opt_info}>
                    <span>1-4</span>
                    <span>200,00 грн</span>
                </div>
                <div className={styles.table_price__opt_info}>
                    <span>5-9</span>
                    <span>170,00 грн</span>
                </div>
                <div className={styles.table_price__opt_info}>
                    <span>10-19</span>
                    <span>150,00 грн</span>
                </div>
                <div className={styles.table_price__opt_info}>
                    <span>20-29</span>
                    <span>140,00 грн</span>
                </div>
                <div className={styles.table_price__opt_info}>
                    <span>30+</span>
                    <span>135,00 грн</span>
                </div>
            </div>
        </motion.div>
    );
};

export default TablesPrice;