import Image from "next/image";
import type { BetQuestion } from "@/app/types/bet-question";
import Link from "next/link";

export default function BetCard({ betQuestion }: { betQuestion : BetQuestion }) {

    const findOptionName = (key: string) => {
        const option = betQuestion.options.find(option => option.id === key);
        return option ? option.option : key;
    }

    return (
        <Link href={`/bet/${encodeURIComponent(betQuestion.id)}`}>
            <div className="h-40 w-80 bg-secondary-bg rounded-lg flex flex-col items-center p-4 m-2 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
                <div className="flex items-center justify-start mb-2 mr-auto">
                    <Image src='/coin.png' width={100} height={100} alt="Bet Image" className="w-8 h-8 rounded-full mr-2" />
                    <h3 className="text-sm font-bold line-clamp-2">{betQuestion.question}</h3>
                </div>
                <div className="pb-2 flex flex-col overflow-y-scroll items-start w-full">
                    {
                        Array.from(betQuestion.currentOddsOfOptions).map((option, index) => (
                            <div key={index} className="flex flex-row items-center justify-between border-solid border-foreground border-1 w-full p-1 rounded-md mb-1 text-sm pl-2 pr-2">
                                <div>{findOptionName(option[0])}</div>
                                <div>{option[1]}%</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Link>
    );
}