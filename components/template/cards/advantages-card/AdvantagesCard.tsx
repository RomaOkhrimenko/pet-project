import React, {FC, ReactNode, forwardRef} from 'react';
import {motion} from "framer-motion";

import styles from './AdvantagesCard.module.scss'

interface IProps {
    svg: ReactNode
    text: string
}

export const AdvantagesCard: FC<IProps> = forwardRef(({svg, text}, ref) => {
    return (
        // @ts-ignore
        <div ref={ref} className={styles.advantages_card}>
            {svg}
            <span>{text}</span>
        </div>
    );
});


export const MAdvantagesCard = motion(AdvantagesCard)