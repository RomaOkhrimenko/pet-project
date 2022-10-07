import React from 'react';
import Banner from "../template/CatalogPage/Banner/Banner";
import Category from "../template/CatalogPage/Category/Category";
import Products from "../template/CatalogPage/Products/Products";

const CatalogPage = () => {
    return (
        <div>
            <Banner />
            <div className={'container'}>
                <span className={'location'}>Головна—Каталог товарів</span>
                <Category />
                <Products />
            </div>
        </div>
    );
};

export default CatalogPage;