import { API } from "../api";
import { User } from '@/app/types/user';
import { UserCreation } from '@/app/types/user_creation';
import { getCookie, setCookie } from './cookies_service';
import { AxiosError } from "axios";

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

export const loginUser = async (username: string, password: string) : Promise<number> => {
    try {
        await API.post('/players/login', { username, password }, {withCredentials: true});

        const sessionId = await getCookie('JSESSIONID');
        await setCookie('JSESSIONID', sessionId?.toString() || '', { path: '/', maxAge: 60 * 60 * 24, httpOnly: true });
        await setCookie('username', username, { path: '/', maxAge: 60 * 60 * 24 });

        return 200;
    } catch (error) {
        console.error('Error logging in user:', error);

        if (error instanceof AxiosError) {
            return error.response?.status || 500;
        }

        return 500;
    }
};
