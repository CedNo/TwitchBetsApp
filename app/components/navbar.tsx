'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';
import { IoMenu } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getUsername } from '../api/services/cookies_service';


export default function Navbar({ hideButtons=false } : { hideButtons? : boolean }) {
    const router = useRouter();

    const [username, setUsername] = useState("");

    useEffect(() => {
        getUsername().then(setUsername);
    }, [username]);

    return (
        <div className="items-center justify-between flex p-4 bg-secondary-bg">
            <Link href={"/"}><div className="w-fit shrink-0 cursor-pointer flex items-center font-bold"><h1 className='text-2xl'>TwitchBets</h1></div></Link> {/* Logo */}
            <div className={`${hideButtons ? 'hidden' : ''} w-fit shrink-0 flex items-center justify-center gap-2 [&>*]:[&>*]:py-1 [&>*]:[&>*]:px-2 [&>*]:[&>*]:rounded`}>
                <Link className={username ? 'hidden' : ''} href={"/login"}>
                    <Button className="hover:bg-secondary-button">Log In</Button>
                </Link>
                <Link className={username ? 'hidden' : ''} href={"/signup"}>
                    <Button className="bg-secondary-button hover:bg-secondary-button-hover">Sign Up</Button>
                </Link>
                <Link className={username ? '' : 'hidden'} href={`/profile/${username}`}>
                    <Button className="hover:bg-secondary-button">Profile</Button>
                </Link>
                <Link href={"/"}>
                    <Button className="hover:bg-secondary-button"><IoMenu size={25}/></Button>
                </Link>
            </div>
            <Button className={`${hideButtons ? '' : 'hidden'} cursor-pointer hover:bg-secondary-button rounded py-1 px-2`} onClick={router.back}>
                <IoMdArrowRoundBack size={25}/>
            </Button>
        </div>
    );
}