'use client';

import BetCard from "@/app/components/bet-card";
import { getEndingBetQuestions } from "@/app/api/services/bet_service";
import { BetQuestion } from "@/app/types/bet-question";
import { useState, useEffect } from "react";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import PlaceholderBetCard from "@/app/components/placeholder-bet-card";
import CreateNewBetCard from "@/app/components/create-new-bet-card";
import { getUsername } from '@/app/api/services/cookies_service';

export default function EndingBetQuestions() {
  
  const [endingBetQuestions, setEndingBetQuestions] = useState({} as BetQuestion[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchEndingBetQuestions() {
        try {
            setLoading(true);
            setUsername(await getUsername());
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

  let heightClass = '';

  if(betCards.length < 12) {
    let nbrCardsToAdd = 11 - betCards.length;

    if(betCards.length < 8) {
      nbrCardsToAdd = 7 - betCards.length;
      heightClass = 'lg:h-88';
    }

    if(username === "") {
      nbrCardsToAdd += 1;
    } else {
      const createNewBetCard = <CreateNewBetCard key="create-new-bet-card" />;
      betCards.push(createNewBetCard);
    }

    const emptyCards = Array.from({ length: nbrCardsToAdd }, (_, index) => (
      <PlaceholderBetCard key={betCards.length + index}></PlaceholderBetCard>
    ));
    betCards.push(...emptyCards);
  }

  const className = `w-full h-132 ${heightClass} overflow-hidden flex items-center justify-center flex-wrap`;

  return (
    <div className="my-10 sm:w-3/4 w-5/6 m-auto">
      <p className="my-4 font-bold text-2xl">Ending bet questions</p>
      <div className='rounded-lg p-4 bg-ternary-bg'>
        <div className={className}  >
          {betCards}
        </div>
      </div>
    </div>
  );
}