import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return(
        <footer className="p-4 bg-secondary-bg rounded-t-3xl">
            <div className="pl-5 pt-5">
                <h1 className="text-2xl font-bold">TwitchBets</h1>
                <div className="flex flex-row opacity-60">
                    <FaRegCopyright className="size-3 mr-1 my-auto" />
                    <p className="text-sm">All rights reserved</p>
                </div>
            </div>
            <div className="flex items-center justify-between gap-2 columns-3 divide-neutral-300 divide-x-1 *:h-full">
                <div className="flex flex-col gap-4 w-full p-4">
                    <div className="flex flex-row gap-4 justify-between px-10 py-5">
                        <ul className="flex flex-col items-start justify-center gap-4 whitespace-nowrap text-l font-bold">
                            <li>Your profile</li>
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
                        <ul className="flex flex-col items-start justify-center gap-4 whitespace-nowrap text-l font-bold">
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                        </ul>
                        <ul className="flex flex-col items-start justify-center gap-4 whitespace-nowrap text-l font-bold">
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                            <li>More pages</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row gap-10 p-10">
                    <ul className="flex flex-col gap-4 whitespace-nowrap text-l font-bold my-auto">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                    <ul className="flex flex-col gap-4 whitespace-nowrap text-l font-bold my-auto">
                        <li>More links</li>
                        <li>More links</li>
                        <li>More links</li>
                        <li>More links</li>
                    </ul>
                </div>
                <div className="flex flex-col p-10">
                    <div className="flex flex-col items-center gap-6 whitespace-nowrap text-l **:size-7 my-auto">
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
            </div>
        </footer>
    );
}