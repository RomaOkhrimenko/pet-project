import React, {FC} from 'react';
import vodka from '../../../../public/images/svg/vodka-category.svg'
import rom from '../../../../public/images/svg/rom-category.svg'
import cognac from '../../../../public/images/svg/cognac-category.svg'
import spirt from '../../../../public/images/svg/spirt-category.svg'
import brendi from '../../../../public/images/svg/brendi-category.svg'

// @ts-ignore
import styles from './Category.module.scss'
import {MCategoryCard} from "../../cards/category-card/CategoryCard";
import {opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";
import {IProduct} from "../../../../assets/types/IProduct";

const categoryData = [
    {image: vodka, name: 'Горілка', id: 2},
    {image: spirt, name: 'Вино', id: 3},
]

interface ICategories {
    image: string,
    name: string,
    id: number
}

interface IProps {
    products: IProduct[]
}

const Category: FC = () => {
    return (
        <div className={styles.category}>
            {categoryData.map((category:ICategories ) => <MCategoryCard key={category.name} initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} id={category.id} svg={category.image} name={category.name} />)}
        </div>
    );
};

export default React.memo(Category);