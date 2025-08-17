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
        const response = await API.get<BetQuestion []>(`/bets/questions/ending?amount=${amount}`);
        const questions: BetQuestion[] = response.data;
        return questions;
    } catch (error) {
        console.error('Error fetching ending bet questions:', error);
        throw error;
    }
};

export const getBetQuestionById = async (betId: string) => {
    try {
        const response = await API.get<BetQuestion>(`/bets/questions/${betId}`);
        const question = response.data;

        return question;
    } catch (error) {
        console.error('Error fetching bet question by ID:', error);
        throw error;
    }
};