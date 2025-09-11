'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatNumber } from "@/app/utilities";
import Chart from "@/app/components/chart";
import { useState, useEffect } from "react";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { Wager } from "@/app/types/wager";

import { CHART_DATA } from "@/app/constants";
import { getUser } from "@/app/api/services/user_service";
import { getLatestBets } from "@/app/api/services/bet_service";
import { User } from "@/app/types/user";

export default function Profile({
		params,
	}: {
		params: Promise<{ username: string }>
	}) {

    const { username } = React.use(params);
    const [user, setUser] = useState({} as User);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [wagers, setWagers] = useState([] as Wager[]);

    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                const user = await getUser(username);
                setUser(user);
            } catch (error) {
                console.error('Failed to fetch user:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        async function fetchLatestBets() {
            try {
                const wagers = await getLatestBets(username);
                setWagers(wagers);
            } catch (error) {
                console.error('Failed to fetch latest bets:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
        fetchLatestBets();
    }, [username]);

    const wageredPoints = 750000;
    const availablePoints = user.balance;
    const totalPoints = wageredPoints + availablePoints;

    const wageredPointsText = formatNumber(wageredPoints, 2);
    const availablePointsText = formatNumber(availablePoints, 2);
    const totalPointsText = formatNumber(totalPoints, 2);

    if(loading) {
        return (
            <div className="flex flex-col gap-2 items-center">
                <FaRegHourglassHalf className="text-5xl"/>
                <p className="text-3xl">Loading {username}&apos;s profile...</p>
            </div>
        );
    }

    if(error) {
        return (
            <div className="flex flex-col gap-2 items-center">
                <MdError className="text-5xl"/>
                <p className="text-3xl">There was an error loading {username}&apos;s profile.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 w-7/8 lg:w-1/2 mx-auto my-10">
            <div className="flex flex-row justify-between *:items-center rounded-lg bg-secondary-bg">
                <p className="p-4">PFP</p>
                <p className="text-3xl w-full py-4">{username}</p>
            </div>
            <div className="flex flex-col gap-4 bg-secondary-bg rounded-lg p-4">
                <p className="text-3xl">Balance</p>
                <div className="flex flex-col md:flex-row justify-between gap-4 *:items-center *:rounded-lg *:bg-ternary-bg *:p-4 *:w-full">
                    <div className="flex flex-col gap-2">
                        <p>Total points: </p>
                        <p className="text-2xl font-bold">${totalPointsText}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Wagered points: </p>
                        <p className="text-2xl font-bold">${wageredPointsText}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Available points: </p>
                        <p className="text-2xl font-bold">${availablePointsText}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 bg-secondary-bg rounded-lg">
                <p className="text-3xl p-4">History</p>
                <div className="p-0 sm:p-4 h-50 sm:h-100">
                    <Chart className="mx-auto" color="#FFFFFF" data={CHART_DATA}/>
                </div>
            </div>
            <div className="flex flex-col gap-4 bg-secondary-bg rounded-lg p-4">
                <p className="text-3xl">Latest bets</p>
                <div className="flex flex-col gap-2">
                    {showLatestWagers(wagers)}
                </div>
                <Link href={`/profile/${username}/bets`} className="w-fit pl-4 text-link hover:underline">View complete history</Link>
            </div>
        </div>
    );
}

function showLatestWagers(wagers : Wager[]) {
    const latestWagers = [] as React.ReactNode[];

    wagers.forEach((wager, key) => {
        const isPending = wager.betWin === 0;
        const hasWon = wager.betWin > 0;

        const color = hasWon ? "text-green-400" : "text-red-400";
        const symbol = hasWon ? "+" : "-";
        const text = symbol + "$" + formatNumber(Math.abs(wager.betWin), 2);

        latestWagers.push(
            <div key={key} className="flex flex-row justify-between gap-3 p-2 hover:[&>div_a_h3]:line-clamp-4 hover:bg-ternary-bg rounded-md duration-200 ease-in-out items-center">
                <div className="w-2/3">
                    <Link href={`/bet/${wager.betQuestionId}`} className="flex items-center justify-start w-fit">
                        <Image src="/coin.png" width={100} height={100} alt="Bet Image" className="w-8 h-8 rounded-full mr-2" />
                        <h3 className="line-clamp-2 sm:line-clamp-1">{wager.betQuestion}</h3>
                    </Link>
                </div>
                <div className="w-1/3 font-bold text-right items-end">
                    {
                        isPending ? 
                        <div className="flex flex-row space-x-1 w-fit ml-auto"><FaRegClock className="inline my-auto size-5"/><p className="w-1/3 font-bold text-right whitespace-nowrap">In progress</p></div> :
                        <p className={`${color}`}>{text}</p>
                    }
                </div>
            </div>
        );
        
    });

    return latestWagers;
}