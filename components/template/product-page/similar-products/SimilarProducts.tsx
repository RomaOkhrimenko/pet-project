import React, {FC, useEffect, useState} from 'react';
import {motion} from "framer-motion";

import styles from './SimilarProducts.module.scss'
import {MProductCard} from "../../cards/product-card/ProductCard";
import Button from "../../../ui/Button";
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";
import {IProduct} from "../../../../assets/types/IProduct";
import {useRouter} from "next/router";

interface IProps {
    products: IProduct[]
}

const SimilarProducts: FC<IProps> = ({products}) => {
    const [similarProduct, setSimilarProduct] = useState<IProduct[] | []>([])

    const router = useRouter()

    const onClick = () => {
        router.push(`/catalog/${products[0].category_id}`)
    }

    useEffect(() => {
        products.splice(4)
        setSimilarProduct(products)
    }, [])

    return (
        <div className={styles.similar_products}>
            <motion.h2 whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityXMinusVariant} className={styles.similar_products__title}>Схожі товари</motion.h2>
            <div className={styles.similar_products__container}>
                {similarProduct && similarProduct.map(item => {
                    return <MProductCard key={item.name} whileInView={'visible'} product={item} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} />
                })}
            </div>
            <motion.div whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} className={styles.similar_products__button}>
                <Button onClick={onClick}>Дивитися каталог</Button>
            </motion.div>
        </div>
    );
};

export default SimilarProducts;