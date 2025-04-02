import React from 'react';
import Link from 'next/link';
import Button from './button';
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="items-center justify-between flex p-4 bg-zinc-800">
            <Link href={"/"}><div className="w-fit shrink-0 p-2 cursor-pointer flex items-center"><h1>TwitchBets</h1></div></Link> {/* Logo */}
            <div className="w-fit shrink-0 flex items-center justify-center gap-2">
                <Button className="hover:bg-sky-700 rounded px-2 py-1 cursor-pointer">Login</Button>
                <Button className="bg-sky-700 px-2 py-1 rounded hover:bg-sky-800 cursor-pointer">Sign Up</Button>
                <Button className="hover:bg-sky-700 rounded px-2 py-1 cursor-pointer"><IoMenu size={25}/></Button>
            </div>
        </div>
    );
}