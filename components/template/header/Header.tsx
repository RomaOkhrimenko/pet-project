import React, {useState} from 'react';
import styles from './Header.module.scss'
import Location from "../location/Location";
import Phone from "../phone/Phone";
import {motion} from "framer-motion";
import {navigation} from "../../../assets/data/data";
import {opacityYVariant, opacityXPlusVariant} from "../../../constants/animation-variants/opacityVariant";
import Link from "next/link";

const Header = () => {
    const [isMenu, setIsMenu] = useState<boolean>(false)

    const handleMenuStatus = () => {
        setIsMenu(prev => !prev)

        isMenu ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'

    }
    return (
        <>
            <div className={styles.header_pc}>
                <div className={styles.header__top}>
                    <motion.span animate={{opacity: 1}} transition={{duration: 0.5}} initial={{opacity: 0}}>
                        Графік роботи: Понеділок-Субота з 9:00 до 20:00
                    </motion.span>
                </div>
                <header className={styles.header}>
                    <div className={styles.header__bottom}>
                        <div className={styles.header__bottom_menu}>
                            <motion.div initial={'hidden'} animate={'visible'} variants={opacityYVariant} custom={1} className={styles.header__bottom_menu_left}>
                                <Location />
                                <Phone />
                            </motion.div>
                            <div className={styles.header__bottom_menu_right}>
                                <motion.svg initial={'hidden'} animate={'visible'} variants={opacityXPlusVariant} custom={1}  className={styles.search_ico} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.7633 23.6404L18.3086 17.2888C19.9989 15.4523 21.0374 13.0236 21.0374 10.3511C21.0366 4.63397 16.3276 0 10.5183 0C4.70901 0 0 4.63397 0 10.3511C0 16.0682 4.70901 20.7021 10.5183 20.7021C13.0283 20.7021 15.3305 19.8339 17.1388 18.3906L23.6185 24.7672C23.9342 25.0782 24.4468 25.0782 24.7626 24.7672C25.079 24.4562 25.079 23.9514 24.7633 23.6404ZM10.5183 19.1096C5.603 19.1096 1.61839 15.1883 1.61839 10.3511C1.61839 5.51387 5.603 1.59257 10.5183 1.59257C15.4336 1.59257 19.4182 5.51387 19.4182 10.3511C19.4182 15.1883 15.4336 19.1096 10.5183 19.1096Z" fill="currentColor"/>
                                </motion.svg>

                                <motion.svg initial={'hidden'} animate={'visible'} variants={opacityXPlusVariant} custom={2} className={styles.cart_ico} width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.4791 9.41662H20.0657L14.4918 1.3091C14.3291 1.07209 14.005 1.01257 13.7675 1.17482C13.5305 1.33811 13.4705 1.66208 13.6333 1.89909L18.8015 9.41657H6.19849L11.3668 1.89914C11.5295 1.66213 11.4695 1.33811 11.2325 1.17487C10.9965 1.01262 10.672 1.07214 10.5083 1.30915L4.93433 9.41662H0.52085C0.232959 9.41662 0 9.64958 0 9.93747C0 10.2254 0.232959 10.4583 0.52085 10.4583H1.18164L4.36558 20.4651C4.64228 21.3333 5.43979 21.9167 6.35073 21.9167H18.6493C19.5603 21.9167 20.3578 21.3333 20.6345 20.4645L23.8184 10.4583H24.4792C24.7671 10.4583 25 10.2254 25 9.93747C25 9.64958 24.767 9.41662 24.4791 9.41662ZM19.6416 20.1487C19.5033 20.583 19.1045 20.875 18.6493 20.875H6.35073C5.89551 20.875 5.49673 20.583 5.3584 20.1491L2.27485 10.4583H22.7252L19.6416 20.1487Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3"/>
                                </motion.svg>

                                <motion.svg initial={'hidden'} animate={'visible'} variants={opacityXPlusVariant} custom={3} className={styles.profile_ico} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10C11.4889 10 12.4556 9.70676 13.2779 9.15735C14.1001 8.60794 14.741 7.82705 15.1194 6.91342C15.4978 5.99979 15.5969 4.99446 15.4039 4.02455C15.211 3.05465 14.7348 2.16373 14.0355 1.46447C13.3363 0.765206 12.4454 0.289002 11.4755 0.0960758C10.5055 -0.0968502 9.50021 0.00216642 8.58658 0.380605C7.67295 0.759043 6.89206 1.39991 6.34265 2.22215C5.79325 3.0444 5.5 4.0111 5.5 5C5.5 6.32608 6.02678 7.59785 6.96447 8.53553C7.90215 9.47322 9.17392 10 10.5 10ZM10.5 1C11.2911 1 12.0645 1.2346 12.7223 1.67412C13.3801 2.11365 13.8928 2.73836 14.1955 3.46927C14.4983 4.20017 14.5775 5.00444 14.4231 5.78036C14.2688 6.55629 13.8878 7.26902 13.3284 7.82843C12.769 8.38784 12.0563 8.7688 11.2804 8.92314C10.5044 9.07748 9.70017 8.99827 8.96927 8.69552C8.23836 8.39277 7.61365 7.88008 7.17412 7.22228C6.7346 6.56449 6.5 5.79113 6.5 5C6.5 3.93914 6.92143 2.92172 7.67157 2.17157C8.42172 1.42143 9.43913 1 10.5 1Z" fill="currentColor"/>
                                    <path d="M11.56 11H9.44005C8.19643 11.0039 6.96576 11.2528 5.81831 11.7323C4.67086 12.2119 3.6291 12.9127 2.75252 13.7949C1.87593 14.6771 1.18169 15.7232 0.709415 16.8737C0.237145 18.0242 -0.00389823 19.2564 4.7673e-05 20.5C4.7673e-05 20.6326 0.0527262 20.7598 0.146494 20.8536C0.240263 20.9473 0.367439 21 0.500048 21H20.5C20.6388 20.9874 20.7676 20.9225 20.8604 20.8186C20.9533 20.7146 21.0032 20.5793 21 20.44C20.9948 17.938 19.9985 15.5399 18.2293 13.7707C16.4601 12.0015 14.0621 11.0053 11.56 11ZM1.00005 20C1.11755 17.8421 2.05639 15.811 3.62397 14.3234C5.19154 12.8358 7.26897 12.0045 9.43005 12H11.55C13.7146 11.9994 15.797 12.8284 17.3689 14.3165C18.9407 15.8047 19.8824 17.8387 20 20H1.00005Z" fill="currentColor"/>
                                </motion.svg>

                            </div>
                        </div>
                        <motion.div initial={{width: 0}} animate={{width: '100%'}} transition={{duration: 1}} className={styles.header__bottom_line} />
                        <div className={styles.header__bottom_categories}>
                            <ul>
                                {navigation.map((item: any, index: number) => {
                                    return (
                                        <motion.li initial={'hidden'} animate={'visible'} variants={opacityYVariant} custom={index}><Link href={item.href}>{item.name}</Link></motion.li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
            <div className={styles.header_phone}>
                <h2>Best Drink</h2>

                <svg onClick={handleMenuStatus} width="37" height="19" viewBox="0 0 37 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.15622 16.4376H35.8437C36.482 16.4376 36.9999 16.9556 36.9999 17.5938C36.9999 18.2321 36.4819 18.75 35.8437 18.75H1.15622C0.517944 18.75 0 18.232 0 17.5938C0 16.9556 0.51804 16.4376 1.15622 16.4376Z" fill="white"/>
                    <path d="M35.8437 10.6562H1.15622C0.517944 10.6562 0 10.1382 0 9.50003C0 8.86185 0.51804 8.34381 1.15622 8.34381H35.8437C36.482 8.34381 36.9999 8.86185 36.9999 9.50003C36.9999 10.1382 36.482 10.6562 35.8437 10.6562Z" fill="white"/>
                    <path d="M35.8437 2.5625H12.7187C12.0804 2.5625 11.5625 2.04446 11.5625 1.40628C11.5625 0.768004 12.0805 0.25006 12.7187 0.25006H35.8437C36.482 0.25006 36.9999 0.768101 36.9999 1.40628C37 2.04456 36.482 2.5625 35.8437 2.5625Z" fill="white"/>
                </svg>

                <div className={`${styles.header_phone__menu} ${isMenu ? styles.active : ''}`}>
                    <Link href="/">Головна</Link>
                    <Link href="/">Каталог</Link>
                    <Link href="/">Корзина</Link>
                    <Link href="/">Оплата і доставка</Link>
                    <Link href="/">Обмін і повернення</Link>
                    <Link href="/">Способи доставки</Link>
                </div>
            </div>
        </>
    );
};

export default Header;