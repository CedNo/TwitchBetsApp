import axios from 'axios';
import { API_BASE_URL } from './constants';

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUser = async (username: string) => {
    try {
        const response = await API.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};