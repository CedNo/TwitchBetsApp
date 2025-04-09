import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer({ hideLinks=false } : { hideLinks? : boolean }) {
    return(
        <footer className="p-4 bg-secondary-bg rounded-t-3xl">
            <div className="pl-5 pt-5">
                <h1 className="text-2xl font-bold">TwitchBets</h1>
                <div className="flex flex-row opacity-60">
                    <FaRegCopyright className="size-3 mr-1 my-auto" />
                    <p className="text-sm">All rights reserved</p>
                </div>
            </div>
            <div className={`${hideLinks ? 'hidden' : '' } flex flex-col sm:flex-row items-center justify-between gap-2 divide-foreground divide-y-1 sm:divide-y-0 sm:divide-x-1 *:h-full`}>
                <div className="w-full flex flex-row gap-10 p-10 justify-around">
                        <ul className=" flex flex-col items-start justify-center gap-4 whitespace-nowrap text-l font-bold">
                            <li><Link href={"/profile"}>Your profile</Link></li>
                            <li>Browse</li>
                            <li>Stats</li>
                            <li>Learn</li>
                        </ul>
                        <ul className="flex flex-col items-start justify-center gap-4 whitespace-nowrap text-l font-bold">
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                        </ul>
                        <ul className="hidden lg:flex flex-col items-start justify-center gap-4 whitespace-nowrap text-l font-bold">
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                        </ul>
                        <ul className="hidden lg:flex flex-col items-start justify-center gap-4 whitespace-nowrap text-l font-bold">
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                        </ul>
                </div>
                <div className="flex flex-row gap-10 p-10 w-full sm:w-fit justify-around">
                    <ul className="flex flex-col gap-4 whitespace-nowrap text-l font-bold my-auto">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                    <ul className="flex sm:hidden lg:flex flex-col gap-4 whitespace-nowrap text-l font-bold my-auto">
                        <li>More links</li>
                        <li>More links</li>
                        <li>More links</li>
                        <li>More links</li>
                    </ul>
                </div>
                <div className="flex flex-row sm:flex-col items-center gap-6 whitespace-nowrap text-l **:size-7 my-auto p-10">
                    <Link href={'https://github.com/CedNo/TwitchBetsApp'}>
                        <BsTwitterX />
                    </Link>
                    <Link href={'https://github.com/CedNo/TwitchBetsApp'}>
                        <FaDiscord />
                    </Link>
                    <Link href={'https://github.com/CedNo/TwitchBetsApp'}>
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </footer>
    );
}