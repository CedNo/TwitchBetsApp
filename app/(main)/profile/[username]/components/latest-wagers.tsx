import Link from "next/link";
import Image from "next/image";
import { Wager } from "@/app/types/wager";
import { formatNumber } from "@/app/utilities";
import { FaRegClock } from "react-icons/fa";

export default function LatestWagers({ wagers }: { wagers: Wager[] }) {
    
    const latestWagers = [] as React.ReactNode[];

    wagers.forEach((wager, key) => {
        const isPending = wager.betWin === 0;
        const hasWon = wager.betWin > 0;

        const amountWagered = formatNumber(wager.amount, 2);

        const color = hasWon ? "text-green-400" : "text-red-400";
        const symbol = hasWon ? "+" : "-";
        const amountAfterResolution = symbol + "$" + formatNumber(Math.abs(wager.betWin), 2);

        latestWagers.push(
            <div key={key} className="flex flex-row justify-between gap-3 p-2 hover:[&>div_a_h3]:line-clamp-4 hover:bg-ternary-bg rounded-md duration-200 ease-in-out items-center">
                <div className="w-1/2">
                    <Link href={`/bet/${wager.betQuestionId}`} className="flex items-center justify-start w-fit">
                        <Image src="/coin.png" width={100} height={100} alt="Bet Image" className="w-8 h-8 rounded-full mr-2" />
                        <h3 className="line-clamp-2 sm:line-clamp-1">{wager.betQuestion}</h3>
                    </Link>
                </div>
                <div className="w-1/6 text-center text-yellow-400">
                    <p className="font-bold">${amountWagered}</p>
                </div>
                <div className="w-1/3 font-bold text-right items-end">
                    {
                        isPending ? 
                        <div className="flex flex-row space-x-1 w-fit ml-auto"><FaRegClock className="inline my-auto size-5"/><p className="text-right whitespace-nowrap">In progress</p></div> :
                        <p className={`${color}`}>{amountAfterResolution}</p>
                    }
                </div>
            </div>
        );
        
    });

    return latestWagers;
}