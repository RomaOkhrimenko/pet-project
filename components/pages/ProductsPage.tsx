import React from 'react';
import {motion} from "framer-motion";

import Banner from "../template/product-page/Banner/Banner";
import Product from "../template/product-page/product/Product";
import ProductDescription from "../template/product-page/product-description/ProductDescription";
import SimilarProducts from "../template/product-page/similar-products/SimilarProducts";
import {opacityYVariant} from "../../constants/animation-variants/opacityVariant";

const ProductsPage = () => {
    return (
        <div>
            <Banner />
            <div className={'container'}>
                <motion.span whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} className={'location'}>Головна—Каталог товарів—Ром</motion.span>
                <Product />
                <ProductDescription />
                <SimilarProducts />
            </div>
        </div>
    );
};

export default ProductsPage;