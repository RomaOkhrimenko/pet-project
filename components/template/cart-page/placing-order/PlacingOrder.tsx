import React from 'react'

import {motion} from "framer-motion";

// @ts-ignore
import styles from './PlacingOrder.module.scss'
import {
    opacityXMinusVariant,
    opacityXPlusVariant,
    opacityYVariant
} from "../../../../constants/animation-variants/opacityVariant";

const PlacingOrder = () => {
    return (
        <div className={`${styles.placing_order} container`}>
            <motion.h3 whileInView={'visible'} initial={'hidden'} variants={opacityXMinusVariant} viewport={{amount: 0.5, once: true}} className={styles.placing_order__title}>Best Drink</motion.h3>

            <div className={styles.placing_order_content}>
                <form className={styles.placing_order_form}>
                    <motion.h3 whileInView={'visible'} initial={'hidden'} variants={opacityXMinusVariant} viewport={{amount: 0.2, once: true}} className={styles.placing_order_form__title}>Оформлення замовлення</motion.h3>
                    <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityYVariant} viewport={{amount: 0.2, once: true}} className={styles.placing_order_form__inputs}>
                        <div className={styles.input_wrap}>
                            <input type="text" required />
                            <label>Введіть ваше ім’я</label>
                        </div>
                        <div className={styles.input_wrap}>
                            <input type="text" required />
                            <label>Телефон</label>
                        </div>
                    </motion.div>
                    <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityYVariant} viewport={{amount: 0.5, once: true}} custom={1} className={styles.placing_order_form__inputs}>
                        <div className={styles.input_wrap}>
                            <input type="text" required />
                            <label>Прізвище</label>
                        </div>
                        <div className={styles.input_wrap}>
                            <input type="text" required />
                            <label>Адреса, номер відділення</label>
                        </div>
                    </motion.div>
                    <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityYVariant} viewport={{amount: 0.2, once: true}} className={styles.placing_order_form__checkbox}>
                        <input type="checkbox" />
                        <label>Погоджуюсь на обробку персональних даних</label>
                    </motion.div>
                </form>
                <motion.div whileInView={'visible'} initial={'hidden'} variants={opacityXPlusVariant} viewport={{amount: 0.2, once: true}} className={styles.placing_order__delivery}>
                    <span className={styles.placing_order__delivery_title}>Спосіб доставки</span>
                    <div className={styles.placing_order__delivery_method}>Доставка у відділення Нової пошти</div>
                </motion.div>
            </div>

        </div>
    );
};

export default PlacingOrder;