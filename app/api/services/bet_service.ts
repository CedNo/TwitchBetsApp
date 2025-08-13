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
            
            return question;
        });
    } catch (error) {
        console.error('Error fetching ending bet questions:', error);
        throw error;
    }
};

export const getBetQuestionById = async (betId: string) => {
    try {
        const response = await API.get<{ betQuestion: BetQuestion }>(`/bets/questions/${betId}`);
        const question = response.data.betQuestion;

        return question;
    } catch (error) {
        console.error('Error fetching bet question by ID:', error);
        throw error;
    }
};