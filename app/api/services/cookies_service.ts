'use server';

import { cookies } from 'next/headers';

export async function getCookie(name: string) {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value;
}

export async function setCookie(name: string, value: string, options?: { path?: string; maxAge?: number, httpOnly?: boolean, host?: string, sameSite?: 'strict' | 'lax' | 'none' , secure?: boolean, hostOnly?: boolean }) {
    const cookieStore = await cookies();
    cookieStore.set(name, value, options);
}

export async function getUsername() : Promise<string> {
    const loggedInUsername = await getCookie('username');
    return loggedInUsername ? loggedInUsername : "";
}