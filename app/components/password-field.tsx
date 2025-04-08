'use client'

import { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

export default function PasswordField({ className, value, placeholder, onChange } : { className? : string, value : string, placeholder? : string, onChange? : (a : string) => void }) {

    const eye = <FaEye className="absolute mr-10" size={25}/>;
    const eyeOff = <FaEyeSlash className="absolute mr-10" size={25}/>;

    const [password, setPassword] = useState(value);
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
    }

    function onPasswordChange(inputValue : string) {
        value = inputValue;
        onChange?.(inputValue);
        setPassword(inputValue);
    }
    
    return (
        <div className="flex items-center">
            <input
                className={`${className} w-full pr-8 border p-2 rounded-md focus:outline-none focus:border-secondary-button-hover`}
                type={type}
                name="password"
                placeholder={ placeholder ?? "Password"}
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                autoComplete="current-password"
            />
            <span className="flex justify-around h-[25px]" onClick={handleToggle}>
                {icon}
            </span>
        </div>
    );
}