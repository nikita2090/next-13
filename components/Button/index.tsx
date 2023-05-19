import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <button {...rest} className={cn(styles.root, className)}>
            {children}
        </button>
    );
};
