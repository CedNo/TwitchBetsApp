'use client'

import { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import InputField from './input-field';

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
            <InputField
                className={className}
                type={type}
                name="password"
                placeholder={ placeholder ?? "Password"}
                value={password}
                onChange={onPasswordChange}
                autoComplete="current-password"
            />
            <span className="flex justify-around h-[25px] cursor-pointer" onClick={handleToggle}>
                {icon}
            </span>
        </div>
    );
}