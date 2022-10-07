import React from 'react';
import vodka from '../../../../public/images/svg/vodka-category.svg'
import rom from '../../../../public/images/svg/rom-category.svg'
import cognac from '../../../../public/images/svg/cognac-category.svg'
import spirt from '../../../../public/images/svg/spirt-category.svg'
import brendi from '../../../../public/images/svg/brendi-category.svg'

// @ts-ignore
import styles from './Category.module.scss'
import {MCategoryCard} from "../../cards/category-card/CategoryCard";
import {opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

const categoryData = [
    {image: vodka, name: 'Горілка'},
    {image: rom, name: 'Ром'},
    {image: cognac, name: 'Коньяк'},
    {image: spirt, name: 'Спирт'},
    {image: brendi, name: 'Бренді'},
]

interface ICategories {
    image: string,
    name: string}

const Category = () => {
    return (
        <div className={styles.category}>
            {categoryData.map((category:ICategories ) => <MCategoryCard initial={'hidden'} whileInView={'visible'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} svg={category.image} name={category.name} />)}
        </div>
    );
};

export default Category;