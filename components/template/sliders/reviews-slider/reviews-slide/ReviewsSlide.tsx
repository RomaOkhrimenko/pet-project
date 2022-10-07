import React from 'react';
import styles from "./ReviewsSlide.module.scss";

const ReviewsSlide = () => {
    return (
        <div className={styles.reviews_slider__slide}>
            <div className={styles.reviews_slider__slide_info}>
                <p>Потрібно було дуже оперативно організувати святковий обід, часу було обмаль і не було навіть уявлення що із напоїв повинно бути на столі, знайомий порадив відвідати сайт Best Drink. Дуже вдячний менеджерам за поради і за вчасну доставку. У мене залишилися самі найкращі враження.  Рекомендую</p>
                <span>Віталій</span>
            </div>
            <div className={styles.reviews_slider__slide_image}>
                <div></div>
            </div>
        </div>
    );
};

export default ReviewsSlide;