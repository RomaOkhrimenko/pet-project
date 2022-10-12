import React, {FC, useEffect} from 'react';
import {motion} from "framer-motion";

import styles from './Banner.module.scss'
import Image from "next/image";

import BannerImage from '../../../../public/images/png/product-vodka-banner.png'
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

const Banner: FC<{category: string, image: string}> = ({category, image}) => {
    return (
        <div className={styles.banner_wrapper}>
            <div className={`${styles.banner} container`}>
                <div className={styles.banner__top}/>

                <motion.div variants={opacityXMinusVariant} initial={'hidden'} animate={'visible'} className={styles.banner__image}>
                    <Image src={image} width={713} height={348} objectFit={'cover'} alt={'Company banner'} />
                </motion.div>

                <div className={styles.banner__text}>
                    <motion.h1 variants={opacityYVariant} initial={'hidden'} animate={'visible'}>{category}
                    </motion.h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;