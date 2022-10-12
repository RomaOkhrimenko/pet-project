import React, {FC} from 'react';
import Banner from "../template/CatalogPage/Banner/Banner";
import Category from "../template/CatalogPage/Category/Category";
import Products from "../template/CatalogPage/Products/Products";
import {IProduct} from "../../assets/types/IProduct";

interface IProps {
    products: IProduct[]
}

const CatalogPage: FC<IProps> = ({products}) => {
    return (
        <div>
            <Banner />
            <div className={'container'}>
                <span className={'location'}>Головна—Каталог товарів</span>
                <Category />
                {products?.length ? <Products products={products} /> : <h2>Empty</h2>}
            </div>
        </div>
    );
};

export default CatalogPage;