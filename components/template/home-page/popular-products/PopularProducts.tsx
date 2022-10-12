import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";

import styles from './PopularProducts.module.scss'
import {MProductCard} from "../../cards/product-card/ProductCard";
import Button from "../../../ui/Button";
import {opacityXMinusVariant} from "../../../../constants/animation-variants/opacityVariant";
import {IProduct} from "../../../../assets/types/IProduct";
import {useRouter} from "next/router";

const animateProduct = {
    visible: (i: number) => ({
        translateY: 0,
        opacity: 1,
        transition: {
            delay: i * 0.2,
            duration: 0.5
        }
    }),
    hidden: {
        translateY: 40,
        opacity: 0
    }
}

interface IProps {
    products: IProduct[]
}

const PopularProducts = ({products}: IProps): JSX.Element => {
    const [popularProduct, setPopularProduct] = useState<IProduct[] | []>([])
    const router = useRouter()
    const onClick = () => {
        router.push('/catalog/2')
    }

    useEffect(() => {
        products.splice(4)
        setPopularProduct(products)
    }, [])

    return (
        <motion.div className={styles.popular_products}>
            <motion.h3 whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityXMinusVariant} className={styles.popular_products__title}>Популярні продукти</motion.h3>
            <div className={styles.popular_products__container}>
                {popularProduct && popularProduct.map((item) => {
                    return <MProductCard key={item.name} product={item} variants={animateProduct} whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} />
                })}
            </div>

            <motion.div variants={opacityXMinusVariant} whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.5, once: true}} className={styles.popular_products__button_container}>
                <Button onClick={onClick} className={styles.popular_products__button}>Дивитися каталог</Button>
            </motion.div>
        </motion.div>
    );
};

export default React.memo(PopularProducts);