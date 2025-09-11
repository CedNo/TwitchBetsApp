import axios from 'axios';
import { API_BASE_URL } from '@/app/api/constants';
import { BetQuestion } from '@/app/types/bet-question';
import { Wager } from '@/app/types/wager';

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getEndingBetQuestions = async (amount: number) => {
    try {
        const response = await API.get<BetQuestion[]>(`/bets/questions/ending?amount=${amount}`);
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
        console.error('Error fetching bet question for id %s:', betId, error);
        throw error;
    }
};

export const getLatestBets = async (username: string, limit: number = 4) => {
    try {
        const response = await API.get<Wager[]>(`/bets/${username}/latest?limit=${limit}`);
        const bets: Wager[] = response.data;
        
        return bets;
    } catch (error) {
        console.error('Error fetching latest bets for user %s:', username, error);
        throw error;
    }
}