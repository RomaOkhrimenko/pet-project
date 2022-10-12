import React, {FC, forwardRef, useEffect, useState} from 'react';
import {motion} from "framer-motion";
import styles from './CategoryCard.module.scss'
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";


export const CategoryCard: FC<{svg: string, name: string, id: number}> = forwardRef(({svg, name, id}, ref) => {
    const [isActive, setIsActive] = useState(false)
    const router = useRouter()

    useEffect(() => {
        // @ts-ignore
        if(router.query.id == id) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [router.query.id])
    return (
        // @ts-ignore
            <div ref={ref}>
                <Link href={`/catalog/${id}`} scroll={false}>
                    <div className={`${styles.category_card} ${isActive ? styles.active : ''}`}>
                        <div className={styles.category_card__image}>
                            <Image src={svg} alt={'company'} />
                        </div>
                        <div className={styles.category_card__line} />
                        <div className={styles.category_card__name}>
                            <h4>{name}</h4>
                        </div>
                    </div>
                </Link>
            </div>
    );
});

CategoryCard.displayName = 'CategoryCard'

export const MCategoryCard = motion(CategoryCard)

MCategoryCard.displayName = 'MCategoryCard'