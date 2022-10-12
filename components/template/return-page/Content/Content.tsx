import React from 'react';
import {motion} from "framer-motion";

import styles from './Content.module.scss'
import Image from "next/image";

import AddressImage from '../../../../public/images/jpg/address-delivery.jpg'
import AddressImage2 from '../../../../public/images/jpg/address-delivery-2.jpg'
import {
    opacityXMinusVariant,
    opacityXPlusVariant,
    opacityYVariant
} from "../../../../constants/animation-variants/opacityVariant";

const Content = () => {
    return (
        <div className='container'>
            <motion.span variants={opacityXMinusVariant} initial={'hidden'} animate={'visible'} className="location">
                Главная—Помощь—Как осуществить возврат и обмен
            </motion.span>

            <div className={styles.content}>

                <div className={styles.address_delivery}>
                    <motion.div className={styles.address_delivery__info} whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}}>
                        <motion.h2 variants={opacityYVariant} custom={1}>Адресна доставка:</motion.h2>
                        <motion.p variants={opacityYVariant} custom={1.5}>Адресна доставка кур’єрською службою «Нова пошта» до ваших дверей  по усій Україні.</motion.p>
                        <motion.span variants={opacityYVariant} custom={2}>Сроки доставки кур’єром:</motion.span>
                        <motion.p variants={opacityYVariant} custom={2.5}>Замовлення відправляємо на протязі доби з моменту цого підтвердження оператором і покупцем.</motion.p>
                        <motion.p variants={opacityYVariant} custom={3}>Срок доставки – від 1 до 3 днів (в залежності від того, в якому регіоні ви знаходитесь і від графіку роботи нової пошти)</motion.p>
                        <motion.span variants={opacityYVariant} custom={3.5}>Вартість доставки кур’єром:</motion.span>
                        <motion.p variants={opacityYVariant} custom={4}>Адресна доставка до ваших дверей Новою поштою по тарифам перевізника "Нова Пошта".</motion.p>
                    </motion.div>
                    <motion.div className={styles.address_delivery__image} whileInView={'visible'} initial={'hidden'} variants={opacityXPlusVariant} viewport={{amount: 0.2, once: true}}>
                        <Image src={AddressImage} alt={'company address'} />
                    </motion.div>
                </div>


                <div className={`${styles.address_delivery} ${styles.address_delivery_reverse}`}>
                    <motion.div className={styles.address_delivery__image} whileInView={'visible'} initial={'hidden'} variants={opacityXMinusVariant} viewport={{amount: 0.2, once: true}}>
                        <Image src={AddressImage2} alt={'company address 2'} />
                    </motion.div>

                    <motion.div className={styles.address_delivery__info} whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}}>
                        <motion.h2 variants={opacityYVariant} custom={1}>Доставка у відділення «НОВА ПОШТА» по Україні</motion.h2>
                        <motion.span variants={opacityYVariant} custom={1.5}>Сроки доставки у відділення:</motion.span>
                        <motion.p variants={opacityYVariant} custom={2}>Срок доставки – от 1 до 3 днів (залежить від регіона і графіка роботи Нової пошти)</motion.p>
                        <motion.p variants={opacityYVariant} custom={2.5}>Замовлення формується і відправляється на протязі однієї доби з моменту підтвердження замовлення.</motion.p>
                        <motion.span variants={opacityYVariant} custom={3}>Вартість доставки у відділення:</motion.span>
                        <motion.p variants={opacityYVariant} custom={3.5}>Доставка у відділення - по тарифам перевізника "Нова Пошта".</motion.p>
                        <motion.span variants={opacityYVariant} custom={4}>Оплата:</motion.span>
                        <motion.p variants={opacityYVariant} custom={4.5}>Оплата карткою Visa/MasterCard або готівкою у відділенні "Нова Пошта" при отриманні товару.</motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Content;