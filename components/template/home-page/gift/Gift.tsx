import React from 'react';
import {motion} from "framer-motion";

import styles from './Gift.module.scss'
import GiftImage from '../../../../public/images/jpg/gift.jpg'
import Image from "next/image";
import {opacityXMinusVariant, opacityXPlusVariant} from "../../../../constants/animation-variants/opacityVariant";

const animateGiftImage = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const Gift = () => {
    return (
        <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} className={styles.gift}>
            <motion.h2 variants={opacityXMinusVariant} className={styles.gift__title}>
                Цікавить подарунок комусь особливому? Маємо пропозицію!
            </motion.h2>

            <motion.div className={styles.gift_info} whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} >
                <motion.div variants={animateGiftImage} className={styles.gift_info__image}>
                    <Image src={GiftImage} alt='Best drink Gift'  />
                </motion.div>
                <div className={styles.gift_info__text}>
                    <motion.p variants={opacityXMinusVariant} custom={1}>Якщо ви у пошуку оригінального подарунку поважній людині і хочете, щоб Вас запам’ятали за добрий смак і вміння справити враження? Ми пропонуємо замовити подарунковий набір. Бережно запакований якісний напій подарує незабутні враження і позитивні емоції, бо це і є головна мета будь-якого подарунка.</motion.p>
                    <motion.p variants={opacityXPlusVariant} custom={2}>Ви можете вручити подарунковий бокс самостійно, або замовити доставку на визначений час і місце, і ми подбаємо про його своєчасну доставку.</motion.p>
                    <motion.p variants={opacityXMinusVariant} custom={3}><b>Подарувати незабутні моменти - це саме дорожче, що ми можемо зробити для дорогої людини.</b></motion.p>
                </div>
            </motion.div>

        </motion.div>
    );
};

export default Gift;