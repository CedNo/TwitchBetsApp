'use client'

import Button from "@/app/components/button";
import Link from "next/link";
import { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

export default function Login() {

    const eye = <FaEye className="absolute mr-10" size={25}/>;
    const eyeOff = <FaEyeSlash className="absolute mr-10" size={25}/>;

    const [password, setPassword] = useState("");
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

    return (
        <div className="px-4 md:px-0">
            <form className="w-full md:w-1/2 lg:w-5/16 flex flex-col gap-4 my-10 mx-auto bg-secondary-bg rounded-xl p-10 shadow-xl">
                <h1 className="text-3xl font-bold text-center pb-4">Welcome back!</h1>
                <input
                    className="p-2 border rounded-md w-full focus:outline-none focus:border-secondary-button-hover"
                    type="text"
                    placeholder="Username"
                />
                <div className="flex items-center">
                    <input
                        className="w-full pr-8 border p-2 rounded-md focus:outline-none focus:border-secondary-button-hover"
                        type={type}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <span className="flex justify-around h-[25px]" onClick={handleToggle}>
                        {icon}
                    </span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-3 h-3" />
                        Remember me
                    </label>
                    <Link className="text-blue-500 hover:underline" href="/">
                        Forgot password?
                    </Link>
                </div>
                <Button className="w-full p-2 rounded-md bg-secondary-button hover:bg-secondary-button-hover transition mx-auto">
                    Get Betting
                </Button>
                <div className="flex flex-row gap-2 *:my-auto">
                    <hr className="w-full opacity-15"></hr>
                    <p className="w-fit text-sm mx-auto opacity-75">or</p>
                    <hr className="w-full opacity-15"></hr>
                </div>
                <div className="flex gap-4 text-sm w-fit mx-auto">
                    <label>Don&apos;t have an account?</label>
                    <Link href="/" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
}