import React from 'react';
import {motion} from "framer-motion";

import styles from './MayTrade.module.scss'
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";
const MayTrade = () => {
    return (
        <div className={styles.may_trade}>
                <motion.h3 whileInView={'visible'} initial={'hidden'} viewport={{once: true}} variants={opacityXMinusVariant} className={styles.may_trade__title}>Обмін або повернення товару можливе у таких випадках:</motion.h3>
                <motion.div className={styles.may_trade__steps} whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}}>
                    <motion.div variants={opacityYVariant} custom={1} className={styles.may_trade__steps_step}>
                        <h3>1</h3>
                        <span>Товарна позиція або її кількість не відповідає замовленому.</span>
                    </motion.div>

                    <motion.div variants={opacityYVariant} custom={1.5} className={styles.may_trade__steps_step}>
                        <h3>2</h3>
                        <span>Ушкодження етикетки, потертість або подряпина.</span>
                    </motion.div>

                    <motion.div variants={opacityYVariant} custom={2} className={styles.may_trade__steps_step}>
                        <h3>3</h3>
                        <span>Пошкодження цілісності товару (пошкоджена пляшка, этикетка або акцизна наклейка).</span>
                    </motion.div>
                </motion.div>
        </div>
    );
};

export default MayTrade;