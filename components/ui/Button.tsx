import React, {FC, ReactNode} from 'react';

interface IButton {
    className?: string,
    onClick?: () => void,
    children?: ReactNode
}

const Button: FC<IButton> = ({className, onClick, children}) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;