import { API } from "../api";
import { getUsername } from "./cookies_service";

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
        else {
            return false;
        }
        
    } catch (error) {
        console.error('Error verifying session:', error);
        return false;
    }
}