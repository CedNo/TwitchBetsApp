import axios from 'axios';
import { API_BASE_URL } from '@/app/api/constants';
import { User } from '@/app/types/user';

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUser = async (username: string) => {
    try {
        const response = await API.get(`/users/${username}`);
        const user: User = response.data;
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};