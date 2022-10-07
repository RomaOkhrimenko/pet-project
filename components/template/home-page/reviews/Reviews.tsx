import React from 'react';

import styles from './Reviews.module.scss'
import ReviewsSlider from "../../sliders/reviews-slider/ReviewsSlider";

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <div className='container'>
                <h2 className={styles.reviews__title}>Що говорять про нас клієнти</h2>
                <ReviewsSlider />
            </div>

        </div>
    );
};

export default Reviews;