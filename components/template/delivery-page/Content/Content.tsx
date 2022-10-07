import React from 'react';

import {motion} from "framer-motion";

import styles from  './Content.module.scss'
import MayTrade from "../may-trade/MayTrade";
import TradeSteps from "../trade-steps/TradeSteps";
import {opacityXMinusVariant} from "../../../../constants/animation-variants/opacityVariant";

const alertAnimation = {
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.5
        }
    },
    hidden: {
        scaleX: 0,
    }
}

const Content = () => {
    return (
        <div className={`${styles.content} container`}>
            <motion.span whileInView={'visible'} variants={opacityXMinusVariant} initial={'hidden'} viewport={{once: true}} className={'location'}>Главная—Помощь—Как осуществить возврат и обмен</motion.span>

            <motion.div initial={'hidden'} whileInView={'visible'} variants={alertAnimation} viewport={{amount: 0.2, once: true}} className={styles.content__alert}>
                <span>Згідно Правилам роздрібної торгівлі алкогольними напоями, затвердженими постановою КМУ №854 от 30.07.96г.
                Алкогольна продукція надлежної якості поверненню або  заміні не підлягають.
                </span>
            </motion.div>

            <MayTrade />

            <TradeSteps />
        </div>
    );
};

export default Content;