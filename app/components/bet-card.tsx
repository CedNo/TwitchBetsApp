import Image from "next/image";
import type { Bet } from "@/app/types/bet";
import Link from "next/link";

export default function BetCard({ bet }: { bet: Bet }) {
    return (
        <Link href={`/bet/${encodeURIComponent(bet.id)}`}>
            <div className="h-40 w-80 bg-secondary-bg rounded-lg flex flex-col items-center p-4 m-2 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
                <div className="flex items-center justify-start mb-2">
                    <Image src={bet.image} width={100} height={100} alt="Bet Image" className="w-8 h-8 rounded-full mr-2" />
                    <h3 className="text-sm font-bold line-clamp-2">{bet.title}</h3>
                </div>
                <div className="pb-2 flex flex-col overflow-y-scroll items-start w-full">
                    {
                        bet.betOptions.map((option, index) => (
                            <div key={index} className="flex flex-row items-center justify-between border-solid border-foreground border-1 w-full p-1 rounded-md mb-1 text-sm pl-2 pr-2">
                                <div>{option.option}</div>
                                <div>{option.odds}%</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Link>
    );
}