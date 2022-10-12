import React from 'react';
import styles from "./Banner.module.scss";
import {motion} from "framer-motion";
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";
import Image from "next/image";
import BannerImage from "../../../../public/images/jpg/cart-banner.jpg";

const Banner = () => {
    return (
        <div className={styles.banner_wrapper}>
            <div className={`${styles.banner} container`}>
                <div className={styles.banner__top}/>

                <motion.div variants={opacityXMinusVariant} initial={'hidden'} animate={'visible'} className={styles.banner__image}>
                    <Image src={BannerImage} objectFit={'cover'} alt={'company banner'} />
                </motion.div>

                <div className={styles.banner__text}>
                    <motion.h1 variants={opacityYVariant} initial={'hidden'} animate={'visible'}>Корзина
                    </motion.h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;