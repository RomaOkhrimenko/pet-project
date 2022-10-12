import React from 'react';
import HomePageBanner from "../template/home-page/banner/HomePageBanner";
import AdvantagesCards from "../template/home-page/about-cards/AdvantagesCards";
import About from "../template/home-page/about/About";
import PopularProducts from "../template/home-page/popular-products/PopularProducts";
import Prompt from "../template/home-page/prompt/Prompt";
import Advantages from "../template/home-page/advantages/Advantages";
import Purpose from "../template/home-page/purpose/Purpose";
import Gift from "../template/home-page/gift/Gift";
import Reviews from "../template/home-page/reviews/Reviews";
import {IProduct} from "../../assets/types/IProduct";

interface IProps {
    products: IProduct[]
}

const HomePage = ({products}: IProps): JSX.Element => {
    return (
        <div>
            <HomePageBanner />

            <div className={'container'}>
                <AdvantagesCards />
                <About />
                <PopularProducts products={products} />
                <Advantages />
            </div>
            {/*<Reviews />*/}
            <div className={'container'}>
                <Prompt />
            </div>
            <Purpose />
            <div className={'container'}>
                <Gift />
            </div>


        </div>
    );
};

export default HomePage;