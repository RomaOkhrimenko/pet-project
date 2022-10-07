import React from 'react';
import Banner from "../template/cart-page/Banner/Banner";
import PlacingOrder from "../template/cart-page/placing-order/PlacingOrder";
import Products from "../template/cart-page/Products/Products";

const CartPage = () => {
    return (
        <div>
            <Banner />
            <PlacingOrder />
            <Products />
        </div>
    );
};

export default CartPage;