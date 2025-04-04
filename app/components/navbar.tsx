import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/button';
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="items-center justify-between flex p-4 bg-secondary-bg">
            <Link href={"/"}><div className="w-fit shrink-0 cursor-pointer flex items-center font-bold"><h1 className='text-2xl'>TwitchBets</h1></div></Link> {/* Logo */}
            <div className="w-fit shrink-0 flex items-center justify-center gap-2 [&>*]:py-1 [&>*]:px-2 [&>*]:rounded">
                <Button className="hover:bg-sky-700">Login</Button>
                <Button className="bg-sky-700 hover:bg-sky-800">Sign Up</Button>
                <Button className="hover:bg-sky-700"><IoMenu size={25}/></Button>
            </div>
        </div>
    );
}