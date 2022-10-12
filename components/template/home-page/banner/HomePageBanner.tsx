import React from 'react';
import {motion} from "framer-motion";

import styles from './HomePageBanner.module.scss'
import Button from "../../../ui/Button";
import {opacityXMinusVariant, opacityXPlusVariant} from "../../../../constants/animation-variants/opacityVariant";
import {useRouter} from "next/router";

const HomePageBanner = () => {

    const router = useRouter()

    const onClick = () => {
        router.push('/catalog/2')
    }

    return (
        <div className={styles.banner_wrapper}>
            <div className={`${styles.banner} container`}>
                <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1}} >
                    <img src={'./images/jpg/homepage-banner.jpg'} alt={'BestDrink Banner'}  className={styles.banner__img} />
                </motion.div>
                <div className={styles.banner__bottom} />

                <div className={styles.banner__info}>
                    <motion.h1 initial={'hidden'} animate={'visible'} variants={opacityXMinusVariant} custom={1}>Company</motion.h1>
                    <motion.span initial={'hidden'} animate={'visible'} variants={opacityXPlusVariant} custom={2}><b>Вишукана якість</b> вітчизняного виробника <b>за доступною ціною</b></motion.span>
                    <motion.div initial={'hidden'} animate={'visible'} variants={opacityXMinusVariant} custom={3}>
                        <Button onClick={onClick} className={styles.banner__info_btn}>Каталог</Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(HomePageBanner);