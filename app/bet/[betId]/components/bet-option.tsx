import Button from "@/app/components/button";
import type { BetOption } from "@/app/types/bet";
import { CiDollar } from "react-icons/ci";

export default function BetOption({ option } : { option : BetOption }) {
    return (
        <div className="flex flex-row justify-between hover:bg-secondary-bg p-3 rounded-lg duration-200 ease-in-out">
            <div className="flex flex-col gap-1">
                <p className="font-bold text-xl">{option.option}</p>
                <div className="flex flex-row items-center gap-1 opacity-75">
                    <CiDollar/>
                    <p className="text-sm">${option.amount.toLocaleString()}</p>
                    </div>
            </div>
            <p className="font-bold text-3xl content-center">{option.odds * 100}%</p>
            <Button className="bg-green-600 rounded px-6 hover:bg-green-500 duration-200 ease-in-out">Buy</Button>
        </div>
    );
}