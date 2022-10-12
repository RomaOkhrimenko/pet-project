import React, {FC, ReactNode} from 'react';

interface IButton {
    className?: string,
    onClick?: () => void,
    children?: ReactNode,
    type?: 'submit' | 'button'
}

const Button: FC<IButton> = ({className, onClick, children, type= 'button'}) => {
    return (
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;