import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={`btn ${className || ''} cursor-pointer`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;