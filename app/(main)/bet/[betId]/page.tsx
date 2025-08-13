'use client'

import React from "react";
import Chart from "@/app/components/chart";
import BetOption from "@/app/(main)/bet/[betId]/components/bet-option";
import { FaRegClock } from "react-icons/fa"
import { FaRegHourglassHalf } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { useState, useEffect } from "react";

import { CHART_DATA } from "@/app/constants";
import { getBetQuestionById } from "@/app/api/services/bet_service";

import type { BetQuestion } from "@/app/types/bet-question";

export default function Bet({
		params,
	}: {
		params: Promise<{ betId: string }>
	}) {

    const { betId } = React.use(params);

	const [betQuestion, setBetQuestion] = useState({} as BetQuestion);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	
	useEffect(() => {
		async function fetchBetQuestionById() {
			try {
				setLoading(true);
				const betQuestion = await getBetQuestionById(betId);
				setBetQuestion(betQuestion);
			} catch (error) {
				console.error('Failed to fetch bet question:', error);
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchBetQuestionById();
	}, [betId]);

	if(loading) {
		return (
			<div className="flex flex-col gap-2 items-center">
				<FaRegHourglassHalf className="text-5xl"/>
				<p className="text-3xl">Loading bet question...</p>
			</div>
		);
	  }
	
	if(error) {
		return (
			<div className="flex flex-col gap-2 items-center">
				<MdError className="text-5xl"/>
				<p className="text-3xl">There was an error loading bet question.</p>
			</div>
		);
	}

	const betOptions = betQuestion.options.map((option, index) => (
		<BetOption key={index} option={option} />
	));

    return (
        <div className="flex flex-col justify-center gap-10 m-auto py-10 w-7/8 lg:w-1/2">
			<div className="flex flex-col gap-4">
				<h1 className='text-5xl'>{betQuestion.question}</h1>
				<div className="flex flex-row items-center gap-2 opacity-75 w-fit">
					<FaRegClock/>
					<p className="cursor-default">Ends on {betQuestion.endTime.toLocaleString()}</p>
				</div>
			</div>
			<div className="items-center rounded-lg bg-secondary-bg w-full h-50 p-0 sm:h-100 sm:p-5">
				<Chart className="mx-auto" color="#FFFFFF" data={CHART_DATA}/>
			</div>
			<div className="flex flex-col gap-3 border-t-1 border-t-primary-bg w-full pt-10">
				{betOptions}
			</div>
        </div>
    );
}