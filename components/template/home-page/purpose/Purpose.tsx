import React from 'react';
import {motion} from "framer-motion";

import PurposeImage from '../../../../public/images/jpg/purpose.jpg'
import styles from './Purpose.module.scss'
import Image from "next/image";
import {opacityXMinusVariant, opacityXPlusVariant} from "../../../../constants/animation-variants/opacityVariant";

const Purpose = () => {
    return (
        <div className={styles.purpose}>
            <div className="container">
                <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.5, once: true}} className={styles.purpose_wrapper}>

                    <motion.div variants={opacityXMinusVariant} className={styles.purpose__text_container}>
                        <span className={styles.purpose__text}>Наша мета - допомогти Вам відчути справжнє задоволення від улюбленого напою!</span>
                    </motion.div>

                    <motion.div variants={opacityXPlusVariant} className={styles.purpose__image_container}>
                        <Image src={PurposeImage} alt={'Наша мета'} objectFit={'cover'} className={styles.purpose__image} width={524} />
                    </motion.div>

                </motion.div>

            </div>
        </div>
    );
};

export default React.memo(Purpose);