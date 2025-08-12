import axios from 'axios';
import { API_BASE_URL } from '@/app/api/constants';
import { BetQuestion } from '@/app/types/bet-question';

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getEndingBetQuestions = async (amount: number) => {
    try {
        const response = await API.get<{ betQuestion: BetQuestion }[]>(`/bets/questions/ending?amount=${amount}`);
  
        return response.data.map((wrapper) => {
            const question = wrapper.betQuestion;
            
            if (question.currentOddsOfOptions && typeof question.currentOddsOfOptions === 'object') {
                question.currentOddsOfOptions = new Map(Object.entries(question.currentOddsOfOptions));
            }
            
            return question;
        });
    } catch (error) {
        console.error('Error fetching ending bet questions:', error);
        throw error;
    }
};