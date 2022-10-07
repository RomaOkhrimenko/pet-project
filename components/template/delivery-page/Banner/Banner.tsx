import React from 'react';
import {motion} from "framer-motion";

import styles from './Banner.module.scss'
import Image from "next/image";

import BannerImage from '../../../../public/images/jpg/delivery-banner.jpg'
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__top}/>

            <motion.div variants={opacityXMinusVariant} initial={'hidden'} animate={'visible'} className={styles.banner__image}>
                <Image src={BannerImage} objectFit={'cover'} />
            </motion.div>

            <div className={styles.banner__text}>
                <motion.h1 variants={opacityYVariant} initial={'hidden'} animate={'visible'}>Як відбувається повернення та обмін товару?
                </motion.h1>
            </div>
        </div>
    );
};

export default Banner;