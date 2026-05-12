import { API } from "../api";
import { getUsername, removeCookie } from "./cookies_service";

export async function verifyOptimisticAuthentication() : Promise<boolean> {
    const loggedInUsername = await getUsername();
    return !!loggedInUsername;
}

export async function verifySecureAuthentication() : Promise<boolean> {
    try {
        const response = await API.post('/players/session', {}, {withCredentials: true});
        
        if(response.status === 200) {
            return true;
        }

        await removeSessionCookies();

        return false;
        
    } catch (error) {
        console.error('Error verifying session:', error);
        
        await removeSessionCookies();

        return false;
    }
}

export async function removeSessionCookies() {
    await removeCookie('username', 'localhost', '/');
    await removeCookie('JSESSIONID', 'localhost', '/');
}