import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/button';
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="items-center justify-between flex p-4 bg-secondary-bg">
            <Link href={"/"}><div className="w-fit shrink-0 cursor-pointer flex items-center font-bold"><h1 className='text-2xl'>TwitchBets</h1></div></Link> {/* Logo */}
            <div className="w-fit shrink-0 flex items-center justify-center gap-2 *:py-1 *:px-2 *:rounded">
                <Button className="hover:bg-secondary-button">Login</Button>
                <Button className="bg-secondary-button hover:bg-secondary-button-hover">Sign Up</Button>
                <Button className="hover:bg-secondary-button"><IoMenu size={25}/></Button>
            </div>
        </div>
    );
}