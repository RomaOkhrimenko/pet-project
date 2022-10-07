export const opacityYVariant = {
    visible: (i:number) => ({
        opacity: 1,
        translateY: 0,
        transition: {delay: i * 0.2, duration: 0.4}
    }),
    hidden: {
        opacity: 0,
        translateY: 20
    }
}

export const opacityXPlusVariant = {
    visible: (i: number) => ({
        opacity: 1,
        translateX: 0,
        whileInView: true,
        transition: {delay: i * 0.2, duration: 0.4}
    }),
    hidden: {
        opacity: 0,
        translateX: 20
    }
}

export const opacityXMinusVariant = {
    visible: (i: number) => ({
        opacity: 1,
        translateX: 0,
        whileInView: true,
        transition: {delay: i * 0.2, duration: 0.4}
    }),
    hidden: {
        opacity: 0,
        translateX: -20
    }
}