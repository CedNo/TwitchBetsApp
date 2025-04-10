'use client'

import Image from "next/image";
import Link from "next/link";
import { formatNumber } from "@/app/utilities";
import BetChart from "@/app/components/chart";

import { BETS } from "@/app/constants";
import { CHART_DATA } from "@/app/constants";

export default function Profile() {

    const wageredPoints = 750000;
    const availablePoints = 2500000;
    const totalPoints = wageredPoints + availablePoints;

    const wageredPointsText = formatNumber(wageredPoints, 2);
    const availablePointsText = formatNumber(availablePoints, 2);
    const totalPointsText = formatNumber(totalPoints, 2);

    const betWins = [{betAmount: 1500, betWin: 0}, {betAmount: 300, betWin: 450}, {betAmount: 150000, betWin: 3204105}, {betAmount: 5163, betWin: 0}];

    return (
        <div className="flex flex-col gap-6 w-7/8 lg:w-1/2 mx-auto my-10">
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
                    <BetChart className="mx-auto" color="#FFFFFF" data={CHART_DATA}/>
                </div>
            </div>
            <div className="flex flex-col gap-4 bg-secondary-bg rounded-lg p-4">
                <p className="text-3xl">Your latest bets</p>
                <div className="flex flex-col gap-2">
                    {getLatestBets(betWins)}
                </div>
                <Link href={"/"} className="w-fit pl-4 text-blue-500 hover:underline">View complete history</Link>
            </div>
        </div>
    );
}

function getLatestBets(betWins : {betAmount : number, betWin : number}[]) {
    const latestBets = [];

    for (let i = 0; i < 4; i++) {
        const hasWon = betWins[i].betWin > 0;

        const color = hasWon ? "text-green-400" : "text-red-400";
        const winOrLostAmount = hasWon ? betWins[i].betWin : betWins[i].betAmount;
        const symbol = hasWon ? "+" : "-";
        const text = symbol + "$" + formatNumber(winOrLostAmount, 2);

        latestBets.push(
            <div key={i} className="flex flex-row justify-between gap-3 p-2 hover:[&>div_a_h3]:line-clamp-4 hover:bg-ternary-bg rounded-md duration-200 ease-in-out items-center">
                <div className="w-2/3">
                    <Link href={`/bet/${BETS[i].id}`} className="flex items-center justify-start w-fit">
                        <Image src={BETS[i].image} width={100} height={100} alt="Bet Image" className="w-8 h-8 rounded-full mr-2" />
                        <h3 className="line-clamp-2 sm:line-clamp-1">{BETS[i].title}</h3>
                    </Link>
                </div>
                <p className={`w-1/3 font-bold text-right ${color}`}>{text}</p>
            </div>
        );
        
    }

    return latestBets;
}