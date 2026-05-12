import { verifySecureAuthentication } from '@/app/api/services/auth_middleware';
import React, { useEffect, useState } from 'react';
import { redirect } from "next/navigation";
import Loading from '../loading';

export default function UserProtectedRoute ({ children }: { children: React.ReactNode }) {

    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        async function verifyAuth() {
            try {
                setLoading(true);

                const isAuthenticated = await verifySecureAuthentication();
                setIsAuthenticated(isAuthenticated);
            } catch (error) {
                console.error('Error verifying authentication:', error);
                redirect('/login?mustLogin=true');
            } finally {
                setLoading(false);
            }
        }
        verifyAuth();
      }, []);

    if(loading) {
        return (
            <Loading text="Verifying authentication..." />
        )
    }
    else {
        if (!isAuthenticated) {
            redirect('/login?mustLogin=true');
        }
        else {
            return children;
        }
    }
}
