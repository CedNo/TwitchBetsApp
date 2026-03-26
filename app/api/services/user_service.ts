import axios from 'axios';
import { API_BASE_URL } from '@/app/api/constants';
import { User } from '@/app/types/user';
import { UserCreation } from '@/app/types/user_creation';

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUser = async (username: string) => {
    try {
        const response = await API.get(`/players/${username}`);
        const user: User = response.data;
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const createUser = async (userCreationData: UserCreation) => {
    try {
        await API.post('/players', userCreationData);
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
