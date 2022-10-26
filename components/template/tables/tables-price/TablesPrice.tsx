import React, {FC} from 'react';
import {motion} from "framer-motion";

import styles from './TablesPrice.module.scss'
import {opacityXMinusVariant} from "../../../../constants/animation-variants/opacityVariant";

interface IProps {
    prices: {last_count: number, price: number, counts: string}[] | {}[]
}

const TablesPrice: FC<IProps> = ({prices}) => {
    return (
        <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityXMinusVariant} className={styles.table_price}>
            <div className={styles.table_price__title}>
                <span>Кількість</span>
                <span>Ціна</span>
            </div>
            <div className={styles.table_price__opt}>
                {prices.map((item: any) => {
                    return (
                        <div className={styles.table_price__opt_info}>
                            <span>{item.counts}</span>
                            <span>{item.price} грн</span>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    );
};

export default TablesPrice;