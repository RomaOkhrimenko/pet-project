import React, {FC, forwardRef, ReactNode} from 'react';

import styles from './PromptBlock.module.scss'
import Image from "next/image";
import {motion} from "framer-motion";

interface IProps {
    img: string | any
    text: ReactNode
}

export const PromptBlock: FC<IProps> = forwardRef(({img, text}, ref) => {
    return (
        // @ts-ignore
        <div ref={ref} className={styles.prompt_block}>
            <img src={img} alt={'prompt block'} />
            <div className={styles.prompt_block__text}>
                {text}
            </div>
        </div>
    );
});

PromptBlock.displayName = 'PromptBlock'

export const MPromptBlock = motion(PromptBlock)

MPromptBlock.displayName = '<PromptBlock'
