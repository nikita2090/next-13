import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

export const Field: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    className,
    ...props
}) => <input {...props} className={cn(styles.root, className)} />;
