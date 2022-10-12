import React, {FC, useEffect, useState} from 'react';
import {motion} from "framer-motion";

import Banner from "../template/product-page/Banner/Banner";
import Product from "../template/product-page/product/Product";
import ProductDescription from "../template/product-page/product-description/ProductDescription";
import SimilarProducts from "../template/product-page/similar-products/SimilarProducts";
import {opacityYVariant} from "../../constants/animation-variants/opacityVariant";
import {IProduct} from "../../assets/types/IProduct";

interface IProps {
    product: IProduct,
    productCategories: IProduct[]
}

const ProductsPage: FC<IProps> = ({productCategories, product}) => {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        setProducts(productCategories.filter(item => item.slug !== product.slug))
        console.log(products)
    }, [])
    return (
        <div>
            <Banner category={product.category} image={product.product_banner_img} />
            <div className={'container'}>
                <motion.span whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} className={'location'}>Головна—Каталог товарів—{product.category}</motion.span>
                <Product product={product} />
                <ProductDescription description={product.description} />
                {products.length ? <SimilarProducts products={products} /> : null}
            </div>
        </div>
    );
};

export default ProductsPage;