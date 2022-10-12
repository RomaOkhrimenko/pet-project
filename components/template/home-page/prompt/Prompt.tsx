import React from 'react';
import {motion} from "framer-motion";

import styles from './Prompt.module.scss'
import {MPromptBlock} from "./prompt-block/PromptBlock";
import {opacityXMinusVariant, opacityYVariant} from "../../../../constants/animation-variants/opacityVariant";

const Prompt = () => {
    return (
        <div  className={styles.prompt}>
            <div>
                <motion.h2 whileInView={'visible'} initial={'hidden'} viewport={{once: true}} variants={opacityYVariant} className={styles.prompt__title}>Як обрати алкогольні напої до святкової події?</motion.h2>
                <motion.p  whileInView={'visible'} initial={'hidden'} viewport={{once: true}} variants={opacityXMinusVariant} className={styles.prompt__text}>Який напій Ви хотіли б обрати до святкового столу залежить в більшості від Ваших вподобань та смаків гостей, але важливо не забувати прості правила підбору напоїв, щоб не зіпсувати його смак. Бо навіть якісний алкоголь може смакувати не виграшно із деякими продуктами.</motion.p>
            </div>
                <motion.div className={styles.prompt_block_container}>
                <MPromptBlock whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} img={'./images/png/prompt1.png'} text={
                    <p>
                    <b>Міцні напої</b> потребують дуже пильного підбору закуски. Ці напої, як правило, вживаються після їжі.
                    До прикладу, найкраща закуска <b>до коньяку</b> - це будь-який сорт твердого сиру. Коньяк розкриває свій смак разом із кавою, якщо його пити не поспішаючи.
                    </p>
                } />
                <MPromptBlock whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} img={'./images/png/prompt2.png'} text={
                    <p>
                        <b>Горілка</b> має різкий і неприємний смак, тому обираючи закуску требя орієнтуватися натакі продукти, які здатні перебити неприємний післясмак, що виникає після напою. Це або гаряча поживна їжа, або солення або мариновані гриби та помідори, цитрусові, цибуля або квашена капуста.
                    </p>
                } />
                <MPromptBlock whileInView={'visible'} initial={'hidden'} viewport={{amount: 0.2, once: true}} variants={opacityYVariant} img={'./images/png/prompt3.png'} text={
                    <p>
                        <b>Віскі</b> - це напій, який не обов’язково потребує закуски. Але, зрозуміло, що практично завжди добрі друзі та знайомі збираючись за столом або у закладі замовляють якісь страви . Якщо у Вас постає питання як не прогадати з вибором, то буде добре смакувати сьомга, запечене м’ясо, устриці.
                    </p>
                } />
            </motion.div>
        </div>
    );
};

export default React.memo(Prompt);