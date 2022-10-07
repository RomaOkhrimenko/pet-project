import React from 'react';

// @ts-ignore
import styles from './ReviewsSlider.module.scss'
import ReviewsSlide from "./reviews-slide/ReviewsSlide";

const ReviewsSlider = () => {
    return (
        <div className={`${styles.reviews_slider} reviews_slider`}>
            <ReviewsSlide />
            <ReviewsSlide />
            <ReviewsSlide />
            <ReviewsSlide />
            <ReviewsSlide />
            <ReviewsSlide />
        </div>
    );
};

export default ReviewsSlider;