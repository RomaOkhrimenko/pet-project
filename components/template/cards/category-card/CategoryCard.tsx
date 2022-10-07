import React, {FC, forwardRef} from 'react';
import {motion} from "framer-motion";
import styles from './CategoryCard.module.scss'
import Image from "next/image";


export const CategoryCard: FC<{svg: string, name: string}> = forwardRef(({svg, name}, ref) => {
    return (
        // @ts-ignore
        <div ref={ref} className={styles.category_card}>
            <div className={styles.category_card__image}>
                <Image src={svg} alt={'Best drink'} />
            </div>
            <div className={styles.category_card__line} />
            <div className={styles.category_card__name}>
                <h4>{name}</h4>
            </div>
        </div>
    );
});

CategoryCard.displayName = 'CategoryCard'

export const MCategoryCard = motion(CategoryCard)

MCategoryCard.displayName = 'MCategoryCard'