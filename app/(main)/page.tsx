'use client';

import BetCard from "@/app/components/bet-card";
import { getEndingBetQuestions } from "@/app/api/services/bet_service";
import { BetQuestion } from "@/app/types/bet-question";
import { useState, useEffect } from "react";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { MdError } from "react-icons/md";

export default function Home() {
  
  const [endingBetQuestions, setEndingBetQuestions] = useState({} as BetQuestion[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEndingBetQuestions() {
        try {
            setLoading(true);
            const endingBetQuestions = await getEndingBetQuestions(12);
            setEndingBetQuestions(endingBetQuestions);
        } catch (error) {
            console.error('Failed to fetch ending bet questions:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    fetchEndingBetQuestions();
  }, []);

  if(loading) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <FaRegHourglassHalf className="text-5xl"/>
            <p className="text-3xl">Loading ending bet questions...</p>
        </div>
    );
  }

  if(error) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <MdError className="text-5xl"/>
            <p className="text-3xl">There was an error loading ending bet questions.</p>
        </div>
    );
  }

  const betCards = endingBetQuestions.map((betQuestion, index) => (
    <BetCard key={index} betQuestion={betQuestion} />
  ));

  return (
    <div className='my-10 m-auto w-5/6 items-center justify-center flex columns-4 flex-wrap'>
      {betCards}
    </div>
  );
}
