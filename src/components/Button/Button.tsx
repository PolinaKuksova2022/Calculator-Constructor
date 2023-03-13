import React from 'react';
import '../Style/main.scss';

export interface ButtonProps{
    children: string | number;
    onClick: () => void;
    type: string;
}

export const Button = ({ type, onClick, children}: ButtonProps) => {
    return <button 
            className={type} 
            onClick={onClick}
            >
        {children}
    </button>;
}