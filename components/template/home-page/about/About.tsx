import React from 'react';
import {motion} from "framer-motion";
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

import styles from './About.module.scss'
import Image from "next/image";

import AboutImage from '../../../../public/images/png/aboutHome.png'

const About = () => {
    return (
        <motion.div className={styles.about}>
            <motion.div initial={'hidden'} viewport={{once: true}} whileInView={'visible'} variants={opacityXMinusVariant} className={styles.about__info}>
                <h3 className={styles.about__info_title}>Ми піклуємося про своїх клієнтів</h3>
                <span className={styles.about__info_text}>
                    Компанія <b>Company</b> уже понад 5 років дбає про своїх покупців, забезпечуючи їх можливістю придбати якісний і сертифікований товар в будь-який час та день. Сумлінним співробітникам дуже важливо, щоб їх труд був оцінений самою вісокою оцінкою, тому на сайті представлений асортимент відмінної продукції, яка доставляється вчасно у короткі строки <br/>
                    <b>Ціна товару може змінюватися в залежності від кількості замовленої продукції.</b>
                </span>
            </motion.div>
            <motion.div variants={opacityYVariant} initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.4, once: true}} className={styles.about__image}>
                <Image src={AboutImage} alt={'Company about'} />
            </motion.div>
        </motion.div>
    );
};

export default React.memo(About);