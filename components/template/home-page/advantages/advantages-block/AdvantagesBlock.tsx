import React, {FC, forwardRef, ReactNode} from 'react';

import styles from './AdvantagesBlock.module.scss'
import {motion} from "framer-motion";

interface IProps {
    svg: ReactNode
    text: string
}



export const AdvantagesBlock: FC<IProps> = forwardRef((({svg, text}, ref) => {
    return (
        // @ts-ignore
        <div ref={ref} className={styles.advantages_block}>
            {svg}

            <span>{text}</span>
        </div>
    );
}))

AdvantagesBlock.displayName = 'AdvantagesBlock'

export const MAdvantagesBlock = motion(AdvantagesBlock)

MAdvantagesBlock.displayName = 'MAdvantagesBlock'