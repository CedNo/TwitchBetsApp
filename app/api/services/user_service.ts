import axios from 'axios';
import { API_BASE_URL } from '@/app/api/constants';
import { User } from '@/app/types/user';
import { UserCreation } from '@/app/types/user_creation';
import { getCookie, setCookie } from './cookies_service';

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
        await API.post('/players/create', userCreationData);
        return true;
    } catch (error) {
        console.error('Error creating user:', error);
        return false;
    }
};

export const loginUser = async (username: string, password: string) => {
    try {
        await API.post('/players/login', { username, password }, {withCredentials: true});

        const sessionId = await getCookie('JSESSIONID');
        await setCookie('JSESSIONID', sessionId?.toString() || '', { path: '/', maxAge: 60 * 60 * 24, httpOnly: true });
        await setCookie('username', username, { path: '/', maxAge: 60 * 60 * 24 });

        return true;
    } catch (error) {
        console.error('Error logging in user:', error);
        return false;
    }
};
