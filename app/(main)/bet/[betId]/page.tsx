'use client'

import React from "react";
import BetChart from "@/app/components/chart";
import BetOption from "@/app/(main)/bet/[betId]/components/bet-option";
import { FaRegClock } from "react-icons/fa"

import { BETS } from "@/app/constants";
import { CHART_DATA } from "@/app/constants";

export default function Bet({
		params,
	}: {
		params: Promise<{ betId: string }>
	}) {

    const { betId } = React.use(params);

    const bet = BETS.find((bet) => bet.id === betId);

	if (!bet) {
		return 	<h1 className='text-5xl text-center mt-10'>
					<span className="opacity-50">404 | </span>Bet not found
				</h1>;
	}

	const betOptions = bet?.betOptions.map((option, index) => (
		<BetOption key={index} option={option} />
	));

    return (
        <div className="flex flex-col justify-center gap-10 m-auto py-10 w-7/8 lg:w-1/2">
			<div className="flex flex-col gap-4">
				<h1 className='text-5xl'>{bet?.title}</h1>
				<div className="flex flex-row items-center gap-2 opacity-75 w-fit">
					<FaRegClock/>
					<p className="cursor-default">Ends on {bet.endDate?.toLocaleString()}</p>
				</div>
			</div>
			<div className="items-center rounded-lg bg-secondary-bg w-full h-50 p-0 sm:h-100 sm:p-5">
				<BetChart className="mx-auto" color="#FFFFFF" data={CHART_DATA}/>
			</div>
			<div className="flex flex-col gap-3 border-t-1 border-t-primary-bg w-full pt-10">
				{betOptions}
			</div>
        </div>
    );
}