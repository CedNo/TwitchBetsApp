import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick, disabled }) => {
    return (
        <button className={`btn ${className || ''} cursor-pointer`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;