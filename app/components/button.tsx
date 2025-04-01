import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <button className={`btn ${className || ''}`}>
            {children}
        </button>
    );
};

export default Button;