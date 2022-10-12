import React, {FormEvent, useState} from 'react';
import {motion} from "framer-motion";

import styles from './Footer.module.scss'

import Phone from "../phone/Phone";
import Location from "../location/Location";
import Button from "../../ui/Button";
import {navigation} from "../../../assets/data/data";
import Link from "next/link";
import {
    opacityXMinusVariant,
    opacityXPlusVariant,
    opacityYVariant
} from "../../../constants/animation-variants/opacityVariant";
import {useAppDispatch} from "../../../hooks/redux";
import {createConsultation} from "../../../store/redux/actions/consultationAction";

const Footer = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useAppDispatch()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const body = {
            name, phone
        }
        dispatch(createConsultation(body))

        setName('')
        setPhone('')
    }

    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer_container} container`}>
            <motion.div whileInView={'visible'} variants={opacityXMinusVariant} initial={'hidden'} viewport={{amount: 0.2, once: true}} className={styles.footer_left}>
                {navigation.map((item, index) => {
                    return <Link key={item.name} href={item.href}>{item.name}</Link>
                })}
            </motion.div>
            <div className={styles.footer_right}>
                <motion.div whileInView={'visible'} variants={opacityYVariant} initial={'hidden'} viewport={{amount: 0.2, once: true}} className={styles.footer_info}>
                    <h4 className={styles.footer_info__title}>Company</h4>
                    <div>
                        <Location />
                        <Phone />
                    </div>
                </motion.div>
                <motion.div whileInView={'visible'} variants={opacityXPlusVariant} initial={'hidden'} viewport={{amount: 0.2, once: true}} className={styles.footer_questions}>
                    <span>Залишились питання? </span>
                    <span>Заповніть форму нижче і ми зателефонуємо при першій нагоді!</span>
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder={'Name'} value={name} onChange={(e) => setName(e.target.value)} required={true} />
                        <input type="text" placeholder={'Phone'} value={phone} onChange={(e) => setPhone(e.target.value)}  required={true} />
                        <div>
                            <Button type={'submit'}>Чекаю відповіді</Button>
                        </div>
                    </form>
                </motion.div>
            </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);