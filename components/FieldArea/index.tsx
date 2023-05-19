import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

export const FieldArea: React.FC<InputHTMLAttributes<HTMLTextAreaElement>> = ({
    className,
    ...props
}) => <textarea {...props} className={cn(styles.root, className)} />;
